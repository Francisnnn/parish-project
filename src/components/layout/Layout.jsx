import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <div className="back-to-top" id="backToTop">
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default Layout;
