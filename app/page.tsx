import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {

  const authData = await auth();
  const { userId } = authData;

  if (!userId) {
    redirect("/sign-in");
  }

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
