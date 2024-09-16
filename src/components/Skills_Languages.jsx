import React from "react";
import { DiJava, DiJavascript1, DiMysql, DiPhp } from "react-icons/di";
import { FaCss3, FaCss3Alt, FaDatabase, FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";

import { SiCplusplus, SiPython } from "react-icons/si";

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

const Skills_Languages = () => {
  return (
    <div className="border-b border-neutral-800 pb-9 ">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Skills & Languages
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="  flex flex-wrap text-neutral-400  justify-between"
      >
        {/* <h1 className="text-xl  my-5 p-5 text-neutral-400">Languages:</h1> */}
        <div className="flex flex-wrap   items-center justify-center gap-4 p-2 mx-auto text-2xl">
          <motion.div
            variants={icon(2.4)}
            initial="initial"
            animate="animate"
            className=" p-4"
          >
            <SiCplusplus className="text-5xl text-blue-500" />
            <p className=" my-2">C++</p>
          </motion.div>

          <motion.div
            variants={icon(2.4)}
            initial="initial"
            animate="animate"
            className="p-4   "
          >
            <DiJavascript1 className="text-5xl   text-yellow-500 justify-center" />
            <p className="text-center my-2">JavaScript</p>
          </motion.div>

          <motion.div
            variants={icon(3)}
            initial="initial"
            animate="animate"
            className="p-4  "
          >
            <SiPython className="text-5xl   text-green-700 justify-center" />
            <p className="text-center my-2">Python</p>
          </motion.div>

          <motion.div
            variants={icon(3.5)}
            initial="initial"
            animate="animate"
            className="p-4"
          >
            <DiJava className="text-5xl   text-red-700 justify-center" />
            <p className="text-center my-2">Java</p>
          </motion.div>
          <motion.div
            variants={icon(4)}
            initial="initial"
            animate="animate"
            className="p-4 "
          >
            <DiPhp className="text-5xl   text-yellow-500 justify-center" />
            <p className="text-center my-2">PHP</p>
          </motion.div>

          <motion.div
            variants={icon(2)}
            initial="initial"
            animate="animate"
            className="p-4 "
          >
            <DiMysql className="text-5xl   text-blue-700 justify-center" />
            <p className="text-center my-2">mySql</p>
          </motion.div>

          <motion.div
            variants={icon(2.5)}
            initial="initial"
            animate="animate"
            className="p-4 "
          >
            <FaHtml5 className="text-5xl   text-yellow-500 justify-center" />
            <p className="text-center my-2">HTML5</p>
          </motion.div>

          <motion.div
            variants={icon(3)}
            initial="initial"
            animate="animate"
            className="p-4 "
          >
            <FaDatabase className="text-5xl   text-blue-500 justify-center" />
            <p className="text-center my-2">DBMS</p>
          </motion.div>

          <motion.div
            variants={icon(2)}
            initial="initial"
            animate="animate"
            className="p-4 "
          >
            <FaCss3Alt className="text-5xl   text-blue-500 justify-center" />
            <p className="text-center my-2">Css</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills_Languages;
