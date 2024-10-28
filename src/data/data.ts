export interface columnSlideContent {
    link?: string;
    imgSrc?: string;
    imgAlt?: string;
    heading: string;
    description?: string;
    items?: string[];
}

export interface TabSection {
    subtitle: string;
    items: string[];
}

export interface Tab {
    id: string;
    heading: string;
    sections: TabSection[];
}

export interface TableContent {
    heading: string;
    info: { text: string; active?: boolean }[];
}

export interface Slide {
    title: string;
    columnContents?: columnSlideContent[];
    tabs?: Tab[];
    tableContents?: TableContent[];
    oneSlideContents?: ItemType[];
}

export interface ItemType {
    link?: string;
    imgSrc?: string;
    imgAlt?: string;
    heading: string;
    items: string[];
}

export const slidesData: Slide[] = [
    {
        title: "AI 플러그인 with WebStorm",
        columnContents: [
            {
                link: "https://github.com/features/copilot/getting-started",
                imgSrc: "/img/copilot.webp",
                imgAlt: "copilot",
                heading: "GitHub Copilot",
                description: "Github & OpenAI Codex 기반의 코드 자동 완성 도구"
            },
            {
                link: "https://www.jetbrains.com/ai/#plans-and-pricing",
                imgSrc: "/img/jetbrain.webp",
                imgAlt: "jetbrains",
                heading: "JetBrains AI",
                description: "JetBrains IDE와 통합된 Intellij 기반 AI 도구"
            }
            ]
    },
    {
        title: "Github Copilot",
        tabs: [
            {
                id: "GCTab1",
                heading: "개요",
                sections: [
                    { subtitle: "Copilot이란?",
                        items: [
                            "AI 기반 코드 자동 완성 도구",
                            "OpenAI Codex 모델 사용",
                            "GitHub에서 직접 AI 기반의 코드 제안"
                        ],
                    },
                    { subtitle: "주요 특징",
                        items: [
                            "금액(개인) : $10(13000원) / 월",
                            "금액(비즈니스) : $21(29000원) / 월",
                            "무료 기간 : 30일",
                            "보안 : 로컬 환경에서만 처리, 외부로 전송하지 않음"
                        ]
                    }
                ]
            },
            {
                id: "GCTab2",
                heading: "사용법",
                sections: [
                            {
                                subtitle: "명령어",
                                items: [
                                    "@workspace : 질문 범위를 workspace로 지정",
                                    "@terminal : 질문 범위를 terminal로 지정",
                                    "/ : 자동완성으로 보여지는 슬래시 명령어",
                                    "docs: comment document 생성",
                                    "generate: 사용자 질문에 맞는 code 생성",
                                    "#selection : 활성화된 편집 화면의 선택된 코드",
                                    "#editor : 활성화된 편집 화면 채팅 뷰의 컨텍스트로 포함",
                                    "#file : 채팅 프롬프트의 컨텍스트로 포함된 파일",
                                    "#terminalSelection : 활성 터미널에서 선택되어 있는 라인"
                                ]
                            },
                    { subtitle: "기능", items: ["코드 자동완성 기능","리팩토링 제안","짧고 다양하고 유용한 명령어 사용기능","주석 기반의 코드 자동완성 기능","pull request message 생성"] }

                ]
            },
            {
                id: "GCTab4",
                heading: "장단점",
                sections: [
                    { subtitle: "장점",
                        items: [
                            "개발 속도 향상",
                            "매우 빠른 응답속도",
                            "데이터학습 기반의 코드완성으로 복잡한 코드 자동완성 가능",
                            "선택된 코드 블럭 인식 정확성",
                            "@terminal 명령어 사용의 편리성"
                        ]
                    },
                    { subtitle: "단점",
                        items: [
                            "github 계정 연동 필요",
                            "더 높은 가격의 비즈니스 요금제가 따로 존재",
                            "머신 러닝과 같은 기법 사용하여 수많은 프로젝트의 코드 패턴을 학습하는 형태로 보안 우려",
                            "@vscode/ 같은 명령어가 다른 IDE는 지원하지 않음",
                            "인라인 물음형에만 제공되는 preview, accept 기능",
                            "부족한 한글 지원",
                            "가독성 떨어지는 공식문서 + 업데이트 소식"
                        ]
                    }
                ]
            }
        ]
    },

    {
        title: "JetBrains AI",
        tabs: [
            {
                id: "JBTab1",
                heading: "개요",
                sections: [
                    { subtitle: "JetBrains AI란?",
                        items: [
                            "JetBrains에서 제공하는 AI 기반 코드 도움 및 분석 도구",
                            "GPT 및 자체 언어 모델 통합",
                            "다양한 JetBrains IDE와 통합"
                        ]
                    },
                    { subtitle: "주요 특징",
                        items: [
                            "금액(개인) : $10(13000원) / 월",
                            "무료 기간 : 7일",
                            "보안 : 하나의 IDE 세션 동안 채팅 내역을 유지 후 restart시 종료"
                        ]
                    }
                ]
            },
            {
                id: "JBTab2",
                heading: "사용법",
                sections: [
                    { subtitle: "명령어",
                        items: [
                            "get_selected_current_file: 현재 선택된 파일의 내용을 가져오기",
                            "get_code_at_caret: 현재 커서 위치 또는 선택된 코드 프래그먼트의 내용을 가져오기",
                            "get_opened_files: 현재 열려 있는 파일들의 목록을 가져오기",
                            "exact_search: 특정 클래스, 파일, 메소드, 또는 심볼을 정확하게 검색",
                            "find_text: 프로젝트 안에서 특정 텍스트 패턴을 검색",
                            "find_usages: 특정 심볼의 사용처를 찾기",
                            "get_git_diff_all: 아직 커밋되지 않은 모든 로컬 변경 내용을 확인",
                            "get_vcs_log: 프로젝트의 버전 컨트롤 로그를 확인",
                            "open_commit: 특정 커밋의 변경 내용 확인",
                            "#file: 현재 열려 있는 파일의 내용을 가져오기",
                            "/explain, /refactor: 설명, 리팩토링 제안",
                        ]
                    },
                    { subtitle: "기능",
                        items: [
                            "리팩토링 제안",
                            "코드 자동완성 기능",
                            "커밋 설명기능",
                            "커밋 메시지 작성 기능",
                            "새 파일로 생성하여 제안코드 넣어주는 기능"
                        ]
                    }
                ]
            },
            {
                id: "JBTab4",
                heading: "장단점",
                sections: [
                    { subtitle: "장점",
                        items: [
                            "JetBrains 제품군과의 통합",
                            "복잡한 코드 분석 및 최적화",
                            "해당 에러에 대한 원인 및 수정 방향을 제시",
                            "JetBrains 블로그를 통해 자세한 최신 소식 알기 가능",
                            "see diff and apply 기능"
                        ]
                    },
                    { subtitle: "단점",
                        items: [
                            "다소 느린 응답 속도",
                            "current 파일이 바뀔때마다 매번 설명해야함",
                            "자연어 위주의 명령어",
                            "컨텍스트 기반의 자동완성기능으로 데이터 기반 학습이 부재하여 복잡한 코드를 자동완성하는데는 어려움",
                            "webStorm은 터미널 오류 설명기능 부재 (현재 pycharm만 제공)",
                            "webStorm은 merge with AI 기능 부재(현재 pycharm만 제공)",
                            "인라인형 물음에도 전체 코드를 가져와서 diff를 보여줌"
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "정리",
        tableContents: [
            { heading: "기반 AI 모델",
                info: [
                    { text: "OpenAI Codex(OpenAI의 GPT-3 모델을 기반)", active: true  },
                    { text: "GPT 및 JetBrains 자체 언어 모델 통합"}
                ]
            },
            { heading: "IDE 통합",
                info: [
                    { text: "여러 IDE (VS Code, JetBrains, Neovim, GitHub Web 등)" },
                    { text: "JetBrains  (WebStorm, IntelliJ, PyCharm 등) 전용", active: true }
                ]
            },
            { heading: "비용",
                info: [
                    { text: "월 $10 (또는 연간 $100)" },
                    { text: "JetBrains 제품 구독(연간 $149 이상) 필요" }
                ]
            },
            { heading: "코드 자동 완성",
                info: [
                    { text: "매우 빠르고 다양한 응답 제공(플러그인 설치 시 사용가능)", active: true  },
                    { text: "정확하지만 느린 자동응답 제공(IDE 자체 내장기능, ai assistant 모두 사용가능)"}
                ]
            },
            { heading: "코드 분석 및 최적화",
                info: [
                    { text: "제한적" },
                    { text: "심층 코드 분석 및 리팩토링, 코드 최적화 지원", active: true }
                ]
            },
            { heading: "Git 통합",
                info: [
                    { text: "GitHub와 완벽한 통합 (Pull Request 및 코드 리뷰 연동)" },
                    { text: "JetBrains 내장 VCS 및 Git 연동", active: true }
                ]
            },
            { heading: "성능 및 속도",
                info: [
                    { text: "빠른 코드 자동 완성 및 답변", active: true },
                    { text: "다소 느린 응답 속도(시스템 자원을 많이 소모)" }
                ]
            }
        ]
    },
    {
        title: "총평 및 선택",

        columnContents: [
            {
                link: "https://docs.github.com/ko/copilot/using-github-copilot/example-use-cases/example-prompts-for-copilot-chat",
                imgSrc: "/img/copilot.webp",
                imgAlt: "copilot",
                heading: "GitHub Copilot",
                description: "구축프로젝트에 적합한 개발 속도 절감 도구",
                items: [
                    "github copilot의 강력한 자동완성 기능은 JetBrains IDE의 자동완성 기능으로는 대체 불가",
                    "실제 이 ppt 앱을 만들며 github copilot을 주로 사용함",
                    "시간이 촉박한 프로젝트에 적합, 응답 속도 매우 빠름",
                    "코딩 없이 개발하는 목적으로는 현재 가장 적합한 ai",
                ]
            },
            {
                link: "https://blog.jetbrains.com/ko/blog/category/news/",
                imgSrc: "/img/jetbrain.webp",
                imgAlt: "jetbrains",
                heading: "JetBrains AI",
                description: "복잡한 프로젝트에 적합한 코드 분석 및 최적화 도구",
                items: [
                    "해당 프로젝트에 더 정확하고 적합한 코드 제시",
                    "다양한 기능으로 복잡한 프로젝트에 유용",
                    "최신 업데이트 소식을 JetBrains 블로그를 통해 쉽게 적응",
                    "JetBrains의 제품군과 완벽한 통합",
                    "리팩토링 기능은 copilot보다 더 뛰어남, 필요한 코드만 골라서 쓸 수 있는 강점"
                ]
            }
            ]
    },
];