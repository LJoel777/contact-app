"use client";
import { ComponentProps, FC, useState } from "react";
import { Button, ListItem, ProfilePic, Text } from "../../atoms";
import { twMerge } from "tailwind-merge";
import { Toolbar } from "../Toolbar";
import axios from "axios";

type ContactListItemProps = ComponentProps<"div"> & {
  id: string;
  name: string;
  phone: string;
  image?: string;
};

const baseUrl = `https://${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}`;

export const ContactListItem: FC<ContactListItemProps> = ({
  id,
  name,
  phone,
  image,
  className,
  ...props
}) => {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`api/contact/${id}`);
    } catch (err) {
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div
      onMouseLeave={() => setIsToolbarOpen(false)}
      className={twMerge(["flex justify-between group w-full", className])}
      {...props}
    >
      <div className="flex items-center gap-4">
        <ProfilePic size="small" src={image && `${baseUrl}/${image}`} />
        <div>
          <Text type="h3">{name}</Text>
          <Text type="message" className="text-white-56">
            {phone}
          </Text>
        </div>
      </div>
      <div className="hidden group-hover:flex relative">
        <Button variant="secondary" icon="mute" />
        <Button variant="secondary" icon="call" />
        <Button
          variant="secondary"
          icon="more"
          onClick={() => setIsToolbarOpen((value) => !value)}
        />
        {isToolbarOpen && (
          <Toolbar className="min-w-[219px] lg:left-[0]">
            <ListItem icon="settings">Edit</ListItem>
            <ListItem icon="favorite">Favorite</ListItem>
            <ListItem icon="delete" onClick={() => handleDelete(id)}>
              Delete
            </ListItem>
          </Toolbar>
        )}
      </div>
    </div>
  );
};
