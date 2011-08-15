metric
======

Metric is a set of metric (distance) functions, along with assorted related functions such as similarity and preference functions,
 with a variety of interfaces.

Available functions
===================

.similar (other,self) (shortcut for .similarityFn)
--------------------------------------------------

other and self are floating point, returns 0 to 1, 1 being the most similar

.similarKey (other, self, key) (shortcut for .similarityFnKey (other, self, key))
---------------------------------------------------------------------------------

other and self are objects, executes similarityFn on the key

example:

	john = { score: 24, name: "John Doe" };
	bill = { score: 20, name: "Bill Smith" };

	var sim = require('metric').similarityFnKey;
	
	console.log(sim(john,bill,'score'));
	
	>> 0.8 // 80% similar

	
