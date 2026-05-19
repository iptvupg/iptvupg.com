import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

function isAuthorized(req: NextRequest): boolean {
  const expected = process.env.UPLOAD_REVIEW_SECRET;
  if (!expected) return false;
  const provided = req.headers.get("x-upload-secret");
  return provided === expected;
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File;
  const id = formData.get("id") as string;

  if (!file || !id) {
    return NextResponse.json({ error: "Missing file or id" }, { status: 400 });
  }

  // Reject anything that isn't a small positive integer to prevent path traversal.
  if (!/^[1-9][0-9]?$/.test(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  // Restrict to webp by content type and a sane size ceiling (1 MB).
  if (file.type !== "image/webp") {
    return NextResponse.json({ error: "Only image/webp accepted" }, { status: 415 });
  }
  if (file.size > 1024 * 1024) {
    return NextResponse.json({ error: "File too large" }, { status: 413 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filePath = path.join(process.cwd(), "public", "reviews", `review-${id}.webp`);

  await writeFile(filePath, buffer);

  return NextResponse.json({ success: true });
}
