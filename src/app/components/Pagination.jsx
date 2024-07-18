"use client";
const Pagination = ({ numPages, current, setCurrent }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-10 ">
      {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
        <button
          className={`bg-[#EF5A6F] text-white border-none py-2 px-5 ${
            current === page ? "bg-[#e4949e] cursor-not-allowed" : ""
          }`}
          onClick={() => {
            if (current !== page) {
              setCurrent(page);
            }
          }}
          key={page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
