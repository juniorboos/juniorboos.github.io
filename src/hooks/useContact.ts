import { FormEvent, useState } from "react";

interface FormFieldsProps {
  email: string;
  message: string;
}

const useContact = (formFields: FormFieldsProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    VITE_GOOGLE_FORM_MESSAGE_ID,
    VITE_GOOGLE_FORM_EMAIL_ID,
    VITE_GOOGLE_FORM_ACTION_URL,
  } = import.meta.env;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(VITE_GOOGLE_FORM_MESSAGE_ID, formFields.message);
    formData.append(VITE_GOOGLE_FORM_EMAIL_ID, formFields.email);

    setIsLoading(true);

    fetch(VITE_GOOGLE_FORM_ACTION_URL, { method: "post", body: formData })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error))
      .finally(() => setIsLoading(false));
  };

  return {
    isLoading,
    onSubmit,
  };
};

export { useContact };
export type { FormFieldsProps };
