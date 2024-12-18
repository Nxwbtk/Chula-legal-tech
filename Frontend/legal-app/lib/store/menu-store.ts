import { create } from "zustand";

export type MenuType = "home-main" | "lawyer" | "check-copyright" | "chat-bot" | "basic-info";

type GlobalState = {
  menu: MenuType;
};

type GlobalAction = {
  setMenu: (menu: MenuType) => void;
};

export const useMenuStore = create<GlobalState & GlobalAction>((set) => ({
  menu: "home-main",
  setMenu: (menu) => set({ menu }),
}));
