"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Github,
    ExternalLink,
    Users,
    Medal,
    ChevronLeft,
    ChevronRight,
    Download,
    Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/app/components/navbar";
import { useState } from "react";

interface Project {
    title: string;
    description: string;
    tech: string[];
    docs?: {
        name: string;
        path: string;
    }[];
    github: {
        name: string;
        url: string;
    }[];
    date: string;
    live: string;
    images: string[];
    longDescription: string;
    features: string[];
    isTeamProject: boolean;
    teamSize?: number;
    role?: string;
    isPrized: boolean;
    prize?: string;
}

export function ProjectDetail({ project }: { project: Project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prev) => (prev - 1 + project.images.length) % project.images.length
        );
    };

    return (
        <>
            <Navbar />
            <div className="container py-16">
                <div className="max-w-8xl mx-auto">
                    <Link href="/#projects">
                        <Button variant="ghost" className="mb-8">
                            ← 프로젝트 목록으로 돌아가기
                        </Button>
                    </Link>

                    <div className="grid lg:grid-cols-5 gap-8 mb-8 h-[70vh]">
                        <div
                            className="lg:col-span-3 relative rounded-lg overflow-hidden group cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Image
                                src={project.images[currentImageIndex]}
                                alt={`${project.title} 이미지 ${
                                    currentImageIndex + 1
                                }`}
                                fill
                                className="object-contain"
                            />
                            {project.images.length > 1 && (
                                <>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            prevImage();
                                        }}
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            nextImage();
                                        }}
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </Button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 rounded-full transition-colors ${
                                                    index === currentImageIndex
                                                        ? "bg-white"
                                                        : "bg-white/50"
                                                }`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentImageIndex(index);
                                                }}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="lg:col-span-2 space-y-5 overflow-y-auto pr-4">
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

                                <div className="flex flex-wrap gap-2 items-center">
                                    {project.live !== "#" && (
                                        <>
                                            <Button
                                                variant="outline"
                                                className="flex gap-2 items-center"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(
                                                        project.live,
                                                        "_blank",
                                                        "noopener,noreferrer"
                                                    );
                                                }}
                                            >
                                                <div>웹페이지</div>
                                                <ExternalLink className="w-4 h-4" />
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-2 items-center">
                                <Calendar className="w-4 h-4" />
                                {project.date}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.github.map(({ url, name }) => (
                                    <Button
                                        key={name}
                                        variant="outline"
                                        className="flex gap-2 items-center"
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

                            {project.docs && project.docs.length > 0 && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Docs</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {project.docs.map(
                                                ({ path, name }) => (
                                                    <Button
                                                        key={name}
                                                        variant="outline"
                                                        className="flex gap-2 items-center"
                                                        size="sm"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            window.open(
                                                                path,
                                                                "_blank",
                                                                "noopener,noreferrer"
                                                            );
                                                        }}
                                                    >
                                                        <Download className="w-4 h-4" />
                                                        <span className="text-sm">
                                                            {name}
                                                        </span>
                                                    </Button>
                                                )
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            <Card>
                                <CardHeader>
                                    <CardTitle>프로젝트 개요</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg text-muted-foreground mb-6 whitespace-pre-line">
                                        {project.longDescription}
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4">
                                        주요 기능
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        {project.features.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className="text-muted-foreground"
                                                >
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative max-w-[90vw] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} 이미지 ${
                                currentImageIndex + 1
                            }`}
                            width={1200}
                            height={800}
                            className="object-contain max-w-full max-h-full"
                        />
                        {project.images.length > 1 && (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                                    onClick={prevImage}
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                                    onClick={nextImage}
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </Button>
                            </>
                        )}
                        <button
                            className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
