import useWindowSize from "hooks/useWindowSize";

export default function useBreakpoint() {
  const { breakpoint } = useWindowSize();

  const isMobile = breakpoint === "mobile";
  const isPad = breakpoint === "pad";
  const isDesktop = breakpoint === "desktop";

  return {
    isMobile,
    isPad,
    isDesktop,
  };
}
