"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const PAJAK = 'Solusi Laporan bayar pajak tanpa ribet, aman 100%';

export function Hero() {
    return (
        <div className="h-[600px] w-full flex flex-col items-center justify-center relative overflow-hidden bg-white px-6">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-center text-gray-900 relative z-10 font-sans">
                BirinTax Solution for <ColourfulText text="TAX" />
            </h1>
            <TextGenerateEffect className="text-center" words={PAJAK} />
            <motion.button
                className="mt-8 relative px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                Segera Daftar Sekarang
            </motion.button>

        </div>
    );
}
