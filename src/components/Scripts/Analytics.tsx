import { useState, useEffect } from "react";
import { Analytics } from "@/lib/MainConstants";
import Script from "next/script";

export const AnalyticsScripts = () => {
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    const handleEvent = () => {
      setLoadScript(true);
      window.removeEventListener("touchstart", handleEvent);
      window.removeEventListener("mousemove", handleEvent);
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("keydown", handleEvent);
      window.removeEventListener("mousedown", handleEvent);
    };

    window.addEventListener("touchstart", handleEvent);
    window.addEventListener("mousemove", handleEvent);
    window.addEventListener("scroll", handleEvent);
    window.addEventListener("keydown", handleEvent);
    window.addEventListener("mousedown", handleEvent);

    return () => {
      window.removeEventListener("touchstart", handleEvent);
      window.removeEventListener("mousemove", handleEvent);
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("keydown", handleEvent);
      window.removeEventListener("mousedown", handleEvent);
    };
  }, []);

  return (
    <>
      {loadScript && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${Analytics.GOOGLE_ANALYTICS_ID}`}
          />
          <Script
            id="gtag"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${Analytics.GOOGLE_ANALYTICS_ID}', {page_path: window.location.pathname,});`,
            }}
          />
          <Script
            strategy="afterInteractive"
            src={`${Analytics.UMAMI.SELF_HOST_URL}/script.js`}
            data-website-id={Analytics.UMAMI.WEBSITE_ID}
          />
        </>
      )}
    </>
  );
};
