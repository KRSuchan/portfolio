export const projects = {
    "coca-project-v2": {
        id: "coca-project-v2",
        title: "COCA Project V2",
        description:
            "기존 미완성이었던 COCA 프로젝트를 완성하고 배포와 함께 CI/CD 파이프라인을 구축하는 개인 프로젝트",
        simpleTech: [
            "SpringBoot",
            "React",
            "JWT",
            "Docker",
            "AWS",
            "GitHub Actions",
        ],
        tech: [
            "백엔드 : Spring Boot / Spring Security / JWT / Redis / MySQL",
            "프론트 : React / Nginx",
            "배포 : Docker / Docker Compose",
            "CI/CD : GitHub Actions",
            "호스팅 : AWS EC2 / RDS",
            "보안 : HTTPS",
        ],
        github: [
            {
                name: "COCA-Deploy-v2",
                url: "https://github.com/KRSuchan/COCA-Deploy-v2",
            },
            {
                name: "COCA-Backend-v2",
                url: "https://github.com/KRSuchan/COCA-Backend-v2",
            },
            {
                name: "COCA-Frontend-v2",
                url: "https://github.com/KRSuchan/COCA-Frontend-v2",
            },
        ],
        live: "https://coca-project.site/",
        images: [`/placeholder.svg`, `/placeholder.svg`, `/placeholder.svg`],
        longDescription:
            "기존 COCA 프로젝트의 기능을 개선하고, 배포와 함께 CI/CD 파이프라인을 구축하는 개인 프로젝트입니다.\n==테스트 계정==\nID : tester0000\nPWD : tester0000 ",
        features: [
            "기존 COCA 프로젝트의 기능",
            "트러블 슈팅",
            "코드 개선",
            "CI/CD",
            "사이트 배포",
            "JWT 구조 개선",
        ],
        isTeamProject: true,
        teamSize: 1,
        isPrized: false,
        role: "풀스택 개발자",
    },
    "coca-project-v1": {
        id: "coca-project-v1",
        title: "COCA Project",
        description:
            "대학교 졸업 프로젝트로, 사용자 간 일정 공유와 협업을 지원하는 플랫폼 서비스입니다.",
        simpleTech: [
            "SpringBoot",
            "React",
            "JWT",
            "Docker",
            "AWS",
            "GitHub Actions",
        ],
        tech: [
            "백엔드 : Spring Boot / Spring Security / JWT / Redis / MySQL",
            "프론트 : React",
        ],
        github: [
            {
                name: "COCA-Backend",
                url: "https://github.com/kit-COCA/COCA-Backend",
            },
            {
                name: "COCA-Frontend",
                url: "https://github.com/kit-COCA/COCA-Frontend",
            },
        ],
        live: "#",
        images: [
            `/코카1/코카1_1.webp`,
            `/코카1/코카1_2.webp`,
            `/코카1/코카1_3.webp`,
            `/코카1/코카1_4.webp`,
            `/코카1/코카1_5.webp`,
            `/코카1/코카1_6.webp`,
        ],
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
        id: "Pokits-project",
        title: "Pokits",
        description: "대학생활 정보 통합 애플리케이션 프로젝트입니다.",
        simpleTech: [
            "React Native",
            "Firebase",
            "ChatGPT",
            "Python",
            "Raspberry Pi",
            "Flutter",
        ],
        tech: [
            "React Native",
            "Firebase",
            "ChatGPT",
            "Python",
            "Raspberry Pi",
            "Flutter",
        ],
        github: [
            {
                name: "Pokits-App",
                url: "https://github.com/KRSuchan/PokitsApplication",
            },
        ],
        live: "#",
        images: [
            `/포킷츠/포킷츠1.webp`,
            `/포킷츠/포킷츠2.webp`,
            `/포킷츠/포킷츠3.webp`,
            `/포킷츠/포킷츠4.webp`,
            `/포킷츠/포킷츠5.webp`,
            `/포킷츠/포킷츠6.webp`,
        ],
        longDescription:
            "대학생활 정보 통합 애플리케이션 프로젝트로, React Native로 프론트엔드를 개발하고, Python으로 백엔드를 개발했습니다. 소식 정보의 경우 ChatGPT를 사용하여 요약하여 제공합니다. 또한 버스 정보는 Raspberry Pi를 사용하여 ChatGPT, 버스 정보 API를 제공합니다.",
        features: [
            "버스 정보 제공",
            "식당 정보 제공",
            "소식 정보 제공",
            "일정 정보 제공",
        ],
        isTeamProject: true,
        teamSize: 4,
        isPrized: true,
        prize: "대학 교내 공모전 은상 수상",
        role: "프로토타입 개발, 애플리케이션 개발자",
    },
};
