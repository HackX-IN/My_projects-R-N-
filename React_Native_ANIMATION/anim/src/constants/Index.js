export const N = 12;
export const SQAURE_SIZE = 12;
export const Button_Width = 170;
export const IMAGE_Url =
  "https://cdn-icons-png.flaticon.com/128/7547/7547426.png";

export const TINT_COLORS = ["#8716AC", "#FF5733", "#33FF57"];
export const EVENLY_DISTRIBUTED_COLORS = [];
const colorCount = TINT_COLORS.length;
const distributionCount = 4;

for (let i = 0; i < distributionCount; i++) {
  EVENLY_DISTRIBUTED_COLORS.push(...TINT_COLORS);
}
