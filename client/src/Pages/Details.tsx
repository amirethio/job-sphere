import JobsDetail from "../Components/JobsDetail";
import SavedCard from "../Components/SavedCard";

function Details() {
  return (
    <section className="flex justify-around mx-15">
      <div className=" w-13/20">
        <JobsDetail />
      </div>
      <div className="flex flex-col gap-7 px-3 py-4 rounded-2xl bg-white w-1/4">
        <h3 className="pl-3 -mb-4 text-3xl font-semibold  ">Related Jobs</h3>
        <hr />
        <SavedCard />
        <SavedCard />
      </div>
    </section>
  );
}

export default Details;
