import { JSX } from "preact";
import { ButtonHint } from "./ButtonHint.tsx";
import { BurgerIcon } from "./icons/BurgerIcon.tsx";

export function SideBarButton(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} >
      <div class='w-12 h-12 shadow border-4 cursor-pointer border-white rounded bg-yellow-300 relative active:scale-95 transition-transform duration-75'>
      <ButtonHint button="+"/>
      <BurgerIcon width="40" height="40" />
      </div>
    </div>

  );
}


