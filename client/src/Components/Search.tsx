import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <>
      <section className="bg-white my-40 mx-30 rounded-2xl py-2 px-3 flex align-middle">
        <span className="flex w-full items-center gap-2">
          <SearchIcon className="" />
          <input
            type="text"
            placeholder="Job title, keywords, or company name |Location"
            className="grow outline-0 py-2"
          />
        </span>
        <button className="bg-blue text-white py-2  px-3 rounded-xl font-medium ">
          Search
        </button>
      </section>
    </>
  );
}

export default Search;
