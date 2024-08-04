import React from "react";
import { MdChat } from "react-icons/md";

const ChatButton = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+917200168295"; // Replace with the actual phone number in international format, e.g., '1234567890'
    const message = "Hello, I would like to chat with you."; // Optional message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="chat-button" onClick={openWhatsApp}>
      <MdChat size={40} color="white" />
    </div>
  );
};

export default ChatButton;
