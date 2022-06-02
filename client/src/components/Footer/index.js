import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary  background-image: linear-gradient(to right, red , yellow);
    p-4">
      <div className="container">
        Created by Chris, Justin & Sally &copy;{new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
