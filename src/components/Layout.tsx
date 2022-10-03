import React from "react";
import "./Layout.css"

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
