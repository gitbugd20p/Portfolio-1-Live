import { create } from "zustand";
import axios from "axios";

const contactStore = create((set) => ({
  loading: false,
  error: null,
  success: false,

  sendEmail: async (formData) => {
    try {
      set({ loading: true, error: null, success: false });

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/create-send-email`,
        formData,
      );

      if (res?.data?.success) {
        set({ success: true });
      }
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      set({ loading: false });
    }
  },

  resetStatus: () => set({ error: null, success: false }),
}));

export default contactStore;
