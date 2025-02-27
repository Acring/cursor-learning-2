import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { flowers } from '@/data/flowers';

interface FlowerDetailPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return flowers.map((flower) => ({
    id: flower.id,
  }));
}

export default function FlowerDetailPage({ params }: FlowerDetailPageProps) {
  const flower = flowers.find((f) => f.id === params.id);

  if (!flower) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
      <main className="container mx-auto px-4 py-8">
        {/* 返回链接 */}
        <div className="mb-6">
          <Link href="/" className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
        </div>

        {/* 花卉详情 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 花卉图片 */}
            <div className="relative h-80 md:h-full min-h-[400px]">
              <Image
                src={flower.image}
                alt={flower.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* 花卉信息 */}
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{flower.name}</h1>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  {flower.category}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">{flower.description}</p>
              
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
                ¥{flower.price}
              </div>
              
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-colors mb-8">
                加入购物车
              </button>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">花卉详情</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 text-gray-500 dark:text-gray-400">颜色</div>
                    <div className="col-span-2 text-gray-900 dark:text-white">{flower.details.color}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 text-gray-500 dark:text-gray-400">高度</div>
                    <div className="col-span-2 text-gray-900 dark:text-white">{flower.details.height}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 text-gray-500 dark:text-gray-400">花期</div>
                    <div className="col-span-2 text-gray-900 dark:text-white">{flower.details.bloomSeason}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1 text-gray-500 dark:text-gray-400">养护指南</div>
                    <div className="col-span-2 text-gray-900 dark:text-white">{flower.details.careInstructions}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 相关推荐 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">您可能还喜欢</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {flowers
              .filter((f) => f.id !== flower.id)
              .slice(0, 4)
              .map((relatedFlower) => (
                <Link key={relatedFlower.id} href={`/flowers/${relatedFlower.id}`} className="group">
                  <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800">
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
                        <Image
                          src={relatedFlower.image}
                          alt={relatedFlower.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{relatedFlower.name}</h3>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">¥{relatedFlower.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
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