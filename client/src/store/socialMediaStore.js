import { create } from "zustand";
import axios from "axios";
import { baseURL } from "../utilities/config";

const socialMediaStore = create((set) => ({
  socialMediaList: [],
  socialMediaLoading: false,
  socialMediaError: null,

  // GET ALL
  getAllSocialMedia: async () => {
    try {
      set({ socialMediaLoading: true });
      const res = await axios.get(`${baseURL}/social-media`);
      set({ socialMediaList: res.data.data, socialMediaLoading: false });
    } catch (error) {
      set({ socialMediaError: error.message, socialMediaLoading: false });
    }
  },
}));

export default socialMediaStore;
