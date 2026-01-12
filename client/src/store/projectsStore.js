import { create } from "zustand";
import axios from "axios";
import { baseURL } from "../utilities/config";

const projectsStore = create((set) => ({
  projectList: [],
  projectLoading: false,
  projectError: null,

  // ======================
  // GET ALL PROJECTS
  // ======================
  getAllProjects: async () => {
    try {
      set({ projectLoading: true });
      const res = await axios.get(`${baseURL}/projects`);
      set({ projectList: res.data.data, projectLoading: false });
    } catch (error) {
      set({ projectError: error.message, projectLoading: false });
    }
  },
}));

export default projectsStore;
