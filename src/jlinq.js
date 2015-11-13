var jLinq = (function() {
    function JLinq(source){
        this.__source = source.slice();
    }

    JLinq.prototype.select = function(predicate){
        // TODO: check if predicate is a function
        this.__source = this.__source.map(predicate);
        return this;
    };

    JLinq.prototype.selectMany = function(collectionSelector, resultSelector){
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

    JLinq.prototype.where = function(predicate){
        // TODO: check if predicate is a function
        this.__source = this.__source.filter(predicate);
        return this;
    };

    JLinq.prototype.toArray = function(){
        return this.__source.slice();
    };

    return {
        fromArray:  function(array){
            // TODO: check if it's an array
            return new JLinq(array);
        }
    };
})();
