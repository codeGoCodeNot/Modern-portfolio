import Social from "@/components/social/components/social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left">
            <span className="text-xl">Software developer</span>
            <h1 className="text-3xl font-bold mt-2">
              Hello I'm <br />
              <span className="text-primary">Johnsen Berdin</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground max-w-md">
              I build modern web apps—with clean code and creative solutions.{" "}
              <br />
              Off the clock, you’ll catch me on Dota 2, micro-ing with{" "}
              <span className="font-semibold text-purple-700">
                Invoker
              </span> or{" "}
              <span className="font-semibold text-orange-700">Meepo</span>.
            </p>

            {/* btn and social accs */}
            <div className="flex flex-col lg:flex-row items-center lg:gap-x-8 gap-y-8 mt-8">
              <Button variant="outline" className="rounded-full px-6" size="lg">
                <span>Download CV</span>
                <FiDownload className="ml-1" />
              </Button>
              <div>
                <Social />
              </div>
            </div>
          </div>
          <div>Photo</div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
