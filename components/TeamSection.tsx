import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, cubicBezier } from "framer-motion";
import { Instagram, Linkedin, X } from "lucide-react";
import dennisPic from "@/public/Dennis Philip.jpg";
import vineetPic from "@/public/Vineet.jpg";
import akshajPic from "@/public/Akshaj B Seerpu.jpg";
import ishanPic from "@/public/Ishan H Rajesh .jpg";
import abhinayaPic from "@/public/abhinaya.jpg";
import shashankPic from "@/public/Shashank.jpg";
import manitPic from "@/public/Manit_V_Urs.jpg";
import davisPic from "@/public/davis.jpg";
import kauPic from "@/public/Kaustubh-3.jpg";
import kotaPic from "@/public/KotaShriya.jpg";
import advaithPic from "@/public/Advaith S Kumar.jpg";
import nikhilPic from "@/public/nikhil.jpg";
import yatharthPic from "@/public/Yathartha.jpeg";
import surajPic from "@/public/Suraj B M.jpg";
import mohitPic from "@/public/Mohit Paddhariya.jpg";
import aditiPic from "@/public/Aditi_H.jpg";
import ankithPic from "@/public/Ankith Khaitan .jpg";
import yutiPic from "@/public/yuti.jpg";
import jahnviPic from "@/public/jahnvi.jpg";
import rishitPic from "@/public/rishit.jpg";
import karthikPic from "@/public/karthik.jpg";
import { StaticImageData } from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string | StaticImageData;
  bio: string;
  instagram: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dennis Philip",
    role: "Club Head",
    image: dennisPic,
    bio: "Dennis is the club head of Nexus and overlooks the working of the whole club.",
    instagram: "https://instagram.com/dennis_._philip",
    linkedin: "https://www.linkedin.com/in/dennis-philip-b0a633289/",
  },
  {
    id: 2,
    name: "Vineet Sharma",
    role: "Club Head",
    image: vineetPic, 
    bio: "Vineet is the club head of Nexus and overlooks the working of the whole club.",
    instagram: "https://instagram.com/sarahj",
    linkedin: "https://www.linkedin.com/in/vineet-sharma-5a9320312/",
  },
  {
    id: 3,
    name: "Akshaj B Seerpu",
    role: "EVM Head",
    image: akshajPic,
    bio: "Head of the event management domain and makes sure the events run smoothly.",
    instagram: "-",
    linkedin: "https://www.linkedin.com/in/akshaj-seerpu-591256291/",
  },
  {
    id: 4,
    name: "Ishan H Rajesh",
    role: "EVM Head",
    image: ishanPic,
    bio: "Head of the event management domain and makes sure the events run smoothly.",
    instagram: "-",
    linkedin: "https://www.linkedin.com/in/ishan-rajesh-0141432a5/",
  },
  {
    id: 5,
    name: "Abhinaya A",
    role: "Operations Head",
    image: abhinayaPic,
    bio: "Head of the operations domain and makes sure the events' permissions are taken on time.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 6,
    name: "Shashank",
    role: "Logistics Head",
    image: shashankPic,
    bio: "Head of the Logistics domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 7,
    name: "Manit V Urs",
    role: "Logistics Head",
    image: manitPic,
    bio: "Head of the Logistics domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 8,
    name: "Davis Philip",
    role: "Sponsorship Head",
    image: davisPic,
    bio: "Head of the Sponsorship domain & responsible to get sponsors for the events.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 9,
    name: "C Kausthubh",
    role: "Sponsorship Head",
    image: kauPic,
    bio: "Head of the Sponsorship domain & responsible to get sponsors for the events.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 10,
    name: "Kota Shriya",
    role: "Campaigning Head",
    image: kotaPic,
    bio: "Head of the Campaigning domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 11,
    name: "Karthik Rakesh",
    role: "Social Media Head",
    image: karthikPic,
    bio: "Head of the Social Media domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 12,
    name: "Yuti Naha",
    role: "Design Head",
    image: yutiPic,
    bio: "Head of the Deisgn domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 13,
    name: "Jahnvi R",
    role: "Design Head",
    image: jahnviPic,
    bio: "Head of the Design domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 14,
    name: "Advaith S Kumar",
    role: "AIML Head",
    image: advaithPic,
    bio: "Head of the AIML domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 15,
    name: "Nikhil Thomas",
    role: "AIML Head",
    image: nikhilPic,
    bio: "Head of the AIML domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 16,
    name: "Yathartha Aarush",
    role: "Web Dev Head",
    image: yatharthPic,
    bio: "Head of the Web Dev domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 17,
    name: "Suraj BM",
    role: "Web Dev Head",
    image: surajPic,
    bio: "Head of the Web Dev domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 18,
    name: "Mohit P",
    role: "App Dev Head",
    image: mohitPic,
    bio: "Head of the App Dev domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 19,
    name: "Rishit Jena",
    role: "Design Core",
    image: rishitPic,
    bio: "Core of the Design domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 20,
    name: "Aditi H",
    role: "EVM Core",
    image: aditiPic,
    bio: "Core of the EVM & Sponsorship domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 21,
    name: "Ankith Kaithan",
    role: "Logistics Core",
    image: ankithPic,
    bio: "Core of the Logistics domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 22,
    name: "Prachita",
    role: "EVM Core",
    image: "/api/placeholder/300/400",
    bio: "Core of the EVM & Logistics domain.",
    instagram: "-",
    linkedin: "-",
  },
  {
    id: 23,
    name: "Kalyan R",
    role: "Campaigning Core",
    image: "/api/placeholder/300/400",
    bio: "Core of the campaigning domain.",
    instagram: "-",
    linkedin: "-",
  },
  
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.8, 1],
    ["0%", "0%", "-25%", "-50%", "-75%"],
    {
      ease: cubicBezier(0.16, 1, 0.3, 1),
    }
  );

  return (
    <div ref={sectionRef} className="relative min-h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black pointer-events-none" />

        <div className="flex-1 max-w-7xl mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-16"
          >
            Meet Our <span className="text-indigo-900">Team</span>
          </motion.h2>

          <div className="h-[600px] relative">
            <motion.div
              style={{ x }}
              className="flex gap-8 absolute left-0"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 }}}
                  onClick={() => setSelectedMember(member)}
                  className="flex-shrink-0 w-80 bg-zinc-900/90 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl hover:shadow-purple-500/20 cursor-pointer hover:text-indigo-600 hover:border hover:border-indigo-600"
                >
                  <div className="relative h-96">
                    <motion.img
                      src={typeof member.image === "string" ? member.image : member.image.src}
                      alt={member.name}
                      className="w-full h-full object-cover "
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  </div>

                  <div className="p-6 relative">
                    <h3 className="text-2xl font-semibold text-white mb-2 hover:text-indigo-600">{member.name}</h3>
                    <p className="text-purple-400 mb-4">{member.role}</p>

                    <div className="flex gap-4 mt-4">
                      <motion.a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-pink-500 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <Instagram size={24} />
                      </motion.a>
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-blue-500 transition-colors"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                      >
                        <Linkedin size={24} />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              className="w-11/12 sm:w-96 bg-zinc-800 rounded-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={
                  typeof selectedMember.image === "string"
                    ? selectedMember.image
                    : selectedMember.image.src
                }
                alt={selectedMember.name}
                className="w-full h-48 object-contain rounded-lg mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-2xl font-semibold text-white mb-2">{selectedMember.name}</h3>
              <p className="text-purple-400 mb-4">{selectedMember.role}</p>
              <p className="text-white mb-4">{selectedMember.bio}</p>

              <div className="flex gap-4 mt-4">
                <motion.a
                  href={selectedMember.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-pink-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>

              <motion.div
                className="absolute top-2 right-2 text-white cursor-pointer"
                onClick={() => setSelectedMember(null)}
              >
                <X size={24} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamSection;
