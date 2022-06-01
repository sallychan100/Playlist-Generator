import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        Created by TCP &copy;{new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
