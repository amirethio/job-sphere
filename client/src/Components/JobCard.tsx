import product1 from "./../assets/img/product-design-1.png";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

function JobCard() {
  return (
    <>
      <section className="bg-white max-w-150 rounded-3xl m-10 px-4 py-3 flex justify-between gap-3">
        <div className="">
          <img src={product1} alt="" className="w-65" />
        </div>
        <div>
          <div className="flex justify-between">
            <span className="">
              <h2 className="text-3xl font-semibold">Product Design</h2>
              <p>Binford Ltd.</p>
              <div className="text-mist-600 flex gap-3 ">
                <p className="bg-gray-300 p-1">Remote</p>
                <p className="bg-gray-300 p-1">Full-time</p>
                <p className="bg-gray-300 p-1">$200-$1,200</p>
              </div>
            </span>
            <span className="flex gap-5">
              <BookmarkBorderIcon sx={{ fontSize: 35 }} />
              <ShareIcon sx={{ fontSize: 35 }} />
            </span>
          </div>
          <p className="text-mist-600 mt-4 text-sm">
            Design intuitive and visually appealing user interfaces for web and
            mobile applications. Conduct user research and create wireframes,
            prototypes, and mockups to improve user experience. Work closely
            with developers to implement designs.
          </p>
        </div>
      </section>
      {/* 
      <section className="bg-white max-w-150 rounded-3xl m-10 px-4 py-3 flex justify-between">
        <div className=""></div>
        <span className="">
          <h2 className="text-2xl font-semibold">Product Design</h2>
          <p>Binford Ltd.</p>
        </span>
        <div>
          <span>
            <p>Remote</p>
            <p>Full-time</p>
            <p>$200-$1,200</p>
          </span>
          <p>
            Design intuitive and visually appealing user interfaces for web and
            mobile applications. Conduct user research and create wireframes,
            prototypes, and mockups to improve user experience. Work closely
            with developers to implement designs.
          </p>
        </div>
      </section> */}
    </>
  );
}

export default JobCard;
