// Compiled by ClojureScript 0.0-3211 {}
goog.provide('ankha.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.dom');
goog.require('clojure.string');
goog.require('om.core');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);

ankha.core.IInspect = (function (){var obj20790 = {};
return obj20790;
})();

/**
 * Return a React or Om compatible representation of this.
 */
ankha.core._inspect = (function ankha$core$_inspect(this$){
if((function (){var and__18104__auto__ = this$;
if(and__18104__auto__){
return this$.ankha$core$IInspect$_inspect$arity$1;
} else {
return and__18104__auto__;
}
})()){
return this$.ankha$core$IInspect$_inspect$arity$1(this$);
} else {
var x__18752__auto__ = (((this$ == null))?null:this$);
return (function (){var or__18116__auto__ = (ankha.core._inspect[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (ankha.core._inspect["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInspect.-inspect",this$);
}
}
})().call(null,this$);
}
});

/**
 * Return true if x is an empty js/Object or empty Clojure collection.
 */
ankha.core.empty_QMARK_ = (function ankha$core$empty_QMARK_(x){
if(cljs.core.object_QMARK_.call(null,x)){
return goog.object.isEmpty(x);
} else {
return cljs.core.empty_QMARK_.call(null,x);
}
});
/**
 * Return true if x satisfies IRecord, false otherwise.
 */
ankha.core.record_QMARK_ = (function ankha$core$record_QMARK_(x){
var G__20792 = x;
if(G__20792){
var bit__18790__auto__ = (G__20792.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__18790__auto__) || (G__20792.cljs$core$IRecord$)){
return true;
} else {
if((!G__20792.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__20792);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__20792);
}
});
/**
 * Return the name of a Record type.
 */
ankha.core.record_name = (function ankha$core$record_name(r){
var s = cljs.core.pr_str.call(null,r);
return cljs.core.subs.call(null,s,(0),s.indexOf("{"));
});
/**
 * Return an opener for a Record type.
 */
ankha.core.record_opener = (function ankha$core$record_opener(r){
return [cljs.core.str(ankha.core.record_name.call(null,r)),cljs.core.str("{")].join('');
});
ankha.core.literal = (function ankha$core$literal(class$,x){
return React.DOM.span({"key": x, "className": class$},cljs.core.pr_str.call(null,x));
});
ankha.core.coll_view = (function ankha$core$coll_view(data,opener,closer,class$){
return om.core.build.call(null,ankha.core.collection_view,data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opener","opener",1027381943),opener,new cljs.core.Keyword(null,"closer","closer",10992481),closer,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], null));
});
ankha.core.inspect = (function ankha$core$inspect(x){
if((function (){var G__20794 = x;
if(G__20794){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__20794.ankha$core$IInspect$;
}
})())){
return true;
} else {
if((!G__20794.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,ankha.core.IInspect,G__20794);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,ankha.core.IInspect,G__20794);
}
})()){
return ankha.core._inspect.call(null,x);
} else {
if(cljs.core.fn_QMARK_.call(null,x)){
return ankha.core.literal.call(null,"function",x);
} else {
return ankha.core.literal.call(null,"literal",x);

}
}
});
ankha.core.associative__GT_dom = (function ankha$core$associative__GT_dom(data,p__20795){
var map__20805 = p__20795;
var map__20805__$1 = ((cljs.core.seq_QMARK_.call(null,map__20805))?cljs.core.apply.call(null,cljs.core.hash_map,map__20805):map__20805);
var val_class = cljs.core.get.call(null,map__20805__$1,new cljs.core.Keyword(null,"val-class","val-class",-997529322));
var key_class = cljs.core.get.call(null,map__20805__$1,new cljs.core.Keyword(null,"key-class","key-class",764049336));
var entry_class = cljs.core.get.call(null,map__20805__$1,new cljs.core.Keyword(null,"entry-class","entry-class",144705573));
return cljs.core.into_array.call(null,(function (){var iter__18870__auto__ = ((function (map__20805,map__20805__$1,val_class,key_class,entry_class){
return (function ankha$core$associative__GT_dom_$_iter__20806(s__20807){
return (new cljs.core.LazySeq(null,((function (map__20805,map__20805__$1,val_class,key_class,entry_class){
return (function (){
var s__20807__$1 = s__20807;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20807__$1);
if(temp__4126__auto__){
var s__20807__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20807__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__20807__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__20809 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__20808 = (0);
while(true){
if((i__20808 < size__18869__auto__)){
var vec__20812 = cljs.core._nth.call(null,c__18868__auto__,i__20808);
var k = cljs.core.nth.call(null,vec__20812,(0),null);
var v = cljs.core.nth.call(null,vec__20812,(1),null);
cljs.core.chunk_append.call(null,b__20809,React.DOM.li({"key": [cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))].join('')},React.DOM.div({"style": {"position": "relative"}, "className": [cljs.core.str("entry "),cljs.core.str(entry_class)].join('')},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("key "),cljs.core.str(key_class)].join('')},ankha.core.inspect.call(null,k)),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("val "),cljs.core.str(val_class)].join('')},ankha.core.inspect.call(null,v)))));

var G__20814 = (i__20808 + (1));
i__20808 = G__20814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20809),ankha$core$associative__GT_dom_$_iter__20806.call(null,cljs.core.chunk_rest.call(null,s__20807__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20809),null);
}
} else {
var vec__20813 = cljs.core.first.call(null,s__20807__$2);
var k = cljs.core.nth.call(null,vec__20813,(0),null);
var v = cljs.core.nth.call(null,vec__20813,(1),null);
return cljs.core.cons.call(null,React.DOM.li({"key": [cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))].join('')},React.DOM.div({"style": {"position": "relative"}, "className": [cljs.core.str("entry "),cljs.core.str(entry_class)].join('')},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("key "),cljs.core.str(key_class)].join('')},ankha.core.inspect.call(null,k)),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("val "),cljs.core.str(val_class)].join('')},ankha.core.inspect.call(null,v)))),ankha$core$associative__GT_dom_$_iter__20806.call(null,cljs.core.rest.call(null,s__20807__$2)));
}
} else {
return null;
}
break;
}
});})(map__20805,map__20805__$1,val_class,key_class,entry_class))
,null,null));
});})(map__20805,map__20805__$1,val_class,key_class,entry_class))
;
return iter__18870__auto__.call(null,data);
})());
});
ankha.core.sequential__GT_dom = (function ankha$core$sequential__GT_dom(data){
return cljs.core.into_array.call(null,(function (){var iter__18870__auto__ = (function ankha$core$sequential__GT_dom_$_iter__20823(s__20824){
return (new cljs.core.LazySeq(null,(function (){
var s__20824__$1 = s__20824;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20824__$1);
if(temp__4126__auto__){
var s__20824__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20824__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__20824__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__20826 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__20825 = (0);
while(true){
if((i__20825 < size__18869__auto__)){
var vec__20829 = cljs.core._nth.call(null,c__18868__auto__,i__20825);
var i = cljs.core.nth.call(null,vec__20829,(0),null);
var x = cljs.core.nth.call(null,vec__20829,(1),null);
var pair = vec__20829;
cljs.core.chunk_append.call(null,b__20826,React.DOM.li({"key": [cljs.core.str(pair)].join(''), "className": "entry"},ankha.core.inspect.call(null,x)));

var G__20831 = (i__20825 + (1));
i__20825 = G__20831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20826),ankha$core$sequential__GT_dom_$_iter__20823.call(null,cljs.core.chunk_rest.call(null,s__20824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20826),null);
}
} else {
var vec__20830 = cljs.core.first.call(null,s__20824__$2);
var i = cljs.core.nth.call(null,vec__20830,(0),null);
var x = cljs.core.nth.call(null,vec__20830,(1),null);
var pair = vec__20830;
return cljs.core.cons.call(null,React.DOM.li({"key": [cljs.core.str(pair)].join(''), "className": "entry"},ankha.core.inspect.call(null,x)),ankha$core$sequential__GT_dom_$_iter__20823.call(null,cljs.core.rest.call(null,s__20824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18870__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,data));
})());
});
ankha.core.coll__GT_dom = (function ankha$core$coll__GT_dom(data){
if(cljs.core.map_QMARK_.call(null,data)){
return ankha.core.associative__GT_dom.call(null,data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",144705573),"map-entry",new cljs.core.Keyword(null,"key-class","key-class",764049336),"map-key",new cljs.core.Keyword(null,"val-class","val-class",-997529322),"map-val"], null));
} else {
if(cljs.core.object_QMARK_.call(null,data)){
var ks = goog.object.getKeys(data);
var vs = goog.object.getValues(data);
var m = cljs.core.map.call(null,cljs.core.vector,ks,vs);
return ankha.core.associative__GT_dom.call(null,m,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",144705573),"object-entry",new cljs.core.Keyword(null,"key-class","key-class",764049336),"object-key",new cljs.core.Keyword(null,"val-class","val-class",-997529322),"object-val"], null));
} else {
return ankha.core.sequential__GT_dom.call(null,data);

}
}
});
ankha.core.toggle_button = (function ankha$core$toggle_button(owner,p__20832){
var map__20834 = p__20832;
var map__20834__$1 = ((cljs.core.seq_QMARK_.call(null,map__20834))?cljs.core.apply.call(null,cljs.core.hash_map,map__20834):map__20834);
var disable_QMARK_ = cljs.core.get.call(null,map__20834__$1,new cljs.core.Keyword(null,"disable?","disable?",1101284546));
return React.DOM.button({"style": {"border": "none", "display": "inline-block", "outline": "none", "verticalAlign": "top", "fontWeight": "bold", "padding": "0", "opacity": (cljs.core.truth_(disable_QMARK_)?"0.5":"1.0"), "cursor": "pointer", "background": "none"}, "onClick": ((function (map__20834,map__20834__$1,disable_QMARK_){
return (function (_){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not);
});})(map__20834,map__20834__$1,disable_QMARK_))
, "disabled": disable_QMARK_, "className": "toggle-button"},(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125)))?"-":"+"));
});
ankha.core.edit_button = (function ankha$core$edit_button(owner,p__20835){
var map__20837 = p__20835;
var map__20837__$1 = ((cljs.core.seq_QMARK_.call(null,map__20837))?cljs.core.apply.call(null,cljs.core.hash_map,map__20837):map__20837);
var open_editor = cljs.core.get.call(null,map__20837__$1,new cljs.core.Keyword(null,"open-editor","open-editor",1337424020));
var save_editor = cljs.core.get.call(null,map__20837__$1,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973));
var disable_QMARK_ = cljs.core.get.call(null,map__20837__$1,new cljs.core.Keyword(null,"disable?","disable?",1101284546));
return React.DOM.button({"style": {"border": "none", "display": "inline-block", "outline": "none", "verticalAlign": "top", "fontWeight": "bold", "padding": "0", "opacity": (cljs.core.truth_(disable_QMARK_)?"0.5":"1.0"), "cursor": "pointer", "background": "none"}, "onClick": ((function (map__20837,map__20837__$1,open_editor,save_editor,disable_QMARK_){
return (function (_){
if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"editing?","editing?",1646440800)))){
return save_editor.call(null);
} else {
return open_editor.call(null);
}
});})(map__20837,map__20837__$1,open_editor,save_editor,disable_QMARK_))
, "disabled": disable_QMARK_, "className": "edit-button"},(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"editing?","editing?",1646440800)))?"Save":"Edit"));
});
ankha.core.enter_key_QMARK_ = (function ankha$core$enter_key_QMARK_(e){
return cljs.core._EQ_.call(null,(13),e.keyCode);
});
ankha.core.escape_key_QMARK_ = (function ankha$core$escape_key_QMARK_(e){
return cljs.core._EQ_.call(null,(27),e.keyCode);
});
ankha.core.editor = (function ankha$core$editor(owner,p__20838){
var map__20840 = p__20838;
var map__20840__$1 = ((cljs.core.seq_QMARK_.call(null,map__20840))?cljs.core.apply.call(null,cljs.core.hash_map,map__20840):map__20840);
var error_message = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"error-message","error-message",1756021561));
var cancel_editor = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",-460110475));
var save_editor = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973));
var value = cljs.core.get.call(null,map__20840__$1,new cljs.core.Keyword(null,"value","value",305978217));
return React.DOM.div({"style": {"display": "inline"}},om.dom.textarea.call(null,{"onBlur": save_editor, "onChange": ((function (map__20840,map__20840__$1,error_message,cancel_editor,save_editor,value){
return (function (e){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"edited-data","edited-data",-1990299431),e.target.value);
});})(map__20840,map__20840__$1,error_message,cancel_editor,save_editor,value))
, "onKeyUp": ((function (map__20840,map__20840__$1,error_message,cancel_editor,save_editor,value){
return (function (e){
if(cljs.core.truth_(ankha.core.enter_key_QMARK_.call(null,e))){
return save_editor.call(null);
} else {
if(cljs.core.truth_(ankha.core.escape_key_QMARK_.call(null,e))){
return cancel_editor.call(null);
} else {
return null;
}
}
});})(map__20840,map__20840__$1,error_message,cancel_editor,save_editor,value))
, "onKeyPress": ((function (map__20840,map__20840__$1,error_message,cancel_editor,save_editor,value){
return (function (e){
if(cljs.core.truth_(ankha.core.enter_key_QMARK_.call(null,e))){
return e.preventDefault();
} else {
return null;
}
});})(map__20840,map__20840__$1,error_message,cancel_editor,save_editor,value))
, "value": value, "style": {"display": "inline-block"}, "ref": "editor", "className": "editor"}),(cljs.core.truth_(error_message)?React.DOM.span({"style": {"vertical-align": "top"}, "className": "error"},error_message):null));
});
ankha.core.collection_view = (function ankha$core$collection_view(data,owner,p__20841){
var map__20849 = p__20841;
var map__20849__$1 = ((cljs.core.seq_QMARK_.call(null,map__20849))?cljs.core.apply.call(null,cljs.core.hash_map,map__20849):map__20849);
var opts = map__20849__$1;
var closer = cljs.core.get.call(null,map__20849__$1,new cljs.core.Keyword(null,"closer","closer",10992481));
var opener = cljs.core.get.call(null,map__20849__$1,new cljs.core.Keyword(null,"opener","opener",1027381943));
var class$ = cljs.core.get.call(null,map__20849__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(typeof ankha.core.t20850 !== 'undefined'){
} else {

/**
* @constructor
*/
ankha.core.t20850 = (function (class$,opener,closer,opts,map__20849,p__20841,owner,data,collection_view,meta20851){
this.class$ = class$;
this.opener = opener;
this.closer = closer;
this.opts = opts;
this.map__20849 = map__20849;
this.p__20841 = p__20841;
this.owner = owner;
this.data = data;
this.collection_view = collection_view;
this.meta20851 = meta20851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t20850.prototype.om$core$IDidUpdate$ = true;

ankha.core.t20850.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (this$,prev_props,prev_state){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editing?","editing?",1646440800)))){
return om.core.get_node.call(null,self__.owner,"editor").focus();
} else {
return null;
}
});})(map__20849,map__20849__$1,opts,closer,opener,class$))
;

ankha.core.t20850.prototype.om$core$IRenderState$ = true;

ankha.core.t20850.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (_,p__20853){
var self__ = this;
var map__20854 = p__20853;
var map__20854__$1 = ((cljs.core.seq_QMARK_.call(null,map__20854))?cljs.core.apply.call(null,cljs.core.hash_map,map__20854):map__20854);
var cancel_editor = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",-460110475));
var save_editor = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973));
var open_editor = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"open-editor","open-editor",1337424020));
var editing_error_message = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"editing-error-message","editing-error-message",305528968));
var edited_data = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"edited-data","edited-data",-1990299431));
var editing_QMARK_ = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var vacant_QMARK_ = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"vacant?","vacant?",-353994651));
var open_QMARK_ = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var ___$1 = this;
return React.DOM.div({"onDoubleClick": ((function (___$1,map__20854,map__20854__$1,cancel_editor,save_editor,open_editor,editing_error_message,edited_data,editing_QMARK_,vacant_QMARK_,open_QMARK_,map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (e){
e.stopPropagation();

return open_editor.call(null);
});})(___$1,map__20854,map__20854__$1,cancel_editor,save_editor,open_editor,editing_error_message,edited_data,editing_QMARK_,vacant_QMARK_,open_QMARK_,map__20849,map__20849__$1,opts,closer,opener,class$))
, "className": self__.class$},ankha.core.toggle_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable?","disable?",1101284546),vacant_QMARK_], null)),(cljs.core.truth_(open_QMARK_)?ankha.core.edit_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),open_editor,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973),save_editor], null)):null),(cljs.core.truth_((function (){var and__18104__auto__ = open_QMARK_;
if(cljs.core.truth_(and__18104__auto__)){
return editing_QMARK_;
} else {
return and__18104__auto__;
}
})())?ankha.core.editor.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),edited_data,new cljs.core.Keyword(null,"error-message","error-message",1756021561),editing_error_message,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973),save_editor,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",-460110475),cancel_editor], null)):null),React.DOM.span({"style": {"display": (cljs.core.truth_((function (){var and__18104__auto__ = open_QMARK_;
if(cljs.core.truth_(and__18104__auto__)){
return editing_QMARK_;
} else {
return and__18104__auto__;
}
})())?"none":"inline-block")}, "className": "opener"},self__.opener),React.DOM.ul({"style": {"margin": "0", "listStyleType": "none", "display": (cljs.core.truth_((function (){var and__18104__auto__ = open_QMARK_;
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.not.call(null,editing_QMARK_);
} else {
return and__18104__auto__;
}
})())?"block":"none")}, "className": "values"},ankha.core.coll__GT_dom.call(null,self__.data)),React.DOM.span({"style": {"display": (cljs.core.truth_((function (){var or__18116__auto__ = open_QMARK_;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return vacant_QMARK_;
}
})())?"none":"inline")}, "className": "ellipsis"},"\u2026"),React.DOM.span({"style": {"display": (cljs.core.truth_(open_QMARK_)?(cljs.core.truth_(editing_QMARK_)?"none":"block"):"inline-block")}, "className": "closer"},self__.closer));
});})(map__20849,map__20849__$1,opts,closer,opener,class$))
;

ankha.core.t20850.prototype.om$core$IInitState$ = true;

ankha.core.t20850.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"edited-data","edited-data",-1990299431),cljs.core.pr_str.call(null,self__.data),new cljs.core.Keyword(null,"editing?","editing?",1646440800),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(self__.opts)),new cljs.core.Keyword(null,"open-editor","open-editor",1337424020),((function (___$1,map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (){
return om.core.update_state_BANG_.call(null,self__.owner,((function (___$1,map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (s){
return cljs.core.merge.call(null,s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"editing-error-message","editing-error-message",305528968),null,new cljs.core.Keyword(null,"editing?","editing?",1646440800),true,new cljs.core.Keyword(null,"edited-data","edited-data",-1990299431),cljs.core.pr_str.call(null,cljs.core.deref.call(null,self__.data))], null));
});})(___$1,map__20849,map__20849__$1,opts,closer,opener,class$))
);
});})(___$1,map__20849,map__20849__$1,opts,closer,opener,class$))
,new cljs.core.Keyword(null,"save-editor","save-editor",1847104973),((function (___$1,map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (){
try{var new_data = cljs.reader.read_string.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edited-data","edited-data",-1990299431)));
if(cljs.core._EQ_.call(null,new_data,cljs.core.deref.call(null,self__.data))){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
} else {
return om.core.update_BANG_.call(null,self__.data,new_data);
}
}catch (e20855){if((e20855 instanceof Error)){
var e = e20855;
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing-error-message","editing-error-message",305528968),e.message);
} else {
throw e20855;

}
}});})(___$1,map__20849,map__20849__$1,opts,closer,opener,class$))
,new cljs.core.Keyword(null,"cancel-editor","cancel-editor",-460110475),((function (___$1,map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing?","editing?",1646440800),false);
});})(___$1,map__20849,map__20849__$1,opts,closer,opener,class$))
,new cljs.core.Keyword(null,"vacant?","vacant?",-353994651),ankha.core.empty_QMARK_.call(null,self__.data),new cljs.core.Keyword(null,"open?","open?",1238443125),(!(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(self__.opts) === false)) && (cljs.core.not.call(null,ankha.core.empty_QMARK_.call(null,self__.data)))], null);
});})(map__20849,map__20849__$1,opts,closer,opener,class$))
;

ankha.core.t20850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (_20852){
var self__ = this;
var _20852__$1 = this;
return self__.meta20851;
});})(map__20849,map__20849__$1,opts,closer,opener,class$))
;

ankha.core.t20850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (_20852,meta20851__$1){
var self__ = this;
var _20852__$1 = this;
return (new ankha.core.t20850(self__.class$,self__.opener,self__.closer,self__.opts,self__.map__20849,self__.p__20841,self__.owner,self__.data,self__.collection_view,meta20851__$1));
});})(map__20849,map__20849__$1,opts,closer,opener,class$))
;

ankha.core.t20850.cljs$lang$type = true;

ankha.core.t20850.cljs$lang$ctorStr = "ankha.core/t20850";

ankha.core.t20850.cljs$lang$ctorPrWriter = ((function (map__20849,map__20849__$1,opts,closer,opener,class$){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"ankha.core/t20850");
});})(map__20849,map__20849__$1,opts,closer,opener,class$))
;

ankha.core.__GT_t20850 = ((function (map__20849,map__20849__$1,opts,closer,opener,class$){
return (function ankha$core$collection_view_$___GT_t20850(class$__$1,opener__$1,closer__$1,opts__$1,map__20849__$2,p__20841__$1,owner__$1,data__$1,collection_view__$1,meta20851){
return (new ankha.core.t20850(class$__$1,opener__$1,closer__$1,opts__$1,map__20849__$2,p__20841__$1,owner__$1,data__$1,collection_view__$1,meta20851));
});})(map__20849,map__20849__$1,opts,closer,opener,class$))
;

}

return (new ankha.core.t20850(class$,opener,closer,opts,map__20849__$1,p__20841,owner,data,ankha$core$collection_view,cljs.core.PersistentArrayMap.EMPTY));
});
ankha.core.inspector = (function ankha$core$inspector(){
var G__20857 = arguments.length;
switch (G__20857) {
case 2:
return ankha.core.inspector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ankha.core.inspector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ankha.core.inspector.cljs$core$IFn$_invoke$arity$2 = (function (data,owner){
return ankha.core.inspector.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inspector"], null)], null));
});

ankha.core.inspector.cljs$core$IFn$_invoke$arity$3 = (function (data,owner,p__20858){
var map__20859 = p__20858;
var map__20859__$1 = ((cljs.core.seq_QMARK_.call(null,map__20859))?cljs.core.apply.call(null,cljs.core.hash_map,map__20859):map__20859);
var opts = map__20859__$1;
var class$ = cljs.core.get.call(null,map__20859__$1,new cljs.core.Keyword(null,"class","class",-2030961996),"inspector");
if(typeof ankha.core.t20860 !== 'undefined'){
} else {

/**
* @constructor
*/
ankha.core.t20860 = (function (class$,opts,map__20859,p__20858,owner,data,meta20861){
this.class$ = class$;
this.opts = opts;
this.map__20859 = map__20859;
this.p__20858 = p__20858;
this.owner = owner;
this.data = data;
this.meta20861 = meta20861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t20860.prototype.om$core$IRender$ = true;

ankha.core.t20860.prototype.om$core$IRender$render$arity$1 = ((function (map__20859,map__20859__$1,opts,class$){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"style": {"overflowX": "scroll", "width": "100%", "whiteSpace": "pre-wrap", "fontFamily": "monospace"}, "className": self__.class$},ankha.core.inspect.call(null,self__.data));
});})(map__20859,map__20859__$1,opts,class$))
;

ankha.core.t20860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20859,map__20859__$1,opts,class$){
return (function (_20862){
var self__ = this;
var _20862__$1 = this;
return self__.meta20861;
});})(map__20859,map__20859__$1,opts,class$))
;

ankha.core.t20860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20859,map__20859__$1,opts,class$){
return (function (_20862,meta20861__$1){
var self__ = this;
var _20862__$1 = this;
return (new ankha.core.t20860(self__.class$,self__.opts,self__.map__20859,self__.p__20858,self__.owner,self__.data,meta20861__$1));
});})(map__20859,map__20859__$1,opts,class$))
;

ankha.core.t20860.cljs$lang$type = true;

ankha.core.t20860.cljs$lang$ctorStr = "ankha.core/t20860";

ankha.core.t20860.cljs$lang$ctorPrWriter = ((function (map__20859,map__20859__$1,opts,class$){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"ankha.core/t20860");
});})(map__20859,map__20859__$1,opts,class$))
;

ankha.core.__GT_t20860 = ((function (map__20859,map__20859__$1,opts,class$){
return (function ankha$core$__GT_t20860(class$__$1,opts__$1,map__20859__$2,p__20858__$1,owner__$1,data__$1,meta20861){
return (new ankha.core.t20860(class$__$1,opts__$1,map__20859__$2,p__20858__$1,owner__$1,data__$1,meta20861));
});})(map__20859,map__20859__$1,opts,class$))
;

}

return (new ankha.core.t20860(class$,opts,map__20859__$1,p__20858,owner,data,cljs.core.PersistentArrayMap.EMPTY));
});

ankha.core.inspector.cljs$lang$maxFixedArity = 3;
(ankha.core.IInspect["null"] = true);

(ankha.core._inspect["null"] = (function (this$){
return ankha.core.literal.call(null,"nil",this$);
}));

cljs.core.UUID.prototype.ankha$core$IInspect$ = true;

cljs.core.UUID.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.literal.call(null,"uuid",this$__$1);
});

cljs.core.LazySeq.prototype.ankha$core$IInspect$ = true;

cljs.core.LazySeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"(",")","seq lazy-seq");
});

RegExp.prototype.ankha$core$IInspect$ = true;

RegExp.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.literal.call(null,"regexp",this$__$1);
});

(ankha.core.IInspect["boolean"] = true);

(ankha.core._inspect["boolean"] = (function (this$){
return ankha.core.literal.call(null,"boolean",this$);
}));

(ankha.core.IInspect["object"] = true);

(ankha.core._inspect["object"] = (function (this$){
return ankha.core.coll_view.call(null,this$,"#js {","}","object");
}));

cljs.core.PersistentArrayMapSeq.prototype.ankha$core$IInspect$ = true;

cljs.core.PersistentArrayMapSeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"(",")","seq persistent-array-map-seq");
});

cljs.core.Symbol.prototype.ankha$core$IInspect$ = true;

cljs.core.Symbol.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.literal.call(null,"symbol",this$__$1);
});

Date.prototype.ankha$core$IInspect$ = true;

Date.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.literal.call(null,"date",this$__$1);
});

cljs.core.PersistentTreeSet.prototype.ankha$core$IInspect$ = true;

cljs.core.PersistentTreeSet.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"#{","}","set persistent-tree-set");
});

(ankha.core.IInspect["number"] = true);

(ankha.core._inspect["number"] = (function (this$){
return ankha.core.literal.call(null,"number",this$);
}));

cljs.core.PersistentHashMap.prototype.ankha$core$IInspect$ = true;

cljs.core.PersistentHashMap.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"{","}","map persistent-hash-map");
});

om.core.IndexedCursor.prototype.ankha$core$IInspect$ = true;

om.core.IndexedCursor.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"[","]","vector indexed-cursor");
});

cljs.core.PersistentHashSet.prototype.ankha$core$IInspect$ = true;

cljs.core.PersistentHashSet.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"#{","}","set persistent-hash-set");
});

cljs.core.ValSeq.prototype.ankha$core$IInspect$ = true;

cljs.core.ValSeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"(",")","seq val-seq");
});

cljs.core.PersistentVector.prototype.ankha$core$IInspect$ = true;

cljs.core.PersistentVector.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"[","]","vector");
});

(ankha.core.IInspect["array"] = true);

(ankha.core._inspect["array"] = (function (this$){
return ankha.core.coll_view.call(null,this$,"#js [","]","array");
}));

(ankha.core.IInspect["string"] = true);

(ankha.core._inspect["string"] = (function (this$){
return ankha.core.literal.call(null,"string",this$);
}));

(ankha.core.IInspect["function"] = true);

(ankha.core._inspect["function"] = (function (this$){
return ankha.core.literal.call(null,"function",this$);
}));

cljs.core.Keyword.prototype.ankha$core$IInspect$ = true;

cljs.core.Keyword.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.literal.call(null,"keyword",this$__$1);
});

cljs.core.PersistentArrayMap.prototype.ankha$core$IInspect$ = true;

cljs.core.PersistentArrayMap.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"{","}","map persistent-array-map");
});

cljs.core.Range.prototype.ankha$core$IInspect$ = true;

cljs.core.Range.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"(",")","seq range");
});

om.core.MapCursor.prototype.ankha$core$IInspect$ = true;

om.core.MapCursor.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(ankha.core.record_QMARK_.call(null,om.core.value.call(null,this$__$1)))){
return ankha.core.coll_view.call(null,this$__$1,ankha.core.record_opener.call(null,this$__$1),"}","record map-cursor");
} else {
return ankha.core.coll_view.call(null,this$__$1,"{","}","map map-cursor");
}
});

cljs.core.KeySeq.prototype.ankha$core$IInspect$ = true;

cljs.core.KeySeq.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"(",")","seq key-seq");
});

cljs.core.List.prototype.ankha$core$IInspect$ = true;

cljs.core.List.prototype.ankha$core$IInspect$_inspect$arity$1 = (function (this$){
var this$__$1 = this;
return ankha.core.coll_view.call(null,this$__$1,"(",")","list");
});

//# sourceMappingURL=core.js.map?rel=1431374987923