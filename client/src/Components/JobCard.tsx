import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import type { Job } from "../assets/data";

type jobProps = {
  data: Job;
};
function JobCard({ data }: jobProps) {
  return (
    <>
      <section
        className="bg-white rounded-3xl px-4 py-3 flex justify-between gap-3 shadow-2xs "
        key={data.id}
      >
        <div className="">
          <img src={data.companyLogo} alt="" className="w-55" />
        </div>
        <div>
          <div className="flex justify-between">
            <span className="">
              <h2 className="text-3xl font-semibold">{data.title}</h2>
              <p> {data.company} </p>
              <div className="text-mist-600 flex gap-3 ">
                <p className="bg-gray-300 ">{data.location} </p>
                <p className="bg-gray-300 ">{data.jobType} </p>
                <p className="bg-gray-300 ">{data.salary}</p>
              </div>
            </span>
            <span className="flex gap-5">
              <BookmarkBorderIcon sx={{ fontSize: 35 }} />
              <ShareIcon sx={{ fontSize: 35 }} />
            </span>
          </div>
          <p className="text-mist-600 mt-4 text-sm">{data.description}</p>
        </div>
      </section>
    </>
  );
}

export default JobCard;
