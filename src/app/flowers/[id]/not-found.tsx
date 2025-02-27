import Link from 'next/link';
import Image from 'next/image';

export default function FlowerNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* 头部 */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="花之语花店"
                width={40}
                height={40}
                className="dark:invert"
              />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">花之语花店</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">
              首页
            </Link>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">关于我们</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">联系方式</a>
          </nav>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">找不到您要查找的花卉</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            抱歉，您要查看的花卉不存在或已被移除。
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            返回首页
          </Link>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-gray-500 dark:text-gray-400">
            <p>© 2024 花之语花店. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 