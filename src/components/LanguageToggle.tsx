import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center h-8 w-[72px] rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      style={{
        backgroundColor: language === "en" ? "hsl(var(--primary))" : "hsl(var(--accent))",
      }}
      title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
    >
      {/* Labels */}
      <span 
        className={`absolute left-2 text-[10px] font-bold transition-opacity duration-300 ${
          language === "en" ? "opacity-100 text-primary-foreground" : "opacity-50 text-accent-foreground"
        }`}
      >
        EN
      </span>
      <span 
        className={`absolute right-2 text-[10px] font-bold transition-opacity duration-300 ${
          language === "pt" ? "opacity-100 text-accent-foreground" : "opacity-50 text-primary-foreground"
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
