import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { connectToDataBase } from "../../../utils/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    switch (method) {
      case "GET":
        //acsso ao mongodb e obter os dados do meu banco
        const { db } = await connectToDataBase();
        const data = await db.collection("Projetos").find().toArray();

        res.status(200).json(data);
        break;
      default:
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${method} not Allowed`);
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message });
    } else {
      res
        .status(500)
        .json({ statusCode: 500, message: "An unknown error occurred" });
    }
  }
};

export default handler;
