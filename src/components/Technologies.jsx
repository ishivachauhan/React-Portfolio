import React from "react";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaLinux } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";
import { motion } from "framer-motion";

const icon = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center "
      >
        Technologies & Frameworks
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={icon(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaLinux className="text-7xl " />
          <p className="text-center my-2 ">Linux</p>
        </motion.div>

        <motion.div
          variants={icon(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-center my-2">ReactJs</p>
        </motion.div>
        <motion.div
          variants={icon(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsGithub className="text-7xl text-green-500" />
          <p className="text-center my-2">GitHub</p>
        </motion.div>
        <motion.div
          variants={icon(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsGit className="text-7xl text-red-500" />
          <p className="text-center my-2">Git</p>
        </motion.div>
        <motion.div
          variants={icon(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiVisualstudiocode className="text-7xl text-blue-500" />
          <p className="text-center my-2">VsCode</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
