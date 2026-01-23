import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NFCWelcome = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState<"hi" | "meet" | "fade">("hi");

  useEffect(() => {
    // Stage 1: "Hi, I'm Johnny" for 2 seconds
    const timer1 = setTimeout(() => {
      setStage("meet");
    }, 2000);

    // Stage 2: "Nice to meet you!" for 2 seconds
    const timer2 = setTimeout(() => {
      setStage("fade");
    }, 4000);

    // Stage 3: Navigate to home after fade
    const timer3 = setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-accent dark:bg-[hsl(214,100%,18%)] flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* First message: Hi, I'm Johnny */}
        <div
          className={`absolute text-center transition-all duration-700 ease-in-out ${
            stage === "hi"
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[hsl(214,100%,18%)] dark:text-white">
            Hi, I'm{" "}
            <span className="text-primary dark:text-accent">Johnny</span>
          </h1>
        </div>

        {/* Second message: Nice to meet you! */}
        <div
          className={`absolute text-center transition-all duration-700 ease-in-out ${
            stage === "meet"
              ? "opacity-100 translate-y-0"
              : stage === "hi"
              ? "opacity-0 translate-y-20"
              : "opacity-0 -translate-y-20"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[hsl(214,100%,18%)] dark:text-white">
            Nice to meet you!
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-[hsl(214,100%,18%)]/70 dark:text-white/70">
            Welcome to my portfolio
          </p>
        </div>

        {/* Fade overlay for transition to home */}
        <div
          className={`fixed inset-0 bg-accent dark:bg-[hsl(214,100%,18%)] transition-opacity duration-1000 pointer-events-none ${
            stage === "fade" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default NFCWelcome;
