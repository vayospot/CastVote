import { create } from "zustand";
import useUserStore from "./useUserStore";
import useEventsStore from "./useEventsStore";
import useCandidatesStore from "./useCandidatesStore";

const useResetAllStores = (storesResetFunctions) => {
  return async () => {
    for (const resetFunction of storesResetFunctions) {
      await resetFunction();
    }
  };
};

const useGlobalStore = create((...args) => {
  const userStore = useUserStore(...args);
  const eventsStore = useEventsStore(...args);
  const candidatesStore = useCandidatesStore(...args);

  const resetAllStores = useResetAllStores([
    userStore.resetUser,
    eventsStore.resetEvents,
    candidatesStore.resetCandidates,
  ]);

  return {
    ...userStore,
    ...eventsStore,
    ...candidatesStore,
    resetAllStores,
  };
});

export default useGlobalStore;
