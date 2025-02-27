import Image from "next/image";
import FlowerCard from "@/components/FlowerCard";
import { flowers } from "@/data/flowers";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 头部 */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image
              src="/images/logo.svg"
              alt="花之语花店"
              width={40}
              height={40}
              className="dark:invert"
            />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">花之语花店</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-emerald-600 dark:text-emerald-400 font-medium">首页</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">关于我们</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400">联系方式</a>
          </nav>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-8">
        {/* 横幅 */}
        <div className="relative h-64 md:h-80 lg:h-96 w-full mb-8 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500">
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-16 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">美丽花朵，传递情感</h2>
                <p className="text-white text-lg mb-6">为您精选各类鲜花，让每一次送花都成为难忘的体验</p>
                <button className="bg-white text-emerald-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 花卉分类标题 */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">精选花卉</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">为您精心挑选的各类鲜花</p>
        </div>

        {/* 花卉卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flowers.map((flower) => (
            <FlowerCard key={flower.id} flower={flower} />
          ))}
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">花之语花店</h3>
              <p className="text-gray-600 dark:text-gray-400">
                我们提供各类鲜花，为您的特殊时刻增添美丽与感动。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">联系我们</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">地址：北京市朝阳区花园路88号</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">电话：010-12345678</p>
              <p className="text-gray-600 dark:text-gray-400">邮箱：contact@flowerstore.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">营业时间</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">周一至周五：9:00 - 20:00</p>
              <p className="text-gray-600 dark:text-gray-400">周六至周日：10:00 - 18:00</p>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-gray-500 dark:text-gray-400">
            <p>© 2024 花之语花店. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
