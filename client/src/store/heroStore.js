import { create } from "zustand";
import axios from "axios";
import { baseURL } from "../utilities/config";

const heroStore = create((set) => ({
  heroList: [],
  heroLoading: false,
  heroError: null,

  // ======================
  // GET ALL HERO BANNERS
  // ======================
  getAllHeroes: async () => {
    try {
      set({ heroLoading: true });
      const res = await axios.get(`${baseURL}/banner`);
      set({ heroList: res.data.data, heroLoading: false });
    } catch (error) {
      set({ heroError: error.message, heroLoading: false });
    }
  },
}));

export default heroStore;
