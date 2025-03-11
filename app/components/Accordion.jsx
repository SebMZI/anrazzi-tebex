import { AnimatePresence, motion as m } from "motion/react";

const Accordion = ({ i, opened, setOpened, question, answer }) => {
  const isOpen = i === opened;
  return (
    <div className="max-w-[924px] md:min-w-[472px] w-full">
      <AnimatePresence>
        <div
          className={`flex justify-between items-center gap-2 ${
            isOpen ? "pb-4" : "pb-0"
          } transition-all duration-300 cursor-pointer`}
          onClick={() => setOpened(isOpen ? false : i)}
        >
          <p className="font-medium text-sm md:text-lg">{question}</p>
          <button className="min-w-8 w-8 h-8 rounded-full border-2 border-ascent relative hover:bg-ascent group cursor-pointer transition-[background] duration-300">
            <div
              className={` w-4 h-0.5 bg-ascent rounded-full absolute left-2/4 -translate-x-2/4 ${
                isOpen ? "rotate-0" : "rotate-90"
              } group-hover:bg-black transition-all duration-300`}
            ></div>
            <div className="w-4 h-0.5 bg-ascent rounded-full absolute left-2/4 -translate-x-2/4 group-hover:bg-black transition-[background] duration-300"></div>
          </button>
        </div>
        {isOpen && (
          <m.div
            className=""
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {answer}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
