import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./App";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import "keen-slider/keen-slider.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={AppRouter} />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);
