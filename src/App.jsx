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
  // 現在表示している画面の状態: "search", "list", "detail" のいずれか
  const [screen, setScreen] = useState("search");
  // 単語帳の単語リストの状態
  const [wordList, setWordList] = useState(dummyWords);
  // 詳細表示中の単語の状態
  const [selectedWord, setSelectedWord] = useState(null);
  // ハンバーガーメニューの開閉状態
  const [menuOpen, setMenuOpen] = useState(false);

  // 新しい単語を単語帳に追加する関数
  // 既に同じ単語がある場合は追加しない
  const addWord = (term, definition) => {
    if (!wordList.some((w) => w.term === term)) {
      setWordList([...wordList, { term, definition }]);
    }
  };

  // 単語を選択した時に詳細画面に切り替える関数
  const handleSelectWord = (word) => {
    setSelectedWord(word);
    setScreen("detail");
  };

  return (
    
    <div className="min-h-screen bg-gray-100 p-4 w-full">
      {/* ヘッダー部分：タイトルとハンバーガーボタン */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">単語帳アプリ</h1>

        {/* メニュー開閉ボタン */}
        <button
          aria-label="メニューを開く"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          ☰
        </button>
      </header>

      {/* ハンバーガーメニューコンポーネント */}
      <HamburgerMenu
        isOpen={menuOpen} // メニューの開閉状態
        onClose={() => setMenuOpen(false)} // メニューを閉じる関数
        onNavigate={(newScreen) => setScreen(newScreen)} // 画面切替関数
        selectedWord={selectedWord} // 詳細画面用の単語情報
      />

      {/* メインコンテンツ部分 */}
      <main className="bg-white rounded-lg p-6 shadow">
        {/* 画面状態に応じて表示コンポーネントを切り替え */}
        {screen === "search" && <SearchScreen onAddWord={addWord} />}
        {screen === "list" && (
          <WordListScreen wordList={wordList} onSelectWord={handleSelectWord} />
        )}
        {screen === "detail" && (
          <WordDetailScreen
            word={selectedWord}
            onBack={() => setScreen("list")}
          />
        )}
      </main>
    </div>
  );
}
