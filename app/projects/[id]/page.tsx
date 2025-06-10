import { ProjectDetail } from "./project-detail";

const projects = {
    "coca-project-v2": {
        title: "COCA Project V2",
        description:
            "기존 미완성이었던 COCA 프로젝트를 완성하고 배포와 함께 CI/CD 파이프라인을 구축하는 개인 프로젝트",
        tech: [
            "백엔드 : Spring Boot / Spring Security / JWT / Redis / MySQL",
            "프론트 : React / Nginx",
            "배포 : Docker / Docker Compose",
            "CI/CD : GitHub Actions",
            "호스팅 : AWS EC2 / RDS",
            "보안 : HTTPS",
        ],
        github: "#",
        live: "https://coca-project.site/",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/placeholder.svg`,
        longDescription:
            "COCA 프로젝트는 전자상거래 플랫폼으로, 결제 시스템 통합, 재고 관리, 관리자 대시보드 등 다양한 기능을 제공합니다. V1에서는 기본적인 전자상거래 기능을 구현했고, V2에서는 사용자 경험을 개선하고 성능을 최적화했습니다.",
        features: [
            "기존 COCA 프로젝트의 기능",
            "오류 개선",
            "CI/CD",
            "사이트 배포",
            "JWT",
        ],
        isTeamProject: true,
        teamSize: 1,
        isPrized: false,
        role: "풀스택 개발자",
    },
    "coca-project-v1": {
        title: "COCA Project",
        description: "Description of project 2",
        tech: [
            "백엔드 : Spring Boot / Spring Security / JWT / Redis / MySQL",
            "프론트 : React",
        ],
        github: "#",
        live: "#",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/placeholder.svg`,
        longDescription:
            "사용자 간 일정 공유와 협업을 지원하는 서비스로, 개인 일정뿐 아니라 그룹 단위의 일정 조율까지 한 번에 관리할 수 있는 플랫폼입니다.",
        features: [
            "회원 관리(6): 회원 가입, 로그인, 로그아웃, 개인 정보 조회 및 수정, 회원 탈퇴",
            "일정 관리(14): 빈 일정 찾기, 개인 일정 관리(CRUD), 그룹 일정 관리(CRUD) 등 14개 기능",
            "그룹 관리(10): 그룹 관리(CRUD), 그룹 공지 관리(CRUD) 등 10개 기능",
            "친구 관리(5): 친구 관리(CRUD), 친구 일정 조회",
            "요청 관리(4): 요청 관리(CRUD)",
            "회원 인증(3): 회원 토큰 생성, 인증",
        ],
        isTeamProject: true,
        teamSize: 4,
        isPrized: false,
        role: "팀장, 소프트웨어/DB 설계, 백엔드 개발자",
    },
    "Pokits-project": {
        title: "Pokits",
        description: "Description of project 3",
        tech: ["React Native", "Firebase", "Python", "Raspberry Pi", "Flutter"],
        github: "#",
        live: "#",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/placeholder.svg`,
        longDescription: "프로젝트 3에 대한 자세한 설명입니다.",
        features: ["주요 기능 1", "주요 기능 2", "주요 기능 3"],
        isTeamProject: true,
        teamSize: 4,
        isPrized: true,
        role: "프로토타입 개발, 모바일 프론트엔드 개발자",
    },
};

export function generateStaticParams() {
    return Object.keys(projects).map((id) => ({
        id: id,
    }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = projects[params.id as keyof typeof projects];

    if (!project) {
        return <div>프로젝트를 찾을 수 없습니다.</div>;
    }

    return <ProjectDetail project={project} />;
}
