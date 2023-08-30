import { db } from "../../../lib/db";
import formidable from "formidable";
import * as yup from "yup";

let formSchema = yup.object().shape({
  title: yup.string(),
  description: yup.string(),
  ingredient: yup.array().of(yup.string()),
  prep: yup.array().of(yup.string()),
  prep_time: yup.string(),
  directions: yup.array().of(yup.string()),
  cook_time: yup.string(),
  ingredients: yup.number(),
  dish_image: yup.string(),
});

async function saveFormData(fields, files) {
  if (Object.keys(fields).length < 2) {
    return { status: "need fields to update in recipe." };
  }
  const recipes = await db.Recipes;

  const updatedRecipe = await recipes.findByIdAndUpdate(fields.id, {
    $set: {
      title: fields.title,
      description: fields.description,
      ingredient: fields.ingredient,
      prep: fields.prep,
      prep_time: fields.prep_time,
      directions: fields.directions,
      cook_time: fields.cook_time,
      // A total count of the ingredient array
      ingredients: fields.ingredients,
      // Points to an Amazon S3 bucket item URL
      dish_image_path: files.dishImage
        ? files.dishImage[0].newFilename
        : undefined,
    },
  });

  if (!updatedRecipe) {
    return { status: "failed to update recipe." };
  } else {
    return updatedRecipe;
  }
}

async function validateFormData(fields, files) {
  try {
    await formSchema.validate({ ...fields, ...files });
    return true;
  } catch (error) {
    return false;
  }
}

async function handleUpdatingSubmission(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: "./public/uploads",
    keepExtensions: true,
  });

  const formData = await new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });

  try {
    const { fields, files } = await formData;
    const isValid = await validateFormData(fields, files);
    if (!isValid) {
      throw Error({ status: "validation failed." });
    } else {
      const saved = await saveFormData(fields, files);
      if (Object.hasOwn(saved, "status")) {
        res.status(500).json(saved);
        return;
      } else {
        res.status(200).json({ status: "recipe updated." });
        return;
      }
    }
  } catch (err) {
    res.status(500).json({ status: "something went wrong." });
    return;
  }
}

export default async function updateRecipe(req, res) {
  if (req.method === "PUT") {
    await handleUpdatingSubmission(req, res);
  } else {
    res.status(400).json({ status: "Incorrect request method sent." });
    return;
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
