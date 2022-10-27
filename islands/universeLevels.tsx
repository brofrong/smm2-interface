import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { CastleIcon } from "../components/icons/CastleIcon.tsx";
import { FlagIcon } from "../components/icons/FlagIcon.tsx";
import { HelmetIcon } from "../components/icons/HelmetIcon.tsx";
import { NetworkIcon } from "../components/icons/NetworkIcon.tsx";
import { SearchButton } from "../components/SearchButton.tsx";
import { SideBarButton } from "../components/SideBarButton.tsx";
import { UserProfileButton } from "../components/UserProfileButton.tsx";

export default function UniverseLevels() {
    return (
        <div class="p-16 md:p-32 min-h-screen bg-gray-500 flex justify-center items-center relative">
            <UserProfileButton class='absolute top-2 left-2'/>
            <SideBarButton  class='absolute top-2 right-2'/>
            <SearchButton class='absolute right-0 top-16 md:top-1/4'/>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <Button label="Courses" Icon={<CastleIcon class="text-white" />}></Button>
                <Button class="bg-indigo-400" label="Leaderboards" Icon={<HelmetIcon class="text-white" />}></Button>

                <h3 class="text-white md:col-span-2 text-center font-semibold text-5xl font-tomorrow">Course World</h3>

                <Button class="bg-yellow-500" label="Nerwork Play" Icon={<NetworkIcon class="text-white" />}></Button>
                <Button class="bg-pink-500" label="Endlless Challenge" Icon={<FlagIcon class="text-white" />}></Button>
            </div>
        </div>
    );
}
