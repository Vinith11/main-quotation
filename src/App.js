import Main from "./components/Main";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Form from "./Form/Form";
import { PrimeReactProvider } from "primereact/api";
import Clientinfo from "./ClientDetails/Clientinfo";

export default function App() {
  return (
    <>
      <PrimeReactProvider>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
          <Route path="/clientinfo" element={<Clientinfo />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </PrimeReactProvider>
    </>
  );
}
