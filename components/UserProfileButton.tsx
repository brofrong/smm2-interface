import { JSX } from "preact";
import { ButtonHint } from "./ButtonHint.tsx";

export function UserProfileButton(props:  JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} >
    <div class='w-12 h-12 shadow border-4 cursor-pointer border-yellow-300 rounded bg-white relative active:scale-95 transition-transform duration-75'>
        <ButtonHint button="Y"/>
        <img src='https://studio.mii.nintendo.com/miis/image.png?data=00070e3f435659644c555f636a7477777b798188919da0a7b6b9c0d1d7dee7b3bec5cee1e901101f18171c1719232f&type=face&width=512&instanceCount=1'/>
    </div>
    </div>

  );
}


