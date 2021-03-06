// @author Sufflavus https://github.com/Sufflavus
// @version 1.1.0 

var jL = (function() {
    function JL(source){
        this.__source = source.slice();
    }

    JL.prototype.all = function(predicate) {
        if(!isFunction(predicate)) {
            throw("Predicate should be a function");
        }

        return this.__source.every(predicate);
    };

    JL.prototype.any = function(predicate) {
        if(!predicate) {
            return this.__source.length > 0;
        }

        if(!isFunction(predicate)) {
            throw("Predicate should be a function");
        }

        return this.__source.some(predicate);
    };

    JL.prototype.average = function(predicate) {
        if(!isFunction(predicate)) {
            throw("Predicate should be a function");
        }

        if(!this.__source.length) {
            return 0;
        }

        // TODO: check if all items in array are numbers

        var averageNum = this.__source.reduce(function(sum, number) {
            if(!isFloat(number)) {
                throw("All items in array should be a numbers");
            }
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

        if(!isFunction(comparer)) {
            throw("Comparer should be a function");
        }

        for(var i = 0, length = this.__source.length; i < l; i++) {
            if(comparer(this.__source[i]) === comparer(item)) {
                return true;
            }
        }
        
        return false;
    };

    JL.prototype.count = function(predicate) {
        if(!predicate) {
            return this.__source.length;
        }

        if(!isFunction(predicate)) {
            throw("Predicate should be a function");
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
            if(!isFunction(comparer)) {
                throw("Comparer should be a function");
            }

            this.__source = this.__source.map(comparer).filter(function(item, index, array) {
                return array.indexOf(item) === index;
            });
        }

        return this;
    };

    JL.prototype.elementAt = function(index) {
        if(!isInteger(index)) {
            throw("An index should be a number");
        }
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

        if(!comparer) {
            this.__source = this.__source.filter(function(n) {
                return second.indexOf(n) === -1;
            }).filter(function(n, index, array) {
                return array.indexOf(n) === index;
            });
            return this;
        }

        if(!isFunction(comparer)) {
            throw("Comparer should be a function");
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

        if(!isFunction(predicate)) {
            throw("Predicate should be a function");
        }

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

        if(!isFunction(predicate)) {
            throw("Predicate should be a function");
        }

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

        if(!isFunction(selector)) {
            throw("Selector should be a function");
        }

        return Math.max.apply(null, this.__source.map(selector));
    };

    JL.prototype.min = function(selector) {
        if(!selector) {
            return Math.min.apply(null, this.__source);
        }

        if(!isFunction(selector)) {
            throw("Selector should be a function");
        }

        return Math.min.apply(null, this.__source.map(selector));
    };

    JL.prototype.orderBy = function(keySelector, comparer) {
        if(!isFunction(keySelector)) {
            throw("keySelector should be a function");
        }

        if(!isFunction(comparer)) {
            throw("Comparer should be a function");
        }

        this.__source = this.__source.map(keySelector).sort(comparer);
        return this;
    };

    JL.prototype.orderByDescending = function(keySelector, comparer) {
        if(!isFunction(keySelector)) {
            throw("keySelector should be a function");
        }
        
        if(!isFunction(comparer)) {
            throw("Comparer should be a function");
        }

        this.__source = this.__source.map(keySelector).sort(comparer).reverse();
        return this;
    };

    JL.prototype.reverse = function() {
        this.__source = this.__source.reverse();
        return this;
    };

    JL.prototype.select = function(predicate) {
        if(!isFunction(predicate)) {
            throw("Predicate should be a function");
        }

        this.__source = this.__source.map(predicate);
        return this;
    };

    JL.prototype.selectMany = function(collectionSelector, resultSelector) {
        if(!isFunction(collectionSelector)) {
            throw("collectionSelector should be a function");
        }

        if(!isFunction(resultSelector)) {
            throw("resultSelector should be a function");
        }

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

    JL.prototype.sequenceEqual = function(second, comparer) {
        // TODO: check if second is array
        if(this.__source.length !== second.length) {
            return false;
        }

        if(!isFunction(comparer)) {
            throw("Comparer should be a function");
        }

        comparer = comparer || function(x, y) { return x === y; };

        var isEqual = this.__source.every(function(element, index) {
            return comparer(element, second[index]);
        });

        return isEqual;
    };

    JL.prototype.single = function(predicate) {
        if(!predicate && this.__source.length !== 1) {
            if(this.__source.length !== 1) {
                throw ("Source should contain one element");
            }
            return this.__source[0];
        }
        
        if(!isFunction(comparer)) {
            throw("Predicate should be a function");
        }

        var filtered = this.__source.filter(predicate);
        if(filtered.length !== 1) {
            throw ("One element shoild satisfy the condition in predicate.");
        }
        return filtered[0];
    };

    JL.prototype.skip = function(count) {
        if(!isInteger(count)) {
            throw("A count should be a number");
        }

        if(this.__source.length < count) {
            this.__source = [];
            return this;
        }

        if(count <= 0) {
            return this;
        }

        this.__source = this.__source.slice(count);;
        return this;
    };

    JL.prototype.where = function(predicate) {
        if(!isFunction(comparer)) {
            throw("Predicate should be a function");
        }

        this.__source = this.__source.filter(predicate);
        return this;
    };

    JL.prototype.take = function(count) {
        if(!isInteger(count)) {
            throw("A count should be a number");
        }

        if(count <= 0) {
            this.__source = [];
            return this;
        }

        this.__source = this.__source.slice(0, count);
        return this;
    };

    JL.prototype.takeWhile = function(predicate) {
        if(!isFunction(comparer)) {
            throw("Predicate should be a function");
        }
        
        var result = [];
        var length = this.__source.length;
        var i = 0;

        while (i < length && predicate(this.__source[i], i)) {
            result.push(this.__source[i]);
            i++;
        }

        this.__source = result;
        return this;
    };

    JL.prototype.skip = function(count) {
        if(!isInteger(count)) {
            throw("A count should be a number");
        }

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
        if(!isFunction(comparer)) {
            throw("Predicate should be a function");
        }
        
        var startIndex = this.__source.length;
        this.__source.some(function(n, index) {
            return predicate(n, index) ? false : ((startIndex = index), true);
        });

        var result = [];
        var i = startIndex;

        while (i < length) {
            result.push(this.__source[i]);
            i++;
        }
        
        this.__source = result;
        return this;
    };

    JL.prototype.sum = function(selector) {
        if(selector) {
            if(!isFunction(selector)) {
                throw("Selector should be a function");
            }
            
            return this.__source.reduce(function(sum, item) {
                return sum + selector(item);
            }, 0); 
        }

        return this.__source.reduce(function(sum, item) {
            // TODO: check if item is number
            return sum + item;
        }, 0); 
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

    function isFunction(value) {
        return Object.prototype.toString.call(value) === "[object Function]";
    }

    function isInteger(value) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
        return typeof value === "number" && 
            isFinite(value) && 
            Math.floor(value) === value;
    }

    function isFloat(value) {
        // http://stackoverflow.com/questions/3885817/how-to-check-that-a-number-is-float-or-integer
        return Number(value) === value && value % 1 !== 0 || isInteger(value);
    }

    return {
        fromArray:  function(array) {
            // TODO: check if it's an array
            return new JL(array);
        },

        range: range,
        repeat: repeat
    };
})();
