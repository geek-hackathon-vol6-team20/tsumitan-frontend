import React, { useState } from "react";

export default function SearchScreen({ onAddWord }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleAdd = () => {
    if (searchTerm.trim()) {
      onAddWord(searchTerm.trim(), "意味をここに追加");
      setSearchTerm("");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">単語検索</h2>
      <input
        className="border p-2 rounded w-full mb-4"
        placeholder="単語を入力"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
        onClick={handleAdd}
      >
        単語帳に追加
      </button>
    </div>
  );
}
