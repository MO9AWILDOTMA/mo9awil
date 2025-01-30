// components/WhatsAppIcon.tsx
import { FaWhatsapp } from 'react-icons/fa';
import  './style.css'; // Optional: for styling

const WhatsAppIcon = () => {
  const phoneNumber = '212522479947'; // Replace with your phone number
  const message = 'BGHIT NQAD CHARIKA ASAAP!'; // Replace with your default message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsappIcon"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={50} color="#25D366" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;