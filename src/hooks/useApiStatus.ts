import { useQuery } from '@tanstack/react-query';

interface BackendStatus {
  active: boolean;
}

async function fetchBackendStatus(): Promise<BackendStatus> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL as string}example`)
  if (!response.ok) {
    throw new Error('Failed to fetch backend status');
  }
  return response.json();
}

function useBackendStatus() {
  return useQuery<BackendStatus>(["backendStatus"], fetchBackendStatus);
}

export default useBackendStatus