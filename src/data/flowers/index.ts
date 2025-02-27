import { flowerBasics, FlowerBasic } from './flowerBasics';
import { flowerDetails, FlowerDetail } from './flowerDetails';

export interface Flower extends FlowerBasic {
  details: Omit<FlowerDetail, 'id'>;
}

export const flowers: Flower[] = flowerBasics.map(basic => {
  const detail = flowerDetails.find(detail => detail.id === basic.id);
  
  if (!detail) {
    throw new Error(`找不到ID为${basic.id}的花的详情信息`);
  }
  
  const { id: _, ...detailsWithoutId } = detail;
  
  return {
    ...basic,
    details: detailsWithoutId
  };
});

export { flowerBasics } from './flowerBasics';
export type { FlowerBasic } from './flowerBasics';
export { flowerDetails } from './flowerDetails';
export type { FlowerDetail } from './flowerDetails'; 