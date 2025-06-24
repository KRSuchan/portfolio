"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Users, Medal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/app/components/navbar";

interface Project {
    title: string;
    description: string;
    tech: string[];
    github: {
        name: string;
        url: string;
    }[];
    live: string;
    image: string;
    longDescription: string;
    features: string[];
    isTeamProject: boolean;
    teamSize?: number;
    role?: string;
    isPrized: boolean;
    prize?: string;
}

export function ProjectDetail({ project }: { project: Project }) {
    return (
        <>
            <Navbar />
            <div className="container py-16">
                <div className="max-w-4xl mx-auto">
                    <Link href="/#projects">
                        <Button variant="ghost" className="mb-8">
                            ← 프로젝트 목록으로 돌아가기
                        </Button>
                    </Link>

                    <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-5 mb-8">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <h1 className="text-4xl font-bold">
                                        {project.title}
                                    </h1>
                                    {project.isPrized && (
                                        <div>
                                            <Badge
                                                variant="secondary"
                                                className="flex items-center gap-1"
                                            >
                                                <Medal className="w-4 h-4" />
                                                <span className="text-muted-foreground">
                                                    {project.prize}
                                                </span>
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                                {project.isTeamProject && (
                                    <div className="flex items-center gap-4">
                                        <Badge
                                            variant="secondary"
                                            className="flex items-center gap-1"
                                        >
                                            <Users className="w-4 h-4" />
                                            {project.teamSize}
                                        </Badge>
                                        <span className="text-muted-foreground">
                                            역할: {project.role}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {project.live !== "#" && (
                                    <Button
                                        variant="outline"
                                        size="icon"
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
                        <div className="flex gap-2">
                            {project.github.map(({ url, name }) => (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(
                                            url,
                                            "_blank",
                                            "noopener,noreferrer"
                                        );
                                    }}
                                >
                                    <Github className="w-4 h-4" />
                                    <span className="text-sm">{name}</span>
                                </Button>
                            ))}
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle>프로젝트 개요</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground mb-6">
                                    {project.longDescription}
                                </p>

                                <h3 className="text-xl font-semibold mb-4">
                                    주요 기능
                                </h3>
                                <ul className="list-disc list-inside space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="text-muted-foreground"
                                        >
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>사용 기술</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
