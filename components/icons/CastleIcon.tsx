import { JSX } from "preact";

export function CastleIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg {...props} width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 17V39H16V27C16 27 16.5 24 19.5 24C22.5 24 23 27 23 27V39H39V17H32V20H29V17H22V20H17V17H10V20H7V17H0Z" fill="currentcolor" />
            <path d="M8 19H9V16H12V9C12 9 12.5 8 13.5 8C14.5 8 15 9 15 9V16H19V17.5V19H20V16H24V9C24 9 24.5 8 25.5 8C26.5 8 27 9 27 9V16H30V19H31V0H26V4H22V0H17V4H13V0H8V19Z" fill="currentcolor" />
        </svg>
    )
}