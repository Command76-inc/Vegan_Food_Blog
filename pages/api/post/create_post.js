import { db } from "../../../lib/db";
import formidable from "formidable";
import * as yup from "yup";
import * as postHelper from "../../utility/post_helper";

let formSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  tags: yup.array().required(),
});

async function saveFormData(fields, files) {
  // save to persistent data store
  const post = await db.Post;

  post.create({
    headerImagePath: files.headerImage
      ? files.headerImage[0].newFilename
      : undefined,
    title: fields.title,
    content: fields.content,
    tags: fields.tags,
    description: fields.description,
  });
}

async function validateFromData(fields, files) {
  try {
    await formSchema.validate({ ...fields, ...files });
    return true;
  } catch (e) {
    return false;
  }
}

async function handlePostFormReq(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: "./public/uploads",
    keepExtensions: true,
  });

  const formData = new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      const cleanedFields = {};
      for (let value in fields) {
        if (value === "tags") {
          cleanedFields[value] = fields[value][0].split(",");
        } else {
          cleanedFields[value] = fields[value][0];
        }
      }

      cleanedFields.description = postHelper
        .sanitizeContent(fields.content[0])
        .slice(0, 500);

      if (err) {
        reject("error");
      }
      resolve({ cleanedFields, files });
    });
  });

  try {
    const { cleanedFields, files } = await formData;
    const isValid = await validateFromData(cleanedFields, files);
    if (!isValid) throw Error("invalid form schema");

    try {
      if (cleanedFields.description !== undefined) {
        await saveFormData(cleanedFields, files);
        res.status(200).send({ status: "new post created" });
        return;
      } else {
        res.status(500).send({
          status: "content body must not be empty, must have text in it.",
        });
        return;
      }
    } catch (e) {
      res.status(500).send({ status: "something went wrong" });
      return;
    }
  } catch (e) {
    res.status(400).send({ status: "invalid submission" });
    return;
  }
}

export default async function handler(req, res) {
  if (req.method == "POST") {
    await handlePostFormReq(req, res);
  } else {
    res.status(404).send("method not found");
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
