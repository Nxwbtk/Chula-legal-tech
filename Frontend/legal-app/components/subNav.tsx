import { MenuType, useMenuStore } from "@/lib/store/menu-store";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";
import { Button } from "./ui/button";

export const MenuNavUnScrolling = ({
  menu,
  title,
}: {
  menu: MenuType;
  title: string;
}) => {
  const [setMenu, selectedMenu] = useMenuStore(
    useShallow((state) => [state.setMenu, state.menu])
  );
  const handleSelect = (menu: MenuType) => {
    setMenu(menu);
  };
  return (
    <Button
      onClick={() => handleSelect(menu)}
      className={cn({
        "text-mainColor w-full text-xl p-12 rounded-none bg-white hover:bg-gray-200 ":
          true,
        "border-b-2 border-mainColor": selectedMenu === menu,
      })}
    >
      {title}
    </Button>
  );
};

export const MenuNavScrolling = ({
  menu,
  title,
}: {
  menu: MenuType;
  title: string;
}) => {
  const [setMenu, selectedMenu] = useMenuStore(
    useShallow((state) => [state.setMenu, state.menu])
  );
  const handleSelect = (menu: MenuType) => {
    setMenu(menu);
  };
  return (
    <Button
      onClick={() => handleSelect(menu)}
      className={cn({
        "text-mainColor w-full text-xl p-12 rounded-none bg-white hover:bg-gray-200 ":
          true,
        "border-b-2 border-mainColor": selectedMenu === menu,
      })}
    >
      {title}
    </Button>
  );
};

export type MenuConfigType = {
  name: string;
  value: MenuType;
};

const SubNav = () => {
  const MENU: MenuConfigType[] = [
    {
      name: "ทนาย",
      value: "lawyer",
    },
    {
      name: "ตรวจสอบลิขสิทธิ์",
      value: "check-copyright",
    },
    {
      name: "Chat Bot",
      value: "chat-bot",
    },
    {
      name: "ข้อมูลเบื้องต้น",
      value: "basic-info",
    },
  ];
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`w-full h-[200px] transition-transform duration-300 
                            ${
                              isVisible ? "translate-y-0" : "-translate-y-full"
                            }`}
        style={{ marginTop: "64px" }}
      >
        <div className="flex justify-center items-start bg-mainColor w-full h-1/2">
          <input
            type="text"
            name="search"
            id=""
            className="w-1/2 p-3 rounded-md mt-2"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-center items-center w-full h-fit">
          <div className="flex w-3/4 bg-none shadow-xl text-center h-fit mt-[-20px] hover:bg-white rounded-md">
            {MENU.map((item, index) => (
              <MenuNavUnScrolling
                key={index}
                menu={item.value}
                title={item.name}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={` w-full transition-transform duration-300 fixed top-16 bg-white z-30
                ${isVisible ? "translate-y-[-100%]" : "transition-y-full"}
                `}
      >
        <div className="flex w-full shadow-xl text-center h-fit bg-white">
          {MENU.map((item, index) => (
            <MenuNavScrolling key={index} menu={item.value} title={item.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SubNav;
