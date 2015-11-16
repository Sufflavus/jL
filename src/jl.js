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
        
        var temp = [];
        this.__source.forEach(function (sourceItem, index) {
            temp.push(
                { 
                    sourceItem: sourceItem, 
                    collection: collectionSelector(sourceItem, index)
                });
        });
        
        var result = [];
        temp.forEach(function (item) {
            if(resultSelector) {
                var resultCollection = item.collection.map(function(collectionItem){
                    return resultSelector(item.sourceItem, collectionItem);
                });
                result = result.concat(resultCollection);
            } else {
                result = result.concat(item.collection);
            }
        });

        this.__source = result;
        return this;
    };

    JL.prototype.where = function(predicate){
        // TODO: check if predicate is a function
        this.__source = this.__source.filter(predicate);
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
