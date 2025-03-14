import { forwardRef } from "react";
import { motion } from "framer-motion";
import Sparkle from "~/components/Sparkle";
import PlatypusImage from "~/images/playtypus.png"; // Ensure correct import path

const Hero = forwardRef<HTMLDivElement>((props, ref) => (
  <section
    id="hero"
    ref={ref}
    className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 pt-24 pb-24 overflow-hidden bg-transparent"
  >
    {/* 🖼 Background Image with Overlay and Rectangular Edge Fade */}
    <div
      className="absolute inset-0 bg-cover bg-center z-[2]"
      style={{ 
        backgroundImage: `url(${PlatypusImage})`,
        // Rectangular mask - combines 4 linear gradients for each edge
        WebkitMaskImage: `

          linear-gradient(to bottom, 
            transparent, 
            black 15%, 
            black 95%, 
            transparent 100%
          )
        `,
        maskImage: `

          linear-gradient(to bottom, 
            transparent, 
            black 15%, 
            black 85%, 
            transparent 100%
          )
        `,
        WebkitMaskComposite: 'source-over',
        maskComposite: 'intersect'
      }}
    >
      {/* 🔥 Reduced Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      {/* 🔥 Thinner Gradient Overlay on Edges */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
    </div>

    {/* Edge Shadow for Depth - subtle rectangular shadow at edges */}
    <div 
      className="absolute inset-0 z-[2] pointer-events-none shadow-inner" 
      style={{
        boxShadow: 'inset 0 0 50px 30px rgba(0, 0, 0, 0.25)'
      }}
    ></div>

    {/* 🏆 Hero Branding */}
    <motion.div
      className="relative z-[10] text-center text-white space-y-4 w-full max-w-6xl"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1
        className="font-extrabold uppercase bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text"
        style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)", lineHeight: "1.1" }}
      >
        Welcome to <span className="text-pink-500">PINK</span>
      </h1>
      <motion.h2
        className="font-semibold uppercase tracking-widest text-white opacity-100"
        style={{ fontSize: "clamp(1rem, 2.5vw, 2.8rem)", lineHeight: "1.2", textShadow: "0px 0px 30px rgba(255, 105, 180, 1)" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Polkadot's <span className="text-pink-400">First Meme Community</span>
      </motion.h2>
    </motion.div>

    {/* ✨ Hero Descriptions */}
    <motion.div
      className="relative z-[10] mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-white w-full max-w-5xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      style={{ marginTop: "85vh" }} // Move below the image
    >
      {[
        "Interopable with Moonbeam, Base, and Polkadot parachains",
        "Gaming ecosystem & NFT collectibles",
        "Community driven",
      ].map((text, index) => (
        <motion.div
          key={index}
          className="flex items-center space-x-5 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 + index * 0.2, ease: "easeOut" }}
        >
          {/* ⭐ Animated Sparkle */}
          <motion.div
            className="w-10 h-10 flex-shrink-0"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Sparkle />
          </motion.div>

          <p className="text-lg font-light leading-relaxed text-white opacity-90">
            {text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
));

Hero.displayName = "Hero";
export default Hero;
