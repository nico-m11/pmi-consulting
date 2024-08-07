import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";

export default function Show({auth, aziende}) {
    console.log(aziende);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-800 dark:text-200 leading-tight">
                        {`Azienda "${aziende.name}"`}
                    </h2>
                    <div className='flex justify-end items-center'>
                        <Link
                            className="bg-emerald-500 py-1 mr-2 px-3 text-white rounded shadow transition-all hover:bg-blue-600"
                            href={route("aziende.index")}
                        >
                            indietro
                        </Link>
                        {/* <Link
                            href={route("aziende.edit", aziende.id)}
                            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                        >
                            Edit
                        </Link> */}
                    </div>
                </div>
            }
        >
            <Head title={`Azienda "${aziende.name}"`}/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {/*<div>*/}
                        {/*    <img*/}
                        {/*       // src={project.image_path}*/}
                        {/*        alt=""*/}
                        {/*        className="w-full h-64 object-cover"*/}
                        {/*    />*/}
                        {/*</div>*/}
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-2">
                                <div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Partita Iva</label>
                                        <p className="mt-1">{aziende.vat_no}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Nome Azienda</label>
                                        <p className="mt-1">{aziende.name}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Recapito Azienda</label>
                                        <p className="mt-1">{aziende.phone_number}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Indirizzo completo Azienda</label>
                                        <p className="mt-1">{aziende.address_complete}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Numero di registro Azienda</label>
                                        <p className="mt-1">{aziende.reg_no}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Numero CreditSafe</label>
                                        <p className="mt-1">{aziende.safe_no}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Codice Attività Azienda</label>
                                        <p className="mt-1">{aziende.activity_code}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Livello di Rischio</label>
                                        <p className="mt-1">{aziende.credit_rating_description}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Valuta</label>
                                        <p className="mt-1">{aziende.credit_rating_limit_currency}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Massimale</label>
                                        <p className="mt-1">{aziende.credit_rating_limit_value}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Punteggio di Rating</label>
                                        <p className="mt-1">{aziende.credit_rating_provider_value}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Categoria di Rating</label>
                                        <p className="mt-1">{aziende.credit_rating_value}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                {/*<label className="font-bold text-lg">Project Description</label>*/}
                                {/*<p className="mt-1">{project.description}</p>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
