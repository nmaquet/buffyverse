type Option = {
  name: string;
  id: number;
};

type ExpandSectionProps = {
  type: string;
  options: Option[];
};

const ExpandSection: React.FC<ExpandSectionProps> = ({ type, options }) => {
  return (
    <>
      <button
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-primary-700"
        type="button"
        data-te-collapse-init
        data-te-ripple-init
        data-te-ripple-color="light"
        data-te-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <div className="flex">
          <img
            className="w-10 mix-blend-darken"
            src={`src/assets/icons/${
              type === "loves"
                ? "heart"
                : type === "kills"
                ? "mr-pointy"
                : "rip"
            }.png`}
            alt="stack"
          />
          <p className="text-2xl text-black font-grenze">{options.length}</p>
        </div>
      </button>
      <div
        className="!visible hidden"
        id="collapseExample"
        data-te-collapse-item
      >
        <div className="flex-col p-6">
          {options.map(({ name, id }) => (
            <div className="flex" key={id}>
              <img
                className="w-10 h-10"
                src={`src/assets/icons/heart.png`}
                alt="stack"
              />
              <p className="text-xl font-lacquer">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExpandSection;
