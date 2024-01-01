import React from "react";
import header from "../assets/header.png";
import Companyies from "../assets/Companyies.png";
import GenSpec from "./GenSpec";
import About from "./About";
import DownloadBtn from "./DownloadBtn";
import TermsAndCond from "./TermsAndCond";
import '../CustomCss/Main.css'

const Main = () => {
  return (
    <>
      <div className="main-container-Main">
        <div className=" w-a4-w h-a4-h">
          <div className="h-1/2">
            <div className="pt-2 border-b-2 border-black w-full">
              <img
                src={header}
                style={{ width: "1000px", height: "auto" }}
                alt=""
              />
            </div>

            <div className="pt-4 border-b-2 border-black w-full">
              <img src={Companyies} alt="" />
            </div>
            <h1 className="pt-3 pb-4 text-3xl text-center font-bold  underline">
              Quotation
            </h1>

            <p className="text-left text-lg pt-2">
              Dear Sir,
              <br />
              We thank you very much for your valuable enquiry and we are
              pleased to give you the best price for supply of the DG.
            </p>
          </div>
          <div className="h-1/2">
            <GenSpec />
          </div>
          <div className="h-1/2">
            <GenSpec />
          </div>
          <div className="h-1/2">
            <GenSpec />
          </div>
          <div>
            <About />
          </div>
          <div>
            <TermsAndCond />
          </div>
          <div>
            <DownloadBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
