import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const galleryPath = path.join(process.cwd(), "public", "images", "gallery");

  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(galleryPath)) {
      fs.mkdirSync(galleryPath, { recursive: true });
    }

    const files = fs.readdirSync(galleryPath);

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
        src: `/images/gallery/${file}`,
        name: path.parse(file).name,
      }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error reading gallery:", error);
    return NextResponse.json({ images: [] });
  }
}
