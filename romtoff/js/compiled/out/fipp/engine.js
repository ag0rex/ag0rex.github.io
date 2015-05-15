// Compiled by ClojureScript 0.0-3211 {}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('fipp.deque');
goog.require('clojure.string');
if(typeof fipp.engine.serialize_node !== 'undefined'){
} else {
fipp.engine.serialize_node = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,fipp$engine$serialize,doc);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.engine.serialize_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_.call(null,doc)){
return fipp.engine.serialize_node.call(null,doc);
} else {
throw cljs.core.ex_info.call(null,"Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),doc], null));

}
}
}
}
}
});
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__24821){
var vec__24822 = p__24821;
var _ = cljs.core.nth.call(null,vec__24822,(0),null);
var text = cljs.core.nthnext.call(null,vec__24822,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__24823){
var vec__24824 = p__24823;
var _ = cljs.core.nth.call(null,vec__24824,(0),null);
var text = cljs.core.nthnext.call(null,vec__24824,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__24825){
var vec__24826 = p__24825;
var _ = cljs.core.nth.call(null,vec__24826,(0),null);
var text = cljs.core.nth.call(null,vec__24826,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"text","text",-150030170,null))))].join('')));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__24827){
var vec__24828 = p__24827;
var _ = cljs.core.nth.call(null,vec__24828,(0),null);
var children = cljs.core.nthnext.call(null,vec__24828,(1));
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__24829){
var vec__24830 = p__24829;
var _ = cljs.core.nth.call(null,vec__24830,(0),null);
var inline = cljs.core.nth.call(null,vec__24830,(1),null);
var inline__$1 = (function (){var or__18116__auto__ = inline;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return " ";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"inline","inline",-1254551547,null))))].join('')));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__24831__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__24831 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__24832__i = 0, G__24832__a = new Array(arguments.length -  0);
while (G__24832__i < G__24832__a.length) {G__24832__a[G__24832__i] = arguments[G__24832__i + 0]; ++G__24832__i;}
  _ = new cljs.core.IndexedSeq(G__24832__a,0);
} 
return G__24831__delegate.call(this,_);};
G__24831.cljs$lang$maxFixedArity = 0;
G__24831.cljs$lang$applyTo = (function (arglist__24833){
var _ = cljs.core.seq(arglist__24833);
return G__24831__delegate(_);
});
G__24831.cljs$core$IFn$_invoke$arity$variadic = G__24831__delegate;
return G__24831;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__24834){
var vec__24835 = p__24834;
var _ = cljs.core.nth.call(null,vec__24835,(0),null);
var children = cljs.core.nthnext.call(null,vec__24835,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__24836){
var vec__24837 = p__24836;
var _ = cljs.core.nth.call(null,vec__24837,(0),null);
var offset = cljs.core.nth.call(null,vec__24837,(1),null);
var children = cljs.core.nthnext.call(null,vec__24837,(2));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__24838){
var vec__24839 = p__24838;
var _ = cljs.core.nth.call(null,vec__24839,(0),null);
var args = cljs.core.nthnext.call(null,vec__24839,(1));
var vec__24840 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var offset = cljs.core.nth.call(null,vec__24840,(0),null);
var children = cljs.core.nthnext.call(null,vec__24840,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 * hypothetical single-line formatting of the document. Groups and indentation
 * directives are temporarily assumed to be zero-width. These values are used
 * by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
return ((function (pos){
return (function() {
var G__24843 = null;
var G__24843__0 = (function (){
return rf.call(null);
});
var G__24843__1 = (function (res){
return rf.call(null,res);
});
var G__24843__2 = (function (res,node){
var delta = (function (){var G__24842 = (((new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node).fqn:null);
switch (G__24842) {
case "escaped":
return (1);

break;
case "line":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node));

break;
case "text":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
default:
return (0);

}
})();
var p = cljs.core._vreset_BANG_.call(null,pos,(cljs.core._deref.call(null,pos) + delta));
return rf.call(null,res,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),p));
});
G__24843 = function(res,node){
switch(arguments.length){
case 0:
return G__24843__0.call(this);
case 1:
return G__24843__1.call(this,res);
case 2:
return G__24843__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24843.cljs$core$IFn$_invoke$arity$0 = G__24843__0;
G__24843.cljs$core$IFn$_invoke$arity$1 = G__24843__1;
G__24843.cljs$core$IFn$_invoke$arity$2 = G__24843__2;
return G__24843;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(){
var argseq__19156__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19156__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

fipp.engine.update_right.cljs$lang$applyTo = (function (seq24845){
var G__24846 = cljs.core.first.call(null,seq24845);
var seq24845__$1 = cljs.core.next.call(null,seq24845);
var G__24847 = cljs.core.first.call(null,seq24845__$1);
var seq24845__$2 = cljs.core.next.call(null,seq24845__$1);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic(G__24846,G__24847,seq24845__$2);
});
/**
 * Given printing options, returns a transducer which annotate the right-side
 * of groups on their :begin nodes.  This includes the pruning algorithm which
 * will annotate some :begin nodes as being :too-far to the right without
 * calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__24848){
var map__24852 = p__24848;
var map__24852__$1 = ((cljs.core.seq_QMARK_.call(null,map__24852))?cljs.core.apply.call(null,cljs.core.hash_map,map__24852):map__24852);
var options = map__24852__$1;
var width = cljs.core.get.call(null,map__24852__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__24852,map__24852__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return ((function (pos,bufs,map__24852,map__24852__$1,options,width){
return (function() {
var G__24855 = null;
var G__24855__0 = (function (){
return rf.call(null);
});
var G__24855__1 = (function (res){
return rf.call(null,res);
});
var G__24855__2 = (function (res,p__24853){
var map__24854 = p__24853;
var map__24854__$1 = ((cljs.core.seq_QMARK_.call(null,map__24854))?cljs.core.apply.call(null,cljs.core.hash_map,map__24854):map__24854);
var node = map__24854__$1;
var right = cljs.core.get.call(null,map__24854__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var op = cljs.core.get.call(null,map__24854__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var buffers = cljs.core.deref.call(null,bufs);
if(cljs.core.empty_QMARK_.call(null,buffers)){
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null);
cljs.core.vreset_BANG_.call(null,pos,position_STAR_);

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.create.call(null,buffer));

return res;
} else {
return rf.call(null,res,node);
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek.call(null,buffers);
var buffers_STAR_ = cljs.core.pop.call(null,buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.deque.conjlr.call(null,begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_.call(null,buffers_STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return cljs.core.reduce.call(null,rf,res,nodes);
} else {
cljs.core.vreset_BANG_.call(null,bufs,fipp.engine.update_right.call(null,buffers_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr.call(null,buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.call(null,buffers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node));
var res__$1 = res;
while(true){
if(((right <= cljs.core.deref.call(null,pos))) && ((cljs.core.count.call(null,buffers_STAR_) <= width))){
cljs.core.vreset_BANG_.call(null,bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first.call(null,buffers_STAR_);
var buffers_STAR__STAR_ = cljs.core.next.call(null,buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var res_STAR_ = rf.call(null,res__$1,begin);
var res_STAR___$1 = cljs.core.reduce.call(null,rf,res_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_.call(null,buffers_STAR__STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_.call(null,pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buffers_STAR__STAR_)));

var G__24856 = buffers_STAR__STAR_;
var G__24857 = res_STAR___$1;
buffers_STAR_ = G__24856;
res__$1 = G__24857;
continue;
}
}
break;
}
}
}
});
G__24855 = function(res,p__24853){
switch(arguments.length){
case 0:
return G__24855__0.call(this);
case 1:
return G__24855__1.call(this,res);
case 2:
return G__24855__2.call(this,res,p__24853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24855.cljs$core$IFn$_invoke$arity$0 = G__24855__0;
G__24855.cljs$core$IFn$_invoke$arity$1 = G__24855__1;
G__24855.cljs$core$IFn$_invoke$arity$2 = G__24855__2;
return G__24855;
})()
;})(pos,bufs,map__24852,map__24852__$1,options,width))
});
;})(map__24852,map__24852__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 * laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__24858){
var map__24863 = p__24858;
var map__24863__$1 = ((cljs.core.seq_QMARK_.call(null,map__24863))?cljs.core.apply.call(null,cljs.core.hash_map,map__24863):map__24863);
var options = map__24863__$1;
var width = cljs.core.get.call(null,map__24863__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__24863,map__24863__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_.call(null,(0));
var length = cljs.core.volatile_BANG_.call(null,width);
var tab_stops = cljs.core.volatile_BANG_.call(null,cljs.core.list((0)));
var column = cljs.core.volatile_BANG_.call(null,(0));
return ((function (fits,length,tab_stops,column,map__24863,map__24863__$1,options,width){
return (function() {
var G__24867 = null;
var G__24867__0 = (function (){
return rf.call(null);
});
var G__24867__1 = (function (res){
return rf.call(null,res);
});
var G__24867__2 = (function (res,p__24864){
var map__24865 = p__24864;
var map__24865__$1 = ((cljs.core.seq_QMARK_.call(null,map__24865))?cljs.core.apply.call(null,cljs.core.hash_map,map__24865):map__24865);
var node = map__24865__$1;
var right = cljs.core.get.call(null,map__24865__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var op = cljs.core.get.call(null,map__24865__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var G__24866 = (((op instanceof cljs.core.Keyword))?op.fqn:null);
switch (G__24866) {
case "nest":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(cljs.core.deref.call(null,column) + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.pop.call(null,cljs.core._deref.call(null,tab_stops)));

return res;

break;
case "begin":
cljs.core.vreset_BANG_.call(null,fits,(((cljs.core.deref.call(null,fits) > (0)))?(cljs.core.deref.call(null,fits) + (1)):((cljs.core._EQ_.call(null,right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= cljs.core.deref.call(null,length)))?(1):(0)
))));

return res;

break;
case "break":
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,"\n");

break;
case "line":
if((cljs.core.deref.call(null,fits) === (0))){
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,"\n");
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,inline)));

return rf.call(null,res,inline);
}

break;
case "escaped":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + (1)));

return rf.call(null,res_STAR_,text);

break;
case "pass":
return rf.call(null,res,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "end":
cljs.core.vreset_BANG_.call(null,fits,(function (){var x__18428__auto__ = (0);
var y__18429__auto__ = (cljs.core.deref.call(null,fits) - (1));
return ((x__18428__auto__ > y__18429__auto__) ? x__18428__auto__ : y__18429__auto__);
})());

return res;

break;
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,text)));

return rf.call(null,res_STAR_,text);

break;
default:
throw cljs.core.ex_info.call(null,"Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__24867 = function(res,p__24864){
switch(arguments.length){
case 0:
return G__24867__0.call(this);
case 1:
return G__24867__1.call(this,res);
case 2:
return G__24867__2.call(this,res,p__24864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24867.cljs$core$IFn$_invoke$arity$0 = G__24867__0;
G__24867.cljs$core$IFn$_invoke$arity$1 = G__24867__1;
G__24867.cljs$core$IFn$_invoke$arity$2 = G__24867__2;
return G__24867;
})()
;})(fits,length,tab_stops,column,map__24863,map__24863__$1,options,width))
});
;})(map__24863,map__24863__$1,options,width))
});
fipp.engine.eduction = (function fipp$engine$eduction(){
var argseq__19156__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return fipp.engine.eduction.cljs$core$IFn$_invoke$arity$variadic(argseq__19156__auto__);
});

fipp.engine.eduction.cljs$core$IFn$_invoke$arity$variadic = (function (xforms){
return cljs.core.eduction.call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.butlast.call(null,xforms)),cljs.core.last.call(null,xforms));
});

fipp.engine.eduction.cljs$lang$maxFixedArity = (0);

fipp.engine.eduction.cljs$lang$applyTo = (function (seq24869){
return fipp.engine.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24869));
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(document,options){
var options_24870__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
cljs.core.run_BANG_.call(null,cljs.core.print,fipp.engine.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options_24870__$1),fipp.engine.format_nodes.call(null,options_24870__$1),fipp.engine.serialize.call(null,document)));

return cljs.core.println.call(null);
});

//# sourceMappingURL=engine.js.map?rel=1431292024292