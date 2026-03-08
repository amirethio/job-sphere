import JobsDetail from "../Components/JobsDetail";
import { useParams } from "react-router";
import jobs from "../assets/data";
import SavedCard from "../Components/SavedCard";
import Search from "../Components/Search";

function Details() {
  const params = useParams<{ product_id: string }>();

  const data = jobs?.find((data) => String(data?.id) == params.product_id);
  console.log(data);

  return (
    <section className=" mx-15 ">
      {/* search and back */}
      <div className="flex  my-6  gap-27">
        <button className="font-semibold text-xl text-gray-700">
          &lt; Back
        </button>
        <div className="min-w-1/2 mt-4">
          <Search />
        </div>
      </div>
      <div className="gap-10 flex justify-around ">
        <div className="w-7/10">{data && <JobsDetail data={data} />}</div>
        <div className="flex flex-col gap-7 px-3 py-4 rounded-2xl bg-white w-1/4">
          <h3 className="pl-3 -mb-4 text-3xl font-semibold  ">Related Jobs</h3>
          <hr />
          {data?.relatedJobs?.map((data) => (
            <SavedCard data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Details;
