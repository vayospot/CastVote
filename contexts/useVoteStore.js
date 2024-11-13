import { create } from "zustand";

export default useVoteStore = create((set) => ({
  voteEvent: null,
  selectedCandidate: null,
  setVoteEvent: (event) => set({ voteEvent: event }),
  setSelectedCandidate: (candidate) => set({ selectedCandidate: candidate }),
}));
