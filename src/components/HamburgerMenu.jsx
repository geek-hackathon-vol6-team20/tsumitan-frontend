// src/components/HamburgerMenu.jsx
import React from "react";

export default function HamburgerMenu({ isOpen, onNavigate }) { // selectedWord は不要になる可能性
  if (!isOpen) return null;

  const menuItems = [
    { name: "未確認の単語", key: "list" }, // 「未確認の単語」から「単語帳一覧」(key: "list") へ
    { name: "よく間違う単語", key: "mistakes" }, // (遷移先キーは仮)
    { name: "ミニテスト", key: "minitest" },   // (遷移先キーは仮)
    { name: "設定", key: "settings" },     // (遷移先キーは仮)
    // 検索画面に戻るためのメニュー項目が必要であれば追加
    { name: "検索", key: "search" },
  ];

  return (
    <div className="bg-white shadow-md">
      <ul className="flex flex-col">
        {menuItems.map((item) => (
          <li key={item.key} className="border-b last:border-b-0">
            <button
              className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-100"
              onClick={() => {
                onNavigate(item.key);
              }}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}