import { db } from "../../../lib/db";
import formidable from "formidable";
import * as yup from "yup";

let formSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  ingredient: yup.array().of(yup.string()).required(),
  prep: yup.array().of(yup.string()).required(),
  prep_time: yup.string().required(),
  directions: yup.array().of(yup.string()).required(),
  cook_time: yup.string().required(),
  ingredients: yup.number(),
  dish_image: yup.string(),
});

const saveFormData = async (fields, files) => {
  const recipes = await db.Recipes;

  recipes.create({
    title: fields.title,
    description: fields.description,
    ingredient: fields.ingredient,
    prep: fields.prep,
    prep_time: fields.prep_time,
    directions: fields.directions,
    cook_time: fields.cook_time,
    ingredients: fields.ingredient.length,
    dish_image_path: files.dish_image ? files.dish_image[0].newFilename : undefined,
  });
};

async function validateFromData(fields, files) {
  try {
    await formSchema.validate({ ...fields, ...files });
    return true;
  } catch (e) {
    return false;
  }
}

const handlePostFormReq = async (req, res) => {
  const options = {
    multiples: true,
    uploadDir: "./public/uploads",
    keepExtensions: true,
  };
  const form = formidable(options);

  const formData = new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (!err) {
        resolve({ fields, files });
      } else {
        reject(`Failed to process form! ${err}`);
      }
    });
  });

  try {
    // const processForm = async (req, res) => {
    const { fields, files } = await formData;
    const isValid = await validateFromData(fields, files);
    if (!isValid) throw Error("invalid form schema");

    saveFormData(fields, files);
    res.status(200).json({ status: "new recipe created!" });
    return;
    //   }
  } catch (err) {
    res.status(500).send({ status: "invalid submission" });
  }
};

export default async function handler(req, res) {
  if (req.method == "POST") {
    await handlePostFormReq(req, res);
  } else {
    res.status(400).json({ status: "method not found" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
