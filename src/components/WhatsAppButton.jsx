import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/237698833335"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-lg shadow-[#25d366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25d366]/40 transition-all duration-300"
      aria-label="Contact WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );
};

export default WhatsAppButton;
