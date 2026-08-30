import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "LIFE RPG", description: "Suba de nível na vida real." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
