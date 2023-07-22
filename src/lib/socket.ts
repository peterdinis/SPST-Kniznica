import { backendURL } from '@/constants/url';
import { io } from 'socket.io-client';

export const socket = io(backendURL); 