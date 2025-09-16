"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { ChessKing, ChessKnight, ChessQueen, TicketIcon } from "@/components/ui/ChessIcons";
import { Hamburger, Instagram, LinkedIn, Mail, Twitter } from "../ui/Icons";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("HOME");

  const navItems = [
    { 
      name: "HOME", 
      icon: ChessKing, 
      href: "/", 
      active: true 
    },
    { 
      name: "PARTICIPANTS", 
      icon: ChessKnight, 
      href: "#participants", 
      active: false 
    },
    { 
      name: "LIVE STREAM", 
      icon: ChessQueen, 
      href: "#stream", 
      active: false 
    },
    { 
      name: "BUY TICKETS", 
      icon: TicketIcon, 
      href: "#tickets", 
      active: false 
    },
  ];

  const socialIcons = [
    { icon: Twitter, href: "https://twitter.com/chessinslums", target: "_blank" },
    { icon: Instagram, href: "https://instagram.com/chessinslums", target: "_blank" },
    { icon: LinkedIn, href: "https://linkedin.com/company/chessinslums", target: "_blank" },
    { icon: Mail, href: "mailto:info@chessinslums.org", target: "_blank" },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-4 right-4 z-50 w-auto sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:max-w-[522px] sm:mx-4 sm:w-full"
      >
        <div className="bg-black rounded-2xl px-8 py-3 flex items-center justify-between">
          {/* CCCL Logo */}
          <div 
            className="flex items-center justify-center text-white"
            style={{
              fontFamily: 'var(--font-impact), sans-serif',
              fontSize: '24px',
              lineHeight: '50px',
              textAlign: 'center'
            }}
          >
            <span className="font-caesar-dressing">CCCL</span>
          </div>

          {/* Active Nav Button */}
          <div 
            className="flex items-center justify-center bg-[#292929] rounded-[22px] px-4 py-2"
          >
            <span 
              className="text-white p-0 m-0"
              style={{
                fontFamily: 'var(--font-impact), sans-serif',
                fontSize: '18px',
                lineHeight: '28px',
                textAlign: 'center',
                letterSpacing: '0.05em',
                fontWeight: 600
              }}
            >
              {activeNav}
            </span>
          </div>

          {/* Hamburger Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
          >
            <Hamburger />
          </motion.button>
        </div>
      </motion.nav>

      {/* Animated Popup Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-4 right-4 z-40 w-auto mt-20 top-[20px] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:max-w-[522px] sm:mx-4 sm:w-full"
          >
            <div className="bg-white rounded-2xl md:px-8 md:py-8 px-4 py-4 shadow-2xl">
              {/* Close Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center cursor-pointer"
              >
                <X size={25} color="#5A5A5A" />
              </motion.button>

              {/* Navigation Items */}
              <div className="flex flex-col items-center space-y-8 sm:mt-8 mt-6">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeNav === item.name;
                  
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      onClick={() => {
                        setActiveNav(item.name);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-4 cursor-pointer group py-2 md:my-4 my-2 md:text-[30px] text-[20px]"
                    >
                      <IconComponent 
                        size={25} 
                        color={isActive ? "#FF9000" : "#282828"} 
                      />
                      <span 
                        className={`transition-colors duration-200 ${
                          isActive ? 'text-[#FF9000]' : 'text-[#282828]'
                        }`}
                        style={{
                          fontFamily: 'var(--font-impact), sans-serif',
                          lineHeight: '25px',
                          letterSpacing: '0.02em',
                          fontWeight: 600
                        }}
                      >
                        {item.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Register Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center md:mt-10 mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#292929] rounded-full px-8 sm:py-4 py-2 cursor-pointer sm:w-[70%] w-[80%]"
                >
                  <span 
                    className="text-white"
                    style={{
                      fontFamily: 'var(--font-impact), sans-serif',
                      fontSize: '18px',
                      lineHeight: '37px',
                      textAlign: 'center',
                      letterSpacing: '0.05em',
                      fontWeight: 600
                    }}
                  >
                    REGISTER
                  </span>
                </motion.button>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center items-center gap-4 mt-8"
              >
                {socialIcons.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.target}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center cursor-pointer"
                    >
                      <IconComponent size={30} color="#FF9000" />
                      {index < socialIcons.length - 1 && (
                        <div className="w-0.5 h-8 bg-[#F7EAEA] ml-4" />
                      )}
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}