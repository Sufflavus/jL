var jLinq = (function() {
    function JLinq(source){
        this.source = source;
    }

    JLinq.prototype.select = function(predicate){
        // TODO: check if it's function
        this.source = this.source.map(predicate);
        return this;
    };

    JLinq.prototype.toArray = function(){
        return this.source.slice();
    };

    return {
        fromArray:  function(array){
            // TODO: check if it's array
            return new JLinq(array);
        }
    };
})();