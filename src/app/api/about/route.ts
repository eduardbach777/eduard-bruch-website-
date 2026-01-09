import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const aboutPath = path.join(process.cwd(), "public", "images", "about");

  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(aboutPath)) {
      fs.mkdirSync(aboutPath, { recursive: true });
    }

    const files = fs.readdirSync(aboutPath);

    const images = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext);
      })
      .sort((a, b) => {
        // Extract leading numbers for sorting
        const numA = parseInt(a.match(/^\d+/)?.[0] || "999", 10);
        const numB = parseInt(b.match(/^\d+/)?.[0] || "999", 10);
        return numA - numB;
      })
      .map((file) => ({
        src: `/images/about/${file}`,
        name: path.parse(file).name,
      }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error reading about images:", error);
    return NextResponse.json({ images: [] });
  }
}
