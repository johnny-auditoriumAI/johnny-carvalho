import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="text-primary-foreground hover:bg-primary-foreground/10"
      title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
    >
      <span className="text-sm font-bold">
        {language === "en" ? "PT" : "EN"}
      </span>
    </Button>
  );
}
