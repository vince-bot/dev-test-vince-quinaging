import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const DefaultLayout = (props) => {
  return (
    <>
      <Head>
        <title>Sample</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <Navbar />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout;
