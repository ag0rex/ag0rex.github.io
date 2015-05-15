// Compiled by ClojureScript 0.0-3211 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__18116__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__18116__auto__){
return or__18116__auto__;
} else {
var G__25274 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__25274) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__25277 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__25277) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25281){
var vec__25282 = p__25281;
var k = cljs.core.nth.call(null,vec__25282,(0),null);
var v = cljs.core.nth.call(null,vec__25282,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__18116__auto__ = React.isValidElement;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 * argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__25284 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__25284,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__25284,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(){
var G__25288 = arguments.length;
switch (G__25288) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq25285){
var G__25286 = cljs.core.first.call(null,seq25285);
var seq25285__$1 = cljs.core.next.call(null,seq25285);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__25286,seq25285__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);

om_tools.dom.abbr = (function om_tools$dom$abbr(){
var G__25292 = arguments.length;
switch (G__25292) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq25289){
var G__25290 = cljs.core.first.call(null,seq25289);
var seq25289__$1 = cljs.core.next.call(null,seq25289);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__25290,seq25289__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.address = (function om_tools$dom$address(){
var G__25296 = arguments.length;
switch (G__25296) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq25293){
var G__25294 = cljs.core.first.call(null,seq25293);
var seq25293__$1 = cljs.core.next.call(null,seq25293);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__25294,seq25293__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);

om_tools.dom.area = (function om_tools$dom$area(){
var G__25300 = arguments.length;
switch (G__25300) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq25297){
var G__25298 = cljs.core.first.call(null,seq25297);
var seq25297__$1 = cljs.core.next.call(null,seq25297);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__25298,seq25297__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);

om_tools.dom.article = (function om_tools$dom$article(){
var G__25304 = arguments.length;
switch (G__25304) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq25301){
var G__25302 = cljs.core.first.call(null,seq25301);
var seq25301__$1 = cljs.core.next.call(null,seq25301);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__25302,seq25301__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);

om_tools.dom.aside = (function om_tools$dom$aside(){
var G__25308 = arguments.length;
switch (G__25308) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq25305){
var G__25306 = cljs.core.first.call(null,seq25305);
var seq25305__$1 = cljs.core.next.call(null,seq25305);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__25306,seq25305__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);

om_tools.dom.audio = (function om_tools$dom$audio(){
var G__25312 = arguments.length;
switch (G__25312) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq25309){
var G__25310 = cljs.core.first.call(null,seq25309);
var seq25309__$1 = cljs.core.next.call(null,seq25309);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__25310,seq25309__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);

om_tools.dom.b = (function om_tools$dom$b(){
var G__25316 = arguments.length;
switch (G__25316) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq25313){
var G__25314 = cljs.core.first.call(null,seq25313);
var seq25313__$1 = cljs.core.next.call(null,seq25313);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__25314,seq25313__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);

om_tools.dom.base = (function om_tools$dom$base(){
var G__25320 = arguments.length;
switch (G__25320) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq25317){
var G__25318 = cljs.core.first.call(null,seq25317);
var seq25317__$1 = cljs.core.next.call(null,seq25317);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__25318,seq25317__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdi = (function om_tools$dom$bdi(){
var G__25324 = arguments.length;
switch (G__25324) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq25321){
var G__25322 = cljs.core.first.call(null,seq25321);
var seq25321__$1 = cljs.core.next.call(null,seq25321);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__25322,seq25321__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);

om_tools.dom.bdo = (function om_tools$dom$bdo(){
var G__25328 = arguments.length;
switch (G__25328) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq25325){
var G__25326 = cljs.core.first.call(null,seq25325);
var seq25325__$1 = cljs.core.next.call(null,seq25325);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__25326,seq25325__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);

om_tools.dom.big = (function om_tools$dom$big(){
var G__25332 = arguments.length;
switch (G__25332) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq25329){
var G__25330 = cljs.core.first.call(null,seq25329);
var seq25329__$1 = cljs.core.next.call(null,seq25329);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__25330,seq25329__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);

om_tools.dom.blockquote = (function om_tools$dom$blockquote(){
var G__25336 = arguments.length;
switch (G__25336) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq25333){
var G__25334 = cljs.core.first.call(null,seq25333);
var seq25333__$1 = cljs.core.next.call(null,seq25333);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__25334,seq25333__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);

om_tools.dom.body = (function om_tools$dom$body(){
var G__25340 = arguments.length;
switch (G__25340) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq25337){
var G__25338 = cljs.core.first.call(null,seq25337);
var seq25337__$1 = cljs.core.next.call(null,seq25337);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__25338,seq25337__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);

om_tools.dom.br = (function om_tools$dom$br(){
var G__25344 = arguments.length;
switch (G__25344) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq25341){
var G__25342 = cljs.core.first.call(null,seq25341);
var seq25341__$1 = cljs.core.next.call(null,seq25341);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__25342,seq25341__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);

om_tools.dom.button = (function om_tools$dom$button(){
var G__25348 = arguments.length;
switch (G__25348) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq25345){
var G__25346 = cljs.core.first.call(null,seq25345);
var seq25345__$1 = cljs.core.next.call(null,seq25345);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__25346,seq25345__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);

om_tools.dom.canvas = (function om_tools$dom$canvas(){
var G__25352 = arguments.length;
switch (G__25352) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq25349){
var G__25350 = cljs.core.first.call(null,seq25349);
var seq25349__$1 = cljs.core.next.call(null,seq25349);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__25350,seq25349__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);

om_tools.dom.caption = (function om_tools$dom$caption(){
var G__25356 = arguments.length;
switch (G__25356) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq25353){
var G__25354 = cljs.core.first.call(null,seq25353);
var seq25353__$1 = cljs.core.next.call(null,seq25353);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__25354,seq25353__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);

om_tools.dom.cite = (function om_tools$dom$cite(){
var G__25360 = arguments.length;
switch (G__25360) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq25357){
var G__25358 = cljs.core.first.call(null,seq25357);
var seq25357__$1 = cljs.core.next.call(null,seq25357);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__25358,seq25357__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);

om_tools.dom.code = (function om_tools$dom$code(){
var G__25364 = arguments.length;
switch (G__25364) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq25361){
var G__25362 = cljs.core.first.call(null,seq25361);
var seq25361__$1 = cljs.core.next.call(null,seq25361);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__25362,seq25361__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);

om_tools.dom.col = (function om_tools$dom$col(){
var G__25368 = arguments.length;
switch (G__25368) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq25365){
var G__25366 = cljs.core.first.call(null,seq25365);
var seq25365__$1 = cljs.core.next.call(null,seq25365);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__25366,seq25365__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);

om_tools.dom.colgroup = (function om_tools$dom$colgroup(){
var G__25372 = arguments.length;
switch (G__25372) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq25369){
var G__25370 = cljs.core.first.call(null,seq25369);
var seq25369__$1 = cljs.core.next.call(null,seq25369);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__25370,seq25369__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.data = (function om_tools$dom$data(){
var G__25376 = arguments.length;
switch (G__25376) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq25373){
var G__25374 = cljs.core.first.call(null,seq25373);
var seq25373__$1 = cljs.core.next.call(null,seq25373);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__25374,seq25373__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);

om_tools.dom.datalist = (function om_tools$dom$datalist(){
var G__25380 = arguments.length;
switch (G__25380) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq25377){
var G__25378 = cljs.core.first.call(null,seq25377);
var seq25377__$1 = cljs.core.next.call(null,seq25377);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__25378,seq25377__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);

om_tools.dom.dd = (function om_tools$dom$dd(){
var G__25384 = arguments.length;
switch (G__25384) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq25381){
var G__25382 = cljs.core.first.call(null,seq25381);
var seq25381__$1 = cljs.core.next.call(null,seq25381);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__25382,seq25381__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);

om_tools.dom.del = (function om_tools$dom$del(){
var G__25388 = arguments.length;
switch (G__25388) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq25385){
var G__25386 = cljs.core.first.call(null,seq25385);
var seq25385__$1 = cljs.core.next.call(null,seq25385);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__25386,seq25385__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);

om_tools.dom.dfn = (function om_tools$dom$dfn(){
var G__25392 = arguments.length;
switch (G__25392) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq25389){
var G__25390 = cljs.core.first.call(null,seq25389);
var seq25389__$1 = cljs.core.next.call(null,seq25389);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__25390,seq25389__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);

om_tools.dom.div = (function om_tools$dom$div(){
var G__25396 = arguments.length;
switch (G__25396) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq25393){
var G__25394 = cljs.core.first.call(null,seq25393);
var seq25393__$1 = cljs.core.next.call(null,seq25393);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__25394,seq25393__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);

om_tools.dom.dl = (function om_tools$dom$dl(){
var G__25400 = arguments.length;
switch (G__25400) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq25397){
var G__25398 = cljs.core.first.call(null,seq25397);
var seq25397__$1 = cljs.core.next.call(null,seq25397);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__25398,seq25397__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);

om_tools.dom.dt = (function om_tools$dom$dt(){
var G__25404 = arguments.length;
switch (G__25404) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq25401){
var G__25402 = cljs.core.first.call(null,seq25401);
var seq25401__$1 = cljs.core.next.call(null,seq25401);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__25402,seq25401__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);

om_tools.dom.em = (function om_tools$dom$em(){
var G__25408 = arguments.length;
switch (G__25408) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq25405){
var G__25406 = cljs.core.first.call(null,seq25405);
var seq25405__$1 = cljs.core.next.call(null,seq25405);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__25406,seq25405__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);

om_tools.dom.embed = (function om_tools$dom$embed(){
var G__25412 = arguments.length;
switch (G__25412) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq25409){
var G__25410 = cljs.core.first.call(null,seq25409);
var seq25409__$1 = cljs.core.next.call(null,seq25409);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__25410,seq25409__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);

om_tools.dom.fieldset = (function om_tools$dom$fieldset(){
var G__25420 = arguments.length;
switch (G__25420) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq25417){
var G__25418 = cljs.core.first.call(null,seq25417);
var seq25417__$1 = cljs.core.next.call(null,seq25417);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__25418,seq25417__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);

om_tools.dom.figcaption = (function om_tools$dom$figcaption(){
var G__25424 = arguments.length;
switch (G__25424) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq25421){
var G__25422 = cljs.core.first.call(null,seq25421);
var seq25421__$1 = cljs.core.next.call(null,seq25421);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__25422,seq25421__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);

om_tools.dom.figure = (function om_tools$dom$figure(){
var G__25428 = arguments.length;
switch (G__25428) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq25425){
var G__25426 = cljs.core.first.call(null,seq25425);
var seq25425__$1 = cljs.core.next.call(null,seq25425);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__25426,seq25425__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);

om_tools.dom.footer = (function om_tools$dom$footer(){
var G__25432 = arguments.length;
switch (G__25432) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq25429){
var G__25430 = cljs.core.first.call(null,seq25429);
var seq25429__$1 = cljs.core.next.call(null,seq25429);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__25430,seq25429__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);

om_tools.dom.form = (function om_tools$dom$form(){
var G__25436 = arguments.length;
switch (G__25436) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq25433){
var G__25434 = cljs.core.first.call(null,seq25433);
var seq25433__$1 = cljs.core.next.call(null,seq25433);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__25434,seq25433__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);

om_tools.dom.h1 = (function om_tools$dom$h1(){
var G__25440 = arguments.length;
switch (G__25440) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq25437){
var G__25438 = cljs.core.first.call(null,seq25437);
var seq25437__$1 = cljs.core.next.call(null,seq25437);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__25438,seq25437__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);

om_tools.dom.h2 = (function om_tools$dom$h2(){
var G__25444 = arguments.length;
switch (G__25444) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq25441){
var G__25442 = cljs.core.first.call(null,seq25441);
var seq25441__$1 = cljs.core.next.call(null,seq25441);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__25442,seq25441__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);

om_tools.dom.h3 = (function om_tools$dom$h3(){
var G__25448 = arguments.length;
switch (G__25448) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq25445){
var G__25446 = cljs.core.first.call(null,seq25445);
var seq25445__$1 = cljs.core.next.call(null,seq25445);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__25446,seq25445__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);

om_tools.dom.h4 = (function om_tools$dom$h4(){
var G__25452 = arguments.length;
switch (G__25452) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq25449){
var G__25450 = cljs.core.first.call(null,seq25449);
var seq25449__$1 = cljs.core.next.call(null,seq25449);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__25450,seq25449__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);

om_tools.dom.h5 = (function om_tools$dom$h5(){
var G__25456 = arguments.length;
switch (G__25456) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq25453){
var G__25454 = cljs.core.first.call(null,seq25453);
var seq25453__$1 = cljs.core.next.call(null,seq25453);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__25454,seq25453__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);

om_tools.dom.h6 = (function om_tools$dom$h6(){
var G__25460 = arguments.length;
switch (G__25460) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq25457){
var G__25458 = cljs.core.first.call(null,seq25457);
var seq25457__$1 = cljs.core.next.call(null,seq25457);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__25458,seq25457__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);

om_tools.dom.head = (function om_tools$dom$head(){
var G__25464 = arguments.length;
switch (G__25464) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq25461){
var G__25462 = cljs.core.first.call(null,seq25461);
var seq25461__$1 = cljs.core.next.call(null,seq25461);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__25462,seq25461__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);

om_tools.dom.header = (function om_tools$dom$header(){
var G__25468 = arguments.length;
switch (G__25468) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq25465){
var G__25466 = cljs.core.first.call(null,seq25465);
var seq25465__$1 = cljs.core.next.call(null,seq25465);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__25466,seq25465__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);

om_tools.dom.hr = (function om_tools$dom$hr(){
var G__25472 = arguments.length;
switch (G__25472) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq25469){
var G__25470 = cljs.core.first.call(null,seq25469);
var seq25469__$1 = cljs.core.next.call(null,seq25469);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__25470,seq25469__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);

om_tools.dom.html = (function om_tools$dom$html(){
var G__25476 = arguments.length;
switch (G__25476) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq25473){
var G__25474 = cljs.core.first.call(null,seq25473);
var seq25473__$1 = cljs.core.next.call(null,seq25473);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__25474,seq25473__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);

om_tools.dom.i = (function om_tools$dom$i(){
var G__25480 = arguments.length;
switch (G__25480) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq25477){
var G__25478 = cljs.core.first.call(null,seq25477);
var seq25477__$1 = cljs.core.next.call(null,seq25477);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__25478,seq25477__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);

om_tools.dom.iframe = (function om_tools$dom$iframe(){
var G__25484 = arguments.length;
switch (G__25484) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq25481){
var G__25482 = cljs.core.first.call(null,seq25481);
var seq25481__$1 = cljs.core.next.call(null,seq25481);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__25482,seq25481__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);

om_tools.dom.img = (function om_tools$dom$img(){
var G__25488 = arguments.length;
switch (G__25488) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq25485){
var G__25486 = cljs.core.first.call(null,seq25485);
var seq25485__$1 = cljs.core.next.call(null,seq25485);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__25486,seq25485__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);

om_tools.dom.ins = (function om_tools$dom$ins(){
var G__25492 = arguments.length;
switch (G__25492) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq25489){
var G__25490 = cljs.core.first.call(null,seq25489);
var seq25489__$1 = cljs.core.next.call(null,seq25489);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__25490,seq25489__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);

om_tools.dom.kbd = (function om_tools$dom$kbd(){
var G__25496 = arguments.length;
switch (G__25496) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq25493){
var G__25494 = cljs.core.first.call(null,seq25493);
var seq25493__$1 = cljs.core.next.call(null,seq25493);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__25494,seq25493__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);

om_tools.dom.keygen = (function om_tools$dom$keygen(){
var G__25500 = arguments.length;
switch (G__25500) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq25497){
var G__25498 = cljs.core.first.call(null,seq25497);
var seq25497__$1 = cljs.core.next.call(null,seq25497);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__25498,seq25497__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);

om_tools.dom.label = (function om_tools$dom$label(){
var G__25504 = arguments.length;
switch (G__25504) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq25501){
var G__25502 = cljs.core.first.call(null,seq25501);
var seq25501__$1 = cljs.core.next.call(null,seq25501);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__25502,seq25501__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);

om_tools.dom.legend = (function om_tools$dom$legend(){
var G__25508 = arguments.length;
switch (G__25508) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq25505){
var G__25506 = cljs.core.first.call(null,seq25505);
var seq25505__$1 = cljs.core.next.call(null,seq25505);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__25506,seq25505__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);

om_tools.dom.li = (function om_tools$dom$li(){
var G__25512 = arguments.length;
switch (G__25512) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq25509){
var G__25510 = cljs.core.first.call(null,seq25509);
var seq25509__$1 = cljs.core.next.call(null,seq25509);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__25510,seq25509__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);

om_tools.dom.link = (function om_tools$dom$link(){
var G__25516 = arguments.length;
switch (G__25516) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq25513){
var G__25514 = cljs.core.first.call(null,seq25513);
var seq25513__$1 = cljs.core.next.call(null,seq25513);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__25514,seq25513__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);

om_tools.dom.main = (function om_tools$dom$main(){
var G__25520 = arguments.length;
switch (G__25520) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq25517){
var G__25518 = cljs.core.first.call(null,seq25517);
var seq25517__$1 = cljs.core.next.call(null,seq25517);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__25518,seq25517__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);

om_tools.dom.map = (function om_tools$dom$map(){
var G__25524 = arguments.length;
switch (G__25524) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq25521){
var G__25522 = cljs.core.first.call(null,seq25521);
var seq25521__$1 = cljs.core.next.call(null,seq25521);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__25522,seq25521__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);

om_tools.dom.mark = (function om_tools$dom$mark(){
var G__25528 = arguments.length;
switch (G__25528) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq25525){
var G__25526 = cljs.core.first.call(null,seq25525);
var seq25525__$1 = cljs.core.next.call(null,seq25525);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__25526,seq25525__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);

om_tools.dom.marquee = (function om_tools$dom$marquee(){
var G__25532 = arguments.length;
switch (G__25532) {
case 0:
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});

om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.marquee.cljs$lang$applyTo = (function (seq25529){
var G__25530 = cljs.core.first.call(null,seq25529);
var seq25529__$1 = cljs.core.next.call(null,seq25529);
return om_tools.dom.marquee.cljs$core$IFn$_invoke$arity$variadic(G__25530,seq25529__$1);
});

om_tools.dom.marquee.cljs$lang$maxFixedArity = (1);

om_tools.dom.menu = (function om_tools$dom$menu(){
var G__25536 = arguments.length;
switch (G__25536) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq25533){
var G__25534 = cljs.core.first.call(null,seq25533);
var seq25533__$1 = cljs.core.next.call(null,seq25533);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__25534,seq25533__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);

om_tools.dom.menuitem = (function om_tools$dom$menuitem(){
var G__25540 = arguments.length;
switch (G__25540) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq25537){
var G__25538 = cljs.core.first.call(null,seq25537);
var seq25537__$1 = cljs.core.next.call(null,seq25537);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__25538,seq25537__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);

om_tools.dom.meta = (function om_tools$dom$meta(){
var G__25544 = arguments.length;
switch (G__25544) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq25541){
var G__25542 = cljs.core.first.call(null,seq25541);
var seq25541__$1 = cljs.core.next.call(null,seq25541);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__25542,seq25541__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);

om_tools.dom.meter = (function om_tools$dom$meter(){
var G__25548 = arguments.length;
switch (G__25548) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq25545){
var G__25546 = cljs.core.first.call(null,seq25545);
var seq25545__$1 = cljs.core.next.call(null,seq25545);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__25546,seq25545__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);

om_tools.dom.nav = (function om_tools$dom$nav(){
var G__25552 = arguments.length;
switch (G__25552) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq25549){
var G__25550 = cljs.core.first.call(null,seq25549);
var seq25549__$1 = cljs.core.next.call(null,seq25549);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__25550,seq25549__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);

om_tools.dom.noscript = (function om_tools$dom$noscript(){
var G__25556 = arguments.length;
switch (G__25556) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq25553){
var G__25554 = cljs.core.first.call(null,seq25553);
var seq25553__$1 = cljs.core.next.call(null,seq25553);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__25554,seq25553__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);

om_tools.dom.object = (function om_tools$dom$object(){
var G__25560 = arguments.length;
switch (G__25560) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq25557){
var G__25558 = cljs.core.first.call(null,seq25557);
var seq25557__$1 = cljs.core.next.call(null,seq25557);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__25558,seq25557__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);

om_tools.dom.ol = (function om_tools$dom$ol(){
var G__25564 = arguments.length;
switch (G__25564) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq25561){
var G__25562 = cljs.core.first.call(null,seq25561);
var seq25561__$1 = cljs.core.next.call(null,seq25561);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__25562,seq25561__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);

om_tools.dom.optgroup = (function om_tools$dom$optgroup(){
var G__25568 = arguments.length;
switch (G__25568) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq25565){
var G__25566 = cljs.core.first.call(null,seq25565);
var seq25565__$1 = cljs.core.next.call(null,seq25565);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__25566,seq25565__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);

om_tools.dom.output = (function om_tools$dom$output(){
var G__25572 = arguments.length;
switch (G__25572) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq25569){
var G__25570 = cljs.core.first.call(null,seq25569);
var seq25569__$1 = cljs.core.next.call(null,seq25569);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__25570,seq25569__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);

om_tools.dom.p = (function om_tools$dom$p(){
var G__25576 = arguments.length;
switch (G__25576) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq25573){
var G__25574 = cljs.core.first.call(null,seq25573);
var seq25573__$1 = cljs.core.next.call(null,seq25573);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__25574,seq25573__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);

om_tools.dom.param = (function om_tools$dom$param(){
var G__25580 = arguments.length;
switch (G__25580) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq25577){
var G__25578 = cljs.core.first.call(null,seq25577);
var seq25577__$1 = cljs.core.next.call(null,seq25577);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__25578,seq25577__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);

om_tools.dom.pre = (function om_tools$dom$pre(){
var G__25584 = arguments.length;
switch (G__25584) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq25581){
var G__25582 = cljs.core.first.call(null,seq25581);
var seq25581__$1 = cljs.core.next.call(null,seq25581);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__25582,seq25581__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);

om_tools.dom.progress = (function om_tools$dom$progress(){
var G__25588 = arguments.length;
switch (G__25588) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq25585){
var G__25586 = cljs.core.first.call(null,seq25585);
var seq25585__$1 = cljs.core.next.call(null,seq25585);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__25586,seq25585__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);

om_tools.dom.q = (function om_tools$dom$q(){
var G__25592 = arguments.length;
switch (G__25592) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq25589){
var G__25590 = cljs.core.first.call(null,seq25589);
var seq25589__$1 = cljs.core.next.call(null,seq25589);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__25590,seq25589__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);

om_tools.dom.rp = (function om_tools$dom$rp(){
var G__25596 = arguments.length;
switch (G__25596) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq25593){
var G__25594 = cljs.core.first.call(null,seq25593);
var seq25593__$1 = cljs.core.next.call(null,seq25593);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__25594,seq25593__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);

om_tools.dom.rt = (function om_tools$dom$rt(){
var G__25600 = arguments.length;
switch (G__25600) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq25597){
var G__25598 = cljs.core.first.call(null,seq25597);
var seq25597__$1 = cljs.core.next.call(null,seq25597);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__25598,seq25597__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);

om_tools.dom.ruby = (function om_tools$dom$ruby(){
var G__25604 = arguments.length;
switch (G__25604) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq25601){
var G__25602 = cljs.core.first.call(null,seq25601);
var seq25601__$1 = cljs.core.next.call(null,seq25601);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__25602,seq25601__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);

om_tools.dom.s = (function om_tools$dom$s(){
var G__25608 = arguments.length;
switch (G__25608) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq25605){
var G__25606 = cljs.core.first.call(null,seq25605);
var seq25605__$1 = cljs.core.next.call(null,seq25605);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__25606,seq25605__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);

om_tools.dom.samp = (function om_tools$dom$samp(){
var G__25612 = arguments.length;
switch (G__25612) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq25609){
var G__25610 = cljs.core.first.call(null,seq25609);
var seq25609__$1 = cljs.core.next.call(null,seq25609);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__25610,seq25609__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);

om_tools.dom.script = (function om_tools$dom$script(){
var G__25616 = arguments.length;
switch (G__25616) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq25613){
var G__25614 = cljs.core.first.call(null,seq25613);
var seq25613__$1 = cljs.core.next.call(null,seq25613);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__25614,seq25613__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);

om_tools.dom.section = (function om_tools$dom$section(){
var G__25620 = arguments.length;
switch (G__25620) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq25617){
var G__25618 = cljs.core.first.call(null,seq25617);
var seq25617__$1 = cljs.core.next.call(null,seq25617);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__25618,seq25617__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);

om_tools.dom.select = (function om_tools$dom$select(){
var G__25624 = arguments.length;
switch (G__25624) {
case 0:
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});

om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.select.cljs$lang$applyTo = (function (seq25621){
var G__25622 = cljs.core.first.call(null,seq25621);
var seq25621__$1 = cljs.core.next.call(null,seq25621);
return om_tools.dom.select.cljs$core$IFn$_invoke$arity$variadic(G__25622,seq25621__$1);
});

om_tools.dom.select.cljs$lang$maxFixedArity = (1);

om_tools.dom.small = (function om_tools$dom$small(){
var G__25628 = arguments.length;
switch (G__25628) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq25625){
var G__25626 = cljs.core.first.call(null,seq25625);
var seq25625__$1 = cljs.core.next.call(null,seq25625);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__25626,seq25625__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);

om_tools.dom.source = (function om_tools$dom$source(){
var G__25632 = arguments.length;
switch (G__25632) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq25629){
var G__25630 = cljs.core.first.call(null,seq25629);
var seq25629__$1 = cljs.core.next.call(null,seq25629);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__25630,seq25629__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);

om_tools.dom.span = (function om_tools$dom$span(){
var G__25636 = arguments.length;
switch (G__25636) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq25633){
var G__25634 = cljs.core.first.call(null,seq25633);
var seq25633__$1 = cljs.core.next.call(null,seq25633);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__25634,seq25633__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);

om_tools.dom.strong = (function om_tools$dom$strong(){
var G__25640 = arguments.length;
switch (G__25640) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq25637){
var G__25638 = cljs.core.first.call(null,seq25637);
var seq25637__$1 = cljs.core.next.call(null,seq25637);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__25638,seq25637__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);

om_tools.dom.style = (function om_tools$dom$style(){
var G__25644 = arguments.length;
switch (G__25644) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq25641){
var G__25642 = cljs.core.first.call(null,seq25641);
var seq25641__$1 = cljs.core.next.call(null,seq25641);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__25642,seq25641__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);

om_tools.dom.sub = (function om_tools$dom$sub(){
var G__25648 = arguments.length;
switch (G__25648) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq25645){
var G__25646 = cljs.core.first.call(null,seq25645);
var seq25645__$1 = cljs.core.next.call(null,seq25645);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__25646,seq25645__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);

om_tools.dom.summary = (function om_tools$dom$summary(){
var G__25652 = arguments.length;
switch (G__25652) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq25649){
var G__25650 = cljs.core.first.call(null,seq25649);
var seq25649__$1 = cljs.core.next.call(null,seq25649);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__25650,seq25649__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);

om_tools.dom.sup = (function om_tools$dom$sup(){
var G__25656 = arguments.length;
switch (G__25656) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq25653){
var G__25654 = cljs.core.first.call(null,seq25653);
var seq25653__$1 = cljs.core.next.call(null,seq25653);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__25654,seq25653__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);

om_tools.dom.table = (function om_tools$dom$table(){
var G__25660 = arguments.length;
switch (G__25660) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq25657){
var G__25658 = cljs.core.first.call(null,seq25657);
var seq25657__$1 = cljs.core.next.call(null,seq25657);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__25658,seq25657__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);

om_tools.dom.tbody = (function om_tools$dom$tbody(){
var G__25664 = arguments.length;
switch (G__25664) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq25661){
var G__25662 = cljs.core.first.call(null,seq25661);
var seq25661__$1 = cljs.core.next.call(null,seq25661);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__25662,seq25661__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);

om_tools.dom.td = (function om_tools$dom$td(){
var G__25668 = arguments.length;
switch (G__25668) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq25665){
var G__25666 = cljs.core.first.call(null,seq25665);
var seq25665__$1 = cljs.core.next.call(null,seq25665);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__25666,seq25665__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);

om_tools.dom.tfoot = (function om_tools$dom$tfoot(){
var G__25672 = arguments.length;
switch (G__25672) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq25669){
var G__25670 = cljs.core.first.call(null,seq25669);
var seq25669__$1 = cljs.core.next.call(null,seq25669);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__25670,seq25669__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);

om_tools.dom.th = (function om_tools$dom$th(){
var G__25676 = arguments.length;
switch (G__25676) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq25673){
var G__25674 = cljs.core.first.call(null,seq25673);
var seq25673__$1 = cljs.core.next.call(null,seq25673);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__25674,seq25673__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);

om_tools.dom.thead = (function om_tools$dom$thead(){
var G__25680 = arguments.length;
switch (G__25680) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq25677){
var G__25678 = cljs.core.first.call(null,seq25677);
var seq25677__$1 = cljs.core.next.call(null,seq25677);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__25678,seq25677__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);

om_tools.dom.time = (function om_tools$dom$time(){
var G__25684 = arguments.length;
switch (G__25684) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq25681){
var G__25682 = cljs.core.first.call(null,seq25681);
var seq25681__$1 = cljs.core.next.call(null,seq25681);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__25682,seq25681__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);

om_tools.dom.title = (function om_tools$dom$title(){
var G__25688 = arguments.length;
switch (G__25688) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq25685){
var G__25686 = cljs.core.first.call(null,seq25685);
var seq25685__$1 = cljs.core.next.call(null,seq25685);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__25686,seq25685__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);

om_tools.dom.tr = (function om_tools$dom$tr(){
var G__25692 = arguments.length;
switch (G__25692) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq25689){
var G__25690 = cljs.core.first.call(null,seq25689);
var seq25689__$1 = cljs.core.next.call(null,seq25689);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__25690,seq25689__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);

om_tools.dom.track = (function om_tools$dom$track(){
var G__25698 = arguments.length;
switch (G__25698) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq25694){
var G__25695 = cljs.core.first.call(null,seq25694);
var seq25694__$1 = cljs.core.next.call(null,seq25694);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__25695,seq25694__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);

om_tools.dom.u = (function om_tools$dom$u(){
var G__25704 = arguments.length;
switch (G__25704) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq25701){
var G__25702 = cljs.core.first.call(null,seq25701);
var seq25701__$1 = cljs.core.next.call(null,seq25701);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__25702,seq25701__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);

om_tools.dom.ul = (function om_tools$dom$ul(){
var G__25708 = arguments.length;
switch (G__25708) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq25705){
var G__25706 = cljs.core.first.call(null,seq25705);
var seq25705__$1 = cljs.core.next.call(null,seq25705);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__25706,seq25705__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);

om_tools.dom.var$ = (function om_tools$dom$var(){
var G__25712 = arguments.length;
switch (G__25712) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq25709){
var G__25710 = cljs.core.first.call(null,seq25709);
var seq25709__$1 = cljs.core.next.call(null,seq25709);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__25710,seq25709__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);

om_tools.dom.video = (function om_tools$dom$video(){
var G__25716 = arguments.length;
switch (G__25716) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq25713){
var G__25714 = cljs.core.first.call(null,seq25713);
var seq25713__$1 = cljs.core.next.call(null,seq25713);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__25714,seq25713__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);

om_tools.dom.wbr = (function om_tools$dom$wbr(){
var G__25720 = arguments.length;
switch (G__25720) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq25717){
var G__25718 = cljs.core.first.call(null,seq25717);
var seq25717__$1 = cljs.core.next.call(null,seq25717);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__25718,seq25717__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);

om_tools.dom.circle = (function om_tools$dom$circle(){
var G__25724 = arguments.length;
switch (G__25724) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq25721){
var G__25722 = cljs.core.first.call(null,seq25721);
var seq25721__$1 = cljs.core.next.call(null,seq25721);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__25722,seq25721__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);

om_tools.dom.ellipse = (function om_tools$dom$ellipse(){
var G__25728 = arguments.length;
switch (G__25728) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq25725){
var G__25726 = cljs.core.first.call(null,seq25725);
var seq25725__$1 = cljs.core.next.call(null,seq25725);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__25726,seq25725__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);

om_tools.dom.g = (function om_tools$dom$g(){
var G__25732 = arguments.length;
switch (G__25732) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq25729){
var G__25730 = cljs.core.first.call(null,seq25729);
var seq25729__$1 = cljs.core.next.call(null,seq25729);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__25730,seq25729__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);

om_tools.dom.line = (function om_tools$dom$line(){
var G__25736 = arguments.length;
switch (G__25736) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq25733){
var G__25734 = cljs.core.first.call(null,seq25733);
var seq25733__$1 = cljs.core.next.call(null,seq25733);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__25734,seq25733__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);

om_tools.dom.path = (function om_tools$dom$path(){
var G__25740 = arguments.length;
switch (G__25740) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq25737){
var G__25738 = cljs.core.first.call(null,seq25737);
var seq25737__$1 = cljs.core.next.call(null,seq25737);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__25738,seq25737__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);

om_tools.dom.polyline = (function om_tools$dom$polyline(){
var G__25745 = arguments.length;
switch (G__25745) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq25741){
var G__25742 = cljs.core.first.call(null,seq25741);
var seq25741__$1 = cljs.core.next.call(null,seq25741);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__25742,seq25741__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);

om_tools.dom.rect = (function om_tools$dom$rect(){
var G__25749 = arguments.length;
switch (G__25749) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq25746){
var G__25747 = cljs.core.first.call(null,seq25746);
var seq25746__$1 = cljs.core.next.call(null,seq25746);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__25747,seq25746__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);

om_tools.dom.svg = (function om_tools$dom$svg(){
var G__25753 = arguments.length;
switch (G__25753) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq25750){
var G__25751 = cljs.core.first.call(null,seq25750);
var seq25750__$1 = cljs.core.next.call(null,seq25750);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__25751,seq25750__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);

om_tools.dom.text = (function om_tools$dom$text(){
var G__25757 = arguments.length;
switch (G__25757) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq25754){
var G__25755 = cljs.core.first.call(null,seq25754);
var seq25754__$1 = cljs.core.next.call(null,seq25754);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__25755,seq25754__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);

om_tools.dom.defs = (function om_tools$dom$defs(){
var G__25761 = arguments.length;
switch (G__25761) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq25758){
var G__25759 = cljs.core.first.call(null,seq25758);
var seq25758__$1 = cljs.core.next.call(null,seq25758);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__25759,seq25758__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);

om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(){
var G__25765 = arguments.length;
switch (G__25765) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq25762){
var G__25763 = cljs.core.first.call(null,seq25762);
var seq25762__$1 = cljs.core.next.call(null,seq25762);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__25763,seq25762__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.polygon = (function om_tools$dom$polygon(){
var G__25769 = arguments.length;
switch (G__25769) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq25766){
var G__25767 = cljs.core.first.call(null,seq25766);
var seq25766__$1 = cljs.core.next.call(null,seq25766);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__25767,seq25766__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);

om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(){
var G__25773 = arguments.length;
switch (G__25773) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq25770){
var G__25771 = cljs.core.first.call(null,seq25770);
var seq25770__$1 = cljs.core.next.call(null,seq25770);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__25771,seq25770__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);

om_tools.dom.stop = (function om_tools$dom$stop(){
var G__25777 = arguments.length;
switch (G__25777) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq25774){
var G__25775 = cljs.core.first.call(null,seq25774);
var seq25774__$1 = cljs.core.next.call(null,seq25774);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__25775,seq25774__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);

om_tools.dom.tspan = (function om_tools$dom$tspan(){
var G__25781 = arguments.length;
switch (G__25781) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq25778){
var G__25779 = cljs.core.first.call(null,seq25778);
var seq25778__$1 = cljs.core.next.call(null,seq25778);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__25779,seq25778__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);

om_tools.dom.input = (function om_tools$dom$input(){
var G__25786 = arguments.length;
switch (G__25786) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq25783){
var G__25784 = cljs.core.first.call(null,seq25783);
var seq25783__$1 = cljs.core.next.call(null,seq25783);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__25784,seq25783__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);

om_tools.dom.textarea = (function om_tools$dom$textarea(){
var G__25790 = arguments.length;
switch (G__25790) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq25787){
var G__25788 = cljs.core.first.call(null,seq25787);
var seq25787__$1 = cljs.core.next.call(null,seq25787);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__25788,seq25787__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);

om_tools.dom.option = (function om_tools$dom$option(){
var G__25416 = arguments.length;
switch (G__25416) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__19168__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0)));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__22563__auto__,children__22564__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__22563__auto__,children__22564__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq25413){
var G__25414 = cljs.core.first.call(null,seq25413);
var seq25413__$1 = cljs.core.next.call(null,seq25413);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__25414,seq25413__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1431466922754