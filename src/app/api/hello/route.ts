import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export async function GET(request: NextApiRequest) {
  console.log(request.body);
  // const body =await request.json()

  // console.log("POST request", body.name)
  return new Response(JSON.stringify({ message: "Hello World" }));
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   res.status(200).json({ message: "Hello from Next.js!" });
// }
