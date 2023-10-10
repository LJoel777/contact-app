import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../db";
import { ImageService } from "../../../services/image.service";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const formData = await request.formData();
    const contactId = params.id;
    const file = formData.get("image") as Blob | null;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    const existingContact = await prisma.contact.findUnique({
      where: { id: contactId },
    });

    if (!existingContact) {
      return NextResponse.json({ message: "Contact not found" });
    }

    const updatedFields: any = {};

    if (name) {
      updatedFields.name = name;
    }

    if (email) {
      updatedFields.email = email;
    }

    if (phone) {
      updatedFields.phone = phone;
    }

    if (file) {
      const imageService = new ImageService();
      const image = await imageService.uploadImageToS3(file);
      updatedFields.image = image;
    }

    await prisma.contact.update({
      where: { id: contactId },
      data: updatedFields,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating contact:", error);
    return NextResponse.json({ message: "Error updating contact" });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const contactId = params.id;

    const existingContact = await prisma.contact.findUnique({
      where: { id: contactId },
    });

    if (!existingContact) {
      return NextResponse.json({ message: "Contact not found" });
    }

    await prisma.contact.delete({
      where: { id: contactId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json({ message: "Error deleting contact" });
  }
}
