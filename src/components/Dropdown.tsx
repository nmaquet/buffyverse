import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

type Option = {
  name: string;
  id: number;
};

type DropdownProps = {
  type: string;
  options: Option[] | any;
};

const Dropdown: React.FC<DropdownProps> = ({ type, options }) => {
  return (
    <Popover className="relative cursor-help">
      <Popover.Button className="inline-flex items-center gap-x-1 cursor-help">
        <img
          className="w-10 mix-blend-darken"
          src={`src/assets/icons/${
            type === "loves" ? "heart" : type === "kills" ? "mr-pointy" : "rip"
          }.png`}
          alt="stack"
        />
        <p className="text-sm leading-6 text-black font-grenze">#</p>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 left-1/2 max-w-min">
          <div className="w-56 p-4 text-sm font-semibold leading-6 text-gray-900 bg-white shadow-lg shrink rounded-xl ring-1 ring-gray-900/5">
            {options.map((item: Option, i: number) => {
              return (
                <div key={i} className="flex justify-around p-2">
                  <img
                    className="w-10"
                    src={`src/assets/icons/cross.png`}
                    alt="stack"
                  />
                  <p className="p-4 text-xl font-lacquer">{item.name}</p>
                </div>
              );
            })}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Dropdown;
