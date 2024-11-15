import { auth, db } from "@/services/firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";

const initialUserStoreState = {
  user: {
    uid: "",
    fullName: "",
    email: "",
    dateOfBirth: "",
    location: "",
    imageUrl: "",
    votedEvents: [], // array of obj with eventId, candidateId and timestamp
  },
};

const useUserStore = (set) => ({
  ...initialUserStoreState,

  setUser: (data) =>
    set((state) => ({
      user: { ...state.user, ...data },
    })),

  setVotedEvents: (data) =>
    set((state) => ({
      user: { ...state.user, votedEvents: [...state.user.votedEvents, data] },
    })),

  fetchUser: async () => {
    try {
      const user = auth.currentUser;

      if (!user) throw new Error("There is no user logged in.");

      const userDocSnap = await getDoc(doc(db, "users", user.uid));
      if (userDocSnap.exists()) {
        const user = userDocSnap.data();
        set((state) => ({
          user: { ...state.user, ...user },
        }));
      }
    } catch {
      throw new Error(
        "There was an error getting user data. Sorry about that.",
      );
    }
  },

  updateUser: async (newData) => {
    try {
      set((state) => ({
        user: { ...state.user, ...newData },
      }));

      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        ...newData,
        updatedAt: serverTimestamp(),
      });
    } catch {
      throw new Error(
        "There was an error updating user data. Sorry about that.",
      );
    }
  },

  resetUser: () => set(initialUserStoreState),
});

export default useUserStore;
