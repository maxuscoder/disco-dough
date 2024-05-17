import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
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
        className="bg-yellow-50 p-3 text-lg border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-orange-500"
      />
    </form>
  );
}

export default SearchOrder;
