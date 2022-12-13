import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-1 w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
