metric
======

Metric is a set of metric (distance) functions, along with assorted related functions such as similarity and preference functions,
 with a variety of interfaces.

Metric Functions
================

.rd1 (x,y) 
-----------
	
	<img src="http://upload.wikimedia.org/math/1/6/1/1616714f4b7272e8e6dda30900138981.png">

.rd2 (x,y)
----------

	<img src="http://upload.wikimedia.org/math/1/1/d/11d23a5aeea95552612cf9381fcf7d32.png">

Non Metric, Related functions
=============================


.similar (other,self)
---------------------

other and self are floating point, returns 0 to 1, 1 being the most similar

.similarKey (other, self, key)
------------------------------

other and self are objects, executes similarityFn on the key

example:

	john = { score: 24, name: "John Doe" };
	bill = { score: 20, name: "Bill Smith" };

	var sim = require('metric').similarityFnKey;
	
	console.log(sim(john,bill,'score'));
	
	>> 0.8 // 80% similar

	
