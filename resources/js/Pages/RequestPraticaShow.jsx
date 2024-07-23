import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link} from "@inertiajs/react";

export default function RequestPraticaShow({auth, requestPratica}) {

    console.log(requestPratica)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-800 dark:text-200 leading-tight">
                        {`Pratica "${requestPratica.type_richiesta}"`}

                    </h2>
                    <div className='flex justify-end items-center'>
                        <Link
                            className="bg-red-500 py-1 mr-2 px-3 text-white rounded shadow transition-all hover:bg-blue-600"
                            href={route("pratiche.index")}
                        >
                            indietro
                        </Link>
                        {/*<Link*/}
                        {/*    href={route("pratiche.edit", pratiche.id)}*/}
                        {/*    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-red-600"*/}
                        {/*>*/}
                        {/*    Edit*/}
                        {/*</Link>*/}
                    </div>
                </div>
            }
        >
            <Head title={`Project "${requestPratica.type_richiesta}"`}/>
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
                                        <label className="font-bold text-lg">Project ID</label>
                                        <p className="mt-1">{requestPratica.id}</p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Project Name</label>
                                        <p className="mt-1">{requestPratica.type_richiesta}</p>
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
