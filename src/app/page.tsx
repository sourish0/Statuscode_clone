import FirstBlock from "@/components/firstBlock";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import History from "@/components/history";
import Faq from "@/components/faq";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
  <div>
        <Navbar />
        {/* <Sidebar/> */}
        <FirstBlock id='fb'/>
        <Menu id='menu'/>
        <History id='history'/>
        <Faq id='Faq'/>
        <Footer/>
  </div>  
  );
}
