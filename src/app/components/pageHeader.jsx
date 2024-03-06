import React from "react";
import logo from "../drawable/logo.svg";

const PageHeader = () => {
  return (
    <div className="flex bg-[#a9a9a9] w-[90%] h-[38px] mt-[50px] mx-[116px] justify-between">
      {/* left */}
      <div className="flex flex-col justify-between w-[20%] bg-slate-400">
        <div className="w-20 h-20">
          <logo />
        </div>
        <div className="text-[24px] font-bold text-[#1E293B]">WizardShot</div>
      </div>
      {/* center */}
      <div className="flex flex-row w-[40%] bg-slate-300 justify-between items-center px-2">
        <div className="text-center font-semibold">Home</div>
        <div className="text-center">Features</div>
        <div className="text-center">About</div>
        <div className="text-center">Help Center & Community</div>
      </div>
      {/* right */}
      <div className="flex flex-row justify-between items-center gap-4 px-3">
        <>Login</>
        <div className="flex items-center w-auto bg-black rounded-md p-2">
          <img className="w-4 h-4 mr-2" src="src/app/drawable/chrome.png" />
          <div className="text-white text-center">Install WizardShot</div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
