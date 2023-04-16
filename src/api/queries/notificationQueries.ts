import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL as string
  });

  
export const getAllNotifications = () => api.get("notifications").then((res) => res.data);

export const getNotificationInfo = (id: number) => {
    if(!id) {
        return;
    }

    return api.get(`notification/${id}`).then((res) => res.data);
}