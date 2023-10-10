import { v4 as uuid } from "uuid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export class ImageService {
  private s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.REGION as string,
      credentials: {
        accessKeyId: process.env.ACCESS_KEY as string,
        secretAccessKey: process.env.SECRET_KEY as string,
      },
    });
  }

  public async uploadImageToS3(file: Blob): Promise<string> {
    const mimeType = file.type;
    const fileExtension = mimeType.split("/")[1];

    const buffer = Buffer.from(await file.arrayBuffer());

    const fileName = `${Date.now()}-${uuid()}.${fileExtension}`;

    const params = {
      Bucket: process.env.BUCKET_NAME as string,
      Key: `images/${fileName}`,
      Body: buffer,
      ContentType: "image/jpeg",
    };

    const command = new PutObjectCommand(params);
    await this.s3Client.send(command);

    return fileName;
  }
}
