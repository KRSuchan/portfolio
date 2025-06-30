"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="font-bold text-xl">
                    <Link href="/">Suchan Lee</Link>
                </div>
                <div className="flex items-center space-x-6">
                    <Link
                        href="#about"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="#projects"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Contact
                    </Link>
                    <ThemeToggle />
                    <a href="/이수찬_이력서.pdf" target="_blank">
                        <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Resume
                        </Button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
