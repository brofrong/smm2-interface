import { Head } from "$fresh/runtime.ts";
import UniverseLevels from "../islands/universeLevels.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <UniverseLevels/>
    </>
  );
}
