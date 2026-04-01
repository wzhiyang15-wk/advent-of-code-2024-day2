# Advent of Code 2024 - Day 2: Red-Nosed Reports

This is my JavaScript solution for Advent of Code 2024 Day 2 (Part 1).

## Problem Summary

Each report is a sequence of numbers called levels. A report is considered safe if:

1. The levels are either all increasing or all decreasing.
2. The difference between every pair of adjacent levels is at least 1 and at most 3.

## Approach

- Parse each line into an array of integers.
- Compute the differences between adjacent values.
- Check whether all differences are positive or all are negative.
- Ensure every absolute difference is between 1 and 3.
- Count how many reports satisfy both conditions.

## Run

Make sure you have Node.js installed, then run:

```bash
node solution.js
