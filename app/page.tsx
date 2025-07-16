"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Github,
    Mail,
    ExternalLink,
    CheckCircle2,
    Users,
    Medal,
    Calendar,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./components/navbar";
import { projects as projectsObj } from "@/data/projects";
import Link from "next/link";

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
                        <div className="text-muted-foreground ">
                            안녕하세요, 소프트웨어의 안정성과 효율성을 중시하는
                            웹 개발자 이수찬입니다. <br />
                            Java와 Spring Boot를 중심으로 웹 서비스의 구조를
                            설계하고 구현하는 데 관심이 많으며, <br />
                            데이터베이스 설계와 API 개발 경험을 통해 시스템의
                            탄탄한 기반을 만드는 데 집중하고 있습니다.
                            <br />
                            협업과 커뮤니케이션을 중요하게 생각하며, 함께
                            성장하는 개발자가 되고 싶습니다.
                            <br />
                        </div>
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

            {/* History Section */}
            <section id="history" className="container py-16">
                <h2 className="text-3xl font-bold mb-8">History</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">학력</h3>
                        <div className="space-y-4">
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h3 className="text-lg font-medium mb-1">
                                    금오공과대학교 컴퓨터소프트웨어공학과(편입)
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>2020.03 - 2024.08</span>
                                </div>
                                <span className="text-muted-foreground">
                                    학점 : 3.66 / 4.5
                                </span>
                            </div>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h3 className="text-lg font-medium mb-1">
                                    동명대학교 디지털미디어공학부
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>2018.03 - 2020.02</span>
                                </div>
                                <span className="text-muted-foreground">
                                    학점 : 4.36 / 4.5
                                </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">교육</h3>
                        <div className="space-y-4">
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h3 className="text-lg font-medium mb-1">
                                    AWS TechCamp Online
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>2025.03, 2025.06</span>
                                </div>
                            </div>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h3 className="text-lg font-medium mb-1">
                                    실전! 스프링 부트와 JPA 활용1, 2 - 웹
                                    애플리케이션 개발
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>2025.03 - 2025.04</span>
                                </div>
                            </div>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h3 className="text-lg font-medium mb-1">
                                    스프링 시큐리티 완전 정복 [6.x 개정판]
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>2024.07 - 2024.10</span>
                                </div>
                            </div>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h3 className="text-lg font-medium mb-1">
                                    메타버스 허브 스쿨 - AR기반 실감형 콘텐츠
                                    제작 기술 교육
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>2023.05 - 2023.06</span>
                                </div>
                            </div>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h3 className="text-lg font-medium mb-1">
                                    메타버스 허브 스쿨 - 워밍업, 스킬업 클래스
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>2022.10 - 2022.12</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            수상 및 자격증
                        </h3>
                        <div className="space-y-4">
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h3 className="text-lg font-medium mb-1">
                                    정보처리기사
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>2025.06</span>
                                </div>
                            </div>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h3 className="text-lg font-medium mb-1">
                                    DAsP (데이터아키텍처 준전문가)
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>2024.10</span>
                                </div>
                            </div>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h3 className="text-lg font-medium mb-1">
                                    KIT Engineering Fair 2023 은상
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>2023.11</span>
                                </div>
                            </div>
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

            {/* Footer */}
            <footer className="border-t">
                <div className="container py-8 text-h1">
                    <Link href={"/"}>©Suchan Lee.</Link>
                </div>
            </footer>
        </div>
    );
}
