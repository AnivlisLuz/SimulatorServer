(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/es6/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");
__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");
__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");
__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");
__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");
__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/es7/reflect.js":
/*!*********************************************!*\
  !*** ./node_modules/core-js/es7/reflect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");
__webpack_require__(/*! ../modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");
__webpack_require__(/*! ../modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Reflect;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");
var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js") });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");
var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");
var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	undefined;
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var FUNCTION = 'function';
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = /** @class */ (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== FUNCTION) {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        Zone.__symbol__ = __symbol__;
        return Zone;
    }());
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = /** @class */ (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = /** @class */ (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                nativeMicroTaskQueuePromise[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
        bindArguments: function () { return null; },
        setNativePromise: function (NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === FUNCTION) {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var creationTrace = '__creationTrace__';
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var symbolFinally = __symbol__('finally');
    var symbolParentPromiseValue = __symbol__('parentPromiseValue');
    var symbolParentPromiseState = __symbol__('parentPromiseState');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    var TYPE_ERROR = 'Promise resolved with itself';
    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally          
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    var trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                var parentPromiseValue = promise[symbolValue];
                var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    var ZoneAwarePromise = /** @class */ (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return ZONE_AWARE_PROMISE_TO_STRING;
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        ZoneAwarePromise.prototype.finally = function (onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
var ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
var ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
var ObjectCreate = Object.create;
/** Array.prototype.slice */
var ArraySlice = Array.prototype.slice;
/** addEventListener string const */
var ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
var TRUE_STR = 'true';
/** false string const */
var FALSE_STR = 'false';
/** __zone_symbol__ string const */
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== 'undefined';
var internalWindow = isWindowExists ? window : undefined;
var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
var REMOVE_ATTRIBUTE = 'removeAttribute';
var NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
            if (!isPropertyWritable(prototypeDesc)) {
                return "continue";
            }
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
var zoneSymbolEventNames = {};
var wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    var eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
        event.preventDefault();
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        var listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask, null);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');
    var newFunctionToString = function toString() {
        if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[ORIGINAL_DELEGATE_SYMBOL], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
var zoneSymbolEventNames$1 = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        var customScheduleGlobal = function () {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (var i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor['name'];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    var Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        }; });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
var taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var id = args[0];
            var task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(_global, [WS.prototype]);
    }
    _global.WebSocket = function (x, y) {
        var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = ObjectCreate(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    var args = ArraySlice.call(arguments);
                    if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                        var eventName = args.length > 0 ? args[0] : undefined;
                        if (eventName) {
                            var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                            socket[propertySymbol] = proxySocket[propertySymbol];
                        }
                    }
                    return socket[propName].apply(socket, args);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    var globalWebSocket = _global['WebSocket'];
    for (var prop in WS) {
        globalWebSocket[prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var workerEventNames = ['error', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties) {
        return onProperties;
    }
    var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        var ignoreProperties = _global.__Zone_ignore_on_properties;
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow = window;
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties, ObjectGetPrototypeOf(internalWindow));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
        return result;
    }
    else {
        var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = zoneSymbol('fake');
        ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
            },
            set: function (value) {
                this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}
var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = wrapWithCurrentZone(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    // vh is validateHandler to check event handler
    // is valid or not(for security check)
    patchEventTarget(_global, apiTypes, { vh: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}
function patchEvent(global, api) {
    patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                var prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    var descriptor = ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = wrapWithCurrentZone(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return _registerElement.call(document, name, opts);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
});
Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    // load blackListEvents from global
    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, cbIdx: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    function patchXHR(window) {
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            var target = data.target;
            // remove existing event listener
            var listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            var newListener = target[XHR_LISTENER] = function () {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        task.invoke();
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        }; });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = {
                    target: self,
                    url: self[XHR_URL],
                    isPeriodic: false,
                    delay: null,
                    args: args,
                    aborted: false
                };
                return scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-text\r\n{\r\ntext-align: center;\r\ncolor: crimson;\r\n}\r\n.cuadro\r\n{\r\n   margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n\r\n}\r\n.foto\r\n{\r\n    width: 200px;\r\n}\r\n.navbar\r\n{\r\n    background: transparent !important;\r\n    transition: 0.5s;\r\n}\r\n.navbar.scrolled\r\n{\r\n    background:#fff !important;\r\n    transition: 0.5s;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Business Simulator</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-lg-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#autores\">Autores<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#equipo\">Equipo<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#mentoria\">Mentoria<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#diseño\">Diseño<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#agradecimiento\">Agradecimiento<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#auspiciadores\">Auspiciadores<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n    </ul>\r\n     </div>\r\n</nav>\r\n</header>\r\n<div class=\"jumbotron jumbotron-fluid\" id=\"autores\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Autores y agradecimientos</h1>\r\n    <p class=\"lead\">\r\n          El software, los documentos y todos los materiales asociados al proyecto \"BUSINESS SIMULATOR\"\r\n          son obra colectiva planteada, diseñada y desarrollada por un equipo de becarios de los programas\r\n          Twentypreneur y Steem. El proyecto se llevó a cabo bajo la supervisión de mentores asignados\r\n         por nuestro benefactores; La Embajada de los Estados Unidos, American Space y CBA-Cochabamba.</p>\r\n  </div>\r\n</div>\r\n<section class=\"sec1\" id=\"equipo\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"offset-sm-2 col-sm-8\">\r\n              <div class=\"headerText text-center\">\r\n                  <h2>Equipo de Desarrollo</h2>\r\n              </div>\r\n\r\n          </div>\r\n      </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n        <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Jaime Eduardo Clavijo Escobar</h5>\r\n          <p class=\"card-text\">Dirección general</p>\r\n          \r\n        </div>\r\n      </div>\r\n    \r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n            <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Julia Valentina Gutierrez Munzón</h5>\r\n              <p class=\"card-text\">Encargada del equipo de programación</p>\r\n              \r\n            </div>\r\n          </div>\r\n          <div class=\"card\" style=\"width: 18rem;\">\r\n              <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Jhoselin Luizaga Rodriguez</h5>\r\n                <p class=\"card-text\">Encargada del equipo de investigación e implementación</p>\r\n                \r\n              </div>\r\n            </div>\r\n\r\n  </div>\r\n\r\n  <br>\r\n  <div class=\"row\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n          <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Ana Carolina Mamani Choque</h5>\r\n            <p class=\"card-text\">Secretaria general</p>\r\n            \r\n          </div>\r\n        </div>\r\n      \r\n          <div class=\"card\" style=\"width: 18rem;\">\r\n              <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Ely Fernadez Macias</h5>\r\n                <p class=\"card-text\">Secretaria equipo de investigación e implementación</p>\r\n                \r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Jeraldine Villanueva Cardozo</h5>\r\n                  <p class=\"card-text\">Equipo de investigación  e implementación</p>\r\n                  \r\n                </div>\r\n              </div>\r\n  \r\n    </div>\r\n\r\n    <br>  \r\n    <div class=\"row\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n            <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Ivy Saskia Sejas Rocabado</h5>\r\n              <p class=\"card-text\">Analista de Programación</p>\r\n              \r\n            </div>\r\n          </div>\r\n        \r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Luz Silvina Choque Jacinto</h5>\r\n                  <p class=\"card-text\">Control de calidad</p>\r\n                 \r\n                </div>\r\n              </div>\r\n    \r\n              <div class=\"card\" style=\"width: 18rem;\">\r\n                  <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n                  <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">David Gallo Roca</h5>\r\n                    <p class=\"card-text\">Equipo de programación</p>\r\n                    \r\n                  </div>\r\n                </div>\r\n           </div>\r\n      <br>\r\n      <div class=\"row\">\r\n          <div class=\"card\" style=\"width: 18rem;\">\r\n              <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Rosario Mireya Chuquimia Saavedra</h5>\r\n                <p class=\"card-text\">Equipo de programación</p>\r\n                \r\n              </div>\r\n            </div>\r\n      </div>\r\n</div>\r\n\r\n</section>\r\n<section class=\"sec2\" id=\"mentoria\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"offset-sm-2 col-sm-8\">\r\n                <div class=\"headerText text-center\">\r\n                    <h2>Mentoria y supervision de contenidos</h2>\r\n                </div>\r\n             </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"card\" style=\"width: 18rem;\">\r\n                <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">Mgr. Luis Fernando Ruiz</h5>\r\n                  <p class=\"card-text\">Supervisor general</p>\r\n                  \r\n                </div>\r\n              </div>\r\n            \r\n                <div class=\"card\" style=\"width: 18rem;\">\r\n                    <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n                    <div class=\"card-body\">\r\n                      <h5 class=\"card-title\">Mgr. Carlos Eduardo Camargo Arce</h5>\r\n                      <p class=\"card-text\">Mentor general</p>\r\n                      \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card\" style=\"width: 18rem;\">\r\n                      <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n                      <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Mgr. Paula Denice Lujan Lopez</h5>\r\n                        <p class=\"card-text\">Mentora Twentypreneur</p>\r\n                        \r\n                      </div>\r\n                    </div>\r\n        \r\n          </div>\r\n<br>\r\n<div class=\"row\">\r\n    <div class=\"card\" style=\"width: 18rem;\">\r\n        <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Lic. Siamak Marjouel</h5>\r\n          <p class=\"card-text\">Mentor Steem</p>\r\n          \r\n        </div>\r\n      </div>\r\n   \r\n  </div>\r\n\r\n        </div>\r\n</section>\r\n<section class=\"sec3\" id=\"diseño\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"offset-sm-2 col-sm-8\">\r\n            <div class=\"headerText text-center\">\r\n                <h2>Diseño gráfico</h2>\r\n            </div>\r\n         </div>\r\n    </div>\r\n    <div class=\"row\"> \r\n        <div class=\"card\" style=\"width: 18rem; text-align:center;\">\r\n            <img src=\"../../../imagenes/polera_1.jpg\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Jaime Eduardo Clavijo Escobar</h5>\r\n              <p class=\"card-text\">Diseñador gráfico</p>\r\n              \r\n            </div>\r\n          </div>\r\n       \r\n      </div>\r\n    </div>\r\n</section>\r\n<section class=\"sec4\" id=\"agradecimiento\">\r\n    <div class=\"jumbotron jumbotron-fluid\">\r\n            <div class=\"container\">\r\n              <h1 class=\"display-4\">Agradecimientos</h1>\r\n              <p class=\"lead\">Todos los miembros del equipo de becarios involucrados en el proyecto deseamos agradecer a nuestros\r\n                    mentores y supervisores por los aportes, seguimiento y ayuda que nos han otorgado durante las\r\n                    jornadas de trabajo. Asi mismo, deseamos agradecer a las instituciones que nos han brindado los recursos\r\n                    y la confianza durante todo el proceso de desarrollo del software, documentos y materiales asociados\r\n                    al proyecto \"BUSINESS SIMULATOR.\"\r\n              </p>\r\n            </div>\r\n          </div>\r\n</section>\r\n\r\n<section class=\"heading\" id=\"auspiciadores\">\r\n       \r\n    <div class=\"cuadro\">\r\n         <img src=\"../../../imagenes/logo embajada USA.png\" class=\"foto\"> \r\n \r\n \r\n\r\n     \r\n         <img src=\"../../../imagenes/logo american spaces.png\" class=\"foto\">\r\n        \r\n         \r\n         \r\n             \r\n         <img src=\"../../../imagenes/LOGO CBA mediano(color).png\" class=\"foto\">\r\n     \r\n    </div>\r\n\r\n    <script type=\"text/javascript\"> \r\n      $(document).scroll(function(){\r\n      $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());\r\n      })\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, _firebaseAuth) {
        this.authService = authService;
        this._firebaseAuth = _firebaseAuth;
    }
    AppComponent.prototype.signup = function () {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
    };
    AppComponent.prototype.login = function () {
        this.authService.login(this.email, this.password);
        this.email = this.password = '';
    };
    AppComponent.prototype.signInWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this._firebaseAuth.auth.signOut();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _tabla_de_decision_tabla_de_decision_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabla-de-decision/tabla-de-decision.component */ "./src/app/tabla-de-decision/tabla-de-decision.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _tabla_de_decision_tabl_resultados_tabl_resultados_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tabla-de-decision/tabl-resultados/tabl-resultados.component */ "./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.ts");
/* harmony import */ var _tables_tabl_costos_tabl_costos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tables/tabl-costos/tabl-costos.component */ "./src/app/tables/tabl-costos/tabl-costos.component.ts");
/* harmony import */ var _tables_tabl_ventas_tabl_ventas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tables/tabl-ventas/tabl-ventas.component */ "./src/app/tables/tabl-ventas/tabl-ventas.component.ts");
/* harmony import */ var _tables_tabl_balance_general_tabl_balance_general_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tables/tabl-balance-general/tabl-balance-general.component */ "./src/app/tables/tabl-balance-general/tabl-balance-general.component.ts");
/* harmony import */ var _jugar_jugar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./jugar/jugar.component */ "./src/app/jugar/jugar.component.ts");
/* harmony import */ var _moderador_moderador_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./moderador/moderador.component */ "./src/app/moderador/moderador.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _tablas_AI_tabla_produccion_tabla_produccion_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tablas-AI/tabla-produccion/tabla-produccion.component */ "./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.ts");
/* harmony import */ var _tablas_AI_tabla_ventas_tabla_ventas_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tablas-AI/tabla-ventas/tabla-ventas.component */ "./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.ts");
/* harmony import */ var _tablas_AI_tabla_vision_general_tabla_vision_general_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tablas-AI/tabla-vision-general/tabla-vision-general.component */ "./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.ts");
/* harmony import */ var _fin_juego_fin_juego_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fin-juego/fin-juego.component */ "./src/app/fin-juego/fin-juego.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _separador_de_miles_thousand_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./separador-de-miles/thousand.pipe */ "./src/app/separador-de-miles/thousand.pipe.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var config = { url: '8.183.129.92:8075', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _tabla_de_decision_tabla_de_decision_component__WEBPACK_IMPORTED_MODULE_9__["TablaDeDecisionComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _tabla_de_decision_tabl_resultados_tabl_resultados_component__WEBPACK_IMPORTED_MODULE_13__["TablResultadosComponent"],
                _tables_tabl_costos_tabl_costos_component__WEBPACK_IMPORTED_MODULE_14__["TablCostosComponent"],
                _tables_tabl_ventas_tabl_ventas_component__WEBPACK_IMPORTED_MODULE_15__["TablVentasComponent"],
                _tables_tabl_balance_general_tabl_balance_general_component__WEBPACK_IMPORTED_MODULE_16__["TablBalanceGeneralComponent"],
                _jugar_jugar_component__WEBPACK_IMPORTED_MODULE_17__["JugarComponent"],
                _moderador_moderador_component__WEBPACK_IMPORTED_MODULE_18__["ModeradorComponent"],
                _tablas_AI_tabla_produccion_tabla_produccion_component__WEBPACK_IMPORTED_MODULE_20__["TablaProduccionComponent"],
                _tablas_AI_tabla_vision_general_tabla_vision_general_component__WEBPACK_IMPORTED_MODULE_22__["TablaVisionGeneralComponent"],
                _tablas_AI_tabla_ventas_tabla_ventas_component__WEBPACK_IMPORTED_MODULE_21__["TablaVentasComponent"],
                _fin_juego_fin_juego_component__WEBPACK_IMPORTED_MODULE_23__["FinJuegoComponent"],
                _separador_de_miles_thousand_pipe__WEBPACK_IMPORTED_MODULE_25__["ThousandsPipe"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_8__["APP_ROUTER"],
                _angular_http__WEBPACK_IMPORTED_MODULE_19__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_24__["SocketIoModule"].forRoot(config),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTER", function() { return APP_ROUTER; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabla_de_decision_tabla_de_decision_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabla-de-decision/tabla-de-decision.component */ "./src/app/tabla-de-decision/tabla-de-decision.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _jugar_jugar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jugar/jugar.component */ "./src/app/jugar/jugar.component.ts");
/* harmony import */ var _moderador_moderador_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moderador/moderador.component */ "./src/app/moderador/moderador.component.ts");
/* harmony import */ var _fin_juego_fin_juego_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fin-juego/fin-juego.component */ "./src/app/fin-juego/fin-juego.component.ts");








var APPROUTES = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'tabla', component: _tabla_de_decision_tabla_de_decision_component__WEBPACK_IMPORTED_MODULE_2__["TablaDeDecisionComponent"] },
    { path: 'tabla/:nombreEmpresa', component: _tabla_de_decision_tabla_de_decision_component__WEBPACK_IMPORTED_MODULE_2__["TablaDeDecisionComponent"] },
    { path: 'tabla/:nombreEmpresa/:codigo', component: _tabla_de_decision_tabla_de_decision_component__WEBPACK_IMPORTED_MODULE_2__["TablaDeDecisionComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'jugar', component: _jugar_jugar_component__WEBPACK_IMPORTED_MODULE_5__["JugarComponent"] },
    { path: 'moderador', component: _moderador_moderador_component__WEBPACK_IMPORTED_MODULE_6__["ModeradorComponent"] },
    { path: 'fin', component: _fin_juego_fin_juego_component__WEBPACK_IMPORTED_MODULE_7__["FinJuegoComponent"] },
    { path: 'fin/:numeroBimestre', component: _fin_juego_fin_juego_component__WEBPACK_IMPORTED_MODULE_7__["FinJuegoComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
// tslint:disable-next-line:eofline
var APP_ROUTER = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APPROUTES);


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        this.user = firebaseAuth.authState;
    }
    AuthService.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.login = function (email, password) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/fin-juego/fin-juego.component.css":
/*!***************************************************!*\
  !*** ./src/app/fin-juego/fin-juego.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main_container {\r\n  position: absolute;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: #135A82;\r\n  display: flex;\r\n}\r\n\r\naside {\r\n  height: 100%;\r\n  width: 270px;\r\n  color: white;\r\n  text-align: center;\r\n  overflow-y: hidden;\r\n}\r\n\r\n#logo_container {\r\n  background-color: rgb(111, 110, 110);\r\n}\r\n\r\n#logo_image {\r\n  margin-top: 20px;\r\n  height: 200px;\r\n  width: 200px;\r\n  background-color: white;\r\n  border-radius: 100%;\r\n}\r\n\r\n#nombre_empresa {\r\n  padding-top: 20px;\r\n  padding-bottom: 30px;\r\n  font-size: 20px;\r\n}\r\n\r\n#body_container {\r\n  width: calc(100% - 270px);\r\n  height: 100%;\r\n}\r\n\r\n.tap_menu_hidden {\r\n  display: none;\r\n}\r\n\r\n.tab_menu_description {\r\n  font-size: 15px;\r\n  margin-top: -65px;\r\n  padding: 0 15px;\r\n  padding-top: 50px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.tab_menu_button {\r\n  margin-top: -31px;\r\n  height: 50px;\r\n  width: 210px;\r\n  border-radius: 15px;\r\n  margin-bottom: 30px;\r\n  font-size: 16px;\r\n}\r\n\r\n.tab_menu_button:focus {\r\n  outline: none;\r\n}\r\n\r\n.tab_menu_button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.section_container {\r\n  position: relative;\r\n  height: 100%;\r\n  width: calc(100% - 20px);\r\n  padding-left: 20px;\r\n}\r\n\r\n.section_container_body {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.section_title {\r\n  display: flex;\r\n  height: 100px;\r\n}\r\n\r\n.section_title_icon {\r\n  font-size: 100px;\r\n  color: white;\r\n  height: 130px;\r\n  line-height: 130px;\r\n  padding: 0 60px;\r\n  border-radius: 0 0 30px 0;\r\n}\r\n\r\n.section_title_desc {\r\n  position: relative;\r\n  font-size: 40px;\r\n  color: white;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.section_body {\r\n  padding-top: 60px;\r\n  height: calc(100% - 160px);\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.section_body_main {\r\n  margin: 0 50px;\r\n  background-color: rgb(90, 116, 165);\r\n  height: calc(100% - 100px);\r\n}\r\n\r\n.section_body_tab {\r\n  display: flex;\r\n}\r\n\r\n.section_body_tab_button:focus {\r\n  outline: none;\r\n}\r\n\r\n.section_body_tab_button {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 50px;\r\n  background-color: #092B3A;\r\n}\r\n\r\n.tap_selected {\r\n  background-color: #135A82;\r\n}\r\n\r\n.section_body_container {\r\n  height: calc(100% - 20px);\r\n  width: calc(100% - 20px);\r\n  padding: 10px;\r\n  background-color: #092B3A;\r\n}\r\n\r\n.section_body_content {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.section_body_content_title {\r\n  width: 500px;\r\n  background-color: #092B3A;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.tabla-decision {\r\n  text-align: center;\r\n  color: white;\r\n  font-family: \"arial\";\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\ntable {\r\n  width: 80%;\r\n  color: black;\r\n  margin: auto;\r\n  padding: auto;\r\n}\r\n\r\ntable,\r\nth,\r\ntd {\r\n  border: 3px solid black;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.th1 {\r\n  width: 10%;\r\n  border: 1px solid white;\r\n\r\n}\r\n\r\n.th2 {\r\n  width: 200%;\r\n\r\n}\r\n\r\n.tr1 {\r\n  width: 10%;\r\n  border: 1px solid white;\r\n\r\n}\r\n\r\ntable#t01 tr {\r\n  height: 60px;\r\n}\r\n\r\n/*table#t01 tr:nth-child(odd) {\r\n  background-color: #fff;\r\n\r\n}\r\n\r\ntable#t01 tr:nth-child(even) {\r\n  background-color: rgb(116, 197, 233);\r\n\r\n}*/\r\n\r\ntable#t01 th {\r\n  background-color: rgb(24, 76, 133);\r\n  color: white;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/fin-juego/fin-juego.component.html":
/*!****************************************************!*\
  !*** ./src/app/fin-juego/fin-juego.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main_container\">\r\n  <aside>\r\n    <div id=\"logo_container\">\r\n      <img id=\"logo_image\" src=\"/imagenes/LOGO SIMULADOR FINAL.png\">\r\n      <div id=\"nombre_empresa\"> Código de Juego: {{(http.game)?http.game.codigo:\"\"}}</div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #135A82;\">\r\n      <button (click)=\"parciales()\" class=\"boton-decision tab_menu_button\" style=\"background-color: #135A82;\">\r\n        PUNTAJES PARCIALES\r\n      </button>\r\n      <div class=\"{{tap_position==1 ? '' : 'tap_menu_hidden'}}  tab_menu_description\">\r\n        En esta sección puede observar los puntajes parciales del juego.\r\n      </div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #0D8EC8;\">\r\n      <button (click)=\"finales()\" class=\"boton-t-analisi tab_menu_button\" style=\"background-color: #0D8EC8;\">\r\n        PUNTAJES FINALES\r\n      </button>\r\n      <div class=\"{{tap_position==2? '' : 'tap_menu_hidden'}}  tab_menu_description\">\r\n        En esta sección puede observar los puntajes finales del juego.\r\n      </div>\r\n    </div>\r\n  </aside>\r\n  <div id=\"body_container\">\r\n    <div class=\"section_container {{tap_position==1 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #135A82;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #135A82;\">person</div>\r\n          <div class=\"section_title_desc\"> PUNTAJES PARCIALES </div>\r\n        </div>\r\n\r\n        <div class=\"section_body\">\r\n          <div style=\"display: flex; justify-content: center;\">\r\n            <div class=\"tabla-decision\">\r\n              <table id=\"t01\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"th1\" colspan=7>RENTABILIDAD</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>COMPAÑÍA</th>\r\n                    <th>Bimestre 1</th>\r\n                    <th>Puntaje</th>\r\n                    <th>Bimestre 2</th>\r\n                    <th>Puntaje</th>\r\n                    <th>Bimestre 3</th>\r\n                    <th>Puntaje</th>\r\n                  </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of http.game.players\">{{visionG.name | thousandPipe}}</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralUno\" class=\"color\">{{visionG.beneficio | thousandPipe}}</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralUno\">{{visionG.puntajeBeneficio | thousandPipe}}</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralDos\" class=\"color\">{{visionG.beneficio | thousandPipe}}</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralDos\">{{visionG.puntajeBeneficio | thousandPipe}}</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralTres\" class=\"color\">{{visionG.beneficio | thousandPipe}}</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralTres\">{{visionG.puntajeBeneficio | thousandPipe}}</tr>\r\n                  </td>\r\n                </tbody>\r\n              </table>\r\n<br>\r\n<br>\r\n              <table id=\"t01\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"th1\" colspan=7>% DE MERCADO</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>COMPAÑÍA</th>\r\n                    <th>Bimestre 1</th>\r\n                    <th>Puntaje</th>\r\n                    <th>Bimestre 2</th>\r\n                    <th>Puntaje</th>\r\n                    <th>Bimestre 3</th>\r\n                    <th>Puntaje</th>\r\n\r\n                    <!-- <th *ngFor=\"let visionG of visionGeneral;let i=index\">BIMESTRE {{i+1}}</th> -->\r\n                  </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of http.game.players\">{{visionG.name}}</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralUno\" class=\"color\">{{visionG.porcentajeDeMercado}}  %</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralUno\">{{visionG.puntajeMercado}}</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralDos\" class=\"color\">{{visionG.porcentajeDeMercado}}  %</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralDos\">{{visionG.puntajeMercado}}</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralTres\" class=\"color\">{{visionG.porcentajeDeMercado}}  %</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of visionGeneralTres\">{{visionG.puntajeMercado}}</tr>\r\n                  </td>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section_container {{tap_position==2 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #0D8EC8;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #0D8EC8;\">person</div>\r\n          <div class=\"section_title_desc\"> PUNTAJES TOTALES</div>\r\n        </div>\r\n        <div class=\"section_body\">\r\n          <div style=\"display: flex; justify-content: center;\">\r\n            <div class=\"tabla-decision\">\r\n              <table id=\"t01\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"th1\" colspan=5>PUNTAJES TOTALES</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>COMPAÑÍA</th>\r\n                    <th>Puntaje total</th>\r\n                  </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                  <td>\r\n                    <tr *ngFor=\"let visionG of http.game.players\">{{visionG.name}}</tr>\r\n                  </td>\r\n                  <td>\r\n                    <tr *ngFor=\"let resultados of resultadosFinales\">{{resultados}}</tr>\r\n                  </td>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/fin-juego/fin-juego.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fin-juego/fin-juego.component.ts ***!
  \**************************************************/
/*! exports provided: FinJuegoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinJuegoComponent", function() { return FinJuegoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/http.service */ "./src/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinJuegoComponent = /** @class */ (function () {
    function FinJuegoComponent(http, route) {
        this.http = http;
        this.route = route;
        //tab manager
        this.tap_position = 1;
        this.visionGeneralUno = [];
        this.visionGeneralDos = [];
        this.visionGeneralTres = [];
        this.resultadosFinales = [];
        this.cargar();
    }
    FinJuegoComponent.prototype.cargar = function () {
        var _this = this;
        while (this.resultadosFinales.length > 0) {
            this.resultadosFinales.pop();
        }
        if (this.http.game.bimestre_uno_c == 0) {
            this.http.game.getVisionGeneral(1, function (response) {
                console.log("getVisionGeneral front", response);
                _this.visionGeneralUno = response.visionGeneral;
                console.log("visionGeneralUno front", _this.visionGeneralUno);
            });
            for (var i = 0; i < this.visionGeneralUno.length; i++) {
                this.resultadosFinales.push(this.visionGeneralUno[i].puntajeBeneficio +
                    this.visionGeneralUno[i].puntajeMercado);
            }
            console.log("resultados fianles hasta bim 1 => ", this.resultadosFinales);
        }
        if (this.http.game.bimestre_dos_c == 0) {
            this.http.game.getVisionGeneral(2, function (response) {
                console.log("getVisionGeneral front", response);
                _this.visionGeneralDos = response.visionGeneral;
                console.log("visionGeneralDos front", _this.visionGeneralDos);
            });
            for (var i = 0; i < this.visionGeneralDos.length; i++) {
                this.resultadosFinales[i] =
                    this.resultadosFinales[i] +
                        this.visionGeneralDos[i].puntajeBeneficio +
                        this.visionGeneralDos[i].puntajeMercado;
            }
            console.log("resultados fianles hasta bim 2 => ", this.resultadosFinales);
        }
        if (this.http.game.bimestre_tres_c == 0) {
            this.http.game.getVisionGeneral(3, function (response) {
                console.log("getVisionGeneral front", response);
                _this.visionGeneralTres = response.visionGeneral;
                console.log("visionGeneralTres front", _this.visionGeneralTres);
            });
            for (var i = 0; i < this.visionGeneralTres.length; i++) {
                this.resultadosFinales[i] =
                    this.resultadosFinales[i] +
                        this.visionGeneralTres[i].puntajeBeneficio +
                        this.visionGeneralTres[i].puntajeMercado;
            }
            console.log("resultados fianles hasta bim 3 => ", this.resultadosFinales);
        }
    };
    FinJuegoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 7000).subscribe(function (result) { return _this.cargar(); });
    };
    FinJuegoComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FinJuegoComponent.prototype.parciales = function () {
        this.tap_position = 1;
        this.cargar();
    };
    FinJuegoComponent.prototype.finales = function () {
        this.tap_position = 2;
        this.cargar();
    };
    FinJuegoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-fin-juego",
            template: __webpack_require__(/*! ./fin-juego.component.html */ "./src/app/fin-juego/fin-juego.component.html"),
            styles: [__webpack_require__(/*! ./fin-juego.component.css */ "./src/app/fin-juego/fin-juego.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FinJuegoComponent);
    return FinJuegoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  text-align: right;\r\n}\r\n\r\n\r\n\r\n.background\r\n{\r\n  overflow-x: none;\r\n  overflow-y: none;\r\n}\r\n\r\n\r\n\r\n.box {\r\n  \r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  width: 400px;\r\n  padding: 40px;\r\n  background: rgba(0, 0, 0, .8);\r\n  box-sizing: border-box;\r\n  box-shadow: 0 15px 25px rgba(0, 0, 0, .5);\r\n  border-left: 10px;\r\n  \r\n}\r\n\r\n\r\n\r\n.box h2 {\r\n  margin: 0 0 30px;\r\n  padding: 0;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.box .inputBox {\r\n  position: relative;\r\n}\r\n\r\n\r\n\r\n.box .inputBox input {\r\n  width: 100%;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  margin-bottom: 30px;\r\n  border: none;\r\n  border-bottom: 1px solid #fff;\r\n  outline: none;\r\n  background: transparent;\r\n\r\n}\r\n\r\n\r\n\r\n.box .inputBox label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  pointer-events: none;\r\n  transition: .5s;\r\n\r\n}\r\n\r\n\r\n\r\n.box .inputBox input:focus~label,\r\n.box .inputBox input:valid~label {\r\n  top: -14px;\r\n  left: 0;\r\n  color: #03a9f4;\r\n  font-size: 12px;\r\n\r\n}\r\n\r\n\r\n\r\n.box input[type=\"submit\"] {\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  color: #fff;\r\n  background: #03a9f4;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n\r\n}\r\n\r\n\r\n\r\n.backgrounds {\r\n  background: url(\"/imagenes/imagen_lite.jpg\")center no-repeat;\r\n  background-size: cover;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flexbox;\r\n \r\n}\r\n\r\n\r\n\r\n.logo-cba {\r\n  width: 50%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto\r\n}\r\n\r\n\r\n\r\n.ng-valid[required],\r\n.ng-valid.required {\r\n  border-left: 3px solid rgb(0, 139, 208);\r\n}\r\n\r\n\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 3px solid #a94442;\r\n}\r\n\r\n\r\n\r\n.select-style\r\n{\r\nmargin: 0;\r\npadding: 0;\r\n}\r\n\r\n\r\n\r\n.select-style select\r\n{\r\n  \r\n  background: rgba(0, 0, 0, .5);\r\n  color: #fff;\r\n  padding:10px;\r\n  width: 320px;\r\n  height: 40px;\r\n  border: none;\r\n  font-size: 11px;\r\n  box-shadow: 0 5px 25px rgb(0,0,0,.5);\r\n  cursor: pointer;\r\n  \r\n}\r\n\r\n\r\n\r\n.logo-cba1 \r\n{\r\n  width: 96%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto\r\n}\r\n\r\n\r\n\r\n.color\r\n{\r\n  background-color: #4c92ff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div class=\"backgrounds\">\r\n    </div>\r\n\r\n   \r\n<div class=\"box\">\r\n    <img src=\"/imagenes/Logo-business-simulator-(blanco).png\" alt=\"\" class=\"logo-cba1\">\r\n\r\n  \r\n   <br>\r\n   <div>\r\n   <img src=\"/imagenes/logo-oficial.png\" class=\"logo-cba\">\r\n   </div>\r\n\r\n<form [formGroup]=\"registerForm\" class=\"formularioJugar\"  #form=\"ngForm\">\r\n          <div class=\"inputBox\">\r\n              <input type=\"text\" formControlName=\"jugador\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.jugador.errors }\"required/>\r\n              <div *ngIf=\"submitted && f.jugador.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.jugador.errors.required\" style=\"color: red;font-size: 12px\">Jugador es requerido</div>\r\n              </div>\r\n          <label>Jugador</label>\r\n\r\n          <div class=\"inputBox\">\r\n              <input type=\"number\" formControlName=\"edad\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.edad.errors }\" min=\"0\" max=\"100\" required/>\r\n              <div *ngIf=\"submitted && f.edad.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.edad.errors.required\" style=\"color: red;font-size: 12px\">Edad es requerido</div>\r\n              </div>\r\n              <label>Edad</label>\r\n\r\n          </div>\r\n          \r\n        </div>\r\n        <div class=\"select-style\">\r\n            <select  formControlName=\"ciudad\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.ciudad.errors }\"required>\r\n              <option value=\"\" disabled selected>Elige tu pais</option>\r\n              <option value=\"ANTIGUA Y BARBUDA\">ANTIGUA Y BARBUDA</option>\r\n              <option value=\"ARGENTINA\">ARGENTINA</option>\r\n              <option value=\"BAHAMAS\">BAHAMAS</option>\r\n              <option value=\"BARBADOS\">BARBADOS</option>\r\n              <option value=\"BELICE\">BELICE</option>\r\n              <option value=\"BOLIVIA\">BOLIVIA</option>\r\n              <option value=\"BRASIL\">BRASIL</option>\r\n              <option value=\"CÁNADA\">CÁNADA</option>\r\n              <option value=\"CHILE\">CHILE</option>\r\n              <option value=\"COLOMBIA\">COLOMBIA</option>\r\n              <option value=\"COSTA RICA\">COSTA RICA</option>\r\n              <option value=\"CUBA\">CUBA</option>\r\n              <option value=\"DOMINICA\">DOMINICA</option>\r\n              <option value=\"ECUADOR\">ECUADOR</option>\r\n              <option value=\"EL SALVADOR\">EL SALVADOR</option>\r\n              <option value=\"UNITED STATES\">ESTADOS UNIDOS</option>\r\n              <option value=\"GRANADA\">GRANADA</option>\r\n              <option value=\"GUATEMALA\">GUATEMALA</option>\r\n              <option value=\"GUYANA\">GUYANA</option>\r\n              <option value=\"HAITI\">HAITI</option>\r\n              <option value=\"HONDURAS\">HONDURAS</option>\r\n              <option value=\"JAMAICA\">JAMAICA</option>\r\n              <option value=\"MÉXICO\">MÉXICO</option>\r\n              <option value=\"NICARAGUA\">NICARAGUA</option>\r\n              <option value=\"PANAMÁ\">PANAMÁ</option>\r\n              <option value=\"PARAGUAY\">PARAGUAY</option>\r\n              <option value=\"PERÚ\">PERÚ</option>\r\n              <option value=\"RÉPUBLICA DOMINICANA\">RÉPUBLICA DOMINICANA</option>\r\n              <option value=\"SAN CRISTÓBAL\">SAN CRITÓBAL</option>\r\n              <option value=\"SAN VICENTE Y LAS GRANADINAS\">SAN VICENTE Y LAS GRANADINAS</option>\r\n              <option value=\"SANTA LUCIA\">SANTA LUCIA</option>\r\n              <option value=\"SURINAM\">SURINAM</option>\r\n              <option value=\"TRINIDAD Y TOBAGO\">TRINIDAD Y TOBAGO</option>\r\n              <option value=\"URUGUAY\">URUGUAY</option>\r\n              <option value=\"VENEZUELA\">VENEZUELA</option>\r\n           \r\n            </select>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.ciudad.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.ciudad.errors.required\" style=\"color: red;font-size: 12px\">Ciudad es requerido</div>\r\n        </div>\r\n        <br>\r\n\r\n        <input type=\"submit\" name=\"\" value=\"Unirse a un juego\" (click)=\"jugar()\">\r\n        <br>\r\n        <input type=\"submit\" name=\"\" value=\"Crear un juego\" (click)=\"moderador()\">\r\n<nav>\r\n    <a [routerLink]=\"['/about']\" routerLinkActive=\"router-link-active\"  style=\"color: #fff\">Acerca de nosotros</a>\r\n</nav>\r\n    </form>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            jugador: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ciudad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            edad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    HomeComponent.prototype.aceptado = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    };
    HomeComponent.prototype.iniciarSesion = function () {
        this.router.navigateByUrl('/login');
    };
    HomeComponent.prototype.registrarse = function () {
        this.router.navigateByUrl('/register');
    };
    Object.defineProperty(HomeComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.moderador = function () {
        { }
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.router.navigateByUrl('/moderador');
    };
    HomeComponent.prototype.jugar = function () {
        { }
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.router.navigateByUrl('/jugar');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/jugar/jugar.component.css":
/*!*******************************************!*\
  !*** ./src/app/jugar/jugar.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  width: 100%;\r\n  padding-top: 2rem;\r\n  -webkit-padding-after: 2rem;\r\n          padding-block-end: 2rem;\r\n  background-color: #125A82;\r\n  color: white;\r\n  text-align: center;\r\n  font-family: \"arial\";\r\n  font-size: 19px;\r\n}\r\n\r\n.formularioJugar {\r\n  width: 50%;\r\n  margin-left: 25%;\r\n  margin-top: 5%;\r\n  padding: 2rem;\r\n  border-radius: 5px;\r\n  font-family: \"arial\";\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n\r\n}\r\n\r\n.ng-valid[required],\r\n.ng-valid.required {\r\n  border-left: 5px solid rgb(0, 139, 208);\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442;\r\n}\r\n"

/***/ }),

/***/ "./src/app/jugar/jugar.component.html":
/*!********************************************!*\
  !*** ./src/app/jugar/jugar.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" class=\"formularioJugar\" #form=\"ngForm\">\r\n  <header> Unirse a un juego</header>\r\n  <div class=\"form-group\">\r\n    <label>Nombre empresa</label>\r\n    <input type=\"text\" formControlName=\"nombreE\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nombreE.errors }\"\r\n      placeholder=\"Nombre de tu empresa\" />\r\n    <div *ngIf=\"submitted && f.nombreE.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.nombreE.errors.required\" style=\"color: red\">Nombre de empresa es requerido</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Código</label>\r\n    <input type=\"text\" formControlName=\"codigo\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.codigo.errors }\"\r\n      placeholder=\"Código\" />\r\n    <div *ngIf=\"submitted && f.codigo.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.codigo.errors.required\" style=\"color: red\">Código es requerido</div>\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" (click)=\"onClickMe()\">JUGAR</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/jugar/jugar.component.ts":
/*!******************************************!*\
  !*** ./src/app/jugar/jugar.component.ts ***!
  \******************************************/
/*! exports provided: JugarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugarComponent", function() { return JugarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_jugador__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/jugador */ "./src/models/jugador.ts");
/* harmony import */ var _models_empresa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/empresa */ "./src/models/empresa.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/http.service */ "./src/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JugarComponent = /** @class */ (function () {
    function JugarComponent(router, formBuilder, http) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.submitted = false;
        this.jugador = new _models_jugador__WEBPACK_IMPORTED_MODULE_1__["Jugador"]();
        this.empresa = new _models_empresa__WEBPACK_IMPORTED_MODULE_2__["Empresa"]();
    }
    JugarComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            nombreE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            codigo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    Object.defineProperty(JugarComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    JugarComponent.prototype.onClickMe = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.nombre_empresa = this.registerForm.value.nombreE;
        this.codigo = this.registerForm.value.codigo;
        var body_send = { player_name: this.nombre_empresa.toUpperCase(), codigo: this.codigo };
        this.http.game.joinGame(body_send, function (response) {
            if (response.message && response.message == "ok") {
                alert("Tu nombre de empresa sera:" + _this.nombre_empresa);
                _this.router.navigate(['/tabla']);
            }
            else
                alert("Error: " + response);
        });
    };
    JugarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jugar',
            template: __webpack_require__(/*! ./jugar.component.html */ "./src/app/jugar/jugar.component.html"),
            styles: [__webpack_require__(/*! ./jugar.component.css */ "./src/app/jugar/jugar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], JugarComponent);
    return JugarComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  width: 100%;\r\n  padding-top: 2rem;\r\n  -webkit-padding-after: 2rem;\r\n          padding-block-end: 2rem;\r\n  background-color: #125A82;\r\n  color: white;\r\n  text-align: center;\r\n  font-family: \"arial\";\r\n  font-size: 19px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formulario\" *ngIf=\"true\">\r\n  <!-- <h1 *ngIf=\"authService.user | async\">Welcome {{ (authService.user | async)?.email }}!</h1> -->\r\n  <button (click)=\"moderador()\">\r\n    Crear juego\r\n  </button>\r\n  <br>\r\n  <button (click)=\"jugar()\">\r\n    Unirse a un juego\r\n  </button>\r\n  <br>\r\n  <!-- <button (click)=\"logout()\" >\r\n      Logout\r\n  </button> -->\r\n  <br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, _firebaseAuth, router) {
        this.authService = authService;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        // if(this.authService.login(this.email, this.password)) {
        // }
        // this.email = this.password = '';
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    LoginComponent.prototype.logout = function () {
        // this.authService.logout();
        // this._firebaseAuth.auth.signOut();
    };
    LoginComponent.prototype.moderador = function () {
        this.router.navigateByUrl('/moderador');
    };
    LoginComponent.prototype.jugar = function () {
        this.router.navigateByUrl('/jugar');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/moderador/moderador.component.css":
/*!***************************************************!*\
  !*** ./src/app/moderador/moderador.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  width: 100%;\r\n  padding-top: 2rem;\r\n  -webkit-padding-after: 2rem;\r\n          padding-block-end: 2rem;\r\n  background-color: #125A82;\r\n  color: white;\r\n  text-align: center;\r\n  font-family: \"arial\";\r\n  font-size: 19px;\r\n}\r\n\r\n.formularioModerador {\r\n  width: 50%;\r\n  margin-left: 25%;\r\n  margin-top: 5%;\r\n  padding: 2rem;\r\n  border-radius: 5px;\r\n  font-family: \"arial\";\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n\r\n}\r\n\r\n.ng-valid[required],\r\n.ng-valid.required {\r\n  border-left: 5px solid rgb(0, 139, 208);\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442;\r\n}\r\n\r\n.styled-select {\r\n  height: 29px;\r\n  border: ridge;\r\n  overflow: hidden;\r\n  width: 240px;\r\n}\r\n\r\n.styled-select select {\r\n  background: transparent;\r\n  border: none;\r\n  font-size: 14px;\r\n  height: 29px;\r\n  padding: 5px;\r\n  /* If you add too much padding here, the options won't show in IE */\r\n  width: 268px;\r\n}\r\n\r\n.styled-select.jugadores {\r\n  background: white;\r\n  height: 34px;\r\n  width: 240px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/moderador/moderador.component.html":
/*!****************************************************!*\
  !*** ./src/app/moderador/moderador.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"formularioModerador\" [formGroup]=\"registerForm\" #form=\"ngForm\">\r\n  <header>MODERADOR </header>\r\n  <br>\r\n  <br>\r\n  <div class=\"form-group\">\r\n    <label>Nombre del Juego</label>\r\n    <input type=\"text\" formControlName=\"nombreMercado\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nombreMercado.errors }\"\r\n      placeholder=\"Nombre de tu juego\" />\r\n    <div *ngIf=\"submitted && f.nombreMercado.errors\" class=\"invalid-feedback\">\r\n      <div *ngIf=\"f.nombreMercado.errors.required\" style=\"color: red\">Nombre del juego es requerido</div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n\r\n  <label>Cantidad de Jugadores</label>\r\n  <br>\r\n  <div class=\"form-group\">\r\n    <div class=\"styled-select jugadores\">\r\n      <select formControlName=\"cantidadJugadores\">\r\n        <option value=\"2\" selected>2</option>\r\n        <option value=\"3\">3</option>\r\n        <option value=\"4\">4</option>\r\n        <option value=\"5\">5</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" (click)=\"onClickMe()\">Hecho</button>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/moderador/moderador.component.ts":
/*!**************************************************!*\
  !*** ./src/app/moderador/moderador.component.ts ***!
  \**************************************************/
/*! exports provided: ModeradorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeradorComponent", function() { return ModeradorComponent; });
/* harmony import */ var _models_moderador__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/moderador */ "./src/models/moderador.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/http.service */ "./src/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModeradorComponent = /** @class */ (function () {
    function ModeradorComponent(http, formBuilder, router) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.moderador = new _models_moderador__WEBPACK_IMPORTED_MODULE_0__["Moderador"]();
    }
    ModeradorComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            nombreMercado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cantidadJugadores: [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    Object.defineProperty(ModeradorComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    ModeradorComponent.prototype.onClickMe = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.moderador.nombreMercado = this.registerForm.value.nombreMercado;
        this.moderador.cantidadJugadores = this.registerForm.value.cantidadJugadores;
        this.http.game.createGame(this.moderador, function (response) {
            if (response.message && response.message == "ok") {
                alert("Creado correctamente, Codigo: " + response.token);
                var codigo = response.token;
                _this.http.game.joinGameModerator(codigo, function (response) {
                    if (response.message && response.message == "ok") {
                        _this.router.navigate(['/fin']);
                    }
                });
            }
            else
                alert("Error: " + response);
        });
    };
    ModeradorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-moderador',
            template: __webpack_require__(/*! ./moderador.component.html */ "./src/app/moderador/moderador.component.html"),
            styles: [__webpack_require__(/*! ./moderador.component.css */ "./src/app/moderador/moderador.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ModeradorComponent);
    return ModeradorComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n  width: 100%;\r\n  padding-top: 2rem;\r\n  -webkit-padding-after: 2rem;\r\n          padding-block-end: 2rem;\r\n  background-color: #125A82;\r\n  color: white;\r\n  text-align: center;\r\n  font-family: \"arial\";\r\n  font-size: 19px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"formulario\">\r\n  <header>Simulador de Negocios </header>\r\n\r\n  <div>\r\n    <label for=\"email\">Ingrese su email</label>\r\n    <input type=\"email\" [(ngModel)]=\"email\" placeholder=\"email\" required>\r\n    <label for=\"password\">Ingrese un password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\" required>\r\n    <button (click)=\"signup()\" [disabled]=\"!email || !password\">\r\n      Signup\r\n    </button>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, _firebaseAuth, router) {
        this.authService = authService;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.signup = function () {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
        this.router.navigateByUrl('/tabla');
    };
    RegisterComponent.prototype.tabla = function () {
        this.router.navigateByUrl('/tabla');
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/separador-de-miles/thousand.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/separador-de-miles/thousand.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ThousandsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThousandsPipe", function() { return ThousandsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThousandsPipe = /** @class */ (function () {
    function ThousandsPipe() {
    }
    ThousandsPipe.prototype.transform = function (value) {
        // console.log(value)
        var res = value;
        if (value) {
            res = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        }
        else {
            if (value == 0)
                res = 0;
            else
                res = '';
        }
        return res;
    };
    ThousandsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'thousandPipe'
        })
    ], ThousandsPipe);
    return ThousandsPipe;
}());



/***/ }),

/***/ "./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container {\r\n\r\n  margin: 7px;\r\n\r\n  width: auto;\r\n  color: black;\r\n\r\n}\r\n\r\ntable {\r\n\r\n  font-family: \"arial\";\r\n  font-size: 14px;\r\n  background-color: white;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n\r\n\r\n\r\n}\r\n\r\n/*\r\nthead{\r\n\tbackground-color: #0064FF;\r\n\tborder-bottom: solid 5px #4c92ff;\r\n\tcolor: white;\r\n\r\n}*/\r\n\r\ntr {\r\n  border-color: black;\r\n}\r\n\r\ntable,\r\nth {\r\n  border: 2px solid black;\r\n}\r\n\r\ntable td+td {\r\n  border-left: 2px solid black;\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n}\r\n\r\n#itemTipoNum {\r\n  padding-left: 4%;\r\n}\r\n\r\n#subItemTipo1 {\r\n  padding-left: 5%\r\n}\r\n\r\n#subItemTipo2 {\r\n  padding-left: 8%\r\n}\r\n\r\n/*\r\ntr:nth-child(even){\r\nbackground-color:  #ddd;\r\n}*/\r\n\r\ntr:hover td {\r\n  background-color: #4c92ff;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n  <table id=\"success\">\r\n    <thead>\r\n      <tr>\r\n        <th>DETALLE</th>\r\n        <th>BIMESTRE INICIAL </th>\r\n        <th *ngFor=\"let estado of estadoResultados;let i=index\">BIMESTRE {{i+1 | thousandPipe}}</th>\r\n\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr>\r\n        <td> + INGRESOS</td>\r\n        <td id=\"itemTipoNum\">{{74200 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\" id=\"itemTipoNum\">{{estado.ingresos | thousandPipe}}</td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <td>VENTAS</td>\r\n        <td>{{90000 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\">{{estado.ventas | thousandPipe}}</td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <td id=\"subItemTipo1\">OTROS INGRESOS</td>\r\n        <td>{{0 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\">0</td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td id=\"subItemTipo1\">CAPITAL PERIODO ANTERIOR</td>\r\n        <td>{{-15800 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\">{{estado.capitalAnterior | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>- COSTOS</td>\r\n        <td id=\"itemTipoNum\">{{60770 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\" id=\"itemTipoNum\">{{estado.costos | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n\r\n        <td id=\"subItemTipo2\">MATERIA PRIMA</td>\r\n        <td>{{30000 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\">{{estado.materiaPrima | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td id=\"subItemTipo2\">MANO DE OBRA</td>\r\n        <td>{{8000 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\">{{estado.manoObra | thousandPipe}}</td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <td id=\"subItemTipo2\">COSTOS INDIRECTOS</td>\r\n        <td>{{22770 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\">{{estado.costosIndirectos | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n      <tr style=\"background-color:rgb(14, 187, 230); \">\r\n        <td>UTILIDAD BRUTA</td>\r\n        <td id=\"itemTipoNum\">{{13430 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\" id=\"itemTipoNum\">{{estado.utilidadBruta | thousandPipe}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>-GASTOS OPERATIVOS</td>\r\n        <td id=\"itemTipoNum\">{{7500 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\" id=\"itemTipoNum\">{{estado.gastosOperativos | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n\r\n        <td id=\"subItemTipo1\">INV. MARKETING</td>\r\n        <td>{{500 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\"> {{estado.inversionMarketing | thousandPipe}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n\r\n        <td id=\"subItemTipo1\">INV. INVESTIGACIÓN</td>\r\n        <td>{{1000 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\">{{estado.inversionInvestigacion | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td id=\"subItemTipo1\">INV. ACTIVOS</td>\r\n        <td>{{6000 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\">{{estado.inversionActivos | thousandPipe}}</td>\r\n      </tr>\r\n\r\n      <tr style=\"background-color:rgb(14, 187, 230); \">\r\n        <td>UTILIDAD NETA DEL EJERCICO</td>\r\n        <td id=\"itemTipoNum\">{{5930 | thousandPipe}}</td>\r\n        <td *ngFor=\"let estado of estadoResultados\" id=\"itemTipoNum\">{{estado.utilidadNeta | thousandPipe}}</td>\r\n\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.ts ***!
  \********************************************************************************/
/*! exports provided: TablResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablResultadosComponent", function() { return TablResultadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablResultadosComponent = /** @class */ (function () {
    function TablResultadosComponent() {
    }
    TablResultadosComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TablResultadosComponent.prototype, "estadoResultados", void 0);
    TablResultadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabl-resultados',
            template: __webpack_require__(/*! ./tabl-resultados.component.html */ "./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.html"),
            styles: [__webpack_require__(/*! ./tabl-resultados.component.css */ "./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablResultadosComponent);
    return TablResultadosComponent;
}());



/***/ }),

/***/ "./src/app/tabla-de-decision/tabla-de-decision.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tabla-de-decision/tabla-de-decision.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main_container {\r\n  position: absolute;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: #36a9e1;\r\n  display: flex;\r\n}\r\n\r\naside {\r\n  height: 100%;\r\n  width: 270px;\r\n  color: white;\r\n  text-align: center;\r\n  overflow-y: hidden;\r\n  \r\n}\r\n\r\n#logo_container {\r\n  background-color: rgb(111, 110, 110);\r\n}\r\n\r\n#logo_image {\r\n  margin-top: 20px;\r\n  height: 200px;\r\n  width: 200px;\r\n  background-color: white;\r\n  border-radius: 100%;\r\n}\r\n\r\n#nombre_empresa {\r\n  padding-top: 20px;\r\n  padding-bottom: 30px;\r\n  font-size: 20px;\r\n}\r\n\r\n#body_container {\r\n  width: calc(100% - 270px);\r\n  height: 100%;\r\n  background-color: red;\r\n}\r\n\r\n.tap_menu_hidden {\r\n  display: none;\r\n}\r\n\r\n.tab_menu_description {\r\n  font-size: 15px;\r\n  margin-top: -65px;\r\n  padding: 0 15px;\r\n  padding-top: 50px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.tab_menu_button {\r\n  margin-top: -31px;\r\n  height: 50px;\r\n  width: 210px;\r\n  border-radius: 15px;\r\n  margin-bottom: 30px;\r\n  font-size: 16px;\r\n}\r\n\r\n.tab_menu_button:focus {\r\n  outline: none;\r\n}\r\n\r\n.tab_menu_button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.section_container {\r\n  position: relative;\r\n  height: 100%;\r\n  width: calc(100% - 20px);\r\n  padding-left: 20px;\r\n}\r\n\r\n.section_container_body {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  \r\n}\r\n\r\n.section_title {\r\n  display: flex;\r\n  height: 100px;\r\n}\r\n\r\n.section_title_icon {\r\n  font-size: 100px;\r\n  color: white;\r\n  height: 130px;\r\n  line-height: 130px;\r\n  padding: 0 60px;\r\n  border-radius: 0 0 30px 0;\r\n}\r\n\r\n.section_title_desc {\r\n  position: relative;\r\n  font-size: 3vw;\r\n  color: white;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.section_body {\r\n  padding-top: 40px;\r\n  height: calc(100% - 140px);\r\n  width: 100%;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.section_body_main {\r\n  margin: 0 50px;\r\n  background-color: rgb(90, 116, 165);\r\n  height: calc(100% - 100px);\r\n}\r\n\r\n.section_body_tab {\r\n  display: flex;\r\n}\r\n\r\n.section_body_tab_button:focus {\r\n  outline: none;\r\n}\r\n\r\n.section_body_tab_button {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 50px;\r\n  background-color: #092b3a;\r\n}\r\n\r\n.tap_selected {\r\n  background-color: #135a82;\r\n}\r\n\r\n.section_body_container {\r\n  height: calc(100% - 20px);\r\n  width: calc(100% - 20px);\r\n  padding: 10px;\r\n  background-color: #092b3a;\r\n}\r\n\r\n.section_body_content {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: white;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.section_body_content_title {\r\n  width: 500px;\r\n  background-color: #092b3a;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 20px;\r\n}\r\n\r\n.input-width {\r\n  width: 60px;\r\n}\r\n\r\n.tabla-decision {\r\n  text-align: center;\r\n  color: white;\r\n  font-family: \"arial\";\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  color: black;\r\n}\r\n\r\ntable,\r\nth,\r\ntd {\r\n  border: 1px solid black;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.th1 {\r\n  width: 10%;\r\n  border: 1px solid white;\r\n}\r\n\r\n.th2 {\r\n  width: 200%;\r\n}\r\n\r\n.tr1 {\r\n  width: 10%;\r\n  border: 1px solid white;\r\n}\r\n\r\ntable#t01 tr {\r\n  height: 60px;\r\n}\r\n\r\ntable#t01 tr:nth-child(odd) {\r\n  background-color: #fff;\r\n}\r\n\r\ntable#t01 tr:nth-child(even) {\r\n  background-color: rgb(116, 197, 233);\r\n}\r\n\r\ntable#t01 th {\r\n  background-color: rgb(24, 76, 133);\r\n  color: white;\r\n}\r\n\r\n.tabla-proyecciones {\r\n  width: 500px;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  color: white;\r\n  font-family: \"arial\";\r\n  background-color: rgb(255, 255, 255);\r\n  margin-left: 20px;\r\n  font-size: 14px;\r\n}\r\n\r\n.header-proyecciones {\r\n  background-color: rgb(24, 76, 133);\r\n  text-align-last: center;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  color: white;\r\n  font-size: 20px;\r\n  padding: 3%;\r\n}\r\n\r\n.proyecciones {\r\n  color: black;\r\n  text-align: left;\r\n  background-color: white;\r\n  border: 1px solid black;\r\n}\r\n\r\n.fuente {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\npre {\r\n  font-family: \"arial\";\r\n  color: black;\r\n}\r\n\r\n/* Tooltip container */\r\n\r\n.tooltip {\r\n  display: inline-block;\r\n  position: relative;\r\n  border-bottom: 1px dotted #666;\r\n  text-align: left;\r\n}\r\n\r\n.tooltip .left {\r\n  min-width: 200px;\r\n  top: 50%;\r\n  right: 100%;\r\n  margin-right: 20px;\r\n  -webkit-transform: translate(50%, 40%);\r\n          transform: translate(50%, 40%);\r\n  padding: 0px;\r\n  color: #ffffff;\r\n  background-color: #092B3A;\r\n  font-weight: normal;\r\n  font-size: 13px;\r\n  border-radius: 3px;\r\n  position: absolute;\r\n  z-index: 99999999;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);\r\n  display: none;\r\n}\r\n\r\n.tooltip .left div {\r\n  font-size: 15px;\r\n  padding: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.tooltip .left div:hover {\r\n  background-color: #50515c;\r\n}\r\n\r\n.tooltip:hover .left {\r\n  display: block;\r\n}\r\n\r\n.tooltip .left i {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 100%;\r\n  margin-top: -12px;\r\n  width: 12px;\r\n  height: 24px;\r\n  overflow: hidden;\r\n}\r\n\r\n.tooltip .left i::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 12px;\r\n  height: 12px;\r\n  left: 0;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%) rotate(-45deg);\r\n          transform: translate(-50%, -50%) rotate(-45deg);\r\n  background-color: #eeeeee;\r\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.tooltip .material-icons {\r\n  height: 100px;\r\n  width: 100px;\r\n  font-size: 100px;\r\n  text-align: center;\r\n  line-height: 100px;\r\n  color: white\r\n}\r\n\r\n.centro \r\n{\r\n  text-align: center;\r\n}\r\n\r\n.lower-case\r\n{\r\nfont-size: 14px;\r\n}\r\n\r\n.maquinaria\r\n{\r\n  \r\n  text-align: center;\r\n}\r\n\r\n.maquinaria-foto\r\n{\r\n  width: 1000px; \r\n  height: 395px;\r\n}"

/***/ }),

/***/ "./src/app/tabla-de-decision/tabla-de-decision.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tabla-de-decision/tabla-de-decision.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main_container\">\r\n  <aside>\r\n    <div id=\"logo_container\">\r\n      <img id=\"logo_image\" src=\"/imagenes/LOGO SIMULADOR FINAL.png\">\r\n      <div id=\"nombre_empresa\">{{(http.game)?http.game.name:\"\"}}</div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #092B3A;\">\r\n      <button (click)=\"informacion()\" class=\"boton-infomacion-compania tab_menu_button\" style=\"background-color: #092B3A;\">\r\n        DATOS SOBRE LA COMPAÑÍA\r\n      </button>\r\n\r\n      <div class=\"{{tap_position==0 ? '' : 'tap_menu_hidden'}} tab_menu_description\">\r\n        Como nuevo gerente general es necesario que conozcas a detalle todo acerca de la compañía que ahora\r\n        diriges.\r\n        En esta seción te brindamos toda la información necesaria para que conozcas el negocio.\r\n      </div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #135A82;\">\r\n      <button (click)=\"decision()\" class=\"boton-decision tab_menu_button\" style=\"background-color: #135A82;\">\r\n        MIS DECISIONES\r\n      </button>\r\n      <div class=\"{{tap_position==1 ? '' : 'tap_menu_hidden'}}  tab_menu_description\">\r\n        En esta sección puedo tomar las decisiones que afectaran el desenvolvimiento de mi empresa en los\r\n        siguientes\r\n        2\r\n        meses.\r\n      </div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #0D8EC8;\">\r\n      <button (click)=\"tanalisis()\" class=\"boton-t-analisi tab_menu_button\" style=\"background-color: #0D8EC8;\">\r\n        ANÁLISIS DE LA INDUSTRIA\r\n      </button>\r\n      <div class=\"{{tap_position==2? '' : 'tap_menu_hidden'}}  tab_menu_description\">\r\n        En esta sección puedes ver y analizar las decisiones y resultados de tu competencia y la industria.\r\n      </div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #2EC3EC;\">\r\n      <button (click)=\"informe()\" class=\"boton-informe tab_menu_button\" style=\"background-color: #2EC3EC;\">\r\n        INFORMES DE LA COMPAÑÍA\r\n      </button>\r\n      <div class=\"{{tap_position==3 ? '' : 'tap_menu_hidden'}} tab_menu_description\">\r\n        En esta sección puedes ver y analizar las decisiones y resultados de tus decisiones así como el\r\n        estado de tu\r\n        compañía.\r\n      </div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #36A9E1;\">\r\n      <button (click)=\"analisis()\" class=\"boton-analisis tab_menu_button\" style=\"background-color: #36A9E1;\">\r\n        ANÁLISIS\r\n      </button>\r\n      <div class=\"{{tap_position==4 ? '' : 'tap_menu_hidden'}} tab_menu_description\">\r\n        En esta sección puedes comparar variables para tener un panorama más claro de tus decisiones.\r\n      </div>\r\n    </div>\r\n  </aside>\r\n  <div id=\"body_container\">\r\n    <div class=\"section_container {{tap_position==0 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #092B3A;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #092B3A;\">help_outline</div>\r\n          <div class=\"section_title_desc\"> DATOS SOBRE LA COMPAÑÍA</div>\r\n        </div>\r\n        <div class=\"section_body\">\r\n\r\n          <div class=\"section_body_main\">\r\n            <div class=\"section_body_tab\">\r\n              <button (click)=\"historia()\" class=\"section_body_tab_button  {{section_tap_1==0 ? '' : 'tap_selected'}}\"\r\n                id=\"\">\r\n                HISTORIA\r\n              </button>\r\n              <button (click)=\"misionVision()\" class=\"section_body_tab_button  {{section_tap_1==1 ? '' : 'tap_selected'}}\"\r\n                id=\"\">\r\n                MISIÓN - VISIÓN\r\n              </button>\r\n              <button (click)=\"nuestroProducto()\" class=\"section_body_tab_button   {{section_tap_1==2 ? '' : 'tap_selected'}}\"\r\n                id=\"\">\r\n                NUESTRO PRODUCTO\r\n              </button>\r\n              <button (click)=\"organigrama()\" class=\"section_body_tab_button  {{section_tap_1==3 ? '' : 'tap_selected'}}\"\r\n                id=\"\">\r\n                ORGANIGRAMA\r\n              </button>\r\n\r\n              <button (click)=\"maquinaria()\" class=\"section_body_tab_button  {{section_tap_1==5 ? '' : 'tap_selected'}}\"\r\n                id=\"\">\r\n                MAQUINARIA\r\n              </button>\r\n\r\n              <button (click)=\"objetivos()\" class=\"section_body_tab_button  {{section_tap_1==4 ? '' : 'tap_selected'}}\"\r\n                id=\"D\">\r\n                OBJETIVOS\r\n              </button>\r\n            </div>\r\n            <div class=\"section_body_container\">\r\n              <div class=\"section_body_content  {{section_tap_1==0 ? '' : 'tap_menu_hidden'}}\">\r\n                <div style=\"padding: 40px;text-align: justify;\">\r\n                  <img src=\"/imagenes/LOGO SIMULADOR FINAL.png\" style=\"float: right; width: 250px;\"><br /><br /><br />\r\n                  <div class=\"centro\" style=\"font-weight: bold;\">\r\n                    <U>UNA BREVE HISTORIA SOBRE NOSOTROS</U>\r\n                  </div>\r\n                  <br />\r\n                  <br />&nbsp;&nbsp;&nbsp;&nbsp;La empresa \"{{(http.game)?http.game.name:\"\"}}\", inicio sus actividades\r\n                  en el año 2005.<br /><br />\r\n                  &nbsp;&nbsp;&nbsp;Desde el comienzo de nuestras actividades, nos especializamos en la venta de\r\n                  poleras de alta calidad con diseños\r\n                  innovadores y que están en constante actualización según las tendencias del mercado. <br /><br />\r\n                  &nbsp;&nbsp;&nbsp;Con el transcurso de los años hemos incorporado nuevas líneas de productos con el\r\n                  objetivo de proveer a nuestros\r\n                  clientes una solución integral a sus necesidades. Contamos con un excelente grupo humano el cual se\r\n                  capacita en\r\n                  forma permanente a fin de estar actualizado en los cambios e innovaciones tecnológicas que se\r\n                  presentan en nuestro\r\n                  ámbito.<br /><br />\r\n                  &nbsp;&nbsp;&nbsp;La calidad de nuestros productos y la excelencia en nuestro servicio nos han\r\n                  permitido posicionarnos en el mercado\r\n                  en muy poco tiempo, llegando a alcanzar a nuestros principales competidores.<br /><br />\r\n                  &nbsp;&nbsp;&nbsp;Pretendemos convertirnos en la empresa líder en nuestro sector a través de\r\n                  decisiones que nos permitan aprovechar\r\n                  nuestras ventajas competitivas.\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_1==1 ? '' : 'tap_menu_hidden'}}\">\r\n                <div style=\"display: flex; width: 100%;\">\r\n                  <div style=\"width: calc(100% - 200px);\">\r\n                    <br /><br />\r\n                    <div class=\"section_body_content_title\" style=\"font-weight: bold; font-size: 22px;\"> MISIÓN</div><br>\r\n                  </div>\r\n                </div>\r\n                <div style=\"text-align: center; font-size: 25px;\">\r\n                  <pre>\r\n“Somos una empresa rentable que ofrece poleras\r\nexclusivas de alta calidad con diseños innovadores\r\npara personas que aprecian el buen vestir.”\r\n                </pre>\r\n                </div>\r\n                <div>\r\n                  <div class=\"section_body_content_title\" style=\" float: right; font-weight: bold; font-size: 22px; \">VISIÓN\r\n                  </div>\r\n                  <div style=\"text-align: center; font-size: 25px;\">\r\n                    <br><br>\r\n                    <pre>\r\n“Ser una empresa referente en nuestro sector, reconocida\r\npor su excelente trato al cliente y productos de alta calidad.”\r\n</pre>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_1==2 ? '' : 'tap_menu_hidden'}}\">\r\n                <div style=\"padding: 40px; text-align: justify; font-size: 17px\">\r\n\r\n                  <br />&nbsp;&nbsp;&nbsp;Nuestra empresa ofrece poleras exclusivas y de alta calidad con diseños\r\n                  innovadores para personas\r\n                  que aprecian el buen vestir. <br /><br />\r\n                  &nbsp;&nbsp;&nbsp;Contamos con un equipo de diseñadores gráficos que se encargan de crear el arte que\r\n                  nosotros\r\n                  ponemos en cada uno de nuestros productos. Es importante mencionar que por políticas de la\r\n                  empresa se maneja un precio único para todos nuestros diseños. <br /><br />\r\n                  &nbsp;&nbsp;&nbsp;Aquí te mostramos algunas poleras de nuestra colección actual:\r\n\r\n                </div>\r\n\r\n                <div>\r\n                  <div class=\"\" style=\"display: flex;height: 220px;justify-content: center;width: 100%;\">\r\n                    <div style=\"width: 200px;background: url('/imagenes/polera_1.jpg')center no-repeat;background-size: contain;\"></div>\r\n                    <div style=\"width: 200px;background: url('/imagenes/polera_2.jpg')center no-repeat;background-size: contain;\"></div>\r\n                    <div style=\"width: 200px;background: url('/imagenes/polera_3.jpg')center no-repeat;background-size: contain;\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_1==3 ? '' : 'tap_menu_hidden'}}\" style=\"position: relative;\">\r\n                <div style=\"background: url('/imagenes/organigrama2.jpg') no-repeat center; background-size: contain;width: calc(110% - 110px);height: calc(110% - 110px);position: absolute;top: 50px;\"></div>\r\n              </div>\r\n\r\n              <div class=\"section_body_content  {{section_tap_1==5 ? '' : 'tap_menu_hidden'}}\">\r\n                <div class=\"maquinaria\">\r\n                  <br>\r\n                  <img src=\"/imagenes/maquinaria.png\" class=\"maquinaria-foto\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"section_body_content  {{section_tap_1==4 ? '' : 'tap_menu_hidden'}}\">\r\n                <br>\r\n                <div class=\"section_body_content_title\" style=\"font-weight: bold;\"> BIENVENIDO A LA EMPRESA\r\n                </div>\r\n                <div style=\"padding-left:40px; padding-right: 40px ; font-size: 17px; text-align: justify\">\r\n                  <br /><br />&nbsp;&nbsp;&nbsp;Después de unos años de trayectoria nuestra empresa ha logrado igualar\r\n                  a la compentencia y\r\n                  actualmente, según los resultados del último bimestre, todas las empresas que competimos en\r\n                  el mercado nos encontramos en igualdad de condiciones. Sin embargo; es nuestro deseo que\r\n                  \"{{(http.game)?http.game.name:\"\"}}\" se convierta en la líder del mercado y sea un referente de\r\n                  calidad\r\n                  entre nuestros competidores y clientes. Es por tal motivo que hemos decidido contratarte como\r\n                  gerente general de nuestra organización esperando que mediante tus decisiones administrativas nos\r\n                  ayudes a cumplir nuestras metas.<br /><br />\r\n                  &nbsp;&nbsp;&nbsp;Tus principales objetivos como nuevo gerente general de la empresa son:\r\n                  <ul>\r\n                    <li>\r\n                      Obtener el mayor porcentaje del mercado (clientes) posibles en cada bimestre.\r\n                    </li>\r\n                    <li>\r\n                      Obtener la mayor restabilidad posible de cada bimestre.\r\n                    </li>\r\n                  </ul>\r\n                  &nbsp;&nbsp;&nbsp;Te recomendamos analizar los datos e información que se te brinda después de cada\r\n                  bimestre de manera detallada\r\n                  que las siguientes decisiones que tomes nos garanticen el éxito. Confiamos en ti, sabemos que lo\r\n                  harás muy bien.<br /><br /><br /><br />\r\n                  <div class=\"lower-case\">\r\n                    (Consulta la \"GUÍA DEL JUGADOR\" para obtener más información acerca de tus objetivos y estrategias\r\n                    para ganar a tu competencia en la\r\n                    simulación.)\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section_container {{tap_position==1 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #135A82;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #135A82;z-index: 1000;\">person</div>\r\n          <div class=\"section_title_desc\"> MIS DECISIONES</div>\r\n          <div class=\"btn btn-primary tooltip\">\r\n            <li class=\"material-icons\">apps\r\n            </li>\r\n            <div class=\"left\">\r\n              <div (click)=\"fin()\">Puntajes</div>\r\n              <div (click)=\"retirarseJuego()\">Retirarse del juego</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"section_body\">\r\n          <div style=\"display: flex; justify-content: center;\">\r\n            <div class=\"tabla-decision\">\r\n              <table id=\"t01\">\r\n                <tr>\r\n                  <th class=\"th1\" rowspan=2>DETALLE</th>\r\n                  <th class=\"th1\" colspan=5>BIMESTRES</th>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"tr1\">INICIAL</th>\r\n                  <th class=\"tr1\" id=\"numero-bimestre1\">B-1</th>\r\n                  <th class=\"tr1\" id=\"numero-bimestre2\">B-2</th>\r\n                  <th class=\"tr1\" id=\"numero-bimestre3\">B-3</th>\r\n                  <th class=\"tr1\" id=\"numero-bimestre-siguiente\"> B </th>\r\n                </tr>\r\n                <tr>\r\n                  <td>PRECIO UNITARIO</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_inicial)?http.game.player.bimestre_inicial.precioUnitario:\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_uno)?http.game.player.bimestre_uno.precioUnitario:\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_dos)?http.game.player.bimestre_dos.precioUnitario:\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_tres)?http.game.player.bimestre_tres.precioUnitario:\"\"}}</td>\r\n                  <td id=\"precioUnitarioTD\"> <input class=\"input-width\" type=\"number\" id=\"precioUnitario\" name=\"precioUnitario\"\r\n                      [(ngModel)]=\"precioUnitario\" min=\"96\" max=\"300\" value=150 onkeydown=\" return false\">\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>PRODUCCIÓN</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_inicial)?(http.game.player.bimestre_inicial.produccion\r\n                    | thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_uno)?(http.game.player.bimestre_uno.produccion |\r\n                    thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_dos)?(http.game.player.bimestre_dos.produccion |\r\n                    thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_tres)?(http.game.player.bimestre_tres.produccion |\r\n                    thousandPipe):\"\"}}</td>\r\n                  <td id=\"produccionTD\">\r\n                    <input class=\"input-width\" type=\"number\" id=\"produccion\" name=\"produccion\" [(ngModel)]=\"produccion\"\r\n                      min=\"0\" max=\"600\" value=600 onkeydown=\" return false\" (change)=\"calcularLimitePrecioUnitario($event.target.value)\"></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>INVERSIÓN EN MARKETING</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_inicial)?(http.game.player.bimestre_inicial.inversionEnMarketing\r\n                    | thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_uno)?(http.game.player.bimestre_uno.inversionEnMarketing\r\n                    | thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_dos)?(http.game.player.bimestre_dos.inversionEnMarketing\r\n                    | thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_tres)?(http.game.player.bimestre_tres.inversionEnMarketing\r\n                    | thousandPipe):\"\"}}</td>\r\n                  <td id=\"inversionEnMarketingTD\">\r\n                    <select class=\"input-width\" type=\"number\" (change)=\"onChangeinversionEnMarketings($event.target.value)\">\r\n                      <ng-container *ngFor=\"let inversion of inversionEnMarketings\">\r\n                        <option *ngIf=\"inversion+inversionEnInvestigacion+inversionEnActivos+(produccion*35)+8000+22770<=capitalPeriodoAnterior+(precioUnitario*produccion)+10000\"\r\n                          [ngValue]=\"inversion\">\r\n                          {{inversion}}\r\n                        </option>\r\n                      </ng-container>\r\n                    </select>\r\n                  </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                  <td>INVERSIÓN EN INVESTIGACIÓN</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_inicial)?(http.game.player.bimestre_inicial.inversionEnInvestigacion\r\n                    | thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_uno)?(http.game.player.bimestre_uno.inversionEnInvestigacion\r\n                    | thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_dos)?(http.game.player.bimestre_dos.inversionEnInvestigacion\r\n                    | thousandPipe ):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_tres)?(http.game.player.bimestre_tres.inversionEnInvestigacion\r\n                    | thousandPipe):\"\"}}</td>\r\n                  <td id=\"inversionEnInvestigacionTD\">\r\n                    <select class=\"input-width\" type=\"number\" (change)=\"onChangeinversionEnInvestigacions($event.target.value)\">\r\n                      <ng-container *ngFor=\"let inversion of inversionEnInvestigacions\">\r\n                        <option *ngIf=\"inversionEnMarketing+inversion+inversionEnActivos+(produccion*35)+8000+22770<=capitalPeriodoAnterior+(precioUnitario*produccion)+10000\"\r\n                          [ngValue]=\"inversion\">\r\n                          {{inversion}}\r\n                        </option>\r\n                      </ng-container>\r\n                    </select>\r\n                  </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                  <td>INVERSIÓN EN ACTIVOS</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_inicial)?(http.game.player.bimestre_inicial.inversionEnActivos|\r\n                    thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_uno)?(http.game.player.bimestre_uno.inversionEnActivos\r\n                    | thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_dos)?(http.game.player.bimestre_dos.inversionEnActivos\r\n                    | thousandPipe):\"\"}}</td>\r\n                  <td>{{(http.game.player&&http.game.player.bimestre_tres)?(http.game.player.bimestre_tres.inversionEnActivos|\r\n                    thousandPipe):\"\"}}</td>\r\n                  <td id=\"inversionEnActivosTD\">\r\n                    <select class=\"input-width\" type=\"number\" (change)=\"onChangeinversionEnActivoss($event.target.value)\">\r\n                      <ng-container *ngFor=\"let inversion of inversionEnActivoss\">\r\n                        <option *ngIf=\"inversionEnMarketing+inversionEnInvestigacion+inversion+(produccion*35)+8000+22770<=capitalPeriodoAnterior+(precioUnitario*produccion)+10000\"\r\n                          [ngValue]=\"inversion\">\r\n                          {{inversion}}\r\n                        </option>\r\n                      </ng-container>\r\n                    </select>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n\r\n            </div>\r\n            <div class=\"tabla-proyecciones\" id=\"tabla-proyeccionesID\">\r\n              <div class=\"proyecciones\">\r\n                <div class=\"header-proyecciones\">PROYECCIONES</div>\r\n\r\n                <ul style=\"list-style-type:none\">\r\n                  <li> <span> <i class=\"material-icons\" (click)=\"general()\" style=\"font-size:18px; color:blue;cursor: pointer\">\r\n                        arrow_right</i></span> CAPITAL PERIODO\r\n                    ANTERIOR\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    {{capitalPeriodoAnterior\r\n                    | thousandPipe}}</li>\r\n                  <li><span> <i class=\"material-icons\" (click)=\"ingresoDiv()\" style=\"font-size:18px; color:blue;cursor: pointer\">arrow_drop_down</i></span>\r\n                    INGRESOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    {{precioUnitario*produccion | thousandPipe}}</li>\r\n                  <div id=\"div-ingresos\" style=\"padding-left: 20%\">\r\n                    <pre>VENTAS                                        {{precioUnitario*produccion | thousandPipe}} </pre>\r\n                    <pre>OTROS INGRESOS                              {{ 0 | thousandPipe}}</pre>\r\n                  </div>\r\n                  <li><span> <i class=\"material-icons\" (click)=\"gastosDiv()\" style=\"font-size:18px; color:blue ;cursor: pointer\">arrow_drop_down</i></span>GASTOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    {{inversionEnMarketing + inversionEnActivos+inversionEnInvestigacion+produccion*50 +30770 |\r\n                    thousandPipe}}</li>\r\n                  <div id=\"div-gastos\" style=\"padding-left: 20%\">\r\n                    <pre>COSTOS DE PRODUCCIÓN         {{produccion*50 +30770 | thousandPipe}}</pre>\r\n                    <pre>INV. MARKETING                            {{inversionEnMarketing | thousandPipe}}</pre>\r\n                    <pre>INV. INVESTIGACIÓN                     {{inversionEnInvestigacion | thousandPipe}}</pre>\r\n                    <pre>INV. ACTIVOS                                 {{inversionEnActivos | thousandPipe}}</pre>\r\n\r\n                  </div>\r\n                  <li><span> <i class=\"material-icons\" (click)=\"resultadosDiv()\" style=\"font-size:18px; color:blue;cursor: pointer\">arrow_drop_down</i></span>RESULTADO\r\n                  </li>\r\n                  <div id=\"div-resultados\" style=\"padding-left: 20%\">\r\n                    <pre>EFECTIVO DISPONIBLE            {{capitalPeriodoAnterior+precioUnitario*produccion-(produccion*50 +30770+inversionEnMarketing + inversionEnActivos+inversionEnInvestigacion) | thousandPipe}} </pre>\r\n                    <pre>UTILIDAD ESPERADA                {{(precioUnitario*produccion)-(inversionEnMarketing + inversionEnActivos+inversionEnInvestigacion+produccion*50 +30770) | thousandPipe}}</pre>\r\n                  </div>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: flex; justify-content: center;padding-top: 50px\" id=\"boton-decisionID\">\r\n            <button (click)=\"iniciar()\" style=\"width:300px\">\r\n              {{http.game.bimestre_inicial_c==0?\r\n              \"ENVIAR MIS DECISIONES\":\r\n              \"Aún faltan \"+http.game.bimestre_inicial_c+\" jugadores\"}}\r\n            </button></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section_container {{tap_position==2 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #0D8EC8;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #0D8EC8;\">attach_money</div>\r\n          <div class=\"section_title_desc\"> ANÁLISIS DE LA INDUSTRIA</div>\r\n        </div>\r\n        <div class=\"section_body\">\r\n          <div class=\"section_body_main\">\r\n            <div class=\"section_body_tab\">\r\n\r\n              <button (click)=\"VisionGeneral()\" class=\"section_body_tab_button  {{section_tap_2==0 ? '' : 'tap_selected'}}\">\r\n                VISIÓN GENERAL\r\n              </button>\r\n              <button (click)=\"ProduccionTablaAnalisis()\" class=\"section_body_tab_button  {{section_tap_2==1 ? '' : 'tap_selected'}}\">\r\n                PRODUCCIÓN\r\n              </button>\r\n              <button (click)=\"VentasTablaAnalisis()\" class=\"section_body_tab_button  {{section_tap_2==2 ? '' : 'tap_selected'}}\">\r\n                VENTAS\r\n              </button>\r\n              <button (click)=\"PorcentajeMercado()\" class=\"section_body_tab_button  {{section_tap_2==3 ? '' : 'tap_selected'}}\">\r\n                % MERCADO\r\n              </button>\r\n            </div>\r\n            <div class=\"section_body_container\">\r\n              <div class=\"section_body_content  {{section_tap_2==0 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"VisionGeneralID\">\r\n                  <app-tabla-vision-general [visionGeneral]=\"visionGeneral\"></app-tabla-vision-general>\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_2==1 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"ProduccionTablaAnalisisID\">\r\n                  <app-tabla-produccion [produccionIndustria]=\"produccionIndustria\"></app-tabla-produccion>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_2==2 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"VentasTablaAnalisisID\">\r\n                  <app-tabla-ventas [ventasIndustria]=\"ventasIndustria\"></app-tabla-ventas>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_2==3 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"PorcentajeMercado\"><canvas id=\"pieI\" height=\"3\" width=\"8\"></canvas>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section_container {{tap_position==3 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #2EC3EC;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #2EC3EC;\">business_center</div>\r\n          <div class=\"section_title_desc\">INFORMES DE LA COMPAÑÍA</div>\r\n        </div>\r\n        <div class=\"section_body\">\r\n          <div class=\"section_body_main\">\r\n            <div class=\"section_body_tab\">\r\n\r\n              <button (click)=\"EstadoDeResultados()\" class=\"section_body_tab_button  {{section_tap_3==0 ? '' : 'tap_selected'}}\">\r\n                ESTADO DE RESULTADOS</button>\r\n              <button (click)=\"BalanceGeneral()\" class=\"section_body_tab_button  {{section_tap_3==1 ? '' : 'tap_selected'}}\">BALANCE\r\n                GENERAL</button>\r\n              <button (click)=\"Ventas()\" class=\"section_body_tab_button  {{section_tap_3==2 ? '' : 'tap_selected'}}\">VENTAS</button>\r\n              <button (click)=\"Produccion()\" class=\"section_body_tab_button  {{section_tap_3==3 ? '' : 'tap_selected'}}\">COSTOS\r\n                DE PRODUCCIÓN</button>\r\n              <button (click)=\"Compania()\" class=\"section_body_tab_button  {{section_tap_3==4 ? '' : 'tap_selected'}}\">COMPAÑÍA</button>\r\n\r\n            </div>\r\n            <div class=\"section_body_container\">\r\n              <div class=\"section_body_content  {{section_tap_3==0 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"EstadoDeResultadosID\">\r\n                  <app-tabl-resultados [estadoResultados]=\"estadoResultados\"></app-tabl-resultados>\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_3==1 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"BalanceGeneralID\">\r\n                  <app-tabl-balance-general [balanceGeneral]=\"balanceGeneral\"></app-tabl-balance-general>\r\n\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_3==2 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"VentasID\">\r\n                  <app-tabl-ventas [ventas]=\"ventas\"></app-tabl-ventas>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_3==3 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"ProduccionID\">\r\n                  <app-tabl-costos [costosProduccion]=\"costoProduccion\"></app-tabl-costos>\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_3==4 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <canvas id=\"lineChart\" height=\"3\" width=\"8\"></canvas>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"section_container {{tap_position==4 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #36A9E1;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #36A9E1;\">search</div>\r\n          <div class=\"section_title_desc\"> ANÁLISIS</div>\r\n        </div>\r\n        <div class=\"section_body\">\r\n          <div class=\"section_body_main\">\r\n            <div class=\"section_body_tab\">\r\n\r\n              <button id=\"prodvsventas\" (click)=\"produccionvsventas()\" class=\"section_body_tab_button  {{section_tap_4==0 ? '' : 'tap_selected'}}\">PRODUCCIÓN\r\n                VS\r\n                VENTAS</button>\r\n              <button (click)=\"costovsprecio()\" class=\"section_body_tab_button  {{section_tap_4==1 ? '' : 'tap_selected'}}\">COSTO\r\n                VS PRECIO</button>\r\n              <button (click)=\"capacidadvsproduccion()\" class=\"section_body_tab_button  {{section_tap_4==2 ? '' : 'tap_selected'}}\">CAPACIDAD\r\n                VS PRODUCCIÓN</button>\r\n              <button (click)=\"companiavscompetencia()\" class=\"section_body_tab_button  {{section_tap_4==3 ? '' : 'tap_selected'}}\">COMPAÑÍA\r\n                VS COMPETENCIA</button>\r\n              <button (click)=\"consejos()\" class=\"section_body_tab_button  {{section_tap_4==4 ? '' : 'tap_selected'}}\">CONSEJOS</button>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"section_body_container\">\r\n              <div class=\"section_body_content  {{section_tap_4==0 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <canvas id=\"lineChart2\" height=\"3\" width=\"8\"></canvas>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_4==1 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <canvas id=\"lineChart3\" height=\"3\" width=\"8\"></canvas>\r\n\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_4==2 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <canvas id=\"lineChart4\" height=\"3\" width=\"8\"></canvas>\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_4==3 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <canvas id=\"lineChart5\" height=\"3\" width=\"8\"></canvas>\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_4==4 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <div id=\"consejosID\">\r\n\r\n                  <!-- <div *ngIf=\"ventas.inventarioUnidades > 50\">  -->\r\n                  <p *ngIf=\"generarConsejo1()\">Tus niveles de inventario estan creciendo. Te recomendamos idear\r\n                    estrategias para\r\n                    aumentar las ventas o disminuir la producción.</p>\r\n                  <p *ngIf=\"generarConsejo2()\">Tu utilidad es muy baja. Te recomendamos idear estrategias para aumentar\r\n                    las ventas,\r\n                    aumentar ingresos o reducir los costos y gastos.</p>\r\n                  <p *ngIf=\"generarConsejo3()\">Tu % de mercado es muy bajo. Te recomendamos idear estrategias para\r\n                    aumentar las\r\n                    ventas y gasnar clientes.</p>\r\n                  <p *ngIf=\"generarConsejo4()\">Existe un gran porcentaje del mercado que no ha sido atendido. Te\r\n                    recomendamos idear\r\n                    estrategias para ganar clientes.</p>\r\n                  <!-- <p>Una empresa en el mercado cerró. Te aconsejamos idear estrategias para aumentar tu competitividad.</p>\r\n                <p *ngIf=\"generarConsejo1()==false&&generarConsejo2()==false&&generarConsejo3()==false&&generarConsejo4()==false\">Tus decisiones nos están llevando por buen camino, sigue así.</p> -->\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tabla-de-decision/tabla-de-decision.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tabla-de-decision/tabla-de-decision.component.ts ***!
  \******************************************************************/
/*! exports provided: TablaDeDecisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaDeDecisionComponent", function() { return TablaDeDecisionComponent; });
/* harmony import */ var _models_balanceGeneral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/balanceGeneral */ "./src/models/balanceGeneral.ts");
/* harmony import */ var _models_costosProduccion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/costosProduccion */ "./src/models/costosProduccion.ts");
/* harmony import */ var _models_produccion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/produccion */ "./src/models/produccion.ts");
/* harmony import */ var _models_ventasIndustria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/ventasIndustria */ "./src/models/ventasIndustria.ts");
/* harmony import */ var _models_ventas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/ventas */ "./src/models/ventas.ts");
/* harmony import */ var _models_bimestre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bimestre */ "./src/models/bimestre.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/http.service */ "./src/services/http.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! chartjs-plugin-labels */ "./node_modules/chartjs-plugin-labels/src/chartjs-plugin-labels.js");
/* harmony import */ var chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TablaDeDecisionComponent = /** @class */ (function () {
    function TablaDeDecisionComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        //tab manager
        this.tap_position = 1;
        this.section_tap_1 = 0;
        this.section_tap_2 = 0;
        this.section_tap_3 = 0;
        this.section_tap_4 = 0;
        this.precioUnitario = 150;
        this.produccion = 600;
        this.inversionEnMarketings = [0, 500, 1800, 3100, 8300];
        this.inversionEnMarketing = this.inversionEnMarketings[0];
        this.inversionEnInvestigacions = [0, 1000, 2000, 3000, 4000];
        this.inversionEnInvestigacion = this.inversionEnInvestigacions[0];
        this.inversionEnActivoss = [0, 6000, 15000, 28000, 40000];
        this.inversionEnActivos = this.inversionEnActivoss[0];
        this.capitalPeriodoAnterior = 5930;
        this.existeGanadorPorcentajeMercado = false;
        this.unicaValorPositivo = false;
        this.esActivo = 1;
        this.esUnicaEmpresa = false;
        this.bimestreInicial = new _models_bimestre__WEBPACK_IMPORTED_MODULE_5__["Bimestre"]();
        this.bimestreActual = new _models_bimestre__WEBPACK_IMPORTED_MODULE_5__["Bimestre"]();
        this.bimestres = [];
        this.costoProduccion = new _models_costosProduccion__WEBPACK_IMPORTED_MODULE_1__["CostosProduccion"]();
        this.ventas = new _models_ventas__WEBPACK_IMPORTED_MODULE_4__["Ventas"]();
        this.estadoResultados = [];
        this.balanceGeneral = new _models_balanceGeneral__WEBPACK_IMPORTED_MODULE_0__["BalanceGeneral"]();
        this.numeroBimestre = 0;
        this.produccionIndustria = new _models_produccion__WEBPACK_IMPORTED_MODULE_2__["Produccion"]();
        this.ventasIndustria = new _models_ventasIndustria__WEBPACK_IMPORTED_MODULE_3__["VentasIndustria"]();
        this.visionGeneral = [];
        this.produccionIndustriaBimestres = [];
        this.ventasIndustriaBimestres = [];
        this.sumatoriaCapacidadProduccion = [];
        this.promedioPrecioUnitarios = [];
        this.promedioERUtilidadNeta = [];
        this.produccionTotalIndustriaBimestres = [];
        if (!this.http.game)
            this.router.navigateByUrl('/jugar');
    }
    TablaDeDecisionComponent.prototype.onChangeinversionEnMarketings = function (data) {
        console.log("changed onChangeinversionEnMarketings", data);
        this.inversionEnMarketing = parseInt(data);
    };
    TablaDeDecisionComponent.prototype.onChangeinversionEnInvestigacions = function (data) {
        console.log("changed onChangeinversionEnInvestigacions", data);
        this.inversionEnInvestigacion = parseInt(data);
    };
    TablaDeDecisionComponent.prototype.onChangeinversionEnActivoss = function (data) {
        console.log("changed onChangeinversionEnActivoss", data);
        this.inversionEnActivos = parseInt(data);
        this.calcularLimiteProduccion(parseInt(data));
    };
    TablaDeDecisionComponent.prototype.calcularLimiteProduccion = function (inversionActivos) {
        var produccion = document.getElementById("produccion");
        var limite = 600;
        if (inversionActivos === 0)
            limite = 600;
        if (inversionActivos === 6000)
            limite = 750;
        if (inversionActivos === 15000)
            limite = 900;
        if (inversionActivos === 28000)
            limite = 1140;
        if (inversionActivos === 40000)
            limite = 1500;
        produccion.setAttribute("max", limite.toString());
        console.log(inversionActivos);
        console.log(limite);
        if (parseInt(document.getElementById("produccion").value) > limite)
            document.getElementById("produccion").value = limite.toString();
    };
    TablaDeDecisionComponent.prototype.calcularLimitePrecioUnitario = function (data) {
        var precioUnitario = document.getElementById("precioUnitario");
        var limite = Math.round((parseInt(data) * 35 + 30270) / parseInt(data));
        precioUnitario.setAttribute("min", limite.toString());
        if (parseInt(document.getElementById("precioUnitario").value) < limite)
            document.getElementById("precioUnitario").value = limite.toString();
    };
    TablaDeDecisionComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe(params => {
        //   if (params['player_name'] != null && params['codigo'] != null) {
        //     this.nombreEmpresa = params['player_name'];
        //     this.codigo = params['codigo'];
        //   }
        // });
        // console.log(this.nombreEmpresa);
        // console.log(this.codigo);
        // this.bimestreInicial.codigo = this.codigo;
        // this.bimestreInicial.nombreEmpresa = this.nombreEmpresa;
        // this.decision();
        // let json = JSON.stringify(this.bimestreInicial);
        // let params = 'json' + json;
        // console.log(json);
        // this.http.post('http://localhost:8080/bimestre', json).subscribe(
        //   (response: any) => {
        //     if (response.status == 201) {
        //       console.log('ok');
        // this.cargarDatosSocket();
        //     }
        //     else {
        //       console.log(response);
        //     }
        //   });
    };
    // actualizaProduccionIndustriaBimestres() {
    //   this.http.get('http://localhost:8080/produccion/PR' + this.nombreEmpresa + '' + this.codigo).subscribe(
    //     (response: any) => {
    //       console.log(response);
    //       this.produccion = response;
    //     });
    //   if (this.produccion !== null && this.produccion !== undefined) {
    //     if (this.produccionIndustriaBimestres.length > 0) {
    //       if (this.produccionIndustriaBimestres[this.produccionIndustriaBimestres.length - 1].numero != this.produccion.numero) {
    //         this.produccionIndustriaBimestres.push(this.produccion);
    //       }
    //     }
    //     else {
    //       this.produccionIndustriaBimestres.push(this.produccion);
    //     }
    //   }
    // }
    TablaDeDecisionComponent.prototype.bloquear = function () {
        console.log("this.numeroBimestre => ", this.numeroBimestre, "this.existeGanadorPorcentajeMercado =>", this.existeGanadorPorcentajeMercado, " this.unicaValorPositivo =>", this.unicaValorPositivo, "this.esActivo =>", this.esActivo, "this.esUnicaEmpresa =>", this.esUnicaEmpresa);
        if (this.numeroBimestre == 3 || this.existeGanadorPorcentajeMercado == true || this.unicaValorPositivo == true || this.esActivo == 0 || this.esUnicaEmpresa == true) {
            document.getElementById("numero-bimestre-siguiente").style.display = "none";
            document.getElementById("precioUnitarioTD").style.display = "none";
            document.getElementById("tabla-proyeccionesID").style.display = "none";
            document.getElementById("boton-decisionID").style.display = "none";
            document.getElementById("produccionTD").style.display = "none";
            document.getElementById("inversionEnMarketingTD").style.display = "none";
            document.getElementById("inversionEnInvestigacionTD").style.display = "none";
            document.getElementById("inversionEnActivosTD").style.display = "none";
        }
    };
    TablaDeDecisionComponent.prototype.actualizarActivo = function () {
        var _this = this;
        this.http.game.getActivo(function (response) {
            if (response) {
                _this.esActivo = response.esActivo;
                console.log("getActivo front", _this.esActivo);
                _this.bloquear();
            }
        });
        this.bloquear();
    };
    TablaDeDecisionComponent.prototype.retirarseJuego = function () {
        var _this = this;
        var esRetirarse = confirm("¿Seguro de retirarse del juego?");
        if (esRetirarse) {
            this.http.game.retirarseJuego(function (response) {
                if (response) {
                    console.log("retirarseJuego front =>", response.esRetirado);
                    _this.bloquear();
                }
            });
            this.bloquear();
        }
        this.actualizarActivo();
        console.log("Ya acabria actualizar activo");
        this.bloquear();
    };
    TablaDeDecisionComponent.prototype.actualizarVentasIndustriasBimestre = function () {
        var _this = this;
        this.http.get('http://localhost:8080/ventasIndustria/VI' + this.nombreEmpresa + '' + this.codigo).subscribe(function (response) {
            console.log(response);
            _this.ventasIndustria = response;
        });
        if (this.ventasIndustria !== undefined) {
            if (this.ventasIndustriaBimestres.length > 0) {
                if (this.ventasIndustriaBimestres[this.ventasIndustriaBimestres.length - 1].numero != this.ventasIndustria.numero) {
                    this.ventasIndustriaBimestres.push(this.ventasIndustria);
                }
            }
            else {
                this.ventasIndustriaBimestres.push(this.ventasIndustria);
            }
        }
    };
    TablaDeDecisionComponent.prototype.obtenerTodosLosDatos = function () {
        this.http.game.calcularTodoPrueba(this.numeroBimestre, function (response) {
            console.log("calcularTodoPrueba", response);
        });
    };
    TablaDeDecisionComponent.prototype.iniciar = function () {
        var data_bimestre = {
            precioUnitario: this.precioUnitario,
            produccion: this.produccion,
            inversionEnMarketing: this.inversionEnMarketing,
            inversionEnInvestigacion: this.inversionEnInvestigacion,
            inversionEnActivos: this.inversionEnActivos
        };
        var propuesta_Actual = parseInt(data_bimestre.inversionEnActivos + "")
            + parseInt(data_bimestre.inversionEnInvestigacion + "") +
            parseInt(data_bimestre.inversionEnMarketing + "");
        //alert("presupuesto actual " + propuesta_Actual + " => capital anterior " + this.capitalPeriodoAnterior)
        if (this.http.game.bimestre_inicial_c == 0) {
            if (this.http.game.player.bimestre_uno) {
                if (this.http.game.bimestre_uno_c == 0) {
                    if (this.http.game.player.bimestre_dos) {
                        if (this.http.game.bimestre_dos_c == 0) {
                            if (this.http.game.player.bimestre_tres) {
                                alert("Terminado");
                            }
                            else {
                                this.http.game.addBimestreTres(data_bimestre, function (response) {
                                    console.log("addBimestreTres", response);
                                });
                                this.numeroBimestre = 3;
                                if (this.http.game.bimestre_tres_c == 1) {
                                    this.obtenerTodosLosDatos();
                                }
                                this.bloquear();
                            }
                        }
                        else {
                            alert("faltan completar el bimestre dos");
                        }
                    }
                    else {
                        this.http.game.addBimestreDos(data_bimestre, function (response) {
                            console.log("addBimestreDos", response);
                        });
                        this.numeroBimestre = 2;
                        if (this.http.game.bimestre_dos_c == 1) {
                            this.obtenerTodosLosDatos();
                        }
                        console.log("numero Bimestre front => ", this.numeroBimestre);
                    }
                }
                else {
                    alert("faltan completar el bimestre uno");
                }
            }
            else {
                this.http.game.addBimestreUno(data_bimestre, function (response) {
                    console.log("addBimestreUno", response);
                });
                this.numeroBimestre = 1;
                if (this.http.game.bimestre_uno_c == 1) {
                    this.obtenerTodosLosDatos();
                }
                console.log("numero Bimestre front => ", this.numeroBimestre);
            }
        }
        else {
            alert("aun faltan " + this.http.game.bimestre_inicial_c + " jugadores");
        }
    };
    TablaDeDecisionComponent.prototype.iniciarAfter = function () {
        alert("Iniciando inversion, preparando bimestre");
        var precioUnitario = document.getElementById("precioUnitario");
        if (document.getElementById("precio-unitario1").innerText === "") {
            document.getElementById("precio-unitario1").innerText = precioUnitario.value;
        }
        else {
            if (document.getElementById("precio-unitario2").innerText === "") {
                document.getElementById("precio-unitario2").innerText = precioUnitario.value;
            }
            else {
                if (document.getElementById("precio-unitario3").innerText === "") {
                    document.getElementById("precio-unitario3").innerText = precioUnitario.value;
                    document.getElementById("decisionID").style.display = "none";
                    document.getElementById("tabla-proyeccionesID").style.display = "none";
                    document.getElementById("numero-bimestre-siguiente").style.display = "none";
                    document.getElementById("precioUnitarioTD").style.display = "none";
                }
            }
        }
        var produccion2 = document.getElementById("produccion");
        if (document.getElementById("produccion1").innerText === "") {
            document.getElementById("produccion1").innerText = produccion2.value;
        }
        else {
            if (document.getElementById("produccion2").innerText === "") {
                document.getElementById("produccion2").innerText = produccion2.value;
            }
            else {
                if (document.getElementById("produccion3").innerText === "") {
                    document.getElementById("produccion3").innerText = produccion2.value;
                    document.getElementById("produccion").style.display = "none";
                    document.getElementById("produccionTD").style.display = "none";
                }
            }
        }
        var inversionMarketing = document.getElementById("inversionEnMarketing");
        if (document.getElementById("inversion-marketing1").innerText === "") {
            document.getElementById("inversion-marketing1").innerText = inversionMarketing.value;
        }
        else {
            if (document.getElementById("inversion-marketing2").innerText === "") {
                document.getElementById("inversion-marketing2").innerText = inversionMarketing.value;
            }
            else {
                if (document.getElementById("inversion-marketing3").innerText === "") {
                    document.getElementById("inversion-marketing3").innerText = inversionMarketing.value;
                    document.getElementById("inversionEnMarketing").style.display = "none";
                    document.getElementById("inversionEnMarketingTD").style.display = "none";
                }
            }
        }
        var inversionInvestigacion = document.getElementById("inversionEnInvestigacion");
        if (document.getElementById("inversion-investigacion1").innerText === "") {
            document.getElementById("inversion-investigacion1").innerText = inversionInvestigacion.value;
        }
        else {
            if (document.getElementById("inversion-investigacion2").innerText === "") {
                document.getElementById("inversion-investigacion2").innerText = inversionInvestigacion.value;
            }
            else {
                if (document.getElementById("inversion-investigacion3").innerText === "") {
                    document.getElementById("inversion-investigacion3").innerText = inversionInvestigacion.value;
                    document.getElementById("inversionEnInvestigacion").style.display = "none";
                    document.getElementById("inversionEnInvestigacionTD").style.display = "none";
                }
            }
        }
        var inversionActivos = document.getElementById("inversionEnActivos");
        if (document.getElementById("inversion-activos1").innerText === "") {
            document.getElementById("inversion-activos1").innerText = inversionActivos.value;
        }
        else {
            if (document.getElementById("inversion-activos2").innerText === "") {
                document.getElementById("inversion-activos2").innerText = inversionActivos.value;
            }
            else {
                if (document.getElementById("inversion-activos3").innerText === "") {
                    document.getElementById("inversion-activos3").innerText = inversionActivos.value;
                    document.getElementById("inversionEnActivos").style.display = "none";
                    document.getElementById("inversionEnActivosTD").style.display = "none";
                }
            }
        }
        this.bimestres.push(this.bimestreActual);
        this.nombreBimestre = "B-" + this.bimestres.length;
        if (document.getElementById("numero-bimestre1").innerText === "") {
            document.getElementById("numero-bimestre1").innerText = this.nombreBimestre;
        }
        else {
            if (document.getElementById("numero-bimestre2").innerText === "") {
                document.getElementById("numero-bimestre2").innerText = this.nombreBimestre;
            }
            else {
                if (document.getElementById("numero-bimestre3").innerText === "") {
                    document.getElementById("numero-bimestre3").innerText = this.nombreBimestre;
                }
            }
        }
        this.nombreBimestre = "B-" + (this.bimestres.length + 1);
        document.getElementById("numero-bimestre-siguiente").innerText = this.nombreBimestre;
        this.numeroBimestre = this.numeroBimestre + 1;
        this.bimestreActual.numero = this.numeroBimestre;
        this.bimestreActual.jugador = this.nombreEmpresa;
        this.bimestreActual.codigo = this.codigo;
        var json = JSON.stringify(this.bimestreActual);
        var params = 'json' + json;
        console.log(json);
        // this.http.emit("bimestre", this.bimestreActual, (response) => {
        //   if (response.message && response.message == "ok")
        //     this.cargarDatosSocket();
        //   else {
        //     alert("error")
        //   }
        // })
        // this.http.post('http://localhost:8080/bimestre', json).subscribe(
        //   (response: any) => {
        //     if (response.status == 201) {
        //       console.log('ok');
        //       this.cargarDatosSocket();
        //     }
        //     else {
        //       console.log(response);
        //     }
        //   });
        // this.actualizaProduccionIndustriaBimestres();
    };
    TablaDeDecisionComponent.prototype.cargarDatosSocket = function () {
        console.log("cargarDatosSocket");
        // let players = this.http.getPlayers()
        // if (players)
        //   for (let player of players) {
        //     let tmp_player = new VisionGeneral();
        //     tmp_player.nombreEmpresa = player
        //     this.visionGeneral.push(tmp_player);
        //   }
        // .emit("visionGeneral", { codigo: this.codigo }, (response) => {
        //   console.log(response);
        //   if (response.players) {
        //     this.visionGeneral = []
        //     for (let player of response.players) {
        //       let tmp_player = new VisionGeneral();
        //       tmp_player.nombreEmpresa = player
        //       this.visionGeneral.push(tmp_player);
        //     }
        //   }
        //   console.log(this.visionGeneral)
        // })
    };
    TablaDeDecisionComponent.prototype.cargarDatos = function () {
        var _this = this;
        this.http.get('http://localhost:8080/estadoResultadosEmpresa/' + this.nombreEmpresa).subscribe(function (response) {
            console.log(response);
            _this.estadoResultados = response;
        });
        this.http.get('http://localhost:8080/balanceGeneral/BG' + this.nombreEmpresa + '' + this.numeroBimestre.toString() + this.codigo).subscribe(function (response) {
            console.log(response);
            _this.balanceGeneral = response;
        });
        this.http.get('http://localhost:8080/ventas/V' + this.nombreEmpresa + '' + this.numeroBimestre.toString() + this.codigo).subscribe(function (response) {
            console.log(response);
            _this.ventas = response;
        });
        this.http.get('http://localhost:8080/costosProduccion/CP' + this.nombreEmpresa + '' + this.numeroBimestre.toString() + this.codigo).subscribe(function (response) {
            console.log(response);
            _this.costoProduccion = response;
        });
        this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(function (response) {
            console.log(response);
            _this.visionGeneral = response;
        });
        this.http.get('http://localhost:8080/produccion/PR' + this.nombreEmpresa + '' + this.codigo).subscribe(function (response) {
            console.log(response);
            _this.produccion = response;
        });
        this.http.get('http://localhost:8080/ventasIndustria/VI' + this.nombreEmpresa + '' + this.codigo).subscribe(function (response) {
            console.log(response);
            _this.ventasIndustria = response;
        });
    };
    TablaDeDecisionComponent.prototype.informacion = function () {
        this.tap_position = 0;
        this.actualizarActivo();
        this.bloquear();
        // document.getElementById("decisiones").style.display = "none";
        // document.getElementById("tabla-analisis-industria").style.display = "none";
        // document.getElementById("informe").style.display = "none";
        // document.getElementById("analisis").style.display = "none";
        // document.getElementById("informacion-compania").style.display = "block";
        // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";
        // document.getElementById("header").style.backgroundColor = "rgb(8, 25, 43)";
        // document.getElementById("icono").style.backgroundColor = "rgb(8, 25, 43)";
        // /*document.getElementById("informacion-compania").style.backgroundColor="rgb(8, 25, 43)";*/
        // document.getElementById("historiaID").style.display = "block";
        // document.getElementById("mision-visionID").style.display = "none";
        // document.getElementById("nuestro-productoID").style.display = "none";
        // document.getElementById("organigramaID").style.display = "none";
        // document.getElementById("objetivosID").style.display = "none";
        // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(8, 25, 43)";
        // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("info-informacionCompañia").style.display = "block";
        // document.getElementById("info-decisiones").style.display = "none";
        // document.getElementById("info-analisisIndustria").style.display = "none";
        // document.getElementById("info-informeCompañia").style.display = "none";
        // document.getElementById("info-analisis").style.display = "none";
    };
    TablaDeDecisionComponent.prototype.decision = function () {
        this.tap_position = 1;
        // document.getElementById("decisiones").style.display = "block";
        // document.getElementById("tabla-analisis-industria").style.display = "none";
        // document.getElementById("informe").style.display = "none";
        // document.getElementById("analisis").style.display = "none";
        // document.getElementById("informacion-compania").style.display = "none";
        // document.getElementById("titulo").innerText = "MIS DECISIONES";
        // document.getElementById("header").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("icono").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("info-informacionCompañia").style.display = "none";
        // document.getElementById("info-decisiones").style.display = "block";
        // document.getElementById("info-analisisIndustria").style.display = "none";
        // document.getElementById("info-informeCompañia").style.display = "none";
        // document.getElementById("info-analisis").style.display = "none";
        this.actualizarActivo();
        this.bloquear();
    };
    TablaDeDecisionComponent.prototype.tanalisis = function () {
        var _this = this;
        this.tap_position = 2;
        this.http.game.getVisionGeneral(this.numeroBimestre, function (response) {
            console.log("getVisionGeneral front", response);
            if (response) {
                _this.visionGeneral = response.visionGeneral;
                console.log("existeGanadorPorcentajeMercado ==>", _this.existeGanadorPorcentajeMercado);
                _this.existeGanadorPorcentajeMercado = response.existeGanadorPorcentajeMercado;
                console.log("existeGanadorPorcentajeMercado ==>", _this.existeGanadorPorcentajeMercado);
                _this.bloquear();
            }
        });
        this.http.game.getProduccion(this.numeroBimestre, function (response) {
            console.log("getProduccion front", response);
            if (response)
                _this.produccionIndustria = response;
        });
        this.http.game.getVentasIndustria(this.numeroBimestre, function (response) {
            console.log("getVentasIndustria front", response);
            if (response)
                _this.ventasIndustria = response;
        });
        this.actualizarActivo();
        this.bloquear();
        // document.getElementById("decisiones").style.display = "none";
        // document.getElementById("tabla-analisis-industria").style.display = "block";
        // document.getElementById("informe").style.display = "none";
        // document.getElementById("analisis").style.display = "none";
        // document.getElementById("informacion-compania").style.display = "none";
        // document.getElementById("titulo").innerText = "ANALISIS DE LA INDUSTRIA";
        // document.getElementById("header").style.backgroundColor = "rgb(0, 139, 208)";
        // document.getElementById("icono").style.backgroundColor = "rgb(0, 139, 208)";
        // /*document.getElementById("tabla-analisis-industria").style.backgroundColor="rgb(0, 139, 208)";*/
        // document.getElementById("VisionGeneralID").style.display = "block";
        // document.getElementById("ProduccionTablaAnalisisID").style.display = "none";
        // document.getElementById("VentasTablaAnalisisID").style.display = "none";
        // document.getElementById("PorcentajeMercado").style.display = "none";
        // document.getElementById("boton-VisionGeneralID").style.backgroundColor = "rgb(0, 139, 208)";
        // document.getElementById("boton-ProduccionTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-VentasTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-PorcentajeMercadoID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("info-informacionCompañia").style.display = "none";
        // document.getElementById("info-decisiones").style.display = "none";
        // document.getElementById("info-analisisIndustria").style.display = "block";
        // document.getElementById("info-informeCompañia").style.display = "none";
        // document.getElementById("info-analisis").style.display = "none";
    };
    TablaDeDecisionComponent.prototype.informe = function () {
        var _this = this;
        this.tap_position = 3;
        this.http.game.getEstadoResultados(this.numeroBimestre, function (response) {
            console.log("getEstadoResultados front", response);
            if (response) {
                _this.estadoResultados = response.estadoResultados;
                _this.unicaValorPositivo = response.unicaValorPositivo;
                console.log("estadoResultados front", _this.estadoResultados);
                console.log("unicaValorPositivo front", _this.unicaValorPositivo);
                _this.capitalPeriodoAnterior = _this.estadoResultados[_this.estadoResultados.length - 1].utilidadNeta;
                _this.bloquear();
            }
        });
        this.bloquear();
        this.http.game.getBalanceGeneral(this.numeroBimestre, function (response) {
            console.log("getBalanceGeneral front", response);
            if (response)
                _this.balanceGeneral = response;
        });
        this.http.game.getVentas(this.numeroBimestre, function (response) {
            console.log("getVentas front", response);
            if (response) {
                _this.ventas = response;
                _this.actualizarActivo();
                _this.bloquear();
            }
        });
        this.bloquear();
        this.http.game.getCostosProduccion(this.numeroBimestre, function (response) {
            console.log("getCostosProduccion front", response);
            if (response)
                _this.costoProduccion = response;
        });
        this.actualizarActivo();
        this.bloquear();
        // document.getElementById("decisiones").style.display = "none";
        // document.getElementById("tabla-analisis-industria").style.display = "none";
        // document.getElementById("informe").style.display = "block";
        // document.getElementById("analisis").style.display = "none";
        // document.getElementById("informacion-compania").style.display = "none";
        // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";
        // document.getElementById("EstadoDeResultadosID").style.display = "block";
        // document.getElementById("BalanceGeneralID").style.display = "none";
        // document.getElementById("VentasID").style.display = "none";
        // document.getElementById("ProduccionID").style.display = "none";
        // document.getElementById("CompaniaID").style.display = "none";
        // document.getElementById("header").style.backgroundColor = "rgb(0, 197, 245)";
        // document.getElementById("icono").style.backgroundColor = "rgb(0, 197, 245)";
        // //document.getElementById("informe").style.backgroundColor="rgb(0, 197, 245)";
        // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(0, 197, 245)";
        // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("info-informacionCompañia").style.display = "none";
        // document.getElementById("info-decisiones").style.display = "none";
        // document.getElementById("info-analisisIndustria").style.display = "none";
        // document.getElementById("info-informeCompañia").style.display = "block";
        // document.getElementById("info-analisis").style.display = "none";
    };
    TablaDeDecisionComponent.prototype.analisis = function () {
        var _this = this;
        this.tap_position = 4;
        this.LineChart2 = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('lineChart2', {
            type: 'line',
            data: {
                labels: ["Bimestre inicial"],
                datasets: [{
                        label: 'Produccion de la industria',
                        data: [3000],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "green",
                        backgroundColor: "green",
                        borderWidth: 1
                    },
                    {
                        label: 'Ventas de la industria (unidades)',
                        data: [3000],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "red",
                        backgroundColor: "red",
                        borderWidth: 1
                    }]
            },
            options: {
                title: {
                    text: "",
                    display: true
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                callback: function (valor, index, valores) {
                                    return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                                }
                            }
                        }]
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                        }
                    }
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            }
        });
        //produccion vs ventas //costo vs precio
        this.http.game.getAllProduccion(function (response) {
            console.log("getAllProduccion front", response);
            _this.produccionIndustriaBimestres = response;
            for (var i = 0; i < _this.produccionIndustriaBimestres.length; i++) {
                console.log("produccionIndustriaBimestres ==> ", _this.produccionIndustriaBimestres[i]);
                //this.LineChart2.data.labels.push("Bimestre "+this.produccionIndustriaBimestres[i].numero);
                if (_this.produccionIndustriaBimestres[i])
                    _this.LineChart2.data.datasets[0].data.push(_this.produccionIndustriaBimestres[i].produccionIndustriaValorActual);
                _this.LineChart2.update();
            }
        });
        //produccion vs ventas
        this.http.game.getAllVentasIndustria(function (response) {
            console.log("getAllVentasIndustria front", response);
            _this.ventasIndustriaBimestres = response;
            for (var i = 0; i < _this.numeroBimestre; i++) {
                _this.LineChart2.data.labels.push("Bimestre " + _this.ventasIndustriaBimestres[i].numero);
                _this.LineChart2.data.datasets[1].data.push(_this.ventasIndustriaBimestres[i].ventasIndustriaUnidadesActual);
                _this.LineChart2.update();
            }
        });
        //costo vs precio
        this.http.game.getPromedioPrecioUnitarios(function (response) {
            console.log("getPromedioPrecioUnitarios  front", response);
            _this.promedioPrecioUnitarios = response;
        });
        //capacidad vs produccion
        this.http.game.getSumatoriaCapacidadProduccion(function (response) {
            console.log("getSumatoriaCapacidadProduccion  front", response);
            _this.sumatoriaCapacidadProduccion = response;
        });
        this.http.game.getProduccionTotalIndustriaBimestres(this.numeroBimestre, function (response) {
            console.log("getProduccionTotalIndustriaBimestres front", response);
            if (response)
                _this.produccionTotalIndustriaBimestres = response;
        });
        //compania vs competencia
        this.http.game.getPromedioUtilidadNeta(this.numeroBimestre, function (response) {
            console.log("getPromedioUtilidadNeta front", response);
            _this.promedioERUtilidadNeta = response;
        });
        this.http.game.getEstadoResultados(this.numeroBimestre, function (response) {
            console.log("getEstadoResultados front", response);
            if (response) {
                _this.estadoResultados = response.estadoResultados;
                _this.bloquear();
            }
        });
        this.actualizarActivo();
        this.bloquear();
        // document.getElementById("decisiones").style.display = "none";
        // document.getElementById("tabla-analisis-industria").style.display = "none";
        // document.getElementById("informe").style.display = "none";
        // document.getElementById("analisis").style.display = "block";
        // document.getElementById("informacion-compania").style.display = "none";
        // document.getElementById("titulo").innerText = "ANALISIS";
        // document.getElementById("produccionvsventasID").style.display = "block";
        // document.getElementById("costovsprecioID").style.display = "none";
        // document.getElementById("capacidadvsproduccionID").style.display = "none";
        // document.getElementById("companiavscompetenciaID").style.display = "none";
        // document.getElementById("consejosID").style.display = "none";
        // document.getElementById("header").style.backgroundColor = "rgb(0, 168, 233)";
        // document.getElementById("icono").style.backgroundColor = "rgb(0, 168, 233)";
        // /*document.getElementById("analisis").style.backgroundColor="rgb(0, 168, 233)";*/
        // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(0, 168, 233)";
        // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("info-informacionCompañia").style.display = "none";
        // document.getElementById("info-decisiones").style.display = "none";
        // document.getElementById("info-analisisIndustria").style.display = "none";
        // document.getElementById("info-informeCompañia").style.display = "none";
        // document.getElementById("info-analisis").style.display = "block";
        //this.produccionvsventas();
    };
    TablaDeDecisionComponent.prototype.historia = function () {
        this.section_tap_1 = 0;
        // document.getElementById("historiaID").style.display = "block";
        // document.getElementById("mision-visionID").style.display = "none";
        // document.getElementById("nuestro-productoID").style.display = "none";
        // document.getElementById("organigramaID").style.display = "none";
        // document.getElementById("objetivosID").style.display = "none";
        // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";
        // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(8, 25, 43)";
        // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.misionVision = function () {
        this.section_tap_1 = 1;
        // document.getElementById("historiaID").style.display = "none";
        // document.getElementById("mision-visionID").style.display = "block";
        // document.getElementById("nuestro-productoID").style.display = "none";
        // document.getElementById("organigramaID").style.display = "none";
        // document.getElementById("objetivosID").style.display = "none";
        // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";
        // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(8, 25, 43)";
        // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.nuestroProducto = function () {
        this.section_tap_1 = 2;
        // document.getElementById("historiaID").style.display = "none";
        // document.getElementById("mision-visionID").style.display = "none";
        // document.getElementById("nuestro-productoID").style.display = "block";
        // document.getElementById("organigramaID").style.display = "none";
        // document.getElementById("objetivosID").style.display = "none";
        // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";
        // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(8, 25, 43)";
        // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.organigrama = function () {
        this.section_tap_1 = 3;
        // document.getElementById("historiaID").style.display = "none";
        // document.getElementById("mision-visionID").style.display = "none";
        // document.getElementById("nuestro-productoID").style.display = "none";
        // document.getElementById("organigramaID").style.display = "block";
        // document.getElementById("objetivosID").style.display = "none";
        // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";
        // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(8, 25, 43)";
        // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.objetivos = function () {
        this.section_tap_1 = 4;
        // document.getElementById("historiaID").style.display = "none";
        // document.getElementById("mision-visionID").style.display = "none";
        // document.getElementById("nuestro-productoID").style.display = "none";
        // document.getElementById("organigramaID").style.display = "none";
        // document.getElementById("objetivosID").style.display = "block";
        // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";
        // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(8, 25, 43)";
    };
    TablaDeDecisionComponent.prototype.maquinaria = function () {
        this.section_tap_1 = 5;
        // document.getElementById("historiaID").style.display = "none";
        // document.getElementById("mision-visionID").style.display = "none";
        // document.getElementById("nuestro-productoID").style.display = "none";
        // document.getElementById("organigramaID").style.display = "none";
        // document.getElementById("objetivosID").style.display = "block";
        // document.getElementById("titulo").innerText = "INFORMACIÓN DE LA COMPAÑIA";
        // document.getElementById("boton-historiaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-misionvisionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-nuestroproductoID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-organigramaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-objetivosID").style.backgroundColor = "rgb(8, 25, 43)";
    };
    TablaDeDecisionComponent.prototype.produccionvsventas = function () {
        this.section_tap_4 = 0;
        // document.getElementById("produccionvsventasID").style.display = "block";
        // document.getElementById("costovsprecioID").style.display = "none";
        // document.getElementById("capacidadvsproduccionID").style.display = "none";
        // document.getElementById("companiavscompetenciaID").style.display = "none";
        // document.getElementById("consejosID").style.display = "none";
        // document.getElementById("titulo").innerText = "ANALISIS";
        // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(0, 168, 233)";
        // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgbrgb(24, 76, 133)";
        // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(24, 76, 133)";
        //Line chart2:
        this.LineChart2 = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('lineChart2', {
            type: 'line',
            data: {
                labels: ["Bimestre inicial"],
                datasets: [{
                        label: 'Produccion de la industria',
                        data: [3000],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "green",
                        backgroundColor: "green",
                        borderWidth: 1
                    },
                    {
                        label: 'Ventas de la industria (unidades)',
                        data: [3000],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "red",
                        backgroundColor: "red",
                        borderWidth: 1
                    }]
            },
            options: {
                title: {
                    text: "",
                    display: true
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                callback: function (valor, index, valores) {
                                    return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                                }
                            }
                        }]
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            }
        });
        for (var i = 0; i < this.produccionIndustriaBimestres.length; i++) {
            console.log("produccionIndustriaBimestres ==> ", this.produccionIndustriaBimestres[i]);
            //this.LineChart2.data.labels.push("Bimestre "+this.produccionIndustriaBimestres[i].numero);
            if (this.produccionIndustriaBimestres[i])
                this.LineChart2.data.datasets[0].data.push(Math.round(this.produccionIndustriaBimestres[i].produccionIndustriaValorActual));
            this.LineChart2.update();
        }
        for (var i = 0; i < this.numeroBimestre; i++) {
            this.LineChart2.data.labels.push("Bimestre " + this.ventasIndustriaBimestres[i].numero);
            this.LineChart2.data.datasets[1].data.push(Math.round(this.ventasIndustriaBimestres[i].ventasIndustriaUnidadesActual));
            this.LineChart2.update();
        }
    };
    TablaDeDecisionComponent.prototype.costovsprecio = function () {
        this.section_tap_4 = 1;
        /*this.http.get('http://localhost:8080/precioUnitarioBimestres/' + this.codigo).subscribe(
          (response: any) => {
            console.log(this.codigo);
            console.log(response);
            this.promedioPrecioUnitarios = response;
    
          });*/
        // document.getElementById("produccionvsventasID").style.display = "none";
        // document.getElementById("costovsprecioID").style.display = "block";
        // document.getElementById("capacidadvsproduccionID").style.display = "none";
        // document.getElementById("companiavscompetenciaID").style.display = "none";
        // document.getElementById("consejosID").style.display = "none";
        // document.getElementById("titulo").innerText = "ANALISIS";
        // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(0, 168, 233)";
        // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(24, 76, 133)";
        //Line chart3:
        this.LineChart3 = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('lineChart3', {
            type: 'line',
            data: {
                labels: ["Bimestre inicial"],
                datasets: [{
                        label: 'Costo medio de produccion (unitario)',
                        data: [101.283],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "green",
                        backgroundColor: "green",
                        borderWidth: 1
                    }, {
                        label: 'Precio unitario (promedio)',
                        data: [150],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "red",
                        backgroundColor: "red",
                        borderWidth: 1
                    }]
            },
            options: {
                title: {
                    text: "",
                    display: true
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                callback: function (valor, index, valores) {
                                    return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                                }
                            }
                        }]
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                        }
                    }
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            }
        });
        for (var i = 0; i < this.numeroBimestre; i++) {
            this.LineChart3.data.datasets[1].data.push(Math.round(this.promedioPrecioUnitarios[i]));
            this.LineChart3.data.labels.push("Bimestre " + (i + 1));
            this.LineChart3.update();
        }
        for (var i = 0; i < this.numeroBimestre; i++) {
            //this.LineChart3.data.labels.push("Bimestre "+this.produccionIndustriaBimestres[i].numero);
            if (this.produccionIndustriaBimestres[i].costeMedioUnitarioActual != 0) {
                this.LineChart3.data.datasets[0].data.push(Math.round(this.produccionIndustriaBimestres[i].costeMedioUnitarioActual));
                this.LineChart3.update();
            }
        }
    };
    TablaDeDecisionComponent.prototype.capacidadvsproduccion = function () {
        this.section_tap_4 = 2;
        /*this.http.get('http://localhost:8080/produccionBimestres/' + this.codigo).subscribe(
          (response: any) => {
            console.log(this.codigo);
            console.log(response);
            this.sumatoriaCapacidadProduccion = response;
          });*/
        // document.getElementById("produccionvsventasID").style.display = "none";
        // document.getElementById("costovsprecioID").style.display = "none";
        // document.getElementById("capacidadvsproduccionID").style.display = "block";
        // document.getElementById("companiavscompetenciaID").style.display = "none";
        // document.getElementById("consejosID").style.display = "none";
        // document.getElementById("titulo").innerText = "ANALISIS";
        // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(0, 168, 233)";
        // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(24, 76, 133)";
        //Line chart4:
        this.LineChart4 = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('lineChart4', {
            type: 'line',
            data: {
                labels: ["Bimestre inicial"],
                datasets: [{
                        label: 'Capacidad de producción',
                        data: [],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "green",
                        backgroundColor: "green",
                        borderWidth: 1
                    }, {
                        label: 'Produccion de la industria',
                        data: [3000],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "red",
                        backgroundColor: "red",
                        borderWidth: 1
                    }]
            },
            options: {
                title: {
                    text: "",
                    display: true
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                callback: function (valor, index, valores) {
                                    return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                                }
                            }
                        }]
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                        }
                    }
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            }
        });
        for (var i = 0; i <= this.numeroBimestre; i++) {
            this.LineChart4.data.datasets[0].data.push(Math.round(this.sumatoriaCapacidadProduccion[i]));
            this.LineChart4.update();
        }
        for (var i = 0; i < this.numeroBimestre; i++) {
            this.LineChart4.data.datasets[1].data.push(Math.round(this.produccionTotalIndustriaBimestres[i]));
            this.LineChart4.data.labels.push("Bimestre " + (i + 1));
            this.LineChart4.update();
        }
    };
    TablaDeDecisionComponent.prototype.companiavscompetencia = function () {
        this.section_tap_4 = 3;
        /*this.http.get('http://localhost:8080/utilidadNetaBimestres/' + this.codigo + '/' + this.nombreEmpresa).subscribe(
          (response: any) => {
            console.log(this.codigo);
            console.log(response);
            this.promedioERUtilidadNeta = response;
          });
        */
        // document.getElementById("produccionvsventasID").style.display = "none";
        // document.getElementById("costovsprecioID").style.display = "none";
        // document.getElementById("capacidadvsproduccionID").style.display = "none";
        // document.getElementById("companiavscompetenciaID").style.display = "block";
        // document.getElementById("consejosID").style.display = "none";
        // document.getElementById("titulo").innerText = "ANALISIS";
        // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgb(0, 168, 233)";
        // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(24, 76, 133)";
        //Line chart5:
        this.LineChart5 = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('lineChart5', {
            type: 'line',
            data: {
                labels: ["Bimestre inicial"],
                datasets: [{
                        label: 'Utilidad de la compañia',
                        data: [5930],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "green",
                        backgroundColor: "green",
                        borderWidth: 1
                    }, {
                        label: 'Utilidad promedio de la industria',
                        data: [5930],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "red",
                        backgroundColor: "red",
                        borderWidth: 1
                    }]
            },
            options: {
                title: {
                    text: "",
                    display: true
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                callback: function (valor, index, valores) {
                                    return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                                }
                            }
                        }]
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                        }
                    }
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                }
            }
        });
        for (var i = 0; i < this.numeroBimestre; i++) {
            this.LineChart5.data.datasets[1].data.push(Math.round(this.promedioERUtilidadNeta[i]));
            this.LineChart5.data.labels.push("Bimestre " + (i + 1));
            this.LineChart5.update();
        }
        for (var i = 0; i < this.numeroBimestre; i++) {
            this.LineChart5.data.datasets[0].data.push(Math.round(this.estadoResultados[i].utilidadNeta));
            //this.LineChart5.data.labels.push("Bimestre "+(i+1));
            this.LineChart5.update();
        }
    };
    TablaDeDecisionComponent.prototype.consejos = function () {
        this.section_tap_4 = 4;
        /*this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(
          (response: any) => {
            console.log(response);
            this.visionGeneral = response;
          });*/
        // document.getElementById("produccionvsventasID").style.display = "none";
        // document.getElementById("costovsprecioID").style.display = "none";
        // document.getElementById("capacidadvsproduccionID").style.display = "none";
        // document.getElementById("companiavscompetenciaID").style.display = "none";
        // document.getElementById("consejosID").style.display = "block";
        // document.getElementById("titulo").innerText = "ANALISIS";
        // document.getElementById("boton-produccionvsventasID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-costovsprecioID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-capacidadvsproduccionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-companiavscompetenciaID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-consejosID").style.backgroundColor = "rgb(0, 168, 233)";
    };
    TablaDeDecisionComponent.prototype.EstadoDeResultados = function () {
        this.section_tap_3 = 0;
        // document.getElementById("EstadoDeResultadosID").style.display = "block";
        // document.getElementById("BalanceGeneralID").style.display = "none";
        // document.getElementById("VentasID").style.display = "none";
        // document.getElementById("ProduccionID").style.display = "none";
        // document.getElementById("CompaniaID").style.display = "none";
        // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";
        // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(0, 197, 245)";
        // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.BalanceGeneral = function () {
        this.section_tap_3 = 1;
        // document.getElementById("EstadoDeResultadosID").style.display = "none";
        // document.getElementById("BalanceGeneralID").style.display = "block";
        // document.getElementById("VentasID").style.display = "none";
        // document.getElementById("ProduccionID").style.display = "none";
        // document.getElementById("CompaniaID").style.display = "none";
        // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";
        // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(0, 197, 245)";
        // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.Ventas = function () {
        this.section_tap_3 = 2;
        // document.getElementById("EstadoDeResultadosID").style.display = "none";
        // document.getElementById("BalanceGeneralID").style.display = "none";
        // document.getElementById("VentasID").style.display = "block";
        // document.getElementById("ProduccionID").style.display = "none";
        // document.getElementById("CompaniaID").style.display = "none";
        // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";
        // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(0, 197, 245)";
        // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.Produccion = function () {
        this.section_tap_3 = 3;
        // document.getElementById("EstadoDeResultadosID").style.display = "none";
        // document.getElementById("BalanceGeneralID").style.display = "none";
        // document.getElementById("VentasID").style.display = "none";
        // document.getElementById("ProduccionID").style.display = "block";
        // document.getElementById("CompaniaID").style.display = "none";
        // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";
        // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(0, 197, 245)";
        // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.Compania = function () {
        this.section_tap_3 = 4;
        // document.getElementById("EstadoDeResultadosID").style.display = "none";
        // document.getElementById("BalanceGeneralID").style.display = "none";
        // document.getElementById("VentasID").style.display = "none";
        // document.getElementById("ProduccionID").style.display = "none";
        // document.getElementById("CompaniaID").style.display = "block";
        // document.getElementById("titulo").innerText = "INFORMES DE LA COMPAÑIA";
        // document.getElementById("boton-EstadoDeResultadosID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-BalanceGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-VentasID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-ProduccionID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-CompaniaID").style.backgroundColor = "rgb(0, 197, 245)";
        //Line chart:
        this.LineChart = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('lineChart', {
            type: 'line',
            data: {
                labels: ["Bimestre inicial"],
                datasets: [{
                        label: 'Utilidad neta por bimestre',
                        data: [5930],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "red",
                        backgroundColor: "red",
                        borderWidth: 1
                    }]
            },
            options: {
                title: {
                    text: "Gráfica Utilidad Neta",
                    display: true
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                        }
                    } // end callbacks:
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                callback: function (value, index, values) {
                                    if (parseInt(value) >= 1000) {
                                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                                    }
                                    else {
                                        return value;
                                    }
                                }
                            }
                        }]
                }
            }
        });
        for (var i = 0; i < this.estadoResultados.length; i++) {
            this.LineChart.data.datasets[0].data.push(this.estadoResultados[i].utilidadNeta);
            this.LineChart.data.labels.push("Bimestre " + (i + 1));
            this.LineChart.update();
        }
    };
    TablaDeDecisionComponent.prototype.VisionGeneral = function () {
        this.section_tap_2 = 0;
        // let players_tmp = this.http.getPlayers()
        // if (players_tmp)
        //   for (let player of players_tmp) {
        //     let tmp_player = new VisionGeneral();
        //     tmp_player.nombreEmpresa = player
        //     this.visionGeneral.push(tmp_player);
        //   }
        // this.http.emit("visionGeneral", { codigo: this.codigo }, (response) => {
        //   console.log(response);
        //   if (response.players) {
        //     this.visionGeneral = []
        //     for (let player of response.players) {
        //       let tmp_player = new VisionGeneral();
        //       tmp_player.nombreEmpresa = player
        //       this.visionGeneral.push(tmp_player);
        //     }
        //   }
        //   console.log(this.visionGeneral)
        // })
        //cargar visionGeneral
        // this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(
        //   (response: any) => {
        //     console.log(response);
        //     this.visionGeneral = response;
        //   });
        // document.getElementById("VisionGeneralID").style.display = "block";
        // document.getElementById("ProduccionTablaAnalisisID").style.display = "none";
        // document.getElementById("VentasTablaAnalisisID").style.display = "none";
        // document.getElementById("PorcentajeMercado").style.display = "none";
        // document.getElementById("titulo").innerText = "ANALISIS DE LA INDUSTRIA";
        // document.getElementById("boton-VisionGeneralID").style.backgroundColor = "rgb(0, 139, 208)";
        // document.getElementById("boton-ProduccionTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-VentasTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-PorcentajeMercadoID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.ProduccionTablaAnalisis = function () {
        this.section_tap_2 = 1;
        // document.getElementById("VisionGeneralID").style.display = "none";
        // document.getElementById("ProduccionTablaAnalisisID").style.display = "block";
        // document.getElementById("VentasTablaAnalisisID").style.display = "none";
        // document.getElementById("PorcentajeMercado").style.display = "none";
        // document.getElementById("titulo").innerText = "ANALISIS DE LA INDUSTRIA";
        // document.getElementById("boton-VisionGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-ProduccionTablaAnalisisID").style.backgroundColor = "rgb(0, 139, 208)";
        // document.getElementById("boton-VentasTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-PorcentajeMercadoID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.VentasTablaAnalisis = function () {
        this.section_tap_2 = 2;
        // document.getElementById("VisionGeneralID").style.display = "none";
        // document.getElementById("ProduccionTablaAnalisisID").style.display = "none";
        // document.getElementById("VentasTablaAnalisisID").style.display = "block";
        // document.getElementById("PorcentajeMercado").style.display = "none";
        // document.getElementById("titulo").innerText = "ANALISIS DE LA INDUSTRIA";
        // document.getElementById("boton-VisionGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-ProduccionTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-VentasTablaAnalisisID").style.backgroundColor = "rgb(0, 139, 208)";
        // document.getElementById("boton-PorcentajeMercadoID").style.backgroundColor = "rgb(24, 76, 133)";
    };
    TablaDeDecisionComponent.prototype.PorcentajeMercado = function () {
        this.section_tap_2 = 3;
        //cargar visionGeneral
        //this.http.get('http://localhost:8080/visionGeneral/' + //this.codigo + '/' + this.numeroBimestre).subscribe(
        //(response: any) => {
        //console.log(response);
        //this.visionGeneral = response;
        //});
        // document.getElementById("VisionGeneralID").style.display = "none";
        // document.getElementById("ProduccionTablaAnalisisID").style.display = "none";
        // document.getElementById("VentasTablaAnalisisID").style.display = "none";
        // document.getElementById("PorcentajeMercado").style.display = "block";
        // document.getElementById("titulo").innerText = "ANALISIS DE LA INDUSTRIA";
        // document.getElementById("boton-VisionGeneralID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-ProduccionTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-VentasTablaAnalisisID").style.backgroundColor = "rgb(24, 76, 133)";
        // document.getElementById("boton-PorcentajeMercadoID").style.backgroundColor = "rgb(0, 139, 208)";
        //Pie chart
        this.myPieChart = new chart_js__WEBPACK_IMPORTED_MODULE_9__["Chart"]('pieI', {
            type: 'pie',
            data: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        borderColor: [],
                        backgroundColor: []
                    }
                ]
            },
            options: {
                title: {
                    text: "% Mercado",
                    display: true,
                    responsive: false
                },
                plugins: {
                    labels: [
                        {
                            render: 'label',
                            position: 'outside',
                            fontColor: 'black',
                            fontSize: 16
                        },
                        {
                            render: 'percentage',
                            fontColor: 'white',
                            fontSize: 16
                        }
                    ]
                }
            }
        });
        this.auxiliarMercadoSinAtender = 0;
        for (var i = 0; i < this.visionGeneral.length; i++) {
            this.myPieChart.data.labels.push(this.visionGeneral[i].jugador);
            this.myPieChart.data.datasets[0].data.push(this.visionGeneral[i].porcentajeDeMercado);
            this.auxiliarMercadoSinAtender += (this.visionGeneral[i].porcentajeDeMercado);
            if (i == 0) {
                this.myPieChart.data.datasets[0].borderColor.push("blue");
                this.myPieChart.data.datasets[0].backgroundColor.push("blue");
            }
            if (i == 1) {
                this.myPieChart.data.datasets[0].borderColor.push("green");
                this.myPieChart.data.datasets[0].backgroundColor.push("green");
            }
            if (i == 2) {
                this.myPieChart.data.datasets[0].borderColor.push("red");
                this.myPieChart.data.datasets[0].backgroundColor.push("red");
            }
            if (i == 3) {
                this.myPieChart.data.datasets[0].borderColor.push("orange");
                this.myPieChart.data.datasets[0].backgroundColor.push("orange");
            }
            if (i == 4) {
                this.myPieChart.data.datasets[0].borderColor.push("purple");
                this.myPieChart.data.datasets[0].backgroundColor.push("purple");
            }
            if (i > 4) {
                this.myPieChart.data.datasets[0].borderColor.push("yellow");
                this.myPieChart.data.datasets[0].backgroundColor.push("yellow");
            }
            this.myPieChart.update();
        }
        if (this.auxiliarMercadoSinAtender < 100 && this.auxiliarMercadoSinAtender != 0) {
            this.mercadoSinAtender = 100 - this.auxiliarMercadoSinAtender;
            this.myPieChart.data.labels.push("Mercado sin atender");
            this.myPieChart.data.datasets[0].data.push(this.mercadoSinAtender);
            this.myPieChart.data.datasets[0].borderColor.push("black");
            this.myPieChart.data.datasets[0].backgroundColor.push("black");
            this.myPieChart.update();
        }
    };
    TablaDeDecisionComponent.prototype.general = function () { };
    TablaDeDecisionComponent.prototype.ingresoDiv = function () {
        if (document.getElementById("div-ingresos").style.display === "none") {
            document.getElementById("div-ingresos").style.display = "block";
        }
        else {
            document.getElementById("div-ingresos").style.display = "none";
        }
    };
    TablaDeDecisionComponent.prototype.gastosDiv = function () {
        if (document.getElementById("div-gastos").style.display === "none") {
            document.getElementById("div-gastos").style.display = "block";
        }
        else {
            document.getElementById("div-gastos").style.display = "none";
        }
    };
    TablaDeDecisionComponent.prototype.resultadosDiv = function () {
        if (document.getElementById("div-resultados").style.display === "none") {
            document.getElementById("div-resultados").style.display = "block";
        }
        else {
            document.getElementById("div-resultados").style.display = "none";
        }
    };
    TablaDeDecisionComponent.prototype.generarConsejo1 = function () {
        if (this.ventas && this.ventas.inventarioUnidades && this.ventas.inventarioUnidades > 100)
            return true;
        else
            return false;
    };
    TablaDeDecisionComponent.prototype.generarConsejo2 = function () {
        var indice = this.estadoResultados.length;
        if (this.estadoResultados.length > 0) {
            if (this.estadoResultados[indice - 1].utilidadNeta < 5000)
                return true;
            else
                return false;
        }
        else
            return false;
    };
    TablaDeDecisionComponent.prototype.generarConsejo3 = function () {
        for (var i = 0; i < this.visionGeneral.length; i++) {
            if (this.visionGeneral[i].jugador === this.nombreEmpresa) {
                if (this.visionGeneral[i].porcentajeDeMercado < 5)
                    return true;
            }
        }
        return false;
    };
    TablaDeDecisionComponent.prototype.generarConsejo4 = function () {
        this.porcentajeDeMercadoTotal = 0;
        for (var i = 0; i < this.visionGeneral.length; i++) {
            this.porcentajeDeMercadoTotal += this.visionGeneral[i].porcentajeDeMercado;
        }
        if (this.porcentajeDeMercadoTotal <= 85)
            return true;
        else
            return false;
    };
    TablaDeDecisionComponent.prototype.fin = function () {
        var numerito = this.numeroBimestre;
        this.router.navigateByUrl('/fin');
    };
    TablaDeDecisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-tabla-de-decision',
            template: __webpack_require__(/*! ./tabla-de-decision.component.html */ "./src/app/tabla-de-decision/tabla-de-decision.component.html"),
            styles: [__webpack_require__(/*! ./tabla-de-decision.component.css */ "./src/app/tabla-de-decision/tabla-de-decision.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], TablaDeDecisionComponent);
    return TablaDeDecisionComponent;
}());



/***/ }),

/***/ "./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container {\r\n\r\n  margin: 7px;\r\n\r\n  width: 80%;\r\n  color: black;\r\n\r\n}\r\n\r\ntable {\r\n\r\n  font-family: \"arial\";\r\n  font-size: 14px;\r\n  background-color: white;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  width: 120%;\r\n\r\n\r\n\r\n}\r\n\r\n/*\r\n  thead{\r\n      background-color: #0064FF;\r\n      border-bottom: solid 5px #4c92ff;\r\n      color: white;\r\n  \r\n  }*/\r\n\r\ntr {\r\n  border-color: black;\r\n}\r\n\r\ntable,\r\nth {\r\n  border: 2px solid black;\r\n}\r\n\r\ntable td+td {\r\n  border-left: 2px solid black;\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n}\r\n\r\n#itemTipoNum {\r\n  padding-left: 4%;\r\n}\r\n\r\n#subItemTipo1 {\r\n  padding-left: 5%\r\n}\r\n\r\n#subItemTipo2 {\r\n  padding-left: 8%\r\n}\r\n\r\n/*\r\n  tr:nth-child(even){\r\n  background-color:  #ddd;\r\n  }*/\r\n\r\ntr:hover td {\r\n  background-color: #4c92ff;\r\n  color: white;\r\n}\r\n\r\nth {\r\n  background-color: rgb(24, 76, 133);\r\n  width: 35px;\r\n  height: 45px;\r\n  color: #fff;\r\n}\r\n\r\ntd {\r\n  height: 45px;\r\n  width: 28px;\r\n  text-align: center;\r\n}\r\n\r\n.td2 {\r\n  background-color: #81BEF7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n  <table id=\"success\">\r\n    <thead>\r\n      <tr>\r\n        <th>DETALLE</th>\r\n        <th>VALORES</th>\r\n        <th>% VARIACIÓN</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr>\r\n        <td>PRODUCCIÓN DE LA INDUSTRIA</td>\r\n        <td>{{produccionIndustria.produccionIndustriaValorActual | thousandPipe}}</td>\r\n        <td>{{Math.round((produccionIndustria.produccionIndustriaValorActual-produccionIndustria.produccionIndustriaValorAnterior)/produccionIndustria.produccionIndustriaValorAnterior*100)}}          %</td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <td class=\"td2\">COSTE MEDIO DE PRODUCCIÓN (TOTAL)</td>\r\n        <td class=\"td2\">{{produccionIndustria.costeMedioTotalActual | thousandPipe}}</td>\r\n        <td class=\"td2\">{{Math.round((produccionIndustria.costeMedioTotalActual-produccionIndustria.costeMedioTotalAnterior)/produccionIndustria.costeMedioTotalAnterior*100)}}  %</td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <td>COSTE MEDIO DE PRODUCCIÓN (UNITARIO)</td>\r\n        <td>{{produccionIndustria.costeMedioUnitarioActual}}</td>\r\n        <td>{{Math.round((produccionIndustria.costeMedioUnitarioActual-produccionIndustria.costeMedioUnitarioAnterior)/produccionIndustria.costeMedioUnitarioAnterior*100)}}%</td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td class=\"td2\">CAPACIDAD DE PRODUCCIÓN</td>\r\n        <td class=\"td2\">{{produccionIndustria.capacidadProduccionActual | thousandPipe }}</td>\r\n        <td class=\"td2\">{{Math.round((produccionIndustria.capacidadProduccionActual-produccionIndustria.capacidadProduccionAnterior)/produccionIndustria.capacidadProduccionAnterior*100)}}%</td>\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.ts ***!
  \**************************************************************************/
/*! exports provided: TablaProduccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaProduccionComponent", function() { return TablaProduccionComponent; });
/* harmony import */ var _models_produccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/produccion */ "./src/models/produccion.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablaProduccionComponent = /** @class */ (function () {
    function TablaProduccionComponent() {
        this.Math = Math;
    }
    TablaProduccionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _models_produccion__WEBPACK_IMPORTED_MODULE_0__["Produccion"])
    ], TablaProduccionComponent.prototype, "produccionIndustria", void 0);
    TablaProduccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla-produccion',
            template: __webpack_require__(/*! ./tabla-produccion.component.html */ "./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.html"),
            styles: [__webpack_require__(/*! ./tabla-produccion.component.css */ "./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablaProduccionComponent);
    return TablaProduccionComponent;
}());



/***/ }),

/***/ "./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container {\r\n\r\n  margin: 7px;\r\n\r\n  width: 80%;\r\n  color: black;\r\n\r\n}\r\n\r\ntable {\r\n\r\n  font-family: \"arial\";\r\n  font-size: 16px;\r\n  background-color: white;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  width: 120%;\r\n\r\n\r\n\r\n}\r\n\r\n/*\r\n  thead{\r\n      background-color: #0064FF;\r\n      border-bottom: solid 5px #4c92ff;\r\n      color: white;\r\n  \r\n  }*/\r\n\r\ntr {\r\n  border-color: black;\r\n}\r\n\r\ntable,\r\nth {\r\n  border: 2px solid black;\r\n}\r\n\r\ntable td+td {\r\n  border-left: 2px solid black;\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n}\r\n\r\n#itemTipoNum {\r\n  padding-left: 4%;\r\n}\r\n\r\n#subItemTipo1 {\r\n  padding-left: 5%\r\n}\r\n\r\n#subItemTipo2 {\r\n  padding-left: 8%\r\n}\r\n\r\n/*\r\n  tr:nth-child(even){\r\n  background-color:  #ddd;\r\n  }*/\r\n\r\ntr:hover td {\r\n  background-color: #4c92ff;\r\n  color: white;\r\n}\r\n\r\nth {\r\n  background-color: rgb(24, 76, 133);\r\n  width: 28px;\r\n  height: 45px;\r\n  color: #fff;\r\n\r\n}\r\n\r\ntd {\r\n  height: 45px;\r\n  width: 28px;\r\n  text-align: center;\r\n}\r\n\r\n.td2 {\r\n  background-color: #81BEF7\r\n}\r\n"

/***/ }),

/***/ "./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n  <table id=\"success\">\r\n    <thead>\r\n      <tr>\r\n        <th>DETALLE</th>\r\n        <th>BIMESTRE</th>\r\n        <th>% VARIACIÓN</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr>\r\n        <td>VENTAS DE LA INDUSTRIA (UNIDADES)</td>\r\n        <td>{{ventasIndustria.ventasIndustriaUnidadesActual | thousandPipe}}</td>\r\n        <td>{{Math.round((ventasIndustria.ventasIndustriaUnidadesActual-ventasIndustria.ventasIndustriaUnidadesAnterior)/ventasIndustria.ventasIndustriaUnidadesAnterior*100)}} %</td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <td class=\"td2\">VENTAS DE LA INDUSTRIA (MONETARIO)</td>\r\n        <td class=\"td2\">{{ventasIndustria.ventasIndustriaMonetarioActual | thousandPipe}}</td>\r\n        <td class=\"td2\">{{Math.round((ventasIndustria.ventasIndustriaMonetarioActual-ventasIndustria.ventasIndustriaMonetarioAnterior)/ventasIndustria.ventasIndustriaMonetarioAnterior*100)}} %</td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <td>PRECIO UNITARIO PROMEDIO</td>\r\n        <td>{{ventasIndustria.precioUnitarioPromedioActual | thousandPipe}}</td>\r\n        <td>{{Math.round((ventasIndustria.precioUnitarioPromedioActual-ventasIndustria.precioUnitarioPromedioAnterior)/ventasIndustria.precioUnitarioPromedioAnterior*100)}} %</td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td class=\"td2\">INVENTARIOS PROMEDIO</td>\r\n        <td class=\"td2\">{{ventasIndustria.inventarioPromediosActual | thousandPipe}}</td>\r\n        <td *ngIf=\"ventasIndustria.inventarioPromediosAnterior!=0\" class=\"td2\">{{Math.round((ventasIndustria.inventarioPromediosActual-ventasIndustria.inventarioPromediosAnterior)/ventasIndustria.inventarioPromediosAnterior*100)}} %</td>\r\n        <td *ngIf=\"ventasIndustria.inventarioPromediosAnterior==0\" class=\"td2\">{{ventasIndustria.inventarioPromediosActual-ventasIndustria.inventarioPromediosAnterior}}</td>\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.ts ***!
  \******************************************************************/
/*! exports provided: TablaVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaVentasComponent", function() { return TablaVentasComponent; });
/* harmony import */ var _models_ventasIndustria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/ventasIndustria */ "./src/models/ventasIndustria.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablaVentasComponent = /** @class */ (function () {
    function TablaVentasComponent() {
        this.Math = Math;
    }
    TablaVentasComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _models_ventasIndustria__WEBPACK_IMPORTED_MODULE_0__["VentasIndustria"])
    ], TablaVentasComponent.prototype, "ventasIndustria", void 0);
    TablaVentasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabla-ventas',
            template: __webpack_require__(/*! ./tabla-ventas.component.html */ "./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.html"),
            styles: [__webpack_require__(/*! ./tabla-ventas.component.css */ "./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablaVentasComponent);
    return TablaVentasComponent;
}());



/***/ }),

/***/ "./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container {\r\n\r\n  margin: 7px;\r\n\r\n  width: 80%;\r\n  color: black;\r\n\r\n}\r\n\r\ntable {\r\n\r\n  font-family: \"arial\";\r\n  font-size: 14px;\r\n  background-color: white;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  width: 120%;\r\n\r\n\r\n\r\n}\r\n\r\n/* thead{\r\n      background-color: #0064FF;\r\n      border-bottom: solid 5px #4c92ff;\r\n      color: white;\r\n  \r\n  }*/\r\n\r\ntr {\r\n  border-color: black;\r\n}\r\n\r\ntable,\r\nth {\r\n  border: 2px solid black;\r\n}\r\n\r\ntable td+td {\r\n  border-left: 2px solid black;\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n}\r\n\r\n#itemTipoNum {\r\n  padding-left: 4%;\r\n}\r\n\r\n#subItemTipo1 {\r\n  padding-left: 5%\r\n}\r\n\r\n#subItemTipo2 {\r\n  padding-left: 8%\r\n}\r\n\r\n/*\r\n  tr:nth-child(even){\r\n  background-color:  #ddd;\r\n  }*/\r\n\r\ntr:hover td {\r\n  background-color: #81BEF7;\r\n  color: white;\r\n\r\n}\r\n\r\nth {\r\n  background-color: rgb(24, 76, 133);\r\n  width: 28px;\r\n  height: 45px;\r\n  color: #fff;\r\n}\r\n\r\ntd {\r\n  height: 45px;\r\n  width: 28px;\r\n\r\n}\r\n\r\n.td2 {\r\n  background-color: #81BEF7\r\n}\r\n"

/***/ }),

/***/ "./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n  <table id=\"success\">\r\n    <thead>\r\n      <tr>\r\n        <th>COMPAÑÍA</th>\r\n        <th>VENTAS</th>\r\n        <th>UTILIDAD</th>\r\n        <th>PRECIO U.</th>\r\n        <th>% MERCADO</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <td>\r\n        <tr *ngFor=\"let visionG of visionGeneral\">{{visionG.jugador}}</tr>\r\n      </td>\r\n      <td>\r\n        <tr *ngFor=\"let visionG of visionGeneral\">{{visionG.ventas | thousandPipe}}</tr>\r\n      </td>\r\n      <td>\r\n        <tr *ngFor=\"let visionG of visionGeneral\">{{visionG.beneficio | thousandPipe}}</tr>\r\n      </td>\r\n      <td>\r\n        <tr *ngFor=\"let visionG of visionGeneral\">{{visionG.precioUnitario | thousandPipe}}</tr>\r\n      </td>\r\n      <td>\r\n        <tr *ngFor=\"let visionG of visionGeneral\">{{visionG.porcentajeDeMercado | thousandPipe}} %</tr>\r\n      </td>\r\n      <tr>\r\n        <td class=\"td2\">MERCADO DESATENDIDO</td>\r\n        <td class=\"td2\"></td>\r\n        <td class=\"td2\"></td>\r\n        <td class=\"td2\"></td>\r\n        <td class=\"td2\">{{sumatoriasTotales()}}{{mercadoDesatendido | thousandPipe}} %</td>\r\n      </tr>\r\n      <tr>\r\n        <td>{{sumatoriasTotales() | thousandPipe}}TOTALES</td>\r\n        <td>{{totalesVentas | thousandPipe}}</td>\r\n        <td>{{totalesBeneficio | thousandPipe}}</td>\r\n        <td>PROM. {{totalesPrecioUnitario | thousandPipe}}</td>\r\n        <td>{{totalesPorcentajeMercado | thousandPipe}} %</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TablaVisionGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablaVisionGeneralComponent", function() { return TablaVisionGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/http.service */ "./src/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablaVisionGeneralComponent = /** @class */ (function () {
    function TablaVisionGeneralComponent(http) {
        this.http = http;
        this.totalesVentas = 0;
        this.totalesBeneficio = 0;
        this.totalesPrecioUnitario = 0;
        this.totalesPorcentajeMercado = 0;
        this.mercadoDesatendido = 0;
    }
    TablaVisionGeneralComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.visionGeneral.length; i++) {
            this.totalesVentas += this.visionGeneral[i].ventas;
            this.totalesBeneficio += this.visionGeneral[i].beneficio;
            this.totalesPrecioUnitario += this.visionGeneral[i].precioUnitario;
            this.totalesPorcentajeMercado += this.visionGeneral[i].porcentajeDeMercado;
        }
    };
    TablaVisionGeneralComponent.prototype.sumatoriasTotales = function () {
        var auxiliarMercado = 0;
        this.totalesVentas = 0;
        this.totalesBeneficio = 0;
        this.totalesPrecioUnitario = 0;
        this.totalesPorcentajeMercado = 0;
        this.mercadoDesatendido = 0;
        for (var i = 0; i < this.visionGeneral.length; i++) {
            this.totalesVentas += this.visionGeneral[i].ventas;
            this.totalesBeneficio += this.visionGeneral[i].beneficio;
            this.totalesPrecioUnitario += this.visionGeneral[i].precioUnitario;
            this.totalesPorcentajeMercado += this.visionGeneral[i].porcentajeDeMercado;
        }
        this.totalesPrecioUnitario /= this.visionGeneral.length;
        if (this.totalesPorcentajeMercado < 100) {
            this.mercadoDesatendido = 100 - this.totalesPorcentajeMercado;
        }
        this.totalesPorcentajeMercado += this.mercadoDesatendido;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TablaVisionGeneralComponent.prototype, "visionGeneral", void 0);
    TablaVisionGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabla-vision-general',
            template: __webpack_require__(/*! ./tabla-vision-general.component.html */ "./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.html"),
            styles: [__webpack_require__(/*! ./tabla-vision-general.component.css */ "./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], TablaVisionGeneralComponent);
    return TablaVisionGeneralComponent;
}());



/***/ }),

/***/ "./src/app/tables/tabl-balance-general/tabl-balance-general.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/tables/tabl-balance-general/tabl-balance-general.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-containerBalance {\r\n\r\n  margin: 7px;\r\n  width: auto;\r\n  color: black;\r\n\r\n\r\n\r\n\r\n}\r\n\r\ntable {\r\n  font-family: \"arial\";\r\n  font-size: 14px;\r\n  background-color: white;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\nth,\r\ntd {\r\n  padding: 5px;\r\n}\r\n\r\nthead {\r\n  background-color: #0064FF;\r\n  border-bottom: solid 5px #4c92ff;\r\n  color: white;\r\n\r\n}\r\n\r\nth {\r\n\r\n  font-size: 14px;\r\n  border-style: solid solid solid solid;\r\n  text-align: center;\r\n}\r\n\r\ntable,\r\nth {\r\n  border: 2px solid black;\r\n}\r\n\r\n#primero-Izq {\r\n  border-style: solid hidden hidden solid;\r\n}\r\n\r\n#medio-Izq {\r\n  border-style: hidden hidden hidden solid;\r\n}\r\n\r\n#ultimo-Izq {\r\n  border-style: hidden hidden solid solid;\r\n}\r\n\r\n#ultimo-Izq-Final {\r\n  border-style: solid hidden solid solid;\r\n}\r\n\r\n#pintar {\r\n  background-color: rgb(0, 197, 245);\r\n  border-style: solid solid solid solid;\r\n}\r\n\r\n/*\r\ntr:nth-child(even){\r\nbackground-color:  #ddd;\r\n}\r\n/* preguntar si se queda*/\r\n\r\ntr:hover td {\r\n  background-color: #4c92ff;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tables/tabl-balance-general/tabl-balance-general.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/tables/tabl-balance-general/tabl-balance-general.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-containerBalance\">\r\n  <table id=\"success\">\r\n    <tbody>\r\n      <tr>\r\n        <th colspan=\"4\">Activo</th>\r\n        <th colspan=\"4\">Pasivo</th>\r\n\r\n      </tr>\r\n\r\n\r\n      <tr>\r\n        <td colspan=\"4\"></td>\r\n        <td id=\"primero-Izq\">Corriente</td>\r\n        <td colspan=\"2\"></td>\r\n        <td> 0</td>\r\n      </tr>\r\n\r\n      <td>Corriente</td>\r\n      <td colspan=\"2\"></td>\r\n      <td>{{balanceGeneral.corriente | thousandPipe}}</td>\r\n      <td id=\"medio-Izq\"></td>\r\n      <td>Cuenta por Cobrar</td>\r\n      <td>0</td>\r\n      <td></td>\r\n\r\n\r\n\r\n\r\n      <tr>\r\n\r\n      </tr>\r\n      <tr>\r\n        <td></td>\r\n        <td>Caja</td>\r\n        <td>{{balanceGeneral.caja | thousandPipe}}</td>\r\n        <td></td>\r\n        <td id=\"medio-Izq\">No corriente</td>\r\n        <td colspan=\"2\"></td>\r\n        <td>{{1300 | thousandPipe}}</td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <td></td>\r\n        <td>Bancos</td>\r\n        <td>{{balanceGeneral.bancos | thousandPipe}}</td>\r\n        <td></td>\r\n        <td id=\"medio-Izq\"></td>\r\n        <td>Alquiler</td>\r\n        <td>{{1300 | thousandPipe}}</td>\r\n        <td></td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td></td>\r\n        <td>Inventario</td>\r\n        <td>{{balanceGeneral.inventario | thousandPipe}}</td>\r\n        <td></td>\r\n        <td id=\"ultimo-Izq\">Total pasivo</td>\r\n        <td colspan=\"2\" id=\"ultimo\"></td>\r\n        <td>{{1300 | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td>No corriente</td>\r\n        <td colspan=\"2\"></td>\r\n        <td>{{8500 | thousandPipe}}</td>\r\n        <th colspan=\"4\">Patrimonio</th>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td></td>\r\n        <td>Herramientas</td>\r\n        <td>{{1500 | thousandPipe}}</td>\r\n        <td></td>\r\n        <td id=\"primero-Izq\">Capital</td>\r\n        <td colspan=\"2\"></td>\r\n        <td>{{balanceGeneral.capital | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td></td>\r\n        <td>Maquinaria</td>\r\n        <td>{{7000 | thousandPipe}}</td>\r\n        <td></td>\r\n        <td id=\"medio-Izq\">Utilidad del ejercicio</td>\r\n        <td colspan=\"2\"></td>\r\n        <td>{{balanceGeneral.utilidadEjercicio | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td colspan=\"4\"></td>\r\n        <td id=\"ultimo-Izq\">Total patrimonio</td>\r\n        <td colspan=\"2\"></td>\r\n        <td>{{balanceGeneral.totalPatrimonio | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n      <tr id=\"pintar\">\r\n        <td>Total activos</td>\r\n        <td></td>\r\n        <td></td>\r\n        <td>{{balanceGeneral.totalActivos | thousandPipe}}</td>\r\n        <td id=\"ultimo-Izq-Final\">Total pasivo + patrimonio</td>\r\n        <td colspan=\"2\"></td>\r\n        <td>{{balanceGeneral.totalPasivoPatrimonio | thousandPipe}}</td>\r\n\r\n      </tr>\r\n\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tables/tabl-balance-general/tabl-balance-general.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tables/tabl-balance-general/tabl-balance-general.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TablBalanceGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablBalanceGeneralComponent", function() { return TablBalanceGeneralComponent; });
/* harmony import */ var _models_balanceGeneral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/balanceGeneral */ "./src/models/balanceGeneral.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablBalanceGeneralComponent = /** @class */ (function () {
    function TablBalanceGeneralComponent() {
    }
    TablBalanceGeneralComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _models_balanceGeneral__WEBPACK_IMPORTED_MODULE_0__["BalanceGeneral"])
    ], TablBalanceGeneralComponent.prototype, "balanceGeneral", void 0);
    TablBalanceGeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabl-balance-general',
            template: __webpack_require__(/*! ./tabl-balance-general.component.html */ "./src/app/tables/tabl-balance-general/tabl-balance-general.component.html"),
            styles: [__webpack_require__(/*! ./tabl-balance-general.component.css */ "./src/app/tables/tabl-balance-general/tabl-balance-general.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablBalanceGeneralComponent);
    return TablBalanceGeneralComponent;
}());



/***/ }),

/***/ "./src/app/tables/tabl-costos/tabl-costos.component.css":
/*!**************************************************************!*\
  !*** ./src/app/tables/tabl-costos/tabl-costos.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-containerCostos {\r\n\r\n  margin: 7px;\r\n  width: auto;\r\n  color: black;\r\n\r\n\r\n\r\n\r\n}\r\n\r\ntable {\r\n  font-family: \"arial\";\r\n  font-size: 14px;\r\n  background-color: white;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n\r\n\r\n}\r\n\r\nth,\r\ntd {\r\n  padding: 5px;\r\n}\r\n\r\nthead {\r\n  background-color: #0064FF;\r\n  border-bottom: solid 5px #4c92ff;\r\n  color: white;\r\n\r\n}\r\n\r\nth {\r\n  background-color: rgb(0, 197, 245);\r\n}\r\n\r\n#subItemTipo1 {\r\n  padding-left: 10%;\r\n}\r\n\r\n/*tr:nth-child(even){\r\nbackground-color:  #ddd;\r\n}\r\n*/\r\n\r\n/*preguntar si se queda*/\r\n\r\ntr:hover td {\r\n  background-color: #4c92ff;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tables/tabl-costos/tabl-costos.component.html":
/*!***************************************************************!*\
  !*** ./src/app/tables/tabl-costos/tabl-costos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-containerCostos\">\r\n  <table>\r\n    <tbody>\r\n      <tr>\r\n        <th colspan=\"7\">MATERIA PRIMA</th>\r\n        <th>{{costosProduccion.materiaPrima | thousandPipe}}</th>\r\n      </tr>\r\n\r\n\r\n      <tr>\r\n        <td></td>\r\n        <td id=\"subItemTipo1\">Poleras basicas (50 la unidad)</td>\r\n        <td colspan=\"4\"></td>\r\n        <td>{{costosProduccion.materiaPrima | thousandPipe}}</td>\r\n        <td></td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <th colspan=\"7\">MANO DE OBRA DIRECTA</th>\r\n        <th>{{8000 | thousandPipe}}</th>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td></td>\r\n        <td id=\"subItemTipo1\">Sueldos</td>\r\n        <td colspan=\"4\"></td>\r\n        <td>{{6000 | thousandPipe}}</td>\r\n        <td></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <td></td>\r\n        <td id=\"subItemTipo1\">Beneficios sociales</td>\r\n        <td colspan=\"4\"></td>\r\n        <td>{{2000 | thousandPipe}}</td>\r\n        <td></td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <th colspan=\"7\">COSTOS INDIRECTOS</th>\r\n        <th>{{22770 | thousandPipe}}</th>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td></td>\r\n        <td id=\"subItemTipo1\">Material indirecto</td>\r\n        <td colspan=\"4\"></td>\r\n        <td>{{5000 | thousandPipe}}</td>\r\n        <td></td>\r\n\r\n      </tr>\r\n\r\n\r\n      <tr>\r\n\r\n        <td colspan=\"2\"></td>\r\n        <td> Insumos</td>\r\n        <td colspan=\"2\"></td>\r\n        <td>{{5000 | thousandPipe}}</td>\r\n        <td colspan=\"2\"></td>\r\n\r\n\r\n      </tr>\r\n\r\n\r\n      <tr>\r\n        <td></td>\r\n        <td id=\"subItemTipo1\">Mano de obra indirecto</td>\r\n        <td colspan=\"4\"></td>\r\n        <td>{{16120 | thousandPipe}}</td>\r\n        <td></td>\r\n\r\n      </tr>\r\n\r\n\r\n      <tr>\r\n        <td colspan=\"2\"></td>\r\n        <td>Sueldos</td>\r\n        <td colspan=\"2\"></td>\r\n        <td>{{12000 | thousandPipe}}</td>\r\n        <td colspan=\"2\"></td>\r\n\r\n      </tr>\r\n\r\n\r\n      <tr>\r\n\r\n        <td colspan=\"2\"></td>\r\n        <td>Beneficios sociales</td>\r\n        <td colspan=\"2\"></td>\r\n        <td>{{4120 | thousandPipe}}</td>\r\n        <td colspan=\"2\"></td>\r\n\r\n      </tr>\r\n\r\n\r\n      <tr>\r\n\r\n        <td></td>\r\n        <td id=\"subItemTipo1\">Depreciación maquinaria</td>\r\n        <td colspan=\"4\"></td>\r\n        <td>150</td>\r\n        <td></td>\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n        <td></td>\r\n        <td id=\"subItemTipo1\">Servicios</td>\r\n        <td colspan=\"4\"></td>\r\n        <td>200</td>\r\n        <td></td>\r\n\r\n\r\n      </tr>\r\n\r\n      <tr>\r\n\r\n        <td></td>\r\n        <td id=\"subItemTipo1\">Alquiler</td>\r\n        <td colspan=\"4\"></td>\r\n        <td>{{1300 | thousandPipe}}</td>\r\n        <td></td>\r\n      </tr>\r\n\r\n      <tr>\r\n        <th colspan=\"7\">COSTO TOTAL</th>\r\n        <th>{{costosProduccion.costoTotal | thousandPipe}}</th>\r\n\r\n      </tr>\r\n      <tr>\r\n        <th colspan=\"7\">COSTO UNITARIO</th>\r\n        <th>{{costosProduccion.costoUnitario}}</th>\r\n\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tables/tabl-costos/tabl-costos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/tabl-costos/tabl-costos.component.ts ***!
  \*************************************************************/
/*! exports provided: TablCostosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablCostosComponent", function() { return TablCostosComponent; });
/* harmony import */ var _models_costosProduccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/costosProduccion */ "./src/models/costosProduccion.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablCostosComponent = /** @class */ (function () {
    function TablCostosComponent() {
    }
    TablCostosComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _models_costosProduccion__WEBPACK_IMPORTED_MODULE_0__["CostosProduccion"])
    ], TablCostosComponent.prototype, "costosProduccion", void 0);
    TablCostosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabl-costos',
            template: __webpack_require__(/*! ./tabl-costos.component.html */ "./src/app/tables/tabl-costos/tabl-costos.component.html"),
            styles: [__webpack_require__(/*! ./tabl-costos.component.css */ "./src/app/tables/tabl-costos/tabl-costos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablCostosComponent);
    return TablCostosComponent;
}());



/***/ }),

/***/ "./src/app/tables/tabl-ventas/tabl-ventas.component.css":
/*!**************************************************************!*\
  !*** ./src/app/tables/tabl-ventas/tabl-ventas.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-containerVentas {\r\n\r\n  margin: 7px;\r\n  width: calc(100% - 20px);\r\n  color: black;\r\n}\r\n\r\ntable {\r\n  font-family: \"arial\";\r\n  background-color: white;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  font-size: 14px;\r\n}\r\n\r\ntable,\r\nth {\r\n  border: 2px solid black;\r\n}\r\n\r\ntable td+td {\r\n  border-left: 2px solid black;\r\n}\r\n\r\nth,\r\ntd {\r\n  padding: 5px;\r\n}\r\n\r\n/*\r\nthead{\r\n\tbackground-color: #0064FF;\r\n\tborder-bottom: solid 5px #4c92ff;\r\n\tcolor: white;\r\n\r\n}\r\n*/\r\n\r\ntr:nth-child(even) {\r\n  background-color: rgb(0, 197, 245);\r\n}\r\n\r\n/*esto no se pidio, preguntar si dejarlo*/\r\n\r\ntr:hover td {\r\n  background-color: #4c92ff;\r\n  color: white;\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tables/tabl-ventas/tabl-ventas.component.html":
/*!***************************************************************!*\
  !*** ./src/app/tables/tabl-ventas/tabl-ventas.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-containerVentas\">\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>DETALLE</th>\r\n        <th>UNIDADES</th>\r\n        <th>MONETARIO</th>\r\n\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr>\r\n        <td>PRODUCIDO</td>\r\n        <td>{{ventas.producidoUnidades | thousandPipe}}</td>\r\n        <td>{{ventas.producidoMonetario | thousandPipe}}</td>\r\n\r\n      </tr>\r\n      <tr>\r\n        <td>VENTAS REALIZADAS</td>\r\n        <td>{{ventas.ventasRealizadasUnidades | thousandPipe}}</td>\r\n        <td>{{ventas.ventasRealizadasMonetario | thousandPipe}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>INVENTARIO</td>\r\n        <td>{{ventas.inventarioUnidades | thousandPipe}}</td>\r\n        <td>{{ventas.inventarioMonetario | thousandPipe}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>PEDIDOS NO ATENDIDOS</td>\r\n        <td>{{ventas.pedidosNoAtendidosUnidades | thousandPipe}}</td>\r\n        <td>{{ventas.pedidosNoAtendidosMonetario | thousandPipe}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tables/tabl-ventas/tabl-ventas.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/tabl-ventas/tabl-ventas.component.ts ***!
  \*************************************************************/
/*! exports provided: TablVentasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablVentasComponent", function() { return TablVentasComponent; });
/* harmony import */ var _models_ventas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/ventas */ "./src/models/ventas.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TablVentasComponent = /** @class */ (function () {
    function TablVentasComponent() {
    }
    TablVentasComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _models_ventas__WEBPACK_IMPORTED_MODULE_0__["Ventas"])
    ], TablVentasComponent.prototype, "ventas", void 0);
    TablVentasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabl-ventas',
            template: __webpack_require__(/*! ./tabl-ventas.component.html */ "./src/app/tables/tabl-ventas/tabl-ventas.component.html"),
            styles: [__webpack_require__(/*! ./tabl-ventas.component.css */ "./src/app/tables/tabl-ventas/tabl-ventas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablVentasComponent);
    return TablVentasComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//export const environment = {
//  production: false
//};
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyCZZroJKr1nOBt936wigMKlGcLVup-UVEY",
        authDomain: "simulaciondenegocios-ab936.firebaseapp.com",
        databaseURL: "https://simulaciondenegocios-ab936.firebaseio.com",
        projectId: "simulaciondenegocios-ab936",
        storageBucket: "",
        messagingSenderId: "638289991781"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/models/balanceGeneral.ts":
/*!**************************************!*\
  !*** ./src/models/balanceGeneral.ts ***!
  \**************************************/
/*! exports provided: BalanceGeneral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceGeneral", function() { return BalanceGeneral; });
var BalanceGeneral = /** @class */ (function () {
    function BalanceGeneral() {
        this.caja = 32711;
        this.bancos = 14019;
        this.inventario = 0;
        this.corriente = 46730;
        this.totalActivos = 46748;
        this.capital = 7218;
        this.utilidadEjercicio = 38230;
        this.totalPatrimonio = 45448;
        this.totalPasivoPatrimonio = 46748;
    }
    return BalanceGeneral;
}());



/***/ }),

/***/ "./src/models/bimestre.ts":
/*!********************************!*\
  !*** ./src/models/bimestre.ts ***!
  \********************************/
/*! exports provided: Bimestre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bimestre", function() { return Bimestre; });
var Bimestre = /** @class */ (function () {
    function Bimestre() {
        this.precioUnitario = 150;
        this.produccion = 500;
        this.inversionEnMarketing = 3000;
        this.inversionEnInvestigacion = 1500;
        this.inversionEnActivos = 3000;
        this.numero = 0;
        this.jugador = '';
        this.codigo = '';
    }
    return Bimestre;
}());



/***/ }),

/***/ "./src/models/costosProduccion.ts":
/*!****************************************!*\
  !*** ./src/models/costosProduccion.ts ***!
  \****************************************/
/*! exports provided: CostosProduccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostosProduccion", function() { return CostosProduccion; });
var CostosProduccion = /** @class */ (function () {
    function CostosProduccion() {
        this.materiaPrima = 17500;
        //public manoDeObraDirecta:number=8000;
        //public costosIndirectos:number=22770;
        this.costoTotal = 48270;
        this.costoUnitario = 94.54;
        this.numeroBimestre = 0;
    }
    return CostosProduccion;
}());



/***/ }),

/***/ "./src/models/empresa.ts":
/*!*******************************!*\
  !*** ./src/models/empresa.ts ***!
  \*******************************/
/*! exports provided: Empresa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empresa", function() { return Empresa; });
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.numeroBimestre = 1;
        this.cantidadVendidaAnterior = 500;
    }
    return Empresa;
}());



/***/ }),

/***/ "./src/models/estadoResultados.ts":
/*!****************************************!*\
  !*** ./src/models/estadoResultados.ts ***!
  \****************************************/
/*! exports provided: EstadoResultados */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoResultados", function() { return EstadoResultados; });
var EstadoResultados = /** @class */ (function () {
    function EstadoResultados() {
        this.ingresos = 95000;
        this.ventas = 75000;
        this.otrosIngresos = 10000;
        this.capitalAnterior = 10000;
        this.costos = 48270;
        this.materiaPrima = 17500;
        this.manoObra = 8000;
        this.costosIndirectos = 22770;
        this.utilidadBruta = 46730;
        this.gastosOperativos = 8500;
        this.inversionMarketing = 3500;
        this.inversionInvestigacion = 1500;
        this.inversionActivos = 3500;
        this.utilidadNeta = 38230;
        this.jugador = '';
        this.codigo = '';
        this.numeroBimestre = 0;
    }
    return EstadoResultados;
}());



/***/ }),

/***/ "./src/models/jugador.ts":
/*!*******************************!*\
  !*** ./src/models/jugador.ts ***!
  \*******************************/
/*! exports provided: Jugador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jugador", function() { return Jugador; });
var Jugador = /** @class */ (function () {
    function Jugador() {
    }
    return Jugador;
}());



/***/ }),

/***/ "./src/models/moderador.ts":
/*!*********************************!*\
  !*** ./src/models/moderador.ts ***!
  \*********************************/
/*! exports provided: Moderador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moderador", function() { return Moderador; });
var Moderador = /** @class */ (function () {
    function Moderador() {
        this.cantidadJugadores = 5;
        this.codigo = 'ABC123';
    }
    return Moderador;
}());



/***/ }),

/***/ "./src/models/produccion.ts":
/*!**********************************!*\
  !*** ./src/models/produccion.ts ***!
  \**********************************/
/*! exports provided: Produccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produccion", function() { return Produccion; });
var Produccion = /** @class */ (function () {
    function Produccion() {
        this.capacidadProduccionActual = 850;
        this.capacidadProduccionAnterior = 0;
    }
    return Produccion;
}());



/***/ }),

/***/ "./src/models/ventas.ts":
/*!******************************!*\
  !*** ./src/models/ventas.ts ***!
  \******************************/
/*! exports provided: Ventas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ventas", function() { return Ventas; });
var Ventas = /** @class */ (function () {
    function Ventas() {
        this.producidoUnidades = 500;
        this.producidoMonetario = 47270;
        this.ventasRealizadasUnidades = 500;
        this.ventasRealizadasMonetario = 75000;
        this.inventarioUnidades = 0;
        this.inventarioMonetario = 0;
        this.pedidosNoAtendidosUnidades = 0;
        this.pedidosNoAtendidosMonetario = 0;
        this.numeroBimestre = 0;
    }
    return Ventas;
}());



/***/ }),

/***/ "./src/models/ventasIndustria.ts":
/*!***************************************!*\
  !*** ./src/models/ventasIndustria.ts ***!
  \***************************************/
/*! exports provided: VentasIndustria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasIndustria", function() { return VentasIndustria; });
var VentasIndustria = /** @class */ (function () {
    function VentasIndustria() {
    }
    return VentasIndustria;
}());



/***/ }),

/***/ "./src/models/visionGeneral.ts":
/*!*************************************!*\
  !*** ./src/models/visionGeneral.ts ***!
  \*************************************/
/*! exports provided: VisionGeneral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionGeneral", function() { return VisionGeneral; });
var VisionGeneral = /** @class */ (function () {
    function VisionGeneral() {
        this.porcentajeDeMercado = 0;
        this.precioUnitario = 0;
        this.beneficio = 0;
        this.ventas = 0;
        this.puntajeMercado = 2;
        this.puntajeBeneficio = 2;
    }
    return VisionGeneral;
}());



/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es7/reflect */ "./node_modules/core-js/es7/reflect.js");
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/reflect */ "./node_modules/core-js/es6/reflect.js");
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_2__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
* in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
* with the following flag, it will bypass `zone.js` patch for IE/Edge
*/
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */

window.global = window;


/***/ }),

/***/ "./src/services/http.service.ts":
/*!**************************************!*\
  !*** ./src/services/http.service.ts ***!
  \**************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var src_models_ventasIndustria__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/ventasIndustria */ "./src/models/ventasIndustria.ts");
/* harmony import */ var src_models_estadoResultados__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/estadoResultados */ "./src/models/estadoResultados.ts");
/* harmony import */ var src_models_balanceGeneral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/balanceGeneral */ "./src/models/balanceGeneral.ts");
/* harmony import */ var src_models_ventas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/ventas */ "./src/models/ventas.ts");
/* harmony import */ var src_models_costosProduccion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/costosProduccion */ "./src/models/costosProduccion.ts");
/* harmony import */ var src_models_visionGeneral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/models/visionGeneral */ "./src/models/visionGeneral.ts");
/* harmony import */ var src_models_produccion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/models/produccion */ "./src/models/produccion.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HttpService = /** @class */ (function () {
    function HttpService(http, socket) {
        var _this = this;
        this.http = http;
        this.socket = socket;
        this.baseUrl = 'http://localhost:8080';
        this.contador = 0;
        console.log("servicio generado");
        socket.on('disconnect', function () {
            alert("desconectado del servidor");
            window.location.reload();
        });
        socket.on("connect", function (data) {
            console.log("servicio generado socket");
            _this.game = new Game(socket);
            var tmp = new src_models_ventasIndustria__WEBPACK_IMPORTED_MODULE_5__["VentasIndustria"]();
            tmp.jugador = "nombreprueba";
            socket.emit("datosDePrueba", tmp);
            var estadoResultados = new src_models_estadoResultados__WEBPACK_IMPORTED_MODULE_6__["EstadoResultados"]();
            estadoResultados.jugador = "nombreEmpresaEstadoResultados";
            socket.emit("datosEstadoResultados", estadoResultados);
            var balanceGeneral = new src_models_balanceGeneral__WEBPACK_IMPORTED_MODULE_7__["BalanceGeneral"]();
            balanceGeneral.jugador = "nombreEmpresaBalanceGeneral";
            socket.emit("datosBalanceGeneral", balanceGeneral);
            var ventas = new src_models_ventas__WEBPACK_IMPORTED_MODULE_8__["Ventas"]();
            ventas.jugador = "nombreEmpresaBVentas";
            socket.emit("datosVentas", ventas);
            var costosProduccion = new src_models_costosProduccion__WEBPACK_IMPORTED_MODULE_9__["CostosProduccion"]();
            costosProduccion.jugador = "nombreEmpresacostosProduccion";
            socket.emit("datosCostosProduccion", costosProduccion);
            var visionGeneral = new src_models_visionGeneral__WEBPACK_IMPORTED_MODULE_10__["VisionGeneral"]();
            visionGeneral.jugador = "nombreEmpresavisionGeneral";
            socket.emit("datosvisionGeneral", visionGeneral);
            var produccion = new src_models_produccion__WEBPACK_IMPORTED_MODULE_11__["Produccion"]();
            produccion.jugador = "nombreEmpresaproduccion";
            socket.emit("datosProduccion", produccion);
            var ventasIndustria = new src_models_ventasIndustria__WEBPACK_IMPORTED_MODULE_5__["VentasIndustria"]();
            ventasIndustria.jugador = "nombreprueba";
            socket.emit("datosVentasIndustria", ventasIndustria);
        });
    }
    // createGame
    // public emit(url: string, data, callback) {
    //   console.log("emit numero " + this.contador)
    //   this.contador++
    //   this.socket.emit(url, data, callback);
    // }
    // public joinGame(data, callback) {
    //   console.log("join game" + this.contador)
    //   this.socket.emit("joinGame", data, callback);
    // }
    HttpService.prototype.get = function (url) {
        return this.http.get(encodeURI(this.baseUrl + url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // public getPlayers() {
    //   if (this.game)
    //     return this.game.players
    //   else
    //     return []
    // }
    HttpService.prototype.post = function (url, params) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: cpHeaders });
        return this.http.post(encodeURI(this.baseUrl + url), params, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HttpService.prototype.handleError = function (error) {
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Error al hacer la peticion');
    };
    ;
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]])
    ], HttpService);
    return HttpService;
}());

var Game = /** @class */ (function () {
    function Game(socket) {
        var _this = this;
        this.socket = socket;
        socket.on("update_state", function (data) {
            console.log("update 2", data);
        });
        socket.removeListener("getPlayers");
        socket.on("getPlayers", function (data) {
            console.log("getPlayers", data, _this.codigo);
            if (data.codigo == _this.codigo) {
                _this.players = [];
                var bimestre_uno_count = 0;
                var bimestre_dos_count = 0;
                var bimestre_tres_count = 0;
                for (var _i = 0, _a = data.players; _i < _a.length; _i++) {
                    var i = _a[_i];
                    var tmp_player = new Player(i);
                    if (tmp_player.name == _this.name)
                        _this.player = tmp_player;
                    _this.players.push(tmp_player);
                    if (tmp_player.bimestre_uno)
                        bimestre_uno_count++;
                    if (tmp_player.bimestre_dos)
                        bimestre_dos_count++;
                    if (tmp_player.bimestre_tres)
                        bimestre_tres_count++;
                }
                _this.bimestre_inicial_c = data.size - _this.players.length;
                _this.bimestre_uno_c = data.size - bimestre_uno_count;
                _this.bimestre_dos_c = data.size - bimestre_dos_count;
                _this.bimestre_tres_c = data.size - bimestre_tres_count;
                _this.cantidadTotalJugadores = data.size;
                _this.moderator = _this.codigo;
                console.log(_this.bimestre_inicial_c, _this.bimestre_uno_c, _this.bimestre_dos_c, _this.bimestre_tres_c);
            }
            else {
                console.log("no es de este mercado");
            }
        });
    }
    Game.prototype.addBimestreUno = function (data, callback) {
        var send_Data = { data: data, codigo: this.codigo, player_name: this.player.name };
        console.log("addBimestreUno", send_Data);
        this.socket.emit("addBimestreUno", send_Data, callback);
    };
    Game.prototype.addBimestreDos = function (data, callback) {
        var send_Data = { data: data, codigo: this.codigo, player_name: this.player.name };
        console.log("addBimestreDos", send_Data);
        this.socket.emit("addBimestreDos", send_Data, callback);
    };
    Game.prototype.addBimestreTres = function (data, callback) {
        var send_Data = { data: data, codigo: this.codigo, player_name: this.player.name };
        console.log("addBimestreTres =>", send_Data);
        this.socket.emit("addBimestreTres", send_Data, callback);
    };
    Game.prototype.joinGame = function (data, callback) {
        console.log("join game", data);
        this.codigo = data.codigo;
        this.name = data.player_name;
        this.socket.emit("joinGame", data, callback);
    };
    Game.prototype.createGame = function (data, callback) {
        console.log("createGame", data);
        this.socket.emit("createGame", data, callback);
    };
    /*public calcularBalanceGeneralP(callback){
      let send_Data = { codigo: this.codigo, player_name: this.player.name }
        console.log("calcularBalanceGeneralHttpService", send_Data)
            this.socket.emit("calcularBalanceGeneralP", send_Data, callback);
  
    }*/
    Game.prototype.calcularTodoPrueba = function (data, callback) {
        var send_Data = { numeroBimestre: data, codigo: this.codigo };
        console.log("calcularTodoPrueba =>", send_Data);
        this.socket.emit("calcularTodoPrueba", send_Data, callback);
    };
    Game.prototype.getBalanceGeneral = function (data, callback) {
        var send_Data = { numeroBimestre: data, codigo: this.codigo, player_name: this.player.name };
        console.log("getBalanceGeneral", send_Data);
        this.socket.emit("getBalanceGeneral", send_Data, callback);
    };
    Game.prototype.getVentas = function (data, callback) {
        var send_Data = { numeroBimestre: data, codigo: this.codigo, player_name: this.player.name };
        console.log("getVentas", send_Data);
        this.socket.emit("getVentas", send_Data, callback);
    };
    Game.prototype.getCostosProduccion = function (data, callback) {
        var send_Data = { numeroBimestre: data, codigo: this.codigo, player_name: this.player.name };
        console.log("getCostosProduccion http.service", send_Data);
        this.socket.emit("getCostosProduccion", send_Data, callback);
    };
    Game.prototype.getProduccion = function (data, callback) {
        var send_Data = { numeroBimestre: data, codigo: this.codigo, player_name: this.player.name };
        console.log("getProduccion", send_Data);
        this.socket.emit("getProduccion", send_Data, callback);
    };
    Game.prototype.getVentasIndustria = function (data, callback) {
        var send_Data = { numeroBimestre: data, codigo: this.codigo, player_name: this.player.name };
        console.log("getVentasIndustria", send_Data);
        this.socket.emit("getVentasIndustria", send_Data, callback);
    };
    Game.prototype.getEstadoResultados = function (data, callback) {
        var send_Data = { numeroBimestre: data, codigo: this.codigo, player_name: this.player.name };
        console.log("v", send_Data);
        this.socket.emit("getEstadoResultados", send_Data, callback);
    };
    Game.prototype.getVisionGeneral = function (data, callback) {
        var send_Data = { numeroBimestre: data, codigo: this.codigo };
        console.log("getVisionGeneral", send_Data);
        this.socket.emit("getVisionGeneral", send_Data, callback);
    };
    Game.prototype.getAllProduccion = function (callback) {
        var send_Data = { codigo: this.codigo, player_name: this.player.name };
        console.log("getAllProduccion", send_Data);
        this.socket.emit("getAllProduccion", send_Data, callback);
    };
    Game.prototype.getAllVentasIndustria = function (callback) {
        var send_Data = { codigo: this.codigo, player_name: this.player.name };
        console.log("getAllVentasIndustria", send_Data);
        this.socket.emit("getAllVentasIndustria", send_Data, callback);
    };
    Game.prototype.getPromedioUtilidadNeta = function (data, callback) {
        var send_Data = { numeroBimestre: data, codigo: this.codigo, player_name: this.player.name };
        console.log("getPromedioUtilidadNeta", send_Data);
        this.socket.emit("getPromedioUtilidadNeta", send_Data, callback);
    };
    Game.prototype.getSumatoriaCapacidadProduccion = function (callback) {
        var send_Data = { codigo: this.codigo, player_name: this.player.name };
        console.log("getSumatoriaCapacidadProduccion", send_Data);
        this.socket.emit("getSumatoriaCapacidadProduccion", send_Data, callback);
    };
    Game.prototype.getPromedioPrecioUnitarios = function (callback) {
        var send_Data = { codigo: this.codigo, player_name: this.player.name };
        console.log("getPromedioPrecioUnitarios", send_Data);
        this.socket.emit("getPromedioPrecioUnitarios", send_Data, callback);
    };
    Game.prototype.getProduccionTotalIndustriaBimestres = function (data, callback) {
        var send_Data = { numeroBimestre: data, codigo: this.codigo, player_name: this.player.name };
        console.log("getProduccionTotalIndustriaBimestres", send_Data);
        this.socket.emit("getProduccionTotalIndustriaBimestres", send_Data, callback);
    };
    Game.prototype.joinGameModerator = function (data, callback) {
        this.codigo = data;
        this.name = data;
        console.log("join game moderator", data);
        this.socket.emit("joinGameModerator", data, callback);
    };
    Game.prototype.getActivo = function (callback) {
        var send_Data = { codigo: this.codigo, player_name: this.player.name };
        console.log("getActivo", send_Data);
        this.socket.emit("getActivo", send_Data, callback);
    };
    Game.prototype.retirarseJuego = function (callback) {
        var send_Data = { codigo: this.codigo, player_name: this.player.name };
        console.log("retirarseJuego", send_Data);
        this.socket.emit("retirarseJuego", send_Data, callback);
    };
    return Game;
}());
var Player = /** @class */ (function () {
    function Player(data) {
        this.name = data.name;
        if (data.bimestre_inicial) {
            this.bimestre_inicial = new Bimestre(data.bimestre_inicial);
            this.bimestre_anterior = this.bimestre_inicial;
        }
        if (data.bimestre_uno) {
            this.bimestre_uno = new Bimestre(data.bimestre_uno);
            this.bimestre_anterior = this.bimestre_uno;
        }
        if (data.bimestre_dos) {
            this.bimestre_dos = new Bimestre(data.bimestre_dos);
            this.bimestre_anterior = this.bimestre_dos;
        }
        if (data.bimestre_tres) {
            this.bimestre_tres = new Bimestre(data.bimestre_tres);
            this.bimestre_anterior = this.bimestre_tres;
        }
    }
    return Player;
}());
var Bimestre = /** @class */ (function () {
    function Bimestre(data) {
        this.precioUnitario = data.precioUnitario;
        this.produccion = data.produccion;
        this.inversionEnMarketing = data.inversionEnMarketing;
        this.inversionEnInvestigacion = data.inversionEnInvestigacion;
        this.inversionEnActivos = data.inversionEnActivos;
    }
    return Bimestre;
}());


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\luz\SimulatorServer\angular\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map