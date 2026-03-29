import JobsDetail from "../Components/JobsDetail";
import { useParams } from "react-router";
import type { Job } from "../assets/data";
import SavedCard from "../Components/SavedCard";
// import Search from "../Components/Search";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

function Details() {
  const navigate = useNavigate();

  const params = useParams<{ product_id: string }>();
  const [data, setData] = useState<Job>();
  const [savedJobs, setSavedJobs] = useState<Job[]>();

  useEffect(() => {
    const getJob = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4001/jobs/${params.product_id}`,
        );
        setData(res.data.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getJob();
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:4001/jobs");
        setSavedJobs(res.data.data.filter((j: Job) => j.saved));
      } catch (err) {
        console.log(err);
      }
    };

    fetchJobs();
  }, []);

  function handleBack() {
    navigate("/");
  }

  return (
    <section className=" mx-15 ">
      {/* search and back */}
      <div className="flex  my-6  gap-27">
        <button
          className="font-semibold text-xl text-gray-700 cursor-pointer"
          onClick={handleBack}
        >
          &lt; Back
        </button>
        <div className="min-w-1/2 mt-4">{/* <Search /> */}</div>
      </div>
      <div className="gap-10 flex justify-around ">
        <div className="w-7/10">{data && <JobsDetail data={data} />}</div>
        <div className="flex flex-col gap-7 px-3 py-4 rounded-2xl bg-white w-1/4">
          <h3 className="pl-3 -mb-4 text-3xl font-semibold  ">Related Jobs</h3>
          <hr />
          {savedJobs?.map((data) => (
            <SavedCard data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Details;
