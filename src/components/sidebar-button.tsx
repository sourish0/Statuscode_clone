import { LucideIcon } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { SheetClose } from "./ui/sheet";

interface SidebarButtonProps extends ButtonProps {
  icon?: LucideIcon;
  children?: ReactNode;
}

const SidebarButton = ({ icon: Icon, className, children, ...props }: SidebarButtonProps) => {
  return (
    <div>
      <Button
        variant='ghost'
        className={cn("rounded-full gap-2 flex mx-auto mt-4 w-full justify-around", className)}
        {...props}
      >
        {Icon && <Icon />}
        <span>{children}</span>
      </Button>
    </div>
  );
};

export default SidebarButton;

export function SidebarButtonSheet(props: SidebarButtonProps) {
  return (
    <SheetClose asChild>
      <SidebarButton {...props} />
    </SheetClose>
  );
}
