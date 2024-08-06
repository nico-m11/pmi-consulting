import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import {useCSVReader} from 'react-papaparse';

export default function create({auth}) {
    const {data, setData, post, processing, errors} = useForm({
        employmentType: '',
        documents: '',
    });


    const {CSVReader} = useCSVReader();
    const handleSubmit = (e) => {
        e.preventDefault();
        post('/tax');
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Inserisci Tasse</h2>
                    {/*<Link*/}
                    {/*    href={route("pratiche.index")}*/}
                    {/*    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"*/}
                    {/*>*/}
                    {/*    Indietro*/}
                    {/*</Link>*/}
                </div>
            }
        >
            <Head title="InsertTax"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <InputLabel htmlFor="employmentType" value="Tipo di impiego"/>
                                    <select
                                        id="employmentType"
                                        name="employmentType"
                                        value={data.employmentType}
                                        onChange={(e) => setData('employmentType', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
                                    >
                                        <option value="full-time">Enel</option>
                                        <option value="part-time">BNL</option>
                                        <option value="self-employed">Intesa S.Paolo</option>
                                    </select>
                                    {errors.employmentType &&
                                        <div className="text-red-600">{errors.employmentType}</div>}
                                </div>


                                <div className="mb-4 col-span-1 sm:col-span-2">
                                    <InputLabel value="Importa Csv"/>
                                    <CSVReader
                                        htmlFor="documents"
                                        value={data.documents}
                                        onChange={(e) => setData('documents', e.target.value)}
                                        onUploadAccepted={(results) => {
                                            console.log(results)
                                            setData('documents', results);
                                        }}
                                    >
                                        {({
                                              getRootProps,
                                              acceptedFile,
                                              ProgressBar,
                                              getRemoveFileProps,
                                          }) => (
                                            <>
                                                <div className="flex justify-between items-center">
                                                    <button type='button' {...getRootProps()}
                                                            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                                                    >
                                                        Browse file
                                                    </button>
                                                    <div>
                                                        {acceptedFile && acceptedFile.name}
                                                    </div>
                                                    <button {...getRemoveFileProps()}
                                                            className="bg-red-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                                        Remove
                                                    </button>
                                                </div>
                                                <ProgressBar/>
                                            </>
                                        )}
                                    </CSVReader>
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
