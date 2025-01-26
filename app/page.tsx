import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

export default function Home() {
  return (
    <>
    
    <Header/>
    <Sidebar/>
    <div className="lg:pl-[300px] pt-[125px] pr-[20px]">
    <Content/>
    </div>
    </>
  );
}
