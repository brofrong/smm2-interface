import { JSX } from "preact";

export function ButtonHint({ button, ...props }: { props?: JSX.HTMLAttributes<HTMLDivElement>, button: string }) {
    return (
        <div {...props} class='absolute bottom-0 right-0 w-full h-full translate-1/2 w-4 h-4 rounded-full bg-yellow-900 text-white text-sm text-center leading-[1.1] select-none'>
            {button}
        </div>
    );
}


