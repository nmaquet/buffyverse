const Filters = () => {
  return (
    <div className="flex">
      <div className="flex p-3 m-2 my-10 rounded-xl">
        <label
          htmlFor="species"
          className="block p-2 text-lg font-medium leading-6 text-white font-lacquer"
        >
          Filter
        </label>
        <select
          id="species"
          name="species"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="All"
        >
          <option>Vampire</option>
          <option>Watcher</option>
          <option>Slayer</option>
          <option>All</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
