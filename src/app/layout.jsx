import "@/../style.css";

import { Header } from "@/components/header";
import { Rubik } from "next/font/google";

import { store } from "./stores";
import { fetchUser } from "./stores/user-store";

const BodyFont = Rubik({
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  await store.dispatch(fetchUser());

  console.log(store.getState().user);
  return (
    <html>
      <body className={BodyFont.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
