import { MyFormData } from "app/(auth)/contact/page";
export const saveToSheet = async (formData: MyFormData) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_URL as string, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error saving to sheet:', error);
      throw error; // Re-throw the error to display it in the UI
    }
  };