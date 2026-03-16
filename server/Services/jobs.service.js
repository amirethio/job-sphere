import JobsSchema from "../models/role.js";
export const addJobsServices = (data) => {
  try {
    for (const job of data) {
      const jobs = new JobsSchema(job);
      jobs.save();
    }
    return {
      message: "jobs added sucessfully",
    };
  } catch (error) {
    return {
      message: "something went wrong",
    };
  }
};

export const getJobsServices = async () => {
  try {
    const jobs = await JobsSchema.find();

    return {
      status: "sucess",
      data: jobs,
    };
  } catch (error) {
    return {
      message: "something went wrong",
    };
  }
};
