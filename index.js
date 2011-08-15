// metric relative difference 1
var metricRelativeDiff1 = function(a, b) {
	var diff = Math.abs(a - b);
	var max = Math.max(Math.abs(a), Math.abs(b));
	var rd = diff / max;
	return rd;
};
exports.rd1 = metricRelativeDiff1;

// metric relative difference 2
var metricRelativeDiff2 = function(a, b) {
	var diff = Math.abs(a - b);
	var avg = (Math.abs(a) + Math.abs(b)) / 2;
	var rd = diff / avg;
	return rd;
};
exports.rd2 = metricRelativeDiff2;

// similarityFn(a,b) where a and b are floating point
// returns 0 to 1 where 1 is most similar 0 is completely dissimilar
var similarityFn = function(other,self) {
	var diff = Math.abs(other -  self);
	var ratio = diff / self;
	var match = 1 - ratio;
	return match;
};
exports.similar = exports.similarityFn = similarityFn;

// same as similarityFn but against a key
exports.similarKey = exports.similarityFnKey = function(other,self,key) {
	var diff = Math.abs(other[key]- self[key]);
	var ratio = diff / self[key];
	var match = 1 - ratio;
	return match;
};

