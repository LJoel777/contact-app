"use client";
import { ContactListItem, Toolbar } from "@components/molecules";
import { ComponentProps, FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ContactModal } from "../ContactModal";

type ContactListProps = ComponentProps<"div"> & {
  contacts: {
    id: string;
    name: string;
    phone: string;
    image?: string;
  }[];
};

export const ContactList: FC<ContactListProps> = ({ className, contacts, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mergedClassName = twMerge(["flex flex-col", className]);

  return (
    <div className={mergedClassName}>
      {contacts?.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          image={contact.image}
          className="py-3"
        />
      ))}
    </div>
  );
};
