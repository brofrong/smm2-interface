import { JSX } from "preact";

export function SearchIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg width="64" height="64" {...props} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="18" stroke="white" stroke-width="4" />
            <rect x="41.5355" y="38" width="22" height="5" transform="rotate(45 41.5355 38)" fill="white" />
        </svg>

    )
}

