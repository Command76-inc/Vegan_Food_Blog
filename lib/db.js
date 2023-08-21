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
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.Recipes || mongoose.model("Recipes", schema);
}

function ingredientsModel() {
  // Data to be extracted from Nutitionix api
  // Can extract images of the food items, not implemented yet.
  const schema = new Schema(
    {
      title: { type: String, required: true },
      serving_size: { type: Schema.Types.Decimal128, required: true },
      calories: { type: Number, required: true },
      total_fat: { type: Number, required: true },
      saturated_fat: { type: Number, required: true },
      polysaturated_fat: { type: Number, required: true },
      monosaturated_fat: { type: Number, required: true },
      trans_fat: { type: Number, required: true },
      cholestrol: { type: Number, required: true },
      sodium: { type: Number, required: true },
      total_carbohydrates: { type: Number, required: true },
      fiber: { type: Number, required: true },
      sugars: { type: Number, required: true },
      protein: { type: Number, required: true },
      vitamin_d: { type: Number, required: true },
      calcium: { type: Number, required: true },
      iron: { type: Number, required: true },
      potassium: { type: Number, required: true },
      caffein: { type: Number, required: true },
    },
    {
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

  return mongoose.models.Ingredients || mongoose.model("Ingredients", schema);
}
