//TODO: DEBUG FUNCTION
function getAge(dateStr: Date) {
  const endOfShow = new Date("2002-10-23");
  const birthDate = new Date(dateStr);
  let age = endOfShow.getFullYear() - birthDate.getFullYear();
  const m = endOfShow.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && endOfShow.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

type Props = {
  birthday: number | string;
};
const Age = ({ birthday }: Props) => {
  const age = getAge(birthday);
  return (
    <div className="relative">
      <div className="absolute w-12 h-12 rounded-full -top-6 left-28 bg-amber-400 ">
        <img
          className="absolute w-8 h-10 pt-2 pl-2 left-1 opacity-20"
          src={"src/assets/icons/age.png"}
        />
        <p className="pt-2 pl-1 text-2xl text-black font-grenze"></p>
      </div>
    </div>
  );
};
export default Age;
