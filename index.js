// similarityFn(a,b) where a and b are floating point
// returns 0 to 1 where 1 is most similar 0 is completely dissimilar
exports.similarityFn = function(other,self) {
	var diff = Math.abs(other -  self);
	var ratio = diff / self;
	var match = 1 - ratio;
	return match;
}
// same as similarityFn but against a key
exports.similarityFnKey = function(other,self,key) {
	var diff = Math.abs(other[key]- self[key]);
	var ratio = diff / self[key];
	var match = 1 - ratio;
	return match;
};
