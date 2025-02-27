import Image from 'next/image';
import Link from 'next/link';
import { Flower } from '@/data/flowers';

interface FlowerCardProps {
  flower: Flower;
}

export default function FlowerCard({ flower }: FlowerCardProps) {
  return (
    <Link href={`/flowers/${flower.id}`} className="group">
      <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800">
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
            <Image
              src={flower.image}
              alt={flower.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={false}
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{flower.name}</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{flower.description}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">¥{flower.price}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              {flower.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
} 