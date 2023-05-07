const Species = ({ species }: any) => {
  return (
    <div className="flex justify-center">
      <img
        className="w-10"
        src={`src/assets/icons/${species}.png`}
        alt="stack"
      />
      <div className="text-4xl font-longCang">{species}</div>
    </div>
  );
};

export default Species;
