import React from "react";

export default function WordDetailScreen({ word, onBack }) {
  if (!word) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">単語詳細</h2>
      <p className="text-2xl font-semibold">{word.term}</p>
      <p className="mt-2">{word.definition}</p>
      <button
        className="mt-4 bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded"
        onClick={onBack}
      >
        単語帳一覧に戻る
      </button>
    </div>
  );
}
