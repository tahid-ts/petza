"use client";
import { useState, ReactNode } from "react";

type AccordionItem = {
  title: string;
  description: ReactNode;
};

type AccordionProps = {
  data: AccordionItem[];
};

export default function Accordion({ data }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="mx-auto w-full rounded-lg py-3">
      {data.map((item, idx) => {
        const isOpen = openIndexes.includes(idx);

        return (
          <div key={idx} className="py-3 last-of-type:border-b-0">
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between md:font-semibold font-bold text-dark md:text-xl text-sm outline-none font-title"
            >
              <span>
                {" "}
                {idx + 1}. {item.title}
              </span>
              <span
                className={`rounded border p-2 transition-colors duration-200 ${
                  isOpen ? "border-primary " : "border-primary "
                }`}
              >
                <svg
                  className="size-3 shrink-0 fill-primary transition-colors duration-200 dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                >
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </svg>
              </span>
            </button>

            <div
              className={`grid overflow-hidden text-zinc-500 transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden pr-4 text-sm">
                {item.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
