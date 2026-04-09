import type { Metadata } from "next";
import PepeLanding from "@/components/PepeLanding";

export const metadata: Metadata = {
  title: "OG Pepe — The Original Frog on Ethereum",
  description:
    "OG Pepe: certified swamp classic deployed in 2020. Supply: 37,321. Tax: 0%.",
};

export default function Home() {
  return <PepeLanding />;
}
