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
};

// mongoose models with schema definitions

function postModel() {
  const schema = new Schema(
    {
      title: { type: String, unique: true, required: true },
      content: { type: String, required: true },
      tags: { type: [String], required: true },
      description: { type: String, required: true },
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
