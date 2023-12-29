import A4Paper from "./components/A4Paper";
import About from "./components/About";
import DownloadBtn from "./components/DownloadBtn";
import TermsAndCond from "./components/TermsAndCond";

export default function App() {
  return (
    <div>
      <About />
      <TermsAndCond/>
      <DownloadBtn />
      {/* <A4Paper/> */}
    </div>
  );
}
