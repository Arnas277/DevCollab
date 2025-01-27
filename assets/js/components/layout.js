import React from "react";
import { Header } from "./index";

const Layout = ({ isUserLoggedIn, children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      {!isUserLoggedIn && <Header />}
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
