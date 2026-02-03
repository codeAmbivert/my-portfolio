import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import useNav from "./useNav";

function About() {
  const { navValue } = useNav(true);
  return (
    <div className="About">
      <Header navValue={navValue} />
      <h1>About</h1>
      <p>
        Hello, my name is Onifade Titilope Chisom. I am a frontend developer
        with strong experience building scalable, high-performance web
        applications using modern JavaScript frameworks. I focus on creating
        clean, maintainable interfaces that balance user experience,
        performance, and business needs.
      </p>

      <p>
        I have contributed to production-grade applications across industries,
        including aviation, fintech, and technology services. My work includes
        building complex user and admin dashboards, implementing role-based
        access, managing global state, and collaborating closely with backend
        engineers and product teams to deliver reliable, user-centric solutions.
      </p>

      <p>
        I take ownership of features from concept to deployment and actively
        contribute to technical decisions, code quality, and team collaboration.
        I am driven by continuous improvement, enjoy mentoring through
        collaboration, and thrive in environments that value thoughtful
        engineering and impact.
      </p>

      <h1>Languages & Tools</h1>
      <p>Technologies and tools I work with regularly:</p>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Redux</li>
        <li>Git</li>
      </ul>
      <Footer navValue={navValue} />
    </div>
  );
}

export default About;
