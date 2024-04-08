"use client";
import { Transition } from "@headlessui/react";
export const TransitionRoot = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Transition
      show={isOpen}
      className="w-full"
      enter="transition-opacity duration-200 transform ease-out"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition-opacity duration-200 transform ease-in"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      {children}
    </Transition>
  );
};

export const TransitionItem = ({
  isOpen,
  key,
  children,
}: {
  isOpen: boolean;
  key: number;
  children: React.ReactNode;
}) => {
  return (
    <Transition.Child
      className="w-full"
      key={key}
      enter={`transition-opacity duration-200 transform ease-out ${
        isOpen ? "delay-100" : ""
      }`}
      enterFrom="opacity-0 translate-y-1 scale-0"
      enterTo="opacity-100 translate-y-0 scale-100"
      leave={`transition-opacity duration-200 transform ease-in ${
        isOpen ? "" : "delay-100"
      }`}
      leaveFrom="opacity-100 translate-y-0 scale-100"
      leaveTo="opacity-0 translate-y-1 scale-0"
    >
      {children}
    </Transition.Child>
  );
};
