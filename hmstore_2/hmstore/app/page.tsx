import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";

export default function Home() {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}
