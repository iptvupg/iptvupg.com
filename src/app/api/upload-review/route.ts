import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const id = formData.get("id") as string;

  if (!file || !id) {
    return NextResponse.json({ error: "Missing file or id" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filePath = path.join(process.cwd(), "public", "reviews", `review-${id}.webp`);

  await writeFile(filePath, buffer);

  return NextResponse.json({ success: true, path: filePath });
}
