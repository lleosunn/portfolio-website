"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a freshman at MIT, I am currently completing my General Institute Requirements,
        allowing me to focus on my academic interests in the coming years. I am passionate
        about robotics and eager to gain more exposure and experience in the field.
        In addition to my academic pursuits, I am a pole vaulter on the MIT Track and Field team,
        with a personal record of 15’. I am also actively involved in campus life as a member of
        Phi Delta Theta, the Chinese Students Club, and the Asian American Association.
      </p>

      <p>
        Outside of school, I enjoy exploring new places, eating good food, and spending time with my amazing loving girlfriend.
      </p>
    </motion.section>
  );
}
