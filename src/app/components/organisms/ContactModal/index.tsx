"use client";
import axios from "axios";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField, Text } from "../../atoms";
import { Modal } from "../../molecules";
import { ImageSelector } from "../ImageSelector";

type FormData = {
  name?: string;
  phone?: string;
  email?: string;
  image?: File;
};

type ContactModalProps = {
  onClose: () => void;
  isOpen: boolean;
  defaultValues?: {
    id: string;
    name: string;
    phone: string;
    email: string;
    image: string;
  };
};

export const ContactModal: FC<ContactModalProps> = ({ onClose, isOpen, defaultValues }) => {
  const { control, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (defaultValues) {
      setValue("name", defaultValues.name);
      setValue("phone", defaultValues.phone);
      setValue("email", defaultValues.email);
    }
  }, [defaultValues]);

  const onSubmit = async (formData: FormData) => {
    if (
      (!formData.image && !defaultValues?.image) ||
      !formData.name ||
      !formData.phone ||
      !formData.email
    ) {
      alert("All fields are required");
      return;
    }
    const url = defaultValues ? `/api/contact/${defaultValues?.id}` : "/api/contact";

    try {
      await axios.put(url, formData, {
        headers: { "Content-Type": "multipart/form-data", "Access-Control-Allow-Origin": "*" },
      });
    } catch (err) {
      alert("Something went wrong! Please try again.");
    }
  };

  const handleImageSelected = (imageUrl?: File) => {
    setValue("image", imageUrl);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal isOpen={isOpen} className="flex flex-col gap-6" onClose={onClose}>
        <Text type="h2">Add contact</Text>
        <ImageSelector defaultValue={defaultValues?.image} onImageSelected={handleImageSelected} />
        <Controller
          name="name"
          defaultValue=""
          control={control}
          render={({ field }) => <TextField {...field} placeholder="Jamie Wright" label="Name" />}
        />
        <Controller
          name="phone"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField {...field} placeholder="+01 234 5678" label="Phone number" />
          )}
        />
        <Controller
          name="email"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextField {...field} placeholder="jamie.wright@gmail.com" label="Email address" />
          )}
        />
        <div className="flex justify-end gap-2 pt-6">
          <Button variant="secondary" className="mr-4" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Done
          </Button>
        </div>
      </Modal>
    </form>
  );
};
