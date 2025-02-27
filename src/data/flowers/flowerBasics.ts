export interface FlowerBasic {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const flowerBasics: FlowerBasic[] = [
  {
    id: "1",
    name: "红玫瑰",
    description: "象征爱情与浪漫的经典红玫瑰，适合送给心爱的人。",
    price: 99,
    image: "/images/flowers/red-rose.jpeg",
    category: "玫瑰"
  },
  {
    id: "2",
    name: "向日葵",
    description: "象征着阳光、希望和忠诚的向日葵，能带来温暖和快乐。",
    price: 79,
    image: "/images/flowers/sunflower.jpeg",
    category: "向日葵"
  },
  {
    id: "3",
    name: "郁金香",
    description: "优雅高贵的郁金香，象征着完美的爱和祝福。",
    price: 69,
    image: "/images/flowers/tulip.jpeg",
    category: "郁金香"
  },
  {
    id: "4",
    name: "百合花",
    description: "纯洁高雅的百合花，象征着纯洁、高贵和永恒的爱。",
    price: 89,
    image: "/images/flowers/lily.jpeg",
    category: "百合"
  },
  {
    id: "5",
    name: "紫罗兰",
    description: "散发淡雅香气的紫罗兰，象征着忠诚、真挚的爱。",
    price: 59,
    image: "/images/flowers/violet.jpeg",
    category: "紫罗兰"
  },
  {
    id: "6",
    name: "康乃馨",
    description: "代表着母爱和感恩的康乃馨，是母亲节的理想礼物。",
    price: 69,
    image: "/images/flowers/carnation.jpeg",
    category: "康乃馨"
  },
  {
    id: "7",
    name: "荷花",
    description: "荷花象征着纯洁、和平与吉祥，亭亭玉立于水中，展现东方之美。",
    price: 89,
    image: "/images/flowers/lotus.jpeg",
    category: "荷花"
  }
]; 