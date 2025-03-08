"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimoni() {
    return (
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                className="text-black dark:text-white" // Adjusting text color for dark mode
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "Dengan layanan pelaporan pajak otomatis ini, kami berhasil mengurangi waktu yang dihabiskan untuk administrasi pajak hingga 50%. Sangat efisien dan akurat!",
        name: "PT. Maju Jaya Abadi",
        title: "Direktur Keuangan",
    },
    {
        quote:
            "Kami sangat terbantu dengan deteksi kesalahan pajak yang otomatis. Layanan ini membantu kami menghindari denda dan memastikan kepatuhan penuh terhadap peraturan pajak.",
        name: "CV. Sukses Mandiri",
        title: "Manajer Akuntansi",
    },
    {
        quote:
            "Analisis kepatuhan pajak yang disediakan sangat informatif. Kami dapat memahami posisi kepatuhan pajak perusahaan kami dengan lebih baik dan mengambil tindakan yang tepat.",
        name: "PT. Karya Gemilang",
        title: "Kepala Pajak",
    },
    {
        quote:
            "Ringkasan laporan keuangan yang dihasilkan oleh AI sangat membantu kami dalam pengambilan keputusan strategis. Kami dapat memahami data keuangan kami dengan lebih cepat dan efisien.",
        name: "UD. Sumber Rejeki",
        title: "Pemilik Usaha",
    },
    {
        quote:
            "Layanan ini sangat mudah diintegrasikan dengan sistem akuntansi kami. Tim dukungan sangat responsif dan membantu kami dalam setiap langkah implementasi.",
        name: "PT. Inovasi Teknologi",
        title: "CTO",
    },
];
