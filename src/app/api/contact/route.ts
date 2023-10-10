import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../db";
import { ImageService } from "../../services/image.service";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as Blob | null;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    if (!name || !email || !phone || !file) {
      return NextResponse.json({ message: "Missing required fields" });
    }

    const imageService = new ImageService();

    const image = await imageService.uploadImageToS3(file);

    await prisma.contact.create({
      data: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        image,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error uploading image:", error);
    NextResponse.json({ message: "Error uploading image" });
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json({ message: "Error fetching contacts" });
  }
}
