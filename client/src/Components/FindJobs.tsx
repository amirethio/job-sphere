import Filter from "./Filter";
import JobCard from "./JobCard";
import SavedCard from "./SavedCard";
import Search from "./Search";
import jobs from "../assets/data";

function FindJobs() {
  const savedData = jobs.filter((data)=>data.saved == true)
  return (
    <>
      <section className="flex justify-around mt-10 px-20">
        <div className="w-1/4">
          <Filter />
        </div>
        <div className="flex flex-col gap-5 w-4/10">
          <Search />
          {jobs.map((data) => (
            <JobCard data={data} />
          ))}
        </div>
        <div className="w-3/10">
          <div className="flex flex-col gap-7 px-3 py-4 rounded-2xl bg-white">
            <h3 className="pl-3 -mb-4 text-3xl font-semibold  ">Saved Jobs</h3>
            <hr />
            {savedData.map((data) => (
              <SavedCard data={data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FindJobs;
