import axios from "axios";

const baseEnv = process.env.NODE_ENV !== "production" ? process.env.NEXT_PUBLIC_BACKEND_URL as string : process.env.NEXT_PUBLIC_PRODUCTION_URL as string

export const studentProfileInfo = axios.get(baseEnv, {
    headers: {
        "Authorization": "bearer" + localStorage.getItem("studentAccessToken")
    }
}).then((res) => res.data);