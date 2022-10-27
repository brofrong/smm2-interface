import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        tomorrow: 'Tomorrow, sans-serif',
      },
      colors: {
        aqua: {
          100: "#94F9E2",
          500: "#26AFA0",
          900: "#0CA883",
        },
      },
      animation: {
        "button-focus": "button-focus 1s ease-in-out infinite",
      },
      keyframes: {
        "button-focus": {
          "0%, 100%": { transform: "translate(-3px,3px)", color: "red" },
          "50%": { transform: "translate(-4px, 4px)", color: "orange" },
        },
      },
    },
  },
  preflight: {
    "@import":
      "url(https://fonts.googleapis.com/css?family=Tomorrow:semibold,Regular)",
  },
} as Options;
