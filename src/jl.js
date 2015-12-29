// @author Sufflavus https://github.com/Sufflavus
// @version 1.1.0 

var jL = (function() {
    function JL(source){
        this.__source = source.slice();
    }

    JL.prototype.select = function(predicate){
        // TODO: check if predicate is a function
        this.__source = this.__source.map(predicate);
        return this;
    };

    JL.prototype.selectMany = function(collectionSelector, resultSelector){
        // TODO: check if collectionSelector and resultSelector are functions
        this.__source = this.__source.map(function (sourceItem, index) {
            return { 
                key: sourceItem, 
                values: collectionSelector(sourceItem, index)
            };
        }).reduce(function(result, item) {
            if(resultSelector){
                var resultCollection = item.values.map(function(value){
                    return resultSelector(item.key, value);
                });
                return result.concat(resultCollection);
            }
            return result.concat(item.values);
        },[]);
        
        return this;
    };

    JL.prototype.where = function(predicate){
        // TODO: check if predicate is a function
        this.__source = this.__source.filter(predicate);
        return this;
    };

    JL.prototype.take = function(count){
        // TODO: check if count is a integer

        if(count < 0) {
            this.__source = [];
            return this;
        }

        this.__source = this.__source.slice(0, count);
        return this;
    };

    JL.prototype.toArray = function(){
        return this.__source.slice();
    };

    return {
        fromArray:  function(array){
            // TODO: check if it's an array
            return new JL(array);
        }
    };
})();
