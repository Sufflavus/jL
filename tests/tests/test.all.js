var expect = chai.expect;

describe('all', function() {
    it('return true if all elements of a sequence satisfy a condition', function () {
        var numbers = [2, 3, 4, 5, 6];

        var result = jL.fromArray(numbers).all(function(n) {
            return n > 0;
        });

        expect(result).to.be.true;
    });

    it('return true if the sequence is empty', function () {
        var numbers = [];
        
        var result = jL.fromArray(numbers).all(function(n) {
            return n > 0;
        });

        expect(result).to.be.true;
    });
});