import { JSX } from "preact";

export function HelmetIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
    return (
        <svg {...props} width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.99994 25H18.9999C15.7999 23.4 14.9999 20.9372 14.9999 19.9058V15C14.9999 11 18.9999 9 20.9999 9H26.9999C28.9999 9 32.9999 11 32.9999 15V19.9058C32.9999 20.9372 32.1999 23.4 28.9999 25H43.9999V20C39.9999 7.5 30.9999 5 30.9999 5C30.9999 5 31.1665 2.69499 30.9999 2C30.5745 0.224763 29.479 0 28.9999 0H23.9999H18.9999C18.5208 0 17.4253 0.224763 16.9999 2C16.8334 2.69499 16.9999 5 16.9999 5C16.9999 5 8 7.5 3.99994 20V25Z" fill="currentcolor" />
            <path d="M18.5 19.5C18.5 19.5 20.5 13 21 13C21.5 13 24 16.5 24.5 16.5C25 16.5 26.5 12.5 27 12.5C27.5 12.5 29.5 19 29.5 19" stroke="currentcolor" stroke-width="2" stroke-linecap="round" />
            <path d="M2 26H46C46 26 48 26 48 28C48 30 46 30 46 30H2C2 30 0 30 0 28C0 26 2 26 2 26Z" fill="currentcolor" />
        </svg>
    )
}