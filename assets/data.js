/*
  EDIT THIS FILE FIRST.
  Most portfolio content lives here so future changes do not require touching layout code.
  Add projects, stack items, or timeline entries by copying an existing object.
*/

window.PORTFOLIO_DATA = {
    categories: ["All", "AI / ML", "Backend", "Full Stack", "Java"],

    projects: [
        {
            title: "ShipFlow — Delivery Management Platform",
            category: "Backend",
            icon: "folder-kanban",
            accent: "blue",
            stack: [
                "Python",
                "FastAPI",
                "PostgreSQL",
                "Redis",
                "Celery",
                "React",
                "TypeScript",
                "React Router",
                "SQLAlchemy",
                "Alembic",
                "JWT",
                "Docker",
                "Twilio"
            ],
            summary: "A full-stack delivery management platform for sellers and delivery partners, with shipment creation, public tracking, delivery workflows, background jobs, and notification support.",
            problem: "Delivery workflows need reliable coordination between sellers, delivery partners, and customers. Shipment creation, status changes, tracking, authentication, notifications, and background processing must stay consistent across several connected services.",
            solution: "ShipFlow combines a FastAPI backend with a React and TypeScript frontend. PostgreSQL stores application data, Redis and Celery handle background work, JWT secures API access, and email/SMS integrations support shipment notifications. Docker Compose is used to run the backend services consistently during development.",
            highlights: [
                "Built seller and delivery-partner authentication and shipment workflows.",
                "Implemented shipment status tracking and customer-facing tracking pages.",
                "Developed FastAPI REST APIs with JWT-based authentication.",
                "Used PostgreSQL with SQLAlchemy and Alembic for persistence and migrations.",
                "Integrated Redis and Celery for background job processing.",
                "Added email and SMS notification workflows, including Twilio support.",
                "Built the frontend with React, TypeScript, React Router, Tailwind CSS, and Radix UI.",
                "Used Docker and Docker Compose for repeatable local backend infrastructure."
            ],
            github: "https://github.com/CodeCatalystHadeed/ShipFlow"
        },
        {
            title: "JobEZ — AI-Enabled Recruitment Platform",
            category: "AI / ML",
            icon: "briefcase-business",
            accent: "blue",
            stack: ["Python", "FastAPI", "PostgreSQL", "OpenAI API", "ChromaDB", "Semantic Search", "Vector Retrieval", "Embeddings", "NLP", "Cosine Similarity", "REST APIs", "Speech-to-Text", "Text-to-Speech"],
            summary: "An AI-enabled recruitment platform that combines resume processing, semantic job matching, personalized recommendations, and AI-assisted preliminary interview workflows.",
            problem: "Recruitment teams often spend significant time manually reviewing resumes and comparing candidate profiles against job requirements. Candidates also struggle to quickly identify opportunities that genuinely align with their skills, experience, and background.",
            solution: "JobEZ automates key parts of the recruitment workflow by processing resumes, generating semantic representations with OpenAI embeddings, storing and retrieving vector data through ChromaDB, and matching candidate profiles with relevant jobs using retrieval and cosine-similarity-based ranking. It also exposes these capabilities through FastAPI endpoints, stores structured application data in PostgreSQL, and supports preliminary interview workflows with Speech-to-Text and Text-to-Speech.",
            highlights: [
                "Built resume parsing and candidate profile processing workflows.",
                "Integrated OpenAI APIs for AI-powered recruitment features and embeddings.",
                "Used ChromaDB as a vector database for semantic storage and retrieval.",
                "Implemented embeddings-based candidate and job matching with cosine similarity.",
                "Built semantic retrieval workflows with ChromaDB to surface relevant candidate and job context for matching and recommendations.",
                "Built FastAPI REST endpoints for resume processing, matching, and recommendation workflows.",
                "Used PostgreSQL for structured application data and persistence.",
                "Integrated Speech-to-Text and Text-to-Speech for preliminary interview workflows."
            ],
            github: "https://github.com/CodeCatalystHadeed"
        },
        {
            title: "Sentiment Analysis API",
            category: "AI / ML",
            icon: "messages-square",
            accent: "green",
            stack: ["Python", "FastAPI", "scikit-learn", "NLP", "Text Preprocessing", "Tokenization", "Feature Extraction", "REST API"],
            summary: "A machine-learning-powered NLP service that analyzes textual feedback, classifies it as positive, negative, or neutral, and exposes predictions through a FastAPI REST API.",
            problem: "Organizations can receive large volumes of text through reviews, surveys, support messages, and feedback forms. Manually reading and categorizing every response is difficult to scale and makes it harder to identify overall sentiment quickly and consistently.",
            solution: "The project implements an end-to-end NLP inference pipeline that cleans incoming text, applies preprocessing and tokenization, converts text into model-ready features, and uses a scikit-learn classifier to predict sentiment. FastAPI exposes the model through a REST endpoint so other applications can request predictions programmatically.",
            highlights: [
                "Performed text preprocessing and cleaning before model inference.",
                "Applied NLP techniques including tokenization and feature extraction.",
                "Developed a sentiment classification model using scikit-learn.",
                "Classified feedback into positive, negative, and neutral categories.",
                "Built FastAPI REST endpoints for real-time model inference.",
                "Structured request and response flows for integration with external applications.",
                "Separated preprocessing, prediction, and API concerns to keep the service easier to maintain."
            ],
            github: "https://github.com/CodeCatalystHadeed"
        },
        {
            title: "Titanic Survival Prediction",
            category: "AI / ML",
            icon: "chart-no-axes-combined",
            accent: "purple",
            stack: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "EDA", "Feature Engineering", "Classification"],
            summary: "An end-to-end supervised machine-learning project using the Titanic dataset to explore passenger data, engineer useful features, train a predictive model, and evaluate survival outcomes.",
            problem: "Real-world tabular datasets often contain missing values, inconsistent entries, categorical fields, and features that cannot be used directly by machine-learning algorithms. Building a reliable model therefore requires careful exploration and preparation before training begins.",
            solution: "The project follows a complete tabular ML workflow: exploratory data analysis, missing-value investigation, cleaning, transformation, feature engineering, supervised classification, evaluation, and visualization. The emphasis is on converting raw passenger records into a consistent dataset that can support meaningful survival predictions.",
            highlights: [
                "Cleaned and prepared raw passenger data for analysis.",
                "Performed exploratory data analysis to understand distributions and relationships.",
                "Investigated missing values and selected appropriate preparation steps.",
                "Engineered useful model inputs from the available passenger attributes.",
                "Trained a supervised classification model for survival prediction.",
                "Evaluated predictive performance using standard ML evaluation techniques.",
                "Visualized data patterns and model-related insights using Python libraries."
            ],
            github: "https://github.com/CodeCatalystHadeed"
        },
        {
            title: "EventSphere",
            category: "Full Stack",
            icon: "ticket-check",
            accent: "orange",
            stack: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Authentication", "Payment Integration"],
            summary: "A full-stack event ticketing platform that connects event discovery, ticket selection, cart management, authentication, checkout, and payment workflows in one responsive application.",
            problem: "Event registration platforms must coordinate multiple connected user journeys. Friction between event browsing, ticket selection, authentication, cart state, checkout, or payment handling can interrupt purchases and create a poor experience across devices.",
            solution: "EventSphere combines a React frontend with Node.js and Express.js backend services plus MongoDB persistence to deliver a connected event-ticketing flow. The application brings together browsing, ticket selection, authentication, cart management, checkout, and payment integration while maintaining a responsive interface for desktop and mobile users.",
            highlights: [
                "Built event browsing and ticket-selection interfaces.",
                "Developed cart and checkout workflows across the purchase journey.",
                "Implemented responsive frontend functionality with React and JavaScript.",
                "Worked with Node.js and Express.js backend services.",
                "Used MongoDB for persistent application data.",
                "Integrated user authentication into the ticketing workflow.",
                "Integrated payment gateway functionality for checkout.",
                "Led frontend development and optimized the interface for desktop and mobile devices."
            ],
            github: "https://github.com/CodeCatalystHadeed"
        },
        {
            title: "Virtual Debate",
            category: "Full Stack",
            icon: "radio-tower",
            accent: "cyan",
            stack: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "WebSockets", "Live Voting", "Real-Time Chat"],
            summary: "A real-time MERN debating platform with live voting, participant interaction, dynamic chat, WebSocket-based updates, and persistent debate data.",
            problem: "Traditional discussion platforms are usually designed around asynchronous comments rather than live interaction. A debate experience needs low-latency communication so messages, votes, and participant activity can be reflected immediately for everyone involved.",
            solution: "Virtual Debate uses React for the interactive client, Node.js and Express.js for server-side functionality, WebSockets for real-time communication, and MongoDB for persistent user and debate data. The architecture supports live discussion features without requiring users to refresh the page for updates.",
            highlights: [
                "Developed real-time debate functionality and participant interaction flows.",
                "Built live voting features for active debate sessions.",
                "Implemented dynamic real-time chat between participants.",
                "Used WebSockets to stream live application updates.",
                "Used MongoDB for user and debate information with attention to efficient retrieval.",
                "Worked on performance and responsiveness for high-concurrency usage.",
                "Optimized the system around support for 1,000+ concurrent users."
            ],
            impact: "Performance focus: designed and optimized around 1,000+ concurrent users.",
            github: "https://github.com/CodeCatalystHadeed"
        },
        {
            title: "E-Commerce Store",
            category: "Full Stack",
            icon: "shopping-cart",
            accent: "pink",
            stack: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "Manual Testing", "UI Testing"],
            summary: "A MERN-stack e-commerce application covering core shopping workflows, with my contribution centered on validating product selection, cart behavior, checkout, and interface consistency.",
            problem: "E-commerce applications depend on reliable user journeys. Problems in product selection, cart updates, checkout behavior, or visual consistency can directly affect usability and prevent customers from completing purchases successfully.",
            solution: "My contribution focused on validating the shopping experience from product selection through checkout. I tested core functionality, reviewed UI consistency, identified usability and functional issues, and reported findings so the development team could improve reliability across the application.",
            contributionLabel: "My contribution",
            highlights: [
                "Tested product-selection workflows across the shopping experience.",
                "Validated shopping-cart behavior and state changes.",
                "Tested checkout functionality across the purchase flow.",
                "Reviewed UI consistency across application screens.",
                "Identified usability and functional issues affecting the user journey.",
                "Reported issues for resolution by the development team.",
                "Worked with a MERN-stack application using React, Node.js, Express.js, and MongoDB."
            ],
            github: "https://github.com/CodeCatalystHadeed"
        },
        {
            title: "Quiz Management System",
            category: "Java",
            icon: "list-checks",
            accent: "yellow",
            stack: ["Java", "MySQL", "Git", "OOP", "Debugging", "Manual Testing"],
            summary: "A Java and MySQL quiz management application designed around quiz creation, management, scoring accuracy, and dependable interaction with quiz data, with my work focused on testing and bug fixing.",
            problem: "Quiz systems need accurate scoring and dependable management workflows. Bugs in quiz creation, answer handling, result calculation, or data interaction can directly reduce trust in the application and disrupt core user tasks.",
            solution: "My contribution focused on validating the application's essential workflows, reproducing and identifying functional issues, fixing bugs, and verifying scoring behavior so the system remained more reliable during quiz creation, management, and result handling.",
            contributionLabel: "My contribution",
            highlights: [
                "Tested quiz creation workflows and expected user interactions.",
                "Validated quiz-management functionality across core flows.",
                "Tested scoring behavior and result accuracy.",
                "Identified functional bugs affecting system behavior.",
                "Fixed issues to improve application reliability.",
                "Worked with Java and MySQL during development and testing.",
                "Used Git for source control while developing and validating changes."
            ],
            github: "https://github.com/CodeCatalystHadeed"
        }
    ],

    stackGroups: [
        {
            title: "Generative AI & Agents",
            icon: "sparkles",
            items: ["LLMs", "Generative AI", "LangChain", "Ollama", "RAG", "Prompt Engineering", "Agentic AI"]
        },
        {
            title: "Machine Learning & Data",
            icon: "brain-circuit",
            items: ["Python", "Pandas", "NumPy", "scikit-learn", "NLP", "Machine Learning", "Jupyter"]
        },
        {
            title: "Backend & APIs",
            icon: "workflow",
            items: ["FastAPI", "REST APIs", "Node.js", "Express.js", "WebSockets"]
        },
        {
            title: "Databases",
            icon: "server",
            items: ["PostgreSQL", "MongoDB", "SQL", "MySQL"]
        },
        {
            title: "Frontend",
            icon: "panels-top-left",
            items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
        },
        {
            title: "Engineering Tools",
            icon: "wrench",
            items: ["Git", "Docker", "VS Code", "Postman", "Java"]
        }
    ],

    timeline: [
        {
            title: "AI Intern — Mazik Global",
            dates: "Aug 2025 — Oct 2025",
            icon: "brain-circuit",
            description: "Built Python data-preprocessing and EDA workflows, supported feature engineering and scikit-learn model evaluation, and documented experiments in Jupyter Notebook."
        },
        {
            title: "Frontend Developer — Blink Digitally",
            dates: "Jun 2025 — Jul 2025",
            icon: "layout-template",
            description: "Developed responsive interfaces from Figma using HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap, while supporting REST API integration."
        },
        {
            title: "Bachelor of Software Engineering — DHA Suffa University",
            dates: "Oct 2022 — Jul 2026",
            icon: "graduation-cap",
            description: "Gold Medalist with a 3.93/4.00 CGPA and recognition on the Dean’s & Vice Chancellor’s Honor Lists for 8 consecutive semesters at DHA Suffa University, Karachi."
        }
    ]
};
