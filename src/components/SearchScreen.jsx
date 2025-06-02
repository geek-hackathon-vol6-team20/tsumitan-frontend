// src/components/SearchScreen.jsx
import React, { useState } from "react";

export default function SearchScreen({ onAddWord }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 「単語帳に追加」ボタンが押されたときの処理
  const handleAddButtonClick = () => {
    if (searchTerm.trim()) {
      onAddWord(searchTerm.trim(), "意味をここに追加"); // 既存の追加処理
      setSearchTerm(""); // 入力欄をクリア
    }
  };

  // Enterキーが押されたときの処理
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      onAddWord(searchTerm.trim(), "意味をここに追加"); // Enterでも追加
      // setSearchTerm(""); // Enterで追加後、入力欄をクリアするかどうかは要件による
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">単語検索</h2>
      <input
        className="border p-2 rounded w-full mb-4"
        placeholder="単語を入力"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Enterキーイベントを監視
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
        onClick={handleAddButtonClick} // ボタンクリック時の処理を分離
      >
        単語帳に追加
      </button>
    </div>
  );
}