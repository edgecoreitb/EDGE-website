import { IBM_Plex_Sans_Condensed } from "next/font/google";
import { Mohave } from "next/font/google";

export const DEFAULT_FONT = IBM_Plex_Sans_Condensed({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const MOHAVE_FONT = Mohave({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});