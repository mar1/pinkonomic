import { forwardRef } from "react";
import { motion } from "framer-motion";
import HomeButton from "~/components/buttons/HomeButton";

const PINKDROP_URL = `https://pink.frictionlessgaming.com/?v=${Date.now()}`;

const PinkDrop = forwardRef<HTMLDivElement>((props, ref) => (
  <section
    id="pinkdrop"
    ref={ref}
    className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden"
  >
    <HomeButton />

    {/* 🔥 Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-pink-700/50 to-black opacity-60 -z-10"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[900px] h-[900px] bg-pink-500 rounded-full blur-[160px] opacity-30 -z-10"></div>

    {/* 🎮 Game Container */}
    <div className="relative flex items-center justify-center min-h-screen w-full">
      {/* 🏆 "PinkDrop" Text (Left Side, Vertical) */}
      <motion.h2
        className="absolute left-10 text-7xl font-bold tracking-wide uppercase bg-gradient-to-b from-pink-400 to-blue-500 text-transparent bg-clip-text hidden lg:block rotate-180 [writing-mode:vertical-rl]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        PinkDrop
      </motion.h2>

      {/* 🎮 Game Embed (True Gradient Border) */}
      <div
        className="relative w-[1036px] h-[616px] rounded-3xl overflow-hidden"
      >
        {/* 🌀 Gradient Border */}
        <div className="absolute inset-0 rounded-3xl p-[8px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden">
            {/* 🎮 Game iFrame */}
            <iframe
              src={PINKDROP_URL}
              title="PinkDrop Game"
              className="w-full h-full rounded-3xl"
              style={{ display: "block" }}
            ></iframe>

            {/* ✨ Subtle Glow Behind iFrame */}
            <div
              className="absolute inset-0 bg-pink-500/30 blur-[160px] rounded-3xl -z-10"
            ></div>

            {/* 🌟 Diffusing Shadow for Depth */}
            <div
              className="absolute inset-[-40px] bg-pink-500/10 blur-[200px] rounded-3xl -z-20"
            ></div>
          </div>
        </div>
      </div>

      {/* 🏆 "PinkDrop" Text (Right Side, Vertical) */}
      <motion.h2
        className="absolute right-10 text-7xl font-bold tracking-wide uppercase bg-gradient-to-b from-pink-400 to-blue-500 text-transparent bg-clip-text hidden lg:block [writing-mode:vertical-rl]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        PinkDrop
      </motion.h2>
    </div>
  </section>
));

PinkDrop.displayName = "PinkDrop";
export default PinkDrop;
