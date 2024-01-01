import React from "react";
import header from "../assets/header.png";
import Companyies from "../assets/Companyies.png";
import GenSpec from "./GenSpec";
import About from "./About";
import DownloadBtn from "./DownloadBtn";
import TermsAndCond from "./TermsAndCond";
import "../CustomCss/Main.css";
import { useState } from "react";

const Main = ({ clientInfo, generatorInfo }) => {
  console.log(clientInfo);
  console.log(generatorInfo);

  // both the above are objects, you can use them to display the data in the pdf to access them
  // you can use clientInfo.companyName , clientInfo.address , clientInfo.email , clientInfo.phone

  // for generatorInfo you can use generatorInfo.generatorCompany , generatorInfo.modelName , generatorInfo.controller  and soo on

  const [print, setprint] = useState(true);

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

            {print && (
              <button
                className="py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors"
                onClick={() => {

                  setprint(false);
                  setTimeout(() => {
                    document.title = "Quotation";
                    window.print();
                  }, 1000);
                }}
              >
                Click me
              </button>
            )}
          </div>
          <div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
