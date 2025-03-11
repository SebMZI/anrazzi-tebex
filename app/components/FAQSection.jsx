"use client";
import { useState, useEffect } from "react";
import content from "@/app/_data/content.json";
import Accordion from "./Accordion";

const FAQSection = () => {
  const [opened, setOpened] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Évite un décalage SSR vs Client

  return (
    <section id="faq">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center w-full py-28 gap-12 px-5">
        <h2 className="font-medium text-4xl sm:text-5xl text-left w-full">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-8 md:items-center w-full">
          {content.faq.map(({ question, answer }, i) => (
            <Accordion
              key={i}
              question={question}
              answer={answer}
              i={i}
              opened={opened}
              setOpened={setOpened}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
