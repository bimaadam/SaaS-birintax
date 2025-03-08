"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Akhir() {
    const words = [
        {
            text: "Kelola",
        },
        {
            text: "Pajak",
        },
        {
            text: "Anda",
        },
        {
            text: "dengan",
        },
        {
            text: "Mudah.",
            className: "text-green-500 dark:text-green-500",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-[40rem] ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base ">
                Solusi pajak terpercaya untuk bisnis Anda
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-green-600 border dark:border-white border-transparent text-white text-sm hover:bg-green-700 transition duration-300">
                    Mulai Sekarang
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-green-600 border border-green-600 text-sm hover:bg-green-100 transition duration-300">
                    Pelajari Lebih Lanjut
                </button>
            </div>
        </div>
    );
}