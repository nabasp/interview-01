import React from "react";
import { PaperProvider } from "react-native-paper";
import App from "./App";
const Main: React.FC = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
};

export default Main;
