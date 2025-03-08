'use client'
import { FaFileInvoiceDollar, FaChartLine, FaClock, FaCheckCircle } from 'react-icons/fa';
import { Tabel } from './Tabel';
import { motion } from 'framer-motion';

export function Fitur1() {
    return (
        <>
            <div className='overflow-auto'>
                <Tabel />
            </div>
            <motion.div className="p-10 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ amount: 0.2 }}
                        whileHover={{ y: 5 }}
                        className="md:col-span-2 bg-white rounded-lg p-8 shadow-md">
                        <h2 className="text-3xl font-bold mb-4">Kelola Pajak Anda dengan Mudah</h2>
                        <p className="text-gray-700 mb-6">
                            Dengan layanan pelaporan pajak otomatis kami, Anda dapat menghilangkan stres dan kerumitan dalam mengelola kewajiban pajak Anda. Fokus pada pengembangan bisnis Anda, sementara kami menangani semua detail pajak.
                        </p>
                        <div className="flex items-center mb-4">
                            <FaFileInvoiceDollar className="text-green-500 mr-3 text-xl" />
                            <p className="text-gray-700">Pelaporan pajak otomatis dan akurat.</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaChartLine className="text-blue-500 mr-3 text-xl" />
                            <p className="text-gray-700">Analisis dan wawasan pajak yang mendalam.</p>
                        </div>
                        <div className="flex items-center">
                            <FaClock className="text-yellow-500 mr-3 text-xl" />
                            <p className="text-gray-700">Hemat waktu dan sumber daya Anda.</p>
                        </div>
                    </motion.div>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { title: "Kepatuhan Terjamin", text: "Selalu patuhi peraturan pajak terbaru tanpa khawatir." },
                            { title: "Laporan Real-time", text: "Dapatkan laporan pajak secara instan kapan saja." },
                            { title: "Integrasi Mudah", text: "Terintegrasi dengan sistem akuntansi dan keuangan Anda." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ amount: 0.2 }}
                                whileHover={{ x: 5 }}
                                className="bg-gray-100 rounded-lg p-6">
                                <div className="flex items-center mb-2">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-gray-600">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );
}
