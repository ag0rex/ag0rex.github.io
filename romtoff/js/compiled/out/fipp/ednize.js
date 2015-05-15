// Compiled by ClojureScript 0.0-3211 {}
goog.provide('fipp.ednize');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * Perform a shallow conversion to an Edn data structure.
 */
fipp.ednize.IEdn = (function (){var obj24792 = {};
return obj24792;
})();

fipp.ednize._edn = (function fipp$ednize$_edn(x){
if((function (){var and__18104__auto__ = x;
if(and__18104__auto__){
return x.fipp$ednize$IEdn$_edn$arity$1;
} else {
return and__18104__auto__;
}
})()){
return x.fipp$ednize$IEdn$_edn$arity$1(x);
} else {
var x__18752__auto__ = (((x == null))?null:x);
return (function (){var or__18116__auto__ = (fipp.ednize._edn[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (fipp.ednize._edn["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IEdn.-edn",x);
}
}
})().call(null,x);
}
});

fipp.ednize.boolean_QMARK_ = (function fipp$ednize$boolean_QMARK_(x){
return (x === true) || (x === false);
});
fipp.ednize.pattern_QMARK_ = (function fipp$ednize$pattern_QMARK_(x){
return (x instanceof RegExp);
});
fipp.ednize.tagged_literal = (function fipp$ednize$tagged_literal(tag,rep){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fipp.ednize","TAGGED","fipp.ednize/TAGGED",-503894759),tag,rep], null);
});
fipp.ednize.record__GT_tagged = (function fipp$ednize$record__GT_tagged(x){
return fipp.ednize.tagged_literal.call(null,clojure.string.split.call(null,cljs.core.pr_str.call(null,cljs.core.type.call(null,x)),/\//,(2)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});

//# sourceMappingURL=ednize.js.map?rel=1431292024011