import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./App";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "keen-slider/keen-slider.min.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={AppRouter} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
