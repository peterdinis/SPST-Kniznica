import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "../api/lib/axios"

const profileRequest = async() =>axios.get("/student/profile");

type Profile = {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    profilePic?: string |null
    role: string;
}

type State = {
    token: string |null
    profile: Profile |null
}

type Actions = {
    setToken: (token: string) => void;
}

export const useAuthStore = create(
    persist<State & Actions>(
      (set) => ({
        token: null,
        profile: null,
        isAuth: false,
        errors: null,
        setToken: (token: string) =>
          set((state) => ({
            token,
            isAuth: !!token,
          })),
        getProfile: async () => {
          const resProfile = await profileRequest();
          set(() => ({
            profile: resProfile.data,
          }));
        },
      }),
      {
        name: "auth",
      }
    )
  );