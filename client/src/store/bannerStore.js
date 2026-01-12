import { create } from "zustand";
import axios from "axios";
import { baseURL } from "../utilities/config";

const bannerStore = create((set) => ({
  bannerInfo: null,
  bannerLoading: false,
  bannerError: null,

  bannerInfoRequest: async () => {
    set({ bannerLoading: true, bannerError: null });

    try {
      const res = await axios.get(`${baseURL}/banner`);

      if (res?.data?.success) {
        set({
          bannerInfo: res.data.data[0],
          bannerLoading: false,
        });
      } else {
        set({
          bannerLoading: false,
          bannerError: "Failed to load banner data",
        });
      }
    } catch (error) {
      set({
        bannerLoading: false,
        bannerError: error.message || "Something went wrong",
      });
    }
  },
}));

export default bannerStore;
