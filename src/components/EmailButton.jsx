import React from "react";

export default function EmailButton() {
  const handleClick = () => {
    const email = "aliau2050@gmail.com";
    const subject = "Portfolio Inquiry";

    // mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
      <button className="email-button" onClick={handleClick}>
        <img src="email-icon.png" alt="mail icon" /> aliau2050@gmail.com
      </button>
  );
}
