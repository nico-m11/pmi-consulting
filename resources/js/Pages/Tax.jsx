import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link, router} from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import * as ExcelJS from "exceljs";
import {saveAs} from 'file-saver';

export default function tax({auth, taxes, queryParams = null, success}) {

    const tax = JSON.parse(taxes);

    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("tax.index"), queryParams);
    };

    const handleDownloadExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('tax');

        worksheet.columns = [
            {header: 'id', key: 'id', width: 30},
            {header: 'name', key: 'name', width: 30},
            // { header: 'indirizzo', key: 'indirizzo', width: 30 },
        ];

        pratica.forEach((item) => {
            worksheet.addRow(item);
        });

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        saveAs(blob, 'tax.xlsx');
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === "asc") {
                queryParams.sort_direction = "desc";
            } else {
                queryParams.sort_direction = "asc";
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("tax.index"), queryParams);
    };

    // const deleteProject = (project) => {
    //     if (!window.confirm("Are you sure you want to delete the project?")) {
    //         return;
    //     }
    //     router.delete(
    //         route("pratiche.destroy", project.id)
    //     );
    // };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Tax
                    </h2>
                    <div className='flex justify-end items-center'>
                        {/*<Link*/}
                        {/*    className="bg-red-500 py-1 mr-2 px-3 text-white rounded shadow transition-all hover:bg-red-600"*/}
                        {/*    onClick={handleDownloadExcel}*/}
                        {/*>*/}
                        {/*    Scarica Excel*/}
                        {/*</Link>*/}
                        {/*<Link*/}
                        {/*    href={route("pratiche.create")}*/}
                        {/*    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"*/}
                        {/*>*/}
                        {/*    Add new*/}
                        {/*</Link>*/}
                    </div>
                </div>
            }
        >
            <Head title="Pratiche"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                            {success}
                        </div>
                    )}
                    <div className="bg-white  overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 ">
                            <div className="overflow-auto">
                                <table
                                    className="w-full text-sm text-left rtl:text-right ">
                                    <thead
                                        className="text-xs text-gray-700 uppercase ">
                                    <tr className="text-nowrap">
                                        <TableHeading
                                            name="name"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                        >
                                            Tipo tassazione
                                        </TableHeading>
                                        {/*<th className="px-3 py-3 text-right">Actions</th>*/}
                                    </tr>
                                    </thead>
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {tax.map((pr) => (

                                        <tr
                                            className="bg-white border-b  border-gray-700"
                                            key={pr.id}
                                        >
                                            <th className="px-3 py-2 text-100 text-nowrap hover:underline">
                                                <Link
                                                    href={route("tax.show", pr.id)}
                                                >
                                                    {pr.type === '3' ? 'Intesa S.Paolo' : pr.type === '1' ? 'Enel' : pr.type === '2' ? 'BNL' : ''}
                                                </Link>
                                            </th>

                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
