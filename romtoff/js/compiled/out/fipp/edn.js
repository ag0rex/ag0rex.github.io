// Compiled by ClojureScript 0.0-3211 {}
goog.provide('fipp.edn');
goog.require('cljs.core');
goog.require('fipp.engine');
goog.require('fipp.visit');
goog.require('fipp.ednize');

/**
* @constructor
* @param {*} print_meta
* @param {*} symbols
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
fipp.edn.EdnPrinter = (function (print_meta,symbols,__meta,__extmap,__hash){
this.print_meta = print_meta;
this.symbols = symbols;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fipp.edn.EdnPrinter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18711__auto__,k__18712__auto__){
var self__ = this;
var this__18711__auto____$1 = this;
return cljs.core._lookup.call(null,this__18711__auto____$1,k__18712__auto__,null);
});

fipp.edn.EdnPrinter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18713__auto__,k24767,else__18714__auto__){
var self__ = this;
var this__18713__auto____$1 = this;
var G__24769 = (((k24767 instanceof cljs.core.Keyword))?k24767.fqn:null);
switch (G__24769) {
case "symbols":
return self__.symbols;

break;
case "print-meta":
return self__.print_meta;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24767,else__18714__auto__);

}
});

fipp.edn.EdnPrinter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18725__auto__,writer__18726__auto__,opts__18727__auto__){
var self__ = this;
var this__18725__auto____$1 = this;
var pr_pair__18728__auto__ = ((function (this__18725__auto____$1){
return (function (keyval__18729__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18726__auto__,cljs.core.pr_writer,""," ","",opts__18727__auto__,keyval__18729__auto__);
});})(this__18725__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18726__auto__,pr_pair__18728__auto__,"#fipp.edn.EdnPrinter{",", ","}",opts__18727__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols],null))], null),self__.__extmap));
});

fipp.edn.EdnPrinter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18709__auto__){
var self__ = this;
var this__18709__auto____$1 = this;
return self__.__meta;
});

fipp.edn.EdnPrinter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18705__auto__){
var self__ = this;
var this__18705__auto____$1 = this;
return (new fipp.edn.EdnPrinter(self__.print_meta,self__.symbols,self__.__meta,self__.__extmap,self__.__hash));
});

fipp.edn.EdnPrinter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18715__auto__){
var self__ = this;
var this__18715__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

fipp.edn.EdnPrinter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18706__auto__){
var self__ = this;
var this__18706__auto____$1 = this;
var h__18532__auto__ = self__.__hash;
if(!((h__18532__auto__ == null))){
return h__18532__auto__;
} else {
var h__18532__auto____$1 = cljs.core.hash_imap.call(null,this__18706__auto____$1);
self__.__hash = h__18532__auto____$1;

return h__18532__auto____$1;
}
});

fipp.edn.EdnPrinter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18707__auto__,other__18708__auto__){
var self__ = this;
var this__18707__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18104__auto__ = other__18708__auto__;
if(cljs.core.truth_(and__18104__auto__)){
var and__18104__auto____$1 = (this__18707__auto____$1.constructor === other__18708__auto__.constructor);
if(and__18104__auto____$1){
return cljs.core.equiv_map.call(null,this__18707__auto____$1,other__18708__auto__);
} else {
return and__18104__auto____$1;
}
} else {
return and__18104__auto__;
}
})())){
return true;
} else {
return false;
}
});

fipp.edn.EdnPrinter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18720__auto__,k__18721__auto__){
var self__ = this;
var this__18720__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),null,new cljs.core.Keyword(null,"symbols","symbols",1211743),null], null), null),k__18721__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18720__auto____$1),self__.__meta),k__18721__auto__);
} else {
return (new fipp.edn.EdnPrinter(self__.print_meta,self__.symbols,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18721__auto__)),null));
}
});

fipp.edn.EdnPrinter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18718__auto__,k__18719__auto__,G__24766){
var self__ = this;
var this__18718__auto____$1 = this;
var pred__24770 = cljs.core.keyword_identical_QMARK_;
var expr__24771 = k__18719__auto__;
if(cljs.core.truth_(pred__24770.call(null,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),expr__24771))){
return (new fipp.edn.EdnPrinter(G__24766,self__.symbols,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24770.call(null,new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__24771))){
return (new fipp.edn.EdnPrinter(self__.print_meta,G__24766,self__.__meta,self__.__extmap,null));
} else {
return (new fipp.edn.EdnPrinter(self__.print_meta,self__.symbols,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18719__auto__,G__24766),null));
}
}
});

fipp.edn.EdnPrinter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18723__auto__){
var self__ = this;
var this__18723__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),self__.print_meta],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols],null))], null),self__.__extmap));
});

fipp.edn.EdnPrinter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18710__auto__,G__24766){
var self__ = this;
var this__18710__auto____$1 = this;
return (new fipp.edn.EdnPrinter(self__.print_meta,self__.symbols,G__24766,self__.__extmap,self__.__hash));
});

fipp.edn.EdnPrinter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18716__auto__,entry__18717__auto__){
var self__ = this;
var this__18716__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18717__auto__)){
return cljs.core._assoc.call(null,this__18716__auto____$1,cljs.core._nth.call(null,entry__18717__auto__,(0)),cljs.core._nth.call(null,entry__18717__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18716__auto____$1,entry__18717__auto__);
}
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$ = true;

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_meta$arity$3 = (function (this$,m,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.print_meta)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"^",fipp.visit.visit.call(null,this$__$1,m)], null),new cljs.core.Keyword(null,"line","line",212345235),fipp.visit.visit_STAR_.call(null,this$__$1,x)], null);
} else {
return fipp.visit.visit_STAR_.call(null,this$__$1,x);
}
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_number$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.call(null,x)], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_pattern$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.call(null,x)], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_unknown$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return fipp.visit.visit.call(null,this$__$1,fipp.ednize._edn.call(null,x));
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_symbol$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str(x)].join('')], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_seq$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var temp__4124__auto__ = self__.symbols.call(null,cljs.core.first.call(null,x));
if(cljs.core.truth_(temp__4124__auto__)){
var pretty = temp__4124__auto__;
return pretty.call(null,this$__$1,x);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (temp__4124__auto__,this$__$1){
return (function (p1__24763_SHARP_){
return fipp.visit.visit.call(null,this$__$1,p1__24763_SHARP_);
});})(temp__4124__auto__,this$__$1))
,x))], null),")"], null);
}
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_boolean$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str(x)].join('')], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_tagged$arity$2 = (function (this$,p__24773){
var self__ = this;
var map__24774 = p__24773;
var map__24774__$1 = ((cljs.core.seq_QMARK_.call(null,map__24774))?cljs.core.apply.call(null,cljs.core.hash_map,map__24774):map__24774);
var form = cljs.core.get.call(null,map__24774__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var tag = cljs.core.get.call(null,map__24774__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#",cljs.core.pr_str.call(null,tag),(cljs.core.truth_((function (){var or__18116__auto__ = (function (){var and__18104__auto__ = self__.print_meta;
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.meta.call(null,form);
} else {
return and__18104__auto__;
}
})();
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return !(cljs.core.coll_QMARK_.call(null,form));
}
})())?" ":null),fipp.visit.visit.call(null,this$__$1,form)], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_keyword$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str(x)].join('')], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_map$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var kvps = (function (){var iter__18870__auto__ = ((function (this$__$1){
return (function fipp$edn$iter__24775(s__24776){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__24776__$1 = s__24776;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24776__$1);
if(temp__4126__auto__){
var s__24776__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24776__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__24776__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__24778 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__24777 = (0);
while(true){
if((i__24777 < size__18869__auto__)){
var vec__24781 = cljs.core._nth.call(null,c__18868__auto__,i__24777);
var k = cljs.core.nth.call(null,vec__24781,(0),null);
var v = cljs.core.nth.call(null,vec__24781,(1),null);
cljs.core.chunk_append.call(null,b__24778,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,this$__$1,k)," ",fipp.visit.visit.call(null,this$__$1,v)], null));

var G__24784 = (i__24777 + (1));
i__24777 = G__24784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24778),fipp$edn$iter__24775.call(null,cljs.core.chunk_rest.call(null,s__24776__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24778),null);
}
} else {
var vec__24782 = cljs.core.first.call(null,s__24776__$2);
var k = cljs.core.nth.call(null,vec__24782,(0),null);
var v = cljs.core.nth.call(null,vec__24782,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,this$__$1,k)," ",fipp.visit.visit.call(null,this$__$1,v)], null),fipp$edn$iter__24775.call(null,cljs.core.rest.call(null,s__24776__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__18870__auto__.call(null,x);
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"{",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),",",new cljs.core.Keyword(null,"line","line",212345235)], null),kvps)], null),"}"], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_nil$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"nil"], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_character$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.call(null,x)], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_string$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.pr_str.call(null,x)], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_var$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str(x)].join('')], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_set$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#{",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (this$__$1){
return (function (p1__24765_SHARP_){
return fipp.visit.visit.call(null,this$__$1,p1__24765_SHARP_);
});})(this$__$1))
,x))], null),"}"], null);
});

fipp.edn.EdnPrinter.prototype.fipp$visit$IVisitor$visit_vector$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (this$__$1){
return (function (p1__24764_SHARP_){
return fipp.visit.visit.call(null,this$__$1,p1__24764_SHARP_);
});})(this$__$1))
,x))], null),"]"], null);
});

fipp.edn.EdnPrinter.cljs$lang$type = true;

fipp.edn.EdnPrinter.cljs$lang$ctorPrSeq = (function (this__18745__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"fipp.edn/EdnPrinter");
});

fipp.edn.EdnPrinter.cljs$lang$ctorPrWriter = (function (this__18745__auto__,writer__18746__auto__){
return cljs.core._write.call(null,writer__18746__auto__,"fipp.edn/EdnPrinter");
});

fipp.edn.__GT_EdnPrinter = (function fipp$edn$__GT_EdnPrinter(print_meta,symbols){
return (new fipp.edn.EdnPrinter(print_meta,symbols,null,null,null));
});

fipp.edn.map__GT_EdnPrinter = (function fipp$edn$map__GT_EdnPrinter(G__24768){
return (new fipp.edn.EdnPrinter(new cljs.core.Keyword(null,"print-meta","print-meta",1034114598).cljs$core$IFn$_invoke$arity$1(G__24768),new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(G__24768),null,cljs.core.dissoc.call(null,G__24768,new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),new cljs.core.Keyword(null,"symbols","symbols",1211743)),null));
});

fipp.edn.pprint = (function fipp$edn$pprint(){
var G__24786 = arguments.length;
switch (G__24786) {
case 1:
return fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.edn.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.edn.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
var printer = fipp.edn.map__GT_EdnPrinter.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"print-meta","print-meta",1034114598),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"symbols","symbols",1211743),cljs.core.PersistentArrayMap.EMPTY], null),options));
var _STAR_print_meta_STAR_24787 = cljs.core._STAR_print_meta_STAR_;
cljs.core._STAR_print_meta_STAR_ = false;

try{return fipp.engine.pprint_document.call(null,fipp.visit.visit.call(null,printer,x),options);
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_24787;
}});

fipp.edn.pprint.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=edn.js.map?rel=1431292023975