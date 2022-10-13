import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { CastleIcon } from "../components/icons/CastleIcon.tsx";
import { FlagIcon } from "../components/icons/FlagIcon.tsx";
import { HelmetIcon } from "../components/icons/HelmetIcon.tsx";
import { NetworkIcon } from "../components/icons/NetworkIcon.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Button label="Уровни" Icon={<CastleIcon class="text-white" />} onClick={() => setCount(count - 1)}></Button>
        <Button class="bg-indigo-400" label="Рейтинги" Icon={<HelmetIcon class="text-white" />} onClick={() => setCount(count - 1)}></Button>
        <Button class="bg-yellow-500" label="Сетевая Игра" Icon={<NetworkIcon class="text-white" />} onClick={() => setCount(count - 1)}></Button>
        <Button class="bg-pink-500" label="Марафон Марио" Icon={<FlagIcon class="text-white" />} onClick={() => setCount(count - 1)}></Button>
        <Button class="bg-green-200" label="Привет Света" Icon={<FlagIcon class="text-white" />} onClick={() => setCount(count - 1)}></Button>
        <Button class="bg-black" label="Быстрый диплой" Icon={<FlagIcon class="text-white" />} onClick={() => setCount(count - 1)}></Button>
      </div>
  );
}
