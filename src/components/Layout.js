import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { title, metaKeywords, metaDesc } = props.metaInfo;
  return (
    <>
      <Head>
        <title>NFT MARKETPLACE</title>
      </Head>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Navbar />
            <div id="content" className="flex-grow mx-auto p-8 w-full shadow rounded bg-white">
              {props.children}
            </div>
            <footer className="w-full text-center border-t bg-blue-700 text-white p-4 pin-b">
              <span className="lg:text-xl"> &copy; IMPWNG 2021 </span>
            </footer>
        </div>
    </>
  );
}
Layout.defaultProps = {
  metaInfo: {
    title: "Default Title",
    metaKeywords: "Default metaKeywords",
    metaDesc: "Default metaDesc",
  },
};

export default Layout;
