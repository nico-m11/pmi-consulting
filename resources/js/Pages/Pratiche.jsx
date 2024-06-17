import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Pratiche({auth, data}) {

    var nico = data;

    const [financingType, setFinancingType] = useState('azienda');

    const handleFinancingTypeChange = (event) => {
        setFinancingType(event.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pratiche</h2>}
        >
            <Head title="Pratiche" />

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
                                            onChange={handleFinancingTypeChange}
                                        />
                                        <span className="text-gray-700">Azienda</span>
                                        <input
                                            className="ml-4 mr-2 leading-tight"
                                            type="radio"
                                            name="financingType"
                                            value="piva"
                                            checked={financingType === 'piva'}
                                            onChange={handleFinancingTypeChange}
                                        />
                                        <span className="text-gray-700">P.IVA</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                        Nome completo
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="Nome completo" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Indirizzo email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                        Numero di telefono
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Telefono" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                        Indirizzo di residenza
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Indirizzo" />
                                </div>

                                {financingType === 'azienda' && (
                                    <>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                                                Nome dell'azienda
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="companyName" type="text" placeholder="Nome dell'azienda" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessType">
                                                Tipo di attività
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="businessType" type="text" placeholder="Tipo di attività" />
                                        </div>
                                    </>
                                )}

                                {financingType === 'piva' && (
                                    <>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vatNumber">
                                                Numero di Partita IVA
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="vatNumber" type="text" placeholder="Numero di Partita IVA" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profession">
                                                Professione
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profession" type="text" placeholder="Professione" />
                                        </div>
                                    </>
                                )}

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                        Importo del finanziamento richiesto
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="number" placeholder="Importo" />
                                </div>
                                <div className="mb-4 col-span-1 sm:col-span-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="purpose">
                                        Finalità del finanziamento
                                    </label>
                                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="purpose" placeholder="Finalità"></textarea>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="income">
                                        Reddito mensile
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="income" type="number" placeholder="Reddito" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employmentType">
                                        Tipo di impiego
                                    </label>
                                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="employmentType">
                                        <option value="full-time">Tempo pieno</option>
                                        <option value="part-time">Part-time</option>
                                        <option value="self-employed">Autonomo</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employerName">
                                        Nome del datore di lavoro
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="employerName" type="text" placeholder="Datore di lavoro" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="yearsOfService">
                                        Anni di servizio
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="yearsOfService" type="number" placeholder="Anni di servizio" />
                                </div>
                                <div className="mb-4 col-span-1 sm:col-span-2">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="documents">
                                        Documenti richiesti
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="documents" type="file" multiple />
                                </div>
                                <div className="flex items-center justify-between col-span-1 sm:col-span-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Invia
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
