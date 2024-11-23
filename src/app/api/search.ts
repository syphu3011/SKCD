
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/Meilisearch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { query, index } = req.body;

    try {
      const searchIndex = client.index(index || "default"); // Tên index trong Meilisearch
      const result = await searchIndex.search(query);

      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error searching in Meilisearch" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
