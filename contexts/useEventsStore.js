import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "@/services/firebase";
import randomValue from "@/utils/randomValue";

const initialEventsStore = {
  events: [],
  lastFetchedEventsDoc: null,
  eventsPerBatch: 10,
  isEndOfEvents: false,
  selectedEvent: null,
};

const useEventsStore = (set, get) => ({
  ...initialEventsStore,

  setEvents: (data) => set(() => ({ events: data })),

  setSelectedEvent: (id) =>
    set({ selectedEvent: get().events.find((e) => e.id === id) }),

  getEvents: {
    initialFetch: async () => {
      try {
        const fetchQuery = query(
          collection(db, "events"),
          orderBy("id", "desc"),
          limit(get().eventsPerBatch),
        );
        const querySnapshot = await getDocs(fetchQuery);
        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            timeLeft: new Date(
              Date.now() + randomValue({ min: 28800000, max: 259200000 }),
            ),
          };
        });
        set(() => ({
          events: data,
          lastFetchedEventsDoc:
            querySnapshot.docs[querySnapshot.docs.length - 1],
          isEndOfEvents: querySnapshot.empty,
        }));
      } catch (error) {
        console.log("Error fetching initial events:", error);
      }
    },

    nextFetch: async () => {
      try {
        const lastFetchedEventsDoc = get().lastFetchedEventsDoc;
        if (get().isEndOfEvents || !lastFetchedEventsDoc) {
          throw new Error("No more data to fetch");
        }

        const fetchQuery = query(
          collection(db, "events"),
          startAfter(lastFetchedEventsDoc),
          limit(get().eventsPerBatch),
        );
        const querySnapshot = await getDocs(fetchQuery);
        if (querySnapshot.empty) {
          set(() => ({ isEndOfEvents: true }));
          return;
        }

        const data = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            timeLeft: new Date(
              Date.now() + randomValue({ min: 28800000, max: 259200000 }),
            ),
          };
        });
        set((state) => ({
          events: [...state.events, ...data],
          lastFetchedEventsDoc:
            querySnapshot.docs[querySnapshot.docs.length - 1],
        }));
      } catch (error) {
        console.log(error);
      }
    },
  },

  resetEvents: () => set(initialEventsStore),
});

export default useEventsStore;
