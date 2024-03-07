import { NextApiHandler, NextApiResponse } from "next";

const handler = (req: NextApiHandler, res: NextApiResponse) => {
  try {
    res.status(200).json([{ id: 1, name: "junior" }]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
