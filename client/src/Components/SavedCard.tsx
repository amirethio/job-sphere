import saved1 from "./../assets/img/saved1.png";
import ClearIcon from "@mui/icons-material/Clear";
function SavedCard() {
  return (
    <section className="bg-white  rounded-2xl flex p-3 gap-3 shadow-2xl ">
      <div className="w-15">
        <img src={saved1} alt="" />
      </div>
      <div>
        <span className="flex justify-between align-middle gap-4">
          <h3 className="text-2xl font-semibold">UI/UX Designer</h3>
          <ClearIcon />
        </span>
        <p>Barone LLC</p>
        <span className="text-mist-600 flex gap-3 mt-1">
          <p className="bg-gray-300 ">Remote</p>
          <p className="bg-gray-300 ">$200-$800</p>
        </span>
      </div>
    </section>
  );
}

export default SavedCard;
