"use client";

import Footer from "@/components/footer";
import { useMenuStore } from "@/lib/store/menu-store";
import { useEffect, useMemo, useState } from "react";
import { useShallow } from "zustand/shallow";
import MainNav from "../../components/mainNav";
import SubNav from "../../components/subNav";
import { HomeBasicInfo } from "./_components/basic-info";
import { HomeChatBot } from "./_components/chat-bot";
import { HomeCheck } from "./_components/check";
import { HomeLawyer } from "./_components/lawyer";
import HomeMain from "./_components/home-main";
import { set } from "date-fns";

const HomePage = () => {
  const [selectedMenu] = useMenuStore(useShallow((state) => [state.menu]));
  const [stepNumber, setStep] = useState(0);
  useEffect(() => {
    switch (selectedMenu) {
      case "home-main":
        setStep(0);
        break;
      case "lawyer":
        setStep(1);
        break;
      case "check-copyright":
        setStep(2);
        break;
      case "chat-bot":
        setStep(3);
        break;
      case "basic-info":
        setStep(4);
        break;
      default:
        break;
    }
  }, [selectedMenu]);
  const step = useMemo(
    () => [
      {
        name: "Home Main",
        component: HomeMain,
      },
      {
        name: "Lawyer",
        component: HomeLawyer,
      },
      {
        name: "Check Copy Right",
        component: HomeCheck,
      },
      {
        name: "Chat Bot",
        component: HomeChatBot,
      },
      {
        name: "Basic Info",
        component: HomeBasicInfo,
      },
    ],
    []
  );
  return (
      <div className="min-h-screen flex flex-col justify-between">
        <MainNav />
        <SubNav />
        <main className="flex justify-center items-center h-full mb-12">
          {step[stepNumber].component()}
        </main>
        <Footer />
      </div>
  );
};

export default HomePage;
