import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "CSE Department",
      description: "PES University",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-blue-500",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end w-full",
      img: "/nxs.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "We’re creating the future. Powered by passion and innovation, we’re redefining what's possible, together.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start w-full",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Community",
      description: "NEXUS",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Growing team of over 120 members",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a PES events app",
      description: "PESU TIX",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Join us in building exciting projects & events",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "BetterPES",
      des: "BetterPES is a website for accessing course content at PES University. *Maintained by Nexus.",
      img: "/bp.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://better-pes.vercel.app",
    },
    {
      id: 2,
      title: "Nexus Website",
      des: "Explore our Next.js-powered website, a sleek creation by the Nexus Tech Club's web development team.",
      img: "/nw.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://nexus-pes.vercel.app/",
    },
    {
      id: 3,
      title: "NoteVault",
      des: "NoteVault is a web-app that allows you to take down notes, store them and access them whenever and wherever you want.",
      img: "/nv.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://notevault.vercel.app/",
    },
    {
      id: 4,
      title: "NexHunt Website",
      des: "A dynamic Next.js website tailored for hosting NexHunt, a unique 2-hour Treasure Hunt conducted on March 9th.",
      img: "/nh.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://nexus-pes.vercel.app/projects/3",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Dennis",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Vineet",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Davis",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Nikhil",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Kaustubh",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Akshaj",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Yuti",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "App Development",
      nameImg: "./ad.svg",
    },
    {
      id: 2,
      name: "Artificial Intelligence",
      nameImg: "/ai.svg",
    },
    {
      id: 3,
      name: "Machine Learning",
      nameImg: "/ml.svg",
    },
    {
      id: 4,
      name: "Web Development",
      nameImg: "/wd.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "NexCode",
      desc: "Conducted competitive coding competition comprising of 10 problem statements for students in PES University",
      className: "md:col-span-2",
      thumbnail: "/nc.png",
    },
    {
      id: 2,
      title: "NexHunt",
      desc: "Organized and conducted 2 hour CTF for students in PES University",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/nh1.png",
    },
    {
      id: 3,
      title: "NeuroNex",
      desc: "Highly Competitive 8 hour AI ML hackathon to build innovative solutions",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/nn.png",
    },
    {
      id: 4,
      title: "NexGen",
      desc: "Flagship 24 hour hackathon aims to developing creative solutions to real-world problems",
      className: "md:col-span-2",
      thumbnail: "/ng.png",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Nexus-PES/",
    },
    {
      id: 2,
      img: "/insta.svg",
      link: "https://www.instagram.com/nexus.pesu",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/company/nexus-pes",
    },
  ];