import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type jobtype =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Volunteer"
  | "Remote"
  | "On-Site";

type payloadState = {
  jobType?: jobtype;
  experience?: number;
};
export interface filterState {
  jobType?: jobtype[];
  experience?: number;
}

const initialState: filterState = {
  jobType: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<payloadState>) => {
      if (action.payload && action.payload.jobType) {
        state.jobType?.push(action.payload.jobType);
      } else if (action.payload && action.payload.experience) {
        state.experience = action.payload.experience;
      }
    },
    removeFilter: (state, action: PayloadAction<payloadState>) => {
      if (
        state.jobType &&
        state.jobType?.length > 0 &&
        action.payload.jobType
      ) {
        const index = state.jobType?.indexOf(action.payload.jobType);
        state.jobType?.splice(index, 1);
      } else if (state.jobType && action.payload.experience) {
        delete state.experience;
      }
    },
  },
});

export const { updateFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;
