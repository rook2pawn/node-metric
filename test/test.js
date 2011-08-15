var metric = require('../index');

exports.testRd1 = function(test) {
	test.expect(3);
	// test non-negativity
	
	// test identity
	test.equals(0, metric.rd1(20,20));
	//test symmetry
	test.equals(metric.rd1(20,24), metric.rd1(24,20));
	//test triangle inequality
	test.equals(true,(metric.rd1(20,24) <= (metric.rd1(20,21) + metric.rd1(21,24))));
	test.done();
};

exports.testRd2 = function(test) {
	test.expect(3);
	// test non-negativity
	
	// test identity
	test.equals(0, metric.rd2(20,20));
	//test symmetry
	test.equals(metric.rd2(20,24), metric.rd2(24,20));
	//test triangle inequality
	test.equals(true,(metric.rd2(20,24) <= (metric.rd2(20,21) + metric.rd2(21,24))));
	test.done();
};
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
