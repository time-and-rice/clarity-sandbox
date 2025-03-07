import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const clarityEnabledPaths = ["/about"];

const shouldClarityBeEnabled = (pathname: string) => {
  return clarityEnabledPaths.includes(pathname);
};

export const useClarity = () => {
  const router = useRouter();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fn = async () => {
      if (window == null) return;

      if (!isInitialized) {
        if (!shouldClarityBeEnabled(router.pathname)) return;

        const Clarity = await import("@microsoft/clarity");
        Clarity.default.init(process.env.NEXT_PUBLIC_CLARITY_ID || "");
        setIsInitialized(true);
        setIsActive(true);
        return;
      }

      if (shouldClarityBeEnabled(router.pathname) && !isActive) {
        window.clarity?.("start", {});
        setIsActive(true);
      }

      if (!shouldClarityBeEnabled(router.pathname) && isActive) {
        window.clarity?.("stop");
        setIsActive(false);
      }
    };

    fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);
};
