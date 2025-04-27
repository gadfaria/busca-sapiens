import type { Result } from "../types/result";

const CAPES_URL = "https://catalogodeteses.capes.gov.br/catalogo-teses/rest";

export async function fetchCapesResults(
  query: string,
  page = 1
): Promise<Result[]> {
  try {
    const response = await fetch(
      `${CAPES_URL}/search?lookfor=${encodeURIComponent(
        query
      )}&field[]=authors&field[]=formats&field[]=id&field[]=publicationDates&field[]=title&field[]=urls&limit=50&page=${page}`
    );

    if (!response.ok) throw new Error("Erro ao obter resultados CAPES.");

    const data = await response.json();

    const records = (data.tesesDissertacoes || []).map((item: any) => ({
      id: item.id,
      title: item.title,
      authors: item.authors || [],
      date: item.publicationDates?.[0] || "N/A",
      url: item.urls?.[0] || "#",
    }));

    return records;
  } catch (error) {
    console.error("[fetchCapesResults]", error);
    return [];
  }
}
