export interface FlowerDetail {
  id: string;
  careInstructions: string;
  bloomSeason: string;
  color: string;
  height: string;
}

export const flowerDetails: FlowerDetail[] = [
  {
    id: "1", // 红玫瑰
    careInstructions: "每周浇水2-3次，保持土壤湿润但不过湿。放置在阳光充足的地方。",
    bloomSeason: "春季至秋季",
    color: "红色",
    height: "30-60厘米"
  },
  {
    id: "2", // 向日葵
    careInstructions: "需要充足的阳光和水分，土壤应保持湿润。",
    bloomSeason: "夏季至秋季",
    color: "黄色",
    height: "150-200厘米"
  },
  {
    id: "3", // 郁金香
    careInstructions: "保持土壤微湿，避免阳光直射，适合凉爽环境。",
    bloomSeason: "春季",
    color: "粉色",
    height: "30-40厘米"
  },
  {
    id: "4", // 百合花
    careInstructions: "每周浇水1-2次，放置在明亮但非直射阳光的地方。",
    bloomSeason: "夏季",
    color: "白色",
    height: "60-100厘米"
  },
  {
    id: "5", // 紫罗兰
    careInstructions: "喜欢半阴环境，保持土壤湿润，避免阳光直射。",
    bloomSeason: "春季",
    color: "紫色",
    height: "15-20厘米"
  },
  {
    id: "6", // 康乃馨
    careInstructions: "每周浇水2次，放置在阳光充足的地方。",
    bloomSeason: "春季至夏季",
    color: "粉色",
    height: "30-60厘米"
  },
  {
    id: "7", // 荷花
    careInstructions: "需要充足的阳光和水分，种植在水中或湿润的泥土中，水深约20-30厘米。",
    bloomSeason: "夏季",
    color: "粉色",
    height: "60-150厘米"
  }
]; 