import getConfig from "next/config";
import mongoose from "mongoose";
require("dotenv").config();

const { serverRuntimeConfig } = getConfig();
const Schema = mongoose.Schema;

mongoose.connect(
  process.env.MONGODB_URI || serverRuntimeConfig.connectionString,
  {
    bufferCommands: true,
    maxPoolSize: 100,
    minPoolSize: 0,
    serverSelectionTimeoutMS: 30000,
    autoIndex: true,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
    family: 4,
    autoCreate: false,
    useUnifiedTopology: true,
    heartbeatFrequencyMS: 30000,
    user: process.env.USER_DEV,
    pass: process.env.PASS_DEV,
  }
);

export const db = {
  Post: postModel(),
  Recipes: recipesModel(),
  Ingredients: ingredientsModel(),
};

// mongoose models with schema definitions

function postModel() {
  const schema = new Schema(
    {
      title: { type: String, unique: true, required: true },
      content: { type: String, required: true },
      tags: { type: [String], required: true },
      description: { type: String, required: true }, 
      headerImagePath: { type: String }, 
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.Post || mongoose.model("Post", schema);
}

function recipesModel() {
  const schema = new Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      ingredient: { type: [String], required: true },
      prep: { type: [String], required: true },
      prep_time: { type: String, required: true },
      directions: { type: [String], required: true },
      cook_time: { type: String, required: true },
      // A total count of the ingredient array
      ingredients: { type: Number, required: true },
      // Points to an Amazon S3 bucket item URL
      dish_image: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  )

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    }
  })

  return mongoose.models.Recipes || mongoose.model("Recipes", schema)

}

function ingredientsModel() {
  // Data to be extracted from Nutitionix api
  const schema = new Schema({
    title: { type: String, required: true },
    service_size: { type: String, required: true },
    total_fat: { type: String, required: true },
    saturated_fat: { type: String, required: true },
    polysaturated_fat: { type: String, required: true },
    monosaturated_fat: { type: String, required: true },
    trans_fat: { type: String, required: true },
    cholestrol: { type: String, required: true },
    sodium: { type: String, required: true },
    total_carbohydrates: { type: String, required: true },
    fiber: { type: String, required: true },
    sugars: { type: String, required: true },
    protein: { type: String, required: true },
    vitamin_d: { type: String, required: true },
    calcium: { type: String, required: true },
    iron: { type: String, required: true },
    potassium: { type: String, required: true },
    caffein: { type: String, required: true },
    disclaimeer: { type: String, required: true },
  },
  {
    timestamps: true,
  })

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
      delete ret._id;
      delete ret.hash;
    }
  })

    return mongoose.models.IngredientsModel || mongoose.model("IngredientsModel", schema)

}