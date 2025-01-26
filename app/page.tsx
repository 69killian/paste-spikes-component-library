import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

export default function Home() {
  return (
    <>
    
    <Header/>
    <Sidebar/>
    <div className="lg:pl-[320px] pt-[125px] pr-[40px]">
    <Content/>
    </div>
    </>
  );
}
