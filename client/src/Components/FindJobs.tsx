import Filter from "./Filter";
import JobCard from "./JobCard";
import SavedCard from "./SavedCard";
import Search from "./Search";
import type { Job } from "../assets/data";
import axios from "axios";
import { useEffect, useState } from "react";

type jobsId = Job & {
  _id: string;
};

type Filters = {
  jobTypes: string[];
  experience: string | null;
};

function FindJobs() {
  const [jobsData, setJobsData] = useState<jobsId[]>([]);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  const [filters, setFilters] = useState<Filters>({
    jobTypes: [],
    experience: null,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:4001/jobs",{});
        const jobs = res.data.data.slice(0, 5);

        setJobsData(jobs);
        setSavedJobs(jobs.filter((j: Job) => j.saved));
      } catch (err) {
        console.log(err);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobsData.filter((job) => {
    const jobTypeMatch =
      filters.jobTypes.length === 0 || filters.jobTypes.includes(job.jobType);

    const experienceMatch =
      !filters.experience || job.experience === filters.experience;

    return jobTypeMatch && experienceMatch;
  });

  return (
    <section className="flex justify-around mt-10 px-10">
      <div className="w-1/4">
        <Filter filters={filters} setFilters={setFilters} />
      </div>

      <div className="flex flex-col gap-5 w-9/20">
        <Search />

        {filteredJobs.map((job) => (
          <JobCard key={job.id} data={job} />
        ))}
      </div>

      <div className="w-1/4">
        <div className="flex flex-col gap-7 px-3 py-4 rounded-2xl bg-white">
          <h3 className="pl-3 -mb-4 text-3xl font-semibold">Saved Jobs</h3>

          <hr />

          {savedJobs.map((job) => (
            <SavedCard key={job.id} data={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FindJobs;
