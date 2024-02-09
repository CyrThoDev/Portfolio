import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio ",
  description: "Portfolio",
};

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
