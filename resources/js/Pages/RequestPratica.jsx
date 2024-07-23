import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head, Link, router} from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import * as ExcelJS from "exceljs";
import {saveAs} from 'file-saver';

export default function RequestPratica({auth, requestPratica, queryParams = null, success}) {

    const pratica = JSON.parse(requestPratica);

    console.log(pratica)

    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("requestPratica.index"), queryParams);
    };

    const handleDownloadExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('RequestPratiche');

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
        saveAs(blob, 'request_pratiche.xlsx');
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
        router.get(route("requestPratica.index"), queryParams);
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
                        Pratiche
                    </h2>
                    <div className='flex justify-end items-center'>
                        <Link
                            className="bg-red-500 py-1 mr-2 px-3 text-white rounded shadow transition-all hover:bg-red-600"
                            onClick={handleDownloadExcel}
                        >
                            Scarica Excel
                        </Link>
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
                                            Tipo Richiesta
                                        </TableHeading>

                                        <TableHeading
                                            name="valore_richiesta"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                        >
                                            Richiesta
                                        </TableHeading>

                                        <TableHeading
                                            name="status"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                        >
                                            Status
                                        </TableHeading>

                                        <TableHeading
                                            name="created_at"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={queryParams.sort_direction}
                                            sortChanged={sortChanged}
                                        >
                                            Create Date
                                        </TableHeading>

                                        {/*<th className="px-3 py-3 text-right">Actions</th>*/}
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
                                                defaultValue={queryParams.type_request}
                                                placeholder="tipo richiesta"
                                                onBlur={(e) =>
                                                    searchFieldChanged("type_request", e.target.value)
                                                }
                                                onKeyPress={(e) => onKeyPress("type_request", e)}
                                            />
                                        </th>
                                        <th className="px-3 py-3">
                                            <SelectInput
                                                className="w-full"
                                                defaultValue={queryParams.status_request_pratica}
                                                onChange={(e) =>
                                                    searchFieldChanged("status_request_pratica", e.target.value)
                                                }
                                            >
                                                <option value="">Select Status</option>
                                                <option value="pending">Richiesta Effettuata</option>
                                                <option value="in_progress">Pending</option>
                                                <option value="completed">Accettata</option>
                                                <option value="completed">Rifiutata</option>
                                            </SelectInput>
                                        </th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {pratica.data.map((pr) => (

                                        <tr
                                            className="bg-white border-b  border-gray-700"
                                            key={pr.id}
                                        >
                                            <th className="px-3 py-2 text-100 text-nowrap hover:underline">
                                                <Link
                                                    href={route("requestPratica.show", pr.id)}
                                                >
                                                    {pr.type_richiesta}
                                                </Link>
                                            </th>
                                            <th className="px-3 py-2 text-100 text-nowrap hover:underline">
                                                {pr.volore_richiesta}
                                            </th>
                                            <td className="px-3 py-2">
                                                {pr.status_request_pratica === 0 ? 'Rchiesta Effeettuata' : 'Pending'}
                                            </td>

                                            <td className="px-3 py-2 text-nowrap">
                                                {/*<Link*/}
                                                {/*    href={route("pratiche.edit", pr.id)}*/}
                                                {/*    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"*/}
                                                {/*>*/}
                                                {/*    Edit*/}
                                                {/*</Link>*/}
                                                {/*<button*/}
                                                {/*    //onClick={(e) => deleteProject(aziende)}*/}
                                                {/*    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"*/}
                                                {/*>*/}
                                                {/*    Delete*/}
                                                {/*</button>*/}
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
