import { useLanguage } from "./LanguageProvider";

interface LanguageToggleProps {
  isScrolled?: boolean;
}

export function LanguageToggle({ isScrolled = false }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  // Background: navy blue when not scrolled, yellow when scrolled
  const bgColor = isScrolled 
    ? "bg-accent dark:bg-accent" 
    : "bg-[#1a365d] dark:bg-[#1a365d]";
  
  // Text: yellow when not scrolled, navy blue when scrolled
  const textColor = isScrolled 
    ? "text-[#1a365d] dark:text-[#1a365d]" 
    : "text-accent dark:text-accent";

  return (
    <button
      onClick={toggleLanguage}
      className={`relative flex items-center h-8 w-[72px] rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${bgColor}`}
      title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
    >
      {/* Labels */}
      <span 
        className={`absolute left-2.5 text-[10px] font-bold transition-all duration-300 ${textColor} ${
          language === "en" ? "opacity-100" : "opacity-40"
        }`}
      >
        EN
      </span>
      <span 
        className={`absolute right-2.5 text-[10px] font-bold transition-all duration-300 ${textColor} ${
          language === "pt" ? "opacity-100" : "opacity-40"
        }`}
      >
        PT
      </span>
      
      {/* Sliding thumb - circular */}
      <span
        className={`absolute h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 ${
          language === "en" ? "left-1" : "left-[calc(100%-28px)]"
        }`}
      />
    </button>
  );
}
