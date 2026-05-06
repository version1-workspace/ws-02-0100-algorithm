import { TestCase } from "@/cli/test/types";
import { MedianOperation } from "./answer";

export const testCases = [
  {
    input: [
      ["addNum", 1],
      ["addNum", 2],
      ["findMedian"],
      ["addNum", 3],
      ["findMedian"],
    ],
    expected: [1.5, 2],
  },
  {
    input: [
      ["addNum", -1],
      ["findMedian"],
      ["addNum", -2],
      ["findMedian"],
      ["addNum", -3],
      ["findMedian"],
    ],
    expected: [-1, -1.5, -2],
  },
  {
    input: [
      ["addNum", 5],
      ["addNum", 15],
      ["addNum", 1],
      ["addNum", 3],
      ["findMedian"],
    ],
    expected: [4],
  },
] as TestCase<MedianOperation[], number[]>[];
