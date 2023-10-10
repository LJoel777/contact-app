"use client";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose, className }) => {
  const overlayClass =
    "fixed top-0 left-0 w-screen h-screen bg-[#000] bg-opacity-40 flex justify-center items-center z-50";
  const modalClass = twMerge(["min-w-[364px] p-6 bg-black-100 rounded-lg", className]);

  if (!isOpen) return null;

  return (
    <div className={overlayClass} onClick={onClose}>
      <div className={modalClass} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
