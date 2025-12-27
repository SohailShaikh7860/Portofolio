import { title } from "process";

export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    projectUrl?: string;
    githubUrl?: string;
    technologies: string[];
}


export const projects =[
    {
        id:1,
        title:"Expense Tracker",
        description:"Full-stack MERN expense tracker with dual modes for transport businesses & personal finance. Features JWT auth, Razorpay payments, budget management, analytics, and brutalist UI. Built with React, Node.js, Express, MongoDB, TailwindCSS.",
        imageUrl:"/ExpenseTrackor.png",
        projectUrl:"https://myexpenseflow.vercel.app/",
        githubUrl:"https://github.com/SohailShaikh7860/Expense-Trackor.git",
        technologies:["React","Node.js","Express","MongoDB","TailwindCSS","RazorPay"]
    },
    {
        id:2,
        title:"AI-Chat-Bot",
        description:"Full-stack AI Chatbot built with the MERN stack. Supports dynamic conversations, API-powered AI responses, and a responsive modern interface.",
        imageUrl:"/ai-Team-ChatBot.png",
        githubUrl:"https://github.com/SohailShaikh7860/AI-Chat-Bot.git",
        technologies:["React","Node.js","Express","OpenAI GPT-4 API"]
    },
    {
        id:3,
        title:"Deal-Drop",
        description:"🛍️ Smart price tracker that monitors e-commerce products and alerts you when prices drop. Built with Next.js & Supabase.",
        imageUrl:"/dealDrop.png",
        projectUrl:"https://deal-drop.vercel.app/",
        githubUrl:"https://github.com/SohailShaikh7860/Deal-Drop.git",
        technologies:["Next.js","Supabase","TailwindCSS","firecrawl"]
    },
    {
        id:4,
        title:"Ai-Code-Reviewer",
        description:"AI code reviewer with OpenAi, Gemini & Hugging Face. Instant feedback on quality, performance & security using Monaco editor. React + Node.js",
        imageUrl:"/Ai-CodeReview.png",
        githubUrl:"https://github.com/SohailShaikh7860/Ai-Code-Review.git",
        technologies:["React","Node.js","Express","OpenAI","Monaco Editor","Hugging Face","Gemini API"]
    },
    {
        id:5,
        title:"ChessGame",
        description:"Real-time multiplayer chess game built with Node.js, Express, Socket.IO, and Chess.js.",
        imageUrl:"/chessgame.png",
        githubUrl:"https://github.com/SohailShaikh7860/Chess-Game.git",
        technologies:["Node.js","Express","Socket.IO","Chess.js"]
    }
]