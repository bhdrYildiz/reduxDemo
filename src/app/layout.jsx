import { ReduxProvider } from "@/components/redux-provider";
import { store } from "./stores";
import { fetchUser } from "./stores/user-store";
import { Header } from "@/components/header";
import "@/../style.css";

export default async function RootLayout({ children }) {
  await store.dispatch(fetchUser());

  const initialState = store.getState();

  return (
    <html>
      <body>
        <ReduxProvider initialState={initialState}>
          <Header />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
