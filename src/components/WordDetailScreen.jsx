import React from "react";

export default function WordListScreen({ wordList, onSelectWord }) {
  if (wordList.length === 0) return <p>単語がまだありません。</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">単語帳一覧</h2>
      <ul>
        {wordList.map((word) => (
          <li
            key={word.term}
            className="p-2 border-b cursor-pointer"
            onClick={() => onSelectWord(word)}
          >
            {word.term}
          </li>
        ))}
      </ul>
    </div>
  );
}
