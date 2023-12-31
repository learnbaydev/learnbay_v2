// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { db } = await connectToDatabase();
    let id = "";

    if (req.body === "Data Science and AI") {
      id = "DSI";
    }
    if (req.body === "Software Development") {
      id = "SD";
    }
    if (req.body === "Business Analytics Family") {
      id = "BAF";
    }

    try {
      const batchDate = await db.collection("BatchDetails").findOne({
        id: id,
      });

      // let myPost = await db
      //   .collection("BatchDetails")
      //   .find()
      //   .forEach(function (item) {
      //     batchDate.push(item);
      //   });

      res.status(200).json({ batchDate, msg: "BatchDetails" });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
