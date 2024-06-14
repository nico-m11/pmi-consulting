import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useMemo } from 'react';
import { useTable, useFilters, useGlobalFilter } from 'react-table';
import { saveAs } from 'file-saver';
import ExcelJS from 'exceljs';

// Mock data for demonstration purposes
const mockData = [
    { id: 1, name: 'Azienda A', email: 'aziendaA@example.com', phone: '123456789' },
    { id: 2, name: 'Azienda B', email: 'aziendaB@example.com', phone: '987654321' },
    // Add more data as needed
];

export default function Aziende({ auth }) {
    const data = useMemo(() => mockData, []);
    const columns = useMemo(() => [
        { Header: 'Nome', accessor: 'name' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Telefono', accessor: 'phone' },
        {
            Header: 'Azioni',
            accessor: 'actions',
            Cell: ({ row }) => (
                <div>
                    <button className="bg-blue-500 text-white px-2 py-1 m-1 rounded">Visualizza</button>
                    <button className="bg-yellow-500 text-white px-2 py-1 m-1 rounded">Modifica</button>
                    <button className="bg-red-500 text-white px-2 py-1 m-1 rounded">Elimina</button>
                </div>
            ),
        },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({ columns, data }, useFilters, useGlobalFilter);

    const handleDownloadExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Aziende');

        worksheet.columns = [
            { header: 'Nome', key: 'name', width: 30 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Telefono', key: 'phone', width: 15 },
        ];

        data.forEach((item) => {
            worksheet.addRow(item);
        });

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'aziende.xlsx');
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Aziende</h2>}
        >
            <Head title="Aziende" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mb-4 flex justify-between">
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Cerca..."
                                    value={state.globalFilter || ''}
                                    onChange={(e) => setGlobalFilter(e.target.value)}
                                />
                                <button
                                    className="bg-green-500 text-white px-4 py-2 ml-4 rounded"
                                    onClick={handleDownloadExcel}
                                >
                                    Scarica Excel
                                </button>
                            </div>
                            <table {...getTableProps()} className="min-w-full leading-normal">
                                <thead>
                                    {headerGroups.map(headerGroup => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map(column => (
                                                <th
                                                    {...column.getHeaderProps()}
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                                >
                                                    {column.render('Header')}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {rows.map(row => {
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map(cell => (
                                                    <td
                                                        {...cell.getCellProps()}
                                                        className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                                    >
                                                        {cell.render('Cell')}
                                                    </td>
                                                ))}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
