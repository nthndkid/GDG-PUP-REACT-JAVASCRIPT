import React from "react";
import "./AssignmentTwo.css";

// Box Component that receives title and content as props
function Box({ title, content, techStacks }) {
  return (
    <div className="box">
      <h2 className="box-title">{title}</h2>
      <p className="box-content">{content}</p>
      <ul className="tech-stack-list">
        {techStacks.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

function AssignmentTwo() {
  const data = [
    {
      title: "Portfolio Website",
      content:
        "A personal website to showcase my projects, skills, and experience. It includes an interactive UI, blog section, and a contact form.",
      techStacks: ["React", "Tailwind CSS", "Vite", "EmailJS"],
    },
    {
      title: "Chess Learning Website",
      content:
        "An interactive 3D chess website built with Three.js that teaches users how to play chess through tutorials, challenges, and AI-driven games.",
      techStacks: ["Three.js", "React", "Node.js", "Socket.io"],
    },
    {
      title: "Startup Website",
      content:
        "A professional website for my team and I to showcase our freelance work, services, and completed projects. It features a portfolio section and client contact form.",
      techStacks: ["Next.js", "Chakra UI", "Framer Motion", "Firebase"],
    },
    {
      title: "Capstone Vision App",
      content:
        "An augmented reality indoor navigation system designed to help visually impaired users find their way in a school campus.",
      techStacks: ["Unity", "C#", "AR Foundation", "Firebase"],
    },
    {
      title: "Attendance Management System",
      content:
        "A web app that tracks student event attendance using QR codes or RFID scans, with real-time data analytics and reports.",
      techStacks: ["Laravel", "MySQL", "Vue.js", "Bootstrap"],
    },
    {
      title: "TagLish Speech-to-Text Tool",
      content:
        "A speech-to-text app designed for Tagalog-English (TagLish) conversations that transcribes audio to readable text with high accuracy.",
      techStacks: ["Python", "Flask", "Google Speech API", "Tailwind CSS"],
    },
  ];


  return (
    <div className="title-container">
      <h1>Top 3 Major Projects for 2025</h1>
      <p>
        Learn how to pass and manage data between parent and child components
        using props. This exercise focuses on modular, reusable components by
        dynamically rendering project details inside child components.
      </p>
      <div className="box-container">
        {data.map((item, index) => (
          <Box key={index} title={item.title} content={item.content} techStacks={item.techStacks} />
        ))}
      </div>
    </div>
  );
}

export default AssignmentTwo;
