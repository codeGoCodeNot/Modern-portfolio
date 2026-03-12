import Photo from "@/components/photo/components/photo";
import Social from "@/components/social/components/social";
import Stats from "@/components/stats/components/stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const HomePage = () => {
  return (
    <section className="py-6 lg:py-8">
      <div className="flex flex-col gap-10 lg:gap-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex min-h-[58vh] flex-col items-center justify-center gap-8 lg:min-h-[64vh] lg:flex-row lg:justify-between lg:gap-14">
            <div className="order-2 max-w-xl text-center lg:order-none lg:text-left">
              <span className="text-xl">Software developer</span>
              <h1 className="text-3xl font-bold mt-2">
                Hello I&apos;m <br />
                <span className="text-primary">Johnsen Berdin</span>
              </h1>
              <p className="mt-4 text-base text-muted-foreground max-w-md">
                I build modern web apps—with clean code and creative solutions.{" "}
                <br />
                Off the clock, you’ll catch me on Dota 2, micro-ing with{" "}
                <span className="font-semibold text-purple-700">
                  Invoker
                </span>{" "}
                or <span className="font-semibold text-orange-700">Meepo</span>.
              </p>
              {/* btn and social accs */}
              <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:gap-x-6">
                <Button
                  variant="outline"
                  className="border-primary rounded-full px-6"
                  size="lg"
                  asChild
                >
                  <a href="/assets/cv.pdf" download>
                    <span>Download CV</span>
                    <FiDownload className="ml-1" />
                  </a>
                </Button>
                <div>
                  <Social />
                </div>
              </div>
            </div>
            <div className="order-1 mb-2 lg:order-none lg:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <div className="pb-2 lg:pb-4">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
