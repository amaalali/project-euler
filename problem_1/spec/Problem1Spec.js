"use strict";
describe("Project Euler: Problem 1: multiples of 3 or 5 below N", function() {
	var Problem1 = require('../src/Problem1');
	var problem1;
	var N = 1000;

	beforeEach(function() {
		problem1 = new Problem1();
	});

	describe("#multipleOf can check if given number is multiple of a given factor", function() {
		it("verify multiple of 5", function() {
			expect(problem1.multipleOf(N)).toEqual(true);
		});

		it("verify not multiple of 5", function() {
			expect(problem1.multipleOf(N+1)).toEqual(false);
		});

		it("verify multiple of 3", function() {
			expect(problem1.multipleOf(3*N)).toEqual(true);
		});

		it("verify not multiple of 3", function() {
			expect(problem1.multipleOf(3*N+1)).toEqual(false);
		});

		it("multiple of 3 and 5", function() {
			expect(problem1.multipleOf(3*5*N)).toEqual(true);
		});
	});

	describe("#makeArray", function() {
		it("with range from 1..10", function() {
			expect(problem1.makeArray(10)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
		});
		it("with range from 1..25", function() {
			expect(problem1.makeArray(20)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]);
		});
	});

	describe("filtering multiples of 3 and 5", function() {
		it("with range from 1..10", function() {
			let arr = problem1.makeArray(20);
			expect( arr.filter(problem1.multipleOf) ).toEqual([ 3, 5, 6, 9, 10, 12, 15, 18, 20 ]);
		});
	});

	describe("Problem1", function() {
		it("output", function() {
			expect( Problem1(20)).toEqual([ 3, 5, 6, 9, 10, 12, 15, 18, 20 ]);
		});
	});
});
