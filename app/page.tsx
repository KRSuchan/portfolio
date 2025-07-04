"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Github,
    Mail,
    ExternalLink,
    MapPin,
    CheckCircle2,
    Users,
    Medal,
    Calendar,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import { projects as projectsObj } from "@/data/projects";

export default function Portfolio() {
    const [showToast, setShowToast] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("lsc1814@naver.com");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    const skills = [
        "Java",
        "SpringBoot",
        "MySQL",
        "AWS",
        "Docker",
        "Git",
        "JavaScript",
        "React",
        "React Native",
        "데이터베이스 설계",
        "소프트웨어 설계",
    ];

    const projects = Object.values(projectsObj);

    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <Navbar />
            {/* Hero Section */}
            <section className="container py-24 md:py-32">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-48 max-w-3xl mx-auto">
                    <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex-shrink-0">
                        <Image
                            src={`/이수찬_프로필.jpeg`}
                            alt="Profile"
                            fill
                            className="rounded-full border-4 border-primary/20 object-cover object-top"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-6xl md:text-6xl font-bold mb-10 whitespace-nowrap">
                            안녕하세요, <br />
                            웹 개발자 <br />
                            이수찬입니다.
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 whitespace-nowrap">
                            소프트웨어의 안정성과 효율성을 중시하는
                            개발자입니다.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button onClick={copyEmail} className="relative">
                                <Mail className="w-4 h-4 mr-2" />
                                Copy Email
                                <div
                                    className={`absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300 ${
                                        showToast
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-2"
                                    }`}
                                >
                                    <div className="bg-green-500 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span className="italic">
                                            복사완료!
                                        </span>
                                    </div>
                                </div>
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    window.open(
                                        "https://github.com/KRSuchan",
                                        "_blank",
                                        "noopener,noreferrer"
                                    )
                                }
                            >
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="container py-16">
                <h2 className="text-3xl font-bold mb-8">About</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">소개</h3>
                        <p className="text-muted-foreground">
                            안녕하세요, 소프트웨어의 안정성과 효율성을 중시하는
                            웹 개발자 이수찬입니다. Java와 Spring Boot를
                            중심으로 웹 서비스의 구조를 설계하고 구현하는 데
                            관심이 많으며, 데이터베이스 설계와 API 개발 경험을
                            통해 백엔드 시스템의 탄탄한 기반을 만드는 데
                            집중하고 있습니다. 협업과 커뮤니케이션을 중요하게
                            생각하며, 함께 성장하는 개발자가 되고 싶습니다.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            기술 스택
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="container py-16">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="group cursor-pointer"
                            onClick={() =>
                                (window.location.href = `/projects/${project.id}`)
                            }
                        >
                            <div className="relative aspect-video">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex items-center gap-2">
                                            {project.title}
                                            {project.isPrized && (
                                                <span className="text-primary">
                                                    <Medal className="w-4 h-4" />
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex items-center gap-2">
                                            {project.isTeamProject && (
                                                <Badge
                                                    variant="secondary"
                                                    className="flex items-center gap-1"
                                                >
                                                    <Users className="w-4 h-4" />
                                                    {project.teamSize}
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            {project.live !== "#" && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        window.open(
                                                            project.live,
                                                            "_blank",
                                                            "noopener,noreferrer"
                                                        );
                                                    }}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardTitle>
                                <div className="flex gap-2 items-center">
                                    <Calendar className="w-4 h-4" />
                                    {project.date}
                                </div>
                                <p className="text-muted-foreground">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.simpleTech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-primary/10 rounded-full text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="container py-16">
                <h2 className="text-3xl font-bold mb-8">Contact</h2>
                <div className="max-w-md mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Get In Touch</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Seoul, South Korea</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4" />
                                    <span>lsc1814@naver.com</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            {/*  Section */}

            <footer className="border-t">
                <div className="container py-8">
                    <p className="text-center text-muted-foreground">
                        © 2025 Suchan Lee. All rights reserved.
                        <br />
                        CI/CD : GitHub Actions
                        <br />
                        Deploy : GitHub Pages
                        <br />
                        Next.js : Cursor AI
                        <br />
                        Design : V0 AI
                    </p>
                </div>
            </footer>
        </div>
    );
}
