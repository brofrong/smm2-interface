import { JSX } from "preact";

export function BurgerIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg  width="64" height="64" viewBox="0 0 64 64" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="14.5" width="50" height="5" fill="white" />
            <rect x="7" y="29.5" width="50" height="5" fill="white" />
            <rect x="7" y="44.5" width="50" height="5" fill="white" />
        </svg>
    )
}

