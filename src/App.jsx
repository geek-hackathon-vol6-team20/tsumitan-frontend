import React, { useState } from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import SearchScreen from "./components/SearchScreen";
import WordListScreen from "./components/WordListScreen";
import WordDetailScreen from "./components/WordDetailScreen";

// 最初に表示する単語のダミーデータ
const dummyWords = [
  { term: "apple", definition: "A sweet red fruit" },
  { term: "banana", definition: "A long yellow fruit" },
];

export default function App() {
  const [screen, setScreen] = useState("search");
  const [wordList, setWordList] = useState(dummyWords);
  const [selectedWord, setSelectedWord] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const addWord = (term, definition) => {
  if (!wordList.some((w) => w.term === term)) { // 重複チェック
    setWordList([...wordList, { term, definition }]);
  }
};

  const handleSelectWord = (word) => {
    setSelectedWord(word);
    setScreen("detail"); // 「単語詳細」画面へ
    setMenuOpen(false);
  };

  const handleNavigate = (newScreen) => {
    setScreen(newScreen);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-sky-400 text-white sticky top-0 z-10">
        <h1 className="text-xl font-bold">
          積み単
        </h1>
        <button
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          ☰
        </button>
      </header>

      <HamburgerMenu
        isOpen={menuOpen}
        onNavigate={handleNavigate}
        // selectedWord props は HamburgerMenu から削除したので、ここからも削除
      />

      <main className="p-4">
        {screen === "search" && <SearchScreen onAddWord={addWord} />}
        {screen === "list" && ( // 「単語帳一覧」画面
          <WordListScreen wordList={wordList} onSelectWord={handleSelectWord} />
        )}
        {screen === "detail" && ( // 「単語詳細」画面
          <WordDetailScreen
            word={selectedWord}
            onBack={() => setScreen("list")} // 「単語帳一覧」に戻る
          />
        )}
        {/* 他メニュー項目に対応するスクリーン */}
        {screen === "mistakes" && <div>よく間違う単語スクリーン (未実装)</div>}
        {screen === "minitest" && <div>ミニテストスクリーン (未実装)</div>}
        {screen === "settings" && <div>設定スクリーン (未実装)</div>}
      </main>
    </div>
  );
}