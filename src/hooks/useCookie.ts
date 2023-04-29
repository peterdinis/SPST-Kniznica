import Cookies from 'js-cookie';

interface IOptions {
    expires: number;

} 

export const setCookie = (key: string, value: any, options: IOptions) => {
  Cookies.set(key, value, options);
};

export const getCookie = (key: string) => {
  return Cookies.get(key);
};

export const removeCookie = (key: string) => {
  Cookies.remove(key);
};