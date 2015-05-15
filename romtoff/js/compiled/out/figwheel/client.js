// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30072__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30073__i = 0, G__30073__a = new Array(arguments.length -  0);
while (G__30073__i < G__30073__a.length) {G__30073__a[G__30073__i] = arguments[G__30073__i + 0]; ++G__30073__i;}
  args = new cljs.core.IndexedSeq(G__30073__a,0);
} 
return G__30072__delegate.call(this,args);};
G__30072.cljs$lang$maxFixedArity = 0;
G__30072.cljs$lang$applyTo = (function (arglist__30074){
var args = cljs.core.seq(arglist__30074);
return G__30072__delegate(args);
});
G__30072.cljs$core$IFn$_invoke$arity$variadic = G__30072__delegate;
return G__30072;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30075){
var map__30077 = p__30075;
var map__30077__$1 = ((cljs.core.seq_QMARK_.call(null,map__30077))?cljs.core.apply.call(null,cljs.core.hash_map,map__30077):map__30077);
var class$ = cljs.core.get.call(null,map__30077__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30077__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18116__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18104__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18104__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18104__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21999__auto___30206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___30206,ch){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___30206,ch){
return (function (state_30180){
var state_val_30181 = (state_30180[(1)]);
if((state_val_30181 === (7))){
var inst_30176 = (state_30180[(2)]);
var state_30180__$1 = state_30180;
var statearr_30182_30207 = state_30180__$1;
(statearr_30182_30207[(2)] = inst_30176);

(statearr_30182_30207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (1))){
var state_30180__$1 = state_30180;
var statearr_30183_30208 = state_30180__$1;
(statearr_30183_30208[(2)] = null);

(statearr_30183_30208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (4))){
var inst_30144 = (state_30180[(7)]);
var inst_30144__$1 = (state_30180[(2)]);
var state_30180__$1 = (function (){var statearr_30184 = state_30180;
(statearr_30184[(7)] = inst_30144__$1);

return statearr_30184;
})();
if(cljs.core.truth_(inst_30144__$1)){
var statearr_30185_30209 = state_30180__$1;
(statearr_30185_30209[(1)] = (5));

} else {
var statearr_30186_30210 = state_30180__$1;
(statearr_30186_30210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (13))){
var state_30180__$1 = state_30180;
var statearr_30187_30211 = state_30180__$1;
(statearr_30187_30211[(2)] = null);

(statearr_30187_30211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (6))){
var state_30180__$1 = state_30180;
var statearr_30188_30212 = state_30180__$1;
(statearr_30188_30212[(2)] = null);

(statearr_30188_30212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (3))){
var inst_30178 = (state_30180[(2)]);
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30180__$1,inst_30178);
} else {
if((state_val_30181 === (12))){
var inst_30151 = (state_30180[(8)]);
var inst_30164 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30151);
var inst_30165 = cljs.core.first.call(null,inst_30164);
var inst_30166 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30165);
var inst_30167 = console.warn("Figwheel: Not loading code with warnings - ",inst_30166);
var state_30180__$1 = state_30180;
var statearr_30189_30213 = state_30180__$1;
(statearr_30189_30213[(2)] = inst_30167);

(statearr_30189_30213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (2))){
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30180__$1,(4),ch);
} else {
if((state_val_30181 === (11))){
var inst_30160 = (state_30180[(2)]);
var state_30180__$1 = state_30180;
var statearr_30190_30214 = state_30180__$1;
(statearr_30190_30214[(2)] = inst_30160);

(statearr_30190_30214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (9))){
var inst_30150 = (state_30180[(9)]);
var inst_30162 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30150,opts);
var state_30180__$1 = state_30180;
if(cljs.core.truth_(inst_30162)){
var statearr_30191_30215 = state_30180__$1;
(statearr_30191_30215[(1)] = (12));

} else {
var statearr_30192_30216 = state_30180__$1;
(statearr_30192_30216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (5))){
var inst_30150 = (state_30180[(9)]);
var inst_30144 = (state_30180[(7)]);
var inst_30146 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30147 = (new cljs.core.PersistentArrayMap(null,2,inst_30146,null));
var inst_30148 = (new cljs.core.PersistentHashSet(null,inst_30147,null));
var inst_30149 = figwheel.client.focus_msgs.call(null,inst_30148,inst_30144);
var inst_30150__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30149);
var inst_30151 = cljs.core.first.call(null,inst_30149);
var inst_30152 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30150__$1,opts);
var state_30180__$1 = (function (){var statearr_30193 = state_30180;
(statearr_30193[(9)] = inst_30150__$1);

(statearr_30193[(8)] = inst_30151);

return statearr_30193;
})();
if(cljs.core.truth_(inst_30152)){
var statearr_30194_30217 = state_30180__$1;
(statearr_30194_30217[(1)] = (8));

} else {
var statearr_30195_30218 = state_30180__$1;
(statearr_30195_30218[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (14))){
var inst_30170 = (state_30180[(2)]);
var state_30180__$1 = state_30180;
var statearr_30196_30219 = state_30180__$1;
(statearr_30196_30219[(2)] = inst_30170);

(statearr_30196_30219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (10))){
var inst_30172 = (state_30180[(2)]);
var state_30180__$1 = (function (){var statearr_30197 = state_30180;
(statearr_30197[(10)] = inst_30172);

return statearr_30197;
})();
var statearr_30198_30220 = state_30180__$1;
(statearr_30198_30220[(2)] = null);

(statearr_30198_30220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (8))){
var inst_30151 = (state_30180[(8)]);
var inst_30154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30155 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30151);
var inst_30156 = cljs.core.async.timeout.call(null,(1000));
var inst_30157 = [inst_30155,inst_30156];
var inst_30158 = (new cljs.core.PersistentVector(null,2,(5),inst_30154,inst_30157,null));
var state_30180__$1 = state_30180;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30180__$1,(11),inst_30158);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21999__auto___30206,ch))
;
return ((function (switch__21937__auto__,c__21999__auto___30206,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21938__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21938__auto____0 = (function (){
var statearr_30202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30202[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21938__auto__);

(statearr_30202[(1)] = (1));

return statearr_30202;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21938__auto____1 = (function (state_30180){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_30180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e30203){if((e30203 instanceof Object)){
var ex__21941__auto__ = e30203;
var statearr_30204_30221 = state_30180;
(statearr_30204_30221[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30222 = state_30180;
state_30180 = G__30222;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21938__auto__ = function(state_30180){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21938__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21938__auto____1.call(this,state_30180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21938__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21938__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___30206,ch))
})();
var state__22001__auto__ = (function (){var statearr_30205 = f__22000__auto__.call(null);
(statearr_30205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___30206);

return statearr_30205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___30206,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30223_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30223_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30230 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30230){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30228 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30229 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30228,_STAR_print_newline_STAR_30229,base_path_30230){
return (function() { 
var G__30231__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30232__i = 0, G__30232__a = new Array(arguments.length -  0);
while (G__30232__i < G__30232__a.length) {G__30232__a[G__30232__i] = arguments[G__30232__i + 0]; ++G__30232__i;}
  args = new cljs.core.IndexedSeq(G__30232__a,0);
} 
return G__30231__delegate.call(this,args);};
G__30231.cljs$lang$maxFixedArity = 0;
G__30231.cljs$lang$applyTo = (function (arglist__30233){
var args = cljs.core.seq(arglist__30233);
return G__30231__delegate(args);
});
G__30231.cljs$core$IFn$_invoke$arity$variadic = G__30231__delegate;
return G__30231;
})()
;})(_STAR_print_fn_STAR_30228,_STAR_print_newline_STAR_30229,base_path_30230))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30229;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30228;
}}catch (e30227){if((e30227 instanceof Error)){
var e = e30227;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30230], null));
} else {
var e = e30227;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30230))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30234){
var map__30239 = p__30234;
var map__30239__$1 = ((cljs.core.seq_QMARK_.call(null,map__30239))?cljs.core.apply.call(null,cljs.core.hash_map,map__30239):map__30239);
var opts = map__30239__$1;
var build_id = cljs.core.get.call(null,map__30239__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30239,map__30239__$1,opts,build_id){
return (function (p__30240){
var vec__30241 = p__30240;
var map__30242 = cljs.core.nth.call(null,vec__30241,(0),null);
var map__30242__$1 = ((cljs.core.seq_QMARK_.call(null,map__30242))?cljs.core.apply.call(null,cljs.core.hash_map,map__30242):map__30242);
var msg = map__30242__$1;
var msg_name = cljs.core.get.call(null,map__30242__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30241,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30241,map__30242,map__30242__$1,msg,msg_name,_,map__30239,map__30239__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30241,map__30242,map__30242__$1,msg,msg_name,_,map__30239,map__30239__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30239,map__30239__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30246){
var vec__30247 = p__30246;
var map__30248 = cljs.core.nth.call(null,vec__30247,(0),null);
var map__30248__$1 = ((cljs.core.seq_QMARK_.call(null,map__30248))?cljs.core.apply.call(null,cljs.core.hash_map,map__30248):map__30248);
var msg = map__30248__$1;
var msg_name = cljs.core.get.call(null,map__30248__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30247,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30249){
var map__30257 = p__30249;
var map__30257__$1 = ((cljs.core.seq_QMARK_.call(null,map__30257))?cljs.core.apply.call(null,cljs.core.hash_map,map__30257):map__30257);
var on_compile_fail = cljs.core.get.call(null,map__30257__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30257__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30257,map__30257__$1,on_compile_fail,on_compile_warning){
return (function (p__30258){
var vec__30259 = p__30258;
var map__30260 = cljs.core.nth.call(null,vec__30259,(0),null);
var map__30260__$1 = ((cljs.core.seq_QMARK_.call(null,map__30260))?cljs.core.apply.call(null,cljs.core.hash_map,map__30260):map__30260);
var msg = map__30260__$1;
var msg_name = cljs.core.get.call(null,map__30260__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30259,(1));
var pred__30261 = cljs.core._EQ_;
var expr__30262 = msg_name;
if(cljs.core.truth_(pred__30261.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30262))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30261.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30262))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30257,map__30257__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__,msg_hist,msg_names,msg){
return (function (state_30463){
var state_val_30464 = (state_30463[(1)]);
if((state_val_30464 === (7))){
var inst_30397 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30465_30506 = state_30463__$1;
(statearr_30465_30506[(2)] = inst_30397);

(statearr_30465_30506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (20))){
var inst_30425 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30425)){
var statearr_30466_30507 = state_30463__$1;
(statearr_30466_30507[(1)] = (22));

} else {
var statearr_30467_30508 = state_30463__$1;
(statearr_30467_30508[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (27))){
var inst_30437 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30438 = figwheel.client.heads_up.display_warning.call(null,inst_30437);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(30),inst_30438);
} else {
if((state_val_30464 === (1))){
var inst_30385 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30385)){
var statearr_30468_30509 = state_30463__$1;
(statearr_30468_30509[(1)] = (2));

} else {
var statearr_30469_30510 = state_30463__$1;
(statearr_30469_30510[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (24))){
var inst_30453 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30470_30511 = state_30463__$1;
(statearr_30470_30511[(2)] = inst_30453);

(statearr_30470_30511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (4))){
var inst_30461 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30463__$1,inst_30461);
} else {
if((state_val_30464 === (15))){
var inst_30413 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30414 = figwheel.client.format_messages.call(null,inst_30413);
var inst_30415 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30416 = figwheel.client.heads_up.display_error.call(null,inst_30414,inst_30415);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(18),inst_30416);
} else {
if((state_val_30464 === (21))){
var inst_30455 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30471_30512 = state_30463__$1;
(statearr_30471_30512[(2)] = inst_30455);

(statearr_30471_30512[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (31))){
var inst_30444 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(34),inst_30444);
} else {
if((state_val_30464 === (32))){
var state_30463__$1 = state_30463;
var statearr_30472_30513 = state_30463__$1;
(statearr_30472_30513[(2)] = null);

(statearr_30472_30513[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (33))){
var inst_30449 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30473_30514 = state_30463__$1;
(statearr_30473_30514[(2)] = inst_30449);

(statearr_30473_30514[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (13))){
var inst_30403 = (state_30463[(2)]);
var inst_30404 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30405 = figwheel.client.format_messages.call(null,inst_30404);
var inst_30406 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30407 = figwheel.client.heads_up.display_error.call(null,inst_30405,inst_30406);
var state_30463__$1 = (function (){var statearr_30474 = state_30463;
(statearr_30474[(7)] = inst_30403);

return statearr_30474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(14),inst_30407);
} else {
if((state_val_30464 === (22))){
var inst_30427 = figwheel.client.heads_up.clear.call(null);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(25),inst_30427);
} else {
if((state_val_30464 === (29))){
var inst_30451 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30475_30515 = state_30463__$1;
(statearr_30475_30515[(2)] = inst_30451);

(statearr_30475_30515[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (6))){
var inst_30393 = figwheel.client.heads_up.clear.call(null);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(9),inst_30393);
} else {
if((state_val_30464 === (28))){
var inst_30442 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30442)){
var statearr_30476_30516 = state_30463__$1;
(statearr_30476_30516[(1)] = (31));

} else {
var statearr_30477_30517 = state_30463__$1;
(statearr_30477_30517[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (25))){
var inst_30429 = (state_30463[(2)]);
var inst_30430 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30431 = figwheel.client.heads_up.display_warning.call(null,inst_30430);
var state_30463__$1 = (function (){var statearr_30478 = state_30463;
(statearr_30478[(8)] = inst_30429);

return statearr_30478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(26),inst_30431);
} else {
if((state_val_30464 === (34))){
var inst_30446 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30479_30518 = state_30463__$1;
(statearr_30479_30518[(2)] = inst_30446);

(statearr_30479_30518[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (17))){
var inst_30457 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30480_30519 = state_30463__$1;
(statearr_30480_30519[(2)] = inst_30457);

(statearr_30480_30519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (3))){
var inst_30399 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30399)){
var statearr_30481_30520 = state_30463__$1;
(statearr_30481_30520[(1)] = (10));

} else {
var statearr_30482_30521 = state_30463__$1;
(statearr_30482_30521[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (12))){
var inst_30459 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30483_30522 = state_30463__$1;
(statearr_30483_30522[(2)] = inst_30459);

(statearr_30483_30522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (2))){
var inst_30387 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30387)){
var statearr_30484_30523 = state_30463__$1;
(statearr_30484_30523[(1)] = (5));

} else {
var statearr_30485_30524 = state_30463__$1;
(statearr_30485_30524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (23))){
var inst_30435 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30435)){
var statearr_30486_30525 = state_30463__$1;
(statearr_30486_30525[(1)] = (27));

} else {
var statearr_30487_30526 = state_30463__$1;
(statearr_30487_30526[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (19))){
var inst_30422 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30423 = figwheel.client.heads_up.append_message.call(null,inst_30422);
var state_30463__$1 = state_30463;
var statearr_30488_30527 = state_30463__$1;
(statearr_30488_30527[(2)] = inst_30423);

(statearr_30488_30527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (11))){
var inst_30411 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30411)){
var statearr_30489_30528 = state_30463__$1;
(statearr_30489_30528[(1)] = (15));

} else {
var statearr_30490_30529 = state_30463__$1;
(statearr_30490_30529[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (9))){
var inst_30395 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30491_30530 = state_30463__$1;
(statearr_30491_30530[(2)] = inst_30395);

(statearr_30491_30530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (5))){
var inst_30389 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(8),inst_30389);
} else {
if((state_val_30464 === (14))){
var inst_30409 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30492_30531 = state_30463__$1;
(statearr_30492_30531[(2)] = inst_30409);

(statearr_30492_30531[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (26))){
var inst_30433 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30493_30532 = state_30463__$1;
(statearr_30493_30532[(2)] = inst_30433);

(statearr_30493_30532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (16))){
var inst_30420 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30420)){
var statearr_30494_30533 = state_30463__$1;
(statearr_30494_30533[(1)] = (19));

} else {
var statearr_30495_30534 = state_30463__$1;
(statearr_30495_30534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (30))){
var inst_30440 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30496_30535 = state_30463__$1;
(statearr_30496_30535[(2)] = inst_30440);

(statearr_30496_30535[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (10))){
var inst_30401 = figwheel.client.heads_up.clear.call(null);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(13),inst_30401);
} else {
if((state_val_30464 === (18))){
var inst_30418 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30497_30536 = state_30463__$1;
(statearr_30497_30536[(2)] = inst_30418);

(statearr_30497_30536[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (8))){
var inst_30391 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30498_30537 = state_30463__$1;
(statearr_30498_30537[(2)] = inst_30391);

(statearr_30498_30537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21999__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21937__auto__,c__21999__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto____0 = (function (){
var statearr_30502 = [null,null,null,null,null,null,null,null,null];
(statearr_30502[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto__);

(statearr_30502[(1)] = (1));

return statearr_30502;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto____1 = (function (state_30463){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_30463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e30503){if((e30503 instanceof Object)){
var ex__21941__auto__ = e30503;
var statearr_30504_30538 = state_30463;
(statearr_30504_30538[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30539 = state_30463;
state_30463 = G__30539;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto__ = function(state_30463){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto____1.call(this,state_30463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__,msg_hist,msg_names,msg))
})();
var state__22001__auto__ = (function (){var statearr_30505 = f__22000__auto__.call(null);
(statearr_30505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_30505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__,msg_hist,msg_names,msg))
);

return c__21999__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21999__auto___30602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___30602,ch){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___30602,ch){
return (function (state_30585){
var state_val_30586 = (state_30585[(1)]);
if((state_val_30586 === (8))){
var inst_30577 = (state_30585[(2)]);
var state_30585__$1 = (function (){var statearr_30587 = state_30585;
(statearr_30587[(7)] = inst_30577);

return statearr_30587;
})();
var statearr_30588_30603 = state_30585__$1;
(statearr_30588_30603[(2)] = null);

(statearr_30588_30603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (7))){
var inst_30581 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
var statearr_30589_30604 = state_30585__$1;
(statearr_30589_30604[(2)] = inst_30581);

(statearr_30589_30604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (6))){
var state_30585__$1 = state_30585;
var statearr_30590_30605 = state_30585__$1;
(statearr_30590_30605[(2)] = null);

(statearr_30590_30605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (5))){
var inst_30573 = (state_30585[(8)]);
var inst_30575 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30573);
var state_30585__$1 = state_30585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30585__$1,(8),inst_30575);
} else {
if((state_val_30586 === (4))){
var inst_30573 = (state_30585[(8)]);
var inst_30573__$1 = (state_30585[(2)]);
var state_30585__$1 = (function (){var statearr_30591 = state_30585;
(statearr_30591[(8)] = inst_30573__$1);

return statearr_30591;
})();
if(cljs.core.truth_(inst_30573__$1)){
var statearr_30592_30606 = state_30585__$1;
(statearr_30592_30606[(1)] = (5));

} else {
var statearr_30593_30607 = state_30585__$1;
(statearr_30593_30607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30586 === (3))){
var inst_30583 = (state_30585[(2)]);
var state_30585__$1 = state_30585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30585__$1,inst_30583);
} else {
if((state_val_30586 === (2))){
var state_30585__$1 = state_30585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30585__$1,(4),ch);
} else {
if((state_val_30586 === (1))){
var state_30585__$1 = state_30585;
var statearr_30594_30608 = state_30585__$1;
(statearr_30594_30608[(2)] = null);

(statearr_30594_30608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21999__auto___30602,ch))
;
return ((function (switch__21937__auto__,c__21999__auto___30602,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21938__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21938__auto____0 = (function (){
var statearr_30598 = [null,null,null,null,null,null,null,null,null];
(statearr_30598[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21938__auto__);

(statearr_30598[(1)] = (1));

return statearr_30598;
});
var figwheel$client$heads_up_plugin_$_state_machine__21938__auto____1 = (function (state_30585){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_30585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e30599){if((e30599 instanceof Object)){
var ex__21941__auto__ = e30599;
var statearr_30600_30609 = state_30585;
(statearr_30600_30609[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30610 = state_30585;
state_30585 = G__30610;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21938__auto__ = function(state_30585){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21938__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21938__auto____1.call(this,state_30585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21938__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21938__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___30602,ch))
})();
var state__22001__auto__ = (function (){var statearr_30601 = f__22000__auto__.call(null);
(statearr_30601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___30602);

return statearr_30601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___30602,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__){
return (function (state_30631){
var state_val_30632 = (state_30631[(1)]);
if((state_val_30632 === (2))){
var inst_30628 = (state_30631[(2)]);
var inst_30629 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30631__$1 = (function (){var statearr_30633 = state_30631;
(statearr_30633[(7)] = inst_30628);

return statearr_30633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30631__$1,inst_30629);
} else {
if((state_val_30632 === (1))){
var inst_30626 = cljs.core.async.timeout.call(null,(3000));
var state_30631__$1 = state_30631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30631__$1,(2),inst_30626);
} else {
return null;
}
}
});})(c__21999__auto__))
;
return ((function (switch__21937__auto__,c__21999__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21938__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21938__auto____0 = (function (){
var statearr_30637 = [null,null,null,null,null,null,null,null];
(statearr_30637[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21938__auto__);

(statearr_30637[(1)] = (1));

return statearr_30637;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21938__auto____1 = (function (state_30631){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_30631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e30638){if((e30638 instanceof Object)){
var ex__21941__auto__ = e30638;
var statearr_30639_30641 = state_30631;
(statearr_30639_30641[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30642 = state_30631;
state_30631 = G__30642;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21938__auto__ = function(state_30631){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21938__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21938__auto____1.call(this,state_30631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21938__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21938__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__))
})();
var state__22001__auto__ = (function (){var statearr_30640 = f__22000__auto__.call(null);
(statearr_30640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_30640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__))
);

return c__21999__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__18104__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__18104__auto__)){
return ("CustomEvent" in window);
} else {
return and__18104__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30646 = {"detail":url};
return obj30646;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30647){
var map__30653 = p__30647;
var map__30653__$1 = ((cljs.core.seq_QMARK_.call(null,map__30653))?cljs.core.apply.call(null,cljs.core.hash_map,map__30653):map__30653);
var ed = map__30653__$1;
var cause = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30653__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30654_30658 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30655_30659 = null;
var count__30656_30660 = (0);
var i__30657_30661 = (0);
while(true){
if((i__30657_30661 < count__30656_30660)){
var msg_30662 = cljs.core._nth.call(null,chunk__30655_30659,i__30657_30661);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30662);

var G__30663 = seq__30654_30658;
var G__30664 = chunk__30655_30659;
var G__30665 = count__30656_30660;
var G__30666 = (i__30657_30661 + (1));
seq__30654_30658 = G__30663;
chunk__30655_30659 = G__30664;
count__30656_30660 = G__30665;
i__30657_30661 = G__30666;
continue;
} else {
var temp__4126__auto___30667 = cljs.core.seq.call(null,seq__30654_30658);
if(temp__4126__auto___30667){
var seq__30654_30668__$1 = temp__4126__auto___30667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30654_30668__$1)){
var c__18901__auto___30669 = cljs.core.chunk_first.call(null,seq__30654_30668__$1);
var G__30670 = cljs.core.chunk_rest.call(null,seq__30654_30668__$1);
var G__30671 = c__18901__auto___30669;
var G__30672 = cljs.core.count.call(null,c__18901__auto___30669);
var G__30673 = (0);
seq__30654_30658 = G__30670;
chunk__30655_30659 = G__30671;
count__30656_30660 = G__30672;
i__30657_30661 = G__30673;
continue;
} else {
var msg_30674 = cljs.core.first.call(null,seq__30654_30668__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30674);

var G__30675 = cljs.core.next.call(null,seq__30654_30668__$1);
var G__30676 = null;
var G__30677 = (0);
var G__30678 = (0);
seq__30654_30658 = G__30675;
chunk__30655_30659 = G__30676;
count__30656_30660 = G__30677;
i__30657_30661 = G__30678;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30679){
var map__30681 = p__30679;
var map__30681__$1 = ((cljs.core.seq_QMARK_.call(null,map__30681))?cljs.core.apply.call(null,cljs.core.hash_map,map__30681):map__30681);
var w = map__30681__$1;
var message = cljs.core.get.call(null,map__30681__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18104__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18104__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18104__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30688 = cljs.core.seq.call(null,plugins);
var chunk__30689 = null;
var count__30690 = (0);
var i__30691 = (0);
while(true){
if((i__30691 < count__30690)){
var vec__30692 = cljs.core._nth.call(null,chunk__30689,i__30691);
var k = cljs.core.nth.call(null,vec__30692,(0),null);
var plugin = cljs.core.nth.call(null,vec__30692,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30694 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30688,chunk__30689,count__30690,i__30691,pl_30694,vec__30692,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30694.call(null,msg_hist);
});})(seq__30688,chunk__30689,count__30690,i__30691,pl_30694,vec__30692,k,plugin))
);
} else {
}

var G__30695 = seq__30688;
var G__30696 = chunk__30689;
var G__30697 = count__30690;
var G__30698 = (i__30691 + (1));
seq__30688 = G__30695;
chunk__30689 = G__30696;
count__30690 = G__30697;
i__30691 = G__30698;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30688);
if(temp__4126__auto__){
var seq__30688__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30688__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__30688__$1);
var G__30699 = cljs.core.chunk_rest.call(null,seq__30688__$1);
var G__30700 = c__18901__auto__;
var G__30701 = cljs.core.count.call(null,c__18901__auto__);
var G__30702 = (0);
seq__30688 = G__30699;
chunk__30689 = G__30700;
count__30690 = G__30701;
i__30691 = G__30702;
continue;
} else {
var vec__30693 = cljs.core.first.call(null,seq__30688__$1);
var k = cljs.core.nth.call(null,vec__30693,(0),null);
var plugin = cljs.core.nth.call(null,vec__30693,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30703 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30688,chunk__30689,count__30690,i__30691,pl_30703,vec__30693,k,plugin,seq__30688__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30703.call(null,msg_hist);
});})(seq__30688,chunk__30689,count__30690,i__30691,pl_30703,vec__30693,k,plugin,seq__30688__$1,temp__4126__auto__))
);
} else {
}

var G__30704 = cljs.core.next.call(null,seq__30688__$1);
var G__30705 = null;
var G__30706 = (0);
var G__30707 = (0);
seq__30688 = G__30704;
chunk__30689 = G__30705;
count__30690 = G__30706;
i__30691 = G__30707;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__30709 = arguments.length;
switch (G__30709) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19156__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19156__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30712){
var map__30713 = p__30712;
var map__30713__$1 = ((cljs.core.seq_QMARK_.call(null,map__30713))?cljs.core.apply.call(null,cljs.core.hash_map,map__30713):map__30713);
var opts = map__30713__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30711){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30711));
});

//# sourceMappingURL=client.js.map?rel=1431292032480