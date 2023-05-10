const Age = ({ age }: number) => {
  return (
    <div className="relative">
      <div className="absolute w-full p-px border-2 bg-amber-400" />
      <div className="absolute w-12 h-12 rounded-full -top-6 left-28 bg-amber-400 ">
        <img
          className="absolute w-8 h-10 pt-2 pl-2 left-1 opacity-20"
          src={"src/assets/icons/age.png"}
        />
        <p className="pt-2 pl-1 text-2xl text-black font-grenze">{age}</p>
      </div>
    </div>
  );
};
export default Age;
