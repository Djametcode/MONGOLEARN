import Layout from "@/components/layout";
import "@/styles/globals.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [config, setConfig] = useState("");
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/");
    } else {
      router.push("landing");
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setConfig(config);
  }, []);
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} config={config} />);
}
