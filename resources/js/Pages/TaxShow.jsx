import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";

export default function TaxShow({auth, success, tax, tasks, queryParams}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-800 dark:text-200 leading-tight">
                        {`Tipo di tassa "${tax.type === '3' ? 'Intesa S.Paolo' : tax.type === '1' ? 'Enel' : tax.type === '2' ? 'BNL' : ''}"`}
                    </h2>
                    <div className='flex justify-end items-center'>
                        <Link
                            className="bg-red-500 py-1 mr-2 px-3 text-white rounded shadow transition-all hover:bg-blue-600"
                            href={route("tax.index")}
                        >
                            indietro
                        </Link>
                        {/*<Link*/}
                        {/*    href={route("pratiche.edit", tax.id)}*/}
                        {/*    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-red-600"*/}
                        {/*>*/}
                        {/*    Edit*/}
                        {/*</Link>*/}
                    </div>
                </div>
            }
        >
            <Head title={`Tax "${tax.type}"`}/>
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
                                    <div>
                                        <label className="font-bold text-lg">Tax ID</label>
                                        <p className="mt-1">{tax.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Tax type Name</label>
                                        <p className="mt-1">{tax.type === '3' ? 'Intesa S.Paolo' : tax.type === '1' ? 'Enel' : tax.type === '2' ? 'BNL' : ''}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_24_800_2000</label>
                                        <p className="mt-1">{tax.column_24_800_2000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_24_2000_7999</label>
                                        <p className="mt-1">{tax.column_24_2000_7999}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_24_8000_20000</label>
                                        <p className="mt-1">{tax.column_24_8000_20000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_24_20000_40000</label>
                                        <p className="mt-1">{tax.column_24_20000_40000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_24_40001_80000</label>
                                        <p className="mt-1">{tax.column_24_40001_80000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_24_80001_120000</label>
                                        <p className="mt-1">{tax.column_24_80001_120000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_24_120001_160000</label>
                                        <p className="mt-1">{tax.column_24_120001_160000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_24_160001_240000</label>
                                        <p className="mt-1">{tax.column_24_160001_240000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_30_800_2000</label>
                                        <p className="mt-1">{tax.column_30_800_2000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_30_2000_7999</label>
                                        <p className="mt-1">{tax.column_30_2000_7999}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_30_8000_20000</label>
                                        <p className="mt-1">{tax.column_30_8000_20000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_30_20000_40000</label>
                                        <p className="mt-1">{tax.column_30_20000_40000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_30_40001_80000</label>
                                        <p className="mt-1">{tax.column_30_40001_80000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_30_80001_120000</label>
                                        <p className="mt-1">{tax.column_30_80001_120000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_30_120001_160000</label>
                                        <p className="mt-1">{tax.column_30_120001_160000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_30_160001_240000</label>
                                        <p className="mt-1">{tax.column_30_160001_240000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_36_800_2000</label>
                                        <p className="mt-1">{tax.column_36_800_2000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_36_2000_7999</label>
                                        <p className="mt-1">{tax.column_36_2000_7999}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_36_8000_20000</label>
                                        <p className="mt-1">{tax.column_36_8000_20000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_36_20000_40000</label>
                                        <p className="mt-1">{tax.column_36_20000_40000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_36_40001_80000</label>
                                        <p className="mt-1">{tax.column_36_40001_80000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_36_80001_120000</label>
                                        <p className="mt-1">{tax.column_36_80001_120000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_36_120001_160000</label>
                                        <p className="mt-1">{tax.column_36_120001_160000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_36_160001_240000</label>
                                        <p className="mt-1">{tax.column_36_160001_240000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_48_800_2000</label>
                                        <p className="mt-1">{tax.column_48_800_2000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_48_2000_7999</label>
                                        <p className="mt-1">{tax.column_48_2000_7999}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_48_8000_20000</label>
                                        <p className="mt-1">{tax.column_48_8000_20000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_48_20000_40000</label>
                                        <p className="mt-1">{tax.column_48_20000_40000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_48_40001_80000</label>
                                        <p className="mt-1">{tax.column_48_40001_80000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_48_80001_120000</label>
                                        <p className="mt-1">{tax.column_48_80001_120000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_48_120001_160000</label>
                                        <p className="mt-1">{tax.column_48_120001_160000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_48_160001_240000</label>
                                        <p className="mt-1">{tax.column_48_160001_240000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_60_800_2000</label>
                                        <p className="mt-1">{tax.column_60_800_2000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_60_2000_7999</label>
                                        <p className="mt-1">{tax.column_60_2000_7999}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_60_8000_20000</label>
                                        <p className="mt-1">{tax.column_60_8000_20000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_60_20000_40000</label>
                                        <p className="mt-1">{tax.column_60_20000_40000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_60_40001_80000</label>
                                        <p className="mt-1">{tax.column_60_40001_80000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_60_80001_120000</label>
                                        <p className="mt-1">{tax.column_60_80001_120000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_60_120001_160000</label>
                                        <p className="mt-1">{tax.column_60_120001_160000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_60_160001_240000</label>
                                        <p className="mt-1">{tax.column_60_160001_240000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_72_800_2000</label>
                                        <p className="mt-1">{tax.column_72_800_2000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_72_2000_7999</label>
                                        <p className="mt-1">{tax.column_72_2000_7999}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_72_8000_20000</label>
                                        <p className="mt-1">{tax.column_72_8000_20000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_72_20000_40000</label>
                                        <p className="mt-1">{tax.column_72_20000_40000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_72_40001_80000</label>
                                        <p className="mt-1">{tax.column_72_40001_80000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_72_80001_120000</label>
                                        <p className="mt-1">{tax.column_72_80001_120000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_72_120001_160000</label>
                                        <p className="mt-1">{tax.column_72_120001_160000}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">column_72_160001_240000</label>
                                        <p className="mt-1">{tax.column_72_160001_240000}</p>
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
