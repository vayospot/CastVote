import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/services/firebase";
import Toast from "react-native-toast-message";

const initialCandidatesStore = {
  candidates: [],
  isLoadingCandidates: false,
  selectedCandidate: null,
};

const useCandidatesStore = (set, get) => ({
  ...initialCandidatesStore,

  setCandidates: (data) => set(() => ({ candidates: data })),

  setSelectedCandidate: (uid) =>
    set({ selectedCandidate: get().candidates.find((c) => c.uid === uid) }),

  getCandidates: async (candidateIds) => {
    try {
      set({ ...initialCandidatesStore, isLoadingCandidates: true });
      const fetchQuery = query(
        collection(db, "candidates"),
        where("uid", "in", candidateIds),
      );

      const querySnapshot = await getDocs(fetchQuery);
      const data = querySnapshot.docs.map((doc) => doc.data());
      set(() => ({ candidates: data }));
    } catch (error) {
      Toast.show({ type: "error", text1: "Error fetching candidates" });
      console.log("Error fetching candidates:", error);
    } finally {
      set({ isLoadingCandidates: false });
    }
  },

  resetCandidates: () => set(initialCandidatesStore),
});

export default useCandidatesStore;
