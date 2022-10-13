import { ComponentChildren, JSX } from "preact";

export function Button({ Icon, label, ...props }: JSX.HTMLAttributes<HTMLButtonElement> & { label: string, Icon: JSX.Element }) {
  return (
    <button
      {...props}
      onClick={(event) => { event.preventDefault(); event.target.blur(); event.target.parentNode?.blur();}}
      class={"p-2 rounded bg-aqua-500 text-white flex flex-col justify-center items-center gap-2 shadow group relative min-w-[200px] focus:(outline-none scale-[102%]) hover:scale-[102%] transition-transform active:scale-95 " + props.class}
    >
      <div class="hidden absolute top-0 bottom-0 left-0 right-0 group-focus:block group-hover:block">
        <ButtonCorner class="absolute bottom-0 left-0 " />
        <ButtonCorner class="absolute top-0 left-0 rotate-90" />
        <ButtonCorner class="absolute bottom-0 right-0 -rotate-90" />
        <ButtonCorner class="absolute top-0 right-0 rotate-180" />
      </div>
      {Icon}
      <div>{label}</div>
    </button>
  );
}

function ButtonCorner(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <svg class="animate-button-focus" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 13V1.00001C0 1.00001 0 0.5 0.5 0.5C1 0.5 15.5 15 15.5 15.5C15.5 16 15 16 15 16H3C1 16 0 15 0 13Z" fill="currentcolor" />
      </svg>
    </div>
  )
}

