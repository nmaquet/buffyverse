import { useState } from "react";

type Option = {
  name: string;
  id: number;
};

type AccordionProps = {
  type: "Loves" | "Kills" | "Rip";
  options: Option[];
};

const Accordion: React.FC<AccordionProps> = ({ type, options }) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <button
        type="button"
        className="flex items-center justify-between w-full p-5"
        onClick={() => setAccordion(!accordion)}
      >
        <div className="flex ">
          <img
            data-accordion-icon
            className="w-10"
            src={`src/assets/icons/${type}.png`}
            alt="stack"
          />
          <div className="text-2xl font-lacquer hover:text-red-800">
            {options.length}
          </div>
        </div>
      </button>
      <div className={accordion ? "block" : "hidden"}>
        <div className="p-5">
          {options.map(({ name, id }) => (
            <a href={`/${id}`} className="flex" key={id}>
              <img
                className="w-10 h-10"
                src={`src/assets/icons/${type}.png`}
                alt="stack"
              />
              <p className="pt-2 text-xl font-lacquer hover:text-red-800">
                {name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
