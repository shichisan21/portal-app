import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export async function GET(request: NextApiRequest) {
  console.log(request.body);
  return new Response(JSON.stringify({ message: "Hello World" }));
}
