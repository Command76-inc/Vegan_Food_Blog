require("dotenv").config();

export default async function getMapsApiKey(req, res) {

  res.json({key: process.env.GOOGLE_MAPS_API_KEY});
}