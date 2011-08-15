metric
======

Metric is a set of metric (distance) functions with assorted interfaces.

Available functions
===================

.similarityFn (other, self)
---------------------------

other and self are floating point, returns 0 to 1, 1 being the most similar

.similarityFnKey (other, self, key)
-----------------------------------

other and self are objects, executes similarityFn on the key

example:

	john = { score: 24, name: "John Doe" };
	bill = { score: 20, name: "Bill Smith" };

	var sim = require('metric').similarityFnKey;
	
	console.log(sim(john,bill,'score'));
	
	>> 0.8 // 80% similar

	
