import OrbitingCircles from "@/components/ui/orbiting-circles";
import { Icons } from "@/components/ui/logo-icons";

export function OrbitingCirclesDemo() {
  const isMobile = typeof window === "undefined" ? false : window.innerWidth < 768;
  return (
    <div className="relative flex h-[350px] w-[350px] md:h-[450px] md:w-full flex-col items-center justify-center overflow-hidden bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-100 bg-clip-text text-center text-6xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-primary">
        ESSIO
      </span>

      {/* Inner Circles */}
      <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={10} radius={80}>
        <Icons.gemini />
      </OrbitingCircles>
      <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={20} radius={80}>
        <Icons.claude />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent dark:bg-white"
        radius={160}
        duration={20}
        delay={0}
        reverse
      >
        <Icons.openai />
      </OrbitingCircles>
      <OrbitingCircles className="size-[50px] border-none bg-transparent" radius={160} duration={20} delay={30} reverse>
        <Icons.perplexity />
      </OrbitingCircles>
    </div>
  );
}
