import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Header Section */}
      <div className="header">
        <Header />
      </div>

      {/* Main Content Section */}
      <div className="row g-0" style={{ flex: "1" }}>
        
        {/* Sidebar */}
        <div className="col-md-3">
          <Sidebar />
        </div>

        {/* Page Content */}
        <div className="col-md-9 p-3">
          {children}
        </div>

      </div>

      {/* Footer Section */}
      <footer
        style={{
          textAlign: "center",
          padding: "12px",
          backgroundColor: "#f8f9fa",
          borderTop: "1px solid #ddd",
          fontSize: "14px"
        }}
      >
        © 2026 Blood Donation Management System | Developed by Raghavendra 
      </footer>

    </div>
  );
};

export default Layout;
