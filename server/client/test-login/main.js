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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























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
                _fin_juego_fin_juego_component__WEBPACK_IMPORTED_MODULE_23__["FinJuegoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_8__["APP_ROUTER"],
                _angular_http__WEBPACK_IMPORTED_MODULE_19__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
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

module.exports = ""

/***/ }),

/***/ "./src/app/fin-juego/fin-juego.component.html":
/*!****************************************************!*\
  !*** ./src/app/fin-juego/fin-juego.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<h6>RESULTADOS</h6>\r\n\t <table>\r\n          <thead>\r\n            <tr>\r\n                <th >EMPRESA</th>\r\n                <th >BIMESTRE 1 </th>\r\n                <th >PUNTAJE  </th>\r\n                <th >BIMESTRE 2 </th>\r\n                <th >PUNTAJE</th>\r\n                <th >BIMESTRE 3 </th>\r\n                <th >PUNTAJE</th>          \r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody >\r\n            <tr>\r\n              <td >EMP1</td>\r\n              <td >95.000</td>\r\n              <TD>10</TD>\r\n              <td >95.000</td>\r\n              <TD>10</TD>\r\n              <td >95.000</td>\r\n              <TD>10</TD>\r\n            </tr>\r\n          </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div>\r\n\t<h6>RESULTADOS</h6>\r\n\t<table>\r\n          <thead>\r\n            <tr>\r\n                <th >EMPRESA</th>\r\n                <th >PUNTAJE FINAL</th>          \r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody >\r\n            <tr>\r\n              <td >EMP1</td>\r\n              <td >95.000</td>\r\n            </tr>\r\n          </tbody>\r\n    </table>\r\n</div>"

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
        this.visionGeneral = [];
    }
    FinJuegoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['codigo'] != null) {
                _this.codigo = params['codigo'];
            }
        });
    };
    FinJuegoComponent.prototype.cargar = function () {
        var _this = this;
        this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(function (response) {
            console.log(response);
            _this.visionGeneral = response;
        });
    };
    FinJuegoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fin-juego',
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

module.exports = "body{\r\n  background-size: cover;\r\n  background-color:#125A82;\r\n  }\r\n.boton-home{\r\n  display:inline-block;\r\n  background-color:rgb(0, 168, 233);\r\n  border-bottom: 22px;\r\n  padding: 5px 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-aside\" style=\"margin-inline-end: 0;\">\r\n  <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQ4AAAH0CAYAAAB8YbBYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAP+lSURBVHhe7J0FvBXV9scX0t3dDdIgSComWFjY+Xz+n93d3d3x7O4WUFRUVFRAQrq7u9v/fNecde/cuXPOvfpMWN+P4zmzZ/fsGe7+nbX3KtCjR7dfxHEcx3Ecx3Ecx3Ecx3GcHZ7NmzfLxo2bpE+fQ2SnVJjjOI7jOI7jOI7jOI7jOE4WLhw6juM4juM4juM4juM4jpMLFw4dx3Ecx3Ecx3Ecx3Ecx8mFC4eO4ziO4ziO4ziO4ziO4+TChUPHcRzHcRzHcRzHcRzHcXLhwqHjOI7jOI7jOI7jOI7jOLlw4dBxHMdxHMdxHMdxHMdxnFy4cOg4juM4juM4juM4juM4Ti5cOHQcx3Ecx3Ecx3Ecx3EcJxcuHDqO4ziO4ziO4ziO4ziOkwsXDh3HcRzHcRzHcRzHcRzHyYULh47jOI7jOI7jOI7jOI7j5MKFQ8dxHMdxHMdxHMdxHMdxcuHCoeM4juM4juM4juM4juM4uXDh0HEcx3Ecx3Ecx3Ecx3GcXLhw6DiO4ziO4ziO4ziO4zhOLlw4dBzHcRzHcRzHcRzHcRwnFy4cOo7jOI7jOI7jOI7jOI6TCxcOHcdxHMdxHMdxHMdxHMfJhQuHjuM4juM4juM4juM4juPkwoVDx3Ecx3Ecx3Ecx3Ecx3Fy4cKh4ziO4ziO4ziO4ziO4zi5cOHQcRzHcRzHcRzHcRzHcZxcuHDoOI7jOI7jOI7jOI7jOE4uXDh0HMdxHMdxHMdxHMdxHCcXLhw6juM4juM4juM4juM4jpMLFw4dx3Ecx3Ecx3Ecx3Ecx8mFC4eO4ziO4ziO4ziO4ziO4+TChUPHcRzHcRzHcRzHcRzHcXLhwqHjOI7jOI7jOI7jOI7jOLlw4dBxHMdxHMdxHMdxHMdxnFy4cOg4juM4juM4juM4juM4Ti5cOHQcx3Ecx3Ecx3Ecx3EcJxcuHDqO4ziO8w9kW+ozm19++eV3PX4NvzZ+Jsjqf80u3pbf+3D+PH6v/v+98oGkvDj+F/7X9I7jOI7j/DG4cOg4juM4zl9KKDqkFzbsMycFUp/ZFCxY8Hc9ksvNzbZt2zT+34mddtopV3t+r4O8o8Tvl/P7knQPChTIPf6TYGzafbG0hQoVypXPr713lo/lRT75rVMc0lE++dj5b83LcRzHcZzfnwI9enTzv/Icx3Ecx/nDMFHJxAk+EZ9MMEB8QCfg0wTBAgV2km3btup1xI9Nm7ZIwYIFNN26deuDuEWCa1tk69atGt/y3raNcrZlCQ9btyLq7SQbN26UwoULx+L/ovG2bNmiYZQJ1IO4JUuWzMo3Ca6RfsOGDVniSRLEo97W5iSIw0H9ihYtFHynb1IXYxCHPqGOSZDPunXrtF7/C+iDW7eGbaTutNEEI8omjE/CqA/9uWnTZtm8ebPGoZ6ktfRO/rDxQr9t3LhB1q9fr33KsxH2IyJbISldunTa8QTcE64XLVo0GAsbg7zWB5+bNM9ixYoG92db6pkTvY/FihVLe59sbBYpUiTIY52sWLFanxuKJ4/ixYvr88J16kr8dHUjH8ph3GzatEnWrl0bnCMa8i4orGn5Tp04wnOez/RtdRzHcRzn94V/zzdu3CR9+hziwqHjOI7jOL8eRAkm/4gAJhzFRQeb6BNuQkHRokVUaNiyZVtwbJKlS5cFn5uDz+X6HREhL4oXL6ZpyA9RcKedsHraSYoUQYBEqApFPMosVAgBpmBQzy2aLhTCEEIQS7CeC4UTE+uIiyAyfvxY6dq1m14z4SJO2OaCMmfOzOCYG4SQPrxmhOUUlurVq0vlypW17UkCCP2IiDJhwnhZs2Z9KjSZ5s2bSsWKFRPzoa7Un7Zs27ZFhbx09c9EoUIIqqSjH0XFq9Wr16j4hChJXYMq56BChfJBO6tJ1apVpUSJElo/xEvaxh+fnCfVJWns7KjQF4hv69evk1GjRup4rVevbjB2Swb9t03/gF+3boP2b9myZfQZSOo78mGskdeIESP02apYsbzUqlUryDMUnXn+Vq9eJyVLlgjuXSUdL6QjzzjctyJFCsvs2XNlypQp0qNHdyldupTWZ9myZTJ37lxZvHhJkP6X4P5XlmbNmmlecQhDoCTNqFGjVNSsUqVK0LZfgnG/LmhLOEYQ8RlnxG3cuLG+N7ZsCYVox3Ecx3H+eFw4dBzHcRznN8HEn4m9iRV8IgwhRCAmITrwyUFcJv8cK1euVGEgCayfmjdvLt27d5M6dWpLlSrVpFq16lK2bPngKCtlypRWayYsDtev36ACHH/MFCqEQPjHCU6IFNQpSasIhZSi8sUXg2Ts2HGy887NVbCLChvEQbzB2uuJJx6XV155UeuLmBMnFINKyqOPPi4tWzZXYSXb2goxBeuxQkFflJQjjjhMxo+foOJheD0b+nz58hVyxhn/J2eeeU5wf0Jh9PeEMmnr2rXrZMmSpTJ79gyZPHmCfPvtEHnvvfdk1ao1qZghFSqUDo7KaiGHUESfAH1FPqGIhUVpsgC9o0Db6Z/Zs2cH/TlV7rrrLrn44otTV3PCmGrXrlXQrxVzCX2Wz6JFi2TMmHHStWtHeffdj4PnqnIqRk4YexdccK588MH7KvgljWPG7E8/DQ/GaGkVCZPgPTBjxix56qnH5aOPPpLy5cunroRQL/Jh7CJe/ve/T8rBBx+Supob3iF33nm7PP3001KjRo1EQdNxHMdxnD8GFw4dx3Ecx8kIk3xIEnEQEhAWsEJjco/QgDiI1R+CAFZCiHtly5YLJvzVpX79BtKgQQNp0aJFcLRM5fL3hzb27LmbCiJx6APEmc8/HyT9+vWX/fbrnbqSG6zu/vvfJ+SFF17Q/iRdnE2bNgb/LyCPP/64tG3bPgxMQ58+fWTKlIlBH1dJFA4RHY8//iQ5//zzpUSJ4qkrfw2IiePHj5fvv/9WZs6cJgsXLpYVK1aoWMiB5RyfLHWl7hzxMZcUtj1CGxEN69Wrp+MqE2eddaa8//57ao0XF/rIZ9asWfrsvfvue8E4qZq6ksyoUSPktNNOl6VLF0vt2nWyrEOB79ybmTNnSMeOu8prr72u4Zk44ogjZOzY0TnGJ88Q9Vq8eHFQ54by6KOPBmXV12uZ4L1yxhmnS//+/fX9sXnzph1iLDiO4zjOX01UOPR/eR3HcRxnByQuONm5CYZ2zqdZEK5Zs0aWL1+ulkzz58+TJUsWq1VRhw4d5dBDD5N77rlHXnzxJXn//Y/k66+/kQ8//EieeOK/cvnlV8iRRx6VQzRE7KAsPjn+ybC8MhMsq+aPryQB0gj7G+E1775g78e8LC1Z+km8PxO7l3ZfoVu3LnLqqafIU089LQMHDlILzWeeeVauueZaFaKKFSsiK1eukhkzpqtVKiKr9RX5cCBi8Rkdk9sbtNeW5j788KMaRj/Qj/F28zls2DCpWrWKpjORz/qI5xSx76STTtElyITZvYnDfoeDBw+W1atXSpUqVTVOVIQM+35LcG/WyN1336Nhdl+i2PlHH30gQ4Z8J+XKlc+qL5glMkJxr177S+XKNTQ80zMBWNq2aNFMKlYsF/QPeyH61MVxHMdx/mz8X1/HcRzH2cFgQh89DJuUh78wblSLwjVrVunknuWllSpVktq166lF3H/+c4a88sob8uWXX6sl3b333icHH3yYdO/eQ5o0aaz5RKEc8rHyKIsDYSIqVGyPhM3Lr4OQf25fRJcacyBCmZhlVKpUWfbeex85+eR/yYsvvihff/2tfPbZZ0F4FWnatFlqeesvsmEDeyqu1jFoYpaNk/i4/adDHyEEL126VA444ABdtk8Y/clBu6NtZtk7wn2pUqX13OA6fUWfdezYSXr16qXpgfthS8SjsC/hyJGjNa3FNXhe2SKA5c7/93+n6v6IYPc3iUceeVj3TExajk9+1avXkHbt2uv2BJSZLh/gesmSpWSvvfaRhg0babscx3Ecx/nzceHQcRzHcXYgmIxHD0CkQHDAUgmrL5YTFi9eQmrWrBlM8jvISSedLBdeeKE8/PBj0q/fx/L666/LJZdcIl26dNb0+QHxw0QQMMHAxBHnnw/31gQjE6r4tHtuMN5MUMSLbq1atWXYsOHyxhtvqrXd6aefKQcccJA0a9ZcLedsXGKRFxWfIfr9nwptwvHI6tWr5Mwzz0yFhn1ofUc77fudd94tpUqVydV2rpMXfda+fQddKmxEBbpouokTJ8jIkcN1+Txx7Jp9YgGJ46Lbbrtdz9NBWiwKFy1aJmXLltZ6ROH9gjVp69at9ADqGx8bUexa7dp1VVQOapUrX8dxHMdx/nhcOHQcx3Gc7RxEADvAJuR43EWMWbt2jXozxsKrevWqcthhh8vVV18tN910s9xyy+1y9tnnBGF9sywJEX2YwPP5d8bamxf5jfdP4u/cJMafCYdmlcgnNG3aVIXqq6++Rm688Sb9PPzww6VcuXJZy+UZq4xb8kF0trFtxz8J6ovYyt6G7drtIvXqNUhdyQlt5ZgyZbJUrlxRSpUqmautXOe5LFeurD6reBFP6g8Lw7J43LjxsmzZCv2hgPtAHgb1mjx5slSsWEHP8+rbZ555Ovg/FqfZPxAYLMHHK3KTJk2ldOkyqdD8gXOkRo0aStGixYI6572U33Ecx3Gc3xcXDh3HcRxnO4bJvok0WAVhBbZ+/Trdq5DloHi6bdeunRx77HFyyy23yh133KWCYa9evaVNm7ZSvXq1VE4h5IMoQF5RK6a/G9QzL6HDsLj5jf93B83m1zTlr2i7jZ/oASZGI1ohIvbuvZ9cdtkVctdd98gNN9woPXvuEYzJ6hoH777se0dcxuQ/8R7S3jJlysiUKdPkwQcfTIVmi/uGnb/22qsqwhUuXChXHNrOtebNW0jbtm1TobnzMmbPniWvvvpK0H8FgyNcOgx8kgZhEUETD8lg9yaKpVm5coWMGDE8ON+mVqRRiMPWB/Xr15NWrVqnQvNPsWLFg/a002XO7BdqZTqO4ziO8+fgwqHjOI7jbKcwweZAlOFzyZIlMn78OLUwbN++nRx//PFy0UUXy5VXXq0eePv2PUKXJid5/TUQFOz4O0N7ETqSxA6Iiw/x8x0F66c/sz8YOyYUpvs0qAdLb3fddVd1wHPFFVfKVVddLeeee740bNhQcKyC12asEMMx+fcel1FoGyLb4sWL9Byh1Eh6vubPXyATJ04M0iV7mUboW7VqjVr1VasWiqtJ+VjYpEmTZMiQ76VGjZrBGMh2smL3HudHzZo1k86du+h5/FkinsXFcnH69Blar2jduI41KdaGnTp1ktatf71wCE2bNlcP0nh3TPdMO47jOI7zx5D7rw7HcRzHcf6xMFE3ISjcb+4XmTcv9ICMp9MjjjhCLrjgYrnhhpvk7LPPlQMPPEgaNWqsVj2kYamjiQG/FdKny+N/zTu/IF7YHntJRAUVEzuSRJY/qbq/O/mpt90LlvvG+ympL/LL732PbTxzVKtWTR3wnHDCCfLQQw/JhRdeJJ07d9Zl9wsXLpQ1a0xA/PPG2m+FeuKRe8KECXLTTTdqWCZRbOTIETJnzuwgTe6lwLSVPQSrVKmizlUyQVrEx379+kv58mVVvIyXS5xVq1bKMccco+fkHx8jhFk9Roz4SX+YiDtgIQ5LzCtUqCi77tpF30m/9r4Qv0KFCioU4yCF5cqx5juO4ziO8wdSoEePbn/vv6ocx3Ecx8k3CACFCxfWpYwsf1ywYJ4cfPDh0q5dG+nRYzdp06a1LktM8rBqE/q4KPFrIA/Ex7gQZ9+5nlf+tGHz5k1qqcSyas4RRTi2bg0FEvLBiomyChTAshDBlPqHAlOqKanrnOQskziITSx9RIgIl0BS9hYNx8INhww9enQndpgoAumxzPz880EyYMAA9WCbjrVrV8sTTzwpr7zysop0SRadGzduCOpZSB555CHp0KFjKjSZAw88QKZPn6ZerqlHFPpq2bJlcvzxJ8q5554rpUqVSl3JiaXjXrDM9IcffpCZM2cG5yIVKlSWcuXKqEBVrFgRFZaw+sOLL+MKkblEiRLBJ+3IfS/JO3q/o+R175Ow/PikfXw3EYv7O3/+fPnmm2/k+++/k4EDB6qTkTp16upzwHXSxEWvvxpr06pVq3V8jBs3SfuWMZ/0bNKOG264Xt599+3UfcheDkxeLFHG6pIfAq6++lq9X1ZGEuyVuP/++0nZsmX1Xlq/GjxjK1Ysk379Bur+gkn1svx//nl0UOZVQZ5T1Ct2tK/Jl71T2fbgjjvu1GXmtCX+fkiH3XOem6+//lquvPIKzY/l3flI7jiO4zjOb4SVDFj69+lziAuHjuM4jvNPxybw4SGyYMFCmThxsvTo0VVOPvkU2X//A1UIQvAxmIzD7y2oZBIrDISesWPHyrx5c4V9FlesWC7r14eOL7Zu3ZyyKtqsAgN7o5En5+GSRxyzbA5ywcGGCYeUF4qFiIdhHbLFwyRIg/BIOvIMUmp4KFTgYKK8WlCVLFlSw+MQ758sHNJv1IW9Lh9//DF59913tH8LFtxJhWXqSN7EQdDaaadCUqJEcR0vCEhcx+Muji64Xr16LalQoazUrVtPunbtlirl9ye8P6GQZG0AwmjLjz/+IE8++YT0799fvYLXrl1br3H8ncTDcLlxQZk8eZIccMCB8t//4lgk+74YtJex+sUXX8hVV12h4iCOYqIQB2cxeGa+8MJL1KqYMI50bWYsnn/+eWqdSDyDfmLMfPPNd3Lqqf+We+65N1dfx2HsXHPNtcGYKBI8LyVSoSHkx/N88MEHy7XXXp9Vr/BdlT/h0NqBYIhA+dlnnwV9UDZtfRzHcRzH+d9x4dBxHMdxtgOYzDOhRoAoVKig7oG2aNEiqVu3jlx55VXSs2dPqVixUip2OIknflQoyM/kPQppyQcyTdznz58ns2fPkW+++VaGDPlOJk6cIMuXrwzKQ6zE4UGxlIAWikDbtoXLNrmO+Gf14tPEAyuP8gkP02XvzxcXSYhjdY0TZh9arpE8VZxCNlu2hHvrBS0OA2NQ5t9VOFy+fJkcc8yJcv75mS0OOT744AO56aYbVJDCWgzIg7GFQIjow/JSRFZERUtn8N36mWPNmlVB3DC8UqXKcuihfdQhxq67dpYaNWqkUuUEwdLuJ5BP/F5GseuIb1QlHhcB+pNP+sv99z8oY8aMlMaNm0jZsuWDNq7JUc5fCW0oUGAnmTx5onz66RfSunUrDY9b9ln/PvHEE3LbbbdK1apVco0f7hX3CRHwzjvvVsHU7hFpjaj4t/vuu6lwX6tWraz+Jw0HAvHAgV/IW2+9I4cffqjGT3dPeN/cfvttQfxP1QqQOFYmaZh0YD381ltvS4MGjRLrlRfWB/DBB+/LXXfdqRaR9EOmceI4juM4zm8nKhz6v7aO4ziO8w+GiTPLa7//fkjwvYA8/vgTMmjQV8GEv28O0TA6+ebTjl8DQgD5UGZUfNm0aZvMmTNTzjrrLPnXv06U3XffXbp16ypHHHGY3Hvv3TJ69EitW40aVaRWreq6XBGRCo/OxYqVkCJFiqlYgZhYvHgJtfJj+WS4HJaw4nrw3cL4RDiIXo8fFi/poBzihHmEFnZ2FC5cNLhWLGhZTlHunwLaTF7aGPcewWjRogUqwiAwIhCyBJY+oG84tz7i/oT9Zvcp7GPCOCcOeVSrViO4xzWDe11Vtm7dKE899ZScc87Z0rPnbrLrrh3l2GOPkfvuu1c+//yLVE1EhbJfIwDFx3Ec6nH44UfIxx9/KM8++2Iw/sbIqFE/6bJcxi8C2l8JzxF9Nm3aFHVG1KRJ49SV3IIa5wsXLpAxY0arlR33x8Q3g/sILK1HNISkvrF0CxculR9++D54P1TUuhhc515MnjwluF+7yy677JK6krtexqJFC2XWrFlar6hoCAjNmzdvDcbXFhUNIaleeRGN37BhY313cA+p+199Lx3HcRxnR8CFQ8dxHMf5B2Jz6enTZ8o33wyR//znNPnxx2HSt29ftfyB6KT6t0zY4yAMmDjAssF77rlLWrRoJjVqVJJWrVrIO++8q15aly1bok4aateuo/ujYWmGSMgS2IIFC6noaEIDQgUCFXlGBSQTOYjLwXW7Zm2xMAuPiiA7OvnpCrr4l1+wwKPfQ4szg74F7ol9h2h/E8694Zx7SFwgL5bFs9y7QYMG6tQC5xabNm2UoUN/lDvvvEMOP/wQqV69ilranX76f3KVESV+X7Pjph/TpClTppwccsghsmHDRmnSpLkMGPCpCnY2nv7K8UI95s1bKJdccrl+N6hbHJwbzZw5I+v5iLeZc5Ypd+yY2VLV0t1//12yceNmFVjpAwvnExFywwb2SjwweG6rZfVRvEzg2rhxE3TrAUTCeBzG1uzZM2T//ffW80z9nd970aLFziqQUhZpkvrLcRzHcZzfl5x/mTmO4ziO87eECT0H4g7HkiVLZcGCBbL77j3U0+p99z2g1l9cM8Hwt0yqzZInCl5REQdeeeUlOfDA/XTSjjh52WWXqRjYvHkzadduF2nUqL56vcWyCyEJkYO8qDdp7CDc2mF1jNaV65xHBaTo9aR2ETcaf0cnr66g7xGbqldH1C0poafa3OIQfUp4pvtjccDELRtDfDKmGA849cAirmnTptKmTRtp2LBREH8nefbZp7PGxmmn/Z8628BDsmHl2FjKBHE4aF80PkvmCcMad/HixSp8Wz2Jw+cfDWXQF/QRnpS7du0sderUTl1NZuXKlfLRRx/J9OkzVGyPQn70Gc/n5s2/yH777Z+xHdaPt9+OcHuo7oto9w24vmLFSmnZsrX06rWvlhe9Hoe9VL/++nNZvnyJvgei0Kc4qWncuLHcffcD2vf5gWVRSVjfwX77HRCMv9CRjOM4juM4fzz+F7bjOI7j/E1hsm0Tbib1CA5r1qxT6yMcJLz00qvy4osvS82atbIEAyb6ScKaYXlG845ighBiBPsSIhYecMD+stdee8qZZ54pI0aMlO7du+g+e3vvvY9aEgal6iSeiT1HXGxIEh8Is/B4nfI6omnseyYyiSmG5RfN959MPpqs/V+8eGgFatBX1l/xPokeeRG95yZYEUbeNlYIR0zs2XNPOfjgg6RTp47y9ttvBec9ZN9995aLLrpQ9ypEIAd7BqLE60IcDsrik/EcFQbXrVubEs3WqoBIuMX9o7F68Wzh9OfQQ/tKvXp1U1eTwevy/Plzg3TZ/WjYvWCfwb333jMrLB2UPXXqNP3OvoNJEN6oUWOpWLGKnpMmjpXBPqYzZ84O7knhHO8c7i2iI85qunffTcOsrnYfwMIgr/63ewl77rmH4FQJp0aW3nEcx3GcPw4XDh3HcRznb0p0UsxkfN68BVK2bEk59NAj5M0335QuXTpnXUua4Cdhk3U7orDX3ZQpU+TDDz+U0077j1oXXnzxxeqIA4+prVq1UmsxnDrggGPNmtVZwgswsed7vC7xcuJYfEtrhwkt0cPiGdHv6SAfEyyS4sfztXLzqvffmTx0mCzwIB16os4WdGi7tT96TznyIj99Rv9yGDgzwYM13plbtWoTjLHQ0+9bb70hJ554gh6PPPKIDBr0uaxYsSJHGenKi+ZPG3hGiMveljfffLu88MJLajXLmMexSH7q/XtAXXBEU6dOHRVKEUKjYloU6jRy5IjgGB2c5RQ3ScM5VoPsGXrrrbdoeF736KSTjpfWrVsEz++KLBGWckhHP7BvZZcuXaVy5Yp6LQniUu7nn3+m+yEWLVosR/9RL84RR4855hgNs/dEtH7EsXRYVY4cOSqXVWU6dtmlkzq7cRzHcRznj8eFQ8dxHMf5m2KTbES61avXqEDw6KOPyQMP3C81atTSa8BEPTohz4RN1EljE/wFC+bLjz/+IPfdd4+cf/550rfv4fL8889LhQqVpEmTJup5NbQszF5KaOk5jHSiQLxuhCMkcIReV8MDKyLEC4SV6MGy0lWrVqlQYN8Rm1jGyXesssLPpGOl5oH1E+ekz3mEYeRn3zlWrFieZeH0T4PuTqNFZcE9QUxbuXKVLF26RIUk+og+jfbt2rXr9ByBjQNrOSz4zIrP7rERHQ82BuJx4tDPNpa2bg29CrMnYr169XU/u8mTJ8l5550jJ510gtxww3Xyzjtv63LmoIQc5SVBOzls2S11hk6ddpXBg7+RAw/sE+RRUBYvXqRtgrzq+7/CGG/btp0u8Yd0bVi2bJm8//67Ktwjckb70oQ4BNeDDuoT9GHhrLalY/z4sTJx4iQpW7ZcKiQb9igkrxo1akq3bj3UijATWGt+9tlnOmZ4N1AXoH7cz2XLluqPDO3atdcwrtNOi2fY+RVXXCbHHHOUfs8Pl112idaZ8eg4juM4zh+LC4eO4ziO8zciKlog7CxdulS2bNkqJ5xwojz77LOy886tcgkE8cl4FPIjPodN6pnAYw00Z84c+eCD9+TGG28IJu5XqAfcCRPGyy67dNClojhtsLRAOenKIm87wEQC0iLIbNy4Qa2UEPEQokwQRDCkLps2IUqxhBVRKhQSScMn/YC4E5QihQvjSGUn/aR+5vmX/R1LlcIjc+6D6wgvWEZhOWnek8Mj9AjMQZ70D4JEiRIltY7Wnn8SVDnDkFCsXVWqVJXOnbtIu3btdL89lr2zfJj9DwsXxjpufeqebNF7gVBjIiLLfbmXHNxbDu4l9wvoS8ZAfGzkB7MQhPr166un7vLlK8n7778nt9xyiwrcr732qopqCJxRMpUTFenYl++aa66V008/XffmZDxS/z8C6kRfMKYZt/Q3zmMysWTJ4qB907WeCJ/RdtG3nHNvevfeX8OS2k2YhX/yySfBs1BM6xGF802bNus9xplRxYoVUlfSQ7+vX79OqlatnPVuAb7zLI4dO0EuuOB8DYN04ihlIwyXLl0qePdMTIVmvoeAVWqrVi1V4E6Xt+M4juM4vw8FevTolvlfZsdxHMdx/lSYCCPGINIg5px00snSt++RWRN+Juf5nSybFRXxOUg7bdpUGTToCxkw4JPg+xTB6ywCHBN+PomDcBPfT85gUm91se8ciHsEm0CI0IQIh8iBMMcy0WLFEPhKqjhBOY0bNxGWqIbiXgUpXbqExiUvls9a3oUKFQziI3wW0jLx3IuASHlhHL4jkmi1csB10oRLcqlv6kIEwi1OcBb0e11p1KiRBH8nhRFiEJd6fv75oKAfB0ivXr1SV3Kzdu1qeeKJJ+WVV17O6os4CEoFChSSRx55SDp0yOwdl/0lEW4qVaqk9YhCn2KphtB8zjnnBn1dKnUlJ9ZeBECsxszac+vWbfqJkIvDlI0btwT3J7QExHEG1p1mjbhixTIVtrnfLCEO953bqtewWGOIhqJuSR17Yf/mYQqZgLWRMcG4pK94PsgT5y577rlX0N7jpXLlKirKEZ97nl9o27Bhw+S5556Tr776IqhvKX0Wfk+oE88TjowaNmws9913vzRv3jx1NTc8twijd999l4qGJUoU17FpY5lxhIVghQrl5Ouvv9M09G34LGS3nTB77vfaq6csXkyaCjn6iO/cU/ZN5QcEnKwET41eS4K499xzt7zxxuvBc1xR62JQTsmSJeXTTz/TfIP/grCtOeIYVoejjz5ancWMGjVKXn/9NTnyyKP0PielAUv3yisvyiWXXKoOWIgfbbfjOI7jOP8b4Y/4m6RPn0NcOHQcx3Gcv5pwgh0uu2TyO2/e3GDSXEj69u0bHEfossbfCgKECYCzZ8+R9957R0aM+ElGjhypglHZsmWkdOmyQXmhuGCTcvuMY3VlUs918kcYQGRiuScWaohFtWvXkqpVq0nNmtWlSpUqUrlyVRV2ypWrIBUrlleRgvQID7QbcSS/+5v9WVA/vFbTL3Hog3+ycAjp7nEmQuFuox5YnIXLv9eoAw/GEyIiAtDq1Wtl7tyZMmfO/OD7KhWkueeMjVAYDoXvqOCTd11oaxiH/Fguy1J0hMkOHXaRjh07BX/c9pG6dbMdjlj/pMs72gdTp06Vp556UvcPZfkt3sGT7v1vgXI4Zs6cqX+A33zzzVK+fHqLQ6wNb7rpJvnkkwH6/EShzxD/Pvqon/Tv/7FaHFJP69MoFo418c0336herakHYdF7gPDbrVs3ufba63VrgkxgIXj55Zfr0meeaetjPnmGJ02apM/1qFE/p348yOkhPQo/jrRr11atKvGwTX2HDx+RupqMtYmtC1gO3bBhAy0n3Q8djuM4juP8elw4dBzHcZy/EVFxAvEFUeTEE0+Sk08+WcqXD5cNMin/tSKPMWPGNPnoo49lyJDv5eefR6lIiDDJskUm9dmWeOnzN3EAyz+s0syqcOtWhIEiKkBioYcwWKNGddl1184q4JQpU1rFItpUqBBLgZMFBMPqwacJBL+13f8rlNuz524qrMShfv904TA/mLDHfbB7kwTWoaGI/EvK+nCjzJ07S376aaQKTYsWLVTrRMQ+rAXJJ1xeXkrHB9aKPAZ5jY8otBWxiHEYWs0WlpYtW8i+++4XHPtK5cqVNV60DUlYHxIHwa5fv35q6ceSecRv/nBOlza/UAZLoREkL730cr2HWMnGsT7+4Yfv1foPMd4ERqsn7UGE7d//Ew2zI6mOll+3bl31vlSqVFHvU/S5wuoUTj75X/Kvf52i9yOJMC+R999/X5d4FylSSK0LCTf4PmLECBk4cKB06dJN6xotK85LL70k999/n953xsPEiRPl7bffy3L8lAT33ayNTz31FHWsgvUm7UpXjuM4juM4v46ocPi//RXkOI7jOM7/jE34Fy5cKPXq1ZO77rpbzjrrbBUNmYjb5P+38NNPI+TEE4+Xhx56MPg+TIWakiVtKSYOMkLRMil/EwS4hvDHMX/+fBk3bpysW7deqlatKocddoRcfPGlcuONN8m9994f1P0uueiii2WvvfZSIZE99EqXDvcXzI9oaFBmJsHB+XOI3wMbj3Fs30lEUcZF3bp1pGvX7nLaaafLbbfdpmPj9tvvkCuvvFKOO+5Y6dKli+bNnprDhw8LxmTpYGyGS5qNdGUZ1AthCqGrXLnQanbYsKFyyy03yQ03XC+TJoV75iHW5pUPEKdSpcoq2lNPRLEpUyYFeZcXrGoz5ZEX4T6RW6V167bSoUMH7a900CYsgtnfMLpkmvK5hlUf3pZ32627hhOW7jkhfMqUqSrWkhd5xO8pQlyNGjVUsKYv07WTNIif33wzWJYvX5q1LNwgX4ThNm3aqGhoYenqtn79Whky5FutP/eIeLxj3nrrzVSMZIhnWT788CPBe3Ox7mFKOxzHcRzH+f1x4dBxHMdx/kJCMeAXmTRpcsoa6VLZe+99dAIdWnCF+5blBfGik/hRo0bIOeecpd5o589foMsuscDCQsvEmXACnjtvJvIQxi2gy1HHjh0rX3zxZVDOL0Ge58uTT/5XHn30cbn88ivk5JNPkn337aVLKhEezKIunQCRjnh98tNu548lek/s+6+5L+xfyVJiPIK3b99BDj/8CLnookvljjvulMcff0IeeuhhOeaYY+STTz7VffHYt4/xaUcm4nVhuSsegxG0vv76Kzn77DPl2Wef0WsIU8Cv50mQD+OVZw6OOupoefPNt6VkybLy1VeDpEyZsvpcEOfXjmtANMQislmzZrksCA3OqQdWx19/PVg2bdqYw/qPa/QJ9Zg/f5GK9Ea0H+JQ/3ArgHApr8XlnYFV5caN66V27brqhAYy5TV58mS1nGUpcjQedaduy5YtCd5fe6dCk/OydvNe4n4D94d20Tc//BDu2Qjx9xpE8yxWLOwfrE7Jw8VDx3Ecx/n9ceHQcRzHcf4isifQc6RXr711z7Ldd99Dw7jGRDgv8QRssmwTapb+7b///vL555/rEtBq1WpkWQfFJ+FxyIu4lDtr1nQZOXK07kNGfv36fSyDB38rl112uXTv3l123nlnXTJpoozVwyfvfwf+HvfAxpyNO8YVAnm1atWlU6dd5ZhjjpO7775XhelXX31FKlSoKD/++KMuWWUJLSJ0PI90MP5xoIJVLWXgyOXcc8+VI47oq3sygo3VJEifLT4VkHr16suoUaP12vDhw1XM51qSGJYOE+H5xGN1p06d0lr1Wb6IczgeYf8+yrO4XEfMxzJ57717BnmFy3kzvSOwEP7yy0EqXMarTTqEUvaobNKkmVSpEi7tzgTL4OfNW5i1VyLY59q169Sa+ZRTTtHzvMCictGixUE9QtGWg3vHPpA33nidxrG8kzCR98Ybr5dvvvlGx8qvuTeO4ziO4+QPFw4dx3Ec5y8AQYCJ7oQJ46RGjdry4ouv6nJBgwmwHXmBAMAxc+YMOeaYo9TjKRZeWAUhUkSzyJQf15i4r1y5XL76arA0btxU7r77bnVygIUh3lZZhoqAkoTlHf90/gr+Hn/iMQbsMBCDzJqWT7xtI0IfffQx8vHH/aRfvwHqaRcnG99++63GwWLOxKUk4uUgAJKGZcFDhgzRvQ8HD/4qo8hm6a0MrBOLFi0iixYtlV126SBDh/6gFnGhsJh/iI8IivdfvIhDtK5xBg/+JmjzVn0/kDYeb9my5dKrF56PQ9LlA9OmTZOFCxcFcbBmzNl22smWA3h57tq1q4Yltc3C1q/fKHfddYc6I2GPUyuXfNiKYNKkCbLHHj2lVq3aGp4OS0efbNvGvoTZYdyfsmXLywcffKznkK6/TQQ+88yzg///ot7AHcdxHMf5/XHh0HEcx3H+RLA84kDQ+/LLL6Vly7ZqLfO/8t1330nfvkfKt99+o15R2Z/NrJ2MqMBgk3HC+E7c2bNnyyefDJThw0epGDBgwEA59dT/UyunQoVC4SYTln+0nDhWbpIYkE4ggGi6TPF+DfF8fq98t0d+Td/kFZdxxBjhiI4p0mEp2LNnT7nvvgdk5szZcuaZZ6kF4ujRo3WfPrMyg6RyomOPvNlbsHHjRlKhQnnZbbeeMn/+vNTV9FjdTJjiWf3ww/7Sq9d+8vHH/bOerbyeB+pHPtR548Ytur8h9SBtuj7asGGtvP76S9KmTesc4pzFJy1Lng899FA9h2ib47BlweLFC1Xsj4umLFNGcMORTIcOoef2eBzaiMUxzJ49Q0aOHCXVq4cOY6xcPosVKyorVqyW4447Kei39N6NaUe07XyNCpqUh9OmAgW2ytSp07LuQRJWPj+QdO7cTebMmZ0xvuM4juM4vw0XDh3HcRznT8AmzExsESI+++wLue+++2XQoEGpGJnJOdnO/s7+g6eccrJ069ZNli5dJA0bNsqyzkLwS4JrNulGjGH54Zw5c+Sggw7VaxyGOU+BTALFryVeDvye+eeHuEiSyRrtn0ZkiORJdDzlF+5dXACz7/H7God+5jngfjNWDev/UJQTdXhxzz33yvr1m+Tqq69Va78FCxboHoCUER0vSW0gP+KQH9+PPfYoqVGjpvTte3javQ7B6mGfwHLad955V/7v/06WsWPHaHnUIVPfkZ7rq1atkLZtWwXPaOjMhDpF847m8eSTz8qkSVOkQoVyWu9oG9lCAAH1qKOO1Oc8HZbf999/L6+++rJs2oTlZE5P3tSd8Fq16ubYkzBO9B7h5AbLxag4Rz68ZyZOnCBdu3aW+vXrpa4kQ7ut7Sxrtr1co2MmtGjeSV5++Tk9TycGRsffmWeeptaTed0Tx3Ecx3F+Pdl/tTiO4ziO84fARJYJLRNmluf9/PPP0rPnbnLOOefmmDAnYdej8WziPWrUSDnjjP+TgQMHSpcuu0qDBg3UOig6cY6mt3Am3OxHNnv2TK6oF9lPPvlcHnjgPr1uFkahdVfm+iWRqU1WdxOOosTPo1g6Pu17EtZO6k5fs3wRxwkIpFhw8d0OrhGHA0cUiEm0nWvGL7/8M0WIDF2Ui0z9acTjcK+4h9Hw6FgzbMxFr0WvJ0GeoRfiUFDCwu7888+XQYO+kgsvvFDKli0jM2ZM1/sXjtGQ6LiPQ33xLtyr1z7qOOWAA7KX+uYHnpkgF7n33gfloIMO0uW/Jkimaw/hW7ZskqJFiwfP+x7SuHFDDY/3ZTT9l19+rk6GtmzJ2RbicKxatUaOPPKYVGhuiGP545l51qw5uv1AOurUqanez9PBM2HC3bBhP0rFipWzyuCTfqUf1q1bq/ug5rVMGew+YbmIN2xrmxHe/60yffpsWbp0cSo0N8SzdwYevBGaeXapb6ax4DiO4zjOr6NAjx7dMv/15jiO4zjOb4YJMZNYJrkIV6tXr9KlgQ8//JheZ4KczqIGLG0oXISC28aNm2TAgH5y0003qgVWnTp1six3mEjbZBosvX2nDuSFE4o2bdrIKaf8S5dQ2nWDNFb3TPVLIlqmQV6Uy7VQ0KMv1gRt2SArV67UsNWrV2tcrCgRLBCPSBOm1UtB28gr/B4FSyjaj0C4du0aFZXoJ/aKI5+gVtovlpblkViRUc/wExGsoF5fv36NHHpoXznhhOOkVauWQZ3DcqNQJ6y4Pv98UHAvBkivXr1SV3Kzdu1qeeKJJ9UbLX0Zt/4C+qFAgULyyCMPSYcOHVOhyRx44AEyffo0qVSpktYjCv27fPkyOeaYE+X888/NKBoZ9P/IkT/J1KnTU32VvZQY0QuLs9KlSwV1L6RWb3wvVapkMOb4XlrHHm2ibfRndPwZNib4BMs/HdYu4pAmGp/7e8UVV8nXXw/SPInL8mHLPylv4hDGJ2Nq4cIFwb1tK9dee420a9c+V/wkrA0sib3ggvNlxIgRuucnaQmPQ1kI9DgdueGGm2TXXXdNXckJ9aHv2KOU8cZ+j2Y1bPlSxuLFi4N4BYJx9KbGi0N8S8NzcOutN8n773+Qw4GRwbOCxeGZZ54ZvAP+nQrNDfGwKHz77bfkxBNPkI4dO2bdQ8oi35UrVwVlitxyyx3Su3cvDc9Pf/KMX3HFpcEz9EXW/QPS8/yWKVNarr76Otlzzz01PBN4e7/44gvVi/Yuu+yi6ZPuieM4juM4+YN/p/lbuk+fQ1w4dBzHcZw/EibBwD++kydPkrPPPlduuOFGDbNrmSbZ2UILx07qJfWVV16R//73CXWS0Lp1S9mwAQvBbJEhCqIE4QhzCFhVqlQLJtYd1fkEn4bF4zPdEudfC5N3LIBWrFghc+fOCY65smTJYpk3j+WmS2TRokXC8sJly5ZmxaONCBGbN2M5idVZKrN8Qj8VLsyejKEQiCgYhErBgrQNUSmMl+r61D3Itniiu4m7ejUWVL1VzDTBKArx/87C4XHHnagehfMSDrlHeDPGoQ7OSIIctG9MDCtWrHhQ50IqECJmlShRVMqVq6DWXeRdtWqVIKyUegxGICtduozUq1dPl9oSjtAYXY4MNqaTxms6SMNBvUwE++CD92TUqDEyaNBn6qGX/qBvw+cJ8VCj5cLyYnl+3bp15Oabb5Xdd++ZupoZ+pv8x48fK7fddrt6W0bgircRKIP+ZRuBO+64S7coSIJ49MVJJx0n7777vgpfeIEmzN4NlEsbr7jiCnUGwnm8/8gHCP/++x/klltu1D0dcT5j+QBpqRefLGcuXDh0wpJ0P6y9PBPNmzcN7nFVtcq1uFzDyzOi6E033Sp16uRtcRjlrbfeCPrmztQzm/3eCS1/18gJJ5wkl156mYZZXdLxww8/SOfOnWWvvfbQ/ssU13Ecx3GczLhw6DiO4zh/Aja5Z5KOVVenTp3koYceUQsgs+RJB2mBCb0JJezt1rfvITJnznxdvonnZAS36CTe0gHpsDBENEQ0a9Cgvtx4443SqFFjFXjABAP7zDQ5j+YN8XihOBkKgAsWzNeljTNmzFbxYunSJcGxVCf0mzeHS1CpNqIUjleoK5Zr5IknW86pT3bb9P+p+nFOXfVSQO4/ZaJ1jdfbsPrb9Wh7KJ92JAlCQJq/s3B47LEnynnn5S0czp07T2644XoZNOhzqVatWlbdyJcDIZmxGlqA8h2r0fAcKy/6jOXciE84tWBc1qpVR8qXL6fjExGxWbMWmjeWimXLllNRN070HvA9ei/A6gM2JoA6fPnlF/LYY4/KxIkT9RoCHWMqSJUrH7D8aQ9WfG3btpMLLrggeD531fuTCRPYSY9QddNNN6jn4goVKuSoFxCX8X7QQX3kuuuuT4WmhzzZwoB0USGPcKxwadNNN90svXv3znHdsDDuDWLwE088rgIc9zQelx8geA/07z9Ay6OMeJwoXD/44INSVo/ZfcTYoG7//vf/yemnn55WHE0HlsddunTRPLFipQ2UxSfW2U2aNA3eWTdL8+bNE9scZdy4sXLcccdq+3k2rF2O4ziO4/x6osJhwbp16+T9l4zjOI7jOL8KxAkmw4iGWK3tt9/+ctVVV0vVqtX0OhPaTJPaqEhCPJwiIAQNGTJE6tevr4JQ1CqJw8QVvlM2YuW8eXN0f7UTTzxRTj7539KyZSsVEpiEW1wOiH6PQ1zSgJUJ1AGLo0WLFsrrr7+hS6ife+45eeedd+SHH76XKVMmy+LFi1RUpE5YoGGhxT51iJcsUURsQCxESMWyydqBKGGiVfxAEMEqMTxyX48elk/8iF+PpiF/6puuP4D6Tp8+Q44//vg89onbpJZp7G1J3yUJxiwRRgxl7z0ceGQCi9MVK5ZLiRIlUiHZ0G8bNqyXVq3aSOfOu6oYmwlEnyFDvlOhF9EPIY6+QHQhL6APyIeD+1eiRMlg/JXWMcj94xyLMbDxMHPmTBkzZowMHfqjfPHFIPnuu29l4sRxal1KvrTXxGuwe07/8Bnvdzvn075TR8ZL/foN1PEIewOy9yFt4d6lE32jefMsYHk4YsRPmh6nI/Gy41g98V6ONd9PPw0X9vhDEI3WD7j33M899thD65TUNvjhhyHy1FNPS4sWO+s7I5oPn1jhtm/fQY444kjdF9DCo1jeWPViyTd+/ER9tqJ5AeObJdR33HF3ljOTeJwoN998s9YP8ZexQTzKYhwvWbJEKlasJP/+96kqEpvwlx/Io3DhIvLJJ5+oNTLjifzpWyCv+fMXSOPGTYLx3ErDMuVdpkxZWbNmrXqWx0I2U5scx3Ecx8kM/w7zt1bTps3cOYrjOI7j/BEwYWUSPG/ePLWaOeOMM6ROnbpZ4lt+JrQm0L333rty5ZVXqBCHNRpiiU3Qk/Ih3YQJE/Qfe4SG22+/Q4477oTgH/4mOlmP1sHSJ+UTB+HDJvVYLFGf//73v3LHHbfpXnGPPvqIfPjhBzJ58mQVrxCX8IRbvnwFncgjYiDmUBb1oH52UCcOwg2rH2X+FUd++uSfDmMJQTAcF9lCYbztdn847J7ZvaKvTFQsVaqMWtRWrFhR732RIkVl9eoVMmbMaHn//ffl/vvv0705GTOvvfaqfPvttypkkQfjKxPxepHG6lCzZk05+eR/yWWXXS49e/aUNWtWq4VrdDzFIS/GI8uuJ06cpOMXhyKZsDrQD4D156mn/p+WgzgerV/4vUCQ93gZO3ashsXHuHHnnXdIvXp1td5WhhGKaQVUVGQ5OESvGxY2Y8bM4PmfGHwLf7yIxqXPVq5cIc2b7yx77LG7hsXLi/PCC89J69attX2kB4u/atVq/TGkbt26ep6pv6MQz/rwP//5j2zatEHHgeXLdSwssWadOnVylmCZDvJCBEYwZ/xhaZ0pvuM4juM4+ceFQ8dxHMf5nQknxVvV4q9FixZy1llnqXiYFzaZ5mCCzrLQDz98X+6883aZNm2qNG3aVC26bHIenxhzzoR56tQpuufY9dffILfeeodUrlxFr5MvcSxd0sTayrfvBnGZ2P/44w9y//33yuWXXxrkf508//yz8vXXX6t1WcmSJdSKrEaNGiocISaZ0ECdOeLlpzuc3w7DI/9dSH+H8dP1e/ze2BEnHJfZwhEWaVhFVqpUWZctIyBv2rRFJk2aKIMGfSkPPPCA3HzzjfJ///d/8tprr6j1GsTHTDqi9bCxteeee8k111wvJ5xwsoqCiIeM46R8LC31xMnJ1KlTg+flFhk2bKiGJ2FlcpAvFnPHHHOsnHLKf9SKj2fEIA7XZ8+erQI7PyKYOEp97PmaNWumDB/+k1om8sxbvYhD/BUrVmofdu3aLeNSYNJhcYeXdSxhseAjzPKjPL5jAc0ep4ZdN6J91a9fP11OzLMcfR8ADlgqVCgvPXvuriKx3YP8EC0Da+zWrVup9WtUmOS+IEZjqTt27BgNT0e4l6mo5S+iaFzEdRzHcRznt+PCoeM4juP8zjCJZbLNvmdnn3227LtvuP9dXhNrrnMwecZpyIsvPi833XSTChJ4QQ7TEzN3HiwVZUkw5R533PHy0EMPy2GHHa7igeVrZfOZrh7Ew7oHbBLPvoWffDJArrnmKrn88svk8ccfU2tDykPYYLmqHUz2o96QrazokR+szn/lsWNAW0Nhzdoc7QMLyw9J9xmxycZCKCQWD8YJy5xLazhi4RdffC633HKzXHjh+fLkk4/rPnpAHqSPC1ZJWFzA+vD888/XvfEQsRmnCHhJWD0RxsqWLSujR48MntmzNE06rH0ctAsx79xzz9Flv/PmsUw62xKS55J9PD/99BP5+OOPNMzSGa+//rrWnbhWnyhYCFavXjXjcnhj1aqVMnToUH1mqVe0HL4jqGEFeuyxx6ZCc0M8S/fOO2+reGfvgijk1aBBQ9ltt93U2o80SfVPgnjRPPfee18VNK1cu86YwYv1zz+PDt5L2aJsbsJya9asIe3bt9PvjC/HcRzHcf53XDh0HMdxnN8RJrxr166X6dNnSs+ee8pBBx2s4YhxeU2sERzNIqlfv4/k4Ycf0Mk5SynNoiaennPyHT58RDDJLir33HOfem1mWXQU4kXTJtUD8cIm68aTTz4mhx12qAo7WB9hwVWuXHm1gGJvOwQX6sxh7YseRvwcKI/JvQlLUSzP6EG97AidquT/sPTxPDMd8TptjzCuChSgvYWC7+FS9Hg/RKFPuG8m0iWR7r5bGoQ19gMsVqyoilIs0S1atJj89NNP8thjj8mpp54SjLebgrG2TMtPEq2SoBzKoI5YOvbp00fefPOt4NnbJkOGDA7KZOlr7ntq9aMsvAZPmTJFLr30Ug3LRLxdjz32RPA8FJYlS5Zm9RtxqAsi3ieffCrjx0/QcPrd2oUoj2iJgGt5Uk/yQAAsUaKYOlZiX1DCk9pgsCx64cJ5Ur582Rz3iDSIezNmTJUePXpm9VU6uM7+jFgYlylTQeNG70O4dFikSZMmUr16DQ0jjdU/L+Jx99//IP2xpGDBnOkpkx9OsKKmL/ICq2e2c8DRCoJrfPw6juM4jvPrceHQcRzHcX5HWErMkjv2PcMZCiCMMQHONKkOrWPC688885QuA9669RcVDdOlw5kGwiIedvfbb1955ZVXgwn4AVKsWM7ljHlN5hEVwn3UwjryedhhfdUZwq233qoOLSgH60Xqg1gYz9PO+UxXHuXQTspiSSeiEVaK7H/Id0u3adNmtT7Ci/SyZctUrFy0aJE6sbADpy984oSDpaCzZ89UyyS+2+fMmeF34i1YsEA/2ZuRg3OcaCxaxOcCdSiBN2LaigdoLMdY6ppJpPk7k+YW5ALBEEs3PNguX75UVqxYpo5XsPpbtmy5jmUcxXDfEF4Rn8wpCveLexmO3bxJGhv0LwfiWrgnYhF1lPHss89Kp04d5I477szK38ZOOix/8jNRjOXRQ4cOk9NOO0uXR+PVmWvkFa+3pdt5552lX7+Pdf9CI1251h7S1qtXX959910ZO3a84GGafgPi0F8//zxKHn/8UR1nQaheY1/FMWN+1rZHyyAN9cNRSvv2HVVYQ1xNwtqKF/DPPvtCt0hAiCS91Y/vbB+wYMFSee65ZzWMOidhaY488ihZu3ZNUPfQcpFwPsmLtpUtW166du2iHoz/Vxo2bKAOUHACE8WWSA8dOlymTp2uYenqbeAtumzZClmWq/H77DiO4zjOr8OFQ8dxHMf5HUE4bNy4kS5RxvrIJu95CYdYxrAv4vPPPyf333+/Wt6ElobJ/1QTvm7dGt0v7oQTTpKXX34jmHi31Em1CQn5hXohCq1cuVzuueceadeujQwY8LE0bdpIateuo2IRwh5x0rUhr3A+aSN5IaJggYVl18CBn8snnwxUwePrr7+RwYO/lbFjR+l+cFggITByIISw7LRatRrSoEH9oI8b6tJN9pBs3rxFUNcW0qxZc9l552bBZzP1xNq8eSNdPtqgQSO1JKtTp6ZUrVpZKlasoiIKy7/LluUIBavQU/MWWb9+QxC3lnqKDu/Lr+vPvxq6PL9aCe3baafCwbjdErR/o/b1xo0IhYyjzSrijR8/Xn744QcZNOgr+fzzQXq/vvrqKxVzuY+Iftzf6L1OIhrHiJ7znfFBftxrxLT77rtbevXaW8aNG6d1ZQxmwsrg+eBZQIxjy4D7739A3nvvHfn4437qlZi8kupiz1vjxo3l+++HyD777KnnxE9HNJ+WLVvLK6+8Fjw/A3XfRJ5/6kF6nme8jj/77NM6xuDpp58NxmboaT3+rFN38saqL5M3dhufPDOIk2Gc7OXSXOf55XmLku7dYvmzryp1lsi+lVY+76oaNaoH/dRUz62d/wtPPfWcjBo1JrjvFbNEVPJmjGEp+d13g/X9avVLB882+y6WLl1Wt26gnf+0Z9hxHMdx/k4U6NGj2//2r7zjOI7j7OAwYWZyyqQWMQXhr0+fQzScCSsT3XSTdOLYRHjEiOHy73//S5YsWaZi15Ytm3Kks7gcWOTNmDFDTj31VLnttjuF5Z+hSIkQlEqQBuoUrw/7zJ188knqXKVWrVpqRYSVoU2609UfEJsQ3pjsI+zY5J5z8uAg33XrVgf1XqeiFHTu3FEOPfQwad26pTRp0kzq1m2g7fi7QBsOPvhAWbx4SS7hiHuByIWQNmDAAOnVK9zHMom1a1fLE088Ka+88rLmQ7o4GzfizKGQPPLIQ7rUMhNYwmFlyj2iHlG4V1hpnnDCiXLOOeeqdeDvxerVazTv0aOHqzfkd999XyZNCsUorNIQmRD9OGgjY8HEZg6z/Mo0lgxrF588U7NmzZIrrrhCrrvuBg03bMwlQV9wkAfWo3DGGWfqHp3du3fVe2FxonUysR+xul+/ASog42CIfIibSUQ0SL/LLm2DPimngjTpqAMex2vVqh303XtSvnxp6dq1uz47HKQxKIvniLZxH4888ui0z4b1wWeffSoXXXSRtoV7Ee1DxDdE+jfeeFOOOKKvhidhffHee28F75XbgzLD+xdtM/XCKhVP7VhVWz8m3ddM9ycKdaQcDpaYL1u2RL+TL+l//nmMOofByQyW0EkQF6jH4MGD1RM9FsQIiY7jOI7j/Drsx2TmNH+fv84dx3Ec5x8Kk2PEBsSNXr32yRINOZhUJ02oDZvsDhz4mYpUK1as0qWSW7duzpEuOrFmDzUslj766GO58867VVAgn7CsVII0kE8034EDB0jNmtVlr732lipVqki7du1U+EHsIF48fhzqU7hwUV1SiZiJ1RPiEvuRUa9WrVrLEUccKTfffEswmf8h6KtsRxxDhvwol156ufTufaAKpX8n0dCgfU5I6dKlpG7dOnLQQYfK7bffLRMnTs66l+PHT5ZHH31MTjzxX2otyB6Gy5evlIULF+qSUROhkyB9HBvrpMHZSffu3eT6629Ua1KE2vxAWkSnqHD12GOPSv/+Hwd1H6dL4a3+Uazc5ctXyHHHHanWqghRFm7PbCbIE+s5lg3zXHLwnmjZsqUukb/++mvkyiuvVy/k5BkfZ4jrPINY1u66a+eMzwbtw/Py66+/ocvww/0Ss0VDrs+dO0c6dWqfUTQEa98XX3ytkwWg7lG4jsjNe8qukS4JyqZO/fv3T4UkQ9/ACSccL4MGfZqVr/U5lsILFy6QadOmaXgSxLN6tGzZQnbbrUeQTwHtR8dxHMdxfjt/v7/QHcdxHOcfgk3OWQaIBVjv3r3lscf+q+FMrpMm04TbAUyQp06dKpdddrGULl1O6tSpo6JbXEgA4s6dOy/It4Bcf/31aoFDPky6003crS5WnuWLl9JzzjlLzjjjDLVO2nvvPdUqCQEwKhQQ39pp4MSBMpmQs6/a4sULdS9Blhjuueeecu6558prr70m77zzge67eOutt8m//nWKTuaBumzalH6vOuefAWI5B+Ojdu2acsghh8q1114jAwZ8qtaIDz74kPTte6QuKWeczJkzV9asWaMWa4wf0tnYio+xKPzijYOMAw7oHYybDXLSScfLQQcdqNdMFIyO8TjxZ6l37/2D5/QpGT16TFCXbEHT6mDniJ9Tp86UDh3ay3nnnasOOkzIgnTlGTfccL3uwQnkTTqebYTV0aN/1qW3OCCJ14+4BQqEz1jDho11STBkKm/69KkqqNauXTvrmc3u0wLqaGa33XrqWXZ4MlOmTNY9RKNtNagD1sNt27aS9u3bp0JzE60r74Kbb74xdZbcDusDrEp5NzBGDPqBvSo3bFgnw4YNVRE6L4oXL6nbLLDfa17tdRzHcRwnM8mzDMdxHMdx8oQJaeHCRWT27DnStGkzueeee1NX0lvgMEFm4mzLNrE+uuGG63QpXvXq1fVaVEigDM7Zs2zSpEm6d98zzzwrRx11dNaEOCr0xbFll5bnnDmzdLnfSSedJG+88Ybu/1a1ahWdqFM29ba4lr+lZwLPclUcafCdctljcLfddpfTTjtD97174on/ytlnnys779wyS/AwyD/0HIsl2I72Jwh9uX0JGDZWTDyMUq1addl3333Uuc6HH4aWsfvtt1/wnDTVZcyIT1iosq9ifPzG86IM4mABiDDGXpZY2x511FEybNiPOqai4zYTJlodcsghwfN6t1ruIpbbGI+D45gSJYqrQ5Njj+WZC8Mtn0ycfvqZai04efIUXaZszzZiZ/h+SLZIJg7Wfrxb2rbtkCV+xeNF+eGHH1WYZV9FBH3ysH6kr/lx49hjj9fzeP/Gwbs1lsPs0RrvE+41ee25597SoEHDVGhueD8A76wHH7xfHSBNnRpaC1J+vP9sDDRvvnPQZ53UIZKFEZ/+Q0D+4Yfv1YIxL/DY3aHDLsE7tVZQZ/+RwnEcx3H+F3a0v9odx3Ec53eDiTxLipkQv//+B2oVA0y24xNuw8KZCCOcXHDBBfLmm6/LPvvsncOShskyB2UwYV68eIF+//DDj6Rjx046MY+LglEsPQfXif/tt9/IWWedJddee5XuUYboV6xYiWASHwoJ0Ym6wXeEiJUrV+hyyKJFi0ibNm3lxBNPlEsvvUwefvgx3b/vuuuuz4qfDuqPaEh1M4kg2xt0SXiPksfEPxXaxH1ECEsag1EOPvhgeeSRR4PjMTnvvAvl2GOPlcqVK6nXZvYwDEXlcOzEx5CVw0E8Dpb1v/vu23LSSSfIU0+FVr5Wh7zGIDDWL7jgQhX3sILEIjJTG1guvXDhIrn11pv1PK/xixCPc5eLLrpY5s9fkCWQUgYHfWZ7XcbzwvEIYibLslnaDJnqhhOhjz56T2rUqKrvkGhc9k7EGnq33XaTtm3balhctKO/rM/wKD5oUOiZGeHS8uI66WgHewzyDrLwJGxPyQ8/fF+FPixGhwwZomFJfRetc58+h+m7Jt5kBFQc9WARmR+aNGkcHI20T+yHGsdxHMdxfj07zl/tjuM4jvM7w0QaT6VHHXWk7lWGOJdJtDBseeW//32qfPvt19K+fUcVL6KTZ/Jhgh2Khoulfv0G8vbb7wRps738ZhIvrB5M4Knjf//7pFxzzVVqTUReWG6Fe3+F8Sy+lcsnyyoRdjZs2KhWRn36HCy33HKb3HDDzWpVePDBh0iFCuU1HXkxOf9fJuhWhz+CPzLv/BAXQf5u/Fn9g0OXww8/TPe2vO22O+S8887XZ4f9BhlvWMeZwBavE2F2sM8nYhhCNM6IHnnkEbWSs3j5gXjHHHOM7LXXXllLqNP1A3ErV64s/fp9LO+++04wzkMrx3TxTThDnD/++GN0f76kuEnPMO8RnrcePXqoB/F0WH6jRo3U/RR5rnkOLc+wHwoE74+luu8q57w7omWSB4e9U378cai+IxA143Xj2abIhg0bqOUopGs/ZdFHH374odStWze4t2tk+PBhWQJtWLdkevbcQ4oXL6KCqNWBHzfYSgHLzzFjxqiAmQnqVbZsuaCezbVtvEcdx3Ecx/lt5P5rxXEcx3GcjDApxZKH/cvYZ/DFF1/ScJt854c333wtON6QRo0aizk+sMk0+TNhZrKMF9bu3XvIPffcL5067ZolTkatl6LYRJ70XEOwwOHAvffeo8v/6tevr8IldY2mtXS2JHDGjFkaDwcIeHW9774H5KqrrlKRpV69eho3CnEpMy425BfKtzpA/Px/5a+2OKKrY7fqb8Wv6e/f677ssktHtfh77rnn5OCDD1Xv2ohNc+fO1ftlFrBJMM4Q+ipWrKSWaA8//KBcd93VMmHCuFSMvOEZYKn+hRdeLL177yfr1q1NO054VnjmsRJ+6KEHZejQHzU8Xb/Zc4DDof/85zS10iNt/HmNQ16bN2+RqlWrya677poKTcbyev31V7UtPLsWRpXov3nz5uoejW3bttNwiD/30XfBzz//rM6NaGsULtM3tKt7993UgRJpM7Xnm2++1qXFtJ243347WM8hU7oWLXaWfffdXy25ETBJy3J02lOkSNHgvfmmzJoV7h2ZDtLAzju30C0gsDr8Ne9nx3Ecx3GyceHQcRzHcX4FTEiZoM+ejTOQ8rqZv1kXZRLNbCILX345KEh3ubRp0yo4y2lZxXfyQSBEQMEr8SWXXCLNmzfXaxxMuu2IEs0HK0GWQF944QUyYcJ4rSvOS4x4eiblWCtNnz5dhgz5QZciYw3GEuR///vf0qVLV92nLFpGFOpMfpn6IB02oY/WJ16//xWz8vz1/B51II/fry35I/k+pcPu358F95wxDuxrd+WVV8q1194gZ555pop5M2fOUgGLeqUbc9SXa+xBWLJkSRk06Et5/PHH1FGPkS5tlIYNG8rpp5+uVnTLli1PKzDxjGD1hmj18ccfZVn3hZZ46cthv89OnbqoMEnemeKGZReQOnXq6jMPmeJzaeDAT9Xyl3h2D/lgyTOWlH369JGaNWtoePw+850wDn4ImTRpopQqVUqfl5zlhtaKmzZtlgMPPEhDouUlcccdt6o1KeIfQiTWyzNmzEhdTQ/WluyHiVVpdBxTPiLgkCHfy6JFi1OhyVi92rZtI7vs0knThn3rOI7jOM6vpWDdunXCTYkcx3Ecx8lIOFFGKNgiY8aMlSuuuFItpaIwAU/CJtn9+vWX6667JsgjtHZCPLFJLnFMiMA6sF27dnLttdertRCTXosXn/xHIZwln1dffbW8/PKLKnI0bNhIxU2sdqKTffIM8xKZN2++4OG1R4/dZPfdd5e77rpLl1liMWVxLW26sn8rlicHZeDpFussRJxFixboUu05c+YEbZmhXqWxRJo9e6aKS7Nnz1KnEPPnz9O95NgvD8GJvdoWL14iS5YsC47Fuqcj4VxfsoTw9Ad9Ua1aVbnhhht0j7TokskoiCvTp8+Q448/Xj0HpwOxZcSI4epJlzYmiZiMKcbWAQfsLzVq1EyFJvPKK69oe7D6ikP/sT9e69at1TFH3HIsHVu2hPvqIe7Q94whjtDqL7RwNeL3nzIhHg7R8ZYE1xhbiEXsEdqmTWsd74zXadOm63OAWEf56fIinPSkmTJlmu6Dh8BUs2YtvZ6pfMsTpyIIXHjtpd1FixYLwlORUhCXenCwLBohnX0IM/UNbeM+YSn33Xff6lJb0kWfZ4P8sTbkOT3ggANUrDcLyHRteOON1+SZZ55W0ZO4xCMfxiuiYdmyZeXEE/8V1DNcWhyH+Jb3N998I/3799N3EuMmWmaQZfD8LA3GVVtd3k39IV294PjjTwzGYEcd/8SjfqVKlQzea+1VnEzC+gXR8/PPP9MxWaJEyazyGAvUg3dnz549Na7dwyh2zpigH4YPH659y1YP8biO4ziO4+SGf3v5txsHkAV69OgW/TnRcRzHcZw8QMTCOcADDzyoy/CMpAksYTaRx1PqHnvsro5OqlWrof8gR0UHIB5Wf3Xr1pe7775bOnUKnRAwmTcroKQygHCWJt5//33y1lvvSPnyZbNEF5uQG5wjaLDn2KxZs9X5wxlnnCGHHnqo7g1mZUXzjn7mh3jaOIhl33zzrbBfGeLf8uVLg2NlMNFfFRzsdxfueUc8Jv2hhVqB4PvGoJ+sTWGfcW6fhQsjDrDUm1IQRlhiST+TZlNQr8xWkZTTpElDeeed91U4ZEkseUehbQhNn38+SAYMGCC9evVKXckNbXn66SfkpZde1nxIFwextECBQvLIIw9Jhw4dU6HJHHjgAerwgv0CrY8N+gSB9PjjT5Bzzz0vrUBjYDU3ePBgtVpbuXKViseEcc8QsCpUqKRjoWzZMlK9eg0VourUqSO1atXSMZMOG298xse4Qd3DcsJP4lo/I/Z8+ulAefLJx9UKDiEQEcjEsSjRfBCpeAa6du0i9957f5Z4mA7rPyv/oYful2effU6FM+5TUlnWx7vssovu98k+hFav+Dix53bp0mVyySUXySeffKJ7BCaBWEbfM065J5RPvuQZrYe1F/Ae3KxZk+A+VdS0Vj7XEcm7dOkS1PEm3dM0mi4OzlAeffSR4L3xhrYdxyhRNm/eGry35svzz78k3bp1z9FvUaJl8Hn44X2C+7FQ68WzjAf3yy+/UnbfvWdifSyM+3/TTTfIyy+/HPRvg6zyyGfNGoTtdTJo0Fc6LqyP0zF16lS18MapCpap8TIdx3Ecx8kNWxcxd9F9kl04dBzHcZy8YeKKcIFFGsLBPffcK7169U5dTQ+WhbaH4e233yovvPCClCtXTs+TJrvkz+T4mmuuV6crQNkcJgqkY/To0XLllZepM5Ry5cqrABAVY6IQNnnyFLWuOv/88+Xoo4+Sxo2bqshjk3cm5HaeV9n55euvv5YPPnhPBUvKRoSF9evZgwznKvxZEopOHJQd9EDwPb7EkiWsZvVEH4WfoYdo+ksvpeCEtBw5LqQFwQZhjj+arC5RqNffWzg8Uc4999w8hUPuAeLcs88+o2PVxoxBfelTmo+11k47FZbSpUuq6FyxYkWpWrW67LnnHrmeBfIw0SudcBiHtth4pb/5juXojTfeqB6ZEciwgEUgiz870bRcx1p1v/0OCJ6524O6Fk/FSoa0HKRFtEZ0nTqVZyh8TqP33vqGZ2PRooVy0kkny6WXXqECnglY0fj0gT1D7733jtx2261aP8R5wqLstFMBtaItWbK0OgCxeoXXsp+/qFBGWXiYxrrW+g2o54IFC+TUU0+V8867QH9AyCSwIbZed9218sMPP6hIzPNlkO/SpYuD+15Wvvsu3KMwHdbe0aNHSps27eSAA3rrvaBcrAfJ6/TTz5ATTjghCMMKOrd4SN0JYy9DLKfLli2t9QeLP3HiRHnggQeC99axGdtlXHzxxfLFF58FfVsiR9scx3Ecx0kmKhz6v5yO4ziOkw+YrG7cuD74R3SjTsaxmEmHTfg5EAPg2WeflpdeekEFFya5UTGFyTYwsWbJ5ZVXXpElGppQEZ9cxxk8+Gs57bRTVTRkyWdUWIjCxJ2J9qRJk9Xxybvvvi/XXHOtNGu2s9bJ6gKckz6vsqljNF0Ulhc//vij6lQFayM8zLIcEucS1JU247gAcRVxoFSpErqUkwPRK/xeJuvcDgSA7O/Zn5Y251E29Znueu4D0Yh+yk/7/8nQtEKFQjHT+rNMmTJZBxZa9BufLLdFv8I6jaW6CNX9+n0U3NPjpUqVqsEflvsHY/xFzZdxhtDOp43hvKCfiW/wvXLlKirSv/DCc3o/WLpslnhxiE8elFu5ckV57bWX5OSTj9dl3cDzSB5xrFzqWapUGXnnnXd1j1CWbcex8cBYRYB6//0PZMSIEVl58BmFMBO7WHrcpUu3oO54+cWyMCdYSyLSvvrqy3pu6eJ52jl7kNaqhdOVtVllk4ZnH6dITZo0kUMOOUzrSn8RJ4ktWzbLwIED5ccff9RnPrTODQmFfAn6faUKkEBelJOEhX/99eAgr/AHAepF33LfEKpZEj1v3gKNF28bWFtatmyhS7BJE+1HvvOe5EcYoL1J9zVK7977ajz6OF3dHcdxHMdJxoVDx3Ecx8kHiBFTp86Q+vWbSN++R+rENZ0gQjiTUz6Z6H766ady//0PBBPeQmrRBdEJM99ZDss+fcccc5wce+wJGm7iCNej8eN89dUg9SiLZU+lSpV1gmzx4+UsX75cxo4dKyeffJIKeHvs0VPFAptM26QdkvKIY23NKYRu0WWGffseHuS/h1x77bWycOF8adq0SdB/DaVMmXKCGIigES6LLKyf5BEKF2EdogdQVqYjm5xpSZ7zPH+H5pT6/KeR/2rT1tA5Rrz9HIRzRO8NYx8BnANxkf3zWNrN3oJnnPEf6dy5k5x99tkycuTIrDzyi5UbhbGBBeU33wyRxYsX6dJT6gB236PpwvriEbyFvPnmO/LWW29pOORVF8Yycf71r5NlwYK5wXnOulg5CFUs1WbZbP/+H8n69eu0f+JE68Wz2bHjLsHYL5lDwLIyESp33rm5tGrVRsMtraU3rJyBA/vrUmxEyHgc3gWI8SwtBysjipW/dOly+fDDj4L3z3x1omTh8MsviIR8bpZevfZNheW2EjQsHAE6ONPvlGtlc33OnJnBETqwiZYVp1at2kFftAj6OqyDFck9Z4uI7777LujHjWFgHuy9975BXATbzfp+chzHcRwn/7hw6DiO4zj5gKW1CF177rm7LhHNCybETPDZp++TT/rrJ5ZsUXGBCTATaQRCLKkQOg46KPRYatfik/04OD+5/PIrZPToMbrfF0Qn9pYPYTgZwYHIjTfeIrfeersUKpS9j5lN4C1dJsjTrI6on7WJJZjdunVRa68HH3xAxo79WZezYtmIM4MwHcsKQwEKTFTIT7kWN93xe5OfOv1doa9/b+gP62frG85trNeqVVf3/sSKlOXoe+7ZQ7p3765OQeL8mvoRlzKqVKksEydOlsKFC6m1Y7FiRbT8eF6c27Hbbt3l9NP/E9TnQ61zPG4cew6uvPJq6dSpqzrhQYhPSkfZxYsXC57vgfLzz6NTobnhWeEgn6ZNeRYqq/AYzZO6YVlHfxmZxt+3336jS9KLFy+RVWegToTXq1dXTj75X1l7sNp9i2LlL168UBYsCJ29kFe0XtQZB0Q4OWH7A0jq8zi8a+wHDKsf6bBcnT59pv7YwTsxUxupT/v27YPPEho36BENJz8Ea5z43HffA1lh6bC6liqFY5XlwfjJn8Mgx3Ecx3FCfv+/sh3HcRxnOwMrFZbTsi/X2Wefo9ZOZg2YBCIKB+kefvhhee+991Q4i1oCApNdBATybtGipbz44suCl1bLO2myH2XQoEEqNGC9g6MG8iHPaDrKox7sJcj+cDheOe+8c/VadPKfV1mG5U/7yJuyX3jhWdlttx66FJFyWrZsJa1atdblq4RZOaTjiPaBhUWhjOgBeQkVUYgbP5KIlxM//snE+/T3Inq/+ORe8kl/YfmGdRiCT/369YMx3VrmzZujzjSaNm0szz77lIpQlpY06e5NFMow8Y29AbH8Pfroo+WzzwYF+RTMJeyRN+OTMMro0GEXOfjgPvLRRx9rXJ6HJEjHYXlhhVegwDbdozI6ZsHqxLYAs2ZNlf/+93FZuXJF6mpOqAuQLxaH++yzt+5pGe7Hmc22bVgxhs5c8hp/OE4qUya0JjRIw/uEerVv30F23bVrVr1pVxzqxZLszz77TMVGfnggrcXlOz+SIPS9916/rDDrpySsvLPPPiNo42a1SrX+pH6MDawzv/pqsOAwJh2kIa899tgrGEuNZO7cuWqZTB6E865jX9HLL79M43MtL9hftXDhnTQt5NXHjuM4juOE/DF/VTqO4zjOdoBNLFlGjLVT166dpVix4hqebvIcnYyOGjVSvaOG+8MVyTVRJT15I2ScccaZUrVqVQ1nQp+Ut03AgWWheM3FGgevo3ghZfJM2mg5fMcJyp577inPPfec7gPI5N/akIl4fYFJO/XAQ+lTTz0phx12mFxwwQUyffpUOfLIw6Vhw0aaP9aHpDchIR3EiR/RNFZHwriWjugl4saPKJZP0jWwcOJF+3x7hK6wI9oXdi/iRybsXvFJv3EwNnv12icYm4XkoosulJNOOlH3K2TJPOVZmmg/x8shHuPaxjbHQw89Iu3atVWPyzxDXAvzyE5r9cBSuHv3LnLQQQdqOM+J1S8ddu2xx/4rQ4cOU8HLwuL1q1+/sbz44isyZsx4PU/qJ+pn/VuzZp3gvHCCgFkwS3yM5xE9X7BgsT5/7MPJs2b5Eoc8EUebNGmsTk4gUzuXLVuq7xLSUkeDNPQT1w3C7H6lw64XL15aP7nvUahf2bLlZe3alTJz5rRUaHpoW7VqVbRuCH7WVtrNjxL5weqEyNymTXu1Ho+21XEcx3GczGT+199xHMdxdnCY6LL0smfPPWXPPfdOheYUWaLYBJ+92B5//HEZOXKELquLxrc4WAetWrVaPdL27t07hzgQJ3pt8uRJcuWVlwefE4JJNVZCoXUOB/HsE2cuY8eOk0suuUiefvpZqVevgU64mUinq79B+nh92E9s0qRJct9998pRRx0hV199lVoPNWuGE4NmMnv2HI2Tn/wN4tnE3tLgLRmRgv4hP6yiws8NsnbtuuBYLevWrdelnSxh5HPt2jX6iXUY16gX982cryCsIjDx3Q7ETcIoxw7uN5+EU59MosvfmditS0uBAr8EY4J2Yy0Y7v9Gm2m7jSVIuqfx8RGFuKSxvmd/v513bqn76F166SVy7LHHygcffCCrV6/U+DYGksYdWNlcYwzD8OEj5LDDDtdl/pSBYBaHdNxPBH/2+zv66CP1HlNeuvqTxsrbb7/9NS0Wb9E6guVdpgwiWQF5443XgvNsIS+Ohbdp01patGiufRN6rA77mmXPOCgBK8vgupV7/fXX6nsDQTQK+XDv6Ou2bdup2EmadPWBiRMn6DJrrKgtHnmQDqHtxx+HBuVdpeF55ZXE3LnzsqyOrX7cB/ZV/PLLr3S5cRIWF0vtgw46RBo1aqjPt0H/IADWqlUjy5FUfjjyyCPTluk4juM4TjIuHDqO4zhOGpi8MlnFsgfhEK+yeU2eTZAYPPgb9RzMxNeW2Bl8ZzI9d+4cXbp41113ZYUnQTgHebM0mKXGeEHF8QiiGtWJ1glrmkWLFqmIgUBz6aVXaLjlkan+YOUh4BkzZ86U559/Ts4//zy58847ZeXKVSoW4kwBjQOhDeHG8rcygmw0ryicIwqYQIe4h/CDcwg89i5ZskSF14ULF+oSyvXrEQMRWbYFbcMDcDE98KyMOMJRrlxZdchQokRxPczxCn1BGuqTLRiGYrCVRxmIT0uWLNZ+46AOJrL+06DrY12ellC4wvJ1U9Duxak+X659g8CCILtuXSjCmqjKfYjfU7BxY9Dn9B8HafjEqrZx4ya6R9/FF18o119/g7z//nupFNkk5Q/kGbUWe/jhR1Q4QkynDeGftjnrwIHA3L17N3n77bfkjjtu02vprM4sjdVh5MifgvE/I+iDdUGYBmVBPN4RPMcvvfS8jB07JnUlPY0bN1av7EWKFFahFugfxvCwYcNVpISk/gT2B2Tv0Hgf8bwihuNNuWXL1hpmbUmCuCNGjNTtBaJLioF7tWrVSn1PXXvtjRqWLp903HDDDTJq1CjNK5qWPU6p+08//aTeuSHelmj8Vq1aBe+a5vo8mmhMntS/YcOGQX98qc9xfjj44ENVoOUdQBnxch3HcRzHyU2BHj26+b+YjuM4jhODCSVCCcJW37595cILL85l4ZOOcePGymWXXarLCdnnjwm5TYTJF4ENsSqY+8orr7wuzZvvrNeSID4HE2Vo06aVimw1a9YIJtGhGGMTYD45EMAQhK688io54YQTNR1toVyrRzrIh8m5WW9hwffFF1/Ie++9I8OHDwsm3BulQoWKKigQz8SGeL5hvcNwhAIEJyb61CPsD2JxrVCWgENb+F6nTt3gqKPiSIUK5dViE+unokWLqBhYqFC4nxlxCQ9KC/JDnKI+JnjSDiwXQ5GSa4iGIViKcW83aRu2bKFeCBKhpSPx2rffRQ488ADtb8qL3kOgffTB558PkgEDBuh+a+mgD59++gl56aWXtY2ki8OedwUKFJJHHnlIOnTomApNhnpNnz5N95+jHlGoJ2MLL8TnnntuyrttergvU6dOkVGjRqtghVg0fPhP6jCD/qWfChQoGPTTZu0juiDsX0RBDvYYxCt2YW0b99jGatJYo35c5z4izvJ8cdx88y1q0VutWlVtE4elT8oHqLs9S+eee46OT8aKeTzPnY5neouKTDfddIscfvjhYWikrChWVzjrrDPl3XfflSZNGgXl5haU6avJkyfLv/51SpD3zanQ3FhZgwZ9IbfccnPK6VKJICy8xj0444wz5JJLLtOxCeRt6QYP/ip4F12Y1YfRevNsYol4zjnn6tYHeYFg+J//nKqia40atYIywmeZdlPmrFmzpEuXrsE76lUNT9dP6WB/y9at20jDhg1y3BMORGk+uQ/7779/jr6Os3r1KnniiSfktddeDe53ON6Ia++padOmym233RGM+dAbfTqs/ueee2aQ11vqsZlnnbY6juM4jpOTcB60Sfr0OcSFQ8dxHMdJAlGCSSUC1p133q1WPPkBS61rrrlaPvzwfV1GbAJcFISjzz77Qn7+eZRaBmWaNEevXXfdtXLjjTfJHnvsrv+YAxNhmxDzSfkICDfeeLMccUS4hI9wi8ORCcojLpPpMWPGBO34QB599DEpU6aklChRUsVTrhvx/KwchCU+N2xYr+IIk3wsBEuVKiOVK1dWb6+Igs2a7Szly5dTa6vSpcM92SpWrKSiIVZQfyXUv127NipGMR6i94h2/p2FQwRjBKS8hMM4jKsZM2YG44h94AoFdWdZ+LogzyUyZ858YZn4ggUL1UJz+fJlWhbPCZaJjA+WyXL7qQf9Z/WLjhPCuM6zQb8ihGO117VrdxXNunTpovFMOKPPoumNaN54F8dyF0tc9vZLJx5yjsdfnKx8+unAjMt5CeegfPr7iCOO0HZiNUndLA1xeF4Y5/TJlCnTJJ3nXupEfljaXXnlZTJy5Cjdd9SsYklfpkx5+eabb7QM8rZ3SPBVrrjisqCNn+pzGB2PwLNfunRZueWWW2S33XZLhabn008/ld69e0mPHt1z9JXVkWXMTz/9TDDe+mj4b4EfXX76aajUrVtP73W0DITJ//zndLn44ov1fmWC5+yuu27XH0WIS/3s3mAhzI8v77zzrsYlPPl+0saddKzxXPTpc2CW92fHcRzHcXISFQ6TZymO4ziOs4Njk3a8FudHNCQusCfYc889owIKFkHANSbKfJog16FDexUNKYdrcSw/Eweee+5ZefLJJ6Vr1111Ag42OeaTfBFzsMq74oors0RDEzjIJ2kyHYd45HX77bfJTTfdKC+99GIwyS6hYp5ZXJKPHWB9BUzCOcepwrRp03RPO9Luvffecuqp/5FLLrlUrr32Orn66mvk0ksvl+OPP14OOqiP9Oixu+7LxlG7du2/XDTcUWFZfePGjdQTcdu2bYPx30P23beXHHXUsXLmmWfJ+edfKFdeebVcd931ctllV8hZZ52ty+G7deuiabG2nT17toqBjGvGkok8NkZsPHLOJyIx4uzgwV/KjTder4IWey6S1saYpY1iY5BrWKn+3/+dFnzWVlGOsu1aFM4pC4u3Rx55ODgP8yE8Hpdw6gf16zeQvn2PkAkTJmUJvxafeFi0sqXBokUL5dVXX9FwnoN01KhRI6hrPU0rkm3px3YI9B0H7Qcrh+cJ61DOw3TZYAVJHbp06awelSHenjj0M2Iv7wyLyyfPMIJavXr1skTc38pBBx2kgmbQS2FAgJWB0yh+YDFP2xB/F1q9mjZtInXr1tEfRQy7b+yZyLiz/SEtTRxEQ+4J5QIWr/FtJBzHcRzHyY0Lh47jOI4TgwkpVlQ42TjttDM0LNPk0kQKrIUefPC+YDJeSq2IosKBpcc6pnLlKvL22+/oOcRFAMA6xibRzz77nNx9913qXTRp2SzfFyxYoILGBRdcJMcdFy7ZyyRcpAMroJtvvlHuuedumTJlik6ysbCi/kl9YHUkHmIHezDSxpo1a8p+++2n1kT333+/3Hrr7XL66WfIwQcfLO3bt5datWqp0GIC0t+VpHuzo8D44f5yf+gH9o5EpKldu5a0aNFCxeATTzxZl/E/+OAjwRi9Jxh/F+qedNxbxiTCMb9YI9CQh91r61c+uY6Yh5jGvp84/7j11lt1v8Wo6JhunFh4q1YtVcjEszdjMV0aBLlixYrKxx9/JJ98MkDDiEd705UBBxxwoLRs2ULbBNG49r1ly1bBO+N0/Z5EtA9atWqtlon2DHENQa1IkYJaN6D91lfDhg3VpczEsTAj3EKggu57WqpUyYztAJZVf/zxh9K0aSO1JrD8SIdFH8/+YYf1lYoVK2v4r8V+3OjZc4/g/VFFVqxga4bwXlIWfV29enX58cdhMnNmeuEQSFOrVk3d5xDrV8vb4Aca4tx//wOpkLzBwzdOYcKtDhzHcRzHyYQLh47jOI6TABZzhxxyqC5lzC9vvvmmOn3A+UG4N1y2OAKIJzhZuPbaa6Vu3boaxmSaIzdh+Lx58+Whhx7QiTZLeeOiIZh113HHHSeHH95XhRHO0+edzOeffxZMqC+Qhx9+WNuAUISIYAJkvFy0CayVWBr61VdfyfLly2WXXTrJueeeLw8++JDcfvsdwffzpFOnXbOcxETzyEvccP5aGDvx+xW/Z+w5hyUqAtM+++wrV111tQo4ONA5++xzpF69ujJp0kTdR4/7n7SElzIYYyyNZgkx4/nFF18IxtCDaq0Wr0ccrtlz0adPHznyyKOC860qSCal4/lAZMdC98knH5eJEyfmWQbtxurt+OOP03FOfaPx+U55COY4LAKzGIxCPEu3++67aT7suxiUoGGIguzLOXbsWD235xcLySFDvtH9GenHKLQdMa1WrTpqJQrRcpL47LOB6tm4TJmyWX1HG6lzaO1YSLp27ZqK/eshP9qGleC//nWqWmryLrHxwydjh3cM+z3GhlUW0TawvyQ/yIROcHLCNgjjx4/T75neeXbt8suv1Lbi9Iew+Lh2HMdxHCeb/M8mHMdxHGcHgEn06tUrpWLFCmr1ZKSbhDM5tsnobbfdIjVq1AwmoTm9zpJn6dKlZOjQYXLCCSfp0lyDfJPyxvHExo3r5a677lAREu/FEI+PY4nly1fIIYccoo4ZsL4xISBd3ka0jgMH9perrrpSBQs8lUbTRr+TNwdtLlKkUBB/vPTv/6l067a7fP75F3LffffL6aefLnhcRiwMnZUkT8qj+Tt/P+y+R+9TXvcKAYtlvR077qpLm59++ll56aVXg7D68sUXX8rcubNz5MFYgmgZiFnly5eVd999R2644XoV6jKVbdfCcb+TnHLKKbLPPr1k3rwFQViy1S2iEcvhR48eLV9+OSgrLF0ZPOc8W+zDiPUb4hpxs8d2uKwZb+OlS5eUO+64PRWeHhwn4cCHP8e3bctuP3nixXzhwgUaBl9/PVg9teMROC5IEh/BsUmTplK9eg09T3rmaIPxySef6BYEcei/GTOmSa9e+6r3698K5du9Zf9BxFR7b3CNdq5fv0EaNWooH3/8QWo5czJ2Tzp37hIcnWXz5o1BHjnva2ipWUj69euXCknG8qpUqaJuFbF06ZKs97fjOI7jOMn4v5SO4ziOkwLRg0k5gsP119+o323ymwTXbDJepUpF2bRpiy7LI4lNUG1Sv3DhUrWwOfHEk7L2SMsLrPb69++vAgd5xKG+7EWGaHjVVdfoXoJA2VZ+JojDkmyWhiL2sQyQ/eYoK2kyTVsQTxA1WYY6aNBXcvTRR6n48tZbb0qDBg3V6YlZRJlA4Ow4RMcNY6VWrdrSu3dvef/9j9SJTMOGjVWcZtylG6eMr+LFS6rTnBdeeEEuuOB8tbiDqPgVxfIKhpxatp1wwgnSrFkTFaQYh0ngzRhBv1+/j3QMZ8LEutatW8vee++rgn08W8rnmWzWrJm8/PJLqdDMVK9eJWjb8iB/LPQQPslHVLz76acRqVgiEyaMV+crbFUQbQ/vIMrcuvUXOfnkk1OhmZk8eaI6PcI6krR2D/hYt25N0C+l5KijjtEtCn4r9Je9szp0aCeHHXaIepnHkhGsTH5cmDNnnrz++ut6nvSeM9g3lqXPJUqUDvo/53JlLFlZrv3pp/2Dz9AiMd19p81wzjnn6Ljy95TjOI7jZMaFQ8dxHMdJweSRyXuJEkXlkEMOS4WmhwmoiWSLFy9ThydY0SACZE/GwyWMCxfOU2cgOJ3IDx988KE888zTuhQ4ndDIUkv2kmN5JnvEIarYpDi/PPbYI/L0008L3ljZv45JdNJEmjDEgKVLl8lPP/2kXlIHDPhE7rrrntSedmW1ncQzcYc87HC2X0xc596ns97CYhbP0y+88KKceebZMnXqVLUkRCiy9HGRnms4avnii8/lqqsuTy2hzekwJEo41sLvbdq0lVNO+bcKbSZSxiGoaNFiMnv2HPnmm8FBvFBwitcDLD3PGXt0skfi2rXhMuooxEO45NlEKEuHlXHkkUfIqlVr9HvQquBgn8PCsnr1mqCPJmnonDlzdLk3noBpP2VY+9mjD2s+3lt4gCc87Ifc7bU0OLcpXbqEvrui/Yi14fr166R69arSqFEjzSOpL0hjRzqidWAZO05btm7dEryfsvdTDCmgezJ++mm4p2NeNGvWXCpXLh/Ui3dNKjAF9Z85c7Z6wIZ09bNwHDIxxhAaM7XFcRzHcXZ0XDh0HMdxnAAmyOzV9+2338lVV12nYQhgmZaxYVHFJLhDhzbSrl0btQiKw3W8d2JphbOQIkUKpxX3bJK+bNlyGTjwk2AyuzXR0QHxsKTi2k033aRWOGCT9XST4KgIgHUOlobsI4eVIM5NSJdOKGByjeMU9mi8/PKrpV+//rLvvvuq+BBtD+WbuPNrSCo3Kcz5Y2CJLXtcPvHE43Laaaepxd6RRx4p999/n7zzzjvqqTgd9oykswYE7iVHpUqV5MYbbwzKGqRL7BlPpEsat4QzvnCk8/zzL8h1112TFcesyjKNm6OPPlo6d95V97EjLGl88wxv2LA+eN4GBnXJFpyS8gXq2a1bd2natKUsWLA4l/jGdxv/33//vX5m4uCDj9D3DtsSWDrELCwaR4wYrWLprFmz1aMydbU4PHOUxTYGixcvkmOOOULD09UbzJrvrbfekj333EcFVbt3pOPAapp9StnjFJLuKfHsnhnpyrUfVzp06CBVqlQP3ltrg9Ds/kJMZMn2oEFfq2iZDssf5zR4o+aUtlv96Avat2DB/Ky9DiGpXna/sA7H+/ywYcNU7E3XBsdxHMfZ0XHh0HEcx9mhscki1iqbN4dixL//fap+phPASGPpXnzxWZkwYYIKIlHRwCbHTM4JO/PM09VxgU1w45Afk3g2/n/mmad0WWfp0uWCtLnjYtnHhPmMM86SAw44KBUaCjiUlU7stAkz1lD/93//J7fffrsuFcSiERGAdPG6US/ECzwlY9k4d+48ufrqq7Qcy8/SIBDkF+s/sHzipGvHnwn1jAok/xQi3ZsRrNn2339/tRjdf//ecuedt8uoUSNl9uxZ6tX4kUcelFNPPVWXtdIPNWtWk4MOOlAd/LzxxpsydeoUWbVqpeaVNK4N7iXpTejhWZgwYaI6IMLDrz0X0XFBGs4RzDp27Cj33nu/PPDA/XrNrHDjY8fuV1hOAXnssSc1H5akEp401nDIMnToj2p5u3r1qozPEOAMpkWLZuqQw/Y6jIMl46effpo6S0+FCuWkXr36sn49S5/DulE+QhaWlm+++YaMHj1SvU1H+9cES35AaNmypVxxxdX5GqtffvmlfvIOMciHMhFYWb692267Ze2pmvRM0zfUZdKkSTJ48GCtQ7r+sjo3bdpC2rdvp0uhuS9g9wOr6ZUrVwRj6hoNj44Bw/JnSXLv3r30BxjiWTjlME5wHvPRRx/rO45rSfWiTbSfa337HhF8D72HO47jOI6TTPq/ihzHcRxnB4FJY+HCheSbb76TSy65MCssCcKZ7NqE9I033lJrwvhySDSAggULq6VWzZo1pFu3bhqeLl8TDSZNmiA//PB9MIEvliUOGHynDJZ44o301FP/L3UlM5YH4gCT/CeffFK9P7do0UKXP1q+BuccTK5XrFgefA/3A7vlllvVqylYP+RFuvZGJ/SUbedWNlZgWKMNHz5chgz5VgYP/jp1fBnU/dugj36QUaNGydSpk2XOnFlqdUXbWPbJXo0cnK9bt1ZFBIRP7gVOJ1gmyzJS9o0bN26s/PzzaBk9epSMHDlKfvzx+ywP0eXKlZFChcJ965IEiL8z+a0u9/OAAw6QE044PjhOlh499tTxjJVfjRo1pHv3PXR/ujPOOF3+/e9/q3MQLMM+/XSA3Hvv3eo1+4ILLpTXX39DJk6cFNy7nPc7ev+5z4xBwhD2sHJFDMQD8+DB32oYcbj/lo5z+h8Lwy5ddg3G4M0qWBomRBrcJ9Lzadfw9rx8+bLgPLTS44iCSIeYNXTocFm4cFEYmAbS4mmdZdc4fFm7dm2O/KgvdS9TprSOy/xAX2NhCKQlPwSyChUq6l6iOJRhy4LoGCQey5RXr14h++7bS8PyM0avvPJyadeurQpsUSGS+7Js2TKpXLmyvhcyQRtp96uvvqpC7sKF81NXkqE97FeJ8xbKjFooc4224/jk7rvv1TDrw3Tst98BwXjYrNaR0TaTDlGXPTRHjMjeHzJO9H6xpyvW4giz8fet4ziO4zghBXr06Ob/QjqO4zg7LExQmXAykV67ln3FZmg4ogOT6ThMLDmYsF5//fXy1FP/lfr162kehk0+ETuwdMK674wzzpRixYrrtWjcKNQBL7Jvvvmm1K5dM1V+9vJjyjQLp/vue0B69OgRJsyDUGTYSZdS33jjDfLOO29JhQqVVNwwccXqRDmUu27desGSjL3OrrrqKunSJRQ+DcszHeRjR1I/Ui4HVm0Ie6FAMkfryD6KiHxz5syU+fMXqijLskTK4xNrLvJEPGVfRiyNcCBTrFiJIA57xBUJSmCvRdIUUiunLVu2qhCK4ICAxJ5w4d5moWMJzhG9EBrZ6w4RoUqVSvrJ9YIFc7aVdmH1xpJbrEMRktKxZs1aefrpJ+Sll17WNiTtWblxI8JzIXnkkYekQ4eOqdBkDjzwAN3Hzaxco3BfEMmOPfZEOe+8c1UYzsSyZUvV0m7QoM/U2oz+4nah2xQogIDH+Av7hz6n/owV+hkBCCu1tWs3qOhUpUoV6dy5k5xzznlBuaWD+5HdTuoZHffx83PPPVuF4c2bt6iYY8KRxeGce2Ei8IsvvqSCIPcUMSqaF4T9QhnhfTv22KN1b07ytjZE2bRpQ9CO9XL22efKv/71Lx1TSVi98Xh82223qlUgbY2KcMBWAEuWLNVnuV27DqnQbKx91OXee++RBx64T50LMSbpZ67TtiJFsAYOl/wSbvWmHjw/CxbMkyFDhqZ1ZBLt5zFjRqtVad26DTTPKJQ3d+5cXbqLoyWWT2cCAZ5+Gj9+rDz88CNy6KGHaVuSIG+u8SPAxRdfpMuJ2R6BNlE3PhEsP/jgo9R9S//+NQ4//FAZPfpnqV69WiokhP5jfJx33nnBcUEqNDdWJ94FiJ/33Xef1KuX8z3uOI7jODsy/B3CSqg+fQ5xi0PHcRzHYYLKZPPYY49LhYRhSTCxtAnyyy+/rJY0iChRmPwyMV2zZrUusWQynpdoCGPG/CzffPONWmIRX4J/polPOg6EkxkzZsj555+noqGF5wX1RZB5/vlnVZhCPMGbLJNz8o/Wie+IHogIe++9t9xxx125RENIJxIYVq9o3lgWIUYOGfKdvPvuu/Lgg/fLlVdeKZdeeqlcfvmlcs01V8n1118n999/r7z33rsyZcrUoM2FdDlntWpVVWyoWrW6CmYIhbRpzpy5uuT1++9/kM8+GygDBvSXDz54Lzg+kP79B0i/fh/L119/JUOHDlPPuVgaslfjvHlzZfnypcE9WqfCJMvUt23bohZ4lEWZiDahYLY9/7nEGON+Ikqx1J37FQqDds695j6E4xyBNXTCw3U83FauXEmX7gZ3XcfXDTfcqGLkiBEjKSCR6LiABx98WC644OLgXmyUpUuX6PMXHdvhGN6s4iQOSszKjmciiXBch0udgbwXL16o8eNlUw5enMmfscm7IB2WtnTpMmqZWaRIMRWf4lB/8sMyE+LPKvnYOUuVqSd9Gn2uqCtCNuIs4VY26biGuN6pU5eM3o+j5bK3od3bOLyrsIzeY489VDSM1jUJrH1ZXrxhwzp95hCOISmdtalu3bpSvXp1/XGAeNYervODSOnSJeXii0OxL36P4pxyyin6/PPMGhRdqBBjsoSMGzcueIflvS8nW0G0bNlKxxVWlJBX2x3HcRxnR2N7/kvYcRzHcTLCBJEJJMta2a/s4IMPTl3Jm+eee14nuixbTJpoIgKUKlVGunTpKpUqVdawpHgWNn/+PHn11Zd1Al+lSuWUMBNe52Dp8vjxE2S//faX448/SdPYtfzw7LPPyJNPPiGNGzeRMmXKpvLPFiI4OEe4QRQ4++yz5Pbb78xz2WKUaF3Ii77lwOry559/1r0bsahEHLzrrjuCOj0rw4b9GEzwZ2u8+vUbyC677CLdu3eXTp06SoMGDdSiEBEVT7NYgbFkk6WlWNJhpVS7dm21imTy365d+yB9xyBtJ01PXjhlaNOmXdCO5tK0aVNp2LChChh4oK1Ro6YKBgiR5FW+fEUVpbAIREA0q6Ttm6TxQ1i6IyQcOqGIiACNSFapUgU54IA+MnbsKHn33Xd0KXO/fv1UYIqPtSh2fuKJJ8oFF1ygzkCwHIuLR9wLxOcGDerr+d1336mf0bzj2LWOHXeRY445Xp8h7q8JigbnJjhFnWukg7hNmjSRihXLq7gczw8hlh8ABg/+Ts+5Hn8+rG5YFwch+t3ysWuMc8Z7tI3EQfjHg/A111yr4ZkgLRa3X301WN9F3Kso3D/ybNasWXDsrGFJfWlhWFsOHPhpkM9GqVChskyaNFktH/OC/uCHFH644J1r2H1t0aKljhfqk9dzx96uzZs3CcZWuHclhB876XtixoyZMnHiBA3PC94z3EsEWsdxHMdxcuPCoeM4jrPDwkSYSTkT3wMP7CNt2rRNXUnGJs44lOjf/2OdsIaWieHENZvQag+hCqs9yogLC4bliXOGzz//QvfoYtJMuB2UwRLbefPm63JXQPjLL/fdd6/cdtstwbcCKpAhykQn5pSBmMI+gVjfnX76mXLFFVepaJFfyCPaRvoGRxMs5XzwwQfk0ksv0Xp8+OGHuiwZcYD8TbhDgKVOiBq2RyHfLU/rEz4tjD7gIB5eadl7z9JGD0SJ9es3aLs5iM9h6akLn+RLGUAYbTBR4p8ETfh11SZy9GBs5O+gHO4J/YQ4xd6U1apVV3F60aKF8vDDD8ljjz2qS1sN+tj6GaJ9fMop/9a9FLFgw6IsDnHXrl0ne+yxu9x8880yYEA/DY/naUTzZkntokWL1cosXj7niIHz58/V/fEYJ5CUp9GwYQNta/zZJg19Qn4LFoTWi5QRrQvYea1adQRnHzbmwOJb+RbOOe8Ds/BD2I+XnwTesadNm6riXbxNlMvz37Zte/U0nA5Lxx6C7MNKP/LsUpehQ4fqM2X1jENa3m177bWXvhcR6aL1IB3vSfL64IP3U6HJWLr99uuVJUpH88I6dsmSxTJy5E9qyZgXtWrVlk6ddtV8MrXBcRzHcXZU+KvPcRzHcXY4mGjaRHHlylXSq1fvYMKZvK8ZEN8mpz/9NFwdH5hgkhMElE2yfPkK2XnnFtKoUeNUePbkPwp5sOcXFoHs38fEHiGAuFYe51hCnXTSCVnnkJ8JLvsGXnjhReq5lEk+Alk8HRY606dPV+Hn7LPPljvuCC258gv1oa60xXjllZfl7rvvlttuu01ee+1V9dKLmIRwSV1oJ8strV+jbSIf69voYdftM+cRpkk6uG6feR3RvP/ZZAsp+YP4dnAv8nvwHNlneLB8tHDhgrrkNeh2FY+xLsUKzPrVxkwUzhGX2A8URxo45uG+xeMZ1apV0TFGvEz3i/SMe2jdupVaFIaCf04IY/9Mlrfz40BeIBpi8YowbePXoMxwHIXntCOO1Znlu4iMvIuibbXr8baR16hRo+Wii8JlvfGyDasDvP32O2qlSNp4XVhqjXf1nXfeWetBfvEyDeo4YsRPujcpcbEAJgxP3CxBzgusfLEQJnu7J0B57DHKfpG2vDsd1kcHH3yovrMQPi2MfNjjFOEXb93m8TsdtBXBEkvlsmXLq0MlxkH0PjiO4zjOjo4Lh47jOM4OCxNE9gnbffcewaS5eSo0PUy42R+P/fdWr16jglucbdu2qpBQr15dXXIbhoUT8fhk3Can3333XZDnhzqpjosA1BFLwKZNm8mjjz6aCg3rkilPmD17ppx88km6FJIlv9F6cFhcnLJgmXfRRRertReOHhADMkFaS8+n1Wfw4MFy3nlnqRMWrAux/EEkRJjgk3iWNlr3aL2cvwL63frevv8vB2NjJxWCWLKPhdpdd92tlmmQdJ9tXCAannHGGbpsfPHiZAtBRKfKlauo4H3zzVjThkTjGdGxhvdn9uXDsjasZzYIUHg4/vrrwbp1AGQaj1jM1q5dV9NFn1tLwyei6pw5s/U8qW5GfpfGcx2BrmzZcnLddTdoWLo6WrsRGXH+gtBHWLQM6m7LhNu0aaNhYb1z50m62bNn63PNu8/EV8RDtiLAcjsd1vby5curZTf3lnsY7RPaz/Vvv/0uy0KV69E4UXDy0qpVW7VstTZRb/YkpW5jx46RkSNHpE0fheXK7BXJj0hBLmGg4ziO4ziKC4eO4zjODodNJBHHWDKHtzBEu0zYRBrPoN9//71atdjE2SDf0GpI1ONr9+6hU5F0E3HCSPPCC89LrVo1VLCLTnL5jmfaGTNmybnnnh9M/MOlw9H84vlGBQzEu/Hjx+u+flEhkDQmUmBhs2bNKrnssst0jzlEGouTCepmlj7WD6eccrJcc83V8t5776mowr6MfJrAGq0b5FWG82fCuMtbYMkv3FoOxgfLcEuWLC4jRgyVZ555WhYsCIWe+P23cQmdO3eRtm3bqaiNBS/5cOSkgJQrV1a+/PILWbx4ieaZO06YrwlL7OO3yy6dUmJTzvJJi8UjWYwcOToVmoyVg2dv6sw+h0njmecJa9u8QAhEwLN6poPrOI9hyS/L+yHdc2R5ff7550E9svsgGh/xbt26DeropWLFShqWLj/AORPCKiKbPf8Iknj5Zil0OsiTuLwrWKqM6Bt/HwD9z56o7IEKxInf02j9Hn30MZk0aapaMVMfg76ZPn2GfPRRP1m+fHkqNDeWF+l32aVDUH5R3fIAC+bf83lwHMdxnH8ymf86cRzHcZztFCbRWA3WqFEtmDC2V3ErOvFMYu3aNbr/GWmxsolPaDlnIo4IEHoiDifLmSbieBfG4hCHD9G9B5kwM/kdOvQnOfzwvnLAAftrOJBfUp7Rss444ywZOPAzqVevnraLfO0a8VgmTHnLly+To446Vv71r38Hk+YSWX0QF0WjWLuJQ54s/TzkkD7yySefqHMXrLAQE+y6wffoufNH8mtFD+4LaTgYA//7UaBAeIiwdHmn4FmrLhMnTlQnOUl7z9n4YOxjeXbMMUer6L1ixcrEccM4ZMzyzL344nMaZs9PlPi4O/HEkwSnGvG4nCPeNWxYV/fZ43s67BnAUq1mzZoSeuXOKYQhTBIPUROS2mCwtyBWv9TB8k6GPR7XyKGHHpo6z5wvy7gnThyjz3XSM41IhjUyYh6kK9vahvMkopDGYH/EzZu3yuefD5QlS5amQnMSvQfsy8hBe+N9xnJlPFzjJR2S2hYNa9gwdJQTfb+RJ+832oxFamhdmgxpaDPW0HiUxlI89K5MP6TvV8dxHMfZkXDh0HEcx9nhsMkiDkzat981mDSHy5STRIcoiIYsuWSizAb8ccJ8JcizXTAJ3TMVmpuoQHnrrbfoJByvwdSJPJj48smkHmuZ448/Xie2+YE29O/fXz79tJ86HjHIz+A7ouG0adOkW7cecvrpZ2QJAdYH0fhJ2ET9zDNPV+/FkyZN0r3L2C+Ma5nFD+ePJrSYyi/cKw7GNEfh3/345ZdCwRgvJuXLV1CxnD0PEfziMKZs7GEZuO++vVTwwmI2PiZtrPLJPoqTJk3U87zG3r779hYcmyxdGopcJl6RP3WqWrW6jBkzUsaNC/NLwuqCF2LeH6SLt4d6kbft/RevfxSEUt5H6eCdwT1lb9VWrdrkeL9kypcfJcaOHa91sf4yeAdQP0RInDhlwtJaUeFpttBbv359efHFl+Tnn0NLTevTJPCSXrdufbX2jt9XvrMXY6FCO8lnn32u5aZrn/X3aaedJl9+OUjfPfYOpb/Yf3LevDl6jX038wKP823adAjS76R5Z2qD4ziO4+xI/Jq/Kh3HcRxnu4DJJRND9sJq1aqF7r8H6SaowKR+woQJaqGXPYkO45tQwWS1UKGCwkb7llVSnhZ/zJixMnz4T1KlSlWdxFvccLK8k0yePEVOOeUk6d69i4bnBemXLVshr776iu4hhhVlXCwA6rlkyRLZddfOctVVV0uNGjWy6pSpDwzi0B9XXXW57nfWosXOUrFixaxr0U/nr+LXiB52r1jOzoHI8vsf27Zt1GcOkemmm27UZf+GiTSMGxs7WNy2a9deypUrr9dtjEbBqo88Fy1aEjxPoWhFvEyiT/ny5eT440/U54+l9PF8Q2u1bcHzNz4VkhurI3lhLchpfMyTLWE4H8kLrJSx5uN5TWonYSVLlpCpU2fIZZddoc93OqJ9NXXqNLXu5H0SrR/XeQeyB2WrVq1SobnbkB7ihWVQHj9sbNv2i6xduz4rLBP8uNK4cWO1BswZF+cmBbVuLG3XkDzqdM45Z8uqVWuyREgO2scPPBs3bpBx48YHfbAuFTs3xOXAmU+jRg10aX2SUO04juM4OyouHDqO4zg7FEwQ2UsQa6NKlSpLly6dVShIh01qly1bJiNHjtTldaSPYkuM161bL6tXr5Xjjjs+dSUZ6gCtWrWUDh3aqPBBOTbhJS+WI7J/2xFHHCWlS5cLJtI5HTCk4+23X5fRo0fq5Du+h5uBpQ8elk877XRdMgi/ZpI8duxY2Wef3vLkk09JnTp11NKH9NYG558I942lrIxtPn//Y6edwuesWLESUr9+A3nggQdkw4ZNGmbPRJzmzZurdSBCTvL4Z+++gkE+62TIkKEqRPH8JAnmYFZqeBBG6MISLSkuVo6DBg1KneWGutizyhJss3aLwjnHpk2ZHQ1BhQqV9N2S7vnhHcU7iyXfmURDoE7k8+2338rrr78e9N2mXO8sQBytW7eebtWQf8J7sGbN2qx+o41r166TJk0aym233RS8A1cllgfhPfwleO/tIvvvf4B+t3tikC91w6kLzqvyAscu7dq1Vkc6pLVxwnf2mBw27AeZOjX9/ovEow141O7YcVfd7zZ5rDmO4zjOjokLh47jOM4OB5Nq9jesXbuO1KpVNxWaDHHRA/AGO3Toj8Eks0AuoZGJJ5NfrBG7du2sYZkmntH09es31LS2/1hY3i+yatVKdbDSqVOYXygEZv5n+5133g0m7rep5RLLAUMxKBvyRjRk6eTRRx8nBxzAxP3XMXnyRDn33HNk3LjR6omatlhbyd/5u5DfP/G4ZyZ42Xfu5x9xsNfmNtm8eb00a9ZIRowYJU8//XQQnn7sYJ3YvfvuwfOwWi1lk0C0QyD68MP35aOPPkqFJmOCFnt/7rprR5k+fZaG8cxFwcsxDj/SwbNoda5atZo+B3EBjGeabKl7XmBdmc45Cs8X9WO/viuuuCqod6fUlcwg8OMdukyZslqX6DuJ/PjBokOHDlKzZp1UaN7svHNL2XvvvdRJCpBn+O76JcinlkyYME6XR6cjbF/Ybx07dlRra9od73/qNnPmNBk16qdUSG4oF0EZTjzxZFm4cKF+N6gbFqXTp89Ua/F4GVGs37GC5McUs4TMlMZxHMdxdhTy+1el4ziO42wXMNln8/uyZUtLmzZtdPlfJoi/atUK+fLLr2TRosXBBL+MTiijk3BEAwS5kiVLy0033a5heU04+/Y9VD0pY8looiFpKA+voggXu+++uy6FTEe0Hlg9jhw5QtgrEQ+hSTDJxqqpTZu2stdee6RC88/gwYPl7LPP0X3W8E5r5eclaDr/FBhLjNs/UixhKekvsmHDZqlXr5a8887rGsoYij5TYM9QpUoVdRkpwlzSc0UY3scRFm0/wbyoXr2GdO3aTZ35xPMN8ysmM2fOyhKm4nWLQlyeu2TxE4/LeS9VZl8/ikjKg75Zv36DVKlSSd9ZSfurAnU0cXXlyhUyZcpk/QGBHzvI1p5T2mft6t69u37mB9JVr15devbsmdWmaJ6Uj2MTnCQZ0X41rI4NGjSUatWq5ag30AeFCxcJ3lUbZeLEyanQzOy+e0+9D7blg5VLGHvFImbyXoWkOhlYczZq1Fjf54yL5HvqOI7jODsW/pe+4ziOs0PBJJU9v5o0aSq9evUKJrrFNSwTCxcukuHDh+nklokoxMUyrA179dpHatSoqufx61EQJL75ZrA0bNgox0TXJrQLFixQiyg8M2eauBLfyvnoow/k888/DSa+pVXIjKcjLpNhJv6XX36l7LxzuEQ5v/z44w9y8cUXyujRo6RKleqaX1795vwTiIooNmYYU3z/Iw5E8nBpaKVK5dUi7s477wzCcotz9jx06NBR2rVrp5ZpPINJ4449/NibbvbsmTrO86J48WLBM9BMn2cEIp4jK49P3gsLFy4Ijvkalmmss78nFoPUzfIwWA5tIl0mihUrop/Rehg8y+vWrZVmzVpIy5bsR5j8biGdPffs3zhmzM9BO4po34R9HxLmF3pwRjzNL+TPvqmdO3dSBzLh3onZ+ULFihXkgw8+yBIC420BayN7q7Zv30GtqePReIdxvwcOHKhbLyRB2WZBGv4Yso86fEJEtnKJg5Oo1157RSZOnKBhSXUCC+dHkXr1Guj+iOniOo7jOM6ORPpZjeM4juNshzChZU+0hg0bBpPfUOTLNDlEMPj555916XDlypWyRIYoxGFp28EHH5wKCSesUaJlvP76y1KwIMuVsyf6BtaQWAxi1ZPOctCwtHPmzFEPpMuXr0grGtrB5Do/Sx2j9cVT6t133yVLly5RsRMLJvrALCWdfzo2XhDHuO9/5IGlGuN+a/As/iJt27aTyy67LAgLBaUkatasrkI3IpEJUnFIi6g1bdp0mT17dio0PeSFZ1+ckuDoJ1o2ZeBYg3385s4NhcNMlChRQi0Ow/blhEeRd0NexK2Oo1Cfbdu2Svv27aVWrdqp0NyQjnYgePHM4gCJd132/Q3B4nPlynArBMgkikaxPqpbt4E0aFAvR7som3riNZsl3jhNgqT7FW1f7969tHwsGKPvHL5zD7CaZK/DdFhefPbpc7AsXMg+h9l9yfua/VyXLFmmeUG0/ChWfpcuXaRHj+5BnXLvv+g4juM4OyIuHDqO4zg7FExSsSZq3LiJlCkTCnPpBAtggj1s2LBgksxS5JI5JrfAJJSlcCx97Nlzz1RobqLpEPnw5BydVJMPcRAxsJ7Zd9/QGjJeXhTqzcT2yy+/UItA4psFDpDWDqyDuH7GGWfotfyKBTgVuPjii9UxTJUq1YL8WVKaLN44/0QQURhjjAeeAw7C/qgjzL9AgYLBWN8iZcuGHs1XrVqV6zm0ZwLq16+nzx/PTJLwg1Ud6XHMkd/lymXLllUHRHFxiHx4jhDY2FcwL4iLcJj0qBJGnTM9x8C+pBBtM5/Uhb5hCe0uu3SQEiXYuzQzS5YslbFjx2meWPOF9zfMj/zxMIxjqAsuuFDDfy3s6YgnZvKLvsMsf/YJvOCC81KhYXgcC2PPxOLFS6kIGb+vCIf8EMI92LgxdKKTicaNG0ndurWznKRYfbD4rFmzhrz77ju6XDlejkE4FqKkRaRlfGzZks4pj+M4juPsOKSfKTmO4zjOdggTXfYNbNq0aTBhDT2hpptIwrx5c4NJ+BiNE4/HhJKljj//PEb+859QkMuL//73CZk8eZIKAXEQMNjbq2PHTrpUGTLVDVjWzNJAHAOwXDIan7Zx4JEZ8eHII49WK8a82mzXWc748MMPyeDBX6t1JlZReDvNq07OPwkEHO4nB9//vAMjO8Zl1667qlMfw8Yt48zGWq1atYR9SRl/SRANwYctA+bOnaPp84JnoXLlykGeua3KGOscEyZMTIWkB0tHlknHy7S685FXfbBuhKhIZekRQuvUqSutWrXR83QQn2JYoszyXpKHAmiYD9BHS5cuk3333Vct8SB6PT+wH2PXrt11iTZCnIl0fCLSNWnSWGbMmKVxEf6SoExr67777hO0f3WuttP/9C3v30mT8r4PDRrUl759+6pwGB0/1Anh+auvvtJ9YNMRxg+/szS+Vq2aOt5cOHQcx3F2dFw4dBzHcXYYmAAiElSpUlmFCGCymIRN9OfMma3OQIoWDfc2jEJ+LFPcvHmrnHbafzQsSSCwSSy89NJLKjbGJ/TEQTgsX768tG7dOsi3ZOpKbqJWPiNG/CRTpkxRC0aIlx+KKcuDiXBbOeusszQsWp840Wv33nuPvPfeu9KyZQvNJ76c0Nle4J5yz/mz8M87zOoQS9ZRo0YFYSGMsfg4Ywkszod++SWziIOVHcIRlrt5wTLlypWrBs9xznFvZWPxNm/ePP2eCZyVYNkXf6bsPN2zFgWr5cKFEeZzWlSuW7derQxZPpvJURKQbu3aNSqQsX0BHoW5r9n1CNuGdV+fPgdpGOSnfnGaNWuuVovLli3V9NZnfG7eHAqxH3zwvn7mlf9pp52m7z3qHs2L77wnuQcTJ07MCk+Cd3GpUqXVUzP9FV1GTbrwfVtQPvtsYCo0M3Xq1NV9cMO6py/XcRzHcXYE+MvNcRzHcbZrmDgyAWRyiVDRqlVr3asvL9icn/21sNBhmW/U8oQ8sYaZNWtWMFENRcWooBeH8rFexLIo9MycczLK8l+W4zHxzWsPQptAz549R60NER1YVkf9woluCN+x2mG59VVXXaP1tfB0WBsffPB+eeihB1WQRMQ0QSNTWuevJ7w/oeVZ/jFxhHv/Zx9b1SptxYrlMmnSpOA8JD7OcHBRsWLljOPPLN7wgp4fhyQITHhspq+izzZwjhA1eXLoUCMTCFK2VPq3gqUk75goiKQ4emE575577iV4SM6LuXPnyogRoVUdwme22Eb7WPa8WurUqa0Wg/8LWDfzYwQ/qJijFeCTOrdp01JuvTXbijQJ6kY/V6tWXXbbrWdqiXm21R/w/sIqFUtBRMpMMDaaN2+uXpHXrl2XY6xQVuXKFeXdd98P/g1IPzay+0vUeRb7uWKxHQ13HMdxnB0NFw4dx3Gc7R4mkOEkFXFus1SsWEUnpJkgzZIli+Wbb77SyTDx45NHwsaMGSNXXXW1nnM9LmxE0wwYMEAtk7BQikIaJrMrV65Shw0Ii5mwuk+ePFGGDRuqAoG10eA78ebPny9NmjRR76VGUh0treV93nkXSJ06dVTMwBKSPuCIp3X+XmTfS8ZiGJY30XFNotAi8M86sAbDEQWOTdJh+xGCjdU49gysW7dRrYDzgmcRi2HanJQnYx+LY8jPuE9Xr/zAs4+AGhX/EesLFtxJWrRooRZw+WHChAm6fQHLsHlus/PapntEjhgxUi666OKssN8KwuHuu+8htWvXVuHQ2k551LtcufK6Pyp7oyZBPA5Lt8cee+uPKqFFaXZfh2Njq3pEXrx4SSo0N9ZO+ql16zZB2zfnqBP9WqFCRXV0NW7cWA1PwvKBbt26B23bpHWKhjuO4zjOjgZ/sTmO4zjOdg+TSJb9lStXRjfKt7AkzPpo8uQpMmDAQF3WTFybPPIdEQ0PyEz2//3vf2t40uTS0m3atEmXYzJZp9hoVCxaWKbXqFFD3VsL0tUNyG/r1s0ydOj3urdhmTJlc9QPsLiqUKF8MOGeLB9/3C8Vmh4m51bmkUceHkzAa+k+jPQFbYWk9jl/P8zrdXDHwoA8icZjDDD+/5xjp52wZN2m1rA8b0bu8V9ArV8R++z5zE0oEK1duzoY/3k70yhYsJAu5y1YMLdwyDmOgHjGwZ6BJCgTC+Lcdc4/WNVhuRzNgncFe57WqFFd92PNC/Yb/Omn4cF7bq0KotH6UL/SpcPtD4466mj9DO/1bwfP9PwoQTHRe8J7gvOSJYuqQxKgLkn3zd4pffocGLSxZK44XOcdO23atKBtw7LeU/G+tnz40aVVq5bal7Zc2eLy2bBhA9lnnz30nHdyUnlgaTp16iCLFi3KCnccx3GcHREXDh3HcZwdAiacWKF06tRJunTpnApNxkQC0rBfF9Y7TDCjk0fisJfabrvtrl5GLSxKdHKLZeLUqZOCOmzKsuoztm0LnaIceuihsuuuu2pYfGIc5/vvf5Rrr71BRU3qFZ8AYy01evTPUrt2DbUOinuOjUJZ1J187rrrTunff4CKAky843V1/hn8eqHD4mced7834dgtIEWKFJKZM6dlhSXBc8iS4HTPBumwDtu4cUPw7KYf78ZOOxXU54R0POtxfvkldAYEmfoTa2Ge63TiYvhsZu5XrARZioxVdNiO0GMx4n+zZjsH9cQyMhl79nEg8vXXX6uVnuUBXMfa8PPPv5ADD9xfw/KzlDsvqlSpqt6HEemS3i/sS/nhhx/q96T+Iywafvrpp8rw4cNVRLb7QRuwNp03b77mtWTJksS8DN5X3bv3kPr1G2tcs+IkH+rYunWrIDz0um39lIT13T333KvLsdm2wsIcx3EcZ0fDhUPHcRxnh4BJH+Jc48aN1CkCZJqAsk/X448/LjVrVpc1a8JN+6NwjoVPt25dUyG584tONGfNminLl69SK6coNqFlcsz+XBAXAZPAEgrBAissJtnxshEGpk+fLq+99qae5zXpRfRgf7RnnnlKPU4zUWYSnqmPnO0N/ixEKObzzzxwMFI0eJ7W6Pd0FC/OkvzUSYzwGeDZ4TufeYs8PBImmCfxyy9bpWTJ9IKdgdjHM5v03FIGVpKIlJlYsWKZFClSPPachvsssuw3E1Z/nDgtXLggy9rQhEw+EUCXLVuRta1Cfn4QyOs9VKxY0eB92iSoX1nt//g7hr1RFy9eJM8//2wqJCfUO9r3V155rWzYsCnrhxqwdhQtWkSWLl2qy6Ih03uJcrEs54cPDrvHfFr6559/Kis8HZTN8ubWrdvp/oucx9voOI7jODsC4V8UjuM4jrMdw2SPZWksvW3QoGEqNDdMVm1iiFg4dOiPUrNmTZ0UM8k0mGwirGEZc8ABB6ZCkyEd+Y4a9bOsXr1K09hk1cpiUl+zZi1p3nxnPSdNtLw4CCy33HJTyiow9B4bnQAjCrC3YY8ePaRr11DYTCcUREXHPffcU9gbjuWbeYkGzvZCVDjBaowlvlij/XnHL79slMKFC6jIFN2XL06xYiWC5yJ5HDO+eZx22ilcYpzp+TEoxrYOCJ5GDTOoAz8e8FxCpueBpcEmSEUhDWUULpy3UxOWVyOMmuUe7wb2fWQbgrJlM+95Sl3xnP7++x/LypUr1MLYCOuwkyxcOE+trTt37qLh9E/8nUDcaDvT3YcoDRs2lrp16wX13qxpo8IaP5KUKVNO7rjj7lRI+n7kPWRgfcl7krjUkz6pXr168E5bIJ9//llWHyVB+ZUqVZLDDjtc6tWrpz+w2Fjgk/u0yy7t5Z577tOwdBDX6nrUUUfqOzfaNsdxHMfZkcj7ryrHcRzH2Q5gCWOVKpV1T650MDG0yeGPP/4gGzeuUyvF6GSX73hRxQsq+2WZ2JeETViHDPkmmPAO0LxZOmeQF5aBTOA7duygy47zw/DhQ3Xpc+3a1YM8NmeVA1bXZcuWy1lnnavfIRrHIC7hCARvvfWmFC1aUPuISXy0ns72C89FuD8fZ1jDct//7KOIFCpUREVwW0KbNF4RkyD6PBrhc4t1WiFdWpqUPhnSIJLljE/6NWtWq0UdZBKN2M4gSWQjjHwKF85s3cd+jOvWbdClswZt5ChfvpyULl0qFZoenH48++wzUq9egxwiHLDn5ZIly+SII/rqeTrhjbpy4Hl54cL5if0cp27dOtK5c7cgzRq9d9F+YmyVLl08uG8FZfbseVn5J2H99/bb78h33w3JIWqSJw6gsB78/vvvdc/BdFj5HTp0lJYtW2ud4v2BpeT8+Ti++iYVkozV4YgjjhA8cPOuzY+Y6jiO4zjbG/n9q8pxHMdx/tEw4StbtrxUrlwpFZIb4tikeujQ4TpxZNIdnywy8Zw8eZrss09vndDmxbRps2TBgkVBumI58mJibhPdXXbpqJ/pJuvRCXm/fh9ruUSNRictE3OW1SFCdu0aWhdlgvqsWrVSPvroIxVvOI+319nesbGFwMKA4vPPOnjeKBPP3aHVICQ9B4ztTOOTZ4RrWMzm57nE2nDjxvVBWdnLeo0CBX6R9es3SPXq4f6l0ecvDtZ+q1dnW7YZJlixB2Ac8rM8Z8+erRZt1N3yoP1Y8ZUpU0qXKxM33ifROo0dO0Y/y5YN9zMlr/B9EFpOInz17t1L48TrGeeDD94N3m37pvWIHAdrQKz8sOqO3puwPQi5RaR///dToclYnfbZZy+pVq2KrFy5UoVU2kg+fOIgBk/Ns2fP1LjR9huWT6lSJfWHHcZBXCjFEpJ78umnA1IhyeMtyp577iGzZs3RH1SS7oXjOI7jbM9k/svBcRzHcbYDmORhUcTStUqVqqRCc8OE0KyafvxxaDC5ZGlk7n2w8ALLZJSlf/lh6VI26ceqKpx0GkxCN25kaWgB2W23nnotaTIM2eG/yMcff6x7GyaBODly5Gg5+eSTdZl1JmySTX5jxvys7YwvX3S2b8J7Ho7xX35hPDDW+fyzDsablf1LUJfcoqCN/dBTcrJgQ/3tQGBiX8G8wIEKgh1ezUkXZcsW9h7dJC1atEiFpIctCBAg43nY85Xk2CT6rM+fvzD4Th2y3zVc471Vu3a9IH241NnyMyw9e/+99NLz0qxZE8FzfLQevA8mT56kQmDLlq00LF7PKLNmzZbBgwfLzz+PUS/w+aF79+7So0d3FUrj1n3UEYvMH374UVasWJ4Vlg68Ivfq1TuXExTS0I+zZs1Qa+t4OXHYlqJDh12kYsWKueJyXrFieRUO6S8jU70ef/wxmTdvoYrSpM/Uh47jOI6zvZHzLxDHcRzH2Q5hQoggVrdu3VRIMjYZZB+siRPH6iQ2Opm0fJYvXxlcK5G1hDDJ+sTSzZw5Q8aOHa3iDNY/cVgOWb9+Pf1OPnFxwLD8WJI4ceJEFQ6j8a1u1J1PhEhIqhtE6/fRRx/qMkATKJwdk79OC8Grcbg01PYwjD4HNlYR2dn3Lx3hM1BISpYsrSJ9XiAArV/PHqE5G857gCWu1KFWrdpZYVGsToCFL3kRP6fYFT6fWPLGIZ49m/PnzyUkK4xP8mdLBJZdQ7x84lkdhg0bKlOmTJXKlSvrDxrWd2E+bFuwUg466GBC8hS9fvjh+yC/YWrpOGDAx2qtmBehSNdR3x+21NywtsycOVPGjRunYdG+S+LAAw8M3mNrgzZmWxsClouEffnll/pjTPRaEmxLUa9eXa1TNB59gBXnggUL5fnnn9MwrqfLK7TgDMfT4sVLdJxmKtdxHMdxtjdcOHQcx3G2e5j4MdFr1qxZKiQZm8hPmzZNFi1aKHjnjE8Qmayyx1bv3r2lQYP6qdCcRNOw0f+iRYvVupAJZ5SwXtvk1FP/T8+Z8KebkFr4PffcoV5MbclcNqHwMH/+PDn88MOy9ktMyi8aNnjwNzJq1Gid9Mfr5+w4BEMnOBgXf/5BuewfZ+M6DuMacHTB0LXzKDy7PE8syUVAy89S5fXr18nSpeyXl9P5EbBMuGjR4lK9emi1G3+O7JzPhQsXqqgZ9l9OsCLESi0O6azMWbNmBfUPvS8D12hL0aKFdcltEsSx5/Xtt99KtTe7X7jOUl/2KsRbe6NGjTQ83s4oWF6OHz9e1qxZq+/KH3/8XkaM+EmvkV8msMysVo09V+MOUgpqPVauXKU/ekCmOkC3bt10mfGSJYtzvRNZOv7BB+/LjBkzUiHp4YeiZs1aqFUh99Py4ZMxhBOZN954Q8MoJ2lcEdfSXXzxRUEbRgVtyukZ33Ecx3G2d1w4dBzHcbZrmMhiYcLcr1OnXTUsOhGNYhPxgQM/02WRRYoUzRGXiSX5sfSuTZt2Ur58xazwKJaGuNOnz9ClhNHJMtdJg3UgAt+++4Z7jxGWNHkFq9vzz78irVq1Uisai0t+WDNu3LghCNtJRc1q1arqtfgknbhWPg5ehg8fFpxv0yXaVm9nRyMcR+F4+msOnqmKFZP3H7VxjqdzlvSmE5543rB+q1mzRlaaTGApiNUZcaMCFd95lhAyq1UL9zhMJ6qvXr06yGO+PkNhvbKfIfZQJIjlsklYOyZPnqz7poLVY+vWzVK9eg11PpKE1RWLwH79+ukegzTZ2s0n770VK1bJMcccLfXrhz9yZOqXyZMnyvjxY/VHhGLFigd9sFnef/+91NXsMpPYeeed1cs7RONRHu8W+vPLLwfJ1KlTUleSIW21ajXksMOOkAkTJuYQgMP7W1ZWrVobXJukYZnaA/y4gwCL4x2rl33SRpZPT548RfNJl5fd+yuvvFq3nFi7dk3WvXMcx3GcHQH/V89xHMfZrmGyyYRwy5bsJYDRiW0U4sJTTz2ZJRjE4+IAgCXK9erVV0saSJpwEsYEc/bsWTq5N0HA4Jy90dq3b58KCUk3eY2GlytXXi2SLMw+sazBUUGTJk1zXTOidWCvMJY9sw9aOmHE2TFgWIRDg//9uQdjFGGpRo3qwXkQEnvmDJyQcC1JtLFxjthXvnx5/Z4X7G+4bNmyYOxnW5CRP3mxdJ93gG1HEH+OjLlz56jFINfDfMJ45MPBOwXPyBZmRPNjGS9inZUdpvtFhUOe50w88cQTumyXd4K96ywfLDQRYzt06JCvbQgmTpygFstm+Uien3wSOhAhP3s/JoGl6M47twjuTRgv2lbeLYULF1IHLvndN7Fjx45Bup303RntK96/devWljfeeE2XM+cFbW/fvoOmQ9wF6kP9+OTo37+/hkO03kDZNt64j+znyHJlFw4dx3GcHQn/V89xHMfZrmFiiGVf7drJSw6TGDduvDRp0jiYbG7MmrTaZBxBAc/M9erVSTt5tDQsz0MUwDrQRMYoTIq7du2eOsub/v0/1s/4ZBqwLtq4caO0bNky7RJqoB3UG1GTvcxYkp1UN2fHgUciPBhTiEaM6z/nCMvEu/FWadasefA9HKNxVq1aJQsXLlJBLQkb/zgEqlo1FP3zAgccCIfmECmb0BNxw4aNU+fpmThxki6bDT2S06YQnk8ENPZktB8Hou2y53fVqtUyZ87sHHUgHc8oQmrcCRJ5mEAIF1xwgbRt21Z/SLD8ucZ3lmKzhNj6NROIYTiEWrFipYqA27Zt1SXf/Ljw6aefapyk+xLlqKOOCv6/k1qPRt9PpMNycNOmzTJp0iTNOx2WrnHjRrL33nvL3Lnzst6zXONdWrt2bRk+fKgMGTJEwyGdqFmnTl3Zffc9dNuJsI+CGqby498G6jJq1E+6LBry08YNG9blGc9xHMdxtiey/8JxHMdxnO0QJolYKu277z56zuQzOqmNYhNKKFeuQg6rPuA7litY8ZQvn+zVGCxNKHbgMTXM28L5JG/EAls+nR+ee+45adCgngqh0bqCiQ3Nmu0sFSokL40ES0efYAGEpVfSvnLOjgFDMjUsU2IIog4izJ9zoPewLDeohVqsQfSZMxD4Vq5ckUuw4Zz4jH+OevUaBc9uaOGXCQQjrOuw+mX5qeVrZa9fv0GaNg33BUzC4rEfID8mFCqU+0/q8JkPj3RCEx6PV65cqVa/iJ+AOLrTToVUAGW7hCjkQzsRvTZt2qBhxIu/q/AYTZ+2bt02y3o6E8uWLVVRj30Obf9UflBgb8RQEMwM8VkmzjuN5b/x9xNObxAPWQ6NFXZe0CaEQ963tA1oH+WQN33Ur1/4QwqkEw4B8RQBdvNm+jccL2Cfc+bMUsvr/LDHHnvqcmnewZDuvjqO4zjO9kTuv3Icx3EcZzsiFOiKBZPQ3nrOZDE6wY5C+KRJk/U7wkE0Ht+ZnLLcrV69BlKlSriHYDqYULJ31uzZc1RUsLzIgzphHVWuXKU8PT1HJ8TshWbLMKP58R3xgc3+W7dunWNfsDiWbvz4cbo0Ec+t4RJLnwDvmITPg42L8E/DP+soGJTLfoJbg3FdOstSNrsu2cyZM1eWLcOTLumyIa49UzjAsKXF6bD9TrFcmzFjuop+LKPlebVyEd04b9t2Fz1PwuIiwAdPYXCeU0SiToiTWN+BiYJxBg/+Oki3VUU6S0/a4sWLBe+YynoehXIRDeGiiy6UatWq6LNPGNfIg+/s38j7oHPnTlKiRIlUu3M+4/ZuYcnve++9K2PG/CwlS5bQMPJCtMMzMXmBlZuJ888/X9+d9K9BXoh9CJLs+Tp27NjUlfTCG2Ju27btgvZVzvqhhLjWRvZ0ZC/a/IAVdr169XKVRZ60CWvLn34Kl1Bb/unAAcwhhxwevD8naL9mius4juM42ws5//pyHMdxnO0MlhxWrVopmAA3SIVk5v3335RixdjMf2OuiTKTbyxn6tSpk+gpNQr7i40ePUotpYoWLZYKDSemTKBZwrzHHrtrWDpRIcq4ceNk3ryF6mXVLHCA/BAdVq1aKTVq1NSJfl4sXrxYXn75ZXVUwJ5wtveXs2PCGMIjcLZXZcbDH38w7kuUKKJj++ijjwnC0jNz5nRZvnxF8Ezm9n5LPuGy/27BM7VHKjSZsK14Mp6t+/fhIIOwqACEAFmyZCndZy8T8+bNl0mTJugPE4jv0XrxnWW/DRvW03NEqni94Y033pQyZSpq+SaOITgWL15CKldOthQkHwTLt99+Ty0CeR9Y3pbP0qXLpUqVakH56b0pW5q1a9fJ8OE/qfUlYpj9GMEnDlJKliwud955V2L9Dbt2xBFHqqMUxEZrD5AX71OWhw8dOkytRy08HY0bN5WWLVsH9za07gPKIc+qVavKzz+Pkc8+G6ThmUTNkiVLBmOjqwrEUUETsPTEI3a/fh/IyJEjM7aRfqZNu+3WQ/ss+h52HMdxnO0ZFw4dx3Gc7RYmgZs2bQkmmdWDCV/+9vEbM2ZiEL9yrkkhk1UmnUw+sQTKa3kvHmDHjRsTTDBXZTk+AD6xBFq0aImcfvrpGpYJm/CzxA/LRZYSRie3fEfkxBKL/d2Y+KfDBEqW+bHEsmDBItqOsG7pJ8zO9s22bYgx4RGOgz/+CPWiX3TZ/+TJU+Wkk04iIAcmKiHkTZgwQcV4BCJ7lsCeS8RznGDUqFFDw9IJUvY8sVz2+++HSq1aNTWupeE6AiWOSUqXLqNx04HQxg8DOBOxfA2eNSz22rXL3t8wSZQiTpEioegVvY6gVbp0ydRZNtb2L74YGMTfpu2OQj1495QpU1p69tw9a49E8o6Xb+ejR4+UmTNnqDVz9EcM8l6zZrWKj++882YqNG92372npouWx3d+dMGac9q0qUEfr9TweL9FwaqwdetWwT0Pt3aI179RowbBuDlav6e73xbep08ftS7F03U0LnkiEmMdjhBpYUlY+M47N5OuXTvK9OnTI+9Px3Ecx9l+ceHQcRzH2S4JJ+o7BZPFtdK0adNUaDLRieS0aeEEGsHRJopc5zsTciaZCHQIGOkmq0D57KmF04To5Jg0Jjo2bdpMP9NZyxDXysAJA6IleUXjUy+W8lWrVjWYsO+m+28lkS1c/CJDh36vFlwVK4b7ODo7NghQjItsGCd/5MHzgKVsURk+fIS0adMmOM9teWvPzXfffS9ff/21PjeIWfZcGoxhxnLr1mE+jPVMghSsWLFGP7Hs4xmz+Ij8EydOluOPPzbPZc9sazBv3tygPrnLok5sGbDffvvpebzOgCC6bdum4NsvudpevnwZqVw53A4h+p6xej733Av6rEevGbwP2C+SsvPypsyyYiwA2ZcQL8oQ7Tv6skKFcjJlynT5/vtsZySZOOSQPsG7b1NQN945YRjtR2AtVKiw/ggyevSIyDspGZZr77JLp6CdFVSgtbh8miOoefMWaVgmi0P6lj1pS5UqnbXsOQppEW8nTRqv4mI6rIzatevIoYf21b5LEjQdx3EcZ3sj9186juM4jrOdwHwOi5769cPlgulgAmssWjRPly+y75jBxBDRAosnHC80apS3t1UcLyxcOD+YkOKhNOfEf926ULT4NWC9SB2YvEbrS95YXNWuXS+YSLcJrif/087kOSx7vfz881j15spy67wm7872D+OCIRqOKw7G/h95ILaIbNy4TqZPn6ZLRCE6rqOwFydL+4sWLaLCYTweeTVp0ky6dOms53FhKA7Lmh9++IHgOa6ny1Sj8c3jL06GMsGPCAhg7C8YTW9147nE6q9Fi/DHgaQ6IeAXLlw0OHL/uFCiRCndlgDiab///jsZMWK4WhPGn1/eBcTv0KGt1KxZS8PiomSU6dOnypAh32ma+LvFQAAsU6akvPLKi6mQzLRo0Upq1aoTvC95z2UvA6eevD+nT58pb731li5bzosWLfAS31CWL1+Wo3588m6HV199VT/z4sILz9Ml0vE2ImgWL14yeC+OlvHjx6dC08P96tixU9DG6uoAy9+fjuM4zvZO7r9iHMdxHGc7YsuWX7Im0EkwibSJ5MKFC9SShf3K4pN1YJlbyZJlVMCDpDjAxJ9lbAgUTJSZuDO5JBwrpBkzZqhTg/xgZTDJLlasqOYRnaha3tWrV81oIWVWUUuXLpUpU6YE+YYOCxwHGArhuOLAsuqPObZtY8xheVZEZs2aIyeckL1E2Sy6oixbtlwmThwvpUoVD+oYWvna+Oe5NYuvLl26qOCfHyZMGB8c43QLAyzj7DlAdJ87d740bFhXrY6B8qLYuwLhkOXOlM/7IPpMkh8/MtSpUy943nMvNzamTJmmn9G05M+WBLwfKlbM9o5u5cKtt94hJUqUzHoPReF9wFYICKm2D2u655w8WSbO+4h9AKP1iEI477EhQ4aqMGnE+wZMpDzvvAvVmpR8LV7YtkK6nQLe5hHd8gIvza1a7Sxly5bTPrU6kg+ibceOHeS+++7VMIjv1xpte9++R+s9WbEiFPusT/nOvWffSLxcWxuS2mfUrl1bGjVqkqM/HMdxHGd7JfkvCcdxHMf5h8NkEOshBLL69UNvrXkxderUrEmjTVDB8gImrEGIfk8Hk8kFC+apcBif3JPXrFmz5Oyzz02F5A1WMnPnzg0m0UVzCAjA5LZo0cJSt269YHKdfk82s0RE7AgdOhTVSXU8P2fHgvGYPdYRSv7Yg2XRPJN4NG7WrKmce+45QXgoKkWfOWP48GHy008/qSgYPnvZEJ/logULFpWTTjo5FZo3zz//vJYXfzZ5FFiye/DBh0nDhg1TYcnPx5w5s3WpMj8m8BxFRSbqxZLYtm3bpkKyiebHs2gWgkaYz05SqVJOr+2WbvPmjUHZM6VMmTI5yuQ6loEIofXq1ZV27TqoEMv7LF0bEO4+//wT/THBBL74PSAPxFHKmzdvjtxzz10aHi07DuUdd9yx+t3aRhh5014sJRcsmK+WjuSdCcTP3r0P1O0m6NM47AU5a9ZMGTZsuJ4nNTXav336HCSrVy/PEQb8WMS+i8OHD5dly5ZqWNJ4NPgxCrHa2uQ4juM42zM5/9V0HMdxnO0IJs3FixdVy6J02IQWmECnmyxu2LBRrQUbNKgnJUpktmzatGmjLFy4KMsaymCySp3Y+7Bz506p0LyZPXuOOhvA+iYKdQ8tnoqrR+VixULHKOmEAoQF8lq8GOvFYolCgbPjEY4Bxgyf/Gn4+x+h4xU8CxeUlSvX6DLW//u//0iVKqHlbXQc2vhdvXq1DBv2Y/Bcskw1WzS063wi9Jl38nTjnvBoGrwp43jDwjkoH2tjnou2bdtlLeOPC0wWD0Fz9uzZug8f8eKwjLZ589x7q1pc2o9XZpod3SPR3hmVKoXWhtH6weuvvyYsrU3aVxHHI2xFgLWhCZ8Qr5+dT58+Q9588y2pXLmy5h+PB4TbNawO33rr7dSVZEyshKpVq8mkSRP1vRnNm30XWSI+atQodTCTFzVqVFPv0XQBbTTIk7qRf//+H2lYUjsIMw455JDg/bsl17uPevPj0KRJk2T+/AUaFr0ehzJbtWqr1p0IsIyTpP5zHMdxnO2B3H91OI7jOM52wqZNW3VZHI5D0sHk0MQBrIiYKybto4ZVCUuBGzVqqOJCJlavXqNek6N5G4gO7H3WuHFmhy1RxowZI3hTji/lpI5MgKlXjRrVBecphKWbwG7cuEGXaK5btzbPNjg7BozRcMwgkjBuQsvA3/soUAARTlQAZznpeeddIN26dQuuBVdT1mvxsfvTT8Nl8OCvg7Ctah1o14iP1SJLSxs2bCBXXnmVhsfTG4QhyMGjjz6q1m44FonGpR9wjFGrVq3g2USkCkUj+4yyatXKoF7fqsMOLPUgGj8U8wtL+/a7aFgSCxYsDN4Ri4M6IMylAhXEsFB0A9pKPcP6bZQRI0YEYb/o3qlReM/wjmL/PZwu8a6wdPF3kPHzz6OCeiySKlUqZQmWSRBOPXiXkle41UH6KYS9p15++WWZP3++ConEt/4mP/oHb85Tp4bLtTOB0xYcoeDchPegYXUoV66sfPXVV1pH8o7e1zjNmjWXBg0aqVVhVHwlL96JeHz+7rtv9T2dF02aNAnGS+1gPOT0IO04juM42xvp/9V3HMdxnH8wTOQ2bdogZcsmexk2iGeTPia5TCbjk0DOmVgj0FWvXk0FukywtHjx4kU6gbbJrU3iWb7MUr1MVpBxvvzyixx5RSHfypUrBfUK8zMRJgmEllGjRgR5ISYkO0JwdjRs/CO4ML7+CAEkzB8rXMStY489To477jgV6KOCFePRxB/2NnzllVdl7NgxatUVBSGKpfZz5syRM844U59xE9iSxjT52bNz9tlnS+PGDYPzApoP1zhIh1jUokULqVcv3NrA6hUH0Q9rQ6zOeC4tDwMBEi/PSU6ULB7Ok1asWKH1oi4G7UAca9Ik/GGBelmaMWN+lnHjJuh3E+cM+pVyWR7dufOuGmb1itYNOGePxmeeeTroiwZqgRePE4frlIlV3vvvv6th1D1df8Nee+2p20SYR2SLyydW2+wDO378OD1PysfA0honKVinMl4sruWJdSh5vfDCcxqeDns33nLLrUFfjpeSJUOP2gbjjL1kv/zyK90/MS/Kly8nnTp1CtpSTJdR59WHjuM4jvNPxYVDx3EcZ7uDySSTOCZzeQlq0UnrihUr1RImCNVzg8ukZ4ld6dLsI5h5gki5LMGzyb3lz0SbyT2iIfsS5oVNRPEqG12qaYR1x3trmSxHCKRJN4FlL7DBg7+TSpUqqwDgOOFYt/ESim/h+f92hBaMEC5TXrZsRfC9gBx++BHSt+8RKgbxTPFM2HiNjt3hw4fKiBHDgnGNM6IiWdfYUxDLsKlTp0iHDh2DvI7U+BBNH4UwnkUcX0DlylVzvQ9YWswPAq1bt1HRLx2IjSNHjpCVK5drvKjwSZ6Us3jxQhUgk7C4OGJiuXK492gYFvZ96OEa5xsQ7R+8/vKDRHyvR8qlHkWLFpNu3brrfqdGUn8A/Tt+/ITgXVQ1aPvmtPGihELhVhk7dpxu6wD2botj4XvttVdWXINr7FnJ/pTff/+9inTpyrd8EFKxpGSJsy2FNng34mznpZde0nPyIl28bvQTx2677abntMewuFg1YnmOw5i84N+D7t3p77q6RNxxHMdxtldcOHQcx3G2O5g4cjAxr1IlFA7jk0gjGr5gwQKdhMajEof8WDJXtmzobTUTWPZhTVS4cGiNFIXJsokCeWFp16zZoHupxWESvGHDJs2vevUaGmZtT2LlylWyZMlSqVChYpa1lbNjY+OFpcThcOB/PAD/28FyWvYzRARjaXC1atXkkksulRNPPEmi3sGjY5DnDDEH0eaZZ/6rexxinWtxyZcPRKdp02bKiy+GQhFYPvH8SGucdtp/pHnzJirymCBHHMQ+ngsE/c6dO6tQmQ7a8u23g3XZPwJm9P1BWVitzZw5V2699fZUaDK0ES/BUfEKyIO+M6w9CKUDBgzQHx7iwiF14HlmeTMWcEA+0bpBtC9ee+01fT8VKpTTI3Qm6CcsslnOO2LETxqWLq2Vdcwxx6oFZVTsszT8qPPGG29kCbrR+kUhnP0V2bcRS8moWGtgDY6VKlaoXKPt8fYTbvXo2LGjCrEI2MSza4jBy5cvkyFDvtW+zguWPbds2SpIH4rKjuM4jrM94sKh4ziOs93BBI7JNeId1iB5YZPQNWtWqdVRfMKJVR9hJUqU1CV2mSApgiX7kYUiZM682Ny/QoVyqbP8Qf2SlkeTN8IDjlGY1NsEOB0IMUBcxwlhGS8CHt/Nuu3XH9u2ZX9HXMICbPXqdWrZ1rx5CznvvPOld+/9VGwzgYiyouOVsYxX4DfeeE2+/fY7Feqj1xnfODtiD7oDDuij+3oa8byA+Pb8sdwfZxzVqlXXJckWn4P6YCGM9R3PUibmzJmry6fNCjIK9Tfv5XXq1E0rJCF+sdQZAcyeRerA++L/2TsLMDuqpA1XCHF3dzfihCQEh4Tg7r7o4ou76+KLw+KuC/wQPCFClLi7u7tA/n6rb8309PS9M0FCCPU+NPf26eN9uif13Trn4MlYv35tDQMrY+TIUTJ69BidHh0XG8PnXoJ3XW1p3ry5hsXrBtYXCJNffPG5/oBAuUlxkyAe7UZYGzVqVFZYElbH5s1bSr16tWXx4sU53q2hSFdBBduZM2drWBLkb2WwpiAbpSDa2hgy2DCGvv/6669SIenrBvfee5/MmjU3+JZz3Nj0edaVtd2VM8F05WbNmgfjsrimcxzHcZydERcOHcdxnJ0OjFM8Sdat2yidO++hYXFjOw5G38qVq9UDJzTEs41JM3bZCCGTNxIwBXjZspVq3JpwGM2Lcho1yr32WSaYRrllS+hVFAVBc8uWzcG3sG3pDGWMbOL98MN3upEA+TlOSLaIF37nYJxlPkIxnePnlPgUPmOsnYlgP378WFm8eIG88sorcuedd0r79u2DdCZyZYs1JgDZMzZ69Ogg/t0qvIXLBoQQr1ChIroTcK1aNeT1119NXckmafybMHfvvffr7sGIhlHhnDQI6njtsuMuHo7poA4IoQhdLA0Qtju7HYiiQ4cOzVpjkDAOw9o4Y8Z0mTZtSo5+4JN3B++HI488SsMMntdx48Zrf0f7BMg/7NNdpHXr1jp9FqJ5G1b+G2+8HLRhjgp3FpZfENYQHvF+HDZsmIYl5RG2J/TAvOSSy2XSpCnqKWr9wXU8+hAVX3vtFV2jMd072trRpUtX2W+/A7T8+LuQe0o//fTTUF0qgrysb4xwfIZl7LvvvtKyZTNZtGihnhPP4nIfEUbNEzIT4e7KrVR0pk7b2p+O4ziO81fAhUPHcRxnpwND08SBGjVq6mfUgE9i/fp1snbtOvWKiUNavFmYxpY0ZTgKxiNrnGHERqcUmiHNUbVqOK04PyxevCQoG8M4NISjsKkBhmupUuHOrklQD4xlpmcOGzZcN3fJz46hzt8DdI4NGzarYMXU4q1bGbOIU5kOxHOmuIbfCxYspmORTUPwiitfvpJcfvmV8tlnn8uee+6lgh1j10QVngUTgwjnmeF8xIiRcsghPaVJk0b67Fh84nCOJy/T7V9++XUVwPPCyrjssotl5MgRWg/ytHCgbJ6Rtm3byR57dNH3RlyUMtiAg52C+VEiWj8gT9LNmzdfHnrowVRodh2ijBgxSiZMmKpeanadT+rBDxPduoVr8BmTJk3SdRWLFKGvs0VPIB2iG8cFF1yYCs0NdbX3x+mnnx2U0VXTbCuUxw8os2bNkokTJ2oY7Y72hWG7Ftevz070hVVQtn6zeuPhOWDAABk8eLDGzeS1R7/zQxCb4ZA2Z5lbg7wLB/06ScaMCb0h40IkZVoYXrbHHHOMLF26RM/pG64DYue8efNk6NCftD5JbYuCx2Hz5s1046t0feE4juM4f2VcOHQcx3F2OjDczHirWzd7o4BMrFq1KjDc0++MiRFcpEixwHBHLEkPBijCnBnpcTBcK1askDrLmzlzZmV5GcUNYYzUcuXKSYUKlVIhubH2rF69JjCSl+lOohDPy/l7gkhSr15d2bLll+AZWCmbN28IvuPhyiYUOQ8L37RpfTDG18maNauDMbVYhg37USZNmqACyrXXXqvi2plnnpEl1BmMRQ6eDQvn08Swk08+QUUpvPlCIdOeRabIFpTBg4fKv//9sK5Plx8s/XfffSfVqlXRMR8d95SNALXrrrtI06ZNgucoXL803bMxbdp0GTBgYPBOCZc/sPxpD2lWrVqha4127Bh6OSOSZbchOz6eg5QZ3U0ZEA6rVKms3pYhvMdEpkyZrD9G2C7OhvUdayXyboJ07x1AeDO4N+kE0rzgXUgXTZgwVtatW5slBsaxptevX18OO+ww3bUerB/4RChll/dvv82eYpwJvLWT6o6nKz+urFq1XCZPnqph5B/tf+DcBNP99z8oyCcUBi0e33nf0qYffugjCxcuzJVHFOKzORXT8dm4h3pliu84juM4f0XcanAcx3F2SpI8BzOxZMkyWb8+p5eggTGOMViiRLHA+A6vpzPQEQ2XLFmoBuUuuxA326DGYMV4Z1fj/IKHla1BFxU0rPy6deup8JMOExoWLJirHluFCxdxw9bJgjF19NFHySWXXBKMqa06XX/VqrWyfDnefWtl6dLVGrZs2RoNJ2zduk3BWP45GFuFdafbBx98WEaOHCNPPvmUnHrqaZov4hhCmBEX4xi/JtIAY5LngynDiIYWPxR18LqbIj16HCjdu3fX8EwCWZSbb75Jn4ESJUqqqBOtB3lTZu3adWWvvfbRNUwh3fOxZMli/UTAs3eCQb7z5y+Wo446KkebkmBHZZYOoHyDuOwYjEdwtjhYQNcT/Omnn9RbL1532kP9161bI4899ljqSjJWlyOOOCK4Zw2DtuDJnNN7Mb+wniDTjplWPnny5FRoeipXrqxrUtIv0TERslUqVaos77zzjp4lvX+jNG7cVJo2bRb0RQEdJwbtK1y4kKxZs06+/fYb3egqHdSDru/UqZN06NBR15skzO4p/dqgQX355JNPZfz48alUyVi/1qtXT4Vnpkk7juM4zs5Gzn/FOY7jOM5OAEY16wtGyctI3rBhfRAn+c8itiEGLVMF7U9nXAgxmPK8aNESvU4U0waoE4Yp4Xh55Rc2bUBACI+ckB/TlPHSSocJLOziisiQl2Hu/D3BI+yLL76Qp59+Wm655Ra5+up/yYUXXijnnXeunH32P+Siiy5Qb8K77rpTnnrqP/L+++/L//73kTz55JMqRtnzxRgDxj1ijAkrcYjPNeLvv/9+GtasWTNd987SmJDDxhoIiv/5z9O6OzOke/6i9O79vXz//ffBt11yiYaA8ITQ07VrV2nfvkMqNBme6zfeeFXq1KkZfM851Z9nm7xY1/SYY45NhSazbNkybU902jHpqdvGjeuDPthNw+y5nTt3rgqHeMaZIAlcJz1exB067KG7QZNPJtjtfdiwwfrDBXHT3Zu8IB11mT9/gYwYMSKH0JsE11q2bCE1atROvc9CyIf7wlqL48ZNlIEDf0xdyQ3tJS4ccMABmmdUOAT6A1H3xx9/lH79+qVCk/nlly36I865516ga1aSzqAs1rqFIUPC3aPzYq+99pKePXsG38Kx4DiO4zg7E3n/q8txHMdx/mJgFOPxtC3gTcTmBLYuVxQ8sUKjtJh622Ri06bN6iWYJNCF4sWuUrRotpGaDhMB2LghSfQwUYXNHEqWTC8cWrrZs+cF8UOxIC+Bwfl7ghjEzrV77rmn9OjRQ73nTjzxhOA4UdeD23///dVLizXrbBOOODbuGXdJwhTj1sYkm2sceeQRMmrUCDn00J6yaNGiLDEN+I6nHdNZL774EvWuzTR2yZsDmGKKFxvTh1mXNJqvgXdwyZKlpHXrdkFdQyExXf480zNnzkrtRJz9PFIeAhTTcBHHOnXKPY06Wq8VK5brtGN+2Eh6plkLELhG/fr27SfTp09TD794f5IHO8EffPAhep5U92jZn376SRAnvEe/9R1A/fixZezYsSqG5gU7YDdt2kiFYt6nBnXj3rDhzaWXXpIKDcOjRN9b++9/QHCv8GjdnKNPuB56g/6soqaFJcHUZkCIZnysXLlS60F82oag3L59W3n55efVIzE/tGrVRsqUKefCoeM4jrPTkfNfLI7jOI6zExAa5NsmHC5dulQFugStQ8FIRywxgzOdQYoxzfRCps3FwRguXrxY1pTIdJC35c+C+6SLiwZcx9AtXbpsYCyn37DF0s2ePUvYPCCej+MYjCmegXRj28Qc4nAkkWl8ka+JZWz2ccopJ8uoUSOlefOW6g3HNQ7LA+EMAefwww+Xww7DqzH9P1upWzT/9957Rz7//P+CMR+uV2fhhrUTb8fOnTtrWLTsOPywsGLFShX9421HcJ06dbqceurpwTsi97NNOZbv8uUr1Esw/gMFcXi/MP3XoE/69OmtomXp0qWy+h/Ib9OmjZoGcRfibTQs/J133taNRTIJpPmFNiMAjhw5UqZNC9cUTAdlVaxYWUVndizevDnndGXERHYmHjIke5fmaFsN2mH1btmyVTA21uZqB3EoY8iQgTJlSrhzdVJedj+aNWsqZ555pnp2xu8/a20uW7ZUvvvuWz1P12cW3q5dO6ldu3bQv75BiuM4jrNzkfwvDMdxHMf5C4NRzhps+cEMxfXrMUJDwzPJ0AS8BSN2ZSLr12/QDSNYSzBqPFIOgkPhwgW1jExE023YEE6LjBq0RmgkZ/ZetHSLFi3Ms1zn7w1jBTE6aayBjR/icGwr5Lt69Up5/fXX5LLL8C77RerUqRuM99CDL+qli7jFhkX77LO3nH322Vmb+qSrG+F2DTGLacosCVC8eJguDmvtlS1bVg444EApU6a0hmV6PphCHZJdPs8pdWbqcc2a1XTH3ySi+eJByTMdbQb15p3DjwCjR4+Ql156ScMXLpwv8+fP1fpFdSjKxbOOnY27dOmWw+M4XRt69fpCJkyYoG2mrHT9uC0gWs6aNVN3ReYHjkyw5my7dh2lQoWKKsaZ1yP1jQqxI0f+lONeGpwT18LPP//8IL15HWa/M4mDqMmuyDNmTNOwTG0tXbpMcN+6aBprA3lxkI61MT/77DMNT5ePlV2zZk312OUWbKvHu+M4juPsyKT/F5LjOI7j/AXBiMMzae3a/C1Sb0YfXiLBWXDknsrLKYYvU9rMME9nRLLpwdq1rJeYW1hBDAk3J8ksupC35c+0O4iXRx3ZIADvmvyAd86vEXsc5/cC8frxxx+XBx64Xz3vwrX2mEqb83lD2MLTsGXLlnLeeRdKgwYNU1fSw/PBs7lmzRr58steugOyrf2Z9OxQRvXqNVToyQ/23EchX7zl2F36/POpZ/3UlZxEy2etwuD/QRhnOdvNO4b3wzPPPKXrTfbu3Uen0LJrL+Ka5cN3RNG5c+fLnXfepWHpsDSPPvqIio0IZLQ/3ifbCnnQv9ynQYMGqsd2OqwsNn6pUaOG/rjCPbdw+padoVu0aCaXXnqZhqV7V9m7mXUp27Vrr1O/+aHIxMfwvbiLemsiILObfKa2Erdp06bBvWugY4f01j+MEXZw7tu3j06jT4fFBabzk6dPV3Ycx3F2Jlw4dBzHcXYqzHBkB+FtAQMYQ97Sx2GKMoZ9JiMU8GRas2atGuiG5YlxyZTnPLLQMqwcPGqSIE+M6+ii/pkI14rLPX3acf5o8Nb78MP35YILztd1B1kTEM83xjjPRfyZYooyguLRRx8ju+++u4bx7DDm84LddMeMGaXTYRnv6Z5XwitUKJ/vHc5LlSoT5JfTO448eG/UrFlbjjzy6KxpypnqyVqFKY0pSJ9bHGMZA6Ygsxv0xx9/rD8MRD0xyZv+Y1dkqF27VsbyqCNTo5mKy9Tb8B30+/yAQLmlSpWUmTNnyvTp01Oh6WGa9J577q1eh4itBnWkXytWrCiTJk2UCRPGpa7khjJNpOvRo7u+16KQF/ed+z9u3Dj1bsyL+vXrS6tWu6kIDOQBlINAu27dennggbs1zIj2OfE55+jWba/gb88G9SqNxnEcx3GcvzIuHDqO4zg7HRhyiHdFiuRfKJs7d56KeoFJmGU4ZkMY4mGyCBEFg5ENTTDu48Zl9pF/gxIhknzidSIsFDPz18ZVq1ZqXDdmne0NgsyECRN1t1s8wRiHCIY2ruNjm3HNddbOwwvMID4CU6YxjEffxo2bgziIS5nH+sqVK/QARKJM4mT58uWkZMnSwfO9Xutm8GMCIlW/fj9kCVqZvM3womzUqIksWbJM65oEG7ZQd378iIqGQP0on7Uhr776Kg2LiplJsPt1VICM1v/Xwj2jnaVKlVavvqFDh2Wcrky9+ZGjU6fdpX79esE9wuswpaCmIE/WpPzkk09TIcnYPTr00MOD/i+co/3kgTBKG6dOnSzjx6cXIYG8EDTbtGmjyz4gckf7hzbutttu8tBDj6dCwjRWhyjWni5duui4+j362XEcx3F2BPwvmuM4jrPTwVqEiHe1atVMhaTHRIv169cF6dKv70a4bYySGYzK1Lfgi+WXbWjymVyGETVKTYRIVy8M7bwgj3XrNvxunkaOsy3gtXXRRRfLq6++Jj16HKxrArLrMWOXcR0XYhDjELnee+89ufvuO2Xu3NlZIkw0XhJ4ENarx5RhvANDITCehjJ5FiZPniJ9+vRJhWb2akRcYoOWGTNmqghncdmYCAHwxhtvlOeee17jxsU+sHayC/oFF5wnrVq1UFE0LjISj4O1GZO8iekHpi+XLVtGbr75Vg1LaqOBt+HAgQO0HNKS9+9J+GPEz1rG3LlzUqG5sfrhIdmqVUt9l8ZFYPq0XLlyuqlNOqi/jYXKlatIx47tdT3DeJ8z5mbMmC29en2pYnU6KJ+0HTp0kCpVqqmHImODcMqijtx7sI1r4oIn2H2DW2+9Rb1P8Zx1HMdxnJ0BFw4dx3GcnRCms/0cGICFU+fpMWMvavjFwbbdupVrv87oJl8M0dBILhjULQxPR3bc8HuaaqmBmx8xkPXEfv55U9r2OQ7Ex93vCULXgQceJPfee5/cddfduuHHTz8NVWEGATEuoOFJhkD0xhtvyAMPPKBTgk34sucpitW9QoUKcuihh0nlypVVYEuKC3gEM132ueeekWHDhmremYQ1xCV2BV61Klwzz+LxybqEVatWlXvuuUtef/3VrGtxgSkM3iq77dZGrrzyqiAdG3KsC+qnl5Vo+XyP14n1/BBeO3XqrNOEw7Ds63HwupsxY5bGyRTv10L9EE+nTp0ic+bMTYUmw31AhGvcuKkUK1Zc77ndG+rGd9ZznDFjunzwwQcaHifeDsTaadNmqEdouE5tWA73BE/QyZMnZfSEtLwQnCtVqqzjjDFp4bSP9Rdr164Z3N97NCxavhGtV82ataRFi+aybNkyTe84juM4f3X8r5njOI6zExJ6kbBW2O8B9mBoGKYCfiXksWULO6pmVg6jRigCaCha5ia8FhrefNr33CAcspNq6tRxUkTHTXTc2efvCeWwjt2JJ54kH374sU41HTt2rMyZM0u966Ljl/LxukOQ+7//+z+55JKLVTAzoZwp/HEs/Z57dpUTTjhR1qxZKcuXLwvyyrk2IZA/02znz58vTz/9VPA5L6NwCE2bNpEOHdrJtGnTcni4kXelShWlSpXKQT0vkXvuuVPDyStertVxv/32l3/962pdP49pu1ZuvPzc56F39KmnnqrniG/0STRetB/79v1BN6XBSzKe1+8B4ijeffQjU9GZlk75uUXTcGyxHETz5s2levVqOQQ6g3vAOo9PPvmknpNXtD1xKlasrJ+bNtEPiI96qv1SpUoVWbBgvgwePDhtHlY+4/LYY4/W9SpNcAY+aQs7Jg8ePDDtFGTicVg5J510gnq9ExYXxR3HcRznr4YLh47jOM5Oy7Y4e9jOrmYwRgmNQUS6PFwFMxLu9rxhw6agrMwGfM46UGZuo5e2ISjGhYlkMOQxwFOnjhOAIGKCB6IcItMHH7wvDz30oE69veaaq+X666+Ta6+9Vq677lp5+OGH5PXXX5N+/frK1KnTdD24dMSFIzARhWvsaPz88y/I119/pev+Ie4w7dXqY+JMsWLFdGfbL774XE499RQV+CDuaWvpTLg5//wL5I477lZBkh3FuRYH8a9MmbIyYEB/efHFFyWvndgbNmwoF198qT7DeKZZWeTNc4g416pVq6DvbgnihGXSDuKFcaljtoh50kknS9OmzVR0s7zsM471J9Nu69WrJ3vvvZ+ex0XDKEOHDpFevT7PEhd/b6y/yRuP0pdf/q9MnjxRw+N1ip43b95CdtutlQqm5iVokB/3fPHiBbJ06aK0bQMT5P75zwulf/9+6vnIu87qhaCJeNe/f18V/NJBXNK0bt1WGjVqnDVGDa7joYrn4UcffaRhSfUinqU7+ujjVZhG4CaMa47jOI7zV8WFQ8dxHGcnBQMu7/X/zNBjnTIMegy8uJFnhqiJi5mxOHHDMjQ+Q0MyNJbzY0wWKJB7vTRANCSf6E6gScYsEI5o6TgG4x5Ri/H4zjtvyXHHHa3C3FVX/Uv+858n5M03X5f3339X3n77Lfngg7eDOG/LE088LjfddKOcddaZcuSRh8nhhx8exL9C4yxZsjiVc0iSV5ZB2YgzJUqUkA4dOslHH30itWrVlSFDBmdtCGLjmbgIio0bN5GvvvpaHn30Ec0j6vFnxJ+BM888W7p121uFQ3vW7Hk3bNOQzz//TPr0+S4Vmgzr8rG5R4sWTWX58qVBOt4voegULbdz5z2C9tSWBQtC4St8d2SLR4RZPd577331vlu0aJEKcPH6GaRlV+RRo8YG9+k0FeogWq5hYePHT5BZs+ZqPyfF+z0gX95BeORNmjRFZs6cnRWeDvq8Xr1GQbpf9L0bjct3xN7ixUvKF198kxWWhIVfcsmlsn79BhVzCbM+5DtjZ+rUqcG9WKhhSVg+5cqVDcZZI70P9l41yJOdwL///ns9T6oT9yga3qFDG5kzZ4621+694ziO4/wVcSvCcRzH2UnBwyb3dMZ0MFXNDL9k4z3bmykT2Z6L+pHFL7/wJxdvo02BkRtOoU6abgmUb2Ux/S55alxoqG7alNPATYL0odDixqsTYgLH0KFD5bHHHpOZM2dKjRo1VABC9KpVq5Z+1q5dOwgPP8OwWlK5ciX1Cps/f658+OFHcsEF50vVqlWkZ8/u8vXXodiTDhuLJvzZOJ84cYI89dSTKqDNnTs3a8xbPRHJDzhgP/nPf/4jJ554rIblh0cffSyob3X16iPP+DOMgFm+fAWZMmW63H//g7rRRibwEGSjl0KFiupGGtENk6gr+RUvXlQ9GXv02F89Oa0tVjbnVhd+THj11deDcufrDxdR4SkKYla4Vt9WadlytzAwA0uXLtE1JG2jmT8amla0aGH56qteufo4iYYN60v16lWD99fGLM9BIxTuNkrfvn1U9M2LJk2a6hTyxYuX5Og/3qOIphMmTJCxY8ekrVf4vkU4LC/t2nXQDVpsyjWQJ98RDvv06S1jxmRvkhL9W2H31Xjzzfdk1qw5uq5jNJ7jOI7j/NXIbYk4juM4zk4BnoN5exwaDRrUVwM2yXDHFmTnUK7nZRQzXa5YsSIa18SBEDyndtVpjqtWhdPmokZmOvBqCg3beLmhwMl0v7zAa7FIkcJB/PxMa3b+LjB+Fi9eKKx/WbZsORWYouOM79EDeD5Ypw6vsDJlyqnQ2K5dO+nWrZuMGDFcDjroQOnZs4c8+OADwflPmsagvKQxbwL6aaedJZ999mVQ1s+yYMECFdKisEstG5R8+ulnssceHVKh6TGx5uOPP5Y6dWrI3Lm5d9+lPohETZo0khkzpulGLKtWrdJrlj4Om7wceuihunZgfOdc8t+4cVPQLzXUy61794M0HDEs2nbypn0cCF+vvPKq9O3bP63IRL+PHz9ezj33HGnfvl0qND142U2aNEmFyfy8Z34L5M+0dXYmfuedd2T27FmpK+np2nVPOfLII4N7nT3lOCcF9H6MGzcudZ6bqIfm8ccfLytWLMsapwbefkxTHjZsWMZ3pb0bW7ZsLnXr1tFnIpaVjnnaetttN+t5vKx0sGYi9yHdeHIcx3GcHZ0/9l8SjuM4jvMngU23yy55G2pmVGPsp4NpwRs3btE10OJiRhwMRHYGTbcxC/UyoQTDNy/C6ZC5jVSEBOqSH+GQJpYqVVY2b07v0eT8/WAsMLbDTSXC8ZVfkSlMG07tZzwzFps3byk9enSXSZMmyiOPPCznnnuubjwyYUIo/pC3lWOf5JMtWLLjcEt56633pGnTpuqtF3p+aVQFkQnRadCgYfLJJ5+kQkMszyiINUxBfeyxp4K8Nuk6dSY4cVA+5xwVK1aQb775Sr766gvNi2tJYg9i1GmnnSF7772PiozEiZZNOvqDNRE3bFgvzz33XOpKTuz5J/1RRx2l3xcvXqT9ES+XqbglS5aSzp276mcmEPFGjhwpS5YwnTqc9r094P5Sb6Z9Z8L6inuMZyZ9Fe8/6r1s2XIZN25sKjQZaxtibsmSJYL3IZtPZd836sQamUy7Z4dliPctcWzc161bT5o1a6Hv1fgPLaTDK3Hq1Jl6np/3N2uE/vjjgKz7kDRGHcdxHGdHx4VDx3EcZ6ckNCjzv5tlsWIl1BDE0yRlQ+aAjVFYjysvChcuGORVVI3hKNSH9bbYVXnJkiUaZsZqEmZgFi1aKIiXvH4hhiyCAoJLXjAdE+HEccBEjHBcb9WxmDTGMsHzQhobxwhWq1evEnambdiwgU6tve22W+Qf/zhX10FcsyZ7k5KogGJl20YZeK49/PCj0qZNGxW/wnEbxicd4t/+++8rxx57pPz3v89rOCSJMoTxLO62W2sVGocNG67PYRyepRIlSqoIetttt8uECcmbfBgtW7aQc875h+76zNp6caxfihYtFtTxRfnhhz6pK2GdrM30oQlZrLFIudSBcGsP8ejLBg0aSNu2rdMKVpYP75dhw4YG/b1aBavtgbWJH01ef/31VGj6ewLck7p1a+v9icfjHiG6fvvttxk9GO3+tGjRUg444ECZPn2aCrsGQnPVqtVk8uRpMnNmmE9SnSwf2lC/fn39bj/wGKQrVAiRuYC89dbbGmbp0nHddTcEfVImy4s1qWzHcRzH2dFx4dBxHMfZ6cA4Y22r6dPDhfrzQ/HixQIjMEzLzqdxCMf7Ka8NUpiqjBfN5s25RUaMzC1bflExBPJnROKllewlgzbJNLhMu9taGaVKlUysk/P3JRQ97PjtggZjMhyXoZdg+fLlpVGjJrq+4IMP3i933XWH/PRTOH2ZePHxb2IZB+LN9dffIB06tFfRxaazmlDD89CkSTN54IEH5a233tAwrkXz5NzKIf5uu7WRjh3b63qKtDkenzis4Th27Hj56KMP9JqVF41n7LPPvnogiG7ZkrzWKEsEIKa+9dabsnBhuEFHUl6w1177Ss+eh8isWbNyiYMIvKVKlQjeU8VTIbmxurKzMQei4fYSDimaH10qVaoQ3OMRuikI0Kfx9nJPgJ21a9euq98hGo841H348OFBfsNSoZkoIAcffIgsXrwsK38DYbJ8+bLyxRdf6Ds8nfBqtG7dRpo1a6k/ylAnqxf5hmtabpVx48J1Dq3P41ia0qVLyZ57dlExN11cx3Ecx9nRceHQcRzH2anAOAsNxfLBZ7KBngSbo2AUYqBjhEYhT6b5rlu3Psgzs/hWvHgJqVy5sop5cUORc4zPhQvDDRjiYqBBPDM8ESIhalSHIHwgQi6RFStWpsLSw3S9uBek4/wRILzbGMZbtkaN6vpsvfvuu3LDDdeqgMO16DgHzjnsuWjbtp3cdNNN6nm4YsUqFX2AZwghsVSpUioC/fvf/5YZM6ZrWrA8LT/i2Nj//PMvVaxasGCeerXFy6fsNm12k5df/q/069c3dSX3s0o60vfs2VM3+kBkSnqeqSsbyfTvPyAo+/OssChWb/jXv65Sj2XEUuJZ/VgCAY+56dNn6Hm03gb5kI7+nTZthu7CvP2gDWz2UkSnDP/znxdpaLp3nIHYh0DI/YzfC9qMpyVtyQ+NGjWS+vXr6nRvE6HJh+nLXPv88/+TiRPHp2Knp3HjxurRylq14VT57HqFouNWXW+SIx3Rdh977PFah6R75jiO4zh/BVw4dBzHcXYqMBQRCTBetwW8BKOGehTy/OWXLYERm581DovodD3zkDLIl/wxPKdPn65hoRGaG8ozcQHRoWDB3H+ugygaj41WVq1KLxwSB/Duoe5mTDvOHw3jjPHGwfTRKlUqqwh0++23ybPPPhOEZ4/PKPYccrRo0UrOP/8CXX9w9erVOoYtDc8PO+Aiytx//30qmqUb2/askQ9TkRF2yA/RinKAtDy35Ilgde+992o4WBzDztu376DCEPlv2JB7XVPyZFMNfpBg/cQpU6akrmRjzzp07NhRjj/+BBk7dqz2mfUDnobz5y/QKc/sNJyunewsPH78xOCblZv7ffZHwnTz1q2ZFv6pnqd7xxldu3YJ+nqj9l28TQizvMfZIAUvzLyoXbuOHHroYbo2pgl35EkfFCtWXNauXSO9en2l4emw/qINrGdoYrVBFdkciI12bHflJKL3dL/99lOPb6bYR8Mdx3Ec56+C//VyHMdxdjow/goVKpw6y4wZioh9eEclCYOh8flLYERuytODhqmJ7FCbJNJxjlBhU5UzYemY6safa8q3ugLXOdi5deHCBanQ3Fh72OU1TL59hQTn742NU0AIwrMX4eu+++6Vxx9/TMMh+txZGhvve+65p1xwwQUqpEU9t/hEiEFUGzhwoLz22ivB9fVZ5RmcRwWbfffdV4455jgZNuyn4HnM7XWIWFSzZi3p16+//O9/H6Su5MbqjFjVuHGT4N3ws74f4vlRNnVHNOzb94csMSoqboGdd+9+sPBjAWsUkpZw4lSsWF7efvttmT07eQkG4g0fPkzmzZsr5cuH76DtDWUiWMLEiRO1/ta+ONbePfbopD9+EC/ad6TlfYk36YQJoXcf1y1dnFKlSgd5dVavb9skJZut+uPQl1+GXp+QlI+V37RpcxUic8cJdxXn3rCO5Pr1a1PhOYmWXalSZTn44ENl5syZOg7S1d9xHMdxdlRcOHQcx3F2OjDMkrz0kjBDsVKliuotGDVco5AnHiPp1jIzmFpcpUrVwHBMNkwROTCE8wsL6wNrK0aN0dCoLiiLFi2WefPmp0LTw8YKhQoxJXD7iwnOjgljPRzvyWP+98REIcT5smXLqFffgw/eK//+90N6nfEcF7pIEz7Lu8oJJ5wop556WpZ4T172fCFU8f3VV1+VAQN+1LBMUBZCZOfOe8jcuXOC/HN6xZE302SbNGksxxxzrIaRJoo9i5TL0gTnnHOOnuOxGPU2Jh4H+fH++P7779J6z1mebLxyyimnyJw5c/Xc+oGNWPDY/PLLXhoeB0+7/v376pqKeCrTDstze0F5tJPp29dcc2UqNDM33HCD1hexLz4GuPdLlizWtQ5XrVqt+YdjNjeMrVatWgZlN9Y6WNv5JF+Wa2CH44kTk3dXBkuDZ2rHjh30nRmPx3hhPPTu3VvFZSBOunohTvfs2UOWLVsR1IPNt5I92x3HcRxnR8WFQ8dxHGenJGmDkyTMUER8wMBLZ0wSjuGKcZsJxDym12EXxvPCWMTraulSPA7zZzgWKVIs+H8o8FhdgXPqC5s2pRczTRSpUaOGlChRXHcKjebj/L1hvCKybw8dg3HHQVl45VaoUEk3TbnnnjuyrkWJhiEgXX75FbJs2TKZN29ejmt8shmSre+3evUaDU8Hz06DBg3lvPPOk7Vr1+m0ZMsL+I74x9RqdKwff/wxUTgkzNKxo+/KlauDg7UJc7bDnl3EwxEjhst3332nz2FSnrwz2AG9R48e6p1G3YjHwXPeuHEj3Qwmaa3VhQvny9ix47SceN7bC8o1kW748BG6BmsS9AkH1K/fQJo3bxb03Qq9z1HwOMRDk92SEQPB+jwJlmRo2rRJrh94Qk/IokH9Csp9992tYVZ+lGje++9/QFB2KARH3+W0Ec9ypoVPmzZNwzLVCerWrS/t27eVWbNmZr23HcdxHOevgguHjuM4zk5HaBDmNAqTBMEoTHNj583QWyinEYihiMdfKBxuSoXmhjIwfCtUKK9CZNx7hnoRvmjRIpk/P9xhNS8aNaqvRjBpo55MQHl4EMbDo1gd2EgCY37NmjWaV5LR7Py9QOwIvacY79tnPFAmx6ZNG3VMtmjRXG688VbdcZjnjHHJuLbxaYKMjePvvuujghqCX9RTkO+Ih3369JYPPngvazpwfJyTt+W1zz77yZ57dpXly5frebRM6oIQ2bZtazn33LM1HKL5WVssP9ZOpF5Ju5eTjs1KED5Zp5DnMBONGzeTJk2aBvmF8SiHNlWvXk2mTp0mr7zysoYb5P/TT8Nl8uRJWk60D7cndr8QL9mc6o03XtHzJKJ9d8QRR6WEw5ymCfeBH1tGjRopAwcO0HYRlo4yZcpIx467S/Hi4ZqCBmk2btwgnTrtIS+//KqGIUqSXzoaNWoc9PnPmi5aJv2K+McPMewSzg7SNhbSUadOHTnllFP1hyfyyxTXcRzHcXY0XDh0HMdxdjoQEeLGezpxLWpcFy1aXOPFbTozCjdsQBRI73GIcUnZFSpU0al30WnBpKcspiqvWLFcpk3LvUlCEhUrVgqM2/B73GCmrCJFdpXJkycGRnfyBinWPtb9at++o8ycOUOFlz9DVHB2NPBwS32NieV/NIxlngmety5dOkurVi1k2bLlGpYkehGfMHbHvfjiS2XOnJkqKJnwQzq8wFgr7+uvv9IpyEkQzwTH2rVry7HHHiclSpRU0SraH1YPxE2E/g8+CNc6THpu7Lk87bRTpWPH9io4Wn2BvDjn4HkeP36s9O3bL8g/d17EBYSm3XffXeOwdiJwifOyZcvKCy+8oGHG3LlzddfqrVsL6HvM8vmzQBAsV66MfPzxx6mQnD/eUD/rFzjppJOkcOFiQbrc3tMlS5aSWbPmyFdf9dJ3J6R7f3Fvu3btKvXq1VNvR6YaE9fKQlyGSZMmZNUhCavr+eefp2JvHERHfgTCE3LSJDajSQ95IaS2adNWqlatousjUqd0bXAcx3GcHQ0XDh3HcZydDgwyM/xsIwEzUJMwA65MmdIpwxVjMtuos7QrVqwIjvQ7GIcUkOLFiwaGYsGgDls0reXPJwYncUaNGqth+QHvliQbE6OXa6tXr1RjNB0Y8RjUe+yxh6xbt1EFF8dhTKXRTf5wTLRBOGS6NGPy2mvDNfF4RuKCjsWHf/7zn8FzxY8DOUUmvH0RhkaMGCFfffWlTu3NlA+fXbvuqRubsD5goUIFgzC9pPDsUj+mDtsmKYRFBTCIlnHcccfJsmVLs94ZBnFIhzcgXokIV7bsQVRAsrz4gaFFixbaHqYrh5AH04Ary8CBg2Tq1Oy1Utk85Isvekn9+vWCOGG7o/Xa3tAmBNkZM2ZLv359U6E5idaRe9e6dRu9D7yrrI/Jp3DhQsGYKCALFy7O9YNQEvwwwqZS3H88Bq0MPnmHN2vWVG644bqssEz84x/nBfefDX2Yzp7zXuEdieCMcLhhQ3iPotcNa0udOrWkQYNGWeMyr7Idx3EcZ0fBhUPHcRxnp8S8/Ww3zlCwS8YMuKpVqwWGJlPhMAA1KAviYPDnNcWQrNgsoXz5Sjk8DgGjkqNKlSry2mv/TYXmDWkQDOJiBAY27Zo3b0HWWmJxUYPrZsyyrhzktU6j42wvGJ8IgGze895778s111yt4elEFRvf33/fX/r27a/edzbdlXHOzrl4377//geyaFHeywGQfu+999Jng6UIglzCCyl4xvhBoX///jJ48MBUaHpOPPFkqVChXK51Ew2eYcIHDRqUtUmK1T8K8RDSWPaAXdgRVmkfaemzNm1a6wYkxogRo/QTz7YkT8btDfWnLkWLFpFzzz0/KywTL730kkycOFV3uLd3FjA+eKcyRfu7774N+guv8HSi21ZdO/Ooo46RWrVqBvcUT9IQ0tDXlStXkj59+uY5PqhDsWJF5aCDDtANWlg3N3qvGBtr1qyTYcOGp9atzf3+BatrtWo1pF27dsG3rYn33HEcx3F2VFw4dBzHcXY6MFDZfbVkyWIyZMiwVGgyUWOWnZVDL6acRikGJMY6640tXrwwT6OPqYJskEI8M/YNPJjYCODHHwenQvKmUKFdZMOG3GJfmG8BYUMGdle2sCTxEPBUql27emDkLgnCQiHCcf5sGJ+M20aNmsgnn3ySCk0P47tp00b6ffHiBSmx7BfNI1wHsLqKcr169Uo9z+lhuulhhx0mbdq00TXxkoSfYsWY+rurXHfdtXqelwB2xhnnyMiRIzXveH7UERFwypSpumwAIEAlgYCG2ITQTzvC5z18hzRokC0abtiwQR577CGdJr1u3bo867f92EVKlSqp7cgL2lehQgX9vn79uqCtoWentZl36saN62X06NHq/ZcORFOaj0DXvHmLIM3mXO9r8mRa+6effpoKScbuHWLwhg2btd+tPlCwYCHt63HjxgbHOA1L6nu7vyxf0a1bN30Pr1y5XMP9Hew4juP8FdhR/mXhOI7jOL8rGGQslD937jw9TxIEDLtWsWLF4HtoZMbjY+QhLMyZM0/YETUJM1DLli0dGIdV1BiOGoYYlYSx3mCUTHWDVq1aB0ZrsgDCdDkEzdmzZ+iGExi26YSDunVry7777idLly4L4qUCHWcHgOeEqcJMM7355ptSoTwbqS8pomP7gw/el1GjxujzY+F8L1asSHC+VQYM6C8LFy7Q8Exif+nSZaRFi5Yq7CTFI6xcOTwZszfbyMR1110v69dv1OnG8WebdrKpBmsxTp06Jcg7/dRb1lfs3HkPFdR495hoxeeSJcukRo1qctFFF8hPPw0LwsJNRHYsIQrhb9egjZvkv//NuSZjlGgfnXbaSTJs2DCdnmzQJDbw4V3HNPQZM0LBNele2Tig7xo2bKhjIRqPvkMAZDMsprMDfZb0Dra82rfvINWqVQ7u6dosETBkq4qi8+fPky+//FI9XaPCYhL16tUP7mfF4B28QtvkOI7jOH8Fki0Lx3Ecx/kLg8GHcYhRN2vWtKywvKhZs3ZgRIZegnEDHO8hvHkmTpwYfGYWEJjayHRkjMgkgzROXsb+gQf2ENb22ro12bhlWuSsWbN12lwmmMbZvv3umibqweQ4OwKIXwzJ/v376g66YZh+5MCe5aOPPkZ2262dbl5i3lvhtV2kaNFiMmzYkKwpvJnGOtOVWf+TXcfTCYzkW6DAVnnvvXdTIclE07NTtHlDRilcuGjw/G2SIUMGZxSbeOd06NBRN3Hhxwp7T1AXfiSoX79+0Ff95Pbbb5eKFSvHRK0/H9qFGIzANmjQEBU/k6Bd1gePP/5k0LafNa7tsMwlPAlZM3HatKnq3ZfXO5N7St8h0sXvKWlZa3LYsKEqLif1f3i/s9/fl112qY6lqLhMPkzF5m/NsGE/ZS0XkQnK7dSpk/6otXp1uOxFXm1xHMdxnD8bFw4dx3GcnZLQqCumokJemOFYvjxrAIa7H0fhHG8eDETWG0N0S8IMd8SCKlWq6nncaMUgRYCkyKeffkrDkgzXKE2bNpFddw3F0DjkR/0QKdauTb9BClCfunXrqNHK9EbKdaPV2ZHgOVu+fKWuKQh5PBpy6KGH6K63CEuMZTuKFSsRhK9QkQnRjeckE+zCW6NGjeAZ25xL6OM5sWPy5Ozd0JOeHQu74YZrZdSoUVnLBBjhdTzVyuo6h/PmhR7R6WBjFqa2ki76/NMe3i14Ly9dulhKlCim4Xm9S7Y39o6ZPXuWTJgwIRWak+i9Ya3Jtm3b6AYzCMn0lVGkSFH1rh4xYlhKWMw81bdhwwY6bZ1+i95T6sQ7Ovgmjz/+cFZYEpb/mWeeE+TBdGN2pM8OJ2881Xn3jh2L92v6+lAHNrvZb7/99T3M34FM9Xccx3GcHQUXDh3HcZydFjx2mBKYvStpMmY01q1bVwoVCj1IosasGXeIAHzPa/MB1g+sUaN6YNQXyyXQkS/CY4sWzeWjj97LCssEnkV4ziRtamJiJeul5SVCUA8Ekrp16wd5hfVynB0FngPWnkMQY+rn4MFDUlfSc/jhh+kPBIxn4DnjYKdm1td755031UstE8RnCuluu+2mXrvpBHpExcmTJ+nOv2DPdBR7Hs899wJNw7snKnDxyNG+qlWryLhxE2TBgswbdCDy16lTJ+vdY/Dskj/h0aUPkur0Z7PLLrsGfbZIp1Qb8bZYv8Gxxx6rAmEYJfsdxdRevELffvsdmTo18z2FBg0aSsuWLVVkjIvBlEffTpgQ5pPuXRje93A8sG7t5MmTs6aEk4ZPvAhXrVojffv2VcEzHdZm/s6w/AR1YCz4e9hxHMfZ0XHh0HEcx9lpwajesGG9zJkzOxWSGXZVZl2ycFpgKjDADDuEyJUrV8jy5cv0PB0Ym/XrN5By5SqoVwnnUTBiMTZnz54blJPToE0CAZJdRTdu3JRlrEbBkGUtxxEjRqq4yPV4HKN69RrSrFkTnfpMPdxodXYUGIu77FJQvbpmzpylm05ApvHcpElTadeubfAszU55kYX5MLbxNvvppxF5inNG1arVpWDBXVUgjD8WPMPki2g4d+7cVGhu7HlCHGrUqKGsWMFadtHnn+f3FxVIgeuZoC8qVqyg77K4+EVZHPQN16yfdrSjUKFdg/fgBvnhh95Z6xMSHsX6DQ466KDg/6FQa3kAbaxcuUqQxyzdXAai6ZKoU6eexmFqt2FpChcuEhy7yief/E/Pk4jm//zzzwZjcmLwLXfducV4VGbycLdxwHqZLVo00781iJLxvnAcx3GcHQ0XDh3HcZydEowxPDo2bdoic+akN/TjlCtXXo3MuNgXTgssLmvWrJXZs+fkaezhGcOaXOl2OUXkWLlytQwcODAVkpmaNWsJOysn5UW9VqxYLiNGDFfvGgzZuMhgBjjrPjZt2lSNeZ+u7Oxo2HPL1PypUyenpvUnj1HC2Eyle/ceMm/eAl1vzrB8GOdjxowhJLyQgIlDjRo1kDp1cq4naPDckd+aNauCsrLfJ0n1Mtq0aR3ED9exy0m4+zObpAwa1F8FsnQgbvEuYW29dEUhPiFY8QMJAio7Su8oB/Vh85BFixbI559/IT/80FfrbH2eBF7RRxxxVHD/p6nAan3MJ+/hSpUqyKeffhKcp//RxdJ06NBB2rVrr++63MIr8X6WwYMHZcVPwup6+OFHCBtMsS4lYyEK7+AZM6bpGrhAfvE8LZ9ChQpL48ZNgnZkb8blOI7jODsyBYN/IN2W+u44juM4OxUYd0uXLtUpiO3bt0+FZqZPn+9lypQp6hVihp8ZfHxu2LBOWrZsLi1atMplPEZh6mS/fn3VmGTX1ijkS9qVK5epB82ee3ZLXckNcSl32rTp0rfvDzq9zuoDXA/XhVsefBaRAw44IKh7OQ1PEj/xXMJwHTBggMybN1/biUEdzdPJH/Tl9Okz5NRTT9UdXNOxadNmGT58mIwaNVr7mXRx2F2XNd0OOaSneoVm4s0331ShGLEiDvcdkaR16zay++6dsrzwkgii6tRbxilCFh61OwK0geUAGJetWu2mGw0RBtFxat/ZZOK1117RNQqjkJ5ngCn8xx57nPYF+aYb63gIMxV1woSJ+kzFn5+wbzfqFFg23rB80uWHmPftt9/qrshJIHwxNo455hgVCJOgDsuWLZchQ9hcZI2OnWh5iIZ4GV955ZXSs+chss8+++o7YP/9d5yDNf3wItx77330PVy1atW0fcY9o+9p57PPPqdem7SR+PQ/B+/AkSOHa97klYSNl/Lly6uH+PDhwzWPnO/srSoSsxlLmzZtdK3CJEjHwXuTnbB5litWDDfSsXZQZwRlPMm7du0aPEtFNdyux2EtR0RG1uCMeso6juM4zo4Cf5P5W8fsjtxuC47jOI6zE4FRhniXX6pXrykrV64KDPbcC+9jHDLFd9GiJWrMZoJ1x5o3by7FihVPu8Yi10aNGpk6S8bq0KRJOL04ybjkjzpiIZskmMdLXNSMpsODCeOb9R/J3w1WZ0fCvPsQw/FWA8Zo/Hk0mMaPF210d2Xi81wgHM2YMT14NsLlBRBo08G0YERBPBdJG4d68QwuWDA/+NykYZmencaNg39o7xLWIwpp+Mc4HsmLFy9UMTMTrNUY9byLQj54ZR533AlywgknyamnniannHLqDnecdtoZct5550vr1q3T3kew/uSeVq9eTUXf6D2lvaxpiTiOKGsQHiV6X9hcqmzZMiqOR8suUKBgcOwSjI1FMnv2TA0jn3j9onnh3bpu3Ua9p9FwQMR85ZXXZMKEcXoevx6lVKlSUrt2HRV9k/JyHMdxnB0JFw4dx3GcnRaMwOLFi6iXSH656KJ/Bobkcp0CGTf4EQ4wKpmCx1qH6SAO3mCdOu0htWrVVuMwDnUrWbK0jBkzWneFBdKlM1rxcMLjBcEiWi+ukwZxYfXq1fLTT0Nl7dp1qas5MTERDyiEBjZdYNqdG63OjgTjsWDBXWTVqlUyZQrTlddrWLpxiqfhXnvto+MfL75oPLwomS48ZswoPceTLf5cR6lShSUGiiUKSDz/TC2dM2eOejJDPE6Uxo0bq7cxIlcc8kcMXLVqdfD8L0mFJkMeeKhR76T3A3mxE/VfgaR+jWL3jqm8p59+porHpLH7H7aX6cqV5Y03Xte4YOkMiwt4EzZs2Dih78Ifllhn8osvemWtR5mpfl26dJWmTRvrZi/heAgFSz7ZSZ/6LlmyXMPSYfm3b99OateupT8sZSrTcRzHcf5sXDh0HMdxdkowGjHGihYtLtOnzwoMu7wNM+LXqlVTv5coUSKHMcd38kR8mzVrZpZwkAk2Z8ALBYM/Sexjl87ly1fIs88+reFmhEYx47dChfJSv34dWbt2vbBjbKRqmhebOsDo0aPVIyoJy4s2MGWwSZNmKmr4Av3OjgbjmWmkCxYskPXr12qYjd84eO6yNiHeY1u2ZD9DjGnEnV13LSADBvyoYeRBWDqYJl6qVPYyBVEsLZut5GfDlVKlSqvnnK3TGH++yWv9+g2yZEm4S3M6ELfSeRxmk/vdsSNCP6S7j1F4/+6xxx7qGY2wRl9Z++lHPEl517EhSV6UKlVGxUPee3FPccLwLv/xxwEybFj2rs/poNzzz78oKHey/jhkdaJN1LNp00bywAP3p1nbMicsJcB0a+5dXh7sjuM4jvNn4sKh4ziOs1PD2mFLlizJ1wYpUcMeYx/vpLixTxheeqtWpTcMzTDGCxDhEO+pJFGQMAzk9977SM8xQpPiGa1atdLdk6lDEDsMjICX5PTp04M4c1IhubH8Wc+rZcsWmpftxOz8/QiHw453701oQ6BnR95MMIarVauW8hLOFmBMpCpUqKjMmxc+E+Rpz2cSiEHhWoi5n0PEK4SmhQsXqKAJmfIqVKigLguAiES6ONSb5w6vw0zgNcnO6sRN/5zmLcbtCNg9yQui1K5dU5eOWLdubY528517VKZMKbnppps1LJ0Xqd3HHj16BN/DzVWi95Z7ysYz/IDDtGhIVz9LxzudOvCji91X0pA3m2vh4T53bvZO/vGxFM2/RYuWUrJkKU2b/t46juM4zp+LC4eO4zjOTg0G5tq1q+XDD9/Vc4yzJFEAzKCrWrWKTJw4QdNGIR3iBKLBlCnj0xqrRpkyZXW6Ih5RSR4l1AWjMchZzxESMhnVTzzxlAop7IwcbwPnLMzPAv1DhgwKygt3ak1qK+WSx5577pm1oUSmcp2dl12Cfwn+8suOd+8RdGDFipWyYUPyGqEG6wiWKVNOvfJ4zqLeaYDwZkKf5ZsOhL4KFSoGz0MqIAE8y9ioJBPUg3dFmza7yaxZc3R91NzgeRyuUZgJ1sMrXbqs5pnu3bUz0qBBI+nUqVPwng3f2faO4h7ijbrHHl3kgw/e17Dwx5RkeE/Xr99AChYspGJffAwg/hUpUkj69PlBZs6clee7sHXr3eT444/WXZ9N/AXqyFhjY6wXXnhBwyA6FuO0adNWateuG9TRPQ4dx3GcHRcXDh3HcZydnvLlKwQG5of6HSMynWFoBuUll1wms2fPzmFgWhrERISMuXPZ1CCzcIgRWadOLfVoSTIeyXPXXXcJ8txV3nrr7VRo3qxfvzEwdnPWjfwxYtk44NNPP1GxAuLl0iZrS7t27YOjo6xdu/ZvJUg4ITa8YzrKDoGN6WXLlua5LABxy5QprcJ5XMwnD55Dlhf4+edwjGca64h0LCHAtOf4s2PPGDshp9vwyAjfHQWkevU6es7yAslslY0bQ5E/Hbxz7EcMe3b/DuCx3aFDBxVgEWqj94N7aN5+vKvTwX2w9/jRRx8ejKUlufqQ8113LSSLFs3XzWrSYfmwvuIBBxwU1GGzCpHR/Bh/iM9ff/1VKiSzcMg6s82bN9P3eX6W03Acx3GcP4Md8J+KjuM4jvP7gSGHcLd6deghFPUQiWOiw7777qPCAVN4zVgEEw5IzqYmK1asygpPR61adaVatXCdw7hhaAYru33a5g3R8pLYfff2Mnbs6CBeoRwCCHlRBh6Effr0l5kzZ2g43ljpYFrmbru1Cr5tVSGEdriA+PeBe82Y2bKF9TtTgTsIjGcOPMuSNheKg+BXogSevbnFfJ4pRMOtWzML/YBAx/IBUTEoCuGsiZffx6RSpQr6GX/2edYogp19163L7L3IM4xIRppM75qdDfqaXZgrVaoiS5Ysk0KFst/d3CbRat0AAP/0SURBVFM2lWrWrImce+5ZGgbx95eNcbj88n/pGpZsokPe0b6kf9mVe8SI4XmON8pmfdi6devpNGp7Z5Mn5eFpPn78BOnfv5+G53XfunTpEvyfMepeh47jOM6OiQuHjuM4zt+A0LPPdi9OJ86ZcbfbbrtJxYqVdW2yuICAYVilShX56qsvZcaMaVlh6WjQoIE0bdpcp69t3comJKkLKcgfw5aF/idNSr/Qv9XtxRdf0mmXmzeHxm20bL4jfLAe2ieffKxiCQJoJvbaq5t067aX5sdUyEwGrrNzYULHjnrPEXMQUzZtyls4xPksfK5zt4VwnjGmvNp5JvBwK1AguU/oM4TD2GshF/beYI1VSOpi4oTRMmdGefz4gYczU5uT2THv4W+FzUhat26l9wxPT+tXu6e8p0eMGCGzZ8/ScIiO57CPQ5GQ+9q9+0GyfPmyXGOAH4TwvB41KnuX+0w0bdpU2rZtJxs2bNK8OaxueLiy5uZpp52q5yb6pgPvxSCWiuSZ4jmO4zjOn0Xmfzk5juM4zl8cjDmmCWIY4k2SCTMm8TiqW7eurj1mRiGQF8YqxiweMIsXh7uhmsGYBEIeeSFasONrUlTqtmLFMpkyZWoqJDcmELZs2UoaNWoSGL/L1SCNQj3wHGzRorl8+unHMm1a+vyAdlWrVl0OPrinFCtWQj0fHWdHAjFl7dp1OQTyZHh2ebhyCy+h6MT6gHl7HAJegJn1m7zFHXsnpBOCuE6bwg078mpb2Abixn8IIH/yYomCvyLR92sSeJJ27txV151F2IuDwMv78/PPP0uF5MyPvqHv7H7su+/+wTsyfK+D9Z+9S6dPn5q1kU4mypYto+IhU4x5b1r+fDJm2chq+vSZGhYXKaNkv9eb6zs973HuOI7jONsfFw4dx3GcnR4MSwS/MWPGpEKSiRqcHTt2UI9DjL5oeLahuYuMHTtWw8xoTEft2nWkcuXKgUGZ23OKtGycwK6e/fv3V6M2L4444ghZsWJFLoOUvKgfwueaNRvkjTdeS11Jxtq1//77S7t27YLzUMhwnB0BG8+hp10qMA3Zz2juZxExpmBBBKTMz6mBGJW5vPyLO5ZP0ivC2le4cLr1D7MJ0yfXix8nFi6cr153U6ZMkalTp/7hBz9KhMe0HJ/s6j5tGsc0/T5jxozgc4Z+zpw5U9eanD9/XtYakfRBJrGMd1z79u30BxPe4dG4Jgiyccwnn3ySCsvdl8Qx9t//AH0fM105Xi7vzcmTp8iXX36laypmAk/SPfbYQ9czZA1OfpziXto9tc2wXn31Ff2M1iGKhd9xx21aPtOkLQ/HcRzH2VEo0K1bV//L5DiO4+zUYIThPbjffvvJvffer0JiEmb4weuvvyr/+te/1KsEg9VEOuJgqE+aNEkX7n/nnfeD86QdU7NhatzNN98sffr01t2M456C5Llq1SopW7as3H33PbLnnt1SV7KJ1m3QoMFyyCHdpVmz5noeNUqJR/5LliwJjNdNMmHClNSV3ETzHDJkiJx11pm6wUTRouxOm91mJzf0HVMSv/32e+nVq5d07949dSU3a9aslRdffDYYU29on5IuDlPZCxTYVZ588glp375jKjSZQw89RKZPnyYVK1bUekRBDMFz6fTTz5CLL75ExYh0kPbjjz+W++67TzZv3iClSpXOld+fBeOSZ4J1OK+77kZtc3Scxxk27Ce54YbrVJTCI5hnFngWENkR5EePHqfPbl7cc89d8tFHH+l9ij8DCDvkd+ONNwd9fHoqND1ffNFLevY8WHr0OEjFKsuP+4T34NSpk4J7/rQcddQxGp6O//znCXn88cd0x2fW+jPIZ+PGTdKgQX1t6+bNWzL20+8D7w3uEd+z+4exQx0YQqwnucsu2bvEh/HZqCRcW7VOnbpy0EEHS5s2bVL5pGfVqtVB+x+X9957Rz0r4ztUM519/vz58vzzL8j++x8Y9MnWoJzcmdJX9D99eeWVV8ree++lfxfCOm/VfCdMmCh77NFZnn76KalSpWoqZTILFy6USy65RPr27RP8nWgS1CMUIsmLdq9cuSKob3F9X0fD03HGGadJv379pHbt2io8/vH30XEcx3HSg0c9/8Y4/PAj3ePQcRzH+XuA0TZnzpzgSL8DZ9RQY8fhIkUK5TLg+E5Y9erV1eMQgzUdlAnlypWXtm3b6hpbGLkWbmDMImjMnTs3y4sxTrQObGhy6KFHqWcPeUY9Z4jHebly5WTevPny5JNPpq7kxvKkPh07dlQhcunSxVkGcDRfx9neMP4QyVizMzr+k2ETjGSxJXzeCkp0J/JMhBus5BZQyTv8EaFgnj8W5AV5UVWqlh8xM1yvlLblnIobCtG7ysSJE3Wtv4kTJ8j48eP/8GPs2HEyZsxY9eIeO9aOsbpWKxtHjR49JjhGyciRI3SJCOo2fPhP8tNPw6Rv377y4osvynXXXSODBw9MtSQ9TFdu2bKF/rCCEcO4iPZBwYKFgnFSWJ577nk9TzdWLA2COgJrXFTnerlyZWXBgvkyefLkVGh6mK68997dVKhm8y0rl0/qWLp0meDvw5ygX0ZreLTOSRx88MEqZDqO4zjOjoYLh47jOM7fAoy5RYsW6pS5/MB0Ng68Bc0jxcAoxGtm5cqV0qfP96nQZEx8w7OGhfxZay0OeePtggg4fvw4Wbp0SepKMmyUcNJJJ6owSLviXlFGy5YtAyP54tRZeqxt9913f5B3EV1TLi8j13H+SBh/PDuIakWL5vbQjLNq1Ur16ONZjYPQjyBUsGCyp3EcvArTDX/qhJjJs5of0mhYCnnxeoh70MWhLzZs2KCCZRI8/3gKI2CVKVNGypYt/QcfZVNHOf1kF2GO8HsZPfjhIqyLxbXrpCmnU3yHDx8m//3vC7Js2fJUS5KhD1u2bC1169bXe2nvVINzvGUnTZqonqXp+jz6nqxQobxO62Z80b+8RxGFqeOyZUt02YgNG8Lp1EnvQsKKFCkq++67n3qlM2bi9QrL20XeeuvdMCAgKS/juONO0H4L25Bh4DiO4zjOdsaFQ8dxHGenByOM6cl4hcyalb37ZiYwxE899QyZNm2GioRxoxB23bVQRo+ZqPHXoEEjqVatSpAPu7vm3qSB+iFGTJo0WSZMSL+7slG/fh1p06aVriWGWEL9okZpaASX0++9e2cWN4H0THc888xzVLzEGyeTkes4fzRMNy1ZsrR6bmWCcYrYjbhmIj/PHp+IN6ynx+Ya+QGPNvKxPKIQFvynglGxYqFwSFgmkoRMg7R4QeJRmYmwjOyNlXKLSuFaf9nhfP6RR/D/VHn5ObgH8TDed/XrN5A333w7x27y8fcsbSesfv160qpVm5Som/Pe8JUyEGC//PLLVGhuomnuv/8BGTt2fK77E44fCd6BE2TJkqUalvTut7wqVaqi73bO8Xg1qCMHgmbfvr01jDjhvUyGsps0aay7OtOeTHEdx3EcZ3viwqHjOI7ztwBDlc1OmEpnC/OnM8zMUKxXr56u7RFOT8z5J5O0FStW0DXMNmzIvemJYQYm09rat28vLKqfrlzqyI6eP/7YX+uaCYzuyy+/Ur+vW7c2V/0wQtmFtEOHdnLOOWerwZ0O6mj1JM/u3Q/WKYh4NiaJnI7zR8O44zGpUKGCrguaCeLOmzdXxzvikT1fJtRs2rRZvX3zA3mEu/fmfkZ5LyD8V6hQTtcazAQ764ItZWDPl8E5+eHxhjiaCTzfeGeZALczwD3Du471P4cMGZoKDcPjWJtr1aqu95N3WbQf+M7mJIi+3377Tdb7nf5N964944zTg/xqqEhn4iFx6WN+NBo1aqROtSYsLi5GYSzwjsW7MpziHkI+1Ie/Efy4c/vtt+fr3r3++lsyefI0zc/fvY7jOM6OgguHjuM4zt8CjD+MuSFDBsuIET+lQpMxA69q1WrSpEkjmTdvXi7jEaO0VKkyOvV5ypSJGpZkpEaNxWOPPT4wJjepgZkUF+GQtbdGjRolixYtToUmw7TLjh07BfVrqp6U8fpRLnXECGYKJ5u9pIO4YT3DzQPYMGP+/IVquJIv+TjO9oQxx9irVq1a8JyVTIUmgzDI+qXsWs4zFIUxzDPXpk1rPWeqaybY3XzFCqbOphd52JQGQROiz3eUcAqsaL3A1g2NQhsLFSqoAlomWPcOgY3+SFce/JWeU9qxfv0Gadiwnnz66f+yxL54+zi3sN133yN45+2u9zsuqhGHd+rMmewsHa5PGM8rCt7iPXp0l4ULF2Wl5ZM+5AeTJUsW61qOUTEwCaaPN2vWIhin1bVO9l4nL8Yi5+XLl4vs+hx6Elq8KKS3dRdXrlylY8jfvY7jOM6OgAuHjuM4zt8CDDUMwrlz58mkSeFOw+kMSwuvU6eOHHjgAbo7JqKaGXFmaLJ5SvHiReXxx5/Q8KjhGIV0hFepUkWKFi0RGMmhh2A8rhmbEyZM0k0E4sZxHOq3117dVAzBwyneHs4JZyOXV155JYgX1j+9McrGL5v12003XS8//PCDfrd83Yh1tgc8F4x9xB0EmeLF0+8MDQjnU6cyZb+AimvR58q+N2vWTD/zAgFr0yZ2uM79HJMVAmCxYiWkRInMYib88gu7/c6VMmVKBelyCpbUa/PmX4I2FsxzqjJezxs3rtc6xd8ZwHPJwbsj/g7IC/L7Mw7gXVOpUmVdmmH69LyXkKhTp7Zu4sQak/aeioLQhuA3ceIkPacvkvrDyu/Z89CgXzfoWLN3NOC1yjhiF/xFixZpWBL2PuQ9zDIPeEJG/wZQNt/xMsdTFa9YiJYVxep63XXXSb9+fbU923o/HcdxHOePwIVDx3Ec528BBhgGIeumsbPy1q2ZRTkMQAz+Ll321DXN1q1jc4LsP5vkh6G49977yPPPv6BhGINJBiGYkXneeWerNwnx4sIgeeLJNHXqVHnhhRdk4cKFqSvJlChRXI477nipUaOmejaZh0sU6owXC3mefPLxWWFWn5xgaIdtvPPOe+Sf//ynTtnDgIV0bXOc3xPGJmI4G2i0atVS1/40cSeKjUfWyPvoo/elSpVwKmsUvBDLlSujGwVB3CMxDpshsV5igQK5p6ci/rAmYb16ddTrMC8QIUePHitVq1bV9hi0g2dw06b1wfPOjwmZhUPasH79xiDNrjneQQbvDZ7RFStWqAfdggUL9Jg/P3/HwoXzZdGiMM32PNisatWqVTJ79lx54IG7tS153Z/dd+8klStXUc/s6L1G6KMPVq9eJT/80Ec3roKk9xxTiIEfhViOgunK0Xfnzz9vlgYNGsonn3ym671mgnHJVPpWrVoF92mL3uf434lQABR5443XNYy6Jt1HC7v77rv078Dy5cuDuIiPGuw4juM4fxq5/2o5juM4zk4KhhkiGmtOzZgxOxWaDEYkIlrdunV0uiQbJmAERsEoje6IGgqTyQahpT3rrH9InTp1dRfYuJFMfhiilStX1nUL2TU5L6pUqSr77LOP5s/abPE6kh9iafXqNWT06DFZm8MQL8mopq62Ptujj/5HDjnkEBkwYIC2jT5JSuM4vzeIO7Vq1VRhBxiv8WfLxiJTV9ev36xTfhFubGwj2CCMNWnSLM91Eg08zNatw7svt7ca459ntnTpconPeRzqtWrVcvUoJG00DUsN4NlInRGSMsHzGL5/wn4A+9GBfBEWWbu1cOFCuo5qz56HyKGHHhp89szz4Pk+9NAj5JhjjpcTTjhBjjvuODn++O1zHHvscXLUUUfJP/95oW5+kh/YwZhxAdYHBv1Lv/br94P0799Pw5LeWfbOLlGilJx22im6SYpNEQai4wmKaDdsWPb6i/F8ovezUaPGwTu2qr6DKTOKxZs4caKsWLFMv8frHoXpz507d5bFixcH95ux4cqh4ziO8+dSoFu3rv7XyHEcx/lbgEHHemF4Ml133fWyzz77pq7khrgY6Xgn3nbbbWqIIuhFjUITJ9hI5Mgjj5DnnnsxKzwuLETDHnro3/LYY49IvXr1cxmZdo7RePjhh8r119+cdg00y3PatKly6623BkbuMF1PK1p2KByGHoZsstCuXTt59NEn1FBOqidY22HmzNly8MEHBWG/qBdMkqDyd4Q+KlKkiHz77ffSq1cv6d69e+pKblif7sUXn5XXX39D+5t0cZgyWaDArvLkk09I+/YdU6HJHHroITJ9+jT1eouPH+4pXnOnn36GXHzxpTkEkTikZT3L++67TzZv3qA7wMbz295QPqLhkiVL5LLLLpdLLrlUw5LGHG0NUsi1114rzzzzjOy+e0f1ArbxXqpUqeDefKXXzj///DBRHhD3xRefT7xPiHdMn77iiitVYEtXLwNvtZ49e+haqdEfGKgbXpSIUieeeKI8/vh/guuhV28SQ4cOlbvuuj14F83V5RYok+eaT4RS1jDt3r2HnHMOP0rUlpIlS2m6vOoH+YmzvQiqEtQldRKDegJ1ffLJJ+Xll/+rgiv9Gq0/95+xc/nlV+jYoa+tjUnvuoEDB0rXrp2Do0twFuZDGuKuWbNaPc2/+eZbqVmzpvZ1Jo/IBx+8X9544w29t/xdMCifscN7/JZbbpU99+yWdf+S6gSsSXvVVf+Spk2b5fJidBzHcZztAf8eY7mUww8/0j0OHcdxnL8PGGoYfohybECCiAhmlEYxY5RpcYhteO3ZFDcDYw6jrmHDhvLll1/rdyC/UNTIJmr4nXXW2cH1rUH83F4nZkxSz379BsjEiRNSV3LX087ZYfmww45QwxQDNRoP49ryxJNl6NBh8vbbb+u1dMaotZ2pmXXq1JKnnnpaypevoFMhs9Pk7jPnt4BXKiJH6vQ3wfTGNArMDgzPDIIKXlu1atWSTp06abiNxziMRTYneu+9d6R582YqGllcPnkWoFmz5vqZF7wPmNIfCoQ5BSKeKcTzkiWLSdWqVbLCMjF58nTNKyoiAekQJVesWC377rtfRtEQWNqAjURoU7R9HEuXLpYePXrIww8/Ii1atMgSDcHiZiI/cbYXmapCn9k79YgjjtB7waY3cRB2S5YsIePGjdYffRgjpE3XTsbZ4YcfLrNmzdZ3JXEtDUI6/du3b/Zar/H3epQOHTpKpUoVdAyT3iAdefN3Z/DgwRrGebr3L3Tv3lMqVqykU7mtPo7jOI7zZ+HCoeM4jvO3AoONqX/Tp09XTx3IZJRh9CNKsLMrBrwZl1HwekEE/L//+0zPzUhNypew8uXLq2Awf/48TRs3RomDt9T8+fPVi5D6EhbPD4PS0u6zz966jhviXpJxS51oC0bta6+9It99903qSnqsOKZCX3HFFUF5BXVtsiC34NqOIzjs+HDvUl/TEkZg7TaI3+v4eSaIy/22cfhXgXojvvPZo8fBKsQkEe2L3r1766/heHkBbeY6zynPT8eObaVy5Up6LS9mzpyp3rvkERd1eKYQ+4sXLynlypXXsLz6d/JkWx8vZ7yw/mEbypULd2dOB+WuXLlc25hUHusoHn30MamzMO+4cLUzYPeVA++/IkVKBH2yOQjPeZ+4b7xTZ86co+94YCyku1dsWLXXXntpn/HDkJUD5MXGPL16faHn5JP0brX4/IBToUIlzSsOQjRje/DgQTJ1arg5V7p7RHiFCuXVI37y5Ek6ttPFdRzHcZztgQuHjuM4zt8KDDiMw3Hjxsm0aaEBlxd4LNWpU1+FRgw4OwyMSTZSeeONN/XcPESSjD0zPF977fXAsJ0ZGKbFE+Ni/CIeMq15ypRQzIgbvxZGnkyjPuaYY9TrEI+tJDB8mbo6b948ef/9D3RzAkiqJ1g7gGkKl1xyidZpxYrlQbka7GQgu19DbynO4/cwCtGXLVua+p49Juy7nUP0exTCEVOY0sr9trC/Cog3zZq1kJNPPkXHX5JQEw179dVXdP3C6PPBJ/kgqh177PFZ6yTmxahRo2X8+AnBOyK30BT2YQGdHp5fj0OmIrOjLt7K0bi8g9gJGthsJRO0g807wqns2XWib2hfxYpVpGvXPVOhYdu5Fq//Xx3aY+MZWCMRD1HE3Cg0G69D3m14V69ZsyZtXzCOuBcdOnTQnZGJS98Z9l796qsvZfHiJRoWrYPBveUgD/IiTlw8JAwBkDE2aNAgDbN0cUhLPVirkk1xEBx3tvvpOI7j/LVw4dBxHMf524FYxxpx3333nYpsUWMxiTJlysoee3QSdjHGWI0bcRiYZcqUkREjRgTHTxpGnCRjj7LMqCxfvqxMmDBBDcq4QMI53jCIiwMHDtCwpPyi5ey33wFy0kknCVP4mLaZBIYydWXdtC+//FLDSJ9kwEbzZuOFM888S6655lopW7as7t6alObvSF79ULAgm+aEnqrWn3FCQWKrLF0aCoeQLl8TopKuM77YMTwUmsJxnS6fdHlsb6gD/YK3JetBXnbZZTqF1MLj2LPCc4EHF1M6o3H5ZHMhxnmrVq11WnB+2om37pYtm/UZCXIJA1OQZ4ECW1VIojwLy8S4ceOlVKkSQdmpgADqwb1etmy5NGnSSNdbzcTmzRt1d128jqPl8Z13V+3aNVIh2eRVr78q4T0I23beeefpjzUbNuT+kYT7R39NmTJZd1lOh42JunXr6XITvDMtjHIYZ/xQsnTpMnnrrXBH5KS+tbiw7777ah6Moyhc58egn3/eoh6HLANh6eJj08RJPN07d+4ks2fP1jbF4zmO4zjO9sKFQ8dxHOdvBcYXwiHeJQMHDpKVK1emruSGuBh2CHt77rmXNGjQIHFdRAxAjMIgVB566OEwMCDJyAQTDt999z2d+ovnUJJ4SbymTRvLM888pWu5GWakGlYOnlKnnnq6tGvXQfOkPnGoNyIga68xZfnLL7/Iyi+ebxzaePzxJ8g111ynG6Uw1dr6gc9on/ydQKBKwu7LkiWLZfz48cH93Jx4n4FwhLPhw4fpveHc4pIP3y0/do5Ngv4nDh5XiOLkBZnKLFuWXX0RG1OBfxKMvblz58pxx50QPGuhBx1tsTZHsfYgZLNDeaFCu+YYu6ShD5s3by6NGzfSsLgHWBzeA3ggFy68a5B/KOJGCft2F6lVq04qJPv+GsSxesydO1/XSyxVqkwQnrNuxFu7drW0atUqS4RMBx5neByaFxpQBusizp49U3bfvbOG/Z2g//CoZYoxoir9Er3/nNPPkyZN0CMd5AOIt61bt9E08R9c6HeWgLjllltSISGW1qB8wtjYaMWKVUE+uddfRBCk3mPHjlWPdxs/8bwsnE11Dj30MK2TTaN2HMdxnD+DgnXq1L4t9d1xHMdx/hZggGGssS5h27ZtpW7duqkryRAfg2/mzBm65hRCC0agGXJ8YjjiFTJ//gI58cSTNH46iI9xW79+fRk0aKBMmzZNpxgnGaOIUhMmTAzihx6FEBUR4jAVeY899pAXX3xB4xUrVjwIzc6XMqw9kyZNVs/LLl266rqL0euZaNy4sYoy06ZNVwMYD0T6Iz9pdyZo68qVK7Q/Jk2apOtRDh/+k4wYMVK/DxkyWAYM6CevvfaGDB06RPs8FJhzQ17034wZM3W6LNMTFyxYGIy3icH9Hx/kO1zX8+vX7wf58cf+mpd5JsVhLUtE3SFDhqkX3Zgxo2XUqBHB51gZO3a0jBw5Uus5duy44HOoClx4MaYTJP9I8MAqX75iUNeBusnH448/nnZsG1yn/vfcc696Ase9hkOP201y7LHH6lqi1q5MY5Od0f/3vw/V4xEPxWhc7gsebDyPF1xwgVSvXj11JTc8c9yX//3vI3nnnfekadMmuUQf8kPwYifuAw44IO2YAKbIssbenDlz9AcM8qEMvKDHjBkvH3zwYTAWwvUd/y7Ye4Y+ePvtt7KE+2gf06e8nwoUKKib7PC8cP+icfhOXoiw9OGAAQPUk7ps2TJZcXkOa9asETzTo+W6667TdzxYHQziA+MQAXzIkCHBO72shgFxOYjHeGX6PFPy7RmO5mWEnpOb9W8E4qF5zibFdRzHcZzfG/5m8W+OJk2aSoFu3brmtFIcx3Ec528AfwgRVS688AI577wLVWzJBH883333XXnssUdUCECgw4gz+E44huYVV1wpp5xyaupKZt57710544zTdJ2ydJ6H7KyJZ+KCBYv0nDLMgI1CHagnxuh//vNEYOheK23atNE8zeDk077TB4sWLdB14G6++VZtk+VtcTLBOmIXXfRP+eCDD6Rt2zZqcJMe8pP+rw5tpL30I/cuOCVU2819CPsaAWIXnfJYtCiGvyZNhPgIVKtWrVahgzHJlEfy4kA8CEWj0rppA2HxPrYwgpkOS56IgojkeJpa3chnl112De516AXFmNle94s6AeUx5nr37ivdunUOnq8PVISmfvHngDTR+nXo0DZ43rZkxbd20WeIr4i5jzzyiK5PSlvTiaxAunfeeVueeOJxvZ8IdFEoGyGSaz/9NDwVmgzvAESrSpXKBnWrKLVq1dR7as+gxVmyZInccMONcuaZZwbh2dNT47D7+y233KzTbvlxgXaSvk6d2kGd38/Kc2ckfs+N6P2sWbOa1K5dJ8f4JR3jAAF+jz06y7PPPqtehUn5WRgb6Zx33rm663GLFs21jwnnOveTtQm5fs8992m66BglDgcQxnIDnTrtLhUrVsj1d4UxhNf6EUccKZdddoWUL18udSUZpjVfd931MmbMKKlataqmT+oTx3Ecx/m94W8h//5hnfPMP+k6juM4zk4K4hgGaO/efdTjD8z4SwKDsHXr1roWFun4Y4rxaGDMWZ69en0lCxcuTl3JTM+ePdUzCg81PEqieQJ1QhzBeG3evHFWWDrMmL344kvk1ltvU28zjFdLQz3N8MTThqmSb731plx77dUqWJkgSfvSQV4clStXkaeeeko++ujjIP4m9cbEsDUy1XNnwfqL6e8lS5YIjpIqhiEUcjAVGMEn9BbSqGnhviAuIibg1UqfMp4IR/QjP9bYw4uUcWL3MYqFIVYybsL6lNTP0OOxcFBGseC8lHpZcWxv0ZCDMhkrTOEuUaJIMIY+yRIBk8aNpQMEvlmzZqsYFBV4+GSKchBb2rVrp+skgj0T6WAq+dChg3XzI7ufUUjPWnmVKlVMhaTH0i9ZsjJ4XpuoaBjtW/LatGmj7ppbt26d4LxgxvrhObp48SKNY/Hou5Urwx3hIfrMpSO7T/n8PY4/HsZ+0ligHyz86quvVbGPcRx9d9InVapUkjlzZsqAAf3zfF54Rg866KDgHleQNWtWZ4VTDoJ9o0YN5e233wzGF0tAZKcDvtsBLONw4IEH6UZH8fozPqjb6NGjZO7cOanQdGyVGjVqyl57ddM2x8eS4ziO42wv3OPQcRzH+dvClDGMsfvue0AOOeQQNS4zGfHw2GOPyaOPPioVK5ZXMSgaHyMRbxKEnRtvvEkOPvjg1JXMfP7551r+3nt3y2H8GhjQTCX+7LPPEw3pTFx++cVBnZ8MDNn9gvauU9HBMGOazwEDBqoIeOGFF+o1+gUjN11/WD3MkGXNyIMPPlDXdkPkxHhOEmF2NqwPo2JGnHhf5QeLa2NyW+87WFqDPKN1+TV5/lYokzHIeJk9e5YcdFB3efDBf+t6btG2xvvKrvXt20/+8Y+zpFSpUBC1/ucZ4TpelrVr15Y777xLd7hNysuwa0wpv/XWW7U+CEhxKIOpwnfccYecfvqZqdD0LFq0WKpUqSxHHHGofo8/B0uXLpH69RvKvffeKy1btkqF5mb9+g3y3HNPyzPPPKNidNTLGfGJ9xcC1aRJ46Vw4eJBWxDa9HLwnfZli1kmQFv63wp5Zfdr7jy59MsvBYN7jccr7aduPCehSB32vYm6pA+Xf8Dbr2PHTrrcAkI37SQ8u6zccO2oo45Qr+xoX9PUxYsX6tIRV111tYrlmRg1aqTcdNMNMn36jKxxYP1FPflh5L//fU169DhIw5Kwcco7/eyzz5ImTRrI5s1bg3rZlGT+7qxXAfKf/7xYzjnnnODeFdFrcSyvH37oLddee60K2+zqbffScRzHcf5Ioh6Hvsah4ziO87cE4wuBa968eVK9ejXp3LmLnufFwoULpE+f3vrd1hwzQoP4F/VOKlq0sHTt2jVfeeJJxjpztl5gHPINBZKt0rfvD7pBCZhokoQJKT169JTbb79dvbqKFSsRXAkNYQzi0GgP1wPDIP3004+lQoVKuu4jxrrlkVSO1Yl8+KQvTjnlNN2htE+f72XKlKkqdBDPjHnihoLBzmf0msAQxdrJ57a22foqzrb2XzRuNK1939b8fg2MD7Axxfp+48ePkzvuuC847tQxj1cXY40jWkfg3MKOP/54nRZeunTpHOF8IjLhcXjAAfvpphKMScq2cR6HNOy+/Oabb8i3336nz2FcpLI4iDsInOYVHI0T59Zbbwme58nqbRo+QznjIgCxGUfPnoeoJ2g62LAFLzf6qlKlyqnQbPByxdsOT2G8JlkPkSnQHPZ90aJF+olYuWTJUp1G+1sO8sCTbsmSRXoeLTN6hOELgs+luqQBAurChQuDY76+QxcsmK/rwTJFGMFv3ry5unswIu5HH32on8cdd7z2c15jlPcb04J5z2TfG95vBXU80P+7795Jf8zIBMONnbDxQOedGB2LjAvGXdGiheTAA7trWBJW13r16spTTz2ZEivDMKsX43LmzFkqDO+///467uKQD2OHconPRl6TJ09WT9W8xp/jOI7j/B7w94a/Raxx6MKh4ziO87cFowwDsVevXuodWK1a+k0PjKZNmwYG31rdYAJDlTyikB8CxvDhI3SqZIsWLVNXcmN/kBFBqlatIr17f6e/7mEoRo1lPvEAZFOGL77opVMcER6Ik86oJtwEk9tuu03uv/8BWbt2jRrPNr3TDurAVD+M3CeffCowaqfIkUcerenJB5LKACuDtjAlmk1TzjvvPDVwFyyYJ3PmzJMVK5Zr+uLFi2mfUR7n6QzgdG3aEaGe6Y7fQrp8tiXfTGnt+7bkFyd6nzKJGdxzBPWFC5fouqJ4BL7zzrty1FFHBtfC54c4cYGPPDks/I47btdNUZjKTfwolI2wwy7LrLvJ5hNWp0xtRMx67LH/qIBVrVrVXO3gHIHsoIMOkCOOOCrP54HL//znP4Jnv15wtiVXmxj7PH8HH9xTd4+OtyMKwiGbn8yfP1enZdtzA1bPEiXCKfKI9AiJSUd4Lf31bTkoj0+8qvPKs0gRpsSXzDo3r0lLh0ehTe236fSlS5dRcZZNm/BQxPMwXV9bHzRv3lIefvhhady4YfDuNc9K3k3cJ9G1YdnBmnd3EpYP9UHUxvOQexT90Yf7zr1ircOTTz5J65+E1RXREm9HPA9r1qyZde/CerEMAUtdbJUuXbro9TjEtbx4RviBi+nNpI3Wy3Ecx3H+KPj7yN8vhMOc/5pxHMdxnL8JGGD8MUSMW7FilYwcOTp1JW86dNhDp7Jt3rxRDUr+sBqc21pyU6dOT4UmQx1MONhtt9bSrdveKhZEjUaDczyVEObY+AQPnrgoEcUETdoIn3/+hXq2TJgwQesXxQxZDPb9999bXn75DXnttVf1WrQuJpoYpOMaZVk7KI+2X3jhP+WTTz6X2267Vb1qSDt06E8ybdpU9S6L5xU9j7ad8G0/UolzEQpR6Y+kvH6fg/yTwjly1+PXH9sLyorfpyjWNu71zJnhTtFM77/sssvls8/+T9q1a5+KmR7yt3H16aefBuk+FdaAjIv1gLC+fPkK2XffvaVt23YaxvjM9Iywo/PXX38pc+fOlJo1q+fqP84Rw5cvXxWM4XBH87z6uG/fPrJ27eYgHWJpdtn0Be1hKQOeszp16mjemWDHbryX8XaMl2t9YJ9cTzoyXfstR37ype+j5zYmeM7A7o2F20H/sGPywIH91TMxHcSFQw7prj+IrFixLCtP+jooMhgvxdUDcsSIEcEY2ajX4hDXpkSzmQ7ei1Zfuw6IhevXr5N77rlLz/Pi7rvvC+q0Okv0BfLiO8/CmjUrdVdzxm4StIX4tIHdwRs2rK/jx3Ecx3G2N+n/NeU4juM4fwPwUsIge+ml5wMDM3tDEzMak+jUqZO0arWbGsDEw8iMggGKZ863334t33zztYYlxYvCGoann366LoaPFxR5ROtgRmTZsqV1quCll16SFZ4pX8ujefMW8sgjD6sIwdRAiNaJfDBoN27cLPvtt7dcdtmlctFF5+vmFWY4R+uTCfLhIM+TTz5Vnn32eXnmmed03cfOnbuqkY4X17Jly9QDDWOYKYWIl6SjHCvL2s10w6SDa2wkQrzsIwy3IxsLszxzp8tENM9fc6Qjdz0yH2F+fMaPzPWHaH225YiDRxWYwMInAgjPE2LX0qXLZPHixXqtWbNmct1118mrr74ul19+uXrUZiI6fqBfv366Q/KGDawfWixXfRg3rPe32267yUEH9UyFpoe8Ydq06SpiMi6oE+HRvKk7wmfZsqXk4IMP0zCrU5To88c0W8TNMJ+czwvPNDukV65cVVq0aJHYr8Yvv/ysOyovXbpYp3LH6xaHa0lHpmu/5chPvvE4RuRrBgrI3LmzZejQYanz3FieJUqUCu77gerRSlj8fViuXFl5//13ZPLkKXoevw52X9n8qkWLVvo+srFt8J178fnnX6ZCkvOCaDqE8+gGVcC6j3hHDho0WL1d86JGjerBc9RCxxDjPZqX4ziO4/zR+FRlx3Ec528LRiYiFt6DTANr2LCR7pwMGGZRYzdKoUK76tS6L774XM8x5qKCAulIjzCGING2bXsVPDAyk4QHK4s10aZPn67TMYlvcblmBwY1U9UwRjFyqbMRXs9JtLx69epLgwZ1dL0svBdNhLF09p36sOZh794/yLBhQ3WtxvLlK+TIP13/UJ4dBvGYjsfUTKaE413ZuHGToO4NZO7cecIUZsRDvC0RnsJNazYGx2Y1kjMdxEHcYfHm8HODHhs2bNS8LAwhgDh8btoUhrNBwfr1fCJcsmHBuqAeXFuvn6QP88g+p57bdqzVdFaf6BHmG9Y3fi28HqahztEDgY76WttoD/lzWLui8cP2h/0TDd+WI8zD8g3rxX1iHNFOPLGYjkzd6tdvIE2bNpO99tpLrrjiSjnttNN1E4+kjUeSYGzxTMHEiRPl3/9+UNf5YwxauEHcTZs2qJfrpZdeqmXmB57F999/V9599131VmO82ngmTw48zBDvzj33PPWaBeLEx709C2vWrJVbbrk5eDcwJb9Qjnh8p0w2b2H67SGHHBo8f+kFVPr3q6++kiFDhkqpUuF6jn8XrK2s3VimTOngvbFXcN9zvzfpTwRVxgTTeT/44AN9b9n9sDgsmzBw4BDdwb5x43Bn+vi9sXO8Hdng6bvvvlMBODqVnHwZJ4iAeLXirQ7RvAyrQ+nSpeT111/VqfNR8Zd8EIeXLFkm7du313dzJgoXLqrrRo4cOTz4m7U51/hyHMdxnN8b+zvLVGXfVdlxHMf5W8MfRQzPuXPnqgjXq1foTYKgGDUakzjggANk3rw5aqxGwWjkWL16pVSrVlNuuulmFc2iBm0Ui48xOXDgj3LnnXfKjBnTs4SWqAgH1A3RqU6dBvLQQw+pUZou7yQwsClj7drVQf2qaVrD8gjDCsiiRfOlfv1GcsYZZ8ihhx6u66kB/UbcaPx05RPX+jka5+eff9ENYTCE582bL1OmTJRVq1bqxipML0RkwXON9qbLG7hGH5E/XoMFCxI3nAaOoIDo8MsvXA/XKcM7j2mkhQqFnnqWliLCPPD2xJMoLJNNaVhvjbQWL9pn6aFeEtyrTdp+y88g3112KSTr1q0JvtOXqQsBlIewsGUL/RyGheXiYceUy6gwG/bx5s140uWsF/GpA8XzibAXH0+ZCO8rfUmfhWu00aeMA3Y2LlOmjApbiIWVKlXUNeqaN28VfIZr1iHEAPUjL/ovTnTsRL9PmDBRHnzwfhkwoL8+C/HnMexTBKZV0qVLV3nggQd1vdD8MGnSBDnppBNVBMXbF6xcqyuC4qef/p9+z4SJV0899bTWt0aNakEf524nIit9/69//UuOP/7EXO2Jghcaazr27v29TnWNkld9/upwH7gHeCPXr18/6Ie7pE2bNqmr2fBeoD852IBlv/32UQGZ8cjza/kgAPNjyTnnnBWMkYf0h5dM9OnTR2688Xq9X4zvKDw/5H3MMcfLNddckwrNjY0JhMHmzRvp2pvUg/rYOCMOU7GvuebaoG7nZhwPMHDgQLnrrjt1vUM82i0fx3Ecx/kj4Ad621XZhUPHcRznb01UqMC75403Xpejjz42yzjPZJx98823cvHFF6lXSXz6ZZiv6CL/BxxwkDz44EO5BMYoVg+mr+Gh8vTTT6lhjDcewk0U4mJ0Ytjuu+++cuutt0mFCunzjkPad955R5566j/qFYlwgvGNUWuiktWHTwQ86nL00cfIuef+Q+rWrR/EC9fqMiEo+j0J8jHS9SlTv1l3Dq82/rFCmaGhnvmfKuQXZokQyDnlhVOZNTT45DwoQdvH9zBeeD38JIw2W/v1Qwnzy95sJjzXr/mAshGiUqcRwuJDgTCOlRnckqzyKJ5PEx9y5hmKz7nDs/Pi8+efwzjEz5vseGFfhuOB9NxrDrxv6Rc2wrD+ToJ0EJadExs7ljew+dA999wtgwYNlBo1amgZ8bSMj9Wr12i5n3/eS+NF80gHVbnjjlvl7rvvVg9FvPuiY9f6F9GanX/ZMCM/dO3aRdasWSWlSpXJ1Re0EY/aNm1aB8/rHdKoUSMtx8ZUnCFDhsj111+nOxDzfBI3CuIXbU2XPhv6PbxvUTjN1E1hP4bx/gx4DvHWxav1+utvlJNPPjl1JRtrk91vfgy5++7bZe+99wvuw+ocY4r3CTs3/9//fSEtW7bS+Ongebz77rvk/fffV7EvKjRyHxgvrDXLhlPVq9dIXcmJlQunnnqy9O/fXzcFYhxwz7hO/RABK1euKC+//FoO7/EkWPPy/vvvl88++0xF++iYdRzHcZzfGxcOHcdxHCcCRhzeHqy7N3nyVDUMCYsa9unEiNNOO1X69esrdevWVaPQsDwx/NlF9JFHHpNu3bqlrmZm+fJlcuutt+puz3gbJU3TgzVr1mhdr7rqKvVYyQ9m0NK2b7/9Rv7973/rdNCaNUPRJUmgIe7atet0SmiDBg3l+ONPkpNOOimrXqRDxMHANoEjb0HDcUIYO4w5E0K+//5beeKJx2XMmLEqmuG1yBiLQvz16zfIzJkz5LrrrpUrrrhK49gYjhN9lgcOHCDHHXe87qKMMMRzGx3zNoYHDPhRlyPo3v1gPc8Emw6demr4TBQujNifupACAZxn9YgjjpTLLrtCp89G65STrfLJJ5/IDTdcF7S9qLDrsL1bmCbLc8+0VaaPBz2ROtIR9gllRetEd8brGMW6O97v2wvuB23G6/DMM8+URx99XMWyTDC1u3v37rpGK56k9i6jDbyLx44dK3fccadccMGFqRTp+eST/8n9998b3Ldwl/vo+GBqftmyZeSWW27PODWe+jOm33jjteCeXyYtW7bUsU69qBN58s787rve0qdP7yCvvfV6such96GAPP/883LXXXfoLvyI9WG44ziO4/z+uHDoOI7jOBEw4jiY5vjFF1/qGoNt2rRVI87EjKjhGGXcuLHSpcse0r59BxUGiB+Py2Yn++23v4qBVatWS4XmFDPiMF3u2muv0TxZ5ysJ0uPFVKtWLbn66mvV+zAvrK1WLpsP3HrrTboJSuXKlVWkweCN1svSUB6GPGsjdunSRf8hceCBB2qcUJgI14zE8E3XX5mwcqx+lqcdSVh8IA7f7ZM8zHg3rG12PZoeou2OQl0g3fUkLI3VPakNSflG60QaS0dcwmlPvF15Ye0mj21JFyfeXxCtY15E20VdqFO0LQiGzz33rH5nF3AToy1/K59r/fv3lfPOu0jFb7B4SXXhH7/kxfN0wAH7yoIFC3VnY8Lj8TlnqjCbavz44+B83fN7771XPvjg/eD5KZyjf629eNHy3FxyyaVyzDHHap5ci5dNGGtRPvTQv9XrmB8kiEPbgHcJQlbDho3Vcy7MP+f9SCbeRspKnSQQq9afBu+TunXrqLcz76ekPjOmTZuiG0wtXLhIhTUgLml4J82ePVuaNGmiXofpsDHJUhHXXnu1TJo0WYXb6BgIDamNcuaZZ8mll16WCs2NjWvyOvjg7ioCM27B7qlNo77++uuD44YMzzU3q0Aw5gfITTddpz9ysSau4ziO4/xRuHDoOI7jODFCA1yEHYtZT61fvx/13AzJJOzaE088qsJdt2576tS6uMcIU+6Y9njPPffKSSdlT7lL710SGp1PPvmkvPLKSxoHT6O4wUz5xGO6catWrXRKHwvt54W1FciT6dT33XdfYFD/n9SrV4dQvUY8a3vUYMfjBgGjcOFCgaF+hhxzzHHqTQNm+FoZ8TrnBysrv3lE40XTRj+NTOEQDYuS1/Uk8pMmXZyk8GgY37e1Lr8mXRK/pR6MWSAN300kGT58uLz11hvy2muv6c61VapU0evR/PlOGEI6gt7hh/eUF154VQoVCvOI18XqaWVSVrdue8nkyROlUaOGGhavO2l43tgU5ZlnnlXPxLzAYxevR54jhKFonjwPgGDZtGlTufnmW3WX6UxMmjRJTj75eFm5crVuwEGdmMLPtOxq1WrI+eefJ3vvvfc2LU+wM8B9pG/j9wzoo61bf5annnpK17rEg5r7TVyu8R7jHrCm6pgx41SQTcLGCvHvvPMO+eijj3JtkgK8c9np+L77HtCNUpKgXKvrAw88ILfffptOZ+f9Sf52HQ9SNh766qtvgnrX0viZuP/++4Jn5U0VHdP9/XAcx3Gc30pUOMz7J1THcRzH+RuAAYeRX7lyFRUCBg0alLoSgpEXx8IuueRy/cPKWnZxQ444TFVmrcK77rpdJk2aqOH8Mc4ERu/pp58mderUVkOTusXrwDkGKJs4sIHEc889oyJlXtBWM2gxlNnR88EH/y3du/eQ/v1/VEM23CAkuc14PLEhC4YrQs/ll18qPXp052qWEBQtgzRJeRnxa5YumkcmovHSfRqZwuNhUfK6nkR+0qSLkxQeDUtKk4lfmy6J/NQjek+T7j3pbKz06fO9HHJIT/n4449UKOMwwc3ytzwYezNnzlLP11deeSNLNIR4XUhDPlZWnz4/6LICrVvvlnU9Cs8CXonz58/TXcD33/+A1JXckNbSjx49UtNYe6JQNmvmIVrhlZyXaAisezds2Ej1JObHBfJYs2adPm8sS4D3HaIh1/IiWs84JpKlI6/r2xPaQD9wJMH1XXbZVTfpKVu2tL4zg97Xa6ThOp6DTCV/4IH7NNzGWJRo/u3atdP4Fs/6kThFixaTGTNmBX8rJmlYEtG8dtutVVCn9Rpm4XzSx2wixNTzwYMHaziku2fQpEljfQ7YVCpTPMdxHMf5vXDh0HEcx3FSYPgj/lWqVEVuvvl6DTPPkCQDjWvGJ598Kv369c8yCqNGJsZhjRo1Zdy4SfKf/zyu4QgU6SAtxipT0Z555oWgHBE2XTAxz/KmfA7yqlmztnz99ddy66036/RlSKpzFDNiicc0baZ8suPyunUbZO7c2UF/hBtfUH/LK5qmYsVKOn2QHZCZjodH1V577SkfffSxxjUsjUFay4/PHUmgcH4f7J7a/bX7bWMWPv30U/XS/cc//qFrGVaqVFk99lgPMGm84HU7c+bM4NpWXRMOEM/i4yc6pqw81r87/vhjZffd2+s0U4iWAWzIQdDEiVPUg9h2W04H6adMmSLvvPOublTEVOR4nsB6e0xTbdo0FA2tL5Jgp/HPPvtEihcvqj9CkB9t2bx5g/TsebB07ryHxiMP68dfS1Jdo+R1fXtCXTLVx/qiefMWuswE9zhpgxo8sp9+OpwKn5RftJxDDjk0SBO+i8HGFJ/sLM7GQGxis3TpEg3PRLNmzVWInjZtmv6dsbwoi3PG/Suv/FfDwK5HsXHTocPu0qBBIx37+RGPHcdxHOe38tv+xeE4juM4OxEYcezsy8YFY8eOk0ceeUjDMRwx5OIGf9TwPOywQ6Vr1z1lxowZasRG4xIPQ7ZTp47yzjvv6aYnmbB8KbNy5Upy1lnn6M6uiAcWDsTjoKxixYpKmTJl5OOPP5Fnn30muJpz2mY6LA4GKFO0jzrqaBk+fIROi5w9e5asXLkqS8AwrFzScA3REZGlZMkSMnfuXLnkkgtVpGFn0h9/DD0Yo0Tziveps3PAfbV7izBi93zVqlXyxRdfyFVXXaE7kuOpx7grX76cPjeM7ej4AM4Rx8eNG69j7LXX3tSNJCBJPCO+lc91pqfedtvNuqEF3r88z8TJXY6oAH7QQQfqmqSZsLSDBg3WHaBZGzSeH1AW3sX77bef7LnnnqnQ9OAxzPqm9evX03cGzxc/BJQqVVqnWZcsmb1GXlLb4yS100gXbuR1fUeEHzKaN28Z3PtfcolqnPOOBITedP1Hu+0d27hxA11PMDqegbTc8zlz5uiyDZkgHV60PXv20CnJjAcr28qi3n37/hC859P/6GN1wBu2adMmQdrcG1k5juM4zh+BC4eO4ziOEwNjrHz5ivLWW+/quQkfScYcmJF5zTXX6u7DTEuMGp98R0DAIwmRDRED49GmNVu8KKThgMsvv1JOOulUGT16nOYRmJAaTn0sLfkz5a1ChXJy443XybPPPqfhRrq6A9cwZMmLg2nVU6ZMl/33309mzpwtS5Ys0vwBYdWyivYJ6ZkKWKNGDalVq7aMGTNGXnzxBbnwwvPl2GOPURFx2LBhOg3c+sfS0b/bg6R+dkJ+774xsZkDD8IJEybKO++8peOBqe0ff/w/qVq1qq4Tx7RLE/OM6Njm+4IF89Wz9dlnX9A15UwUYvxYOuLZeAQbVxdccJ6KO9WqVdPnLlqOQRjTW7nEup22uUYmWOdu2LAhutZnkrchdaHteJOx+66JVknlGwMHDlbxvVy58pqe9i1fvkLq12+kgpiTGaZzt2vXXsqWLZ9aciHb1OE7P4TUr18nGIcXpEIzc9NNt+k7j2nBBvePsUV+CxfO1zUpESrTwX1E+GaaesWKFVPjLHsMMM55dzId/eWXn9ew+FiGaBo8JymftPF4juM4jvN748Kh4ziO48TAEMOzadOm9fLQQw/lMBSTMBGje/fucvnll8vgwUPVGyUKaYnHmoWsi4Uni5Fk+BGfck2wY8H/k08+WXr3/j4wMkOvo6jYY3Xbddci0qlTJ7ngggvkhRde0DCIe99EIa0dlImnU6lSJYP0L0m/fn2COmyVRYsWyapVq4N2sWssdQ7LNmOWtFYfjGTWXUSo4TteZY8++oh06NBBpzOfffbZuqHMSy/9V6ZMmazHokUL1RvHppH+EVgfObn5PfuGDYbYlfinn4aqeHzuuWdLu3a7yamnnqK7eDM28MDiGWHoM/6j4jHnjCXqxPd58xbopiBjx47VsR0d98AYJMwOy4+djE888VhZuHCxprc841ga1k088MAecvDBPTL2B3Ghd+/vdG1R2mE/AkQhX2BNRdt9PAmLBy+88FyQV/Z0bkQmhHzyMG9DJzNt27aR2rVrq9BMP1r/8h0hlx82vv76q2CcLtLwdHCfW7ZsoaIvm1sxVd7ysr8JoXg8TD3CIXovDbuXu+22W1C39npPbQwBeVGvLl32lCuvvDorLBoHCOOAnj0PkTVr1gbvy0167jiO4zh/JL6rsuM4juMkgAGIZ1yDBvXlgQcelrp162hYkqCAgWcGHWtY9eiBSFBAve8Q7OwaEBfPo//7vy90o5RGjRqnzRfMELXr5FW3bi3d0ARhBOPV8icu+WPgMiV0wYJ5ctBBPeSll17R6/nF8jExZ/36NfLCCy/Ks88+JXPmzJOGDRupd6PVLdp+gzAO4BoCIgd9Om3aVPXM3LhxgzRu3CQoJxQaq1evomVWrVpNp2aymylrw7FWGW0qVAjRclcVL1kDbssWykdkYqp2CY3DOfEpk40N2DChYMFQWNp11/A68aga4awbSRzWzeM70/9EEGuT78f2hp1iaZ+JHmH9CN+igm6BAqyXxjp/9HXoDUqarVtpM+d8Z/wgToRTJLlVpEX8JZx19ew7aRCriceRPa2SOLbe5y8q8Nr9ZxwuWrQgGHNrZMWKpTJ8+KjgPm+UhQvn6HhhKjIbfZQuXTKIu1HLi4+XKDb+8BhjTUN2EH788SekTp26eo362KdB/Gi98VC8447bddovz1v0OYkSjotdVehkuv3jjz8pHTt2SF3NjZXLunb33Xev7kSOF3E49rKhj+jLtWvXqMfwmWeelbqSG+pN/bhPFSuW042HzIMRYap69Wpy5513S6dO4fqGfwW4H5nu8R8JU7u5N++886ZUrsyPF7tqfWy88MmPN/yYccIJJ2lYnOj4eumll+T666+SJk2a6/vc3ovcN8pq2bJVcH/uCt7ljXKNS4PyeU4ef/wx+e9/X5JKlSrkiEe+iOkffPCRxs2ElXH22WfJN998LfXr19cwx3Ecx/k94d+AtquyC4eO4ziOk4ZNmzYGxt4mOf300+XKK/+lYekMwygfffSB3HLLzcIUxpIlS2saM6LtOyIOawj26vWVeqJgLEaNWyNe3siRw+XMM8+UtWvXqkefGYxRI518OOcPPlMf77vvPrn22muzriWVE4XrEDf8f/jhB3n77TdlyJChsmbNap0WyBQ7Ky8pnYVZHA4EROrNpZUrV+h3RDGM5zAeKcI8iE9drb6IMbvuWigw3hEMuU57Cqj4Y5vHmHAYpsXID4UohMOff96iwiNlW95g8SlXP3YAqAcCH/WnTQilVJf2mjBFnW0MWN+RJhQEw524w7YxnlmTMhQ9LA35hSJiGC/IJTgPy6OPiGc7yyJShvyicbhm5XP/yJL8qFexYkWCo6gKuoi9TPXMLjPs8zgm/DEOVq1aqTvX9ujRQ/7xj/NUTKOOYX2sHtlYXTjwNLvrrjvkf//7WNh9mHGaDvLkOVm8eLGcddbZ8q9/Xa31zgT1fPfdd+Shh/6tdUU4jEM9EP0Qu3/6aXgqNBnqTruvuupf8vTTT8ruu3fSfCkH8bRHj4OD5/c6Fdf/7uQ1hmwc9+/fX26//VZZsGCBCseEGeTBGGndup28887bWWHp8mS91/btW0n58lWC+5lTgOb+cIo4fOKJJ+m7LQmrF+sYXnPNVeq9XalSpdRzFT5DiM9Me95vv33l1VffSKXMjdV17tz5+iMVIjM/smRqg+M4juNsKy4cOo7jOE4+wNhj+iLGIFOFDzjgQDXOMPSixqNhhhtT0e6//1556603dedhE8pIY+IHYXPnzpHKlavKm2++IXXqhMJIUr6G5T906BBdt23JkqXqbcIf9qR05Mc0SryurrjiiuD4l4qNhEOmsqJYuUavXp/LG2+8IaNGjVLBCPGQderyY7SSF4Rx6ROmeIZ9EsfCqKcZ2JSHgc35L78QFpYZTW/tQ1xDCIzmgyBj7bZ4UeM9FB1zbm7zZ0GdqId9hgJpKOhFrwNiGvW3toUf4XWEP7qAtkUJ45I+O9zSg5UN5I2HJnUgLH6vObd1DUnHOVXjHpAFYmKm8UE67g2COM9P3br15MILL5KjjjpKr1s7o/UzotcQih5//FH58MOP1cMRUcWuR7G28cnmF61bt5Zbb71dp9LbtXTMmzdXLr30Up2mjJdZUv78MMC6ijfddIOcc855WfcmU75c22+/vYJ/pG/Re4VXJyLmBRf8U4488kgtJ6msHRXr3wxNVmhSpn4BrvPOTBKNk2Ac3Hvv3fL9998F76eSWWMTeF9yPxAP33//Q2nbtq2eZxqf559/nnz66Se6TmHo+RvmxSdLLey33wHy8MMP687gmZg/f4FcdNGFMnjwQGnSpEmOdzd9RR2mTp0iEydODeqdLHjbOCDueeedJ99997Xu2k9eSVPmHcdxHOfX4MKh4ziO4+QTjESEhdNOO0NuvPFGNVxDYzi3oYsABcSZOHGCrnfIdGSmaWKYRiEu8diVs2XLlvLhh//L8gZLl380/H//+5+ceeYZUrt2raxNF+KYgRmYt0E5s6Vz587yyCOP6Q6eobCT/U+ApPKiWF5mXC9cuEAmT54st99+p4wbN0p3xS1atHhg3BfWdpBftM3J+Vv5oTBoeVtcyounixr40e9Wt0xt4tz6nWhc5jMUt8K48TQ7EnFxw/rHwqNtB2tv6HWZ8xqE8Wlv7mtxyCtaXrSfCOewuiEAZhIwovEtP8RCREPWbTv99FODsX2ONG7cOJUiGauPwY7IiDdffPF/wXisoGI2cdLDhihrgvGwi/zzn5fKySefkrbeVhZte//99+T+++/T+rPxCX1s9SAe44sNThAjEabA4lgfWb0s3eTJE4L2Ngv+cX6ILF68ROtBWYjkTIVlI5ktW0IP0h0f6siSAEWCdudcqiE3jAU2SAqF5mCUp8arif5hf3KwsUiTJk2lVatWiV6eUVgK4b//fV5eeeXlIC3LG2SvOUu/kjcbm7A7N0s52P2NY+G8z5s25f4cmrV2IiBmzpo1S2rWrC1PPvmktGjRQsPTgYfiww8/JK+99lrQnvL6vjRs7LCB1BNP/EeOPfY4DTOsfoRxUAc8wPlRqGHDhllhjuM4jvN74MKh4ziO4+QTjDFEjdKly+h05cMOOyx1JTfERQTB+GMqJ9PgHnvsETVUbbpk1PgD/igzbe3EE0+QG2+8SY1cE2aSDNkob731lgoYCF/lypVVI5t8o+msHARQ1uPC4/Diiy+WQw89XI3p0IjO3jk6HdY24kSN0/XrN+jOsnjjvP/+u0E7EVI260YOeCICbSRNvG5RMl2LEo2X7ns6iANEC5oS1IkwDdK0dn1HIn29CM8pGMbbH20v8X8vyDdaVrz8+HWIxuFAGGPNt9WrV+u0ZMT1Zs1ayQknHCf773+Axs0LxhXCDYwfP06fhd69e0uVKlV0bCfVIwrl41F8yimnyPXX36BCVzosrxEjRsi//nWFerQhZFm7gO+bN29RL8HRo0fJgAGDVPw00dAO4FkiPs8ddOjQVuPZBijE4zrx8DykrXzf8aF9YV+FXqb0S3glPaShbUyJ36L31LyJw7ShiEg/rFixXC699DK5/PJ/BX0Vvl/S8eOP/eWee+6RefPmB++l7F2v6VeODRvWBeUUlJ9+GqbhSUQFXz732WcvfWeS3t6DvFsRvS+77DI5/fQzVexNIvyBYhcZMmSw3HbbbTJ79ozg70o5zZeq2Xhgvc0WLVrJhx8iOodLB1gdIDp2+M7GObSPZ8rGk+M4juP8VqLCYcE6dWrflgp3HMdxHCcGBhvGGNOCMWj32KOTejIlQVwzKJlqiBgya9ZsndJrU3mJY3HBPJwQPhAudtutVVBeGGZx4vCHnDo1b94iyLeI9O3bVwWYdGutAeVQf7wnf/zxR61nmzZts4QXSFcecI3DjFfSA+lr164jBx54kG6CgVCyfv06GTt2vE7VRDzAqKW+ljaKiSGZyo4SjZfuezqIE8bL+Wlp7fuOdKSvVxgevR4nOzz3td9CvKx4+YyNeJzwmQjvPyLL3LnzgmdqkdSsWVNat24ld9xxp24gwtRfSMojjj1rrAt3+eWX6q7LrANo05MzpUcQYg3Chg0bqMdW1arVM45Fwqj3M888I3369FbRkLBoXPLEA5E1QK+77lo54ogjNdziReOC1f/777+X5557WurXbySsq2rij6WxZ5d3CILoX+HY9rrG40fPw+/8EEHfsNYqU7dZIzATrIU6cuQImT59uqa3/g8/OXiHbZU6deqox146GBfcp+nTp8nXX3+tOzYTZvlxf9iMqmzZMtKpU+esH4ni2JikDePGjdWNtFh3FW9LsuJaKJwWlqlTp8nBB/fUcWblW3lg3wkfMKBf1tjPz3PjOI7jOPmBvz/82wZvfxcOHcdxHCcPMM5g6tSpahS2arVblnEfB6PNDDeM50qVKsr48eN1I5So4BiNR/54Pw0bNkzKlCmrU/G4lknIAAxOPFMQKYcPHxHksV6NbIxHsHR8WhjGN2VhULNWItOc2aHZ4kYN4jjRcL5bXP5RAQiRXbp0kc6du0i1atX1YKfdWbNm6hQ9dlQmLn2HsW1GLmFRgzdajrPjw72LHvZsMK4ZIwjd3H+EOg48r7p23VOFtfPOu0DOPvsfKj5bOhtXSeMg+kyQ/6uvvioPPviAjBkzWnelxdsr0xi29IiAjH2m2nfo0DFHvtG0jE0LGzToR7n66qtVODLB3+LSbsLId/r0GfL1199qOMTzhGg/XX31VerVzI8AEI1raWnrX+n4tXWmT5LCOQAhbezYcVKzZg3Zc889NSwdiLjjxo2XgQMH6ruXPKxvww+mnm/WMbPffvtreHQcxD/btGknTz/9hG64Y+8vIF+8IfG+bt++g47DdGOQMDbNwmN19OgxQbyfhV2fDX5o4TrjgfUQzcOddNG6cFAGZfNjzX33PRDUr7U+Z9ZXjuM4jvNb4O+MC4eO4ziOsw1geLJOIKIA4ljlylVSV3Jixp3B1GAMw379fgiMVIzE0MMvGo/v5M+UTdYNxFMRMQ8wTuN5mmHIH3Ty7tSpk3r7MeUOz0PyIk28DA7Scp20TJkz78PmzVsm1i0TFo9P8rB6IX527NhRDj74YOnQoYN6RmJM44mIaLlgwXz14Fy7do2UL19ejXA8gpLa6vz52H1Jd3+474wd7iHjkXu8fPlyXQtu6dIlKhwitrB7OGLhaaedJhdffInsvfc+UqNGjaxxZ1BGunEQHWdsEPTss8/o9FU8FRnTkFdaW0/x0Ucf0zrYtaRyLQ1CD1NR161bq1Oho4IicYDy8Rx+/vlnpXXrNhqWDivvscceljfffFO93kxUd9JDH7NpyMiRI+W4447LWg4hjvXv2rWrZeDAQcGYXKc/qkTvL98Zq/Q7G6QwRu1exuMBy0H069c3+BswM7U0RHjNxsjs2bMD46qxtGkT3vtoHmDneJSTZsSI4cHYXabCpUE+XOOZYM3Os88+R7/H8wLCqHvVqtXk9ttvD+pURvOytjuO4zjOb4G/uS4cOo7jOM42gDGGkbps2VJdhwwvpajXXCYaNGggy5cvU49C0sQFOj4xGJliyYL906ZNl1atWqo4yTX+cMfL4JyyTWzAS5G1sL788gtZv36jettYHEtrn4RhYLLjM0LjkCGD5PPPP5MuXbqqkBclU/sIt4P6RyEdB5s6sEkEG7MguHbv3kOFxCpVKgXtqyT/+9+ngYE8U41ujHjWD0Nool0cnPPJ2nF8314HUwY3b96k3+l/q1M8HnHsH1Y72hGvq9U3/J58nSNse9he1m/jO+F8cs502nXrONjMZLWsXLlKBe/x4yfq2F2+fKne27Zt28kZZ5wtRx99lG48gmh40EHdpWHDRvoMZBpbwHXD4tnntddeI//5zxMqGCLk4fGVV16MUdo0fvzYoC5HqXhpkNbSW70sDdx6683BM/J/wdhtrmURHi2vaNFiMm7cmGCcd5X7738wFZoeS8t6o0ypRQyL5ufkhv7hWeM9OXPmjOAdvHvaDXTsHlaoUD41LXi6pov2Md8Z19xPNqCJ7pCd7l4sWrRUvvnmK91gKihFw0jDO3jx4kW6SVS3bvsE4yH9eplAO4YNG6obq0SnUUchz7p162ZN349DGvJhLCLYv/HGm1K/fj0d4+nq7ziO4zj5xf59i3Dom6M4juM4Tj4IjcNddOothua9994rhx9+hP5BzY+XENOIr7nmKvnuu94qziHORNOZocsn6yK2bdteHnnkIfU85A+3GadRCLN0HBs3bpCvvvpa07HAPmteIVRiHCcJe5aOKcR4/23cuEX22qub3Hzz7UG5tVMxfx3kb1BGnNWrVwV9slHXf0TEZBfU7777JjDMF6m3GmuGIVCRTYEC5PVn/HMl3HzANiGJY01kemFYv/R1DOPiEZe7L+zeRvvs10JfWz5hvzPNU091rCJShfUMvfPSsXVrKEoggIQb9jDOmVIZrtGG8MfalWxQUbBgYWnXrrU0a9ZSyyQNXqd4wSLqxclrbBj2D1bKs/5/7rln5PHHn1TRsmrVyjp2iANJeVEW4eSFQDN8+BC5/vpb5bzzztOpykmQn6Xh+bnttlvl3/9mKmhbrQvhVhb5E2f+/Ln6g8Lbb7+rwmg6ovfmxRdflCeeeFxFw+iznfP+7ZzYfUlHuuuEMxbwxttjjy7yzjvvZoVH40fP2aTqkUce1jDGQBTejUzvPfTQQ+WWW25VAZj7m/S8A4LlAQfsJ2XLlstaSxOIv3nzRhkzZrx88cWX0rVrFw3PBOtlPv74o7o2bdTrEKjDunXrZb/99pV77rkv13WgbOrPs4gHbcOG9dWDN90ai47jOI6zLfCDse+q7DiO4zi/AgzEefPmSsWKleWDDz7QdfzyCwJdly67BwbhBp3CHBf0MAQ5R7hgfas2bXaT++57MGsaJoYwR9QoTmLatKly5plnyOTJk6R+/QYqbJiBG8XysU8M1aVLFwXHysDYflPatu2gHoPbC6aQht5tHD9rm8Nq09Y/758r4X1KL2LgxZfQvTmgLYhvYVuyIR2akW2Ik1c++YX7idC9dSvCIfc47Es8kxAF8+pP0m/ZslEKFw6nd0bHHJ8ctB3Bi++lSpUMPpPE1cxjNY7Fp7/Ano+5c+fK22+/KU888YQKNkwrpQ3R5ycJ8gmFx4LSu3efIP1jcvHFl6auJhOOu2yhnvp07dpZnyMTFQ3azI8A/fv/KP/73/+Cf1wfrmPYvIrjWPvmz58nl19+mW7sgtATFQ4pnzjWtm3tw19LUIzyxxRF5tkZ04+0L127uB7tE4O+AISyBQsWyowZM4K+DsXjpPjAjxPXX3+dirslSjBOc5bJjxQlS5aUu+++R6euZ+pvnuF//vOi4P34lrRv31HfWZTLPcPLu1evr/Ta8cefmEqRG8v/+++/1Xrx3kU8jI5l4uANXr9+/eBvwH3SuHHT1JWcRNvNjuSDBg3Kmvae17PhOI7jOJlw4dBxHMdxfgVm8OG18s0336kXy+WXX6HXMBzTGWqk4+D6a6+9KjfeeIN6A2JoQjStxWNKKF6D7du3l8cff0Jq1Kip8aJx0hm3gLF8xRWXy4QJ46R69Ro6zRoBDOL1tHzJj4Ppp4sXL9Up1j17Hiynn35mLgHR0sTz2lYwcCGv9jg7NoxJxoSJGNxXG6dJYyQ+5rn38TwAwfP999+Tp59+Wqez89zgfZXX+LPrCLJ44jJVtXTpMjJlyhQNzyQ0Wd2C6siee+6h63Gy7ihT6a084lidZ86cqYITzynexHgkxz3b4rz22ivyn//8R/OxNUmB/PiBwerPpwlTYH2VBNcg+3oo1llaq6995syLviectpNXKvg3Qj4UQR3ou+gnJLWFenE96f4QnTqyG/HIkaPlueeel3PP/UfG+8kPNVdffYWu58p7MF4mnoLLlq2S6667Ts4666xUaG6s7l999ZV0795dDjzwgCDvtVntYVwiZDZr1lQ9T0uVyr3LPVg+bKZyyy1Mgf9MhUvSW93oA0RJvHqvvvpa9W5PItrul156KYh7jbRo0VTTO47jOM5vwYVDx3Ecx/mVmLGN91Hfvn3l448/kUMOOSQrPAkMRbuOwfjNN1/LoYf21DUFMfwQ9KJGr8Vlymfv3j/IwQf3kIceelinQJo3UyZDOcqrr74iZ5xxpuy2W0upVKlSDvEjjpXLwXc8caZNm6YeXpdddrmuUccab9bOTG12nEzwTABjkfHP82SCisFGFKxj+OWXX6pwzY66+R1vJuQwBZ81NHkGHnggXHsw3bMTLR+x8fDDD5ORI4dL69Zt1cMt/txwPm/eHGncuJk8+eRT6umVH3r3/l4uv/xS/cc4a+XxHFE2zzXCU+HCRaRs2XAaNUUWKEBdedYQqCyMfuBAwAw31MhuE4Ltrqk4oXi4yy6kL5jV9l13xVMWcS4UdsmjQAHeU6GAH7b1t5sIiJG77orQF67jRz2B72H9cpMdnn09rBPpw3P6auHCBdr/Y8ZMyBpD6XjzzTd0Ixr6gLTRsukT3nXs9H3zzbfodN8kbHyMHTtajjnm6KC8QvpOpWzys/chG+R8+OHH0q3bXqmUOSEf4nF88cXncs89d+t7OSogAz8erVy5Uvbaay+57777pVy58ll1SIIlHjp37qQerAiRjuM4jvNbcOHQcRzHcX4DGIgYqXgisenJnDnzNBwDFMMvybCLG3x9+nwr++xzgBx44P4qSiQJGeTHOmxsqoKBev/9D8ghhxyq10xspC7pDEnj6aefkhdffEG9EPfcc0/N1wz4OGb8EgcQX5gyN3PmdKlZs7a0a9deunTpLMcee5yuYxeHdpJHUnscx4iOExtzwLj75JNP5LvvvpWvv/5SPbpq1qwTjMNCmiZvGNehKIOQMnr0WLnnnrvk+utvDC9nIFqP4447VgYO/FEaNmyo/3COPmPE4/mfN2++ijT//vdDsv/++2cUdaLXHnzwAd0NGtGQfGhz2bJl1ZONDVsOOOBA3eRi06bNwfXwOWKqdVi10Csw5/MVimrZZYffOSiXNlEO6VmPk89ChdjFPJw6H6bluol64RT0oJm/A7yfwl3jg1Zo3Q1rTxy7B/SzkdSv1HH58hW6w3FewiF06NBey8QbNJof5eDdV7t2Lbn11tt1LctM4BF6++23yX//+19p2rRJKjS8x9SJ6ef/+Mc/5M4779Zwxg/h0TJtPEycOEGnKyMYM5aicRgXlAV33nmXvvszjTG466675Y47btXxyHs7U1zHcRzHAf69NGXKVF17PAn+jeLCoeM4juP8CsyAw+BjEwimzWGAmvGYDoxBDGPSHn/8sfLDD32kbt16alibWGeGM5An+a1YsULLeP/9d+SYY47Xa8Qnn2j8dIwdO0bFirfeelOq1agppXVTi3DtQ454HhbOYQY5XjlsJIDHDrt9kuQf/zhP9t13n8DoDafaJUEeQBlRwzcvI9jZ8bGxk+5eWnh0DCTBc/TBB+/qxhJM0WfdSDYbKV26VNYzkxnyz/b6Wrp0qRQrVlyOPvoYufba64Kxnj1NNo6lgbVrV8vjjz+uohDTjtNNOUbQQWw6//wL5aKLLtJnJK8+gM8++1QefPBB3RzIhCKe/a+//lYeffRhueyycOkDZ9tgjKR771r/I8jOnj1TqlRhR+ScsHkVa3+yac7pp58e3PeiiffTxsqnn34mN910Q3Dfd9EpycS1+EuWLFZhduTIUZrGfuSJjuFo3rfeepPu2M16otE2UNaWLb9ofuedd75cffXVqSu5sXohdnfu3EX22iv8gQjibXAcx3GcKEOGDE0rGhoF69SpfVvqu+M4juM42wCGWc2aNWXAgIE6Fbh58xZZRlpUjIhCmBm5xx13fGBcjlRPQNvhNZ6O7xiZrIdYrFhReffd96REiaLSrFmLrKltpLG4SVBelSpV5eCDe6oQM3/ePJkzZ67ma9P24mktLGp0Uh6L+BPOZhUTJkyUH3/sLz/80E+++uoLnWK5bNnSIM9dg/btqmk50uVvBrXz18XGa1QIMaLjMjoGuO+sAzhhwnjp37+/fPPNV/Kvf10pffv2UdGwYsVKOlWXqfrpnqPchM/B5s1bNA92c7755pvlnHPOCeqV/czFIY3VffXqNbr5CmvFIRqaYB4vHw8y1gE9+OBD5OKLL9Z18yAej7yt/hzTp0/XnXQnTJgQPM/hZjKEz507J6hbIXn//Q80nQk+8fyc9MTHXhS7v/Q5wi3v0txjNdxwhV3C27ffXeMmjWm7JwULFpDhw4fLggWh1ynYvS5WrERw7SfZa6999AcWwtPlAxhrvXv31u+E27XwO/n+ou/+Nm3apN0JHIjPRj38SDRr1owsj/BoWY7jOI4Th793K1asTJ0l4x6HjuM4jvMrMTHi559/kRkzpukUS4xOSDI6DTMwYcmSJXL22WfL999/E6TtoKJKUjryw6MPz8OVK1foVLS77rpXpztCNM/odyAthwkhTI974IEHdO24MmVK63pY5lkVT5sEedFu8qM+iEB4X+F5iahZtWoNadasudSpUzf4bKZGL7uZVq5cST+tHs7fA9ZqW7RokU7rX7t2nYwZM0amTp0igwcPVqGZ8cOzxBqGiNMIc/kZh0A8QIRjWjPPRr16DeTyyy9XoZw8yJtnKik/K4c1fF588XndsKRIkcIqkNsU02g6dtVdvHiJTiW+++57dep+dh1y5k84ZTPeWcOO9RpffPHF1PNWWEV7RM4gV/n88y91B3SeLdKlq6+z7dCn9k7t1m3P4J21XIVhwq2P6XPWE6xXr77ceuttwX1tlzU2kuC998AD98mHH34klSqFa2+G8SW434Vl0qSJej9/+KFv1t+JONH8d9utlU7H5z0cjUscBM2qVavJ9ddfn3bdRINnDc9VxjEb+iSV6ziO4zj5gX8H2RqH7nHoOI7jOL8SM/r4RLj48MMPdX2s2rVr5zBK7dOwc4xCvJXatWsrY8eOk5kzZ6nHC0Zu3GjlO6IiwgqefXhrff99b6lWrWpgINZRA5E0YGVH05OnGdAINN27H6TG8cKFi2T69Gkq6OA5g8hh+WSCONSHjVOoky3Gzz8wEInwemEa9ltvvSWvv/66bggxbdpkXUNl0aKFKpisXLlcli5dIcuXL1XjmH+g8InIgpiEEYwHDeUYnLuo8ufBGOIecP8RRLhPTNtlCjsHogzTjrnHkydP0amT3377jTzzzNPy6KOP6XgYOHCgjjnuM+IZ4w7RGcgT8nN/qQPjnvGwePHiYJxsluOOO07uu+8Badu2reaRSTQEwpctW6brgDI9mTUFbeddO4CyOHhOEMJvuOFGFXHIn3CIl2HnfA4ePEgee+xR9VRkZ2i8IBHbEaCeeuoZ6dgx/MGB/HgG43k5vw3rz6VLl6lna/nyFXK9o3mHz549K/VObq/ibjp45zHeBg0aGNzTtcEYLqbjgHx4j7E25tdffyO33Xabjr8kiG/v5G+//TZ4bqbrezQp/qpVK3TctGq1W9aPPEnwPDC9GVEeIZ16Oo7jOM6vIfw338/SpElT9zh0HMdxnN8KwhbG/vz586RmzRqBwfi9nvPHFkMyneEIxMHYGz16tFx33TXqjYWnCGnMEI1DOMYpogOeMxdccJGcdtrpQdzwGnmSPlquGakmMFq+8+bNkw8+eF83Zhg6dKiULVtaKleuoteIF42bRNJ1+4cGMM0Oj0wEJgxsRCfERozfsmWZfl02MG53CQzmsrrJAfG5Rv9xMF2VaZwY5oUKFQ7avTH4XkrFpqAkDUOEYYdTRB/ax3fajhAQ1CA4qF9Yz3BqNtcQC4Jgse+2My1psuOzKUVo3BN32wiySx1hXrSNvAzO2cWWdrBpBe3gOmnCujG2ftY+C+uUDu4t9yr0VqO/s79zsLlHoeAerA36hj5kF9iwTOJoDvoZ5gNUM9wsIzyoJ95269ev0/FOv/CJOLF+/QYVxDZtYgryWpk2babWf9my5SoOA96yrIPJNHbayVR2Gzdh34TlWlg6ovEYH4iVbFLSqFGj4Bk4TY466qhgHJXPigeZ8qQNjzzysE5PRihCuCFt/Jklj5UrV6nYeeedd+oyA2DPuB1JsOj4DTdcK999950uGQCU9c0338s111wj999/v4bltw+cXw/TxAPbR1q2bKn33vqavufdMG7ceOncubM8/fSzUrVq+B5Mx5w5c9RbnB9JmjVrqu848mNMsJD855/3kh9+6B2Ut3cqRU4o08YaebDTfvnyFfXHIxsLfPLc4Q25557d5JZbbpXq1ZN3fTZmzpwhN998kwwZMiRr127HcRzH2VaiHocuHDqO4zjObyQUlnZRg3HFimVy2GFHytVXX6MeIhhtmYQASwt46CEksOYZXouh+JWcNjQof1GDEnGNBfHPPPNsad++fdb1eFori2t23eKw/hrT7th8ZdasWWr4ciD4YGATH6Jp0mFxweJbGHVADMMY3rIFj0JCQ7GTa9nlWBs4M3EPYY3rCIC2GUW42yzXEA3Ji/iIU2G/hvHJi3PExVA4JOMwbiiQhWWQLqyCTRe1nWkJ21ZIRJ3Ni442cSAehuVv3swU8l20T6hb2AfE1v8F4Qh82QJHEqFISD+H/Wt9yKeVhyiCNyfeqvQ1XWPxwv6xOpEH/WBpc46jMB6f+qFYnekv0iH08p0yEfe4L2FfEjd77EE8/3SEbQnjkidlTps2VdvTo8fB8o9/nKtehhC2z+5xNqQh3MD77LHHHpaPP/5Y0+D1yPWk+uEdyIYrt912q5x88mnaNvKzePGyDITGxx57RJ5//nl9H5gHGII9IuJLL70ijRo11LwgWr/tQX7734j34bZCeRDtX45onvkpw/oL7J7F80lH166dgvu5Qaej2z2kWvxowDT08uXLyN133y977ZV5WjA/3Nxxx53Be/N9qVGjuo7LaD2WLl0ilStXU8E4HcS1vjj22GP0ByS8yBmP0ftCWaxveOONN+l4zwRiPlOVX3453OCHd6TjOI7jbCs+VdlxHMdxfkfMwAuN1nDRfLxP2rZtl+dUsdBoDY1H1gRs3LipTJ8+VYUF0qYzhC0d3nubNm2W/v37yU8/DdM1BJs2bZqYzurJp6W3shFNunTpLB06dJCOHTvo1DlESTy6MD4hv6KB5R+WkS0OcJA+9ArcVdi5lDbySTs48CTE47B48RL6vWjRYjp1kDhheDidmnSImoUKFdRP8iU8Wr+wzGyxgvrjbccUaP4xxCf3iX8UMd2Wcz4Re+xYvXq1fq5bxy6623Yg1GHEh3lZvpuCcsIyObhOvagHAi114NO+m+gI0X6MHsGV1GfY9ybUIRjQP3j3IUqG54h54VpqiK94bIbfC2k/0q98Zzou+dDfnBOHg/th94q49r1kyeJ6n9jJmHPicj+yx0FYP+DciH5PR7St1JF1QRFYTjjhRN2F+JJLLpXq1avrdROC4uOUcMSYUFwO1xa9+OKL5KOPPtLNMhjjJtZYnSw/7gXxTzjheLnqqms1j6g4makNbP5y/vnnS7Vq1dSbEdidHK+yhx9+WFq3bqNhZBF6yG5fMtU9iW2NHyfeX/FzyE8Zls7i8sm9it/3KDY2eD/ec8996iXIMxnex/A645tdjMuVq6jTlVl30NLFCd9dhWXEiBH6ruSZAasL7zA8CQ8//HDd8IfxZNeN6Heuf/bZJ1KhQsUcZRLO8zRt2rRgLP4sXbt21ecyHTzTeBb369dPp/Czjm26NjiO4zhOOvjbwb93mKrswqHjOI7j/I4gKnCMHDlC6tato5uE5AUGHcYhn3Xq1JEGDRrq2lmsFWc7gNr1KJxzINRgbOLhMmDAj/LTT0Olfft2Urp09g6cZrQaVqZh+bMIf4sWLaVDh47qwbVo0RLp1evLwBDdRQ1lM8zt0/KI180g2OoZnudtvBIn2mb7HhWi6GPCOazP+U4cvvMZimThlGc7tyMqltl5KASEApkdXDeRbFuPnHmFAqltgEC+dkTPqSef0boltSXnUSirD4hn323qNof1Fde5BaSzvuWI9inwPRrGJ1h8w77bfUnCwtNdT8LGFfnznX+4cgwaNFinkF533Y1y7bXXBmM13Mnc4oPVxcL4zj9+icd3xJTzzz9X191s0KCBCp5RIRDCtAWCe4MAM0AuueQSufHGm7X/TISxtkchneXB2okXXniBitQ1atTQT64jTh9yyKGy//4HqNdbSP77xkkmej+i98HgHhNWu3Yduf3226VlyxaCJykQbgeCP2Nijz06q+iWlJfBNd71TFvmObZ4fHKNH14QjTt16qTndi0JdgJ/8smngnd5+ENNtFzyZsp70aIlgrFziP5dyFQvnn1+/GETokqVKrlw6DiO42wzUeHQpyo7juM4zu+IGXNMLStdupRcffW1csQRR6au5h+mt91//726W3OFCpWyhJwkKBOjmT/weNBQNuvN3XDDDXLmmWep+AH88Seu5cV3sO+WPx5WCEvAJiZDhgyWr77qJX379g/y3yiFC+MtWEQFNeIRP57Hb8HySVe/pHLice17Epbe4hnxMDtPipsf8iojmj9Ew42ksCTyE8/Kin7GiV+P5hc9t7RJ8X4PyC/0umTH7vXB+GbtuF/k9tvvlDZt2uiahsCYNlETovXieeA8ev3hhx+Sxx9/QooXL6pragYxNW5UdMoWBgvqrrgffPCB9OjRQ728qJPll9Rme3bwID3ggP31+WV3XeoJ1i5ERNrFtO5wXc2/J9yuhG5UotdStzULwi2Me1ylSnn1Pj300MM1zO5h9B4RBtzrfffdV6ZMmSiNGzfRe0WYjR3EPu4xu9aziVTSfTZY85P1MV955aXgDKE5e+MS7jEiMePs++9/0DDqEB1rcU4//VTp06eP1KtXT9NTD+pFmtArerMuZ3H88SfotXR1w1v51VdflieeeELFboRQa5/jOI7j5Af+DvlUZcdxHMf5AzBDDrFu6dLl6vFRv349qVWrtobnBcYdeWA4tm/fIUg/TSZOnJAl0tn1KJxbOHFYCwuh4rvvvpF33nlHjj76aBU9ogarGaOWVzxPIAzPFn5p3GuvfWT33XcPDPRKwm6irMO4aNFiFRILFsQzDU++7J2dfwvROiXVL/rdiMdNimPE40XjJ53b57YeSemiYfbdiIYbSWFJ5CeeXY9+xg8Lj34a0fOk+L+VMJ8CKhYy9ZPNVVhTkem85557vlx11VW6QQRrBUKSOBQ9ZyyayLdixUp544035eKLL5aGDRvo+p3Za11mt4E0iD9MTZ4/f64ceeThcsMNN6n4Ys9YtIw49oztvntH3aEXj0Z7JuJpeVbxQOUU8fDPPMI1QfM+6E+amJTHth+8r8gPr9gw75zXbCOd0JOYuHYQzmcYbxeZOXO2ekbXrl0ry8vb7lcU6/+6deurqBbYQTni8cm9njt3XvDea6Ke15mEPuIiNLIRCcIe5wZ58Xdg+vQZKlA2btw4sU5R9tlnX92xu02b1ur5GH1H0z/srly2bDl9F/M3wZ6BOCYqDhs2TD1so96QjuM4jpMf+BvjHoeO4ziO8wcRNQ5nzJiuU3+feOI/0rBh6CWVF1GvlI0b18uJJ56k6xcylQ3PEX4BTGfMmkgB7Kg7d+5MKV26vJx22ilBPifrpiuGGZ1W36hhGW1DtD6Es0Ybayp+9NH70rfvwCCU+iDQhB434XTcokF60oRr0/EPDysjWo7z98LGQVQQYXyE3lSsPcmGOT8HY6iIdOq0h3pW7bHHHllTeqNjEaLjFDjniMYZOnSI7oSM52zdunV1GjleZiYqxvNAsJk7d66cfvppcv/9DwXXssuNxzWi9WIK9L777icHHri/ToWNp7PnDpLy2v5Qt+z+ygRCLnGjm+n8uYR1p0+ZyluxYsXgnj2gYyfdvQI895o1a6w/jCAi27gkDSLlzJkzdSozuyvXqFEzlSoZfty5887bZcSIn6RkScZp9vij+PnzF+juxkx5j4/fKHaNenTvfqAKkvG4S5cuDsZwQ7n33ntkt91aZ3m4JkG5Dz54r3z99Te6vmZU1HQcx3GcvHCPQ8dxHMf5A4kaq3iHTJw4UUaNGiV77713YKjammbpwXg1cYH160488USZPXu2fP/996mdjosG15N32iWMIzSaRTc9wWPn3Xffkddffz0wlptJmTJlVYC0eJTFZ9RIjebNd6sPB8JLo0aN9R8SeHDhVcWvkVOnThY2x1iyZJkauKtXr9J8KQvvmKhQk0RY59xtMux6NF5eaXYUsuuJsBV+RtvCZ5RoWDQexONGicfdkaBOrNvI+IFFixbpwU7kCIWMVUT2Cy/8p9x6621y0kkn6diy6Z9R8dmIfmeMgo1jNhh68cVn5YwzztZNaFg/lDEYnW4M5GGiDQLm+PHjda25K6+8KriWHSf6GcXSwiuvvCZHHXWkHHroobJq1cqsctLVeUeBMZOfw+LuSFAf+pSxhRc0ovC+++6t784kuF+IbYsWLdDNa+JrAJIfYb16faVrUeL9nYSNNzbWYRx//33v4D1XNJeQRz02bfpZzj//vIz33sbl0qUL5dNPP9NyCYvWq0CBXWXOnFnStGlzadWqlV5Ll2eJEsVl5cpVMnLkyIwCo+M4juMkwd85/u3lm6M4juM4zh+IGZZsUjJz5nT1ROrZ89CMO2IChiBCBJ9m0Hbv3kN69DhYbrrp5iA/drBl0f4w/yTMoPzll9CDpn79+prnyy+/LD/+OEDYUbdp02ZqqBJuwkc6yCsKRqwZ7IiIHTt2lMMOO1TrycYsTBksXbqszJ8/R4YP/0mmTZuuHjSksbZB9DNeRhyu0x/RukbTkPefTbo2ZIfTzuzzaJv4boddi34H6/N0B9jn74mNw9wwDsKprnZvrY6k4UC0QJBjh+pZs2bJmDFjg/EwQ0XBzp276npzV1xxpZx++ulyxhlnSfPmzVVstvsZLTfTOCVeGHervPvuu3LttVfLRx99rLvnIkqSn9UxDuIkmxEhOt177wNal/xi9XvqqSflrrtu0+dqy5ZN+aqrH7/PAfT3zz9v0am5TA2uWzdZ8MMIsnvzzjtvq0hokBdjFgEQT8JWrVpKly5dU1dzEh1PM2bM0vc7z4EJ3QblAQIiG06lw0RmduN/5JGHdcMrwijD2lm0aBFZuHCh/oC011575yorCvHxFGGjLURsPA6trxzHcRwnL/h7aMKhT1V2HMdxnD+QqOAybtxYNRzff//jwPDL3vE4ExiN5GFG5RNPPKbG7rx5C3R3WYxBrqcTRAyuwy+//KxrxyEmVqpUUY499ng55ZRTdV1EgymjeO/kBf+YIF/qlmSQMk1z4sTxMn36TFmyZLGMHTtW5s6drdNAN2xYL1u2/KKGLWuUMd2Q+lte1I9PaxOfnJshbYe1n2tUARu9QIHt8U8bjPmwbpRL91If6sFnlOxw7hPtQPANp3uG9Q7TRNNz0FbaxkH7bRwgBlN+GBaWRTfx3fIgrhEE8f8gPPyOuEHccMppeA/ZeMT6GkxcCT2eyCAUBMM2hOWEeYT1ZVwFPaHlhtmE45V1L/EmZKok042Zrt+8eYvgvLi0bt1WvQDxRo1i44q8aW86LJ55UrEx0BdffK7i+JQpk/UaAou1K9o+g7ZR5zlz5kmtWrV0fTkEeiD/TOXbfYHPPvtULr/8MhU8o8+Ss32xzaGuv/4GOeuss/UeQvQ+mvfd8uUr5LjjjtYfNerUqSWbN2/R+2n3dd26NbJ69Tr56quvdZzamIxicZcuXSq33HKT/PBD72Cch17eBlO9OPA4v++++4NnonCOsZNEz549gjE8RXfjNq9DyqcdtBHxnXp16dIllSIZlpW455675dNPP9Fxac+K4ziO4+RFdKqyC4eO4ziOs53A+Bs9epTsv/9B8thjj0r16jVSVzKDwYjwg1CD4Thp0qTAAL1XPvzwA93ooWjRYhmNUCPMJzSiEfXmzJmjwtu+++4TGLX7yUEHHaSGKphhm2QsG5ZfuutxMICXL18mCxYsCAztZbqW3JAhg/QfJmyGwdRS+46HWvgPlo1aDmIm9aZObM5SsCAGMP3BBgqh4BhuqkAcRMdQ7CIO1UtV9TdCO0PRz4Qy6oaXE/3F92xhjU/6Bi+on/U6aREOswVD+uTnlDEfrgNJe8L01u+hsEUbEfdCoZT8uI+WF/eLNoZtpUw+KR9Cb0DKp1/CvAoUCAVaDq6HfZg9hkLvJOvTXVMCYNHge7g5BelsLUvilixZIvheIqjHZvXuw8u2YsVK+lmpUgUNQzysVKlKjnLSQVsg7IPMMF4GDhwo33zzlU7xXL16pT5bePaG/Z4zH+tbgjZs2CSrVq2WJk0ayTXXXJvWuyyO3RPo1esLufnmm1TQYdqq1d3Z3oTPEPfzyCOPluuuu06F3Oi9At4r9i5544035NRTT821piBpeC7HjBmju3CffPIpqeczvZD85ptvyqOPPqzfbTo+kI6p8jVq1JJ77gnXJsx+vpN5/vnn5KabblTvWxMOgbwQAL/44kut+8knn6zhmXjttdfkjjtuVxEdT0rHcRzHyQ8uHDqO4zjOdgZDFOMP8Q/vOzxBhg8fIVWrVkvFyAxaBBtHmCfg/Pnz5Pbbb5Mvv/wiMI5LBkZhOTV68zJIo9cxgpk+ioBH/Vgz6+yzz9F1GLt166ZxDBNDMuWdDoxdSDK6EQHpE9q2cuVq/WRtxHXr1gf1Wq3rJVI263qRD2t2zZo1IwjbRTZsWBN8n6v5IoQiAoVs33/aZPdnASlevJjeo/Beh/2Gdx3GfriBTEEpVAjvSj7xntxFihblnoa7xIaCXU4hlLzCc8SOgsJOreF9ROQIhTHS871QoSJSrFiJIC+uhYJgOC4QPYoE3/FUZDdf8g13wqZMvKCYvs5tRlxEBAx3rC0UfIb1RQxBTCE/msx30iCkMmWS+pE+3O02rHcSjDUwkSY/JI2/iRMnydKlS+T999+VXr16aRh1xLOR+JYmDuOIfBD6mNbardveKqzUr98g6zr1TyJejw8+eF8eeujf+hyF9zj/bXJ+f7h3vAuYLn7TTTfpmplxEOKA8csmT/vvf4B06NBO73n2ezoUG2fOnCUHHLC/vPjiS3rv041pGDx4sNx668263iGitcUlL34IYWxeccW/5Nhjj9XwTIwdO0569uwu1atX1+fTyiYv3i+TJk3WTYP++9//qjifqW6DBg2S66+/PniXLtIxmqkNjuM4jmO4cOg4juM425mo4IDxx3RdvD969fo6x07HmYgbh5x/8cX/yUMPPRQYuDOkXLkKKlwRnsmQjEPccEfbzWr0zp07Xz7//IvAaK2maxWWK1c+FfPXQf5RfovhSl4Y/hj19CPTC8mO79bu7Q3lhyJeKIZxHm6AAgh1NuXawkJvN8P6I/wIr9GMMJwj//dyR4Z7QzvsHlmbLDw/IAohmiMgn3zySbJgwUKpUaOaejMiBJngx3iIi3iEhYImG7MsVnHnyCOPlPPOu0B3veW61SNdfaL5Mj2Z3W3ZzRdPw3h5zp8DIh3i2qWXXirHHXdCrvsSHX+LFy+UK6+8Qn74oa9uRmKiMnFIx48qc+bMlnHjJuo9zgTvz+uvvya1SUq2Fzh5MW4YJ127dpG77rpXd8iPPwdReMddffXV8vLL/5UOHdoHbdqQlZ+N04kTJ8irr76uU+uJz/hPgmIefPA+9YikXgiRjuM4jpMXUeHQN0dxHMdxnO0Ahp4ZiBh5VatWlYUL5+uC+tWqVdW13/IibmByzsYkzZo1V4+nUaNGqqGLiIKRGRVCMkGc0HuskE5nY+3D1157RRfVZ52t0ANuF/Vq/DWQf/T4LZAe8Yf28Rl6yxVSoYADz7ftfbCGn5VPXfDSwxMvPDgPBa3sI/QCjB/hFOOcfRX8p587A9YOa5thQjBh6cYsG0KwrhvTLl9//VV58sn/BP+g3aAbrDAdlT4mDyOeByINfY8wNH78BPW8+ve/H5JTTz1NSpUqpeVyWD3ikJ5wu8Zaiv/+94O6th3PDHk7OwbcK5Y4qFWrprRp01afzyjR+8gyD/xY0rdv36xxBFwnH8ImTBgfjLN60q5dB72WhI0vPBSHDRum6W1M8J1xxfhiHLdo0SJ43zfUNHY9iomAfL700svBO76RGm8Wj3RcZ63aihUryn777Z9V33heQBAe7oMG/ag/EPFOchzHcZy84O8W/27yXZUdx3Ec508A444/xkypxPOJtdlKliwtLVu2VAMTAzCdUZkE6xKySH7RosVl2rSpMm/eXBW0MBAtr/zkY3FIy5p0iJETJkwIjOofpF+/fjJkyBBdP6x27TpBnNybp9CmaDnb0oZthbIsf4iXEW23CVP84ycqLuWH/JRDmH2CpYmHO8ljgv6KiiwGa2F+9NFH8tprr8rbb78l77//norZeG4h9lWpUjUrP7C00TKs/7nvpJs/f74cc8zxcvHF/5SDDuqeYzwQz444NnbI7403Xpf7779PlxwoX76C1j0pjfPnwH3C65Dp9exQzO7ESdi4Y6OmoUOH6vuO6cQ2ZkIKBO/CMvLJJ5/KVVddnQpLhjQ1alQPxsdbQR7hdPfouOA770/GLdOMuU4dCI/GA855bw0ZMjgYZ0uyxG2LxyftHDNmtJx77rnCjxWZ3m8IpLRx8eJF+nchXp7jOI7jxOHvjguHjuM4jvMngdEWGqe76HqCGzZs1KnB2HJ4DzKdzMQPyMvII26xYsXVGN1jj07CJhasa4XXjRmckF1u+vzsGp/UA+9F/tHA1GrW8Orbt4+MHDlSPa1WrlyhUzzxtLM0UaJtsO+Zyt4WyCd6xImGmzGdzqjORLQMyy+KhUWvReMmpdlZsbEVFTgMu2ZHFASUTZs2y5IlS3Xncbz5Pv74Y3n22Wd0B/EhQ4bKsmXLgnQi7EZu05JNEIZontExzidraC5YMF9Fk2effUGuvPLKXB6+Vq9oPgb5UUeeg+eff14eeugBFZlq1qyl15PSOH8ejAk89BgzePY1a9Y0uEe5n327b3gVTp48RSZNmiDFi5fQMBsL5BPYSsG7b5jcdtstXEkc33ZesmQpefXVV4J343L9HoU4bIZUrFgRadeunXpwR58Lw74jSq9fv1a+++47KVOmbFY4n6Tjh6chQ36S9u3b65qOhKV7x5UpU1pmzJgh48eP0zi/5l3oOI7j/L1w4dBxHMdx/mTMCMTYwxuEaa0DB/6ohmqnTrurB4ldh6hhmYQZoJUrV5GuXbsFBnN9+frrr1XkwyORnXjjxnNeeRqIJgiQlStXUoMTr8ahQ4fI999/p2Ii5zNnzpFWrXJuRED+duSnHdYGI36exK9J82exI9YtrzptS535BybjIyl+UtjUqdNk0KABur7cY489JJ999pl8+OGH8s033+ju44jTeL7WrFlDBUObYml5xT+jUG8OxMUffxwkBx10oNx//wO6HhwkeWdF2xr9bp/vvvuOXHnl5VKpUiVd7y5JQHJ2DPgxg13aebd27txFfwRJB7uGT58+Xd9p8R3qucfBUFBRmx3D99prn6z7nu7e//LLFh3LeDpG4/CdtLxPW7duLbVq1c66npQX1cDrduDAAVoH2mTjkk/yQYR87bU3dAdpwu1aND87pz/YDIZzm5LtOI7jOOngb5YJh745iuM4juPsEGyV9es36S6xbdq0lhtuuFE6dOioV/ijjZGYCYxBiBqMTDOePXumnHTSSSr6sdYX67ERB0EFovHTYXkD9eAfEux+jEcjHjScr1mzRsqXryQlSxaTU045XQ4+uLsUKVI0MJ7LZ4mgmaAM8okKT5zzPV5Hi0cajrihn5QmSlJfpcPK+i1YeXzmVbftSVL/QbTNJrBta53Jl/XUWFtt7dp1MnfuLJk1a44MGTJI+vUboIttr127Isib9SnD8YGYQVns8EwYY418qE+UeF2IA9a3nLIzNyL8zz9vkdtvv1P23Xc/FfwIsyn88XyiYyf6zDG99KKLLlBBk6motvFFUh7Onw/3kXuMGMh6gk899YzUqVMn47OMUH3ZZZcFY3Sm1KpVS8eJ3WPSMaYQ3kaPHielSpXI853M+2/OnDkqMNv4BJ4J3r2srXneeeeph2Omek2dOkVuvvlG/QGoYkU28MnevIV0FStW0mnU0TLi+UXruvvuHYM6hJ7oPnYdx3GcTPC30DdHcRzHcZwdCOw+jDu8SqZMmRgYqKMDY7euGrzpjMooJngYGJIIJQ0aNJQDDzxQ1yRkqhpiIgIN5eQnX7C8OTBCATGQPKgzayIy3a9Aga06PfDrr7/UHWfxeBwxYriMGzchMLrnBAbzJq3Xzz9v1fpE68t36hMPi54bFpZ0PV2aKPmJY+Q3XiasvG0pd3uQrj7RsPg9ibNu3drg2BiM2akyffpU3YDhm2++lU8//UQ++OAD3RX2rbfeCo435f/+77Ng/E0MxswuupYcAhweXnxnh2PGE99tXCKAWB2jRxziZYt8q2T27Nk6jfOkk06RW2+9TfbZZx8dn4xdE1GS8gHGJ4flBy1aNAuenWlStWq4ezPX09XF2XHgPccPGg0bNpbGjZsG4yrzPfv+++/Ve5r3JuPE7nE4HnYJ3m1LpFOnTrr7cl73f/bsWbouLB6zcdavX6dLVHTsuLsKeDaekuA9iWcuwiG78NuzkV03vBLnBeOyhOyxR2fNy65HsTLYYGj48GEqaDqO4zhOJvj3FX8P3ePQcRzHcXYgTCgBFsTH6DzssMPlmmuuDwzX9EZqEnFjlPPx48cHeV2jXiw//7xZDVE2ZcE7h38YRNPEDU8jbpiSLltcIj3ri20Jjo36K2Xo9YVYs6v8P3vnAWBXUTXg88r29N4TEiAJofcuEDqCoIK/CIoCgoK9i1QpIooiikpRsYNgQamKSO+EUJMQ0nvd3WzfV/7zzbzJu/v2bQsJpJwvufveu3fu9Jk759wzM3369HJrdbHZwA47TFS3WTn22JOkvn6dfmcqHrs6D3Bu+B4Ukwj8QNgEH/KJz4aGRj0XFEy44Q0pVj2kB8tIvxtpKtWq7rHSYddSrIn8+mWaEuc3lmkhbVFwh4VQNluoZMVSj7j5OBWDcPN548MBfqPU8Pf5mwknkcDyzls3+XN+52h/P3AB5S0WVezOjOWcV+T2HNKTdWVPOPlyJQ+zmjcpF2519VoNLytNTQ3uHG4pV5Qo8+fPc1ZdNTU1bg1M8qmhAXfUCZQtfldp0oAVIdPxQ574sszXN8oSonGBfNrzhOt84jf1i93E2RADf1ASXXjhhXLkkUe6fA7gDqJKwSihDYR7Xnzxebnkksvk6aeflF122cX5zXXiaGz+UFb0ox/5yEfcxiaFaw5GaWpqkp///Ca5+eZfOuUwiuxQzyh36sSiRQvl1FM/LNdcc507D1wrVh+effY5+cAHjpdJk3Zy7YJ67A+RtWtrZOjQ4XLFFZe5adQhnMK6Hvy+99575fLLL3X9FQrx4B5wQ72nTj/33AvunO9v83U86j8Wlccee5Tr91HSG4ZhGEZHRC0OTXFoGIZhGJshCHlMt5w27RWnBPniF7/grAcL6UhwDTA1DuVNVCidP3++fP/71+Z27FytAmSZWwcxKPk4gvIEobNQoC1GEE75jMaHe4kjwjP+Eh8EXSzDENarq2tzLj0jRgyX4cOHS1UVlmiVzprR+4f/KP7SOohBcRZTv1rdJhX4HY8zzZX8SKn/Tep3i3MbFIfNzU3620/vI1z8ZDDk04airLWNQB5FbykKt3aWNfhNOF6ID5sqoLgq1fxFoehc8UfdoUws03NecciBG8ohn//EzysOy8tRxJXpdz/lfENhI53S0qSLW4DgyEONqSxdiqVoq/5u8RdzkNcoMVBuB4tB6hmQ3qC4KMzTUJ+i5/Pp65hwH1CPoHfvvk7pjCVt3759nXLv058+z01LDkTv6wxfNnkrsiuvvEIuvvhSGT9+nB7jneVa27IwNmcod+rgypUrndU261vussuuuavFmT37LfnWt74pb7zxhrPIKyxrdl9G6ce6rv37+zUuoaP+96ijjtD2s0Lrpp8WHNxRfxcsWCinnHKKXHHFFW6TFM5FlX2A/9yDUv7888+Tl156yW30whIRIW70fSxB8dpr0+XWW38tJ598yvr7OoLnyQMP3OemZAelpmEYhmEUYopDwzAMw9iMQfDjwOIOoQ5BdsyYMXLQQYfKj3/8o5wr7w46ExIRDIMSsFA4nTNnrptW/Itf/EJefnm6bLfdOBk6dKgK3RmnsAvKnfDZXQGzUFnD7+AHceUacSIuKJsIj8vsLl1Xt84dWLehFEPZFw0fK8Vs1n+qb05pRVC4CwQrN6w0sXrjGp9YwWERybVMhjiwu6iPp984hu95f4AwsSzUEPilh/eDvI+mqxg+DyhL/xu3Pq5+6gf+hXzimlcC+t+BjgR7LEajad4Q8BbLTBSR+TCIY8LlDefYrZv8pC56xSBheiVoUDTznQP3oY4Vi7NPf/vzXYHf0TpOnhCXxx9noweR8877tFxwwQWy444TXb2FUDadtY1ioFT/6U9vlN///rfa5sY66zMUNSHuPfXPeG+gvKiHKHybm1vluuuuk2OPPTZ3tS2hfi1fvly+//3vyQMPPOCmEFPHovUVP5kGf8YZZ8iVV17t6npndeLmm29xdfOYY45yFrG4xQ/q6Ouvv+HWsP3lL292L0ui/XQh1dXVcskll8jdd9/plq+IuiMOtE2mRp922v/J1Vdfk7vSMffc8w8555yz3fqPHfUvhmEYhmGKQ8MwDMPYzEHA5EAo5ZPpoOywuf/+B6sQ+R0VOvd27hB6oxQKsdwbBMMgIBcqYmbOnCFvvPGm/PnPf5JZs2Y4Kz4W7WcNOoRc7g/hROPUE4ET94Ho9yghTh0pnjoixC2krRheydY2Dm3D4L7iCoCO4tudOPpp1MX97Qr870k+bChkewfZ1qbcC/OB39F6RFzb52vPCPcX1lHOY61K3SQa69bVyJe+9BXZddfd5OCDD3Z1NUrh/R0Rje+9994nP/zhD3LrGQ5ziiP8KRYfY8th3ry5cuaZZ7kNp6qq/BTkaB0NZYsS7s4773SKYyyUo+ttBqqra5yi7oUXXnT+cHRWLwjn/e8/XtauXeu++0O0P1+nfWupXHbZFW6nb/qJzvxhx/3LL7/MWR9i5Uu4UbDirqurdzuUhzUagb40EK3DO+000a2zGBTthmEYhlFIVHFom6MYhmEYxmZIEDIBgY/NHYYPHyZPPfWkHk/IunV1svfeewmblOAON0EgDvdBse98BqGX74MGDZLJkyfLMcccI7vvvofsttuuMm3aNCc8r1mzWoXPvKIwCJ5RITcIsdGwCuFaVweQDsASBuG3Owf3cES/4w1TlcNvb6GYj19IT56216MUxjMc3cFbR+Z+FIG4tY+Lh/P59Gy6A4vDYuc5iJd+aHm3Tz91IPobwmdPiKafz1CffPmxfmGDrF692lmk7r33nvLhD5/qLAz/7/8+KhMmTMhZQvq87Gk8cDdz5iy54YYfyc9+9lNX31Eakjb8C/W8u/4Zmw/UI6zzWHPzzTdfc/3b4MFDirY3zqFkQ4H34osvOEVfocUhhL5w3333c0sqFPML6IuoO7fccrPbMGrgwIHuXHCL0nD16jVuTdd99tlLf3e+3iDKSl7wsKYoaYr2v8B1dn1eu3aNU0RSdyHqLpwjDvPnL5D//e8Rl4ZovAzDMAwjwHODZwSbo5ji0DAMwzA2c4JwijKN9bpqa2vc+oSvvPKyCpwVzsIEi6tCYbIzYZBrHFFhEuuTcePGOeXhkUceJfvvf5ALc/r019y6gGw6wnRaBhHECRC2CZf7OQ/hGnQWh2IE93y+s6OtH/rL+Rvw56IU/t44tAumgHz82hOuvZeHj4f72GiE+sGn/86UcpQ2fro2dY3ppew+i4UX8Zg6dap8/vNfcGsYHnro+9w04gD1LtT9EOdC8LvwGutsPvLIf+UHP/iBPPjg/c4aDQVPcFfYnowtC8qR/m3AgP7y3HMvap821b0gKawL4TufvIh5/fXXnZIOZRx1IOqe7xy8yGFjk6g/hXBt0qRJ8vOf/9z12xD8wgoZK0HCQAnZ0S7H0bDfemu2xu01/U2/WzitGSWpVx6ee+6n19/jw8rHkbZCWzvqqKPl61//huy66y5uOrfVdcMwDKMQUxwahmEYxhZEEP44UOQxjRirk9mzZ8tdd/1FVq5cIcOGDXW7EWMlg7AZ7usOUXcMEvjNdDjWPDz++OPl7LPPlkMOOYSresRdHFBe1tfXuamjrAHHjrkoXhBAgx/FhNEgCPc0jsaWRSjfQLScw/RJ6nCYCs8OzV5h2CQVFVXOChaFymc/+1m5/PLvyoc+9GHZcccd3ZqLhXB/ODqCOhmtjzNmzJCrrrpCrrnmKqdAxPKKuIT62ZlfxpZDWN+0trba1a8PfOBkV+8KCeXNJj8rVqxw1ngo9XAbrQt8Z8o8Cm4Uh6yFWIxQ36iz//jH33LLP1Su7xsDixYtkkmTJjsFY2d1jg1QUGq+8sorHVhD+jqLgDdp0kQZN2673Pl82kLdDu3gyiuvdC+cKisr2sXLMAzDMHg2mOLQMAzDMLYQogJd+I7yBaEVy5dXX31VHn74P7J8+TJn2VJsR9CO6Mhd9DzT6kaNGuWsEI84YqqbIj1hwg4qnHorGhQvM2e+5QTq5ctX6GeT3u+FU4TUIKjiJ+eZNuw/24YdBFtj86OnZUOZ4z5a/sCmNw0N9U7pTF1huuabb74phx56qNu9GEuoM874uHzkIx+R00//mFOosNZclMK4dDdewd1vf/tbueGGG+Tf/37ItZc+ffq681zvrl/GlgHFyVR8dt2eOXOmnHnmma7PLEaoV2xG8tRTT7kNTVAeFtYJXpwgSO222+5u06piBMs+mDFjptuJeciQwW3qLkrJpUuXyO677y777rtv0boXzvnPrDz//AtuA5+gcC8EIY/+/8ADD8qdyfsRCL/Lykrkd7/7g+yww/YuTcX8MwzDMLZdTHFoGIZhGFs4CHkIoQifWLKwMP60aS+pgPq8PP30M87SJTr9jYc/7vkMFBMUOdeZAElYKBH32GMPed/7DpOpU4+SvfbaU8aPn+COXXfd1VnXoCBqamqU2tp1bj1GFEUNDY1u+ikKRhZb9mvrEaeUxi0ftg/fpy8ooOzYuAcUOx89yHsGjHyiBOFcIHwPihDcUbdYSBslBNZdDQ0Nri5wUP7U0ZaWZleHWNPt6KOPkb333ld22203uemmm/T30U45jQIRi8NoeFE6Og/EJxwQ3PL5hz/8Tn70ox+7z7VrV8uIESOdJVdIQ2f+Glsmvlz9TutLly6Vfv36y/7775+72h7cjxw50lkCotDGkjpaN/ikatXV1crgwYPUrwPc+VCHAtF72Jn7L3/5i4aNgtqfxz19N+3l7bfnycEHH6h1vq1iMRB+9+7dy8XpueeedZaCQTEZwB3W3/Sp++23n/Tp02f9+fAZ9Zv++i9/+bO270Qba1vDMAzDgKji0HZVNgzDMIwtlKigh3KHB/yKFSvdzpv777+vHHPMcU6Rh4ImECxLOKKWYN2B8KAr4fKNN16X5cuXO4sddoJeunSZW7SfjSew5kGBuG5drVvjC+vEVIodc5vVX9a4IwwOL1wT1IbuSmwUhw0gyF82PMkVaTvIdxS7oazZFMLrnMNmLqz9FtbHxKqQdQpLJJlECVEqvXr1dgoTdm4dOHCAHoNk2LDhbkr9iBEjnNIkKF0Kwf9Qt7uqa4WEOgrh3qefflIeeOB+t9Yc1oWEz7VoOMbWC2VMfUMZyOYoTz31dO5Kxzz44ANy9dVXO4V3mLIcwD82PMHi+tprr5Odd97F9b0d9ads6nPiicfLnDlvu7U5Qx+MP7SRBx54SO677z457rjj3LVoWIX897//lYsu+pbrO7E4L6y7KOu5/xvf+KaccsoHc2fbE+r9Zz7zabnnnn/K9ttvv/4lgWEYhmFAdFdlUxwahmEYxlYCwiBWKAh/ixcvUsHQW+t97GNnyKmnniYTJ07MuczDPbCxlCfFBGiszxB0EWqxQkSQZi07b5FWq79b3JqJbL6CUhHLtOAFgxYfRVPuvHPISPIx4yyTYrG2FktRqA4oCmMx3La6317ZgPVWqR5leiScRRbrDjL90ysLq9xalyjosGLiGmuosS4nSpJoPaOuwMZQVgRFSJTFixfKnXfeJXfc8Sc3jZ/4sTN5YyNT6du6NbZ+sHaeM2eeLFy4yFm9FvZ9/OagPrI5yte//lW3+zD1trCO0p+x2/dll10up512WtH6F+V3v/udfPzjH5djjz3aLe1AP42ijnhgJX7eeefJ9753bZdtAevdSy+9RP797wddGyu0OqS/JJ1M9//qV7/mzhXGLSgIOXf77b+RL33pi26TlFTKFIeGYRhGHlMcGoZhGMZWSFTwhZaWVhUSESQbpbp6rUyevKsKnRfLjjtOlCFDhjg3wD2wMZQpQXHYlSBdDO5BqPUWOZzJ7/psbFzI5+6UD2XC1Efv1NcTpjYGK0P8QHnB0d3yDvUt1JGe1pPOoL4sXLhAbr/9t25KMr+xzGJqJ5ZY1K1CZYux9UM9YK3MF198UQ488AC5994HnEBEnQj1L9TL8Puaa66Wv/3tr85NoRUg7aemZp1MnXqEfPvb35GhQ/P9aTFefPEFOeqoI2WHHXZw8SCsUP9bW5tl6dLl8uCDD7npYF3xz3/+Q77//eukqalB/apo136w6ub8Nddc6+JXmE7ygu8cbKzFBliNjfUycOBgTVfKlIeGYRiGI6o4tDUODcMwDGMrIQiDgFDKtFGsw7D8qqrqJatWrZC77rpLnnzyKfe9tLRE+vTp124DgEJlXfRaVwS3PbknwD0IrUFQ52BtMjs2/kGZd/eg/kQPzuFHKCPKrKd1JHp0h6BkgaD4KOTll1+WW2+9Rb7//Wvl6aefctZc7A6OoiYoQ0wpsu2C0njUqNHy738/LJdddpmrC9F6VVgfmab8yCP/VTd+M6roNb6jPMTSdv/993NT8TsDy9y3354jr776irod6O714fsdk1l/cfvtd5A999wrd0fHEPazzz4jK1eudG0xGi/g55o11erX7m4DF38un7bod+K/dm213HHHnTJ58iRnHW5txDAMwwDGWzyveKllTwbDMAzD2AoJgiHr0CEIojxBuGXTiXnz5sovfvELOeecc+SLX/yc22WWBfcZHADug3BZqEQ0jHcblDth8ApRxUZNTa089NCDctVVV8mnP32O/P73v3NTQQcPHlx0DThj2yT0ZWwwAs3N9e4cdasj2EG+vr5xfb2Lwr28mFmyZInbrbkzCKNfv4Fy4IEHOkU7FuD5OuzDp67+61/3uO9dwY7248dv55SZxfpn1hqtqCiVN954Q9tHjXPXWTrZ0Rl/WDrCrHENwzCMYpjFoWEYhmFsxQThmMMLu+zCzJpzle73K6+8Ir/5ze1y1113yNKlK1R4XOemJbCJBdc7sz5B2MSNYWwKCutXVKnB1PvbbrtVbrzxp/Ltb3/bTUEdNGiA2zWXacncF+61OmoA9YC1PQcM6C+//e3tcu6557n+raN+jPr2+OOPybx585xirxhMC6Yv3X333d1nMfAfJSP1ctq0abJ69Sr3PUDfXFFRJk8++YR87GOf0DrcL3elOCwRQB/9xBOP670ZF89o/PmOnpC1YqdM2clZWXbWBlAysnHLrFmznIWu9euGYRgG8Dwwi0PDMAzD2EZACCwUBPnNNLfttttOjjnmKBk/foLcffef5ctf/rqcccbpcvbZn5JrrrlK7rzzTidsFyMoFRF8mQYIDDAYaBjGOyXUL+oq39nU5Le//Y1ceOEF8n//d6pccsnF8txzz8ghhxws++67lySTJa7+Ra2rTAFiBKgL1A36PXZ5ZyoycK6w3wrfL7roG7JuXY1e98JT1A11knsXLFjorFw7ItRjpiiPGjXK9afRuo2fvXr1lZaWlPz5z3905wmrM97//hPVPXFpbyEY2kt19WqnDGTTk85gbcODDjrYxYv1rAzDMAyjELM4NAzDMIxtGATUlpYWN5V5wICBbkdcBNn58+c765jHHvuf/PGPf3JrI86ePVvvYO3EpHMfBNTwCeF3AME6CMcQroXzgehvvkP0ejEK7+nKfUcUxu29JqQf3qs4vZP8DAQ/oumJ0pn/3MPu21hn3XXXX+Tiiy+Wm2660a1PN3fuHGdNNXr0aK2zA5xbLLCiyhjD6Aj6r5UrV0nv3n1kn338NF3qTLTvCnV26NAR8uyzT8u8efOd1SFuo30d/Sc7dg8bNlymTNlFEgl/LdR9CJ9YGbL24LRpLzp/UHQDbnnxMmHC9nLrrbe59Re5JxpWlBDfF154RmbMeMPtrlwI12tr61x89thjT3XTJ3elLYSNxSKborz00otu1+aoNaRhGIax7cLzhuccFoemODQMwzCMbRgEzCDYAoIqgiOH31QioQJojVuIf/r0l+WBBx6Qhx/+jwrTT8lzzz0nK1Ysk1WrVjlrMDZbaW1tccIowjkEvwvDiX4PhHNBaC/mJkpUOI9+7ykMjLi/mJD+XkBcQno2NE3vlHeSn4GoHyF/Q5oK/a6vr9c61KD1abk888yz8uCD98vtt98uP//5TXLffffKokWL1I+0U4D07dt3/VR7/IWo34bRFdSbZcuWyRlnnOnqTqifhVCfUDI+8sjDbhpvOBdgs6AFCxaoYJWVI4+c6uolfhVT+vGbFzP//e8jsnTpEhk4cIATyDiP4pAp1DNnzpLPfOZ86dWL9Tmp07mbc+B3iGvfvv3k7rv/qm6r2oUVlIGEM27cWNlppym5K+0hPdz/8svT3AujXr38OpCGYRjGtk1UcRg75JCDir8GNgzDMAxjmwTBNHyG9bMQLJnKxq6bTGdjIJHJpN20PxSMiQTTnseqcN1PhgwZpoLqTjJixEh3HwcKn7DDLcI2u/Jy3hQ92xbUHTZhYJro0qXL9HdKv6+Thx76j6xYsdQpYVg3rqWlWetYxu1GW1ZWLpWVVU6Jwv3UG8PYUIJib8WKFXLKKR+U73//utyV4rz55utuOYexY8e7Po8+EUL/iD/0bZdeepkcffQx7lpHMKX5K1/5ivz73w+6/jKVQrnuLb+p19T9Pn16yx133OWmNXfF1Knvk9Wrq6Vv394an9zJHPStCxbMl91331O+9a1vO+vKjrpbwv/xj38st912s6ZlwPo0GoZhGNsujLmY0XHSSSeb4tAwDMMwjOIgGCN88skRlIDBQi+T4fDrfjG44JNpz+waypQ3BhvZLBuyxFXoHiuTJ0+WoUOHuqNv3/7OQnHo0CFSVlaq/iacgojvQVHJZ1AshnOEiTUjYbFJQLDK8e747Zx3CwRt7sO/ju/rgYc9An/z66Xl4byfukgaQ/rfDXx+5D/Ja+LSMT6/UfBF8X74deOoDygBa2rWydq1a2X58uWyePEitxnD888/76ZTUodGjRrpyr6kpFTLI+EUF9QJPkP9C7ybeWJsnVCHeBGycOFC+cIXviiHH36Eq7fUN66FPo5j8OAh8qlPfUJWr16r/VafNnURd7wEWbFipdux+eyzz3EKutCGsfqLx5N6D2057vx/4okn5A9/+J07V17upwUHP/GLzViwIrz66u/JyJGjnDt2Stbuz7VJwsR/NgK67rrr5LHHHnXWi9F4Ae4ID2vdwYMHyTnnnCe7776bhlmm57EIj7k2Svsjbi+++JL88pc3uXjbdGXDMAzDFIeGYRiGYWwQCKeFihvOhQO4HgRwzjHwQJGIpRmCtHfn/WDqHgpAkbiUliadkB0UlBDWDAtCN8IwCsdUCqHYnyM6Pk7BgrG7QxuUoQmnrCK4XPTbQdgbH/KGDWV8PgRCnqHUCAL9uwnZh3KC/EepEMq0GMQ1FkNBgiKjbTpQdqCAQIlM+bNeIdPYOefLMi5DhgyWiopKd46wvH8+/eG7YWxKqJsstUA9ZLd51h2k2lF/aQf0V6WlZU4BTl8TlmCIQn3lqKurc+4GDRqov/G7JVevUX77toyFNn5Q5yH0c1Ho47BMbG5ukgEDBqmbmOujfNsgXv5AyUgcU6lmjZtfLzFKaLs+brWuDaJs7NWr0vnH5aDcJ26E09TU6L6TVsMwDGPbxhSHhmEYhmFsdBBmvVVgW0s5vkcFZK4HYTsop/zBWip56zXOBaLfg//5c9yb+7qe7g9v1DulI/ec31QKrI78RnHWfn2zdwcCzcerM+Ud+e8vF3eDchDFLH6giAhHSFuoB+D9aqs4NIxNDXUN5RtWsdRHvnPOWzPn+5iwpmaxehnccA2FIMs5QL7P8+0puOM8yzUUUxoC8cAisLWVpSH8jvahrRAG93m/ss5KG2VkdyBuKAn5xD/u923Rp4u26de1fXdfVhiGYRibJ6Y4NAzDMAzjXSUIzVBM+I7S1fV3F+KyqYZKm9LvzYdo2UP4vXmVs2GgQMt9jVBYf7uiq3rdHf9wErzpzL+NGbee+mUYhmFs3Zji0DAMwzCMzRYTYLcuTEFobBkUs1zuef3tqv/amP69l34ZhmEYWzdRxaHZohuGYRiGsVmBAGvH1nMYxpbBxqm/xfyIHj2lmB/h6CnF/AiHYRiGYXSEKQ4NwzAMwzAMwzAMwzAMw2iHKQ4NwzAMwzAMwzAMwzAMw2iHKQ4NwzAMwyjKplxr8N1ax3BThPNuxd14b6GcrayNrQmr04ZhGMaGYIpDwzAMY5skCFCFQlRHglXUfXePQgrPFXMTJepXOKIUu96To5DCa9F1r6LXom66S/SedDq93u8N8asYwZ+oX3wnnFQqtf539HpPCffjZ/ge/AufXRG9Lxw9odj9HIFi18LREcXchiNQ7BpHVxS7p/DojEI3Xd0Trhce3SHqlk/KOVrWG5PgZ0dHdyh2Xzi6otg94ShGMXedHR3RmZvotWLXCyl0H46eUOye7vgVdVPs6A7BXSaTcZ9d3Rf1PxxdUei2sE6H84ZhGIbRGaY4NAzDMLYp8oKSF54AwS1870hRwPl4PL5e8OrsKCTqH9dRnEXDLCTqttDfcC3cWuimu0cU4sIRj/triUTCxTFcA84Xpr+j+BcSTQ/f8YfPlpYWSSaT7nsIZ0OJxikchIO/pIe0hXPh+oYQwuGAkCfBv478jYYZ9SP40534dHR/8CPAz2JuOgtDL7dzH+7h4Hu0/KPp7sjfcF9HR2HeFRLuDwR3nd0T/I4eGkyH7gvBHXWGT/8969pC+M3xTgl++LqYcXFMJOLuNwfhd9Uegh+FaQ10FM/8fcXziiN6L985Qll158BtMYI/AdxC6Gv4DOF0RT4dbcOGEOdCoufCdz65L3pPoX/FiLqJHj2Nf/jkPr7TJxYDZ8HbEFYg+FEI5/PxyqeRukV4fAZ/OvLDMAzDMCB2yCEH2ZPCMAzD2KZASEql0tLamtKjWZqbm5zQmkyWSmVlhVM0odDiyN2hAl1rTsDtWiiEkpKkHiVthDXuX7dunRMOS0vLpG/fPs5NVICDcE9rK2F6hR6k0ynp06evs6DTy3qkXbyi93YX7iHsIMgTt1Sq1YXJe8X6+joXNgoN8qO0tNS590Jo3P0G4gldxQH/ffrrpK6u1uU/+Tpy5ChNf1bKyrz/uOlJenz4CMXEP+X8bW5uloaGBvWXc5RrQoYOHeq+l5WV6W/KpeeKSvKmqQm/6zV/6l25Eee+fftKeXm5yxPyqrA8IeQTZR/KlFNkP/fFYl5x0FHawzXSxvecd4pXxhA+4ZIH5GH+uof0VlVVFY2br2eF9+T9xU/SRZ5yzrvLtmkjHcWb8Egzn/l7ce/rRGVlZdF7Q3r55P66ujr3SRqqqirVr6TzIxB1T3ooa37jhvJOJoPCqng8cUtbam1tcWXb2Njo0g2jRo2M1B2v6H4ncL8vq1YXDu2NeFKXgHyqqKgoWlYh7FAehVGhXpFe2m3Ik0D4jb9NTU36HUUl14mPz4PS0nyfAJQR6a6urs6lPXehAwiOe4h/1B8gfK5RPhzUZeLC+Xg84cIpLy9zYRCv0Md0RGG9JWy+05eQlsK0h/RzmrRzb3Mzirqs5keLln+zhpvVOFS4siBOpLkwHUBfTH1Rn/yJHCF/eY50RIgHbbKurkHrQINLO+GF508xqIPUGSAN9Jvkc2cQDu2G8qYNkefEnXQNGzZC/Ui7Nu7zioxsmx7DMAxj28U/q1vkpJNONsWhYRiGsW2AsAYIiwjczc2N+t0Lp+PGjZHevfvIzJmznJtVq1bI0KHD1gvRKBC8wsZ/dzJWF5SWJp1Axv0Ikl750SCDBw+QsWO3k9dff1PDWabC2/CckJoXTokr4dTU1KmAhxDpLUZSqWbp06e/nsPPlNTXk45W/e2Vj93FC4miQqpXdvG7urpGBwgp/V3mwh47dpTmSZWsXVur19ao4OkVlF6B2uoEfJQ+QdmHsBv8hZDffPq0r9PvMenfv58cdtj7ZODAgfq9v1x99bUuDsjKFRWVToCO+tMVpNuXab3Gm3h4pcmECRNkxx0nqN/lTln7r3/dr3FNqtsWJ2xXVla5PA9CfEeEdBD/+vpG/S0yceIOsu+++0rfvv1l3rw58swzz8nKlSuc/wMGDHBCOfEqzA+E/traupxiwIftFSUpl/ZAYXxCHEknwn8s5pWTvl5wHUWFV8AxwKP8vP8oZbwSu6GhVvN8iMubAP7iD4oyr8xMuHPhnhCvRCKp5d+g9QP3XlFDvcQv4l9MsRL8QTHf2IhChrxHmZdzoHHnO/6gLClWBviBwoN87927l2unCxcude2mf/8Brq4EfHi+LuCe7KHNUD9pK14ZRDzbx5U84OUBZUMeDB06WPbZZ293T9++veXmm3/lyqykJKb5UeXCJTwoFu+uIDzKsbUVpTbKQu8XfqLQop4MHNjfnSeYaBikz/cpWY3vWr2/3J3DnVcC+jrRq1cvl7/FWLeuVv9SHv4FhPefOKCIyvcJoQ7jpqGB/pJwcNcZvq8qKUlo/gWFlE8b/QAvDog/dQoF8KBBA1yfsnbtWldPglvqW+hfaK8+Hj7sEDeUrpQz8SJc4Hzv3hUuX0PYwL20C1+Opa5P84o4FKP00zEXF/J11ao16idtJ+XiEO2T8Ac3PD94icDLJtyGoKg/GqP18S6E+4Nf69bR7tLa147R/mOlHqtcvo0cOdI9b3DH4cNMu/QS30zGW4VnMi2uHwvlBdE8wm//kqNB3ZfI5MmTZLfddnbpqa1dJ3ff/Q+XRt8fktcoan2/YhiGYRimODQMwzC2ORCoUBiiRNpll13lAx/4gBx++BEyevTonIs806ZNkxtv/Ik8+eTjKsAPUiGzVi677DI57bTTci46Z/HiRXLxxRfL008/5RSQa9eukcGDh8j3vvd92XvvvXKuRO644w656KJvqaDbW/r06bNe6ENARLj+5je/Jaec8kF3DhCuUUydcMJxsmzZEjnwwEPk2muvVcGvMic8dw0CJX4/+eRTcvnll8jy5ctVAM2oUDlZvv/9H8i4ceNyLouDcvHf/35Q4/5nefbZZ53yD0ETBVAQXoG0cHhFV0zT8SE5//zzZciQITkXeWpq1mr+Xip/+ctfZPjwEU6Q5d6ofx2B0F5bWy3773+AfPvbF8l2243PXWkPSqgf/eh6DefPTrmEcoW8J/0dQTywtho2bKh86EOnyamnnuqUnoW8+eab8sc//kHL+Go54IADnAKBMglpoEwR9r/xjW+2KVMYPXqUxqVK0z7cKVcKFXHEAWXkjBkz5NJLL9V8/GzuiueWW27WsrxM83awHHPMsRrGt6Vfv765q55nnnla43WgHH30kU5RSBgoUojXSSd9QL761a+5vIhyww0/lCuuuEp22GEHdS/y1FPP5q547rzzTvnudy93cfdKhzzEGb+pr5dddoXW1QNzV9qyxx67untRMkUh32pqalx9+c53LpNDDz04d0XkvvvulU9+8hMyceKkNvXEW4wl5NOfPl8+/vGPr8/HL37x83rPvzR/Rzr3bfHlizLljDPOlLPPPkfT0zYfYPXqNXLVVZe7NjtixEjnHgrLqjugJDr00EM1XZe6si/k/vvvl+OPP16PYzRuNa7eBIg/SqlHHnlUj4flsMOOyF3xrF1bLRde+Fl5/PHHnPKcMg75wycK8MrKXnr9CXcuyv333yc//OF1TqkULE0HDRok//znvUXyrXMmT57o+gZvpYiirdkJIGed9Um54IILnGKvY7JaXvdp/bpD6/xMra/rnKU1eY1f5MeCBQvkiCOOkNtu+3XuHs///veI9ptfd/0U7Tuv/PSKQxRks2fP0fY8SPuMA/U5cLL6MzV3d1v+/ve/af/6PXcvyjngO4q4CRPG67XrZPz49v3NtGnPa5s6SfvS7TTs9m0ZpfysWbO1TRwkN9/8S22r9KGi+V4rZ555uvYlM9YrD8k/+hH6UdzTx4Vn1sKF8+TYY49z7TYaPw7SzbNu1KjR2h7O03Se5NpGIW+88aZcc81V8p///FvjO179eecWtYZhGMbWQVRx2PPRjmEYhmFsQSAEIThiHYJV2HHHHS8/+tGP5eMf/0RRpSHsscceKjiXuoclQiyWTP57e4oJWQh5q1evUgE3rAvmLa+YThvlIx/5iHz2s59xQnAQigNYQKFEiiq1li9f7D7xM51mSibTUv09CNPdOfKKDm+dhTKN8+ee+5l2SsNiaUPoPf74E+TGG38mF1xwoaxYsULjU1zJt2bNGie8f+tb31aB99vrlYaF/mK5d80135fPfOYzTign/4LCoSv8oKbVKYGjSsNi96IMIS6/+MUtLg0oWYhjMeUP95MvixcvcWVx002/dIrPQqVhCAfF63e/e6V89KMflVdeecUpKaKQP8SV84Vxq6+vKRqHQojPnDlzcr88KBeWLl2m11AEpmX27Le1TJbnrubZd9/93CcWZaFOEQ/CxfKrSPHJffc9ICNGDFd31H8sB5tyVzy0CayvUBwXg/tKSsqcYrEjUAgF6yq9w5/MQfw4ysraKpkou4suukTz+VVXv6jH3q2fCs5U+Gh7bWhoctcL4RQKQerllVdeLV/4wpfaKA2jbW/gwAFy1VXXyHnnnecUmihlultHo4R6MXnyzk4ZXYyglCTeZEs0DPIpxKtYm2Oa7k477aSf5a5tBzfhHsqwqqqX+14I9dO7i6bJf3/77dnuszssX77UKaepr0D5UC7ve99hctZZZ3WqNPThx1wZ//rXt8tXvvJVlx+LFi3UtPhlE0gTeb9w4UJ/UwSUwHV1hJ1fazDkH/6glKM933LLbXLDDTd2qDQE3y7ylo55fN9AHIoxdOhIp5xtaWnbB+QJfqJQzddTXh794x//krfeetu1mRA2ecKBpbm3QPdQl/JtxxO+o3Deffc93LPulFNO0Xaevy/UBdhpp8nyk5/8RE444XjtN5a5+lE8zYZhGMa2jCkODcMwjK2aoBzDauVrX/u6XH75FTJmzBh3LQhlxYQkrAVZu45LXhgrLkgVuxfBOFiAcB+3o2Bh/TSICm4f+9iZzmoFBRzCKP6hzOHw09LybkkL+DiH+HfP0rCQvF9pFZCr1gukIbxouFF82Fkn5H7uc5+XAw882FlQReG6X38tK6effoacdtpHnJDNb45A+I2fKPW+/OWvaX6c4SzHuD8qEBfD52t+DchANByUIeF7UNqgRLv22u/Leeedr3le4hSVwU2A/Ec5xBTZ6677obO6gxDfKNFzv/3tHzS9H5X58+ep3+0VS5QpVpKFhLLvDOJUmCX5uHhLUqxdZ86c4fwKh88jP+TDWi2Ew3ms/Zj2y/koWD+hpKQN+KmYeYVVoKv4EieUY1jodcSUKbsKa7yhFCrmHfWzqYl1AH18w/H5z39eampq16fPk09X23bB+cK65K1haafnnHOes9R0Z9v45/0Kikkse7/0JV9HOYdFZVd1tBAUaFjUDh8+TMvcl0k0PCDPdt11iixdusT1JYUQdkUFa6R6q9LQlokjFnV77rmXDBkytI3ikGso/WfOfEs+8IET3blwX4B4EZ46bUdP0sl0bvoTwgT/yXqmIzTO/dw50lyoXAdfdj4/CBML36985Wtah0ZrebHcQT5yoU4HuMYRVZLhB+eo37yg2XXXXeXuu+/Wz91zLvJhRv2Gt99+25VXYTj4OXbsWGcVGCXcP2LECNl++wnah9WvDz8K5/ATxXpIa9TNKaecLC+/PN0pOjmPW+4hv6J5Vqz+4Z56jaUvLzomTZq0/nw0DMIN9Zr2/93vXuUsOAvz2DAMwzDAFIeGYRjGVg1CF9Nx99hjT/nc574g/fp5wRXhKAhwfGJFNGvWLHniiUflD3/4o1t/CmsmFfOc+44IQuWqVSudpc2CBfNV4HzLWbW0tUjJL9Yf7tFYuKnM5557vob9llOeBaENRUqBTNgGlGWdWb10BeEQDeKEJSTrFkKIG5+sPfb008/Iww8/LDNnznQKvZBfgR/+8IdSVdXbCbEBhFuE4o985DQ3NTHAfeEo/I0gi+LizDPPkDFjxsmSJUtd+joHf0iH35U2gH/Ec/r06fL9718rn/nM+e58UF4SFgqjL37xi87qk/j6jQ48Pm9Qwi2Rz3/+C246YyD4jdCNUiGaBpSU8IMfXCeDBg101oxRhSBu/Kf7iNBVOjvH+8f6exVOAf3888875UGIV1BOAGvVhXwlXqxRyHRU1rbkd4jrM88845TtXqHold8h/t0F9ygN8b8jdt55irAxBfWlmP+0A/IbQt0LCq9DDjnIWXfSbvy9oW6Gw8PthVNGKW/CRDH14Q+f6s6Rdu4nHOoznxzkV4gbiuRPfepsraPbybJlWHp2rfAF3OAWSzymlm633Xbqty+HkL4A657us8++TnENIWzAH8oTpdKAAYPduXx5ug8ZPXqk9itD1iuGQvywpuTez3zmAve7ENpE8Ks9HacRZTjTm5cuXeryhHU/o4roUCb0iVGFLmFx71NPPSn//e/Dcu+997o2WpgfTJE65phjnFusrPHPHzkHEUJehbwIbR0lLOm/5ZZb5KCD8tPeIZQz92KxSL/x738/LC+9NG399QD+8XvMmLHt8iqEDVggoxAvTEtb8u6j99588y2uHQelZT6teTeQSLT9DZQ5cWRJgv333z931vvPQR7iJwfxD/WDJSI++9kLtE71dy+CQl9pGIZhGNDZ08wwDMMwtlgQehCOEL5RXLB+HyBUcS0IakuWLJbbbrtFLrjgM/K5z31OvvWtb8oNN/zIWWx466y21kBRWC/vU586yymgmGZ74YUXqB8XOGXaqlWr3ZTAzoSvYHmGxaEXir0iqmP8Y5t0sXHLjBlvyNe//lW57LJL3Npkf/zjH1Von1c0zL/+9a9y4403uDXpvvrVL8svf/kLFWybxK+PSDza37No0QK59NJL5Ac/+IF+Xi733PNPl39RmOZ55JFHypo1q1y8gOl3rNd38smnCBtfFMaHqXFnnfUJmT/fT71G2A3ppqxYDw+LqqgysjO4N4QdhenRDzzwgPz3vw86q0HAbRCuUb5gZcPmBC0tKDV83eBAyYFS7ZOf/JS7LwpTg2+4gby80ilUAyEOTL/96EfPdIpov/nJphXAmSquNdspDpm6yHTlaN6FvEVp/tZbb623ZCK9WKiR54X1DmsrrM8Kz3cX8pj8GDXKr+FXmAfh96hRI9Stn75dWLeKES3r7373Glm50q/Rmad78UUpQ92dOvVoTWfYbMaDcu/yyy+XK664winECsHSb7fddnHxKJwq2hm4xwoQCy/aR0dQJuPGjXX+Ri3MyCOOoKCOKss9Pk8pZ15I8JtyANIXVTTxO8Q7lEVQHBYvh7ZpJB133XWnnHvuOfLZz57v1lW88MILtR88T77znYukd2+/JmGUXDDrIXzq2fXXX6/t6Sdy8cXfdWunFkJfh6LVT0vvaPpvcXwaY9pXvuWmPY8enbc2j0JfeuWVV8g553xK+8evaFy+La+8Mt09A6LpIO/x0+dve3/Cb9YLZHmMDYH2OGXKzgXLKHRdx0LdoPxZ8xWL5yj0CVdffbV8+ctflpqaancuWtYo+UeMGOWUp/gV6odhGIZhFI44DMMwDGOrAKEH4Qfh6+qrr1o/rSwqEP35z3+UY4891l3HymT5ctZ4QhHg18MLQmBHsBD/v/51rzz66CMya9ZMp5Rh3a3Vq1e76x1b73iCUMg6U2zWMnfuXGfp0TUoRb310uOPP+42Fbntttvc1OGrrrrKWatEQRA8/fSPyHXXXec2tHjooYfcRhtYYSEYB0uewuRyjo1LksmY5uMKt1kBmy4UQtzDNGzuIdlsPLD77nu6cyEf2c2VjQvuuutut7bclCl+Gh35FMqEXUJPPPH9svPOO7vpyt2BvCi0KIO1a1c7Jc+ee+4tv//97fLPf97jzkcVAXvttZfbNIR4I0RzoLh5+unn5Ic/vN65jSpvUMpdccXl8re//VUefPA++drXvipz5rzt4h9Vuuy5555OgcoRnTq5KSF8pl4zRTIolyCk98tf/rybfkwdI56kCyVn1CIwlMOTTz7p8qGrNlAM7vFWp0xF3qnNORROUT/33Xd/F040vl0R0nPooYe4sqO+R8u0K0g7Vqr77befHvu6c6Sbg/b75S9/xW38Q/sutu4n0/RPOeUDrt3W19flrnQNSi+f572FNQihWP6iwBs/fgdn3YiCM+qGMsZakl2Xi23SA5TpmDGjXV0ISnmUxfPn59cEDOnF71Bn2UUad1AsXhDOU17Tp78i9977T3niicedkm3OnLfci4tFixYLa2kGuEeD0jynb/PlRNiAZSwKtlSqSfN6iNuMh/4pCn3UTjtNkaFDh66Pa3chnPnz58qHPnSynHDC+925aJppK9/4xtfkqKOOkttvv13b92y3Pi1lRZ2irYS48kn58cnmNlAYn/CbTbDokzp78dQZ55xztva5a3O/ug/lTb0Ma5oGeImBgvd///u3vPrqqzJhwvbuPGkMyuVBgwbLaaed6pby4IVbSLdhGIZhdH+UZRiGYRhbGAjdvXpVytFHH5c74wVvZN8HH3xAfvaznznLMnY8RhnAgvSs99eV8BxAOO7bt4+beoiCCoGd6XAoQqJrfHUEghluBg8eLIcddpgT4FIpFHCdC2x4y70ItYRF2FiZ9O/fx8UHC50obJiABSUbPBBXLHe4zyvcvAUegrK3XMtDXpFGrBJJG2vNoRgotARk91amuuIPUxERmMOagEEohWnTXnZrrBEH4oOA+uMf/8jFAYLQPWTIMLcbqKa0zf3F8EoJlCDthzTEGWVFIlGq+dPf7UQLCMsh70njyJFjXJ4SPueqqiqcuw9+8EPuM8D1GTPelIUL5zuLqkmTdpb//OdBZ7UaCAos1nPbffddZPlyv3blpoW0+CniffpUCZscEM9C9thjX81Pr8ADn9YqV74QVYKwGQYWjBsKymiKFcUekC8vvvii25V41apV68t82LBhPVYchnv5OPzwqU5R78uzayUNaSYs4hPWuSPdwc/XX39Ny3ORtpE+TmnY0tIgDz30b3cNuB+oo/QbWOt2p45yeAvfCq03E12agXDnzZsra9b4lw1A3NghG4tl4ppPr6+ztNXycnaybvuSIbhDKUmfwnXixj2sZUmd+MQnznBucBv1F1DQhd2xQzo7gnt4uUI+0Z/Qpnv39n0hv4OfgWw25uIT1iMN17GaLC0t16PC+UU/9vTTT7trUfr2xX+/S3K0nnZFsAhlJ3P6v1BWoU3+/ve/cxbiWJ+SZyEtvg/PKw2Be4l/S0vauSePKCteTjFFm3YV2v/48RNcenmh0lVeFuOwww53fhUqjjuD+JGfKJ3p77gv3Pviiy/I0qXLNX39tG+e7NqMT4+ftow77p00aSf3kq0n4RqGYRhbP6Y4NAzDMLY6ECwRgqdNe0nOOOMTubN5sCpiShwKDITF6NpeUWGrK4KyKgiLbWkrOHcGcd1jj13dOlO1tXVOgOsK4ki4xDscpCOZRPAvFNpZ56vMKQUIKy8s5hwobN5SLN2c4n7kZ/IVK5jCKXgoUNgQAUEUQRtF3eGHH+mu8TsI31hkoghhl1zWVBwwoLdUV9e6a1FQZo0cOVrjWtalkoA4k1+FShQPaURxgkKtl8yZM9sJ98SH+0K8CCP8Jg8XLlzkzgPXQvliMUmdWreuTgXwCnUbl/79+8uMGfnpygGEbyzimBLYdqOOTQdxJe9Yn3P+/AUq/HsFYcjDSZMma7yrnFIAOI/CHCtPCPnxxhuvu/U6USiGe3uK3wyI6bF5K8xZs2bLo48+6qzMojCdubGxPverZ5xwwomuzHgBEOLfGZSzrwMJOfFEv0lIgPrL1HM+y8oS6mejluFU+fWvb865yINyiXiz0y3uOyPULSxoUTjtttueWk5ecQjXX/8jufPOu9z3oNQdOHCQswAL9TXAd6xjKbfCqajBHS8+UMrzQoG8J3yUjfX1TW6zoijcE+o3+cjRWZkXxoWf0XMdgZOgNGwP4fl1Vnv3rnLTlwshXsFK09OdMH2eT5w4SfN81/XxDJ8osq+55hq3HiHlGfKB/CqWB1zm5QnK7gB+3XPPPXLTTTe1UYizOQ0WoX79zp4r4HbYYUdnDY+Fs7d+77wdEi51BQXt1Km+7yUNnK+pWbe+jyotRZncoP1lzK3hCv5Z4OM4ePAgNy08+GcYhmEY0LVkYhiGYRhbGAhMCM3NzSm56KLv5M56sIR6/PH/yQsvPO8EMqxKgtAUBMcg/HVFN511iylTdnFTJ1GsEf/OhPcoxJn4euHPK/naC6p+g4y26Sx0w/2dDQu8VVtrK1NNvaIkxLG+vlFYIxB/UVAw3XvoUL9xQ4gfu/Sy07Bfx9FdUrdZl/+FYO3DVEvWR0Qp05ngjd8oUAqVKBCPo1xFUYTi1Fv/BKVZACXWrFlvujjhF8rVl156WX71q1vddeLv84s1wprkrbdmO2UEyhmmiu+yy87y0EMPOmViFJRxkyZNcYranljTvRMoD/KBdC5evFg/vYI3KMXHjx/rpnuSZvKUvBg9erSzbouCBVZzc2uXSqSOIDwUgewuC6H8mprq9XyDqwtR9t57H7duZLD07Qn77LO327X71VdfEyxFO6srQBn7NobVXtvlCJimOn36a+4cymisCbEQJG6FykEUtFjFYinXVR5Rf3CCv1gxosgiHgGm0rLkAITzbK4zevSonDLInXJwnTaG9V1noNTEqpe4ET51dejQQbLvvn5qdjFQgvrd1YlDPn7F8deJbmjjGwq3cpBHKGypn4X57ZdT8O3Ih9V5OQN+0AaYjr7ddn5qbmgLcNNNP3Nhocwln6NtvVh6UDbzYuekk7zCObhZtIidzGeuj1+I+w47TJTq6ug6hd2D++k3Pv7xT8jKlWHt2K79QKFMu91rrz1dXQvxe+utWRq/WfqNF02co04ktR9rctejYKU9dux2rh80xaFhGIYR6NmTzDAMwzA2c4KgXCh4Bliz7+mnn1KBrsZNS8P9hgq9CGoIi4SFPxwIbFFBvytC2EzR22233TTuMWEduJ7HKSgvit/XtXcdRzpYVrKrMhtmsHZaFKbGojxE8bN2bbWMHu0VRiFPYMWK5W53awRXpkij4KScglUc8Jv8Q5nYt28/wUoy5GlHcA0FZDGrPj+NlCnlrO/md1VFKenLyPs5f/58J1gTd8JlaiPWODvvvIu7HgWLKKZz+6ngPm2sC7d2bY3LmyikhTJFOYWSakPrWE8hXIJCScsUSghlQL4PGzbEpZFyQDmBZVshL7zwklMmdpbvncF97FL+f//3EfcbZQ3tBOUPCqwQr8AFF1yoeVjrlHHdUVaEaOEn+XrkkUdJXR3rYaL48dc6grgQh7322sf9jtavuXPflqVLF2m+MKXWndJP6lbW1RP/21/AGhbFXNj8pqu8og4A03m5Jwrl8tRTbRWH5EX//n1z/nq/+c518oi+qzOwoOvXb0DunmxOcTjMTWEtJMQdpTNtgLbUkYVbqEtEk/4P5bNXbuat9IJ/7WnfBnAbnKOoXrFijZuWHFXwAQo+FM4h/7uCfCJuZWUVwi7t+F0I03dRpAeFX1ewXmlJSWL9+oZAGKSbZ0DhS4mDDjpEFixY4PqWjp5HxQhpZLmDfffd2y0bwIuPUA+KQXpRUmItCNEyePvtWW55hdJS8pQ1W71V6rp1Nd6Bkq/XJZonQ7Sf7HqNX8MwDGPboXtPX8MwDMPYgsBKiCmlrL1XCBsLLFvGlDIvqL4z4SjmhEmUkawZxU7Kq1evUAG3er0w3Rn33XfP+ml5KORQgGDtsWzZciegbkoKo4ZygaNtnLFuwtKuQdO20lkxsQst6ygiLAdh8447/pRTOGSc0vP88z/jzuNXcPPCCy/K66+/7gR5NlsBrvk1HfOE8EePHin9+vXtUuCmHNExFCoagKnFNTVr5I033nTTdK+77vrcFe9+1aoV8rvf3S5vvjnD1QWEbxQsTDPeeeddcy49xAtrQywLmZ6MUpKoMn0Shca8eV6xFCBto0aNkcGDB7o6EhRCmxrCoS4xHZ/6CEGhA7vssoumEYsuLA79Wn8QypP1K6l7hTsN9wT8YMOVk046KXfG71RcW7tW6upqnXI56jcWX9Adi0OUeEFJHKxVp0yZom3nCJk7d45TfnUEeUO75DjzzI+5c6Q55AEvE7Ao8+uTosTO6PdSzadmV/YB6gIWiSNHjnIWWqSlbbtpD36hMNxhh+2dUjywcuUypwScN2+B+x3iwrntt9/R1cugkCL+hEX8Bw3yedYRxA0lElO4yer6+gbZe++9c1fbEuJOWPSdoa7yWZisfH3x/QWfQRkc1vpDaVyYH0yhLbYOKf4RDs2cTVWwevzmN7/lroU6Qh/x0ksvOita2m2IX2fgL+2yX78+ru2jEIvGCb9QBrOEgabUn+wEwqTdYEVIfQsQBufr6tY5JSGEPGKnfpR0KIG7qh8Q3IT0Uf4XXPA5l2asnYvlH+DeK9Hjcvnll7pzxCHEo7XVrzfq67Wvi5WVJRrn9rvW06ZQprK+JvHpTrwNwzCMrZ/iTyDDMAzD2IJBYEL5dsYZXjlQCFZ9G2On229/+1vyxz/+Wa699jq56qrvyaWXXipf+tLXZerUqc4axyu9OhZKH3nkEbcbcgDrrwMPPECF3GROUOxaoH0nIFciGCKYonAhvKigiAJo6dIl+tksO+44Sc4559NurbCoQLl8+Uq5555/uLgjvGIliHIEguAKKBdY78tbG5IurhFeXoEU9Zf19VCeRKLTAd5yrpjC6MILvyBnn32OO26//dcyZswop4wgnSh7Ocf6ZMQZpQnxRUlUWdlHw4+up+aVGKzviBKQzRxQmJAGhHWuoVgtxG/o0LXyc2OD8L9mzSqnGIVoPUIxzdqDKKNYJy+6ozJMnz5N89IrjKLl1x0oO8Ki3jAFmuUCAoTHFG/qCApdlF8Qyhtqa9e5uhg9Vwhtl13EIaRr1KiRTkmJJWV+KnxbP4KXhI/V6fjxvo7iR/CHeumn6nrlFL+pn1jYrljhy5eyDvFDgc6akRD86AgUtShGhw0b7pRzgdmz5+q19hZvKCyHDBnu6iV5F/Wf4Cm7KLQvlMUByo61+MLyAywlgAItgJ///e9/XTmEcqYdoAj3baTzNLGMwFlnfVL7vz/JT37yU+3/rpaLL77EHVOnHqXtq7rN/d6/3I8I1EU2F2InY/qZO+64y03lJo9DPrMW39NPP6n1B6Vux4rhKNQjXmIMHjxc6/zY3Nk8ixcvci8BSDN1pbO6HuJB3xAs+gLUaablcw0FYuhfolDundXpAFPl2fEYQhnsvvturs2ioCxWHnhL3LHIxN0ee/id7LkfCJe6gfLS72rNOaak09fl+94oKMPLyyu1XnZ/yQzDMAxj66ZnI0LDMAzD2MxBuEJRwzF58k65s3kQlMNOlwhF3RHoOmKPPfaSww8/TI477gT54AdPkY9+9HQ599xz5YQTTtJ4YNHFjp45x0Xo33+g3Hffv3K/vGUKVocTJ05UQbA+F7dOPNgIEAaCZzyORU5bZRGWdz/4wQ/kl7+82a17d9BBB+lZv9Mxgjn5eNppH3QKtbDpBgo3pkgWgsDvrXtQooUjpWWQTx9lF8JnjUB2WSW8rsqoo8unn/5ROeuss+X88z/r4ku88X/x4oVyxRVXyC9+8UunxCHuhMGBYon15QrhPDvfplJNmhYCZPoxVj7kGVNz206/BQRwNklgim7ndJ6+nkCdRlFRXV0tc+fOc/WdtAeYtkk6UbKNGzd2vSIk5PvcuXM1TWw209ZCq7vgD4rDwrbX0IDFIZaOGWeRRn4C8YORI4e5qcLdCfc3v/mVPP74Y7lfKImSsttuu7vNhQinY8ssHx7TePv3bz9Fm/XwsIaNx1GWUDdRqrGGZkyWLVvqHUXAHxR4+NmZgoX0YCXJBkJseOKVk54nn3xK4+wtv5iuHSBc6g7T61GAka/4QxthjdHC6c5PPvmkfP3rX3ffQ/6hIPUKtGbn32675affY2137rmf0jDz9Ra3XrFPW8id7ADcjhkzVg488CDts46Uk0/2/d+ZZ35c3v/+E52/oU5B5Gsb6utr1P1Jcu2135d//OMeGTFiuDtPHLDqXLt2rVtv9LHHHtc0V7Txsyu8VWT73aMB5TV1kXzpDoTLxig77jjR/Q55jEKPvjqVQiG+zvUxhWCN3p16Tbv4xCdOd99DfRoxYpRbwoL24vuR9vElXcTjsMPe535H6+KqVWtk5coVGj7KcJ53vt8N9agYLK/g61fnClXDMAxj28GeBoZhGMZWBQJREN4GDx7qPqP46avVTvDFbVSY7CmEE8KKCmt4ifKiK+GbHZ2nT39Vnn/+2dwZkV133V2mTj1CysrY5OLdWRvPx9PHP5qOgQMHyCmnnOKmfIc11XCLEhBlx8UXf8cpVMIuo8S1rKzUKeIg+IVQiwUo1kzxONPDsXxhnUAscfLhQUjvgAH93Vpb5G9XAndHRO9D8PYKtKzbcGDJkqXqtw8bdyGuKI/YWbQQlAKLFi3Ue1AkIVRjoUk6qEfJNkqfAFP+Jk1iI4zOd95FURVVoL4TyD+s1CgflIAoCKPsvvsuTnFFfCjXsWPH5K542GQEBXB3LbuKgeLwwAMPdN9DGaBcZiow+Y91JsoWCOV92WVXy7x585yioqs6T7t53/vaKkl22mmK7L//AYJVa8d4f0k/FlcQ4kd+YJlF2VI/s1m/lifny8p6y4IFfip6NG6sYYkikLbTVRUlHNasGz++rcXa3Xff6erUbrtNkbvu8paUgQkTttO0DtG8anDhhrjy6cPNQ/2cNm2a+x7iyKYzu+wyRfN9rfTu3U+/7+7Ow3PPvZBbczS/9h9lzsHtIayuIP8L3WJByYZEUTry733vO0wuuujbbj1ApvUHqAek6Te/+bUev3F1uqt1HaMQHmVXLH6AUtLrxLonCnn/sm3qNcfSpctdveYafQpK3nAdPvzhD2r//rx7QVEsHlGYSj5t2mtOQRnaHy8xUMoOHz7cvQwo3D0+lBXpPPLIY3Jnff4By2awZEEsxm769Ln0gdRvPr3SvhCi6ZeuyNd1wzAMY9vGFIeGYRjGVgdCFFZCvXt7BVYhQeh7p6CI8sqovKAG7IYaLJE6I9xz/fU/dp/EG4u9XXbZ1VntYWHybshu0ayIpgMKBe8gTL788jRnLVVZ2cvd4/OUK3mBM/jlBXiUoN7axR9YnPnNLYrBvQj376Sson5j8UNa9Kzsvvse8utf/1rOOOMMN0USgTy45bMjizXuxZm31EGh6T9Jsz/aQvl7xV3n8WcNsoJs32BII3mH1dD06S9L2Igk5CFTypkGzs68KEj5HkABgoVXR2XSFdwXwsGaEYJfKI+Z0kl7qa9f55SLUaZMmaR/vcVnV+FPmbKThiNuemaoe2z6seuuu7k6w7p+oe4Vw0exmGKLust5ytbXV6xJE4l0OwUseH/4Q3zdj3bgL2VCXcCKFqu5KEwJxeoNa9wFCxblznq4FwUnbQc/Qv5SjQt3VSZfsfJjc5fAsGFDZcKE8a5M+R6dOj5r1kwXn7VrV+XO+LVhmYJMv+Pzo2vI58Ly4uUHLxBo94GO1jjsDBRxLOeA0hBlcVf9aTE6rkpdW1UGSB9ho8ybMCG/DAPnWNMWZSH9S21tjVM+Q0j7McccK+vWBevxzmEdSvjCFz7vPgM77bST7Ljjju6FV6H1Mt4SP+pHTU2+LAPEkzrk+176XN9v+bVCnZN20HR6WlaGYRjG1o09FQzDMIytDi9IcbRfOwxFCQJzoaXbhvDqq9Pl/vvvl3vv/Zf8+Mc3yPe+d4185zsXy003/cJZC3ork5zjIgSBe/bst9wuuEHZccghh8r++x+oQv1qZ32yqUFxwVFMyC6mGAAUQ+PHj9dvwVqP+zNOCRaULOE+lDp+DUSEVs6gbOUaysG2fgcBe/XqNbJ8+QoNn+mTGzZcmT59urzwwgtuLbeGhrwyifiiwPnKV77qNnIJ68gRJ6a9ouQqBGsnNpwgPlgX+SEUSisvtDMtuRB2kp45c6Z+8+tIdkRtbaNT2ATl0DvB1/2Ms3Z89NHHnBVfFBTaY8eO0nrVLCNGjM6d9bDzKuvNbUgcQris+ca6iUzjD6BYYRMgrA6x4lu5cqVTskAIiw0nWP8PZWBX4eOGXV8//vEz3W/cY0WIxRYb0mBhVazO4C3Vi3j6NSrz4aMUYuMeytYrTSgvPtlpu0Xr+zicOcI9WE6yBih1prM66sPDgnCCm34cQEnKLstYd1VVVbp+IApLF+y002Q3bRRFK2HgF20VC7Qo1GGUxC+/PD13xk9VxhKT/Dr00MPaKC3ZxRnLYKbfB6ijAwYMdHnUlaKLeGCF+eijj7o1Tm+99Vbt/74nl1xyidx440+cNWbUD7KskyawnqiyEQvNAw7Y36WtmOK2M8gj0uPLsn198uusdp1OoLxRCI4YMdLV7XAP+fryyy87xSyKQzZc4SUEhDqCZWy0/DqDNO600yT529/+5hS7ARS+J5xwgnshxXTmYvCi4P77H3DfCTvEkfrVv/8AzVfO+XpNPFB6Fk53DzCtnqOr+BqGYRjbDvZEMAzDMLY6EHiYhlpb6y04oiBgIZAjyAfhbkP5wQ++L+eff54Ky9+R73//e/LjH18vP//5z+TOO+8QFvL3myB0JpiyhhSL55fIX//619w5BMV+brOH7bYbr8Je7uS7QtvAli1bIr/5ze3yzDPP5M7kQYieNGmiE86DsI9SjU1dUHhCEF7JZtbdC+s2+nxH6YZlaF6bwLVwD8L4ihUr9DpTCjesnFBiXHrpZXLllVfIxRdfJA8++GDuild8kM9f+9o35LjjjnfWPFjhMZ2aadWFoLxg918UBG3XGiPOGRk4sP26iKtWrXKbMLDLcVf06dPbxemd1knupzxQ3KDEQ7kRzoPfvGZHYWMIFHVR2BU2rE23ofEgvNGjx7hyDWXJuVdeecUpVlCWLViw2OUNhHBQaKKIRkHTtYKlxVnS/fe//5Fnn30qdxZl9rj1CkvWFy2E+FCfUOLU1KzLnc2Dog2FCtH2OwajyMJyNL1+LUjiG+KMkihYdBaD8EgL9YN0swZjaWmwfBXXrrB4RZG6bl2zLFw4R6/5PONeFHvs7s1aqEFx5hWHcacQisLOw8Rz2rSXXf4EyFOUZ2yaEdoRLyOYks76iYWKKM7RjjWl/kQHkIf0c+ef/2n5xje+LldffaX86Ef0fzfJLbfc7PzpTh2iv+C+V1552f0O9/j095Zdd93VveihLofz3cGXYSiv3MkIKFH9JkCd+xfKkDJirUEI5UecZs6cpWW41rW5pUuXap1Y664FmJo+YsSIbtVrH1/WF03Kz372M3eO8FFqs/Ytm85Qf6JwD/WL9TZfeOGl3Ll8upjqzHR3XowQbT8F2T8fee4Ug36a+HY3rw3DMIytH1McGoZhGFsVCDtBWMR6qhgI57gLx4ZSXV2rAhmbZSSdBd4OO0yUXXbZWXbccQcnmEatZ4rjNwMhPm+88VobJcS+++4nRx99dE75uKkhH/hsK2GjzPziFz+fE+xfyZ3NC87jx+8QEb4RcEuEDVNQQEE0b1HIoUxi2mWw9vTX82FG3bPrMbuUeiE4d7KHoHhEAC4v7yUvvfS0U/Q+9dRTbQR44rTvvvs6pRGWcZQl4aJEjMI9WP6gQCSNeEG8yAvuGTCg7YYwpIWdeP26ZF1vjIBCrys3PYF4oYBgl+QopBflGmENGdJ2LUcUpn4jjZ4PD314JTJv3lzZb7993blQ/1HUf+hDH5Irr7zS7TyOoompl4GQ7jFjxjuFVNewI2yrxn+Y29U3QPl89rPny1lnndXOmsorWLwCGKUpFr6FkAbKHWsrFCxese0tAztSDDO9NCi7CgkKHOJaXp5f+zOAcvecc86Wz33u8/K1r33dKbpDXvg+LO6UjSgOyUuuEUfOYx0ZZenSZe7z9ddflZkzZ7jvgIKRcolGcc6cOdrXrHLlUrgmpPe/43oY4ociasGChS4PmJaMJSX9HtPI6QOL16H2+fSPf/xdbrzxBvnUp86W//znP+vvIx6AkhtrZRSctLPuwv3UdV4IcBQydOgw7VurXNl2Bv54a8KlzhIciCP50L9/f/nKV74iP/7xj7XsLpMvf/krOSvsPFjYssM4m/ZAyL+OYJfpYcOGyOOPP+6UkNQD4oDy7+ijj3EWtYXw/OCFGLuoBwvjaJ2kztfVrdOwaY8+/EymRdPVto2EuGFxTT9gGIZhGIGejwwNwzAMYzMG4QeBsW/f3vLXv7bdbAAQPrmGUgBhvCOhvzswfRVLqaqqXjmh1i/Ij9VSdyF84vvmmzPabJKCUI8VyYYocXpO8TyoqanV8GPyyivT5ayzPiH//vd/clc8H/nIaU5oRbAN+U567rjjjpyLvDC65557yuTJU1QgRTHDGZQqbOSRt3rhXtJLHqJ8RFmAnxuaB2ywgjKpX7/eKoyPVH8z8p3vfMddi5b7UUcdLccff6Kz2EJJgOUQCrAouEcpQHmjDGSjARQ4KB4qK3s7K7sopIHdmxHYEdy7UhiE9Rw3BuQXFmrjxo2Whx9+eL21VoDplkyvZfOZAMpSlNdYG21IflMHyOvGxha5+OJL3DnKjjSh/D700EPllFM+6JQfWHiOGjXKuSFfQ1mw6y8KKe7pLC/UW5fvrHv3z3/+wymDgTa4/fY7yMSJk9opRQA/iRPt9KGH8tanAaw+UTiSFobIvnzTWn4J2Xnn/I7EQP4uWbLE5S351VGeEU/SxK7PWP1FYeOcM844U0477TT5wAc+oHlzrKsHPnwPU85Hjhy+Pk84yM/+/fvlXPi8x7IV3nprtrz22mvuO9BHffnLX3Y7tQduu+1ml+comwrrhqe4lV4U+jjqTFUVcRngrNfwk7j4af/dY+XKZU4Bx67E1I1Uqq3Cyi9zMEDzu8n5HepKV9D+qI8oSFGkFtYnNgUaMWKYs4btrL4TJv0wnH663/E4xIGXDQcffLD2Hce5HY2nTp3qFKgQjeeee+7hXmDgV2E8CmFtzaqqPs7y98wzP5E769do5eUEa+AWgp9YdPPi46c/vdGdi4ZPHeB+6jL1mvTSTlFcB4gbUHYLFy52/Rbtqbv5bRiGYWzdvBvSiGEYhmG8ayDoYOGD5cs999ybO5uHTQUQ4sP0t3ciGCFsoYxCSA0CIf71xE/uQ0DDyuOll17U37kLmwEo9YJylKnDKJYgKmhr0l1+c460MP33+edfzF316QOm640aNULzzC/Oj1UTygIscgIh31ASsPMxgrBX9GwYhO0VxFg5Mr0TAdr7Fy0jFCjsDI2SlO/19Y3y+ut5q60AllXqq5sKSvyxtkR5Mnz4YJdPUXCDVRuWO0GB1hlc7spNdyFtKHb69OknCxcucrvTRkGR6ZWG+XKcPftttx5jWBtuQ0B54fF52522EL3Oen5Bod8ZIa8oD5R711//Q3c+2g47A+tOFKqFjBo12lmioTwJihQ+sRYcMaLttG4Uh6tXswZp5xuxBLA6Y6p7gHjS7lHodHY/yimsHUMdIo1YkkbX1OQ8/UdlZZlri+wcHyDcr3/9G7L99tuvz5vrr/+JTJ68k2A529jYVnGIGz9du3g+hvLCDdO92T2ZMghW3NBRmRfzsqSk1JUHfczw4UPlrLM+6c6HPKFdYSFLv0Jed1WfAsQFBStToZcsWaZpbfsyB8U5ilvWeKQciin1OEe+F5v23p16Heox05VD+N2JP20AJWGw3A59a2cQVxSc//vfo7kzecaMGeMU0ExnB6LAC5zCOkTcfL1eqdexqu66XhuGYRjbBvZEMAzDMLYqgvAzaNDg3BlPEOKYQnz44YfLxIk7OqsKKCY0dofoLYTbHaGwGAinCGmPPvq4PP/8c+4ccXqvQRlAvqEQwkrztddebWeJd/LJJ0p1tV+vjjzEYotdPIE0hTxhmuaYMds5pVUq5YVULPxQyhTCtD6mmaPAeSfCK/FBCNfSyX1nimeZs2SEaLn7qan+njFjRsmll3rLxKgyCgXH6NEjncIKwZqpjqxxtueeewubdURZvnyZPPPM007xE82HjvBTozes/nQEihOUSK+9lp9mDvvss6dcf/31goVdYNasWbJw4UJNW7nGt+fxoFyxwAuE9tZZPfZlkm9EO+440cUZK72u8ovr+N23b3+nHCW87ilo2bm8QmprfdvHfYgj02InTZri/MYda/21tDTK0KHeOhKCWywzqaPpNMrvjhWtuCe87bYb55TSIX6E0VEauSeEg+UxSncUbJxDYYeiq7S07bTdlpaUc4NSEQU/G/MACjLqYGF4rAeJUhtlXBTqNlaPhNMVKAzxP0xt7ig9QLJ5aVAM8oQ+e/z4cfLEE0+6vA1+Eff99z9A290oN429szAKQSlLvaD+RzeBCXn7sY99XP1sXm91GM5Hoc2/+eab2ie03UioMwrr4JQpu7o6Qp52J/5+/cEyV8Z/+tMf3bmu7iNM6lnoeyG0QSylscT11uG88PB1p7y8/RqHvGRAYUlZUQ8MwzAMA+yJYBiGYWx1oPhg7TH44x//4D6jTJmys3zkI//nhEWmhCFwIWRCodDXGcFiCKEQwa5QuOupkIvyJqwl+E4UZhsb0sf6hWwQgOVhlC984cuaf+Uq+HtrIPIPwfdf/7rHXY/mwZgxI6WqqlzPYfnZW4X5lc4qrpC1a2tl/vz5TpDvTCnTFa2tzS4sLVXNT8orpmGucVMYA8SP+FZXo0xkPTqmle4iL7+cV7YFAZw47777XtKvX1+NGwqchCxatNhZsKJEiTJnztvyv/89ISNHjmyTB8Xg8ty589zUwWLKi57UoyjchwIgbDwRGDJkuBxzzLFOSRhAiY6VJFNOe9AE1oOi46WXpsknPvEx9zu0o1CPn332GfnVr26TW275pfzpT39wylsfv3x6WbMQi7+uNpLgUqgbKLrS6Rb5xS9+mbvW8X1AOVFu6oOW8bQ2ecvOxpMm7ejaNbsrDx48UB555GE566yzcy7yVFevdnUUJXhHChbfFlKu3rDRUTgXwmQ9umeeed61lV/96lfy+9//ztU/wg/5x27b1CH6KE5xHf+i9Q2F1Lp11TnFUVLr5CJZurTtBj/BvxkzvCUt1r7U98Kpyn369HL+kL/hniihvFCsMq2YT/qG7tTRIlXbQTjEG3+wgEThHoVpxdttN0HDyLfF7kK/ytTt6AuPoBQ99dRTtb5+Quvm8y4OQcEaoC5RtnPnzpfLL78sd9ZDPmChywYxv/3t7+SXv7xZ7rjjT24ZA/wIimzAsrF37/brSXYEVZh7KaNHH33EKVK7gjBJK/F65JH/5s76vGVpAr9JDktBoGz3G+vQjwVCu0H5P3v2bFf/u2pLhmEYxraDPREMwzCMrQ4EHqxTdt99V7npJr87ZRDiEKy4/rGPnSHf+Ma33DS2//znv7JgwTynsGA35O5Y28CKFctk4cJ5bk08lGpMF8Rig7CxmkJ49MJ350J1EPpYL+ytt2a1U85tDhBHLJSCpVYAJdzkybvl1kNk/Sym/aVl/nw/zS7KPvvsI+XlVbJo0UKZNestdbNIzjnnU7mreeUGawOyZpsXdDd8qPL223O1TP1UUiyaUBTtssuuuat5Fi2aJzNmvOnK3Yfnwyy0JkO5MXnyJKmo6KXl9LY8+OD9bvdrFAOFJBLekhJlVFf16fHHH5U335wpzz33jIsnCrxQd6ivHP57e0VOR+Ce/MNi6sUX226QUgh1lR2PvQLMK397CvFtaGjU/DjZ/SZswO/bb79dPvWps+SKKy6X6667Tr761a/IiSeeqOUzu03+Mo0cqzM23KA9dBQPTlNO5ItX8qHEeV3rZ3c2VvHKJHj00f+5z2gd22+/A9x1lG/Tpj2vaWqWqVMPz13Npwsrx5Url2v4WDnmFWqFcA1r28GD/dp3gB8osr797W/I2Wd/Qvuhb8j3vnelfPGLX3B5BOQL6cfqkanKKGZR0jU3N7o2F8038h7lEopg7lmzptr1Z8Dv0OfBDTf82FnUhnaMIjJKVRXrPKKkLK44CueY5kq9p9688cYbru/EehH/KPPCsuO2XNYVJeQf5blq1Ur3PcDuysOH+6nipLW7EAcsNhcuXODKM0AaQvyuuOK7Wjc/Kc8//7w89dTTrh/HApF2SFikp6Qk3q7foI/HGvDLX/6CXHnlpVqvr5ELLrhALrzwfFm+fIVLRwiD8hoxAovJOne+o7rSFt8O6Qffemtm7lzH4DYU1xtvvO4+o+k88sgjXZ2hz43uLh/ykzqJ0vbJJx9z+eUtqDt/bhmGYRjbDu1HBIZhGIaxhROEewTuWbNmyq233ux+A8JUENxOP/0MZyX117/eLYcffoRzj1IIAQrBMfjTEVOnHiknn/whOeCAA9yOogi3bNiAogCLIL9Da1sBuiMQ6pju+cor0+T11/ObG2wukBcoRlF4oBiAIJRivRbW0UN4RXGIMoypr1FQNmCZc+yxR8k+++wrjz32WO6KVxwQBkqjP/zhD26TBwTuEMaGcMcdd7qNFebMmatl2iLf+Ma35Wc/u8ldC+EBazK+8sqrTjlDOZCWHXYYr2X7AXcdYT+w005T5JJLLpYPf/hU+fa3L5abb77NWYRFlQHUnZ/97Hq3vhxrrHVWjxDcDzroUBXYn5Dzzjtf61+55m+zU2CgkEYhA/ixIVOIWTvu1Vdf1Xz08QtlF4WpibNnv+XqH+2js/gWA/coWwYO7C+HHXZY7qzn9ddfl9/+9jdOqThy5CjXxlA4sWssyuMoKKxOOukUWbZshSuL7kL4r7/+hjz3nJ/m3xWUMfnw7LPPujyOwlT03/3u93LEEVO1XI5Yv9FIyDfCoo7+5S9/kblzF7g6yrmgUCsGlpRhjcTgbsaMWc7KlDJlHb9Bg4a6Kcls9hJ2tMVfYCOZIUNYeiHm8nHw4EGurALUoXXrajT/WPORdlrjrMaoO8GP8PnUU4+rX0Ndu+Jc4e65bFTiLWpRXOdOFkBdJ860pz//+c/yvvcd6hTkKFyxYCQuvj/Ie9DdZsxSBy+99FLul4f47Lrrbm4TFpY36AnEiSncKGSDAo7yJ+3kAYrF2267TdvfU3LRRd927ZsNWbiG0pCXOOPGjXdWxVGWLl3k+mmWK0ApjKUsO4X/4Q93yLRpbRX1TFHfZ58DXD+EVWVX7TjklVdgL1m/+Q901h8yBRkrxWeeeU7b0DKXxlDftttuOy2rO7TvPU77tVPWr5+If8HP2to67QtfcP085dtZWIZhGMa2hSkODcMwjK0SBCYsvYYPH+GURaxTFeAawjbWQmPHjnW7vf7857+UP/7xT3LXXXfLNddc66ZscX/hFNQoX/7yV+VXv7o9d+8dKjT+Sf70pz/r55+dRSPKhrAgfVcg5CH4rV691k2BY+OCzQms0RCkiR+KMQiC5SGHHKzfsYzzygispBYsWLh+vUYIAioKoYsuuky++93v6n2H5K7m/WLK8Ntvz3Flg+C8ocIr9+27775ul9FzzjlHbrnlVjnvvPPW1wviycHGBygqELgJj3NcR8n13HPPu+mkwb9w7LLLLpqGi+TTn/60m86KIiWqOJwx4y0V9p9xSqgQVkcEwf7AAw+Sq666Rv7yl7vlttt+o9+v1vh+xm1qgXVT1P/uENKBAoAptUFBViwuTBsOFqOdxbUjuA9F0ejRY6V//0HuXPCH81gCovxhsx2UNljGcRmlYiEDB/r7u8q3KNQVpqAz1T/QWb3BX8p63rz5bgp1gD6B+5iyetlll8nVV18lU6ZMcXnPPcHP1avXOMUca9ChCOqI4J6NKZguGgWrLpRglA+KJdKAEpL6P2PGGzlXHqYmc0191H6hWcPF+tBfA8Kpq2t0CjL8YYMULOyoN1GIMxu6+E1+uA8lN3Urr4zjGm2U6kabLiwCwiI/KB/K9NRTPyK//OWt8vvf/0mPP8rNN/9C7rjjLtlrr32ccg0L5O6C36SN+hqFvGdNxgEDBqqb/Jqj3YG4opB99dXX5emn/RRo/AvtiXToGY3v3vLtb39Hbr/9d64P/93v/iCHHXa4U6KxPmX05QHQD65atdopTIMSF6V4lFB/aR8HH3yglktK89ZbyHYFt1JHeYY88cQTmif5fqhjfN+LRfebb+brEGkludQ1+q1LLrnEvdQIbSzE89VXp7s1WztaMsEwDMPYdjHFoWEYhrHVgvCDEIQ11FlnfcIpFwIISygKEJ4QxlAAsKEKu+seccSR7jpKpZxMVRQEO5QhCNooG7DWQfGBoIrVCgJiEMpU5Gsn9AWBPZxHOMVC7c03Z2hc/XRlroXrwWqsc9oLlt6P3I8i14ufgxAuCkEUbq0qLK9Yr5AIwiXKFTZPQUHkFUNlTmHEmm1MAQb8wD157jdQaTtlj/vw929/+5ssX75U83CkE5rz+dcVbdMQ8g3rqnPP/bSMGjVy/fmgIKPsURQ/8cRjzvIoqhzAHdZ63/3u5W3WLSPOHMQX+B5VuOH2xz/+gatPhYpPH6fcjxzhPvwGLJf22GMPOfXU0+RrX/uam2KI5VjwJ+pfIJqPUXBLvaQsnn227bpxAdwwHZI18oIlVjEItqNwuAdLM9YHDLeTJ8Dal74c8xuXoIDu37+PzJ49K6e4yUPdQHmFMpP4cE9huNE8IGwUNyjan3nmGVm2zK/tF3Wjv9rd4+tordxxxx3OEgyIM+4oC66H8HEfDhRJf/nLHbJy5Qr3UoI2wflihHuHDx+WO+MhP+bPn6v54KfRt41rTO6++2+5754BAwZrvRju+hOswthxl+mzAfKHPCUs4oxFGy9KwsuSUBb333+v1ktvlehhjcMmLaP8SwqsPv1af23zMPRV3It/0XjTdti5F6u2/fc/2K0hu88+e2m9Yip33l3bdHqi5/iOEjWqOAzXhw0bKiNHjnDpJL2cbu9f23IO4J5lK1AEP/543so5uOV6aH8oAlH0Tpw4UdM01rW9CRMmuGvBPZ+LFy9xlqdh0xrOhTxqamq7biSE9URRFvv8bx/PwrhTltRDplGH3ZJDWULIhwD+Eh92RX7ooQfXlyvng8KVtpIvfx8GYIHIeo20iaA4jLozDMMwtm1McWgYhmFs1aCYYJofmz+cfvr/yauvvuKELQQwhCYOBCQEpQDKQJQC0Wl8UYGtK7wwh6CGYIfQ5gW0iopKdz3ArrZB6AQfn7g8/PC/1y9w74U+f71w594o3gkbNeBHW+sYL7QSDmlsK7TiN/IhaS4EITQoK/GXvGTTj5qaancumief/vRn3a7LuMPqhbRNnz5dbrrp58KOpiG/o3kdFUxR/PzkJz+SW2/9hVPgFSrdOgd3bYXcjoRezhOX1atXyY033iBXXnm5syBDQA+EODIF+e9//5ucf/557jfxIg0Qyi2EE85//OMfl7vvvtNZspJf0TTglM1Hgtsoxc4B9cHXI19WbFwRBSUb9aJYXoU8Z2or5QBR5SigHEdRs3at32m6OD6dTMuMgv+cJ360lalTj8pdyUPeYkXHbr8hv3ybHO6mF4e6EGAa8/HHHy/Lli11bgmjsN2Q5rAEAH5S31F4Pfzww/KPf3ilG/cF4vH2dYnrWGChbPzJT37iXiqE8DiCIolzHOQjSqRrr/2es6pDwdVVHUXRR7pRBkeZPv1lefrpp1zao/EknH79+si//vXP3BlPRUWZ2xWXOLS0pGXnnXfR+/L1hTBQSPm6EpP+/fvJyy+/JJdccpG88MLzzg0b01x77bXuxUjIc8qttbVJP31aYdCgAXpg2Rfqtq/fLDMQCHnkrxdn0KD+wo7FuAt5RJ4VQh8TwB1KyGXLlsgdd/w5d9ZDf7z33vs6P0P8C3eW5uVGWOcxQBwpS5StnP7Qhz4ot912y/o00B5ww8F90Xvxn3vf9778GpeA4pdpyvRrftMa/zICS0+m6999919yLvOwwcuuu05xltgo70JY0TxEae7P+d9cw3/KnfBQwkdhYym/Lmme8CKLKeTXXfd9F1f8wY/CNIa+YOnSZXLppRfLgw8+kLNsNQzDMIy2dF8KMgzDMIwtEIQlDqwosKq44ILPyE9/+hOZOdPvLso1QPADBEWEbJQRCGEIqThBKOT7mjWrnMDY0VFdvcYp1lAaIKx5pYtX4KxYscpNUZw1iymDq1TYZ+ouu8LmBXeUGVh9/PrXv5b777/fnQtxwxoRcB/OBZAFOUeciS9KAZRCCIlMX0Tp45WAeUE1KkAiJJM+LKiw6gEsjwB3+I0QiwD73/96pSbnvPXUfBk3bjthIwmvTPE7rQ4ZMkQeeeQ/cuGFn5V//etf7jz3hLiHvP/f/x6RK6/8rtxwww1uWiaWftE86QgvBPuwCgXeUO5RSN+0aS/JbbfdLBdffJHceustrpyZYohfQSER4PcOO+woL730onzta19xazKS3pCGEAZryiF0s0baP//5T6fgAPyMxoFyaGiodxtKUA/It44OrlOP6uux4kTApz555RvTjtlYZO7cue5AmUS+RwlxY1r5Tjvt5DYAAqaqogDDCpfNLFjDbeXKVS6toVyihDRQR+rqal0dX7JkkatbTJvlOkpf6saECeO1/q/V+C3RcFZqOubllCh+inrwi7CY5rpkyWK3/iLgH+ep/7vttqtzh3vCxcr17bffdtMvWUKA9Holma+/fBI+ymqU7lGrMkDZ5PMwrxTiHhQ4Q4cO0bx5UD73uc/KvfdSR30cfdvNQ1tknbxf//o2GTZsuGsbKEBx2xGscUq5jB+/vfvtd+5mN+UFzmKttLS8XZ5Tl/GS/iGwYsUKmTOHqdG+jCdNmuzaKWVIv1RTs07jTZ+AhaRXMk+YsL1TCF133bXy4x//SH7wg+tcPQ9KK4jF/O7RWKZRT7D4pa9CeRfyN7SJUK6sPUrd6+hgcyfqWGmpVzL7dsKu7FhTN7q193j5QHmuWLHcWapyPYB7lH+//OUv3O+Qv1j3se4n9Yi+gfiVllY4S1n8XL58mbMCxYoTZSS3hbIE+jSUpij0WWLg5pt/Kf/+90OaLm9NHG3PQHgo+QYM6O+WPADaPvlBOrCW5R7SRTh8JwzWOWRNwkLFJ9OsmR5MW8EPFN/UIa949HnMtG7WqeS5EMBf6vVTTz2p/dWt2tfkN6davnyly4cQZyAuKNpRlP7973fLN7/5dbduYSCaxvr6Ornnnn/KpZd+x/Vbo0aNblM/DMMwDCMQO+SQg+zpYBiGYWzVIKghgPGJMgbBb/ToMW6nzL59++NChSWENNbmmy8PPPAvpwhjvS0seVBqYDXE4vwofjqDaYIIgLW11YIVU966JKNCYaUKmljuZVS4K9V4NGl8apzwSPyCoMsnCh3u3X//A53QiVXRM8885TYcCYquKPxGcEXoZ8ogwnhQXJBudhRGICd+UUEzWMVhXde37wA9k3bKBBR4s2a9qQL06vUKRFi7do3Gt0oOOIB4DRB2T164cL5TduIPcQbSA/iP4oPzhx56qLAJRFVVucbJbyKC/0888ajev86li7BC2qLxLAbugiIPKyw/dRSFo1c4oWDIeaV+oYBZLq+8Ml2WLVus10vddHLyi/zBr6hQHQVhH4UV7lm7jc0qUCz5qYlxeeON15y1JWWJ4sArBvxUv+AfvykPFGMoP1pbyXd3qSjcRp6hHELRxz1NTSjoylzZMB0SSzrKk/pM2Ye8j0K4WHqxnt8nP3m2s0ALeUwaqNsoMkkj9xemH3fkI+WIYoHfhE27YdouChvuww2bA9GGKFdvYeh3eGXqZ6EijnCo47Qpyo40otyj2ixdutgpM4NShrTjnjaEUogNQrC+ot1EIQ74yS68bL5Du6G9PfDAfS4uxKlY+sg7FEXk08EHHyqDBw9Rv0v0PIqimFOCotwmXKyXyT/CgkL/ouCGY/z4CVrPern6wVIG7Br89ttvaRiVTvEThXxGKThw4GDXxtaurXZKKuofFmmk75BDDtP0kwfs+Es/0uCUdlwnn0OcSBtlRB1CAVZZ2bauEzfc0xeisPRrlGadtSftkb6DtkU/xvILuMWytLPNPfCf/KF+s+QALwH0lAuLlxNlZRXr44D/LG9AfcFvwsId11FqHXjgIa7uoNxD2Ug5UI4h7tS1kSOHa/r9RlbEi3qBco3fhXkRzqEwZ+1S1ifdYYfJbs1S8h1wQ36R5yh31bnsuee+ej/WmeyyTp3MyPTp01x8sXQNhDBCnn/4w6e5NJKvixYt1ntecGVAvcYCvn9/v1EQeUrdZNr4m2++qvnkyzH4SVpp4+Qp08CZOk1dZVdwFLrkd0hngPvI2xUrVjpFN3WJvqd3717OP+oOa4KyvmtLS6PrO0N7K/TLMAzD2Dbhucfz4qSTTjbFoWEYhrHtgaIAgdxb7GABggDNRgd+Kuq4cWNUgPKCKIIUgt/atatVmK53wmLXeAsoFGG45yAcFAcItlj18DAeMKCfm26G0BoExQDCG0oCBEMERoRkLI4QGhEiC90D92Dtg9Cvv9w5jb4eGbfGH0JsMcEQQRLlHoODcA137PAbndqIO5REbKSB9Q/n8RPlDOs7kmbOFcaN36QFBURzM4o+FKmUQ8pZ0/Tt28dZDPq8brtmYFdwD3mLUhDrPG7z01g5vOKOg3gSD9LEztfQnbDwnwN3KEdRMKFQ8nH1yjeULqxjx27aKCWoR7gPhPsJjzxASdad9OEeJSHWsrjHD+qst2j1dRa/w+YZfC8G9YvNOV588SVXVtTtAHWc/EepEMIoBH+pr36DFX+vD7eXK3fu4zfXUdzyHX84Ro8e5dLBEa0XwQ33oDgK/uoVqayscIp67iFc6huKTdyjfGXaLMqSaFzxLxwommjfAXY0DsrSjvIdv7iP8qF8NfddWmh33MsU3qB4C+67grCoDz7fvHvaIspqdvvGj8L4UK6wfPkKV9a+zlY4C03aHuXMbtTki6/fpCmuaRy2vj7gb0hr+KQOcD4ab66h5GI91XCevhAFOXWCc9xH+rGCJe+9u+J5GCANKLZQNmJRGPodlGWUJfHhwB2KRfKDNgMhf4FNkqifoe8jTmHaOvEgb1GMRaHuhH43pL0QwsXPhoY6vX+V+00fgnviQXxRcuIPLxhQ2ga/+MTvoEAO+QpcC/WcdLPeJuWEn1iWo8Dz7c+Hw/OA+uYVtj4/6KdRlOMP5/jkIL48O+h3STe/6ReoR8XSCJznEi9naA/cRz4SPhbx9FdMSydPORfSZhiGYRjAM8wUh4ZhGMY2CcIRBOVOXjAL00/9lGD/3QuKgDDoFR9dPTb9PQiBHF548+e434eJgIag6KcGc53zgWiYnEfZgKBIPIN1DvcUEsLw09e84Ozj4xUwUHhfCCvkRwBnKE64L8QPtyGvgnUb7kgHaUWIxp9CQhgI5IC7EFfcE0ZUAC+Wto7wfuNXiL9XSoYwyWfyAD85CIcjEM53Bn6F+AYLMfKG+1AEaJbo9XweE49CP/PxyU9z7g7kK3kO4R7yDP/4HepvKJeOQDGCgjHUyQD+hLLrKF4h7qGOhLDDfXznXLQOFbteGD/izD1emZI7qXBfNJ58hgPCdcojCmFE4xHc02ai9xcjpIl7+Qz1njDwi/wLcQpHd8jHJ9934E/Il0J/Qro4wnX8oJ+g3+B7UIIHOEcao3kf4BoHeR38LCSk2UNYvs6FsPlOmPjP767gvmgao/GKfg9xC3UvwL3EKUzDpS8jDrjjE7iPe0KfEuB6cNMRXOd+8iOkHYUpScNPDuLAgTvCwE2Ac9QPPn388teC3/jLQX4Sf/wKdYoDN4Tj3eTzg3oW9Y9z4TNfL3Dvlbr4G3VfSDQc4kYcQj2g3fEih7TzOxyGYRiGATwzTHFoGIZhbLMEYQyCYBUV0IoJUNF7ekLwp6v7iwlshXEKFHMbwK2/LR9ecN/Rffm4hXs9xcIsTEeIG0dhPKNE7+M7eQ4Is+Geju7tirZxIh55PwPBTeH57obZNgwP9/rzXjnQURiBYn50h6h/nfnRWVq4j6MzN13d3xHc153rhf6HewrvxV3UbUd+F/oHhW5DuMXcFhKNT6iffA9+BLrjVyB/P7/a3tdR/DnPZzG6ulaM4L6j8IoRdduRm+7SWZwDheF1556OKJbOKMX85Z5oX1RI9J6om0L3UXchHVGiv7lezN/CeyDqLkoxt4WEe4PbkM7C+HXHL8MwDGPbwRSHhmEYhpGjUHgyNj2bOs8LBWXD6AnWJ2ybbCvlbvXbMAzD6A5RxWF+XoBhGIZhbIOYAPXus6nzHP+tXI0NxerOtsm2Uu5Wvw3DMIyeYopDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzAMwzAMwzAMwzAMwzDaYYpDwzA2Q7K5T08mdxiGYRiGYRiGsWnIMAbPdDTqZnzedoxuGMa2QeyQQw6y1m8YxntE6H5i7m9Whysx/cdf/5u3G3o2nRvAJBKS0JOMZ2LqJLP+1Uc692kYhmEYhmEYRnfJio6v9TPDa/pMVsfYcYlndaCt4+yMDrqz8bi7nlcaMO5OREbr4H8ZhrH10NraKs3NLXLSSSeb4tAwjI2P71R04MEXHUdkMzGJxXmHiaavcIDhHWWz/jOWde869av+Tae9KwYxej2b0IEMAxhplng8oYMZdR9D1WiDFcMwDMMwDMPoKWkdWTPOjjPW5pV9XMfrsdyYnXM63s4mkyJxxukoGOM6/tbz2ZiOx70feXLjeb7pmD2mDnQYzylvDKBf9W79axjG5o4pDg3D2EQw4NDBRe57zE114LcOLHg7GUvoaf3kcIMGHZ4wmshiY5hy37kn6wYmWUnHSiWVTEgmUaKjGgYyep8OXhoq+ksik3L+OtND68UMwzAMwzAMo0cwhI6jBEyj2dORtY7JS1MNOiZPcUVP6ac6Kk01YmSo43TG6jpG1/F5VpI6LE+4l/hIALzgR5nIb8b5iAGxpJMA3HnuwKoxrvdoUHrR/dHDMIzNEVMcGobRI7w1oIfHu3/MewUhE4uzTnmnBx844g2jDjyEQYeewNowxrxiN7BIqX8lXofo7hdJxUulOdlbGsv7SV3ZAGlJlLlBSUtpf2nV27I6sIhlS3VwktLPmKQS5ZLQgQz3u/DyfwzDMAzDMAzD6BZYDepoXMfuGcwHdcyfdEpDbwwQz6YllSyTqqY1ktQxPOPzZLpJ+jQslfJUg5S31Lp73Ng/offodx32u3uzcawY/adkUDKqtxpGlqnQzqLROXTkbBRz4gTfDcN4rzHFoWEYPSKjg4BsWgcEMR1AxLKS1t+JmA4f0iKJZIp3h5JoSUsi3qqP/IwOGvw0h1S8RFKJKj3jrQRTsRJpSVZKU9kg/UxKQ+lAHYxUSjpRpmOFjCQyjRJPNUlSxwvxVKsOTlp52Sklej/TKPxQQt3pkWFkwbAk91bTH4ZhGIZhGIZhdA/G7Yyxc4o8HU+j2POjbq8AlGyrtMYqnJuUygElUqHjev2dLdWjRZI6di9NN0pFa62UNa/T73VS2lov5al6KUk1SCKV0XPr1CcMC1ReUM+ziYQzHHBTozV85iZxPa0XE1msGDU4wzDeU0xxaBhGEXxXEDoEN3tAcfo5fZSn0qgHebD7t4MJ1juRZiYpSDaT1r8l0lzWRxpL+0pzaW93NCR7SXNJLzc4aI6VSSyhg5JMQjLZlJRKWmLplCTTzRLPMnEBJWBcMryB1P9MaSAotIgJzBPzMct9FhKuG4ZhGIZhGIbRNcXG1fkxNSP/rI7bdaivI/2MtOjvMj2bYdkhRAKG9nEd1cdL3BJDWBXG4gmJcYPKDqUqK2BwMKBphcR1zF/RXC/lrWulvGWdlKXq1F1G71XZQA/mQuMfskK8BHlB/SJ6fOqfnM2Aj3H+j2EYmwhTHBqGUQS0dAwEeDQzNSH3gFZYezCbSbmHNorDlA4MsvEyaS4tl8aSftJU1lsaSvpLQ2kffdbz9pD1TdQ3vYfZCQm0kDqAQPHIPx2B6Dn1CTdoCXHMQiiQe8WIH1ghxuO2hLJhGIZhGIZhvBdgEcjsIWc8kElILJmSbDqpY/a0XmTMr6N2dYMizxkC6D+WMUKmiCcS0qjnSlNJaS1VF5m4JFUmSGSapbJ5jR5rpRxLxdZ6SaSbpSxdr97q/Uk9mMGk9wvLHaFQxHcNx0kGCAcaBv8Mw9g0mOLQMIx2ZLEA1N4ghbaQh7I+1GOxjD7EU+5ZzRTjurL+bp2T2rIh0lLWS1pKqqQx0Usyeg73iVSjJLKtDBfcgT8sZhhHGeiUg+oRC584FaJ/5huGYRiGYRiGsSXA+J5xfe5np/jRfgpDgtaMZEsSks2ojBBPSmuizE1VRtYoQWHYUqciQov0bVgqpa1NUtlSrcdqNyspm01Iio0SNUxnWOCMDPTb+rUSDcPYFJji0DAM98YuT0IysRZJprNuLUO/ezFv+eLOorC2arjUlQ6SlpJekmZNkliJPvR5dGcknspKIp7CONA/zOO8YeSbfwfIGoR+HULDMAzDMAzDMLYlnMViOi2xRFJ/pVTGQDbANhFY6xAbwriKHkmJp1v1yEgy1iTljeukd/Ny6dOwzCkWWTTJmR6orME8plhc5ZGcEhG8uGEyh2FsLExxaBiGU+5l3EIiKSlNtUoy0yhNpb0kFauU+rIqqakcLY3l/aWhbIA+j9m4pFVv0kd2LMuGaLk1EPmjD2j975SGzsIwdzqHKQ0NwzAMwzAMY9vFGSwEJV9OfHA4mcEbHLgFjdiYJc0mKUk3/TkVL5eEtEpV40o91kifxuVuE5ZkqlkS2ZSkEqUquyTd7KaEm9XEWomGYWwMTHFoGNswPFKd0k8ftolUg5S0NkszaxQm+8qKATtJc7JSWvQh3VRWKSX64EaxyDRkhz7keTDndzI2DMMwDMMwDMN4p3i1RDadlQzCilvrvERaszF4ZP6MAAD3WUlEQVTJJBNutaOS1ganOKxqWiX96pdJZfNKiadSki4p14vMiqrAdjEnpeCfWzzJpBbD2ABMcWgY2wi+cetTVh/AmAmiBkymW5z1YCaWkKaSXrK2arSs6T1KWpJYG5a4t3fshBaPZ93GJs4PfdqGTyYJGIZhGIZhGIZhbHQyGckwvcnJI/rpV1Dyl5isHPMyTUm6Vcpba2RI7Xypalws5almyeq9raWVImyqktIb3RJKbNRoSycZRk8xxaFhbCOkUfdl9eGrT1vM/MtZHyRRKmsrR8rq3mOltnyQ1JcPkGRKr6FMzDRKIp6UtD50E4m4PmBNSWgYhmEYhmEYxrsPiopgPYgdIX+dJlD/Z+Kl0pSokJJs2m2kUt5YI9utekHKU3VuanRtxUBn7hBLt6pckzTFoWH0EFMcGsZWSEafo07Np39S7j0ctoFpibW2SGVzo/5ukaUDdpbFg3aR1ni5pGMJiemDtiST0sdwRv8l9RaWGo47v3i48pLPMAzDMAzDMAzjvQbFBVILOzvHVWBxMgy7LpeUiYo2Io0tUpGukTFrXpVhq1+X+vJBbgfnTDIoDvWIyEyGYXSMKQ4NYysknU1LNhUXfS5KczquD8117FMmjcnesrT/FFnRb0f34CxP1avjlFMqxuMsRexXAnHv4GJ809/aKzBN2R6ohmEYhmEYhmFsLkSVF5lsxss1ibi0ppISL01LOlMhzSVl0rd5pQxbO0MG1C6QeKZFWuNlko2X6F1ZibEkUybhlY2GYRQlqjg0tYBhbNHw6GQPMt6fMbWYt24p6du4SrL6AF00cA+ZMfIoWdZvkl5PSUVLjVvfkLdzsbg+KXlaYlkYcx/OD+C39Q6GYRiGYRiGYWxOIKY4gwc+szHJxpNu3cOShEpE2ayUZJqkV2utNJT0kbmD9pVZIw6R6l6jJZltlpJUrSSyaWwlnNLRKyGjqkjDMIphqgHD2MLR52PubVurPigbJZFKS6q8Qh7b+UuyrO9OOSvDOinJtkjCKQRjbqFhzPXDQ9cwDMMwDMMwDGNLwSkQ3dJKLLSksg0yDv/c76yUtdRLMtUsdaVD5M1RR8qMUUdLS2l/SUiLxFtbJRlLSav6kc2k+YuXhmF0gCkODWMLg8caNob+U5twRh98+mAsTbfIqj7j5LVxx8kju31LBtW+oQ/OlJuuzB4nMf3mHq76LW5KQ8MwDMMwDMMwtmCYMRVVaKAy9BpFlXgSSZWFslIqjVLVslZqKkfIi+M/JDOGHyXN5VUSS7VKZXONNGeZvpxxG6pAkLIMw8hjikPD2ILgEZbRh1omo480PRKpBomnm6W2cri8PexAmTP0AGkq6SWDVk6TVKJKG7i6cTucoC40DMMwDMMwDMPY+nEGE2gW3dJMSenVWi29WtbKml6j5O2hh8rigXtIY2lvPbdGYmkUh2knY2UyeSWiYRgeUxwaxhaDPsB4iGUz+nBL6dEiTcnesnjQXvL28ENlRe9xzuqwtLVBMmXlTmnoX7n5B6dhGIZhGIZhGMY2A7Os3KEiVDzpfvdqWSUtJRWyaNCu8sp2J8vaqhGSUckpnmpxSz8hQWXN5MIw2mCKQ8PYAnDrGPIIy6SlJNUoiWyrrO09RuYOO1CW9Z0oMb1e3rpOG3RaYrmHomEYhmEYhmEYhpGD9ZtUVoqrLFXVtFplrKTMGjVV5g/ew83gqkjVSDJnccgsL8MwPKY4NIzNngx7IIu0pCSebpWG0n6ycPCesmDg7tJQ0leSKBIzTeourg85Nj3xdxmGYRiGYRiGYRgexCS30rsKTGn9KGmqlWSmWdb0GiNzh+4jS/rvrPJUQpJpla0yKadAxP7QMLZ1THFoGJsZ6xfm1c9sNiOpWFJK0w1SgpVhr5Eye8RhsgIrQ22+yWyT20FMEkmJJfzmJ4ZhGIZhGIZhGEZxnBJE5adEid+BuSTTKql4iSwYvI/MHb6PNJb2k7J0s8QyKclkTb4yDFMcGsbmBDrDTFbSekhav8aTUt641q25sXDQXs7SsCle4awM45kWd0ssjpVhfv0OwzAMwzAMwzAMozhebvIztdynnkumWyWhx5ryYTJv8N6ypmq0ymBNejQjnhnGNo0pDg1jM4KdksO/TDwjZc3rnILw2R0/Ksv7TpBULCGlmSbhxVc2Hpe4PsRMV2gYhmEYhmEYhtF9vAzFxGVvfOFmccXSUpptkeaSvvL20ANk0eA99VpGkqmmnPJQ/zArTDL+u2FsI5ji0DA2E5iWzJHhyaXPoqqmVdJQMkBeGvtBaUr2dbslx/R6XC/G9cGWiGvz5TAMwzAMwzAMwzA2mEQsrvJVTOLZrDPcyOjvJf2nyPyBe6uMlpJEulHPqcyWzkqrmxpmikNj28G0DobxnsMbK/7GJB3PSiybloHr5suCQXvIq+OOlaaK/tKrfqmkS+MST8UkY63WMAzDMAzDMAxjo5JRQcvZEiZESjINkmytlxX9tpfp4z8oMb1Q3rBOWuJpKWkpcbPD3D3ur2Fs3ZgKwjDeU7LubVUm7d9YJdMpSWbS8taoQ2XekIMkkWmVynSjxEtKtbEmJFbCW7CEfrc3XIZhGIZhGIZhGBsLP6FLZS2Vt2LxpCTjMSlPrZPG0oHyyugTpLbXAOnTWC8tpRmJp0skrXJbzCwPjW2AxNixYy7LfTcM412EzZNj2Zh/q6VHSWujJLNpWTxwV1k0cBdJZOokkU6t3y15/fob/NHvm5asi59hGIZhGIZhGMaWipeduk+Qt7zsxd+4lLauk6aSSlneZwfp27JaBtQskIbKXiLprF7NuM0qWfnQ3b/J5TTDeHfIZDKSTqdl4sRJEjvkkINMPWAY7wFpHjRxltbVx0u6RUpTTbJo4O6yYNDuUpJplARraei/d/fZo91BNibZeEY/NGyn3SQCnPcuDMMwDMMwDMMwNmdiyC5OlOHLOxOosk4mEkmlMrJu2H5ywiOflnVVQ6Q1WarhxN00zqwLRyQes0mdxtZBa2urNDe3yEknnWyKQ8N4b8hKqz542OQknml1ZxYO3FOW991eSlP1kmTb5OR78dDJ6EMxIU0tzdKwvMbHISgObQEPwzAMwzAMwzA2V3JiC3/i5aVS2aeXlCb8Ik/vTHXoSaXTEs82S3WvibLn23+UvvVLpam0Sv2OSSaTlWTSzxQzjK0BUxwaxntMOpt2O3IlJC3JdKssHrSr27UrmWlxax7ywHkvNkzmbVprOiODUyl5/45jZXl9w0Z5yBqGYRiGYRiGYWxS0GzEY5KMJ2R5a4s8u2KtZGNxKUsmnA3EO5VrMlgeZjKSiiUlG0/KxKWPyoCaOdJQPlDlqIwkcktMGcbWgCkODeM9hvUCeOiw+cnqPtvJvEF76pNMH2rZJn2o8cDZOG/Feko2G5O6+jo5TB+ED/3tSvfmLKYPX+skDMMwDMMwDMPYrFGhJchRj786R06/9veyZF2jDOhdKWkmVm0EAYs9LZPZjDTEy6Us3SQTlz4spc0NkkkkRfSwicrG1oIpDg3jPYQGF+PJlW6QtVXjZOGQPSQlSSmVFonFE1x17t4LguLwwKZW+d+DP8ydNQzDMAzDMAzD2HJ4fPrb8pFrfy/L65tkQJ9KSac3juIwkM6kpDVWKb1bVsmY5S9IRWuNpEsr/NqKilkeGls6pjg0jPcIZ90uWbeDcnOiQl4be7x7giWzrcLaGO/1A4b41dU3yKEaj//8/WppbG6VRJw42YPPMAzDMAzDMIzNG8SpZCIh/3lplnz8h3+WFQ2NMqDXxrM4DGQkLdlMTFLxUulXt1TGrHpBSrON0hKvcFaHyHWmPDS2ZExxaBjvEelMXB8wdVIai8usIQfLin4TpE/TSsnGE/qA2TwM25u0cxit8fnqeSfIm3NXiD53/VMWraJhGIZhGIZhGMZmCsq6knhSFqxcK/964U1pSmWlsjS5UdY4jJJlHpn+T0lCWmMlMrL6TRm55hVJayjZeKnKUDZp2diyMcWhYbzLsBGKPlOkReLSr2GpvD38UFnUb2epSNfpo4XXX4nNxqYvnc1Ii3YS2ZaMtGboHsJj1roKwzAMwzAMwzA2Z9w8LknGY1JSXqKfcYltql0nVTzKpDOSVf8TmRYZuWa69KtbKJlEuV70FodmdWhsqZji0DDeZTKptLQkS2XQujkye9ghMn/wPlKeqpckuyvzMMu52xxATZjJpDTOGYm7uBE7UxwahmEYhmEYhrF5k0ZRp7IM87liCeZ0xWVTTuxKp9NuXcPWZJlUtlTLmJUvSFVTjaQSJSo+ZSWRTOZcGsaWhSkODeNdppUdlLWlbbfsWfn98X+XfstflKw+wNiyf3MkLRmJuR2VURzSRZipvWEYhmEYhmEYmzdOuZFVaSabUFkm4xWHmxA3N0tlvbSG05LsJcPXviHjVj4rrclySavAlzTFobGFElUcmjbAMN4FEvpI6dWwUp7c+VyR2kVSkm3Ws5uv2XqMriHuzfxNaWgYhmEYhmEYxpaAmyfFFGHEmXdBjiEEZpDF462SyDbK6t5jZU2v0RJPt+jFuM3ZMrYKTCNgGJsY9hQpa14nK/pPlIX9psiAlkXSWlKpz5HNV3FIx/BuPGgNwzAMwzAMwzA2Jsgx76YkQ1gxSUpJplVSyYQs6zdZmkr7SizVKjFMEg1jC8c0A4axiWCnLb+3SMq99VoycGepSNVJa1ofZDF9uNhCuYZhGIZhGIZhGFs8bq6WineJdErqygZJQ2l/ScRVHsyk9arZHRpbNqY4NIxNRlZaJSF9GpbI4gG7S23FEClpadania1zYRiGYRiGYRiGsTWRlZjbXRkN4rIBu7hzMVaPz+o5w9iCMcWhYWwy4lKWaZKMlMiSwbtLSUq/sxdKyuzVDcMwDMMwDMMwti5iKgImpbylWlYN2FnqSwdKsrVZMimbaWZs2Zji0DA2EUxVTqYaZcHg3SXe2qCPkVbJpLMS20x3UjYMwzAMwzAMwzA2DNSDWB1m4kkprV8kiwfvKulkKWfcdeRD/hrGloYpDg1jE8CGKIlUizQnq6S6aoRk/aKGEk8kZGvQG7pHnv5Z/7n+uz4Oc7+NrQcrT+M9ZQutfy7aXcR9a+8vu5W2rTj9hmEY7zbuuZL7vqVAfEO8o7JEOLYkUByiYMkkSqSqtVaqK0bI2t6jJJlu9enL/TOMLQXfBrOSGDt2zGXujGEYGwUaV0b/xFMtUlc5SFb3niDpeFKSnEu4ZXNzLjc/6BeisQsdRcBfi0kWPWihY/c9f9Lt/aI/2zwc9aQ/zbu46M0bCcJzAUTCLAIb0+RjuulZHxsXr1zGdMCm2DTHh6p/3X8ffjQcvhUeUYh2jAJ3Bc+J/NcNoW29ynkYwdWNDfCcwWZ3eC82JvJxa5/WKBsSr7Z5+W6TS4/Ge+PkqM8jX9/yafN9jQ+Bv8WOQtbXhUjcvO+bgFyEfYj6l598C2HrHz6LHf4e/a6JDFH2ad1EfeSmgHhrVP2HT4eLea7M3HszfhY5Aq7fdruJefyt76yf7k5/8E77gu72OY5QH95DfHQ7izMxzNW9DYysD6LzfHkn/m8o3YkX9LxOqJ/+f8dsBmX/TvFjOU1FmzwkVR2k3KU5d88G0KO2tZngq87GKWk/Tobcs0Xzw3uf959vhYdDb8iPhd0XV683vDQ2jDDWd3XHJaItoR9oc8lFsEhMcarpybv19+IquA7hbQ6Q3z7PM3qUSKYkKYPXzpFUSQlX9SCuZr9lbP5kMhlJp9MyefJOEjvkkIOKNGXDMDYUbV/6PGiVeCYlywbsJCv77SDplEgynpZYfPPdGIWOALktrt/CQ5i/cZ5rKvm5hz8PQX1wZ9KaSB7gegPJdW4ZoLgvPCz1Fr0xltCDH7jVe5zP+j+j/+L6r+cD9I5xfmtkMiqAJ2IJjQapKA6XUO4S33djkEFYhBJDgvbvITndDvLTxWgjRgkfnSJbw4xJwpUJecW0+VSqVVpTWi7kRQGUXyIRk5JkUuJJvY84aRlmiCP5rMkgJRtShtm03luidYnGQllF84NiUY/ZgK4nXoc0+DwuDuXu6onC33ej7MFFTYOKkbBOyx433YtT2/Ry+N/vLtqGNT1pjQt5+07bczZL3tDHuA9XDxJaD6m96VRa62pK62x6fdoduaRTX5Nat5NaVxOYdXOewU4uboDvG1pnO8L3O3qon8H/eJJ8iWtcU9LSktLLuXazHh/phMaXuHJPaUWpS0dGB2euj9UDXzZmXDcVru5qNEl/Iub+SkyFpKyWFeXV2ppy5eALNqA36H/yoITnhJZfaVlSyxl3mgfuQUqvpX81D3qeC7mwiuYf17ReabkQJfK4p/6vb3/4342bXZnqp6t/G5CajQF1NYY2gUj4E0XizkV9Vug1n8KeQbZQHeIJrb8allNeFGH9M5jvm7iO+2B8/ic6eT6AK1f93/045dyrvy6YdnA95up/YhOnc1Pi+jlNA2WbjCdy5UqKfX0phNxgmEjv7TryHsIOtIlkSW6MkDu5BbCx6rUbo6k/rnvRzKZ+ufGDnmhtbdV+MiMpzaMwbnDkwit1z0B9tuhnXO9jrJfV5wrX1/dB7yBu3YVs8GN9lwiXDgQK9xJa61Bw5OQI9+n7Y/cnFz/ygbjyi7FrQu+jbiFNUBl5rnKN0S11jfDc+H8zwbUM9/yPS0tJlew25y9SLmlp0XQ4aXAziqthdERKx7JNTU3y/vefZIpDw9jY8KAoaa2X5li5zBl+sNSV95VEqtUJk/zbXNFhhcT1IYyQltZoohxsbdUHXHOLpJtaRRob1REPfBzqwy6hj2sGAiV6Iq2fMQYmet6NFvQ7GcFgBcpKpKR3pVRWVbiBO+OGtAqHcXXPg5/BzTuFAUZaH9CJbFwaVVhvbW5mjMLwooCYJFWoZXAVR2B1g5J3Hn5HIJwy4EtpXtZrx+vDcsOJNnC2orJMkjpYdpc3RpQ0bynLBIMrTWuzxqGutl6EA+VKealTWCAIuHGaHm7Ar5nW0qqfzU0iWv5uQx/Ns5K+vaSioswJ+hQ9b6ASucFsd6AsGCY1prReNTR7Ja+GyGDPo/7o1wTlU5qUpMaxO147YU8Lu1Xj2tTUrGdISPuSj2d0cFmWkMqyUo2LlkQ34/2O0GhkVYhubWyRBj3ahMlXoql1pKxXhZRT9u5E1/FyCib9bND0ZrV8ULwwbH43oT9LaTx6a9tGONRqoWxYnlKG6UzKDfrxIaPpSWkfUb+mTrJ1DXpGz2r/kawokfJEUt1r34IQopVVi1WaNQ/STVpXW/TQei4lJZLsUylVffQevTetQklcw0hpxUXBuLGg7hL3eFbjndTWo/FZu3ylFoz2mVqPtbJJUvu/MupyXHsp6iqdqH40qACYbVZ3KMvqtU1WVEhpX41z7wrXzeLW1VOXI5svTuDTT9ePa8SbWzJSP2cxEqzrY2KVFfoIUGFWL7u0uHShFMxIY722V96stWrdbdTvA/tIVa8yzYoK9TfthF7XZnrYVul3G7U+0O+27Qvwx5dBicaJPpdnXbwHyg1XLnqkNX4t+mxs1f6so74kpn1vVutbmeZDWZnWW/eM3Xj1r/tomrVtNeozqLm+SccjWldpOC5v2sadtCVLS6SivMQJ6t0Fn0gfInxztlla12nfRKEXog4TyaSUldIm6OP1jh6Wb0/QqqDPK+pRVurXNXnFTpHnA/WyvLxMSrWs3ICoG1GinqVaVajSMQcBRX1FYcI4J5HQ+lypefmelPvGgbaa0T62Qp+dq9fW6RnyUP9rufk+zafcqW/IcC33yvJyfb5rvjPW6E5m5qCvpr2sWLJK22iZZqR/1m32aCTd2EUP9xxzyr7ctZ6g/qRjOpbVOpgtVQ+0nTZoP9m8plqfFXqyVOtnqY7DyrQP03ZEEDF1n9ZnEHWwkeclYzZ9vjDOK+3fW8fe5VKikUnxAt/dsOmlEeoF/X1Wn3tkRLP2lS06Bkq1aj/fqHHjWR3TZ4T2RU6mcO5CrPTTvYTST571yBhoolNYYej3qjIpq6rSPkTHpTqWz2qiUI7SpTmjBe/Jew4p0MjpGK1V6qtGyPjlT8rYZc9IbdVwKdHxjq15b2wJpLTdNTQ0yOGHTzXFoWFsbFSEkKqG1bK21wiZNXKqf3hmdaAeT7qB5OZKqz7i4irA1qxcqxItD3Q9qYJDZa9KGdevl4zr30uG9OklMRV+4ioIlqpggQKud1nCjWUYHGBhwKC8SQfSjSoQZ+oapa66TuatqZHnFq8SqUEBoA/+fn2lpKJMeqk/CAwMNLHKeScCFfmc0QFGRgcYWCaxlkhTiw7aGXfk3PDGE2Wh8EbWvZXVtDDI2ITF4t+k6jhJheMyjVdrS6uOf7RO5JJK3Mi3yjIdIKsgldL4oIt1A6YNAJHcFZ6Gi/VVg5ZF/bp6n/cq6A4fMViOmDxaBg8fLP37VcmIAX20mHn36TOBsRursDTpIG9Vbb0s1bJrqqmX1+cskWcWLhNZp3XDDdwqpaJ3uVQw7QLFQTcHa6S9OaUDx2a9R4V6BLq8EIcfWo8YDGtelCQRXLuXDy1aCcv1M6uD5XUokIoKhnFp1ToS00F3Hx14vjsCfFZadECrQ30pSWe9oi/kFMFr3ajQNrVOzzmFtp7jHX3nMcNa1CvaMpqHca1XzRrGxlDAdxvNXtJRqeWf0sE75UTTQhHQIygmjTZKGBW1pFXrR119g2RreFGRllGjB8kRO42T3v36yKhhA2Sg1tkKLT+USjEVTlEcprWsG7S+rtC+Zk1tg9StrpYZc5bLU0tXSxZhS9u59CqX/gN6aXuk3VPLQo3vOa5m6R/6DQRnyqG6GoW8tjE99tx7e9l9zHDpNbi/jBzWX/pVVUil9pdUZep/CLlWB2KrtG01tmRl+dsL5a3l1fLMgmWSXqOCeQVxrpCq3r2cYES73OAIb2Rc+kH7GNd/a7yatL9vWKt5Xa9tryktnzlxP0nps6PfoD4ydsgAzf5Sp7DVW1zT5HmhRScr1tTKmnUNUq15UPPqbHlcnz+LeFY063Oif6Uk9RnRS58V9NPdLTSsu1oRMrWv5eGEcjv0B9yeUemyTNtaq8YnWVYqZVofONfNrkbd+ucVVj8x9T+OgpNMKILrYjToJv1AgVyu7aUjJeOmAuGVVtmofUVDfb301/bT0triXia5ixGIGvmQ4iVg0ismXN53A+eV1m/ypkn74dJW/0kwPvc9vEiLUafV7xJtmyj0WP95U8HLSV6qNLZmpa+mb11Do/YfPLNyDkDLr0rrQlzrRYv2oyXdjA9KrjQKGk0r4w4UbPnS1T49E5dUBVa1Ja7OuQzeAkllU+6lbIOWXXN1tVTFNJ9Iq7Y1yjO8tCKvy7Rc63XckehdKVWajyzR0101FeXCDIe1OgYdXhKTZWsatEy0fnDNO9ksoVRdu2bMoulPYHWu9ai7ymLXL+rt9C3JkoR7KdvYmJKmVWu089D61btKpk4cKduNHCgDhgyU/v17ywCeK7wE1ZuprSnNJV7Dvr1klRsDrVm5Rt6avUSeXLRSK70+n8rLJdm3UvvTctemnRVirp7HIt83BuQHbb8eJTMvqhmbaP3vrTLEMI3DGP0cM6CvZHScl+DlmsoatI8y7Q+cVbCmCSWg1h4ds7VKs7bdhkYdO9XW6figUaYtXi2zV+jzpkHHkrjXtJX2LdfnjI4C6W94GUckyFRXR/nx7kOrcDIgY//ScmksGSSnPfEZmT3ifSoPNG7Sfs8wNhYprb8oDqdOPdIUh4axsUFRVNpSI0v7TZaFQ/aVZKpZBxAqXLihz+ZLSzYtTeua5KT9J8kuY4fJkL69paK8TEboAGX0kH4yclBf6a2DFP9O3b9JddYjgfBVL3vllf/OG06UTy/MWSLLVtdIow4If/HvF2Tu8jWSramTWL9e0r9fbx14p/0DFiljA2DAxfhhjfr78fcfKOccs69Ua3q8isCDYoUB0/+mvy2/efgFqVXBsryUnc42DVhfMBVxlQ7gdh41SL75saNkkKYVS84opSpQNtY1yo9+/ld5fOka6TdmGJowP+jpAV55qvmgaSxR4XDl6rWSXVEjgyYMlaN32V6O3Wey7DBykOyx3Ui9jpqGIDoOw/vnB11LtOyen71I3lqwSl56e5G8MHeZvD1rvrMm7duvjxskdyZgqjduXLpq1TrZZbuhcuOFp0jDumZn2OEqCmg45aVJeWXuEvnpfU/L0up6qShVQbuzEsJjFcbXLlgiR2javnTBKToIrXAK2kJQpL46Z5n86B+Py8qaeumrA1iUF5uyZTK9f+3y1XLklO3kq2ce4wbHLfoQdmiyECwQiy757QPy9KuzZdCwQe4h3WleaitsaW6VvjrIvurcE2X8sH5SjRXRJqvJxWFQPHHCCDn9E9fKGyU6dq+sdG2wJ2QY4Ce0zpaVSc2aWkmvrpX+owbLB/ebInttP0r2mjhK6+tw146oql3VV6oDTpasqpZpWkfnLl6h9XWZTFu4WKY/PlNkUJX0G9yPjtr51ROBglrqVBAIdyocoqCqWa2CUU2NjNtxjJy47yQZ0r+vfOyI3WQ7Fe64Tjl2EmMXX+ev+rmiukGemTlPZixYIW8vWy33vzRblixY5tpYL+2HSzcDIYO4uj5B+5mE9jH1Tc3StBJLmJRMPXgXOW7PHVXgS8jXPnSoCr9Ywmq/0I0yc3o3df+CCrqvz1+q/cwyeU7L7/HX50qrttW4Po/6VpQ5/7qq5g2NTdJH+4Rzj9tPDt11e30GpZxCI0B0qtSvh556Xa756V9lkPaLKb2nsza3HvUmo2lt1GPCcO1vTj5YJo8YJPVYZheBZw5TVP/y5Kvy8388Jb31eYci+N0jo2nXMtAg1yxaLd/61DFywt47yzoVApgFQTtogxYEL1Wen7VQfvD3J2RlbYP2ySg7c9c7A68SMVmzbI0cv/sO8o1PHCO1CPYUcEA9KlP/pr+1UG6671lZWlsv5WUJrSObLk8IvZF6unad3Pil02TSmMHS1JTrg3OUJkukqblZbvjN/fLfOYtk4IjBeeVDB9AOmvQ5s9u4ofI5HXMM12d7AxbEAU1rhfYTDZmUnPSVm6T3sAFOEbslgnK0fOgAWf7T38nM2sfk7ZkLaK5ty1bhVzIZk8GDB8inzrtOZms7Kysv7/ZzIa3tqlyf48t/9DOpy87QNvqqn3mQu765Qjsnnk9rvtz64LOyRsdzPOu79SJNM829OCvxyvRVS1drJ9akbSkunzjuINl1uyEyfGh/OUrHcAN1zBLWzu3o2UW9dP2U/uHFzFMzFshrOv5+Ttvco2/Mk4bl1ZLQ50lfPXh5i2MU4P4Zu3FyGuOBCu3n9tRn96GTx0rfqgopqSiR8YMGyNABvWR4/z4ySNPi4qqp8cF2PNLjuetc6p8W9Xvm4pUyY8kqWbqqRp+Xy+WV+avkmdff8opEHf8NnzRCGjWdWdqb9nGUz8ZKW0+hmWB5XtLaKCvGTJWP/uv9Mnfo3hLnGdqdZ45hvMcExeGRRx5likPD2OikdeCoT7cF/feQ1b3GSEkWc/TN/+HQmM5Kowrtjfdcpc/dstzZjqHjcG+Hcw8+pk7GGSR149k8b0W1LFq+Ru584hW58Q8PitQ2SsX2o6RXnwpJt+hjdkOe79ymY4TVc5fIlz5xvFx/7om5C+25/eGX5Ku/+pes00E+VgabCqc41MHjqkXLZecRA+XfP/6iDBvUJ3e1LWtXrJELvvxT+ZMKzgOnbCdZpu31cKDjptxpXWuJZ6XuJR1EpdLyj998S7YfMUS218E407PzMJwBHwZrCjkLPBemHlrATpjXz8JoYN3HwPg/L82QPzz6qvxn+mxnNdeZUISCAMXdyqWrZKftRsrrN381d6U9j742R8658W6Zv7JGepWXdZ4N6m9M6+vq12fLRyeMkJ/98PPSf9jA3MX21KkAeeFNf5Pb731G+mieYGVLcjdVC2VH9bXzlspH95siP/vOx6V/v165K3lQXh7zjZ/Lw8+8JoPGj5JUc8v6dlUMhtCNjS0ytDQu//r+BbLzmKG5K+8NU4/6kjxZUSrlvXu7qWndAXmBcsWyIlZWItXPeKXeT7/9CTlg0ijZbbsRBYNqpmKhl6AyYFehP3JWYtStvFBA+Bz5exGKahqb5I7/Tpd/vzJL/vbsG9K3kilwWDupHzl3XZF2oWo91o6mSet/w/xlMmCHEXLWMfvLp47aW6YUlAOxiGnYLqG5+KF0BKdMWx/n9hDOmwtXyhsaxl2PvCD3v/iWZMtLnYXWe4kzTNHnW0a7kuq5y5x1+gdOOkg+cviecvw+E1VAxO43j3uRQUfi0uvLisOnHxfuTw6XY/6rUq15zEuEB7Uv+4s+Kxbr84kpjF0JgPX1zdJb4/fD8z8gHz9qn9zZ9txy16Py6S/cIIOO319SGlZ3FYdYGq5raZZ9dhwlt1zwIdllbNft78EXZ8jJV9zurIL69Sl3+dhFMjYS5Hda6rXxtCxZI0v/ebUM61f8GRTlqdfmySd/fKcs0DxneYpuxZV2qM+A1drfnX7Y7vKHK87OXWjPYy/NlHN++leZW13nLUrb1IONiJYXMzgb61ukaeEyefr2i2T/ncblLrZlrab1gktukz9Nmy0Ddxgp2dbOX96h9Fin/coRu0yQX3z2ZBnfwXOnpr5R+r3v89Jr/Ag3jXVLhP4IS8z639+lxTw9d7Zzdj/5Ipne0CiDBvdfP9roijQKp/GjZdm1F2g4OgbawvjH02/IhTf/Q5Zrva7SsUt3ZgFoNXIyQm3tOkk9P1NGH7yLfPSY/WTqHtvL0XtOzLmKgLLf+Uvl5maeh+E5hkI81DFyPd+nNbWm5bkZ8+SPj02TX971uFb4ddJ38hi3VE1zOiVJ7aex9nwnEB3eb62urpdJOua95QsfloN22i53tXOQJ1hype33XM0Ji2oXwbfDZnni5bny9+dfl9sef1myDzwn/f7vKEnq+dZUs46L331L7yikoqy1QZYP2F0Oee1Hkmypk+by/t0eLxnGe4lXHNbLUUcd3VEzNAxjg9GHemusQpqTDLZ5wG8Zzcwtap9JtVH+MAhAwHFTifVB7g8edAjQDFU8nOchzzQd94TknDv8PWyM4i3L9Jx2QOOG9JODdxkvP/nMybL0nu/LNz/3IWlculpWLl4l6bgXLPW2HkK8NEbxpKxpYEp0cZg2ykA+penoxphuI6DxUmG/LpWVtfW5eBHVAlr0egvruDh6knjNYy0fPEUxt7auXupeeEvOPucEqX7pV3LSAbvITirYOqWhCpDkLcqarIaFJYrLM72XjVMybu6WL1+KOZQBihemhgahH7+G9eslZxyxt5x6wCRJramWEtYz6w5aTxC6O2O1CvEoJ11udLeM4iXSoulpdvWzAzTuKCK/939HyuF9ekntGwslXpoQ1r7bpMTimp6MNGuaitHc1Cz1WEiieO9GXHL2BtKq6UVwfa9JabxZk5DurjtQhxjDo6duKi2R6kdelo+ee6w0/fcncsEJ+8ueE0Y5pSHCKtOpsNzTqqsDFu1j1ncM+YqBfwHqtFZVp7TXO/VM1vk1oKpSPnPiAXLWkXtRwTRszWvnV/faGj0Y+U6fUb16jTQsWyWfOv1Ieeu2b8oPzz7BKw1dO6S9aLjqt+svSWgkfn6tNY1jTohxd4Q/6h7lKK4Ja6fRQ+TDB+8qx+80XhKNLZqubmbwpiDT6sohqfFvYmr2ghWy3ajB8vcbPy9/v/yT8tHDdnNKQ5Li1p8k7ZSzlkOGeda5qJN2ljXAaiaUoc81Rd3yrHC/9d5+vSrk0F0myNnH7CPDB/WVFlcjuoHWqxYNv0b72/XWvUVYwVpg3e23AkQ5nnHTkxNaHsS3a7IyfuhA2XvHMe6lAOtx5Yp/k8PzOql9XsuMxfLRo/eWoX36uE0V2MCtM9KaRtYndI+IbkLZuNGONq3aDiwwA2sbmrWMsLXO14NNAXHC9wTLa2h4rHvZEc2aLzxDejQwyMSlNdXq1lXuiOXVtRoJTanW+y2N0N6YPlr/wiy58PZr3W96V5p5MUJ/fPE3T5dYa0paWb+0Ww03in95raNp/dudNvbeQ7qrdexJ+3KW5p00clLEuIp8Sel9a+YtlVRNk1x+7Wfkjdsvkmv1mRJVGroxm2Y4Vtw8Q7jVjcB5iKonjMd9NmnjU/jqpuir3+EoL0m4/vQXF3xYso/cIKd+8FCpeW2OrF68TKrKte92Fu3+ufXOyboxdklkQ0j/PNYr+kHavVRAWgiPFITv/FJcIkkfilH/XHDPVPovdRH+8RKqb2W5nHDgZKeozNx1pXz08x+W6v++KKvW1kppKTOl0nqf+roxkrYBkIoWKZGypiUyr9+eUppucFb7hrHloGM3XgTnfhmGsTHQBxOPuKaSKkklK2lmOvDeUh4OfpDTzNpSORj3+ENFdga9+p804SLtNkSJuTcRbvoYj3B9qGOVw7lMWs/r77gKjW5NI+cjM5LDaFMHQvp32IDecs25J8pfrvusbD96qNSsWus2RYj3NN8IIDdQS3YyQCcmWNYx+YXSenfIekupXPyKBcsAKE/344XohSDKlPBVa6slu2SNPPC7i+TWL/2fE+TTKtCwYUPaaST8YNYdKhTqjW4g2pryoaOAdJsJaBmq3OjGpC7aDIK1jN1AWP8z9S8IBz++5xmR3hpOB0qxdqi/XVn2YKHkawxHdyHCfEbzsS0MPbOZlAwdMVDOOP/90nfsIKmtWecT2fFt74j1Ke0syZof1MiegWpJxQQnOLzH9CDvfLWhLmVldX2TNN/5iKye/2f541dPl7KyEvUqN8DXsiKF6+urJpYDWYI16+LaC8W0n2hR97RkV/6K66bob6ivuUx3wlaufv7gL0+IuI069K5Iv9QZTmjR21FiVq9cJ2OHDpR7bviC3Pa1j8qA3lUuUam0xiSn+Hf9IWVKu9G00PRcHHg+qD9YrLGhDdF2MQx/uEdvdVmU462lq+T3L8+WtWWlkmRq6XtEOpOUpMa/rrlFGpatlbPff4BM/9135AMH7+qukzcsd+H2yKJOurRoGVAgeo7nIEKf6zeYOqwHzwpYnyryK9Rndef7mKw89tpcNx3NlSeVoBu4IuiidJMb2HbcS5ZYwlnilZd2o91qfzZ22AA5fPcdXWJZ+ytaxpsSciDNy8CZ8+ST++6k5YE9kpYV5vnFcG1PpE8F66eV5eLZvdgSlitRde7HBJ1A+biy7MLdRoBSdsmiT+isyJ0b/7XbuCSEnqY4+edd9/Jxc4OixKKLDSm+e8ph7hy9a0dN0bVbPT60/xQZO26k1PAiV/sGxofdx+eVD2LT15GNg8ZZKxh1zFULf7IdpIz+n3FbdWOjrFu4TE6duqcs+ftVcsmZRzsL3MKa4p5p0UPHaqxvzJq5KOJ0BCgpxt+59kuNC9NzOVxXqu2e9XhzP+TOS86SlU//Qg4+cFdZ/uR0DVP9dG//NkZ+a5galxTh5aDOuE/9cM9G/eef9e6sjvv8i0E3C0Edterh7lcnnHeKNnUT+g3+hTE8z2cUimEc/cerPy1vPnmj7Diot6x8baGOd+mnNYXvobIuo8/vRKpRGsoHatpKNT0h7YaxZUB77ekj0jCMztBnmI4FJB0v0Qdw0j/oevLK/r3GP4/bwJiXhzGDQdQbCARs81KS8AMS1vpyj3AdzLDZCNY9nEvq95h726gPbPWDzobnZEkJygH9ogMAPt1ARvnwwbvI/VefJ1OnTJB1S9c4ZVYuZHe9J3TnDtxs6R2gH6CjKI1J3eoaGdGrUu79xZflmL0nrb/O0lGUkxut6eHSnRNkWLQ8kWAB/IQbZLJ5QVLLx0110f8hf/yn3o9/ud/4uby2XmbNXii9Kqt0QNadXO8mG1QwhN95HNzgO/fv/QfsIsfut5OkcruiOjZiEnoGucqxhUK90KOrtupcqLtkaUJWL10rZdV1ct9TP5MBVFLuRwjCIVlB/8A5rauuOuTqLFa1rCVFBUUYKOUVANaD0UqT++pyVDtk3pKyGQM88fpskT6Ves6vPde5yO/jjGyDPFW7qlbGlZbJLy74kJyodYervCrRaGpb0r5P21PoJ8GVqrYp2hgHfSdTwVj8nsXzixa53h8VKBYsr3FLO7CTObX33cbLdVhtijSkU9JcUycnH76HXHH2+6V3KX2Fth2ec5qXrFPndo7mlgDnibu2PScs6m/3nOAolvdkC+VO2ejBGnmvz18mNfXNUorVWE7Z+F6CIplyqipnZ+D2Cjiffv+X2KazKS2/hOw+bqiMqKqQJjbn0LRt1D6zCNRFlspYM3eZDDzxIBkxeay/4NqU5mWubKO4zaoUdjwuYYOHHkQRp+9+De0em2u8Nm+0RKmj2nZp9+Mnj5N+vcNSBNpQ9b/ro3PH+qqk5zO5HyfuPZHdaJzFon9V3FMouQ25rzv4OG883/34ymUZP9t1VeSTXuN5pBeba9ZJv+ZWufL8k+X33zlLhverwoVktZ9dDzeA5h++5h6D7rniniN6nu9xfRLyYsltLLIeHPuycWNAfrt+R/skgtDPQTpmfFzH3Xsed6A0zVwk62qb3LiQ8nNl+k5wUcnHh1jmvvhnnD6DGXeG8Sgvs5EdwlqL7ALNb+Ls5AyeITzG9TPgZ4uQPv2u/mCVn3amDSKThg+WB6/9rIyfNFKqF6xyykfEkU3d73YIWdGcljQvSJEP17cSw9gycG0w990wjI2BeyAlpTVZKRn3hFN6MvLeTAkDiJbWtCxaVSMvz1kiT7+5QIXwufLEi7P0mClPvDBDnnj+Tf/71Tny7MwF8ubCFW6tl8bcRhXh4e4s1vQZjvCCcpE3hVisbT+sv1z32Q/KoTtNkLq6Bmltbd1kD3l8bTeu24IgW3j7w9Bj9cpqGTmgj/z54k/I8XtN0rxNu3xj8IXQnoplJOFMgfzYBeqaWmThqlp5bd4yeXH2Inlmxnx5dtYCeX7mQnl9wXK3ec0KFRbcdBoHN+uh4fpphiKX3fQ3aW7OSHmZPkq8huE9hDiF1HWEDux1oIqCakifKvnsCQe4jYAaG5slvcVYBm9+sAu47+Y6rwMIRfGSmKxaslJG9iqXF379TTluz4nufCrd6uSBWJZVf7xlQLREG7QPWbByrbw2f7m8NHuxPPWm1lftY17U768tWCZzlq1xu4AzxT2AWtAJTbmu+F/T3pTsnOXSr29v53GuGncINcIJIRqn2pYmGTdsoPz66rPl6H0mufZFalVU836pEMTuztGpq/XaxogX7emFt2hjC1ycif8r85bKvBVr3Y7CtU35qftueYscjS0t8szM+W5zKaeUbCMUbnroY1JMx82mpVX7lNS6JjnrhP3kT9/5hIwY2NedJwcoONfXcJP2Fz5nNO/0O2Xy5qIVMn3OUnlO+xb6GTbe4PeMRStlyZpaqaX9re9nyE7C9H4sXbNOpunzhjW4Em56uTv9HqP1WKPXq6RUSt2Llggab+oGO/yDK7Es+SNyxOQxctig/pJeuU6zTGtnvqg3OnhNmbCRgDS3yAXvP0gmjhrsL2pJ8doOIRulepRgT8A6nryQes+7deM9RAufukzbrGuUTx5/gDvLkgVAG3X9q7qjnud/66+c8ouNophtnNLxR8xNO+0u/n73BjNXJ985xDtfoV3/5YLZOJ0K7a2yrMRZxLk+sKC71px0eZnWcGtrGmRSeYn865JPykVnHC2lybikNc+cBZ5TjPm8zOaWWghesfnOAh3vvarjtmf0WfL4K2/LEy+/JU/oJ2Py52cukmXV61yf6tHSID7qlxsTal7S9yTc+w5mmGjh6PkXf/J5+dEVn5Th6v8aHRe65xt9uX5uEtRvnhRr1jXKrCWrnEzB89GlZ5rKEC+oTIE88bzKFdNny5NvznNuFq6ucRvBrYeO1T07fBm6l3S5+qJShowbPlAev+lLMnW/naRBnyXkb0GxvGsQs6S2g5SUSktppcQz757luWFsLGIH2+YohrHRYGouD8MVvSfIir476JOCRxTTVDfWwGfTwZpQdSqY1//jWqmsars5irPY0TS8Om+JfOfWe+XBl2dLc50OTFr1Ab6m3g08nITBYLFU7+WtdJ9KGTl0gFuvbOKIgfK+PXaUA3ceJwOqKtwC2CxYjnDCA98potI6uIkxtTku81WgPuW7v5aX56+SfmxioEKzG4x2BoOiZEJW64DqU6ceKrd97tTchbYwpfcX9z0rl/zx325nzEpnNbNpQEHFTnnskjdhUD/557XnyeQONrJYpoOnC7/yc7l77mIZOGWcZBtb/KCoA9zgXcusvrFJSmIJufqTx8nnTzzIVTmmADrrn1zvzhpMJW5R9pjMX75WHp3+lhPeX5m7TF5fuEJWr2tgjrrms9ZTFXKHDukrI/v3ljH6uc+kcTJmcH/ZfcII2X7kYCl3llt4HJN9DvyMvKrpKqsq17A0rc4SrDgMQP3mKGtk7OhBMu9X38pdac/fn31DvnTzP2XJ2jqpquhi12vKnc1R3pwrHxo3TH76gwtk2IggIAcYhOeyE5NgH313XP/7h+SiX90n0r+XVJb7KUKdhtdDGKSvnr9cPrT3RPnpt8+UYYP65q7kaWhOyVHfuFmeenmGDBo7TFItrevfwndEQ2OrDEzG5K9XniP77jg6d7YtdVo3/v3cTF9mri/a2GRlhLbxs750o8yMJ6WsUoWmTnIPwamhNS3NKgi8+verZefJ4/RkKBiua1lqm6EXjefWRpqjbefRV9X9/GXy3OvzZMbStVJd2yDpJu17yCNtv4O0rxk9oI/sOGqQHkNlyphhMnncUP2u9dXVe4SKuIw6+ZuyeGWdDN5hpMtjBKrOaNb7yohzQ0YqGxrkt1edKyfsPckLH3pvuB1hkPod6v/TKuS8vWSNPKefTLNdVrNOlqvQws7x1K5YRYl2kaXaLw6WHVSw6aX95ScP20Mqe1XKWM1Pt3GLsnhVjXzxF3+Xu559XXpXVkoJirN38VHCbOpkJqVCf4msW7Va9h3cR5750+Xumt8xmWrlLUPJg2j7/+vjr8rMpSvlpVkoSxcJmynV08+oO3Woaa2QQb0rZMeRA2V7zYcRA/vJcdpGhg3sI6MG5tvIP55+TS782V9laU299Ondy9euzotN+8RmqdByu/Ljx8q57z9QhXJflwq59vYH5ZuX3SaDjty7+5ujKC36nGtV92ccsad879wTNR1VuSuavDR2VdQNdkb3G2+5KerqdXVDi1z22/vlxr89IZV9qqS0p+sr9gCaFd15tQrmVeUl8uevnS7Hav4ylRGrpJas9jFpZge07bNDc1ywYo2ccf1dTjnRiz64i7bi4GbN6zULlsqJB0yRe645P3ehPf948hX5ko4lFtc0SKX6v6mqtcsHTWJDU6s0zFsqj9zyNTmMKeNFWKbjjgsvv13u1v5poD7vurU5ipbpIVNGy03nndzhs322toMdTvqO9J4w3FmebinQrlGBNTa3SmN1vcz/46UyZmg/aW1JS0lpwvWDbnmTNO5EyvR5xOserMioZ26pAj36/d8lsq4xrY9Y7U1d/eo4T92uysMHy/IbbpIVTdNluvahzITYMJjRkpV+Oj6YNHqojiXCWM/7l9Kwkvovk2iSh16cr48Sbw29Icoy0sxsm/+9Mlt+puPLmoYmfe6qX/QpLh95saT1KRWTmtp62WuHEXLLV0+XPdbXGSzXcYVKX+uWjoVj2sdiyQ6zl66Sx155W15bsEKefUOfg4tWypo1NaIBMaglAjru1n6oJC7H7TdJRg8dKHttP0qm7rGDjBs2wC/NoX0v43j3nF1fBll9FqYlmeuLXn1rsRxw9vekXp+p7ITMi2foVvtXQntjc5QJQ/vL7V/+iBxYdDOirHtx9sM7/if3Pfe6LNP+tEHvEX22Cy/SaHs8Kxiv6XMCeaK8X2/ZZ+JI2X7YIDloynZyoI6Tt9Pnp8tn96JR3a6PJnVRswU/NG/e0Lb/0Ytvk1d0vDtg1JC8+3cR4qMVUlpKe8nk+Q9In+ZV7jttzDA2V2glKe1j2BzliKlHSuygg/a3GmsYGwV9DOnDiKk+K3pvL8t7T/SWLtrq/E6gmzedKQ51xKHp0EGRDqjPvOp3smh1jZT0VcHHTbkr0fTpUARFlT4AGUyndKDZqoJ5qqVFMjooweKhpH9vOXWfSbLLDmPkmx+diqfCBh2iAyQ3LU17IrdxgH6yLtavH35RvnTDXZIuK3WD1C4f8gzOtiHFIQpqLDKbVCD6zLH7OcVh74pyN5BncMhANJbWCpigi9fBqg5k//SfF+Tu/70s/3l9risThLyEpp/BYUzjidImRZjNzZJmQXP3tlt/q+C5x3bD5cDtR8qhu+8gpx62hyxQQX7qp6+TJeqCt+V+DZ6O47vJFYdv5BSHPyyiONQ8QdHqp/H4gbAbq+nPtxYul89qPXt4xnwdd1dqHeK9cKch9oj3UnH45uKVsucZV0mqgqUDqOeIDBsJ2ql+0H7qtA2XJ0u9gFck60KYWD/Vr6mVz512uFx15rFaX9vuaE7ddRMh1A8s8e596nX51QPPyv9en6N1slXra0LiJdrfqIAX13AxGHHrqqq/7CjuFHMICpXlsvPYoXLoqMFyzKG7yVEH7CQVel8stp0MOP9CydbUaRDF4xpFezFJahtau7Jazt5tvNx6/efUe6/8C+VDjlK3qf9NWm53PDZdvv7Tv8oKFPG0YfrHkqTEmfapB9IDcXaWJ2zUQOZo+fca1FvGqqC174SR8oFDdpOj95qowuEK+dT1d8rL85dJ/z5V3RbeNhasQliaSkhtulHKm9Jy53fOkGP238Upx9zahbn4hLXLyJMXZi2Ux55+Xb5y8z0i2i5F3VJm8bKk659jPBS1X3Eb3rTyfOBePXRgOnzEUNljvJbbjmPlhCP2lAlD+sllv7lPfvS3J6QsKNpy7bYzNrnikPirwH7hSQfIZeeeJJWRnXKdpSHJ0XpSWhKp35pe8utRfYaer/3NTH3W9u/Tfof1jQrtSJ/Vh+46QW79wodlhxGDfRvTuprJtmqUEm4K+AAE8/X4DF5TWydnXn+XPPTKbKfk7k7dox0kNK9XmeKwDVuq4hDFYElZiax8bZ4cd8zebhMk2lKL9nOluXETFnAPvTjTbTp25J47uDpAXQmf8L1/Pibf+tyNMuTofaSltkHHGx3nAf1iXMOoXlkju00cIbMWr3IKua7afFE0DqzZffDkcW4jPjaJC/UbWrUdsxlgfVOz9Drpm1oPy6WkssxbjfckPN+0ff+ht6YZg8Wxe9M+Ts/RP2I80KKX61bXyo7aL/7h+gtk7+1GuDrk1+zjhZn6o38059Qv57Ms0vHSLQ89J/+bNkse03rpLqjzhI6Lea7wQpgxZlqffa28uGeTvbp1Gg91p33u/juMlmN33V4+ety+suNoXz9d2fAlVz78JldQarGUxu8ee1m+9vN/yHJ9BvfTcb5G0pVl9/qA7ioORZ56c4F87KrfyrzZi6RkSH/3jGQpI8ajjNXIO15IMxupVcerLU3a7/JcpXw0/TuPHCwn7zdZzjhhf5k4aoj3VPtfUufHwAEd16ofP737Ubn4dw9Jqz5H3E7x7t+7B+XL+CEVr5Qpix+UXk2rpKVEnwFaXwxjs0XbPWtYNzQ0yBFHTNUuKM1bx83zkHSLftphx5ZyNLtDpSp9Zuugyj35eRxvDQ8F/3gt14d6n4G9pbxfLx0olrvfbgjIm1KERx1gMIWrTAczvaoqpO+AftJ/+MD/Z+86AOMqjvZ3un7q1bbcu3HBNsX03jsBQkkoCZ2EEiAEEkIC/EACIUBooYXeQ++992IDLrj3rl5Oun7/fLPvSSdZkmVbkmVyn/10d/v2vbc7Ozs7M292F3misFAhefyjH/DHy+7C9S9+JPakDO9yMZU0Xe9EN1Hhc8yzfr3PthjrdaIh2GilqWqTBkFSyBGOxDBZDJxfiJFNp6FR1k3MF9Uns1aOQ4zDEK64+wX8Royid6YvgF8MxbwBxcgXxS43Pxs5uQFkB/zIzpJDFGemFfYtQF5pEXL65sMf8OG7Ratxx3Mf4ZzrH8e5Nz+NC+54FqvkWU5pVyrFnVEquwMWKTpmD1EmWzgNBcxOI3qk8OafTjkIAwrydTosebijW21J8Ej/SbLKYvxRWU5Iv0zwsysOMUoSct9aoaFXjMgOX46wf8vBiLPJYwfj3EN3Uqdha0rT0U7mZXTeNWK4nPG3R/CB8Cujs3L7FaGwn/BkUQ6ysrIQ8HiQTRkjhk1uUS4KSkTWlMp5RiBkejFjeRnufOVTnHb1gzj7n0/g4Q+/A/qO0Q0+1M/VCXalE7OmIYw+8sw/XXaiSZR6tuZ1OmK4Dt/5Nz6JX/35XlSJgePPykRe/yKRfwVSvmxkSR2yMgNSdh+yGc2Rm63lpXzMH1yCRuFPOnofePVLnHDNwzj774/h9pc/w9rqeviEvpulf7HdREZHKurx22P2VKehTm2VsrI4LBFbkAYzj/te+Qyn/OU/uPi25+ET+ZFTTPlfhDwxCnOkneiYzxL5kpUlMkZ+5xflo0Dok9+3CNmlJVgbDOK1r2fjsntewqlXP4D/e/hNMZjn666jHuE1xWYgQypYX/KpR8atIXnZLZyGBCO9GcH9wDvTrBQDBs4QI0XuTqSjXwgYY0hnNyLEnX5FPu85cQQGSVsQ5FXz6cbclRW46vF39HcztIY6vmf7he9a9dE0/nfAPh53yp/FK3Dm7pOaHPB2FBr5JBSO4t3Pp+Pjb+doii2nUuXVZYftDiz5TsYL46yhntIeKEe4OUZ+n1xMm7cSEdETudRNYzi2wUdDOI5wYxi1UsYWS65YUIekQPtEfUidyxpd2ca9Ojykn/HlH53IjXb0n0DX55XHqTNUxsz68mrth/f/4QR1Gho62LSQjCIkmMbLSde35izBSadci6vveRkf/7gE/kLR10RnyxfZmkvZ4/fqy3v2Uq8nA5miAzJ6Pb9/iRxFMm5macTwlQ+/hl9d+wj+89oXWFlV16JtCP7WFCv9JGnrG087BAN8btRVckdwU66O2m1j4Pc4kVeQDRTlIY82heiZHtUnSQt5LB2EImvdQhC/jBs5eTJmUC/tXwy/jKEc46997C2c+rfH8Oj70+QSXsSXIi3lKh3gXCPx+AN2xCG7bY1INKKO1ibS9xCo3rhiMWlm0ZflhyMRkTq2tiPTR/robUdY+dQRj4qciMMxZv9je7jrdA408rj7qlFyemUR00hjXXBwzXChNrMfgp58jUDkK0SnNe2uN6PDiEMLn81cjNNu/S8Wrq1GQAwLKjipvZNqR9NvoQWHb1VKhA7q0HJlIFReh2B1Nf54+mG47teHcFSXAVWUJSqolmOHSh6VupsefxMX3/sacksK5bwdSWeUm3Ug99jQiMOQDOJ+6815d6A7Iw4jUVGGRQn847F744ozDrNSDajgcTc6ndooNPv1DY/jwVc+gT8zC/4+YkBG4hrdycbSaE+9yDwuITRJOI3yplNG5ZRGgUmupLRRY009GhvCyPB7hAc8OrXHOOU6BsvUHRGHvC8jDitnLcbRQ/q0E3EYw+qqRuSKsumXMmhUJusj7aNv+6X8F977Cu588SN4RUF1udcT5bgB2JwRh0sqqjDmlL/Bl+lHwu2GW2jV1D83FUIg0ojKsLYBk9rjVznPKK164Zu/nLCP8iynF7VFZK6Jd81j7+Cup99F0udFQOjllIfodGChpT6TLxv4z/qtTxd+ZhQueZXsqLJH+LixvAqNjOyTfp4lcsQZ4uLvXGidT+sYvEf1srW4+OT9caPIq/YQkrId+/s78PIXP8JXWogc7mYuBiSvJ31MGclmNMBYSik320IKatz8BA1GRqcA9fVBROob4czyizHFqDVGYHTMD90BRkeE5bNxbS1qX/kbshlBqDWxyix1sAn5zvfzcfTl96I2GBLDrgRcqZJyXafHadnlO18wsZ2s8UBvJX9IBXKmBqxKXq6lW1dRgwy3C9kyFtHQYnSNaVRe0zG6M+KQRWbElV/Kd+tZR+KE4/YyJ1JQL0Z/9hF/QvKNf6iMYb/g1EO2Net26wsf4+r/fiDjXBI+D/tBJyq1IWB/FDlXvbYCQ7Izce+fTsZek0daJ5tx3xtf4oZnPsTc+/5gpRA2kR349S1P4bGPpiOT0aIylqy3lPpcFyrSEYctsCVGHFKmc+mB2rp6xCpr8eXdl2A7Li3Bc3LYVFldXotz//WktLsb9176S+SJTpAKbn5H/dcx5kQ4R/ZHXl62OgZtB3Z7iEnfcOkSNYLUB24A2D71okftPHoQ7jj7CIzTiMN1QUeS96BL4RL9IJ9jpS20NwLkNz5XL6e8572kAgysbigrx2s3nYeDhP+Yz7CWqRzpzU+mlZdX468iH178YBpWzF6KbNEHPXzpR2eXnDf3p8w0MoW34TI/orghniH0TjaPrRxzuFRNbUUtPCLfTj9oJ/zppP3RvzCHV8lzzTNtqJNT8jWGZKy+7zXc/NIncGf79eWgPfW8I7AaZPHORBxOXbACp97yDL5fuBKF+Vk0BZrKnQom6agp92bdOS1cKgyHW+om7VtXWY8s0S+euOZMHLrreDknN0rhL7O0iPl+j8i8Pz/0BoIio/2iX6iy0EPgfo8uaYuQy4f+lXPgidUilsFobrZ9Gmn0XtBuDofDOHq/3eDIOe6qXsmxFE4smGXbppHGFgMOAjxsg4Gj3vqUpN6ATjkOZy3G6f/6LxaW1eh6cOvRIUwftr5R1aFmQIMmKEZarK4B/z7tYJxxwn6WssKcJretvARFGRj6i6tRKYN8rj8TSWdMcrSjeFOZ6qTj8O7XvsQVW/BUZdI12BBCYTyGu847Bofvtz2SGsFpUVtoQWWRU+WuePh1XHP78/AOLNEoUDo01FnR9q2NAivP5Wm2GqG/7MaUgwYvpxZynUond7ftBHvzvt01VZlTIitnLcHRQ0radhwKHn1vGpYJbf942qFSdGujBdbJ4snacAS7n/h/+L6uEQXFuQxSXC9/dwab03G4uLwKW/3qOngyA0iKQd+lnE7a8cOiUbuksvpl9epKjM7Lwt1/OQm7jh8hBgCNx5Z9mTzynze+wFm3PStGgRu52dLnLaWf52yjRXlU0NqIMVKGmeW/JYMZHROTNo5Ho/A6fYgjAqeDEeHWRR0gLPIhKAbXmqevQkkBDa1mmHVfafBB+tgbuOGJd+GS/sXICE7rSO0ULCVLbD6bv/HTrgF/8Y/WVf7w5QkNxQxpY5fygp2zZ9DUXxetxhEHbosXLv+Vlr2pxHJe20bo+/3iVTj1n0+pAZiVn62rI2gbaWXMh14iB78208DApFmf/CLV5fdwlPI+aRx/ZLTmSzpEd09V5qY1WSKvbzvrSBx38gFWaks4HMOkLguRiNFxKgXnraVydJi+M20ezr3nRcyXPpHl9Yqh3bnndhqkoSsDlQuX46gJw3HHlaehrxjxrXHc1ffLWF6Pr28730ohmtvmrDuew0PvThP6CQ9Kf1wv+Vm/tONwHWypU5XZ4JXLy3D8gVNwx7lHoyArdUq7wTdzluMXf3sYfmnDRy87CRNaOediIkMZ7XXr61/ggkvvQt6EYYZPqIV0wFDkQv7RLOtlvLah7SOyYOfRg3Hn2UdivOgHbSEcjcB34KVwZvuRL3UUVWpjH6lo7kHynTLS50blix/joeeux8l7TmCikEDqbzE9eZTjCeVPg+ghJ/9B9MDZS/VFSkGfYkTD3IXdpT4u3jd1DGk5glBaNqcxRcdN+aTjraE+BGckhsN3nYCrf30wRvcvMo64lIbQF1s6bjp1/es/3f8aXvnmRwQYDcj1FpuztgnWZYMdh4tWokh0g87Q3dYDTN3oaRSILle9Yi2KC/Pw9j/OwsSh/U26BfOimNc58eXcZTjvzhcxbdEqZAY8PfpCjmVOiExhFK+0ppSLqaa19GsaafRCUDxExW7mRkpn7rsN9XYRXr3woISkI4GGMCOR0kf62FIORkxodB17G/93pB1tgdiQ2jTnNYMjaUPHVSDTp9Md73/kTT1rDLaU3KSZKAiZonCOHdEfcTHUGAFn7+a3qbDv0nMqQ9eCTgXutjdx7FCMHy+KuEAjCFPgshbVvuaUv8I/YqBOPSPtbb5sDzxvn+a3pl/WhyrC8ukUw5QO8c3N3qy1aUf51kFZuPHz7Xe/pN9pqBsFlD9EgRN65ng9uJiRm1I/GpldxGo/XZB2clgfHSIpNI7XNWBEph/Di4wDw0QPtwSnTl7/7IdICP1zciynoXUuVY4qj7bBeKm8avMunXg0uNwej4la0Chck60jUP8I1gUxdGhfy2nYFkM48NmsJXjyg6lIiuHs9Tilb3LTFekXerb5Uc2fppT2pw1NsxOEH+l8o8FtXjql5uwZcB1DZ34W8MnnePDyk02a/jXQ/kPCCl74eDp+WLwSPr8PDl0egXWx6plSdPtrMw1S06xP+cLgGfZDOvyaHC12hl4B4StpF934oF2Ioi1/uW6XfpP2tO3cCcNLscOQ/mrEk8e7HFKsxvpGBPJzsPNek1HA6YBt8O8bX81GwNvaqdpMaN0hVq4zEU5p/C+B7d3IdZCFBzjVnZF4bWFZeTWWVlSjvDqIBSvLrdRm2P3/nP23AwqyUFfbqDJNXyx0AF6m124i43XBLTYYfB6rp048OvCXrEK/7UYbpyHPSY5UucgU6sBrahrwy78/hmdlTOFyMjn5uYiK7kuHF0WtfUmz/Ey9ifmemqZ5rAfxb5bc0yF64NMffofT//E4qrUtjLPRlg8qty25Nm5gCU4/YHv0L85FKMpZKnKX1EFgMyC1Pk3fE3FdeqdsRRkue+BVTUuF5rP0jcEleRjdv1Cup/O2Yx7samiZXdxZWcqi/g3RoWkztrIh00f66E0H9Tz75QJll6jQoqD20iODb2D4mT7SxxZ22IOaHvorDRv6hk+UD1+WH/Pcbrzy9WzrTDPMQG/oNkkMdzREEXMLXeNm8N9U2C3Ss2pD14FrY1F/GzOkH4b2LZBvUpMUNiP9qIjOWlslv1zIEYWdb/4NP24abL5m+5hP68RmhCq+tMo7aNABJflYKQrbM5/PkiLbjn2rDookTtp/Ck49eCeElpbB7WHUl7nhZtaVt2wIfaONYY0KHTB+qO6mq8ltMM6ahSsw//mPkTNI+jynIzPLJvCX4VU68ax/Ij46w7Ma8UyH1aoq3UWZ0AXzU2A7Pj+fsxQraht0WQB1pglvbSpMuXlY5d0M0HVn/dwt+HvkSZ04vTC1JNozpGyzV5bhnWlzuQeKFTnXBeXlLex662cX3LNLIbXnlMxA25H5itG74Ld3vqhfHVZYLuUUeatPTiZ27JMHt/ANf3dl9TgyxONcey2CEdwgaNIoneaoNrL8ibGhBFyHsXb2YmTq9PO2kR3wSdHI0XQfGlmYxv8GKO24JMmwfgUYO7BPU3dMBcfHOSvLEa4PoS4UxbylaxCORuWM8IrlJedUWMLtdGGXSaMRr6nXlzKa5ycL6S1qvwLVVfWa8tFDV+gnl39oHoMkn45zDlQGG/CXR97AC9/8CH9upm56wkxNYwGzbwR4Ha8nybnEh9frQqAgB5+8+x2ulOeZPA7dCMs0iXme4QDgwB3G4bgJI5GsrEM4FkWSi5j3ErDcLCtlW0Y8qcuEvPH2tzJs1+p5bprGc5pP/hF987KxU598BIIhaYuer4vdnhlSMPVzpI/0sQUcjqTILZFpXOOQajRZuXceKrzSR/rYEg/5ywHC+p5GS7Bru+RP0O3G5zMXW6ltY6uSQvkbQTImF6lM2HTY6kLvUYE6DxpwSRHiXJ9lSL8i5TPynPlsiUvvEcN1p0ngwt/2enBdAXOf3sHfdllUM+4A+dmZYuy7cPfzH6GqrnEdetmLp//nd8cgs18uyqobRXlnBBmdQeZcGhuHSDiqaxhN3mqwLuDeHuYtL5OGSMLj93RNJBabWNrZ5lQ2eWd4Vtflo1Pou7n43Un7a1pbxeGOorMWr0I4EtXdOfkAOlm6BCyrlrfnwa7g9LhQt0baA9tpGg3ctmo2Y+p8zJ21CB6f24pC7roS8069Qca0RpKLVanjsO0oLB1ZBvbBI+9+pb90fUDyYQptxo4ZigGlxbpeojoPuwBkUTqvY1I+RqvuNGaQ9WKJ/GsxsPWsf739NVAdREzarD1keT3gVP+EFJvRumn870CngUqf32n8sJTdiFuiui6Ir7njfTSOoPDV1MWrUV7TIGdkxLQEpnESGvz2yF351lNnPnSVmOyd0J6oWkOiohrXnfUzjOhXIEMbnfbN9GCfsmeKvPDmV3hSdBOP6MTcsVrHLMnanHtTkaE6IDdL84psyBpTin89+hYeeMPIKBa25ZhrokLdUoBDdp6A4SJHwo2hXicFdHwQQsWFVzP5UrKqHv956TM9R7nVFookr6c+iHirWTo9ARZJi6VjQfpIH1vGYSQav//ERXcaaaTRe8E4IC6cvbY2aKW0jWxRpKjUcGn2JN+KdiGMGNyyQPuP+mdAlL+8zGYnTFsG9twVa4DcbMSjEY1A/ClClXP90nFr5nDdTrcLX89fgXdmLLBSDWjQq53ENa0E9S/8HXjpLjiLsuS+Mbn/lsgpvQRCOkY6ZHq9KMzN1AXv20JIjMm3FqwEhg/glpKbvXM6AlwRcgWG286hFuVRjkNNsBGV1XVc5VOjGXXdzJ8EEnCKfAkuWQ0cuItJ0nZLJYKRJ5G15YhV1SFD18DjNPDN3HDdDamejkNeqa/yyLrgOrqUNY1rq7CmukHlC0EZbMvh7SaPwHbbjEREZE6M0wBtx96mIpmh6xFxU51JwwagMDsgaeRXkXFSDNsB+H9H/wWYvBXidSYiqi146fCUKygBnWlz4X8K4ajwjNOJsYP7IcfvbeVUMt9/WFWB5z6bCU9BlvB4AnNWV6A8SMehIIXnbey59TDA50U1l0H4CfNTMpEBl/SdqvpGoE8+Tj1we01nsK9ZxMKAL5kyJN+MpWtw74c/oMHjhs/j0WV5umPtPU4RZ3swetwn47E0LE697hE958pwgesO2+DLDOajwrnHDmOw5+5bi36UFFnVRXKqC8HoPZJVP/sV4IpHrUhKSUv1DZp5OvIpejM3XrN+ppFGGutBs9Si3EojjTTS2AzQyDkZ2WN0EnRgNMUzRHmJi5HmjFnGa9dhS9Qb6B/jnhLc8KGFVtQGMri7XlLMvlabUPyUwEHMDGRszfbp4XGLqeL3oaa8Gg8+/zGWlXEatyAhRrt8cF0fp9CJRjdx1F+vx5o3psHl8sltReVMK5kbBfZY0tftyoDXmn7VbjPRwSH8aq7ajGD5Mrg7qO1Uac1bturEKUfynUb1Zi5yl4Oe0Nog9h1uLTTPftGGnKYhzGVleI6R0D89QrQEHSixpEM3weFGCopWsiHUIGOayBXEHXj561lWaktwp+J9tx2F3NwAIkJbRgR2ReRhQsaESCKGYX2LseOYweq05NrA5Fgaztwwy2AuXIP7IrGmfcehy88pyjLsrtvsbYLZ7J6RxhYK4RXuRh9aW4W9i/Pwi123FtnNZRis8wJuMEW4V1cCH01DTp8iZESBFcvLMX3BSuGDlhtuGCTRryAXfz9pPyS/nI2MLI+IlGZH1U8JGmuYmwW8/DmeO+kA9OF30oQvVjJa9nFu5PTwm1/jy8Ur4RZ5orvOW+e6A2xGivZoLI6ifsXcZQ9jzv6HOWmBz6eDkWsrsi3Zkr/cZWsM75OrG8k0RS/3FkhZ+S/SEEHehBHAO8+a9NbDkU3YojyAm7FYu1SnkUYanUd6jE8jjTQ2G1wykLt8ZopfKlQvsXSTWauqAb4c5NI5ia51gG2JOoNTjPR4nLveUVWykUKwFGw1qEiM/1DTZiA/aeiUqPZblPGqLo/wj9+PLz+djo9eN1N0uMFBhijrGhXEhYA1FXj2ytORO3YgKtaugctBh1d3qvM/XdhcR59IR2sK+cQ4PW2HrYC5y+FgNMDmZtckBY7tZGlZGLsaedk+5Bdk6y6Jyahx/vxkwJcSThfW1tsRRCJtWshp0x8SYnzGi/KR1HVXafT+9PuJQxggPzPQHPHdSpMOxoR3yCR+D577fLqm0SnIgxxiHKzAbmMGYVTffHCZBJVe6zhbNgByY706BmSKAX3YVgMxflg/PcWRInWpipNveh7Y+XC411YiEbLatw30yc7h3lEssElYD3j/tJTcwiE8qD05FkNRXqawsNG5zCZNBtwTlrLuwa9mACMGIiMZgz/Xj7WrK/Dc21+jjOv6rcPLhjOmDOsP1AcRCSf0pctPTV5Qz3K5XShfuBKeg3fEiG1HW2ccutuw6SWE6VPfL1mNl776UccPn8dtogL1TPeA99ZnsJ0jURTvOglz7r5WzzHK3JTLlM1Jfcgq7g5bDcGEkQNUrHXV0gpdCZVvUthALjeCWq5pXI+xxaaBouspLHlGJ61V1TTSSKOT6E75lEYaaaSxDtSBJf8ZGcFVs4rzuGNpM/S0NbATMzhdzueTnF3/dnpL1Rk4vYU6T9yqAOnV0jFovh+2+9bAnIVwBXzgLqlbTH03tqCtbZVUJEWxJAt5M1BTkocH5izVhd2NOU1FWj54OEUp1gXegXvOPwqoCApt46qYKp31zEZgiyF+14PRC9F4DA2RsJBBCEE6t0EPB9e+SjQgJnQ2dupmIhrLF6NxRCOEoMXHRANdH14Ov9utO05yIxUuLs8p2bo22E8AdAQ6inLwww9mDVpGOreUMQajRvTHwIElCIdCIpOkdXuhUdmVUBLIn7wsn24e0pzYjIaI8LEIZ1emH9/MNUYs+wDdhsyZYJSqYGj/EgwvLab4Ud5Zx9eyIeCAINfH4hEEauuxtZRN3QBSNr2vfGrEk+D1b74DiosR5/bVdY2a1lbbZmV64GbDb0CTrnuXNLYU2KNbSHjCn5+DbXeZiDyNlhOkWIvko8raBjzw2Sw4pP/H6yNwWUvKJFdXI9IQsnKmIGl4r3BIKfL33R41K8t0N1m9pg3e2xLBWtB5xc3rEAzh3MN2wkjp4xpJr+f4l4Q09Q2GInj+o+8wZ9EKBPxeHWE26eVBJ6HPoTziCwtuJLL9CTj8bw/rOWrl67ZHAl6PE9uPHizqU4YMjV2vi28ypFJciiGZsmQNo+GNfmfAzR0UDSLzwlGlQRpppLFhSPeaNNJIo8dAdUQ3odCoOQeyk1HsM3mkOdekq4jqwjwy3nMK18ffLYLL71MnmUY/dBGoTmyRAtDBKSQJ1IqhvqS8xk5MoR8hNBQa/3rXyUDld4jIOa650yUbTvQEmnW9LoMzQ/gtk8YN3+y78PGMhXj6/e9EfzTrGhruJE8IV5jQABy7+2Sceuw+qJw2Dw4XdyYV0+onYuT0GIRcXK+pKtiAxasqhN7G6GiLF0u3HokBRx2IqrnLhN5ml+LNQm0ab/Vi/PYdhae+/NGkpQgL+n3sku0+fgj6Z2cjyjXBmGrtIrolg06umPSLwpGDgGkvaRojdlOFjLFvk9hu5AAcMmWMRqfEhAapAR4/RbB6rHpJdgAF3HCJaFXnWjpOYmHkZPpRtnQtHnpvmqaThpz8yzXMeA1fVhy643hkZrgQoeOZXpSNBB3W3BQl3BjD5L23wzYH7milkyfNJ/HVgmUoX7oGhbl+KYKY1RVmDDF9rWVF8gI+3RwhkUF3wvrBq5u6SctbpbEFgO1P/SwciWHCiH44YLsR8Ioc1jCzVnh76lwkVlciN0v4iPzMdfP65uLtmjq8OWux0fMETeOl8Cd3FN5qQBF+c9AOQCgqlxhneWu+25KhQ0djI3wludh94gj43NQl2qqfAytWrMXU179Q570v29/jkXyctRIOhZE3phQvP/8J1tY0SqlatzcbyPw+dteJ6CtlTIhCab+07i3gCyvOrGms4BI0JsrTxHenOjmlLoKMtTUi9+pElTZ6XhpppNF5bJF2cxpppLGlwaiGVIs4zSshFlNjdS3GO13YZ8Jw0VPkfJMiIsaVhvQANz75Nmqqq5HpcqtG1pXvOY0KseWBDhduwhAX5X7xsrUIhiNCmta1EcOfC1sL9r7hZlR8OQMRUdz5gpWUZWvoZxPNexk2qlwdX0RnSBYXBI/E4XW7ERH6Pf/ZDExfskrPkxa8A99SK6EsXHHSfsgb2AeVZaJsym8ebRnZHcK+8H8U3oAHwaogvv16LurrzNRIOrZbY9yAYvzxuH34dgGNdNwx7HBDad0FYARhQgxbjB2Ee1/6VNNsh5htCBtXSlLk10jsu80wxISf9OUGpy0rM1l9zMq9pYEL43s4Zdxa51F3jdawXFMbI3NMvQ4Tg3JwnwI0kmY6rZ/Vt+qv9Nry6t8elBulTpxW6HXbcqJl567TdXudcHDvFK8bt/37eU03ThJ+sQ7BCbtPxPDaIJJhRoRzTTGB0mzDQJ9DLBaFR56335TRGFKUo+XUZwrz2rd8+oPvpR1dZilRaU+HCe2V5xp+ToVPxmeXXJghY07LGrYN5mm6w4ZXIY3NDEYMa7ScyLCtB5eiND9X0+2XIaYvGzzMXbl1Iw/5IXzEUz6vD8H6Rnw5ZynqG806iHHbCSVjKnUXtzMDk0f2hzc/E42NYeXPnoiy6xFIVUmHWCiCrQcWY0RpoUm3+lgqSJd35yzHx9LnvTLuJSJt6XHdDYfqRU5G6bmcuPmZdzSVac2Qc1KpZCKOEX3zMTQSQjQqZV23SpsPLJ98ONwuVM9cBNchR5p0dR0209Smb9At47voJL2qDmmksYUg3W3SSCONbgUHdA7r1B9pfDtl0K6raRB7yokzzzlK8+iUCbXM5ZD/GWLYEI8++QGQFRCFwIGYKABd+X7QetoWByo/GaKoU7n7bvYSfD/PTIVLnZJB5dVhKfvvXnI8xk0Zg7o1lYgwKop6IP9R2dJDs/U+sPjNVVo/TBhYuyB9uBM1LWxOUfFn+TB79lI8/8oXaGgIKV1JiybjSD4ZITGkfxFuvvQEeJMJBBvE0FEjyaJdZzmI2TqZ9ScHoZNTjBIapWXL16Ja+r4m85+ktcaB24/CEXtMRGNtEBE1piRRsnWa1l0APpKbDzmzc/HVnEWaxuUB7HZnUcyaX2KWiOV8yfH7Yny2H8GqOoTDIqm4CQwjbLR+zN9zZe8qcIOEWHkl0P8QPPQp1+ljvJypf3O7mQ6606hBOO/gnZApNKutazAviOQweW2H1JZHg7agdRcZkJnphY/TM4lWcqq+IUKG0Q0IAjl+xMtrEJLrMhyuFlTguEcuGsmp3iKD6IThONlM386DcolOn/6Fudh26ABN0/voIc+xwvXf+maWjqk6mLJp5DqC8jF1DCGKi/MQkDxsQtv/0xGYpRUp0tiSIDoDXzjm+n2YPLwUBeQT9nnrrYnNl5FYDG9Om4eMvExhDNPi2vYU1iI3ps5ZhqWibxBmex0D20k9un8xJg7uiwini7bBd1sqWFMuCcMvY6R+JXn2Uhet6+dAfWMIM5esRjQchtfjVtrYjq2eRIJOQpFDyM/CW9+bsW6dcmi7mbbrM3EE4uG41KC5XTc3OC4ROt6urcaNvz5Af7fgLIt3axrD+KYmiGB2QETgT4Pv0kijJ2EkQRpppJFGN4HDNQ8O0VRIqsqq4Igm8fezj8Qv9t1GnTNqu8hBxdRWWu596xusEYU1K+BDhqQ7RSFND/OGhpz66fJ4sGDxavw4e0lTug0qdfydtKbhPv+XX+OQXcehfmUZ6oKNarAyO+ltDs3Wu7BBZZLM66kEdV9OUWZYGOvsFfqFxSJ+5P1v8dGMhSaP0oLWtHm8PZ328Clb4cT9tkMkFEaENG2inZ5OYz1IxuLwFuXi20gUnyxYobRdd9dNRmHEMaxvIf7vVwdj38kjEayuRy35lYTeDJ2fa9jVra7G0x9/r7/tNuenKZBD+9JoKfNdFx+HHcYOQX1tEDWVtUg6aTIbXtPsWxjoXI8Hw3BsPwoX3Py0pnEav/aJJmcgN1LQD5x/1B44+5AdkOV3oXpNlZExG+Nk7+1gXaRtswIBjTpUtOJNdRwKZXSNLZcLi4rz8MxH9nTllMzW199ccjzcQkjuWMroro2ZssyNh+Jy2YThfbDjVoNMot5f2sx6ifTSp9Mxfe4y5AT8iEkb6pjBqagCtk7rFuqfE0B+KKpOw5RSdw5p62KLA/so168b3LcA240eBKdLZIDtMZYP9mniiU9+QHL5WmRnB5rSDH/IuOr3YNqiVfhukbW7ssV7hB3JNqRPAXYeP0x5hOvZ/lRAPTYcF31W5MLEIX11qn97WFZeg2/mLxOSJeGWC1vIhR6E6oly+P0+lQ2zV5ZbZ1JAp6bVn4//+d5wCo9wmnlvAaMKGelfXxME+uTjlAN3ts5YNLXGIGLRqgp8u3gVYiKXW0ZWppFGGp1ButekkUYaGwhb0TODccuDY7R8Wnk4bFOZSiQcaGgMo6qyBsmFK/HENb/G7w7fVfMQ9ptovUKUmBmLV+KOFz5CrdNpHAxypIVVM6jsudxORHwevDdnGVbXcBdDQ3uTQf6LIkW6xsQIHdm/GHecdyyOP3AK8uTauvJaaQ8at3Qw8prmtutV2KDimHpo5dcB1xbLEBuZ6/cYgzkpim+WKJnLojE89tF3KKsNWo4Ok588Rxom4kldy+zsg3bE5MJc1K+p0uv5nA1S9jcga5eC9aGOL59sXzrhNvUwfd069CEdgLSSTL6AH7UNEbz81SyUCb9yOjCJknoHjWyRe04Y1g83nnMkfnPoLih0OVFTUYOGBrOxiqG9XQ5+42fqXboK8iwKnUwvbn7hY01RQ0MdLvpTIF/kB8uy85SxePCSE/Dnkw9AcsFykXVBhEPSxzSLucCm2ZYAVj0uZc3zu1EjPP/KN9Zaj0ppHqZO/KtOQvm89FcH4b4LjsHE0YNQPXcpaoIhRKWfGScxabfl1L89sPh0CPp9ltOwDUTZ7rGYOg1Jx8ZYHF+JnCYM1SzojyT2GDMY40YOQLC+QXfNT2GwzkEKRUPe7c7AjkJ7v+XQZFSsUt4ykP9zz4vgTtkcO/gChY9JyhhCsI3a6kVe6XcsKNfVXR/4rC27df+XYWSqKxLFlEElGDWwxEpn23NclJa1Gvf8/3sI6FugLzDtF202x/q8HiTqG/HtgpVo5CZBxi9tYGXK8nuw85hBKAl4ERIZYe5vzm3JYH+KhaPo6/dieJ8iuC2nfFtYU1WHJWtq4GBf1I5onehhGMnAWecejX587O1vrJTWMAXcY8wQBLL8iFhrFW9O2OMppVxCaBhdW4kTD98ReTJmCzcLWQ391fdNGgtmLlmDJWurRSaSrzUpjTTS2ADYMiONNNJIo13YBgVj/jLEGOLGBXowCrDFISJFDqoUjMxitFBlTR1qK2rhk0F6+5H98eK/f49jth8jORhXYRwBRik135etKMNf730JPy4rg5/PoOexG7CZ9LQuAxeCTvp9eHX6fDz94TRRjiyHmNZM2olakdCOqlNc2mJwSR7u+N2xuPuCn2Nvvu0Xw7amLoiGUBhJGpaSl9GfvYIuG9zkcoFqgTzaqYGcd5E/qVBy6JOsXCvS5fHiuU+m481v52o24+QQXpS/On3I4r+JI0pxwsFTVGmm01WzbQi1NgNhyQ8OjxtOH50F8umWvitHxiYc5nq5l0c+XaTn+ivGHMzqEYPqrW9m46UvZ2k6aZi6C7FxXlAeJDBxWCmuP+Mw3HTG4dh59GDdUKKqsg419Q16sww6dcUiSCSFZ+Wz6x1SxiGYmZOJL39YhLsefVNTaXCkPkv7XMLsRDlmQDH+8ot98dgNv8GkoX3hTjpQvbYGdcIvcbYF+6zk6/qydg9UnjOiKDuAP/3nVawWOW47fO12N/3EtEVBph8/33Uinr/y19htl/EYlJuNhvoQKirrEYnFZcxIcUJsoWDJKUcypU+1h1gkqhmVm+lciSXww6LVWF5mbURi0Y457LU+T9xvG6AuKjSX3ylRWp1FXO5TKrT+5X7bWSk2zLhaFYlg9upq+LKydHapZVIjIX2SkCymcq3B9RczmkvcEZinqeSduSCNXgQHosKn/nAM2/cvRl7Aq/2UMpm8QT7VF2+C2vdeQeHwQaJCCL8q4xgwYp/LUkD0kmfen4rFjF5reimcCge2H9of2+bnIFxVh4Rk0XU4rbNbJCjTpK9H6xox3OfBqH4F1ol1wXFlSVk1VlfXw+MyjvvNDjaTx4Mv3vza/G4HOcIXpf2KEOLa2lba5gBfVnHMoaBJyLhStWAVxmw1GFeeuL/JIKXjWM1P40R0YG1NEG9OnYO11XXwiAxvizPTSCONjpHuN2mkkUaH4NBMRYeobghhxaJVCM1ajMofl6ByjnzOto45iyRtMapmL0Ht4lWoL6/RKcZjB5Rg7+1H45+nH4anLz8Zh++3vQzjMb2xqKSWcirfRcFcVVOP/3v4Dbz+1Ww4PXQOOI1B0w0wKsWWC5bd73aiRtrk9le/wBtT5zWlm0/5RqXf/BDDMo6CLD+O2mMS/n3x8bj17CNw0OTRustt9axFCNY2iKJlOX+3OCgzNVd+HZAWxtkqzKw8bbImkCmGMx2Bf777BSxjNKHutGfOknrkP9r2brcbR+27PfbZfizCdARt6FQdc8seRX0oisb5q1A1b5kcK1DOSDg5Kjfh4PUV85ejfPYyVCwvRzQSVcV8faCOnxnwoD4Sw6W3PIOFy9ea9JTtGU1csbSPZKYTO0uMlBP22w4P/fEXuP2cI7H3hKEaBcddrkM1wq9ep1xBA0GutWRUV4KlcTtdcHpd+NfT72GpGHrkjxbGMg/rN+WkW1KOP3RnPPPnk3Ddrw7EtqMHgSvb1SxciRoxFnkB828GdthgsIykalaOH9NnL8VlN/1X0yknzFkDrY/SIK6RvEOLc/HElafjyct+iXMO3gGF2QEEK6pQsaxM163U9toSCNAGOF65ZVzK6WAaYm0kLMzAjU7oBhf+dDqweFUVZi4zPM90I4V4P/3ASftupyRNxGnobhgv8+VGSOT3sCwfBmRnaRmbYBH6xU9mYGWOV5f8MA56Pi4DIW1LQVLytfFYOsWlc8kX9ob1Q2/BP23cK41eDGkvOrzz++RjyMj+VhqdzuarfgqfPfLZDKBgJFx8WcIxMNUxSL6StLy++Vjx7lRUr66wTqTCMEduXhZKR8hzXE7EuS6sPGtD+b7XgW/HGsIoicVQ0EFEckxotGRtleQNwS3XqH5t0XlzgWXwyngaWdNWmxHNBexfmKObzDXP0Ohh8KFyuIR3KJ6ql5fB4/PgzvOPwfC+RcpiRndjmc3SPnwZ+eLH3+MF4V/aFbx2i+e3NNLYDOicJpBGGmn8z0LVBWt8HdgnD787cldccNIBuOiEfXDR8fvKp3Xw+4n74eJfHoBLf30I/vabI3H/BT/Hgxceh8d/fzxOPXCKrm3DwZp2SFwMEZovaoSK8vn61Nk45qoH8MhXs4CcLJ3yQuhLwzTaBA3w7MwA5i1cjesfeQuL14gyKlRlJKdpMr6VzdC1iuiYVSNQMHJAMc44aCfc+dujcO/5x+LyUw9CpKERVQtWonJ1OaKilOn0caE9HTi8X+8GmYRl5NEOw8gpDxXJlCw0VjIcYugIXy75dj4eefVLc4I0tJRT66deN7xvIU7eexL6FmajgdOw2nlUm7Bu1ZPwiYK838Th2G3sMOw5YTD2HDdEjqGbfowfgv0nD8c2w/qJAp6BmL75bx9KJitLXl4mKoVPz7vzBdQ2RuR6E7lFZwc39GET2Qo/24ARWyNKi/HrfbfDvSJLHrjwWNx6yfFoWLgKVXOXoaqsFlEasVJXPiPO711EbLt5M7MDmCNlOevGp7C8vNoqH58i/UnSORVUnWfMrDyTwPB+RTj70J3x5J9OVDl4+kE7wC/CrHrJGlRW1qAxErMcONzJNMordSfj3gZOd3U5nPCLsfjit7Nx31t2RIpNA/nHdtLKU2bwCzfpyMYOYwbi76ceiqcuPwnXnXYoJgm/1K8sV4dzTTCspKK/ihvRcOqsrsjaC2lggy1LpzZ5PtvnN4ltoIprHHro/BbZK4MdI3Mrqusxc8kKPU+HHe9FBdziGpTkZqP/8FJU1zZaSyp0jofJ75wOjkgUp59/tKbZjkO2jWmPJD7+YSHCQmNXhn3OnApJIXS7ItOA68Ah7Z5QJ4GVsB7oXfin7dul0UsRjcdUju86eSR2GDdM04ycM1B9QPCXe18Gdtoa8YYGOJ0uI+5SQN7zCL8jNwuvTJtvpVIiSEb7JVEyjrxsL/becRz6cjd20T14hhrhloxkTGrhknErJ1PGo/YjksPRKFbLuMVFSZ2SXyu/uSEihBso1WelvBCxoqENmtumT14WGcb6tfFgtXXGgfznB/VTE0loDqbFYjFTDBkXdFYNxxopZ5JjaU09apavwcSR/fHktadjT+FdrpPc9OJEPpI6/8mB+SvKcf8LH6Ousg5ZAZHdrE47Mi+NNNJoH51UBdJII43/ZfDNYiIZw1YDS3D5aYfhn2K4/+N3P291HIt/nH8Mbjj/KDESD8Glx+yJX+y9DbYfNRB98rPFuBYzRgZ1VQRkQDeBbQ5U1DXgykffwkn/9wg++34BnG4PPF6+raUTgZm6b3CnPrIlgwaoKyMDOfmZ+GTWIpz5zyexrKxGFXAqYTExBhgZl0xyWoZxHlKVSiZi8j2BIf0KcPp+2+Kac4/Bm38/B1ef9zNsM3Y46n5cLMb9ajSEIvBm+TVyVJW3Xg3VBOVoWwsn/5mpyqpNGlj8xXfPvnGDcfkTb+CL2Uv1FBeJp/JKpOqXx+w2EWfvPhGO6jpEQlxBsjOEkQdaBntPYkhJHu676bd48h+/wWN/O0OOs+Q4c5OPR687A8/fcj6uOetwFGVlIhKmsm49tD0IDenI4FJpuaMH4rVPp2P3i2/H6tqgno7Ho9IhjZJPZ6G2pkV4vbcYtcP6FeKUPSfjvJMOwsO3nq+7XU8c0R91S9agesUa1MficPOFgzBr59pl/WAZGLGQmenHG1/PwonXPoK5Sxk5Zhyb3IW0mU+kvFaZ6QR0OZMYUVqE4/echFt+fxzeufk8XH7m4RjarxgN5dUoX74WtDV9cu9YhHKx53lkvRDZz9bw+bwI+j34/R0v4u9PvIuw0Jo0YCRz81RxymzWP0Ppz2nknNq2z8QR+OMJ++F54b+Hrz4dR+87BQm5vmrxCtRKP3L5fdLmcr20GyNKezPIw9zMwOe1IvXaQEV9SOcC68728t8lcqYhFsUb387FovIaJik/N9PL4MPbfwu8/hk8edlqAK8P8biURS6vrQ9i662G4rg9JlmdxZTT5ssfFq3Ct/OXCnmlJXXcJdhmGYjL9Y2MkCSai9KEpIz5MWmrpsvWg6bWa+NeafROkE+i0Tjys/3Ye9JIZPs82o5cN84G+XTmopVYPG8ZsnJzDE/oCxMrgwXmizeGkTFuCP7+2mdYUWGm58cSZpMdMkZCXxpnYLsRAzB+aH/wtQllaRPvbImQenONQBGUKBg5AN5MswRAW2gQvWF5GSP7ZGxxiPbBN+mbGSLS4HC6sMrtxmdzzXqs6wyhljwZN7BAvptN4jYF1Mdc3PwwOwB3pg8e+d50yG93wAOf6J/OLC/cOQEkPW4EwxFUrCpHzfIyDUA4/uCd8MTlJ+NnO42X4kiCjCHJDFNOvvSmdtcoeuxfH34LXyxbi5ySXFNX618aaaSxYeisLpBGGmn8T0MGZFGMOMxyuicNaSqN7R46MBtjUu0Y27DOcMKVdEoeJ579fBaO/NM92P7Cf+GqJ99DtRiZ+SV58LjMVCoqoHIrXqXXdjVYop+CAGSrcIdlf24m3v5uPsae9Q9RTKPaDi6nW+gfs8lvkVKukHOappq8OfbfbhSuOPEAfHzD2bj7/36NXXcZh9CcpVjzwXeIcZ08dzO17Nv1LrByHfEK+VLOs+IpDU9nalyMpoAopgg24KL/vKrpHqcY3jT8bfBSq+aHi4E+UgzqYH1Y9GfSb32Qi1Pv1UNgPx1Uko/SwhyUFuR22dG/MA8Br/Acp2OpwdcZGmgLSHb26wxk9cnD9wtWoN/2p+k5F9d6YqSVBdt5qN+V9iZ2wCCBk/beBr87cg+8dvUZ+M9Vp+Hw3SYhMmMByqf+qM44M53WxvqdMO3BXuOS0TX+nEx8+N0CnHfn87o+FY0+Rp+1MHo1u8hIqYv2LDqA5Hym34cdRg/CNacciPf+djre+OdvMG7CUNS9/Q3Wyj0zC3PhYkV7HaRM0l9opGX6PKiX+lx1/6u474VP9KzLwcga6RktZIxSQPubOgJ1EKAjuwAn7bMtHv3DcfjkhnNw0x9+iXhNEJUvf4q6SFw3EzBrKPZiSP24g6fbvPlqExX1jZLJKzSjS4S8ILLY7cIPX86Ww6zvacN2HJKDhgey5dt0JETWZlgL+3cEkpzToFEZxP5TuG4w78Mi8sUR/5p7f790DZZUCr+yyE2eQ7NECKM8GxpMxKuVvQUyivLkQRov1ik0U6WNm6XRK0E+iscS6JsbwITBpZpmxf+2wItfz5ZmTQofUbsz7dtaZJGfufxEbqYfyTU1eHe6iTp08AWmxRyU/0SRjLljBhSCEoQvYLZ0jokJDQPSd0fIeOuzIunbQjAcxirpjzKApHaYzQquIcyxOSxtW1knZesApdmZRnBsIqpF9i//djYS732N1R99j7Ufphz6e5ocP6D8+Y+x5pkPUfPKpwgtXIXS0hL86bRD8Pkt5+KB3x+PrQb1NYJPQFnLfwTHEiafeOuzeOL9qfDRGeliUALXuU7LpzTS2Bj0EpGVRhpp9GaYoZgDbecGW120mIaLKCOqWKqkMeLGoe+XHRg/uBhFWQEseu5ToLzG+LAkL98WaqREkyXaPaBZ1lljqDeDVGL0jsfpQm5BLurrgsjc+3w8/M43Qk+H7pbndCaF6oyMoran5qZR3jUKTox7UdoZhZiMxhDwuHDmobvh42vPxpJ3bsHBR+yO2qmzUb6mAjHJw+kinF7Szc2zQdB2ZIGkXG1D0jllUM+va5DTgE6GE8gbPgCfP/M+bn/lK0k1CmYLyE++xZ48ehCuOutw5Oa4EYxGJS0K7vm7LphmDbMm3GIzoD2abDpiURNt1zmpYEHIwelGrgwXCkpygAH94dj9N7jr9c+tDKRaQnnSdtQS5NfU5/ClRFxoX1qcg1P33x4vXn0a5r75Txx46O6oW7walWVVOoUz5hC+jmeIMctdxDcNfq8b2X3z8NbUORjyy6twtxgyrJC9W3eE/YgZ5dO4jMyUKvZDlpdROuSDIX0KccA2ozHjtgsRXvkMxu4yCatefh+VoaiJYHTY9e9doDzPzfEB2T6ce8ezOPDyu7FobaUYaC51pnGqXiRp6shpeFGpP53XdJrT9cQIaEau+zxu7LTVIFx45G5IfnwHnnjuKkS4duaCFQgxSpq5KWt6GwVMteB3u9UxQlDstJaFjKIHNzmx0ul89rhdaJCLl1RUmzShpR0RSMRE9hL7//5arH3nO7j8fLkjskVT24ZIboT5QkJo/rsjdtU0yic46Cg3EWFcgfSzqfNRX1kv5RZ+tKeLyo2TwrYRyVPbENIk2+BWWA8eJ+M0GjlFcP29nDn4ZPOto5Kn0asg8oa8Mmn4QGw7ylrfMO5U9SBBmWY5/h/+YCoXPIVbeDXZgeOcufW0x4EnreU/uEawk7vypKAgO4Bdtx6OooJsREV2WJy55UIq4BLZxg3UdD3ldmrENZVXcckL7qjciyrNdxVhkUs1dY1WgvlogtXkPr6U2+TuncDQ0iKce+qhOPOPp+Cii47Fhb9POeT37y/6Bc69+Ge4577L8Ppr/8DSWQ8h+s09WPHwn3DtKQdpxCrHEiIuPMxxntPtbY2EbHvYH+/Fc/e9jKySfPhFF47F+CK9dcXSSCONzqJ9yZ9GGmmk0QKdFxfGKWX9UKT80Dd+SYwuLcZ9fzoRofKXce+Vv8bgTB+qVlQi2Gjv1Mej+7Qq6j0/BfWBlKVhSsXJkRFHQd9COPrk45QLbkX2EZdqHkYHiNou5/kWPLVhzHeNzpIj6aJC2KwRDpL7vHrjOfjq2WswZUgpapeVoy4UUYOCMQe9RevVdmzimbYg9dR6ySer3FrpZRSOZehn7bMtzjvsCE2219+zoXxtPePnu0zAETtN0IgqTgHMUKdsa9BhYu7bPEWwp9GND9ZbG07oLOzSJKW9GBWV1y8TvsIinHPR7Zh0xvUIqQPFROxlyPlUc7K5JuYbd3gnbAcTo0Bfv+50vP3vi7FVvxLUralANCxGsTRZPMG8G2+caqvLxU5pyNziPIQjCZx99YM44bqHMX9VhbRvBjxSZvplaGw7xEDhVbYzhjKNdUrotDRTXsLj9mDmbefitnsuw5AcH2qXliHUEEOGx0Vfd2/pYgpbLvsDfvhFNrz5xtfY8+Tr8PQH01ArcoG7JnuEPtFYVNpWaGA5HEgCun1Zf0eSDjEad4T5e/xuk5Gcdj8mTB6FUGUQNSvFqPZYeTVHbyGClEPqlOXxIo/rZAm4WqGKhRTEo3RSc/03U25Gt9CRUJftw3NzlmHOijKlpZEnhIn+I+699GT5GUE4RGdd2wY6uZh35suimvI6jN9mFPoX5Og5E2nLDXzMvV9+fyr++97XSHiFluRBrj9HSFuwR4TkuVW1usphmxjIiEOn5RDvBEw1ekt7pdEZUFRluB3Ye+Jw/U2Wc/BFgPAvHf7k1U/mLsW8mcuRleOWvk0es6JU2wD5mg7qjOICvP7pdAQjdEw7ERX9xIbNIZMGl2J0/xJEk71/mYL1gZHnbhcj8X2WrGwbERk7aurDIiKsvthGH98sEJlBmR2KGF1m3WKZ8pr3s3ZbbmybJTFIxtErfrkf7r7o5/jnWYfjprOPbHH84zeH47Zzfo4zjtwFB+44FgNLisxLOhssh1XIDL7YyEjoC0mW8s2vZsJ92KV49c0vkL/zOBFhklF4mlGIZrflNNJIY2NgSa000kgjjXYgegH1OdsI2mjY91CDxmEWMY5H4ZVB/PQDp+CLey7BOT/bDYGKIII1QY2UEFXSPLyLwTv+pFQHqYxOH+d6OWKUF2T6kTd5JOpXVsJx4B9w1SNvYtWaSq13Cwhtm9tVlCoqu62tYMH2IwfhzVvOx4Un7Ius6gYEa4M6U4XRh5sbLerUUaNqZA4/5U8b+Who85SPCuY2h+Hoax+2zvCS5qeosW85V//660NRWlWHWDiGFJuoGXKdTolRD9BPD6ZubZJzveB0N/6LRRzIDDiRu80YfD9/BfyH/RG/u/MFzFy8SnlMn2FD6Jnq+rONM7rn2EbcrZI8ue+kkZj1wKU458R9EV20EnV19XB4xCiS88Y43fD2sHuFOnzkicV98+Ef3BdPvvEVRh71Z9z/+heYu7yMa+Mjw+NpdjqzzHqQZ+gg4p1S+1hMnWznHrILFj18Be644Bgkps1GVUWtXrNxpe1OSItIgfxOFwrHDsZSqfBxf7kP48+4AR9OnYuq+hDcUn9G09hTr0395SL5TwcrDbcWUkb6E+v4w+0X4rv7LsNuo/uh8uOZ0C0TrHOpfXBzQXlPquSROns5zVDA0ml6ChopQ6S8jMK04ZQL6VheLe26orzWJMplpl7MZ/IOKsqCf/Qg1FbVKK34hFTok+QabijjygwAc+fi5P2mWOfiyp/2QdQI/yer6uH3eoXuNLpNOv/GZaygi7Omvn3HYWFuQB2YDCLdMJjnpNG7wc11+LZjYEMjDt5lvKaR67T1yENWpOnF/34RCeF79vuwg9OKW/TgdcB+kZ/jB8pq8d6MxZrGFwE27P48pDQfu/YvQSaX/ZByrNubthCQTFKnDDqvhE7qm2onSpcvuqKJmFxC56wkWH11s4NlaRojWaWW5WqSwVpmftmUcqc4ADcKwrfCTlwfkuWivKuoC2HZynLc+uLnOPCQS3X91rythiARiuiLG9bHlotppJHGxqFjyZ9GGmmkQYjV4JABui7YiG9mL8XH0xfgk5mL8MmM1GMhPv9xCb6auxQ/iNHPqAoujN0QtqYIcrxWxcMYQlSs4km3KIvcFCCGPlmZuPN3P8e7t/4Wk/OzEKysRTQmmbrBcLQFX0uTbMuFKkSWuk8ycwocd8IsnjAY8Hpw1U1Po3S/C/GPx99V50yFtSGFUViTKQ5ApbT5aoP0T8aR5/fgpt/+DG/deA4m5kj71LB9eJ1R3DYn1NRoo+jNoJJptToNpTZhlP1QYwOKJw3Hc0+8jXvfMNOs1IHToo7kyziG5WfixF/ui2B1lUZMGGq2BCPrlM50LLZbvu6DOtMY4UWe6MKDcGcY5xDrvbHIcAtpdG+GBPJLi+H2O3Hrf17BpF//DVfc+zKmibzRqZ+E8qt5GqccKWg0yAdP0Wjjb21vwZ2nHY5/XXMmRmRno3Z1OZIuNxyUN1ZDbExz2CUgXb0uF/IH9oG7tBCn/f7fGH3oZbjnwVcwb01VizIzbpJRiHxiE6+aPwKXGmq2Y+Y3x+2FT969FVv1KUQDndLWjst2mXsL2B+4pld+bhYyBxRj2eoq7HnMn7H/xbfj409/QFldGGFr+i2NNfJMUx+yP1MksdZSmm3rwcX46K4/4LxLjoOnuha13HGVzSlEb7psM4HT4LgOmBkPrbKTGVqhrE7kq8uJWOqGSCJc+HJnaVkVPpqxQBf511a1G954GvTrmQfsAKm4ldbyAaQh6eCMxRENeIFFb+GSI3YV+nJqd8u881eV4/ElZaguytdNtPTFkAUtvcMpcsuFOjG4DZrLa38bWFIIBqpvbhmfRteDbcoIrFB9EEN9PvTLDEiakZ0K0flcnIVAfDwd/hwfogmuXZqAcz2OH7JLRlJ4bmQpDv/ltZrGqfUKOUlOjIss9srztx9UjIDoGLFwCLEtlc+ait3snE9JbAG+eDHamnF49RrQCec0Lzj0p/5Ngd02nDS0ycXe8HZuKYNSC5BEVX0DDr78bgyaciYuuOLfyDt4NxRlZ+nsGL4wScuvNNLoGthaWxpppJFGm9CXptR0RFx8M2c59r/kDux+ynXY7fR/YLczbpBDPs+U4/TrsfPZN2KH396E3S6+Awf/+T786vrHccVDr+P2lz/F1/OXWbv0GbHjEKOFa+85VElxydBPgyiJbbceiUdvOhd7bD8GjdVBRGl0Sg5jeHcNWBtTo58maNS63GK4hhIoyPageOsRCIwahMuufgCTpJ1+e/tzeOCdr/H9opViDDP6i/EwNowxaxQtOcTgZFuxfehgnLLNKDzC9pk4GkExbqOal+sgmat7GoajWE7+SFUmUxGzM3aQh1moNHsQD4XhGDYQF935POavrmhSPJtpIvfQ6J0krj/jCOy/57ZoKKuGw2Ui31KJodM1+Z+Pbf/R3QIq0/98+n3c9PxHuE2OW1/oquNj3Pvq53jh81mojUT1bf7G1s3FCZPepJhbjAhIIDsrE4XjhsCZ5cffb38WO553s/Drs7j9xU8xU3czNmiasmS1C/0vDt6FCzVZPZtG8G8O3AHv/fsiHLnvFFR+/gMcXr80hxTWus606YaDvGKMviRyvF4UT9kKnlGlOOvc27G7yMjzbn0O977xBRasqUQ4LvWj01L6pZKJ/JDyXJfTpSzF6J9ELIbth/XDOzechT2EDnXltYhEGX9tlZcX9wKw7rp+odTIIzQv6leIvN0n4pvpi7H7oZfi9BufxNWPv4XXvp6Nmsaw8AiniJl2IQGaaS9HhgseJstpXQdScOs5R+G2C49DofSz6soaHQOartlMJODU+YxkDH7hzaxMn0nTNm3J/Fwz0OmRMS3aXFA6Tt1Sf04DnLFkLaq5jpjQUHPIH8pg0pI4ZpetJcGJaDQm95c0pZMBryBfu3weVAg/Dzj9Ok3n8KjT4pU+Jv/c5eWYv2ytiYJtS+5JWsIZR8R6EZBKWPtbn8Icnd4cl3qn8dMB25e7njPqNBGO4Ihzj9J0249N2Hz98IdT8ePw/hpJDVdS5dX6wL4eE7lVPHoIMPsNTeMGU019WHjPdr4PmDgCg7YeLnKOkYx2L9gCIUKcr7n5UknJ2FafE7A/eWTM0LXAU/rrZoeUh+Ow31o30MjndRFOkWsbjY2ps1xj849dNuN8zcAHPyzA0LxMbHXozkBhnlSFq3pLHmkCjlW9ykGbRhpbMGwtLo000kijfViDrsfrQt+SfDj6l8BfWgxfaZF+Zg2QT0nzFWXDE8hEfWMEi1ZW4p1v5+CmJ9/Hebf8Fyf+/TFcdut/cfuzH+u9bOjGHGIIUQ2gMkADZWRJAe4+7xiMz8tCXXW9KjQmmqLrnIe8m1E9frpQZSnpUAXeJ4Zm/pSt4M3NxFPvfotTb3wav/r747jk3y/gpc+mazSpoYoMC0LmONvEUs5s8DcN4NH9CnDv747GpOICaZ86fQYX5d8c9OQzlTeMZ0HT1gVDZiQDT2sUz/rgQEGOH/W1DTj/GjNlmdMrzcYwqc8w328743BkBryormtQJbY5DxVWfpfDfn4PYk1dEJfd9py08XP43V0v48K7Xuqi40Wc+a9ncPMrn6KmIQy326Wcs7HIaIpeEdrFGckWQ2ZuAAWTRwCZfuXX8255Cr+64XH86Y7ncNdLn1jTOHmJ+UzS6SaHmBT6m+C3mPBlHzEonr/sl5gofFtdXmnlpfGxLo93GlJhNUjkH53CsVAUWW4nSk44AKtXl+OJt78RGj2Lk657FJff8Tze/mo2giFGmUlmKTLplVpWhSVnuURDaVEerj7zcOy3/RhERJ7SGGX2jS5vN8FQQOSFtFmGGP7FI/sj9/Bd8NJ703DdI2/huL8/ivNvfgr/fOJdTF+82rqILyOEbtonWtaH/uCoFU168j7b4f9OOhCFWdIX60Om7nJsNho4pLzCb3l+L3IC6upcB3Fpp8ZGoYVkbeJRAeurDnYp+uyla7FgTZWmW9yrf21sPbQfhgod6ypr4HQLncir1jlGMPO+IZHpCEbwyh+P1XR7VrTSRr43hKP4ltHlNUHj4LXOp0LZTdqgkfdqB3mZPrm3kzMY0/gJgZKSEYG19Q0YNqAE5+y1jaa3wSb4csYiNEREdrHvxYxjbH0H+4GuW1gr+lvJznjg42l6Ly7LQF5WjtaHJbHtoD44dOII+FxcH7XrdLyeBl8SUtcKS9/jGNMePB63LieTFBpZAqBXgGWmyzDbeimiLztTYf1eyWh6XYqDLdkWx3QClkzjmK0vzIR2rQ/KMn7aoNwzQyTTzdNJZY4jP9t5Ap76vzPx+OUn4eqj90TtN3MQZBswk96j+T5ppJHGxqMXiaw00kijN4LjtP22jlELDo8LXq8LPq8bfi8XgnbC43YjIN8z/X5kZ/mQl5+DguI8FPQrRG6fAgQKcrBgVQVufOYjnHfl/bjkodcwfdEqva9Z88tMXeEmH4xuo4NmZJ983HfpL9AvNwv1dfUaYWTeR7cPoxqsT0GwlQg+s7cpE91THjXSqUOJUp6Z7Uce20Q+v1+yCv966j2c+df7cf6/nsEj732LuVy4X4xVl7SF0bdMmege0IghdaDFMVzuce9lv8DgkjzU1DSqP27zUbNjvtChrkkBXV9eA2YPFObg09nL8d/PZ0iKcZCQjs0VFQU2EcOo/kV4+rqzEHvrW+0fSc6P0Tz8Yz2Pmq6quT0Hr8cJf44fgdxseKUu2dIvs7royMzL0qgr9n1bPnQFjEygI1qoF08iK8uPgj6FyCzJx9QFK/D3x9/FOdc+ggtvFX59dyqWrq3Sa+z15GznEkEnLuPBGFVDvPLaPzGmbyFq1lQjgzvMSr6uKjvFGHkjUluHQnlGvvBEICuAz39cjH/+9z2cfsOj+M1NT+Lhd7/FGjrb6TyTf+o8sxhK5atGt/Jecew4ehCuP/Nw7DRyABprGtSISq1fb4JNxygdDLEEigb3Qba0WUi+P/zGV/j9nc/jzOsfw9WPvIEPpy9Qx62uucfrUupj2lLGAKk/u+1pR+6C35+wLzLdTp36zJxN03t7GDSk6TvM4+7aXq+V2hLhWBTRUETtahNhb8B60fD1+zyYs2Ql3v5yBhoY2Uy+bc6mpMgJ+HDJvtsDMxfrUhOtm5x0q6+qR8GEYZg4rNRKIz9JPkvmrKmqwxezl+hmVk3TTVshw0ED3IH6Rl0rQJBSXuszR8qb4ROZxvboNOTqTjSRRmPri5XuRTPt6C5LIXZb6P7i9ApwPUwn56CLLDpst4maxnWnzSjXjB8WrsJn0+YjXteAYEMENcEGdTZ25qgPhlBJB/nEETj1yof0fuRT8ih1L6P7medtP3YICkXXo+NwS20C9vFIJIY6qXdcxq72kOX3YqDot4hKn+o1lZW+IXI1IOXuL3KbSFmSUmHL+HlrKs0bnk0puyiMlFEPvfU1rhcd9F/Pf4xbnvsItzxvjpuf+xC3vPApbn3pU7z+7Y/4VGThUnkuR0uO62a3fjN+86ADkmPGpIF9cMW5R+FXR+yMiMi1+nrRTVWX/R/p2Gmk0c1oJRbSSCONNNqHjr2iXBjDjYO2JhsjX77zvBmeaeAapYjju1cMl+zsbBQM6wv/wCLc+J/XcPpNT+GZD75VRdIYPVQmHWro8zoqsdtvMxJ/O/1QxCvr1chRpV8eYp7RErqWnFUAxzqvStcFFZCeg3EQdFwqFpyf/NNWDTcNJI+Z9mYcMz6PG3mFucgdWIIqUcQefOdbXHTPKzj2qvvFXl2NxmhC20XpbRXHtI9BIpbAduOG4PbzjkGypg4RtqOk23l7CqSWIZv+7VI43S7UZnpxwxPvqYOKBjud283tY6IQGV1x8KRRyBzVH5Ury9T50wSbL9lnepw2wnduB9yi5HudGfBIP+yqg+v7cS0ks8lJ14Jc1jQF1KKZT55XUJSLvKH9EBDD5pan38NFd72Ac25/Fh/MWCj8KoawlIdyxI5kY7mUh6UN4okIBuQEcNdFx+pUsYaaRrjcbsnWdY3Cds9wSQl0ZnxS+pgLhSV50sf6YGVjBA+/9Q0uvPtF/P6+V/DMh9+ba9R4Znl5De8htZc+quwignXy8FKcvuckFEg5G0NhSdQa6rW9D1J2oQFbgf3CLXXLyfQhf0AJcvoV4Iv5K/DXh9/E+bc9p4bh3JXleg3bp7kd2PZKCY1G59p8p+y7HfYfPwzh2qA6gc2C+CZ3T4LF4u71bk4tl/7UFtS5qQMix7V1C+kL+BCra8D3X/2IWl1rlu3J+hrYETZbjxwAiPxpDIaNzGG6npODzjYxiI/aYSvNqyCfC2zjfuayNZi1eJUms4+2SS9J5JqNwTYchzayfW64/V6NIlv3bDtg+dp8YDNYa8Jk6zjvpoDkMGQzfazD/s4KWrLjfwHKa9LHTtjTOA4pV1qrTo2RCLYdMwhH7TERx+42AcfuMl4O+7P94+f83HU8jtlZvu+9DfbdZgRWc/aIynWj66Vi8rB+GNa3QHVL83LEOrEFgQ56boy0vLIW4Q4iJzOlT/UvyqaSq3W1uuxmBccbtktxKIKJohMSdh814HdT0DVsRxlDN8nnL3ywvKwatz//Ef4s4+GfH3kLf374DTnewhUP8fNN/JmfD76Gc29/Hmfd+izOvO15/P3ZD/Hp9AWIR2Iq65rkiHwn79Bu4Hh6/9/OwW8PmIJIbb0u9aHj7KaUN4000lC0rfmkkUYaabSFNhUcGovW1xZozszxmooJohH4CvKR1acAX81fhsvveAEfzlggJ5i3OT8VKWNQQ4zGbbHrXpNQsbRM7CjuGsyogXU1AE3j1A+5tqOIFD3D+/OKHjMQkips1SnaDlSRNhW3UroXQil1+NJIyhSFPbs4D3XhGL5ftArHXHY3/njPi1i6uqLJICWlDLWkpGIUGwM1iUO3G4PzzzwUwa9nw5XplSZg+2wGdMNDXdJimR4nvhcD/O9Pv4daGvFabyWcHA6dxsdP4u0n/wpE4qjTfFaR7HKZ7D0LPpN2sFUWuyhdgh6ui+FX6bOxBAL5WeqM4/qKr307F6f+7TH8+d8vYi2jD9Vp25L42mTaTsAe44fhz8fvjdDMRfSoWCe7GCm3tEQSsvOzkVNaKGWO4YlPpuOsK+/HDY+8iWpdIsBEb9jtQx7TqEvr95F7bYMj9pwkci0O7jyaYNjbFgLWifLY5XEhr0Rkf14WZqyswJViGJ7y53vxztc/aj7WWWqm3wmlgbQlZXQ/ueaXu0zAgCwfwiExAqXZek52N4Pvwlgmf8BM5WsLFbUhMWqj2n7rNBOdBHK4s7Mws6IOPywxa3am1sVwaRKlg0qw7YFTUE8ZLIlyO81Hp3JY7s/NV47fc7LmTgXHzfq6Brz73jQsXrYGgSw/U5WeraFTqUVeN/B+rWCXyO12I5uOww7G1FTYdVlfr5LW1YhMOh+6m501stF8038dQgvTubpuqSA5XCIPKxsaUDCwGDuMHqzpjOIyS2s0Y8KQfrjq1wfj1nN+hpvPOEyOw3HzmfJ5Jj/Xc5wux1mH4xa57r7fn4A8q9+w7VvSWPi9MA/bjx6km7VohPiW1gRSXrfPAzSGUbZwucgpe8OhdRHwutFfdGDqVoxMbKtv9jTiIjc4dTq7qdytnbtsENMoS8qrpbLSf/ljU4ou9Y7IkeQLPzcPl64TzRcmGXyp53IgLvJ2eWU9fhQ5+Ob383D1I2/hzGsfwb+eetdaXocRrKYYlM184WjHFV918gE4ZretUTtriTo6U6qQRhppbCQovdNII400ug2qqotyoFMJHS5RTuLwcqpXXi7mBcO48sHXsay8RnPaYH6jTJm3tu9eeybwyTvwFGSrUmm/ZWwJSeMlovjSWG8PFHqMYnFSYZFLutVmaa4SXC5RirRObUNrpOWXEvWAcsNH0bjV6J5YXJ2yAVF8GYU4XxSyfz3zEU79x1Mor+W6fSyS/LOMR22fDDo2DPX+9auDgXnTEBfljJGhm4yNukXXtyTr6PF4tDjPv/kNPv56lqarHWobyKKocioMn7/TqEG44Ng9EVuyBg6PmQorBGEuOS3fzSU9Cz7+JwC7GqR1PJZQIzcrK4DcnEwsqanDbc9/jMvue0WNGjpEGJVmeMIYEWZanMGRu0+CZ3g/1FbUapSi3ZbdgSZZJs9gJF6W9DEajnUBL/567ys4QYygSk5rk+LFpbxaEusaHpyClZ0dwKF7boPi3EyEuf5ftwqtroUtK0hiOnC4vldWlg9JocMXM5fg7JuexoPvfG3yymGmbjfTTV8ICQ7YbQIO2H2idKO47ua8WRyH8kzyEdczbQ27OKur63SdM24gYaJfUsD6iBzwZvuxsDGMLxas1PYkXZqcppKHDdxf5PD+O40Xpohr5CWhY5/wSbAuhJLBfbHtyP6a3hqVdQ2Y+cNCIBKDx+vRW+ptW8HQO4lQpFU5BZrdqlOAm2JIGXiPDqkuGdTdnZQ+2nFOEyHEcsl3tnN3IsFyk7x0SLQTKapgI1JOd29xNjsoU9w+NzB9If7wy/2tVFbb/EsFdQLyYv+iXJQW5KBUvm/YwWtyMLhPoUZgE6a9m5/D6GTi8F23RqFwTjwe1ZdEWxakb4oOhUgEzso6OCJWf24DjNgfVJSv/BiNcz3Xzc9w3EApJGVvLDbTlG1uaAkHwiLbVqyt1mh99pdNKTnHcqeMBw4ZDzkm+rj0kS5/xMOtnwG/V5crydUjoOP17LogrnjyXVx2v9gONfWmpKI3UzbquGG5Ngol/0U/3wse4b/aqlpdQiZ1zcQ00khjw9HBCJpGGmmk0TUwRqB+40tW1c+5hp4n04evF6zCK59xDblUGJWF06iisajZcdPVFxWrq+DymDXA1gH1fT5ErqFi3B7ocPCJwuakksfn9IQiIcXxiwLk4lvPdgwqGjQOKvN0NLVf/C4D6UtymbbhL6aJ0i6fWVmZ8Bfl4N2ZC3DWrf9Vx65GS9pOQb2Y/0lrY3T2OfAwVMxaigwv1yfbRJqa4mwE+NyNvnhdaB3FeAp4URmN4dGPvseqKlFUGQnFNtLHGd7m1G3ikmP2xPAxA1G+YLXyqqGFHDoFTrOksQmwedYG+3N2bjacBdl44JPpuOzel7GYzkOxIlQOCM2Z20gUgxH9S3DKoTsjVt9onDsp9+tq6LPJI/wnn2QBykBGIDryc/HG9AXYfrdzNC8lUpPs4jUsl1W2ncYMwtiBfQExNK0cWwxS68/q8btXZGHu8FIsqA7i1Bsex52vfy45MxCTDKndRGkgKX6fF3tuMwoFWT4xtunA2wxUkLGCL1qyxaBtAe3eptSM9otHxIilJZ5akSYk4eY4EIvjq9mLdL1LdazamxbLZayZR8aDicP6wZuXhcZQROnAoSqDEYRfzcR522+lG5e0HL6Mm/XjucvxdUMj3AU5cESlLErDtkDnnQPBqD1VuRl6W+uyLKG9eVB797GgWSSP/G8Mt7/hCuH2yhgsdUzImGK/gOoOsNicqh2j81XoxRd47YLl53Cm9eCfnx7oKFYplJ0DLPoElx62q6abcYrt29zGHahRGwVDUflLj3EqL/E5Mj7uNnoQ+sn4yo2m4g6jV2wpYN3Uwe/3oVzGnnpLLzJ1bgmOWYNKcpGVE0BUp9y2latnoc6AYBS7H7Ct/jaNYtrIsIH5vmBNJUIis/0eb5t122CQHYQnzSHP4iEPVH7kgy0m5NPZjxl0kJObhbDXgzuf+xAPP/oWEiJrUqNYOb4YJLHtVoPxu5MPRCwYVlprPU22NNJIYyOgfSiNNNJIo6fBoZ3rlgWjcdz//lT8sHSNpqcaEYmkHTkE/OZf5yIyYyEyxOgS803TWqBJGchAXWPzNJF1dAQxbPKy/fBZb0y7E1TQ9W26GPvFhTm6oUx7qBFDslyyOrjofjeXq10IbWjM8eketweBTD+e/+QHXPno2yhvDLeI2iKorNlG6f3XnMrFbxiYIqmbqfzdBF3HL8uDF6bNx3/e+EJ3NHVo5Ap51dSVv7jWef/iPJ0Ki4UrEY4bR7lpTzl+osbo5gb7GSMUvJkePPnK57jj/tfQ0BAS2rOP20aEAe2QLL8He00cAVdOFoKhkF7fU2B/Yb9h1KQv06zbuHDeClz6xLuarhHAFvjN7l8leVnYcewQnTpKI2tLBaNM6NSlWGTVCvL8cEqf+e3BxnnqolNevxkYI9DQgOs9DulTZEXgmbSeBCPX2D5ZreQ43XW6pq+grLYBSakjX7Twxde6kNGL590ufCPtPmcZpysbmtgQKSx/HBg7sATjB/UTg5fxewl92dZYL2NbwI+dtxulOVOGS0WVPP/NqXNRLWOgX+R3hy9x5Bl00zY2RtuIjmStTFphjl+EW6sHtQfyptuJFXXcQbx9ZAe8yBQ6kpc7eeeNBp2jdBqU5Ocgt53dsAlOA9f+19RsbbXflgtyAiOunKJ3rVm0Ehi9m6ZzF/O2ZSA3nOiq1uFawHY/afks9nFGEROT99oGkWCjjK98jbLlgHVwSP2cWX7MDkfww/K1Wsu2qEoM7lOAYf0KEKPS0AvAlxPeHB/OPdTwRGskKfwEt7/0GSIiKzL0xXsXg12v6eAfpvFPKthHuYGUFw6fBze99hVe/Hq2phstrBkx4TWPyNmf7TIBw4f0VZ1AxxN965tGGmlsDFr2sjTSSCONHoTL6dBdWRfOWIRZ383TtFShRFuKjiziiJ23Fu0mhmRUVLE2o01EaaOh5kqgIshF5w24cUVrBNweuEQhocoWX0cx6Tok1ECW8kZjKBAjzuc1UY5tYenqKqwIh+Fk1GFHc627E1Je/lMbNhFTJ4XL68XrL3+Mrz6YZvK0gm3wMiJKrDJEG6Km4TYFrH57Gneb6GZ6SRv6XG6EGhvw0uczsKS8VpOTDKrhNFNCmlVMI/16wC4Tsf2Ru6Nu6UqjqKqyKh+bqVl/6jBOGiDT7+U8MLz77VzMXVlhnWxJdNvp1i8vGyXZPsRC3Km3+2RAa9ibQdGhHI9nIBEJI7D/FNzwzycQDJrIslSk/hrSJxdJkZmbHNG7maHOdKkYWyYm7VHk9QPDxuDku57T+rcnPYYU5WNAQbZGqXFNrp4GX1gxQj0zq+VUZbrYbCxaU46kS9qWuWnhtgH6YrweD9aUVWGeyH2Fs/ke9lWlUt8xA4r1jQSdkIxirF+2FuMOmoLBwzlNWTi3hf3uwPKKWsxYsEKI7IRbeKUjMmnxhJeCoTjCYTvk0YI6Dk1JsgMBU2j+7Ij1eJ4i0JOBpdXNY3Bb8Is89XD5DrltStW7HFoD9vnGMAYU5uhSAe2Bbab7dtsM2mFlt0ywRsoT0+fib38zznrWVNe7bAJ7ZtySU13VzzJU33M4pHOo/sbDIMFnWIx6wa8P0lPhaMeO514HISJlg1f0pZXBMJaX1Yju1/6GQpz+PbK0SCOP237B0HOgHGgIRVDUpwCDi3Ot1Gaoc99yts149XM4PBQ6m6dvcHhU7knGkVeYiUrRmR99bxrW1qwrb+xNEkf1K8L2owYjIXJU1wfuKpZOI43/QaS7TxpppLHZQH3eKcaQM9iIjKp6K7VZLPGbbUZOHNIXKMlEYzQqKesqWjTqohli/GRkYumqSitV0EaUV35uAPnZmXIqLkZLNylAVBqpcNHgcjnRpyhHjCWPKjytp2bFRSlbWVOPtRFR1t0eVdRUQ9pMULqLkk/D1xfwoDLDhbfmLkcw0sq4TEF+ZkB3aG5oDFnT9DaBrixA+z7WNpB6Qde3JyNWaEDliSH/9SczcOU1j6CmslYV6LjQSSF5PJbx068gG389+QC4c3JQU9eg0Yl2hFUa3QNGw/KlQnbfQkyrq8djH3+PhjCNT9MmNnStVUFBXib6lxQYo0iM5O6cLtkW2D1oSMejTmS65IfXjwsfeFnPsSwty2O+7zJhBEoSSZ3WuindqzcgKc3C2EKnw4X6cANydx6PRx54G1X1XPCe4pN1btkmXG9tqBiBbumLXRcJ1Xk44nG4ZDwpzm1pXGdwB2XLg/fFkrVSMfktDdR21JSMXiII/JlusdYjePvLH1HBCKs2nMGMqtl29EC+6dK1ELkxDnHkLuMxuIhlaClQyMvfzFmKaQtXiNz2quG8PjZhjoZoWHclbw2phX4WZXtlkBJ6r1d+JXQdMafTh8aaGkTi7U9Xzs30oiA3E1G5Z7zzgn7DIbdWn4f8GV5ahKzMdTe2sYMty+rDWBES/cIjbRMTym3hfaw1KOm4tjPHJPQtwcWH7aLpdKakOr9NQ7fFu10E6SvU12wZRxXN7ipbD+iD3bYbjXB1UCP97Rc9WwLoKHRx05BYFFMXrEBtY1gpmUisqzcVZgew3agB+qIrFLXOb4aqRilHM4T4VbX47d5TNM3I1pRxUzqI9f4eERln/X4ukbD52oVyiS9kHXDBlenHa1Nn41NudiZI5WPdjV7Anf13GzsYriyP6LDs7FKZLX0ATSONzYQUyZBGGmmk0fNwiiISzszEKnfbaw81GS9ZAcCfhRDXM6E+0GrcV1U0IQqQ2AVLKmoZMKdoy3QqFGWjKNunwWL2YvxdDX2LLojQIPN7MKR/ITxuro3nXEfw0iAsq6lHfSgiimc3KuwbAFXNhND8jAQ8+HZFGRavKrfOto0JpSWiiUZUpdsktYxNwmODbkKFkBcYZbErQaehOg/l3p4BxXhu0XI8++0cPdc0sVKUVCqqcRjG22XcYBy/x3hEwxExpjPQKMZZxI5OTKNbQPq7aYEK78xavAplbUQ9xbR9kuiTE8Dgwiz5mhC5IW3b01EfFALyyAynA7GI8EWuFx9Zxg/7j2VTt8CYvoUokv6VdMSwpS/ybow/OaTNXKwvNwkQWrz02XQ9T7mcsKbHpaIoxy9GrBOOHnYcqrkpZeXLgRxvq7FK2tI2WBuWrZbfZhOO9jiKRjd5LlNkyQtPvI3vueunNV6kwi332GvCYGyfm4twTSMaYjH4i3Ow7QgxgtfJn0StjB/vTZ0H1DQg0+fVMrdXBhsJkWCRaMzs1JwCvbs1Nmbr8hn6dT0QOSn5/Iysr6nDqmr7ZeC6yMvKxMDsTPg47byb29KsY5qBwf2LkcOo5NbQ6MoEZq9ai4XhEDJ0918pk7T3Tw10Zkcra7DfHhN0QzQ2rO2IocMozn4o35/5dDq8+18Ix6hfwrH1yXCM28RjvByjT4Rr8ql4/ps5ypekuT5fmE1nLlh88Ms9tgHqG0XOrdsnejNYXi61wDUNps5djsXcEZ1Yh725zqkTv9hla+xTmI2GNZUmkrybdNGO4JT+F7VeCpy4n71Lu2mXJrAfSN0efPdbfO/jZnFu5ZjNCfIsx4jMTA9CZVV457u5aBQZlqp52raDS+ToAduOwK55OYiU14A7N7d0lKeRRhqdxZYlldNII42fGJKiMIqBmJFEVWPIcrm0DV0sW/LpVL42dBZOC6Zfxu/3AJVBlFvTldvSxfKyfRhYkA0XFdVumvanESdSzogYe9wZbkB+jhqexhYxote2/WOiuJXXBqX8Znfj3gFTRjpUOK2ba8HVN3Y8fSifBmM0LlduolK5MSMTia3opvbkH+GXrNwsdQDe/9aXWCQKP8+Yt++m0HQLM/IgN9OPw3eagGKuhyZtGxQ6Mlo2jW6ENr38EUt0TXUQVUETvZYKY0wIrwi/uDJckl0MNpUpm8izGwjbqOEHI8MY5bSmoh6xGI0fKQvlUpPssvIK3JzenHRKcbuHzzcH1IFIJ4EYeMvXVptEOnLbqKPfLXUXMbM5pvfxkRki37ie5jqwiuNYU6WGaYJtapLWAcewWCyOrIIcYMka1C4vs84YqDyxBocBgQCGJmJI1NSqgT8oPxf9C+U6gtnMH4EDc+Vej737pe4iquOkPcB0AI5HsVgS0dZrHMr97Muz/H7hxY5GZwPjbnCYzV/qG7HMaktjpLcsS1FOADuWFsJfH9KI++4Ay08yRLnDrcjhASW5wmItW4Vlo7OB/ss1NfWoikTh8rg6Q7otCqyOg2tGs5Ua4zhixwnmhPy2d5qmM54vchkBt2BFGTy5fngmDEbW2GHInLBpR9a4YfBNHIHk0L74/If55nnSQ9hPmmGIfuSuLJsLESnPliTm2JfoN3QHXFi4thIrK+o0ndHVqTAOwoTuJDywpFB3Yo4Jzdtb2qC7wGUiPMLrNeWVGDZmGAb2YQQ+17ukDmrKwqhQ8gTx3cJVZBI43cle4VOnnOQuy3B78M1387C2mvSWgrUhT3KkEUrCYaChQccZHWPTSCONDUYrcZZGGmmk0YMQpZH2sTMZR6HPI6pi+5AsqhCImtvmkK+2vyiedNKhqg5fz1tsnWkJGgoFWQHs1bcQmbWNCHNRbjWaulZD5d14xCMxjJJnDe8nCiLVlRSpa++4S6fhDwtXioVDhYy1WFfx2SyQ4jGyiaWsDUdRG2redKYt2Bs7MP8mYYNvIBcoA/SAMij0yMzPxqefzMD1T72PIKfDanntQgt/inHKkhw6aSROnDRCDLUIasQgrUzZtCeN7gEdauxjtULrhjZ2drUddnTsmwgXtpR87ybnxfqgJprTOFvCwUasqjY8wgiUtgRdBtlMikp3x08G0hYaKep24ce1Zs2/DFfbpp0asXFKyJ6tP50qMZHXefLk4YNLrNQU2LInyml9Usb1FI8yIlZTD8fe2+LUpz9AdR2d3EbWNk/DFsM4JxMlu4wXyzcLydoG7DRuqE65VUi2qPzT0ELBzK9mAp9/i/zBfdURoc7D9UBGYIQiYQRDrR2Dcq11fd+ibPku7WOLuHaguaUtudwG554+/aGJHuUmBVrYJpgb5cmYTwdEPGZVoBvAKoSiERQX5GJM/z7rOA75so4OLC5rMGvxGsRFVnPTNtbjpwSNchViBEXnQb9cHLeXHV3GV10WTVhvoc+qylp8PGsZ6hsT8Hk82jc9m3h4nS74MhLwCG9/NmMBVqyt1OeS/5qQwRkZCfTJz8Iuu41H7YoyONym7FsK2HUzM/2oXV2Bl7+YKfpBdB2es6M7iwpycMaZh2HC1iNRz02VTA/qMXD534TIF7z1Jhbcd4mmJRLNU8gJo8k4MHPxKrw/bY7IlQRc0p69AXzhFo/EkTu0L77673uYNYMR+1LeNsZyj9C6z+7C8yIHwlwOoxOyMY000lgXLaVZGmmkkUYPQU0kGbs5xLvFaGnDFFPYSiMVMIRj8IrUUruq1bivP6kcU6lxO/HEu99p+jqw7pdbkI3MgBsJUTy4KHp3QO8qRu7ooaUoLcrTtFSYadIOrKmuxyJGZ4iCaVSyXqLUSDHo1KCO5ZQf6zNEwwzb4JSbHleBiXWVxS6H1J+GjdeVAV+fAtx9/8uYOmsxzFo6UmtpcPKr4aYkfFl+HHjMHhg6cRjWVNSgoo7GQRrdBjYDCSyswHXnuJ5Xa9jyRDnUNBs5G5yKvjlAbmGJHIwilL6TYe0UwTXcbU5KRUzk308p2pDQ2mi7OHT9QgW7cxvVjMaMbOlpGih/SJly5fnFvlbr5Fk8pRARyKzrKx7zMEI+OycLVctWYu5KRh2KIZyMGecwM8hnfsCHQ7cZg6H5OfL8JMYN6YtsRtUTHAv54ksGjfpwBH//ZCawy46IcYpwK2dFe6C7kNGP0XU2o5CHk9CC/IBXHsQGIdqvGLNTPibjMTgG9sVt97xg0nWzL+tmArsP9t96BErHDJZnc+q95EmlYxfAfiI3RRhTWqibC7WGk8QTUlXUNWLBqgq5iH1QO5mV4ycCaZcMnxuROctxwd7boSA7YJ1IgUX/pWXVWLByrdDAjiyz+twmHEm5VzLDKd3DiUXltZi6YLWkyrkUOpMv4haf3XPhCcAHX8OVnaU8tcVASMiXG66cTDz10ieYv2SNJFp9Uc5RprPK9vp7Y0uLsNvk4YDLgYhOE+9+aP9jOUVPLp+9FAP2O8CkUxqI8OHYaUB+MOX87MelWCx84XZyYYnmNtucUN4RmejN5PIDcaxdY2001SockrXIFZm5z/ghGJSfhTBtCWbpYnmTRhr/C+icZpFGGmmk0dXQ6MEE4mL4JN1uLoxkn7A+DezoiyWcFloThIdTP9sb8EWRSIgR5Bk9GI/96zErsW1M2XkCdtp1okY7xDXyr+uUIWMYJRFujOh6TzuPGaBRjq2RoRZiUqe8LhSlx+11cXkcQdeVZVNBRZfk8Xs8yJKjIyzhznbcKbOd5uk+kF49QzO+5aaxnpmXLcwJ/OOp94QtGS3kVNuazmDbMCa2H9QPe24zGiEpXqVGFfQ4cf7H4FD6Zwe88FFWtIItT/gioioYVkOJ9sfm2tmS/JARTyAshz/gQ3GqnGjFKjXxJOpdnKbcmyTEpoOvGnTKYiKKIUVmGi7p0laTVIVCKq973HkqZWGZvIzYag3hN26EpV/ln82DHYFnmYcb5LBBH7d2rVe/se30Y0ML+vUtQEFOAH19HozrXwSPtTYdr/fQ8SXZvp67DHNmL0agIEudL9al6wWfxDGYzruWYE1MJCCnM3K8ZpXWt7amrgcr98sfXgpM+0TTuJOucT3Z4PckdpI8B08eKdc4dUkPfUBXQh4T0g29HNhx7BCUFtBx2NIJZUqVxJK1VZi9rBwOjl+S2NVF2ayQyrCenJqK8mocsc0Y0+6tpp/TEcPIy4+mzsOSVRUIeBkRqq8MrRybBr7IIS9V1YcwddEKK7X53uRnloFrPo/ty7aqQYhLn3SWmXsDpKgJkeU5fQtRNWsJXv3kB+uE8J3+J/8xjo8tkERepg9H7zgBE/qVoKGBsq0lf3YHVDZJP62qqoVHvr/3+F81nVTmJmPGM2DkC7FybTVe+myGrqHq5lIRvaU5pBy6LARl8rhReOj7RWjU/m5evzfBommfwnzky/gSZcS6pNn1SyONNDoPFQ9ppJFGGj0NDtpUsGIRMRbHDsJITuk0Z6xPgeSx3za/PX0REAmL4iJGSDvjPZXOmCgOBQOLgVVTNW2daRWShyZRUZYfR+40Hrk5fjFaGHPYVUoE7yRKSYYDjeU12KE4F/tvPdys+9QKNJi4nhCNvlBlHXyiqLNuvUlN1vKIITigIBslcrSHmOT5cUU5MrxecBpoV1Gz8yDVeoByVFZF6U6IgZU7cSRefnca/v70+3qKL7pV8VcGlR/ymS+GwRE7j0Of4nxUB0PCzz1Pmf8lqLQQug8uyUNJbqamtYC2jdjPtQ1YxoXS6bghNlOz8LEajRMKY0S/Ynh0kygxoIWZUqNxiG9nL0I5I4DlXM8rb11LoBZ3kz4hEpM7SWHKyEEmjf2sDQt1dWWNcRy2iirpbrAo6qsU434dpJSV62VyvUatz3pAh4xelhXAg++Z8cqR4dIXNanoX5yHgXmZ2Crbi7F9C0xikuOYyBxreHvgza/UQPbTyad37gxY8AyEZQwKhls7LLR0+i2Lm6M4pU7WWNwR1PEjBTOvmAqxoLoOTrk2dURQWkk/5Ofe241GSV42ojJuM0erqm8ahEfqy2sxVmh35A5jkc2Xk6280YwkpUiYuWgllq1ai4AdzfkTAuvHTVFqVpWjz64TUNyfy6aQPOtKkTqRi1O/mInGylp4GWnapeDmVRm6wd2bX87CjMWrrHQD8gMdzzYXbHv2qaiZsQhOj1vq0KWc0a3QknLJgnHDcNMbX2CF0FKojXiLOpAPDS/uLbrvqXtNgi8SR7AhrGndiQyXE8GaeiSCjbjhd8dhZFGu0JcONzo0KZOMjmx3xg++mIHP5KAOy52uexP0RYXYES6Rke9Pn4+q+nU3ROP4SnBt2OEyxlKQ6/IIvasqaaSxRSDtOEwjjTQ2D2Qs58xW6iH7bTsG2wzrb51IHc3FULEG/WvufAkYWCJnO3ZK0aCM19YDg3bHja98LgnmflQ8+c+YQyZtr4kjMG5wH0REYdOZUuu3izqEPkOsJqpf4YaIKLwu7DZlLIb045pU5vkt4cDaihq88sF3gNclipkYfVZ51wfeSZ9nRbh1RJONAU15Ii6N5K5rwA79CjGsj2W0WtAaWcbkCjHosapCNw7gYvdqHG4sNuZSKuU8uhtSNq2bHE6pp7tvHv7+0BuYsXQ1bXBtf4tlm9pyF+GziSP663RlnSbzPwjDq+bgtESd0mid6wrY9zLTkDIweXj/Nqfj2dErFfUNWC1yQpc2aCfaUGOila1YXuV268ymw6aF/IFDDGNI/9l/2+HWWWO8kdc0i5U6e8kqBJlM49qqR3dDnUXaZlZ5uwhaf6Gp2RjDiYZYBPD4scc25gUSnW+2nLafWybtRWev9rE2nB7dCfZp5QHLmbIOLaz2iErbdKZpmEUNdLlPIDcLNXOWY85Ks2t963t7ZUzrX1qE/qMHw2tF5mseDp4OOgqBZ7gbdU6m0qzzrMHnJBGOJxFcZ+Mm3snQuJj9yMX154TunXEcSJ5EnRjwO03C7+543iTJP5ZZy83/VhV3HTsEO48agGRMeIy3Fn6Lb+o4zH/ygLCM64jFsNO4wTrO84wdMamPkD98ZJmMb298PUcd14xSJkv2UPfqGUhd+EIrUR/Cz/bZBsP6F0sdpZKW3LPpRSxeW4VFlbW6s7T2P7uhugiUXXz5O/fHpZg9y16Hmq3BPm3KY2/WcvuFx+nu3CFpw03SJ3oapHc0huw++ahYXoZbX/zUJMtQw2nA9rrRhP153D7b4qhdJiAWCiMkfZHpdpt0Fez7haTtw3OW4oIjd8VvD91JTrDPcTw2dLf7KNtqRUUtXpg2D/WuDHg9HtNvehlIT0bHQvrxvOVGhraAxTp8ccAXil4Z800bbEE8lUYavQQ9q3mlkUYaaRBUSmTwbhRFffyAEvxir0kmWfWalMFclEWX0xhGde+8irwRQxCLdDwNi8pOpCEEjxiglz/wqpVKe4SKkVGcCH7vV5CDP/1iX2TH4ghyxzVVpDdeNaLCRYWEJlhjYwR7bT8Gxxy4o0YSthet8c20+fjx/e+Q069Qru/8kv/6rERci+ywFO2uBOtBp2FjOIo+omztvLXt1GgGaRizpjvd+NLH6gn2+qWupiE3HhtzuT6TR2cpuGmgIcMpVZl5YlRLnfc76nJNd4mBbaabN6NIDO/9th4GjxjUIb7p/h+D9jvlV7ri5LvQJym8u8l8YkFbns69jCQaKmowUfr1AZNGwGtF77WAyAeWY86y1agUA1mjfCW5LZkiJURS2pjRw9reXVRegjThlHdXhhOVNQ3wFeXid0fuZp1thtmBUyCP/nbeSkR16l7PqG7q4BV25WcGd6A2Cy92EYQCci9GizhzfAiLDLzxouMQ4LIVAnVaCIxMNTT4cVkZFq2pliu572fXtUWnIMWJCc86RBYSthGusL6yZzeKgd1ZJ4dmEwEeoONY+PDMfz5pnWg5VjCocN+dxuFnB++IbDrx5Nm81uRy4OkvfkTjvBXIzc8R3t4Ac1huQvdsROQ2p6iuC3On4rxMdRzG+KavE2RnFFAkHIdvUAle/XAqympNFJDtgFfIs0lDGvx/Pmk/5Euda+pD6tjnTIRNaV2bZ4LBBowfPwS/OGxX5ArdNN0iDovBKdXE4kUr8cqzHyHQr0jSN+XJvRP09TZK+3K37V3GDdXdfLWWDjMWqXwWMPL0rekL8UOwEf6CbO2bhkm7Ekl4pI83Svt8v7SM+8FZMF9S+84OI/sjf+wQ1FXVmUjELaRp+HKbtcgQeeEWeXHjw2/i/RkLmnjbfhlj8vJrEn2L8nDV6Yfg2N0morEqKHI+qtHwXba+ozzD4XIgKDp3w5oq7HPAFPzhhP2kW2fo1F069vkklsq8+JV00VUefftrvP6DlD0zoNGGrFtvA/mX9RDC4q1p86zUZnB5GdY/S/S04dwUUT650VUvrEoaafR6pB2HaaSRRo+AKip1JY7VGe4MVK2tgre8Gv/8zVGYMLhfO4O4DPiiwNzz/jSgZCS8oohxUnFHhpmeEQUiK+BHZHUFXvjyx+Z06y+hZREF6YBJI/HLXScgunQtwgkqa06NeNhQnUINSRZXjmBZLUYXZeN3R++OrQf31fOpETSpuOH1L4B+BepU0nt0AhqtJQ+qC0VRvWQt6iprSCZ9Nuu0acaPcRbQARuLRZFsCOHEw3bGPjuNt86nQOts6nT7b2+Fb/Qgap12IEPPQsvBY1PqvmHQR4rxWSD8u3rafLxI4yDDqYZaE6y2OFAM/0N32RoeyxH+PwX2JzGC6sUQqVlRjmBtg0b6mWlPNPLpottwkM9JXW154dd67kwraQfvORFjh4hM0bMt+YFttqauAa98KwaGGFEeL5c+MI4YG7yCDhiWr6Ehguq5S1EfbIBbDF6ryBtVXkJLRJ6QG3C9KJE4SLz4Dl6/+TwUZGW2Ki0NUGOEzltZjumLVmm5MlowWPeA9dP1YrMCqF66BpVLVmtZnWJ8slysg6H+hoPVVx+kIwmvx43yecsB+bz48J3kji0pq22jFABmSTlWVdWKkcjfPau+mrVNY0i2uVyDKV9ZfSPCLJv52TmQFYTOOeOH4KObbtck3Tk6BV6PC/tPHoGDtxmtTh+9vzCsneu4M68H+vfR3W831NHACMKYDHhh6QvtoYg7r4phzmnYWuD1gLni0rbZLo+MH424/eXPNZ3riHItS95Bx3B+EX7eelBfnHf0nkLAGtSGQ/BLPThxuTUvrB90OEr/EPo1SB8vlL59/uG7Yu+J1jIo8jx7w6SMmJTBbery9Mc/qCzIDAR07Nug9tsSIPWJhCLYqn+xFXkpSSIvHQyBE5BmJEuFyOVv5i1DknJRdLSN7d8dgaR1Sh8J+f34ZMkqLFjBTYHW7cvkY/LICbtNBmzHc1Mof++GyispO7k3KyeAhM+J/U64ypyT/ta6j1LGJeJxDO9XhNsuOAZ7jh2C+rnLEYrEdcwxXG3ybQgFKGdVl5UvGS4XgtX1CMs4coToIbf+4RcoLclXfY3L+ajeItdQLjutzVFemzYX97zzja4HzGnKLHtHuvdmA8vEQ+rx1dxlVmIz7PGD9RzVv0jXG+e08d7oBE0jjd6OdaV1GmmkkUYXIimKSFy0FycHajE6qXiUz1+pDpf/XHwc9p4w1OSTMVx1EvnUKWwxDuom4Xe3PQPXzuMQDTZazgajCLQJXhYXpY0bj4ghftNT72iyTn/hW0YLvAMj6ojrLvo5Tj9ubzTMmK/Rgm65ltF8nbVbYomoruvHu1avrUa23PfSo/fAIdttZTIIbIWLipxYivr9wbe+xpdT5yJ7eD/EQpxi2UG9LGjUljwrIrSYIgbXWUfsihxRCisXr0aNKP5UMkkjftIgba7x+hGXOielGBliqIYawgiW1eGXe2+Di6QuJFjrqEnq8W6nGwura8QyCSK7KFvXOrQVtY3GBl6u6rRF/56E2aAhAxn1DXCLgXr8pXdhxdpKSafT1bQTjWVG15UW5mHSsP7I9LsMj/YAlN3JcHLQMIHwA3miWw5l7DYgNCA/1a+uwmQxVk/bb4pQzIHKZWWoFoOQ1zk9HmTEYxrR1FnSMJ9dJ3ab+mAI0dpGnHTQjjj7yN0Q8HHKoZyXjNrLYzHp2yyjA3UrKvDOo28hq7RIDaXW3Y58TqOiPhRHfq4Pt/7+F4hUBVEuRnVlfUjoGpc+xqmXLIP0tBS50hG0zFomqbMYhFV1jaiduRDHnf9L7Dl6kNyvpWHIPkwDn/hk5gLMX1Uu13X/OlMsBXfG9WQHUPb5DFx/6S9xwJStUD97McrWVOl0cPZxKYlUxUTQtCx5+1D5JTTQKGm3E2ULVyHX7cIL/71Gz/PVUGsw2mju8jI88d53qGsIwS385GgVldf9kOfJmBQosDdvSYHFQKvKatDAF0RsM5VHnYBcSjlh1ibMxfTyWr1exz9JJ2uxvzAq0ceNO+SfkSmJZgV++qcoHlFqopQ6MYa0BiNfuQlFe9B1N9WZYJw5nQGdD1FE4MwtwAMvf4y1DTJ2S5uz3cjnBO/EvkRqXvGrg3HNb45EdM4SVMWi8JA/4hyHO9fOzKbOJrl1ZWUNopV1OHX/KfjVftvreW4EImRT+imc7PhO6VeL8M8XP4F3wjDEG9tYv7ILoLXlCzU5WNA25WcXHa2dUoQ0LwmAbUYNwJA++ZpmqGD+Zqj8cuiu0t8vXK0bxGQIsSxKdSnormEj8eXHPHne9MWiCypaPs2WA8ftPVnzcy1o7VNKzN4OoR37CQ/pxwV98xGvasA1/31PZZlL6Gv3AYJp2kQynpWIzL3zkuNx9on7o+HHRRqtq21BndTqD50igWRKiAznex7yfXmZyG2RLadJf7jl7MMxdmCx8GMcMaEti8l76osR6XaMdFwueuydT7yDhYtWihrtUxlkJBE/eyOkXH4PvpjT7DiMxjnlW2pmt4Wgb34OiguypTvoKKdpaaSRRufRpHekkUYaaawXMs5SCWnWHUSR0eHXKDT6j8aOnjFnuXi7Nz8bSTEEKtdUoPLjWdh37/H45p4/4ISj9jB34X31m0C+cJoRFSXinNufRWN5NQoCfupgOt2j6fFtQfLQQUklPVsUhI+/nofLb+YUsJZXcRdMvmWlIp/v9+Ou3x+P+/71e9S+8gnKxehwZvlFwTMi0tbFbSOG9WyCPMebk4mQKH/Vi1aj/4Ai3HPFSfjV4bvr6RZ5BerM4LQ/wa9veBzIyxT7mYYZC95hzQwkD6fMRUXp23XCENx1yQl49fqz8YvDd5X0JGqkDBUrKhB3OeHtWwAnHRvWpQbSWpLAwy4b60Vye7OlzkV5qJg5HyFRMo/ffzs8cOmJyM/0Kw1oD6fCQfoJdjrvNuCgXREPhiXNTH/rSagxos6UljXtfkhdhShRUdDzsrIQEuP4hGsf1TOMiqIRp4o4h1ppNxpLujZbD5HH53XCUVwIb2kRfP3kUw63HJ6uOkoL4Olr7u/JCUh926C/1DsaiaojdeftRuPmC47GD3ddjCP220a4L4lqMVQrlq5Bwu2GtzC7KSLIvpM608irwn9W91O+ZS6v8GVceLZi8SpEK2twyQn74N/nH41BxXl6ndJdGoB5Y4443JbKc8H9rwLZmeqsobxq7QxhPdycmrl4DY7YaRzOO3ZvPHPt6Thwn23hlltUS3rFijLEpI097L9CZ7u8LKKSQe5r9S79ZBJfLrj9XsTdHlTMWyL9pQF/Fbnz5L/O15wssymhAUtFaTd17jL869kPUR1shFeu7W7jTacGS3t5CgqB2f/FH0S2PHn1r3Ht709ESVGuRq7wRUVtMAiHyEmP3wenOhGtGwiaDVyliKGFEMbl88Aj7VbTEELN1z9ih8kj8dZtv8MRO26l+XmfFrCEztRvZuP7b2frrvqMWOqxTpSKhANDS4v1a4unWz9WV9UgKOWlLO20b1fy6bRArgm4zy448ar7NdkpN2naaEn4kzxluJ68JP+sl0+XPvQ2MHp7ZNSHDB+34uWOwJyUSZFkHHWhtqYqN8Mv/TPCNmUjdQJa/0QGsvICWLa6Clf88W5NZ//OsMZ2JZTUnVG0xOUn7Y9PnroW0U++l/5VTgEGd8Cr/ZE57ENp0cRf/J3QjTziXo/w5Rq4pF/fcNGx+OspB0p/pVOGDk9pF8peCzr1VXDC9Y+pUy07yyf3Yf+z79p18NHx2r/IyF4Zk9uUpZt6lMrRJx9Ot/QfqU9KV0RjYxjZIp93nzAMuaJHtQYjD8lr3yxciSUry+CX/kzp2R1yhtSlDsdlJNZW1eGLH5egpp47lbd8lo6Tgu1HDsS48aNQv7Za+sS6Gwf1VrA2SkHhqWQ4gby9JuKKG5/EbS9/qv209ZhDmkgi1UmMGVCMWy86Dt/+92okF6xE5ZJVqKyog7c4By6hG53jpiPwSrk/n8GOaR1sfapmbpHNdTL2Vi9cgT6iC//rsl/gHxcfhyHCL8zKMtj9gBHVcemPLFWD8Mt1j7+Ft6YvQFZhrkbqUddr7j29DZSHcQRED69fuBw/LltjUlnJFj0BGNQ3H9sN6gef8Lvu5N/qfBpppNEO2FUoNwp+cTV7VhpppPE/DhoF9WVVCL54PQKZbe+m99msJTj11qd18exsn3kLGRNNh8Y0o3mclCaiYFCR51dGGtbGxMB560t98zrgyF3xi/13wvUn76f348Aej4pS7xYFRhRFo0pRCaKi78TNr32Gi/7xFHIK8kX7jovg8sDy5a0XlHGMCKutCWKQaJvTX70BZo9Vnml5EzrhOM2L+NcLH+HKB99A9UufAIfuitw8qac82qlOMttYobHDuU6SJgZL1SufARU1OOCSX+K5v57ctE6XDVs14VNZZ1UcdzoTyMxEkShxtuHUGdC44Q6U0WQMfzv5YFx0xK6azvWJfli0Cl/PX47LH3tLyv8pUL8CrtN/DW+tKN0er7YP6ZphResYQ8mUr17aKjJjMTD9fRzy96vwm313wYGTh6liqZEcloKpSCHhI+9PxcmX3oaCMaOkjduPmmS9uf5f2apKDB5YhMX3/9E6sy5e+HIWLrznZaysqtf1aNq+owXWwe9F+Y+LcfTgPrj9n79F31Jj3KciFIngmL8+iFc//h5FwwcgJr9tpXlTwVg2RNyi1EdQuawK5wif33nx8dKucXkGS9/xcxrCMex36T347LvZKBrcV3caX1/ZGhqjKHQ58Nw1p2PKqIFWaku8PnMRDh6/v3wjP3ZNXVvCbpkIUDIGhQdNQVL6cyrIDnV1jciR/nXjb47Ayftup1dFRC7MXFqGhWXlOOZP/wG+nQ/UVAM/21Mdei6hGw0WM22TSj4lgwHlAyNQQrOFX3+Yi1EXnIhrj94Vh+00Hl6XS0RNTHichk4z57C9XR4PPvhuHvY67XrkbjUIGeRr9uFWiIbDyBlcihU3/VOetcBKpS8tIUbJWjwpPH/729+g9g2Ra9yNdsoYZPbNg4cGlsiKpIvUpuOYHc5QiXIyJOUOT50LrK5G6cHb4ZHLTsTeE0eam68DuS8NGyHg/S98iPNufx7Iz4GP6+F1Mxj5wijQyppaQPpLsvJ1STWdfoXIue/EmL3j9S/w+vMfAbOXAWLcZ4zsC7+MCToVX+ifcLjA1SM1hjQhtJCqMJq7nlMTp84DRg/Er07YF9eccgD6M4qPjdvcXKb6JJ80z9LyWpx1y5N4e9o8ZOcyrxjGHfSPoBi+frnBNScfiDMO3Rke4Ym2cP1Db+KyK/+DIuHJWH3jevqcA5Wr1+LqMw7DFceb8as1XvxiBn5189MylialnTZsd146AiMi14N1ISTf+qemxeMx4X8hQCsvJKNc1Qkm/zN/fhXCyQZkOQPWNPKWedeHRulH3Jjk6l/sjUuO2dNKXReFx1yJyngIBf6ATlnuiFJNsFi4MdSI7Egc79z3B2zdt1BjydbtdYRhguc+n4G/3PsqZj7xLjB+EDLHD4c7Fm+qGf3GZuziTrUyDkufqPpW+tUP8zD6nCPxwbVno29+tuQU/hNeURpaiEuhbBfIblc/gE9e+gx5Y4R/1YmwYWAZ6hoi2G3cQNx51pHYapCZBtwaL3w1Ez/bgZGPg+Vg/2Vf6mqQdsJzB+2H4uJcRGRMYeSYy+tBxZylOHhQMe75x29ROqBEn966/SJC30vveQm3PPEOCgaZ5VW6E3RUcobEQVO2wl2/PRKDiszaoW3h2Wc/xDEn/R/6nHwIwtU1usxFZ8D2qRdZsPPowbjj7CMxfkiJdaYlwtEIfAdeCme2H/lZfnXebTg3tA/KMfbNyppGJBrqcO2ZR+JPP99bWsy8cNcxztKbWOaYjI1md30Hvl+4Co98/B1uveslRL/4Fth/N2SX5GkkIeWqvki3Cst2peuPumldfQSJL36g1xrHnncs/nLM7hjHJYH4TGlrdiKOkeQaJMPSTz3CE+ZG14neffnfnoSvJBuZAb+JlO0kQbSu0jwV1UEM75OPhy46DjuPHWKdbYmpC1bg1FuewfeLVqIoL2uj6c46MILQI0Qp/3Q6XnrqShy2/VidwdDWshaP3/sSLpQjOLS/6gtppJFGx4iKnhAW/eTM/SavM3akkUYaabQEtRFLzw2HQ6haUYHInOWoEIOxbMFSVC1cjrUy8FfJUb54jZnON3cJquSo5dpVZdX4483noaHyVSx79C8pTkNR4UXxcVKPlpFfHyMDvVhLaszPXV2DG/75FJxZYqgExJCNeMHZS52FZhVjwC/K4CLRZA6/5A7UczqwnOGU3NR38jRAaFLw/wVH7o6qF67DW9P+A6ytQM2PUrd5Urf5y1C+YDUqGNG3YBmq5q+WYzmq3voaF135K9G93sMb15ymTkM6yezoRIV8V+VLHkCn4QV3vQwsK0cfMTQ4/WRDQNdlNBbF2JJC7GspZFTW+AZ/+1ED8ZuDd0LVY39Fsu4tSZ+J2IvvIVjWiNrZ0iaiqFXOWYzyuVKXucvl+wqUy1H54zJt0yOP3V2uWYxXLj0FB287Qg1p3W0v1aDmbyva5a1pc3DyH+9GYMggRENi8NoabA+CVKYhynIZFbLn4RRj0OmOiPHlgacoE8+98RXmrqwW+nXOwOkuHDRuKJLRH6VNZ8kxoxuO6dYxB0//9ypULC9XIya1FajQ86XEiGF9MWXUADUMEtJidOZMHtYPR+8wAcl3b0Gy+hV8MO1BoLIWjdI36hZIvxODt3y28KvwZqXIG/6uEplSPWs5QkvXYs8D95Bnf4E5t5yLY3abpEYAIw80qkmfTiNM2oUGhMeju6zudfp1QN9CaTGHXNs2v7o8Xl0jrdngkBJLP3VJP5gwuC+u/dXBqHnsL0hWvIonX74GfQcUIkh5MHcpKudJP5MyVrDM7G+SViFHjcjJsHwedfy+qF39HFY8cZXlNBRqKQM3g9JJPS5Sj5e/mIk///dDRBnZ5xF+ShEr3QaRlxoUNn0RHnnxRk2KW7tK9C/MxSFi7L/2118j+d0DWLj4CRxy9G5I1IYRlPpWcarpgjWombUQZfNXCT1kPOA4wXUiZy9Fn6JcPPLc1Uh+dTceuPDnxmlItKpXPIPTmYE6MfyvffxNvPHNXHizMoUmdManyKMegkZlw4UJQ0ut360aTVDbEEVUhLGJ2+k8SOqotLc3EADqg7j3jW/MCZEs9quqFuDthQRvi/xtWL4K+R7ShTTZMObguOGI8wkJVAU7nqabXyRla4yIcd9JpyEhGRkd5fN5UCZ1OfHye7BgVaU6DTkVvjVYEjqtj9ppPGbcfym+m/0wBg4fiOC0eagmX3G8FR4rXyh8NV/GZOGtKuGxqo9nYM+DdpT6fIrZd15inIYcg6Vu9nptNjIsEs2prsUnf70JRduPFpnRTZ1K7svpn0dOGYdEpFaKRFn8gxxtydJNPWbKMQ1jh/RB2eoqjcplFFlU+g9drO4h/eHIXDfa0MZnPy7GLY+/BZf0b/YvE63VfXCKjOHU9VmiJ34v7doR8qVOGFCCuppauCz9aksCx8R4LIE8zmLxBXD5XS/ikfe+lm4s+q/oCFxj1JYn5gWrS4cE8uVEGSNvPOUgRD7/N1798mGU5uegbqbI09kia6UvVCxYhfJFcsiYUyk6XdWsRagRWZuorcNVt1yA5OJn8dTFx6nTkGSjupmkYOX4IkjERWZF6DQ0ePGtz3H5YX+Gd1gfGU89+lJhA8VZj4Pc4EwKDWkgDOmHwy/+tzmhlW3u/7ZOHh1cgnBhPuLhqJCBV6eRRhqdRTriMI000lB0FHHIAVfXcxPjZFVNA35csgb1jSFdcHt1kLsRx1XhpzMgJ+BD37xsDCjOw5j+RdYdLHA9o4QM5KLUqiGmb1qZLkq+GvsUR2btm5/96W7MLK9BQbZfFR0d3zdCgYmL4h4WxSxU14izDtkBt/32aLhFwTC3M+IvKUax2l2CaDQCt7tltMgH0xdizopyVNU3SrmTyBJDaHhpHsYP7YfBooDYUGeoKGRc/0zrZ32yfvZb8nve+gZn/eZmlOw1HiGhJRXhDalYTJ7REIzi4G1H4fFLT0Cm16PmIovPZ1HxpELe+p6c3vwtHRnSXpy6xDJ5PG6UFmRjcJ8CFLYwKhLq8DFRlilgXTT6xdx73E7nYLa0dV5OFqIuTgVt/+2tUYi7J+LQ4fei4sdFOHpw380ScWhgOQyE16obG3DgxNF47epTrXMdo7siDrW/0UjoATzywTScfMX9Uv4+yjs0lohwLI6QyInT99sO15x8AIpyAmoUOSWPVFLz0JHI9fJSEYpF8ePycqytrkewIYS4ZPWLIVMkxteg0kKUcsOGFrB7gflGcO0uRj/bfc/h3ReOPSejuLQA0XBEyrgujYWd4PQ4UP7DYux58A54/5ozzAm9ffMz2gJ3zF64shI/rlyjEUyMuM4WWZqX6cOkYaWtohsoe/iCgVMo5ascTLFlEr99PWcJTr7xacxevAq5Rdkioygju7892VdDoRgaV61F/Qf/EhmTMh6oDGifBqurajFruVzXGNGoUG+GWwxmL/oX5WBEv1bjQeq9mkhLmkg95Xs4GscVD72Gfzz2NrwiYwJZlAXM1KFE6JaIQ0Z0R2U8+uyei7HtiIFSRiPfU3Hnq5/jkvtfg4PLRMixIRA2FfnoQJmMwbtNGo6P/v4bUkK5wbzYSoUh1vF/fwxPvfE1igYVWS+gmojYaXBdRPavcw/fFbeceXi7lJ183k34bt4aFNCByDG84yZogRjLFUmgtqYe+8m49dClv0A/GTd0SjwdkVpk64bss8rnKiVMmuCrOcsxc9lqlNU16EYuHPeG9cnH2MElGFXaHElG3uULSG5yxmgs9mfSRe9u9fcv5y7DjvtejOKDt0OoKoQMF6MQN7xfrS/iMCZ1cMa43rB8uro/UpgYdOI1WFZWiWLRS6IO0enqQugX8ODW847GkbtsbeUy4MtTUpq0+eCNL7HXQX9A4dlHIC7jboZGanUvGBFWu7ICxxw4Bf8+7ygUZVOmGynYjCS4ruxZNz2JZ978BgXD+oJrcnZm7O4tEYepYLQ8l2lw1Edxy++OxrmH7tSUzmcmhEftmjXLmJZ9ISx0m7F0DeauKMOKsloEI2FkuX0YKGOEU3TXo3dqXlvbgI5JilpzZ/Pd6CtxGbOol1EHueCOZ3Dfzc8g78Dt4Gzg+oAbDvY3Drc9GXFoIymyzDtiCFb/7TSVAzHR/blep0058jupW1ETxDnCTy98PQf+3Ex9IZhGGmm0j3TEYRpppLEBMPET6lwTJb9UBtp9th6GI3YYi5/vMQnniXF93iE743eH76bRbieKYb7vpBHNTkNqEqLoxHQgl9+c9ytJxmkoX6jFyDkjjBx47atZ2OsPd2Pmqgpkec3aeqpMbKRGQWWJawx5fG48+OyHuOGRN1UhM7cz06JNeI0NOjXNdGAtqGDPCcNwlii3lx2zB/507J44//Cdcch2Y5uchtFIRCMoOJmK9aLSQiPfrhcdF7zTxfe+iLP+ei/cE4ciJoa1cepsQMUscnEWy6QRpWo8EXQ28B/rap7vUKWJ9aAyRbgynNhh5CAcNGmkRnQctfMEHLrdGGwzrL86DXU9voQMDlxJPRlvelHLumjhCVWwHFgkyv6Ec27CrKJcXUeSi3CnKrabDPt5nYCUVg/FRvJI14DxA1J04SWX04Vv5i7FE9wN3EILOvYQGB1EwyAWD1sp3QAypCDMNdLI8yltQN9gQhSOLOl7I0QeZPu9SgMHT1hGPME8XC6AU6zUASL/fWJoTx7ST3c9J6/+fEfy62jsOGaQOg1NlJCY5BQqpC17mk1j6dM01lkY9r2aYCPG/uYWYFx/FA8sNpt7tIpEIngpHZ7RiFwbDOHakzjN24JlaJlnmINRxHG+LLA40CcG2NhBxTh6x/H42U7jcMyuE3DA5FHYYdSgJqch6xgTQ1Wjq+UykoF35t8mPpbn/DB/Of5w838xe8ZC5BTnahrlb7dDikKnQWNdLUaNHdrCaailVC+n9UPqT+cP66RyVMDF5/eeMAKHTxmLY3fZGkeIEbuHyM8mp2GCGzhEtf6MYmS/0L6hdBDId4qZSDyBp977Fg8/+5Eaw5li0JNAzLo5wFo73G74LXrYjvFU1KlMN91gQ0E+0Ol2AT++nLUMIaGPOnVS69tUecO7b06dD+T6lA8NTHrnQc6jkz8DiYi0idWX20IG1+WVfqqE2ECwVFyOJJATwPufzcTtj72DSDSuYxUdGHTwaOvzv2Tmb+0e/KMT3IEpowfg1/tuhz/8bHdccdw+uOjI3XCkjGPGaWgcrIzEV/lhRdvp/VgnHpa8+e9H32HHs24EJg5Dsr5BX3VtRJU6BTr5Ha6EyF+qQBwj26dvV4G7WbOuCafQVR5HPaBf3yIM7WdeptnRlWx3bkBC3SEqaXd8+yOw7Ug4Qo1yPanZveAyDuzXEFkcnbkEjVWM8NYz1qeNBHJk3JgsuosMrDoFm3pO95ew68H+xfE4LzOApM+Bi//5OK4VfbRR+p6+xBLm55qICm1Gw8McLiPkbZGxlJVeGdO2HVqKE3adiN//bDf89bh9cfFRu+LY3Sc2OQ0pjqnPxbhBiNyAS6aYcYZ9WT55f/lOp2FlTT0yD7gI9z39AQK7bg1HMKKj55YGOl0d9TXybXsunqKRm9RKdYxhButPodgwQwf1RcLt1P7RE/0yjTR+KthQLSONNNL4n4Mo4argi7ImCqWu22XBKPYWUr8LOFjTEKKxnRBFnjqQSwZqddk134JajB6MLLr5+Q/xyysfwIpla5CXnwuX1xj+mwKuzceyZ2dnwlGYiz8/9BpOu/EJLFxdIWdF0ZC6GWWajs0k3G7u2An91HLKuSbjNgX2jsycDuXyuOU5Zj02Vc/svLyRVHxtTRBn/Otp3HTXK8gsLRLF0a+OEiptGwIWk+vTZDvd2HebUVaqUQDljP7jdzpNqDTpZhxSD92NT/5pPaz6sHJM5V+FlNUhxqGXZU644UzS2WnVxTxADIwkXvzwO+x0xg2YMXOB1kMogYTUn1M/O4+WtFwHG3ArDmI6kJkqdYj1nO4aOJzI9PlQVlWP6x94Hd/PNbv86QL/pL/NG6nYpIK1fzEjX53CYy5nywjiLgX7r37yT0sZ4EiKaSoWzICiPHVaczq98pkchg/FsE3GhFe9usYonRM0lsiVZp3UVJrJYU1vbFbzWT/eU87a+eQ/HRJqMkiZPp42F3mH/xE/fjMLfbbbWndmV/ayit0ajFKqC4oRO3IAth/RMpKz+Rksjza11eelzCIHFEICOgoIe5doc5h/XIaBBrPKNbkPr9LIKwGlQVRk0FMfTMNRl9+LD2YuQsGIUk2nnFLjsgegtRMD/ag9J+lvG3Y97NooiaVM9pR8FaMCNlMqJ6gRy3/8wjqwnZ3Sdmxrh0gmq/7aLnJ+VUUNzrv5KZxyxX9QKb/zSvP1fgk+h/Kpy6A17RSilPMBr24yQLRVDO7szTbt/F3XBZ3rkapaXHQDN/QSyM2a7pjCe1fc8SKql65AXnbWJjyPfZHT0hMIMsKUjsF2MLx/ifBEveTlypVWQ3cS5Fr2E5/UzdMnD9c98TYOvfweXSuTZ8lDVkWVFzh9mv1DX7glZfyyZGdrKI9JUdj12Bwul1v7r30/XpIhfMbow/K6Rtz72qc4/pybgIAPxfkBhGWMgyvGEvBOXQ5zVxlTdUMfuii75zktoE1DGrhEliTg8Xqwx4ShGNbX2k2ZipiATkMX6y955y0vwzMvfw7/qIGIh60XQN0MEz0dh7d/IT5oDOH9+cuk7dmiLZ8dj4sslzbcffxQDBhcjPqGRktf6zzW2z/Wm6HroOOVIFf024y8bPz59udxyKV34zOR9QnRr1M3TdF+L7qbQwStW3Q+8jX94bYD0S53C4e/dGH+0lPSt10ZjHTNkGuYYl1AGstz1ojO/c5Xs1A45Sx9btHogfA55ansQ1bOLQk67ZsO6H12xs6XWNOVSUWpO6tPytrrie8ybjD65QWQiCS4D1gaaaTRSWyJsiGNNNLoRujubq3BJOoa/JeiVLZw6qV+F+gGIPyiRiEHazM608xWySMf4WgCS9ZW44kPv8PPr30EF934NOola6EokyxGVyr0fPvqFyXan5eDB1/5HL/6xxP4cPoC1Ic5LdQo0DrDV8qqTkEWXgtBg50GFhOawTV6CDVM5NN2JPIaOipZe07Ve+nzWTjkL//Bf/77EbJHlcLt8Whetyp0GwYWgc7GSCKO/77/HT6asRDVDVybik8TQ4v0kv90XhqaE1IeOm7ln9bDqg/VUabyr+bS+sk1Or1VL9NzrIvuuDhvBa545E2cd+szWCOKfh4NSeaT7LpQ9wZgfQENG3g7A71n+zfW6vUAyELsIlk5Afy4aBWeeesrLRX5xBjc65aRRVsPSdoEr9mY67oFWomWMoCJbulb5XVB/Oedr/Ch8GsoEjN8yH4j1zjFEuLyeWaNp4Sm2cY/+Y+/DW8yszG6SOMWm/UINB/T5D+nlX6/eBVue+Uz7H7ezeycKB4/DJG6es3TpowTMJUGlk/khNfnwinXPoiFa6uU/9lftExs3KbrSX0tpbavQkhgvw/g5i7Mw9wml3xTI4YORamv3Is5aPDQyJ+/qhxXP/4Wjv/r/VhQXoPcAX1NNJk8t70ydzlYRBpXuZl48+vZ+NuT7+gUbNaDNWSrNMPmPqkZy2iTQJpJN8oS0PiVU1p3dXzy5ZO0szoRhRaUWvaSCNwc5PkvZuLsW57GPQ+9jsCAYmQXZCIeiRo6ydFpKpBsXUQy3oY84PY5Uei3l7FY9+YRGWPYsi0C2DcQcbmtMycbX772uf5Wec3KEMp75usrT78jA2WeGV43GnJfRtJKH+R05UYZC9vDkMJcoLYRGW4pzQbXj4wh10k/9LoykFlagLc/n4lT/vE4XvhiFip1V13Jo/8pF4Q/hN408tn3zW7069JbuUau4QsSQllKPpmT/ZTsxvXjPvhhEU658Qmc+X+PwjNuMArzMxEKJaxoww1bKqRNsE9v4i26CoZMpAJf3Cb05d6Eof2QHfDxhMAUlFOzuR4s8Yr0ORLLJxcnEy17eHeC7eXzeVHT0Kg7xzeG6bhu+XSntSjlkD75mMz1RSmLpJydLWMTP3R0AU929oabANULrYIw6j4QCCBzUF+8/+VMHHvVQ7jxuY8wY8ka1RtZHvYF/mctzIs2qTu7rLQV72PzHO/bBGFq/tJIXrYvnZHy3YynJl95bQPe+34hTrnhCex35j/gGD0QfbnuX1Tyc+kMzdUFoKDYELqysTYFUvCw1DkzN4Bvf1xiJbIAHIONLLGVzwlD+qG0IB8xddZu6oPTSON/B10mH9JII40tG3G1BhzwcYvkLoIq/KLUcMoO/+oUYDlWVdbisx8W4OLbn8EZ1z+CU2/5Lz76bj4CfQuQLcYQy9LlixZzDpTc0pfpRXafAnw8fRHOvPm/+M3/PYTvZi9Ro4nRURSLjNbbMDj0TTJVFO68yrUQX/5sOn4n9frtbc/im5mLkVWabxwJWq0N0aaaQUOICmBELr/thY9w3LUP6zMef+cbLFldqQ4TVoHRBhv3DLmGXg95Dq8mTabNW47rHnkDp17/KK5/7C2s5FQbTkOnwSl1baG0dhKuDrV4mN1paSSTJ5UvOweuVdPeLnketxtulnUD7rcpYHQtCrPxxLR5eP7T6ZpGB3VbUWMeL6Mq5MsGlU1oLyTqLbsC6m661ssBG6wr19GsaQjjode/xCnXP44LhV8ffeMLrKyoVgOJjjpSxDjv2+KlztBEzQI0hiKYtmAFrnvoDZx03aM4/5Zn4CopROHAEsRDUZVFnYFPeIV99YlXvsDRV92PP978DG5//mMkhffrOCWbUB7uzP1alt84LoUPxMJLCn2quEas4LyL78LJNz6Oax5+E57sAPJL+fJE+hiv0Rw9i4KcTHy3eDX+dNNTuOCmJ3HV3S/hq5mLdCkD7sBqDOANrz+v0fHAhGvqy6OGUAjPfvEjLv7LfTj2hifx0mczkTlumMhqHxi1roJvQyCXsG+4pW+0t74h4WYf5f07Ae6KnRvwy43Jp8S6rRKOCP/zdpviORTD1+N3o6wkD98sYkSeJCUc2k9MUR34YVkZqgqykS35lD6bArmeNQlHwjo+t4cBfbKAEM/z2EiOpLNDrvV4PMgpLcIPC1fhrFufwZl/ugff/bAQtY1hGT9FHjC6iv2EjbgBYPfmSzIZlnRtu/enzsWf7nwBZwkPv/bZDPgHFmvf5kwJOhs3shatIOWVe3nstwWbGWZ9YymVEIH1HC113o7TfFuBrjfSmXji4+81CpMvJ9Th2kWU6QykubThvhQdbOlaTjNtBcoJwYCSfOwyYbjZ5KoDB3dbYGRzR+3j5TrTlLU97P3lCxSP14W8oaVYGWzApf95FSdd/SAuvPNFzJBxjHokBRllrb6gFjnY+RdIopPqmMz8DoSEZovXVOLR1z7Hef94DEdd9yDe/HwmssYMQkFeFoIyPnJTsa5setMv2pe/bBO2TZdC+N7r9QHV9XidO60LjN5l6KDjjmBo30LsOn6o6ozNSz2kkUYa60N6c5Q00khDwSi2+pogPvzbWSgpzNEB3+PKEKXKKZ+casOIPCrbHHw5CBujlsqBvg2VNJ0SIIo/p+FGxbikY4ALQXPh5WVlVVhRXo2yukZ888UsLF1VgRnL16rC6hUj1eeTZ4hJyfuYN4BdrFAQcls6JOl847o+DbUNiK0oww5jh2DClDEY2a8QR+yytRgXTt3kJTvg7XDhZL7Rp69kbV09GhojWFJWjS/nLMWMhSvxgdRx5dpquIWWgSy/mtiddVx0BNKXU5G55mRjQyOi0mYs6y5Sh63HD8OQvgUYN6Qv+uVnI0uU0oLsLGkjBzjdpyOEYzGERHnkJjnfz1+B5VW1mLlgJd756Ht8t7KcXjlkF+SqMW6vZ+bgRycVP/rEyEPlFbWitOXh1StPU2WWjmT7DiwnNxV4f+Yi3Pj8xyirqYffQ6W+g2fIjR1eNyqkzEeOKMXlF58At9A7JrzHotGRS2XRLeW/8N/P4b2v56BoYF85v/4NSDYF7B3sB/V1DThw8ihcdNRuKMnP1aiqVNAgIF3OuPlpfDNrKYpKCxGTvrM+A4FOsnzh01vOPQpbD+2L6rrQeq/pDrCexTkBPP7xD/jz3a+gsF+BOjlal4TTdoO1QcRrG5HnycAuU7bC6FGDMEj6x57jhyPg9ygf50mfI004dbkjNIQjGk1ULcbVIulni9dWYerMxfjk+7n4buEqJOT6zPwseIV/2GeM4dB5cK2phBheVWvLgJownNlenLbz1nD1L8AOw/sLDxehJDcTRXJwDVWfx6XysT0oP0TjaIhEUSlyp7K+Qcq5Eu/PXYWClStw+5OfIWNMP/iyA8YZbMnU7uTR9UKeHxW5ULdKaBBOYNLQPpiy0wQMlv7L3aUHlxToZgKManJJ/9K+2gHIA5FYQp06a6rqpH8H8dGsxVi0YCle+3IeypethnvEQATcMs6w84rM2Jj6s2/45PILjtgVR+w8QZ1rrdfvC/jduP/Vz3DTHS+iSGQ/15xt71nkHPLZiNJ8vPLnX2mUOjf9oX+QIxU32+LGJlc+9h5emzYHHuGHjV9wP6m7gEdExh669QicsMdkVNVbOx5LQQqE1o988C1e/34hvNJFkhlueDaMtVuAbRIKNmLK0H644lcHoX9BnvQtOrPNTfkyrX9RHh5/byou+78HULLdVojIOLGhTj0bpBcPRlxxJGuQtoosWY2dRgzAIJGTYwf3weE7jkOWyIH8TB9y/D6Nsm/vaepQlXtV1QVRJ31rhegZ38xfiR9FBrz/xUzMX7YWGblZyM7PhNNyGvDJXeEc47PJa5OEdpcfuxeG9inoMGqzu6A8KPzmE4bY/y8PYLnoWXm5AYSDIRy7ywSce+TuOv5T/tjgy9lcoe/a6jrs+bvb4c3LRJbfq+N0T4JiuU7K6RGd7K+/3A/7TR6humNqOfjewCeyZeq8ZbjywTewrDqIXCnv+sqq7SPjxCTRh/70870xTHSj1Pbh5QGR240i46acfyvcUn+up0hJsenc0TkoL0pBRNojxJcyIhcTotftMHwASof1xfH7bofCrIA6TrmhEGUNx5qOxrOg1Jm6aY3IjcUyNi4Tfpg6Zxl+mLUIX8xejDpJ9xTlwu+TviW05as7Rv1vrMRKBduEoq9a9J7BIjeukjbdWsaNSIQ1NGDJPaK7/Ci699VPvoc50kfzZNzrCrpTzlOfqlhdjYN2m4DbzjxM6cA11tWsENBOKRbd4P3vF+DS+19DYyImdk7LDRHTSCONZqRujpJ2HKaRRhpNqBODbnRpIbK8HuTKQB7wOJEt3zPFoPeLshJg1JYY/bo2jhgO3BTDI4pWNBxThxx3u2MESV0oLPcKaaRReW29GloVVbWolt/1kjdRUy9Kmg+Bwmwxtp1IiuKma7b0oKFMZyenS3I357o1VYhLlXwZLkwcOwSFolAPEqVnZGmBGi50jNhGsRZTPiuDDVgjxkosHMenC5ejTr4vK6vFotWVuts0jcfMXO4S6DDPkudsqPOiPcTEmOMMHo2ukN/cMToktHX4pd18XvQvzkG/wjzkBjyYNKyftJtHnRxUQHXaivyj4UTlMhiNqGG6urped+irCoXwjSiYtWIcltcGGYqCQEEOvNL+RvPbtDpwR0w68Ub3LRKj1Wwo03xHhyiyDuGRCFZJeaj4G4dnB89kgwjPNNQ3oI+02+ABxWgUAykeZ+RKEjHhR5qJ2T435knb0JGdSeNgI5xJGwK2Cw1jbrLDOgwsyBaF3yN9xmIgG/LT73VjzqpydbAHpJxStI5qrOCOvVzraJgYq37hNTph1dnSw2C/zZTylwn9l6yt1V2w24JOf5XiJaWtwrV1anALQZAlv0cPKRUj1o++osyP6Juvxhsd3zRsSTtudMCmohO4UehJY3DWsjLUiJxZWlaNuSsrUSVyZm1lPRw6VSkTbpFVnNrFKI2NdRLQzOa0Sa5f2ljbgFBVPRehsxyGWbp7PJ1ohVmZGCiyrDg7C1kBt27sQr4kD7CN2K6crl1W04AVIgcXramQstbpMg3cMRSV1cgfOwwZjRHNr45XS150J4+uD9JiuqyCS2S+2FaoLa+SOjk0ErBvXpYYX7noV5CFISUFyM3yYmhBnhiAfmlWpzVGmL7HHbLrG0yfXksaVNRg4aoKVIh8WSg0iImR6REeypKxJyn5zBQ7U/eNGQ/IJ+S3fnmZyJOxK6oRJTwsyFeWcbXwzIo1NciW9uQalR3Rmg5URiiOKinU78obch8GKTFSh7J4WUUt6oUn3c6ODfv1gU4dXfpCPgMul3lBxeLzWUKPoPQBp8vQJym82X5Mz/rB/huJRmWMcGFQcZ6Ox3zhYYOGeL6MG2tkzJ67vAy5eQEk43y2lWEjoK0h7cMXUBohJ8+uXV0h7Sby352BrYeVIl9kweCiXIzsV4S8LB9KVB8R2SIPNo9OolZ4hf0qGInjuwXLUB4MYdnaSixZU4mgnCOtMmXs5vqKrGdXR9Pxnmwbn7T3gMIceZ5Dea+nQXpqDLOMq7NXko4JIalTN52iTC0W/m4UGtkymGAx2QcaIxHMEFnKaNrNMX4Q5oVCHP1ljMyXcii/t4LO1hBZvGR1tfI/141cH5raR2jRX3QYl/ABdScbpBvTqBNNX1ImMohrAhrnck+C7aKSki+1hZdiIl+C5XWIxyLo178Y2Vl+9C/Mx5gBRSjgdxkbS3JFJxW9jnRRF7yMdQ2ii/KFGne1rxMaLRe9du7Kcn3psbqyFknqFzk+eBk5LbRJxJLCs1KAjZCx6wNlJMtGvYeRha0jo9lX2OYrZEyNCJ/qmuJdACNbhJ+k3RnfPKF/H5VnqnbxpLA46e0XPYvC+8cVa1WWr+9FZRpp/C8j7ThMI4002gQNCHW6MJpCdAlbyVbTWwZ6W8dw6EgrX0SQZHi4+QaNHBmmZWSOJ82aeDQKGBWnU1rlgxN5XaIcMFKB0xcZ9Wd24+XwruO5oqcMZSqVRviJ8iTGGZU1Ot+ikk6Ln4qN380VkDLglUqrWkNjh4aLHGGpI2ducXH/uhANIF3dSqOPqARx/UdGLfE5RFfWiyXnbZVycl8a13SERSJRxKX9omLlJzldWYxhr88Jt2Tm+kXcjY91sMvCduHUMM6waxT1iU5faRZ1btFh4/F69c2w0krak9d1heFFQ4FRR4ShTktQ0WSkmE5ptsq6PrCMVEC5QyFpw4M2AB0COgVHTCu/35q6yIduejU6hKmXaScaciGNAjCprZEhDcEIKBPN2ckqSz6pKRqFjqwj23KzQcrCjU/8Pk+7ZLX7G/uEg0at8FiMCn5Iyi8nKFIYwcq2ZwSVX/hPup/KHP3LFxNyB90pWj5r+AJCZAt9TASjDChXNMKQz7JovSn9jndgqWlw8D7s+9zVk0aROqcknbY2HfGZriS8Dm5EI/KEyyJIOl8YcKodox3C0n9C8kljSSWFXMslERjR7ZJ+lohF1+lbXSkzNgasP+VKhhBApb/0J8oXrlNJx5aaZlInRjvRSZ8ldfUIQWjKOhLSz5xSfzkfl3pwqm+D8GlEzpF2dI4yQtZuM74wYKRR66jZjaGBthvpLX2OEY783Rq8K1+GcD1Ls8v3+p9DA5SR5XTuts7PcrMP8NjUdjPl52ZdIsvl0NsxUT4lWZ1CXArBGMKbLpH5LJ0hwHZl3VqD/dLnQqZH+DRpdkPeVLAeplLyV+7vlPpwXIhJGTh1nQ4U1ssr/Zrjr1eeqWvpmgtlnMrQnbdFeiAmOflyknRnyczY5THLRUh+s04oSbWplGoLpJ2UQ8YdbqCzyY2xkbAfy811dO1pkknqzpkENPja7gUyzssgyUhDvb5b6LN+UMayjRpF/9RoQyu9NRjFy5dsXF+60yUlb5NP9N5ttI88jM6zLL9PddPN0oBSBtJAv+jzhY9dokcLLRpF3nCc5HiWIf2eNQ9IO/mkM3B9YJaZIyNDBmNyeVwGlmr2Y8mnL6zlLJ3z1Em5RICtk8oV2le0tt3U7hwjKFMYQd0WTPQklwVpKkmXgPVjlbh0TyhkghpI2RaQBDo2fV4THd49siGNNH4aSDsO00gjjTYREyWTBhANPQcNYxlLjQHOQZXKhqRx8WQZmCEKPaO69C2pKPXGSJbrOADLfzpD9FMUG1XodXDWx6ijg2l6Z/tTz/QsVPhRyZAPlkOjBVhvUanUvJefrBcVEVZZL6DFL/91rTJWmZEfkp9KEE1p8wZY7sg8vH83VYxFaaIcC0c68lMORqzwHJuODhptOfnBfw5RMFWNopLMD95LvrOdNBLRJcYEnbqM/qDyqm0sedV50EWVkfJRcW0P+hR55gY9TRrL1JH1M1eqkizldklKPMMlVe7COnQSQmJ9Ih0l7YHnSWLzrfPQO1r3bf/uPQO+XFhf8VuUV+QD7Vs6rh00Ftl/6IxSeUN6sS8yn2mzpMgbkTJiYMpJ+U560eCgnNElAOQ38xo5s2F07Ay0b1mfWiZ5BsUFoxrpl1AjTdLjlHeSoFKEMpD9TGBevLDcci1lh33Y95RsrGdvA6tNcvJT/lpppAGNUqc6klhXlTM8zd8OMW/jUakTX7eQOEIGthH/y81IErOrstVWzGI9qOsoYORfR+CzNohXpIztyS37Ll3Feyx6R3da3/kNhdKfn/p3XbBabB1pZf3sSmjT88lsfzlioofQmcuXeEYemD6nZZMGoN8ymRTeIQ965BoZq1g+7iDPkukhmWze6uLirgurbFq+zQzKEyUGIQWyqNZh2Vo76zcL2NbW147Qon6dRSfaZ6Pu2+VgCaUnyIfdH8xv8zKf9DFyVjM0jZXk8/9v7+55GynCAI4/a5/J5SJOKB01JaJAtEiIgi9AyQfgEyBKhJAor6JGooAeiQoh0dAgKmiuQQLxIh2gk0AiITnH3mWe55mxx17vxnGytjf3/yWTnex6d172bWa8ie3+o/ce/dL7Yliua+ugof3LixD0KyaRJt1aY592Xe+Xtbts2mH6wG3AwCGAlWb/B8pa5jq4F+LWwgiRFL8C7VCGfrJ3GoN0D583ivaLll+zaN15HRXU3vyyWZ3EqU18kMDXDou0Q2yx7bJGUqxkrV7PZpYT3Q2pJZflf0ZXH+iwqdaF7zfdXBe7yvNW1zT/UiGj3kj0Y815YXWO/olsB8VY242Xd8lNbWcTm6Sdjqt0zdGOjV0vmrYUZttrYmdJzznvCKWusdNOQFcdAR8wW0gtpDUvvZ03eu3URyfTeWYzPeqvC6XUVbLjsZvcdiOvA6t/fSNFpWuln2wh6NPk+ktGX6Iv122EiT3h4yOmndA0mjbdtqzNqvU23dY+2ofy6TXB0pv/cBpNmdGpiueXPcGq96vUhglSu2Nbdn0ctKXftGzXec5dlpfr5rUPdVDnubNzwjIZc6oTXaRie33Zwr0qvnG1bW11u416b0pjG2kDt0U+cLjduyqAvWadbmtgeNxurdfohGtDJe/Ea9Q3u/k2u2RPw6S3apuaFaktlqaBdaD1WwcDwjYa1uycpa1lsPq12vcFSZbnhXhixdC97+WwWR0VpmmzGycXy6751V1ouzH8sHLo/PiyXWlK/6bytcvybZK27hafhn0TO/iteykcr3nfyI9Tjfg+zkNX0vZ1QMLjNteWKTultLPWep7FfFosX7sf8jrwzC+VQstrHda4f1aJ27D1slVvWtumN0121XodFmHr9qF8dmzYNWEp5XQu5edUvCb4Pc+ns6cNt2z7KS5qS79p2a7znLssL9fNax/qoM5zN7teJvk5kA8QZlJ71M6JHZWyLdVt5Kgpjd3UBtB/LS07AE8bbWRYA0O/NZ4H/Vqet2boDc2vlVOrwPO+bgg/whpeb7syS9/y5PGFsE6ZfFMW7xsvg0Y8aGmsHD0sy9NidszZvmsPtk9nv+fxeehaSmM5XZtv0zCJx52FPJ7n2bbST5r/NJ19zcql06ycechfFwKwih8rDcdQW/CV9dt+B26L2rG+EBqWx/XCDz83AOCaGDgEAAAAAAAAUMPAIQAAAAAAAIAaBg4BAAAAAAAA1DBwCAAAAAAAAKCGgUMAAAAAAAAAc/HD2xk4BAAAAAAAALCoYuAQAAAAAAAAQK7wwMAhAAAAAAAAgBoGDgEAAAAAAADUMHAIAAAAAAAAoGZ4+NLr78c4ALiq8g9QKsJ3VYR4/DglAAAAANhTRei/hK5MjOs/aAOwibIsZTot5ZUXnpfi+K0PGBEAsKCcTKQcDmSgV4cyBH02mSsFAAAAgH2kA4ah3zIYhk7LNHRh9AMdBgMGD4ENXVxM5Ml4Im+/8TIDhwDqynIiRTWU6k74pdKbLZcJAAAAAHtMH3YoCynK0HsZlPaXUwwcApth4BBAo7Ks5J+zJyJ/Pva36vStu/QZ7FwtAAAAAOwbHR+chM7KaKgdGpGjQ7l3fF/uHuiTEAweAlfFwCGA1cLV4N//zuW1owP56rP35IefHsnomQH3WgAAAAB7r5CBjIaFfPvwV3n34y/kr9OxPHd0V8rQz+HhQ2B9DBwCWKmqCjk5PZFXzy/k6y8fxLkAAAAA0B/fPfxF3vzwE3l0ci7H9+/JdMrAIXAV+cCh/vEhAMzpWwl3hh4HAAAAgJ45G49lmh6R4lEp4Fp44hDAgtPTM3lxWMmnH70jP/72hwx5aw4AAABAD2jXZVSM5Puff5cHn38jf5+N5dnDA4n/tR3Amhb+VLkK4nwAAAAAAAAACET+BzqmrLSiCTm0AAAAAElFTkSuQmCC\" style=\"width:100%;\">\r\n\r\n</div>\r\n\r\n<div style=\"background-color: #125A82; width:100%; margin-top: 0em;\" >\r\n  <br/>\r\n  <img src=\"data:image/jpeg;base64,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AAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQHLAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABABLAAAAAEAAgEsAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAB4OEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAACAAA4QklNBDAAAAAAAAEBADhCSU0ELQAAAAAABgABAAAAAjhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANHAAAABgAAAAAAAAAAAAALuAAAEZQAAAAJAHAAcgBpAG4AYwBpAHAAYQBsAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAABGUAAALuAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAA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vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPg0KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+DQoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmlsbHVzdHJhdG9yPSJodHRwOi8vbnMuYWRvYmUuY29tL2lsbHVzdHJhdG9yLzEuMC8iIHhtbG5zOnhtcFRQZz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3QvcGcvIiB4bWxuczpzdERpbT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL0RpbWVuc2lvbnMjIiB4bWxuczpzdEZudD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL0ZvbnQjIiB4bWxuczp4bXBHPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvZy8iIHhtbG5zOnBkZj0iaHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDgtMDZUMDc6Mjc6NTktMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA4LTA2VDA3OjI3OjU5LTA0OjAwIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wNy0wNFQxMTo1NzoxNC0wMzowMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBJbGx1c3RyYXRvciBDQyAyMDE0IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMDY1RDFDNTZCOTlFODExQkE5NUMyRTRFOTEwMjFCNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRjY1RDFDNTZCOTlFODExQkE5NUMyRTRFOTEwMjFCNyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpSZW5kaXRpb25DbGFzcz0icHJvb2Y6cGRmIiBpbGx1c3RyYXRvcjpUeXBlPSJEb2N1bWVudCIgaWxsdXN0cmF0b3I6U3RhcnR1cFByb2ZpbGU9IlByaW50IiB4bXBUUGc6SGFzVmlzaWJsZU92ZXJwcmludD0iRmFsc2UiIHhtcFRQZzpIYXNWaXNpYmxlVHJhbnNwYXJlbmN5PSJUcnVlIiB4bXBUUGc6TlBhZ2VzPSIxIiBwZGY6UHJvZHVjZXI9IkFkb2JlIFBERiBsaWJyYXJ5IDExLjAwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPg0KCQkJPGRjOnRpdGxlPg0KCQkJCTxyZGY6QWx0Pg0KCQkJCQk8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPnByaW5jaXBhbDwvcmRmOmxpPg0KCQkJCTwvcmRmOkFsdD4NCgkJCTwvZGM6dGl0bGU+DQoJCQk8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRjY1RDFDNTZCOTlFODExQkE5NUMyRTRFOTEwMjFCNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRjY1RDFDNTZCOTlFODExQkE5NUMyRTRFOTEwMjFCNyIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiBzdFJlZjpyZW5kaXRpb25DbGFzcz0icHJvb2Y6cGRmIi8+DQoJCQk8eG1wTU06SGlzdG9yeT4NCgkJCQk8cmRmOlNlcT4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzY2U5YzM3LWQ4ZmUtNzk0My1hOTIzLTY4YmVmZmVlYTA5MCIgc3RFdnQ6d2hlbj0iMjAxOC0wNy0wM1QxMjoxNDoxMC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgSWxsdXN0cmF0b3IgQ0MgMjAxNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE4ZWRkMTUwLTBiZWQtMTA0MS04MDQ5LWQ1NDA5ZGU3NzE1NCIgc3RFdnQ6d2hlbj0iMjAxOC0wNy0wNFQxMTo1NzowOC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgSWxsdXN0cmF0b3IgQ0MgMjAxNCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi9wZGYgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6RUY2NUQxQzU2Qjk5RTgxMUJBOTVDMkU0RTkxMDIxQjciIHN0RXZ0OndoZW49IjIwMTgtMDgtMDZUMDc6Mjc6NTktMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vcGRmIHRvIGltYWdlL2pwZWciLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvanBlZyIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6RjA2NUQxQzU2Qjk5RTgxMUJBOTVDMkU0RTkxMDIxQjciIHN0RXZ0OndoZW49IjIwMTgtMDgtMDZUMDc6Mjc6NTktMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+DQoJCQkJPC9yZGY6U2VxPg0KCQkJPC94bXBNTTpIaXN0b3J5Pg0KCQkJPHhtcFRQZzpNYXhQYWdlU2l6ZSBzdERpbTp3PSIxMDgwLjAwMDAwMCIgc3REaW06aD0iNzIwLjAwMDAwMCIgc3REaW06dW5pdD0iUGl4ZWxzIi8+DQoJCQk8eG1wVFBnOkZvbnRzPg0KCQkJCTxyZGY6QmFnPg0KCQkJCQk8cmRmOmxpIHN0Rm50OmZvbnROYW1lPSJNeXJpYWRQcm8tUmVndWxhciIgc3RGbnQ6Zm9udEZhbWlseT0iTXlyaWFkIFBybyIgc3RGbnQ6Zm9udEZhY2U9IlJlZ3VsYXIiIHN0Rm50OmZvbnRUeXBlPSJPcGVuIFR5cGUiIHN0Rm50OnZlcnNpb25TdHJpbmc9IlZlcnNpb24gMi4xMDY7UFMgMi4wMDA7aG90Y29udiAxLjAuNzA7bWFrZW90Zi5saWIyLjUuNTgzMjkiIHN0Rm50OmNvbXBvc2l0ZT0iRmFsc2UiIHN0Rm50OmZvbnRGaWxlTmFtZT0iTXlyaWFkUHJvLVJlZ3VsYXIub3RmIi8+DQoJCQkJPC9yZGY6QmFnPg0KCQkJPC94bXBUUGc6Rm9udHM+DQoJCQk8eG1wVFBnOlBsYXRlTmFtZXM+DQoJCQkJPHJkZjpTZXE+DQoJCQkJCTxyZGY6bGk+Q3lhbjwvcmRmOmxpPg0KCQkJCQk8cmRmOmxpPk1hZ2VudGE8L3JkZjpsaT4NCgkJCQkJPHJkZjpsaT5ZZWxsb3c8L3JkZjpsaT4NCgkJCQkJPHJkZjpsaT5CbGFjazwvcmRmOmxpPg0KCQkJCTwvcmRmOlNlcT4NCgkJCTwveG1wVFBnOlBsYXRlTmFtZXM+DQoJCQk8eG1wVFBnOlN3YXRjaEdyb3Vwcz4NCgkJCQk8cmRmOlNlcT4NCgkJCQkJPHJkZjpsaT4NCgkJCQkJCTxyZGY6RGVzY3JpcHRpb24geG1wRzpncm91cE5hbWU9IkdydXBvIGRlIG11ZXN0cmFzIHBvciBkZWZlY3RvIiB4bXBHOmdyb3VwVHlwZT0iMCI+DQoJCQkJCQkJPHhtcEc6Q29sb3JhbnRzPg0KCQkJCQkJCQk8cmRmOlNlcT4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJCbGFuY28iIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyNTUiIHhtcEc6Z3JlZW49IjI1NSIgeG1wRzpibHVlPSIyNTUiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJOZWdybyIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjI5IiB4bXBHOmdyZWVuPSIyOSIgeG1wRzpibHVlPSIyNyIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IlJvam8gQ01ZSyIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjIyNyIgeG1wRzpncmVlbj0iNiIgeG1wRzpibHVlPSIxOSIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkFtYXJpbGxvIENNWUsiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyNTUiIHhtcEc6Z3JlZW49IjIzNyIgeG1wRzpibHVlPSIwIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iVmVyZGUgQ01ZSyIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjAiIHhtcEc6Z3JlZW49IjE1MCIgeG1wRzpibHVlPSI2NCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkNpYW4gQ01ZSyIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjAiIHhtcEc6Z3JlZW49IjE1OSIgeG1wRzpibHVlPSIyMjciLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJBenVsIENNWUsiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSI0OSIgeG1wRzpncmVlbj0iMzkiIHhtcEc6Ymx1ZT0iMTMxIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iTWFnZW50YSBDTVlLIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjMwIiB4bXBHOmdyZWVuPSIwIiB4bXBHOmJsdWU9IjEyNiIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MTUgTT0xMDAgWT05MCBLPTEwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMTkwIiB4bXBHOmdyZWVuPSIyMiIgeG1wRzpibHVlPSIzNCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTkwIFk9ODUgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjMwIiB4bXBHOmdyZWVuPSI1MSIgeG1wRzpibHVlPSI0MiIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTgwIFk9OTUgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjMzIiB4bXBHOmdyZWVuPSI3OCIgeG1wRzpibHVlPSIyNyIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTUwIFk9MTAwIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjI0MyIgeG1wRzpncmVlbj0iMTQ2IiB4bXBHOmJsdWU9IjAiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT0zNSBZPTg1IEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjI0OSIgeG1wRzpncmVlbj0iMTc4IiB4bXBHOmJsdWU9IjUxIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz01IE09MCBZPTkwIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjI1MiIgeG1wRzpncmVlbj0iMjM0IiB4bXBHOmJsdWU9IjE2Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0yMCBNPTAgWT0xMDAgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjIyIiB4bXBHOmdyZWVuPSIyMjAiIHhtcEc6Ymx1ZT0iMCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9NTAgTT0wIFk9MTAwIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjE0OSIgeG1wRzpncmVlbj0iMTkzIiB4bXBHOmJsdWU9IjMxIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz03NSBNPTAgWT0xMDAgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iNTgiIHhtcEc6Z3JlZW49IjE3MCIgeG1wRzpibHVlPSI1MyIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9ODUgTT0xMCBZPTEwMCBLPTEwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMCIgeG1wRzpncmVlbj0iMTQxIiB4bXBHOmJsdWU9IjU0Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz05MCBNPTMwIFk9OTUgSz0zMCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjAiIHhtcEc6Z3JlZW49IjEwMiIgeG1wRzpibHVlPSI1MSIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9NzUgTT0wIFk9NzUgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iNDciIHhtcEc6Z3JlZW49IjE3MiIgeG1wRzpibHVlPSIxMDIiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTgwIE09MTAgWT00NSBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIwIiB4bXBHOmdyZWVuPSIxNjEiIHhtcEc6Ymx1ZT0iMTU0Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz03MCBNPTE1IFk9MCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSI1NCIgeG1wRzpncmVlbj0iMTY5IiB4bXBHOmJsdWU9IjIyNSIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9ODUgTT01MCBZPTAgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjkiIHhtcEc6Z3JlZW49IjExMyIgeG1wRzpibHVlPSIxODQiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTEwMCBNPTk1IFk9NSBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSI0NSIgeG1wRzpncmVlbj0iNDYiIHhtcEc6Ymx1ZT0iMTMxIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0xMDAgTT0xMDAgWT0yNSBLPTI1IiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iNDEiIHhtcEc6Z3JlZW49IjM1IiB4bXBHOmJsdWU9IjkyIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz03NSBNPTEwMCBZPTAgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMTAyIiB4bXBHOmdyZWVuPSIzNiIgeG1wRzpibHVlPSIxMzEiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTUwIE09MTAwIFk9MCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxNDkiIHhtcEc6Z3JlZW49IjI3IiB4bXBHOmJsdWU9IjEyOSIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MzUgTT0xMDAgWT0zNSBLPTEwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMTYzIiB4bXBHOmdyZWVuPSIyNSIgeG1wRzpibHVlPSI5MSIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MTAgTT0xMDAgWT01MCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyMTQiIHhtcEc6Z3JlZW49IjExIiB4bXBHOmJsdWU9IjgyIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09OTUgWT0yMCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyMzEiIHhtcEc6Z3JlZW49IjI5IiB4bXBHOmJsdWU9IjExNSIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MjUgTT0yNSBZPTQwIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjIwMyIgeG1wRzpncmVlbj0iMTg3IiB4bXBHOmJsdWU9IjE2MCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9NDAgTT00NSBZPTUwIEs9NSIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjE2NCIgeG1wRzpncmVlbj0iMTM4IiB4bXBHOmJsdWU9IjEyMyIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9NTAgTT01MCBZPTYwIEs9MjUiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxMjMiIHhtcEc6Z3JlZW49IjEwNiIgeG1wRzpibHVlPSI4OCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9NTUgTT02MCBZPTY1IEs9NDAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSI5OSIgeG1wRzpncmVlbj0iNzgiIHhtcEc6Ymx1ZT0iNjYiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTI1IE09NDAgWT02NSBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyMDIiIHhtcEc6Z3JlZW49IjE1OCIgeG1wRzpibHVlPSIxMDMiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTMwIE09NTAgWT03NSBLPTEwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMTc3IiB4bXBHOmdyZWVuPSIxMjciIHhtcEc6Ymx1ZT0iNzQiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTM1IE09NjAgWT04MCBLPTI1IiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMTQ3IiB4bXBHOmdyZWVuPSI5NiIgeG1wRzpibHVlPSI1NSIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9NDAgTT02NSBZPTkwIEs9MzUiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxMjUiIHhtcEc6Z3JlZW49Ijc4IiB4bXBHOmJsdWU9IjM2Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz00MCBNPTcwIFk9MTAwIEs9NTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxMDQiIHhtcEc6Z3JlZW49IjYwIiB4bXBHOmJsdWU9IjE3Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz01MCBNPTcwIFk9ODAgSz03MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjY3IiB4bXBHOmdyZWVuPSI0MSIgeG1wRzpibHVlPSIyNCIvPg0KCQkJCQkJCQk8L3JkZjpTZXE+DQoJCQkJCQkJPC94bXBHOkNvbG9yYW50cz4NCgkJCQkJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCQkJCQk8L3JkZjpsaT4NCgkJCQkJPHJkZjpsaT4NCgkJCQkJCTxyZGY6RGVzY3JpcHRpb24geG1wRzpncm91cE5hbWU9IkdyaXNlcyIgeG1wRzpncm91cFR5cGU9IjEiPg0KCQkJCQkJCTx4bXBHOkNvbG9yYW50cz4NCgkJCQkJCQkJPHJkZjpTZXE+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09MCBZPTAgSz0xMDAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyOSIgeG1wRzpncmVlbj0iMjkiIHhtcEc6Ymx1ZT0iMjciLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT0wIFk9MCBLPTkwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iNjAiIHhtcEc6Z3JlZW49IjYwIiB4bXBHOmJsdWU9IjU5Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09MCBZPTAgSz04MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9Ijg3IiB4bXBHOmdyZWVuPSI4NyIgeG1wRzpibHVlPSI4NiIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTAgWT0wIEs9NzAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxMTIiIHhtcEc6Z3JlZW49IjExMSIgeG1wRzpibHVlPSIxMTEiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT0wIFk9MCBLPTYwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMTM1IiB4bXBHOmdyZWVuPSIxMzUiIHhtcEc6Ymx1ZT0iMTM1Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09MCBZPTAgSz01MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjE1NyIgeG1wRzpncmVlbj0iMTU3IiB4bXBHOmJsdWU9IjE1NiIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTAgWT0wIEs9NDAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxNzgiIHhtcEc6Z3JlZW49IjE3OCIgeG1wRzpibHVlPSIxNzgiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT0wIFk9MCBLPTMwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMTk4IiB4bXBHOmdyZWVuPSIxOTgiIHhtcEc6Ymx1ZT0iMTk4Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09MCBZPTAgSz0yMCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjIxOCIgeG1wRzpncmVlbj0iMjE4IiB4bXBHOmJsdWU9IjIxOCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTAgWT0wIEs9MTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyMzciIHhtcEc6Z3JlZW49IjIzNyIgeG1wRzpibHVlPSIyMzciLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT0wIFk9MCBLPTUiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyNDYiIHhtcEc6Z3JlZW49IjI0NiIgeG1wRzpibHVlPSIyNDYiLz4NCgkJCQkJCQkJPC9yZGY6U2VxPg0KCQkJCQkJCTwveG1wRzpDb2xvcmFudHM+DQoJCQkJCQk8L3JkZjpEZXNjcmlwdGlvbj4NCgkJCQkJPC9yZGY6bGk+DQoJCQkJCTxyZGY6bGk+DQoJCQkJCQk8cmRmOkRlc2NyaXB0aW9uIHhtcEc6Z3JvdXBOYW1lPSJCcmlsbGFudGVzIiB4bXBHOmdyb3VwVHlwZT0iMSI+DQoJCQkJCQkJPHhtcEc6Q29sb3JhbnRzPg0KCQkJCQkJCQk8cmRmOlNlcT4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT0xMDAgWT0xMDAgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjI3IiB4bXBHOmdyZWVuPSI2IiB4bXBHOmJsdWU9IjE5Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09NzUgWT0xMDAgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjM0IiB4bXBHOmdyZWVuPSI5MSIgeG1wRzpibHVlPSIxMiIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTEwIFk9OTUgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjU1IiB4bXBHOmdyZWVuPSIyMjIiIHhtcEc6Ymx1ZT0iMCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9ODUgTT0xMCBZPTEwMCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIwIiB4bXBHOmdyZWVuPSIxNTIiIHhtcEc6Ymx1ZT0iNTgiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTEwMCBNPTkwIFk9MCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIzOSIgeG1wRzpncmVlbj0iNTIiIHhtcEc6Ymx1ZT0iMTM5Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz02MCBNPTkwIFk9MCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxMzAiIHhtcEc6Z3JlZW49IjU0IiB4bXBHOmJsdWU9IjE0MCIvPg0KCQkJCQkJCQk8L3JkZjpTZXE+DQoJCQkJCQkJPC94bXBHOkNvbG9yYW50cz4NCgkJCQkJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCQkJCQk8L3JkZjpsaT4NCgkJCQk8L3JkZjpTZXE+DQoJCQk8L3htcFRQZzpTd2F0Y2hHcm91cHM+DQoJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCTwvcmRmOlJERj4NCjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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\r\n  \" (click)=\"registrarse()\" style=\"width:40%; padding-left:50px; padding-right:50px\" >\r\n  <img src=\"data:image/jpeg;base64,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cm5DYm9vbAAAAAAAQ250Q2Jvb2wAAAAAAExibHNib29sAAAAAABOZ3R2Ym9vbAAAAAAARW1sRGJvb2wAAAAAAEludHJib29sAAAAAABCY2tnT2JqYwAAAAEAAAAAAABSR0JDAAAAAwAAAABSZCAgZG91YkBv4AAAAAAAAAAAAEdybiBkb3ViQG/gAAAAAAAAAAAAQmwgIGRvdWJAb+AAAAAAAAAAAABCcmRUVW50RiNSbHQAAAAAAAAAAAAAAABCbGQgVW50RiNSbHQAAAAAAAAAAAAAAABSc2x0VW50RiNQeGxAcsAAAAAAAAAAAAp2ZWN0b3JEYXRhYm9vbAEAAAAAUGdQc2VudW0AAAAAUGdQcwAAAABQZ1BDAAAAAExlZnRVbnRGI1JsdAAAAAAAAAAAAAAAAFRvcCBVbnRGI1JsdAAAAAAAAAAAAAAAAFNjbCBVbnRGI1ByY0BZAAAAAAAAAAAAEGNyb3BXaGVuUHJpbnRpbmdib29sAAAAAA5jcm9wUmVjdEJvdHRvbWxvbmcAAAAAAAAADGNyb3BSZWN0TGVmdGxvbmcAAAAAAAAADWNyb3BSZWN0UmlnaHRsb25nAAAAAAAAAAtjcm9wUmVjdFRvcGxvbmcAAAAAADhCSU0D7QAAAAAAEAEsAAAAAQACASwAAAABAAI4QklNBCYAAAAAAA4AAAAAAAAAAAAAP4AAADhCSU0EDQAAAAAABAAAAHg4QklNBBkAAAAAAAQAAAAeOEJJTQPzAAAAAAAJAAAAAAAAAAABADhCSU0nEAAAAAAACgABAAAAAAAAAAI4QklNA/UAAAAAAEgAL2ZmAAEAbGZmAAYAAAAAAAEAL2ZmAAEAoZmaAAYAAAAAAAEAMgAAAAEAWgAAAAYAAAAAAAEANQAAAAEALQAAAAYAAAAAAAE4QklNA/gAAAAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQAAAAAAAACAAA4QklNBAIAAAAAAAIAADhCSU0EMAAAAAAAAQEAOEJJTQQtAAAAAAAGAAEAAAACOEJJTQQIAAAAAAAQAAAAAQAAAkAAAAJA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ZQAgAFAAaABvAHQAbwBzAGgAbwBwAAAAEwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAgAEMAUwA2AAAAAQA4QklNBAYAAAAAAAcACAEBAAEBAP/hNUJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+DQoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4NCgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6aWxsdXN0cmF0b3I9Imh0dHA6Ly9ucy5hZG9iZS5jb20vaWxsdXN0cmF0b3IvMS4wLyIgeG1sbnM6eG1wVFBnPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvdC9wZy8iIHhtbG5zOnN0RGltPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvRGltZW5zaW9ucyMiIHhtbG5zOnN0Rm50PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvRm9udCMiIHhtbG5zOnhtcEc9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9nLyIgeG1sbnM6cGRmPSJodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wOC0wNlQwNzoyNzo1OS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTgtMDgtMDZUMDc6Mjc6NTktMDQ6MDAiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA3LTA0VDExOjU3OjE0LTAzOjAwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYwNjVEMUM1NkI5OUU4MTFCQTk1QzJFNEU5MTAyMUI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGNjVEMUM1NkI5OUU4MTFCQTk1QzJFNEU5MTAyMUI3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NUQyMDg5MjQ5M0JGREIxMTkxNEE4NTkwRDMxNTA4QzgiIHhtcE1NOlJlbmRpdGlvbkNsYXNzPSJwcm9vZjpwZGYiIGlsbHVzdHJhdG9yOlR5cGU9IkRvY3VtZW50IiBpbGx1c3RyYXRvcjpTdGFydHVwUHJvZmlsZT0iUHJpbnQiIHhtcFRQZzpIYXNWaXNpYmxlT3ZlcnByaW50PSJGYWxzZSIgeG1wVFBnOkhhc1Zpc2libGVUcmFuc3BhcmVuY3k9IlRydWUiIHhtcFRQZzpOUGFnZXM9IjEiIHBkZjpQcm9kdWNlcj0iQWRvYmUgUERGIGxpYnJhcnkgMTEuMDAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSI+DQoJCQk8ZGM6dGl0bGU+DQoJCQkJPHJkZjpBbHQ+DQoJCQkJCTxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+cHJpbmNpcGFsPC9yZGY6bGk+DQoJCQkJPC9yZGY6QWx0Pg0KCQkJPC9kYzp0aXRsZT4NCgkJCTx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGNjVEMUM1NkI5OUU4MTFCQTk1QzJFNEU5MTAyMUI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGNjVEMUM1NkI5OUU4MTFCQTk1QzJFNEU5MTAyMUI3IiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6NUQyMDg5MjQ5M0JGREIxMTkxNEE4NTkwRDMxNTA4QzgiIHN0UmVmOnJlbmRpdGlvbkNsYXNzPSJwcm9vZjpwZGYiLz4NCgkJCTx4bXBNTTpIaXN0b3J5Pg0KCQkJCTxyZGY6U2VxPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTNjZTljMzctZDhmZS03OTQzLWE5MjMtNjhiZWZmZWVhMDkwIiBzdEV2dDp3aGVuPSIyMDE4LTA3LTAzVDEyOjE0OjEwLTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBJbGx1c3RyYXRvciBDQyAyMDE0IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MThlZGQxNTAtMGJlZC0xMDQxLTgwNDktZDU0MDlkZTc3MTU0IiBzdEV2dDp3aGVuPSIyMDE4LTA3LTA0VDExOjU3OjA4LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBJbGx1c3RyYXRvciBDQyAyMDE0IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3BkZiB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRjY1RDFDNTZCOTlFODExQkE5NUMyRTRFOTEwMjFCNyIgc3RFdnQ6d2hlbj0iMjAxOC0wOC0wNlQwNzoyNzo1OS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4NCgkJCQkJPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi9wZGYgdG8gaW1hZ2UvanBlZyIvPg0KCQkJCQk8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnIi8+DQoJCQkJCTxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMDY1RDFDNTZCOTlFODExQkE5NUMyRTRFOTEwMjFCNyIgc3RFdnQ6d2hlbj0iMjAxOC0wOC0wNlQwNzoyNzo1OS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4NCgkJCQk8L3JkZjpTZXE+DQoJCQk8L3htcE1NOkhpc3Rvcnk+DQoJCQk8eG1wVFBnOk1heFBhZ2VTaXplIHN0RGltOnc9IjEwODAuMDAwMDAwIiBzdERpbTpoPSI3MjAuMDAwMDAwIiBzdERpbTp1bml0PSJQaXhlbHMiLz4NCgkJCTx4bXBUUGc6Rm9udHM+DQoJCQkJPHJkZjpCYWc+DQoJCQkJCTxyZGY6bGkgc3RGbnQ6Zm9udE5hbWU9Ik15cmlhZFByby1SZWd1bGFyIiBzdEZudDpmb250RmFtaWx5PSJNeXJpYWQgUHJvIiBzdEZudDpmb250RmFjZT0iUmVndWxhciIgc3RGbnQ6Zm9udFR5cGU9Ik9wZW4gVHlwZSIgc3RGbnQ6dmVyc2lvblN0cmluZz0iVmVyc2lvbiAyLjEwNjtQUyAyLjAwMDtob3Rjb252IDEuMC43MDttYWtlb3RmLmxpYjIuNS41ODMyOSIgc3RGbnQ6Y29tcG9zaXRlPSJGYWxzZSIgc3RGbnQ6Zm9udEZpbGVOYW1lPSJNeXJpYWRQcm8tUmVndWxhci5vdGYiLz4NCgkJCQk8L3JkZjpCYWc+DQoJCQk8L3htcFRQZzpGb250cz4NCgkJCTx4bXBUUGc6UGxhdGVOYW1lcz4NCgkJCQk8cmRmOlNlcT4NCgkJCQkJPHJkZjpsaT5DeWFuPC9yZGY6bGk+DQoJCQkJCTxyZGY6bGk+TWFnZW50YTwvcmRmOmxpPg0KCQkJCQk8cmRmOmxpPlllbGxvdzwvcmRmOmxpPg0KCQkJCQk8cmRmOmxpPkJsYWNrPC9yZGY6bGk+DQoJCQkJPC9yZGY6U2VxPg0KCQkJPC94bXBUUGc6UGxhdGVOYW1lcz4NCgkJCTx4bXBUUGc6U3dhdGNoR3JvdXBzPg0KCQkJCTxyZGY6U2VxPg0KCQkJCQk8cmRmOmxpPg0KCQkJCQkJPHJkZjpEZXNjcmlwdGlvbiB4bXBHOmdyb3VwTmFtZT0iR3J1cG8gZGUgbXVlc3RyYXMgcG9yIGRlZmVjdG8iIHhtcEc6Z3JvdXBUeXBlPSIwIj4NCgkJCQkJCQk8eG1wRzpDb2xvcmFudHM+DQoJCQkJCQkJCTxyZGY6U2VxPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkJsYW5jbyIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjI1NSIgeG1wRzpncmVlbj0iMjU1IiB4bXBHOmJsdWU9IjI1NSIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9Ik5lZ3JvIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjkiIHhtcEc6Z3JlZW49IjI5IiB4bXBHOmJsdWU9IjI3Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iUm9qbyBDTVlLIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjI3IiB4bXBHOmdyZWVuPSI2IiB4bXBHOmJsdWU9IjE5Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQW1hcmlsbG8gQ01ZSyIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjI1NSIgeG1wRzpncmVlbj0iMjM3IiB4bXBHOmJsdWU9IjAiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJWZXJkZSBDTVlLIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMCIgeG1wRzpncmVlbj0iMTUwIiB4bXBHOmJsdWU9IjY0Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQ2lhbiBDTVlLIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMCIgeG1wRzpncmVlbj0iMTU5IiB4bXBHOmJsdWU9IjIyNyIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkF6dWwgQ01ZSyIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjQ5IiB4bXBHOmdyZWVuPSIzOSIgeG1wRzpibHVlPSIxMzEiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJNYWdlbnRhIENNWUsiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyMzAiIHhtcEc6Z3JlZW49IjAiIHhtcEc6Ymx1ZT0iMTI2Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0xNSBNPTEwMCBZPTkwIEs9MTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxOTAiIHhtcEc6Z3JlZW49IjIyIiB4bXBHOmJsdWU9IjM0Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09OTAgWT04NSBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyMzAiIHhtcEc6Z3JlZW49IjUxIiB4bXBHOmJsdWU9IjQyIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09ODAgWT05NSBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyMzMiIHhtcEc6Z3JlZW49Ijc4IiB4bXBHOmJsdWU9IjI3Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09NTAgWT0xMDAgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjQzIiB4bXBHOmdyZWVuPSIxNDYiIHhtcEc6Ymx1ZT0iMCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTM1IFk9ODUgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjQ5IiB4bXBHOmdyZWVuPSIxNzgiIHhtcEc6Ymx1ZT0iNTEiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTUgTT0wIFk9OTAgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjUyIiB4bXBHOmdyZWVuPSIyMzQiIHhtcEc6Ymx1ZT0iMTYiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTIwIE09MCBZPTEwMCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyMjIiIHhtcEc6Z3JlZW49IjIyMCIgeG1wRzpibHVlPSIwIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz01MCBNPTAgWT0xMDAgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMTQ5IiB4bXBHOmdyZWVuPSIxOTMiIHhtcEc6Ymx1ZT0iMzEiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTc1IE09MCBZPTEwMCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSI1OCIgeG1wRzpncmVlbj0iMTcwIiB4bXBHOmJsdWU9IjUzIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz04NSBNPTEwIFk9MTAwIEs9MTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIwIiB4bXBHOmdyZWVuPSIxNDEiIHhtcEc6Ymx1ZT0iNTQiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTkwIE09MzAgWT05NSBLPTMwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMCIgeG1wRzpncmVlbj0iMTAyIiB4bXBHOmJsdWU9IjUxIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz03NSBNPTAgWT03NSBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSI0NyIgeG1wRzpncmVlbj0iMTcyIiB4bXBHOmJsdWU9IjEwMiIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9ODAgTT0xMCBZPTQ1IEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjAiIHhtcEc6Z3JlZW49IjE2MSIgeG1wRzpibHVlPSIxNTQiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTcwIE09MTUgWT0wIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjU0IiB4bXBHOmdyZWVuPSIxNjkiIHhtcEc6Ymx1ZT0iMjI1Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz04NSBNPTUwIFk9MCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyOSIgeG1wRzpncmVlbj0iMTEzIiB4bXBHOmJsdWU9IjE4NCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MTAwIE09OTUgWT01IEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjQ1IiB4bXBHOmdyZWVuPSI0NiIgeG1wRzpibHVlPSIxMzEiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTEwMCBNPTEwMCBZPTI1IEs9MjUiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSI0MSIgeG1wRzpncmVlbj0iMzUiIHhtcEc6Ymx1ZT0iOTIiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTc1IE09MTAwIFk9MCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxMDIiIHhtcEc6Z3JlZW49IjM2IiB4bXBHOmJsdWU9IjEzMSIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9NTAgTT0xMDAgWT0wIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjE0OSIgeG1wRzpncmVlbj0iMjciIHhtcEc6Ymx1ZT0iMTI5Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0zNSBNPTEwMCBZPTM1IEs9MTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxNjMiIHhtcEc6Z3JlZW49IjI1IiB4bXBHOmJsdWU9IjkxIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0xMCBNPTEwMCBZPTUwIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjIxNCIgeG1wRzpncmVlbj0iMTEiIHhtcEc6Ymx1ZT0iODIiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT05NSBZPTIwIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjIzMSIgeG1wRzpncmVlbj0iMjkiIHhtcEc6Ymx1ZT0iMTE1Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0yNSBNPTI1IFk9NDAgSz0wIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjAzIiB4bXBHOmdyZWVuPSIxODciIHhtcEc6Ymx1ZT0iMTYwIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz00MCBNPTQ1IFk9NTAgSz01IiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMTY0IiB4bXBHOmdyZWVuPSIxMzgiIHhtcEc6Ymx1ZT0iMTIzIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz01MCBNPTUwIFk9NjAgSz0yNSIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjEyMyIgeG1wRzpncmVlbj0iMTA2IiB4bXBHOmJsdWU9Ijg4Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz01NSBNPTYwIFk9NjUgSz00MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9Ijk5IiB4bXBHOmdyZWVuPSI3OCIgeG1wRzpibHVlPSI2NiIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MjUgTT00MCBZPTY1IEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjIwMiIgeG1wRzpncmVlbj0iMTU4IiB4bXBHOmJsdWU9IjEwMyIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MzAgTT01MCBZPTc1IEs9MTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxNzciIHhtcEc6Z3JlZW49IjEyNyIgeG1wRzpibHVlPSI3NCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MzUgTT02MCBZPTgwIEs9MjUiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxNDciIHhtcEc6Z3JlZW49Ijk2IiB4bXBHOmJsdWU9IjU1Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz00MCBNPTY1IFk9OTAgSz0zNSIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjEyNSIgeG1wRzpncmVlbj0iNzgiIHhtcEc6Ymx1ZT0iMzYiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTQwIE09NzAgWT0xMDAgSz01MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjEwNCIgeG1wRzpncmVlbj0iNjAiIHhtcEc6Ymx1ZT0iMTciLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTUwIE09NzAgWT04MCBLPTcwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iNjciIHhtcEc6Z3JlZW49IjQxIiB4bXBHOmJsdWU9IjI0Ii8+DQoJCQkJCQkJCTwvcmRmOlNlcT4NCgkJCQkJCQk8L3htcEc6Q29sb3JhbnRzPg0KCQkJCQkJPC9yZGY6RGVzY3JpcHRpb24+DQoJCQkJCTwvcmRmOmxpPg0KCQkJCQk8cmRmOmxpPg0KCQkJCQkJPHJkZjpEZXNjcmlwdGlvbiB4bXBHOmdyb3VwTmFtZT0iR3Jpc2VzIiB4bXBHOmdyb3VwVHlwZT0iMSI+DQoJCQkJCQkJPHhtcEc6Q29sb3JhbnRzPg0KCQkJCQkJCQk8cmRmOlNlcT4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT0wIFk9MCBLPTEwMCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjI5IiB4bXBHOmdyZWVuPSIyOSIgeG1wRzpibHVlPSIyNyIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTAgWT0wIEs9OTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSI2MCIgeG1wRzpncmVlbj0iNjAiIHhtcEc6Ymx1ZT0iNTkiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT0wIFk9MCBLPTgwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iODciIHhtcEc6Z3JlZW49Ijg3IiB4bXBHOmJsdWU9Ijg2Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09MCBZPTAgSz03MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjExMiIgeG1wRzpncmVlbj0iMTExIiB4bXBHOmJsdWU9IjExMSIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTAgWT0wIEs9NjAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxMzUiIHhtcEc6Z3JlZW49IjEzNSIgeG1wRzpibHVlPSIxMzUiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT0wIFk9MCBLPTUwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMTU3IiB4bXBHOmdyZWVuPSIxNTciIHhtcEc6Ymx1ZT0iMTU2Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09MCBZPTAgSz00MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjE3OCIgeG1wRzpncmVlbj0iMTc4IiB4bXBHOmJsdWU9IjE3OCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTAgWT0wIEs9MzAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIxOTgiIHhtcEc6Z3JlZW49IjE5OCIgeG1wRzpibHVlPSIxOTgiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT0wIFk9MCBLPTIwIiB4bXBHOm1vZGU9IlJHQiIgeG1wRzp0eXBlPSJQUk9DRVNTIiB4bXBHOnJlZD0iMjE4IiB4bXBHOmdyZWVuPSIyMTgiIHhtcEc6Ymx1ZT0iMjE4Ii8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09MCBZPTAgSz0xMCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjIzNyIgeG1wRzpncmVlbj0iMjM3IiB4bXBHOmJsdWU9IjIzNyIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTAgWT0wIEs9NSIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjI0NiIgeG1wRzpncmVlbj0iMjQ2IiB4bXBHOmJsdWU9IjI0NiIvPg0KCQkJCQkJCQk8L3JkZjpTZXE+DQoJCQkJCQkJPC94bXBHOkNvbG9yYW50cz4NCgkJCQkJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCQkJCQk8L3JkZjpsaT4NCgkJCQkJPHJkZjpsaT4NCgkJCQkJCTxyZGY6RGVzY3JpcHRpb24geG1wRzpncm91cE5hbWU9IkJyaWxsYW50ZXMiIHhtcEc6Z3JvdXBUeXBlPSIxIj4NCgkJCQkJCQk8eG1wRzpDb2xvcmFudHM+DQoJCQkJCQkJCTxyZGY6U2VxPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MCBNPTEwMCBZPTEwMCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyMjciIHhtcEc6Z3JlZW49IjYiIHhtcEc6Ymx1ZT0iMTkiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTAgTT03NSBZPTEwMCBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyMzQiIHhtcEc6Z3JlZW49IjkxIiB4bXBHOmJsdWU9IjEyIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz0wIE09MTAgWT05NSBLPTAiIHhtcEc6bW9kZT0iUkdCIiB4bXBHOnR5cGU9IlBST0NFU1MiIHhtcEc6cmVkPSIyNTUiIHhtcEc6Z3JlZW49IjIyMiIgeG1wRzpibHVlPSIwIi8+DQoJCQkJCQkJCQk8cmRmOmxpIHhtcEc6c3dhdGNoTmFtZT0iQz04NSBNPTEwIFk9MTAwIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjAiIHhtcEc6Z3JlZW49IjE1MiIgeG1wRzpibHVlPSI1OCIvPg0KCQkJCQkJCQkJPHJkZjpsaSB4bXBHOnN3YXRjaE5hbWU9IkM9MTAwIE09OTAgWT0wIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjM5IiB4bXBHOmdyZWVuPSI1MiIgeG1wRzpibHVlPSIxMzkiLz4NCgkJCQkJCQkJCTxyZGY6bGkgeG1wRzpzd2F0Y2hOYW1lPSJDPTYwIE09OTAgWT0wIEs9MCIgeG1wRzptb2RlPSJSR0IiIHhtcEc6dHlwZT0iUFJPQ0VTUyIgeG1wRzpyZWQ9IjEzMCIgeG1wRzpncmVlbj0iNTQiIHhtcEc6Ymx1ZT0iMTQwIi8+DQoJCQkJCQkJCTwvcmRmOlNlcT4NCgkJCQkJCQk8L3htcEc6Q29sb3JhbnRzPg0KCQkJCQkJPC9yZGY6RGVzY3JpcHRpb24+DQoJCQkJCTwvcmRmOmxpPg0KCQkJCTwvcmRmOlNlcT4NCgkJCTwveG1wVFBnOlN3YXRjaEdyb3Vwcz4NCgkJPC9yZGY6RGVzY3JpcHRpb24+DQoJPC9yZGY6UkRGPg0KPC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3Lmll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\r\n  \" (click)=\"iniciarSesion()\" style=\"width: 40%;padding-left:50px; padding-right:50px\">\r\n  <br/>\r\n  <br/>\r\n</div>\r\n"

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
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.iniciarSesion = function () {
        this.router.navigateByUrl('/login');
    };
    HomeComponent.prototype.registrarse = function () {
        this.router.navigateByUrl('/register');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "\r\nheader{\r\n  width: 100%;\r\n  padding-top: 2rem;\r\n  -webkit-padding-after: 2rem;\r\n          padding-block-end: 2rem;\r\n  background-color: #125A82;\r\n  color: white;\r\n  text-align: center;\r\n  font-family: \"arial\";\r\n  font-size: 19px;\r\n}\r\n\r\n.formularioJugar{\r\n  width: 50%;\r\n  margin-left: 25%;\r\n  margin-top: 5%;\r\n  padding: 2rem;\r\n  border-radius: 5px;\r\n  font-family: \"arial\";\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid rgb(0, 139, 208);\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/jugar/jugar.component.html":
/*!********************************************!*\
  !*** ./src/app/jugar/jugar.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" class=\"formularioJugar\"  #form=\"ngForm\" (ngSubmit) =\"tabla()\">\r\n  <header>  Unirse a un juego</header>\r\n          <div class=\"form-group\">\r\n          <label>Nombre empresa</label>\r\n              <!-- <input class=\"form-control\" id=\"nombreEmpresa\" type=\"text\" #nombreEmpresa=\"ngModel\" [(ngModel)]=\"jugador.nombreEmpresa\" placeholder=\"Empresa\" required> -->\r\n              <input type=\"text\" formControlName=\"nombreE\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nombreE.errors }\" placeholder=\"Nombre de tu empresa\" style=\"text-transform:uppercase\" />\r\n              <div *ngIf=\"submitted && f.nombreE.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.nombreE.errors.required\" style=\"color: red\">Nombre empresa es requerido</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label>Codigo</label>\r\n              <!-- <input class=\"form-control\" id=\"codigo\" type=\"text\" #codigo=\"ngModel\" [(ngModel)]=\"jugador.codigo\" placeholder=\"Codigo\" required> -->\r\n              <input type=\"text\" formControlName=\"codigo\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.codigo.errors }\" placeholder=\"Codigo\"/>\r\n              <div *ngIf=\"submitted && f.codigo.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.codigo.errors.required\" style=\"color: red\">Codigo es requerido</div>\r\n              </div>\r\n          </div>                  \r\n  <button class=\"button-jugar\">JUGAR</button>\r\n</form>\r\n"

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
    JugarComponent.prototype.tabla = function () {
        var _this = this;
        { }
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.jugador.nombreEmpresa = (this.registerForm.value.nombreE + "").toUpperCase();
        this.jugador.codigo = this.registerForm.value.codigo;
        this.empresa.nombre = this.jugador.nombreEmpresa;
        var json = JSON.stringify(this.empresa);
        var params = 'json' + json;
        this.http.post('http://localhost:8080/empresa/' + this.jugador.codigo + '', json).subscribe(function (response) {
            if (response.status == 200) {
                console.log('ok');
                alert("Tu nombre de empresa sera: " + _this.jugador.nombreEmpresa);
                _this.router.navigate(['/tabla', _this.jugador.nombreEmpresa, _this.jugador.codigo]);
            }
            else {
                console.log(response);
            }
        });
        alert("Tu nombre de empresa sera: " + this.jugador.nombreEmpresa);
        // this.router.navigate(['/tabla', this.jugador.nombreEmpresa, this.jugador.codigo]);
        //    alert("Tu nombre de empresa sera: "+this.jugador.nombreEmpresa);
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

module.exports = "header{\r\n  width: 100%;\r\n  padding-top: 2rem;\r\n  -webkit-padding-after: 2rem;\r\n          padding-block-end: 2rem;\r\n  background-color: #125A82;\r\n  color: white;\r\n  text-align: center;\r\n  font-family: \"arial\";\r\n  font-size: 19px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"formulario\" *ngIf=\"!(authService.user | async)\">\r\n  <header>Simulador de Negocios </header>\r\n  <br>\r\n  <div *ngIf=\"!(authService.user | async)\">\r\n      <label for=\"email\">Email</label>\r\n      <input  type=\"text\" [(ngModel)]=\"email\" placeholder=\"email\" required/>\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\" required/>\r\n      <button type=\"button\" class=\"btn btn-block\" (click)=\"signInWithGoogle()\">\r\n          <i class=\"fa fa-google\" aria-hidden=\"true\"></i>\r\n          Login with Google\r\n        </button>\r\n      <button type=\"submit\"  (click)=\"login()\" [disabled]=\"!email || !password\">\r\n          Login\r\n      </button>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"formulario\" *ngIf=\"authService.user | async\">\r\n  <h1 *ngIf=\"authService.user | async\">Welcome {{ (authService.user | async)?.email }}!</h1>\r\n  <button (click)=\"moderador()\" *ngIf=\"authService.user | async\" auto>\r\n    Crear juego\r\n  </button>\r\n  <br>\r\n  <button (click)=\"jugar()\" *ngIf=\"authService.user | async\" auto>\r\n    Unirse a un juego\r\n  </button>\r\n  <br>\r\n  <button (click)=\"logout()\" *ngIf=\"authService.user | async\" auto>\r\n      Logout\r\n  </button>\r\n  <br>\r\n</div>\r\n"

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
        if (this.authService.login(this.email, this.password)) {
        }
        this.email = this.password = '';
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this._firebaseAuth.auth.signOut();
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

module.exports = "header{\r\n  width: 100%;\r\n  padding-top: 2rem;\r\n  -webkit-padding-after: 2rem;\r\n          padding-block-end: 2rem;\r\n  background-color: #125A82;\r\n  color: white;\r\n  text-align: center;\r\n  font-family: \"arial\";\r\n  font-size: 19px;\r\n}\r\n\r\n.formularioModerador{\r\n  width: 50%;\r\n  margin-left: 25%;\r\n  margin-top: 5%;\r\n  padding: 2rem;\r\n  border-radius: 5px;\r\n  font-family: \"arial\";\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid rgb(0, 139, 208);\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442;\r\n}\r\n"

/***/ }),

/***/ "./src/app/moderador/moderador.component.html":
/*!****************************************************!*\
  !*** ./src/app/moderador/moderador.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form class=\"formularioModerador\">\r\n\r\n  <header>MODERADOR </header>\r\n  <br>\r\n  <br>\r\n  <div class=\"form-group\">\r\n    <label>Nombre del Mercado</label>\r\n    <input class=\"form-control\" id=\"nombreMercadoID\" type=\"text\" #nombreMercado=\"ngModel\"  [(ngModel)]=\"moderador.nombreMercado\" placeholder=\"Nombre del Mercado\" required>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n      <label for=\"cantidadJugadores\">Cantidad de Jugadores  </label>\r\n      <select id=\"cantidadJugadoresID\"  name=\"cantidadJugadores\"  [(ngModel)]=\"moderador.cantidadJugadores\" class=\"form-control\">\r\n          <option value=\"1\" selected>1</option>\r\n          <option value=\"2\">2</option>\r\n          <option value=\"3\">3</option>\r\n          <option value=\"4\">4</option>\r\n          <option value=\"5\">5</option>\r\n      </select>\r\n  </div>\r\n\r\n  <button type =\"submit\"  [disabled]=\"!form.form.valid\">Hecho</button>\r\n\r\n</form>\r\n<div style=\"padding-left: 25%;\" >\r\n  <h3>Codigo generado:  {{moderador.codigo}}</h3>\r\n</div>\r\n"

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
    function ModeradorComponent() {
        this.moderador = new _models_moderador__WEBPACK_IMPORTED_MODULE_0__["Moderador"]();
    }
    ModeradorComponent.prototype.ngOnInit = function () {
    };
    ModeradorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-moderador',
            template: __webpack_require__(/*! ./moderador.component.html */ "./src/app/moderador/moderador.component.html"),
            styles: [__webpack_require__(/*! ./moderador.component.css */ "./src/app/moderador/moderador.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "\r\nheader{\r\n  width: 100%;\r\n  padding-top: 2rem;\r\n  -webkit-padding-after: 2rem;\r\n          padding-block-end: 2rem;\r\n  background-color: #125A82;\r\n  color: white;\r\n  text-align: center;\r\n  font-family: \"arial\";\r\n  font-size: 19px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"formulario\" >\r\n  <header>Simulador de Negocios </header>\r\n\r\n  <div >\r\n      <label for=\"email\">Ingrese su email</label>\r\n      <input type=\"email\" [(ngModel)]=\"email\" placeholder=\"email\" required>\r\n      <label for=\"password\">Ingrese un password</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"password\" required>\r\n      <button (click)=\"signup()\" [disabled]=\"!email || !password\">\r\n        Signup\r\n      </button>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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

/***/ "./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-container{\r\n\r\n  margin: 7px;\r\n\r\n\twidth: auto;\r\n\tcolor: black;\r\n\r\n}\r\n\r\ntable{\r\n\r\n  font-family: \"arial\";\r\n  font-size: 14px;\r\n\tbackground-color: white;\r\n\ttext-align: left;\r\n\tborder-collapse: collapse;\r\n\twidth: 100%;\r\n\r\n\r\n\r\n}\r\n\r\n/*\r\nthead{\r\n\tbackground-color: #0064FF;\r\n\tborder-bottom: solid 5px #4c92ff;\r\n\tcolor: white;\r\n\r\n}*/\r\n\r\ntr{\r\n\tborder-color:black;\r\n}\r\n\r\ntable,th{\r\n    border: 2px solid black;\r\n}\r\n\r\ntable td + td {\r\n\tborder-left:2px solid black;\r\n}\r\n\r\nth{\r\n\ttext-align:center;\r\n}\r\n\r\n#itemTipoNum{\r\n\tpadding-left: 4%;\r\n}\r\n\r\n#subItemTipo1{\r\n\tpadding-left: 5%\r\n}\r\n\r\n#subItemTipo2{\r\n\tpadding-left: 8%\r\n}\r\n\r\n/*\r\ntr:nth-child(even){\r\nbackground-color:  #ddd;\r\n}*/\r\n\r\ntr:hover td{\r\n\tbackground-color: #4c92ff;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/tabla-de-decision/tabl-resultados/tabl-resultados.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n  <table id=\"success\">\r\n          <thead>\r\n            <tr>\r\n                <th >DETALLE</th>\r\n                <th >BIMESTRE INICIAL </th>\r\n                <th *ngFor=\"let estado of estadoResultados;let i=index\">BIMESTRE {{i+1}}</th>\r\n            \r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody >\r\n            <tr>\r\n              <td > + INGRESOS</td>\r\n              <td id=\"itemTipoNum\">95.000</td>\r\n              <td  *ngFor=\"let estado of estadoResultados\" id=\"itemTipoNum\">{{estado.ingresos}}</td>\r\n\r\n            </tr>\r\n            <tr >\r\n              <td>VENTAS</td>\r\n              <td >75.000</td>\r\n              <td *ngFor=\"let estado of estadoResultados\">{{estado.ventas}}</td>\r\n\r\n            </tr>\r\n            <tr  >\r\n              <td  id=\"subItemTipo1\">OTROS INGRESOS</td>\r\n              <td >10.000</td>\r\n              <td *ngFor=\"let estado of estadoResultados\" >{{estado.otrosIngresos}}</td>\r\n\r\n            </tr>\r\n\r\n            <tr >\r\n              <td  id=\"subItemTipo1\">CAPITAL PERIODO ANTERIOR</td>\r\n              <td >10.000</td>\r\n              <td *ngFor=\"let estado of estadoResultados\" >{{estado.capitalAnterior}}</td>\r\n\r\n            </tr>\r\n\r\n            <tr >\r\n              <td >- COSTOS</td>\r\n              <td id=\"itemTipoNum\">48.270</td>\r\n              <td *ngFor=\"let estado of estadoResultados\" id=\"itemTipoNum\">{{estado.costos}}</td>\r\n\r\n            </tr>\r\n\r\n            <tr >\r\n\r\n              <td  id=\"subItemTipo2\">MATERIA PRIMA</td>\r\n              <td >17.500</td>\r\n              <td  *ngFor=\"let estado of estadoResultados\" >{{estado.materiaPrima}}</td>\r\n\r\n            </tr>\r\n\r\n            <tr >\r\n              <td id=\"subItemTipo2\">MANO DE OBRA</td>\r\n              <td >8.000</td>\r\n              <td *ngFor=\"let estado of estadoResultados\" >{{estado.manoObra}}</td>\r\n\r\n            </tr>\r\n            <tr >\r\n              <td id=\"subItemTipo2\">COSTOS INDERECTOS</td>\r\n              <td >17.500</td>\r\n              <td *ngFor=\"let estado of estadoResultados\" >{{estado.costosIndirectos}}</td>\r\n\r\n            </tr >\r\n\r\n            <tr  style=\"background-color:rgb(14, 187, 230); \">\r\n              <td >UTILIDAD BRUTA</td>\r\n              <td id=\"itemTipoNum\">46.730</td>\r\n              <td *ngFor=\"let estado of estadoResultados\" id=\"itemTipoNum\">{{estado.utilidadBruta}}</td>\r\n            </tr>\r\n\r\n            <tr >\r\n              <td >-GASTOS OPERATIVOS</td>\r\n              <td id=\"itemTipoNum\">8.500</td>\r\n              <td *ngFor=\"let estado of estadoResultados\"  id=\"itemTipoNum\">{{estado.gastosOperativos}}</td>\r\n\r\n            </tr>\r\n\r\n            <tr >\r\n\r\n              <td id=\"subItemTipo1\">INV. MARKETING</td>\r\n              <td >3.500</td>\r\n              <td *ngFor=\"let estado of estadoResultados\"> {{estado.inversionMarketing}}</td>\r\n            </tr>\r\n\r\n            <tr >\r\n\r\n              <td id=\"subItemTipo1\">INV. INVESTIGACIÓN</td>\r\n              <td >1.500</td>\r\n              <td *ngFor=\"let estado of estadoResultados\" >{{estado.inversionInvestigacion}}</td>\r\n\r\n            </tr>\r\n\r\n            <tr >\r\n              <td id=\"subItemTipo1\">INV. ACTIVOS</td>\r\n              <td >3.500</td>\r\n              <td *ngFor=\"let estado of estadoResultados\" >{{estado.inversionActivos}}</td>\r\n            </tr>\r\n\r\n            <tr  style=\"background-color:rgb(14, 187, 230); \">\r\n              <td >UTILIDAD NETA DEL EJERCICO</td>\r\n              <td id=\"itemTipoNum\">38.230</td>\r\n              <td *ngFor=\"let estado of estadoResultados\" id=\"itemTipoNum\">{{estado.utilidadNeta}}</td>\r\n\r\n            </tr>\r\n          </tbody>\r\n    </table>\r\n</div>\r\n"

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

module.exports = "#main_container {\r\n  position: absolute;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: #36A9E1;\r\n  display: flex;\r\n}\r\n\r\naside {\r\n  height: 100%;\r\n  width: 270px;\r\n  color: white;\r\n  text-align: center;\r\n  overflow-y: hidden;\r\n}\r\n\r\n#logo_container {\r\n  background-color: rgb(111, 110, 110);\r\n}\r\n\r\n#logo_image {\r\n  margin-top: 20px;\r\n  height: 200px;\r\n  width: 200px;\r\n  background-color: white;\r\n  border-radius: 100%;\r\n}\r\n\r\n#nombre_empresa {\r\n  padding-top: 20px;\r\n  padding-bottom: 30px;\r\n  font-size: 20px;\r\n}\r\n\r\n#body_container {\r\n  width: calc(100% - 270px);\r\n  height: 100%;\r\n  background-color: red;\r\n}\r\n\r\n.tap_menu_hidden {\r\n  display: none;\r\n}\r\n\r\n.tab_menu_description {\r\n  font-size: 15px;\r\n  margin-top: -65px;\r\n  padding: 0 15px;\r\n  padding-top: 50px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.tab_menu_button {\r\n  margin-top: -31px;\r\n  height: 50px;\r\n  width: 210px;\r\n  border-radius: 15px;\r\n  margin-bottom: 30px;\r\n  font-size: 16px;\r\n}\r\n\r\n.tab_menu_button:focus {\r\n  outline: none;\r\n}\r\n\r\n.tab_menu_button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.section_container {\r\n  position: relative;\r\n  height: 100%;\r\n  width: calc(100% - 20px);\r\n  padding-left: 20px;\r\n}\r\n\r\n.section_container_body {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.section_title {\r\n  display: flex;\r\n  height: 100px;\r\n}\r\n\r\n.section_title_icon {\r\n  font-size: 100px;\r\n  color: white;\r\n  height: 130px;\r\n  line-height: 130px;\r\n  padding: 0 60px;\r\n  border-radius: 0 0 30px 0;\r\n}\r\n\r\n.section_title_desc {\r\n  position: relative;\r\n  font-size: 40px;\r\n  color: white;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.section_body {\r\n  padding-top: 60px;\r\n  height: calc(100% - 160px);\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.section_body_main {\r\n  margin: 0 50px;\r\n  background-color: rgb(90, 116, 165);\r\n  height: calc(100% - 100px);\r\n}\r\n\r\n.section_body_tab {\r\n  display: flex;\r\n}\r\n\r\n.section_body_tab_button:focus {\r\n  outline: none;\r\n}\r\n\r\n.section_body_tab_button {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 50px;\r\n  background-color: #092B3A;\r\n}\r\n\r\n.tap_selected {\r\n  background-color: #135A82;\r\n}\r\n\r\n.section_body_container {\r\n  height: calc(100% - 20px);\r\n  width: calc(100% - 20px);\r\n  padding: 10px;\r\n  background-color: #092B3A;\r\n}\r\n\r\n.section_body_content {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: white;\r\n}\r\n\r\n.section_body_content_title {\r\n  width: 500px;\r\n  background-color: #092B3A;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.tabla-decision {\r\n  text-align: center;\r\n  color: white;\r\n  font-family: \"arial\";\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  color: black;\r\n\r\n}\r\n\r\ntable,\r\nth,\r\ntd {\r\n  border: 1px solid black;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.th1 {\r\n  width: 10%;\r\n  border: 1px solid white;\r\n\r\n}\r\n\r\n.th2 {\r\n  width: 200%;\r\n\r\n}\r\n\r\n.tr1 {\r\n  width: 10%;\r\n  border: 1px solid white;\r\n\r\n}\r\n\r\ntable#t01 tr {\r\n  height: 60px;\r\n}\r\n\r\ntable#t01 tr:nth-child(odd) {\r\n  background-color: #fff;\r\n\r\n}\r\n\r\ntable#t01 tr:nth-child(even) {\r\n  background-color: rgb(116, 197, 233);\r\n\r\n}\r\n\r\ntable#t01 th {\r\n  background-color: rgb(24, 76, 133);\r\n  color: white;\r\n}\r\n\r\n.tabla-proyecciones {\r\n  width: 500px;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  color: white;\r\n  font-family: \"arial\";\r\n  background-color: rgb(255, 255, 255);\r\n  margin-left: 20px;\r\n  font-size: 14px;\r\n\r\n}\r\n\r\n.header-proyecciones {\r\n  background-color: rgb(24, 76, 133);\r\n  text-align-last: center;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  color: white;\r\n  font-size: 20px;\r\n  padding: 3%;\r\n}\r\n\r\n.proyecciones {\r\n  color: black;\r\n  text-align: left;\r\n  background-color: white;\r\n  border: 1px solid black;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/tabla-de-decision/tabla-de-decision.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tabla-de-decision/tabla-de-decision.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main_container\">\r\n  <aside>\r\n    <div id=\"logo_container\">\r\n      <img id=\"logo_image\" src=\"/imagenes/LOGO SIMULADOR FINAL.png\">\r\n      <div id=\"nombre_empresa\">{{nombreEmpresa}}</div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #092B3A;\">\r\n      <button (click)=\"informacion()\" class=\"boton-infomacion-compania tab_menu_button\" style=\"background-color: #092B3A;\">\r\n        INFORMACI&#211;N SOBRE LA COMPA&#209;&#205;A\r\n      </button>\r\n\r\n      <div class=\"{{tap_position==0 ? '' : 'tap_menu_hidden'}} tab_menu_description\">\r\n        Como nuevo gerente general es necesario que conozcas a detalle todo acerca de la compañ&#237;a que ahora\r\n        diriges.\r\n        En esta secci&#243;n te brindamos toda la informaci&#243;n necesaria para que conozcas el negocio.\r\n      </div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #135A82;\">\r\n      <button (click)=\"decision()\" class=\"boton-decision tab_menu_button\" style=\"background-color: #135A82;\">\r\n        MIS DECISIONES\r\n      </button>\r\n      <div class=\"{{tap_position==1 ? '' : 'tap_menu_hidden'}}  tab_menu_description\">\r\n        En esta secci&#243;n puedo tomar las decisiones que afectaran el desenvolvimiento de mi empresa en los\r\n        siguientes\r\n        2\r\n        meses.\r\n      </div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #0D8EC8;\">\r\n      <button (click)=\"tanalisis()\" class=\"boton-t-analisi tab_menu_button\" style=\"background-color: #0D8EC8;\">\r\n        AN&#193;LISIS DE LA INDUSTRIA\r\n      </button>\r\n      <div class=\"{{tap_position==2? '' : 'tap_menu_hidden'}}  tab_menu_description\">\r\n        En esta secci&#243;n puedes ver y analizar las decisiones y resultados de tu competencia y la industria.\r\n      </div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #2EC3EC;\">\r\n      <button (click)=\"informe()\" class=\"boton-informe tab_menu_button\" style=\"background-color: #2EC3EC;\">\r\n        INFORMES DE LA COMPA&#209;&#205;A\r\n      </button>\r\n      <div class=\"{{tap_position==3 ? '' : 'tap_menu_hidden'}} tab_menu_description\">\r\n        En esta secci&#243;n puedes ver y analizar las decisiones y resultados de tus decisiones as&#237; como el\r\n        estado de tu\r\n        compañ&#237;a.\r\n      </div>\r\n    </div>\r\n    <div class=\"button_tab_container\" style=\"background-color: #36A9E1;\">\r\n      <button (click)=\"analisis()\" class=\"boton-analisis tab_menu_button\" style=\"background-color: #36A9E1;\">\r\n        AN&#193;LISIS\r\n      </button>\r\n      <div class=\"{{tap_position==4 ? '' : 'tap_menu_hidden'}} tab_menu_description\">\r\n        En esta secci&#243;n puedes comparar variables para tener un panorama más claro de tus decisiones.\r\n      </div>\r\n    </div>\r\n  </aside>\r\n  <div id=\"body_container\">\r\n    <div class=\"section_container {{tap_position==0 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #092B3A;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #092B3A;\">help_outline</div>\r\n          <div class=\"section_title_desc\"> INFORMACI&#211;N SOBRE LA COMPA&#209;&#205;A</div>\r\n        </div>\r\n        <div class=\"section_body\">\r\n\r\n          <div class=\"section_body_main\">\r\n            <div class=\"section_body_tab\">\r\n              <button (click)=\"historia()\" class=\"section_body_tab_button  {{section_tap_1==0 ? '' : 'tap_selected'}}\"\r\n                id=\"\">\r\n                HISTORIA\r\n              </button>\r\n              <button (click)=\"misionVision()\" class=\"section_body_tab_button  {{section_tap_1==1 ? '' : 'tap_selected'}}\"\r\n                id=\"\">\r\n                MISIÓN - VISIÓN\r\n              </button>\r\n              <button (click)=\"nuestroProducto()\" class=\"section_body_tab_button   {{section_tap_1==2 ? '' : 'tap_selected'}}\"\r\n                id=\"\">\r\n                NUESTRO PRODUCTO\r\n              </button>\r\n              <button (click)=\"organigrama()\" class=\"section_body_tab_button  {{section_tap_1==3 ? '' : 'tap_selected'}}\"\r\n                id=\"\">\r\n                ORGANIGRAMA\r\n              </button>\r\n              <button (click)=\"objetivos()\" class=\"section_body_tab_button  {{section_tap_1==4 ? '' : 'tap_selected'}}\"\r\n                id=\"D\">\r\n                OBJETIVOS\r\n              </button>\r\n            </div>\r\n            <div class=\"section_body_container\">\r\n              <div class=\"section_body_content  {{section_tap_1==0 ? '' : 'tap_menu_hidden'}}\">\r\n                <div style=\"padding: 20px;\"><br /><br /><br />\r\n                  <img src=\"/imagenes/LOGO SIMULADOR FINAL.png\" style=\"float: right; width: 250px; \">\r\n                  UNA BREVE HISTORIA SOBRE NOSOTROS\r\n                  <br /><br /><br /><br />\r\n                  La empresa {{nombreEmpresa}}, inicio sus actividades en el año 2005.\r\n                  <br /><br />Desde el comienzo de nuestras actividades, nos especializamos en la venta de poleras de\r\n                  alta\r\n                  calidad con diseños innovadores y que están en constante actualización según las tendencias del\r\n                  mercado.\r\n                  <br /><br />Con el transcurso de los años hemos incorporado nuevas líneas de productos con el\r\n                  objetivo de\r\n                  proveer a nuestros clientes una solución integral a sus necesidades. Contamos con un excelente\r\n                  grupo humano el cual se capacita en forma permanente a fin de estar actualizado en los cambios e\r\n                  innovaciones\r\n                  tecnológicas que se presentan en nuestro ámbito.\r\n                  <br /><br />La calidad de nuestros productos y la excelencia en nuestro servicio nos han permitido\r\n                  posicionarnos en el mercado en muy poco tiempo, llegando a alcanzar a nuestros principales\r\n                  competidores.\r\n                  <br /><br />Pretendemos convertirnos en la empresa líder en nuestro sector a través de decisiones que\r\n                  nos\r\n                  permitan aprovechar nuestras ventajas competitivas.\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_1==1 ? '' : 'tap_menu_hidden'}}\">\r\n                <div style=\"display: flex; width: 100%;\">\r\n                  <div style=\"width: calc(100% - 200px);\">\r\n                    <br /><br />\r\n                    <div class=\"section_body_content_title\"> MISIÓN</div><br /><br />\r\n                    <div style=\"text-align: center; font-size: 25px;\">“Somos una empresa rentable que ofrece poleras\r\n                      exclusivas de alta calidad con diseños\r\n                      innovadores para personas que aprecian el buen vestir.”\r\n                    </div><br /><br />\r\n                  </div>\r\n                  <img src=\"/imagenes/LOGO SIMULADOR FINAL.png\" style=\" width: 200px;height: 200px;; \">\r\n                </div>\r\n                <div>\r\n                  <div class=\"section_body_content_title\" style=\" float: right; \">VISIÓN\r\n                  </div><br /><br /><br /><br /><br />\r\n                  <div style=\"text-align: center; font-size: 25px;\">“Ser una empresa referente en nuestro sector,\r\n                    reconocida por su excelente trato al\r\n                    cliente\r\n                    y productos de alta calidad”\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_1==2 ? '' : 'tap_menu_hidden'}}\">\r\n                <img src=\"/imagenes/LOGO SIMULADOR FINAL.png\" style=\"float: right; width: 250px;height: 200px; \">\r\n                <br /><br />\r\n                <div style=\"padding: 20px;\">Ofrecemos poleras exclusivasde alta calidad con diseños innovadores para\r\n                  personas que aprecian el\r\n                  buen\r\n                  vestir.\r\n                  <br /><br />\r\n                  Contamos con un equipo de diseñadores gráficos que se encarga del arte que nosotros\r\n                  ponemos en\r\n                  cada uno de nuestros productos. <br /><br />\r\n                </div>\r\n\r\n                <div>\r\n                  <div class=\"\" style=\"display: flex;height: 250px;justify-content: center;width: 100%;\">\r\n\r\n                    <img class=\"img-poleras\" src=\"/imagenes/polera 3.jpg\" style=\"width: 200px;\">\r\n                    <img class=\"img-poleras\" src=\"/imagenes/polera 2.jpg\" style=\"width: 200px;\">\r\n                    <img class=\"img-poleras\" src=\"/imagenes/POLERA 1.jpg\" style=\"width: 200px;\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_1==3 ? '' : 'tap_menu_hidden'}}\" style=\"position: relative;\">\r\n                <div style=\"background: url('/imagenes/Organigrama.JPG') no-repeat center; background-size: contain;width: calc(100% - 100px);height: calc(100% - 100px);position: absolute;top: 50px;\"></div>\r\n                <img src=\"/imagenes/LOGO SIMULADOR FINAL.png\" style=\"float: right; width: 200px;height: 200px;position: absolute;right: 0; \">\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_1==4 ? '' : 'tap_menu_hidden'}}\"><img src=\"/imagenes/LOGO SIMULADOR FINAL.png\"\r\n                  style=\"float: right; width: 250px; \">\r\n                <br /> <br /> <br />\r\n                <div class=\"section_body_content_title\"> BIENVENIDO A LA EMPRESA\r\n                </div><br /> <br />\r\n                <div style=\"padding-left:50px;\">\r\n                  Hoy la empresa se encuentra en las mismas condiciones que la competencia y no ha crecido en el\r\n                  último año.\r\n                  Es por eso que decidimos NOMBRARTE A TI como el nuevo gerente de {{nombreEmpresa}}.\r\n                  <br /><br />\r\n                  Esperamos que mediante tus decisiones puedas llevar a la empresa a obtener el MAYOR\r\n                  PORCENTAJE de\r\n                  mercado y la mejor rentabilidad en los siguientes bimestres. ¡Confiamos en ti!\r\n                  <br /><br />\r\n                  Muchos éxitos.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section_container {{tap_position==1 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #135A82;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #135A82;\">person</div>\r\n          <div class=\"section_title_desc\"> MIS DECISIONES</div>\r\n        </div>\r\n\r\n        <div class=\"section_body\">\r\n          <div style=\"display: flex; justify-content: center;\">\r\n            <div class=\"tabla-decision\">\r\n              <table id=\"t01\">\r\n                <tr>\r\n                  <th class=\"th1\" rowspan=2>DETALLE</th>\r\n                  <th class=\"th1\" colspan=5>BIMESTRES</th>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"tr1\">INICIAL</th>\r\n                  <th class=\"tr1\" id=\"numero-bimestre1\"> </th>\r\n                  <th class=\"tr1\" id=\"numero-bimestre2\"> </th>\r\n                  <th class=\"tr1\" id=\"numero-bimestre3\"> </th>\r\n                  <th class=\"tr1\" id=\"numero-bimestre-siguiente\">B-1</th>\r\n                </tr>\r\n                <tr>\r\n                  <td>PRECIO UNITARIO</td>\r\n                  <td>{{bimestreInicial.precioUnitario}}</td>\r\n                  <td id=\"precio-unitario1\"></td>\r\n                  <td id=\"precio-unitario2\"></td>\r\n                  <td id=\"precio-unitario3\"></td>\r\n                  <td id=\"precioUnitarioTD\"><input type=\"number\" id=\"precioUnitario\" name=\"precioUnitario\" [(ngModel)]=\"bimestreActual.precioUnitario\"\r\n                      min=\"0\" max=\"bimestreActual.produccion\" value=\"bimestreActual.produccion\">\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>PRODUCCIÓN</td>\r\n                  <td>{{bimestreInicial.produccion}}</td>\r\n                  <td id=\"produccion1\"></td>\r\n                  <td id=\"produccion2\"></td>\r\n                  <td id=\"produccion3\"></td>\r\n                  <td id=\"produccionTD\"><input type=\"number\" id=\"produccion\" name=\"produccion\" [(ngModel)]=\"bimestreActual.produccion\"\r\n                      min=\"0\" max=\"850*{{ numeroBimestre }}\" value=500></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>INVERSION EN MARKETING</td>\r\n                  <td>{{bimestreInicial.inversionEnMarketing}}</td>\r\n                  <td id=\"inversion-marketing1\"></td>\r\n                  <td id=\"inversion-marketing2\"></td>\r\n                  <td id=\"inversion-marketing3\"></td>\r\n                  <td id=\"inversionEnMarketingTD\">\r\n                    <!--  <input type=\"number\" id=\"inversionEnMarketing\"  name=\"inversionEnMarketing\" [(ngModel)]=\"bimestreActual.inversionEnMarketing\" min=\"0\" value=3500> -->\r\n                    <select type=\"number\" id=\"inversionEnMarketing\" name=\"inversionEnMarketing\" [(ngModel)]=\"bimestreActual.inversionEnMarketing\">\r\n                      <option [ngValue]=0>0</option>\r\n                      <option [ngValue]=1500>1500</option>\r\n                      <option [ngValue]=3000>3000</option>\r\n                      <option [ngValue]=4500>4500</option>\r\n                      <option [ngValue]=6000>6000</option>\r\n                    </select>\r\n                  </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                  <td>INVERSION EN INVESTIGACIÓN</td>\r\n                  <td>{{bimestreInicial.inversionEnInvestigacion}}</td>\r\n                  <td id=\"inversion-investigacion1\"></td>\r\n                  <td id=\"inversion-investigacion2\"></td>\r\n                  <td id=\"inversion-investigacion3\"></td>\r\n                  <td id=\"inversionEnInvestigacionTD\">\r\n                    <!-- <input type=\"number\" id=\"inversionEnInvestigacion\" name=\"inversionEnInvestigacion\"[(ngModel)]=\"bimestreActual.inversionEnInvestigacion\" min=\"0\" value=1500> -->\r\n                    <select type=\"number\" id=\"inversionEnInvestigacion\" name=\"inversionEnInvestigacion\" [(ngModel)]=\"bimestreActual.inversionEnInvestigacion\">\r\n                      <option [ngValue]=0>0</option>\r\n                      <option [ngValue]=1500>1500</option>\r\n                      <option [ngValue]=3000>3000</option>\r\n                      <option [ngValue]=4500>4500</option>\r\n                      <option [ngValue]=6000>6000</option>\r\n                    </select>\r\n                  </td>\r\n\r\n                </tr>\r\n                <tr>\r\n                  <td>INVERSION EN ACTIVOS</td>\r\n                  <td>{{bimestreInicial.inversionEnActivos}}</td>\r\n                  <td id=\"inversion-activos1\"></td>\r\n                  <td id=\"inversion-activos2\"></td>\r\n                  <td id=\"inversion-activos3\"></td>\r\n                  <td id=\"inversionEnActivosTD\">\r\n                    <!-- <input type=\"number\" id=\"inversionEnActivos\" name=\"inversionEnActivos\" [(ngModel)]=\"bimestreActual.inversionEnActivos\" min=\"0\" value=3500> -->\r\n                    <select type=\"number\" id=\"inversionEnActivos\" name=\"inversionEnActivos\" [(ngModel)]=\"bimestreActual.inversionEnActivos\">\r\n                      <option [ngValue]=0>0</option>\r\n                      <option [ngValue]=1500>1500</option>\r\n                      <option [ngValue]=3000>3000</option>\r\n                      <option [ngValue]=4500>4500</option>\r\n                      <option [ngValue]=6000>6000</option>\r\n                    </select>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n\r\n            </div>\r\n            <div class=\"tabla-proyecciones\" id=\"tabla-proyeccionesID\">\r\n              <div class=\"proyecciones\">\r\n                <div class=\"header-proyecciones\">PROYECCIONES</div>\r\n\r\n                <ul style=\"list-style-type:none\">\r\n                  <li> <span> <i class=\"material-icons\" (click)=\"general()\" style=\"font-size:18px; color:blue;cursor: pointer\">\r\n                        arrow_right</i></span> CAPITAL PERIODO\r\n                    ANTERIOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{capitalPeriodoAnterior}}</li>\r\n                  <li><span> <i class=\"material-icons\" (click)=\"ingresoDiv()\" style=\"font-size:18px; color:blue;cursor: pointer\">arrow_drop_down</i></span>\r\n                    INGRESOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    {{bimestreActual.precioUnitario*bimestreActual.produccion+10000}}</li>\r\n                  <div id=\"div-ingresos\" style=\"padding-left: 20%\">\r\n                    <pre>VENTAS                            {{bimestreActual.precioUnitario*bimestreActual.produccion}} </pre>\r\n                    <pre>OTROS INGRESOS          10000</pre>\r\n                  </div>\r\n                  <li><span> <i class=\"material-icons\" (click)=\"gastosDiv()\" style=\"font-size:18px; color:blue ;cursor: pointer\">arrow_drop_down</i></span>GASTOS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                    {{bimestreActual.inversionEnMarketing +\r\n                    bimestreActual.inversionEnActivos+bimestreActual.inversionEnInvestigacion+bimestreActual.produccion*35\r\n                    +30770}}</li>\r\n                  <div id=\"div-gastos\" style=\"padding-left: 20%\">\r\n                    <pre>PRODUCCIÓN                  {{bimestreActual.produccion*35 +30770}}</pre>\r\n                    <pre>MARKETING                       {{bimestreActual.inversionEnMarketing}}</pre>\r\n                    <pre>INV. ACTIVOS                     {{bimestreActual.inversionEnActivos}}</pre>\r\n                    <pre>INV. INVESTIGACIÓN         {{bimestreActual.inversionEnInvestigacion}}</pre>\r\n                  </div>\r\n                  <li><span> <i class=\"material-icons\" (click)=\"resultadosDiv()\" style=\"font-size:18px; color:blue;cursor: pointer\">arrow_drop_down</i></span>RESULTADO\r\n                  </li>\r\n                  <div id=\"div-resultados\" style=\"padding-left: 20%\">\r\n                    <pre>EFECTIVO DISPONIBLE   {{capitalPeriodoAnterior+10000+bimestreActual.precioUnitario*bimestreActual.produccion+10000-(bimestreActual.inversionEnMarketing + bimestreActual.inversionEnActivos+bimestreActual.inversionEnInvestigacion)}} </pre>\r\n                    <pre>UTILIDAD ESPERADA      {{(bimestreActual.precioUnitario*bimestreActual.produccion+10000)-(bimestreActual.inversionEnMarketing + bimestreActual.inversionEnActivos+bimestreActual.inversionEnInvestigacion+bimestreActual.produccion*35 +30770)}}</pre>\r\n                  </div>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"display: flex; justify-content: center;padding-top: 50px;\">\r\n            <button (click)=\"iniciar()\" style=\"width:300px\">\r\n              ENVIAR MIS DECISIONES\r\n            </button></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section_container {{tap_position==2 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #0D8EC8;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #0D8EC8;\">attach_money</div>\r\n          <div class=\"section_title_desc\"> AN&#193;LISIS DE LA INDUSTRIA</div>\r\n        </div>\r\n        <div class=\"section_body\">\r\n          <div class=\"section_body_main\">\r\n            <div class=\"section_body_tab\">\r\n\r\n              <button (click)=\"VisionGeneral()\" class=\"section_body_tab_button  {{section_tap_2==0 ? '' : 'tap_selected'}}\">\r\n                VISION GENERAL\r\n              </button>\r\n              <button (click)=\"ProduccionTablaAnalisis()\" class=\"section_body_tab_button  {{section_tap_2==1 ? '' : 'tap_selected'}}\">\r\n                PRODUCCION\r\n              </button>\r\n              <button (click)=\"VentasTablaAnalisis()\" class=\"section_body_tab_button  {{section_tap_2==2 ? '' : 'tap_selected'}}\">\r\n                VENTAS\r\n              </button>\r\n              <button (click)=\"PorcentajeMercado()\" class=\"section_body_tab_button  {{section_tap_2==3 ? '' : 'tap_selected'}}\">\r\n                % MERCADO\r\n              </button>\r\n            </div>\r\n            <div class=\"section_body_container\">\r\n              <div class=\"section_body_content  {{section_tap_2==0 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"VisionGeneralID\">\r\n                  <app-tabla-vision-general [visionGeneral]=\"visionGeneral\"></app-tabla-vision-general>\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_2==1 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"ProduccionTablaAnalisisID\">\r\n                  <app-tabla-produccion [produccion]=\"produccion\"></app-tabla-produccion>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_2==2 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"VentasTablaAnalisisID\">\r\n                  <app-tabla-ventas [ventasIndustria]=\"ventasIndustria\"></app-tabla-ventas>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_2==3 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"PorcentajeMercado\">\r\n                  <table>\r\n                    <tr>\r\n                      <td style=\"width: 700px;height:50%\"><canvas id=\"pieI\"></canvas></td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"section_container {{tap_position==3 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #2EC3EC;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #2EC3EC;\">business_center</div>\r\n          <div class=\"section_title_desc\">INFORMES DE LA COMPA&#209;&#205;A</div>\r\n        </div>\r\n        <div class=\"section_body\">\r\n          <div class=\"section_body_main\">\r\n            <div class=\"section_body_tab\">\r\n\r\n              <button (click)=\"EstadoDeResultados()\" class=\"section_body_tab_button  {{section_tap_3==0 ? '' : 'tap_selected'}}\">\r\n                ESTADO DE RESULTADOS</button>\r\n              <button (click)=\"BalanceGeneral()\" class=\"section_body_tab_button  {{section_tap_3==1 ? '' : 'tap_selected'}}\">BALANCE\r\n                GENERAL</button>\r\n              <button (click)=\"Ventas()\" class=\"section_body_tab_button  {{section_tap_3==2 ? '' : 'tap_selected'}}\">VENTAS</button>\r\n              <button (click)=\"Produccion()\" class=\"section_body_tab_button  {{section_tap_3==3 ? '' : 'tap_selected'}}\">COSTOS\r\n                DE PRODUCCIÓN</button>\r\n              <button (click)=\"Compania()\" class=\"section_body_tab_button  {{section_tap_3==4 ? '' : 'tap_selected'}}\">COMPAÑIA</button>\r\n\r\n            </div>\r\n            <div class=\"section_body_container\">\r\n              <div class=\"section_body_content  {{section_tap_3==0 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"EstadoDeResultadosID\">\r\n                  <app-tabl-resultados [estadoResultados]=\"estadoResultados\"></app-tabl-resultados>\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_3==1 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"BalanceGeneralID\">\r\n                  <app-tabl-balance-general [balanceGeneral]=\"balanceGeneral\"></app-tabl-balance-general>\r\n\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_3==2 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"VentasID\">\r\n                  <app-tabl-ventas [ventas]=\"ventas\"></app-tabl-ventas>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_3==3 ? '' : 'tap_menu_hidden'}}\">\r\n                <div id=\"ProduccionID\">\r\n                  <app-tabl-costos [costosProduccion]=\"costoProduccion\"></app-tabl-costos>\r\n                </div>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_3==4 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <canvas id=\"lineChart\"></canvas>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"section_container {{tap_position==4 ? '' : 'tap_menu_hidden'}}\" style=\"background-color: #36A9E1;\">\r\n      <div class=\"section_container_body\">\r\n        <div class=\"section_title\">\r\n          <div class=\"material-icons section_title_icon\" style=\"background-color: #36A9E1;\">search</div>\r\n          <div class=\"section_title_desc\"> AN&#193;LISIS</div>\r\n        </div>\r\n        <div class=\"section_body\">\r\n          <div class=\"section_body_main\">\r\n            <div class=\"section_body_tab\">\r\n\r\n              <button (click)=\"produccionvsventas()\" class=\"section_body_tab_button  {{section_tap_4==0 ? '' : 'tap_selected'}}\">PRODUCCIÓN\r\n                VS\r\n                VENTAS</button>\r\n              <button (click)=\"costovsprecio()\" class=\"section_body_tab_button  {{section_tap_4==1 ? '' : 'tap_selected'}}\">COSTO\r\n                VS PRECIO</button>\r\n              <button (click)=\"capacidadvsproduccion()\" class=\"section_body_tab_button  {{section_tap_4==2 ? '' : 'tap_selected'}}\">CAPACIDAD\r\n                vs PRODUCCION</button>\r\n              <button (click)=\"companiavscompetencia()\" class=\"section_body_tab_button  {{section_tap_4==3 ? '' : 'tap_selected'}}\">COMPAÑIA\r\n                vs COMPETENCIA</button>\r\n              <button (click)=\"consejos()\" class=\"section_body_tab_button  {{section_tap_4==4 ? '' : 'tap_selected'}}\">CONSEJOS</button>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"section_body_container\">\r\n              <div class=\"section_body_content  {{section_tap_4==0 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <canvas id=\"lineChart2\"></canvas>\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_4==1 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <canvas id=\"lineChart3\"></canvas>\r\n\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_4==2 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <canvas id=\"lineChart4\"></canvas>\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_4==3 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <canvas id=\"lineChart5\"></canvas>\r\n\r\n              </div>\r\n              <div class=\"section_body_content  {{section_tap_4==4 ? '' : 'tap_menu_hidden'}}\" style=\"overflow: scroll;\">\r\n                <div id=\"consejosID\">\r\n\r\n                  <!-- <div *ngIf=\"ventas.inventarioUnidades > 50\">  -->\r\n                  <p *ngIf=\"generarConsejo1()\">Tus niveles de inventario estas creciendo. Te recomendamos idear\r\n                    estrategias para\r\n                    aumentar las ventas o disminuir sla producción.</p>\r\n                  <p *ngIf=\"generarConsejo2()\">Tu utilidad es muy baja. Te recomendamos idear estrategias para aumentar\r\n                    las ventas,\r\n                    aumentar ingresos o reducir los costos y gastos.</p>\r\n                  <p *ngIf=\"generarConsejo3()\">Tu % de mercado es muy bajo. Te recomendamos idear estrategias para\r\n                    aumentar las\r\n                    ventas y gasnar clientes.</p>\r\n                  <p *ngIf=\"generarConsejo4()\">Existe un gran porcentaje del mercado que no ha sido atendido. Te\r\n                    recomendamos idear\r\n                    estrategias para ganar clientes.</p>\r\n                  <!-- <p>Una empresa en el mercado cerró. Te aconsejamos idear estrategias para aumentar tu competitividad.</p>\r\n                <p *ngIf=\"generarConsejo1()==false&&generarConsejo2()==false&&generarConsejo3()==false&&generarConsejo4()==false\">Tus decisiones nos están llevando por buen camino, sigue así.</p> -->\r\n\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_9__);
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
    function TablaDeDecisionComponent(http, route) {
        this.http = http;
        this.route = route;
        //tab manager
        this.tap_position = 0;
        this.section_tap_1 = 0;
        this.section_tap_2 = 0;
        this.section_tap_3 = 0;
        this.section_tap_4 = 0;
        this.capitalPeriodoAnterior = 10000;
        this.bimestreInicial = new _models_bimestre__WEBPACK_IMPORTED_MODULE_5__["Bimestre"]();
        this.bimestreActual = new _models_bimestre__WEBPACK_IMPORTED_MODULE_5__["Bimestre"]();
        this.bimestres = [];
        this.costoProduccion = new _models_costosProduccion__WEBPACK_IMPORTED_MODULE_1__["CostosProduccion"]();
        this.ventas = new _models_ventas__WEBPACK_IMPORTED_MODULE_4__["Ventas"]();
        this.estadoResultados = [];
        this.balanceGeneral = new _models_balanceGeneral__WEBPACK_IMPORTED_MODULE_0__["BalanceGeneral"]();
        this.numeroBimestre = 0;
        this.produccion = new _models_produccion__WEBPACK_IMPORTED_MODULE_2__["Produccion"]();
        this.ventasIndustria = new _models_ventasIndustria__WEBPACK_IMPORTED_MODULE_3__["VentasIndustria"]();
        this.visionGeneral = [];
        this.capacidadProduccionIndustriaBimestres = [];
        this.ventasIndustriaBimestres = [];
        this.sumatoriaCapacidadProduccion = [];
        this.promedioPrecioUnitarios = [];
        this.promedioERUtilidadNeta = [];
    }
    TablaDeDecisionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['nombreEmpresa'] != null && params['codigo'] != null) {
                _this.nombreEmpresa = params['nombreEmpresa'];
                _this.codigo = params['codigo'];
            }
        });
        console.log(this.nombreEmpresa);
        console.log(this.codigo);
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
        //       this.cargarDatos();
        //     }
        //     else {
        //       console.log(response);
        //     }
        //   });
    };
    TablaDeDecisionComponent.prototype.actualizaProduccionIndustriaBimestres = function () {
        var _this = this;
        this.http.get('http://localhost:8080/produccion/PR' + this.nombreEmpresa + '' + this.codigo).subscribe(function (response) {
            console.log(response);
            _this.produccion = response;
        });
        if (this.produccion !== null && this.produccion !== undefined) {
            if (this.capacidadProduccionIndustriaBimestres.length > 0) {
                if (this.capacidadProduccionIndustriaBimestres[this.capacidadProduccionIndustriaBimestres.length - 1].numero != this.produccion.numero) {
                    this.capacidadProduccionIndustriaBimestres.push(this.produccion);
                }
            }
            else {
                this.capacidadProduccionIndustriaBimestres.push(this.produccion);
            }
        }
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
    TablaDeDecisionComponent.prototype.iniciar = function () {
        var _this = this;
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
        this.bimestreActual.nombreEmpresa = this.nombreEmpresa;
        this.bimestreActual.codigo = this.codigo;
        var json = JSON.stringify(this.bimestreActual);
        var params = 'json' + json;
        console.log(json);
        this.http.post('http://localhost:8080/bimestre', json).subscribe(function (response) {
            if (response.status == 201) {
                console.log('ok');
                _this.cargarDatos();
            }
            else {
                console.log(response);
            }
        });
        this.actualizaProduccionIndustriaBimestres();
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
    };
    TablaDeDecisionComponent.prototype.tanalisis = function () {
        this.tap_position = 2;
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
        this.tap_position = 3;
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
        this.tap_position = 4;
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
        this.produccionvsventas();
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
                labels: ["Bimestre 1", "Bimestre 2", "Bimestre 3"],
                datasets: [{
                        label: 'Produccion de la industria',
                        data: [],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "green",
                        backgroundColor: "green",
                        borderWidth: 1
                    },
                    {
                        label: 'Ventas de la industria (unidades)',
                        data: [],
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
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.actualizarVentasIndustriasBimestre();
        for (var i = 0; i < this.ventasIndustriaBimestres.length; i++) {
            //this.LineChart2.data.labels.push("Bimestre "+this.ventasIndustriaBimestres[i].numero);
            if (this.ventasIndustriaBimestres[i].ventasIndustriaUnidadesActual != 0) {
                this.LineChart2.data.datasets[1].data.push(this.ventasIndustriaBimestres[i].ventasIndustriaUnidadesActual);
                this.LineChart2.update();
            }
        }
        this.actualizaProduccionIndustriaBimestres();
        for (var i = 0; i < this.capacidadProduccionIndustriaBimestres.length; i++) {
            //this.LineChart2.data.labels.push("Bimestre "+this.capacidadProduccionIndustriaBimestres[i].numero);
            if (this.capacidadProduccionIndustriaBimestres[i].produccionIndustriaValorActual != 0) {
                this.LineChart2.data.datasets[0].data.push(this.capacidadProduccionIndustriaBimestres[i].produccionIndustriaValorActual);
                this.LineChart2.update();
            }
        }
    };
    TablaDeDecisionComponent.prototype.costovsprecio = function () {
        var _this = this;
        this.section_tap_4 = 1;
        this.http.get('http://localhost:8080/precioUnitarioBimestres/' + this.codigo).subscribe(function (response) {
            console.log(_this.codigo);
            console.log(response);
            _this.promedioPrecioUnitarios = response;
        });
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
                labels: ["Bimestre 1", "Bimestre 2", "Bimestre 3"],
                datasets: [{
                        label: 'Costo unitario de la industria (promedio)',
                        data: [],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "green",
                        backgroundColor: "green",
                        borderWidth: 1
                    }, {
                        label: 'Precio unitario de la industria (promedio)',
                        data: [],
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
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        for (var i = 0; i < this.promedioPrecioUnitarios.length; i++) {
            this.LineChart3.data.datasets[1].data.push(this.promedioPrecioUnitarios[i]);
            //this.LineChart3.data.labels.push("Bimestre "+(i+1));
            this.LineChart3.update();
        }
        this.actualizaProduccionIndustriaBimestres();
        for (var i = 0; i < this.capacidadProduccionIndustriaBimestres.length; i++) {
            //this.LineChart3.data.labels.push("Bimestre "+this.capacidadProduccionIndustriaBimestres[i].numero);
            if (this.capacidadProduccionIndustriaBimestres[i].costeMedioUnitarioActual != 0) {
                this.LineChart3.data.datasets[0].data.push(this.capacidadProduccionIndustriaBimestres[i].costeMedioUnitarioActual);
                this.LineChart3.update();
            }
        }
    };
    TablaDeDecisionComponent.prototype.capacidadvsproduccion = function () {
        var _this = this;
        this.section_tap_4 = 2;
        this.http.get('http://localhost:8080/produccionBimestres/' + this.codigo).subscribe(function (response) {
            console.log(_this.codigo);
            console.log(response);
            _this.sumatoriaCapacidadProduccion = response;
        });
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
                labels: ["Bimestre 1", "Bimestre 2", "Bimestre 3"],
                datasets: [{
                        label: 'Capacidad de producción de la industria',
                        data: [],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "green",
                        backgroundColor: "green",
                        borderWidth: 1
                    }, {
                        label: 'Produccion real de la industria',
                        data: [],
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
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        for (var i = 0; i < this.sumatoriaCapacidadProduccion.length; i++) {
            this.LineChart4.data.datasets[1].data.push(this.sumatoriaCapacidadProduccion[i]);
            //this.LineChart4.data.labels.push("Bimestre "+ (i+1));
            this.LineChart4.update();
        }
        this.actualizaProduccionIndustriaBimestres();
        for (var i = 0; i < this.capacidadProduccionIndustriaBimestres.length; i++) {
            //this.LineChart4.data.labels.push("Bimestre "+this.capacidadProduccionIndustriaBimestres[i].numero);
            if (this.capacidadProduccionIndustriaBimestres[i].costeMedioUnitarioActual != 0) {
                this.LineChart4.data.datasets[0].data.push(this.capacidadProduccionIndustriaBimestres[i].costeMedioUnitarioActual);
                this.LineChart4.update();
            }
        }
    };
    TablaDeDecisionComponent.prototype.companiavscompetencia = function () {
        var _this = this;
        this.section_tap_4 = 3;
        this.http.get('http://localhost:8080/utilidadNetaBimestres/' + this.codigo + '/' + this.nombreEmpresa).subscribe(function (response) {
            console.log(_this.codigo);
            console.log(response);
            _this.promedioERUtilidadNeta = response;
        });
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
                labels: ["Bimestre 1", "Bimestre 2", "Bimestre 3"],
                datasets: [{
                        label: 'Utilidad de la compañia',
                        data: [],
                        fill: false,
                        lineTension: 0.2,
                        borderColor: "green",
                        backgroundColor: "green",
                        borderWidth: 1
                    }, {
                        label: 'Utilidad promedio de la industria',
                        data: [],
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
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        for (var i = 0; i < this.promedioERUtilidadNeta.length; i++) {
            this.LineChart5.data.datasets[1].data.push(this.promedioERUtilidadNeta[i]);
            //this.LineChart5.data.labels.push("Bimestre "+(i+1));
            this.LineChart5.update();
        }
        for (var i = 0; i < this.estadoResultados.length; i++) {
            this.LineChart5.data.datasets[0].data.push(this.estadoResultados[i].utilidadNeta);
            //this.LineChart5.data.labels.push("Bimestre "+(i+1));
            this.LineChart5.update();
        }
    };
    TablaDeDecisionComponent.prototype.consejos = function () {
        var _this = this;
        this.section_tap_4 = 4;
        this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(function (response) {
            console.log(response);
            _this.visionGeneral = response;
        });
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
                labels: [],
                datasets: [{
                        label: 'Utilidad neta por bimestre',
                        data: [],
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
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
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
        var _this = this;
        this.section_tap_2 = 0;
        //cargar visionGeneral
        this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(function (response) {
            console.log(response);
            _this.visionGeneral = response;
        });
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
        var _this = this;
        this.section_tap_2 = 3;
        //cargar visionGeneral
        this.http.get('http://localhost:8080/visionGeneral/' + this.codigo + '/' + this.numeroBimestre).subscribe(function (response) {
            console.log(response);
            _this.visionGeneral = response;
        });
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
                    display: true
                }
            }
        });
        this.auxiliarMercadoSinAtender = 0;
        for (var i = 0; i < this.visionGeneral.length; i++) {
            this.myPieChart.data.labels.push(this.visionGeneral[i].nombreEmpresa);
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
        if (this.ventas.inventarioUnidades >= 50)
            return true;
        else
            return false;
    };
    TablaDeDecisionComponent.prototype.generarConsejo2 = function () {
        var indice = this.estadoResultados.length;
        if (this.estadoResultados.length > 0) {
            if (this.estadoResultados[indice - 1].utilidadNeta < 8000)
                return true;
            else
                return false;
        }
        else
            return false;
    };
    TablaDeDecisionComponent.prototype.generarConsejo3 = function () {
        for (var i = 0; i < this.visionGeneral.length; i++) {
            if (this.visionGeneral[i].nombreEmpresa === this.nombreEmpresa) {
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
    TablaDeDecisionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-tabla-de-decision',
            template: __webpack_require__(/*! ./tabla-de-decision.component.html */ "./src/app/tabla-de-decision/tabla-de-decision.component.html"),
            styles: [__webpack_require__(/*! ./tabla-de-decision.component.css */ "./src/app/tabla-de-decision/tabla-de-decision.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
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

module.exports = "#main-container{\r\n\r\n    margin: 7px;\r\n  \r\n      width: 80%;\r\n      color: black;\r\n  \r\n  }\r\n  \r\n  table{\r\n  \r\n    font-family: \"arial\";\r\n    font-size: 14px;\r\n      background-color: white;\r\n      text-align: left;\r\n      border-collapse: collapse;\r\n      width: 120%;\r\n  \r\n  \r\n  \r\n  }\r\n  \r\n  /*\r\n  thead{\r\n      background-color: #0064FF;\r\n      border-bottom: solid 5px #4c92ff;\r\n      color: white;\r\n  \r\n  }*/\r\n  \r\n  tr{\r\n      border-color:black;\r\n  }\r\n  \r\n  table,th{\r\n      border: 2px solid black;\r\n  }\r\n  \r\n  table td + td {\r\n      border-left:2px solid black;\r\n  }\r\n  \r\n  th{\r\n      text-align:center;\r\n  }\r\n  \r\n  #itemTipoNum{\r\n      padding-left: 4%;\r\n  }\r\n  \r\n  #subItemTipo1{\r\n      padding-left: 5%\r\n  }\r\n  \r\n  #subItemTipo2{\r\n      padding-left: 8%\r\n  }\r\n  \r\n  /*\r\n  tr:nth-child(even){\r\n  background-color:  #ddd;\r\n  }*/\r\n  \r\n  tr:hover td{\r\n      background-color: #4c92ff;\r\n    color: white;\r\n  }\r\n  \r\n  th{\r\n    background-color:  rgb(24, 76, 133);\r\n    width: 35px;\r\n    height: 45px;\r\n    color: #fff;\r\n     }\r\n  \r\n  td{\r\n      height: 45px;\r\n      width: 28px;\r\n      text-align: center;\r\n  }\r\n  \r\n  .td2{\r\n      background-color:#81BEF7;\r\n  }"

/***/ }),

/***/ "./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-produccion/tabla-produccion.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n    <table id=\"success\">\r\n            <thead>\r\n              <tr>\r\n                  <th >DETALLE</th>\r\n                  <th >VALORES</th>\r\n                  <th >% VARIACIÓN</th>\r\n              </tr>\r\n            </thead>\r\n\r\n            <tbody >\r\n              <tr>\r\n                <td >PRODUCCIÓN DE LA INDUSTRIA</td>\r\n                <td >{{produccion.produccionIndustriaValorActual}}</td>\r\n                <td>{{(produccion.produccionIndustriaValorActual-produccion.produccionIndustriaValorAnterior)/produccion.produccionIndustriaValorAnterior*100}} %</td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td class=\"td2\">COSTE MEDIO DE PRODUCCIÓN (TOTAL)</td>\r\n                <td class=\"td2\">{{produccion.costeMedioTotalActual}}</td>\r\n                <td class=\"td2\">{{(produccion.costeMedioTotalActual-produccion.costeMedioTotalAnterior)/produccion.costeMedioTotalAnterior*100}} %</td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td >COSTE MEDIO DE PRODUCCIÓN (UNITARIO)</td>\r\n                <td >{{produccion.costeMedioUnitarioActual}}</td>\r\n                <td>{{(produccion.costeMedioUnitarioActual-produccion.costeMedioUnitarioAnterior)/produccion.costeMedioUnitarioAnterior*100}}%</td>\r\n              </tr>\r\n\r\n              <tr >\r\n                <td class=\"td2\">CAPACIDAD DE PRODUCCIÓN</td>\r\n                <td class=\"td2\">{{850+50*produccion.numero}}</td>\r\n                <td class=\"td2\">{{((850+50*produccion.numero)-(850+50*(produccion.numero-1)))/(850+50*(produccion.numero-1))*100}}%</td>\r\n              </tr>\r\n\r\n            </tbody>\r\n      </table>\r\n\r\n  </div>\r\n\r\n"

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
    }
    TablaProduccionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _models_produccion__WEBPACK_IMPORTED_MODULE_0__["Produccion"])
    ], TablaProduccionComponent.prototype, "produccion", void 0);
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

module.exports = "#main-container{\r\n\r\n    margin: 7px;\r\n  \r\n      width: 80%;\r\n      color: black;\r\n  \r\n  }\r\n  \r\n  table{\r\n  \r\n    font-family: \"arial\";\r\n    font-size: 16px;\r\n      background-color: white;\r\n      text-align: left;\r\n      border-collapse: collapse;\r\n      width: 120%;\r\n  \r\n  \r\n  \r\n  }\r\n  \r\n  /*\r\n  thead{\r\n      background-color: #0064FF;\r\n      border-bottom: solid 5px #4c92ff;\r\n      color: white;\r\n  \r\n  }*/\r\n  \r\n  tr{\r\n      border-color:black;\r\n  }\r\n  \r\n  table,th{\r\n      border: 2px solid black;\r\n  }\r\n  \r\n  table td + td {\r\n      border-left:2px solid black;\r\n  }\r\n  \r\n  th{\r\n      text-align:center;\r\n  }\r\n  \r\n  #itemTipoNum{\r\n      padding-left: 4%;\r\n  }\r\n  \r\n  #subItemTipo1{\r\n      padding-left: 5%\r\n  }\r\n  \r\n  #subItemTipo2{\r\n      padding-left: 8%\r\n  }\r\n  \r\n  /*\r\n  tr:nth-child(even){\r\n  background-color:  #ddd;\r\n  }*/\r\n  \r\n  tr:hover td{\r\n      background-color: #4c92ff;\r\n    color: white;\r\n  }\r\n  \r\n  th{\r\n    background-color:  rgb(24, 76, 133);\r\n    width: 28px;\r\n    height: 45px;\r\n    color: #fff;\r\n    \r\n  }\r\n  \r\n  td{\r\n    height: 45px;\r\n    width: 28px;\r\n    text-align: center;\r\n}\r\n  \r\n  .td2{\r\n  background-color:   #81BEF7\r\n}"

/***/ }),

/***/ "./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-ventas/tabla-ventas.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n    <table id=\"success\">\r\n            <thead>\r\n              <tr>\r\n                  <th >DETALLE</th>\r\n                  <th >BIMESTRE</th>\r\n                  <th >% VARIACIÓN</th>\r\n              </tr>\r\n            </thead>\r\n\r\n            <tbody >\r\n              <tr>\r\n                <td >VENTAS DE LA INDUSTRIA (UNIDADES)</td>\r\n                <td >{{ventasIndustria.ventasIndustriaUnidadesActual}}</td>\r\n                <td >{{(ventasIndustria.ventasIndustriaUnidadesActual-ventasIndustria.ventasIndustriaUnidadesAnterior)/ventasIndustria.ventasIndustriaUnidadesAnterior*100}} %</td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td class=\"td2\">VENTAS DE LA INDUSTRIA (MONETARIO)</td>\r\n                <td class=\"td2\">{{ventasIndustria.ventasIndustriaMonetarioActual}}</td>\r\n                <td class=\"td2\">{{(ventasIndustria.ventasIndustriaMonetarioActual-ventasIndustria.ventasIndustriaMonetarioAnterior)/ventasIndustria.ventasIndustriaMonetarioAnterior*100}} %</td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <td >PRECIO UNITARIO PROMEDIO</td>\r\n                <td >{{ventasIndustria.precioUnitarioPromedioActual}}</td>\r\n                <td >{{(ventasIndustria.precioUnitarioPromedioActual-ventasIndustria.precioUnitarioPromedioAnterior)/ventasIndustria.precioUnitarioPromedioAnterior*100}} %</td>\r\n\r\n              </tr>\r\n\r\n              <tr >\r\n                <td class=\"td2\">INVENTARIOS PROMEDIO</td>\r\n                <td class=\"td2\">{{ventasIndustria.inventarioPromediosActual}}</td>\r\n                <td class=\"td2\">{{(ventasIndustria.inventarioPromediosActual-ventasIndustria.invetarioPromediosAnterior)/ventasIndustria.invetarioPromediosAnterior*100}} %</td>\r\n\r\n              </tr>\r\n\r\n            </tbody>\r\n      </table>\r\n\r\n  </div>\r\n"

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

module.exports = "#main-container{\r\n\r\n    margin: 7px;\r\n  \r\n      width: 80%;\r\n      color: black;\r\n  \r\n  }\r\n  \r\n  table{\r\n  \r\n    font-family: \"arial\";\r\n    font-size: 14px;\r\n      background-color: white;\r\n      text-align: left;\r\n      border-collapse: collapse;\r\n      width: 120%;\r\n  \r\n  \r\n  \r\n  }\r\n  \r\n  thead{\r\n      background-color: #0064FF;\r\n      border-bottom: solid 5px #4c92ff;\r\n      color: white;\r\n  \r\n  }\r\n  \r\n  tr{\r\n      border-color:black;\r\n  }\r\n  \r\n  table,th{\r\n      border: 2px solid black;\r\n  }\r\n  \r\n  table td + td {\r\n      border-left:2px solid black;\r\n  }\r\n  \r\n  th{\r\n      text-align:center;\r\n  }\r\n  \r\n  #itemTipoNum{\r\n      padding-left: 4%;\r\n  }\r\n  \r\n  #subItemTipo1{\r\n      padding-left: 5%\r\n  }\r\n  \r\n  #subItemTipo2{\r\n      padding-left: 8%\r\n  }\r\n  \r\n  /*\r\n  tr:nth-child(even){\r\n  background-color:  #ddd;\r\n  }*/\r\n  \r\n  tr:hover td{\r\n      background-color: #81BEF7;\r\n      color: white;\r\n    \r\n  }\r\n  \r\n  th{\r\n    background-color:  rgb(24, 76, 133);\r\n    width: 28px;\r\n    height: 45px;\r\n    color: #fff;\r\n  }\r\n  \r\n  td{\r\n    height: 45px;\r\n    width: 28px;\r\n    \r\n}\r\n"

/***/ }),

/***/ "./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/tablas-AI/tabla-vision-general/tabla-vision-general.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\r\n    <table id=\"success\">\r\n            <thead>\r\n              <tr>\r\n                <th >COMPAÑIA</th>\r\n                <th >VENTAS</th>\r\n                <th >BENEFICIO</th>\r\n                <th>PRECIO U.</th>\r\n                <th>% MERCADO</th>\r\n              </tr>\r\n            </thead>\r\n\r\n            <tbody >\r\n              <td><tr *ngFor=\"let visionG of visionGeneral\">{{visionG.nombreEmpresa}}</tr></td>\r\n              <td><tr *ngFor=\"let visionG of visionGeneral\">{{visionG.ventas}}</tr></td>\r\n              <td><tr *ngFor=\"let visionG of visionGeneral\">{{visionG.beneficio}}</tr></td>\r\n              <td><tr *ngFor=\"let visionG of visionGeneral\">{{visionG.precioUnitario}}</tr></td>\r\n              <td><tr *ngFor=\"let visionG of visionGeneral\">{{visionG.porcentajeDeMercado}} %</tr></td>\r\n              <tr>\r\n                <td colspan=\"4\">MERCADO DESATENDIDO</td>\r\n                <td>{{sumatoriasTotales()}}{{mercadoDesatendido}} %</td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{sumatoriasTotales()}}TOTALES</td>\r\n                <td>{{totalesVentas}}</td>\r\n                <td>{{totalesBeneficio}}</td>\r\n                <td>PROM. {{totalesPrecioUnitario}}</td>\r\n                <td>{{totalesPorcentajeMercado}} %</td>\r\n              </tr>\r\n            </tbody>\r\n      </table>\r\n\r\n  </div>\r\n\r\n"

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
    function TablaVisionGeneralComponent() {
        this.totalesVentas = 0;
        this.totalesBeneficio = 0;
        this.totalesPrecioUnitario = 0;
        this.totalesPorcentajeMercado = 0;
        this.mercadoDesatendido = 0;
    }
    TablaVisionGeneralComponent.prototype.ngOnInit = function () {
        /*for(let i=0; i<this.visionGeneral.length; i++)
       {
           this.totalesVentas+=this.visionGeneral[i].ventas;
           this.totalesBeneficio+=this.visionGeneral[i].beneficio;
           this.totalesPrecioUnitario+=this.visionGeneral[i].precioUnitario;
           this.totalesPorcentajeMercado+=this.visionGeneral[i].porcentajeDeMercado;
       }*/
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
        __metadata("design:paramtypes", [])
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

module.exports = "#main-containerBalance{\r\n\r\n\tmargin: 7px;\r\n    width: auto;\r\n\tcolor: black;\r\n\r\n\r\n\r\n\r\n}\r\n\r\ntable{\r\n  font-family: \"arial\";\r\n  font-size: 14px;\r\n  background-color: white;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\nth, td{\r\n\tpadding: 5px;\r\n}\r\n\r\nthead{\r\n\tbackground-color: #0064FF;\r\n\tborder-bottom: solid 5px #4c92ff;\r\n\tcolor: white;\r\n\r\n}\r\n\r\nth{\r\n\r\n\tfont-size: 14px;\r\n\tborder-style:solid solid solid solid;\r\n\ttext-align:center;\r\n}\r\n\r\ntable,th {\r\n    border: 2px solid black;\r\n}\r\n\r\n#primero-Izq{\r\n\tborder-style:solid hidden hidden solid;\r\n}\r\n\r\n#medio-Izq{\r\n\tborder-style:hidden hidden hidden solid;\r\n}\r\n\r\n#ultimo-Izq{\r\n\tborder-style:hidden hidden solid solid;\r\n}\r\n\r\n#ultimo-Izq-Final{\r\n\tborder-style:solid hidden solid solid;\r\n}\r\n\r\n#pintar{\r\n\tbackground-color:rgb(0, 197, 245);\r\n\tborder-style:solid solid solid solid;\r\n}\r\n\r\n/*\r\ntr:nth-child(even){\r\nbackground-color:  #ddd;\r\n}\r\n/* preguntar si se queda*/\r\n\r\ntr:hover td{\r\n\tbackground-color: #4c92ff;\r\n\tcolor: white;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/tables/tabl-balance-general/tabl-balance-general.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/tables/tabl-balance-general/tabl-balance-general.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-containerBalance\">\r\n  <table id=\"success\">\r\n    <tbody>\r\n        <tr>\r\n                <th colspan=\"4\">Activo</th>\r\n                <th colspan=\"4\">Pasivo</th>\r\n\r\n            </tr>\r\n\r\n\r\n          <tr>\r\n              <td colspan=\"4\"></td>\r\n              <td id=\"primero-Izq\">Corriente</td>\r\n              <td colspan=\"2\"></td>\r\n              <td> 0</td>\r\n          </tr>\r\n\r\n              <td>Corriente</td>\r\n              <td colspan=\"2\"></td>\r\n              <td>{{balanceGeneral.corriente}}</td>\r\n              <td id=\"medio-Izq\"></td>\r\n              <td>Cuenta por Cobrar</td>\r\n              <td>0</td>\r\n              <td></td>\r\n\r\n\r\n\r\n\r\n            <tr>\r\n\r\n            </tr>\r\n            <tr>\r\n              <td></td>\r\n              <td>Caja</td>\r\n              <td>{{balanceGeneral.caja}}</td>\r\n              <td></td>\r\n              <td id=\"medio-Izq\">no corriente</td>\r\n              <td colspan=\"2\"></td>\r\n              <td>1300</td>\r\n\r\n            </tr>\r\n            <tr>\r\n              <td></td>\r\n              <td>Bancos</td>\r\n              <td>{{balanceGeneral.bancos}}</td>\r\n              <td></td>\r\n              <td id=\"medio-Izq\"></td>\r\n              <td>Alquiler</td>\r\n              <td>1300</td>\r\n              <td></td>\r\n\r\n            </tr>\r\n\r\n              <tr>\r\n              <td></td>\r\n              <td>Inventario</td>\r\n              <td>{{balanceGeneral.inventario}}</td>\r\n              <td></td>\r\n              <td id=\"ultimo-Izq\">Total pasivo</td>\r\n              <td colspan=\"2\" id=\"ultimo\"></td>\r\n              <td>1300</td>\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>No corriente</td>\r\n              <td colspan=\"2\"></td>\r\n              <td>8.500</td>\r\n              <th colspan=\"4\">Patrimonio</th>\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n              <td></td>\r\n              <td>Herramientas</td>\r\n              <td>1500</td>\r\n              <td></td>\r\n              <td id=\"primero-Izq\">Capital</td>\r\n              <td colspan=\"2\"></td>\r\n              <td>{{balanceGeneral.capital}}</td>\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n              <td></td>\r\n              <td>Maquinaria</td>\r\n              <td>7.000</td>\r\n              <td></td>\r\n              <td id=\"medio-Izq\">Utilidad del ejercicio</td>\r\n              <td colspan=\"2\"></td>\r\n              <td>{{balanceGeneral.utilidadEjercicio}}</td>\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n              <td colspan=\"4\"></td>\r\n              <td id=\"ultimo-Izq\">Total patrimonio</td>\r\n              <td colspan=\"2\"></td>\r\n              <td>{{balanceGeneral.totalPatrimonio}}</td>\r\n\r\n            </tr>\r\n\r\n            <tr id=\"pintar\">\r\n              <td>Total activos</td>\r\n              <td></td>\r\n              <td></td>\r\n              <td>{{balanceGeneral.totalActivos}}</td>\r\n              <td id=\"ultimo-Izq-Final\">Total pasivo + patrimonio</td>\r\n              <td colspan=\"2\"></td>\r\n              <td>{{balanceGeneral.totalPasivoPatrimonio}}</td>\r\n\r\n            </tr>\r\n\r\n            </tbody>\r\n        </table>\r\n      </div>\r\n"

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

module.exports = "#main-containerCostos{\r\n\r\n\tmargin: 7px;\r\n    width: auto;\r\n\tcolor: black;\r\n\r\n\r\n\r\n\r\n}\r\n\r\ntable{\r\n  font-family: \"arial\";\r\n  font-size: 14px;\r\n  background-color: white;\r\n  text-align: left;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n\r\n\r\n}\r\n\r\nth, td{\r\n\tpadding: 5px;\r\n}\r\n\r\nthead{\r\n\tbackground-color: #0064FF;\r\n\tborder-bottom: solid 5px #4c92ff;\r\n\tcolor: white;\r\n\r\n}\r\n\r\nth{\r\n\tbackground-color: rgb(0, 197, 245);\r\n}\r\n\r\n#subItemTipo1{\r\n\tpadding-left:10%;\r\n}\r\n\r\n/*tr:nth-child(even){\r\nbackground-color:  #ddd;\r\n}\r\n*/\r\n\r\n/*preguntar si se queda*/\r\n\r\ntr:hover td{\r\n\tbackground-color: #4c92ff;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/tables/tabl-costos/tabl-costos.component.html":
/*!***************************************************************!*\
  !*** ./src/app/tables/tabl-costos/tabl-costos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-containerCostos\">\r\n  <table>\r\n    <tbody>\r\n            <tr>\r\n                <th colspan=\"7\">MATERIA PRIMA</th>\r\n                <th>{{costosProduccion.materiaPrima}}</th>\r\n            </tr>\r\n\r\n\r\n            <tr>\r\n              <td></td>\r\n              <td id=\"subItemTipo1\">poleras basicas (35 la unidad)</td>\r\n              <td colspan=\"4\"></td>\r\n              <td>{{costosProduccion.materiaPrima}}</td>\r\n              <td></td>\r\n\r\n            </tr>\r\n            <tr>\r\n                <th colspan=\"7\">MANO DE OBRA DIRECTA</th>\r\n                <th>8.000</th>\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n              <td></td>\r\n              <td id=\"subItemTipo1\">sueldos</td>\r\n              <td colspan=\"4\"></td>\r\n              <td>6000</td>\r\n              <td></td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td></td>\r\n              <td id=\"subItemTipo1\">beneficios sociales</td>\r\n              <td colspan=\"4\"></td>\r\n              <td>2.000</td>\r\n              <td></td>\r\n\r\n            </tr>\r\n\r\n              <tr>\r\n              <th colspan=\"7\">COSTOS INDIRECTOS</th>\r\n              <th>22.770</th>\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n  \t\t\t      <td></td>\r\n              <td id=\"subItemTipo1\">material indirecto</td>\r\n              <td colspan=\"4\"></td>\r\n              <td>5.000</td>\r\n              <td></td>\r\n\r\n            </tr>\r\n\r\n\r\n            <tr>\r\n\r\n              <td colspan=\"2\"></td>\r\n              <td>  insumos</td>\r\n              <td colspan=\"2\"></td>\r\n              <td>5.000</td>\r\n              <td colspan=\"2\"></td>\r\n\r\n\r\n            </tr>\r\n\r\n\r\n            <tr>\r\n              <td></td>\r\n              <td id=\"subItemTipo1\">mano de obra indirecto</td>\r\n              <td colspan=\"4\"></td>\r\n              <td>16.120</td>\r\n              <td></td>\r\n\r\n            </tr>\r\n\r\n\r\n            <tr>\r\n              <td colspan=\"2\"></td>\r\n              <td>sueldos</td>\r\n              <td colspan=\"2\"></td>\r\n              <td>12.000</td>\r\n              <td colspan=\"2\"></td>\r\n\r\n            </tr>\r\n\r\n\r\n            <tr>\r\n\r\n              <td colspan=\"2\"></td>\r\n              <td>beneficios sociales</td>\r\n              <td colspan=\"2\"></td>\r\n              <td>4.120</td>\r\n              <td colspan=\"2\"></td>\r\n\r\n            </tr>\r\n\r\n\r\n            <tr>\r\n\r\n              <td></td>\r\n              <td id=\"subItemTipo1\">depreciación maquinaria</td>\r\n              <td colspan=\"4\"></td>\r\n              <td>150</td>\r\n              <td></td>\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n              <td></td>\r\n              <td id=\"subItemTipo1\">servicios</td>\r\n              <td colspan=\"4\"></td>\r\n              <td>200</td>\r\n              <td></td>\r\n\r\n\r\n            </tr>\r\n\r\n            <tr>\r\n\r\n              <td></td>\r\n              <td id=\"subItemTipo1\">alquiler</td>\r\n              <td colspan=\"4\"></td>\r\n              <td>1.300</td>\r\n              <td></td>\r\n            </tr>\r\n\r\n            <tr>\r\n                <th colspan=\"7\">COSTO TOTAL</th>\r\n                <th>{{costosProduccion.costoTotal}}</th>\r\n\r\n            </tr>\r\n            <tr>\r\n                <th colspan=\"7\">COSTO UNITARIO</th>\r\n                <th>{{costosProduccion.costoUnitario}}</th>\r\n\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n"

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

module.exports = "#main-containerVentas{\r\n\t\r\n\tmargin: 7px;\r\n    width: 100%;\r\n\tcolor: black;\r\n}\r\n\r\ntable{\r\n\tfont-family: \"arial\";\r\n\tbackground-color: white;\r\n\ttext-align: left;\r\n\tborder-collapse: collapse;\r\n\twidth: 100%;\r\n\tfont-size: 14px;\r\n}\r\n\r\ntable,th {\r\n    border: 2px solid black;\r\n}\r\n\r\ntable td + td {\r\n\tborder-left:2px solid black;\r\n}\r\n\r\nth,td{\r\n\tpadding: 5px;\r\n}\r\n\r\n/*\r\nthead{\r\n\tbackground-color: #0064FF;\r\n\tborder-bottom: solid 5px #4c92ff;\r\n\tcolor: white;\r\n\r\n}\r\n*/\r\n\r\ntr:nth-child(even){\r\nbackground-color:  rgb(0, 197, 245);\r\n}\r\n\r\n/*esto no se pidio, preguntar si dejarlo*/\r\n\r\ntr:hover td{\r\n\tbackground-color: #4c92ff;\r\n\tcolor: white;\r\n}\r\n\r\nth{\r\n\ttext-align:center;\r\n\tfont-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/tables/tabl-ventas/tabl-ventas.component.html":
/*!***************************************************************!*\
  !*** ./src/app/tables/tabl-ventas/tabl-ventas.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-containerVentas\">\r\n  <table>\r\n          <thead>\r\n            <tr>\r\n                <th>DETALLE</th>\r\n                <th>UNIDADES</th>\r\n                <th>MONETARIO</th>\r\n\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr>\r\n              <td>PRODUCIDO</td>\r\n              <td>{{ventas.producidoUnidades}}</td>\r\n              <td>{{ventas.producidoMonetario}}</td>\r\n\r\n            </tr>\r\n            <tr>\r\n              <td>VENTAS REALIZADAS</td>\r\n              <td>{{ventas.ventasRealizadasUnidades}}</td>\r\n              <td>{{ventas.ventasRealizadasMonetario}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>INVENTARIO</td>\r\n              <td>{{ventas.inventarioUnidades}}</td>\r\n              <td>{{ventas.inventarioMonetario}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>PEDIDOS NO ATENDIDOS</td>\r\n              <td>{{ventas.pedidosNoAtendidosUnidades}}</td>\r\n              <td>{{ventas.pedidosNoAtendidosMonetario}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n</div>\r\n"

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
        this.nombreEmpresa = '';
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
        this.manoDeObraDirecta = 8000;
        this.costosIndirectos = 22770;
        this.costoTotal = 48270;
        this.costoUnitario = 94.54;
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
        this.cantidadJugadores = 1;
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
        this.numero = 0;
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
    function HttpService(http) {
        this.http = http;
        this.baseUrl = '';
    }
    HttpService.prototype.get = function (url) {
        return this.http.get(encodeURI(this.baseUrl + url)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(handleError));
    };
    HttpService.prototype.post = function (url, params) {
        var cpHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: cpHeaders });
        return this.http.post(encodeURI(this.baseUrl + url), params, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(handleError));
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HttpService);
    return HttpService;
}());

function handleError(error) {
    // alert('An error occurred:\n' + error);
    // console.error('An error occurred: ', error);
    return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\BS-temporal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map