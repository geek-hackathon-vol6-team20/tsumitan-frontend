// components/HamburgerMenu.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function HamburgerMenu({ isOpen, onClose, onNavigate, selectedWord }) {
  // 以下propsのisOpenで開閉制御
  if (!isOpen) return null;

  // メニューの項目を配列で定義
  // 最初は「検索」と「単語帳一覧」のみ
  const menuItems = [
    { name: "検索", key: "search" },
    { name: "単語帳一覧", key: "list" },
  ];

  // 詳細単語が選択されている場合は「単語詳細」メニューを追加
  if (selectedWord) {
    menuItems.push({ name: "単語詳細", key: "detail" });
  }

  return (
    // 画面右上に固定配置
    <div className="fixed top-4 right-4 z-50">
      {/* ハンバーガーボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)} // 押すたびに開閉を切り替え
        className="p-2 text-gray-700 rounded-md hover:bg-gray-200"
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        {/* メニュー開いていたら×アイコン、閉じていたら≡アイコン */}
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* メニュー本体：isOpenがtrueのときだけ表示 */}
      {isOpen && (
        <div className="mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
          <ul className="flex flex-col py-2">
            {menuItems.map((item) => (
              <li key={item.key}>
                {/* 各メニュー項目のボタン */}
                <button
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    onNavigate(item.key); // 画面切り替え関数を呼ぶ
                    console.log("ボタンが押されたよ！"); // 動作確認用ログ
                    setIsOpen(false); // メニューを閉じる
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
