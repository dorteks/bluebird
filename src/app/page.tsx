"use client";

import React, { useState } from "react";
import Flow1 from "@/components/container/flow1";
import Flow2 from "@/components/container/flow2";
import Flow3 from "@/components/container/flow3";
import FooterLinks from "@/components/container/footer";
import AuthXLogo from "@/components/container/authXLogo";
import Flow4Auth from "@/components/container/flow4-auth";
import Flow5Auth from "@/components/container/flow5-auth";
import AuthOptions from "@/components/container/authOptions";

const Login = () => {
  const [createAccount, setCreateAccout] = useState(false);

  const toggleCreateAccount = () => {
    setCreateAccout(!createAccount);
  };

  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="h-full w-full flex flex-col text-[#b1b2b3]">
      {createAccount ? (
        <div>
          {currentStep === 1 && (
            <Flow1
              handleNextStep={handleNextStep}
              toggleCreateAccount={toggleCreateAccount}
            />
          )}
          {currentStep === 2 && (
            <Flow2
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 3 && (
            <Flow3
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 4 && (
            <Flow4Auth
              handleNextStep={handleNextStep}
              toggleCreateAccount={toggleCreateAccount}
            />
          )}
          {currentStep === 5 && (
            <Flow5Auth toggleCreateAccount={toggleCreateAccount} />
          )}
        </div>
      ) : (
        ""
      )}

      <div className="flex-grow flex lg:flex-row bg-black">
        <AuthXLogo />
        <AuthOptions toggleCreateAccount={toggleCreateAccount} />
      </div>
      <FooterLinks />
    </div>
  );
};

export default Login;
