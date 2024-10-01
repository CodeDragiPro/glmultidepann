import React, { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import { listTestimonials, deleteTestimonial } from '../utils/firebaseUtils'; // Importer deleteTestimonial

const DashboardComments = () => {
  const [comments, setComments] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);

  // Fonction pour charger les commentaires depuis Firebase
  const fetchComments = async () => {
    const testimonials = await listTestimonials();
    // Map pour ajouter des IDs normaux (1, 2, 3...) et utiliser l'ID du témoignage
    const testimonialsWithIds = testimonials.map((testimonial, index) => ({
      ...testimonial,
      id: index + 1, // ID normal pour l'affichage
      realId: testimonial.id // ID réel pour Firebase
    }));
    setComments(testimonialsWithIds);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        accessor: "select",
        Cell: ({ row }) => (
          <input
            type="checkbox"
            checked={selectedComments.includes(row.original.realId)} // Utilise realId pour le suivi des sélections
            onChange={() => handleSelectComment(row.original.realId)}
          />
        ),
      },
      { Header: "ID", accessor: "id" },
      { Header: "Nom", accessor: "name" },
      { Header: "Commentaire", accessor: "comment" },
      { Header: "Note", accessor: "rating" },
    ],
    [selectedComments]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: comments,
      initialState: { pageIndex: 0, pageSize: 10 },
      manualPagination: false,
      pageCount: Math.ceil(comments.length / 10),
    },
    usePagination
  );

  const handleSelectComment = (id) => {
    setSelectedComments((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleDeleteSelectedComments = async () => {
    // Supprime les commentaires sélectionnés
    for (const commentId of selectedComments) {
      await deleteTestimonial(commentId); // Appelle la fonction de suppression avec l'ID réel
    }

    // Rafraîchir la liste des commentaires après la suppression
    await fetchComments(); // Rafraîchir les commentaires
    setSelectedComments([]); // Réinitialiser les sélections après la suppression
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-teal-700">Commentaires</h2>
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="min-w-full bg-white border border-gray-300">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="py-2 px-4 border-b text-left bg-gray-200">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="py-2 px-4 border-b">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selectedComments.length > 0 && (
        <div className="mt-4">
          <button
            onClick={handleDeleteSelectedComments}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Supprimer la sélection
          </button>
        </div>
      )}

      <div className="flex justify-between items-center mt-4">
        <div>
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="mr-2 bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
          >
            {"<<"}
          </button>
          <button
            onClick={previousPage}
            disabled={!canPreviousPage}
            className="mr-2 bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
          >
            Précédent
          </button>
        </div>
        <div>
          <button
            onClick={nextPage}
            disabled={!canNextPage}
            className="mr-2 bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
          >
            Suivant
          </button>
          <button
            onClick={() => gotoPage(page.length - 1)}
            disabled={!canNextPage}
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardComments;