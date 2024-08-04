//libs
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const UnauthLayout = () => {
  return (
    <>
      <div className="container-fluid" id="sccontainer">
        <Header />

        <section>
          <Outlet />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default UnauthLayout;
