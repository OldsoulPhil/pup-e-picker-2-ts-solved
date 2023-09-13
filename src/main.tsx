import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { App } from "./App";
import { TabProvider } from "./Providers/tabprovider";
import { DogProvider } from "./Providers/dogprovider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <DogProvider>
      <TabProvider>
        <App />
      </TabProvider>
    </DogProvider>
  </React.StrictMode>
);
