import { create } from "zustand";
import { Thread } from "../types/threads";
import { generateThreads } from "../utils/generate-dummy-data";

export interface State {
  threads: Thread[];
  fetchThreads?: any;
}

export const useThreadStore = create((set) => ({
  threads: [] as Thread[],
  fetchThreads: async () =>
    set((state: State) => ({
      threads: [...state.threads, ...generateThreads()],
    })),
}));
