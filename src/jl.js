// @author Sufflavus https://github.com/Sufflavus
// @version 1.1.0 

var jL = (function() {
    function JL(source){
        this.__source = source.slice();
    }

    JL.prototype.all = function(predicate) {
        // TODO: check if predicate is a function
        
        return this.__source.every(predicate);
    };

    JL.prototype.any = function(predicate) {
        // TODO: check if predicate is a function
        if(!predicate) {
            return this.__source.length > 0;
        }
        return this.__source.some(predicate);
    };

    JL.prototype.average = function(predicate) {
        // TODO: check if predicate is a function
        if(!this.__source.length) {
            return 0;
        }

        // TODO: check if all items in array are numbers

        var averageNum = this.__source.reduce(function(sum, number) {
            return sum + (predicate ? predicate(number) : number);
        }, 0) / this.__source.length; 

        return averageNum;
    };

    JL.prototype.concat = function(secondArray) {
        // TODO: check if secondArray is an array
        if(secondArray) {
            this.__source = this.__source.concat(secondArray);
        }
        return this;
    };

    JL.prototype.contains = function(item, comparer) {
        if(!comparer) {
            return this.__source.indexOf(item) >= 0;
        }

        // TODO: check if comparer is a function
        for(var i = 0, length = this.__source.length; i < l; i++) {
            if(comparer(this.__source[i]) === comparer(item)) {
                return true;
            }
        }
        
        return false;
    };

    JL.prototype.count = function(predicate) {
        // TODO: check if predicate is a function
        if(!predicate) {
            return this.__source.length;
        }
        return this.__source.filter(predicate).length;
    };

    JL.prototype.defaultIfEmpty = function(defaultValue) {
        if(!this.__source.length) {
            this.__source = [defaultValue];
        }
        
        return this;
    };

    JL.prototype.distinct = function(comparer) {
        if(!comparer) {
            this.__source = this.__source.filter(function(item, index, array) {
                return array.indexOf(item) === index;
            });
        } else {
            // TODO: check if comparer is a function
            this.__source = this.__source.map(comparer).filter(function(item, index, array) {
                return array.indexOf(item) === index;
            });
        }

        return this;
    };

    JL.prototype.elementAt = function(index) {
        // TODO: check if index is a number
        return this.__source[index];
    };

    JL.prototype.except = function(second, comparer) {
        // TODO: check if second is a array
        if(!second.length) {
            if(!comparer) {
                this.__source = this.__source.filter(function(n, index, array) {
                    return array.indexOf(n) === index;
                });
                return this;
            }
            // TODO
            return this;
        }

        // TODO: check if comparer is a function
        if(!comparer) {
            this.__source = this.__source.filter(function(n) {
                return second.indexOf(n) === -1;
            }).filter(function(n, index, array) {
                return array.indexOf(n) === index;
            });
            return this;
        }

        // TODO
        return this;
    };

    JL.prototype.first = function(predicate) {
        var length = this.__source.length;

        if(!length) {
            throw("Sourse should contain at least 1 element");
        }

        if(!predicate) {
            return this.__source[0];
        }

        // TODO: check if predicate is a function
        for(var i = 0; i < length; i++) {
            if(predicate(this.__source[i])) {
                return this.__source[i];
            }
        }
    };

    JL.prototype.groupBy = function() {

    };

    JL.prototype.groupJoin = function() {

    };

    JL.prototype.intersect = function() {

    };

    JL.prototype.last = function(predicate) {
        var length = this.__source.length;

        if(!this.__source.length) {
            throw("Sourse should contain at least 1 element");
        }

        if(!predicate) {
            return this.__source[length - 1];
        }

        // TODO: check if predicate is a function
        for(var i = length - 1; i >= 0; i--) {
            if(predicate(this.__source[i])) {
                return this.__source[i];
            }
        }
    };

    JL.prototype.max = function(selector) {
        if(!selector) {
            return Math.max.apply(null, this.__source);
        }

        // TODO: check if selector is a function
        return Math.max.apply(null, this.__source.map(selector));
    };

    JL.prototype.min = function(selector) {
        if(!selector) {
            return Math.min.apply(null, this.__source);
        }

        // TODO: check if selector is a function
        return Math.min.apply(null, this.__source.map(selector));
    };

    JL.prototype.orderBy = function(keySelector, comparer) {
        // TODO: check if keySelector is a function
        // TODO: check if comparer is a function
        this.__source = this.__source.map(keySelector).sort(comparer);
        return this;
    };

    JL.prototype.orderByDescending = function(keySelector, comparer) {
        // TODO: check if keySelector is a function
        // TODO: check if comparer is a function
        this.__source = this.__source.map(keySelector).sort(comparer).reverse();
        return this;
    };

    JL.prototype.select = function(predicate) {
        // TODO: check if predicate is a function
        this.__source = this.__source.map(predicate);
        return this;
    };

    JL.prototype.selectMany = function(collectionSelector, resultSelector) {
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

    JL.prototype.where = function(predicate) {
        // TODO: check if predicate is a function
        this.__source = this.__source.filter(predicate);
        return this;
    };

    JL.prototype.take = function(count) {
        // TODO: check if count is a integer

        if(count <= 0) {
            this.__source = [];
            return this;
        }

        this.__source = this.__source.slice(0, count);
        return this;
    };

    JL.prototype.takeWhile = function(predicate) {
        // TODO: check if predicate is a function
        
        var stopIndex = this.__source.length;
        this.__source.some(function(n, index) {
            return predicate(n, index) ? false : ((stopIndex = index), true);
        });

        this.__source = this.__source.slice(0, stopIndex);
        return this;
    };

    JL.prototype.skip = function(count) {
        // TODO: check if count is a integer

        if(count >= this.__source.length) {
            this.__source = [];
            return this;
        }

        if(count <= 0) {
            return this;
        }

        this.__source = this.__source.slice(count);
        return this;
    };

    JL.prototype.skipWhile = function(predicate) {
        // TODO: check if predicate is a function
        
        var startIndex = this.__source.length;
        this.__source.some(function(n, index) {
            return predicate(n, index) ? false : ((startIndex = index), true);
        });

        this.__source = this.__source.slice(startIndex);
        return this;
    };

    JL.prototype.toArray = function() {
        return this.__source.slice();
    };

    function range(start, count) {
        // TODO: validate start, count

        var numbers = Array.apply(null, Array(count))
            .map(function(element, index) {
                return start + index;
            }); 

        return new JL(numbers);
    }

    function repeat(element, count) {
        if(count < 0) {
            throw ("Count should be more are equal then 0");
        }
        // TODO: validate count

        var collection = Array.apply(null, Array(count))
            .map(function() {
                return element;
            }); 

        return new JL(collection);
    }

    return {
        fromArray:  function(array) {
            // TODO: check if it's an array
            return new JL(array);
        },

        range: range
    };
})();
