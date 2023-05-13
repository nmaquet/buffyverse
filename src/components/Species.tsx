export const Badge = (icon: string) => {
  return (
    <div className="relative">
      <div className="absolute w-12 h-12 rounded-full -top-6 left-28 bg-amber-400 ">
        <img
          className="absolute w-8 h-10 pt-2 pl-2 left-1 opacity-20"
          src={`src/assets/icons/${icon}.png`}
        />
        <p className="pt-2 pl-1 text-2xl text-black font-grenze"></p>
      </div>
    </div>
  );
};

// TODO fail back to default image
export const Species = (species: string) => {
  return (
    <div className="flex justify-center pt-6">
      <img
        className="w-8"
        src={`src/assets/icons/${species}.png`}
        alt="stack"
      />
      <div className="px-2 pt-2 text-2xl font-grenze">{species}</div>
    </div>
  );
};
