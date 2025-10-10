import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowLeft, DollarSign } from "lucide-react";
import type React from "react";
import { Link } from "react-router";

interface Props {
  title: string;
  description?: string;
  children: React.ReactNode;
  showIcon: boolean;
}

export const CardForm = ({ title, description, showIcon, children }: Props) => {
  return (
    <Card className="w-full max-w-lg glass-effect">
      <CardHeader className="space-y-1">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
        {showIcon && (
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full text-white bg-blue-600 flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        )}
        <CardTitle className="text-4xl font-bold text-center pt-3">
          {title}
        </CardTitle>
        <CardDescription className="text-center">
          {description}
        </CardDescription>
      </CardHeader>
      {children}
    </Card>
  );
};
