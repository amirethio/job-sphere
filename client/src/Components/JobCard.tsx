import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import type { Job } from "../assets/data";
import { useNavigate } from "react-router";

type jobProps = {
  data: Job;
};
function JobCard({ data }: jobProps) {
  const navigate = useNavigate();

  function HandleDetail(id: number) {
    navigate(`/product/${id}`);
  }
  return (
    <>
      <section
        className="bg-white rounded-3xl px-4 py-3 flex justify-between gap-3 shadow-2xs "
        key={data.id}
      >
        <div className="">
          <img src={data.companyLogo} alt="" className="w-30" />
        </div>
        <div className="flex flex-col">
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
          <p className="text-mist-600 mt-4 text-sm">{data.shortDescription}</p>
          <button
            className="bg-blue text-white font-semibold px-3 py-2  rounded-2xl mt-2 w-3/10 ml-0 self-end mr-4 cursor-pointer"
            onClick={() => HandleDetail(data.id)}
          >
            View Details
          </button>
        </div>
      </section>
    </>
  );
}

export default JobCard;
