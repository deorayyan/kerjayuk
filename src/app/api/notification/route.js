import data from "./dummy-data.json";

export async function GET() {
  return Response.json(data);
}
