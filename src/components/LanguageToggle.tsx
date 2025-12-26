import { useLanguage } from "./LanguageProvider";

interface LanguageToggleProps {
  isScrolled?: boolean;
}

export function LanguageToggle({ isScrolled = false }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  // Colors based on scroll state (in dark mode)
  // Not scrolled: navy blue background, yellow text
  // Scrolled: yellow background, navy blue text
  const bgColor = isScrolled 
    ? "bg-accent dark:bg-accent" 
    : "bg-[#1a365d] dark:bg-[#1a365d]";
  
  const activeTextColor = isScrolled 
    ? "text-[#1a365d] dark:text-[#1a365d]" 
    : "text-accent dark:text-accent";
  
  const inactiveTextColor = isScrolled 
    ? "text-[#1a365d]/50 dark:text-[#1a365d]/50" 
    : "text-accent/50 dark:text-accent/50";

  return (
    <button
      onClick={toggleLanguage}
      className={`relative flex items-center h-8 w-[72px] rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${bgColor}`}
      title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
    >
      {/* Labels */}
      <span 
        className={`absolute left-2 text-[10px] font-bold transition-opacity duration-300 ${
          language === "en" ? `opacity-100 ${activeTextColor}` : `opacity-50 ${inactiveTextColor}`
        }`}
      >
        EN
      </span>
      <span 
        className={`absolute right-2 text-[10px] font-bold transition-opacity duration-300 ${
          language === "pt" ? `opacity-100 ${activeTextColor}` : `opacity-50 ${inactiveTextColor}`
        }`}
      >
        PT
      </span>
      
      {/* Sliding thumb */}
      <span
        className={`absolute h-6 w-6 rounded-sm bg-white shadow-md transition-all duration-300 ${
          language === "en" ? "left-1" : "left-[calc(100%-28px)]"
        }`}
      />
    </button>
  );
}
