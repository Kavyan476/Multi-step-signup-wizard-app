"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface SignupData {
  name: string;
  email: string;
  address: string;
}

interface SignupFormContextType {
  data: SignupData;
  update: (fields: Partial<SignupData>) => void;
  reset: () => void;
}

const defaultData: SignupData = {
  name: "",
  email: "",
  address: "",
};

const SignupFormContext = createContext<SignupFormContextType | undefined>(undefined);

export function SignupFormProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SignupData>(defaultData);

  const update = (fields: Partial<SignupData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const reset = () => setData(defaultData);

  return (
    <SignupFormContext.Provider value={{ data, update, reset }}>
      {children}
    </SignupFormContext.Provider>
  );
}

export function useSignupForm() {
  const ctx = useContext(SignupFormContext);
  if (!ctx) throw new Error("useSignupForm must be used within SignupFormProvider");
  return ctx;
}
