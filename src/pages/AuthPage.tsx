import { useAtomValue } from 'jotai';
import type React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUserAtom } from '../atoms';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const navigate = useNavigate();
  const authUser = useAtomValue(authUserAtom);

  // 認証成功時の処理
  const handleAuthSuccess = () => {
    // ホームページまたは辞書ページにリダイレクト
    navigate('/home');
  };

  // 匿名ユーザーで続行する場合の処理
  const handleContinueAsAnonymous = () => {
    navigate('/home');
  };

  return (
    <div className="h-full bg-slate-50 flex items-center justify-center p-4 lg:items-start lg:pt-8 lg:pb-16 overflow-y-auto">
      <div className="max-w-md w-full space-y-8 my-auto lg:my-0">
        <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-8">
          {/* タブ切り替え */}
          <div className="flex mb-6">
            <button
              type="button"
              onClick={() => setMode('signin')}
              className={`flex-1 py-2 px-4 text-center rounded-l-lg border ${
                mode === 'signin'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
            >
              サインイン
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`flex-1 py-2 px-4 text-center rounded-r-lg border ${
                mode === 'signup'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
            >
              アカウント作成
            </button>
          </div>

          {/* 認証コンポーネント */}
          {mode === 'signup' ? (
            <SignUpForm onSuccess={handleAuthSuccess} />
          ) : (
            <SignInForm onSuccess={handleAuthSuccess} />
          )}

          {/* 匿名ユーザーで続行するオプション */}
          {authUser?.isAnonymous && (
            <div className="mt-8 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-slate-500">または</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleContinueAsAnonymous}
                className="mt-4 w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                匿名ユーザーのまま続行
              </button>
              <p className="mt-2 text-xs text-slate-500">
                後でアカウントを作成して学習データを保存できます
              </p>
            </div>
          )}
        </div>

        {/* フッター情報 */}
        <div className="text-center text-sm text-slate-600">
          <p>安全で快適な学習環境を提供するため、適切にご利用ください。</p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
