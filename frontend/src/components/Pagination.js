import React from "react";

function Pagination({ page, setPage, total, limit }) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        ⬅ Prev
      </button>
      <span>
        Page {page} of {totalPages || 1}
      </span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages || totalPages === 0}
      >
        Next ➡
      </button>
    </div>
  );
}

export default Pagination;
