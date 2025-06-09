"use client";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            안녕하세요, 저는 [이름]입니다
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            프론트엔드 개발자
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                프로젝트 보기
                            </button>
                            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
                                연락하기
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        About Me
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-gray-600 mb-6">
                            저는 사용자 경험을 중요시하는 프론트엔드
                            개발자입니다. 최신 웹 기술을 활용하여 반응형이고
                            접근성이 좋은 웹 애플리케이션을 만드는 것을
                            좋아합니다.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold mb-2">기술 스택</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>React / Next.js</li>
                                    <li>TypeScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">관심 분야</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>웹 성능 최적화</li>
                                    <li>사용자 경험 디자인</li>
                                    <li>접근성</li>
                                    <li>반응형 웹 디자인</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        프로젝트
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project Card 1 */}
                        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    프로젝트 제목
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    프로젝트에 대한 간단한 설명을 작성합니다.
                                </p>
                                <div className="flex gap-2">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                        React
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        TypeScript
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        연락처
                    </h2>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-gray-600 mb-8">
                            프로젝트나 협업에 대해 이야기하고 싶으시다면
                            언제든지 연락해주세요.
                        </p>
                        <div className="flex justify-center gap-6">
                            <a
                                href="mailto:your.email@example.com"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                이메일
                            </a>
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
