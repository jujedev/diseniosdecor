import React from "react";
import { AnimatePresence, motion } from "framer-motion";


const ResponsiveMenu = ({ open }) => {
    return (
        <AnimatePresence mode="wait">
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0}}
                        exit={{ opacity: 0, y: -100 }}
                        className="absolute top-20 left-0 w-full h-screen z-20"
                    >
                        <div className="text-xl font-semibold uppercase bg-white text-primary py-10">
                            <ul className="flex flex-col justify-center items-center gap-10">
                                <li className="hover:scale-105"><a href="/">Inicio</a></li>
                                <li className="hover:scale-105"><a href="#">Quienes somos</a></li>
                                <li className="hover:scale-105"><a href="#">Contáctanos</a></li>
                                <li className="hover:scale-105"><a href="#">Productos</a></li>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>        
    )
};

export default ResponsiveMenu;