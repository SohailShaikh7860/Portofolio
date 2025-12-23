
export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    projectUrl: string;
    githubUrl?: string;
    technologies: string[];
}


export const projects =[
    {
        id:1,
        title:"Expense Tracker",
        description:"Full-stack MERN expense tracker with dual modes for transport businesses & personal finance. Features JWT auth, Razorpay payments, budget management, analytics, and brutalist UI. Built with React, Node.js, Express, MongoDB, TailwindCSS.",
        imageUrl:"/ExpenseTrackor.png",
        videoUrl:"",
        projectUrl:"https://myexpenseflow.vercel.app/",
        githubUrl:"https://github.com/SohailShaikh7860/Expense-Trackor.git",
        technologies:["React","Node.js","Express","MongoDB","TailwindCSS"]
    },
    {
        id:2,
        title:"Chat Application",
        description:"Real-time chat app with rooms, private messaging, and media sharing. Built with React, Node.js, Express, Socket.io, and MongoDB. Features JWT auth, responsive design, and user-friendly UI.",
        imageUrl:"/Chat.png",
        videoUrl:"",
        projectUrl:"https://mychatflow.vercel.app/",
        githubUrl:"",
        technologies:["React","Node.js","Express","Socket.io","MongoDB"]
    }
]