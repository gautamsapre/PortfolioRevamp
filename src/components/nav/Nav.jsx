import React, { useEffect } from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {BsFillPersonFill} from 'react-icons/bs';
import {AiFillProject} from 'react-icons/ai';
import {MdWork} from 'react-icons/md';
import {GiSkills} from 'react-icons/gi'
import {BsFillChatDotsFill} from 'react-icons/bs';
import {useState} from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  // const useScrollPos = () => {
  //   const [scrollPostion, setScrollPosition] = useState(0);
  
  //   useEffect (() => {
  //     const updatePosition = () => {
  //       setScrollPosition(window.pageYOffset)
  //     };
  //     window.addEventListener('scroll', updatePosition);
  
  //     updatePosition();
  
  //     return () => window.removeEventListener('scroll', updatePosition);
  //   });
  //   return scrollPostion;
  
  // }
  // const scrollPostion = useScrollPos();
  // console.log(scrollPostion);
  // if (scrollPostion > 1009 && scrollPostion < 1616){
  //   console.log(activeNav);
  //   setActiveNav('#about');
    
  //}
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiFillProject/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsFillChatDotsFill/></a>
    </nav>
  )
}

export default Nav