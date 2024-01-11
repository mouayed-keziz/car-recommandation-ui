import { Car } from "lucide-react";
import ThemeToggle from "@/components/theme-toggler";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
    return (
        <>
            <nav className="container flex justify-between items-center py-4">

                <h1 className="text-xl font-bold text-center flex justify-start items-center gap-4">
                    <Car size="2rem" />
                    <span>CAR RECOMMENDATION SYSTEM</span>
                </h1>
                <ThemeToggle />
            </nav>
            <Separator />
        </>
    );
}