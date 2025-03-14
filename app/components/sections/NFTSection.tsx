import { motion } from "framer-motion";
import { forwardRef } from "react";
import PinkPassImage from "~/images/pinkpass.avif"; // Ensure correct path
import PinkPlatypusImage from "~/images/playtypus.png"; // Ensure correct path

const NFT_COLLECTIONS = [
    {
        name: "PINK Pass Collection",
        description: "Your exclusive access to the PINK ecosystem. Holders enjoy benefits, early access, and more!",
        image: PinkPassImage,
        link: "https://opensea.io/collection/pink-pass-1",
    },
    {
        name: "PINK Platypuses",
        description: "The legendary Platypuses of PINK! A high-utility collection with gaming integrations & community perks.",
        image: PinkPlatypusImage,
        link: "https://opensea.io/collection/pink-platypuses",
    },
];

const NFTSection = forwardRef<HTMLDivElement>((props, ref) => (
    <section
        id="nft"
        ref={ref}
        className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 py-24 bg-black/40 overflow-hidden"
    >
        {/* 🔥 Background Glow */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-pink-700/50 to-black opacity-80 -z-10"></div> */}

        {/* 🚀 Section Title */}
        <motion.h2
            className="text-4xl md:text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 text-center drop-shadow-xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            PINK NFT Collection
        </motion.h2>

        {/* 🎨 NFT Collection Grid */}
        <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
            {NFT_COLLECTIONS.map((nft, index) => (
                <motion.a
                    key={index}
                    href={nft.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex flex-col items-center text-center bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl border border-pink-500/20 shadow-lg p-7 md:p-8 w-full transition hover:shadow-pink-400/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                >
                    {/* 🖼 NFT Image Container */}
                    <div className="relative w-full h-[250px] sm:h-[350px] overflow-hidden rounded-2xl mb-3">
                        <motion.img 
                            src={nft.image} 
                            alt={nft.name} 
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    {/* 🔥 Collection Info */}
                    <div className="mt-2">
                        <h3 className="text-xl md:text-2xl font-bold text-pink-400">{nft.name}</h3>
                        <p className="text-sm md:text-base text-gray-300">{nft.description}</p>
                    </div>
                </motion.a>
            ))}
        </div>
    </section>
));

export default NFTSection;
