export async function POST(request: Request) {
  const res = await request.json();
  console.log("Data", request.body);
  return Response.json({ res });
}
