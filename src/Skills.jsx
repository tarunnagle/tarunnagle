import React from 'react'
import './skills.css'
import './new.css'
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      {/* <h2 className='heading1 '>Projects</h2> */}
      <h3 className='heading1'>TECHNOLOGIES</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="HTML"/>
          <SemiDonutChart percentage={65} fill="#03B0FD" txt="CSS"/>
          <SemiDonutChart percentage={75} fill="#03B0FD" txt="JavaScript"/>
        </div>
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="MongoDB"/>
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="EXPRESS JS"/>
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="REACT JS"/>
        </div>
        <div className="flex">
          <SemiDonutChart percentage={50} fill="#03B0FD" txt="NODE JS"/>
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="GIT & GITHUB"/>
        </div>
      </div>

    </motion.div>
  );
}

export default Skills;

