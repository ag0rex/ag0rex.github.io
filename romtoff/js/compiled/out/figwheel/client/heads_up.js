// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19156__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19156__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30840_30848 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30841_30849 = null;
var count__30842_30850 = (0);
var i__30843_30851 = (0);
while(true){
if((i__30843_30851 < count__30842_30850)){
var k_30852 = cljs.core._nth.call(null,chunk__30841_30849,i__30843_30851);
e.setAttribute(cljs.core.name.call(null,k_30852),cljs.core.get.call(null,attrs,k_30852));

var G__30853 = seq__30840_30848;
var G__30854 = chunk__30841_30849;
var G__30855 = count__30842_30850;
var G__30856 = (i__30843_30851 + (1));
seq__30840_30848 = G__30853;
chunk__30841_30849 = G__30854;
count__30842_30850 = G__30855;
i__30843_30851 = G__30856;
continue;
} else {
var temp__4126__auto___30857 = cljs.core.seq.call(null,seq__30840_30848);
if(temp__4126__auto___30857){
var seq__30840_30858__$1 = temp__4126__auto___30857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30840_30858__$1)){
var c__18901__auto___30859 = cljs.core.chunk_first.call(null,seq__30840_30858__$1);
var G__30860 = cljs.core.chunk_rest.call(null,seq__30840_30858__$1);
var G__30861 = c__18901__auto___30859;
var G__30862 = cljs.core.count.call(null,c__18901__auto___30859);
var G__30863 = (0);
seq__30840_30848 = G__30860;
chunk__30841_30849 = G__30861;
count__30842_30850 = G__30862;
i__30843_30851 = G__30863;
continue;
} else {
var k_30864 = cljs.core.first.call(null,seq__30840_30858__$1);
e.setAttribute(cljs.core.name.call(null,k_30864),cljs.core.get.call(null,attrs,k_30864));

var G__30865 = cljs.core.next.call(null,seq__30840_30858__$1);
var G__30866 = null;
var G__30867 = (0);
var G__30868 = (0);
seq__30840_30848 = G__30865;
chunk__30841_30849 = G__30866;
count__30842_30850 = G__30867;
i__30843_30851 = G__30868;
continue;
}
} else {
}
}
break;
}

var seq__30844_30869 = cljs.core.seq.call(null,children);
var chunk__30845_30870 = null;
var count__30846_30871 = (0);
var i__30847_30872 = (0);
while(true){
if((i__30847_30872 < count__30846_30871)){
var ch_30873 = cljs.core._nth.call(null,chunk__30845_30870,i__30847_30872);
e.appendChild(ch_30873);

var G__30874 = seq__30844_30869;
var G__30875 = chunk__30845_30870;
var G__30876 = count__30846_30871;
var G__30877 = (i__30847_30872 + (1));
seq__30844_30869 = G__30874;
chunk__30845_30870 = G__30875;
count__30846_30871 = G__30876;
i__30847_30872 = G__30877;
continue;
} else {
var temp__4126__auto___30878 = cljs.core.seq.call(null,seq__30844_30869);
if(temp__4126__auto___30878){
var seq__30844_30879__$1 = temp__4126__auto___30878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30844_30879__$1)){
var c__18901__auto___30880 = cljs.core.chunk_first.call(null,seq__30844_30879__$1);
var G__30881 = cljs.core.chunk_rest.call(null,seq__30844_30879__$1);
var G__30882 = c__18901__auto___30880;
var G__30883 = cljs.core.count.call(null,c__18901__auto___30880);
var G__30884 = (0);
seq__30844_30869 = G__30881;
chunk__30845_30870 = G__30882;
count__30846_30871 = G__30883;
i__30847_30872 = G__30884;
continue;
} else {
var ch_30885 = cljs.core.first.call(null,seq__30844_30879__$1);
e.appendChild(ch_30885);

var G__30886 = cljs.core.next.call(null,seq__30844_30879__$1);
var G__30887 = null;
var G__30888 = (0);
var G__30889 = (0);
seq__30844_30869 = G__30886;
chunk__30845_30870 = G__30887;
count__30846_30871 = G__30888;
i__30847_30872 = G__30889;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30837){
var G__30838 = cljs.core.first.call(null,seq30837);
var seq30837__$1 = cljs.core.next.call(null,seq30837);
var G__30839 = cljs.core.first.call(null,seq30837__$1);
var seq30837__$2 = cljs.core.next.call(null,seq30837__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30838,G__30839,seq30837__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__,hierarchy__19015__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__,hierarchy__19015__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30890 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30890.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30890.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30890.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30890);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30891,st_map){
var map__30895 = p__30891;
var map__30895__$1 = ((cljs.core.seq_QMARK_.call(null,map__30895))?cljs.core.apply.call(null,cljs.core.hash_map,map__30895):map__30895);
var container_el = cljs.core.get.call(null,map__30895__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30895,map__30895__$1,container_el){
return (function (p__30896){
var vec__30897 = p__30896;
var k = cljs.core.nth.call(null,vec__30897,(0),null);
var v = cljs.core.nth.call(null,vec__30897,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30895,map__30895__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30898,dom_str){
var map__30900 = p__30898;
var map__30900__$1 = ((cljs.core.seq_QMARK_.call(null,map__30900))?cljs.core.apply.call(null,cljs.core.hash_map,map__30900):map__30900);
var c = map__30900__$1;
var content_area_el = cljs.core.get.call(null,map__30900__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30901){
var map__30903 = p__30901;
var map__30903__$1 = ((cljs.core.seq_QMARK_.call(null,map__30903))?cljs.core.apply.call(null,cljs.core.hash_map,map__30903):map__30903);
var content_area_el = cljs.core.get.call(null,map__30903__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__){
return (function (state_30945){
var state_val_30946 = (state_30945[(1)]);
if((state_val_30946 === (2))){
var inst_30930 = (state_30945[(7)]);
var inst_30939 = (state_30945[(2)]);
var inst_30940 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30941 = ["auto"];
var inst_30942 = cljs.core.PersistentHashMap.fromArrays(inst_30940,inst_30941);
var inst_30943 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30930,inst_30942);
var state_30945__$1 = (function (){var statearr_30947 = state_30945;
(statearr_30947[(8)] = inst_30939);

return statearr_30947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30945__$1,inst_30943);
} else {
if((state_val_30946 === (1))){
var inst_30930 = (state_30945[(7)]);
var inst_30930__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30931 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30932 = ["10px","10px","100%","68px","1.0"];
var inst_30933 = cljs.core.PersistentHashMap.fromArrays(inst_30931,inst_30932);
var inst_30934 = cljs.core.merge.call(null,inst_30933,style);
var inst_30935 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30930__$1,inst_30934);
var inst_30936 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30930__$1,msg);
var inst_30937 = cljs.core.async.timeout.call(null,(300));
var state_30945__$1 = (function (){var statearr_30948 = state_30945;
(statearr_30948[(7)] = inst_30930__$1);

(statearr_30948[(9)] = inst_30936);

(statearr_30948[(10)] = inst_30935);

return statearr_30948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30945__$1,(2),inst_30937);
} else {
return null;
}
}
});})(c__21999__auto__))
;
return ((function (switch__21937__auto__,c__21999__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto____0 = (function (){
var statearr_30952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30952[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto__);

(statearr_30952[(1)] = (1));

return statearr_30952;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto____1 = (function (state_30945){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_30945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e30953){if((e30953 instanceof Object)){
var ex__21941__auto__ = e30953;
var statearr_30954_30956 = state_30945;
(statearr_30954_30956[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30957 = state_30945;
state_30945 = G__30957;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto__ = function(state_30945){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto____1.call(this,state_30945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__))
})();
var state__22001__auto__ = (function (){var statearr_30955 = f__22000__auto__.call(null);
(statearr_30955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_30955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__))
);

return c__21999__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__30959 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30959,(0),null);
var ln = cljs.core.nth.call(null,vec__30959,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30962 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30962,(0),null);
var file_line = cljs.core.nth.call(null,vec__30962,(1),null);
var file_column = cljs.core.nth.call(null,vec__30962,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30962,file_name,file_line,file_column){
return (function (p1__30960_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30960_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30962,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18116__auto__ = file_line;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
var and__18104__auto__ = cause;
if(cljs.core.truth_(and__18104__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18104__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30964 = figwheel.client.heads_up.ensure_container.call(null);
var map__30964__$1 = ((cljs.core.seq_QMARK_.call(null,map__30964))?cljs.core.apply.call(null,cljs.core.hash_map,map__30964):map__30964);
var content_area_el = cljs.core.get.call(null,map__30964__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__){
return (function (state_31011){
var state_val_31012 = (state_31011[(1)]);
if((state_val_31012 === (3))){
var inst_30994 = (state_31011[(7)]);
var inst_31008 = (state_31011[(2)]);
var inst_31009 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30994,"");
var state_31011__$1 = (function (){var statearr_31013 = state_31011;
(statearr_31013[(8)] = inst_31008);

return statearr_31013;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31011__$1,inst_31009);
} else {
if((state_val_31012 === (2))){
var inst_30994 = (state_31011[(7)]);
var inst_31001 = (state_31011[(2)]);
var inst_31002 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31003 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31004 = cljs.core.PersistentHashMap.fromArrays(inst_31002,inst_31003);
var inst_31005 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30994,inst_31004);
var inst_31006 = cljs.core.async.timeout.call(null,(200));
var state_31011__$1 = (function (){var statearr_31014 = state_31011;
(statearr_31014[(9)] = inst_31005);

(statearr_31014[(10)] = inst_31001);

return statearr_31014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(3),inst_31006);
} else {
if((state_val_31012 === (1))){
var inst_30994 = (state_31011[(7)]);
var inst_30994__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30995 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30996 = ["0.0"];
var inst_30997 = cljs.core.PersistentHashMap.fromArrays(inst_30995,inst_30996);
var inst_30998 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30994__$1,inst_30997);
var inst_30999 = cljs.core.async.timeout.call(null,(300));
var state_31011__$1 = (function (){var statearr_31015 = state_31011;
(statearr_31015[(7)] = inst_30994__$1);

(statearr_31015[(11)] = inst_30998);

return statearr_31015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31011__$1,(2),inst_30999);
} else {
return null;
}
}
}
});})(c__21999__auto__))
;
return ((function (switch__21937__auto__,c__21999__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21938__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21938__auto____0 = (function (){
var statearr_31019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31019[(0)] = figwheel$client$heads_up$clear_$_state_machine__21938__auto__);

(statearr_31019[(1)] = (1));

return statearr_31019;
});
var figwheel$client$heads_up$clear_$_state_machine__21938__auto____1 = (function (state_31011){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_31011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e31020){if((e31020 instanceof Object)){
var ex__21941__auto__ = e31020;
var statearr_31021_31023 = state_31011;
(statearr_31021_31023[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31024 = state_31011;
state_31011 = G__31024;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21938__auto__ = function(state_31011){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21938__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21938__auto____1.call(this,state_31011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21938__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21938__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__))
})();
var state__22001__auto__ = (function (){var statearr_31022 = f__22000__auto__.call(null);
(statearr_31022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__))
);

return c__21999__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__){
return (function (state_31056){
var state_val_31057 = (state_31056[(1)]);
if((state_val_31057 === (4))){
var inst_31054 = (state_31056[(2)]);
var state_31056__$1 = state_31056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31056__$1,inst_31054);
} else {
if((state_val_31057 === (3))){
var inst_31051 = (state_31056[(2)]);
var inst_31052 = figwheel.client.heads_up.clear.call(null);
var state_31056__$1 = (function (){var statearr_31058 = state_31056;
(statearr_31058[(7)] = inst_31051);

return statearr_31058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31056__$1,(4),inst_31052);
} else {
if((state_val_31057 === (2))){
var inst_31048 = (state_31056[(2)]);
var inst_31049 = cljs.core.async.timeout.call(null,(400));
var state_31056__$1 = (function (){var statearr_31059 = state_31056;
(statearr_31059[(8)] = inst_31048);

return statearr_31059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31056__$1,(3),inst_31049);
} else {
if((state_val_31057 === (1))){
var inst_31046 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31056__$1 = state_31056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31056__$1,(2),inst_31046);
} else {
return null;
}
}
}
}
});})(c__21999__auto__))
;
return ((function (switch__21937__auto__,c__21999__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto____0 = (function (){
var statearr_31063 = [null,null,null,null,null,null,null,null,null];
(statearr_31063[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto__);

(statearr_31063[(1)] = (1));

return statearr_31063;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto____1 = (function (state_31056){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_31056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e31064){if((e31064 instanceof Object)){
var ex__21941__auto__ = e31064;
var statearr_31065_31067 = state_31056;
(statearr_31065_31067[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31068 = state_31056;
state_31056 = G__31068;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto__ = function(state_31056){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto____1.call(this,state_31056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__))
})();
var state__22001__auto__ = (function (){var statearr_31066 = f__22000__auto__.call(null);
(statearr_31066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_31066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__))
);

return c__21999__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1431292033187