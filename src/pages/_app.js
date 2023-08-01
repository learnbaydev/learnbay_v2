import "@/styles/globals.scss";
import { open_sans } from "@/util/font";
import { Provider } from "react-redux";
import store from "../../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={open_sans.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
