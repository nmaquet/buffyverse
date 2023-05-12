import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const options = [
  { species: "Human", href: "#", icon: "👩‍🦱" },
  { species: "Vampire", href: "#", icon: "🧛" },
  { species: "Werewolf", href: "#", icon: "🐺" },
  { species: "Witch", href: "#", icon: "🧙" },
  { species: "Big Bad", href: "#", icon: "👹" },
  { species: "Demon", href: "#", icon: "👿" },
  { species: "Watcher", href: "#", icon: "👓" },
  { species: "Slayer", href: "#", icon: "🗡️" },
  { species: "Other", href: "#", icon: "👽" },
];

export const Filters = () => {
  return (
    <>
      <Popover className="relative">
        <Popover.Button className="inline-flex text-5xl text-white font-longCang gap-x-1">
          <span>Filters</span>
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
          <Popover.Panel className="absolute z-10 flex w-screen pl-8 mt-5 -translate-x-1/2 left-1/2 max-w-min">
            <div className="w-48 p-4 text-3xl text-gray-900 bg-cover shadow-lg font-longCang bg-texture shrink rounded-xl ring-1 ring-gray-900/5">
              {options.map((item) => (
                <a
                  key={item.species}
                  href={item.href}
                  className="block p-2 hover:text-red-800"
                >
                  {item.icon}
                  {item.species}
                </a>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};
