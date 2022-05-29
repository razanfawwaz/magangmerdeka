import magangData from "./magang-api";

export default function handler(req, res) {
  const { method } = req;
  if (method === "GET") {
    return res.status(200).json(magangData);
  }
}
