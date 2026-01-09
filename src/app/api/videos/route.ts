import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const videosPath = path.join(process.cwd(), "public", "videos", "reel");

  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(videosPath)) {
      fs.mkdirSync(videosPath, { recursive: true });
    }

    const files = fs.readdirSync(videosPath);

    const videos = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return [".mp4", ".webm", ".mov"].includes(ext);
      })
      .map((file) => ({
        src: `/videos/reel/${file}`,
        name: path.parse(file).name,
      }));

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Error reading videos:", error);
    return NextResponse.json({ videos: [] });
  }
}
