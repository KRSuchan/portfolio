import { ProjectDetail } from "./project-detail";
import { projects } from "@/data/projects";

export function generateStaticParams() {
    return Object.keys(projects).map((id) => ({
        id,
    }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects[params.id as keyof typeof projects];

    if (!project) {
        return <div>프로젝트를 찾을 수 없습니다.</div>;
    }

    return <ProjectDetail project={project} />;
}
