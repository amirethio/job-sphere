import {
  addJobsServices,
  getJobsServices,
  getSingleService,
} from "../Services/jobs.service.js";

export const addJobs = async (req, res, next) => {
  const response = await addJobsServices(req.body);
  res.json(response);
};

export const getAllJobs = async (req, res, next) => {
  const response = await getJobsServices(req.body);
  res.json(response);
};

export const getSingleJob = async (req, res, next) => {
  const response = await getSingleService(req.params.id);
  res.json(response);
};
