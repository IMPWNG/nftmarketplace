import React from "react";
import { Header, Footer } from "..";

interface Layout {
  // props you want to pass to the component other than the children
}
export default function Layout(props){
  return (
        <>
            <Header />
              {props.children}
            <Footer />
        </>
  );
}
