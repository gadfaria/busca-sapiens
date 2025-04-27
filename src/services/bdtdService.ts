import type { Result } from "../types/result";

const BDTD_URL = "https://bdtd.ibict.br/vufind/api/v1";

export async function fetchBdtdResults(
  query: string,
  page = 1
): Promise<Result[]> {
  try {
    const response = await fetch(
      `${BDTD_URL}/search?lookfor=${encodeURIComponent(
        query
      )}&field[]=authors&field[]=formats&field[]=id&field[]=publicationDates&field[]=title&field[]=urls&limit=50&page=${page}`
    );

    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error("Erro ao obter resultados BDTD.");
    }

    const records = (data.records || []).map((item: any) => ({
      id: item.id,
      title: item.title,
      authors: item.authors || [],
      date: item.publicationDates?.[0] || "N/A",
      url: item.urls?.[0] || "#",
    }));

    return records;
  } catch (error) {
    console.error("[fetchBdtdResults]", error);
    return [];
  }
}
