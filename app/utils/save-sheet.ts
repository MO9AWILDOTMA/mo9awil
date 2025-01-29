import { MyFormData } from "app/(auth)/contact/page";

export const saveToSheet = async (formData: MyFormData) => {
  console.log("Form Data being sent:", formData);
  try {
    // Fetch data without no-cors mode
    const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_URL as string, {
      method: 'POST',
      mode:'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Treat status 0 as success
    if (response.status === 0 || response.ok) {
      // You can return a success message or other data here
      return { status: 'success', message: 'Données enregistrées avec succès' };
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error saving to sheet:', error);
    return { status: 'failed', message: error instanceof Error ? error.message : 'Unknown error' };
  }
};
