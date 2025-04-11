// This file contains detailed information about contributors
// It's separate from the main data file to make it easier to update

export interface ContributorDetail {
  name: string
  role: string
  avatar: string
  link: string
  bio: string
  skills: string[]
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
  }
  featuredProjects: string[]
  testimonial?: string
}

// This data structure makes it easy to update contributor information
export const contributorsData: Record<string, ContributorDetail> = {
  "Nayan Acharya": {
    name: "Nayan Acharya",
    role: "Full Stack Developer",
    avatar: "/images/avatars/myself.jpg",
    link: "https://github.com/nayan135",
    bio: "Full Stack Developer with expertise in React, Next.js, and Node.js. Passionate about creating scalable and user-friendly web applications. Currently working as an IT Specialist at DHL IT Group, focusing on automation and internal tools development.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Docker", "AWS"],
    socialLinks: {
      github: "https://github.com/nayan135",
      linkedin: "https://linkedin.com/in/nayanacharya",
      twitter: "https://twitter.com/nayan_acharya",
      website: "https://nayan135.com.np",
    },
    featuredProjects: ["FITGREEN", "EDUMENTOR", "AALANKAR"],
    testimonial:
      "Dedicated to creating exceptional digital experiences through innovative solutions and collaborative development.",
  },
  "Narayan Bhusal": {
    name: "Narayan Bhusal",
    role: "Frontend Developer | UI/UX Designer",
    avatar: "/images/avatars/narayan.jpg",
    link: "https://github.com/naranbhusal02",
    bio: "Frontend developer and UI/UX designer with a keen eye for detail and user experience. Specializes in creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
    skills: ["React", "UI/UX Design", "Figma", "CSS/SCSS", "JavaScript", "Responsive Design"],
    socialLinks: {
      github: "https://github.com/naranbhusal02",
      linkedin: "https://linkedin.com/in/naranbhusal",
    },
    featuredProjects: ["FITGREEN", "EDUMENTOR", "AALANKAR"],
    testimonial:
      "Passionate about creating beautiful, functional interfaces that make technology accessible to everyone.",
  },
  "Dilip Acharya": {
    name: "Dilip Acharya",
    role: "Backend Developer",
    avatar: "/images/avatars/mission.jpg",
    link: "https://github.com/JCT-B",
    bio: "Backend developer with strong expertise in server-side technologies and database management. Focused on building robust and scalable backend systems that power modern web applications.",
    skills: ["Node.js", "Express", "MongoDB", "SQL", "API Development", "Authentication"],
    socialLinks: {
      github: "https://github.com/JCT-B",
    },
    featuredProjects: ["FITGREEN"],
    testimonial:
      "Committed to building secure, efficient backend systems that provide a solid foundation for web applications.",
  },
  "Shasank Shrestha": {
    name: "Shasank Shrestha",
    role: "Frontend Developer",
    avatar: "/images/avatars/shasank.jpg",
    link: "https://github.com/shasank00",
    bio: "Frontend developer specializing in creating responsive and interactive user interfaces. Experienced in modern JavaScript frameworks and libraries with a focus on performance optimization.",
    skills: ["JavaScript", "React", "HTML5", "CSS3", "Responsive Design", "Web Animation"],
    socialLinks: {
      github: "https://github.com/shasank00",
    },
    featuredProjects: ["FITGREEN", "AALANKAR"],
    testimonial: "Dedicated to crafting engaging user experiences through clean, efficient code and thoughtful design.",
  },
  "Sanjog Pandey": {
    name: "Sanjog Pandey",
    role: "Designer",
    avatar: "/images/avatars/sanjog.jpg",
    link: "",
    bio: "Creative designer with a passion for visual storytelling and brand identity. Specializes in creating cohesive design systems that communicate brand values effectively across different platforms.",
    skills: ["Graphic Design", "UI Design", "Brand Identity", "Typography", "Color Theory"],
    socialLinks: {},
    featuredProjects: ["FITGREEN"],
    testimonial:
      "Believes in the power of design to solve problems and create meaningful connections between products and users.",
  },
}

