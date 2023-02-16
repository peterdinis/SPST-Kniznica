import { ReactNode } from "react";
import { renderHook } from "@testing-library/react";
import { useCustomHook } from "../mocks/customHook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProps {
  children?: ReactNode;
}

const queryClient = new QueryClient();

const wrapper = ({ children }: IProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const { result, waitFor }: any = renderHook(() => useCustomHook(), { wrapper });

waitFor(() => result.current.isSuccess);

expect(result.current.data).toEqual("Hello");
