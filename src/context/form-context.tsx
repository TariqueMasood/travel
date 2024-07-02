"use client";

import { FormContextProps, FormData } from "@/@types/form";
import { ReactNode, createContext, useState } from "react";

const FormContext = createContext<FormContextProps | undefined>(undefined);

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    visaType: "",
    message: "",
  });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const updateFormData = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveToLocalStorage = () => {
    const storedData = localStorage.getItem("formDataArray");
    const formDataArray = storedData ? JSON.parse(storedData) : [];
    if (editingIndex !== null) {
      formDataArray[editingIndex] = formData;
    } else {
      formDataArray.push(formData);
    }
    localStorage.setItem("formDataArray", JSON.stringify(formDataArray));
  };

  const loadFromLocalStorage = (): FormData[] => {
    const storedData = localStorage.getItem("formDataArray");
    return storedData ? JSON.parse(storedData) : [];
  };

  const editFormData = (index: number) => {
    const storedData = localStorage.getItem("formDataArray");
    if (storedData) {
      const formDataArray = JSON.parse(storedData);
      setFormData(formDataArray[index]);
      setEditingIndex(index);
    }
  };

  const deleteFormData = (index: number) => {
    const storedData = localStorage.getItem("formDataArray");
    if (storedData) {
      const formDataArray = JSON.parse(storedData);
      formDataArray.splice(index, 1);
      localStorage.setItem("formDataArray", JSON.stringify(formDataArray));
    }
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      visaType: "",
      message: "",
    });

    setEditingIndex(null);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        resetFormData,
        saveToLocalStorage,
        loadFromLocalStorage,
        editFormData,
        deleteFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
