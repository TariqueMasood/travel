export interface FormData {
  name: string;
  email: string;
  visaType: string;
  message: string;
}

export interface FormContextProps {
  formData: FormData;
  updateFormData: (name: string, value: string) => void;
  resetFormData: () => void;
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => FormData[];
  editFormData: (index: number) => void;
  deleteFormData: (index: number) => void;
}
