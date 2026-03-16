import ClearIcon from "@mui/icons-material/Clear";
import type { Job } from "../assets/data";

interface jobProps {
  data: Job;
}
interface undefinedProps {
  data: undefined;
}
function SavedCard({ data }: jobProps | undefinedProps) {
  return (
    <section className="bg-white  rounded-2xl flex p-3 gap-3 shadow-2xl ">
      <div className="w-15">
        <img src={data?.companyLogo} alt="" />
      </div>
      <div>
        <span className="flex justify-between align-middle gap-4">
          <h3 className="text-xl font-medium"> {data?.title} </h3>
          <ClearIcon />
        </span>
        <p> {data?.company} </p>
        <span className="text-mist-600 flex gap-3 mt-1">
          <p className="bg-gray-300 ">{data?.jobType} </p>
          <p className="bg-gray-300 ">{data?.salary} </p>
        </span>
      </div>
    </section>
  );
}

export default SavedCard;
