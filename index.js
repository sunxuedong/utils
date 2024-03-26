import { findClosestLineSegments } from "./point/index.js";

const segments = [
  {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ],
  {
    start: { x: 2, y: 2 },
    end: { x: 3, y: 3 },
  },
  [
    { x: 3, y: 3 },
    { x: 4, y: 4 },
  ],
];
const point = {
  x: 3,
  y: 3.5,
};

const result = findClosestLineSegments({ segments, point });
console.log(result);
