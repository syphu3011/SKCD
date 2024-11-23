// lib/meilisearch.ts
import { MEILI_API_KEY, MEILI_HOST } from "@/utils/Const";
import { MeiliSearch } from "meilisearch";

const client = new MeiliSearch({
  host: MEILI_HOST,
  apiKey: MEILI_API_KEY
});

export default client;
