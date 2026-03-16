import Filter from "./Filter";
import JobCard from "./JobCard";
import SavedCard from "./SavedCard";
import Search from "./Search";
import type { Job } from "../assets/data";
import axios from "axios";
import { useEffect, useState } from "react";





function FindJobs() {
  const [jobsData, setData] = useState<Job[]>([]);
  const [filter, setFilter] = useState(false);
  const [click, setClick] = useState(true);
  const [savedData, setSavedData] = useState<Job[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4001/jobs");
        setData(response.data.data);
        if (filter == false) {
          const savedData = response.data.data.filter(
            (data) => data.saved === true,
          );
          setSavedData(savedData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    function handleFilter() {
      if (click == true) {
        setFilter(true);
      }
    }
    handleFilter();
    console.log("filter now");
    
    const filteredJobs = jobsData.filter((job) => {
      // Job type filter
      const typeMatch =
        !filter.jobType || filter.jobType.length === 0
          ? true
          : filter.jobType.includes(job.jobType);

      // Experience filter
      const expMatch =
        !filter.experience || filter.experience === -1
          ? true
          : job.experience >= filter.experience;

      return typeMatch && expMatch;
    });
    filteredJobs();
  }, [click]);

  return (
    <>
      <section className="flex justify-around mt-10 px-10">
        <div className="w-1/4">
          <Filter setClick={setClick}/>
        </div>
        <div className="flex flex-col gap-5 w-9/20">
          <Search />
          {jobsData && jobsData.map((data) => <JobCard data={data} />)}
        </div>
        <div className="w-1/4">
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
