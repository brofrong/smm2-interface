import { JSX } from "preact";

export function FlagIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg {...props} width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11V34.5" stroke="white" stroke-width="2" stroke-linecap="round" />
            <path d="M6 24V13L18 18.5L6 24Z" fill="white" />
            <path d="M3 33L29.5 33C42.5 33 39.5 16 29.5 16L25.5 16C18 16 18 2.99998 25.5 2.99997L39 2.99998" stroke="white" stroke-width="2" stroke-linecap="round" />
            <circle cx="39" cy="3" r="3" fill="white" />
            <circle cx="3" cy="33" r="3" fill="white" />
            <circle cx="3" cy="10" r="2" fill="white" />
        </svg>
    )
}