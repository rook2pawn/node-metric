var metric = require('../index');

exports.testSimilarityFn = function(test) {
	test.expect(1);
	test.equals(0.8,metric.similar(24,20));
	test.done();
};
exports.testSimilarityKey = function(test) {
	test.expect(1);
	test.equals(0.8,metric.similarKey({name:'bill',score:24},{name:'john',score:20},'score'));
	test.done();
};
