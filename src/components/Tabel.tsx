"use client";

import { motion } from "framer-motion";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const taxReports = [
    {
        reportId: "TAX001",
        accountName: "Pajak Penghasilan (PPh)",
        paymentStatus: "Lunas",
        totalAmount: "Rp2.500.000",
        paymentMethod: "Transfer Bank",
    },
    {
        reportId: "TAX002",
        accountName: "Pajak Pertambahan Nilai (PPN)",
        paymentStatus: "Menunggu",
        totalAmount: "Rp1.500.000",
        paymentMethod: "Virtual Account",
    },
    {
        reportId: "TAX003",
        accountName: "Pajak Kendaraan",
        paymentStatus: "Belum Bayar",
        totalAmount: "Rp3.200.000",
        paymentMethod: "Kartu Kredit",
    },
    {
        reportId: "TAX004",
        accountName: "Pajak Perusahaan",
        paymentStatus: "Lunas",
        totalAmount: "Rp4.700.000",
        paymentMethod: "Transfer Bank",
    },
    {
        reportId: "TAX005",
        accountName: "Beban Operasional",
        paymentStatus: "Lunas",
        totalAmount: "Rp5.100.000",
        paymentMethod: "E-Wallet",
    },
    {
        reportId: "TAX006",
        accountName: "Pajak Pertambahan Nilai (PPN)",
        paymentStatus: "Menunggu",
        totalAmount: "Rp2.200.000",
        paymentMethod: "Virtual Account",
    },
    {
        reportId: "TAX007",
        accountName: "Pajak Kendaraan",
        paymentStatus: "Belum Bayar",
        totalAmount: "Rp3.800.000",
        paymentMethod: "Transfer Bank",
    },
];

export function Tabel() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl shadow-lg"
        >
            <Table className="bg-white rounded-xl border border-gray-200">
                <TableCaption>Daftar laporan pajak terbaru Anda.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[120px]">ID Laporan</TableHead>
                        <TableHead>Akun Pajak</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Metode Pembayaran</TableHead>
                        <TableHead className="text-right">Jumlah</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {taxReports.map((report) => (
                        <motion.tr
                            key={report.reportId}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="border-b border-gray-200 hover:bg-gray-100"
                        >
                            <TableCell className="font-medium">{report.reportId}</TableCell>
                            <TableCell>{report.accountName}</TableCell>
                            <TableCell>{report.paymentStatus}</TableCell>
                            <TableCell>{report.paymentMethod}</TableCell>
                            <TableCell className="text-right">{report.totalAmount}</TableCell>
                        </motion.tr>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={4}>Total</TableCell>
                        <TableCell className="text-right">Rp23.000.000</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </motion.div>
    );
}