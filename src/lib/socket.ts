import { io } from 'socket.io-client';

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL as unknown as string;

export const socket = io(backendURL); 