import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import type { Job } from "../assets/data";

interface jobProps {
  data: Job;
}
function JobsDetail({ data }: jobProps) {
  return (
    <>
      <main className="bg-white rounded-3xl px-4 py-3  ">
        <section className=" flex justify-between mb-5">
          <div className="flex items-center gap-6">
            <img src={data.companyLogo} alt="" className="w-22" />
            <span>
              <h2 className="text-3xl font-semibold"> {data.title} </h2>
              <p>{data.company}</p>
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="flex justify-end gap-5">
              <BookmarkBorderIcon sx={{ fontSize: 35 }} />
              <ShareIcon sx={{ fontSize: 35 }} />
            </span>
            <button className="px-5 py-2 bg-blue text-white rounded-lg font-semibold">
              Apply now
            </button>
          </div>
        </section>
        <section className="flex gap-6">
          <div className="">
            <h4 className="text-lg font-medium">Job type:</h4>
            <p className="mb-4">{data.jobType}</p>
            <h4 className="text-lg font-medium">Location:</h4>
            <p className="mb-4 ">{data.location} </p>
            <h4 className="text-lg font-medium">Experiance:</h4>
            <p className=" mb-4">{data.experience} </p>
            <h4 className="text-lg font-medium">Number of Applicants:</h4>
            <p className="mb-4">{data.numberOfApplicants}</p>
          </div>
          <article>
            <h4 className="text-2xl  font-semibold">Job description</h4>
            <p className="text-gray-700 mb-8">{data.description}</p>
            <h4 className="text-2xl  font-semibold">Requirements</h4>
            <ul className="mb-8">
              {data?.requirements?.map((data) => (
                <li className="text-gray-700 list-disc mb-1 ml-5">{data}</li>
              ))}
            </ul>
            <h4 className="text-2xl  font-semibold">Key Responsibilities</h4>
            <ul className="mb-8">
              {data?.responsibilities?.map((data) => (
                <li className="text-gray-700 list-disc mb-1 ml-5">{data}</li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}

export default JobsDetail;
