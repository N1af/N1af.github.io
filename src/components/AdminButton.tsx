import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const handleAdminClick = () => {
    toast({
      title: "Admin Panel",
      description: "To view booking details, please connect Supabase for secure data storage and authentication.",
      variant: "default"
    });
  };

  // Show admin button only when specific key combination is pressed
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      setIsVisible(!isVisible);
    }
  };

  // Add event listener for admin access
  useState(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  });

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={handleAdminClick}
        variant="outline"
        size="sm"
        className="bg-background/90 backdrop-blur-sm"
      >
        <Settings className="w-4 h-4 mr-2" />
        Admin Panel
      </Button>
    </div>
  );
};

export default AdminButton;