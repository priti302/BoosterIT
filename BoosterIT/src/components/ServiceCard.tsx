import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, gradient = false }: ServiceCardProps) => {
  return (
    <Card className={`hover-lift border-none shadow-md ${gradient ? 'gradient-card' : ''}`}>
      <CardHeader>
        <div className={`w-16 h-16 rounded-2xl ${gradient ? 'gradient-primary' : 'bg-primary/10'} flex items-center justify-center mb-4 shadow-sm`}>
          <Icon className={`h-8 w-8 ${gradient ? 'text-white' : 'text-primary'}`} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
