import Header from "@components/Header";
import MobileHeader from "@components/MobileHeader";
import React, { Fragment, useState } from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Fragment>
      <Header setOpenMenu={setOpenMenu} />
      <MobileHeader openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {children}
    </Fragment>
  );
}
