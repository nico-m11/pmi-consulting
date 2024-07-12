import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import {useState} from 'react';

export default function test({auth, aziende}) {

    console.log(aziende);
    const {data, setData, post, processing, errors} = useForm({
        vatNO:'',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        get('/test');
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Crea Azienda</h2>
                    <Link
                        href={route("aziende.index")}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Indietro
                    </Link>
                </div>
            }
        >
            <Head title="Test"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <InputLabel htmlFor="vatNo" value="Vat Number"/>
                                    <TextInput
                                        id="vatNo"
                                        name="vatNo"
                                        value={data.vatNO}
                                        type="text"
                                        className="mt-1 block w-full"
                                        placeholder="Vat Number"
                                    />
                                    {errors.vatNO && <div className="text-red-600">{errors.vatNO}</div>}
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
