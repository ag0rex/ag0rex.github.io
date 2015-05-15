// Compiled by ClojureScript 0.0-3211 {}
goog.provide('romtoff.core');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
romtoff.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.PersistentVector.EMPTY], null));
if(typeof romtoff.core.game_chan !== 'undefined'){
} else {
romtoff.core.game_chan = cljs.core.async.chan.call(null);
}
romtoff.core.linear = (function romtoff$core$linear(i,t,p,d){
var s = (p / d);
return (i + ((t - i) * s));
});
romtoff.core.cubic_out = (function romtoff$core$cubic_out(i,t,p,d){
var s = ((p / d) - (1));
return (i + ((t - i) * ((1) + ((s * s) * s))));
});
romtoff.core.bounce_out = (function romtoff$core$bounce_out(i,t,p,d){
var c = (t - i);
var s = (p / d);
if((s < ((1) / 2.75))){
return (i + (((c * s) * s) * 7.5625));
} else {
if((s < ((2) / 2.75))){
var s__$1 = (s - (1.5 / 2.75));
return (i + (c * (0.75 + ((s__$1 * s__$1) * 7.5625))));
} else {
if((s < (2.5 / 2.75))){
var s__$1 = (s - (2.25 / 2.75));
return (i + (c * (0.9375 + ((s__$1 * s__$1) * 7.5625))));
} else {
var s__$1 = (s - (2.625 / 2.75));
return (i + (c * (0.984375 + ((s__$1 * s__$1) * 7.5625))));
}
}
}
});
romtoff.core.music_on = (function romtoff$core$music_on(){
return document.getElementById("music").setMusicOnOff(true);
});
romtoff.core.music_off = (function romtoff$core$music_off(){
return document.getElementById("music").setMusicOnOff(false);
});
romtoff.core.sound_on = (function romtoff$core$sound_on(){
return document.getElementById("music").setSoundOnOff(true);
});
romtoff.core.sound_off = (function romtoff$core$sound_off(){
return document.getElementById("music").setSoundOnOff(false);
});
romtoff.core.play_sound = (function romtoff$core$play_sound(s){
return document.getElementById("music").playSound(s);
});
romtoff.core.by_id = (function romtoff$core$by_id(entity_id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__793424_SHARP_){
return cljs.core._EQ_.call(null,entity_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__793424_SHARP_));
}),new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,romtoff.core.app_state))));
});
romtoff.core.tell = (function romtoff$core$tell(entity_id,message){
var temp__4126__auto__ = romtoff.core.by_id.call(null,entity_id);
if(cljs.core.truth_(temp__4126__auto__)){
var entity = temp__4126__auto__;
var ch = new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(entity);
return cljs.core.async.put_BANG_.call(null,ch,message);
} else {
return null;
}
});
romtoff.core.tetriminos = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null)], null);
romtoff.core.ROWS = (13);
romtoff.core.COLS = (9);
romtoff.core.in_bounds = (function romtoff$core$in_bounds(p__793425){
var vec__793427 = p__793425;
var r = cljs.core.nth.call(null,vec__793427,(0),null);
var c = cljs.core.nth.call(null,vec__793427,(1),null);
return ((r < romtoff.core.ROWS)) && ((c < romtoff.core.COLS));
});
romtoff.core.covered = (function romtoff$core$covered(p__793428){
var vec__793430 = p__793428;
var r = cljs.core.nth.call(null,vec__793430,(0),null);
var c = cljs.core.nth.call(null,vec__793430,(1),null);
return cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clouds","clouds",-632461223),r,c], null)));
});
romtoff.core.tetrimino_coords = (function romtoff$core$tetrimino_coords(t,p__793431){
var vec__793441 = p__793431;
var x = cljs.core.nth.call(null,vec__793441,(0),null);
var y = cljs.core.nth.call(null,vec__793441,(1),null);
var all_tiles = (function (){var iter__18871__auto__ = ((function (vec__793441,x,y){
return (function romtoff$core$tetrimino_coords_$_iter__793442(s__793443){
return (new cljs.core.LazySeq(null,((function (vec__793441,x,y){
return (function (){
var s__793443__$1 = s__793443;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__793443__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18867__auto__ = ((function (s__793443__$1,r,xs__4624__auto__,temp__4126__auto__,vec__793441,x,y){
return (function romtoff$core$tetrimino_coords_$_iter__793442_$_iter__793444(s__793445){
return (new cljs.core.LazySeq(null,((function (s__793443__$1,r,xs__4624__auto__,temp__4126__auto__,vec__793441,x,y){
return (function (){
var s__793445__$1 = s__793445;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__793445__$1);
if(temp__4126__auto____$1){
var s__793445__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__793445__$2)){
var c__18869__auto__ = cljs.core.chunk_first.call(null,s__793445__$2);
var size__18870__auto__ = cljs.core.count.call(null,c__18869__auto__);
var b__793447 = cljs.core.chunk_buffer.call(null,size__18870__auto__);
if((function (){var i__793446 = (0);
while(true){
if((i__793446 < size__18870__auto__)){
var c = cljs.core._nth.call(null,c__18869__auto__,i__793446);
cljs.core.chunk_append.call(null,b__793447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__793450 = (i__793446 + (1));
i__793446 = G__793450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__793447),romtoff$core$tetrimino_coords_$_iter__793442_$_iter__793444.call(null,cljs.core.chunk_rest.call(null,s__793445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__793447),null);
}
} else {
var c = cljs.core.first.call(null,s__793445__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),romtoff$core$tetrimino_coords_$_iter__793442_$_iter__793444.call(null,cljs.core.rest.call(null,s__793445__$2)));
}
} else {
return null;
}
break;
}
});})(s__793443__$1,r,xs__4624__auto__,temp__4126__auto__,vec__793441,x,y))
,null,null));
});})(s__793443__$1,r,xs__4624__auto__,temp__4126__auto__,vec__793441,x,y))
;
var fs__18868__auto__ = cljs.core.seq.call(null,iterys__18867__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)))));
if(fs__18868__auto__){
return cljs.core.concat.call(null,fs__18868__auto__,romtoff$core$tetrimino_coords_$_iter__793442.call(null,cljs.core.rest.call(null,s__793443__$1)));
} else {
var G__793451 = cljs.core.rest.call(null,s__793443__$1);
s__793443__$1 = G__793451;
continue;
}
} else {
return null;
}
break;
}
});})(vec__793441,x,y))
,null,null));
});})(vec__793441,x,y))
;
return iter__18871__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,t)));
})();
return cljs.core.reduce.call(null,((function (all_tiles,vec__793441,x,y){
return (function (acc,p__793448){
var vec__793449 = p__793448;
var r = cljs.core.nth.call(null,vec__793449,(0),null);
var c = cljs.core.nth.call(null,vec__793449,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)))){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + r),(y + c)], null));
} else {
return acc;
}
});})(all_tiles,vec__793441,x,y))
,cljs.core.PersistentVector.EMPTY,all_tiles);
});
romtoff.core.block_id = (function romtoff$core$block_id(r,c){
return cljs.core.keyword.call(null,[cljs.core.str("block-"),cljs.core.str(r),cljs.core.str("-"),cljs.core.str(c)].join(''));
});
romtoff.core.block_coords = (function romtoff$core$block_coords(block_id){
return cljs.core.vec.call(null,cljs.core.map.call(null,parseInt,cljs.core.subvec.call(null,clojure.string.split.call(null,cljs.core.name.call(null,block_id),"-"),(1))));
});
romtoff.core.block_by_coords = (function romtoff$core$block_by_coords(p__793452){
var vec__793454 = p__793452;
var x = cljs.core.nth.call(null,vec__793454,(0),null);
var y = cljs.core.nth.call(null,vec__793454,(1),null);
return romtoff.core.by_id.call(null,romtoff.core.block_id.call(null,x,y));
});
romtoff.core.block_ids_by_tetrimino_and_block_id = (function romtoff$core$block_ids_by_tetrimino_and_block_id(tetrimino,id){
return cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_by_coords),romtoff.core.tetrimino_coords.call(null,tetrimino,romtoff.core.block_coords.call(null,id)));
});
romtoff.core.get_uncovered_coords = (function romtoff$core$get_uncovered_coords(){
return cljs.core.reduce.call(null,(function (acc,coords){
if(cljs.core.not.call(null,romtoff.core.covered.call(null,coords))){
return cljs.core.conj.call(null,acc,coords);
} else {
return acc;
}
}),cljs.core.PersistentVector.EMPTY,(function (){var iter__18871__auto__ = (function romtoff$core$get_uncovered_coords_$_iter__793461(s__793462){
return (new cljs.core.LazySeq(null,(function (){
var s__793462__$1 = s__793462;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__793462__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18867__auto__ = ((function (s__793462__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function romtoff$core$get_uncovered_coords_$_iter__793461_$_iter__793463(s__793464){
return (new cljs.core.LazySeq(null,((function (s__793462__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__793464__$1 = s__793464;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__793464__$1);
if(temp__4126__auto____$1){
var s__793464__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__793464__$2)){
var c__18869__auto__ = cljs.core.chunk_first.call(null,s__793464__$2);
var size__18870__auto__ = cljs.core.count.call(null,c__18869__auto__);
var b__793466 = cljs.core.chunk_buffer.call(null,size__18870__auto__);
if((function (){var i__793465 = (0);
while(true){
if((i__793465 < size__18870__auto__)){
var c = cljs.core._nth.call(null,c__18869__auto__,i__793465);
cljs.core.chunk_append.call(null,b__793466,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__793467 = (i__793465 + (1));
i__793465 = G__793467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__793466),romtoff$core$get_uncovered_coords_$_iter__793461_$_iter__793463.call(null,cljs.core.chunk_rest.call(null,s__793464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__793466),null);
}
} else {
var c = cljs.core.first.call(null,s__793464__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),romtoff$core$get_uncovered_coords_$_iter__793461_$_iter__793463.call(null,cljs.core.rest.call(null,s__793464__$2)));
}
} else {
return null;
}
break;
}
});})(s__793462__$1,r,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__793462__$1,r,xs__4624__auto__,temp__4126__auto__))
;
var fs__18868__auto__ = cljs.core.seq.call(null,iterys__18867__auto__.call(null,cljs.core.range.call(null,romtoff.core.COLS)));
if(fs__18868__auto__){
return cljs.core.concat.call(null,fs__18868__auto__,romtoff$core$get_uncovered_coords_$_iter__793461.call(null,cljs.core.rest.call(null,s__793462__$1)));
} else {
var G__793468 = cljs.core.rest.call(null,s__793462__$1);
s__793462__$1 = G__793468;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18871__auto__.call(null,cljs.core.range.call(null,romtoff.core.ROWS));
})());
});
romtoff.core.is_near = (function romtoff$core$is_near(p__793469,p__793470){
var vec__793473 = p__793469;
var r1 = cljs.core.nth.call(null,vec__793473,(0),null);
var c1 = cljs.core.nth.call(null,vec__793473,(1),null);
var vec__793474 = p__793470;
var r2 = cljs.core.nth.call(null,vec__793474,(0),null);
var c2 = cljs.core.nth.call(null,vec__793474,(1),null);
return ((cljs.core._EQ_.call(null,c1,c2)) && (cljs.core._EQ_.call(null,r1,(r2 - (1))))) || ((cljs.core._EQ_.call(null,c1,c2)) && (cljs.core._EQ_.call(null,r1,(r2 + (1))))) || ((cljs.core._EQ_.call(null,r1,r2)) && (cljs.core._EQ_.call(null,c1,(c2 - (1))))) || ((cljs.core._EQ_.call(null,r1,r2)) && (cljs.core._EQ_.call(null,c1,(c2 + (1)))));
});
romtoff.core.build_sprite = (function romtoff$core$build_sprite(p__793477,owner,event_handlers,message_handlers){
var map__793606 = p__793477;
var map__793606__$1 = ((cljs.core.seq_QMARK_.call(null,map__793606))?cljs.core.apply.call(null,cljs.core.hash_map,map__793606):map__793606);
var data = map__793606__$1;
var width = cljs.core.get.call(null,map__793606__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__793606__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__793606__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__793606__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__793606__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__793606__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__793606__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__793606__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__793606__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof romtoff.core.t793607 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t793607 = (function (x,owner,height,data,y,event_handlers,rotation,animation,width,ch,sprite,message_handlers,p__793477,build_sprite,id,map__793606,meta793608){
this.x = x;
this.owner = owner;
this.height = height;
this.data = data;
this.y = y;
this.event_handlers = event_handlers;
this.rotation = rotation;
this.animation = animation;
this.width = width;
this.ch = ch;
this.sprite = sprite;
this.message_handlers = message_handlers;
this.p__793477 = p__793477;
this.build_sprite = build_sprite;
this.id = id;
this.map__793606 = map__793606;
this.meta793608 = meta793608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t793607.prototype.om$core$IRender$ = true;

romtoff.core.t793607.prototype.om$core$IRender$render$arity$1 = ((function (map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
var self__ = this;
var ___$1 = this;
var img = (cljs.core.truth_(self__.animation)?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(self__.animation):self__.sprite);
return om_tools.dom.element.call(null,React.DOM.g,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": [cljs.core.str("<image width=\""),cljs.core.str(self__.width),cljs.core.str("\" height=\""),cljs.core.str(self__.height),cljs.core.str("\" x=\""),cljs.core.str(self__.x),cljs.core.str("\" y=\""),cljs.core.str(self__.y),cljs.core.str("\" xlink:href=\""),cljs.core.str(img),cljs.core.str("\" />")].join('')},new cljs.core.Keyword(null,"width","width",-384071477),self__.width,new cljs.core.Keyword(null,"height","height",1025178622),self__.height,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("rotate("),cljs.core.str((cljs.core.truth_(self__.rotation)?self__.rotation:(0))),cljs.core.str(" "),cljs.core.str(((self__.width / (2)) + self__.x)),cljs.core.str(" "),cljs.core.str(((self__.height / (2)) + self__.y)),cljs.core.str(")")].join('')], null),self__.event_handlers),cljs.core.PersistentVector.EMPTY);
});})(map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t793607.prototype.om$core$IWillMount$ = true;

romtoff.core.t793607.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
var self__ = this;
var ___$1 = this;
var c__24000__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (){
var f__24001__auto__ = (function (){var switch__23979__auto__ = ((function (c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (state_793684){
var state_val_793685 = (state_793684[(1)]);
if((state_val_793685 === (7))){
var inst_793619 = (state_793684[(7)]);
var inst_793626 = (state_793684[(8)]);
var inst_793628 = (state_793684[(9)]);
var inst_793637 = (state_793684[(10)]);
var inst_793635 = (state_793684[(11)]);
var inst_793634 = cljs.core._nth.call(null,inst_793626,inst_793628);
var inst_793635__$1 = cljs.core.nth.call(null,inst_793634,(0),null);
var inst_793636 = cljs.core.nth.call(null,inst_793634,(1),null);
var inst_793637__$1 = inst_793619.call(null,inst_793635__$1);
var state_793684__$1 = (function (){var statearr_793686 = state_793684;
(statearr_793686[(10)] = inst_793637__$1);

(statearr_793686[(11)] = inst_793635__$1);

(statearr_793686[(12)] = inst_793636);

return statearr_793686;
})();
if(cljs.core.truth_(inst_793637__$1)){
var statearr_793687_793734 = state_793684__$1;
(statearr_793687_793734[(1)] = (10));

} else {
var statearr_793688_793735 = state_793684__$1;
(statearr_793688_793735[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (20))){
var inst_793659 = (state_793684[(13)]);
var inst_793665 = [cljs.core.str(self__.id),cljs.core.str(": Missing message handler for "),cljs.core.str(inst_793659)].join('');
var inst_793666 = console.warn(inst_793665);
var state_793684__$1 = state_793684;
var statearr_793689_793736 = state_793684__$1;
(statearr_793689_793736[(2)] = inst_793666);

(statearr_793689_793736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (1))){
var state_793684__$1 = state_793684;
var statearr_793690_793737 = state_793684__$1;
(statearr_793690_793737[(2)] = null);

(statearr_793690_793737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (4))){
var inst_793612 = (state_793684[(2)]);
var inst_793613 = [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"transact","transact",-267998670)];
var inst_793614 = (function (){var messages = inst_793612;
return ((function (messages,inst_793612,inst_793613,state_val_793685,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (messages,inst_793612,inst_793613,state_val_793685,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (p1__793475_SHARP_){
return cljs.core.merge.call(null,p1__793475_SHARP_,content);
});})(messages,inst_793612,inst_793613,state_val_793685,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);
});
;})(messages,inst_793612,inst_793613,state_val_793685,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_793615 = (function (){var messages = inst_793612;
return ((function (messages,inst_793612,inst_793613,inst_793614,state_val_793685,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
return om.core.transact_BANG_.call(null,self__.data,((function (messages,inst_793612,inst_793613,inst_793614,state_val_793685,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (p1__793476_SHARP_){
return cljs.core.merge.call(null,p1__793476_SHARP_,content);
});})(messages,inst_793612,inst_793613,inst_793614,state_val_793685,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);
});
;})(messages,inst_793612,inst_793613,inst_793614,state_val_793685,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_793616 = (function (){var messages = inst_793612;
return ((function (messages,inst_793612,inst_793613,inst_793614,inst_793615,state_val_793685,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
var seq__793691 = cljs.core.seq.call(null,content);
var chunk__793692 = null;
var count__793693 = (0);
var i__793694 = (0);
while(true){
if((i__793694 < count__793693)){
var vec__793695 = cljs.core._nth.call(null,chunk__793692,i__793694);
var key = cljs.core.nth.call(null,vec__793695,(0),null);
var fn = cljs.core.nth.call(null,vec__793695,(1),null);
om.core.transact_BANG_.call(null,self__.data,key,fn);

var G__793738 = seq__793691;
var G__793739 = chunk__793692;
var G__793740 = count__793693;
var G__793741 = (i__793694 + (1));
seq__793691 = G__793738;
chunk__793692 = G__793739;
count__793693 = G__793740;
i__793694 = G__793741;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__793691);
if(temp__4126__auto__){
var seq__793691__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__793691__$1)){
var c__18902__auto__ = cljs.core.chunk_first.call(null,seq__793691__$1);
var G__793742 = cljs.core.chunk_rest.call(null,seq__793691__$1);
var G__793743 = c__18902__auto__;
var G__793744 = cljs.core.count.call(null,c__18902__auto__);
var G__793745 = (0);
seq__793691 = G__793742;
chunk__793692 = G__793743;
count__793693 = G__793744;
i__793694 = G__793745;
continue;
} else {
var vec__793696 = cljs.core.first.call(null,seq__793691__$1);
var key = cljs.core.nth.call(null,vec__793696,(0),null);
var fn = cljs.core.nth.call(null,vec__793696,(1),null);
om.core.transact_BANG_.call(null,self__.data,key,fn);

var G__793746 = cljs.core.next.call(null,seq__793691__$1);
var G__793747 = null;
var G__793748 = (0);
var G__793749 = (0);
seq__793691 = G__793746;
chunk__793692 = G__793747;
count__793693 = G__793748;
i__793694 = G__793749;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(messages,inst_793612,inst_793613,inst_793614,inst_793615,state_val_793685,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_793617 = [inst_793614,inst_793615,inst_793616];
var inst_793618 = cljs.core.PersistentHashMap.fromArrays(inst_793613,inst_793617);
var inst_793619 = cljs.core.merge.call(null,inst_793618,self__.message_handlers);
var inst_793624 = cljs.core.seq.call(null,inst_793612);
var inst_793625 = inst_793624;
var inst_793626 = null;
var inst_793627 = (0);
var inst_793628 = (0);
var state_793684__$1 = (function (){var statearr_793697 = state_793684;
(statearr_793697[(7)] = inst_793619);

(statearr_793697[(8)] = inst_793626);

(statearr_793697[(14)] = inst_793627);

(statearr_793697[(9)] = inst_793628);

(statearr_793697[(15)] = inst_793625);

return statearr_793697;
})();
var statearr_793698_793750 = state_793684__$1;
(statearr_793698_793750[(2)] = null);

(statearr_793698_793750[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (15))){
var inst_793675 = (state_793684[(2)]);
var state_793684__$1 = state_793684;
var statearr_793699_793751 = state_793684__$1;
(statearr_793699_793751[(2)] = inst_793675);

(statearr_793699_793751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (21))){
var inst_793648 = (state_793684[(16)]);
var inst_793668 = (state_793684[(2)]);
var inst_793669 = cljs.core.next.call(null,inst_793648);
var inst_793625 = inst_793669;
var inst_793626 = null;
var inst_793627 = (0);
var inst_793628 = (0);
var state_793684__$1 = (function (){var statearr_793700 = state_793684;
(statearr_793700[(8)] = inst_793626);

(statearr_793700[(14)] = inst_793627);

(statearr_793700[(9)] = inst_793628);

(statearr_793700[(17)] = inst_793668);

(statearr_793700[(15)] = inst_793625);

return statearr_793700;
})();
var statearr_793701_793752 = state_793684__$1;
(statearr_793701_793752[(2)] = null);

(statearr_793701_793752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (13))){
var inst_793648 = (state_793684[(16)]);
var inst_793650 = cljs.core.chunked_seq_QMARK_.call(null,inst_793648);
var state_793684__$1 = state_793684;
if(inst_793650){
var statearr_793702_793753 = state_793684__$1;
(statearr_793702_793753[(1)] = (16));

} else {
var statearr_793703_793754 = state_793684__$1;
(statearr_793703_793754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (6))){
var inst_793679 = (state_793684[(2)]);
var state_793684__$1 = (function (){var statearr_793704 = state_793684;
(statearr_793704[(18)] = inst_793679);

return statearr_793704;
})();
var statearr_793705_793755 = state_793684__$1;
(statearr_793705_793755[(2)] = null);

(statearr_793705_793755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (17))){
var inst_793619 = (state_793684[(7)]);
var inst_793661 = (state_793684[(19)]);
var inst_793659 = (state_793684[(13)]);
var inst_793648 = (state_793684[(16)]);
var inst_793658 = cljs.core.first.call(null,inst_793648);
var inst_793659__$1 = cljs.core.nth.call(null,inst_793658,(0),null);
var inst_793660 = cljs.core.nth.call(null,inst_793658,(1),null);
var inst_793661__$1 = inst_793619.call(null,inst_793659__$1);
var state_793684__$1 = (function (){var statearr_793709 = state_793684;
(statearr_793709[(20)] = inst_793660);

(statearr_793709[(19)] = inst_793661__$1);

(statearr_793709[(13)] = inst_793659__$1);

return statearr_793709;
})();
if(cljs.core.truth_(inst_793661__$1)){
var statearr_793710_793756 = state_793684__$1;
(statearr_793710_793756[(1)] = (19));

} else {
var statearr_793711_793757 = state_793684__$1;
(statearr_793711_793757[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (3))){
var inst_793682 = (state_793684[(2)]);
var state_793684__$1 = state_793684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_793684__$1,inst_793682);
} else {
if((state_val_793685 === (12))){
var inst_793626 = (state_793684[(8)]);
var inst_793627 = (state_793684[(14)]);
var inst_793628 = (state_793684[(9)]);
var inst_793625 = (state_793684[(15)]);
var inst_793644 = (state_793684[(2)]);
var inst_793645 = (inst_793628 + (1));
var tmp793706 = inst_793626;
var tmp793707 = inst_793627;
var tmp793708 = inst_793625;
var inst_793625__$1 = tmp793708;
var inst_793626__$1 = tmp793706;
var inst_793627__$1 = tmp793707;
var inst_793628__$1 = inst_793645;
var state_793684__$1 = (function (){var statearr_793712 = state_793684;
(statearr_793712[(8)] = inst_793626__$1);

(statearr_793712[(14)] = inst_793627__$1);

(statearr_793712[(9)] = inst_793628__$1);

(statearr_793712[(21)] = inst_793644);

(statearr_793712[(15)] = inst_793625__$1);

return statearr_793712;
})();
var statearr_793713_793758 = state_793684__$1;
(statearr_793713_793758[(2)] = null);

(statearr_793713_793758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (2))){
var state_793684__$1 = state_793684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_793684__$1,(4),self__.ch);
} else {
if((state_val_793685 === (19))){
var inst_793660 = (state_793684[(20)]);
var inst_793661 = (state_793684[(19)]);
var inst_793663 = inst_793661.call(null,inst_793660);
var state_793684__$1 = state_793684;
var statearr_793714_793759 = state_793684__$1;
(statearr_793714_793759[(2)] = inst_793663);

(statearr_793714_793759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (11))){
var inst_793635 = (state_793684[(11)]);
var inst_793641 = [cljs.core.str(self__.id),cljs.core.str(": Missing message handler for "),cljs.core.str(inst_793635)].join('');
var inst_793642 = console.warn(inst_793641);
var state_793684__$1 = state_793684;
var statearr_793715_793760 = state_793684__$1;
(statearr_793715_793760[(2)] = inst_793642);

(statearr_793715_793760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (9))){
var inst_793677 = (state_793684[(2)]);
var state_793684__$1 = state_793684;
var statearr_793716_793761 = state_793684__$1;
(statearr_793716_793761[(2)] = inst_793677);

(statearr_793716_793761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (5))){
var inst_793627 = (state_793684[(14)]);
var inst_793628 = (state_793684[(9)]);
var inst_793630 = (inst_793628 < inst_793627);
var inst_793631 = inst_793630;
var state_793684__$1 = state_793684;
if(cljs.core.truth_(inst_793631)){
var statearr_793717_793762 = state_793684__$1;
(statearr_793717_793762[(1)] = (7));

} else {
var statearr_793718_793763 = state_793684__$1;
(statearr_793718_793763[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (14))){
var state_793684__$1 = state_793684;
var statearr_793719_793764 = state_793684__$1;
(statearr_793719_793764[(2)] = null);

(statearr_793719_793764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (16))){
var inst_793648 = (state_793684[(16)]);
var inst_793652 = cljs.core.chunk_first.call(null,inst_793648);
var inst_793653 = cljs.core.chunk_rest.call(null,inst_793648);
var inst_793654 = cljs.core.count.call(null,inst_793652);
var inst_793625 = inst_793653;
var inst_793626 = inst_793652;
var inst_793627 = inst_793654;
var inst_793628 = (0);
var state_793684__$1 = (function (){var statearr_793720 = state_793684;
(statearr_793720[(8)] = inst_793626);

(statearr_793720[(14)] = inst_793627);

(statearr_793720[(9)] = inst_793628);

(statearr_793720[(15)] = inst_793625);

return statearr_793720;
})();
var statearr_793721_793765 = state_793684__$1;
(statearr_793721_793765[(2)] = null);

(statearr_793721_793765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (10))){
var inst_793637 = (state_793684[(10)]);
var inst_793636 = (state_793684[(12)]);
var inst_793639 = inst_793637.call(null,inst_793636);
var state_793684__$1 = state_793684;
var statearr_793722_793766 = state_793684__$1;
(statearr_793722_793766[(2)] = inst_793639);

(statearr_793722_793766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (18))){
var inst_793672 = (state_793684[(2)]);
var state_793684__$1 = state_793684;
var statearr_793723_793767 = state_793684__$1;
(statearr_793723_793767[(2)] = inst_793672);

(statearr_793723_793767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_793685 === (8))){
var inst_793648 = (state_793684[(16)]);
var inst_793625 = (state_793684[(15)]);
var inst_793648__$1 = cljs.core.seq.call(null,inst_793625);
var state_793684__$1 = (function (){var statearr_793724 = state_793684;
(statearr_793724[(16)] = inst_793648__$1);

return statearr_793724;
})();
if(inst_793648__$1){
var statearr_793725_793768 = state_793684__$1;
(statearr_793725_793768[(1)] = (13));

} else {
var statearr_793726_793769 = state_793684__$1;
(statearr_793726_793769[(1)] = (14));

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
});})(c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;
return ((function (switch__23979__auto__,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function() {
var romtoff$core$build_sprite_$_state_machine__23980__auto__ = null;
var romtoff$core$build_sprite_$_state_machine__23980__auto____0 = (function (){
var statearr_793730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_793730[(0)] = romtoff$core$build_sprite_$_state_machine__23980__auto__);

(statearr_793730[(1)] = (1));

return statearr_793730;
});
var romtoff$core$build_sprite_$_state_machine__23980__auto____1 = (function (state_793684){
while(true){
var ret_value__23981__auto__ = (function (){try{while(true){
var result__23982__auto__ = switch__23979__auto__.call(null,state_793684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23982__auto__;
}
break;
}
}catch (e793731){if((e793731 instanceof Object)){
var ex__23983__auto__ = e793731;
var statearr_793732_793770 = state_793684;
(statearr_793732_793770[(5)] = ex__23983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_793684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e793731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__793771 = state_793684;
state_793684 = G__793771;
continue;
} else {
return ret_value__23981__auto__;
}
break;
}
});
romtoff$core$build_sprite_$_state_machine__23980__auto__ = function(state_793684){
switch(arguments.length){
case 0:
return romtoff$core$build_sprite_$_state_machine__23980__auto____0.call(this);
case 1:
return romtoff$core$build_sprite_$_state_machine__23980__auto____1.call(this,state_793684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$build_sprite_$_state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$build_sprite_$_state_machine__23980__auto____0;
romtoff$core$build_sprite_$_state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$build_sprite_$_state_machine__23980__auto____1;
return romtoff$core$build_sprite_$_state_machine__23980__auto__;
})()
;})(switch__23979__auto__,c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var state__24002__auto__ = (function (){var statearr_793733 = f__24001__auto__.call(null);
(statearr_793733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24000__auto__);

return statearr_793733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24002__auto__);
});})(c__24000__auto__,___$1,map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);

return c__24000__auto__;
});})(map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t793607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_793609){
var self__ = this;
var _793609__$1 = this;
return self__.meta793608;
});})(map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t793607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_793609,meta793608__$1){
var self__ = this;
var _793609__$1 = this;
return (new romtoff.core.t793607(self__.x,self__.owner,self__.height,self__.data,self__.y,self__.event_handlers,self__.rotation,self__.animation,self__.width,self__.ch,self__.sprite,self__.message_handlers,self__.p__793477,self__.build_sprite,self__.id,self__.map__793606,meta793608__$1));
});})(map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t793607.cljs$lang$type = true;

romtoff.core.t793607.cljs$lang$ctorStr = "romtoff.core/t793607";

romtoff.core.t793607.cljs$lang$ctorPrWriter = ((function (map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"romtoff.core/t793607");
});})(map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.__GT_t793607 = ((function (map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function romtoff$core$build_sprite_$___GT_t793607(x__$1,owner__$1,height__$1,data__$1,y__$1,event_handlers__$1,rotation__$1,animation__$1,width__$1,ch__$1,sprite__$1,message_handlers__$1,p__793477__$1,build_sprite__$1,id__$1,map__793606__$2,meta793608){
return (new romtoff.core.t793607(x__$1,owner__$1,height__$1,data__$1,y__$1,event_handlers__$1,rotation__$1,animation__$1,width__$1,ch__$1,sprite__$1,message_handlers__$1,p__793477__$1,build_sprite__$1,id__$1,map__793606__$2,meta793608));
});})(map__793606,map__793606__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

}

return (new romtoff.core.t793607(x,owner,height,data,y,event_handlers,rotation,animation,width,ch,sprite,message_handlers,p__793477,romtoff$core$build_sprite,id,map__793606__$1,cljs.core.PersistentArrayMap.EMPTY));
});
romtoff.core.land = (function romtoff$core$land(p__793772,owner){
var map__793775 = p__793772;
var map__793775__$1 = ((cljs.core.seq_QMARK_.call(null,map__793775))?cljs.core.apply.call(null,cljs.core.hash_map,map__793775):map__793775);
var data = map__793775__$1;
var x = cljs.core.get.call(null,map__793775__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__793775__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y = cljs.core.get.call(null,map__793775__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rotation = cljs.core.get.call(null,map__793775__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var animation = cljs.core.get.call(null,map__793775__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var stage = cljs.core.get.call(null,map__793775__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var width = cljs.core.get.call(null,map__793775__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ch = cljs.core.get.call(null,map__793775__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var sprite = cljs.core.get.call(null,map__793775__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var id = cljs.core.get.call(null,map__793775__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__793775,map__793775__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id){
return (function (_){
return cljs.core.println.call(null,id);
});})(map__793775,map__793775__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),((function (map__793775,map__793775__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id){
return (function (_){
cljs.core.println.call(null,"land",id,stage);

var stage__$1 = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"stage","stage",1843544772));
var G__793776 = stage__$1;
switch (G__793776) {
case (0):
romtoff.core.tell.call(null,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block-1.jpg",new cljs.core.Keyword(null,"stage","stage",1843544772),(1)], null)], null));

return romtoff.core.play_sound.call(null,"crateLand");

break;
case (1):
romtoff.core.tell.call(null,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block-2.jpg",new cljs.core.Keyword(null,"stage","stage",1843544772),(2)], null)], null));

return romtoff.core.play_sound.call(null,"crateDrop");

break;
case (2):
romtoff.core.tell.call(null,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block.jpg",new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)], null));

return romtoff.core.play_sound.call(null,"rockDestroy");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(stage__$1)].join('')));

}
});})(map__793775,map__793775__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id))
], null));
});
romtoff.core.water = (function romtoff$core$water(p__793778,owner){
var map__793780 = p__793778;
var map__793780__$1 = ((cljs.core.seq_QMARK_.call(null,map__793780))?cljs.core.apply.call(null,cljs.core.hash_map,map__793780):map__793780);
var data = map__793780__$1;
var width = cljs.core.get.call(null,map__793780__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__793780__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__793780__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__793780__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__793780__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__793780__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__793780__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__793780__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__793780__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__793780,map__793780__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
return cljs.core.println.call(null,id);
});})(map__793780,map__793780__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),((function (map__793780,map__793780__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
cljs.core.println.call(null,"water",id);

return romtoff.core.play_sound.call(null,"rockDrop");
});})(map__793780,map__793780__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null));
});
romtoff.core.arrow = (function romtoff$core$arrow(p__793781,owner){
var map__793787 = p__793781;
var map__793787__$1 = ((cljs.core.seq_QMARK_.call(null,map__793787))?cljs.core.apply.call(null,cljs.core.hash_map,map__793787):map__793787);
var data = map__793787__$1;
var width = cljs.core.get.call(null,map__793787__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__793787__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__793787__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__793787__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__793787__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__793787__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__793787__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__793787__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__793787__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__793787,map__793787__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

var t_793792 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_793793 = romtoff.core.block_coords.call(null,id);
var tetrimino_blocks_coords_793794 = romtoff.core.tetrimino_coords.call(null,t_793792,c_793793);
var seq__793788_793795 = cljs.core.seq.call(null,tetrimino_blocks_coords_793794);
var chunk__793789_793796 = null;
var count__793790_793797 = (0);
var i__793791_793798 = (0);
while(true){
if((i__793791_793798 < count__793790_793797)){
var block_coords_793799 = cljs.core._nth.call(null,chunk__793789_793796,i__793791_793798);
romtoff.core.tell.call(null,cljs.core.apply.call(null,romtoff.core.block_id,block_coords_793799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY], null));

var G__793800 = seq__793788_793795;
var G__793801 = chunk__793789_793796;
var G__793802 = count__793790_793797;
var G__793803 = (i__793791_793798 + (1));
seq__793788_793795 = G__793800;
chunk__793789_793796 = G__793801;
count__793790_793797 = G__793802;
i__793791_793798 = G__793803;
continue;
} else {
var temp__4126__auto___793804 = cljs.core.seq.call(null,seq__793788_793795);
if(temp__4126__auto___793804){
var seq__793788_793805__$1 = temp__4126__auto___793804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__793788_793805__$1)){
var c__18902__auto___793806 = cljs.core.chunk_first.call(null,seq__793788_793805__$1);
var G__793807 = cljs.core.chunk_rest.call(null,seq__793788_793805__$1);
var G__793808 = c__18902__auto___793806;
var G__793809 = cljs.core.count.call(null,c__18902__auto___793806);
var G__793810 = (0);
seq__793788_793795 = G__793807;
chunk__793789_793796 = G__793808;
count__793790_793797 = G__793809;
i__793791_793798 = G__793810;
continue;
} else {
var block_coords_793811 = cljs.core.first.call(null,seq__793788_793805__$1);
romtoff.core.tell.call(null,cljs.core.apply.call(null,romtoff.core.block_id,block_coords_793811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY], null));

var G__793812 = cljs.core.next.call(null,seq__793788_793805__$1);
var G__793813 = null;
var G__793814 = (0);
var G__793815 = (0);
seq__793788_793795 = G__793812;
chunk__793789_793796 = G__793813;
count__793790_793797 = G__793814;
i__793791_793798 = G__793815;
continue;
}
} else {
}
}
break;
}

cljs.core.println.call(null,tetrimino_blocks_coords_793794);

cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gen-next-tetrimino","gen-next-tetrimino",1485610140),cljs.core.PersistentArrayMap.EMPTY], null));

return cljs.core.println.call(null,id);
});})(map__793787,map__793787__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null),cljs.core.PersistentArrayMap.EMPTY);
});
romtoff.core.falling_circle = (function romtoff$core$falling_circle(p__793818,owner){
var map__794078 = p__793818;
var map__794078__$1 = ((cljs.core.seq_QMARK_.call(null,map__794078))?cljs.core.apply.call(null,cljs.core.hash_map,map__794078):map__794078);
var data = map__794078__$1;
var y = cljs.core.get.call(null,map__794078__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__794078__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ch = cljs.core.get.call(null,map__794078__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(typeof romtoff.core.t794079 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t794079 = (function (ch,x,y,data,map__794078,owner,p__793818,falling_circle,meta794080){
this.ch = ch;
this.x = x;
this.y = y;
this.data = data;
this.map__794078 = map__794078;
this.owner = owner;
this.p__793818 = p__793818;
this.falling_circle = falling_circle;
this.meta794080 = meta794080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t794079.prototype.om$core$IRender$ = true;

romtoff.core.t794079.prototype.om$core$IRender$render$arity$1 = ((function (map__794078,map__794078__$1,data,y,x,ch){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.circle({"onClick": ((function (___$1,map__794078,map__794078__$1,data,y,x,ch){
return (function (___$2){
cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.Keyword(null,"create","create",-1301499256));

return "";
});})(___$1,map__794078,map__794078__$1,data,y,x,ch))
, "r": (25), "cy": self__.y, "cx": self__.x});
});})(map__794078,map__794078__$1,data,y,x,ch))
;

romtoff.core.t794079.prototype.om$core$IWillMount$ = true;

romtoff.core.t794079.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__794078,map__794078__$1,data,y,x,ch){
return (function (_){
var self__ = this;
var ___$1 = this;
var c__24000__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch){
return (function (){
var f__24001__auto__ = (function (){var switch__23979__auto__ = ((function (c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch){
return (function (state_794243){
var state_val_794244 = (state_794243[(1)]);
if((state_val_794244 === (7))){
var inst_794100 = (state_794243[(7)]);
var inst_794093 = (state_794243[(8)]);
var inst_794099 = (state_794243[(9)]);
var inst_794091 = (state_794243[(10)]);
var inst_794099__$1 = cljs.core._nth.call(null,inst_794091,inst_794093);
var inst_794100__$1 = cljs.core.nth.call(null,inst_794099__$1,(0),null);
var inst_794101 = cljs.core.nth.call(null,inst_794099__$1,(1),null);
var state_794243__$1 = (function (){var statearr_794245 = state_794243;
(statearr_794245[(7)] = inst_794100__$1);

(statearr_794245[(9)] = inst_794099__$1);

(statearr_794245[(11)] = inst_794101);

return statearr_794245;
})();
var G__794246_794337 = (((inst_794100__$1 instanceof cljs.core.Keyword))?inst_794100__$1.fqn:null);
switch (G__794246_794337) {
case "transact":
var statearr_794247_794339 = state_794243__$1;
(statearr_794247_794339[(1)] = (13));


break;
case "update":
var statearr_794248_794340 = state_794243__$1;
(statearr_794248_794340[(1)] = (12));


break;
case "tween":
var statearr_794249_794341 = state_794243__$1;
(statearr_794249_794341[(1)] = (11));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_794100__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (20))){
var state_794243__$1 = state_794243;
var statearr_794250_794342 = state_794243__$1;
(statearr_794250_794342[(2)] = null);

(statearr_794250_794342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (27))){
var inst_794234 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794251_794343 = state_794243__$1;
(statearr_794251_794343[(2)] = inst_794234);

(statearr_794251_794343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (1))){
var state_794243__$1 = state_794243;
var statearr_794252_794344 = state_794243__$1;
(statearr_794252_794344[(2)] = null);

(statearr_794252_794344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (24))){
var inst_794146 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794253_794345 = state_794243__$1;
(statearr_794253_794345[(2)] = inst_794146);

(statearr_794253_794345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (39))){
var inst_794222 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794254_794346 = state_794243__$1;
(statearr_794254_794346[(2)] = inst_794222);

(statearr_794254_794346[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (4))){
var inst_794084 = (state_794243[(12)]);
var inst_794084__$1 = (state_794243[(2)]);
var inst_794089 = cljs.core.seq.call(null,inst_794084__$1);
var inst_794090 = inst_794089;
var inst_794091 = null;
var inst_794092 = (0);
var inst_794093 = (0);
var state_794243__$1 = (function (){var statearr_794255 = state_794243;
(statearr_794255[(13)] = inst_794090);

(statearr_794255[(8)] = inst_794093);

(statearr_794255[(10)] = inst_794091);

(statearr_794255[(12)] = inst_794084__$1);

(statearr_794255[(14)] = inst_794092);

return statearr_794255;
})();
var statearr_794256_794347 = state_794243__$1;
(statearr_794256_794347[(2)] = null);

(statearr_794256_794347[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (15))){
var inst_794153 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794257_794348 = state_794243__$1;
(statearr_794257_794348[(2)] = inst_794153);

(statearr_794257_794348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (21))){
var inst_794149 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794258_794349 = state_794243__$1;
(statearr_794258_794349[(2)] = inst_794149);

(statearr_794258_794349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (31))){
var inst_794160 = (state_794243[(15)]);
var inst_794227 = (state_794243[(2)]);
var inst_794228 = cljs.core.next.call(null,inst_794160);
var inst_794090 = inst_794228;
var inst_794091 = null;
var inst_794092 = (0);
var inst_794093 = (0);
var state_794243__$1 = (function (){var statearr_794259 = state_794243;
(statearr_794259[(13)] = inst_794090);

(statearr_794259[(8)] = inst_794093);

(statearr_794259[(10)] = inst_794091);

(statearr_794259[(16)] = inst_794227);

(statearr_794259[(14)] = inst_794092);

return statearr_794259;
})();
var statearr_794260_794350 = state_794243__$1;
(statearr_794260_794350[(2)] = null);

(statearr_794260_794350[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (32))){
var inst_794172 = (state_794243[(17)]);
var inst_794093 = (state_794243[(8)]);
var inst_794091 = (state_794243[(10)]);
var inst_794084 = (state_794243[(12)]);
var inst_794160 = (state_794243[(15)]);
var inst_794170 = (state_794243[(18)]);
var inst_794171 = (state_794243[(19)]);
var inst_794092 = (state_794243[(14)]);
var inst_794173 = (function (){var content = inst_794172;
var type = inst_794171;
var vec__794169 = inst_794170;
var temp__4126__auto__ = inst_794160;
var seq__794085 = inst_794160;
var chunk__794086 = inst_794091;
var count__794087 = inst_794092;
var i__794088 = inst_794093;
var messages = inst_794084;
return ((function (content,type,vec__794169,temp__4126__auto__,seq__794085,chunk__794086,count__794087,i__794088,messages,inst_794172,inst_794093,inst_794091,inst_794084,inst_794160,inst_794170,inst_794171,inst_794092,state_val_794244,c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch){
return (function (p1__793816_SHARP_){
return cljs.core.merge.call(null,p1__793816_SHARP_,content);
});
;})(content,type,vec__794169,temp__4126__auto__,seq__794085,chunk__794086,count__794087,i__794088,messages,inst_794172,inst_794093,inst_794091,inst_794084,inst_794160,inst_794170,inst_794171,inst_794092,state_val_794244,c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch))
})();
var inst_794174 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),inst_794173);
var state_794243__$1 = state_794243;
var statearr_794261_794351 = state_794243__$1;
(statearr_794261_794351[(2)] = inst_794174);

(statearr_794261_794351[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (40))){
var inst_794200 = (state_794243[(20)]);
var inst_794202 = cljs.core.chunked_seq_QMARK_.call(null,inst_794200);
var state_794243__$1 = state_794243;
if(inst_794202){
var statearr_794262_794352 = state_794243__$1;
(statearr_794262_794352[(1)] = (43));

} else {
var statearr_794263_794353 = state_794243__$1;
(statearr_794263_794353[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (33))){
var inst_794172 = (state_794243[(17)]);
var inst_794093 = (state_794243[(8)]);
var inst_794091 = (state_794243[(10)]);
var inst_794084 = (state_794243[(12)]);
var inst_794160 = (state_794243[(15)]);
var inst_794170 = (state_794243[(18)]);
var inst_794171 = (state_794243[(19)]);
var inst_794092 = (state_794243[(14)]);
var inst_794176 = (function (){var content = inst_794172;
var type = inst_794171;
var vec__794169 = inst_794170;
var temp__4126__auto__ = inst_794160;
var seq__794085 = inst_794160;
var chunk__794086 = inst_794091;
var count__794087 = inst_794092;
var i__794088 = inst_794093;
var messages = inst_794084;
return ((function (content,type,vec__794169,temp__4126__auto__,seq__794085,chunk__794086,count__794087,i__794088,messages,inst_794172,inst_794093,inst_794091,inst_794084,inst_794160,inst_794170,inst_794171,inst_794092,state_val_794244,c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch){
return (function (p1__793817_SHARP_){
return cljs.core.merge.call(null,p1__793817_SHARP_,content);
});
;})(content,type,vec__794169,temp__4126__auto__,seq__794085,chunk__794086,count__794087,i__794088,messages,inst_794172,inst_794093,inst_794091,inst_794084,inst_794160,inst_794170,inst_794171,inst_794092,state_val_794244,c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch))
})();
var inst_794177 = om.core.transact_BANG_.call(null,self__.data,inst_794176);
var state_794243__$1 = state_794243;
var statearr_794264_794354 = state_794243__$1;
(statearr_794264_794354[(2)] = inst_794177);

(statearr_794264_794354[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (13))){
var inst_794101 = (state_794243[(11)]);
var inst_794112 = cljs.core.seq.call(null,inst_794101);
var inst_794113 = inst_794112;
var inst_794114 = null;
var inst_794115 = (0);
var inst_794116 = (0);
var state_794243__$1 = (function (){var statearr_794265 = state_794243;
(statearr_794265[(21)] = inst_794116);

(statearr_794265[(22)] = inst_794113);

(statearr_794265[(23)] = inst_794115);

(statearr_794265[(24)] = inst_794114);

return statearr_794265;
})();
var statearr_794266_794355 = state_794243__$1;
(statearr_794266_794355[(2)] = null);

(statearr_794266_794355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (22))){
var inst_794129 = (state_794243[(25)]);
var inst_794133 = cljs.core.chunk_first.call(null,inst_794129);
var inst_794134 = cljs.core.chunk_rest.call(null,inst_794129);
var inst_794135 = cljs.core.count.call(null,inst_794133);
var inst_794113 = inst_794134;
var inst_794114 = inst_794133;
var inst_794115 = inst_794135;
var inst_794116 = (0);
var state_794243__$1 = (function (){var statearr_794267 = state_794243;
(statearr_794267[(21)] = inst_794116);

(statearr_794267[(22)] = inst_794113);

(statearr_794267[(23)] = inst_794115);

(statearr_794267[(24)] = inst_794114);

return statearr_794267;
})();
var statearr_794268_794356 = state_794243__$1;
(statearr_794268_794356[(2)] = null);

(statearr_794268_794356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (36))){
var inst_794224 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794269_794357 = state_794243__$1;
(statearr_794269_794357[(2)] = inst_794224);

(statearr_794269_794357[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (41))){
var state_794243__$1 = state_794243;
var statearr_794270_794358 = state_794243__$1;
(statearr_794270_794358[(2)] = null);

(statearr_794270_794358[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (43))){
var inst_794200 = (state_794243[(20)]);
var inst_794204 = cljs.core.chunk_first.call(null,inst_794200);
var inst_794205 = cljs.core.chunk_rest.call(null,inst_794200);
var inst_794206 = cljs.core.count.call(null,inst_794204);
var inst_794184 = inst_794205;
var inst_794185 = inst_794204;
var inst_794186 = inst_794206;
var inst_794187 = (0);
var state_794243__$1 = (function (){var statearr_794271 = state_794243;
(statearr_794271[(26)] = inst_794186);

(statearr_794271[(27)] = inst_794187);

(statearr_794271[(28)] = inst_794185);

(statearr_794271[(29)] = inst_794184);

return statearr_794271;
})();
var statearr_794272_794359 = state_794243__$1;
(statearr_794272_794359[(2)] = null);

(statearr_794272_794359[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (29))){
var inst_794160 = (state_794243[(15)]);
var inst_794170 = (state_794243[(18)]);
var inst_794171 = (state_794243[(19)]);
var inst_794170__$1 = cljs.core.first.call(null,inst_794160);
var inst_794171__$1 = cljs.core.nth.call(null,inst_794170__$1,(0),null);
var inst_794172 = cljs.core.nth.call(null,inst_794170__$1,(1),null);
var state_794243__$1 = (function (){var statearr_794273 = state_794243;
(statearr_794273[(17)] = inst_794172);

(statearr_794273[(18)] = inst_794170__$1);

(statearr_794273[(19)] = inst_794171__$1);

return statearr_794273;
})();
var G__794274_794360 = (((inst_794171__$1 instanceof cljs.core.Keyword))?inst_794171__$1.fqn:null);
switch (G__794274_794360) {
case "transact":
var statearr_794275_794362 = state_794243__$1;
(statearr_794275_794362[(1)] = (34));


break;
case "update":
var statearr_794276_794363 = state_794243__$1;
(statearr_794276_794363[(1)] = (33));


break;
case "tween":
var statearr_794277_794364 = state_794243__$1;
(statearr_794277_794364[(1)] = (32));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_794171__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (44))){
var inst_794200 = (state_794243[(20)]);
var inst_794210 = cljs.core.first.call(null,inst_794200);
var inst_794211 = cljs.core.nth.call(null,inst_794210,(0),null);
var inst_794212 = cljs.core.nth.call(null,inst_794210,(1),null);
var inst_794213 = om.core.transact_BANG_.call(null,self__.data,inst_794211,inst_794212);
var inst_794214 = cljs.core.next.call(null,inst_794200);
var inst_794184 = inst_794214;
var inst_794185 = null;
var inst_794186 = (0);
var inst_794187 = (0);
var state_794243__$1 = (function (){var statearr_794278 = state_794243;
(statearr_794278[(26)] = inst_794186);

(statearr_794278[(27)] = inst_794187);

(statearr_794278[(28)] = inst_794185);

(statearr_794278[(30)] = inst_794213);

(statearr_794278[(29)] = inst_794184);

return statearr_794278;
})();
var statearr_794279_794365 = state_794243__$1;
(statearr_794279_794365[(2)] = null);

(statearr_794279_794365[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (6))){
var inst_794238 = (state_794243[(2)]);
var state_794243__$1 = (function (){var statearr_794280 = state_794243;
(statearr_794280[(31)] = inst_794238);

return statearr_794280;
})();
var statearr_794281_794366 = state_794243__$1;
(statearr_794281_794366[(2)] = null);

(statearr_794281_794366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (28))){
var inst_794160 = (state_794243[(15)]);
var inst_794164 = cljs.core.chunk_first.call(null,inst_794160);
var inst_794165 = cljs.core.chunk_rest.call(null,inst_794160);
var inst_794166 = cljs.core.count.call(null,inst_794164);
var inst_794090 = inst_794165;
var inst_794091 = inst_794164;
var inst_794092 = inst_794166;
var inst_794093 = (0);
var state_794243__$1 = (function (){var statearr_794282 = state_794243;
(statearr_794282[(13)] = inst_794090);

(statearr_794282[(8)] = inst_794093);

(statearr_794282[(10)] = inst_794091);

(statearr_794282[(14)] = inst_794092);

return statearr_794282;
})();
var statearr_794283_794367 = state_794243__$1;
(statearr_794283_794367[(2)] = null);

(statearr_794283_794367[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (25))){
var inst_794160 = (state_794243[(15)]);
var inst_794162 = cljs.core.chunked_seq_QMARK_.call(null,inst_794160);
var state_794243__$1 = state_794243;
if(inst_794162){
var statearr_794284_794368 = state_794243__$1;
(statearr_794284_794368[(1)] = (28));

} else {
var statearr_794285_794369 = state_794243__$1;
(statearr_794285_794369[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (34))){
var inst_794172 = (state_794243[(17)]);
var inst_794183 = cljs.core.seq.call(null,inst_794172);
var inst_794184 = inst_794183;
var inst_794185 = null;
var inst_794186 = (0);
var inst_794187 = (0);
var state_794243__$1 = (function (){var statearr_794286 = state_794243;
(statearr_794286[(26)] = inst_794186);

(statearr_794286[(27)] = inst_794187);

(statearr_794286[(28)] = inst_794185);

(statearr_794286[(29)] = inst_794184);

return statearr_794286;
})();
var statearr_794287_794370 = state_794243__$1;
(statearr_794287_794370[(2)] = null);

(statearr_794287_794370[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (17))){
var inst_794113 = (state_794243[(22)]);
var inst_794129 = (state_794243[(25)]);
var inst_794129__$1 = cljs.core.seq.call(null,inst_794113);
var state_794243__$1 = (function (){var statearr_794288 = state_794243;
(statearr_794288[(25)] = inst_794129__$1);

return statearr_794288;
})();
if(inst_794129__$1){
var statearr_794289_794371 = state_794243__$1;
(statearr_794289_794371[(1)] = (19));

} else {
var statearr_794290_794372 = state_794243__$1;
(statearr_794290_794372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (3))){
var inst_794241 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_794243__$1,inst_794241);
} else {
if((state_val_794244 === (12))){
var inst_794090 = (state_794243[(13)]);
var inst_794100 = (state_794243[(7)]);
var inst_794093 = (state_794243[(8)]);
var inst_794099 = (state_794243[(9)]);
var inst_794091 = (state_794243[(10)]);
var inst_794084 = (state_794243[(12)]);
var inst_794101 = (state_794243[(11)]);
var inst_794092 = (state_794243[(14)]);
var inst_794105 = (function (){var content = inst_794101;
var type = inst_794100;
var vec__794098 = inst_794099;
var seq__794085 = inst_794090;
var chunk__794086 = inst_794091;
var count__794087 = inst_794092;
var i__794088 = inst_794093;
var messages = inst_794084;
return ((function (content,type,vec__794098,seq__794085,chunk__794086,count__794087,i__794088,messages,inst_794090,inst_794100,inst_794093,inst_794099,inst_794091,inst_794084,inst_794101,inst_794092,state_val_794244,c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch){
return (function (p1__793817_SHARP_){
return cljs.core.merge.call(null,p1__793817_SHARP_,content);
});
;})(content,type,vec__794098,seq__794085,chunk__794086,count__794087,i__794088,messages,inst_794090,inst_794100,inst_794093,inst_794099,inst_794091,inst_794084,inst_794101,inst_794092,state_val_794244,c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch))
})();
var inst_794106 = om.core.transact_BANG_.call(null,self__.data,inst_794105);
var state_794243__$1 = state_794243;
var statearr_794291_794373 = state_794243__$1;
(statearr_794291_794373[(2)] = inst_794106);

(statearr_794291_794373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (2))){
var state_794243__$1 = state_794243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_794243__$1,(4),self__.ch);
} else {
if((state_val_794244 === (23))){
var inst_794129 = (state_794243[(25)]);
var inst_794139 = cljs.core.first.call(null,inst_794129);
var inst_794140 = cljs.core.nth.call(null,inst_794139,(0),null);
var inst_794141 = cljs.core.nth.call(null,inst_794139,(1),null);
var inst_794142 = om.core.transact_BANG_.call(null,self__.data,inst_794140,inst_794141);
var inst_794143 = cljs.core.next.call(null,inst_794129);
var inst_794113 = inst_794143;
var inst_794114 = null;
var inst_794115 = (0);
var inst_794116 = (0);
var state_794243__$1 = (function (){var statearr_794292 = state_794243;
(statearr_794292[(21)] = inst_794116);

(statearr_794292[(22)] = inst_794113);

(statearr_794292[(23)] = inst_794115);

(statearr_794292[(32)] = inst_794142);

(statearr_794292[(24)] = inst_794114);

return statearr_794292;
})();
var statearr_794293_794374 = state_794243__$1;
(statearr_794293_794374[(2)] = null);

(statearr_794293_794374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (35))){
var inst_794186 = (state_794243[(26)]);
var inst_794187 = (state_794243[(27)]);
var inst_794189 = (inst_794187 < inst_794186);
var inst_794190 = inst_794189;
var state_794243__$1 = state_794243;
if(cljs.core.truth_(inst_794190)){
var statearr_794294_794375 = state_794243__$1;
(statearr_794294_794375[(1)] = (37));

} else {
var statearr_794295_794376 = state_794243__$1;
(statearr_794295_794376[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (19))){
var inst_794129 = (state_794243[(25)]);
var inst_794131 = cljs.core.chunked_seq_QMARK_.call(null,inst_794129);
var state_794243__$1 = state_794243;
if(inst_794131){
var statearr_794296_794377 = state_794243__$1;
(statearr_794296_794377[(1)] = (22));

} else {
var statearr_794297_794378 = state_794243__$1;
(statearr_794297_794378[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (11))){
var inst_794090 = (state_794243[(13)]);
var inst_794100 = (state_794243[(7)]);
var inst_794093 = (state_794243[(8)]);
var inst_794099 = (state_794243[(9)]);
var inst_794091 = (state_794243[(10)]);
var inst_794084 = (state_794243[(12)]);
var inst_794101 = (state_794243[(11)]);
var inst_794092 = (state_794243[(14)]);
var inst_794102 = (function (){var content = inst_794101;
var type = inst_794100;
var vec__794098 = inst_794099;
var seq__794085 = inst_794090;
var chunk__794086 = inst_794091;
var count__794087 = inst_794092;
var i__794088 = inst_794093;
var messages = inst_794084;
return ((function (content,type,vec__794098,seq__794085,chunk__794086,count__794087,i__794088,messages,inst_794090,inst_794100,inst_794093,inst_794099,inst_794091,inst_794084,inst_794101,inst_794092,state_val_794244,c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch){
return (function (p1__793816_SHARP_){
return cljs.core.merge.call(null,p1__793816_SHARP_,content);
});
;})(content,type,vec__794098,seq__794085,chunk__794086,count__794087,i__794088,messages,inst_794090,inst_794100,inst_794093,inst_794099,inst_794091,inst_794084,inst_794101,inst_794092,state_val_794244,c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch))
})();
var inst_794103 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),inst_794102);
var state_794243__$1 = state_794243;
var statearr_794298_794379 = state_794243__$1;
(statearr_794298_794379[(2)] = inst_794103);

(statearr_794298_794379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (9))){
var inst_794236 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794299_794380 = state_794243__$1;
(statearr_794299_794380[(2)] = inst_794236);

(statearr_794299_794380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (5))){
var inst_794093 = (state_794243[(8)]);
var inst_794092 = (state_794243[(14)]);
var inst_794095 = (inst_794093 < inst_794092);
var inst_794096 = inst_794095;
var state_794243__$1 = state_794243;
if(cljs.core.truth_(inst_794096)){
var statearr_794300_794381 = state_794243__$1;
(statearr_794300_794381[(1)] = (7));

} else {
var statearr_794301_794382 = state_794243__$1;
(statearr_794301_794382[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (14))){
var inst_794116 = (state_794243[(21)]);
var inst_794115 = (state_794243[(23)]);
var inst_794118 = (inst_794116 < inst_794115);
var inst_794119 = inst_794118;
var state_794243__$1 = state_794243;
if(cljs.core.truth_(inst_794119)){
var statearr_794302_794383 = state_794243__$1;
(statearr_794302_794383[(1)] = (16));

} else {
var statearr_794303_794384 = state_794243__$1;
(statearr_794303_794384[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (45))){
var inst_794217 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794307_794385 = state_794243__$1;
(statearr_794307_794385[(2)] = inst_794217);

(statearr_794307_794385[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (26))){
var state_794243__$1 = state_794243;
var statearr_794308_794386 = state_794243__$1;
(statearr_794308_794386[(2)] = null);

(statearr_794308_794386[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (16))){
var inst_794116 = (state_794243[(21)]);
var inst_794113 = (state_794243[(22)]);
var inst_794115 = (state_794243[(23)]);
var inst_794114 = (state_794243[(24)]);
var inst_794122 = cljs.core._nth.call(null,inst_794114,inst_794116);
var inst_794123 = cljs.core.nth.call(null,inst_794122,(0),null);
var inst_794124 = cljs.core.nth.call(null,inst_794122,(1),null);
var inst_794125 = om.core.transact_BANG_.call(null,self__.data,inst_794123,inst_794124);
var inst_794126 = (inst_794116 + (1));
var tmp794304 = inst_794113;
var tmp794305 = inst_794115;
var tmp794306 = inst_794114;
var inst_794113__$1 = tmp794304;
var inst_794114__$1 = tmp794306;
var inst_794115__$1 = tmp794305;
var inst_794116__$1 = inst_794126;
var state_794243__$1 = (function (){var statearr_794309 = state_794243;
(statearr_794309[(33)] = inst_794125);

(statearr_794309[(21)] = inst_794116__$1);

(statearr_794309[(22)] = inst_794113__$1);

(statearr_794309[(23)] = inst_794115__$1);

(statearr_794309[(24)] = inst_794114__$1);

return statearr_794309;
})();
var statearr_794310_794387 = state_794243__$1;
(statearr_794310_794387[(2)] = null);

(statearr_794310_794387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (38))){
var inst_794200 = (state_794243[(20)]);
var inst_794184 = (state_794243[(29)]);
var inst_794200__$1 = cljs.core.seq.call(null,inst_794184);
var state_794243__$1 = (function (){var statearr_794314 = state_794243;
(statearr_794314[(20)] = inst_794200__$1);

return statearr_794314;
})();
if(inst_794200__$1){
var statearr_794315_794388 = state_794243__$1;
(statearr_794315_794388[(1)] = (40));

} else {
var statearr_794316_794389 = state_794243__$1;
(statearr_794316_794389[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (30))){
var inst_794231 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794317_794390 = state_794243__$1;
(statearr_794317_794390[(2)] = inst_794231);

(statearr_794317_794390[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (10))){
var inst_794090 = (state_794243[(13)]);
var inst_794093 = (state_794243[(8)]);
var inst_794091 = (state_794243[(10)]);
var inst_794092 = (state_794243[(14)]);
var inst_794156 = (state_794243[(2)]);
var inst_794157 = (inst_794093 + (1));
var tmp794311 = inst_794090;
var tmp794312 = inst_794091;
var tmp794313 = inst_794092;
var inst_794090__$1 = tmp794311;
var inst_794091__$1 = tmp794312;
var inst_794092__$1 = tmp794313;
var inst_794093__$1 = inst_794157;
var state_794243__$1 = (function (){var statearr_794318 = state_794243;
(statearr_794318[(13)] = inst_794090__$1);

(statearr_794318[(34)] = inst_794156);

(statearr_794318[(8)] = inst_794093__$1);

(statearr_794318[(10)] = inst_794091__$1);

(statearr_794318[(14)] = inst_794092__$1);

return statearr_794318;
})();
var statearr_794319_794391 = state_794243__$1;
(statearr_794319_794391[(2)] = null);

(statearr_794319_794391[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (18))){
var inst_794151 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794323_794392 = state_794243__$1;
(statearr_794323_794392[(2)] = inst_794151);

(statearr_794323_794392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (42))){
var inst_794220 = (state_794243[(2)]);
var state_794243__$1 = state_794243;
var statearr_794324_794393 = state_794243__$1;
(statearr_794324_794393[(2)] = inst_794220);

(statearr_794324_794393[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (37))){
var inst_794186 = (state_794243[(26)]);
var inst_794187 = (state_794243[(27)]);
var inst_794185 = (state_794243[(28)]);
var inst_794184 = (state_794243[(29)]);
var inst_794193 = cljs.core._nth.call(null,inst_794185,inst_794187);
var inst_794194 = cljs.core.nth.call(null,inst_794193,(0),null);
var inst_794195 = cljs.core.nth.call(null,inst_794193,(1),null);
var inst_794196 = om.core.transact_BANG_.call(null,self__.data,inst_794194,inst_794195);
var inst_794197 = (inst_794187 + (1));
var tmp794320 = inst_794186;
var tmp794321 = inst_794185;
var tmp794322 = inst_794184;
var inst_794184__$1 = tmp794322;
var inst_794185__$1 = tmp794321;
var inst_794186__$1 = tmp794320;
var inst_794187__$1 = inst_794197;
var state_794243__$1 = (function (){var statearr_794325 = state_794243;
(statearr_794325[(35)] = inst_794196);

(statearr_794325[(26)] = inst_794186__$1);

(statearr_794325[(27)] = inst_794187__$1);

(statearr_794325[(28)] = inst_794185__$1);

(statearr_794325[(29)] = inst_794184__$1);

return statearr_794325;
})();
var statearr_794326_794394 = state_794243__$1;
(statearr_794326_794394[(2)] = null);

(statearr_794326_794394[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794244 === (8))){
var inst_794090 = (state_794243[(13)]);
var inst_794160 = (state_794243[(15)]);
var inst_794160__$1 = cljs.core.seq.call(null,inst_794090);
var state_794243__$1 = (function (){var statearr_794327 = state_794243;
(statearr_794327[(15)] = inst_794160__$1);

return statearr_794327;
})();
if(inst_794160__$1){
var statearr_794328_794395 = state_794243__$1;
(statearr_794328_794395[(1)] = (25));

} else {
var statearr_794329_794396 = state_794243__$1;
(statearr_794329_794396[(1)] = (26));

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
}
}
}
}
}
}
}
}
});})(c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch))
;
return ((function (switch__23979__auto__,c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch){
return (function() {
var romtoff$core$falling_circle_$_state_machine__23980__auto__ = null;
var romtoff$core$falling_circle_$_state_machine__23980__auto____0 = (function (){
var statearr_794333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_794333[(0)] = romtoff$core$falling_circle_$_state_machine__23980__auto__);

(statearr_794333[(1)] = (1));

return statearr_794333;
});
var romtoff$core$falling_circle_$_state_machine__23980__auto____1 = (function (state_794243){
while(true){
var ret_value__23981__auto__ = (function (){try{while(true){
var result__23982__auto__ = switch__23979__auto__.call(null,state_794243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23982__auto__;
}
break;
}
}catch (e794334){if((e794334 instanceof Object)){
var ex__23983__auto__ = e794334;
var statearr_794335_794397 = state_794243;
(statearr_794335_794397[(5)] = ex__23983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_794243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e794334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__794398 = state_794243;
state_794243 = G__794398;
continue;
} else {
return ret_value__23981__auto__;
}
break;
}
});
romtoff$core$falling_circle_$_state_machine__23980__auto__ = function(state_794243){
switch(arguments.length){
case 0:
return romtoff$core$falling_circle_$_state_machine__23980__auto____0.call(this);
case 1:
return romtoff$core$falling_circle_$_state_machine__23980__auto____1.call(this,state_794243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$falling_circle_$_state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$falling_circle_$_state_machine__23980__auto____0;
romtoff$core$falling_circle_$_state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$falling_circle_$_state_machine__23980__auto____1;
return romtoff$core$falling_circle_$_state_machine__23980__auto__;
})()
;})(switch__23979__auto__,c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch))
})();
var state__24002__auto__ = (function (){var statearr_794336 = f__24001__auto__.call(null);
(statearr_794336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24000__auto__);

return statearr_794336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24002__auto__);
});})(c__24000__auto__,___$1,map__794078,map__794078__$1,data,y,x,ch))
);

return c__24000__auto__;
});})(map__794078,map__794078__$1,data,y,x,ch))
;

romtoff.core.t794079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__794078,map__794078__$1,data,y,x,ch){
return (function (_794081){
var self__ = this;
var _794081__$1 = this;
return self__.meta794080;
});})(map__794078,map__794078__$1,data,y,x,ch))
;

romtoff.core.t794079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__794078,map__794078__$1,data,y,x,ch){
return (function (_794081,meta794080__$1){
var self__ = this;
var _794081__$1 = this;
return (new romtoff.core.t794079(self__.ch,self__.x,self__.y,self__.data,self__.map__794078,self__.owner,self__.p__793818,self__.falling_circle,meta794080__$1));
});})(map__794078,map__794078__$1,data,y,x,ch))
;

romtoff.core.t794079.cljs$lang$type = true;

romtoff.core.t794079.cljs$lang$ctorStr = "romtoff.core/t794079";

romtoff.core.t794079.cljs$lang$ctorPrWriter = ((function (map__794078,map__794078__$1,data,y,x,ch){
return (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"romtoff.core/t794079");
});})(map__794078,map__794078__$1,data,y,x,ch))
;

romtoff.core.__GT_t794079 = ((function (map__794078,map__794078__$1,data,y,x,ch){
return (function romtoff$core$falling_circle_$___GT_t794079(ch__$1,x__$1,y__$1,data__$1,map__794078__$2,owner__$1,p__793818__$1,falling_circle__$1,meta794080){
return (new romtoff.core.t794079(ch__$1,x__$1,y__$1,data__$1,map__794078__$2,owner__$1,p__793818__$1,falling_circle__$1,meta794080));
});})(map__794078,map__794078__$1,data,y,x,ch))
;

}

return (new romtoff.core.t794079(ch,x,y,data,map__794078__$1,owner,p__793818,romtoff$core$falling_circle,cljs.core.PersistentArrayMap.EMPTY));
});
romtoff.core.from_default_entity = (function romtoff$core$from_default_entity(m){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"tweens","tweens",-1927735551),cljs.core.PersistentArrayMap.EMPTY], null),m);
});
romtoff.core.add_entity = (function romtoff$core$add_entity(data,entity){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (p1__794399_SHARP_){
return cljs.core.conj.call(null,p1__794399_SHARP_,entity);
}));
});
if(typeof romtoff.core.builder !== 'undefined'){
} else {
romtoff.core.builder = (function (){var method_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19015__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19016__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"romtoff.core","builder"),((function (method_table__19012__auto__,prefer_table__19013__auto__,method_cache__19014__auto__,cached_hierarchy__19015__auto__,hierarchy__19016__auto__){
return (function (data,owner){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data);
});})(method_table__19012__auto__,prefer_table__19013__auto__,method_cache__19014__auto__,cached_hierarchy__19015__auto__,hierarchy__19016__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19016__auto__,method_table__19012__auto__,prefer_table__19013__auto__,method_cache__19014__auto__,cached_hierarchy__19015__auto__));
})();
}
cljs.core._add_method.call(null,romtoff.core.builder,new cljs.core.Keyword(null,"sprite","sprite",172516848),(function (data,owner){
return romtoff.core.build_sprite.call(null,data,owner,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}));
cljs.core._add_method.call(null,romtoff.core.builder,new cljs.core.Keyword(null,"land","land",-1402569867),(function (data,owner){
return romtoff.core.land.call(null,data,owner);
}));
cljs.core._add_method.call(null,romtoff.core.builder,new cljs.core.Keyword(null,"water","water",-824098213),(function (data,owner){
return romtoff.core.water.call(null,data,owner);
}));
cljs.core._add_method.call(null,romtoff.core.builder,new cljs.core.Keyword(null,"arrow","arrow",1071351425),(function (data,owner){
return romtoff.core.arrow.call(null,data,owner);
}));
cljs.core._add_method.call(null,romtoff.core.builder,new cljs.core.Keyword(null,"falling-circle","falling-circle",184692362),(function (data,owner){
return romtoff.core.falling_circle.call(null,data,owner);
}));
romtoff.core.ones = (function romtoff$core$ones(r,c){
var row = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.constantly.call(null,(1)),cljs.core.range.call(null,r)));
var m = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.constantly.call(null,row),cljs.core.range.call(null,c)));
return m;
});
romtoff.core.level_1 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(0),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(1),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(1)], null)], null);
romtoff.core.level_2 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(0),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(1),(1),(0),(1),(1)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(1),(1),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(1),(1),(0),(1),(1)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(1),(1),(0),(1),(1)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(1),(1),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null)], null);
romtoff.core.is_land = (function romtoff$core$is_land(r,c,level){
return cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,level,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)));
});
romtoff.core.X_OFFSET = (8);
romtoff.core.Y_OFFSET = (8);
romtoff.core.TILE_WIDTH = (70);
romtoff.core.TILE_HEIGHT = (70);
om.core.root.call(null,(function (data,owner){
if(typeof romtoff.core.t794404 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t794404 = (function (owner,data,meta794405){
this.owner = owner;
this.data = data;
this.meta794405 = meta794405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t794404.prototype.om$core$IRenderState$ = true;

romtoff.core.t794404.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__794407){
var self__ = this;
var map__794408 = p__794407;
var map__794408__$1 = ((cljs.core.seq_QMARK_.call(null,map__794408))?cljs.core.apply.call(null,cljs.core.hash_map,map__794408):map__794408);
var game_chan = cljs.core.get.call(null,map__794408__$1,new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919));
var ___$1 = this;
var seq__794409_794496 = cljs.core.seq.call(null,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)));
var chunk__794410_794497 = null;
var count__794411_794498 = (0);
var i__794412_794499 = (0);
while(true){
if((i__794412_794499 < count__794411_794498)){
var entity_794500 = cljs.core._nth.call(null,chunk__794410_794497,i__794412_794499);
var seq__794413_794501 = cljs.core.seq.call(null,cljs.core.get.call(null,entity_794500,new cljs.core.Keyword(null,"tweens","tweens",-1927735551)));
var chunk__794414_794502 = null;
var count__794415_794503 = (0);
var i__794416_794504 = (0);
while(true){
if((i__794416_794504 < count__794415_794503)){
var vec__794417_794505 = cljs.core._nth.call(null,chunk__794414_794502,i__794416_794504);
var key_794506 = cljs.core.nth.call(null,vec__794417_794505,(0),null);
var map__794418_794507 = cljs.core.nth.call(null,vec__794417_794505,(1),null);
var map__794418_794508__$1 = ((cljs.core.seq_QMARK_.call(null,map__794418_794507))?cljs.core.apply.call(null,cljs.core.hash_map,map__794418_794507):map__794418_794507);
var tween_794509 = map__794418_794508__$1;
var when_done_794510 = cljs.core.get.call(null,map__794418_794508__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_794511 = cljs.core.get.call(null,map__794418_794508__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_794512 = cljs.core.get.call(null,map__794418_794508__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_794513 = cljs.core.get.call(null,map__794418_794508__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_794514 = cljs.core.get.call(null,map__794418_794508__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_794515 = cljs.core.get.call(null,map__794418_794508__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_794512)){
om.core.update_BANG_.call(null,tween_794509,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_794509,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_794500,key_794506));
} else {
var easing_fn_794516 = (function (){var G__794419 = (((easing_794513 instanceof cljs.core.Keyword))?easing_794513.fqn:null);
switch (G__794419) {
case "bounce-out":
return romtoff.core.bounce_out;

break;
case "cubic-out":
return romtoff.core.cubic_out;

break;
case "linear":
return romtoff.core.linear;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_794513)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_794500,key_794506,easing_fn_794516.call(null,initial_794511,target_794515,progress_794512,duration_794514));

om.core.transact_BANG_.call(null,tween_794509,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_794514,progress_794512)){
om.core.transact_BANG_.call(null,entity_794500,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__794413_794501,chunk__794414_794502,count__794415_794503,i__794416_794504,seq__794409_794496,chunk__794410_794497,count__794411_794498,i__794412_794499,vec__794417_794505,key_794506,map__794418_794507,map__794418_794508__$1,tween_794509,when_done_794510,initial_794511,progress_794512,easing_794513,duration_794514,target_794515,entity_794500,___$1,map__794408,map__794408__$1,game_chan){
return (function (p1__794403_SHARP_){
return cljs.core.dissoc.call(null,p1__794403_SHARP_,key_794506);
});})(seq__794413_794501,chunk__794414_794502,count__794415_794503,i__794416_794504,seq__794409_794496,chunk__794410_794497,count__794411_794498,i__794412_794499,vec__794417_794505,key_794506,map__794418_794507,map__794418_794508__$1,tween_794509,when_done_794510,initial_794511,progress_794512,easing_794513,duration_794514,target_794515,entity_794500,___$1,map__794408,map__794408__$1,game_chan))
);

if(cljs.core.truth_(when_done_794510)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_794510,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__794518 = seq__794413_794501;
var G__794519 = chunk__794414_794502;
var G__794520 = count__794415_794503;
var G__794521 = (i__794416_794504 + (1));
seq__794413_794501 = G__794518;
chunk__794414_794502 = G__794519;
count__794415_794503 = G__794520;
i__794416_794504 = G__794521;
continue;
} else {
var temp__4126__auto___794522 = cljs.core.seq.call(null,seq__794413_794501);
if(temp__4126__auto___794522){
var seq__794413_794523__$1 = temp__4126__auto___794522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__794413_794523__$1)){
var c__18902__auto___794524 = cljs.core.chunk_first.call(null,seq__794413_794523__$1);
var G__794525 = cljs.core.chunk_rest.call(null,seq__794413_794523__$1);
var G__794526 = c__18902__auto___794524;
var G__794527 = cljs.core.count.call(null,c__18902__auto___794524);
var G__794528 = (0);
seq__794413_794501 = G__794525;
chunk__794414_794502 = G__794526;
count__794415_794503 = G__794527;
i__794416_794504 = G__794528;
continue;
} else {
var vec__794420_794529 = cljs.core.first.call(null,seq__794413_794523__$1);
var key_794530 = cljs.core.nth.call(null,vec__794420_794529,(0),null);
var map__794421_794531 = cljs.core.nth.call(null,vec__794420_794529,(1),null);
var map__794421_794532__$1 = ((cljs.core.seq_QMARK_.call(null,map__794421_794531))?cljs.core.apply.call(null,cljs.core.hash_map,map__794421_794531):map__794421_794531);
var tween_794533 = map__794421_794532__$1;
var when_done_794534 = cljs.core.get.call(null,map__794421_794532__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_794535 = cljs.core.get.call(null,map__794421_794532__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_794536 = cljs.core.get.call(null,map__794421_794532__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_794537 = cljs.core.get.call(null,map__794421_794532__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_794538 = cljs.core.get.call(null,map__794421_794532__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_794539 = cljs.core.get.call(null,map__794421_794532__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_794536)){
om.core.update_BANG_.call(null,tween_794533,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_794533,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_794500,key_794530));
} else {
var easing_fn_794540 = (function (){var G__794422 = (((easing_794537 instanceof cljs.core.Keyword))?easing_794537.fqn:null);
switch (G__794422) {
case "bounce-out":
return romtoff.core.bounce_out;

break;
case "cubic-out":
return romtoff.core.cubic_out;

break;
case "linear":
return romtoff.core.linear;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_794537)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_794500,key_794530,easing_fn_794540.call(null,initial_794535,target_794539,progress_794536,duration_794538));

om.core.transact_BANG_.call(null,tween_794533,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_794538,progress_794536)){
om.core.transact_BANG_.call(null,entity_794500,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__794413_794501,chunk__794414_794502,count__794415_794503,i__794416_794504,seq__794409_794496,chunk__794410_794497,count__794411_794498,i__794412_794499,vec__794420_794529,key_794530,map__794421_794531,map__794421_794532__$1,tween_794533,when_done_794534,initial_794535,progress_794536,easing_794537,duration_794538,target_794539,seq__794413_794523__$1,temp__4126__auto___794522,entity_794500,___$1,map__794408,map__794408__$1,game_chan){
return (function (p1__794403_SHARP_){
return cljs.core.dissoc.call(null,p1__794403_SHARP_,key_794530);
});})(seq__794413_794501,chunk__794414_794502,count__794415_794503,i__794416_794504,seq__794409_794496,chunk__794410_794497,count__794411_794498,i__794412_794499,vec__794420_794529,key_794530,map__794421_794531,map__794421_794532__$1,tween_794533,when_done_794534,initial_794535,progress_794536,easing_794537,duration_794538,target_794539,seq__794413_794523__$1,temp__4126__auto___794522,entity_794500,___$1,map__794408,map__794408__$1,game_chan))
);

if(cljs.core.truth_(when_done_794534)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_794534,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__794542 = cljs.core.next.call(null,seq__794413_794523__$1);
var G__794543 = null;
var G__794544 = (0);
var G__794545 = (0);
seq__794413_794501 = G__794542;
chunk__794414_794502 = G__794543;
count__794415_794503 = G__794544;
i__794416_794504 = G__794545;
continue;
}
} else {
}
}
break;
}

var G__794546 = seq__794409_794496;
var G__794547 = chunk__794410_794497;
var G__794548 = count__794411_794498;
var G__794549 = (i__794412_794499 + (1));
seq__794409_794496 = G__794546;
chunk__794410_794497 = G__794547;
count__794411_794498 = G__794548;
i__794412_794499 = G__794549;
continue;
} else {
var temp__4126__auto___794550 = cljs.core.seq.call(null,seq__794409_794496);
if(temp__4126__auto___794550){
var seq__794409_794551__$1 = temp__4126__auto___794550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__794409_794551__$1)){
var c__18902__auto___794552 = cljs.core.chunk_first.call(null,seq__794409_794551__$1);
var G__794553 = cljs.core.chunk_rest.call(null,seq__794409_794551__$1);
var G__794554 = c__18902__auto___794552;
var G__794555 = cljs.core.count.call(null,c__18902__auto___794552);
var G__794556 = (0);
seq__794409_794496 = G__794553;
chunk__794410_794497 = G__794554;
count__794411_794498 = G__794555;
i__794412_794499 = G__794556;
continue;
} else {
var entity_794557 = cljs.core.first.call(null,seq__794409_794551__$1);
var seq__794423_794558 = cljs.core.seq.call(null,cljs.core.get.call(null,entity_794557,new cljs.core.Keyword(null,"tweens","tweens",-1927735551)));
var chunk__794424_794559 = null;
var count__794425_794560 = (0);
var i__794426_794561 = (0);
while(true){
if((i__794426_794561 < count__794425_794560)){
var vec__794427_794562 = cljs.core._nth.call(null,chunk__794424_794559,i__794426_794561);
var key_794563 = cljs.core.nth.call(null,vec__794427_794562,(0),null);
var map__794428_794564 = cljs.core.nth.call(null,vec__794427_794562,(1),null);
var map__794428_794565__$1 = ((cljs.core.seq_QMARK_.call(null,map__794428_794564))?cljs.core.apply.call(null,cljs.core.hash_map,map__794428_794564):map__794428_794564);
var tween_794566 = map__794428_794565__$1;
var when_done_794567 = cljs.core.get.call(null,map__794428_794565__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_794568 = cljs.core.get.call(null,map__794428_794565__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_794569 = cljs.core.get.call(null,map__794428_794565__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_794570 = cljs.core.get.call(null,map__794428_794565__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_794571 = cljs.core.get.call(null,map__794428_794565__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_794572 = cljs.core.get.call(null,map__794428_794565__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_794569)){
om.core.update_BANG_.call(null,tween_794566,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_794566,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_794557,key_794563));
} else {
var easing_fn_794573 = (function (){var G__794429 = (((easing_794570 instanceof cljs.core.Keyword))?easing_794570.fqn:null);
switch (G__794429) {
case "bounce-out":
return romtoff.core.bounce_out;

break;
case "cubic-out":
return romtoff.core.cubic_out;

break;
case "linear":
return romtoff.core.linear;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_794570)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_794557,key_794563,easing_fn_794573.call(null,initial_794568,target_794572,progress_794569,duration_794571));

om.core.transact_BANG_.call(null,tween_794566,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_794571,progress_794569)){
om.core.transact_BANG_.call(null,entity_794557,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__794423_794558,chunk__794424_794559,count__794425_794560,i__794426_794561,seq__794409_794496,chunk__794410_794497,count__794411_794498,i__794412_794499,vec__794427_794562,key_794563,map__794428_794564,map__794428_794565__$1,tween_794566,when_done_794567,initial_794568,progress_794569,easing_794570,duration_794571,target_794572,entity_794557,seq__794409_794551__$1,temp__4126__auto___794550,___$1,map__794408,map__794408__$1,game_chan){
return (function (p1__794403_SHARP_){
return cljs.core.dissoc.call(null,p1__794403_SHARP_,key_794563);
});})(seq__794423_794558,chunk__794424_794559,count__794425_794560,i__794426_794561,seq__794409_794496,chunk__794410_794497,count__794411_794498,i__794412_794499,vec__794427_794562,key_794563,map__794428_794564,map__794428_794565__$1,tween_794566,when_done_794567,initial_794568,progress_794569,easing_794570,duration_794571,target_794572,entity_794557,seq__794409_794551__$1,temp__4126__auto___794550,___$1,map__794408,map__794408__$1,game_chan))
);

if(cljs.core.truth_(when_done_794567)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_794567,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__794575 = seq__794423_794558;
var G__794576 = chunk__794424_794559;
var G__794577 = count__794425_794560;
var G__794578 = (i__794426_794561 + (1));
seq__794423_794558 = G__794575;
chunk__794424_794559 = G__794576;
count__794425_794560 = G__794577;
i__794426_794561 = G__794578;
continue;
} else {
var temp__4126__auto___794579__$1 = cljs.core.seq.call(null,seq__794423_794558);
if(temp__4126__auto___794579__$1){
var seq__794423_794580__$1 = temp__4126__auto___794579__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__794423_794580__$1)){
var c__18902__auto___794581 = cljs.core.chunk_first.call(null,seq__794423_794580__$1);
var G__794582 = cljs.core.chunk_rest.call(null,seq__794423_794580__$1);
var G__794583 = c__18902__auto___794581;
var G__794584 = cljs.core.count.call(null,c__18902__auto___794581);
var G__794585 = (0);
seq__794423_794558 = G__794582;
chunk__794424_794559 = G__794583;
count__794425_794560 = G__794584;
i__794426_794561 = G__794585;
continue;
} else {
var vec__794430_794586 = cljs.core.first.call(null,seq__794423_794580__$1);
var key_794587 = cljs.core.nth.call(null,vec__794430_794586,(0),null);
var map__794431_794588 = cljs.core.nth.call(null,vec__794430_794586,(1),null);
var map__794431_794589__$1 = ((cljs.core.seq_QMARK_.call(null,map__794431_794588))?cljs.core.apply.call(null,cljs.core.hash_map,map__794431_794588):map__794431_794588);
var tween_794590 = map__794431_794589__$1;
var when_done_794591 = cljs.core.get.call(null,map__794431_794589__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_794592 = cljs.core.get.call(null,map__794431_794589__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_794593 = cljs.core.get.call(null,map__794431_794589__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_794594 = cljs.core.get.call(null,map__794431_794589__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_794595 = cljs.core.get.call(null,map__794431_794589__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_794596 = cljs.core.get.call(null,map__794431_794589__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_794593)){
om.core.update_BANG_.call(null,tween_794590,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_794590,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_794557,key_794587));
} else {
var easing_fn_794597 = (function (){var G__794432 = (((easing_794594 instanceof cljs.core.Keyword))?easing_794594.fqn:null);
switch (G__794432) {
case "bounce-out":
return romtoff.core.bounce_out;

break;
case "cubic-out":
return romtoff.core.cubic_out;

break;
case "linear":
return romtoff.core.linear;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_794594)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_794557,key_794587,easing_fn_794597.call(null,initial_794592,target_794596,progress_794593,duration_794595));

om.core.transact_BANG_.call(null,tween_794590,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_794595,progress_794593)){
om.core.transact_BANG_.call(null,entity_794557,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__794423_794558,chunk__794424_794559,count__794425_794560,i__794426_794561,seq__794409_794496,chunk__794410_794497,count__794411_794498,i__794412_794499,vec__794430_794586,key_794587,map__794431_794588,map__794431_794589__$1,tween_794590,when_done_794591,initial_794592,progress_794593,easing_794594,duration_794595,target_794596,seq__794423_794580__$1,temp__4126__auto___794579__$1,entity_794557,seq__794409_794551__$1,temp__4126__auto___794550,___$1,map__794408,map__794408__$1,game_chan){
return (function (p1__794403_SHARP_){
return cljs.core.dissoc.call(null,p1__794403_SHARP_,key_794587);
});})(seq__794423_794558,chunk__794424_794559,count__794425_794560,i__794426_794561,seq__794409_794496,chunk__794410_794497,count__794411_794498,i__794412_794499,vec__794430_794586,key_794587,map__794431_794588,map__794431_794589__$1,tween_794590,when_done_794591,initial_794592,progress_794593,easing_794594,duration_794595,target_794596,seq__794423_794580__$1,temp__4126__auto___794579__$1,entity_794557,seq__794409_794551__$1,temp__4126__auto___794550,___$1,map__794408,map__794408__$1,game_chan))
);

if(cljs.core.truth_(when_done_794591)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_794591,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__794599 = cljs.core.next.call(null,seq__794423_794580__$1);
var G__794600 = null;
var G__794601 = (0);
var G__794602 = (0);
seq__794423_794558 = G__794599;
chunk__794424_794559 = G__794600;
count__794425_794560 = G__794601;
i__794426_794561 = G__794602;
continue;
}
} else {
}
}
break;
}

var G__794603 = cljs.core.next.call(null,seq__794409_794551__$1);
var G__794604 = null;
var G__794605 = (0);
var G__794606 = (0);
seq__794409_794496 = G__794603;
chunk__794410_794497 = G__794604;
count__794411_794498 = G__794605;
i__794412_794499 = G__794606;
continue;
}
} else {
}
}
break;
}

var seq__794433_794607 = cljs.core.seq.call(null,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)));
var chunk__794434_794608 = null;
var count__794435_794609 = (0);
var i__794436_794610 = (0);
while(true){
if((i__794436_794610 < count__794435_794609)){
var entity_794611 = cljs.core._nth.call(null,chunk__794434_794608,i__794436_794610);
var temp__4126__auto___794612 = new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(entity_794611);
if(cljs.core.truth_(temp__4126__auto___794612)){
var map__794437_794613 = temp__4126__auto___794612;
var map__794437_794614__$1 = ((cljs.core.seq_QMARK_.call(null,map__794437_794613))?cljs.core.apply.call(null,cljs.core.hash_map,map__794437_794613):map__794437_794613);
var animation_794615 = map__794437_794614__$1;
var current_794616 = cljs.core.get.call(null,map__794437_794614__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var progress_794617 = cljs.core.get.call(null,map__794437_794614__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var duration_794618 = cljs.core.get.call(null,map__794437_794614__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var frames_794619 = cljs.core.get.call(null,map__794437_794614__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.not.call(null,progress_794617)){
om.core.update_BANG_.call(null,animation_794615,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,animation_794615,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.first.call(null,frames_794619));
} else {
om.core.transact_BANG_.call(null,animation_794615,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_794618,progress_794617)){
om.core.update_BANG_.call(null,animation_794615,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

var current_index_794620 = cljs.core.to_array.call(null,frames_794619).indexOf(current_794616);
var next_index_794621 = ((cljs.core._EQ_.call(null,(cljs.core.count.call(null,frames_794619) - (1)),current_index_794620))?(0):(current_index_794620 + (1)));
om.core.update_BANG_.call(null,animation_794615,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.get.call(null,frames_794619,next_index_794621));
} else {
}
}
} else {
}

var G__794622 = seq__794433_794607;
var G__794623 = chunk__794434_794608;
var G__794624 = count__794435_794609;
var G__794625 = (i__794436_794610 + (1));
seq__794433_794607 = G__794622;
chunk__794434_794608 = G__794623;
count__794435_794609 = G__794624;
i__794436_794610 = G__794625;
continue;
} else {
var temp__4126__auto___794626 = cljs.core.seq.call(null,seq__794433_794607);
if(temp__4126__auto___794626){
var seq__794433_794627__$1 = temp__4126__auto___794626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__794433_794627__$1)){
var c__18902__auto___794628 = cljs.core.chunk_first.call(null,seq__794433_794627__$1);
var G__794629 = cljs.core.chunk_rest.call(null,seq__794433_794627__$1);
var G__794630 = c__18902__auto___794628;
var G__794631 = cljs.core.count.call(null,c__18902__auto___794628);
var G__794632 = (0);
seq__794433_794607 = G__794629;
chunk__794434_794608 = G__794630;
count__794435_794609 = G__794631;
i__794436_794610 = G__794632;
continue;
} else {
var entity_794633 = cljs.core.first.call(null,seq__794433_794627__$1);
var temp__4126__auto___794634__$1 = new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(entity_794633);
if(cljs.core.truth_(temp__4126__auto___794634__$1)){
var map__794438_794635 = temp__4126__auto___794634__$1;
var map__794438_794636__$1 = ((cljs.core.seq_QMARK_.call(null,map__794438_794635))?cljs.core.apply.call(null,cljs.core.hash_map,map__794438_794635):map__794438_794635);
var animation_794637 = map__794438_794636__$1;
var current_794638 = cljs.core.get.call(null,map__794438_794636__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var progress_794639 = cljs.core.get.call(null,map__794438_794636__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var duration_794640 = cljs.core.get.call(null,map__794438_794636__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var frames_794641 = cljs.core.get.call(null,map__794438_794636__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.not.call(null,progress_794639)){
om.core.update_BANG_.call(null,animation_794637,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,animation_794637,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.first.call(null,frames_794641));
} else {
om.core.transact_BANG_.call(null,animation_794637,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_794640,progress_794639)){
om.core.update_BANG_.call(null,animation_794637,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

var current_index_794642 = cljs.core.to_array.call(null,frames_794641).indexOf(current_794638);
var next_index_794643 = ((cljs.core._EQ_.call(null,(cljs.core.count.call(null,frames_794641) - (1)),current_index_794642))?(0):(current_index_794642 + (1)));
om.core.update_BANG_.call(null,animation_794637,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.get.call(null,frames_794641,next_index_794643));
} else {
}
}
} else {
}

var G__794644 = cljs.core.next.call(null,seq__794433_794627__$1);
var G__794645 = null;
var G__794646 = (0);
var G__794647 = (0);
seq__794433_794607 = G__794644;
chunk__794434_794608 = G__794645;
count__794435_794609 = G__794646;
i__794436_794610 = G__794647;
continue;
}
} else {
}
}
break;
}

return cljs.core.apply.call(null,React.DOM.div,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.svg,{"onMouseUp": ((function (___$1,map__794408,map__794408__$1,game_chan){
return (function (e){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null),false);
});})(___$1,map__794408,map__794408__$1,game_chan))
, "onMouseDown": ((function (___$1,map__794408,map__794408__$1,game_chan){
return (function (e){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.pageX,new cljs.core.Keyword(null,"y","y",-1757859776),e.pageY], null));
});})(___$1,map__794408,map__794408__$1,game_chan))
, "onMouseMove": ((function (___$1,map__794408,map__794408__$1,game_chan){
return (function (e){
var x = e.pageX;
var y = e.pageY;
om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"current","current",-1088038603)], null)));

om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));

var new_selection_794648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,(y - romtoff.core.Y_OFFSET),romtoff.core.TILE_HEIGHT),cljs.core.quot.call(null,(x - romtoff.core.X_OFFSET),romtoff.core.TILE_WIDTH)], null);
var current_selection_794649 = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
if(cljs.core.not_EQ_.call(null,new_selection_794648,current_selection_794649)){
om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),current_selection_794649);

om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_selection_794648);

cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prev","prev",-1597069226),current_selection_794649,new cljs.core.Keyword(null,"current","current",-1088038603),new_selection_794648], null)], null));
} else {
}

if(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null)))){
var map__794439 = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var map__794439__$1 = ((cljs.core.seq_QMARK_.call(null,map__794439))?cljs.core.apply.call(null,cljs.core.hash_map,map__794439):map__794439);
var prev = cljs.core.get.call(null,map__794439__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var current = cljs.core.get.call(null,map__794439__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var dx = (current.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) - prev.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
var dy = (current.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) - prev.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)));
return null;
} else {
return null;
}
});})(___$1,map__794408,map__794408__$1,game_chan))
, "style": {"border": "1px solid lightgray", "float": "left"}, "height": (1136), "width": (640)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.rect({"style": {"fill": "rgb(250, 250, 200)"}, "height": (1136), "width": (640), "y": (0), "x": (0)}),cljs.core.apply.call(null,React.DOM.g,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (___$1,map__794408,map__794408__$1,game_chan){
return (function (p__794440){
var map__794441 = p__794440;
var map__794441__$1 = ((cljs.core.seq_QMARK_.call(null,map__794441))?cljs.core.apply.call(null,cljs.core.hash_map,map__794441):map__794441);
var entity = map__794441__$1;
var type = cljs.core.get.call(null,map__794441__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.core.build.call(null,romtoff.core.builder,entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919),game_chan], null)], null));
});})(___$1,map__794408,map__794408__$1,game_chan))
,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)))],null))))],null))))],null))));
});

romtoff.core.t794404.prototype.om$core$IDidMount$ = true;

romtoff.core.t794404.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
romtoff.core.tell.call(null,new cljs.core.Keyword(null,"block-0-0","block-0-0",-587533043),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"boo","boo",-838251187),true], null));

romtoff.core.tell.call(null,new cljs.core.Keyword(null,"circle-1","circle-1",1289264945),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand.call(null,(600))], null),new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(1000),new cljs.core.Keyword(null,"duration","duration",1444101068),(30),new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"bounce-out","bounce-out",-562459295)], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),cljs.core.rand.call(null,(600)),new cljs.core.Keyword(null,"duration","duration",1444101068),(60),new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"cubic-out","cubic-out",904942597),new cljs.core.Keyword(null,"when-done","when-done",889619364),new cljs.core.Keyword(null,"new-ball","new-ball",-1158947386)], null)], null)], null));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),cljs.core.rand_nth.call(null,romtoff.core.tetriminos));

return setTimeout(((function (___$1){
return (function (___$2){
romtoff.core.music_off.call(null);

romtoff.core.music_on.call(null);

romtoff.core.sound_off.call(null);

return romtoff.core.sound_on.call(null);
});})(___$1))
,(1000));
});

romtoff.core.t794404.prototype.om$core$IWillMount$ = true;

romtoff.core.t794404.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
setInterval(((function (___$1){
return (function (){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.inc);
});})(___$1))
,(34));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"height","height",1025178622),(910),new cljs.core.Keyword(null,"width","width",-384071477),(630),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/map_1.png"], null)));

var level_794650 = romtoff.core.level_2;
var seq__794442_794651 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,level_794650)));
var chunk__794447_794652 = null;
var count__794448_794653 = (0);
var i__794449_794654 = (0);
while(true){
if((i__794449_794654 < count__794448_794653)){
var r_794655 = cljs.core._nth.call(null,chunk__794447_794652,i__794449_794654);
var seq__794450_794656 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_794650))));
var chunk__794451_794657 = null;
var count__794452_794658 = (0);
var i__794453_794659 = (0);
while(true){
if((i__794453_794659 < count__794452_794658)){
var c_794660 = cljs.core._nth.call(null,chunk__794451_794657,i__794453_794659);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_794655,c_794660,level_794650))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_794655,c_794660),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(c_794660 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794655 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block.jpg",new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_794655,c_794660),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(c_794660 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794655 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block-water.jpg"], null)));
}

var G__794661 = seq__794450_794656;
var G__794662 = chunk__794451_794657;
var G__794663 = count__794452_794658;
var G__794664 = (i__794453_794659 + (1));
seq__794450_794656 = G__794661;
chunk__794451_794657 = G__794662;
count__794452_794658 = G__794663;
i__794453_794659 = G__794664;
continue;
} else {
var temp__4126__auto___794665 = cljs.core.seq.call(null,seq__794450_794656);
if(temp__4126__auto___794665){
var seq__794450_794666__$1 = temp__4126__auto___794665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__794450_794666__$1)){
var c__18902__auto___794667 = cljs.core.chunk_first.call(null,seq__794450_794666__$1);
var G__794668 = cljs.core.chunk_rest.call(null,seq__794450_794666__$1);
var G__794669 = c__18902__auto___794667;
var G__794670 = cljs.core.count.call(null,c__18902__auto___794667);
var G__794671 = (0);
seq__794450_794656 = G__794668;
chunk__794451_794657 = G__794669;
count__794452_794658 = G__794670;
i__794453_794659 = G__794671;
continue;
} else {
var c_794672 = cljs.core.first.call(null,seq__794450_794666__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_794655,c_794672,level_794650))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_794655,c_794672),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(c_794672 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794655 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block.jpg",new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_794655,c_794672),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(c_794672 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794655 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block-water.jpg"], null)));
}

var G__794673 = cljs.core.next.call(null,seq__794450_794666__$1);
var G__794674 = null;
var G__794675 = (0);
var G__794676 = (0);
seq__794450_794656 = G__794673;
chunk__794451_794657 = G__794674;
count__794452_794658 = G__794675;
i__794453_794659 = G__794676;
continue;
}
} else {
}
}
break;
}

var G__794677 = seq__794442_794651;
var G__794678 = chunk__794447_794652;
var G__794679 = count__794448_794653;
var G__794680 = (i__794449_794654 + (1));
seq__794442_794651 = G__794677;
chunk__794447_794652 = G__794678;
count__794448_794653 = G__794679;
i__794449_794654 = G__794680;
continue;
} else {
var temp__4126__auto___794681 = cljs.core.seq.call(null,seq__794442_794651);
if(temp__4126__auto___794681){
var seq__794442_794682__$1 = temp__4126__auto___794681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__794442_794682__$1)){
var c__18902__auto___794683 = cljs.core.chunk_first.call(null,seq__794442_794682__$1);
var G__794684 = cljs.core.chunk_rest.call(null,seq__794442_794682__$1);
var G__794685 = c__18902__auto___794683;
var G__794686 = cljs.core.count.call(null,c__18902__auto___794683);
var G__794687 = (0);
seq__794442_794651 = G__794684;
chunk__794447_794652 = G__794685;
count__794448_794653 = G__794686;
i__794449_794654 = G__794687;
continue;
} else {
var r_794688 = cljs.core.first.call(null,seq__794442_794682__$1);
var seq__794443_794689 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_794650))));
var chunk__794444_794690 = null;
var count__794445_794691 = (0);
var i__794446_794692 = (0);
while(true){
if((i__794446_794692 < count__794445_794691)){
var c_794693 = cljs.core._nth.call(null,chunk__794444_794690,i__794446_794692);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_794688,c_794693,level_794650))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_794688,c_794693),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(c_794693 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794688 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block.jpg",new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_794688,c_794693),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(c_794693 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794688 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block-water.jpg"], null)));
}

var G__794694 = seq__794443_794689;
var G__794695 = chunk__794444_794690;
var G__794696 = count__794445_794691;
var G__794697 = (i__794446_794692 + (1));
seq__794443_794689 = G__794694;
chunk__794444_794690 = G__794695;
count__794445_794691 = G__794696;
i__794446_794692 = G__794697;
continue;
} else {
var temp__4126__auto___794698__$1 = cljs.core.seq.call(null,seq__794443_794689);
if(temp__4126__auto___794698__$1){
var seq__794443_794699__$1 = temp__4126__auto___794698__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__794443_794699__$1)){
var c__18902__auto___794700 = cljs.core.chunk_first.call(null,seq__794443_794699__$1);
var G__794701 = cljs.core.chunk_rest.call(null,seq__794443_794699__$1);
var G__794702 = c__18902__auto___794700;
var G__794703 = cljs.core.count.call(null,c__18902__auto___794700);
var G__794704 = (0);
seq__794443_794689 = G__794701;
chunk__794444_794690 = G__794702;
count__794445_794691 = G__794703;
i__794446_794692 = G__794704;
continue;
} else {
var c_794705 = cljs.core.first.call(null,seq__794443_794699__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_794688,c_794705,level_794650))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_794688,c_794705),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(c_794705 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794688 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block.jpg",new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_794688,c_794705),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(c_794705 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794688 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block-water.jpg"], null)));
}

var G__794706 = cljs.core.next.call(null,seq__794443_794699__$1);
var G__794707 = null;
var G__794708 = (0);
var G__794709 = (0);
seq__794443_794689 = G__794706;
chunk__794444_794690 = G__794707;
count__794445_794691 = G__794708;
i__794446_794692 = G__794709;
continue;
}
} else {
}
}
break;
}

var G__794710 = cljs.core.next.call(null,seq__794442_794682__$1);
var G__794711 = null;
var G__794712 = (0);
var G__794713 = (0);
seq__794442_794651 = G__794710;
chunk__794447_794652 = G__794711;
count__794448_794653 = G__794712;
i__794449_794654 = G__794713;
continue;
}
} else {
}
}
break;
}

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"circle-1","circle-1",1289264945),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"falling-circle","falling-circle",184692362)], null)));

var game_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919));
var handler = ((function (game_chan,___$1){
return (function (messages){
var seq__794454 = cljs.core.seq.call(null,messages);
var chunk__794455 = null;
var count__794456 = (0);
var i__794457 = (0);
while(true){
if((i__794457 < count__794456)){
var vec__794458 = cljs.core._nth.call(null,chunk__794455,i__794457);
var type = cljs.core.nth.call(null,vec__794458,(0),null);
var contents = cljs.core.nth.call(null,vec__794458,(1),null);
cljs.core.println.call(null,type);

var G__794459_794714 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__794459_794714) {
case "gen-next-tetrimino":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),cljs.core.rand_nth.call(null,romtoff.core.tetriminos));

break;
case "tetrimino-at":
var t_794716 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_794717 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(contents);
cljs.core.println.call(null,"message",t_794716,c_794717);

var tetrimino_blocks_coords_794718 = romtoff.core.tetrimino_coords.call(null,t_794716,c_794717);
if(cljs.core.every_QMARK_.call(null,((function (seq__794454,chunk__794455,count__794456,i__794457,tetrimino_blocks_coords_794718,t_794716,c_794717,G__794459_794714,vec__794458,type,contents,game_chan,___$1){
return (function (p1__794402_SHARP_){
return romtoff.core.in_bounds.call(null,p1__794402_SHARP_);
});})(seq__794454,chunk__794455,count__794456,i__794457,tetrimino_blocks_coords_794718,t_794716,c_794717,G__794459_794714,vec__794458,type,contents,game_chan,___$1))
,tetrimino_blocks_coords_794718)){
var seq__794460_794719 = cljs.core.seq.call(null,tetrimino_blocks_coords_794718);
var chunk__794461_794720 = null;
var count__794462_794721 = (0);
var i__794463_794722 = (0);
while(true){
if((i__794463_794722 < count__794462_794721)){
var vec__794464_794723 = cljs.core._nth.call(null,chunk__794461_794720,i__794463_794722);
var r_794724 = cljs.core.nth.call(null,vec__794464_794723,(0),null);
var c_794725__$1 = cljs.core.nth.call(null,vec__794464_794723,(1),null);
var tbc_794726 = vec__794464_794723;
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_794724),cljs.core.str("-"),cljs.core.str(c_794725__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(c_794725__$1 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794724 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/sageata.png"], null)));

var G__794727 = seq__794460_794719;
var G__794728 = chunk__794461_794720;
var G__794729 = count__794462_794721;
var G__794730 = (i__794463_794722 + (1));
seq__794460_794719 = G__794727;
chunk__794461_794720 = G__794728;
count__794462_794721 = G__794729;
i__794463_794722 = G__794730;
continue;
} else {
var temp__4126__auto___794731 = cljs.core.seq.call(null,seq__794460_794719);
if(temp__4126__auto___794731){
var seq__794460_794732__$1 = temp__4126__auto___794731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__794460_794732__$1)){
var c__18902__auto___794733 = cljs.core.chunk_first.call(null,seq__794460_794732__$1);
var G__794734 = cljs.core.chunk_rest.call(null,seq__794460_794732__$1);
var G__794735 = c__18902__auto___794733;
var G__794736 = cljs.core.count.call(null,c__18902__auto___794733);
var G__794737 = (0);
seq__794460_794719 = G__794734;
chunk__794461_794720 = G__794735;
count__794462_794721 = G__794736;
i__794463_794722 = G__794737;
continue;
} else {
var vec__794465_794738 = cljs.core.first.call(null,seq__794460_794732__$1);
var r_794739 = cljs.core.nth.call(null,vec__794465_794738,(0),null);
var c_794740__$1 = cljs.core.nth.call(null,vec__794465_794738,(1),null);
var tbc_794741 = vec__794465_794738;
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_794739),cljs.core.str("-"),cljs.core.str(c_794740__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(c_794740__$1 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794739 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/sageata.png"], null)));

var G__794742 = cljs.core.next.call(null,seq__794460_794732__$1);
var G__794743 = null;
var G__794744 = (0);
var G__794745 = (0);
seq__794460_794719 = G__794742;
chunk__794461_794720 = G__794743;
count__794462_794721 = G__794744;
i__794463_794722 = G__794745;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.core.println.call(null,tetrimino_blocks_coords_794718);

break;
case "clear-selection":
var data_794746__$1 = om.core.get_props.call(null,self__.owner);
var entities_794747 = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(data_794746__$1);
var arrow_ids_794748 = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,((function (seq__794454,chunk__794455,count__794456,i__794457,data_794746__$1,entities_794747,G__794459_794714,vec__794458,type,contents,game_chan,___$1){
return (function (p1__794400_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__794400_SHARP_));
});})(seq__794454,chunk__794455,count__794456,i__794457,data_794746__$1,entities_794747,G__794459_794714,vec__794458,type,contents,game_chan,___$1))
,entities_794747)));
var no_arrows_794749 = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (seq__794454,chunk__794455,count__794456,i__794457,data_794746__$1,entities_794747,arrow_ids_794748,G__794459_794714,vec__794458,type,contents,game_chan,___$1){
return (function (p1__794401_SHARP_){
return cljs.core.contains_QMARK_.call(null,arrow_ids_794748,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__794401_SHARP_));
});})(seq__794454,chunk__794455,count__794456,i__794457,data_794746__$1,entities_794747,arrow_ids_794748,G__794459_794714,vec__794458,type,contents,game_chan,___$1))
,entities_794747));
om.core.update_BANG_.call(null,data_794746__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),no_arrows_794749);

break;
case "selection":
var vec__794466_794750 = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(contents);
var r_794751 = cljs.core.nth.call(null,vec__794466_794750,(0),null);
var c_794752 = cljs.core.nth.call(null,vec__794466_794750,(1),null);
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tetrimino-at","tetrimino-at",1514048990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_794751,c_794752], null)], null)], null));

break;
default:
console.warn([cljs.core.str("Game: Missing message handler for "),cljs.core.str(type)].join(''));

}

var G__794753 = seq__794454;
var G__794754 = chunk__794455;
var G__794755 = count__794456;
var G__794756 = (i__794457 + (1));
seq__794454 = G__794753;
chunk__794455 = G__794754;
count__794456 = G__794755;
i__794457 = G__794756;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__794454);
if(temp__4126__auto__){
var seq__794454__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__794454__$1)){
var c__18902__auto__ = cljs.core.chunk_first.call(null,seq__794454__$1);
var G__794757 = cljs.core.chunk_rest.call(null,seq__794454__$1);
var G__794758 = c__18902__auto__;
var G__794759 = cljs.core.count.call(null,c__18902__auto__);
var G__794760 = (0);
seq__794454 = G__794757;
chunk__794455 = G__794758;
count__794456 = G__794759;
i__794457 = G__794760;
continue;
} else {
var vec__794467 = cljs.core.first.call(null,seq__794454__$1);
var type = cljs.core.nth.call(null,vec__794467,(0),null);
var contents = cljs.core.nth.call(null,vec__794467,(1),null);
cljs.core.println.call(null,type);

var G__794468_794761 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__794468_794761) {
case "gen-next-tetrimino":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),cljs.core.rand_nth.call(null,romtoff.core.tetriminos));

break;
case "tetrimino-at":
var t_794763 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_794764 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(contents);
cljs.core.println.call(null,"message",t_794763,c_794764);

var tetrimino_blocks_coords_794765 = romtoff.core.tetrimino_coords.call(null,t_794763,c_794764);
if(cljs.core.every_QMARK_.call(null,((function (seq__794454,chunk__794455,count__794456,i__794457,tetrimino_blocks_coords_794765,t_794763,c_794764,G__794468_794761,vec__794467,type,contents,seq__794454__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__794402_SHARP_){
return romtoff.core.in_bounds.call(null,p1__794402_SHARP_);
});})(seq__794454,chunk__794455,count__794456,i__794457,tetrimino_blocks_coords_794765,t_794763,c_794764,G__794468_794761,vec__794467,type,contents,seq__794454__$1,temp__4126__auto__,game_chan,___$1))
,tetrimino_blocks_coords_794765)){
var seq__794469_794766 = cljs.core.seq.call(null,tetrimino_blocks_coords_794765);
var chunk__794470_794767 = null;
var count__794471_794768 = (0);
var i__794472_794769 = (0);
while(true){
if((i__794472_794769 < count__794471_794768)){
var vec__794473_794770 = cljs.core._nth.call(null,chunk__794470_794767,i__794472_794769);
var r_794771 = cljs.core.nth.call(null,vec__794473_794770,(0),null);
var c_794772__$1 = cljs.core.nth.call(null,vec__794473_794770,(1),null);
var tbc_794773 = vec__794473_794770;
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_794771),cljs.core.str("-"),cljs.core.str(c_794772__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(c_794772__$1 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794771 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/sageata.png"], null)));

var G__794774 = seq__794469_794766;
var G__794775 = chunk__794470_794767;
var G__794776 = count__794471_794768;
var G__794777 = (i__794472_794769 + (1));
seq__794469_794766 = G__794774;
chunk__794470_794767 = G__794775;
count__794471_794768 = G__794776;
i__794472_794769 = G__794777;
continue;
} else {
var temp__4126__auto___794778__$1 = cljs.core.seq.call(null,seq__794469_794766);
if(temp__4126__auto___794778__$1){
var seq__794469_794779__$1 = temp__4126__auto___794778__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__794469_794779__$1)){
var c__18902__auto___794780 = cljs.core.chunk_first.call(null,seq__794469_794779__$1);
var G__794781 = cljs.core.chunk_rest.call(null,seq__794469_794779__$1);
var G__794782 = c__18902__auto___794780;
var G__794783 = cljs.core.count.call(null,c__18902__auto___794780);
var G__794784 = (0);
seq__794469_794766 = G__794781;
chunk__794470_794767 = G__794782;
count__794471_794768 = G__794783;
i__794472_794769 = G__794784;
continue;
} else {
var vec__794474_794785 = cljs.core.first.call(null,seq__794469_794779__$1);
var r_794786 = cljs.core.nth.call(null,vec__794474_794785,(0),null);
var c_794787__$1 = cljs.core.nth.call(null,vec__794474_794785,(1),null);
var tbc_794788 = vec__794474_794785;
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_794786),cljs.core.str("-"),cljs.core.str(c_794787__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(c_794787__$1 * (70)),new cljs.core.Keyword(null,"y","y",-1757859776),(r_794786 * (70)),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/sageata.png"], null)));

var G__794789 = cljs.core.next.call(null,seq__794469_794779__$1);
var G__794790 = null;
var G__794791 = (0);
var G__794792 = (0);
seq__794469_794766 = G__794789;
chunk__794470_794767 = G__794790;
count__794471_794768 = G__794791;
i__794472_794769 = G__794792;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.core.println.call(null,tetrimino_blocks_coords_794765);

break;
case "clear-selection":
var data_794793__$1 = om.core.get_props.call(null,self__.owner);
var entities_794794 = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(data_794793__$1);
var arrow_ids_794795 = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,((function (seq__794454,chunk__794455,count__794456,i__794457,data_794793__$1,entities_794794,G__794468_794761,vec__794467,type,contents,seq__794454__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__794400_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__794400_SHARP_));
});})(seq__794454,chunk__794455,count__794456,i__794457,data_794793__$1,entities_794794,G__794468_794761,vec__794467,type,contents,seq__794454__$1,temp__4126__auto__,game_chan,___$1))
,entities_794794)));
var no_arrows_794796 = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (seq__794454,chunk__794455,count__794456,i__794457,data_794793__$1,entities_794794,arrow_ids_794795,G__794468_794761,vec__794467,type,contents,seq__794454__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__794401_SHARP_){
return cljs.core.contains_QMARK_.call(null,arrow_ids_794795,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__794401_SHARP_));
});})(seq__794454,chunk__794455,count__794456,i__794457,data_794793__$1,entities_794794,arrow_ids_794795,G__794468_794761,vec__794467,type,contents,seq__794454__$1,temp__4126__auto__,game_chan,___$1))
,entities_794794));
om.core.update_BANG_.call(null,data_794793__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),no_arrows_794796);

break;
case "selection":
var vec__794475_794797 = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(contents);
var r_794798 = cljs.core.nth.call(null,vec__794475_794797,(0),null);
var c_794799 = cljs.core.nth.call(null,vec__794475_794797,(1),null);
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tetrimino-at","tetrimino-at",1514048990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_794798,c_794799], null)], null)], null));

break;
default:
console.warn([cljs.core.str("Game: Missing message handler for "),cljs.core.str(type)].join(''));

}

var G__794800 = cljs.core.next.call(null,seq__794454__$1);
var G__794801 = null;
var G__794802 = (0);
var G__794803 = (0);
seq__794454 = G__794800;
chunk__794455 = G__794801;
count__794456 = G__794802;
i__794457 = G__794803;
continue;
}
} else {
return null;
}
}
break;
}
});})(game_chan,___$1))
;
var c__24000__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24000__auto__,handler,game_chan,___$1){
return (function (){
var f__24001__auto__ = (function (){var switch__23979__auto__ = ((function (c__24000__auto__,handler,game_chan,___$1){
return (function (state_794484){
var state_val_794485 = (state_794484[(1)]);
if((state_val_794485 === (4))){
var inst_794478 = (state_794484[(2)]);
var inst_794479 = handler.call(null,inst_794478);
var state_794484__$1 = (function (){var statearr_794486 = state_794484;
(statearr_794486[(7)] = inst_794479);

return statearr_794486;
})();
var statearr_794487_794804 = state_794484__$1;
(statearr_794487_794804[(2)] = null);

(statearr_794487_794804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_794485 === (3))){
var inst_794482 = (state_794484[(2)]);
var state_794484__$1 = state_794484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_794484__$1,inst_794482);
} else {
if((state_val_794485 === (2))){
var state_794484__$1 = state_794484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_794484__$1,(4),game_chan);
} else {
if((state_val_794485 === (1))){
var state_794484__$1 = state_794484;
var statearr_794488_794805 = state_794484__$1;
(statearr_794488_794805[(2)] = null);

(statearr_794488_794805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__24000__auto__,handler,game_chan,___$1))
;
return ((function (switch__23979__auto__,c__24000__auto__,handler,game_chan,___$1){
return (function() {
var romtoff$core$state_machine__23980__auto__ = null;
var romtoff$core$state_machine__23980__auto____0 = (function (){
var statearr_794492 = [null,null,null,null,null,null,null,null];
(statearr_794492[(0)] = romtoff$core$state_machine__23980__auto__);

(statearr_794492[(1)] = (1));

return statearr_794492;
});
var romtoff$core$state_machine__23980__auto____1 = (function (state_794484){
while(true){
var ret_value__23981__auto__ = (function (){try{while(true){
var result__23982__auto__ = switch__23979__auto__.call(null,state_794484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23982__auto__;
}
break;
}
}catch (e794493){if((e794493 instanceof Object)){
var ex__23983__auto__ = e794493;
var statearr_794494_794806 = state_794484;
(statearr_794494_794806[(5)] = ex__23983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_794484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e794493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__794807 = state_794484;
state_794484 = G__794807;
continue;
} else {
return ret_value__23981__auto__;
}
break;
}
});
romtoff$core$state_machine__23980__auto__ = function(state_794484){
switch(arguments.length){
case 0:
return romtoff$core$state_machine__23980__auto____0.call(this);
case 1:
return romtoff$core$state_machine__23980__auto____1.call(this,state_794484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$state_machine__23980__auto____0;
romtoff$core$state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$state_machine__23980__auto____1;
return romtoff$core$state_machine__23980__auto__;
})()
;})(switch__23979__auto__,c__24000__auto__,handler,game_chan,___$1))
})();
var state__24002__auto__ = (function (){var statearr_794495 = f__24001__auto__.call(null);
(statearr_794495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24000__auto__);

return statearr_794495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24002__auto__);
});})(c__24000__auto__,handler,game_chan,___$1))
);

return c__24000__auto__;
});

romtoff.core.t794404.prototype.om$core$IInitState$ = true;

romtoff.core.t794404.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919),romtoff.core.game_chan], null);
});

romtoff.core.t794404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_794406){
var self__ = this;
var _794406__$1 = this;
return self__.meta794405;
});

romtoff.core.t794404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_794406,meta794405__$1){
var self__ = this;
var _794406__$1 = this;
return (new romtoff.core.t794404(self__.owner,self__.data,meta794405__$1));
});

romtoff.core.t794404.cljs$lang$type = true;

romtoff.core.t794404.cljs$lang$ctorStr = "romtoff.core/t794404";

romtoff.core.t794404.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"romtoff.core/t794404");
});

romtoff.core.__GT_t794404 = (function romtoff$core$__GT_t794404(owner__$1,data__$1,meta794405){
return (new romtoff.core.t794404(owner__$1,data__$1,meta794405));
});

}

return (new romtoff.core.t794404(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),romtoff.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
romtoff.core.on_js_reload = (function romtoff$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1431717923920