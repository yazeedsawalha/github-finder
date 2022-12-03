import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      Copyright @ {year}, All rights revesred
    </footer>
  );
}

export default Footer;
