import * as chai from "chai";
import { assignTask } from "./solution";

it("task assignment test", function () {
  const k = 3;
  const tasks = [1, 3, 5, 3, 1, 4];
  const expected = [
    [4, 2],
    [0, 5],
    [3, 1],
  ];

  const expectedDuration = getMaxDuration(tasks, expected);
  const actual = assignTask(k, tasks);
  const actualDuration = getMaxDuration(tasks, actual);
  chai.expect(actualDuration).to.deep.equal(expectedDuration);
});

function getMaxDuration(durations: number[], pairing: number[][]) {
  return Math.max(...pairing.map(([i, j]) => durations[i] + durations[j]));
}
