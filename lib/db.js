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
  User: userModel(),
  Review: reviewModel(),
  Comment: commentModel(),
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
      comments: { type: [mongoose.ObjectId], ref: "Comment", required: false },
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
      dish_image_path: { type: String },
      comments: { type: [mongoose.ObjectId], ref: "Comment", required: false },
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

function userModel() {
  const schema = new Schema(
    {
      username: { type: String, required: true },
      password: { type: String, required: true },
      // Hoping mongoose.ObjectId acts like a foreign key in a relational db
      // Goad is to have an array with all of the collections the user
      // has engaged with
      liked_blog_posts: {
        type: [mongoose.ObjectId],
        ref: "Post",
        required: false,
      },
      liked_recipes: {
        type: [mongoose.ObjectId],
        ref: "Recipes",
        required: false,
      },
      saved_blog_posts: {
        type: [mongoose.ObjectId],
        ref: "Post",
        required: false,
      },
      saved_recipes: {
        type: [mongoose.ObjectId],
        ref: "Recipes",
        required: false,
      },
      reviews: { type: [mongoose.ObjectId], ref: "Review", required: false },
      liked_ingredients: {
        type: [mongoose.ObjectId],
        ref: "Ingredients",
        required: false,
      },
      comments: { type: [mongoose.ObjectId], ref: "Comments", required: false },
      profile_pic: { type: String },
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

  return mongoose.models.User || mongoose.model("User", schema);
}

function reviewModel() {
  const schema = new Schema(
    {
      user: { type: mongoose.ObjectId, ref: "User", required: true },
      upvotes: {
        type: Map,
        of: new Schema({
          // Keep track of users that are upvoting
          // On the client, check if user has already upvoted by checking for
          // bool value
          user: { type: mongoose.ObjectId, ref: "User" },
          // In the frontend, the total amount of true bools for upvoted will
          // determine the total number of upvotes
          upvoted: Boolean,
        }),
        required: false,
      },
      review: { type: String, required: true },
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

  return mongoose.models.Review || mongoose.model("Review", schema);
}

function commentModel() {
  const schema = new Schema(
    {
      user: { type: mongoose.ObjectId, ref: "User", required: true },
      comment: { type: String, required: true },
      recipe: { type: mongoose.ObjectId, ref: "Recipes" },
      post: { type: mongoose.ObjectId, ref: "Post" },
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

  return mongoose.models.Comment || mongoose.model("Comment", schema);
}
