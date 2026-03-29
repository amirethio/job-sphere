import { GrLocation } from "react-icons/gr";

type Filters = {
  jobTypes: string[];
  experience: string | null;
};

type Props = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

function Filter({ filters, setFilters }: Props) {
  function handleJobType(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (e.target.checked) {
      setFilters((prev) => ({
        ...prev,
        jobTypes: [...prev.jobTypes, value],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        jobTypes: prev.jobTypes.filter((t) => t !== value),
      }));
    }
  }

  function handleExperience(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;

    setFilters((prev) => ({
      ...prev,
      experience: value === "All" ? null : value,
    }));
  }

  function resetFilters() {
    setFilters({
      jobTypes: [],
      experience: null,
    });
  }

  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Volunteer",
    "Internship",
    "Remote",
    "On-Site",
  ];

  return (
    <section className="flex flex-col gap-2 px-5 py-3 bg-white rounded-xl">
      <p className="text-2xl font-semibold text-center">Filter</p>

      {/* Job Type */}
      <div className="flex flex-col">
        <p className="font-medium">Job Type</p>

        <div className="border-2 border-gray-400 rounded flex flex-col px-2 py-2 text-gray-600">
          {jobTypes.map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                value={type}
                checked={filters.jobTypes.includes(type)}
                onChange={handleJobType}
              />
              &nbsp;{type}
            </label>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <p className="font-medium">Location</p>

        <div className="flex gap-2 border-2 border-gray-400 rounded text-gray-600">
          <GrLocation className="mt-1" />

          <input
            type="text"
            className="outline-0"
            placeholder="Enter your location"
          />
        </div>
      </div>

      {/* Experience */}
      <div className="flex flex-col">
        <label className="font-medium" htmlFor="experiance">
          Experience Level
        </label>

        <select
          id="experiance" 
          value={filters.experience ?? "All"}
          onChange={handleExperience}
          className="border-2 border-gray-400 rounded text-gray-600"
        >
          <option value="All">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      <div className="flex justify-center">
        <button
          onClick={resetFilters}
          className="bg-blue text-white px-3 py-2 rounded-xl font-medium"
        >
          Reset all filter
        </button>
      </div>
    </section>
  );
}

export default Filter;
