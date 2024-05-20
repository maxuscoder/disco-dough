import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter order ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-yellow-50 p-3 text-lg border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-yellow-500"
      />
      <button className="p-3 text-lg border-2 border-yellow-500 text-white bg-yellow-500 rounded-r-lg hover:border-yellow-600 hover:bg-yellow-600">
        Search
      </button>
    </form>
  );
}

export default SearchOrder;
