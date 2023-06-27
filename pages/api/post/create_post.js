import { db } from "../../../lib/db";
import formidable from "formidable";
import * as yup from "yup";

let formSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  tags: yup.array().required(),
});

async function saveFormData(fields, files) {
  console.log(fields);
  // save to persistent data store
  const post = await db.Post;

  post.create({
    title: fields.title,
    content: fields.content,
    tags: fields.tags,
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
  const form = formidable({ multiples: true });

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
      await saveFormData(cleanedFields, files);
      res.status(200).send({ status: "submitted" });
      return;
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

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function createPost(req, res) {
//   const post = await db.Post;

//   post.create({
//     title: req.body.title,
//     content: req.body.content,
//     tags: req.body.tags,
//   });

//   res.json({ success: "Posted created successfully." });
// }