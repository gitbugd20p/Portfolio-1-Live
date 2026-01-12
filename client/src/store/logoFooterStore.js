import { create } from "zustand";
import axios from "axios";
import { baseURL } from "../utilities/config";

const logoFooterStore = create((set) => ({
  logoFooter: null,
  logoFooterLoading: false,
  logoFooterError: null,

  // ======================
  // GET SINGLE CONFIG
  // ======================
  getLogoFooter: async () => {
    try {
      set({ logoFooterLoading: true });
      const res = await axios.get(`${baseURL}/logo-footer`);
      set({
        logoFooter: res.data.data, // SINGLE OBJECT
        logoFooterLoading: false,
      });
    } catch (error) {
      set({
        logoFooterError: error.message,
        logoFooterLoading: false,
      });
    }
  },
}));

export default logoFooterStore;
