import { RefObject, SyntheticEvent, useState } from "react";

interface FormFieldsProps {
  email: string;
  message: string;
}

const useContact = (form: RefObject<HTMLFormElement>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    VITE_GOOGLE_FORM_MESSAGE_ID,
    VITE_GOOGLE_FORM_EMAIL_ID,
    VITE_GOOGLE_FORM_ACTION_URL,
  } = import.meta.env;

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      message: { value: string };
    };
    const formData = new FormData();
    formData.append(VITE_GOOGLE_FORM_MESSAGE_ID, target.message.value);
    formData.append(VITE_GOOGLE_FORM_EMAIL_ID, target.email.value);

    setIsLoading(true);

    return fetch(VITE_GOOGLE_FORM_ACTION_URL, {
      method: "post",
      body: formData,
    }).finally(() => {
      setIsLoading(false);
      form.current?.reset();
      alert("Message sent!");
    });
  };

  return {
    isLoading,
    onSubmit,
  };
};

export { useContact };
export type { FormFieldsProps };
