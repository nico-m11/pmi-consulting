import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link, router} from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import * as ExcelJS from "exceljs";
import { saveAs } from 'file-saver';

export default function Aziende({auth, aziende, queryParams = null, success}) {
    const azienda = JSON.parse(aziende);
    console.log(azienda);

    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("aziende.index"), queryParams);
    };

    const handleDownloadExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Aziende');

        worksheet.columns = [
            { header: 'Nome', key: 'name', width: 30 },
            { header: 'Partita Iva', key: 'vat_no', width: 20 },
            { header: 'Numero di telefono', key: 'phone_number', width: 20 },
            { header: 'Indirizzo', key: 'address_complete', width: 50 },
            { header: 'Livello di Rischio', key: 'credit_rating_description', width: 18 },
            { header: 'Punteggio di Rating', key: 'credit_rating_provider_value', width: 10 },
            { header: 'Categoria di Rating', key: 'credit_rating_value', width: 10 },


        ];

        azienda.forEach((item) => {
            worksheet.addRow(item);
        });

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        saveAs(blob, 'aziende.xlsx');
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
         router.get(route("aziende.index"), queryParams);
    };

    const deleteProject = (azienda) => {
        if (!window.confirm("Are you sure you want to delete the project?")) {
            return;
        }
        router.delete(
            route("aziende.destroy", azienda.id)
        );
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Aziende
                    </h2>
                    <div className='flex justify-end items-center'>
                        <Link
                            className="bg-red-500 py-1 mr-2 px-3 text-white rounded shadow transition-all hover:bg-red-600"
                            onClick={handleDownloadExcel}
                        >
                            Scarica Excel
                        </Link>
                        <Link
                            href={route("aziende.create")}
                            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                        >
                            Add new
                        </Link>
                    </div>
                </div>
            }
            >
        <Head title="Aziende"/>
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
                                        {/*<TableHeading*/}
                                        {/*    name="id"*/}
                                        {/*    sort_field={queryParams.sort_field}*/}
                                        {/*    sort_direction={queryParams.sort_direction}*/}
                                        {/*    sortChanged={sortChanged}*/}
                                        {/*>*/}
                                        {/*    ID*/}
                                        {/*</TableHeading>*/}
                                        {/*<th className="px-3 py-3">Image</th>*/}
                                        <TableHeading
                                            name="name"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                        >
                                            Name
                                        </TableHeading>

                                        {/*<TableHeading*/}
                                        {/*    name="status"*/}
                                        {/*    sort_field={queryParams.sort_field}*/}
                                        {/*    sort_direction={queryParams.sort_direction}*/}
                                        {/*    sortChanged={sortChanged}*/}
                                        {/*>*/}
                                        {/*    Status*/}
                                        {/*</TableHeading>*/}

                                        <TableHeading
                                            name="phone_number"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                        >
                                            Numero di Telefono
                                        </TableHeading>

                                        <TableHeading
                                            name="indirizzo"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                        >
                                            Indirizzo completo
                                        </TableHeading>
                                        <th className="px-3 py-3 text-right">Actions</th>
                                    </tr>
                                    </thead>
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3">
                                            <TextInput
                                                className="w-full"
                                                defaultValue={queryParams.name}
                                                placeholder="Nome Azienda"
                                                onBlur={(e) =>
                                                    searchFieldChanged("name", e.target.value)
                                                }
                                                onKeyPress={(e) => onKeyPress("name", e)}
                                            />
                                        </th>
                                        {/*<th className="px-3 py-3">*/}
                                        {/*    <SelectInput*/}
                                        {/*        className="w-full"*/}
                                        {/*        defaultValue={queryParams.status}*/}
                                        {/*        onChange={(e) =>*/}
                                        {/*            searchFieldChanged("status", e.target.value)*/}
                                        {/*        }*/}
                                        {/*    >*/}
                                        {/*        <option value="">Select Status</option>*/}
                                        {/*        <option value="pending">Pending</option>*/}
                                        {/*        <option value="in_progress">In Progress</option>*/}
                                        {/*        <option value="completed">Completed</option>*/}
                                        {/*    </SelectInput>*/}
                                        {/*</th>*/}
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {azienda.data.map((az) => (

                                    <tr
                                        className="bg-white border-b  border-gray-700"
                                        key={az.id}
                                    >
                                        {/*<td className="px-3 py-2">*/}
                                        {/*    {az.id}*/}
                                        {/*</td>*/}
                                        {/*<td className="px-3 py-2">*/}
                                        {/*    <img*/}
                                        {/*        //    src={project.image_path} style={{ width: 60 }}*/}
                                        {/*    />*/}
                                        {/*</td>*/}
                                        <th className="px-3 py-2 text-100 text-nowrap hover:underline">
                                            <Link
                                                    href={route("aziende.show", az.id)}
                                            >
                                                {az.name}
                                            </Link>
                                        </th>
                                        <td className="px-3 py-2 text-nowrap">
                                            {az.phone_number}

                                        </td>
                                        <td className="px-3 py-2 text-nowrap">
                                            {az.address_complete}

                                        </td>
                                        <td className="px-3 py-2 text-nowrap">
                                            {/* <Link
                                                href={route("aziende.edit", az.id)}
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                            >
                                                Edit
                                            </Link> */}
                                            <button
                                                onClick={(e) => deleteProject(az)}
                                                className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                            >
                                                Delete
                                            </button>
                                        </td>
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
