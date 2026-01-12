import { create } from "zustand";
import axios from "axios";
import { baseURL } from "../utilities/config";

const educationStore = create((set) => ({
  educationList: [],
  educationLoading: false,
  educationError: null,

  // ======================
  // GET ALL EDUCATIONS
  // ======================
  getAllEducations: async () => {
    try {
      set({ educationLoading: true });
      const res = await axios.get(`${baseURL}/education`);
      set({ educationList: res.data.data, educationLoading: false });
    } catch (error) {
      set({ educationError: error.message, educationLoading: false });
    }
  },
}));

export default educationStore;
