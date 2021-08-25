// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the // journey with an empty tank at one of the gas stations.
// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the
// clockwise  direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
// https://baffinlee.com/leetcode-javascript/problem/gas-station.html

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
  var len = gas.length;
  var tank = 0;
  var total = 0;
  var start = 0;
  for (var i = 0; i < len; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      total += tank;
      tank = 0;
    }
  }
  return tank + total >= 0 ? start : -1;
}

module.exports = canCompleteCircuit;
