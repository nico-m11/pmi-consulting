import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Shop({ auth }) {
    const [board, setBoard] = useState({
        columns: [
            {
                id: uuidv4(),
                title: 'To Do',
                color: 'bg-red-500',
                cards: [
                    {
                        id: uuidv4(),
                        title: 'Pratica Startup',
                        description: 'Description for pratica Startup'
                    },
                    {
                        id: uuidv4(),
                        title: 'Pratica Prova',
                        description: 'Description for Pratica Prova'
                    }
                ]
            },
            {
                id: uuidv4(),
                title: 'In Progress',
                color: 'bg-yellow-500',
                cards: [
                    {
                        id: uuidv4(),
                        title: 'Pratica Macchine Espresso Bar',
                        description: 'Description for Macchine espresso Bar'
                    }
                ]
            },
            {
                id: uuidv4(),
                title: 'Done',
                color: 'bg-green-500',
                cards: []
            }
        ]
    });

    const handleCardMove = (board) => {
        setBoard(board);
    };

    const addColumn = () => {
        const newColumn = {
            id: uuidv4(),
            title: 'New Column',
            color: 'bg-blue-500',
            cards: []
        };
        setBoard((prevBoard) => ({
            ...prevBoard,
            columns: [...prevBoard.columns, newColumn]
        }));
    };

    const renameColumn = (columnId, newTitle) => {
        const updatedBoard = {
            ...board,
            columns: board.columns.map((column) =>
                column.id === columnId ? { ...column, title: newTitle } : column
            )
        };
        setBoard(updatedBoard);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shop</h2>}
        >
            <Head title="Pratiche" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center mb-4">
                                <button
                                    onClick={addColumn}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Add Column
                                </button>
                            </div>
                            <Board
                                initialBoard={board}
                                allowRemoveLane
                                allowRenameColumn
                                allowRemoveCard
                                onCardDragEnd={handleCardMove}
                                renderColumnHeader={({ title, id, color }, { renameColumn, removeColumn }) => (
                                    <div className={`flex justify-between items-center p-2 ${color} text-white rounded-t-md mb-2`}>
                                        <input
                                            type="text"
                                            value={title}
                                            onChange={(e) => renameColumn(id, e.target.value)}
                                            className="bg-transparent border-b border-gray-100 focus:outline-none focus:border-gray-300 text-white w-full"
                                        />
                                        <button
                                            onClick={removeColumn}
                                            className="text-white ml-2"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                )}
                                renderCard={({ title, description }) => (
                                    <div className="bg-white p-4 rounded-lg shadow-md mb-2">
                                        <h3 className="font-bold text-lg">{title}</h3>
                                        <p className="text-sm text-gray-600">{description}</p>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
