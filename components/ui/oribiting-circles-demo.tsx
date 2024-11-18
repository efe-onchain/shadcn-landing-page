import OrbitingCircles from "@/components/ui/orbiting-circles";
import { Icons } from "@/components/ui/logo-icons";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden  bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-primary to-gray-100 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-primary">
        Velori
      </span>

      {/* Inner Circles */}
      <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={20} radius={80}>
        <Icons.perplexity />
      </OrbitingCircles>
      <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={10} radius={80}>
        <Icons.claude />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent dark:bg-white"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.openai />
      </OrbitingCircles>
      <OrbitingCircles className="size-[50px] border-none bg-transparent" radius={190} duration={20} delay={20} reverse>
        <Icons.gemini />
      </OrbitingCircles>
    </div>
  );
}
