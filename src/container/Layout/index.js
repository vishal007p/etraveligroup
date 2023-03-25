import Header from "../Header";
import Footer from "../Footer";
import React from "react";

function index({ children }) {
  return (
    <div>
      {/* <!-- Topbar Start  */}
      <Header />
      {/* <!-- Topbar End --> */}

      {children}

      {/* <!-- Vendor End --> */}

      {/* <!-- Footer Start --> */}
      <Footer />
      {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
}

export default index;
