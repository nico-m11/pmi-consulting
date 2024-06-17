import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Pratiche({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        financingType: 'azienda',
        fullName: '',
        email: '',
        phone: '',
        address: '',
        companyName: '',
        businessType: '',
        vatNumber: '',
        profession: '',
        amount: '',
        purpose: '',
        income: '',
        employmentType: '',
        employerName: '',
        yearsOfService: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/pratiche');
    };

    const handleFinancingTypeChange = (event) => {
        setData('financingType', event.target.value);
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
                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                                <div className="mb-4 col-span-1 sm:col-span-2">
                                    <InputLabel value="Tipo di finanziamento" />
                                    <div className="flex items-center">
                                        <input
                                            className="mr-2 leading-tight"
                                            type="radio"
                                            name="financingType"
                                            value="azienda"
                                            checked={data.financingType === 'azienda'}
                                            onChange={handleFinancingTypeChange}
                                        />
                                        <span className="text-gray-700">Azienda</span>
                                        <input
                                            className="ml-4 mr-2 leading-tight"
                                            type="radio"
                                            name="financingType"
                                            value="piva"
                                            checked={data.financingType === 'piva'}
                                            onChange={handleFinancingTypeChange}
                                        />
                                        <span className="text-gray-700">P.IVA</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="fullName" value="Nome completo" />
                                    <TextInput
                                        id="fullName"
                                        name="fullName"
                                        value={data.fullName}
                                        onChange={(e) => setData('fullName', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        placeholder="Nome completo"
                                    />
                                    {errors.fullName && <div className="text-red-600">{errors.fullName}</div>}
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="email" value="Indirizzo email" />
                                    <TextInput
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        type="email"
                                        className="mt-1 block w-full"
                                        placeholder="Email"
                                    />
                                    {errors.email && <div className="text-red-600">{errors.email}</div>}
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="phone" value="Numero di telefono" />
                                    <TextInput
                                        id="phone"
                                        name="phone"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        type="tel"
                                        className="mt-1 block w-full"
                                        placeholder="Telefono"
                                    />
                                    {errors.phone && <div className="text-red-600">{errors.phone}</div>}
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="address" value="Indirizzo di residenza" />
                                    <TextInput
                                        id="address"
                                        name="address"
                                        value={data.address}
                                        onChange={(e) => setData('address', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        placeholder="Indirizzo"
                                    />
                                    {errors.address && <div className="text-red-600">{errors.address}</div>}
                                </div>

                                {data.financingType === 'azienda' && (
                                    <>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="companyName" value="Nome dell'azienda" />
                                            <TextInput
                                                id="companyName"
                                                name="companyName"
                                                value={data.companyName}
                                                onChange={(e) => setData('companyName', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="Nome dell'azienda"
                                            />
                                            {errors.companyName && <div className="text-red-600">{errors.companyName}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="businessType" value="Tipo di attività" />
                                            <TextInput
                                                id="businessType"
                                                name="businessType"
                                                value={data.businessType}
                                                onChange={(e) => setData('businessType', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="Tipo di attività"
                                            />
                                            {errors.businessType && <div className="text-red-600">{errors.businessType}</div>}
                                        </div>
                                    </>
                                )}

                                {data.financingType === 'piva' && (
                                    <>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="vatNumber" value="Numero di Partita IVA" />
                                            <TextInput
                                                id="vatNumber"
                                                name="vatNumber"
                                                value={data.vatNumber}
                                                onChange={(e) => setData('vatNumber', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="Numero di Partita IVA"
                                            />
                                            {errors.vatNumber && <div className="text-red-600">{errors.vatNumber}</div>}
                                        </div>
                                        <div className="mb-4">
                                            <InputLabel htmlFor="profession" value="Professione" />
                                            <TextInput
                                                id="profession"
                                                name="profession"
                                                value={data.profession}
                                                onChange={(e) => setData('profession', e.target.value)}
                                                type="text"
                                                className="mt-1 block w-full"
                                                placeholder="Professione"
                                            />
                                            {errors.profession && <div className="text-red-600">{errors.profession}</div>}
                                        </div>
                                    </>
                                )}

                                <div className="mb-4">
                                    <InputLabel htmlFor="amount" value="Importo del finanziamento richiesto" />
                                    <TextInput
                                        id="amount"
                                        name="amount"
                                        value={data.amount}
                                        onChange={(e) => setData('amount', e.target.value)}
                                        type="number"
                                        className="mt-1 block w-full"
                                        placeholder="Importo"
                                    />
                                    {errors.amount && <div className="text-red-600">{errors.amount}</div>}
                                </div>

                                <div className="mb-4 col-span-1 sm:col-span-2">
                                    <InputLabel htmlFor="purpose" value="Finalità del finanziamento" />
                                    <textarea
                                        id="purpose"
                                        name="purpose"
                                        value={data.purpose}
                                        onChange={(e) => setData('purpose', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
                                        placeholder="Finalità"
                                    />
                                    {errors.purpose && <div className="text-red-600">{errors.purpose}</div>}
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="income" value="Reddito mensile" />
                                    <TextInput
                                        id="income"
                                        name="income"
                                        value={data.income}
                                        onChange={(e) => setData('income', e.target.value)}
                                        type="number"
                                        className="mt-1 block w-full"
                                        placeholder="Reddito"
                                    />
                                    {errors.income && <div className="text-red-600">{errors.income}</div>}
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="employmentType" value="Tipo di impiego" />
                                    <select
                                        id="employmentType"
                                        name="employmentType"
                                        value={data.employmentType}
                                        onChange={(e) => setData('employmentType', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
                                    >
                                        <option value="full-time">Tempo pieno</option>
                                        <option value="part-time">Part-time</option>
                                        <option value="self-employed">Autonomo</option>
                                    </select>
                                    {errors.employmentType && <div className="text-red-600">{errors.employmentType}</div>}
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="employerName" value="Nome del datore di lavoro" />
                                    <TextInput
                                        id="employerName"
                                        name="employerName"
                                        value={data.employerName}
                                        onChange={(e) => setData('employerName', e.target.value)}
                                        type="text"
                                        className="mt-1 block w-full"
                                        placeholder="Datore di lavoro"
                                    />
                                    {errors.employerName && <div className="text-red-600">{errors.employerName}</div>}
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="yearsOfService" value="Anni di servizio" />
                                    <TextInput
                                        id="yearsOfService"
                                        name="yearsOfService"
                                        value={data.yearsOfService}
                                        onChange={(e) => setData('yearsOfService', e.target.value)}
                                        type="number"
                                        className="mt-1 block w-full"
                                        placeholder="Anni di servizio"
                                    />
                                    {errors.yearsOfService && <div className="text-red-600">{errors.yearsOfService}</div>}
                                </div>

                                <div className="mb-4 col-span-1 sm:col-span-2">
                                    <InputLabel htmlFor="documents" value="Documenti richiesti" />
                                    <input
                                        id="documents"
                                        name="documents"
                                        type="file"
                                        multiple
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
                                    />
                                </div>

                                <div className="flex items-center justify-between col-span-1 sm:col-span-2">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                        disabled={processing}
                                    >
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
