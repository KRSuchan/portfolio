"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Download,
    MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    const skills = [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Docker",
        "Git",
    ];

    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
            tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
            github: "#",
            live: "#",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            title: "Task Management App",
            description:
                "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
            tech: ["React", "Node.js", "Socket.io", "MongoDB"],
            github: "#",
            live: "#",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            title: "Weather Dashboard",
            description:
                "Interactive weather application with location-based forecasts, historical data, and beautiful visualizations.",
            tech: ["Vue.js", "D3.js", "Express", "Weather API"],
            github: "#",
            live: "#",
            image: "/placeholder.svg?height=200&width=300",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="font-bold text-xl">John Doe</div>
                    <div className="hidden md:flex items-center space-x-6">
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
                        <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Resume
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="container py-24 md:py-32">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="relative">
                        <Image
                            src="/placeholder.svg?height=150&width=150"
                            alt="Profile"
                            width={150}
                            height={150}
                            className="rounded-full border-4 border-primary/20"
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Hi, I&apos;m{" "}
                            <span className="text-primary">John Doe</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                            I&apos;m a full-stack developer with a passion for
                            building beautiful and functional web applications.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>San Francisco, CA</span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button size="lg">
                            <Mail className="w-4 h-4 mr-2" />
                            Get In Touch
                        </Button>
                        <Button variant="outline" size="lg">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="container py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I&apos;m passionate about creating beautiful and
                                functional web applications.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                When I&apos;m not coding, you can find me
                                exploring new technologies, contributing to
                                open-source projects, or enjoying the great
                                outdoors.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="outline">
                                    <Linkedin className="w-4 h-4 mr-2" />
                                    LinkedIn
                                </Button>
                                <Button variant="outline">
                                    <Github className="w-4 h-4 mr-2" />
                                    GitHub
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold">
                                Skills & Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="text-sm"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="container py-16 bg-muted/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={
                                            project.image || "/placeholder.svg"
                                        }
                                        alt={project.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        {project.title}
                                        <div className="flex gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                asChild
                                            >
                                                <Link href={project.github}>
                                                    <Github className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                asChild
                                            >
                                                <Link href={project.live}>
                                                    <ExternalLink className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardTitle>
                                    <CardDescription>
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-1">
                                        {project.tech.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="text-xs"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="container py-16">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        I&apos;m always looking for new opportunities to work on
                        exciting projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="flex-1 sm:flex-none">
                            <Mail className="w-4 h-4 mr-2" />
                            Send Email
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="flex-1 sm:flex-none"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download Resume
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-8">
                <div className="container text-center text-muted-foreground">
                    <p>&copy; 2024 John Doe. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
