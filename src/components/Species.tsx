const Species = ({ species }: any) => {
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

export default Species;
