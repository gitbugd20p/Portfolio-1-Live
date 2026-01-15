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

  // ======================
  // GET PROJECT BY ID
  // ======================
  getProjectById: async (id) => {
    try {
      set({ projectLoading: true });
      const res = await axios.get(`${baseURL}/projects/${id}`);
      set({ projectLoading: false });
      return res.data.data;
    } catch (error) {
      console.log(error);
      set({ projectLoading: false });
      throw new Error("Unable to fetch project");
    }
  },
}));

export default projectsStore;
