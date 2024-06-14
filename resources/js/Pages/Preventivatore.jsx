import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import jsPDF from 'jspdf';

export default function Preventivatore({ auth }) {
    const [loanAmount, setLoanAmount] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [financingType, setFinancingType] = useState('azienda');
    const [companyName, setCompanyName] = useState('');
    const [amortizationSchedule, setAmortizationSchedule] = useState(null);

    const handleCalculate = () => {
        const rate = parseFloat(interestRate) / 100 / 12;
        const term = parseInt(loanTerm) * 12;
        const amount = parseFloat(loanAmount);

        let balance = amount;
        let totalInterest = 0;
        const schedule = [];

        for (let i = 0; i < term; i++) {
            const interest = balance * rate;
            const principal = (amount * rate) / (1 - Math.pow(1 + rate, -term)) - interest;
            balance -= principal;
            totalInterest += interest;

            schedule.push({
                month: i + 1,
                interest: interest.toFixed(2),
                principal: principal.toFixed(2),
                balance: balance.toFixed(2),
            });
        }

        const annualSummary = [];
        for (let i = 0; i < loanTerm; i++) {
            const yearPayments = schedule.slice(i * 12, (i + 1) * 12);
            const totalInterestYear = yearPayments.reduce((sum, p) => sum + parseFloat(p.interest), 0);
            const totalPrincipalYear = yearPayments.reduce((sum, p) => sum + parseFloat(p.principal), 0);

            annualSummary.push({
                year: i + 1,
                totalInterest: totalInterestYear.toFixed(2),
                totalPrincipal: totalPrincipalYear.toFixed(2),
                totalPayment: (totalInterestYear + totalPrincipalYear).toFixed(2),
            });
        }

        setAmortizationSchedule({ schedule, annualSummary });
    };

    const handleDownloadPDF = () => {
        const pdf = new jsPDF('p', 'pt', 'a4');
        const logoUrl = './Images/pmiconsulting_cover.jpeg'; // URL del logo
        const fileName = `preventivo_per_${companyName.replace(/\s+/g, '_')}.pdf`;

        pdf.addImage(logoUrl, 'JPEG', 40, 40, 100, 40);
        pdf.text('Riepilogo Annuale', 40, 100);

        amortizationSchedule.annualSummary.forEach((summary, index) => {
            const yOffset = 120 + index * 60;
            pdf.text(`Anno ${summary.year}:`, 40, yOffset);
            pdf.text(`Spenderai € ${summary.totalPayment} per il ${summary.year}° anno.`, 40, yOffset + 20);
            pdf.text(`Di cui € ${summary.totalInterest} di INTERESSI e € ${summary.totalPrincipal} di CAPITALE.`, 40, yOffset + 40);
        });

        pdf.save(fileName);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Preventivatore</h2>}
        >
            <Head title="Preventivatore" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="mb-4 col-span-1 sm:col-span-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Tipo di finanziamento
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            className="mr-2 leading-tight"
                                            type="radio"
                                            name="financingType"
                                            value="azienda"
                                            checked={financingType === 'azienda'}
                                            onChange={(e) => setFinancingType(e.target.value)}
                                        />
                                        <span className="text-gray-700">Azienda</span>
                                        <input
                                            className="ml-4 mr-2 leading-tight"
                                            type="radio"
                                            name="financingType"
                                            value="piva"
                                            checked={financingType === 'piva'}
                                            onChange={(e) => setFinancingType(e.target.value)}
                                        />
                                        <span className="text-gray-700">P.IVA</span>
                                    </div>
                                </div>

                                <div className="mb-4 col-span-1 sm:col-span-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                                        Nome {financingType === 'azienda' ? 'Azienda' : 'P.IVA'}
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="companyName"
                                        type="text"
                                        placeholder={`Nome ${financingType === 'azienda' ? 'Azienda' : 'P.IVA'}`}
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loanAmount">
                                        Importo del prestito
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="loanAmount"
                                        type="number"
                                        placeholder="Importo"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loanTerm">
                                        Durata del prestito (anni)
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="loanTerm"
                                        type="number"
                                        placeholder="Durata"
                                        value={loanTerm}
                                        onChange={(e) => setLoanTerm(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interestRate">
                                        Tasso di interesse (%)
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="interestRate"
                                        type="number"
                                        placeholder="Tasso"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4 col-span-1 sm:col-span-2">
                                    <button
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={handleCalculate}
                                    >
                                        Calcola
                                    </button>
                                </div>
                            </form>

                            {amortizationSchedule && (
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold text-gray-800 leading-tight">Piano di Ammortamento</h3>
                                    <table className="min-w-full mt-4 border-collapse border border-gray-400">
                                        <thead>
                                            <tr>
                                                <th className="border border-gray-300 px-4 py-2">Mese</th>
                                                <th className="border border-gray-300 px-4 py-2">Interessi</th>
                                                <th className="border border-gray-300 px-4 py-2">Capitale</th>
                                                <th className="border border-gray-300 px-4 py-2">Capitale residuo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {amortizationSchedule.schedule.map((row, index) => (
                                                <tr key={index}>
                                                    <td className="border border-gray-300 px-4 py-2">{row.month}</td>
                                                    <td className="border border-gray-300 px-4 py-2">€ {row.interest}</td>
                                                    <td className="border border-gray-300 px-4 py-2">€ {row.principal}</td>
                                                    <td className="border border-gray-300 px-4 py-2">€ {row.balance}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="mt-6">
                                        {amortizationSchedule.annualSummary.map((summary, index) => (
                                            <div key={index} className="mt-4">
                                                <h4 className="text-lg font-semibold">Totale per anno {summary.year}</h4>
                                                <p>Spenderai € {summary.totalPayment} per il {summary.year}° anno.</p>
                                                <p>Di cui € {summary.totalInterest} di INTERESSI e € {summary.totalPrincipal} di CAPITALE.</p>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        type="button"
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                                        onClick={handleDownloadPDF}
                                    >
                                        Scarica PDF
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
