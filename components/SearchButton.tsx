import { JSX } from "preact";
import { SearchIcon } from "./icons/SearchIcon.tsx";

export function SearchButton(props: JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} >
            <div class='w-24 h-16 p-2 shadow rounded-tl rounded-bl cursor-pointer  bg-blue-900 transition-[width] duration-75 flex items-center gap-2 active:w-28'>
                <SearchIcon width="40" height="40" />
                <div class="text-white">ID</div>
            </div>
        </div>

    );
}


