import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

type MainProps = Readonly<{
  children: React.ReactNode;
}>;

const Main = ({ children }: MainProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
