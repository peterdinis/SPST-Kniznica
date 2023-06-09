import { AxiosHeaders, AxiosRequestConfig } from "axios";

export interface RequestConfig extends AxiosRequestConfig {
    headers: AxiosHeaders;
}
  