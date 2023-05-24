import ReactDOM from "react-dom/client";
import App from "./App";
import QuizContextProvider from "./context/QuizContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </BrowserRouter>
);
