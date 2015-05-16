// Compiled by ClojureScript 0.0-3211 {}
goog.provide('romtoff.core');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
romtoff.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0),new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.PersistentVector.EMPTY], null));
romtoff.core.game_chan = cljs.core.async.chan.call(null);
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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__1311371_SHARP_){
return cljs.core._EQ_.call(null,entity_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__1311371_SHARP_));
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
romtoff.core.tetriminos = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null)], null)], null);
romtoff.core.ROWS = (13);
romtoff.core.COLS = (9);
romtoff.core.in_bounds = (function romtoff$core$in_bounds(p__1311372){
var vec__1311374 = p__1311372;
var r = cljs.core.nth.call(null,vec__1311374,(0),null);
var c = cljs.core.nth.call(null,vec__1311374,(1),null);
return (((-1) < r)) && (((-1) < c)) && ((r < romtoff.core.ROWS)) && ((c < romtoff.core.COLS));
});
romtoff.core.covered = (function romtoff$core$covered(p__1311375){
var vec__1311377 = p__1311375;
var r = cljs.core.nth.call(null,vec__1311377,(0),null);
var c = cljs.core.nth.call(null,vec__1311377,(1),null);
return cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clouds","clouds",-632461223),r,c], null)));
});
romtoff.core.tetrimino_coords = (function romtoff$core$tetrimino_coords(t,p__1311378){
var vec__1311388 = p__1311378;
var x = cljs.core.nth.call(null,vec__1311388,(0),null);
var y = cljs.core.nth.call(null,vec__1311388,(1),null);
var all_tiles = (function (){var iter__18871__auto__ = ((function (vec__1311388,x,y){
return (function romtoff$core$tetrimino_coords_$_iter__1311389(s__1311390){
return (new cljs.core.LazySeq(null,((function (vec__1311388,x,y){
return (function (){
var s__1311390__$1 = s__1311390;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1311390__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18867__auto__ = ((function (s__1311390__$1,r,xs__4624__auto__,temp__4126__auto__,vec__1311388,x,y){
return (function romtoff$core$tetrimino_coords_$_iter__1311389_$_iter__1311391(s__1311392){
return (new cljs.core.LazySeq(null,((function (s__1311390__$1,r,xs__4624__auto__,temp__4126__auto__,vec__1311388,x,y){
return (function (){
var s__1311392__$1 = s__1311392;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__1311392__$1);
if(temp__4126__auto____$1){
var s__1311392__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1311392__$2)){
var c__18869__auto__ = cljs.core.chunk_first.call(null,s__1311392__$2);
var size__18870__auto__ = cljs.core.count.call(null,c__18869__auto__);
var b__1311394 = cljs.core.chunk_buffer.call(null,size__18870__auto__);
if((function (){var i__1311393 = (0);
while(true){
if((i__1311393 < size__18870__auto__)){
var c = cljs.core._nth.call(null,c__18869__auto__,i__1311393);
cljs.core.chunk_append.call(null,b__1311394,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__1311397 = (i__1311393 + (1));
i__1311393 = G__1311397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1311394),romtoff$core$tetrimino_coords_$_iter__1311389_$_iter__1311391.call(null,cljs.core.chunk_rest.call(null,s__1311392__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1311394),null);
}
} else {
var c = cljs.core.first.call(null,s__1311392__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),romtoff$core$tetrimino_coords_$_iter__1311389_$_iter__1311391.call(null,cljs.core.rest.call(null,s__1311392__$2)));
}
} else {
return null;
}
break;
}
});})(s__1311390__$1,r,xs__4624__auto__,temp__4126__auto__,vec__1311388,x,y))
,null,null));
});})(s__1311390__$1,r,xs__4624__auto__,temp__4126__auto__,vec__1311388,x,y))
;
var fs__18868__auto__ = cljs.core.seq.call(null,iterys__18867__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)))));
if(fs__18868__auto__){
return cljs.core.concat.call(null,fs__18868__auto__,romtoff$core$tetrimino_coords_$_iter__1311389.call(null,cljs.core.rest.call(null,s__1311390__$1)));
} else {
var G__1311398 = cljs.core.rest.call(null,s__1311390__$1);
s__1311390__$1 = G__1311398;
continue;
}
} else {
return null;
}
break;
}
});})(vec__1311388,x,y))
,null,null));
});})(vec__1311388,x,y))
;
return iter__18871__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,t)));
})();
var x_offset = (- cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,t)).indexOf((1)));
return cljs.core.reduce.call(null,((function (all_tiles,x_offset,vec__1311388,x,y){
return (function (acc,p__1311395){
var vec__1311396 = p__1311395;
var r = cljs.core.nth.call(null,vec__1311396,(0),null);
var c = cljs.core.nth.call(null,vec__1311396,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)))){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + r),((y + c) + x_offset)], null));
} else {
return acc;
}
});})(all_tiles,x_offset,vec__1311388,x,y))
,cljs.core.PersistentVector.EMPTY,all_tiles);
});
romtoff.core.block_id = (function romtoff$core$block_id(r,c){
return cljs.core.keyword.call(null,[cljs.core.str("block-"),cljs.core.str(r),cljs.core.str("-"),cljs.core.str(c)].join(''));
});
romtoff.core.block_coords = (function romtoff$core$block_coords(block_id){
return cljs.core.vec.call(null,cljs.core.map.call(null,parseInt,cljs.core.subvec.call(null,clojure.string.split.call(null,cljs.core.name.call(null,block_id),"-"),(1))));
});
romtoff.core.block_by_coords = (function romtoff$core$block_by_coords(p__1311399){
var vec__1311401 = p__1311399;
var x = cljs.core.nth.call(null,vec__1311401,(0),null);
var y = cljs.core.nth.call(null,vec__1311401,(1),null);
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
}),cljs.core.PersistentVector.EMPTY,(function (){var iter__18871__auto__ = (function romtoff$core$get_uncovered_coords_$_iter__1311408(s__1311409){
return (new cljs.core.LazySeq(null,(function (){
var s__1311409__$1 = s__1311409;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1311409__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18867__auto__ = ((function (s__1311409__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function romtoff$core$get_uncovered_coords_$_iter__1311408_$_iter__1311410(s__1311411){
return (new cljs.core.LazySeq(null,((function (s__1311409__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__1311411__$1 = s__1311411;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__1311411__$1);
if(temp__4126__auto____$1){
var s__1311411__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1311411__$2)){
var c__18869__auto__ = cljs.core.chunk_first.call(null,s__1311411__$2);
var size__18870__auto__ = cljs.core.count.call(null,c__18869__auto__);
var b__1311413 = cljs.core.chunk_buffer.call(null,size__18870__auto__);
if((function (){var i__1311412 = (0);
while(true){
if((i__1311412 < size__18870__auto__)){
var c = cljs.core._nth.call(null,c__18869__auto__,i__1311412);
cljs.core.chunk_append.call(null,b__1311413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__1311414 = (i__1311412 + (1));
i__1311412 = G__1311414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1311413),romtoff$core$get_uncovered_coords_$_iter__1311408_$_iter__1311410.call(null,cljs.core.chunk_rest.call(null,s__1311411__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1311413),null);
}
} else {
var c = cljs.core.first.call(null,s__1311411__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),romtoff$core$get_uncovered_coords_$_iter__1311408_$_iter__1311410.call(null,cljs.core.rest.call(null,s__1311411__$2)));
}
} else {
return null;
}
break;
}
});})(s__1311409__$1,r,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__1311409__$1,r,xs__4624__auto__,temp__4126__auto__))
;
var fs__18868__auto__ = cljs.core.seq.call(null,iterys__18867__auto__.call(null,cljs.core.range.call(null,romtoff.core.COLS)));
if(fs__18868__auto__){
return cljs.core.concat.call(null,fs__18868__auto__,romtoff$core$get_uncovered_coords_$_iter__1311408.call(null,cljs.core.rest.call(null,s__1311409__$1)));
} else {
var G__1311415 = cljs.core.rest.call(null,s__1311409__$1);
s__1311409__$1 = G__1311415;
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
romtoff.core.is_near = (function romtoff$core$is_near(p__1311416,p__1311417){
var vec__1311420 = p__1311416;
var r1 = cljs.core.nth.call(null,vec__1311420,(0),null);
var c1 = cljs.core.nth.call(null,vec__1311420,(1),null);
var vec__1311421 = p__1311417;
var r2 = cljs.core.nth.call(null,vec__1311421,(0),null);
var c2 = cljs.core.nth.call(null,vec__1311421,(1),null);
return ((cljs.core._EQ_.call(null,c1,c2)) && (cljs.core._EQ_.call(null,r1,(r2 - (1))))) || ((cljs.core._EQ_.call(null,c1,c2)) && (cljs.core._EQ_.call(null,r1,(r2 + (1))))) || ((cljs.core._EQ_.call(null,r1,r2)) && (cljs.core._EQ_.call(null,c1,(c2 - (1))))) || ((cljs.core._EQ_.call(null,r1,r2)) && (cljs.core._EQ_.call(null,c1,(c2 + (1)))));
});
romtoff.core.rotate_left = (function romtoff$core$rotate_left(t){
return cljs.core.reduce.call(null,(function (acc,index){
return cljs.core.conj.call(null,acc,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__1311422_SHARP_){
return cljs.core.get.call(null,p1__1311422_SHARP_,index);
}),t)));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)))));
});
romtoff.core.build_sprite = (function romtoff$core$build_sprite(p__1311425,owner,event_handlers,message_handlers){
var map__1311554 = p__1311425;
var map__1311554__$1 = ((cljs.core.seq_QMARK_.call(null,map__1311554))?cljs.core.apply.call(null,cljs.core.hash_map,map__1311554):map__1311554);
var data = map__1311554__$1;
var width = cljs.core.get.call(null,map__1311554__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__1311554__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__1311554__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__1311554__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__1311554__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__1311554__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__1311554__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__1311554__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__1311554__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof romtoff.core.t1311555 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t1311555 = (function (x,map__1311554,owner,height,data,y,event_handlers,rotation,animation,width,ch,sprite,message_handlers,build_sprite,id,p__1311425,meta1311556){
this.x = x;
this.map__1311554 = map__1311554;
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
this.build_sprite = build_sprite;
this.id = id;
this.p__1311425 = p__1311425;
this.meta1311556 = meta1311556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t1311555.prototype.om$core$IRender$ = true;

romtoff.core.t1311555.prototype.om$core$IRender$render$arity$1 = ((function (map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
var self__ = this;
var ___$1 = this;
var img = (cljs.core.truth_(self__.animation)?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(self__.animation):self__.sprite);
return om_tools.dom.element.call(null,React.DOM.g,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": [cljs.core.str("<image width=\""),cljs.core.str(self__.width),cljs.core.str("\" height=\""),cljs.core.str(self__.height),cljs.core.str("\" x=\""),cljs.core.str(self__.x),cljs.core.str("\" y=\""),cljs.core.str(self__.y),cljs.core.str("\" xlink:href=\""),cljs.core.str(img),cljs.core.str("\" />")].join('')},new cljs.core.Keyword(null,"width","width",-384071477),self__.width,new cljs.core.Keyword(null,"height","height",1025178622),self__.height,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("rotate("),cljs.core.str((cljs.core.truth_(self__.rotation)?self__.rotation:(0))),cljs.core.str(" "),cljs.core.str(((self__.width / (2)) + self__.x)),cljs.core.str(" "),cljs.core.str(((self__.height / (2)) + self__.y)),cljs.core.str(")")].join('')], null),self__.event_handlers),cljs.core.PersistentVector.EMPTY);
});})(map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t1311555.prototype.om$core$IWillMount$ = true;

romtoff.core.t1311555.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
var self__ = this;
var ___$1 = this;
var c__24000__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (){
var f__24001__auto__ = (function (){var switch__23979__auto__ = ((function (c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (state_1311632){
var state_val_1311633 = (state_1311632[(1)]);
if((state_val_1311633 === (7))){
var inst_1311576 = (state_1311632[(7)]);
var inst_1311574 = (state_1311632[(8)]);
var inst_1311583 = (state_1311632[(9)]);
var inst_1311585 = (state_1311632[(10)]);
var inst_1311567 = (state_1311632[(11)]);
var inst_1311582 = cljs.core._nth.call(null,inst_1311574,inst_1311576);
var inst_1311583__$1 = cljs.core.nth.call(null,inst_1311582,(0),null);
var inst_1311584 = cljs.core.nth.call(null,inst_1311582,(1),null);
var inst_1311585__$1 = inst_1311567.call(null,inst_1311583__$1);
var state_1311632__$1 = (function (){var statearr_1311634 = state_1311632;
(statearr_1311634[(9)] = inst_1311583__$1);

(statearr_1311634[(10)] = inst_1311585__$1);

(statearr_1311634[(12)] = inst_1311584);

return statearr_1311634;
})();
if(cljs.core.truth_(inst_1311585__$1)){
var statearr_1311635_1311682 = state_1311632__$1;
(statearr_1311635_1311682[(1)] = (10));

} else {
var statearr_1311636_1311683 = state_1311632__$1;
(statearr_1311636_1311683[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (20))){
var inst_1311607 = (state_1311632[(13)]);
var inst_1311613 = [cljs.core.str(self__.id),cljs.core.str(": Missing message handler for "),cljs.core.str(inst_1311607)].join('');
var inst_1311614 = console.warn(inst_1311613);
var state_1311632__$1 = state_1311632;
var statearr_1311637_1311684 = state_1311632__$1;
(statearr_1311637_1311684[(2)] = inst_1311614);

(statearr_1311637_1311684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (1))){
var state_1311632__$1 = state_1311632;
var statearr_1311638_1311685 = state_1311632__$1;
(statearr_1311638_1311685[(2)] = null);

(statearr_1311638_1311685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (4))){
var inst_1311560 = (state_1311632[(2)]);
var inst_1311561 = [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"transact","transact",-267998670)];
var inst_1311562 = (function (){var messages = inst_1311560;
return ((function (messages,inst_1311560,inst_1311561,state_val_1311633,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (messages,inst_1311560,inst_1311561,state_val_1311633,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (p1__1311423_SHARP_){
return cljs.core.merge.call(null,p1__1311423_SHARP_,content);
});})(messages,inst_1311560,inst_1311561,state_val_1311633,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);
});
;})(messages,inst_1311560,inst_1311561,state_val_1311633,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_1311563 = (function (){var messages = inst_1311560;
return ((function (messages,inst_1311560,inst_1311561,inst_1311562,state_val_1311633,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
return om.core.transact_BANG_.call(null,self__.data,((function (messages,inst_1311560,inst_1311561,inst_1311562,state_val_1311633,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (p1__1311424_SHARP_){
return cljs.core.merge.call(null,p1__1311424_SHARP_,content);
});})(messages,inst_1311560,inst_1311561,inst_1311562,state_val_1311633,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);
});
;})(messages,inst_1311560,inst_1311561,inst_1311562,state_val_1311633,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_1311564 = (function (){var messages = inst_1311560;
return ((function (messages,inst_1311560,inst_1311561,inst_1311562,inst_1311563,state_val_1311633,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
var seq__1311639 = cljs.core.seq.call(null,content);
var chunk__1311640 = null;
var count__1311641 = (0);
var i__1311642 = (0);
while(true){
if((i__1311642 < count__1311641)){
var vec__1311643 = cljs.core._nth.call(null,chunk__1311640,i__1311642);
var key = cljs.core.nth.call(null,vec__1311643,(0),null);
var fn = cljs.core.nth.call(null,vec__1311643,(1),null);
om.core.transact_BANG_.call(null,self__.data,key,fn);

var G__1311686 = seq__1311639;
var G__1311687 = chunk__1311640;
var G__1311688 = count__1311641;
var G__1311689 = (i__1311642 + (1));
seq__1311639 = G__1311686;
chunk__1311640 = G__1311687;
count__1311641 = G__1311688;
i__1311642 = G__1311689;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__1311639);
if(temp__4126__auto__){
var seq__1311639__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1311639__$1)){
var c__18902__auto__ = cljs.core.chunk_first.call(null,seq__1311639__$1);
var G__1311690 = cljs.core.chunk_rest.call(null,seq__1311639__$1);
var G__1311691 = c__18902__auto__;
var G__1311692 = cljs.core.count.call(null,c__18902__auto__);
var G__1311693 = (0);
seq__1311639 = G__1311690;
chunk__1311640 = G__1311691;
count__1311641 = G__1311692;
i__1311642 = G__1311693;
continue;
} else {
var vec__1311644 = cljs.core.first.call(null,seq__1311639__$1);
var key = cljs.core.nth.call(null,vec__1311644,(0),null);
var fn = cljs.core.nth.call(null,vec__1311644,(1),null);
om.core.transact_BANG_.call(null,self__.data,key,fn);

var G__1311694 = cljs.core.next.call(null,seq__1311639__$1);
var G__1311695 = null;
var G__1311696 = (0);
var G__1311697 = (0);
seq__1311639 = G__1311694;
chunk__1311640 = G__1311695;
count__1311641 = G__1311696;
i__1311642 = G__1311697;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(messages,inst_1311560,inst_1311561,inst_1311562,inst_1311563,state_val_1311633,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_1311565 = [inst_1311562,inst_1311563,inst_1311564];
var inst_1311566 = cljs.core.PersistentHashMap.fromArrays(inst_1311561,inst_1311565);
var inst_1311567 = cljs.core.merge.call(null,inst_1311566,self__.message_handlers);
var inst_1311572 = cljs.core.seq.call(null,inst_1311560);
var inst_1311573 = inst_1311572;
var inst_1311574 = null;
var inst_1311575 = (0);
var inst_1311576 = (0);
var state_1311632__$1 = (function (){var statearr_1311645 = state_1311632;
(statearr_1311645[(7)] = inst_1311576);

(statearr_1311645[(8)] = inst_1311574);

(statearr_1311645[(14)] = inst_1311573);

(statearr_1311645[(15)] = inst_1311575);

(statearr_1311645[(11)] = inst_1311567);

return statearr_1311645;
})();
var statearr_1311646_1311698 = state_1311632__$1;
(statearr_1311646_1311698[(2)] = null);

(statearr_1311646_1311698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (15))){
var inst_1311623 = (state_1311632[(2)]);
var state_1311632__$1 = state_1311632;
var statearr_1311647_1311699 = state_1311632__$1;
(statearr_1311647_1311699[(2)] = inst_1311623);

(statearr_1311647_1311699[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (21))){
var inst_1311596 = (state_1311632[(16)]);
var inst_1311616 = (state_1311632[(2)]);
var inst_1311617 = cljs.core.next.call(null,inst_1311596);
var inst_1311573 = inst_1311617;
var inst_1311574 = null;
var inst_1311575 = (0);
var inst_1311576 = (0);
var state_1311632__$1 = (function (){var statearr_1311648 = state_1311632;
(statearr_1311648[(7)] = inst_1311576);

(statearr_1311648[(8)] = inst_1311574);

(statearr_1311648[(17)] = inst_1311616);

(statearr_1311648[(14)] = inst_1311573);

(statearr_1311648[(15)] = inst_1311575);

return statearr_1311648;
})();
var statearr_1311649_1311700 = state_1311632__$1;
(statearr_1311649_1311700[(2)] = null);

(statearr_1311649_1311700[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (13))){
var inst_1311596 = (state_1311632[(16)]);
var inst_1311598 = cljs.core.chunked_seq_QMARK_.call(null,inst_1311596);
var state_1311632__$1 = state_1311632;
if(inst_1311598){
var statearr_1311650_1311701 = state_1311632__$1;
(statearr_1311650_1311701[(1)] = (16));

} else {
var statearr_1311651_1311702 = state_1311632__$1;
(statearr_1311651_1311702[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (6))){
var inst_1311627 = (state_1311632[(2)]);
var state_1311632__$1 = (function (){var statearr_1311652 = state_1311632;
(statearr_1311652[(18)] = inst_1311627);

return statearr_1311652;
})();
var statearr_1311653_1311703 = state_1311632__$1;
(statearr_1311653_1311703[(2)] = null);

(statearr_1311653_1311703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (17))){
var inst_1311609 = (state_1311632[(19)]);
var inst_1311607 = (state_1311632[(13)]);
var inst_1311596 = (state_1311632[(16)]);
var inst_1311567 = (state_1311632[(11)]);
var inst_1311606 = cljs.core.first.call(null,inst_1311596);
var inst_1311607__$1 = cljs.core.nth.call(null,inst_1311606,(0),null);
var inst_1311608 = cljs.core.nth.call(null,inst_1311606,(1),null);
var inst_1311609__$1 = inst_1311567.call(null,inst_1311607__$1);
var state_1311632__$1 = (function (){var statearr_1311657 = state_1311632;
(statearr_1311657[(19)] = inst_1311609__$1);

(statearr_1311657[(13)] = inst_1311607__$1);

(statearr_1311657[(20)] = inst_1311608);

return statearr_1311657;
})();
if(cljs.core.truth_(inst_1311609__$1)){
var statearr_1311658_1311704 = state_1311632__$1;
(statearr_1311658_1311704[(1)] = (19));

} else {
var statearr_1311659_1311705 = state_1311632__$1;
(statearr_1311659_1311705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (3))){
var inst_1311630 = (state_1311632[(2)]);
var state_1311632__$1 = state_1311632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1311632__$1,inst_1311630);
} else {
if((state_val_1311633 === (12))){
var inst_1311576 = (state_1311632[(7)]);
var inst_1311574 = (state_1311632[(8)]);
var inst_1311573 = (state_1311632[(14)]);
var inst_1311575 = (state_1311632[(15)]);
var inst_1311592 = (state_1311632[(2)]);
var inst_1311593 = (inst_1311576 + (1));
var tmp1311654 = inst_1311574;
var tmp1311655 = inst_1311573;
var tmp1311656 = inst_1311575;
var inst_1311573__$1 = tmp1311655;
var inst_1311574__$1 = tmp1311654;
var inst_1311575__$1 = tmp1311656;
var inst_1311576__$1 = inst_1311593;
var state_1311632__$1 = (function (){var statearr_1311660 = state_1311632;
(statearr_1311660[(7)] = inst_1311576__$1);

(statearr_1311660[(8)] = inst_1311574__$1);

(statearr_1311660[(14)] = inst_1311573__$1);

(statearr_1311660[(15)] = inst_1311575__$1);

(statearr_1311660[(21)] = inst_1311592);

return statearr_1311660;
})();
var statearr_1311661_1311706 = state_1311632__$1;
(statearr_1311661_1311706[(2)] = null);

(statearr_1311661_1311706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (2))){
var state_1311632__$1 = state_1311632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1311632__$1,(4),self__.ch);
} else {
if((state_val_1311633 === (19))){
var inst_1311609 = (state_1311632[(19)]);
var inst_1311608 = (state_1311632[(20)]);
var inst_1311611 = inst_1311609.call(null,inst_1311608);
var state_1311632__$1 = state_1311632;
var statearr_1311662_1311707 = state_1311632__$1;
(statearr_1311662_1311707[(2)] = inst_1311611);

(statearr_1311662_1311707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (11))){
var inst_1311583 = (state_1311632[(9)]);
var inst_1311589 = [cljs.core.str(self__.id),cljs.core.str(": Missing message handler for "),cljs.core.str(inst_1311583)].join('');
var inst_1311590 = console.warn(inst_1311589);
var state_1311632__$1 = state_1311632;
var statearr_1311663_1311708 = state_1311632__$1;
(statearr_1311663_1311708[(2)] = inst_1311590);

(statearr_1311663_1311708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (9))){
var inst_1311625 = (state_1311632[(2)]);
var state_1311632__$1 = state_1311632;
var statearr_1311664_1311709 = state_1311632__$1;
(statearr_1311664_1311709[(2)] = inst_1311625);

(statearr_1311664_1311709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (5))){
var inst_1311576 = (state_1311632[(7)]);
var inst_1311575 = (state_1311632[(15)]);
var inst_1311578 = (inst_1311576 < inst_1311575);
var inst_1311579 = inst_1311578;
var state_1311632__$1 = state_1311632;
if(cljs.core.truth_(inst_1311579)){
var statearr_1311665_1311710 = state_1311632__$1;
(statearr_1311665_1311710[(1)] = (7));

} else {
var statearr_1311666_1311711 = state_1311632__$1;
(statearr_1311666_1311711[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (14))){
var state_1311632__$1 = state_1311632;
var statearr_1311667_1311712 = state_1311632__$1;
(statearr_1311667_1311712[(2)] = null);

(statearr_1311667_1311712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (16))){
var inst_1311596 = (state_1311632[(16)]);
var inst_1311600 = cljs.core.chunk_first.call(null,inst_1311596);
var inst_1311601 = cljs.core.chunk_rest.call(null,inst_1311596);
var inst_1311602 = cljs.core.count.call(null,inst_1311600);
var inst_1311573 = inst_1311601;
var inst_1311574 = inst_1311600;
var inst_1311575 = inst_1311602;
var inst_1311576 = (0);
var state_1311632__$1 = (function (){var statearr_1311668 = state_1311632;
(statearr_1311668[(7)] = inst_1311576);

(statearr_1311668[(8)] = inst_1311574);

(statearr_1311668[(14)] = inst_1311573);

(statearr_1311668[(15)] = inst_1311575);

return statearr_1311668;
})();
var statearr_1311669_1311713 = state_1311632__$1;
(statearr_1311669_1311713[(2)] = null);

(statearr_1311669_1311713[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (10))){
var inst_1311585 = (state_1311632[(10)]);
var inst_1311584 = (state_1311632[(12)]);
var inst_1311587 = inst_1311585.call(null,inst_1311584);
var state_1311632__$1 = state_1311632;
var statearr_1311670_1311714 = state_1311632__$1;
(statearr_1311670_1311714[(2)] = inst_1311587);

(statearr_1311670_1311714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (18))){
var inst_1311620 = (state_1311632[(2)]);
var state_1311632__$1 = state_1311632;
var statearr_1311671_1311715 = state_1311632__$1;
(statearr_1311671_1311715[(2)] = inst_1311620);

(statearr_1311671_1311715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1311633 === (8))){
var inst_1311573 = (state_1311632[(14)]);
var inst_1311596 = (state_1311632[(16)]);
var inst_1311596__$1 = cljs.core.seq.call(null,inst_1311573);
var state_1311632__$1 = (function (){var statearr_1311672 = state_1311632;
(statearr_1311672[(16)] = inst_1311596__$1);

return statearr_1311672;
})();
if(inst_1311596__$1){
var statearr_1311673_1311716 = state_1311632__$1;
(statearr_1311673_1311716[(1)] = (13));

} else {
var statearr_1311674_1311717 = state_1311632__$1;
(statearr_1311674_1311717[(1)] = (14));

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
});})(c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;
return ((function (switch__23979__auto__,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function() {
var romtoff$core$build_sprite_$_state_machine__23980__auto__ = null;
var romtoff$core$build_sprite_$_state_machine__23980__auto____0 = (function (){
var statearr_1311678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1311678[(0)] = romtoff$core$build_sprite_$_state_machine__23980__auto__);

(statearr_1311678[(1)] = (1));

return statearr_1311678;
});
var romtoff$core$build_sprite_$_state_machine__23980__auto____1 = (function (state_1311632){
while(true){
var ret_value__23981__auto__ = (function (){try{while(true){
var result__23982__auto__ = switch__23979__auto__.call(null,state_1311632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23982__auto__;
}
break;
}
}catch (e1311679){if((e1311679 instanceof Object)){
var ex__23983__auto__ = e1311679;
var statearr_1311680_1311718 = state_1311632;
(statearr_1311680_1311718[(5)] = ex__23983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1311632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1311679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1311719 = state_1311632;
state_1311632 = G__1311719;
continue;
} else {
return ret_value__23981__auto__;
}
break;
}
});
romtoff$core$build_sprite_$_state_machine__23980__auto__ = function(state_1311632){
switch(arguments.length){
case 0:
return romtoff$core$build_sprite_$_state_machine__23980__auto____0.call(this);
case 1:
return romtoff$core$build_sprite_$_state_machine__23980__auto____1.call(this,state_1311632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$build_sprite_$_state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$build_sprite_$_state_machine__23980__auto____0;
romtoff$core$build_sprite_$_state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$build_sprite_$_state_machine__23980__auto____1;
return romtoff$core$build_sprite_$_state_machine__23980__auto__;
})()
;})(switch__23979__auto__,c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var state__24002__auto__ = (function (){var statearr_1311681 = f__24001__auto__.call(null);
(statearr_1311681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24000__auto__);

return statearr_1311681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24002__auto__);
});})(c__24000__auto__,___$1,map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);

return c__24000__auto__;
});})(map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t1311555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_1311557){
var self__ = this;
var _1311557__$1 = this;
return self__.meta1311556;
});})(map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t1311555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_1311557,meta1311556__$1){
var self__ = this;
var _1311557__$1 = this;
return (new romtoff.core.t1311555(self__.x,self__.map__1311554,self__.owner,self__.height,self__.data,self__.y,self__.event_handlers,self__.rotation,self__.animation,self__.width,self__.ch,self__.sprite,self__.message_handlers,self__.build_sprite,self__.id,self__.p__1311425,meta1311556__$1));
});})(map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t1311555.cljs$lang$type = true;

romtoff.core.t1311555.cljs$lang$ctorStr = "romtoff.core/t1311555";

romtoff.core.t1311555.cljs$lang$ctorPrWriter = ((function (map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"romtoff.core/t1311555");
});})(map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.__GT_t1311555 = ((function (map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function romtoff$core$build_sprite_$___GT_t1311555(x__$1,map__1311554__$2,owner__$1,height__$1,data__$1,y__$1,event_handlers__$1,rotation__$1,animation__$1,width__$1,ch__$1,sprite__$1,message_handlers__$1,build_sprite__$1,id__$1,p__1311425__$1,meta1311556){
return (new romtoff.core.t1311555(x__$1,map__1311554__$2,owner__$1,height__$1,data__$1,y__$1,event_handlers__$1,rotation__$1,animation__$1,width__$1,ch__$1,sprite__$1,message_handlers__$1,build_sprite__$1,id__$1,p__1311425__$1,meta1311556));
});})(map__1311554,map__1311554__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

}

return (new romtoff.core.t1311555(x,map__1311554__$1,owner,height,data,y,event_handlers,rotation,animation,width,ch,sprite,message_handlers,romtoff$core$build_sprite,id,p__1311425,cljs.core.PersistentArrayMap.EMPTY));
});
romtoff.core.stage__GT_sprite = new cljs.core.PersistentArrayMap(null, 3, [(0),"img/1.png",(1),"img/crate1.png",(2),"img/crate2.png"], null);
romtoff.core.int__GT_sprite = (function romtoff$core$int__GT_sprite(i){
return [cljs.core.str("img/"),cljs.core.str(i),cljs.core.str(".png")].join('');
});
romtoff.core.land = (function romtoff$core$land(p__1311720,owner){
var map__1311723 = p__1311720;
var map__1311723__$1 = ((cljs.core.seq_QMARK_.call(null,map__1311723))?cljs.core.apply.call(null,cljs.core.hash_map,map__1311723):map__1311723);
var data = map__1311723__$1;
var x = cljs.core.get.call(null,map__1311723__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__1311723__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y = cljs.core.get.call(null,map__1311723__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rotation = cljs.core.get.call(null,map__1311723__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var animation = cljs.core.get.call(null,map__1311723__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var stage = cljs.core.get.call(null,map__1311723__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var width = cljs.core.get.call(null,map__1311723__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ch = cljs.core.get.call(null,map__1311723__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var sprite = cljs.core.get.call(null,map__1311723__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var id = cljs.core.get.call(null,map__1311723__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__1311723,map__1311723__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id){
return (function (_){
return cljs.core.println.call(null,id);
});})(map__1311723,map__1311723__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),((function (map__1311723,map__1311723__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id){
return (function (_){
var stage__$1 = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"stage","stage",1843544772));
var G__1311724 = stage__$1;
switch (G__1311724) {
case (0):
romtoff.core.tell.call(null,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.stage__GT_sprite.call(null,(1)),new cljs.core.Keyword(null,"stage","stage",1843544772),(1)], null)], null));

cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"increase-score","increase-score",492219939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),(100)], null)], null));

return romtoff.core.play_sound.call(null,"crateLand");

break;
case (1):
romtoff.core.tell.call(null,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.stage__GT_sprite.call(null,(2)),new cljs.core.Keyword(null,"stage","stage",1843544772),(2)], null)], null));

return romtoff.core.play_sound.call(null,"crateDrop");

break;
case (2):
romtoff.core.tell.call(null,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)], null));

return romtoff.core.play_sound.call(null,"rockDestroy");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(stage__$1)].join('')));

}
});})(map__1311723,map__1311723__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id))
], null));
});
romtoff.core.water = (function romtoff$core$water(p__1311726,owner){
var map__1311728 = p__1311726;
var map__1311728__$1 = ((cljs.core.seq_QMARK_.call(null,map__1311728))?cljs.core.apply.call(null,cljs.core.hash_map,map__1311728):map__1311728);
var data = map__1311728__$1;
var width = cljs.core.get.call(null,map__1311728__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__1311728__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__1311728__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__1311728__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__1311728__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__1311728__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__1311728__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__1311728__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__1311728__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__1311728,map__1311728__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
return cljs.core.println.call(null,id);
});})(map__1311728,map__1311728__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),((function (map__1311728,map__1311728__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
return romtoff.core.play_sound.call(null,"rockDrop");
});})(map__1311728,map__1311728__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null));
});
romtoff.core.arrow = (function romtoff$core$arrow(p__1311729,owner){
var map__1311735 = p__1311729;
var map__1311735__$1 = ((cljs.core.seq_QMARK_.call(null,map__1311735))?cljs.core.apply.call(null,cljs.core.hash_map,map__1311735):map__1311735);
var data = map__1311735__$1;
var width = cljs.core.get.call(null,map__1311735__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__1311735__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__1311735__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__1311735__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__1311735__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__1311735__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__1311735__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__1311735__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__1311735__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),((function (map__1311735,map__1311735__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

var t_1311740 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_1311741 = romtoff.core.block_coords.call(null,id);
var tetrimino_blocks_coords_1311742 = romtoff.core.tetrimino_coords.call(null,t_1311740,c_1311741);
var seq__1311736_1311743 = cljs.core.seq.call(null,tetrimino_blocks_coords_1311742);
var chunk__1311737_1311744 = null;
var count__1311738_1311745 = (0);
var i__1311739_1311746 = (0);
while(true){
if((i__1311739_1311746 < count__1311738_1311745)){
var block_coords_1311747 = cljs.core._nth.call(null,chunk__1311737_1311744,i__1311739_1311746);
romtoff.core.tell.call(null,cljs.core.apply.call(null,romtoff.core.block_id,block_coords_1311747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY], null));

var G__1311748 = seq__1311736_1311743;
var G__1311749 = chunk__1311737_1311744;
var G__1311750 = count__1311738_1311745;
var G__1311751 = (i__1311739_1311746 + (1));
seq__1311736_1311743 = G__1311748;
chunk__1311737_1311744 = G__1311749;
count__1311738_1311745 = G__1311750;
i__1311739_1311746 = G__1311751;
continue;
} else {
var temp__4126__auto___1311752 = cljs.core.seq.call(null,seq__1311736_1311743);
if(temp__4126__auto___1311752){
var seq__1311736_1311753__$1 = temp__4126__auto___1311752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1311736_1311753__$1)){
var c__18902__auto___1311754 = cljs.core.chunk_first.call(null,seq__1311736_1311753__$1);
var G__1311755 = cljs.core.chunk_rest.call(null,seq__1311736_1311753__$1);
var G__1311756 = c__18902__auto___1311754;
var G__1311757 = cljs.core.count.call(null,c__18902__auto___1311754);
var G__1311758 = (0);
seq__1311736_1311743 = G__1311755;
chunk__1311737_1311744 = G__1311756;
count__1311738_1311745 = G__1311757;
i__1311739_1311746 = G__1311758;
continue;
} else {
var block_coords_1311759 = cljs.core.first.call(null,seq__1311736_1311753__$1);
romtoff.core.tell.call(null,cljs.core.apply.call(null,romtoff.core.block_id,block_coords_1311759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY], null));

var G__1311760 = cljs.core.next.call(null,seq__1311736_1311753__$1);
var G__1311761 = null;
var G__1311762 = (0);
var G__1311763 = (0);
seq__1311736_1311743 = G__1311760;
chunk__1311737_1311744 = G__1311761;
count__1311738_1311745 = G__1311762;
i__1311739_1311746 = G__1311763;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-move","next-move",1501229918),cljs.core.PersistentArrayMap.EMPTY], null));
});})(map__1311735,map__1311735__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null),cljs.core.PersistentArrayMap.EMPTY);
});
romtoff.core.falling_circle = (function romtoff$core$falling_circle(p__1311766,owner){
var map__1312026 = p__1311766;
var map__1312026__$1 = ((cljs.core.seq_QMARK_.call(null,map__1312026))?cljs.core.apply.call(null,cljs.core.hash_map,map__1312026):map__1312026);
var data = map__1312026__$1;
var y = cljs.core.get.call(null,map__1312026__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__1312026__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ch = cljs.core.get.call(null,map__1312026__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(typeof romtoff.core.t1312027 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t1312027 = (function (ch,x,y,data,map__1312026,owner,p__1311766,falling_circle,meta1312028){
this.ch = ch;
this.x = x;
this.y = y;
this.data = data;
this.map__1312026 = map__1312026;
this.owner = owner;
this.p__1311766 = p__1311766;
this.falling_circle = falling_circle;
this.meta1312028 = meta1312028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t1312027.prototype.om$core$IRender$ = true;

romtoff.core.t1312027.prototype.om$core$IRender$render$arity$1 = ((function (map__1312026,map__1312026__$1,data,y,x,ch){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.circle({"onClick": ((function (___$1,map__1312026,map__1312026__$1,data,y,x,ch){
return (function (___$2){
cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.Keyword(null,"create","create",-1301499256));

return "";
});})(___$1,map__1312026,map__1312026__$1,data,y,x,ch))
, "r": (25), "cy": self__.y, "cx": self__.x});
});})(map__1312026,map__1312026__$1,data,y,x,ch))
;

romtoff.core.t1312027.prototype.om$core$IWillMount$ = true;

romtoff.core.t1312027.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__1312026,map__1312026__$1,data,y,x,ch){
return (function (_){
var self__ = this;
var ___$1 = this;
var c__24000__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch){
return (function (){
var f__24001__auto__ = (function (){var switch__23979__auto__ = ((function (c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch){
return (function (state_1312191){
var state_val_1312192 = (state_1312191[(1)]);
if((state_val_1312192 === (7))){
var inst_1312041 = (state_1312191[(7)]);
var inst_1312039 = (state_1312191[(8)]);
var inst_1312048 = (state_1312191[(9)]);
var inst_1312047 = (state_1312191[(10)]);
var inst_1312047__$1 = cljs.core._nth.call(null,inst_1312039,inst_1312041);
var inst_1312048__$1 = cljs.core.nth.call(null,inst_1312047__$1,(0),null);
var inst_1312049 = cljs.core.nth.call(null,inst_1312047__$1,(1),null);
var state_1312191__$1 = (function (){var statearr_1312193 = state_1312191;
(statearr_1312193[(11)] = inst_1312049);

(statearr_1312193[(9)] = inst_1312048__$1);

(statearr_1312193[(10)] = inst_1312047__$1);

return statearr_1312193;
})();
var G__1312194_1312285 = (((inst_1312048__$1 instanceof cljs.core.Keyword))?inst_1312048__$1.fqn:null);
switch (G__1312194_1312285) {
case "transact":
var statearr_1312195_1312287 = state_1312191__$1;
(statearr_1312195_1312287[(1)] = (13));


break;
case "update":
var statearr_1312196_1312288 = state_1312191__$1;
(statearr_1312196_1312288[(1)] = (12));


break;
case "tween":
var statearr_1312197_1312289 = state_1312191__$1;
(statearr_1312197_1312289[(1)] = (11));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_1312048__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (20))){
var state_1312191__$1 = state_1312191;
var statearr_1312198_1312290 = state_1312191__$1;
(statearr_1312198_1312290[(2)] = null);

(statearr_1312198_1312290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (27))){
var inst_1312182 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312199_1312291 = state_1312191__$1;
(statearr_1312199_1312291[(2)] = inst_1312182);

(statearr_1312199_1312291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (1))){
var state_1312191__$1 = state_1312191;
var statearr_1312200_1312292 = state_1312191__$1;
(statearr_1312200_1312292[(2)] = null);

(statearr_1312200_1312292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (24))){
var inst_1312094 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312201_1312293 = state_1312191__$1;
(statearr_1312201_1312293[(2)] = inst_1312094);

(statearr_1312201_1312293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (39))){
var inst_1312170 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312202_1312294 = state_1312191__$1;
(statearr_1312202_1312294[(2)] = inst_1312170);

(statearr_1312202_1312294[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (4))){
var inst_1312032 = (state_1312191[(12)]);
var inst_1312032__$1 = (state_1312191[(2)]);
var inst_1312037 = cljs.core.seq.call(null,inst_1312032__$1);
var inst_1312038 = inst_1312037;
var inst_1312039 = null;
var inst_1312040 = (0);
var inst_1312041 = (0);
var state_1312191__$1 = (function (){var statearr_1312203 = state_1312191;
(statearr_1312203[(13)] = inst_1312038);

(statearr_1312203[(7)] = inst_1312041);

(statearr_1312203[(12)] = inst_1312032__$1);

(statearr_1312203[(8)] = inst_1312039);

(statearr_1312203[(14)] = inst_1312040);

return statearr_1312203;
})();
var statearr_1312204_1312295 = state_1312191__$1;
(statearr_1312204_1312295[(2)] = null);

(statearr_1312204_1312295[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (15))){
var inst_1312101 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312205_1312296 = state_1312191__$1;
(statearr_1312205_1312296[(2)] = inst_1312101);

(statearr_1312205_1312296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (21))){
var inst_1312097 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312206_1312297 = state_1312191__$1;
(statearr_1312206_1312297[(2)] = inst_1312097);

(statearr_1312206_1312297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (31))){
var inst_1312108 = (state_1312191[(15)]);
var inst_1312175 = (state_1312191[(2)]);
var inst_1312176 = cljs.core.next.call(null,inst_1312108);
var inst_1312038 = inst_1312176;
var inst_1312039 = null;
var inst_1312040 = (0);
var inst_1312041 = (0);
var state_1312191__$1 = (function (){var statearr_1312207 = state_1312191;
(statearr_1312207[(13)] = inst_1312038);

(statearr_1312207[(16)] = inst_1312175);

(statearr_1312207[(7)] = inst_1312041);

(statearr_1312207[(8)] = inst_1312039);

(statearr_1312207[(14)] = inst_1312040);

return statearr_1312207;
})();
var statearr_1312208_1312298 = state_1312191__$1;
(statearr_1312208_1312298[(2)] = null);

(statearr_1312208_1312298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (32))){
var inst_1312119 = (state_1312191[(17)]);
var inst_1312120 = (state_1312191[(18)]);
var inst_1312041 = (state_1312191[(7)]);
var inst_1312032 = (state_1312191[(12)]);
var inst_1312039 = (state_1312191[(8)]);
var inst_1312108 = (state_1312191[(15)]);
var inst_1312118 = (state_1312191[(19)]);
var inst_1312040 = (state_1312191[(14)]);
var inst_1312121 = (function (){var content = inst_1312120;
var type = inst_1312119;
var vec__1312117 = inst_1312118;
var temp__4126__auto__ = inst_1312108;
var seq__1312033 = inst_1312108;
var chunk__1312034 = inst_1312039;
var count__1312035 = inst_1312040;
var i__1312036 = inst_1312041;
var messages = inst_1312032;
return ((function (content,type,vec__1312117,temp__4126__auto__,seq__1312033,chunk__1312034,count__1312035,i__1312036,messages,inst_1312119,inst_1312120,inst_1312041,inst_1312032,inst_1312039,inst_1312108,inst_1312118,inst_1312040,state_val_1312192,c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch){
return (function (p1__1311764_SHARP_){
return cljs.core.merge.call(null,p1__1311764_SHARP_,content);
});
;})(content,type,vec__1312117,temp__4126__auto__,seq__1312033,chunk__1312034,count__1312035,i__1312036,messages,inst_1312119,inst_1312120,inst_1312041,inst_1312032,inst_1312039,inst_1312108,inst_1312118,inst_1312040,state_val_1312192,c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch))
})();
var inst_1312122 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),inst_1312121);
var state_1312191__$1 = state_1312191;
var statearr_1312209_1312299 = state_1312191__$1;
(statearr_1312209_1312299[(2)] = inst_1312122);

(statearr_1312209_1312299[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (40))){
var inst_1312148 = (state_1312191[(20)]);
var inst_1312150 = cljs.core.chunked_seq_QMARK_.call(null,inst_1312148);
var state_1312191__$1 = state_1312191;
if(inst_1312150){
var statearr_1312210_1312300 = state_1312191__$1;
(statearr_1312210_1312300[(1)] = (43));

} else {
var statearr_1312211_1312301 = state_1312191__$1;
(statearr_1312211_1312301[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (33))){
var inst_1312119 = (state_1312191[(17)]);
var inst_1312120 = (state_1312191[(18)]);
var inst_1312041 = (state_1312191[(7)]);
var inst_1312032 = (state_1312191[(12)]);
var inst_1312039 = (state_1312191[(8)]);
var inst_1312108 = (state_1312191[(15)]);
var inst_1312118 = (state_1312191[(19)]);
var inst_1312040 = (state_1312191[(14)]);
var inst_1312124 = (function (){var content = inst_1312120;
var type = inst_1312119;
var vec__1312117 = inst_1312118;
var temp__4126__auto__ = inst_1312108;
var seq__1312033 = inst_1312108;
var chunk__1312034 = inst_1312039;
var count__1312035 = inst_1312040;
var i__1312036 = inst_1312041;
var messages = inst_1312032;
return ((function (content,type,vec__1312117,temp__4126__auto__,seq__1312033,chunk__1312034,count__1312035,i__1312036,messages,inst_1312119,inst_1312120,inst_1312041,inst_1312032,inst_1312039,inst_1312108,inst_1312118,inst_1312040,state_val_1312192,c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch){
return (function (p1__1311765_SHARP_){
return cljs.core.merge.call(null,p1__1311765_SHARP_,content);
});
;})(content,type,vec__1312117,temp__4126__auto__,seq__1312033,chunk__1312034,count__1312035,i__1312036,messages,inst_1312119,inst_1312120,inst_1312041,inst_1312032,inst_1312039,inst_1312108,inst_1312118,inst_1312040,state_val_1312192,c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch))
})();
var inst_1312125 = om.core.transact_BANG_.call(null,self__.data,inst_1312124);
var state_1312191__$1 = state_1312191;
var statearr_1312212_1312302 = state_1312191__$1;
(statearr_1312212_1312302[(2)] = inst_1312125);

(statearr_1312212_1312302[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (13))){
var inst_1312049 = (state_1312191[(11)]);
var inst_1312060 = cljs.core.seq.call(null,inst_1312049);
var inst_1312061 = inst_1312060;
var inst_1312062 = null;
var inst_1312063 = (0);
var inst_1312064 = (0);
var state_1312191__$1 = (function (){var statearr_1312213 = state_1312191;
(statearr_1312213[(21)] = inst_1312061);

(statearr_1312213[(22)] = inst_1312063);

(statearr_1312213[(23)] = inst_1312062);

(statearr_1312213[(24)] = inst_1312064);

return statearr_1312213;
})();
var statearr_1312214_1312303 = state_1312191__$1;
(statearr_1312214_1312303[(2)] = null);

(statearr_1312214_1312303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (22))){
var inst_1312077 = (state_1312191[(25)]);
var inst_1312081 = cljs.core.chunk_first.call(null,inst_1312077);
var inst_1312082 = cljs.core.chunk_rest.call(null,inst_1312077);
var inst_1312083 = cljs.core.count.call(null,inst_1312081);
var inst_1312061 = inst_1312082;
var inst_1312062 = inst_1312081;
var inst_1312063 = inst_1312083;
var inst_1312064 = (0);
var state_1312191__$1 = (function (){var statearr_1312215 = state_1312191;
(statearr_1312215[(21)] = inst_1312061);

(statearr_1312215[(22)] = inst_1312063);

(statearr_1312215[(23)] = inst_1312062);

(statearr_1312215[(24)] = inst_1312064);

return statearr_1312215;
})();
var statearr_1312216_1312304 = state_1312191__$1;
(statearr_1312216_1312304[(2)] = null);

(statearr_1312216_1312304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (36))){
var inst_1312172 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312217_1312305 = state_1312191__$1;
(statearr_1312217_1312305[(2)] = inst_1312172);

(statearr_1312217_1312305[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (41))){
var state_1312191__$1 = state_1312191;
var statearr_1312218_1312306 = state_1312191__$1;
(statearr_1312218_1312306[(2)] = null);

(statearr_1312218_1312306[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (43))){
var inst_1312148 = (state_1312191[(20)]);
var inst_1312152 = cljs.core.chunk_first.call(null,inst_1312148);
var inst_1312153 = cljs.core.chunk_rest.call(null,inst_1312148);
var inst_1312154 = cljs.core.count.call(null,inst_1312152);
var inst_1312132 = inst_1312153;
var inst_1312133 = inst_1312152;
var inst_1312134 = inst_1312154;
var inst_1312135 = (0);
var state_1312191__$1 = (function (){var statearr_1312219 = state_1312191;
(statearr_1312219[(26)] = inst_1312133);

(statearr_1312219[(27)] = inst_1312134);

(statearr_1312219[(28)] = inst_1312135);

(statearr_1312219[(29)] = inst_1312132);

return statearr_1312219;
})();
var statearr_1312220_1312307 = state_1312191__$1;
(statearr_1312220_1312307[(2)] = null);

(statearr_1312220_1312307[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (29))){
var inst_1312119 = (state_1312191[(17)]);
var inst_1312108 = (state_1312191[(15)]);
var inst_1312118 = (state_1312191[(19)]);
var inst_1312118__$1 = cljs.core.first.call(null,inst_1312108);
var inst_1312119__$1 = cljs.core.nth.call(null,inst_1312118__$1,(0),null);
var inst_1312120 = cljs.core.nth.call(null,inst_1312118__$1,(1),null);
var state_1312191__$1 = (function (){var statearr_1312221 = state_1312191;
(statearr_1312221[(17)] = inst_1312119__$1);

(statearr_1312221[(18)] = inst_1312120);

(statearr_1312221[(19)] = inst_1312118__$1);

return statearr_1312221;
})();
var G__1312222_1312308 = (((inst_1312119__$1 instanceof cljs.core.Keyword))?inst_1312119__$1.fqn:null);
switch (G__1312222_1312308) {
case "transact":
var statearr_1312223_1312310 = state_1312191__$1;
(statearr_1312223_1312310[(1)] = (34));


break;
case "update":
var statearr_1312224_1312311 = state_1312191__$1;
(statearr_1312224_1312311[(1)] = (33));


break;
case "tween":
var statearr_1312225_1312312 = state_1312191__$1;
(statearr_1312225_1312312[(1)] = (32));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_1312119__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (44))){
var inst_1312148 = (state_1312191[(20)]);
var inst_1312158 = cljs.core.first.call(null,inst_1312148);
var inst_1312159 = cljs.core.nth.call(null,inst_1312158,(0),null);
var inst_1312160 = cljs.core.nth.call(null,inst_1312158,(1),null);
var inst_1312161 = om.core.transact_BANG_.call(null,self__.data,inst_1312159,inst_1312160);
var inst_1312162 = cljs.core.next.call(null,inst_1312148);
var inst_1312132 = inst_1312162;
var inst_1312133 = null;
var inst_1312134 = (0);
var inst_1312135 = (0);
var state_1312191__$1 = (function (){var statearr_1312226 = state_1312191;
(statearr_1312226[(26)] = inst_1312133);

(statearr_1312226[(27)] = inst_1312134);

(statearr_1312226[(28)] = inst_1312135);

(statearr_1312226[(30)] = inst_1312161);

(statearr_1312226[(29)] = inst_1312132);

return statearr_1312226;
})();
var statearr_1312227_1312313 = state_1312191__$1;
(statearr_1312227_1312313[(2)] = null);

(statearr_1312227_1312313[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (6))){
var inst_1312186 = (state_1312191[(2)]);
var state_1312191__$1 = (function (){var statearr_1312228 = state_1312191;
(statearr_1312228[(31)] = inst_1312186);

return statearr_1312228;
})();
var statearr_1312229_1312314 = state_1312191__$1;
(statearr_1312229_1312314[(2)] = null);

(statearr_1312229_1312314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (28))){
var inst_1312108 = (state_1312191[(15)]);
var inst_1312112 = cljs.core.chunk_first.call(null,inst_1312108);
var inst_1312113 = cljs.core.chunk_rest.call(null,inst_1312108);
var inst_1312114 = cljs.core.count.call(null,inst_1312112);
var inst_1312038 = inst_1312113;
var inst_1312039 = inst_1312112;
var inst_1312040 = inst_1312114;
var inst_1312041 = (0);
var state_1312191__$1 = (function (){var statearr_1312230 = state_1312191;
(statearr_1312230[(13)] = inst_1312038);

(statearr_1312230[(7)] = inst_1312041);

(statearr_1312230[(8)] = inst_1312039);

(statearr_1312230[(14)] = inst_1312040);

return statearr_1312230;
})();
var statearr_1312231_1312315 = state_1312191__$1;
(statearr_1312231_1312315[(2)] = null);

(statearr_1312231_1312315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (25))){
var inst_1312108 = (state_1312191[(15)]);
var inst_1312110 = cljs.core.chunked_seq_QMARK_.call(null,inst_1312108);
var state_1312191__$1 = state_1312191;
if(inst_1312110){
var statearr_1312232_1312316 = state_1312191__$1;
(statearr_1312232_1312316[(1)] = (28));

} else {
var statearr_1312233_1312317 = state_1312191__$1;
(statearr_1312233_1312317[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (34))){
var inst_1312120 = (state_1312191[(18)]);
var inst_1312131 = cljs.core.seq.call(null,inst_1312120);
var inst_1312132 = inst_1312131;
var inst_1312133 = null;
var inst_1312134 = (0);
var inst_1312135 = (0);
var state_1312191__$1 = (function (){var statearr_1312234 = state_1312191;
(statearr_1312234[(26)] = inst_1312133);

(statearr_1312234[(27)] = inst_1312134);

(statearr_1312234[(28)] = inst_1312135);

(statearr_1312234[(29)] = inst_1312132);

return statearr_1312234;
})();
var statearr_1312235_1312318 = state_1312191__$1;
(statearr_1312235_1312318[(2)] = null);

(statearr_1312235_1312318[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (17))){
var inst_1312061 = (state_1312191[(21)]);
var inst_1312077 = (state_1312191[(25)]);
var inst_1312077__$1 = cljs.core.seq.call(null,inst_1312061);
var state_1312191__$1 = (function (){var statearr_1312236 = state_1312191;
(statearr_1312236[(25)] = inst_1312077__$1);

return statearr_1312236;
})();
if(inst_1312077__$1){
var statearr_1312237_1312319 = state_1312191__$1;
(statearr_1312237_1312319[(1)] = (19));

} else {
var statearr_1312238_1312320 = state_1312191__$1;
(statearr_1312238_1312320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (3))){
var inst_1312189 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1312191__$1,inst_1312189);
} else {
if((state_val_1312192 === (12))){
var inst_1312038 = (state_1312191[(13)]);
var inst_1312041 = (state_1312191[(7)]);
var inst_1312032 = (state_1312191[(12)]);
var inst_1312039 = (state_1312191[(8)]);
var inst_1312040 = (state_1312191[(14)]);
var inst_1312049 = (state_1312191[(11)]);
var inst_1312048 = (state_1312191[(9)]);
var inst_1312047 = (state_1312191[(10)]);
var inst_1312053 = (function (){var content = inst_1312049;
var type = inst_1312048;
var vec__1312046 = inst_1312047;
var seq__1312033 = inst_1312038;
var chunk__1312034 = inst_1312039;
var count__1312035 = inst_1312040;
var i__1312036 = inst_1312041;
var messages = inst_1312032;
return ((function (content,type,vec__1312046,seq__1312033,chunk__1312034,count__1312035,i__1312036,messages,inst_1312038,inst_1312041,inst_1312032,inst_1312039,inst_1312040,inst_1312049,inst_1312048,inst_1312047,state_val_1312192,c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch){
return (function (p1__1311765_SHARP_){
return cljs.core.merge.call(null,p1__1311765_SHARP_,content);
});
;})(content,type,vec__1312046,seq__1312033,chunk__1312034,count__1312035,i__1312036,messages,inst_1312038,inst_1312041,inst_1312032,inst_1312039,inst_1312040,inst_1312049,inst_1312048,inst_1312047,state_val_1312192,c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch))
})();
var inst_1312054 = om.core.transact_BANG_.call(null,self__.data,inst_1312053);
var state_1312191__$1 = state_1312191;
var statearr_1312239_1312321 = state_1312191__$1;
(statearr_1312239_1312321[(2)] = inst_1312054);

(statearr_1312239_1312321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (2))){
var state_1312191__$1 = state_1312191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1312191__$1,(4),self__.ch);
} else {
if((state_val_1312192 === (23))){
var inst_1312077 = (state_1312191[(25)]);
var inst_1312087 = cljs.core.first.call(null,inst_1312077);
var inst_1312088 = cljs.core.nth.call(null,inst_1312087,(0),null);
var inst_1312089 = cljs.core.nth.call(null,inst_1312087,(1),null);
var inst_1312090 = om.core.transact_BANG_.call(null,self__.data,inst_1312088,inst_1312089);
var inst_1312091 = cljs.core.next.call(null,inst_1312077);
var inst_1312061 = inst_1312091;
var inst_1312062 = null;
var inst_1312063 = (0);
var inst_1312064 = (0);
var state_1312191__$1 = (function (){var statearr_1312240 = state_1312191;
(statearr_1312240[(21)] = inst_1312061);

(statearr_1312240[(22)] = inst_1312063);

(statearr_1312240[(23)] = inst_1312062);

(statearr_1312240[(24)] = inst_1312064);

(statearr_1312240[(32)] = inst_1312090);

return statearr_1312240;
})();
var statearr_1312241_1312322 = state_1312191__$1;
(statearr_1312241_1312322[(2)] = null);

(statearr_1312241_1312322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (35))){
var inst_1312134 = (state_1312191[(27)]);
var inst_1312135 = (state_1312191[(28)]);
var inst_1312137 = (inst_1312135 < inst_1312134);
var inst_1312138 = inst_1312137;
var state_1312191__$1 = state_1312191;
if(cljs.core.truth_(inst_1312138)){
var statearr_1312242_1312323 = state_1312191__$1;
(statearr_1312242_1312323[(1)] = (37));

} else {
var statearr_1312243_1312324 = state_1312191__$1;
(statearr_1312243_1312324[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (19))){
var inst_1312077 = (state_1312191[(25)]);
var inst_1312079 = cljs.core.chunked_seq_QMARK_.call(null,inst_1312077);
var state_1312191__$1 = state_1312191;
if(inst_1312079){
var statearr_1312244_1312325 = state_1312191__$1;
(statearr_1312244_1312325[(1)] = (22));

} else {
var statearr_1312245_1312326 = state_1312191__$1;
(statearr_1312245_1312326[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (11))){
var inst_1312038 = (state_1312191[(13)]);
var inst_1312041 = (state_1312191[(7)]);
var inst_1312032 = (state_1312191[(12)]);
var inst_1312039 = (state_1312191[(8)]);
var inst_1312040 = (state_1312191[(14)]);
var inst_1312049 = (state_1312191[(11)]);
var inst_1312048 = (state_1312191[(9)]);
var inst_1312047 = (state_1312191[(10)]);
var inst_1312050 = (function (){var content = inst_1312049;
var type = inst_1312048;
var vec__1312046 = inst_1312047;
var seq__1312033 = inst_1312038;
var chunk__1312034 = inst_1312039;
var count__1312035 = inst_1312040;
var i__1312036 = inst_1312041;
var messages = inst_1312032;
return ((function (content,type,vec__1312046,seq__1312033,chunk__1312034,count__1312035,i__1312036,messages,inst_1312038,inst_1312041,inst_1312032,inst_1312039,inst_1312040,inst_1312049,inst_1312048,inst_1312047,state_val_1312192,c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch){
return (function (p1__1311764_SHARP_){
return cljs.core.merge.call(null,p1__1311764_SHARP_,content);
});
;})(content,type,vec__1312046,seq__1312033,chunk__1312034,count__1312035,i__1312036,messages,inst_1312038,inst_1312041,inst_1312032,inst_1312039,inst_1312040,inst_1312049,inst_1312048,inst_1312047,state_val_1312192,c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch))
})();
var inst_1312051 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),inst_1312050);
var state_1312191__$1 = state_1312191;
var statearr_1312246_1312327 = state_1312191__$1;
(statearr_1312246_1312327[(2)] = inst_1312051);

(statearr_1312246_1312327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (9))){
var inst_1312184 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312247_1312328 = state_1312191__$1;
(statearr_1312247_1312328[(2)] = inst_1312184);

(statearr_1312247_1312328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (5))){
var inst_1312041 = (state_1312191[(7)]);
var inst_1312040 = (state_1312191[(14)]);
var inst_1312043 = (inst_1312041 < inst_1312040);
var inst_1312044 = inst_1312043;
var state_1312191__$1 = state_1312191;
if(cljs.core.truth_(inst_1312044)){
var statearr_1312248_1312329 = state_1312191__$1;
(statearr_1312248_1312329[(1)] = (7));

} else {
var statearr_1312249_1312330 = state_1312191__$1;
(statearr_1312249_1312330[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (14))){
var inst_1312063 = (state_1312191[(22)]);
var inst_1312064 = (state_1312191[(24)]);
var inst_1312066 = (inst_1312064 < inst_1312063);
var inst_1312067 = inst_1312066;
var state_1312191__$1 = state_1312191;
if(cljs.core.truth_(inst_1312067)){
var statearr_1312250_1312331 = state_1312191__$1;
(statearr_1312250_1312331[(1)] = (16));

} else {
var statearr_1312251_1312332 = state_1312191__$1;
(statearr_1312251_1312332[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (45))){
var inst_1312165 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312255_1312333 = state_1312191__$1;
(statearr_1312255_1312333[(2)] = inst_1312165);

(statearr_1312255_1312333[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (26))){
var state_1312191__$1 = state_1312191;
var statearr_1312256_1312334 = state_1312191__$1;
(statearr_1312256_1312334[(2)] = null);

(statearr_1312256_1312334[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (16))){
var inst_1312061 = (state_1312191[(21)]);
var inst_1312063 = (state_1312191[(22)]);
var inst_1312062 = (state_1312191[(23)]);
var inst_1312064 = (state_1312191[(24)]);
var inst_1312070 = cljs.core._nth.call(null,inst_1312062,inst_1312064);
var inst_1312071 = cljs.core.nth.call(null,inst_1312070,(0),null);
var inst_1312072 = cljs.core.nth.call(null,inst_1312070,(1),null);
var inst_1312073 = om.core.transact_BANG_.call(null,self__.data,inst_1312071,inst_1312072);
var inst_1312074 = (inst_1312064 + (1));
var tmp1312252 = inst_1312061;
var tmp1312253 = inst_1312063;
var tmp1312254 = inst_1312062;
var inst_1312061__$1 = tmp1312252;
var inst_1312062__$1 = tmp1312254;
var inst_1312063__$1 = tmp1312253;
var inst_1312064__$1 = inst_1312074;
var state_1312191__$1 = (function (){var statearr_1312257 = state_1312191;
(statearr_1312257[(21)] = inst_1312061__$1);

(statearr_1312257[(22)] = inst_1312063__$1);

(statearr_1312257[(23)] = inst_1312062__$1);

(statearr_1312257[(24)] = inst_1312064__$1);

(statearr_1312257[(33)] = inst_1312073);

return statearr_1312257;
})();
var statearr_1312258_1312335 = state_1312191__$1;
(statearr_1312258_1312335[(2)] = null);

(statearr_1312258_1312335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (38))){
var inst_1312148 = (state_1312191[(20)]);
var inst_1312132 = (state_1312191[(29)]);
var inst_1312148__$1 = cljs.core.seq.call(null,inst_1312132);
var state_1312191__$1 = (function (){var statearr_1312262 = state_1312191;
(statearr_1312262[(20)] = inst_1312148__$1);

return statearr_1312262;
})();
if(inst_1312148__$1){
var statearr_1312263_1312336 = state_1312191__$1;
(statearr_1312263_1312336[(1)] = (40));

} else {
var statearr_1312264_1312337 = state_1312191__$1;
(statearr_1312264_1312337[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (30))){
var inst_1312179 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312265_1312338 = state_1312191__$1;
(statearr_1312265_1312338[(2)] = inst_1312179);

(statearr_1312265_1312338[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (10))){
var inst_1312038 = (state_1312191[(13)]);
var inst_1312041 = (state_1312191[(7)]);
var inst_1312039 = (state_1312191[(8)]);
var inst_1312040 = (state_1312191[(14)]);
var inst_1312104 = (state_1312191[(2)]);
var inst_1312105 = (inst_1312041 + (1));
var tmp1312259 = inst_1312038;
var tmp1312260 = inst_1312039;
var tmp1312261 = inst_1312040;
var inst_1312038__$1 = tmp1312259;
var inst_1312039__$1 = tmp1312260;
var inst_1312040__$1 = tmp1312261;
var inst_1312041__$1 = inst_1312105;
var state_1312191__$1 = (function (){var statearr_1312266 = state_1312191;
(statearr_1312266[(13)] = inst_1312038__$1);

(statearr_1312266[(7)] = inst_1312041__$1);

(statearr_1312266[(8)] = inst_1312039__$1);

(statearr_1312266[(34)] = inst_1312104);

(statearr_1312266[(14)] = inst_1312040__$1);

return statearr_1312266;
})();
var statearr_1312267_1312339 = state_1312191__$1;
(statearr_1312267_1312339[(2)] = null);

(statearr_1312267_1312339[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (18))){
var inst_1312099 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312271_1312340 = state_1312191__$1;
(statearr_1312271_1312340[(2)] = inst_1312099);

(statearr_1312271_1312340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (42))){
var inst_1312168 = (state_1312191[(2)]);
var state_1312191__$1 = state_1312191;
var statearr_1312272_1312341 = state_1312191__$1;
(statearr_1312272_1312341[(2)] = inst_1312168);

(statearr_1312272_1312341[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (37))){
var inst_1312133 = (state_1312191[(26)]);
var inst_1312134 = (state_1312191[(27)]);
var inst_1312135 = (state_1312191[(28)]);
var inst_1312132 = (state_1312191[(29)]);
var inst_1312141 = cljs.core._nth.call(null,inst_1312133,inst_1312135);
var inst_1312142 = cljs.core.nth.call(null,inst_1312141,(0),null);
var inst_1312143 = cljs.core.nth.call(null,inst_1312141,(1),null);
var inst_1312144 = om.core.transact_BANG_.call(null,self__.data,inst_1312142,inst_1312143);
var inst_1312145 = (inst_1312135 + (1));
var tmp1312268 = inst_1312133;
var tmp1312269 = inst_1312134;
var tmp1312270 = inst_1312132;
var inst_1312132__$1 = tmp1312270;
var inst_1312133__$1 = tmp1312268;
var inst_1312134__$1 = tmp1312269;
var inst_1312135__$1 = inst_1312145;
var state_1312191__$1 = (function (){var statearr_1312273 = state_1312191;
(statearr_1312273[(26)] = inst_1312133__$1);

(statearr_1312273[(35)] = inst_1312144);

(statearr_1312273[(27)] = inst_1312134__$1);

(statearr_1312273[(28)] = inst_1312135__$1);

(statearr_1312273[(29)] = inst_1312132__$1);

return statearr_1312273;
})();
var statearr_1312274_1312342 = state_1312191__$1;
(statearr_1312274_1312342[(2)] = null);

(statearr_1312274_1312342[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312192 === (8))){
var inst_1312038 = (state_1312191[(13)]);
var inst_1312108 = (state_1312191[(15)]);
var inst_1312108__$1 = cljs.core.seq.call(null,inst_1312038);
var state_1312191__$1 = (function (){var statearr_1312275 = state_1312191;
(statearr_1312275[(15)] = inst_1312108__$1);

return statearr_1312275;
})();
if(inst_1312108__$1){
var statearr_1312276_1312343 = state_1312191__$1;
(statearr_1312276_1312343[(1)] = (25));

} else {
var statearr_1312277_1312344 = state_1312191__$1;
(statearr_1312277_1312344[(1)] = (26));

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
});})(c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch))
;
return ((function (switch__23979__auto__,c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch){
return (function() {
var romtoff$core$falling_circle_$_state_machine__23980__auto__ = null;
var romtoff$core$falling_circle_$_state_machine__23980__auto____0 = (function (){
var statearr_1312281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1312281[(0)] = romtoff$core$falling_circle_$_state_machine__23980__auto__);

(statearr_1312281[(1)] = (1));

return statearr_1312281;
});
var romtoff$core$falling_circle_$_state_machine__23980__auto____1 = (function (state_1312191){
while(true){
var ret_value__23981__auto__ = (function (){try{while(true){
var result__23982__auto__ = switch__23979__auto__.call(null,state_1312191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23982__auto__;
}
break;
}
}catch (e1312282){if((e1312282 instanceof Object)){
var ex__23983__auto__ = e1312282;
var statearr_1312283_1312345 = state_1312191;
(statearr_1312283_1312345[(5)] = ex__23983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1312191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1312282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1312346 = state_1312191;
state_1312191 = G__1312346;
continue;
} else {
return ret_value__23981__auto__;
}
break;
}
});
romtoff$core$falling_circle_$_state_machine__23980__auto__ = function(state_1312191){
switch(arguments.length){
case 0:
return romtoff$core$falling_circle_$_state_machine__23980__auto____0.call(this);
case 1:
return romtoff$core$falling_circle_$_state_machine__23980__auto____1.call(this,state_1312191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$falling_circle_$_state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$falling_circle_$_state_machine__23980__auto____0;
romtoff$core$falling_circle_$_state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$falling_circle_$_state_machine__23980__auto____1;
return romtoff$core$falling_circle_$_state_machine__23980__auto__;
})()
;})(switch__23979__auto__,c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch))
})();
var state__24002__auto__ = (function (){var statearr_1312284 = f__24001__auto__.call(null);
(statearr_1312284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24000__auto__);

return statearr_1312284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24002__auto__);
});})(c__24000__auto__,___$1,map__1312026,map__1312026__$1,data,y,x,ch))
);

return c__24000__auto__;
});})(map__1312026,map__1312026__$1,data,y,x,ch))
;

romtoff.core.t1312027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__1312026,map__1312026__$1,data,y,x,ch){
return (function (_1312029){
var self__ = this;
var _1312029__$1 = this;
return self__.meta1312028;
});})(map__1312026,map__1312026__$1,data,y,x,ch))
;

romtoff.core.t1312027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__1312026,map__1312026__$1,data,y,x,ch){
return (function (_1312029,meta1312028__$1){
var self__ = this;
var _1312029__$1 = this;
return (new romtoff.core.t1312027(self__.ch,self__.x,self__.y,self__.data,self__.map__1312026,self__.owner,self__.p__1311766,self__.falling_circle,meta1312028__$1));
});})(map__1312026,map__1312026__$1,data,y,x,ch))
;

romtoff.core.t1312027.cljs$lang$type = true;

romtoff.core.t1312027.cljs$lang$ctorStr = "romtoff.core/t1312027";

romtoff.core.t1312027.cljs$lang$ctorPrWriter = ((function (map__1312026,map__1312026__$1,data,y,x,ch){
return (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"romtoff.core/t1312027");
});})(map__1312026,map__1312026__$1,data,y,x,ch))
;

romtoff.core.__GT_t1312027 = ((function (map__1312026,map__1312026__$1,data,y,x,ch){
return (function romtoff$core$falling_circle_$___GT_t1312027(ch__$1,x__$1,y__$1,data__$1,map__1312026__$2,owner__$1,p__1311766__$1,falling_circle__$1,meta1312028){
return (new romtoff.core.t1312027(ch__$1,x__$1,y__$1,data__$1,map__1312026__$2,owner__$1,p__1311766__$1,falling_circle__$1,meta1312028));
});})(map__1312026,map__1312026__$1,data,y,x,ch))
;

}

return (new romtoff.core.t1312027(ch,x,y,data,map__1312026__$1,owner,p__1311766,romtoff$core$falling_circle,cljs.core.PersistentArrayMap.EMPTY));
});
romtoff.core.from_default_entity = (function romtoff$core$from_default_entity(m){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"tweens","tweens",-1927735551),cljs.core.PersistentArrayMap.EMPTY], null),m);
});
romtoff.core.add_entity = (function romtoff$core$add_entity(data,entity){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (p1__1312347_SHARP_){
return cljs.core.conj.call(null,p1__1312347_SHARP_,entity);
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
romtoff.core.level_1 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(13),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(0),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0),(1),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(21),(20),(20),(21),(20),(21),(21),(21),(20)], null)], null);
romtoff.core.level_2 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(0),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(1),(1),(0),(1),(1)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0),(1),(1),(1),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(1),(1),(0),(1),(1)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0),(1),(1),(1),(0),(1),(1)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(1),(1),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null)], null);
romtoff.core.level_3 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(5),(5),(6),(6),(6),(5),(5),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(0),(1),(0),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(0),(1),(0),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(0),(0),(1),(1),(1),(0),(0),(0)], null)], null);
romtoff.core.level_4 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(5),(5),(6),(6),(6),(5),(5),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(1),(1),(1),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(0),(1),(0),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(1),(1),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(1),(1),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null);
romtoff.core.level_5 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(5),(5),(6),(6),(6),(5),(5),(8)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0),(1),(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(1),(1),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1),(1),(0),(1),(1),(1),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(1),(1),(1),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(21),(20),(20),(21),(20),(21),(21),(21),(20)], null)], null);
romtoff.core.is_land = (function romtoff$core$is_land(r,c,level){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(3),null,(2),null], null), null),cljs.core.get_in.call(null,level,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)));
});
romtoff.core.X_OFFSET = (8);
romtoff.core.Y_OFFSET = (8);
romtoff.core.X_IN_OFFSET = (5);
romtoff.core.Y_IN_OFFSET = (221);
romtoff.core.TILE_WIDTH = (70);
romtoff.core.TILE_HEIGHT = (70);
om.core.root.call(null,(function (data,owner){
if(typeof romtoff.core.t1312355 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t1312355 = (function (owner,data,meta1312356){
this.owner = owner;
this.data = data;
this.meta1312356 = meta1312356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t1312355.prototype.om$core$IRenderState$ = true;

romtoff.core.t1312355.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__1312358){
var self__ = this;
var map__1312359 = p__1312358;
var map__1312359__$1 = ((cljs.core.seq_QMARK_.call(null,map__1312359))?cljs.core.apply.call(null,cljs.core.hash_map,map__1312359):map__1312359);
var game_chan = cljs.core.get.call(null,map__1312359__$1,new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919));
var ___$1 = this;
var seq__1312360_1312469 = cljs.core.seq.call(null,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)));
var chunk__1312361_1312470 = null;
var count__1312362_1312471 = (0);
var i__1312363_1312472 = (0);
while(true){
if((i__1312363_1312472 < count__1312362_1312471)){
var entity_1312473 = cljs.core._nth.call(null,chunk__1312361_1312470,i__1312363_1312472);
var seq__1312364_1312474 = cljs.core.seq.call(null,cljs.core.get.call(null,entity_1312473,new cljs.core.Keyword(null,"tweens","tweens",-1927735551)));
var chunk__1312365_1312475 = null;
var count__1312366_1312476 = (0);
var i__1312367_1312477 = (0);
while(true){
if((i__1312367_1312477 < count__1312366_1312476)){
var vec__1312368_1312478 = cljs.core._nth.call(null,chunk__1312365_1312475,i__1312367_1312477);
var key_1312479 = cljs.core.nth.call(null,vec__1312368_1312478,(0),null);
var map__1312369_1312480 = cljs.core.nth.call(null,vec__1312368_1312478,(1),null);
var map__1312369_1312481__$1 = ((cljs.core.seq_QMARK_.call(null,map__1312369_1312480))?cljs.core.apply.call(null,cljs.core.hash_map,map__1312369_1312480):map__1312369_1312480);
var tween_1312482 = map__1312369_1312481__$1;
var when_done_1312483 = cljs.core.get.call(null,map__1312369_1312481__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_1312484 = cljs.core.get.call(null,map__1312369_1312481__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_1312485 = cljs.core.get.call(null,map__1312369_1312481__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_1312486 = cljs.core.get.call(null,map__1312369_1312481__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_1312487 = cljs.core.get.call(null,map__1312369_1312481__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_1312488 = cljs.core.get.call(null,map__1312369_1312481__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_1312485)){
om.core.update_BANG_.call(null,tween_1312482,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_1312482,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_1312473,key_1312479));
} else {
var easing_fn_1312489 = (function (){var G__1312370 = (((easing_1312486 instanceof cljs.core.Keyword))?easing_1312486.fqn:null);
switch (G__1312370) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_1312486)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_1312473,key_1312479,easing_fn_1312489.call(null,initial_1312484,target_1312488,progress_1312485,duration_1312487));

om.core.transact_BANG_.call(null,tween_1312482,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_1312487,progress_1312485)){
om.core.transact_BANG_.call(null,entity_1312473,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__1312364_1312474,chunk__1312365_1312475,count__1312366_1312476,i__1312367_1312477,seq__1312360_1312469,chunk__1312361_1312470,count__1312362_1312471,i__1312363_1312472,vec__1312368_1312478,key_1312479,map__1312369_1312480,map__1312369_1312481__$1,tween_1312482,when_done_1312483,initial_1312484,progress_1312485,easing_1312486,duration_1312487,target_1312488,entity_1312473,___$1,map__1312359,map__1312359__$1,game_chan){
return (function (p1__1312351_SHARP_){
return cljs.core.dissoc.call(null,p1__1312351_SHARP_,key_1312479);
});})(seq__1312364_1312474,chunk__1312365_1312475,count__1312366_1312476,i__1312367_1312477,seq__1312360_1312469,chunk__1312361_1312470,count__1312362_1312471,i__1312363_1312472,vec__1312368_1312478,key_1312479,map__1312369_1312480,map__1312369_1312481__$1,tween_1312482,when_done_1312483,initial_1312484,progress_1312485,easing_1312486,duration_1312487,target_1312488,entity_1312473,___$1,map__1312359,map__1312359__$1,game_chan))
);

if(cljs.core.truth_(when_done_1312483)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_1312483,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__1312491 = seq__1312364_1312474;
var G__1312492 = chunk__1312365_1312475;
var G__1312493 = count__1312366_1312476;
var G__1312494 = (i__1312367_1312477 + (1));
seq__1312364_1312474 = G__1312491;
chunk__1312365_1312475 = G__1312492;
count__1312366_1312476 = G__1312493;
i__1312367_1312477 = G__1312494;
continue;
} else {
var temp__4126__auto___1312495 = cljs.core.seq.call(null,seq__1312364_1312474);
if(temp__4126__auto___1312495){
var seq__1312364_1312496__$1 = temp__4126__auto___1312495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312364_1312496__$1)){
var c__18902__auto___1312497 = cljs.core.chunk_first.call(null,seq__1312364_1312496__$1);
var G__1312498 = cljs.core.chunk_rest.call(null,seq__1312364_1312496__$1);
var G__1312499 = c__18902__auto___1312497;
var G__1312500 = cljs.core.count.call(null,c__18902__auto___1312497);
var G__1312501 = (0);
seq__1312364_1312474 = G__1312498;
chunk__1312365_1312475 = G__1312499;
count__1312366_1312476 = G__1312500;
i__1312367_1312477 = G__1312501;
continue;
} else {
var vec__1312371_1312502 = cljs.core.first.call(null,seq__1312364_1312496__$1);
var key_1312503 = cljs.core.nth.call(null,vec__1312371_1312502,(0),null);
var map__1312372_1312504 = cljs.core.nth.call(null,vec__1312371_1312502,(1),null);
var map__1312372_1312505__$1 = ((cljs.core.seq_QMARK_.call(null,map__1312372_1312504))?cljs.core.apply.call(null,cljs.core.hash_map,map__1312372_1312504):map__1312372_1312504);
var tween_1312506 = map__1312372_1312505__$1;
var when_done_1312507 = cljs.core.get.call(null,map__1312372_1312505__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_1312508 = cljs.core.get.call(null,map__1312372_1312505__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_1312509 = cljs.core.get.call(null,map__1312372_1312505__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_1312510 = cljs.core.get.call(null,map__1312372_1312505__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_1312511 = cljs.core.get.call(null,map__1312372_1312505__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_1312512 = cljs.core.get.call(null,map__1312372_1312505__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_1312509)){
om.core.update_BANG_.call(null,tween_1312506,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_1312506,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_1312473,key_1312503));
} else {
var easing_fn_1312513 = (function (){var G__1312373 = (((easing_1312510 instanceof cljs.core.Keyword))?easing_1312510.fqn:null);
switch (G__1312373) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_1312510)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_1312473,key_1312503,easing_fn_1312513.call(null,initial_1312508,target_1312512,progress_1312509,duration_1312511));

om.core.transact_BANG_.call(null,tween_1312506,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_1312511,progress_1312509)){
om.core.transact_BANG_.call(null,entity_1312473,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__1312364_1312474,chunk__1312365_1312475,count__1312366_1312476,i__1312367_1312477,seq__1312360_1312469,chunk__1312361_1312470,count__1312362_1312471,i__1312363_1312472,vec__1312371_1312502,key_1312503,map__1312372_1312504,map__1312372_1312505__$1,tween_1312506,when_done_1312507,initial_1312508,progress_1312509,easing_1312510,duration_1312511,target_1312512,seq__1312364_1312496__$1,temp__4126__auto___1312495,entity_1312473,___$1,map__1312359,map__1312359__$1,game_chan){
return (function (p1__1312351_SHARP_){
return cljs.core.dissoc.call(null,p1__1312351_SHARP_,key_1312503);
});})(seq__1312364_1312474,chunk__1312365_1312475,count__1312366_1312476,i__1312367_1312477,seq__1312360_1312469,chunk__1312361_1312470,count__1312362_1312471,i__1312363_1312472,vec__1312371_1312502,key_1312503,map__1312372_1312504,map__1312372_1312505__$1,tween_1312506,when_done_1312507,initial_1312508,progress_1312509,easing_1312510,duration_1312511,target_1312512,seq__1312364_1312496__$1,temp__4126__auto___1312495,entity_1312473,___$1,map__1312359,map__1312359__$1,game_chan))
);

if(cljs.core.truth_(when_done_1312507)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_1312507,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__1312515 = cljs.core.next.call(null,seq__1312364_1312496__$1);
var G__1312516 = null;
var G__1312517 = (0);
var G__1312518 = (0);
seq__1312364_1312474 = G__1312515;
chunk__1312365_1312475 = G__1312516;
count__1312366_1312476 = G__1312517;
i__1312367_1312477 = G__1312518;
continue;
}
} else {
}
}
break;
}

var G__1312519 = seq__1312360_1312469;
var G__1312520 = chunk__1312361_1312470;
var G__1312521 = count__1312362_1312471;
var G__1312522 = (i__1312363_1312472 + (1));
seq__1312360_1312469 = G__1312519;
chunk__1312361_1312470 = G__1312520;
count__1312362_1312471 = G__1312521;
i__1312363_1312472 = G__1312522;
continue;
} else {
var temp__4126__auto___1312523 = cljs.core.seq.call(null,seq__1312360_1312469);
if(temp__4126__auto___1312523){
var seq__1312360_1312524__$1 = temp__4126__auto___1312523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312360_1312524__$1)){
var c__18902__auto___1312525 = cljs.core.chunk_first.call(null,seq__1312360_1312524__$1);
var G__1312526 = cljs.core.chunk_rest.call(null,seq__1312360_1312524__$1);
var G__1312527 = c__18902__auto___1312525;
var G__1312528 = cljs.core.count.call(null,c__18902__auto___1312525);
var G__1312529 = (0);
seq__1312360_1312469 = G__1312526;
chunk__1312361_1312470 = G__1312527;
count__1312362_1312471 = G__1312528;
i__1312363_1312472 = G__1312529;
continue;
} else {
var entity_1312530 = cljs.core.first.call(null,seq__1312360_1312524__$1);
var seq__1312374_1312531 = cljs.core.seq.call(null,cljs.core.get.call(null,entity_1312530,new cljs.core.Keyword(null,"tweens","tweens",-1927735551)));
var chunk__1312375_1312532 = null;
var count__1312376_1312533 = (0);
var i__1312377_1312534 = (0);
while(true){
if((i__1312377_1312534 < count__1312376_1312533)){
var vec__1312378_1312535 = cljs.core._nth.call(null,chunk__1312375_1312532,i__1312377_1312534);
var key_1312536 = cljs.core.nth.call(null,vec__1312378_1312535,(0),null);
var map__1312379_1312537 = cljs.core.nth.call(null,vec__1312378_1312535,(1),null);
var map__1312379_1312538__$1 = ((cljs.core.seq_QMARK_.call(null,map__1312379_1312537))?cljs.core.apply.call(null,cljs.core.hash_map,map__1312379_1312537):map__1312379_1312537);
var tween_1312539 = map__1312379_1312538__$1;
var when_done_1312540 = cljs.core.get.call(null,map__1312379_1312538__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_1312541 = cljs.core.get.call(null,map__1312379_1312538__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_1312542 = cljs.core.get.call(null,map__1312379_1312538__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_1312543 = cljs.core.get.call(null,map__1312379_1312538__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_1312544 = cljs.core.get.call(null,map__1312379_1312538__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_1312545 = cljs.core.get.call(null,map__1312379_1312538__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_1312542)){
om.core.update_BANG_.call(null,tween_1312539,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_1312539,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_1312530,key_1312536));
} else {
var easing_fn_1312546 = (function (){var G__1312380 = (((easing_1312543 instanceof cljs.core.Keyword))?easing_1312543.fqn:null);
switch (G__1312380) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_1312543)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_1312530,key_1312536,easing_fn_1312546.call(null,initial_1312541,target_1312545,progress_1312542,duration_1312544));

om.core.transact_BANG_.call(null,tween_1312539,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_1312544,progress_1312542)){
om.core.transact_BANG_.call(null,entity_1312530,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__1312374_1312531,chunk__1312375_1312532,count__1312376_1312533,i__1312377_1312534,seq__1312360_1312469,chunk__1312361_1312470,count__1312362_1312471,i__1312363_1312472,vec__1312378_1312535,key_1312536,map__1312379_1312537,map__1312379_1312538__$1,tween_1312539,when_done_1312540,initial_1312541,progress_1312542,easing_1312543,duration_1312544,target_1312545,entity_1312530,seq__1312360_1312524__$1,temp__4126__auto___1312523,___$1,map__1312359,map__1312359__$1,game_chan){
return (function (p1__1312351_SHARP_){
return cljs.core.dissoc.call(null,p1__1312351_SHARP_,key_1312536);
});})(seq__1312374_1312531,chunk__1312375_1312532,count__1312376_1312533,i__1312377_1312534,seq__1312360_1312469,chunk__1312361_1312470,count__1312362_1312471,i__1312363_1312472,vec__1312378_1312535,key_1312536,map__1312379_1312537,map__1312379_1312538__$1,tween_1312539,when_done_1312540,initial_1312541,progress_1312542,easing_1312543,duration_1312544,target_1312545,entity_1312530,seq__1312360_1312524__$1,temp__4126__auto___1312523,___$1,map__1312359,map__1312359__$1,game_chan))
);

if(cljs.core.truth_(when_done_1312540)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_1312540,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__1312548 = seq__1312374_1312531;
var G__1312549 = chunk__1312375_1312532;
var G__1312550 = count__1312376_1312533;
var G__1312551 = (i__1312377_1312534 + (1));
seq__1312374_1312531 = G__1312548;
chunk__1312375_1312532 = G__1312549;
count__1312376_1312533 = G__1312550;
i__1312377_1312534 = G__1312551;
continue;
} else {
var temp__4126__auto___1312552__$1 = cljs.core.seq.call(null,seq__1312374_1312531);
if(temp__4126__auto___1312552__$1){
var seq__1312374_1312553__$1 = temp__4126__auto___1312552__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312374_1312553__$1)){
var c__18902__auto___1312554 = cljs.core.chunk_first.call(null,seq__1312374_1312553__$1);
var G__1312555 = cljs.core.chunk_rest.call(null,seq__1312374_1312553__$1);
var G__1312556 = c__18902__auto___1312554;
var G__1312557 = cljs.core.count.call(null,c__18902__auto___1312554);
var G__1312558 = (0);
seq__1312374_1312531 = G__1312555;
chunk__1312375_1312532 = G__1312556;
count__1312376_1312533 = G__1312557;
i__1312377_1312534 = G__1312558;
continue;
} else {
var vec__1312381_1312559 = cljs.core.first.call(null,seq__1312374_1312553__$1);
var key_1312560 = cljs.core.nth.call(null,vec__1312381_1312559,(0),null);
var map__1312382_1312561 = cljs.core.nth.call(null,vec__1312381_1312559,(1),null);
var map__1312382_1312562__$1 = ((cljs.core.seq_QMARK_.call(null,map__1312382_1312561))?cljs.core.apply.call(null,cljs.core.hash_map,map__1312382_1312561):map__1312382_1312561);
var tween_1312563 = map__1312382_1312562__$1;
var when_done_1312564 = cljs.core.get.call(null,map__1312382_1312562__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_1312565 = cljs.core.get.call(null,map__1312382_1312562__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_1312566 = cljs.core.get.call(null,map__1312382_1312562__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_1312567 = cljs.core.get.call(null,map__1312382_1312562__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_1312568 = cljs.core.get.call(null,map__1312382_1312562__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_1312569 = cljs.core.get.call(null,map__1312382_1312562__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_1312566)){
om.core.update_BANG_.call(null,tween_1312563,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_1312563,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_1312530,key_1312560));
} else {
var easing_fn_1312570 = (function (){var G__1312383 = (((easing_1312567 instanceof cljs.core.Keyword))?easing_1312567.fqn:null);
switch (G__1312383) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_1312567)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_1312530,key_1312560,easing_fn_1312570.call(null,initial_1312565,target_1312569,progress_1312566,duration_1312568));

om.core.transact_BANG_.call(null,tween_1312563,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_1312568,progress_1312566)){
om.core.transact_BANG_.call(null,entity_1312530,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__1312374_1312531,chunk__1312375_1312532,count__1312376_1312533,i__1312377_1312534,seq__1312360_1312469,chunk__1312361_1312470,count__1312362_1312471,i__1312363_1312472,vec__1312381_1312559,key_1312560,map__1312382_1312561,map__1312382_1312562__$1,tween_1312563,when_done_1312564,initial_1312565,progress_1312566,easing_1312567,duration_1312568,target_1312569,seq__1312374_1312553__$1,temp__4126__auto___1312552__$1,entity_1312530,seq__1312360_1312524__$1,temp__4126__auto___1312523,___$1,map__1312359,map__1312359__$1,game_chan){
return (function (p1__1312351_SHARP_){
return cljs.core.dissoc.call(null,p1__1312351_SHARP_,key_1312560);
});})(seq__1312374_1312531,chunk__1312375_1312532,count__1312376_1312533,i__1312377_1312534,seq__1312360_1312469,chunk__1312361_1312470,count__1312362_1312471,i__1312363_1312472,vec__1312381_1312559,key_1312560,map__1312382_1312561,map__1312382_1312562__$1,tween_1312563,when_done_1312564,initial_1312565,progress_1312566,easing_1312567,duration_1312568,target_1312569,seq__1312374_1312553__$1,temp__4126__auto___1312552__$1,entity_1312530,seq__1312360_1312524__$1,temp__4126__auto___1312523,___$1,map__1312359,map__1312359__$1,game_chan))
);

if(cljs.core.truth_(when_done_1312564)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_1312564,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__1312572 = cljs.core.next.call(null,seq__1312374_1312553__$1);
var G__1312573 = null;
var G__1312574 = (0);
var G__1312575 = (0);
seq__1312374_1312531 = G__1312572;
chunk__1312375_1312532 = G__1312573;
count__1312376_1312533 = G__1312574;
i__1312377_1312534 = G__1312575;
continue;
}
} else {
}
}
break;
}

var G__1312576 = cljs.core.next.call(null,seq__1312360_1312524__$1);
var G__1312577 = null;
var G__1312578 = (0);
var G__1312579 = (0);
seq__1312360_1312469 = G__1312576;
chunk__1312361_1312470 = G__1312577;
count__1312362_1312471 = G__1312578;
i__1312363_1312472 = G__1312579;
continue;
}
} else {
}
}
break;
}

var seq__1312384_1312580 = cljs.core.seq.call(null,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)));
var chunk__1312385_1312581 = null;
var count__1312386_1312582 = (0);
var i__1312387_1312583 = (0);
while(true){
if((i__1312387_1312583 < count__1312386_1312582)){
var entity_1312584 = cljs.core._nth.call(null,chunk__1312385_1312581,i__1312387_1312583);
var temp__4126__auto___1312585 = new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(entity_1312584);
if(cljs.core.truth_(temp__4126__auto___1312585)){
var map__1312388_1312586 = temp__4126__auto___1312585;
var map__1312388_1312587__$1 = ((cljs.core.seq_QMARK_.call(null,map__1312388_1312586))?cljs.core.apply.call(null,cljs.core.hash_map,map__1312388_1312586):map__1312388_1312586);
var animation_1312588 = map__1312388_1312587__$1;
var current_1312589 = cljs.core.get.call(null,map__1312388_1312587__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var progress_1312590 = cljs.core.get.call(null,map__1312388_1312587__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var duration_1312591 = cljs.core.get.call(null,map__1312388_1312587__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var frames_1312592 = cljs.core.get.call(null,map__1312388_1312587__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.not.call(null,progress_1312590)){
om.core.update_BANG_.call(null,animation_1312588,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,animation_1312588,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.first.call(null,frames_1312592));
} else {
om.core.transact_BANG_.call(null,animation_1312588,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_1312591,progress_1312590)){
om.core.update_BANG_.call(null,animation_1312588,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

var current_index_1312593 = cljs.core.to_array.call(null,frames_1312592).indexOf(current_1312589);
var next_index_1312594 = ((cljs.core._EQ_.call(null,(cljs.core.count.call(null,frames_1312592) - (1)),current_index_1312593))?(0):(current_index_1312593 + (1)));
om.core.update_BANG_.call(null,animation_1312588,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.get.call(null,frames_1312592,next_index_1312594));
} else {
}
}
} else {
}

var G__1312595 = seq__1312384_1312580;
var G__1312596 = chunk__1312385_1312581;
var G__1312597 = count__1312386_1312582;
var G__1312598 = (i__1312387_1312583 + (1));
seq__1312384_1312580 = G__1312595;
chunk__1312385_1312581 = G__1312596;
count__1312386_1312582 = G__1312597;
i__1312387_1312583 = G__1312598;
continue;
} else {
var temp__4126__auto___1312599 = cljs.core.seq.call(null,seq__1312384_1312580);
if(temp__4126__auto___1312599){
var seq__1312384_1312600__$1 = temp__4126__auto___1312599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312384_1312600__$1)){
var c__18902__auto___1312601 = cljs.core.chunk_first.call(null,seq__1312384_1312600__$1);
var G__1312602 = cljs.core.chunk_rest.call(null,seq__1312384_1312600__$1);
var G__1312603 = c__18902__auto___1312601;
var G__1312604 = cljs.core.count.call(null,c__18902__auto___1312601);
var G__1312605 = (0);
seq__1312384_1312580 = G__1312602;
chunk__1312385_1312581 = G__1312603;
count__1312386_1312582 = G__1312604;
i__1312387_1312583 = G__1312605;
continue;
} else {
var entity_1312606 = cljs.core.first.call(null,seq__1312384_1312600__$1);
var temp__4126__auto___1312607__$1 = new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(entity_1312606);
if(cljs.core.truth_(temp__4126__auto___1312607__$1)){
var map__1312389_1312608 = temp__4126__auto___1312607__$1;
var map__1312389_1312609__$1 = ((cljs.core.seq_QMARK_.call(null,map__1312389_1312608))?cljs.core.apply.call(null,cljs.core.hash_map,map__1312389_1312608):map__1312389_1312608);
var animation_1312610 = map__1312389_1312609__$1;
var current_1312611 = cljs.core.get.call(null,map__1312389_1312609__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var progress_1312612 = cljs.core.get.call(null,map__1312389_1312609__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var duration_1312613 = cljs.core.get.call(null,map__1312389_1312609__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var frames_1312614 = cljs.core.get.call(null,map__1312389_1312609__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.not.call(null,progress_1312612)){
om.core.update_BANG_.call(null,animation_1312610,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,animation_1312610,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.first.call(null,frames_1312614));
} else {
om.core.transact_BANG_.call(null,animation_1312610,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_1312613,progress_1312612)){
om.core.update_BANG_.call(null,animation_1312610,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

var current_index_1312615 = cljs.core.to_array.call(null,frames_1312614).indexOf(current_1312611);
var next_index_1312616 = ((cljs.core._EQ_.call(null,(cljs.core.count.call(null,frames_1312614) - (1)),current_index_1312615))?(0):(current_index_1312615 + (1)));
om.core.update_BANG_.call(null,animation_1312610,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.get.call(null,frames_1312614,next_index_1312616));
} else {
}
}
} else {
}

var G__1312617 = cljs.core.next.call(null,seq__1312384_1312600__$1);
var G__1312618 = null;
var G__1312619 = (0);
var G__1312620 = (0);
seq__1312384_1312580 = G__1312617;
chunk__1312385_1312581 = G__1312618;
count__1312386_1312582 = G__1312619;
i__1312387_1312583 = G__1312620;
continue;
}
} else {
}
}
break;
}

var entities_1312621 = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403));
var lands_1312622 = cljs.core.filter.call(null,((function (entities_1312621,___$1,map__1312359,map__1312359__$1,game_chan){
return (function (p1__1312352_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__1312352_SHARP_));
});})(entities_1312621,___$1,map__1312359,map__1312359__$1,game_chan))
,entities_1312621);
var filled_1312623 = cljs.core.filter.call(null,((function (entities_1312621,lands_1312622,___$1,map__1312359,map__1312359__$1,game_chan){
return (function (p1__1312353_SHARP_){
return ((0) < new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(p1__1312353_SHARP_));
});})(entities_1312621,lands_1312622,___$1,map__1312359,map__1312359__$1,game_chan))
,lands_1312622);
var all_filled_1312624 = cljs.core.every_QMARK_.call(null,((function (entities_1312621,lands_1312622,filled_1312623,___$1,map__1312359,map__1312359__$1,game_chan){
return (function (p1__1312354_SHARP_){
return ((0) < new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(p1__1312354_SHARP_));
});})(entities_1312621,lands_1312622,filled_1312623,___$1,map__1312359,map__1312359__$1,game_chan))
,lands_1312622);
if(cljs.core.truth_(cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)))){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.count.call(null,filled_1312623),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.count.call(null,lands_1312622)], null));

if(all_filled_1312624){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-win","game-win",-833284778),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
}
} else {
}

return cljs.core.apply.call(null,React.DOM.div,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.svg,{"onClick": ((function (___$1,map__1312359,map__1312359__$1,game_chan){
return (function (e){
var x = e.pageX;
var y = e.pageY;
if(((((200) < x)) && ((x < (400)))) && ((((30) < y)) && ((y < (200))))){
return cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate-tetrimino","rotate-tetrimino",-608997480),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return null;
}
});})(___$1,map__1312359,map__1312359__$1,game_chan))
, "onMouseUp": ((function (___$1,map__1312359,map__1312359__$1,game_chan){
return (function (e){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null),false);
});})(___$1,map__1312359,map__1312359__$1,game_chan))
, "onMouseDown": ((function (___$1,map__1312359,map__1312359__$1,game_chan){
return (function (e){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.pageX,new cljs.core.Keyword(null,"y","y",-1757859776),e.pageY], null));
});})(___$1,map__1312359,map__1312359__$1,game_chan))
, "onMouseMove": ((function (___$1,map__1312359,map__1312359__$1,game_chan){
return (function (e){
var x = e.pageX;
var y = e.pageY;
om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"current","current",-1088038603)], null)));

om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));

var new_selection_1312625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,((y - romtoff.core.Y_OFFSET) - romtoff.core.Y_IN_OFFSET),romtoff.core.TILE_HEIGHT),cljs.core.quot.call(null,((x - romtoff.core.X_OFFSET) - romtoff.core.X_IN_OFFSET),romtoff.core.TILE_WIDTH)], null);
var current_selection_1312626 = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
if(cljs.core.not_EQ_.call(null,new_selection_1312625,current_selection_1312626)){
om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),current_selection_1312626);

om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_selection_1312625);

if(cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prev","prev",-1597069226),current_selection_1312626,new cljs.core.Keyword(null,"current","current",-1088038603),new_selection_1312625], null)], null));
} else {
}
} else {
}

if(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null)))){
var map__1312390 = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var map__1312390__$1 = ((cljs.core.seq_QMARK_.call(null,map__1312390))?cljs.core.apply.call(null,cljs.core.hash_map,map__1312390):map__1312390);
var prev = cljs.core.get.call(null,map__1312390__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var current = cljs.core.get.call(null,map__1312390__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var dx = (current.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) - prev.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
var dy = (current.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) - prev.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)));
return null;
} else {
return null;
}
});})(___$1,map__1312359,map__1312359__$1,game_chan))
, "style": {"float": "left"}, "height": (1136), "width": (640)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,7,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.rect({"style": {"fill": "rgb(250, 250, 200)"}, "height": (1136), "width": (640), "y": (0), "x": (0)}),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.g,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (___$1,map__1312359,map__1312359__$1,game_chan){
return (function (p__1312391){
var map__1312392 = p__1312391;
var map__1312392__$1 = ((cljs.core.seq_QMARK_.call(null,map__1312392))?cljs.core.apply.call(null,cljs.core.hash_map,map__1312392):map__1312392);
var entity = map__1312392__$1;
var type = cljs.core.get.call(null,map__1312392__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.core.build.call(null,romtoff.core.builder,entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919),game_chan], null)], null));
});})(___$1,map__1312359,map__1312359__$1,game_chan))
,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)))],null)))):((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === false)?React.DOM.g({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__1312359,map__1312359__$1,game_chan){
return (function (___$2){
return cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-level","load-level",868893349),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [romtoff.core.level_1,romtoff.core.level_2,romtoff.core.level_3,romtoff.core.level_4,romtoff.core.level_5], null))], null)], null));
});})(___$1,map__1312359,map__1312359__$1,game_chan))
), "height": (1136), "width": (640), "dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image width=\""),cljs.core.str((640)),cljs.core.str("\" height=\""),cljs.core.str((1136)),cljs.core.str("\" x=\""),cljs.core.str((0)),cljs.core.str("\" y=\""),cljs.core.str((0)),cljs.core.str("\" xlink:href=\""),cljs.core.str("img/start.png"),cljs.core.str("\" />")].join('')}}):((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-won","game-won",-1358704823)) === true)?React.DOM.g({"height": (1136), "width": (640), "dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image width=\""),cljs.core.str((640)),cljs.core.str("\" height=\""),cljs.core.str((1136)),cljs.core.str("\" x=\""),cljs.core.str((0)),cljs.core.str("\" y=\""),cljs.core.str((0)),cljs.core.str("\" xlink:href=\""),cljs.core.str("img/block-over.jpg"),cljs.core.str("\" />")].join('')}}):React.DOM.g({"height": (1136), "width": (640), "dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image width=\""),cljs.core.str((640)),cljs.core.str("\" height=\""),cljs.core.str((1136)),cljs.core.str("\" x=\""),cljs.core.str((0)),cljs.core.str("\" y=\""),cljs.core.str((0)),cljs.core.str("\" xlink:href=\""),cljs.core.str("img/block-water.jpg"),cljs.core.str("\" />")].join('')}})))),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?(function (){var tetrimino = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var offset_x = (270);
var offset_y = (70);
var height = ((22) * cljs.core.count.call(null,tetrimino));
var width = ((22) * cljs.core.count.call(null,cljs.core.first.call(null,tetrimino)));
var iter__18871__auto__ = ((function (tetrimino,offset_x,offset_y,height,width,___$1,map__1312359,map__1312359__$1,game_chan){
return (function romtoff$core$iter__1312393(s__1312394){
return (new cljs.core.LazySeq(null,((function (tetrimino,offset_x,offset_y,height,width,___$1,map__1312359,map__1312359__$1,game_chan){
return (function (){
var s__1312394__$1 = s__1312394;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__1312394__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18867__auto__ = ((function (s__1312394__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__1312359,map__1312359__$1,game_chan){
return (function romtoff$core$iter__1312393_$_iter__1312395(s__1312396){
return (new cljs.core.LazySeq(null,((function (s__1312394__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__1312359,map__1312359__$1,game_chan){
return (function (){
var s__1312396__$1 = s__1312396;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__1312396__$1);
if(temp__4126__auto____$1){
var s__1312396__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1312396__$2)){
var c__18869__auto__ = cljs.core.chunk_first.call(null,s__1312396__$2);
var size__18870__auto__ = cljs.core.count.call(null,c__18869__auto__);
var b__1312398 = cljs.core.chunk_buffer.call(null,size__18870__auto__);
if((function (){var i__1312397 = (0);
while(true){
if((i__1312397 < size__18870__auto__)){
var c = cljs.core._nth.call(null,c__18869__auto__,i__1312397);
cljs.core.chunk_append.call(null,b__1312398,((cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,tetrimino,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))))?React.DOM.rect({"style": {"fill": "rgb(250, 250, 200)"}, "height": (20), "width": (20), "y": (((65) + (((88) - height) / (2))) + ((22) * r)), "x": (((274) + (((88) - width) / (2))) + ((22) * c))}):null));

var G__1312627 = (i__1312397 + (1));
i__1312397 = G__1312627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1312398),romtoff$core$iter__1312393_$_iter__1312395.call(null,cljs.core.chunk_rest.call(null,s__1312396__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1312398),null);
}
} else {
var c = cljs.core.first.call(null,s__1312396__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,tetrimino,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))))?React.DOM.rect({"style": {"fill": "rgb(250, 250, 200)"}, "height": (20), "width": (20), "y": (((65) + (((88) - height) / (2))) + ((22) * r)), "x": (((274) + (((88) - width) / (2))) + ((22) * c))}):null),romtoff$core$iter__1312393_$_iter__1312395.call(null,cljs.core.rest.call(null,s__1312396__$2)));
}
} else {
return null;
}
break;
}
});})(s__1312394__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__1312359,map__1312359__$1,game_chan))
,null,null));
});})(s__1312394__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__1312359,map__1312359__$1,game_chan))
;
var fs__18868__auto__ = cljs.core.seq.call(null,iterys__18867__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,tetrimino)))));
if(fs__18868__auto__){
return cljs.core.concat.call(null,fs__18868__auto__,romtoff$core$iter__1312393.call(null,cljs.core.rest.call(null,s__1312394__$1)));
} else {
var G__1312628 = cljs.core.rest.call(null,s__1312394__$1);
s__1312394__$1 = G__1312628;
continue;
}
} else {
return null;
}
break;
}
});})(tetrimino,offset_x,offset_y,height,width,___$1,map__1312359,map__1312359__$1,game_chan))
,null,null));
});})(tetrimino,offset_x,offset_y,height,width,___$1,map__1312359,map__1312359__$1,game_chan))
;
return iter__18871__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,tetrimino)));
})():null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?React.DOM.text({"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (76), "x": (92)},"?"):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.text,{"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (161), "x": (92)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255))],null)))):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.text,{"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (161), "x": (500)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"current","current",-1088038603)], null))),cljs.core.str("/"),cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"target","target",253001721)], null)))].join('')],null)))):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.text,{"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (76), "x": (500)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780))],null)))):null)],null))))],null))));
});

romtoff.core.t1312355.prototype.om$core$IDidMount$ = true;

romtoff.core.t1312355.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
romtoff.core.tell.call(null,new cljs.core.Keyword(null,"circle-1","circle-1",1289264945),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand.call(null,(600))], null),new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),(1000),new cljs.core.Keyword(null,"duration","duration",1444101068),(30),new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"bounce-out","bounce-out",-562459295)], null),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),cljs.core.rand.call(null,(600)),new cljs.core.Keyword(null,"duration","duration",1444101068),(60),new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"cubic-out","cubic-out",904942597),new cljs.core.Keyword(null,"when-done","when-done",889619364),new cljs.core.Keyword(null,"new-ball","new-ball",-1158947386)], null)], null)], null));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795),false);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),cljs.core.rand_nth.call(null,romtoff.core.tetriminos));

return setTimeout(((function (___$1){
return (function (___$2){
romtoff.core.music_off.call(null);

romtoff.core.music_on.call(null);

romtoff.core.sound_off.call(null);

return romtoff.core.sound_on.call(null);
});})(___$1))
,(2000));
});

romtoff.core.t1312355.prototype.om$core$IWillMount$ = true;

romtoff.core.t1312355.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
setInterval(((function (___$1){
return (function (){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.inc);
});})(___$1))
,(34));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"circle-1","circle-1",1289264945),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"falling-circle","falling-circle",184692362)], null)));

var game_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919));
var handler = ((function (game_chan,___$1){
return (function (messages){
var seq__1312399 = cljs.core.seq.call(null,messages);
var chunk__1312400 = null;
var count__1312401 = (0);
var i__1312402 = (0);
while(true){
if((i__1312402 < count__1312401)){
var vec__1312403 = cljs.core._nth.call(null,chunk__1312400,i__1312402);
var type = cljs.core.nth.call(null,vec__1312403,(0),null);
var contents = cljs.core.nth.call(null,vec__1312403,(1),null);
var G__1312404_1312629 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__1312404_1312629) {
case "increase-score":
var score_1312631 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"score","score",-1963588780));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(contents) + score_1312631));

break;
case "rotate-tetrimino":
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),romtoff.core.rotate_left);

romtoff.core.play_sound.call(null,"buttonClick");

break;
case "game-over":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),true);

break;
case "game-win":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-won","game-won",-1358704823),true);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),true);

break;
case "next-move":
var moves_1312632 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"moves","moves",927465255));
var new_moves_1312633 = (moves_1312632 - (1));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),new_moves_1312633);

if((new_moves_1312633 === (0))){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-over","game-over",-607322695),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),cljs.core.rand_nth.call(null,romtoff.core.tetriminos));
}

break;
case "tetrimino-at":
var t_1312634 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_1312635 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(contents);
var tetrimino_blocks_coords_1312636 = romtoff.core.tetrimino_coords.call(null,t_1312634,c_1312635);
if(cljs.core.every_QMARK_.call(null,((function (seq__1312399,chunk__1312400,count__1312401,i__1312402,tetrimino_blocks_coords_1312636,t_1312634,c_1312635,G__1312404_1312629,vec__1312403,type,contents,game_chan,___$1){
return (function (p1__1312350_SHARP_){
return romtoff.core.in_bounds.call(null,p1__1312350_SHARP_);
});})(seq__1312399,chunk__1312400,count__1312401,i__1312402,tetrimino_blocks_coords_1312636,t_1312634,c_1312635,G__1312404_1312629,vec__1312403,type,contents,game_chan,___$1))
,tetrimino_blocks_coords_1312636)){
var seq__1312405_1312637 = cljs.core.seq.call(null,tetrimino_blocks_coords_1312636);
var chunk__1312406_1312638 = null;
var count__1312407_1312639 = (0);
var i__1312408_1312640 = (0);
while(true){
if((i__1312408_1312640 < count__1312407_1312639)){
var vec__1312409_1312641 = cljs.core._nth.call(null,chunk__1312406_1312638,i__1312408_1312640);
var r_1312642 = cljs.core.nth.call(null,vec__1312409_1312641,(0),null);
var c_1312643__$1 = cljs.core.nth.call(null,vec__1312409_1312641,(1),null);
var tbc_1312644 = vec__1312409_1312641;
var block_type_1312645 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_1312644));
var visual_1312646 = (function (){var G__1312410 = (((block_type_1312645 instanceof cljs.core.Keyword))?block_type_1312645.fqn:null);
switch (G__1312410) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block.jpg"], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_1312645)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_1312636,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_1312644)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_1312642),cljs.core.str("-"),cljs.core.str(c_1312643__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312643__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312642 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_1312646)));

var G__1312648 = seq__1312405_1312637;
var G__1312649 = chunk__1312406_1312638;
var G__1312650 = count__1312407_1312639;
var G__1312651 = (i__1312408_1312640 + (1));
seq__1312405_1312637 = G__1312648;
chunk__1312406_1312638 = G__1312649;
count__1312407_1312639 = G__1312650;
i__1312408_1312640 = G__1312651;
continue;
} else {
var temp__4126__auto___1312652 = cljs.core.seq.call(null,seq__1312405_1312637);
if(temp__4126__auto___1312652){
var seq__1312405_1312653__$1 = temp__4126__auto___1312652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312405_1312653__$1)){
var c__18902__auto___1312654 = cljs.core.chunk_first.call(null,seq__1312405_1312653__$1);
var G__1312655 = cljs.core.chunk_rest.call(null,seq__1312405_1312653__$1);
var G__1312656 = c__18902__auto___1312654;
var G__1312657 = cljs.core.count.call(null,c__18902__auto___1312654);
var G__1312658 = (0);
seq__1312405_1312637 = G__1312655;
chunk__1312406_1312638 = G__1312656;
count__1312407_1312639 = G__1312657;
i__1312408_1312640 = G__1312658;
continue;
} else {
var vec__1312411_1312659 = cljs.core.first.call(null,seq__1312405_1312653__$1);
var r_1312660 = cljs.core.nth.call(null,vec__1312411_1312659,(0),null);
var c_1312661__$1 = cljs.core.nth.call(null,vec__1312411_1312659,(1),null);
var tbc_1312662 = vec__1312411_1312659;
var block_type_1312663 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_1312662));
var visual_1312664 = (function (){var G__1312412 = (((block_type_1312663 instanceof cljs.core.Keyword))?block_type_1312663.fqn:null);
switch (G__1312412) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block.jpg"], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_1312663)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_1312636,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_1312662)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_1312660),cljs.core.str("-"),cljs.core.str(c_1312661__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312661__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312660 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_1312664)));

var G__1312666 = cljs.core.next.call(null,seq__1312405_1312653__$1);
var G__1312667 = null;
var G__1312668 = (0);
var G__1312669 = (0);
seq__1312405_1312637 = G__1312666;
chunk__1312406_1312638 = G__1312667;
count__1312407_1312639 = G__1312668;
i__1312408_1312640 = G__1312669;
continue;
}
} else {
}
}
break;
}
} else {
}

break;
case "clear-selection":
var data_1312670__$1 = om.core.get_props.call(null,self__.owner);
var entities_1312671 = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(data_1312670__$1);
var arrow_ids_1312672 = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,((function (seq__1312399,chunk__1312400,count__1312401,i__1312402,data_1312670__$1,entities_1312671,G__1312404_1312629,vec__1312403,type,contents,game_chan,___$1){
return (function (p1__1312348_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__1312348_SHARP_));
});})(seq__1312399,chunk__1312400,count__1312401,i__1312402,data_1312670__$1,entities_1312671,G__1312404_1312629,vec__1312403,type,contents,game_chan,___$1))
,entities_1312671)));
var no_arrows_1312673 = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (seq__1312399,chunk__1312400,count__1312401,i__1312402,data_1312670__$1,entities_1312671,arrow_ids_1312672,G__1312404_1312629,vec__1312403,type,contents,game_chan,___$1){
return (function (p1__1312349_SHARP_){
return cljs.core.contains_QMARK_.call(null,arrow_ids_1312672,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__1312349_SHARP_));
});})(seq__1312399,chunk__1312400,count__1312401,i__1312402,data_1312670__$1,entities_1312671,arrow_ids_1312672,G__1312404_1312629,vec__1312403,type,contents,game_chan,___$1))
,entities_1312671));
om.core.update_BANG_.call(null,data_1312670__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),no_arrows_1312673);

break;
case "selection":
var vec__1312413_1312674 = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(contents);
var r_1312675 = cljs.core.nth.call(null,vec__1312413_1312674,(0),null);
var c_1312676 = cljs.core.nth.call(null,vec__1312413_1312674,(1),null);
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tetrimino-at","tetrimino-at",1514048990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1312675,c_1312676], null)], null)], null));

break;
case "load-level":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(0));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),(15));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),false);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.PersistentVector.EMPTY);

var level_1312677 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(contents);
var seq__1312414_1312678 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,level_1312677)));
var chunk__1312419_1312679 = null;
var count__1312420_1312680 = (0);
var i__1312421_1312681 = (0);
while(true){
if((i__1312421_1312681 < count__1312420_1312680)){
var r_1312682 = cljs.core._nth.call(null,chunk__1312419_1312679,i__1312421_1312681);
var seq__1312422_1312683 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_1312677))));
var chunk__1312423_1312684 = null;
var count__1312424_1312685 = (0);
var i__1312425_1312686 = (0);
while(true){
if((i__1312425_1312686 < count__1312424_1312685)){
var c_1312687 = cljs.core._nth.call(null,chunk__1312423_1312684,i__1312425_1312686);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_1312682,c_1312687,level_1312677))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312682,c_1312687),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312687 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312682 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312682,c_1312687),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312687 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312682 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_1312677,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1312682,c_1312687], null)))], null)));
}

var G__1312688 = seq__1312422_1312683;
var G__1312689 = chunk__1312423_1312684;
var G__1312690 = count__1312424_1312685;
var G__1312691 = (i__1312425_1312686 + (1));
seq__1312422_1312683 = G__1312688;
chunk__1312423_1312684 = G__1312689;
count__1312424_1312685 = G__1312690;
i__1312425_1312686 = G__1312691;
continue;
} else {
var temp__4126__auto___1312692 = cljs.core.seq.call(null,seq__1312422_1312683);
if(temp__4126__auto___1312692){
var seq__1312422_1312693__$1 = temp__4126__auto___1312692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312422_1312693__$1)){
var c__18902__auto___1312694 = cljs.core.chunk_first.call(null,seq__1312422_1312693__$1);
var G__1312695 = cljs.core.chunk_rest.call(null,seq__1312422_1312693__$1);
var G__1312696 = c__18902__auto___1312694;
var G__1312697 = cljs.core.count.call(null,c__18902__auto___1312694);
var G__1312698 = (0);
seq__1312422_1312683 = G__1312695;
chunk__1312423_1312684 = G__1312696;
count__1312424_1312685 = G__1312697;
i__1312425_1312686 = G__1312698;
continue;
} else {
var c_1312699 = cljs.core.first.call(null,seq__1312422_1312693__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_1312682,c_1312699,level_1312677))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312682,c_1312699),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312699 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312682 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312682,c_1312699),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312699 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312682 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_1312677,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1312682,c_1312699], null)))], null)));
}

var G__1312700 = cljs.core.next.call(null,seq__1312422_1312693__$1);
var G__1312701 = null;
var G__1312702 = (0);
var G__1312703 = (0);
seq__1312422_1312683 = G__1312700;
chunk__1312423_1312684 = G__1312701;
count__1312424_1312685 = G__1312702;
i__1312425_1312686 = G__1312703;
continue;
}
} else {
}
}
break;
}

var G__1312704 = seq__1312414_1312678;
var G__1312705 = chunk__1312419_1312679;
var G__1312706 = count__1312420_1312680;
var G__1312707 = (i__1312421_1312681 + (1));
seq__1312414_1312678 = G__1312704;
chunk__1312419_1312679 = G__1312705;
count__1312420_1312680 = G__1312706;
i__1312421_1312681 = G__1312707;
continue;
} else {
var temp__4126__auto___1312708 = cljs.core.seq.call(null,seq__1312414_1312678);
if(temp__4126__auto___1312708){
var seq__1312414_1312709__$1 = temp__4126__auto___1312708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312414_1312709__$1)){
var c__18902__auto___1312710 = cljs.core.chunk_first.call(null,seq__1312414_1312709__$1);
var G__1312711 = cljs.core.chunk_rest.call(null,seq__1312414_1312709__$1);
var G__1312712 = c__18902__auto___1312710;
var G__1312713 = cljs.core.count.call(null,c__18902__auto___1312710);
var G__1312714 = (0);
seq__1312414_1312678 = G__1312711;
chunk__1312419_1312679 = G__1312712;
count__1312420_1312680 = G__1312713;
i__1312421_1312681 = G__1312714;
continue;
} else {
var r_1312715 = cljs.core.first.call(null,seq__1312414_1312709__$1);
var seq__1312415_1312716 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_1312677))));
var chunk__1312416_1312717 = null;
var count__1312417_1312718 = (0);
var i__1312418_1312719 = (0);
while(true){
if((i__1312418_1312719 < count__1312417_1312718)){
var c_1312720 = cljs.core._nth.call(null,chunk__1312416_1312717,i__1312418_1312719);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_1312715,c_1312720,level_1312677))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312715,c_1312720),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312720 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312715 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312715,c_1312720),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312720 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312715 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_1312677,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1312715,c_1312720], null)))], null)));
}

var G__1312721 = seq__1312415_1312716;
var G__1312722 = chunk__1312416_1312717;
var G__1312723 = count__1312417_1312718;
var G__1312724 = (i__1312418_1312719 + (1));
seq__1312415_1312716 = G__1312721;
chunk__1312416_1312717 = G__1312722;
count__1312417_1312718 = G__1312723;
i__1312418_1312719 = G__1312724;
continue;
} else {
var temp__4126__auto___1312725__$1 = cljs.core.seq.call(null,seq__1312415_1312716);
if(temp__4126__auto___1312725__$1){
var seq__1312415_1312726__$1 = temp__4126__auto___1312725__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312415_1312726__$1)){
var c__18902__auto___1312727 = cljs.core.chunk_first.call(null,seq__1312415_1312726__$1);
var G__1312728 = cljs.core.chunk_rest.call(null,seq__1312415_1312726__$1);
var G__1312729 = c__18902__auto___1312727;
var G__1312730 = cljs.core.count.call(null,c__18902__auto___1312727);
var G__1312731 = (0);
seq__1312415_1312716 = G__1312728;
chunk__1312416_1312717 = G__1312729;
count__1312417_1312718 = G__1312730;
i__1312418_1312719 = G__1312731;
continue;
} else {
var c_1312732 = cljs.core.first.call(null,seq__1312415_1312726__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_1312715,c_1312732,level_1312677))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312715,c_1312732),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312732 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312715 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312715,c_1312732),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312732 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312715 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_1312677,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1312715,c_1312732], null)))], null)));
}

var G__1312733 = cljs.core.next.call(null,seq__1312415_1312726__$1);
var G__1312734 = null;
var G__1312735 = (0);
var G__1312736 = (0);
seq__1312415_1312716 = G__1312733;
chunk__1312416_1312717 = G__1312734;
count__1312417_1312718 = G__1312735;
i__1312418_1312719 = G__1312736;
continue;
}
} else {
}
}
break;
}

var G__1312737 = cljs.core.next.call(null,seq__1312414_1312709__$1);
var G__1312738 = null;
var G__1312739 = (0);
var G__1312740 = (0);
seq__1312414_1312678 = G__1312737;
chunk__1312419_1312679 = G__1312738;
count__1312420_1312680 = G__1312739;
i__1312421_1312681 = G__1312740;
continue;
}
} else {
}
}
break;
}

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(1136),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/gui_640x1136.png"], null)));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795),true);

break;
default:
console.warn([cljs.core.str("Game: Missing message handler for "),cljs.core.str(type)].join(''));

}

var G__1312741 = seq__1312399;
var G__1312742 = chunk__1312400;
var G__1312743 = count__1312401;
var G__1312744 = (i__1312402 + (1));
seq__1312399 = G__1312741;
chunk__1312400 = G__1312742;
count__1312401 = G__1312743;
i__1312402 = G__1312744;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__1312399);
if(temp__4126__auto__){
var seq__1312399__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312399__$1)){
var c__18902__auto__ = cljs.core.chunk_first.call(null,seq__1312399__$1);
var G__1312745 = cljs.core.chunk_rest.call(null,seq__1312399__$1);
var G__1312746 = c__18902__auto__;
var G__1312747 = cljs.core.count.call(null,c__18902__auto__);
var G__1312748 = (0);
seq__1312399 = G__1312745;
chunk__1312400 = G__1312746;
count__1312401 = G__1312747;
i__1312402 = G__1312748;
continue;
} else {
var vec__1312426 = cljs.core.first.call(null,seq__1312399__$1);
var type = cljs.core.nth.call(null,vec__1312426,(0),null);
var contents = cljs.core.nth.call(null,vec__1312426,(1),null);
var G__1312427_1312749 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__1312427_1312749) {
case "increase-score":
var score_1312751 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"score","score",-1963588780));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(contents) + score_1312751));

break;
case "rotate-tetrimino":
om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),romtoff.core.rotate_left);

romtoff.core.play_sound.call(null,"buttonClick");

break;
case "game-over":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),true);

break;
case "game-win":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-won","game-won",-1358704823),true);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),true);

break;
case "next-move":
var moves_1312752 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"moves","moves",927465255));
var new_moves_1312753 = (moves_1312752 - (1));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),new_moves_1312753);

if((new_moves_1312753 === (0))){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-over","game-over",-607322695),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),cljs.core.rand_nth.call(null,romtoff.core.tetriminos));
}

break;
case "tetrimino-at":
var t_1312754 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_1312755 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(contents);
var tetrimino_blocks_coords_1312756 = romtoff.core.tetrimino_coords.call(null,t_1312754,c_1312755);
if(cljs.core.every_QMARK_.call(null,((function (seq__1312399,chunk__1312400,count__1312401,i__1312402,tetrimino_blocks_coords_1312756,t_1312754,c_1312755,G__1312427_1312749,vec__1312426,type,contents,seq__1312399__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__1312350_SHARP_){
return romtoff.core.in_bounds.call(null,p1__1312350_SHARP_);
});})(seq__1312399,chunk__1312400,count__1312401,i__1312402,tetrimino_blocks_coords_1312756,t_1312754,c_1312755,G__1312427_1312749,vec__1312426,type,contents,seq__1312399__$1,temp__4126__auto__,game_chan,___$1))
,tetrimino_blocks_coords_1312756)){
var seq__1312428_1312757 = cljs.core.seq.call(null,tetrimino_blocks_coords_1312756);
var chunk__1312429_1312758 = null;
var count__1312430_1312759 = (0);
var i__1312431_1312760 = (0);
while(true){
if((i__1312431_1312760 < count__1312430_1312759)){
var vec__1312432_1312761 = cljs.core._nth.call(null,chunk__1312429_1312758,i__1312431_1312760);
var r_1312762 = cljs.core.nth.call(null,vec__1312432_1312761,(0),null);
var c_1312763__$1 = cljs.core.nth.call(null,vec__1312432_1312761,(1),null);
var tbc_1312764 = vec__1312432_1312761;
var block_type_1312765 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_1312764));
var visual_1312766 = (function (){var G__1312433 = (((block_type_1312765 instanceof cljs.core.Keyword))?block_type_1312765.fqn:null);
switch (G__1312433) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block.jpg"], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_1312765)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_1312756,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_1312764)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_1312762),cljs.core.str("-"),cljs.core.str(c_1312763__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312763__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312762 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_1312766)));

var G__1312768 = seq__1312428_1312757;
var G__1312769 = chunk__1312429_1312758;
var G__1312770 = count__1312430_1312759;
var G__1312771 = (i__1312431_1312760 + (1));
seq__1312428_1312757 = G__1312768;
chunk__1312429_1312758 = G__1312769;
count__1312430_1312759 = G__1312770;
i__1312431_1312760 = G__1312771;
continue;
} else {
var temp__4126__auto___1312772__$1 = cljs.core.seq.call(null,seq__1312428_1312757);
if(temp__4126__auto___1312772__$1){
var seq__1312428_1312773__$1 = temp__4126__auto___1312772__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312428_1312773__$1)){
var c__18902__auto___1312774 = cljs.core.chunk_first.call(null,seq__1312428_1312773__$1);
var G__1312775 = cljs.core.chunk_rest.call(null,seq__1312428_1312773__$1);
var G__1312776 = c__18902__auto___1312774;
var G__1312777 = cljs.core.count.call(null,c__18902__auto___1312774);
var G__1312778 = (0);
seq__1312428_1312757 = G__1312775;
chunk__1312429_1312758 = G__1312776;
count__1312430_1312759 = G__1312777;
i__1312431_1312760 = G__1312778;
continue;
} else {
var vec__1312434_1312779 = cljs.core.first.call(null,seq__1312428_1312773__$1);
var r_1312780 = cljs.core.nth.call(null,vec__1312434_1312779,(0),null);
var c_1312781__$1 = cljs.core.nth.call(null,vec__1312434_1312779,(1),null);
var tbc_1312782 = vec__1312434_1312779;
var block_type_1312783 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_1312782));
var visual_1312784 = (function (){var G__1312435 = (((block_type_1312783 instanceof cljs.core.Keyword))?block_type_1312783.fqn:null);
switch (G__1312435) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/block.jpg"], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_1312783)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_1312756,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_1312782)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_1312780),cljs.core.str("-"),cljs.core.str(c_1312781__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312781__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312780 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_1312784)));

var G__1312786 = cljs.core.next.call(null,seq__1312428_1312773__$1);
var G__1312787 = null;
var G__1312788 = (0);
var G__1312789 = (0);
seq__1312428_1312757 = G__1312786;
chunk__1312429_1312758 = G__1312787;
count__1312430_1312759 = G__1312788;
i__1312431_1312760 = G__1312789;
continue;
}
} else {
}
}
break;
}
} else {
}

break;
case "clear-selection":
var data_1312790__$1 = om.core.get_props.call(null,self__.owner);
var entities_1312791 = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(data_1312790__$1);
var arrow_ids_1312792 = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,((function (seq__1312399,chunk__1312400,count__1312401,i__1312402,data_1312790__$1,entities_1312791,G__1312427_1312749,vec__1312426,type,contents,seq__1312399__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__1312348_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__1312348_SHARP_));
});})(seq__1312399,chunk__1312400,count__1312401,i__1312402,data_1312790__$1,entities_1312791,G__1312427_1312749,vec__1312426,type,contents,seq__1312399__$1,temp__4126__auto__,game_chan,___$1))
,entities_1312791)));
var no_arrows_1312793 = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (seq__1312399,chunk__1312400,count__1312401,i__1312402,data_1312790__$1,entities_1312791,arrow_ids_1312792,G__1312427_1312749,vec__1312426,type,contents,seq__1312399__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__1312349_SHARP_){
return cljs.core.contains_QMARK_.call(null,arrow_ids_1312792,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__1312349_SHARP_));
});})(seq__1312399,chunk__1312400,count__1312401,i__1312402,data_1312790__$1,entities_1312791,arrow_ids_1312792,G__1312427_1312749,vec__1312426,type,contents,seq__1312399__$1,temp__4126__auto__,game_chan,___$1))
,entities_1312791));
om.core.update_BANG_.call(null,data_1312790__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),no_arrows_1312793);

break;
case "selection":
var vec__1312436_1312794 = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(contents);
var r_1312795 = cljs.core.nth.call(null,vec__1312436_1312794,(0),null);
var c_1312796 = cljs.core.nth.call(null,vec__1312436_1312794,(1),null);
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tetrimino-at","tetrimino-at",1514048990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1312795,c_1312796], null)], null)], null));

break;
case "load-level":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(0));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),(15));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),false);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.PersistentVector.EMPTY);

var level_1312797 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(contents);
var seq__1312437_1312798 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,level_1312797)));
var chunk__1312442_1312799 = null;
var count__1312443_1312800 = (0);
var i__1312444_1312801 = (0);
while(true){
if((i__1312444_1312801 < count__1312443_1312800)){
var r_1312802 = cljs.core._nth.call(null,chunk__1312442_1312799,i__1312444_1312801);
var seq__1312445_1312803 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_1312797))));
var chunk__1312446_1312804 = null;
var count__1312447_1312805 = (0);
var i__1312448_1312806 = (0);
while(true){
if((i__1312448_1312806 < count__1312447_1312805)){
var c_1312807 = cljs.core._nth.call(null,chunk__1312446_1312804,i__1312448_1312806);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_1312802,c_1312807,level_1312797))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312802,c_1312807),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312807 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312802 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312802,c_1312807),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312807 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312802 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_1312797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1312802,c_1312807], null)))], null)));
}

var G__1312808 = seq__1312445_1312803;
var G__1312809 = chunk__1312446_1312804;
var G__1312810 = count__1312447_1312805;
var G__1312811 = (i__1312448_1312806 + (1));
seq__1312445_1312803 = G__1312808;
chunk__1312446_1312804 = G__1312809;
count__1312447_1312805 = G__1312810;
i__1312448_1312806 = G__1312811;
continue;
} else {
var temp__4126__auto___1312812__$1 = cljs.core.seq.call(null,seq__1312445_1312803);
if(temp__4126__auto___1312812__$1){
var seq__1312445_1312813__$1 = temp__4126__auto___1312812__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312445_1312813__$1)){
var c__18902__auto___1312814 = cljs.core.chunk_first.call(null,seq__1312445_1312813__$1);
var G__1312815 = cljs.core.chunk_rest.call(null,seq__1312445_1312813__$1);
var G__1312816 = c__18902__auto___1312814;
var G__1312817 = cljs.core.count.call(null,c__18902__auto___1312814);
var G__1312818 = (0);
seq__1312445_1312803 = G__1312815;
chunk__1312446_1312804 = G__1312816;
count__1312447_1312805 = G__1312817;
i__1312448_1312806 = G__1312818;
continue;
} else {
var c_1312819 = cljs.core.first.call(null,seq__1312445_1312813__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_1312802,c_1312819,level_1312797))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312802,c_1312819),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312819 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312802 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312802,c_1312819),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312819 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312802 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_1312797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1312802,c_1312819], null)))], null)));
}

var G__1312820 = cljs.core.next.call(null,seq__1312445_1312813__$1);
var G__1312821 = null;
var G__1312822 = (0);
var G__1312823 = (0);
seq__1312445_1312803 = G__1312820;
chunk__1312446_1312804 = G__1312821;
count__1312447_1312805 = G__1312822;
i__1312448_1312806 = G__1312823;
continue;
}
} else {
}
}
break;
}

var G__1312824 = seq__1312437_1312798;
var G__1312825 = chunk__1312442_1312799;
var G__1312826 = count__1312443_1312800;
var G__1312827 = (i__1312444_1312801 + (1));
seq__1312437_1312798 = G__1312824;
chunk__1312442_1312799 = G__1312825;
count__1312443_1312800 = G__1312826;
i__1312444_1312801 = G__1312827;
continue;
} else {
var temp__4126__auto___1312828__$1 = cljs.core.seq.call(null,seq__1312437_1312798);
if(temp__4126__auto___1312828__$1){
var seq__1312437_1312829__$1 = temp__4126__auto___1312828__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312437_1312829__$1)){
var c__18902__auto___1312830 = cljs.core.chunk_first.call(null,seq__1312437_1312829__$1);
var G__1312831 = cljs.core.chunk_rest.call(null,seq__1312437_1312829__$1);
var G__1312832 = c__18902__auto___1312830;
var G__1312833 = cljs.core.count.call(null,c__18902__auto___1312830);
var G__1312834 = (0);
seq__1312437_1312798 = G__1312831;
chunk__1312442_1312799 = G__1312832;
count__1312443_1312800 = G__1312833;
i__1312444_1312801 = G__1312834;
continue;
} else {
var r_1312835 = cljs.core.first.call(null,seq__1312437_1312829__$1);
var seq__1312438_1312836 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_1312797))));
var chunk__1312439_1312837 = null;
var count__1312440_1312838 = (0);
var i__1312441_1312839 = (0);
while(true){
if((i__1312441_1312839 < count__1312440_1312838)){
var c_1312840 = cljs.core._nth.call(null,chunk__1312439_1312837,i__1312441_1312839);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_1312835,c_1312840,level_1312797))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312835,c_1312840),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312840 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312835 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312835,c_1312840),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312840 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312835 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_1312797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1312835,c_1312840], null)))], null)));
}

var G__1312841 = seq__1312438_1312836;
var G__1312842 = chunk__1312439_1312837;
var G__1312843 = count__1312440_1312838;
var G__1312844 = (i__1312441_1312839 + (1));
seq__1312438_1312836 = G__1312841;
chunk__1312439_1312837 = G__1312842;
count__1312440_1312838 = G__1312843;
i__1312441_1312839 = G__1312844;
continue;
} else {
var temp__4126__auto___1312845__$2 = cljs.core.seq.call(null,seq__1312438_1312836);
if(temp__4126__auto___1312845__$2){
var seq__1312438_1312846__$1 = temp__4126__auto___1312845__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312438_1312846__$1)){
var c__18902__auto___1312847 = cljs.core.chunk_first.call(null,seq__1312438_1312846__$1);
var G__1312848 = cljs.core.chunk_rest.call(null,seq__1312438_1312846__$1);
var G__1312849 = c__18902__auto___1312847;
var G__1312850 = cljs.core.count.call(null,c__18902__auto___1312847);
var G__1312851 = (0);
seq__1312438_1312836 = G__1312848;
chunk__1312439_1312837 = G__1312849;
count__1312440_1312838 = G__1312850;
i__1312441_1312839 = G__1312851;
continue;
} else {
var c_1312852 = cljs.core.first.call(null,seq__1312438_1312846__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_1312835,c_1312852,level_1312797))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312835,c_1312852),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312852 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312835 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_1312835,c_1312852),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_1312852 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_1312835 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_1312797,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_1312835,c_1312852], null)))], null)));
}

var G__1312853 = cljs.core.next.call(null,seq__1312438_1312846__$1);
var G__1312854 = null;
var G__1312855 = (0);
var G__1312856 = (0);
seq__1312438_1312836 = G__1312853;
chunk__1312439_1312837 = G__1312854;
count__1312440_1312838 = G__1312855;
i__1312441_1312839 = G__1312856;
continue;
}
} else {
}
}
break;
}

var G__1312857 = cljs.core.next.call(null,seq__1312437_1312829__$1);
var G__1312858 = null;
var G__1312859 = (0);
var G__1312860 = (0);
seq__1312437_1312798 = G__1312857;
chunk__1312442_1312799 = G__1312858;
count__1312443_1312800 = G__1312859;
i__1312444_1312801 = G__1312860;
continue;
}
} else {
}
}
break;
}

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"gui","gui",604532813),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(1136),new cljs.core.Keyword(null,"sprite","sprite",172516848),"img/gui_640x1136.png"], null)));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795),true);

break;
default:
console.warn([cljs.core.str("Game: Missing message handler for "),cljs.core.str(type)].join(''));

}

var G__1312861 = cljs.core.next.call(null,seq__1312399__$1);
var G__1312862 = null;
var G__1312863 = (0);
var G__1312864 = (0);
seq__1312399 = G__1312861;
chunk__1312400 = G__1312862;
count__1312401 = G__1312863;
i__1312402 = G__1312864;
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
return (function (state_1312457){
var state_val_1312458 = (state_1312457[(1)]);
if((state_val_1312458 === (4))){
var inst_1312451 = (state_1312457[(2)]);
var inst_1312452 = handler.call(null,inst_1312451);
var state_1312457__$1 = (function (){var statearr_1312459 = state_1312457;
(statearr_1312459[(7)] = inst_1312452);

return statearr_1312459;
})();
var statearr_1312460_1312865 = state_1312457__$1;
(statearr_1312460_1312865[(2)] = null);

(statearr_1312460_1312865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1312458 === (3))){
var inst_1312455 = (state_1312457[(2)]);
var state_1312457__$1 = state_1312457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1312457__$1,inst_1312455);
} else {
if((state_val_1312458 === (2))){
var state_1312457__$1 = state_1312457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1312457__$1,(4),game_chan);
} else {
if((state_val_1312458 === (1))){
var state_1312457__$1 = state_1312457;
var statearr_1312461_1312866 = state_1312457__$1;
(statearr_1312461_1312866[(2)] = null);

(statearr_1312461_1312866[(1)] = (2));


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
var statearr_1312465 = [null,null,null,null,null,null,null,null];
(statearr_1312465[(0)] = romtoff$core$state_machine__23980__auto__);

(statearr_1312465[(1)] = (1));

return statearr_1312465;
});
var romtoff$core$state_machine__23980__auto____1 = (function (state_1312457){
while(true){
var ret_value__23981__auto__ = (function (){try{while(true){
var result__23982__auto__ = switch__23979__auto__.call(null,state_1312457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23982__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23982__auto__;
}
break;
}
}catch (e1312466){if((e1312466 instanceof Object)){
var ex__23983__auto__ = e1312466;
var statearr_1312467_1312867 = state_1312457;
(statearr_1312467_1312867[(5)] = ex__23983__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1312457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1312466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23981__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1312868 = state_1312457;
state_1312457 = G__1312868;
continue;
} else {
return ret_value__23981__auto__;
}
break;
}
});
romtoff$core$state_machine__23980__auto__ = function(state_1312457){
switch(arguments.length){
case 0:
return romtoff$core$state_machine__23980__auto____0.call(this);
case 1:
return romtoff$core$state_machine__23980__auto____1.call(this,state_1312457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$state_machine__23980__auto____0;
romtoff$core$state_machine__23980__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$state_machine__23980__auto____1;
return romtoff$core$state_machine__23980__auto__;
})()
;})(switch__23979__auto__,c__24000__auto__,handler,game_chan,___$1))
})();
var state__24002__auto__ = (function (){var statearr_1312468 = f__24001__auto__.call(null);
(statearr_1312468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24000__auto__);

return statearr_1312468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24002__auto__);
});})(c__24000__auto__,handler,game_chan,___$1))
);

return c__24000__auto__;
});

romtoff.core.t1312355.prototype.om$core$IInitState$ = true;

romtoff.core.t1312355.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919),romtoff.core.game_chan], null);
});

romtoff.core.t1312355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1312357){
var self__ = this;
var _1312357__$1 = this;
return self__.meta1312356;
});

romtoff.core.t1312355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1312357,meta1312356__$1){
var self__ = this;
var _1312357__$1 = this;
return (new romtoff.core.t1312355(self__.owner,self__.data,meta1312356__$1));
});

romtoff.core.t1312355.cljs$lang$type = true;

romtoff.core.t1312355.cljs$lang$ctorStr = "romtoff.core/t1312355";

romtoff.core.t1312355.cljs$lang$ctorPrWriter = (function (this__18696__auto__,writer__18697__auto__,opt__18698__auto__){
return cljs.core._write.call(null,writer__18697__auto__,"romtoff.core/t1312355");
});

romtoff.core.__GT_t1312355 = (function romtoff$core$__GT_t1312355(owner__$1,data__$1,meta1312356){
return (new romtoff.core.t1312355(owner__$1,data__$1,meta1312356));
});

}

return (new romtoff.core.t1312355(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),romtoff.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
romtoff.core.on_js_reload = (function romtoff$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1431755111258