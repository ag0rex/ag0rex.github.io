// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31144_SHARP_,p2__31145_SHARP_){
var and__18104__auto__ = p1__31144_SHARP_;
if(cljs.core.truth_(and__18104__auto__)){
return p2__31145_SHARP_;
} else {
return and__18104__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18116__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18116__auto__){
return or__18116__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18116__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18116__auto__){
return or__18116__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18116__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31146){
var map__31147 = p__31146;
var map__31147__$1 = ((cljs.core.seq_QMARK_.call(null,map__31147))?cljs.core.apply.call(null,cljs.core.hash_map,map__31147):map__31147);
var file = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31148){
var map__31149 = p__31148;
var map__31149__$1 = ((cljs.core.seq_QMARK_.call(null,map__31149))?cljs.core.apply.call(null,cljs.core.hash_map,map__31149):map__31149);
var namespace = cljs.core.get.call(null,map__31149__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31150){if((e31150 instanceof Error)){
var e = e31150;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31150;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__31152 = arguments.length;
switch (G__31152) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31154,callback){
var map__31156 = p__31154;
var map__31156__$1 = ((cljs.core.seq_QMARK_.call(null,map__31156))?cljs.core.apply.call(null,cljs.core.hash_map,map__31156):map__31156);
var file_msg = map__31156__$1;
var request_url = cljs.core.get.call(null,map__31156__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31156,map__31156__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31156,map__31156__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31157){
var map__31159 = p__31157;
var map__31159__$1 = ((cljs.core.seq_QMARK_.call(null,map__31159))?cljs.core.apply.call(null,cljs.core.hash_map,map__31159):map__31159);
var file_msg = map__31159__$1;
var meta_data = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18116__auto__ = meta_data;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18104__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18104__auto__){
var or__18116__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18116__auto____$1)){
return or__18116__auto____$1;
} else {
var and__18104__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18104__auto____$1){
var or__18116__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18116__auto____$2){
return or__18116__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18104__auto____$1;
}
}
}
} else {
return and__18104__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31160,callback){
var map__31162 = p__31160;
var map__31162__$1 = ((cljs.core.seq_QMARK_.call(null,map__31162))?cljs.core.apply.call(null,cljs.core.hash_map,map__31162):map__31162);
var file_msg = map__31162__$1;
var namespace = cljs.core.get.call(null,map__31162__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31162__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21999__auto___31249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___31249,out){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___31249,out){
return (function (state_31231){
var state_val_31232 = (state_31231[(1)]);
if((state_val_31232 === (7))){
var inst_31215 = (state_31231[(7)]);
var inst_31221 = (state_31231[(2)]);
var inst_31222 = cljs.core.async.put_BANG_.call(null,out,inst_31221);
var inst_31211 = inst_31215;
var state_31231__$1 = (function (){var statearr_31233 = state_31231;
(statearr_31233[(8)] = inst_31211);

(statearr_31233[(9)] = inst_31222);

return statearr_31233;
})();
var statearr_31234_31250 = state_31231__$1;
(statearr_31234_31250[(2)] = null);

(statearr_31234_31250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (6))){
var inst_31227 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
var statearr_31235_31251 = state_31231__$1;
(statearr_31235_31251[(2)] = inst_31227);

(statearr_31235_31251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (5))){
var inst_31225 = cljs.core.async.close_BANG_.call(null,out);
var state_31231__$1 = state_31231;
var statearr_31236_31252 = state_31231__$1;
(statearr_31236_31252[(2)] = inst_31225);

(statearr_31236_31252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (4))){
var inst_31214 = (state_31231[(10)]);
var inst_31219 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31214);
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31231__$1,(7),inst_31219);
} else {
if((state_val_31232 === (3))){
var inst_31229 = (state_31231[(2)]);
var state_31231__$1 = state_31231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31231__$1,inst_31229);
} else {
if((state_val_31232 === (2))){
var inst_31214 = (state_31231[(10)]);
var inst_31211 = (state_31231[(8)]);
var inst_31214__$1 = cljs.core.nth.call(null,inst_31211,(0),null);
var inst_31215 = cljs.core.nthnext.call(null,inst_31211,(1));
var inst_31216 = (inst_31214__$1 == null);
var inst_31217 = cljs.core.not.call(null,inst_31216);
var state_31231__$1 = (function (){var statearr_31237 = state_31231;
(statearr_31237[(7)] = inst_31215);

(statearr_31237[(10)] = inst_31214__$1);

return statearr_31237;
})();
if(inst_31217){
var statearr_31238_31253 = state_31231__$1;
(statearr_31238_31253[(1)] = (4));

} else {
var statearr_31239_31254 = state_31231__$1;
(statearr_31239_31254[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31232 === (1))){
var inst_31209 = cljs.core.nth.call(null,files,(0),null);
var inst_31210 = cljs.core.nthnext.call(null,files,(1));
var inst_31211 = files;
var state_31231__$1 = (function (){var statearr_31240 = state_31231;
(statearr_31240[(8)] = inst_31211);

(statearr_31240[(11)] = inst_31210);

(statearr_31240[(12)] = inst_31209);

return statearr_31240;
})();
var statearr_31241_31255 = state_31231__$1;
(statearr_31241_31255[(2)] = null);

(statearr_31241_31255[(1)] = (2));


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
});})(c__21999__auto___31249,out))
;
return ((function (switch__21937__auto__,c__21999__auto___31249,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto____0 = (function (){
var statearr_31245 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31245[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto__);

(statearr_31245[(1)] = (1));

return statearr_31245;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto____1 = (function (state_31231){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_31231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e31246){if((e31246 instanceof Object)){
var ex__21941__auto__ = e31246;
var statearr_31247_31256 = state_31231;
(statearr_31247_31256[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31257 = state_31231;
state_31231 = G__31257;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto__ = function(state_31231){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto____1.call(this,state_31231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___31249,out))
})();
var state__22001__auto__ = (function (){var statearr_31248 = f__22000__auto__.call(null);
(statearr_31248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___31249);

return statearr_31248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___31249,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__31258,p__31259){
var map__31262 = p__31258;
var map__31262__$1 = ((cljs.core.seq_QMARK_.call(null,map__31262))?cljs.core.apply.call(null,cljs.core.hash_map,map__31262):map__31262);
var opts = map__31262__$1;
var url_rewriter = cljs.core.get.call(null,map__31262__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31263 = p__31259;
var map__31263__$1 = ((cljs.core.seq_QMARK_.call(null,map__31263))?cljs.core.apply.call(null,cljs.core.hash_map,map__31263):map__31263);
var file_msg = map__31263__$1;
var file = cljs.core.get.call(null,map__31263__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31264){
var map__31267 = p__31264;
var map__31267__$1 = ((cljs.core.seq_QMARK_.call(null,map__31267))?cljs.core.apply.call(null,cljs.core.hash_map,map__31267):map__31267);
var file = cljs.core.get.call(null,map__31267__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31267__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18104__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18104__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18104__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31268){var e = e31268;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31273,p__31274){
var map__31475 = p__31273;
var map__31475__$1 = ((cljs.core.seq_QMARK_.call(null,map__31475))?cljs.core.apply.call(null,cljs.core.hash_map,map__31475):map__31475);
var opts = map__31475__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31475__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31475__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31475__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31476 = p__31274;
var map__31476__$1 = ((cljs.core.seq_QMARK_.call(null,map__31476))?cljs.core.apply.call(null,cljs.core.hash_map,map__31476):map__31476);
var msg = map__31476__$1;
var files = cljs.core.get.call(null,map__31476__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files){
return (function (state_31600){
var state_val_31601 = (state_31600[(1)]);
if((state_val_31601 === (7))){
var inst_31487 = (state_31600[(7)]);
var inst_31490 = (state_31600[(8)]);
var inst_31489 = (state_31600[(9)]);
var inst_31488 = (state_31600[(10)]);
var inst_31495 = cljs.core._nth.call(null,inst_31488,inst_31490);
var inst_31496 = figwheel.client.file_reloading.eval_body.call(null,inst_31495);
var inst_31497 = (inst_31490 + (1));
var tmp31602 = inst_31487;
var tmp31603 = inst_31489;
var tmp31604 = inst_31488;
var inst_31487__$1 = tmp31602;
var inst_31488__$1 = tmp31604;
var inst_31489__$1 = tmp31603;
var inst_31490__$1 = inst_31497;
var state_31600__$1 = (function (){var statearr_31605 = state_31600;
(statearr_31605[(11)] = inst_31496);

(statearr_31605[(7)] = inst_31487__$1);

(statearr_31605[(8)] = inst_31490__$1);

(statearr_31605[(9)] = inst_31489__$1);

(statearr_31605[(10)] = inst_31488__$1);

return statearr_31605;
})();
var statearr_31606_31675 = state_31600__$1;
(statearr_31606_31675[(2)] = null);

(statearr_31606_31675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (20))){
var inst_31533 = (state_31600[(12)]);
var inst_31532 = (state_31600[(13)]);
var inst_31539 = (state_31600[(14)]);
var inst_31536 = (state_31600[(15)]);
var inst_31537 = (state_31600[(16)]);
var inst_31542 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31544 = (function (){var files_not_loaded = inst_31539;
var res = inst_31537;
var res_SINGLEQUOTE_ = inst_31536;
var files_SINGLEQUOTE_ = inst_31533;
var all_files = inst_31532;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31533,inst_31532,inst_31539,inst_31536,inst_31537,inst_31542,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files){
return (function (p__31543){
var map__31607 = p__31543;
var map__31607__$1 = ((cljs.core.seq_QMARK_.call(null,map__31607))?cljs.core.apply.call(null,cljs.core.hash_map,map__31607):map__31607);
var file = cljs.core.get.call(null,map__31607__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31533,inst_31532,inst_31539,inst_31536,inst_31537,inst_31542,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files))
})();
var inst_31545 = cljs.core.map.call(null,inst_31544,inst_31537);
var inst_31546 = cljs.core.pr_str.call(null,inst_31545);
var inst_31547 = figwheel.client.utils.log.call(null,inst_31546);
var inst_31548 = (function (){var files_not_loaded = inst_31539;
var res = inst_31537;
var res_SINGLEQUOTE_ = inst_31536;
var files_SINGLEQUOTE_ = inst_31533;
var all_files = inst_31532;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31533,inst_31532,inst_31539,inst_31536,inst_31537,inst_31542,inst_31544,inst_31545,inst_31546,inst_31547,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31533,inst_31532,inst_31539,inst_31536,inst_31537,inst_31542,inst_31544,inst_31545,inst_31546,inst_31547,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files))
})();
var inst_31549 = setTimeout(inst_31548,(10));
var state_31600__$1 = (function (){var statearr_31608 = state_31600;
(statearr_31608[(17)] = inst_31547);

(statearr_31608[(18)] = inst_31542);

return statearr_31608;
})();
var statearr_31609_31676 = state_31600__$1;
(statearr_31609_31676[(2)] = inst_31549);

(statearr_31609_31676[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (27))){
var inst_31559 = (state_31600[(19)]);
var state_31600__$1 = state_31600;
var statearr_31610_31677 = state_31600__$1;
(statearr_31610_31677[(2)] = inst_31559);

(statearr_31610_31677[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (1))){
var inst_31479 = (state_31600[(20)]);
var inst_31477 = before_jsload.call(null,files);
var inst_31478 = (function (){return ((function (inst_31479,inst_31477,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files){
return (function (p1__31269_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31269_SHARP_);
});
;})(inst_31479,inst_31477,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files))
})();
var inst_31479__$1 = cljs.core.filter.call(null,inst_31478,files);
var inst_31480 = cljs.core.not_empty.call(null,inst_31479__$1);
var state_31600__$1 = (function (){var statearr_31611 = state_31600;
(statearr_31611[(21)] = inst_31477);

(statearr_31611[(20)] = inst_31479__$1);

return statearr_31611;
})();
if(cljs.core.truth_(inst_31480)){
var statearr_31612_31678 = state_31600__$1;
(statearr_31612_31678[(1)] = (2));

} else {
var statearr_31613_31679 = state_31600__$1;
(statearr_31613_31679[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (24))){
var state_31600__$1 = state_31600;
var statearr_31614_31680 = state_31600__$1;
(statearr_31614_31680[(2)] = null);

(statearr_31614_31680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (4))){
var inst_31524 = (state_31600[(2)]);
var inst_31525 = (function (){return ((function (inst_31524,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files){
return (function (p1__31270_SHARP_){
var and__18104__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31270_SHARP_);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31270_SHARP_));
} else {
return and__18104__auto__;
}
});
;})(inst_31524,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files))
})();
var inst_31526 = cljs.core.filter.call(null,inst_31525,files);
var state_31600__$1 = (function (){var statearr_31615 = state_31600;
(statearr_31615[(22)] = inst_31524);

(statearr_31615[(23)] = inst_31526);

return statearr_31615;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31616_31681 = state_31600__$1;
(statearr_31616_31681[(1)] = (16));

} else {
var statearr_31617_31682 = state_31600__$1;
(statearr_31617_31682[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (15))){
var inst_31514 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31618_31683 = state_31600__$1;
(statearr_31618_31683[(2)] = inst_31514);

(statearr_31618_31683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (21))){
var state_31600__$1 = state_31600;
var statearr_31619_31684 = state_31600__$1;
(statearr_31619_31684[(2)] = null);

(statearr_31619_31684[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (31))){
var inst_31567 = (state_31600[(24)]);
var inst_31577 = (state_31600[(2)]);
var inst_31578 = cljs.core.not_empty.call(null,inst_31567);
var state_31600__$1 = (function (){var statearr_31620 = state_31600;
(statearr_31620[(25)] = inst_31577);

return statearr_31620;
})();
if(cljs.core.truth_(inst_31578)){
var statearr_31621_31685 = state_31600__$1;
(statearr_31621_31685[(1)] = (32));

} else {
var statearr_31622_31686 = state_31600__$1;
(statearr_31622_31686[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (32))){
var inst_31567 = (state_31600[(24)]);
var inst_31580 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31567);
var inst_31581 = cljs.core.pr_str.call(null,inst_31580);
var inst_31582 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31581)].join('');
var inst_31583 = figwheel.client.utils.log.call(null,inst_31582);
var state_31600__$1 = state_31600;
var statearr_31623_31687 = state_31600__$1;
(statearr_31623_31687[(2)] = inst_31583);

(statearr_31623_31687[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (33))){
var state_31600__$1 = state_31600;
var statearr_31624_31688 = state_31600__$1;
(statearr_31624_31688[(2)] = null);

(statearr_31624_31688[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (13))){
var inst_31500 = (state_31600[(26)]);
var inst_31504 = cljs.core.chunk_first.call(null,inst_31500);
var inst_31505 = cljs.core.chunk_rest.call(null,inst_31500);
var inst_31506 = cljs.core.count.call(null,inst_31504);
var inst_31487 = inst_31505;
var inst_31488 = inst_31504;
var inst_31489 = inst_31506;
var inst_31490 = (0);
var state_31600__$1 = (function (){var statearr_31625 = state_31600;
(statearr_31625[(7)] = inst_31487);

(statearr_31625[(8)] = inst_31490);

(statearr_31625[(9)] = inst_31489);

(statearr_31625[(10)] = inst_31488);

return statearr_31625;
})();
var statearr_31626_31689 = state_31600__$1;
(statearr_31626_31689[(2)] = null);

(statearr_31626_31689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (22))){
var inst_31539 = (state_31600[(14)]);
var inst_31552 = (state_31600[(2)]);
var inst_31553 = cljs.core.not_empty.call(null,inst_31539);
var state_31600__$1 = (function (){var statearr_31627 = state_31600;
(statearr_31627[(27)] = inst_31552);

return statearr_31627;
})();
if(cljs.core.truth_(inst_31553)){
var statearr_31628_31690 = state_31600__$1;
(statearr_31628_31690[(1)] = (23));

} else {
var statearr_31629_31691 = state_31600__$1;
(statearr_31629_31691[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (36))){
var state_31600__$1 = state_31600;
var statearr_31630_31692 = state_31600__$1;
(statearr_31630_31692[(2)] = null);

(statearr_31630_31692[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (29))){
var inst_31568 = (state_31600[(28)]);
var inst_31571 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31568);
var inst_31572 = cljs.core.pr_str.call(null,inst_31571);
var inst_31573 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31572)].join('');
var inst_31574 = figwheel.client.utils.log.call(null,inst_31573);
var state_31600__$1 = state_31600;
var statearr_31631_31693 = state_31600__$1;
(statearr_31631_31693[(2)] = inst_31574);

(statearr_31631_31693[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (6))){
var inst_31521 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31632_31694 = state_31600__$1;
(statearr_31632_31694[(2)] = inst_31521);

(statearr_31632_31694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (28))){
var inst_31568 = (state_31600[(28)]);
var inst_31565 = (state_31600[(2)]);
var inst_31566 = cljs.core.get.call(null,inst_31565,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31567 = cljs.core.get.call(null,inst_31565,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31568__$1 = cljs.core.get.call(null,inst_31565,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31569 = cljs.core.not_empty.call(null,inst_31568__$1);
var state_31600__$1 = (function (){var statearr_31633 = state_31600;
(statearr_31633[(24)] = inst_31567);

(statearr_31633[(28)] = inst_31568__$1);

(statearr_31633[(29)] = inst_31566);

return statearr_31633;
})();
if(cljs.core.truth_(inst_31569)){
var statearr_31634_31695 = state_31600__$1;
(statearr_31634_31695[(1)] = (29));

} else {
var statearr_31635_31696 = state_31600__$1;
(statearr_31635_31696[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (25))){
var inst_31598 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31600__$1,inst_31598);
} else {
if((state_val_31601 === (34))){
var inst_31566 = (state_31600[(29)]);
var inst_31586 = (state_31600[(2)]);
var inst_31587 = cljs.core.not_empty.call(null,inst_31566);
var state_31600__$1 = (function (){var statearr_31636 = state_31600;
(statearr_31636[(30)] = inst_31586);

return statearr_31636;
})();
if(cljs.core.truth_(inst_31587)){
var statearr_31637_31697 = state_31600__$1;
(statearr_31637_31697[(1)] = (35));

} else {
var statearr_31638_31698 = state_31600__$1;
(statearr_31638_31698[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (17))){
var inst_31526 = (state_31600[(23)]);
var state_31600__$1 = state_31600;
var statearr_31639_31699 = state_31600__$1;
(statearr_31639_31699[(2)] = inst_31526);

(statearr_31639_31699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (3))){
var state_31600__$1 = state_31600;
var statearr_31640_31700 = state_31600__$1;
(statearr_31640_31700[(2)] = null);

(statearr_31640_31700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (12))){
var inst_31517 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31641_31701 = state_31600__$1;
(statearr_31641_31701[(2)] = inst_31517);

(statearr_31641_31701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (2))){
var inst_31479 = (state_31600[(20)]);
var inst_31486 = cljs.core.seq.call(null,inst_31479);
var inst_31487 = inst_31486;
var inst_31488 = null;
var inst_31489 = (0);
var inst_31490 = (0);
var state_31600__$1 = (function (){var statearr_31642 = state_31600;
(statearr_31642[(7)] = inst_31487);

(statearr_31642[(8)] = inst_31490);

(statearr_31642[(9)] = inst_31489);

(statearr_31642[(10)] = inst_31488);

return statearr_31642;
})();
var statearr_31643_31702 = state_31600__$1;
(statearr_31643_31702[(2)] = null);

(statearr_31643_31702[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (23))){
var inst_31533 = (state_31600[(12)]);
var inst_31532 = (state_31600[(13)]);
var inst_31539 = (state_31600[(14)]);
var inst_31536 = (state_31600[(15)]);
var inst_31559 = (state_31600[(19)]);
var inst_31537 = (state_31600[(16)]);
var inst_31555 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31558 = (function (){var files_not_loaded = inst_31539;
var res = inst_31537;
var res_SINGLEQUOTE_ = inst_31536;
var files_SINGLEQUOTE_ = inst_31533;
var all_files = inst_31532;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31533,inst_31532,inst_31539,inst_31536,inst_31559,inst_31537,inst_31555,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files){
return (function (p__31557){
var map__31644 = p__31557;
var map__31644__$1 = ((cljs.core.seq_QMARK_.call(null,map__31644))?cljs.core.apply.call(null,cljs.core.hash_map,map__31644):map__31644);
var meta_data = cljs.core.get.call(null,map__31644__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31533,inst_31532,inst_31539,inst_31536,inst_31559,inst_31537,inst_31555,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files))
})();
var inst_31559__$1 = cljs.core.group_by.call(null,inst_31558,inst_31539);
var inst_31560 = cljs.core.seq_QMARK_.call(null,inst_31559__$1);
var state_31600__$1 = (function (){var statearr_31645 = state_31600;
(statearr_31645[(31)] = inst_31555);

(statearr_31645[(19)] = inst_31559__$1);

return statearr_31645;
})();
if(inst_31560){
var statearr_31646_31703 = state_31600__$1;
(statearr_31646_31703[(1)] = (26));

} else {
var statearr_31647_31704 = state_31600__$1;
(statearr_31647_31704[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (35))){
var inst_31566 = (state_31600[(29)]);
var inst_31589 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31566);
var inst_31590 = cljs.core.pr_str.call(null,inst_31589);
var inst_31591 = [cljs.core.str("not required: "),cljs.core.str(inst_31590)].join('');
var inst_31592 = figwheel.client.utils.log.call(null,inst_31591);
var state_31600__$1 = state_31600;
var statearr_31648_31705 = state_31600__$1;
(statearr_31648_31705[(2)] = inst_31592);

(statearr_31648_31705[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (19))){
var inst_31533 = (state_31600[(12)]);
var inst_31532 = (state_31600[(13)]);
var inst_31536 = (state_31600[(15)]);
var inst_31537 = (state_31600[(16)]);
var inst_31536__$1 = (state_31600[(2)]);
var inst_31537__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31536__$1);
var inst_31538 = (function (){var res = inst_31537__$1;
var res_SINGLEQUOTE_ = inst_31536__$1;
var files_SINGLEQUOTE_ = inst_31533;
var all_files = inst_31532;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31533,inst_31532,inst_31536,inst_31537,inst_31536__$1,inst_31537__$1,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files){
return (function (p1__31272_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31272_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31533,inst_31532,inst_31536,inst_31537,inst_31536__$1,inst_31537__$1,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files))
})();
var inst_31539 = cljs.core.filter.call(null,inst_31538,inst_31536__$1);
var inst_31540 = cljs.core.not_empty.call(null,inst_31537__$1);
var state_31600__$1 = (function (){var statearr_31649 = state_31600;
(statearr_31649[(14)] = inst_31539);

(statearr_31649[(15)] = inst_31536__$1);

(statearr_31649[(16)] = inst_31537__$1);

return statearr_31649;
})();
if(cljs.core.truth_(inst_31540)){
var statearr_31650_31706 = state_31600__$1;
(statearr_31650_31706[(1)] = (20));

} else {
var statearr_31651_31707 = state_31600__$1;
(statearr_31651_31707[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (11))){
var state_31600__$1 = state_31600;
var statearr_31652_31708 = state_31600__$1;
(statearr_31652_31708[(2)] = null);

(statearr_31652_31708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (9))){
var inst_31519 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31653_31709 = state_31600__$1;
(statearr_31653_31709[(2)] = inst_31519);

(statearr_31653_31709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (5))){
var inst_31490 = (state_31600[(8)]);
var inst_31489 = (state_31600[(9)]);
var inst_31492 = (inst_31490 < inst_31489);
var inst_31493 = inst_31492;
var state_31600__$1 = state_31600;
if(cljs.core.truth_(inst_31493)){
var statearr_31654_31710 = state_31600__$1;
(statearr_31654_31710[(1)] = (7));

} else {
var statearr_31655_31711 = state_31600__$1;
(statearr_31655_31711[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (14))){
var inst_31500 = (state_31600[(26)]);
var inst_31509 = cljs.core.first.call(null,inst_31500);
var inst_31510 = figwheel.client.file_reloading.eval_body.call(null,inst_31509);
var inst_31511 = cljs.core.next.call(null,inst_31500);
var inst_31487 = inst_31511;
var inst_31488 = null;
var inst_31489 = (0);
var inst_31490 = (0);
var state_31600__$1 = (function (){var statearr_31656 = state_31600;
(statearr_31656[(7)] = inst_31487);

(statearr_31656[(32)] = inst_31510);

(statearr_31656[(8)] = inst_31490);

(statearr_31656[(9)] = inst_31489);

(statearr_31656[(10)] = inst_31488);

return statearr_31656;
})();
var statearr_31657_31712 = state_31600__$1;
(statearr_31657_31712[(2)] = null);

(statearr_31657_31712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (26))){
var inst_31559 = (state_31600[(19)]);
var inst_31562 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31559);
var state_31600__$1 = state_31600;
var statearr_31658_31713 = state_31600__$1;
(statearr_31658_31713[(2)] = inst_31562);

(statearr_31658_31713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (16))){
var inst_31526 = (state_31600[(23)]);
var inst_31528 = (function (){var all_files = inst_31526;
return ((function (all_files,inst_31526,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files){
return (function (p1__31271_SHARP_){
return cljs.core.update_in.call(null,p1__31271_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31526,state_val_31601,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files))
})();
var inst_31529 = cljs.core.map.call(null,inst_31528,inst_31526);
var state_31600__$1 = state_31600;
var statearr_31659_31714 = state_31600__$1;
(statearr_31659_31714[(2)] = inst_31529);

(statearr_31659_31714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (30))){
var state_31600__$1 = state_31600;
var statearr_31660_31715 = state_31600__$1;
(statearr_31660_31715[(2)] = null);

(statearr_31660_31715[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (10))){
var inst_31500 = (state_31600[(26)]);
var inst_31502 = cljs.core.chunked_seq_QMARK_.call(null,inst_31500);
var state_31600__$1 = state_31600;
if(inst_31502){
var statearr_31661_31716 = state_31600__$1;
(statearr_31661_31716[(1)] = (13));

} else {
var statearr_31662_31717 = state_31600__$1;
(statearr_31662_31717[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (18))){
var inst_31533 = (state_31600[(12)]);
var inst_31532 = (state_31600[(13)]);
var inst_31532__$1 = (state_31600[(2)]);
var inst_31533__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31532__$1);
var inst_31534 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31533__$1);
var state_31600__$1 = (function (){var statearr_31663 = state_31600;
(statearr_31663[(12)] = inst_31533__$1);

(statearr_31663[(13)] = inst_31532__$1);

return statearr_31663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31600__$1,(19),inst_31534);
} else {
if((state_val_31601 === (37))){
var inst_31595 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31664_31718 = state_31600__$1;
(statearr_31664_31718[(2)] = inst_31595);

(statearr_31664_31718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (8))){
var inst_31500 = (state_31600[(26)]);
var inst_31487 = (state_31600[(7)]);
var inst_31500__$1 = cljs.core.seq.call(null,inst_31487);
var state_31600__$1 = (function (){var statearr_31665 = state_31600;
(statearr_31665[(26)] = inst_31500__$1);

return statearr_31665;
})();
if(inst_31500__$1){
var statearr_31666_31719 = state_31600__$1;
(statearr_31666_31719[(1)] = (10));

} else {
var statearr_31667_31720 = state_31600__$1;
(statearr_31667_31720[(1)] = (11));

}

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
}
}
}
});})(c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files))
;
return ((function (switch__21937__auto__,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto____0 = (function (){
var statearr_31671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31671[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto__);

(statearr_31671[(1)] = (1));

return statearr_31671;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto____1 = (function (state_31600){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_31600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e31672){if((e31672 instanceof Object)){
var ex__21941__auto__ = e31672;
var statearr_31673_31721 = state_31600;
(statearr_31673_31721[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31722 = state_31600;
state_31600 = G__31722;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto__ = function(state_31600){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto____1.call(this,state_31600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files))
})();
var state__22001__auto__ = (function (){var statearr_31674 = f__22000__auto__.call(null);
(statearr_31674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_31674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__,map__31475,map__31475__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31476,map__31476__$1,msg,files))
);

return c__21999__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31725,link){
var map__31727 = p__31725;
var map__31727__$1 = ((cljs.core.seq_QMARK_.call(null,map__31727))?cljs.core.apply.call(null,cljs.core.hash_map,map__31727):map__31727);
var file = cljs.core.get.call(null,map__31727__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31727,map__31727__$1,file){
return (function (p1__31723_SHARP_,p2__31724_SHARP_){
if(cljs.core._EQ_.call(null,p1__31723_SHARP_,p2__31724_SHARP_)){
return p1__31723_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31727,map__31727__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31731){
var map__31732 = p__31731;
var map__31732__$1 = ((cljs.core.seq_QMARK_.call(null,map__31732))?cljs.core.apply.call(null,cljs.core.hash_map,map__31732):map__31732);
var current_url_length = cljs.core.get.call(null,map__31732__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31732__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31728_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31728_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__31734 = arguments.length;
switch (G__31734) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31736){
var map__31738 = p__31736;
var map__31738__$1 = ((cljs.core.seq_QMARK_.call(null,map__31738))?cljs.core.apply.call(null,cljs.core.hash_map,map__31738):map__31738);
var f_data = map__31738__$1;
var request_url = cljs.core.get.call(null,map__31738__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31738__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18116__auto__ = request_url;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31739,files_msg){
var map__31761 = p__31739;
var map__31761__$1 = ((cljs.core.seq_QMARK_.call(null,map__31761))?cljs.core.apply.call(null,cljs.core.hash_map,map__31761):map__31761);
var opts = map__31761__$1;
var on_cssload = cljs.core.get.call(null,map__31761__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31762_31782 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31763_31783 = null;
var count__31764_31784 = (0);
var i__31765_31785 = (0);
while(true){
if((i__31765_31785 < count__31764_31784)){
var f_31786 = cljs.core._nth.call(null,chunk__31763_31783,i__31765_31785);
figwheel.client.file_reloading.reload_css_file.call(null,f_31786);

var G__31787 = seq__31762_31782;
var G__31788 = chunk__31763_31783;
var G__31789 = count__31764_31784;
var G__31790 = (i__31765_31785 + (1));
seq__31762_31782 = G__31787;
chunk__31763_31783 = G__31788;
count__31764_31784 = G__31789;
i__31765_31785 = G__31790;
continue;
} else {
var temp__4126__auto___31791 = cljs.core.seq.call(null,seq__31762_31782);
if(temp__4126__auto___31791){
var seq__31762_31792__$1 = temp__4126__auto___31791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31762_31792__$1)){
var c__18901__auto___31793 = cljs.core.chunk_first.call(null,seq__31762_31792__$1);
var G__31794 = cljs.core.chunk_rest.call(null,seq__31762_31792__$1);
var G__31795 = c__18901__auto___31793;
var G__31796 = cljs.core.count.call(null,c__18901__auto___31793);
var G__31797 = (0);
seq__31762_31782 = G__31794;
chunk__31763_31783 = G__31795;
count__31764_31784 = G__31796;
i__31765_31785 = G__31797;
continue;
} else {
var f_31798 = cljs.core.first.call(null,seq__31762_31792__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31798);

var G__31799 = cljs.core.next.call(null,seq__31762_31792__$1);
var G__31800 = null;
var G__31801 = (0);
var G__31802 = (0);
seq__31762_31782 = G__31799;
chunk__31763_31783 = G__31800;
count__31764_31784 = G__31801;
i__31765_31785 = G__31802;
continue;
}
} else {
}
}
break;
}

var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__,map__31761,map__31761__$1,opts,on_cssload){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__,map__31761,map__31761__$1,opts,on_cssload){
return (function (state_31772){
var state_val_31773 = (state_31772[(1)]);
if((state_val_31773 === (2))){
var inst_31768 = (state_31772[(2)]);
var inst_31769 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31770 = on_cssload.call(null,inst_31769);
var state_31772__$1 = (function (){var statearr_31774 = state_31772;
(statearr_31774[(7)] = inst_31768);

return statearr_31774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31772__$1,inst_31770);
} else {
if((state_val_31773 === (1))){
var inst_31766 = cljs.core.async.timeout.call(null,(100));
var state_31772__$1 = state_31772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31772__$1,(2),inst_31766);
} else {
return null;
}
}
});})(c__21999__auto__,map__31761,map__31761__$1,opts,on_cssload))
;
return ((function (switch__21937__auto__,c__21999__auto__,map__31761,map__31761__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto____0 = (function (){
var statearr_31778 = [null,null,null,null,null,null,null,null];
(statearr_31778[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto__);

(statearr_31778[(1)] = (1));

return statearr_31778;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto____1 = (function (state_31772){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_31772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e31779){if((e31779 instanceof Object)){
var ex__21941__auto__ = e31779;
var statearr_31780_31803 = state_31772;
(statearr_31780_31803[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31804 = state_31772;
state_31772 = G__31804;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto__ = function(state_31772){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto____1.call(this,state_31772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__,map__31761,map__31761__$1,opts,on_cssload))
})();
var state__22001__auto__ = (function (){var statearr_31781 = f__22000__auto__.call(null);
(statearr_31781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_31781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__,map__31761,map__31761__$1,opts,on_cssload))
);

return c__21999__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1431292033932