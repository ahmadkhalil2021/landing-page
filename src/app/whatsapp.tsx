// components/WhatsappButton.js
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  const phoneNumber = "4915209773360"; // E.g. 491234567890
  const message = "Hello! I saw your website and want to chat.";

  useEffect(() => {
    // Simple mobile device detection
    const checkMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );
    setIsMobile(checkMobile);
  }, []);

  const whatsappUrlBrowser = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  const whatsappUrlMobile = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const whatsappUrl = isMobile ? whatsappUrlMobile : whatsappUrlBrowser;

  return (
    <>
      {isMobile ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={28} />
        </a>
      ) : (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={24} />
        </a>
      )}
    </>
  );
};

export default WhatsappButton;
