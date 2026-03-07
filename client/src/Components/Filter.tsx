import { GrLocation } from "react-icons/gr";
// import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

function Filter() {
  return (
    <section className="flex flex-col gap-2 ml-40  w-80 px-5 py-3 bg-white rounded-xl">
      <p className="text-2xl font-semibold text-center">Filter</p>
      {/* date */}
      <div className="flex flex-col">
        <p className="font-medium">Date Posted</p>
        <input
          type="date"
          placeholder="Last 24 Hours"
          id="start"
          className="border-2 border-gray-400 rounded text-gray-600"
        />
      </div>
      {/* job Type */}
      <div className=" flex flex-col t">
        <p className="font-medium ">Job Type</p>
        <div className="border-2 border-gray-400 rounded flex flex-col px-2 py-2 text-gray-600">
          <label htmlFor="">
            <input type="checkbox" />
            &nbsp; Full-time
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            &nbsp;Part-time
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            &nbsp;Contract
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            &nbsp;Volunteer
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            &nbsp;Internship
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            &nbsp; Remote
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            &nbsp;On-Site
          </label>
        </div>
      </div>
      {/* location */}
      <div className="">
        <p className="font-medium">Location</p>
        <div className="flex  gap-2 border-2 border-gray-400 rounded text-gray-600">
          {" "}
          <GrLocation className="mt-1" />
          <input
            type="text"
            className="outline-0"
            placeholder="Enter your location"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="level" className="font-medium">
          Experience Level
        </label>
        <select
          name="level"
          id=""
          className="flex  gap-2 border-2 border-gray-400 rounded text-gray-600"
        >
          <option value="Bignner">Bignner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="font-medium">
          Salary Range
        </label>
        <input type="range" name="" id="" />
        {/* <RangeSlider min={0} max={100} /> */}
      </div>
      <div>
        <label htmlFor="" className="font-medium ">
          Input Manually
        </label>
        <div className="flex flex-1 mt-2">
          {" "}
          <div className="w-1/2">
            From:{" "}
            <input
              type="text"
              name=""
              id=""
              className="border-2 border-gray-400 rounded text-gray-600 w-1/2"
            />
          </div>
          <div className="w-1/2">
            To:{" "}
            <input
              type="text"
              name=""
              id=""
              className="border-2 border-gray-400 rounded text-gray-600 w-1/2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="font-medium">Currency</label>
        <select
          name=""
          id=""
          className="flex  gap-2 border-2 border-gray-400 rounded text-gray-600"
        >
          <option value="apple">Dollar</option>
          <option value="banana">Birr</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue text-white px-3 py-2 rounded-xl font-medium">Reset all filter</button>
      </div>
    </section>
  );
}

export default Filter;
