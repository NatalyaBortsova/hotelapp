import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import FooterForm from "../../components/footerForm/FooterForm";
import Proposals from "../../components/proposals/Proposals";
import Navbar from "../../components/navbar/Navbar";
import Property from "../../components/property/Property";
import Rooms from "../../components/rooms/Rooms";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <Proposals />
      <main className="main">
        <Featured />
        <Property />
        <Rooms />
        <FooterForm />
        <Footer/>
      </main>
    </>
  );
};

export default Home;
