"use client";
import { Button, ProfilePic } from "../../atoms";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

type ImageSelectorProps = {
  defaultValue?: string;
  onImageSelected: (file?: File) => void;
};

const baseUrl = `https://${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}`;

export const ImageSelector: FC<ImageSelectorProps> = ({ defaultValue, onImageSelected }) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultValue) {
      setSelectedImage(`${baseUrl}/${defaultValue}`);
    }
  }, [defaultValue]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onImageSelected(file);
    }
  };

  const handleChange = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDelete = () => {
    setSelectedImage(undefined);
    onImageSelected(undefined);
  };

  return (
    <div className="flex gap-4 items-center">
      <ProfilePic src={selectedImage} size="large" />
      <label htmlFor="imageInput">
        <Button
          variant="primary"
          icon={selectedImage ? "change" : "add"}
          onClick={handleChange}
          type="button"
        >
          {selectedImage ? "Change picture" : "Add picture"}
        </Button>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          ref={fileInputRef}
        />
      </label>
      {selectedImage && <Button variant="primary" icon="delete" onClick={handleDelete} />}
    </div>
  );
};
