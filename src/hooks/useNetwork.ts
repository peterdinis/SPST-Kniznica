import { useEffect } from 'react';
import useBoolean from './useBoolean';

const useNetwork = () => {
  const [isOnline, setIsOnline] = useBoolean(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', setIsOnline.on);
    window.addEventListener('offline', setIsOnline.off);

    return () => {
      window.removeEventListener('online', setIsOnline.on);
      window.removeEventListener('offline', setIsOnline.off);
    };
  }, []);

  return isOnline;
};

export default useNetwork;
