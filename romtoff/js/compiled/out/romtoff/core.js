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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__33833_SHARP_){
return cljs.core._EQ_.call(null,entity_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33833_SHARP_));
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
romtoff.core.in_bounds = (function romtoff$core$in_bounds(p__33834){
var vec__33836 = p__33834;
var r = cljs.core.nth.call(null,vec__33836,(0),null);
var c = cljs.core.nth.call(null,vec__33836,(1),null);
return (((-1) < r)) && (((-1) < c)) && ((r < romtoff.core.ROWS)) && ((c < romtoff.core.COLS));
});
romtoff.core.covered = (function romtoff$core$covered(p__33837){
var vec__33839 = p__33837;
var r = cljs.core.nth.call(null,vec__33839,(0),null);
var c = cljs.core.nth.call(null,vec__33839,(1),null);
return cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clouds","clouds",-632461223),r,c], null)));
});
romtoff.core.tetrimino_coords = (function romtoff$core$tetrimino_coords(t,p__33840){
var vec__33850 = p__33840;
var x = cljs.core.nth.call(null,vec__33850,(0),null);
var y = cljs.core.nth.call(null,vec__33850,(1),null);
var all_tiles = (function (){var iter__18870__auto__ = ((function (vec__33850,x,y){
return (function romtoff$core$tetrimino_coords_$_iter__33851(s__33852){
return (new cljs.core.LazySeq(null,((function (vec__33850,x,y){
return (function (){
var s__33852__$1 = s__33852;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33852__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18866__auto__ = ((function (s__33852__$1,r,xs__4624__auto__,temp__4126__auto__,vec__33850,x,y){
return (function romtoff$core$tetrimino_coords_$_iter__33851_$_iter__33853(s__33854){
return (new cljs.core.LazySeq(null,((function (s__33852__$1,r,xs__4624__auto__,temp__4126__auto__,vec__33850,x,y){
return (function (){
var s__33854__$1 = s__33854;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33854__$1);
if(temp__4126__auto____$1){
var s__33854__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33854__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__33854__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__33856 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__33855 = (0);
while(true){
if((i__33855 < size__18869__auto__)){
var c = cljs.core._nth.call(null,c__18868__auto__,i__33855);
cljs.core.chunk_append.call(null,b__33856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__33859 = (i__33855 + (1));
i__33855 = G__33859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33856),romtoff$core$tetrimino_coords_$_iter__33851_$_iter__33853.call(null,cljs.core.chunk_rest.call(null,s__33854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33856),null);
}
} else {
var c = cljs.core.first.call(null,s__33854__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),romtoff$core$tetrimino_coords_$_iter__33851_$_iter__33853.call(null,cljs.core.rest.call(null,s__33854__$2)));
}
} else {
return null;
}
break;
}
});})(s__33852__$1,r,xs__4624__auto__,temp__4126__auto__,vec__33850,x,y))
,null,null));
});})(s__33852__$1,r,xs__4624__auto__,temp__4126__auto__,vec__33850,x,y))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)))));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,romtoff$core$tetrimino_coords_$_iter__33851.call(null,cljs.core.rest.call(null,s__33852__$1)));
} else {
var G__33860 = cljs.core.rest.call(null,s__33852__$1);
s__33852__$1 = G__33860;
continue;
}
} else {
return null;
}
break;
}
});})(vec__33850,x,y))
,null,null));
});})(vec__33850,x,y))
;
return iter__18870__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,t)));
})();
var x_offset = (- cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,t)).indexOf((1)));
return cljs.core.reduce.call(null,((function (all_tiles,x_offset,vec__33850,x,y){
return (function (acc,p__33857){
var vec__33858 = p__33857;
var r = cljs.core.nth.call(null,vec__33858,(0),null);
var c = cljs.core.nth.call(null,vec__33858,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)))){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + r),((y + c) + x_offset)], null));
} else {
return acc;
}
});})(all_tiles,x_offset,vec__33850,x,y))
,cljs.core.PersistentVector.EMPTY,all_tiles);
});
romtoff.core.block_id = (function romtoff$core$block_id(r,c){
return cljs.core.keyword.call(null,[cljs.core.str("block-"),cljs.core.str(r),cljs.core.str("-"),cljs.core.str(c)].join(''));
});
romtoff.core.block_coords = (function romtoff$core$block_coords(block_id){
return cljs.core.vec.call(null,cljs.core.map.call(null,parseInt,cljs.core.subvec.call(null,clojure.string.split.call(null,cljs.core.name.call(null,block_id),"-"),(1))));
});
romtoff.core.block_by_coords = (function romtoff$core$block_by_coords(p__33861){
var vec__33863 = p__33861;
var x = cljs.core.nth.call(null,vec__33863,(0),null);
var y = cljs.core.nth.call(null,vec__33863,(1),null);
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
}),cljs.core.PersistentVector.EMPTY,(function (){var iter__18870__auto__ = (function romtoff$core$get_uncovered_coords_$_iter__33870(s__33871){
return (new cljs.core.LazySeq(null,(function (){
var s__33871__$1 = s__33871;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__33871__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18866__auto__ = ((function (s__33871__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function romtoff$core$get_uncovered_coords_$_iter__33870_$_iter__33872(s__33873){
return (new cljs.core.LazySeq(null,((function (s__33871__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__33873__$1 = s__33873;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__33873__$1);
if(temp__4126__auto____$1){
var s__33873__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33873__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__33873__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__33875 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__33874 = (0);
while(true){
if((i__33874 < size__18869__auto__)){
var c = cljs.core._nth.call(null,c__18868__auto__,i__33874);
cljs.core.chunk_append.call(null,b__33875,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__33876 = (i__33874 + (1));
i__33874 = G__33876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33875),romtoff$core$get_uncovered_coords_$_iter__33870_$_iter__33872.call(null,cljs.core.chunk_rest.call(null,s__33873__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33875),null);
}
} else {
var c = cljs.core.first.call(null,s__33873__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),romtoff$core$get_uncovered_coords_$_iter__33870_$_iter__33872.call(null,cljs.core.rest.call(null,s__33873__$2)));
}
} else {
return null;
}
break;
}
});})(s__33871__$1,r,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__33871__$1,r,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,cljs.core.range.call(null,romtoff.core.COLS)));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,romtoff$core$get_uncovered_coords_$_iter__33870.call(null,cljs.core.rest.call(null,s__33871__$1)));
} else {
var G__33877 = cljs.core.rest.call(null,s__33871__$1);
s__33871__$1 = G__33877;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18870__auto__.call(null,cljs.core.range.call(null,romtoff.core.ROWS));
})());
});
romtoff.core.is_near = (function romtoff$core$is_near(p__33878,p__33879){
var vec__33882 = p__33878;
var r1 = cljs.core.nth.call(null,vec__33882,(0),null);
var c1 = cljs.core.nth.call(null,vec__33882,(1),null);
var vec__33883 = p__33879;
var r2 = cljs.core.nth.call(null,vec__33883,(0),null);
var c2 = cljs.core.nth.call(null,vec__33883,(1),null);
return ((cljs.core._EQ_.call(null,c1,c2)) && (cljs.core._EQ_.call(null,r1,(r2 - (1))))) || ((cljs.core._EQ_.call(null,c1,c2)) && (cljs.core._EQ_.call(null,r1,(r2 + (1))))) || ((cljs.core._EQ_.call(null,r1,r2)) && (cljs.core._EQ_.call(null,c1,(c2 - (1))))) || ((cljs.core._EQ_.call(null,r1,r2)) && (cljs.core._EQ_.call(null,c1,(c2 + (1)))));
});
romtoff.core.rotate_left = (function romtoff$core$rotate_left(t){
return cljs.core.reduce.call(null,(function (acc,index){
return cljs.core.conj.call(null,acc,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__33884_SHARP_){
return cljs.core.get.call(null,p1__33884_SHARP_,index);
}),t)));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)))));
});
romtoff.core.build_sprite = (function romtoff$core$build_sprite(p__33887,owner,event_handlers,message_handlers){
var map__34016 = p__33887;
var map__34016__$1 = ((cljs.core.seq_QMARK_.call(null,map__34016))?cljs.core.apply.call(null,cljs.core.hash_map,map__34016):map__34016);
var data = map__34016__$1;
var width = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof romtoff.core.t34017 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t34017 = (function (x,owner,height,data,y,event_handlers,rotation,animation,width,ch,sprite,message_handlers,build_sprite,map__34016,id,p__33887,meta34018){
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
this.build_sprite = build_sprite;
this.map__34016 = map__34016;
this.id = id;
this.p__33887 = p__33887;
this.meta34018 = meta34018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t34017.prototype.om$core$IRender$ = true;

romtoff.core.t34017.prototype.om$core$IRender$render$arity$1 = ((function (map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
var self__ = this;
var ___$1 = this;
var img = (cljs.core.truth_(self__.animation)?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(self__.animation):self__.sprite);
return om_tools.dom.element.call(null,React.DOM.g,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": [cljs.core.str("<image width=\""),cljs.core.str(self__.width),cljs.core.str("\" height=\""),cljs.core.str(self__.height),cljs.core.str("\" x=\""),cljs.core.str(self__.x),cljs.core.str("\" y=\""),cljs.core.str(self__.y),cljs.core.str("\" xlink:href=\""),cljs.core.str(img),cljs.core.str("\" />")].join('')},new cljs.core.Keyword(null,"width","width",-384071477),self__.width,new cljs.core.Keyword(null,"height","height",1025178622),self__.height,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("rotate("),cljs.core.str((cljs.core.truth_(self__.rotation)?self__.rotation:(0))),cljs.core.str(" "),cljs.core.str(((self__.width / (2)) + self__.x)),cljs.core.str(" "),cljs.core.str(((self__.height / (2)) + self__.y)),cljs.core.str(")")].join('')], null),self__.event_handlers),cljs.core.PersistentVector.EMPTY);
});})(map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t34017.prototype.om$core$IWillMount$ = true;

romtoff.core.t34017.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
var self__ = this;
var ___$1 = this;
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (){
var f__24322__auto__ = (function (){var switch__24259__auto__ = ((function (c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (state_34094){
var state_val_34095 = (state_34094[(1)]);
if((state_val_34095 === (7))){
var inst_34047 = (state_34094[(7)]);
var inst_34029 = (state_34094[(8)]);
var inst_34036 = (state_34094[(9)]);
var inst_34045 = (state_34094[(10)]);
var inst_34038 = (state_34094[(11)]);
var inst_34044 = cljs.core._nth.call(null,inst_34036,inst_34038);
var inst_34045__$1 = cljs.core.nth.call(null,inst_34044,(0),null);
var inst_34046 = cljs.core.nth.call(null,inst_34044,(1),null);
var inst_34047__$1 = inst_34029.call(null,inst_34045__$1);
var state_34094__$1 = (function (){var statearr_34096 = state_34094;
(statearr_34096[(7)] = inst_34047__$1);

(statearr_34096[(10)] = inst_34045__$1);

(statearr_34096[(12)] = inst_34046);

return statearr_34096;
})();
if(cljs.core.truth_(inst_34047__$1)){
var statearr_34097_34144 = state_34094__$1;
(statearr_34097_34144[(1)] = (10));

} else {
var statearr_34098_34145 = state_34094__$1;
(statearr_34098_34145[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (20))){
var inst_34069 = (state_34094[(13)]);
var inst_34075 = [cljs.core.str(self__.id),cljs.core.str(": Missing message handler for "),cljs.core.str(inst_34069)].join('');
var inst_34076 = console.warn(inst_34075);
var state_34094__$1 = state_34094;
var statearr_34099_34146 = state_34094__$1;
(statearr_34099_34146[(2)] = inst_34076);

(statearr_34099_34146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (1))){
var state_34094__$1 = state_34094;
var statearr_34100_34147 = state_34094__$1;
(statearr_34100_34147[(2)] = null);

(statearr_34100_34147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (4))){
var inst_34022 = (state_34094[(2)]);
var inst_34023 = [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"transact","transact",-267998670)];
var inst_34024 = (function (){var messages = inst_34022;
return ((function (messages,inst_34022,inst_34023,state_val_34095,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (messages,inst_34022,inst_34023,state_val_34095,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (p1__33885_SHARP_){
return cljs.core.merge.call(null,p1__33885_SHARP_,content);
});})(messages,inst_34022,inst_34023,state_val_34095,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);
});
;})(messages,inst_34022,inst_34023,state_val_34095,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_34025 = (function (){var messages = inst_34022;
return ((function (messages,inst_34022,inst_34023,inst_34024,state_val_34095,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
return om.core.transact_BANG_.call(null,self__.data,((function (messages,inst_34022,inst_34023,inst_34024,state_val_34095,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (p1__33886_SHARP_){
return cljs.core.merge.call(null,p1__33886_SHARP_,content);
});})(messages,inst_34022,inst_34023,inst_34024,state_val_34095,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);
});
;})(messages,inst_34022,inst_34023,inst_34024,state_val_34095,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_34026 = (function (){var messages = inst_34022;
return ((function (messages,inst_34022,inst_34023,inst_34024,inst_34025,state_val_34095,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
var seq__34101 = cljs.core.seq.call(null,content);
var chunk__34102 = null;
var count__34103 = (0);
var i__34104 = (0);
while(true){
if((i__34104 < count__34103)){
var vec__34105 = cljs.core._nth.call(null,chunk__34102,i__34104);
var key = cljs.core.nth.call(null,vec__34105,(0),null);
var fn = cljs.core.nth.call(null,vec__34105,(1),null);
om.core.transact_BANG_.call(null,self__.data,key,fn);

var G__34148 = seq__34101;
var G__34149 = chunk__34102;
var G__34150 = count__34103;
var G__34151 = (i__34104 + (1));
seq__34101 = G__34148;
chunk__34102 = G__34149;
count__34103 = G__34150;
i__34104 = G__34151;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34101);
if(temp__4126__auto__){
var seq__34101__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34101__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__34101__$1);
var G__34152 = cljs.core.chunk_rest.call(null,seq__34101__$1);
var G__34153 = c__18901__auto__;
var G__34154 = cljs.core.count.call(null,c__18901__auto__);
var G__34155 = (0);
seq__34101 = G__34152;
chunk__34102 = G__34153;
count__34103 = G__34154;
i__34104 = G__34155;
continue;
} else {
var vec__34106 = cljs.core.first.call(null,seq__34101__$1);
var key = cljs.core.nth.call(null,vec__34106,(0),null);
var fn = cljs.core.nth.call(null,vec__34106,(1),null);
om.core.transact_BANG_.call(null,self__.data,key,fn);

var G__34156 = cljs.core.next.call(null,seq__34101__$1);
var G__34157 = null;
var G__34158 = (0);
var G__34159 = (0);
seq__34101 = G__34156;
chunk__34102 = G__34157;
count__34103 = G__34158;
i__34104 = G__34159;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(messages,inst_34022,inst_34023,inst_34024,inst_34025,state_val_34095,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_34027 = [inst_34024,inst_34025,inst_34026];
var inst_34028 = cljs.core.PersistentHashMap.fromArrays(inst_34023,inst_34027);
var inst_34029 = cljs.core.merge.call(null,inst_34028,self__.message_handlers);
var inst_34034 = cljs.core.seq.call(null,inst_34022);
var inst_34035 = inst_34034;
var inst_34036 = null;
var inst_34037 = (0);
var inst_34038 = (0);
var state_34094__$1 = (function (){var statearr_34107 = state_34094;
(statearr_34107[(14)] = inst_34035);

(statearr_34107[(8)] = inst_34029);

(statearr_34107[(9)] = inst_34036);

(statearr_34107[(15)] = inst_34037);

(statearr_34107[(11)] = inst_34038);

return statearr_34107;
})();
var statearr_34108_34160 = state_34094__$1;
(statearr_34108_34160[(2)] = null);

(statearr_34108_34160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (15))){
var inst_34085 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34109_34161 = state_34094__$1;
(statearr_34109_34161[(2)] = inst_34085);

(statearr_34109_34161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (21))){
var inst_34058 = (state_34094[(16)]);
var inst_34078 = (state_34094[(2)]);
var inst_34079 = cljs.core.next.call(null,inst_34058);
var inst_34035 = inst_34079;
var inst_34036 = null;
var inst_34037 = (0);
var inst_34038 = (0);
var state_34094__$1 = (function (){var statearr_34110 = state_34094;
(statearr_34110[(14)] = inst_34035);

(statearr_34110[(9)] = inst_34036);

(statearr_34110[(15)] = inst_34037);

(statearr_34110[(17)] = inst_34078);

(statearr_34110[(11)] = inst_34038);

return statearr_34110;
})();
var statearr_34111_34162 = state_34094__$1;
(statearr_34111_34162[(2)] = null);

(statearr_34111_34162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (13))){
var inst_34058 = (state_34094[(16)]);
var inst_34060 = cljs.core.chunked_seq_QMARK_.call(null,inst_34058);
var state_34094__$1 = state_34094;
if(inst_34060){
var statearr_34112_34163 = state_34094__$1;
(statearr_34112_34163[(1)] = (16));

} else {
var statearr_34113_34164 = state_34094__$1;
(statearr_34113_34164[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (6))){
var inst_34089 = (state_34094[(2)]);
var state_34094__$1 = (function (){var statearr_34114 = state_34094;
(statearr_34114[(18)] = inst_34089);

return statearr_34114;
})();
var statearr_34115_34165 = state_34094__$1;
(statearr_34115_34165[(2)] = null);

(statearr_34115_34165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (17))){
var inst_34071 = (state_34094[(19)]);
var inst_34029 = (state_34094[(8)]);
var inst_34069 = (state_34094[(13)]);
var inst_34058 = (state_34094[(16)]);
var inst_34068 = cljs.core.first.call(null,inst_34058);
var inst_34069__$1 = cljs.core.nth.call(null,inst_34068,(0),null);
var inst_34070 = cljs.core.nth.call(null,inst_34068,(1),null);
var inst_34071__$1 = inst_34029.call(null,inst_34069__$1);
var state_34094__$1 = (function (){var statearr_34119 = state_34094;
(statearr_34119[(19)] = inst_34071__$1);

(statearr_34119[(13)] = inst_34069__$1);

(statearr_34119[(20)] = inst_34070);

return statearr_34119;
})();
if(cljs.core.truth_(inst_34071__$1)){
var statearr_34120_34166 = state_34094__$1;
(statearr_34120_34166[(1)] = (19));

} else {
var statearr_34121_34167 = state_34094__$1;
(statearr_34121_34167[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (3))){
var inst_34092 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34094__$1,inst_34092);
} else {
if((state_val_34095 === (12))){
var inst_34035 = (state_34094[(14)]);
var inst_34036 = (state_34094[(9)]);
var inst_34037 = (state_34094[(15)]);
var inst_34038 = (state_34094[(11)]);
var inst_34054 = (state_34094[(2)]);
var inst_34055 = (inst_34038 + (1));
var tmp34116 = inst_34035;
var tmp34117 = inst_34036;
var tmp34118 = inst_34037;
var inst_34035__$1 = tmp34116;
var inst_34036__$1 = tmp34117;
var inst_34037__$1 = tmp34118;
var inst_34038__$1 = inst_34055;
var state_34094__$1 = (function (){var statearr_34122 = state_34094;
(statearr_34122[(14)] = inst_34035__$1);

(statearr_34122[(21)] = inst_34054);

(statearr_34122[(9)] = inst_34036__$1);

(statearr_34122[(15)] = inst_34037__$1);

(statearr_34122[(11)] = inst_34038__$1);

return statearr_34122;
})();
var statearr_34123_34168 = state_34094__$1;
(statearr_34123_34168[(2)] = null);

(statearr_34123_34168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (2))){
var state_34094__$1 = state_34094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34094__$1,(4),self__.ch);
} else {
if((state_val_34095 === (19))){
var inst_34071 = (state_34094[(19)]);
var inst_34070 = (state_34094[(20)]);
var inst_34073 = inst_34071.call(null,inst_34070);
var state_34094__$1 = state_34094;
var statearr_34124_34169 = state_34094__$1;
(statearr_34124_34169[(2)] = inst_34073);

(statearr_34124_34169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (11))){
var inst_34045 = (state_34094[(10)]);
var inst_34051 = [cljs.core.str(self__.id),cljs.core.str(": Missing message handler for "),cljs.core.str(inst_34045)].join('');
var inst_34052 = console.warn(inst_34051);
var state_34094__$1 = state_34094;
var statearr_34125_34170 = state_34094__$1;
(statearr_34125_34170[(2)] = inst_34052);

(statearr_34125_34170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (9))){
var inst_34087 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34126_34171 = state_34094__$1;
(statearr_34126_34171[(2)] = inst_34087);

(statearr_34126_34171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (5))){
var inst_34037 = (state_34094[(15)]);
var inst_34038 = (state_34094[(11)]);
var inst_34040 = (inst_34038 < inst_34037);
var inst_34041 = inst_34040;
var state_34094__$1 = state_34094;
if(cljs.core.truth_(inst_34041)){
var statearr_34127_34172 = state_34094__$1;
(statearr_34127_34172[(1)] = (7));

} else {
var statearr_34128_34173 = state_34094__$1;
(statearr_34128_34173[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (14))){
var state_34094__$1 = state_34094;
var statearr_34129_34174 = state_34094__$1;
(statearr_34129_34174[(2)] = null);

(statearr_34129_34174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (16))){
var inst_34058 = (state_34094[(16)]);
var inst_34062 = cljs.core.chunk_first.call(null,inst_34058);
var inst_34063 = cljs.core.chunk_rest.call(null,inst_34058);
var inst_34064 = cljs.core.count.call(null,inst_34062);
var inst_34035 = inst_34063;
var inst_34036 = inst_34062;
var inst_34037 = inst_34064;
var inst_34038 = (0);
var state_34094__$1 = (function (){var statearr_34130 = state_34094;
(statearr_34130[(14)] = inst_34035);

(statearr_34130[(9)] = inst_34036);

(statearr_34130[(15)] = inst_34037);

(statearr_34130[(11)] = inst_34038);

return statearr_34130;
})();
var statearr_34131_34175 = state_34094__$1;
(statearr_34131_34175[(2)] = null);

(statearr_34131_34175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (10))){
var inst_34047 = (state_34094[(7)]);
var inst_34046 = (state_34094[(12)]);
var inst_34049 = inst_34047.call(null,inst_34046);
var state_34094__$1 = state_34094;
var statearr_34132_34176 = state_34094__$1;
(statearr_34132_34176[(2)] = inst_34049);

(statearr_34132_34176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (18))){
var inst_34082 = (state_34094[(2)]);
var state_34094__$1 = state_34094;
var statearr_34133_34177 = state_34094__$1;
(statearr_34133_34177[(2)] = inst_34082);

(statearr_34133_34177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34095 === (8))){
var inst_34035 = (state_34094[(14)]);
var inst_34058 = (state_34094[(16)]);
var inst_34058__$1 = cljs.core.seq.call(null,inst_34035);
var state_34094__$1 = (function (){var statearr_34134 = state_34094;
(statearr_34134[(16)] = inst_34058__$1);

return statearr_34134;
})();
if(inst_34058__$1){
var statearr_34135_34178 = state_34094__$1;
(statearr_34135_34178[(1)] = (13));

} else {
var statearr_34136_34179 = state_34094__$1;
(statearr_34136_34179[(1)] = (14));

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
});})(c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;
return ((function (switch__24259__auto__,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function() {
var romtoff$core$build_sprite_$_state_machine__24260__auto__ = null;
var romtoff$core$build_sprite_$_state_machine__24260__auto____0 = (function (){
var statearr_34140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34140[(0)] = romtoff$core$build_sprite_$_state_machine__24260__auto__);

(statearr_34140[(1)] = (1));

return statearr_34140;
});
var romtoff$core$build_sprite_$_state_machine__24260__auto____1 = (function (state_34094){
while(true){
var ret_value__24261__auto__ = (function (){try{while(true){
var result__24262__auto__ = switch__24259__auto__.call(null,state_34094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24262__auto__;
}
break;
}
}catch (e34141){if((e34141 instanceof Object)){
var ex__24263__auto__ = e34141;
var statearr_34142_34180 = state_34094;
(statearr_34142_34180[(5)] = ex__24263__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34181 = state_34094;
state_34094 = G__34181;
continue;
} else {
return ret_value__24261__auto__;
}
break;
}
});
romtoff$core$build_sprite_$_state_machine__24260__auto__ = function(state_34094){
switch(arguments.length){
case 0:
return romtoff$core$build_sprite_$_state_machine__24260__auto____0.call(this);
case 1:
return romtoff$core$build_sprite_$_state_machine__24260__auto____1.call(this,state_34094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$build_sprite_$_state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$build_sprite_$_state_machine__24260__auto____0;
romtoff$core$build_sprite_$_state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$build_sprite_$_state_machine__24260__auto____1;
return romtoff$core$build_sprite_$_state_machine__24260__auto__;
})()
;})(switch__24259__auto__,c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var state__24323__auto__ = (function (){var statearr_34143 = f__24322__auto__.call(null);
(statearr_34143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24321__auto__);

return statearr_34143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,___$1,map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);

return c__24321__auto__;
});})(map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t34017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_34019){
var self__ = this;
var _34019__$1 = this;
return self__.meta34018;
});})(map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t34017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_34019,meta34018__$1){
var self__ = this;
var _34019__$1 = this;
return (new romtoff.core.t34017(self__.x,self__.owner,self__.height,self__.data,self__.y,self__.event_handlers,self__.rotation,self__.animation,self__.width,self__.ch,self__.sprite,self__.message_handlers,self__.build_sprite,self__.map__34016,self__.id,self__.p__33887,meta34018__$1));
});})(map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t34017.cljs$lang$type = true;

romtoff.core.t34017.cljs$lang$ctorStr = "romtoff.core/t34017";

romtoff.core.t34017.cljs$lang$ctorPrWriter = ((function (map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"romtoff.core/t34017");
});})(map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.__GT_t34017 = ((function (map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function romtoff$core$build_sprite_$___GT_t34017(x__$1,owner__$1,height__$1,data__$1,y__$1,event_handlers__$1,rotation__$1,animation__$1,width__$1,ch__$1,sprite__$1,message_handlers__$1,build_sprite__$1,map__34016__$2,id__$1,p__33887__$1,meta34018){
return (new romtoff.core.t34017(x__$1,owner__$1,height__$1,data__$1,y__$1,event_handlers__$1,rotation__$1,animation__$1,width__$1,ch__$1,sprite__$1,message_handlers__$1,build_sprite__$1,map__34016__$2,id__$1,p__33887__$1,meta34018));
});})(map__34016,map__34016__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

}

return (new romtoff.core.t34017(x,owner,height,data,y,event_handlers,rotation,animation,width,ch,sprite,message_handlers,romtoff$core$build_sprite,map__34016__$1,id,p__33887,cljs.core.PersistentArrayMap.EMPTY));
});
romtoff.core.stage__GT_sprite = new cljs.core.PersistentArrayMap(null, 3, [(0),"img/1.png",(1),"img/crate1.png",(2),"img/crate2.png"], null);
romtoff.core.int__GT_sprite = (function romtoff$core$int__GT_sprite(i){
return [cljs.core.str("img/"),cljs.core.str(i),cljs.core.str(".png")].join('');
});
romtoff.core.land = (function romtoff$core$land(p__34182,owner){
var map__34185 = p__34182;
var map__34185__$1 = ((cljs.core.seq_QMARK_.call(null,map__34185))?cljs.core.apply.call(null,cljs.core.hash_map,map__34185):map__34185);
var data = map__34185__$1;
var x = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rotation = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var animation = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var stage = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var width = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ch = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var sprite = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var id = cljs.core.get.call(null,map__34185__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__34185,map__34185__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id){
return (function (_){
return cljs.core.println.call(null,id);
});})(map__34185,map__34185__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),((function (map__34185,map__34185__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id){
return (function (_){
var stage__$1 = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"stage","stage",1843544772));
var G__34186 = stage__$1;
switch (G__34186) {
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
});})(map__34185,map__34185__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id))
], null));
});
romtoff.core.water = (function romtoff$core$water(p__34188,owner){
var map__34190 = p__34188;
var map__34190__$1 = ((cljs.core.seq_QMARK_.call(null,map__34190))?cljs.core.apply.call(null,cljs.core.hash_map,map__34190):map__34190);
var data = map__34190__$1;
var width = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__34190,map__34190__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
return cljs.core.println.call(null,id);
});})(map__34190,map__34190__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),((function (map__34190,map__34190__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
return romtoff.core.play_sound.call(null,"rockDrop");
});})(map__34190,map__34190__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null));
});
romtoff.core.arrow = (function romtoff$core$arrow(p__34191,owner){
var map__34197 = p__34191;
var map__34197__$1 = ((cljs.core.seq_QMARK_.call(null,map__34197))?cljs.core.apply.call(null,cljs.core.hash_map,map__34197):map__34197);
var data = map__34197__$1;
var width = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__34197__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),((function (map__34197,map__34197__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

var t_34202 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_34203 = romtoff.core.block_coords.call(null,id);
var tetrimino_blocks_coords_34204 = romtoff.core.tetrimino_coords.call(null,t_34202,c_34203);
var seq__34198_34205 = cljs.core.seq.call(null,tetrimino_blocks_coords_34204);
var chunk__34199_34206 = null;
var count__34200_34207 = (0);
var i__34201_34208 = (0);
while(true){
if((i__34201_34208 < count__34200_34207)){
var block_coords_34209 = cljs.core._nth.call(null,chunk__34199_34206,i__34201_34208);
romtoff.core.tell.call(null,cljs.core.apply.call(null,romtoff.core.block_id,block_coords_34209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY], null));

var G__34210 = seq__34198_34205;
var G__34211 = chunk__34199_34206;
var G__34212 = count__34200_34207;
var G__34213 = (i__34201_34208 + (1));
seq__34198_34205 = G__34210;
chunk__34199_34206 = G__34211;
count__34200_34207 = G__34212;
i__34201_34208 = G__34213;
continue;
} else {
var temp__4126__auto___34214 = cljs.core.seq.call(null,seq__34198_34205);
if(temp__4126__auto___34214){
var seq__34198_34215__$1 = temp__4126__auto___34214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34198_34215__$1)){
var c__18901__auto___34216 = cljs.core.chunk_first.call(null,seq__34198_34215__$1);
var G__34217 = cljs.core.chunk_rest.call(null,seq__34198_34215__$1);
var G__34218 = c__18901__auto___34216;
var G__34219 = cljs.core.count.call(null,c__18901__auto___34216);
var G__34220 = (0);
seq__34198_34205 = G__34217;
chunk__34199_34206 = G__34218;
count__34200_34207 = G__34219;
i__34201_34208 = G__34220;
continue;
} else {
var block_coords_34221 = cljs.core.first.call(null,seq__34198_34215__$1);
romtoff.core.tell.call(null,cljs.core.apply.call(null,romtoff.core.block_id,block_coords_34221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY], null));

var G__34222 = cljs.core.next.call(null,seq__34198_34215__$1);
var G__34223 = null;
var G__34224 = (0);
var G__34225 = (0);
seq__34198_34205 = G__34222;
chunk__34199_34206 = G__34223;
count__34200_34207 = G__34224;
i__34201_34208 = G__34225;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-move","next-move",1501229918),cljs.core.PersistentArrayMap.EMPTY], null));
});})(map__34197,map__34197__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null),cljs.core.PersistentArrayMap.EMPTY);
});
romtoff.core.falling_circle = (function romtoff$core$falling_circle(p__34228,owner){
var map__34488 = p__34228;
var map__34488__$1 = ((cljs.core.seq_QMARK_.call(null,map__34488))?cljs.core.apply.call(null,cljs.core.hash_map,map__34488):map__34488);
var data = map__34488__$1;
var y = cljs.core.get.call(null,map__34488__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__34488__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ch = cljs.core.get.call(null,map__34488__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(typeof romtoff.core.t34489 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t34489 = (function (ch,x,y,data,map__34488,owner,p__34228,falling_circle,meta34490){
this.ch = ch;
this.x = x;
this.y = y;
this.data = data;
this.map__34488 = map__34488;
this.owner = owner;
this.p__34228 = p__34228;
this.falling_circle = falling_circle;
this.meta34490 = meta34490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t34489.prototype.om$core$IRender$ = true;

romtoff.core.t34489.prototype.om$core$IRender$render$arity$1 = ((function (map__34488,map__34488__$1,data,y,x,ch){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.circle({"onClick": ((function (___$1,map__34488,map__34488__$1,data,y,x,ch){
return (function (___$2){
cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.Keyword(null,"create","create",-1301499256));

return "";
});})(___$1,map__34488,map__34488__$1,data,y,x,ch))
, "r": (25), "cy": self__.y, "cx": self__.x});
});})(map__34488,map__34488__$1,data,y,x,ch))
;

romtoff.core.t34489.prototype.om$core$IWillMount$ = true;

romtoff.core.t34489.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__34488,map__34488__$1,data,y,x,ch){
return (function (_){
var self__ = this;
var ___$1 = this;
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch){
return (function (){
var f__24322__auto__ = (function (){var switch__24259__auto__ = ((function (c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch){
return (function (state_34653){
var state_val_34654 = (state_34653[(1)]);
if((state_val_34654 === (7))){
var inst_34503 = (state_34653[(7)]);
var inst_34509 = (state_34653[(8)]);
var inst_34501 = (state_34653[(9)]);
var inst_34510 = (state_34653[(10)]);
var inst_34509__$1 = cljs.core._nth.call(null,inst_34501,inst_34503);
var inst_34510__$1 = cljs.core.nth.call(null,inst_34509__$1,(0),null);
var inst_34511 = cljs.core.nth.call(null,inst_34509__$1,(1),null);
var state_34653__$1 = (function (){var statearr_34655 = state_34653;
(statearr_34655[(8)] = inst_34509__$1);

(statearr_34655[(10)] = inst_34510__$1);

(statearr_34655[(11)] = inst_34511);

return statearr_34655;
})();
var G__34656_34747 = (((inst_34510__$1 instanceof cljs.core.Keyword))?inst_34510__$1.fqn:null);
switch (G__34656_34747) {
case "transact":
var statearr_34657_34749 = state_34653__$1;
(statearr_34657_34749[(1)] = (13));


break;
case "update":
var statearr_34658_34750 = state_34653__$1;
(statearr_34658_34750[(1)] = (12));


break;
case "tween":
var statearr_34659_34751 = state_34653__$1;
(statearr_34659_34751[(1)] = (11));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_34510__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (20))){
var state_34653__$1 = state_34653;
var statearr_34660_34752 = state_34653__$1;
(statearr_34660_34752[(2)] = null);

(statearr_34660_34752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (27))){
var inst_34644 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34661_34753 = state_34653__$1;
(statearr_34661_34753[(2)] = inst_34644);

(statearr_34661_34753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (1))){
var state_34653__$1 = state_34653;
var statearr_34662_34754 = state_34653__$1;
(statearr_34662_34754[(2)] = null);

(statearr_34662_34754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (24))){
var inst_34556 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34663_34755 = state_34653__$1;
(statearr_34663_34755[(2)] = inst_34556);

(statearr_34663_34755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (39))){
var inst_34632 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34664_34756 = state_34653__$1;
(statearr_34664_34756[(2)] = inst_34632);

(statearr_34664_34756[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (4))){
var inst_34494 = (state_34653[(12)]);
var inst_34494__$1 = (state_34653[(2)]);
var inst_34499 = cljs.core.seq.call(null,inst_34494__$1);
var inst_34500 = inst_34499;
var inst_34501 = null;
var inst_34502 = (0);
var inst_34503 = (0);
var state_34653__$1 = (function (){var statearr_34665 = state_34653;
(statearr_34665[(7)] = inst_34503);

(statearr_34665[(12)] = inst_34494__$1);

(statearr_34665[(9)] = inst_34501);

(statearr_34665[(13)] = inst_34502);

(statearr_34665[(14)] = inst_34500);

return statearr_34665;
})();
var statearr_34666_34757 = state_34653__$1;
(statearr_34666_34757[(2)] = null);

(statearr_34666_34757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (15))){
var inst_34563 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34667_34758 = state_34653__$1;
(statearr_34667_34758[(2)] = inst_34563);

(statearr_34667_34758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (21))){
var inst_34559 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34668_34759 = state_34653__$1;
(statearr_34668_34759[(2)] = inst_34559);

(statearr_34668_34759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (31))){
var inst_34570 = (state_34653[(15)]);
var inst_34637 = (state_34653[(2)]);
var inst_34638 = cljs.core.next.call(null,inst_34570);
var inst_34500 = inst_34638;
var inst_34501 = null;
var inst_34502 = (0);
var inst_34503 = (0);
var state_34653__$1 = (function (){var statearr_34669 = state_34653;
(statearr_34669[(7)] = inst_34503);

(statearr_34669[(9)] = inst_34501);

(statearr_34669[(13)] = inst_34502);

(statearr_34669[(16)] = inst_34637);

(statearr_34669[(14)] = inst_34500);

return statearr_34669;
})();
var statearr_34670_34760 = state_34653__$1;
(statearr_34670_34760[(2)] = null);

(statearr_34670_34760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (32))){
var inst_34503 = (state_34653[(7)]);
var inst_34581 = (state_34653[(17)]);
var inst_34570 = (state_34653[(15)]);
var inst_34494 = (state_34653[(12)]);
var inst_34501 = (state_34653[(9)]);
var inst_34580 = (state_34653[(18)]);
var inst_34582 = (state_34653[(19)]);
var inst_34502 = (state_34653[(13)]);
var inst_34583 = (function (){var content = inst_34582;
var type = inst_34581;
var vec__34579 = inst_34580;
var temp__4126__auto__ = inst_34570;
var seq__34495 = inst_34570;
var chunk__34496 = inst_34501;
var count__34497 = inst_34502;
var i__34498 = inst_34503;
var messages = inst_34494;
return ((function (content,type,vec__34579,temp__4126__auto__,seq__34495,chunk__34496,count__34497,i__34498,messages,inst_34503,inst_34581,inst_34570,inst_34494,inst_34501,inst_34580,inst_34582,inst_34502,state_val_34654,c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch){
return (function (p1__34226_SHARP_){
return cljs.core.merge.call(null,p1__34226_SHARP_,content);
});
;})(content,type,vec__34579,temp__4126__auto__,seq__34495,chunk__34496,count__34497,i__34498,messages,inst_34503,inst_34581,inst_34570,inst_34494,inst_34501,inst_34580,inst_34582,inst_34502,state_val_34654,c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch))
})();
var inst_34584 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),inst_34583);
var state_34653__$1 = state_34653;
var statearr_34671_34761 = state_34653__$1;
(statearr_34671_34761[(2)] = inst_34584);

(statearr_34671_34761[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (40))){
var inst_34610 = (state_34653[(20)]);
var inst_34612 = cljs.core.chunked_seq_QMARK_.call(null,inst_34610);
var state_34653__$1 = state_34653;
if(inst_34612){
var statearr_34672_34762 = state_34653__$1;
(statearr_34672_34762[(1)] = (43));

} else {
var statearr_34673_34763 = state_34653__$1;
(statearr_34673_34763[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (33))){
var inst_34503 = (state_34653[(7)]);
var inst_34581 = (state_34653[(17)]);
var inst_34570 = (state_34653[(15)]);
var inst_34494 = (state_34653[(12)]);
var inst_34501 = (state_34653[(9)]);
var inst_34580 = (state_34653[(18)]);
var inst_34582 = (state_34653[(19)]);
var inst_34502 = (state_34653[(13)]);
var inst_34586 = (function (){var content = inst_34582;
var type = inst_34581;
var vec__34579 = inst_34580;
var temp__4126__auto__ = inst_34570;
var seq__34495 = inst_34570;
var chunk__34496 = inst_34501;
var count__34497 = inst_34502;
var i__34498 = inst_34503;
var messages = inst_34494;
return ((function (content,type,vec__34579,temp__4126__auto__,seq__34495,chunk__34496,count__34497,i__34498,messages,inst_34503,inst_34581,inst_34570,inst_34494,inst_34501,inst_34580,inst_34582,inst_34502,state_val_34654,c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch){
return (function (p1__34227_SHARP_){
return cljs.core.merge.call(null,p1__34227_SHARP_,content);
});
;})(content,type,vec__34579,temp__4126__auto__,seq__34495,chunk__34496,count__34497,i__34498,messages,inst_34503,inst_34581,inst_34570,inst_34494,inst_34501,inst_34580,inst_34582,inst_34502,state_val_34654,c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch))
})();
var inst_34587 = om.core.transact_BANG_.call(null,self__.data,inst_34586);
var state_34653__$1 = state_34653;
var statearr_34674_34764 = state_34653__$1;
(statearr_34674_34764[(2)] = inst_34587);

(statearr_34674_34764[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (13))){
var inst_34511 = (state_34653[(11)]);
var inst_34522 = cljs.core.seq.call(null,inst_34511);
var inst_34523 = inst_34522;
var inst_34524 = null;
var inst_34525 = (0);
var inst_34526 = (0);
var state_34653__$1 = (function (){var statearr_34675 = state_34653;
(statearr_34675[(21)] = inst_34524);

(statearr_34675[(22)] = inst_34525);

(statearr_34675[(23)] = inst_34523);

(statearr_34675[(24)] = inst_34526);

return statearr_34675;
})();
var statearr_34676_34765 = state_34653__$1;
(statearr_34676_34765[(2)] = null);

(statearr_34676_34765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (22))){
var inst_34539 = (state_34653[(25)]);
var inst_34543 = cljs.core.chunk_first.call(null,inst_34539);
var inst_34544 = cljs.core.chunk_rest.call(null,inst_34539);
var inst_34545 = cljs.core.count.call(null,inst_34543);
var inst_34523 = inst_34544;
var inst_34524 = inst_34543;
var inst_34525 = inst_34545;
var inst_34526 = (0);
var state_34653__$1 = (function (){var statearr_34677 = state_34653;
(statearr_34677[(21)] = inst_34524);

(statearr_34677[(22)] = inst_34525);

(statearr_34677[(23)] = inst_34523);

(statearr_34677[(24)] = inst_34526);

return statearr_34677;
})();
var statearr_34678_34766 = state_34653__$1;
(statearr_34678_34766[(2)] = null);

(statearr_34678_34766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (36))){
var inst_34634 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34679_34767 = state_34653__$1;
(statearr_34679_34767[(2)] = inst_34634);

(statearr_34679_34767[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (41))){
var state_34653__$1 = state_34653;
var statearr_34680_34768 = state_34653__$1;
(statearr_34680_34768[(2)] = null);

(statearr_34680_34768[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (43))){
var inst_34610 = (state_34653[(20)]);
var inst_34614 = cljs.core.chunk_first.call(null,inst_34610);
var inst_34615 = cljs.core.chunk_rest.call(null,inst_34610);
var inst_34616 = cljs.core.count.call(null,inst_34614);
var inst_34594 = inst_34615;
var inst_34595 = inst_34614;
var inst_34596 = inst_34616;
var inst_34597 = (0);
var state_34653__$1 = (function (){var statearr_34681 = state_34653;
(statearr_34681[(26)] = inst_34595);

(statearr_34681[(27)] = inst_34594);

(statearr_34681[(28)] = inst_34596);

(statearr_34681[(29)] = inst_34597);

return statearr_34681;
})();
var statearr_34682_34769 = state_34653__$1;
(statearr_34682_34769[(2)] = null);

(statearr_34682_34769[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (29))){
var inst_34581 = (state_34653[(17)]);
var inst_34570 = (state_34653[(15)]);
var inst_34580 = (state_34653[(18)]);
var inst_34580__$1 = cljs.core.first.call(null,inst_34570);
var inst_34581__$1 = cljs.core.nth.call(null,inst_34580__$1,(0),null);
var inst_34582 = cljs.core.nth.call(null,inst_34580__$1,(1),null);
var state_34653__$1 = (function (){var statearr_34683 = state_34653;
(statearr_34683[(17)] = inst_34581__$1);

(statearr_34683[(18)] = inst_34580__$1);

(statearr_34683[(19)] = inst_34582);

return statearr_34683;
})();
var G__34684_34770 = (((inst_34581__$1 instanceof cljs.core.Keyword))?inst_34581__$1.fqn:null);
switch (G__34684_34770) {
case "transact":
var statearr_34685_34772 = state_34653__$1;
(statearr_34685_34772[(1)] = (34));


break;
case "update":
var statearr_34686_34773 = state_34653__$1;
(statearr_34686_34773[(1)] = (33));


break;
case "tween":
var statearr_34687_34774 = state_34653__$1;
(statearr_34687_34774[(1)] = (32));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_34581__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (44))){
var inst_34610 = (state_34653[(20)]);
var inst_34620 = cljs.core.first.call(null,inst_34610);
var inst_34621 = cljs.core.nth.call(null,inst_34620,(0),null);
var inst_34622 = cljs.core.nth.call(null,inst_34620,(1),null);
var inst_34623 = om.core.transact_BANG_.call(null,self__.data,inst_34621,inst_34622);
var inst_34624 = cljs.core.next.call(null,inst_34610);
var inst_34594 = inst_34624;
var inst_34595 = null;
var inst_34596 = (0);
var inst_34597 = (0);
var state_34653__$1 = (function (){var statearr_34688 = state_34653;
(statearr_34688[(26)] = inst_34595);

(statearr_34688[(27)] = inst_34594);

(statearr_34688[(28)] = inst_34596);

(statearr_34688[(29)] = inst_34597);

(statearr_34688[(30)] = inst_34623);

return statearr_34688;
})();
var statearr_34689_34775 = state_34653__$1;
(statearr_34689_34775[(2)] = null);

(statearr_34689_34775[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (6))){
var inst_34648 = (state_34653[(2)]);
var state_34653__$1 = (function (){var statearr_34690 = state_34653;
(statearr_34690[(31)] = inst_34648);

return statearr_34690;
})();
var statearr_34691_34776 = state_34653__$1;
(statearr_34691_34776[(2)] = null);

(statearr_34691_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (28))){
var inst_34570 = (state_34653[(15)]);
var inst_34574 = cljs.core.chunk_first.call(null,inst_34570);
var inst_34575 = cljs.core.chunk_rest.call(null,inst_34570);
var inst_34576 = cljs.core.count.call(null,inst_34574);
var inst_34500 = inst_34575;
var inst_34501 = inst_34574;
var inst_34502 = inst_34576;
var inst_34503 = (0);
var state_34653__$1 = (function (){var statearr_34692 = state_34653;
(statearr_34692[(7)] = inst_34503);

(statearr_34692[(9)] = inst_34501);

(statearr_34692[(13)] = inst_34502);

(statearr_34692[(14)] = inst_34500);

return statearr_34692;
})();
var statearr_34693_34777 = state_34653__$1;
(statearr_34693_34777[(2)] = null);

(statearr_34693_34777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (25))){
var inst_34570 = (state_34653[(15)]);
var inst_34572 = cljs.core.chunked_seq_QMARK_.call(null,inst_34570);
var state_34653__$1 = state_34653;
if(inst_34572){
var statearr_34694_34778 = state_34653__$1;
(statearr_34694_34778[(1)] = (28));

} else {
var statearr_34695_34779 = state_34653__$1;
(statearr_34695_34779[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (34))){
var inst_34582 = (state_34653[(19)]);
var inst_34593 = cljs.core.seq.call(null,inst_34582);
var inst_34594 = inst_34593;
var inst_34595 = null;
var inst_34596 = (0);
var inst_34597 = (0);
var state_34653__$1 = (function (){var statearr_34696 = state_34653;
(statearr_34696[(26)] = inst_34595);

(statearr_34696[(27)] = inst_34594);

(statearr_34696[(28)] = inst_34596);

(statearr_34696[(29)] = inst_34597);

return statearr_34696;
})();
var statearr_34697_34780 = state_34653__$1;
(statearr_34697_34780[(2)] = null);

(statearr_34697_34780[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (17))){
var inst_34523 = (state_34653[(23)]);
var inst_34539 = (state_34653[(25)]);
var inst_34539__$1 = cljs.core.seq.call(null,inst_34523);
var state_34653__$1 = (function (){var statearr_34698 = state_34653;
(statearr_34698[(25)] = inst_34539__$1);

return statearr_34698;
})();
if(inst_34539__$1){
var statearr_34699_34781 = state_34653__$1;
(statearr_34699_34781[(1)] = (19));

} else {
var statearr_34700_34782 = state_34653__$1;
(statearr_34700_34782[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (3))){
var inst_34651 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34653__$1,inst_34651);
} else {
if((state_val_34654 === (12))){
var inst_34503 = (state_34653[(7)]);
var inst_34509 = (state_34653[(8)]);
var inst_34494 = (state_34653[(12)]);
var inst_34501 = (state_34653[(9)]);
var inst_34510 = (state_34653[(10)]);
var inst_34511 = (state_34653[(11)]);
var inst_34502 = (state_34653[(13)]);
var inst_34500 = (state_34653[(14)]);
var inst_34515 = (function (){var content = inst_34511;
var type = inst_34510;
var vec__34508 = inst_34509;
var seq__34495 = inst_34500;
var chunk__34496 = inst_34501;
var count__34497 = inst_34502;
var i__34498 = inst_34503;
var messages = inst_34494;
return ((function (content,type,vec__34508,seq__34495,chunk__34496,count__34497,i__34498,messages,inst_34503,inst_34509,inst_34494,inst_34501,inst_34510,inst_34511,inst_34502,inst_34500,state_val_34654,c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch){
return (function (p1__34227_SHARP_){
return cljs.core.merge.call(null,p1__34227_SHARP_,content);
});
;})(content,type,vec__34508,seq__34495,chunk__34496,count__34497,i__34498,messages,inst_34503,inst_34509,inst_34494,inst_34501,inst_34510,inst_34511,inst_34502,inst_34500,state_val_34654,c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch))
})();
var inst_34516 = om.core.transact_BANG_.call(null,self__.data,inst_34515);
var state_34653__$1 = state_34653;
var statearr_34701_34783 = state_34653__$1;
(statearr_34701_34783[(2)] = inst_34516);

(statearr_34701_34783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (2))){
var state_34653__$1 = state_34653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34653__$1,(4),self__.ch);
} else {
if((state_val_34654 === (23))){
var inst_34539 = (state_34653[(25)]);
var inst_34549 = cljs.core.first.call(null,inst_34539);
var inst_34550 = cljs.core.nth.call(null,inst_34549,(0),null);
var inst_34551 = cljs.core.nth.call(null,inst_34549,(1),null);
var inst_34552 = om.core.transact_BANG_.call(null,self__.data,inst_34550,inst_34551);
var inst_34553 = cljs.core.next.call(null,inst_34539);
var inst_34523 = inst_34553;
var inst_34524 = null;
var inst_34525 = (0);
var inst_34526 = (0);
var state_34653__$1 = (function (){var statearr_34702 = state_34653;
(statearr_34702[(32)] = inst_34552);

(statearr_34702[(21)] = inst_34524);

(statearr_34702[(22)] = inst_34525);

(statearr_34702[(23)] = inst_34523);

(statearr_34702[(24)] = inst_34526);

return statearr_34702;
})();
var statearr_34703_34784 = state_34653__$1;
(statearr_34703_34784[(2)] = null);

(statearr_34703_34784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (35))){
var inst_34596 = (state_34653[(28)]);
var inst_34597 = (state_34653[(29)]);
var inst_34599 = (inst_34597 < inst_34596);
var inst_34600 = inst_34599;
var state_34653__$1 = state_34653;
if(cljs.core.truth_(inst_34600)){
var statearr_34704_34785 = state_34653__$1;
(statearr_34704_34785[(1)] = (37));

} else {
var statearr_34705_34786 = state_34653__$1;
(statearr_34705_34786[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (19))){
var inst_34539 = (state_34653[(25)]);
var inst_34541 = cljs.core.chunked_seq_QMARK_.call(null,inst_34539);
var state_34653__$1 = state_34653;
if(inst_34541){
var statearr_34706_34787 = state_34653__$1;
(statearr_34706_34787[(1)] = (22));

} else {
var statearr_34707_34788 = state_34653__$1;
(statearr_34707_34788[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (11))){
var inst_34503 = (state_34653[(7)]);
var inst_34509 = (state_34653[(8)]);
var inst_34494 = (state_34653[(12)]);
var inst_34501 = (state_34653[(9)]);
var inst_34510 = (state_34653[(10)]);
var inst_34511 = (state_34653[(11)]);
var inst_34502 = (state_34653[(13)]);
var inst_34500 = (state_34653[(14)]);
var inst_34512 = (function (){var content = inst_34511;
var type = inst_34510;
var vec__34508 = inst_34509;
var seq__34495 = inst_34500;
var chunk__34496 = inst_34501;
var count__34497 = inst_34502;
var i__34498 = inst_34503;
var messages = inst_34494;
return ((function (content,type,vec__34508,seq__34495,chunk__34496,count__34497,i__34498,messages,inst_34503,inst_34509,inst_34494,inst_34501,inst_34510,inst_34511,inst_34502,inst_34500,state_val_34654,c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch){
return (function (p1__34226_SHARP_){
return cljs.core.merge.call(null,p1__34226_SHARP_,content);
});
;})(content,type,vec__34508,seq__34495,chunk__34496,count__34497,i__34498,messages,inst_34503,inst_34509,inst_34494,inst_34501,inst_34510,inst_34511,inst_34502,inst_34500,state_val_34654,c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch))
})();
var inst_34513 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),inst_34512);
var state_34653__$1 = state_34653;
var statearr_34708_34789 = state_34653__$1;
(statearr_34708_34789[(2)] = inst_34513);

(statearr_34708_34789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (9))){
var inst_34646 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34709_34790 = state_34653__$1;
(statearr_34709_34790[(2)] = inst_34646);

(statearr_34709_34790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (5))){
var inst_34503 = (state_34653[(7)]);
var inst_34502 = (state_34653[(13)]);
var inst_34505 = (inst_34503 < inst_34502);
var inst_34506 = inst_34505;
var state_34653__$1 = state_34653;
if(cljs.core.truth_(inst_34506)){
var statearr_34710_34791 = state_34653__$1;
(statearr_34710_34791[(1)] = (7));

} else {
var statearr_34711_34792 = state_34653__$1;
(statearr_34711_34792[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (14))){
var inst_34525 = (state_34653[(22)]);
var inst_34526 = (state_34653[(24)]);
var inst_34528 = (inst_34526 < inst_34525);
var inst_34529 = inst_34528;
var state_34653__$1 = state_34653;
if(cljs.core.truth_(inst_34529)){
var statearr_34712_34793 = state_34653__$1;
(statearr_34712_34793[(1)] = (16));

} else {
var statearr_34713_34794 = state_34653__$1;
(statearr_34713_34794[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (45))){
var inst_34627 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34717_34795 = state_34653__$1;
(statearr_34717_34795[(2)] = inst_34627);

(statearr_34717_34795[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (26))){
var state_34653__$1 = state_34653;
var statearr_34718_34796 = state_34653__$1;
(statearr_34718_34796[(2)] = null);

(statearr_34718_34796[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (16))){
var inst_34524 = (state_34653[(21)]);
var inst_34525 = (state_34653[(22)]);
var inst_34523 = (state_34653[(23)]);
var inst_34526 = (state_34653[(24)]);
var inst_34532 = cljs.core._nth.call(null,inst_34524,inst_34526);
var inst_34533 = cljs.core.nth.call(null,inst_34532,(0),null);
var inst_34534 = cljs.core.nth.call(null,inst_34532,(1),null);
var inst_34535 = om.core.transact_BANG_.call(null,self__.data,inst_34533,inst_34534);
var inst_34536 = (inst_34526 + (1));
var tmp34714 = inst_34524;
var tmp34715 = inst_34525;
var tmp34716 = inst_34523;
var inst_34523__$1 = tmp34716;
var inst_34524__$1 = tmp34714;
var inst_34525__$1 = tmp34715;
var inst_34526__$1 = inst_34536;
var state_34653__$1 = (function (){var statearr_34719 = state_34653;
(statearr_34719[(33)] = inst_34535);

(statearr_34719[(21)] = inst_34524__$1);

(statearr_34719[(22)] = inst_34525__$1);

(statearr_34719[(23)] = inst_34523__$1);

(statearr_34719[(24)] = inst_34526__$1);

return statearr_34719;
})();
var statearr_34720_34797 = state_34653__$1;
(statearr_34720_34797[(2)] = null);

(statearr_34720_34797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (38))){
var inst_34594 = (state_34653[(27)]);
var inst_34610 = (state_34653[(20)]);
var inst_34610__$1 = cljs.core.seq.call(null,inst_34594);
var state_34653__$1 = (function (){var statearr_34724 = state_34653;
(statearr_34724[(20)] = inst_34610__$1);

return statearr_34724;
})();
if(inst_34610__$1){
var statearr_34725_34798 = state_34653__$1;
(statearr_34725_34798[(1)] = (40));

} else {
var statearr_34726_34799 = state_34653__$1;
(statearr_34726_34799[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (30))){
var inst_34641 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34727_34800 = state_34653__$1;
(statearr_34727_34800[(2)] = inst_34641);

(statearr_34727_34800[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (10))){
var inst_34503 = (state_34653[(7)]);
var inst_34501 = (state_34653[(9)]);
var inst_34502 = (state_34653[(13)]);
var inst_34500 = (state_34653[(14)]);
var inst_34566 = (state_34653[(2)]);
var inst_34567 = (inst_34503 + (1));
var tmp34721 = inst_34501;
var tmp34722 = inst_34502;
var tmp34723 = inst_34500;
var inst_34500__$1 = tmp34723;
var inst_34501__$1 = tmp34721;
var inst_34502__$1 = tmp34722;
var inst_34503__$1 = inst_34567;
var state_34653__$1 = (function (){var statearr_34728 = state_34653;
(statearr_34728[(7)] = inst_34503__$1);

(statearr_34728[(9)] = inst_34501__$1);

(statearr_34728[(13)] = inst_34502__$1);

(statearr_34728[(14)] = inst_34500__$1);

(statearr_34728[(34)] = inst_34566);

return statearr_34728;
})();
var statearr_34729_34801 = state_34653__$1;
(statearr_34729_34801[(2)] = null);

(statearr_34729_34801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (18))){
var inst_34561 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34733_34802 = state_34653__$1;
(statearr_34733_34802[(2)] = inst_34561);

(statearr_34733_34802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (42))){
var inst_34630 = (state_34653[(2)]);
var state_34653__$1 = state_34653;
var statearr_34734_34803 = state_34653__$1;
(statearr_34734_34803[(2)] = inst_34630);

(statearr_34734_34803[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (37))){
var inst_34595 = (state_34653[(26)]);
var inst_34594 = (state_34653[(27)]);
var inst_34596 = (state_34653[(28)]);
var inst_34597 = (state_34653[(29)]);
var inst_34603 = cljs.core._nth.call(null,inst_34595,inst_34597);
var inst_34604 = cljs.core.nth.call(null,inst_34603,(0),null);
var inst_34605 = cljs.core.nth.call(null,inst_34603,(1),null);
var inst_34606 = om.core.transact_BANG_.call(null,self__.data,inst_34604,inst_34605);
var inst_34607 = (inst_34597 + (1));
var tmp34730 = inst_34595;
var tmp34731 = inst_34594;
var tmp34732 = inst_34596;
var inst_34594__$1 = tmp34731;
var inst_34595__$1 = tmp34730;
var inst_34596__$1 = tmp34732;
var inst_34597__$1 = inst_34607;
var state_34653__$1 = (function (){var statearr_34735 = state_34653;
(statearr_34735[(26)] = inst_34595__$1);

(statearr_34735[(27)] = inst_34594__$1);

(statearr_34735[(28)] = inst_34596__$1);

(statearr_34735[(29)] = inst_34597__$1);

(statearr_34735[(35)] = inst_34606);

return statearr_34735;
})();
var statearr_34736_34804 = state_34653__$1;
(statearr_34736_34804[(2)] = null);

(statearr_34736_34804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34654 === (8))){
var inst_34570 = (state_34653[(15)]);
var inst_34500 = (state_34653[(14)]);
var inst_34570__$1 = cljs.core.seq.call(null,inst_34500);
var state_34653__$1 = (function (){var statearr_34737 = state_34653;
(statearr_34737[(15)] = inst_34570__$1);

return statearr_34737;
})();
if(inst_34570__$1){
var statearr_34738_34805 = state_34653__$1;
(statearr_34738_34805[(1)] = (25));

} else {
var statearr_34739_34806 = state_34653__$1;
(statearr_34739_34806[(1)] = (26));

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
});})(c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch))
;
return ((function (switch__24259__auto__,c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch){
return (function() {
var romtoff$core$falling_circle_$_state_machine__24260__auto__ = null;
var romtoff$core$falling_circle_$_state_machine__24260__auto____0 = (function (){
var statearr_34743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34743[(0)] = romtoff$core$falling_circle_$_state_machine__24260__auto__);

(statearr_34743[(1)] = (1));

return statearr_34743;
});
var romtoff$core$falling_circle_$_state_machine__24260__auto____1 = (function (state_34653){
while(true){
var ret_value__24261__auto__ = (function (){try{while(true){
var result__24262__auto__ = switch__24259__auto__.call(null,state_34653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24262__auto__;
}
break;
}
}catch (e34744){if((e34744 instanceof Object)){
var ex__24263__auto__ = e34744;
var statearr_34745_34807 = state_34653;
(statearr_34745_34807[(5)] = ex__24263__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34808 = state_34653;
state_34653 = G__34808;
continue;
} else {
return ret_value__24261__auto__;
}
break;
}
});
romtoff$core$falling_circle_$_state_machine__24260__auto__ = function(state_34653){
switch(arguments.length){
case 0:
return romtoff$core$falling_circle_$_state_machine__24260__auto____0.call(this);
case 1:
return romtoff$core$falling_circle_$_state_machine__24260__auto____1.call(this,state_34653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$falling_circle_$_state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$falling_circle_$_state_machine__24260__auto____0;
romtoff$core$falling_circle_$_state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$falling_circle_$_state_machine__24260__auto____1;
return romtoff$core$falling_circle_$_state_machine__24260__auto__;
})()
;})(switch__24259__auto__,c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch))
})();
var state__24323__auto__ = (function (){var statearr_34746 = f__24322__auto__.call(null);
(statearr_34746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24321__auto__);

return statearr_34746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,___$1,map__34488,map__34488__$1,data,y,x,ch))
);

return c__24321__auto__;
});})(map__34488,map__34488__$1,data,y,x,ch))
;

romtoff.core.t34489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34488,map__34488__$1,data,y,x,ch){
return (function (_34491){
var self__ = this;
var _34491__$1 = this;
return self__.meta34490;
});})(map__34488,map__34488__$1,data,y,x,ch))
;

romtoff.core.t34489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34488,map__34488__$1,data,y,x,ch){
return (function (_34491,meta34490__$1){
var self__ = this;
var _34491__$1 = this;
return (new romtoff.core.t34489(self__.ch,self__.x,self__.y,self__.data,self__.map__34488,self__.owner,self__.p__34228,self__.falling_circle,meta34490__$1));
});})(map__34488,map__34488__$1,data,y,x,ch))
;

romtoff.core.t34489.cljs$lang$type = true;

romtoff.core.t34489.cljs$lang$ctorStr = "romtoff.core/t34489";

romtoff.core.t34489.cljs$lang$ctorPrWriter = ((function (map__34488,map__34488__$1,data,y,x,ch){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"romtoff.core/t34489");
});})(map__34488,map__34488__$1,data,y,x,ch))
;

romtoff.core.__GT_t34489 = ((function (map__34488,map__34488__$1,data,y,x,ch){
return (function romtoff$core$falling_circle_$___GT_t34489(ch__$1,x__$1,y__$1,data__$1,map__34488__$2,owner__$1,p__34228__$1,falling_circle__$1,meta34490){
return (new romtoff.core.t34489(ch__$1,x__$1,y__$1,data__$1,map__34488__$2,owner__$1,p__34228__$1,falling_circle__$1,meta34490));
});})(map__34488,map__34488__$1,data,y,x,ch))
;

}

return (new romtoff.core.t34489(ch,x,y,data,map__34488__$1,owner,p__34228,romtoff$core$falling_circle,cljs.core.PersistentArrayMap.EMPTY));
});
romtoff.core.from_default_entity = (function romtoff$core$from_default_entity(m){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"tweens","tweens",-1927735551),cljs.core.PersistentArrayMap.EMPTY], null),m);
});
romtoff.core.add_entity = (function romtoff$core$add_entity(data,entity){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (p1__34809_SHARP_){
return cljs.core.conj.call(null,p1__34809_SHARP_,entity);
}));
});
if(typeof romtoff.core.builder !== 'undefined'){
} else {
romtoff.core.builder = (function (){var method_table__19011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19012__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19015__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"romtoff.core","builder"),((function (method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__,hierarchy__19015__auto__){
return (function (data,owner){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data);
});})(method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__,hierarchy__19015__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19015__auto__,method_table__19011__auto__,prefer_table__19012__auto__,method_cache__19013__auto__,cached_hierarchy__19014__auto__));
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
if(typeof romtoff.core.t34817 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t34817 = (function (owner,data,meta34818){
this.owner = owner;
this.data = data;
this.meta34818 = meta34818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t34817.prototype.om$core$IRenderState$ = true;

romtoff.core.t34817.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__34820){
var self__ = this;
var map__34821 = p__34820;
var map__34821__$1 = ((cljs.core.seq_QMARK_.call(null,map__34821))?cljs.core.apply.call(null,cljs.core.hash_map,map__34821):map__34821);
var game_chan = cljs.core.get.call(null,map__34821__$1,new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919));
var ___$1 = this;
var seq__34822_34931 = cljs.core.seq.call(null,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)));
var chunk__34823_34932 = null;
var count__34824_34933 = (0);
var i__34825_34934 = (0);
while(true){
if((i__34825_34934 < count__34824_34933)){
var entity_34935 = cljs.core._nth.call(null,chunk__34823_34932,i__34825_34934);
var seq__34826_34936 = cljs.core.seq.call(null,cljs.core.get.call(null,entity_34935,new cljs.core.Keyword(null,"tweens","tweens",-1927735551)));
var chunk__34827_34937 = null;
var count__34828_34938 = (0);
var i__34829_34939 = (0);
while(true){
if((i__34829_34939 < count__34828_34938)){
var vec__34830_34940 = cljs.core._nth.call(null,chunk__34827_34937,i__34829_34939);
var key_34941 = cljs.core.nth.call(null,vec__34830_34940,(0),null);
var map__34831_34942 = cljs.core.nth.call(null,vec__34830_34940,(1),null);
var map__34831_34943__$1 = ((cljs.core.seq_QMARK_.call(null,map__34831_34942))?cljs.core.apply.call(null,cljs.core.hash_map,map__34831_34942):map__34831_34942);
var tween_34944 = map__34831_34943__$1;
var when_done_34945 = cljs.core.get.call(null,map__34831_34943__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_34946 = cljs.core.get.call(null,map__34831_34943__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_34947 = cljs.core.get.call(null,map__34831_34943__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_34948 = cljs.core.get.call(null,map__34831_34943__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_34949 = cljs.core.get.call(null,map__34831_34943__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_34950 = cljs.core.get.call(null,map__34831_34943__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_34947)){
om.core.update_BANG_.call(null,tween_34944,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_34944,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_34935,key_34941));
} else {
var easing_fn_34951 = (function (){var G__34832 = (((easing_34948 instanceof cljs.core.Keyword))?easing_34948.fqn:null);
switch (G__34832) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_34948)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_34935,key_34941,easing_fn_34951.call(null,initial_34946,target_34950,progress_34947,duration_34949));

om.core.transact_BANG_.call(null,tween_34944,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_34949,progress_34947)){
om.core.transact_BANG_.call(null,entity_34935,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__34826_34936,chunk__34827_34937,count__34828_34938,i__34829_34939,seq__34822_34931,chunk__34823_34932,count__34824_34933,i__34825_34934,vec__34830_34940,key_34941,map__34831_34942,map__34831_34943__$1,tween_34944,when_done_34945,initial_34946,progress_34947,easing_34948,duration_34949,target_34950,entity_34935,___$1,map__34821,map__34821__$1,game_chan){
return (function (p1__34813_SHARP_){
return cljs.core.dissoc.call(null,p1__34813_SHARP_,key_34941);
});})(seq__34826_34936,chunk__34827_34937,count__34828_34938,i__34829_34939,seq__34822_34931,chunk__34823_34932,count__34824_34933,i__34825_34934,vec__34830_34940,key_34941,map__34831_34942,map__34831_34943__$1,tween_34944,when_done_34945,initial_34946,progress_34947,easing_34948,duration_34949,target_34950,entity_34935,___$1,map__34821,map__34821__$1,game_chan))
);

if(cljs.core.truth_(when_done_34945)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_34945,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__34953 = seq__34826_34936;
var G__34954 = chunk__34827_34937;
var G__34955 = count__34828_34938;
var G__34956 = (i__34829_34939 + (1));
seq__34826_34936 = G__34953;
chunk__34827_34937 = G__34954;
count__34828_34938 = G__34955;
i__34829_34939 = G__34956;
continue;
} else {
var temp__4126__auto___34957 = cljs.core.seq.call(null,seq__34826_34936);
if(temp__4126__auto___34957){
var seq__34826_34958__$1 = temp__4126__auto___34957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34826_34958__$1)){
var c__18901__auto___34959 = cljs.core.chunk_first.call(null,seq__34826_34958__$1);
var G__34960 = cljs.core.chunk_rest.call(null,seq__34826_34958__$1);
var G__34961 = c__18901__auto___34959;
var G__34962 = cljs.core.count.call(null,c__18901__auto___34959);
var G__34963 = (0);
seq__34826_34936 = G__34960;
chunk__34827_34937 = G__34961;
count__34828_34938 = G__34962;
i__34829_34939 = G__34963;
continue;
} else {
var vec__34833_34964 = cljs.core.first.call(null,seq__34826_34958__$1);
var key_34965 = cljs.core.nth.call(null,vec__34833_34964,(0),null);
var map__34834_34966 = cljs.core.nth.call(null,vec__34833_34964,(1),null);
var map__34834_34967__$1 = ((cljs.core.seq_QMARK_.call(null,map__34834_34966))?cljs.core.apply.call(null,cljs.core.hash_map,map__34834_34966):map__34834_34966);
var tween_34968 = map__34834_34967__$1;
var when_done_34969 = cljs.core.get.call(null,map__34834_34967__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_34970 = cljs.core.get.call(null,map__34834_34967__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_34971 = cljs.core.get.call(null,map__34834_34967__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_34972 = cljs.core.get.call(null,map__34834_34967__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_34973 = cljs.core.get.call(null,map__34834_34967__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_34974 = cljs.core.get.call(null,map__34834_34967__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_34971)){
om.core.update_BANG_.call(null,tween_34968,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_34968,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_34935,key_34965));
} else {
var easing_fn_34975 = (function (){var G__34835 = (((easing_34972 instanceof cljs.core.Keyword))?easing_34972.fqn:null);
switch (G__34835) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_34972)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_34935,key_34965,easing_fn_34975.call(null,initial_34970,target_34974,progress_34971,duration_34973));

om.core.transact_BANG_.call(null,tween_34968,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_34973,progress_34971)){
om.core.transact_BANG_.call(null,entity_34935,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__34826_34936,chunk__34827_34937,count__34828_34938,i__34829_34939,seq__34822_34931,chunk__34823_34932,count__34824_34933,i__34825_34934,vec__34833_34964,key_34965,map__34834_34966,map__34834_34967__$1,tween_34968,when_done_34969,initial_34970,progress_34971,easing_34972,duration_34973,target_34974,seq__34826_34958__$1,temp__4126__auto___34957,entity_34935,___$1,map__34821,map__34821__$1,game_chan){
return (function (p1__34813_SHARP_){
return cljs.core.dissoc.call(null,p1__34813_SHARP_,key_34965);
});})(seq__34826_34936,chunk__34827_34937,count__34828_34938,i__34829_34939,seq__34822_34931,chunk__34823_34932,count__34824_34933,i__34825_34934,vec__34833_34964,key_34965,map__34834_34966,map__34834_34967__$1,tween_34968,when_done_34969,initial_34970,progress_34971,easing_34972,duration_34973,target_34974,seq__34826_34958__$1,temp__4126__auto___34957,entity_34935,___$1,map__34821,map__34821__$1,game_chan))
);

if(cljs.core.truth_(when_done_34969)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_34969,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__34977 = cljs.core.next.call(null,seq__34826_34958__$1);
var G__34978 = null;
var G__34979 = (0);
var G__34980 = (0);
seq__34826_34936 = G__34977;
chunk__34827_34937 = G__34978;
count__34828_34938 = G__34979;
i__34829_34939 = G__34980;
continue;
}
} else {
}
}
break;
}

var G__34981 = seq__34822_34931;
var G__34982 = chunk__34823_34932;
var G__34983 = count__34824_34933;
var G__34984 = (i__34825_34934 + (1));
seq__34822_34931 = G__34981;
chunk__34823_34932 = G__34982;
count__34824_34933 = G__34983;
i__34825_34934 = G__34984;
continue;
} else {
var temp__4126__auto___34985 = cljs.core.seq.call(null,seq__34822_34931);
if(temp__4126__auto___34985){
var seq__34822_34986__$1 = temp__4126__auto___34985;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34822_34986__$1)){
var c__18901__auto___34987 = cljs.core.chunk_first.call(null,seq__34822_34986__$1);
var G__34988 = cljs.core.chunk_rest.call(null,seq__34822_34986__$1);
var G__34989 = c__18901__auto___34987;
var G__34990 = cljs.core.count.call(null,c__18901__auto___34987);
var G__34991 = (0);
seq__34822_34931 = G__34988;
chunk__34823_34932 = G__34989;
count__34824_34933 = G__34990;
i__34825_34934 = G__34991;
continue;
} else {
var entity_34992 = cljs.core.first.call(null,seq__34822_34986__$1);
var seq__34836_34993 = cljs.core.seq.call(null,cljs.core.get.call(null,entity_34992,new cljs.core.Keyword(null,"tweens","tweens",-1927735551)));
var chunk__34837_34994 = null;
var count__34838_34995 = (0);
var i__34839_34996 = (0);
while(true){
if((i__34839_34996 < count__34838_34995)){
var vec__34840_34997 = cljs.core._nth.call(null,chunk__34837_34994,i__34839_34996);
var key_34998 = cljs.core.nth.call(null,vec__34840_34997,(0),null);
var map__34841_34999 = cljs.core.nth.call(null,vec__34840_34997,(1),null);
var map__34841_35000__$1 = ((cljs.core.seq_QMARK_.call(null,map__34841_34999))?cljs.core.apply.call(null,cljs.core.hash_map,map__34841_34999):map__34841_34999);
var tween_35001 = map__34841_35000__$1;
var when_done_35002 = cljs.core.get.call(null,map__34841_35000__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_35003 = cljs.core.get.call(null,map__34841_35000__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_35004 = cljs.core.get.call(null,map__34841_35000__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_35005 = cljs.core.get.call(null,map__34841_35000__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_35006 = cljs.core.get.call(null,map__34841_35000__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_35007 = cljs.core.get.call(null,map__34841_35000__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_35004)){
om.core.update_BANG_.call(null,tween_35001,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_35001,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_34992,key_34998));
} else {
var easing_fn_35008 = (function (){var G__34842 = (((easing_35005 instanceof cljs.core.Keyword))?easing_35005.fqn:null);
switch (G__34842) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_35005)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_34992,key_34998,easing_fn_35008.call(null,initial_35003,target_35007,progress_35004,duration_35006));

om.core.transact_BANG_.call(null,tween_35001,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_35006,progress_35004)){
om.core.transact_BANG_.call(null,entity_34992,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__34836_34993,chunk__34837_34994,count__34838_34995,i__34839_34996,seq__34822_34931,chunk__34823_34932,count__34824_34933,i__34825_34934,vec__34840_34997,key_34998,map__34841_34999,map__34841_35000__$1,tween_35001,when_done_35002,initial_35003,progress_35004,easing_35005,duration_35006,target_35007,entity_34992,seq__34822_34986__$1,temp__4126__auto___34985,___$1,map__34821,map__34821__$1,game_chan){
return (function (p1__34813_SHARP_){
return cljs.core.dissoc.call(null,p1__34813_SHARP_,key_34998);
});})(seq__34836_34993,chunk__34837_34994,count__34838_34995,i__34839_34996,seq__34822_34931,chunk__34823_34932,count__34824_34933,i__34825_34934,vec__34840_34997,key_34998,map__34841_34999,map__34841_35000__$1,tween_35001,when_done_35002,initial_35003,progress_35004,easing_35005,duration_35006,target_35007,entity_34992,seq__34822_34986__$1,temp__4126__auto___34985,___$1,map__34821,map__34821__$1,game_chan))
);

if(cljs.core.truth_(when_done_35002)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_35002,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__35010 = seq__34836_34993;
var G__35011 = chunk__34837_34994;
var G__35012 = count__34838_34995;
var G__35013 = (i__34839_34996 + (1));
seq__34836_34993 = G__35010;
chunk__34837_34994 = G__35011;
count__34838_34995 = G__35012;
i__34839_34996 = G__35013;
continue;
} else {
var temp__4126__auto___35014__$1 = cljs.core.seq.call(null,seq__34836_34993);
if(temp__4126__auto___35014__$1){
var seq__34836_35015__$1 = temp__4126__auto___35014__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34836_35015__$1)){
var c__18901__auto___35016 = cljs.core.chunk_first.call(null,seq__34836_35015__$1);
var G__35017 = cljs.core.chunk_rest.call(null,seq__34836_35015__$1);
var G__35018 = c__18901__auto___35016;
var G__35019 = cljs.core.count.call(null,c__18901__auto___35016);
var G__35020 = (0);
seq__34836_34993 = G__35017;
chunk__34837_34994 = G__35018;
count__34838_34995 = G__35019;
i__34839_34996 = G__35020;
continue;
} else {
var vec__34843_35021 = cljs.core.first.call(null,seq__34836_35015__$1);
var key_35022 = cljs.core.nth.call(null,vec__34843_35021,(0),null);
var map__34844_35023 = cljs.core.nth.call(null,vec__34843_35021,(1),null);
var map__34844_35024__$1 = ((cljs.core.seq_QMARK_.call(null,map__34844_35023))?cljs.core.apply.call(null,cljs.core.hash_map,map__34844_35023):map__34844_35023);
var tween_35025 = map__34844_35024__$1;
var when_done_35026 = cljs.core.get.call(null,map__34844_35024__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_35027 = cljs.core.get.call(null,map__34844_35024__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_35028 = cljs.core.get.call(null,map__34844_35024__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_35029 = cljs.core.get.call(null,map__34844_35024__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_35030 = cljs.core.get.call(null,map__34844_35024__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_35031 = cljs.core.get.call(null,map__34844_35024__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_35028)){
om.core.update_BANG_.call(null,tween_35025,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_35025,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_34992,key_35022));
} else {
var easing_fn_35032 = (function (){var G__34845 = (((easing_35029 instanceof cljs.core.Keyword))?easing_35029.fqn:null);
switch (G__34845) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_35029)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_34992,key_35022,easing_fn_35032.call(null,initial_35027,target_35031,progress_35028,duration_35030));

om.core.transact_BANG_.call(null,tween_35025,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_35030,progress_35028)){
om.core.transact_BANG_.call(null,entity_34992,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__34836_34993,chunk__34837_34994,count__34838_34995,i__34839_34996,seq__34822_34931,chunk__34823_34932,count__34824_34933,i__34825_34934,vec__34843_35021,key_35022,map__34844_35023,map__34844_35024__$1,tween_35025,when_done_35026,initial_35027,progress_35028,easing_35029,duration_35030,target_35031,seq__34836_35015__$1,temp__4126__auto___35014__$1,entity_34992,seq__34822_34986__$1,temp__4126__auto___34985,___$1,map__34821,map__34821__$1,game_chan){
return (function (p1__34813_SHARP_){
return cljs.core.dissoc.call(null,p1__34813_SHARP_,key_35022);
});})(seq__34836_34993,chunk__34837_34994,count__34838_34995,i__34839_34996,seq__34822_34931,chunk__34823_34932,count__34824_34933,i__34825_34934,vec__34843_35021,key_35022,map__34844_35023,map__34844_35024__$1,tween_35025,when_done_35026,initial_35027,progress_35028,easing_35029,duration_35030,target_35031,seq__34836_35015__$1,temp__4126__auto___35014__$1,entity_34992,seq__34822_34986__$1,temp__4126__auto___34985,___$1,map__34821,map__34821__$1,game_chan))
);

if(cljs.core.truth_(when_done_35026)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_35026,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__35034 = cljs.core.next.call(null,seq__34836_35015__$1);
var G__35035 = null;
var G__35036 = (0);
var G__35037 = (0);
seq__34836_34993 = G__35034;
chunk__34837_34994 = G__35035;
count__34838_34995 = G__35036;
i__34839_34996 = G__35037;
continue;
}
} else {
}
}
break;
}

var G__35038 = cljs.core.next.call(null,seq__34822_34986__$1);
var G__35039 = null;
var G__35040 = (0);
var G__35041 = (0);
seq__34822_34931 = G__35038;
chunk__34823_34932 = G__35039;
count__34824_34933 = G__35040;
i__34825_34934 = G__35041;
continue;
}
} else {
}
}
break;
}

var seq__34846_35042 = cljs.core.seq.call(null,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)));
var chunk__34847_35043 = null;
var count__34848_35044 = (0);
var i__34849_35045 = (0);
while(true){
if((i__34849_35045 < count__34848_35044)){
var entity_35046 = cljs.core._nth.call(null,chunk__34847_35043,i__34849_35045);
var temp__4126__auto___35047 = new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(entity_35046);
if(cljs.core.truth_(temp__4126__auto___35047)){
var map__34850_35048 = temp__4126__auto___35047;
var map__34850_35049__$1 = ((cljs.core.seq_QMARK_.call(null,map__34850_35048))?cljs.core.apply.call(null,cljs.core.hash_map,map__34850_35048):map__34850_35048);
var animation_35050 = map__34850_35049__$1;
var current_35051 = cljs.core.get.call(null,map__34850_35049__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var progress_35052 = cljs.core.get.call(null,map__34850_35049__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var duration_35053 = cljs.core.get.call(null,map__34850_35049__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var frames_35054 = cljs.core.get.call(null,map__34850_35049__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.not.call(null,progress_35052)){
om.core.update_BANG_.call(null,animation_35050,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,animation_35050,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.first.call(null,frames_35054));
} else {
om.core.transact_BANG_.call(null,animation_35050,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_35053,progress_35052)){
om.core.update_BANG_.call(null,animation_35050,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

var current_index_35055 = cljs.core.to_array.call(null,frames_35054).indexOf(current_35051);
var next_index_35056 = ((cljs.core._EQ_.call(null,(cljs.core.count.call(null,frames_35054) - (1)),current_index_35055))?(0):(current_index_35055 + (1)));
om.core.update_BANG_.call(null,animation_35050,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.get.call(null,frames_35054,next_index_35056));
} else {
}
}
} else {
}

var G__35057 = seq__34846_35042;
var G__35058 = chunk__34847_35043;
var G__35059 = count__34848_35044;
var G__35060 = (i__34849_35045 + (1));
seq__34846_35042 = G__35057;
chunk__34847_35043 = G__35058;
count__34848_35044 = G__35059;
i__34849_35045 = G__35060;
continue;
} else {
var temp__4126__auto___35061 = cljs.core.seq.call(null,seq__34846_35042);
if(temp__4126__auto___35061){
var seq__34846_35062__$1 = temp__4126__auto___35061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34846_35062__$1)){
var c__18901__auto___35063 = cljs.core.chunk_first.call(null,seq__34846_35062__$1);
var G__35064 = cljs.core.chunk_rest.call(null,seq__34846_35062__$1);
var G__35065 = c__18901__auto___35063;
var G__35066 = cljs.core.count.call(null,c__18901__auto___35063);
var G__35067 = (0);
seq__34846_35042 = G__35064;
chunk__34847_35043 = G__35065;
count__34848_35044 = G__35066;
i__34849_35045 = G__35067;
continue;
} else {
var entity_35068 = cljs.core.first.call(null,seq__34846_35062__$1);
var temp__4126__auto___35069__$1 = new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(entity_35068);
if(cljs.core.truth_(temp__4126__auto___35069__$1)){
var map__34851_35070 = temp__4126__auto___35069__$1;
var map__34851_35071__$1 = ((cljs.core.seq_QMARK_.call(null,map__34851_35070))?cljs.core.apply.call(null,cljs.core.hash_map,map__34851_35070):map__34851_35070);
var animation_35072 = map__34851_35071__$1;
var current_35073 = cljs.core.get.call(null,map__34851_35071__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var progress_35074 = cljs.core.get.call(null,map__34851_35071__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var duration_35075 = cljs.core.get.call(null,map__34851_35071__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var frames_35076 = cljs.core.get.call(null,map__34851_35071__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.not.call(null,progress_35074)){
om.core.update_BANG_.call(null,animation_35072,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,animation_35072,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.first.call(null,frames_35076));
} else {
om.core.transact_BANG_.call(null,animation_35072,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_35075,progress_35074)){
om.core.update_BANG_.call(null,animation_35072,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

var current_index_35077 = cljs.core.to_array.call(null,frames_35076).indexOf(current_35073);
var next_index_35078 = ((cljs.core._EQ_.call(null,(cljs.core.count.call(null,frames_35076) - (1)),current_index_35077))?(0):(current_index_35077 + (1)));
om.core.update_BANG_.call(null,animation_35072,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.get.call(null,frames_35076,next_index_35078));
} else {
}
}
} else {
}

var G__35079 = cljs.core.next.call(null,seq__34846_35062__$1);
var G__35080 = null;
var G__35081 = (0);
var G__35082 = (0);
seq__34846_35042 = G__35079;
chunk__34847_35043 = G__35080;
count__34848_35044 = G__35081;
i__34849_35045 = G__35082;
continue;
}
} else {
}
}
break;
}

var entities_35083 = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403));
var lands_35084 = cljs.core.filter.call(null,((function (entities_35083,___$1,map__34821,map__34821__$1,game_chan){
return (function (p1__34814_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__34814_SHARP_));
});})(entities_35083,___$1,map__34821,map__34821__$1,game_chan))
,entities_35083);
var filled_35085 = cljs.core.filter.call(null,((function (entities_35083,lands_35084,___$1,map__34821,map__34821__$1,game_chan){
return (function (p1__34815_SHARP_){
return ((0) < new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(p1__34815_SHARP_));
});})(entities_35083,lands_35084,___$1,map__34821,map__34821__$1,game_chan))
,lands_35084);
var all_filled_35086 = cljs.core.every_QMARK_.call(null,((function (entities_35083,lands_35084,filled_35085,___$1,map__34821,map__34821__$1,game_chan){
return (function (p1__34816_SHARP_){
return ((0) < new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(p1__34816_SHARP_));
});})(entities_35083,lands_35084,filled_35085,___$1,map__34821,map__34821__$1,game_chan))
,lands_35084);
if(cljs.core.truth_(cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)))){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.count.call(null,filled_35085),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.count.call(null,lands_35084)], null));

if(all_filled_35086){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-win","game-win",-833284778),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
}
} else {
}

return cljs.core.apply.call(null,React.DOM.div,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.svg,{"onClick": ((function (___$1,map__34821,map__34821__$1,game_chan){
return (function (e){
var x = e.pageX;
var y = e.pageY;
if(((((200) < x)) && ((x < (400)))) && ((((30) < y)) && ((y < (200))))){
return cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate-tetrimino","rotate-tetrimino",-608997480),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return null;
}
});})(___$1,map__34821,map__34821__$1,game_chan))
, "onMouseUp": ((function (___$1,map__34821,map__34821__$1,game_chan){
return (function (e){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null),false);
});})(___$1,map__34821,map__34821__$1,game_chan))
, "onMouseDown": ((function (___$1,map__34821,map__34821__$1,game_chan){
return (function (e){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.pageX,new cljs.core.Keyword(null,"y","y",-1757859776),e.pageY], null));
});})(___$1,map__34821,map__34821__$1,game_chan))
, "onMouseMove": ((function (___$1,map__34821,map__34821__$1,game_chan){
return (function (e){
var x = e.pageX;
var y = e.pageY;
om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"current","current",-1088038603)], null)));

om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));

var new_selection_35087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,((y - romtoff.core.Y_OFFSET) - romtoff.core.Y_IN_OFFSET),romtoff.core.TILE_HEIGHT),cljs.core.quot.call(null,((x - romtoff.core.X_OFFSET) - romtoff.core.X_IN_OFFSET),romtoff.core.TILE_WIDTH)], null);
var current_selection_35088 = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
if(cljs.core.not_EQ_.call(null,new_selection_35087,current_selection_35088)){
om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),current_selection_35088);

om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_selection_35087);

if(cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prev","prev",-1597069226),current_selection_35088,new cljs.core.Keyword(null,"current","current",-1088038603),new_selection_35087], null)], null));
} else {
}
} else {
}

if(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null)))){
var map__34852 = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var map__34852__$1 = ((cljs.core.seq_QMARK_.call(null,map__34852))?cljs.core.apply.call(null,cljs.core.hash_map,map__34852):map__34852);
var prev = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var current = cljs.core.get.call(null,map__34852__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var dx = (current.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) - prev.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
var dy = (current.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) - prev.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)));
return null;
} else {
return null;
}
});})(___$1,map__34821,map__34821__$1,game_chan))
, "style": {"float": "left"}, "height": (1136), "width": (640)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.rect({"style": {"fill": "rgb(250, 250, 200)"}, "height": (1136), "width": (640), "y": (0), "x": (0)}),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.g,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (___$1,map__34821,map__34821__$1,game_chan){
return (function (p__34853){
var map__34854 = p__34853;
var map__34854__$1 = ((cljs.core.seq_QMARK_.call(null,map__34854))?cljs.core.apply.call(null,cljs.core.hash_map,map__34854):map__34854);
var entity = map__34854__$1;
var type = cljs.core.get.call(null,map__34854__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.core.build.call(null,romtoff.core.builder,entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919),game_chan], null)], null));
});})(___$1,map__34821,map__34821__$1,game_chan))
,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)))],null)))):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?(function (){var tetrimino = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var offset_x = (270);
var offset_y = (70);
var height = ((22) * cljs.core.count.call(null,tetrimino));
var width = ((22) * cljs.core.count.call(null,cljs.core.first.call(null,tetrimino)));
var iter__18870__auto__ = ((function (tetrimino,offset_x,offset_y,height,width,___$1,map__34821,map__34821__$1,game_chan){
return (function romtoff$core$iter__34855(s__34856){
return (new cljs.core.LazySeq(null,((function (tetrimino,offset_x,offset_y,height,width,___$1,map__34821,map__34821__$1,game_chan){
return (function (){
var s__34856__$1 = s__34856;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34856__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18866__auto__ = ((function (s__34856__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__34821,map__34821__$1,game_chan){
return (function romtoff$core$iter__34855_$_iter__34857(s__34858){
return (new cljs.core.LazySeq(null,((function (s__34856__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__34821,map__34821__$1,game_chan){
return (function (){
var s__34858__$1 = s__34858;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__34858__$1);
if(temp__4126__auto____$1){
var s__34858__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34858__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__34858__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__34860 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__34859 = (0);
while(true){
if((i__34859 < size__18869__auto__)){
var c = cljs.core._nth.call(null,c__18868__auto__,i__34859);
cljs.core.chunk_append.call(null,b__34860,((cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,tetrimino,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))))?React.DOM.rect({"style": {"fill": "rgb(250, 250, 200)"}, "height": (20), "width": (20), "y": (((65) + (((88) - height) / (2))) + ((22) * r)), "x": (((274) + (((88) - width) / (2))) + ((22) * c))}):null));

var G__35089 = (i__34859 + (1));
i__34859 = G__35089;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34860),romtoff$core$iter__34855_$_iter__34857.call(null,cljs.core.chunk_rest.call(null,s__34858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34860),null);
}
} else {
var c = cljs.core.first.call(null,s__34858__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,tetrimino,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))))?React.DOM.rect({"style": {"fill": "rgb(250, 250, 200)"}, "height": (20), "width": (20), "y": (((65) + (((88) - height) / (2))) + ((22) * r)), "x": (((274) + (((88) - width) / (2))) + ((22) * c))}):null),romtoff$core$iter__34855_$_iter__34857.call(null,cljs.core.rest.call(null,s__34858__$2)));
}
} else {
return null;
}
break;
}
});})(s__34856__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__34821,map__34821__$1,game_chan))
,null,null));
});})(s__34856__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__34821,map__34821__$1,game_chan))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,tetrimino)))));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,romtoff$core$iter__34855.call(null,cljs.core.rest.call(null,s__34856__$1)));
} else {
var G__35090 = cljs.core.rest.call(null,s__34856__$1);
s__34856__$1 = G__35090;
continue;
}
} else {
return null;
}
break;
}
});})(tetrimino,offset_x,offset_y,height,width,___$1,map__34821,map__34821__$1,game_chan))
,null,null));
});})(tetrimino,offset_x,offset_y,height,width,___$1,map__34821,map__34821__$1,game_chan))
;
return iter__18870__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,tetrimino)));
})():null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?React.DOM.text({"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (76), "x": (92)},"?"):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.text,{"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (161), "x": (92)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255))],null)))):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.text,{"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (161), "x": (500)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"current","current",-1088038603)], null))),cljs.core.str("/"),cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"target","target",253001721)], null)))].join('')],null)))):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.text,{"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (76), "x": (500)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780))],null)))):null),((!((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true)))?((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === false)?React.DOM.g({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__34821,map__34821__$1,game_chan){
return (function (___$2){
return cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-level","load-level",868893349),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [romtoff.core.level_1,romtoff.core.level_2,romtoff.core.level_3,romtoff.core.level_4,romtoff.core.level_5], null))], null)], null));
});})(___$1,map__34821,map__34821__$1,game_chan))
), "height": (1136), "width": (640), "dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image width=\""),cljs.core.str((640)),cljs.core.str("\" height=\""),cljs.core.str((1136)),cljs.core.str("\" x=\""),cljs.core.str((0)),cljs.core.str("\" y=\""),cljs.core.str((0)),cljs.core.str("\" xlink:href=\""),cljs.core.str("img/start.png"),cljs.core.str("\" />")].join('')}}):((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-won","game-won",-1358704823)) === true)?cljs.core.apply.call(null,React.DOM.g,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.g({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__34821,map__34821__$1,game_chan){
return (function (___$2){
return window.location.reload();
});})(___$1,map__34821,map__34821__$1,game_chan))
), "height": (1136), "width": (640), "dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image width=\""),cljs.core.str((640)),cljs.core.str("\" height=\""),cljs.core.str((1136)),cljs.core.str("\" x=\""),cljs.core.str((0)),cljs.core.str("\" y=\""),cljs.core.str((0)),cljs.core.str("\" xlink:href=\""),cljs.core.str("img/win.png"),cljs.core.str("\" />")].join('')}}),cljs.core.apply.call(null,React.DOM.text,{"fontSize": (50), "fontFamily": "Courier New", "fill": "white", "y": (900), "x": (250)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780))],null))))],null)))):React.DOM.g({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__34821,map__34821__$1,game_chan){
return (function (___$2){
return window.location.reload();
});})(___$1,map__34821,map__34821__$1,game_chan))
), "height": (1136), "width": (640), "dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image width=\""),cljs.core.str((640)),cljs.core.str("\" height=\""),cljs.core.str((1136)),cljs.core.str("\" x=\""),cljs.core.str((0)),cljs.core.str("\" y=\""),cljs.core.str((0)),cljs.core.str("\" xlink:href=\""),cljs.core.str("img/moves.png"),cljs.core.str("\" />")].join('')}}))):null)],null))))],null))));
});

romtoff.core.t34817.prototype.om$core$IDidMount$ = true;

romtoff.core.t34817.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
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
,(5000));
});

romtoff.core.t34817.prototype.om$core$IWillMount$ = true;

romtoff.core.t34817.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
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
var seq__34861 = cljs.core.seq.call(null,messages);
var chunk__34862 = null;
var count__34863 = (0);
var i__34864 = (0);
while(true){
if((i__34864 < count__34863)){
var vec__34865 = cljs.core._nth.call(null,chunk__34862,i__34864);
var type = cljs.core.nth.call(null,vec__34865,(0),null);
var contents = cljs.core.nth.call(null,vec__34865,(1),null);
var G__34866_35091 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34866_35091) {
case "increase-score":
var score_35093 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"score","score",-1963588780));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(contents) + score_35093));

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
var moves_35094 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"moves","moves",927465255));
var new_moves_35095 = (moves_35094 - (1));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),new_moves_35095);

if((new_moves_35095 === (0))){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-over","game-over",-607322695),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),cljs.core.rand_nth.call(null,romtoff.core.tetriminos));
}

break;
case "tetrimino-at":
var t_35096 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_35097 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(contents);
var tetrimino_blocks_coords_35098 = romtoff.core.tetrimino_coords.call(null,t_35096,c_35097);
if(cljs.core.every_QMARK_.call(null,((function (seq__34861,chunk__34862,count__34863,i__34864,tetrimino_blocks_coords_35098,t_35096,c_35097,G__34866_35091,vec__34865,type,contents,game_chan,___$1){
return (function (p1__34812_SHARP_){
return romtoff.core.in_bounds.call(null,p1__34812_SHARP_);
});})(seq__34861,chunk__34862,count__34863,i__34864,tetrimino_blocks_coords_35098,t_35096,c_35097,G__34866_35091,vec__34865,type,contents,game_chan,___$1))
,tetrimino_blocks_coords_35098)){
var seq__34867_35099 = cljs.core.seq.call(null,tetrimino_blocks_coords_35098);
var chunk__34868_35100 = null;
var count__34869_35101 = (0);
var i__34870_35102 = (0);
while(true){
if((i__34870_35102 < count__34869_35101)){
var vec__34871_35103 = cljs.core._nth.call(null,chunk__34868_35100,i__34870_35102);
var r_35104 = cljs.core.nth.call(null,vec__34871_35103,(0),null);
var c_35105__$1 = cljs.core.nth.call(null,vec__34871_35103,(1),null);
var tbc_35106 = vec__34871_35103;
var block_type_35107 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_35106));
var visual_35108 = (function (){var G__34872 = (((block_type_35107 instanceof cljs.core.Keyword))?block_type_35107.fqn:null);
switch (G__34872) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/1-1.png","img/2-1.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_35107)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_35098,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_35106)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_35104),cljs.core.str("-"),cljs.core.str(c_35105__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35105__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35104 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_35108)));

var G__35110 = seq__34867_35099;
var G__35111 = chunk__34868_35100;
var G__35112 = count__34869_35101;
var G__35113 = (i__34870_35102 + (1));
seq__34867_35099 = G__35110;
chunk__34868_35100 = G__35111;
count__34869_35101 = G__35112;
i__34870_35102 = G__35113;
continue;
} else {
var temp__4126__auto___35114 = cljs.core.seq.call(null,seq__34867_35099);
if(temp__4126__auto___35114){
var seq__34867_35115__$1 = temp__4126__auto___35114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34867_35115__$1)){
var c__18901__auto___35116 = cljs.core.chunk_first.call(null,seq__34867_35115__$1);
var G__35117 = cljs.core.chunk_rest.call(null,seq__34867_35115__$1);
var G__35118 = c__18901__auto___35116;
var G__35119 = cljs.core.count.call(null,c__18901__auto___35116);
var G__35120 = (0);
seq__34867_35099 = G__35117;
chunk__34868_35100 = G__35118;
count__34869_35101 = G__35119;
i__34870_35102 = G__35120;
continue;
} else {
var vec__34873_35121 = cljs.core.first.call(null,seq__34867_35115__$1);
var r_35122 = cljs.core.nth.call(null,vec__34873_35121,(0),null);
var c_35123__$1 = cljs.core.nth.call(null,vec__34873_35121,(1),null);
var tbc_35124 = vec__34873_35121;
var block_type_35125 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_35124));
var visual_35126 = (function (){var G__34874 = (((block_type_35125 instanceof cljs.core.Keyword))?block_type_35125.fqn:null);
switch (G__34874) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/1-1.png","img/2-1.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_35125)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_35098,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_35124)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_35122),cljs.core.str("-"),cljs.core.str(c_35123__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35123__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35122 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_35126)));

var G__35128 = cljs.core.next.call(null,seq__34867_35115__$1);
var G__35129 = null;
var G__35130 = (0);
var G__35131 = (0);
seq__34867_35099 = G__35128;
chunk__34868_35100 = G__35129;
count__34869_35101 = G__35130;
i__34870_35102 = G__35131;
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
var data_35132__$1 = om.core.get_props.call(null,self__.owner);
var entities_35133 = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(data_35132__$1);
var arrow_ids_35134 = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,((function (seq__34861,chunk__34862,count__34863,i__34864,data_35132__$1,entities_35133,G__34866_35091,vec__34865,type,contents,game_chan,___$1){
return (function (p1__34810_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__34810_SHARP_));
});})(seq__34861,chunk__34862,count__34863,i__34864,data_35132__$1,entities_35133,G__34866_35091,vec__34865,type,contents,game_chan,___$1))
,entities_35133)));
var no_arrows_35135 = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (seq__34861,chunk__34862,count__34863,i__34864,data_35132__$1,entities_35133,arrow_ids_35134,G__34866_35091,vec__34865,type,contents,game_chan,___$1){
return (function (p1__34811_SHARP_){
return cljs.core.contains_QMARK_.call(null,arrow_ids_35134,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34811_SHARP_));
});})(seq__34861,chunk__34862,count__34863,i__34864,data_35132__$1,entities_35133,arrow_ids_35134,G__34866_35091,vec__34865,type,contents,game_chan,___$1))
,entities_35133));
om.core.update_BANG_.call(null,data_35132__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),no_arrows_35135);

break;
case "selection":
var vec__34875_35136 = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(contents);
var r_35137 = cljs.core.nth.call(null,vec__34875_35136,(0),null);
var c_35138 = cljs.core.nth.call(null,vec__34875_35136,(1),null);
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tetrimino-at","tetrimino-at",1514048990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_35137,c_35138], null)], null)], null));

break;
case "load-level":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(0));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),(15));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),false);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.PersistentVector.EMPTY);

var level_35139 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(contents);
var seq__34876_35140 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,level_35139)));
var chunk__34881_35141 = null;
var count__34882_35142 = (0);
var i__34883_35143 = (0);
while(true){
if((i__34883_35143 < count__34882_35142)){
var r_35144 = cljs.core._nth.call(null,chunk__34881_35141,i__34883_35143);
var seq__34884_35145 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_35139))));
var chunk__34885_35146 = null;
var count__34886_35147 = (0);
var i__34887_35148 = (0);
while(true){
if((i__34887_35148 < count__34886_35147)){
var c_35149 = cljs.core._nth.call(null,chunk__34885_35146,i__34887_35148);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_35144,c_35149,level_35139))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35144,c_35149),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35149 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35144 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35144,c_35149),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35149 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35144 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_35139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_35144,c_35149], null)))], null)));
}

var G__35150 = seq__34884_35145;
var G__35151 = chunk__34885_35146;
var G__35152 = count__34886_35147;
var G__35153 = (i__34887_35148 + (1));
seq__34884_35145 = G__35150;
chunk__34885_35146 = G__35151;
count__34886_35147 = G__35152;
i__34887_35148 = G__35153;
continue;
} else {
var temp__4126__auto___35154 = cljs.core.seq.call(null,seq__34884_35145);
if(temp__4126__auto___35154){
var seq__34884_35155__$1 = temp__4126__auto___35154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34884_35155__$1)){
var c__18901__auto___35156 = cljs.core.chunk_first.call(null,seq__34884_35155__$1);
var G__35157 = cljs.core.chunk_rest.call(null,seq__34884_35155__$1);
var G__35158 = c__18901__auto___35156;
var G__35159 = cljs.core.count.call(null,c__18901__auto___35156);
var G__35160 = (0);
seq__34884_35145 = G__35157;
chunk__34885_35146 = G__35158;
count__34886_35147 = G__35159;
i__34887_35148 = G__35160;
continue;
} else {
var c_35161 = cljs.core.first.call(null,seq__34884_35155__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_35144,c_35161,level_35139))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35144,c_35161),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35161 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35144 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35144,c_35161),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35161 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35144 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_35139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_35144,c_35161], null)))], null)));
}

var G__35162 = cljs.core.next.call(null,seq__34884_35155__$1);
var G__35163 = null;
var G__35164 = (0);
var G__35165 = (0);
seq__34884_35145 = G__35162;
chunk__34885_35146 = G__35163;
count__34886_35147 = G__35164;
i__34887_35148 = G__35165;
continue;
}
} else {
}
}
break;
}

var G__35166 = seq__34876_35140;
var G__35167 = chunk__34881_35141;
var G__35168 = count__34882_35142;
var G__35169 = (i__34883_35143 + (1));
seq__34876_35140 = G__35166;
chunk__34881_35141 = G__35167;
count__34882_35142 = G__35168;
i__34883_35143 = G__35169;
continue;
} else {
var temp__4126__auto___35170 = cljs.core.seq.call(null,seq__34876_35140);
if(temp__4126__auto___35170){
var seq__34876_35171__$1 = temp__4126__auto___35170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34876_35171__$1)){
var c__18901__auto___35172 = cljs.core.chunk_first.call(null,seq__34876_35171__$1);
var G__35173 = cljs.core.chunk_rest.call(null,seq__34876_35171__$1);
var G__35174 = c__18901__auto___35172;
var G__35175 = cljs.core.count.call(null,c__18901__auto___35172);
var G__35176 = (0);
seq__34876_35140 = G__35173;
chunk__34881_35141 = G__35174;
count__34882_35142 = G__35175;
i__34883_35143 = G__35176;
continue;
} else {
var r_35177 = cljs.core.first.call(null,seq__34876_35171__$1);
var seq__34877_35178 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_35139))));
var chunk__34878_35179 = null;
var count__34879_35180 = (0);
var i__34880_35181 = (0);
while(true){
if((i__34880_35181 < count__34879_35180)){
var c_35182 = cljs.core._nth.call(null,chunk__34878_35179,i__34880_35181);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_35177,c_35182,level_35139))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35177,c_35182),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35182 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35177 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35177,c_35182),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35182 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35177 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_35139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_35177,c_35182], null)))], null)));
}

var G__35183 = seq__34877_35178;
var G__35184 = chunk__34878_35179;
var G__35185 = count__34879_35180;
var G__35186 = (i__34880_35181 + (1));
seq__34877_35178 = G__35183;
chunk__34878_35179 = G__35184;
count__34879_35180 = G__35185;
i__34880_35181 = G__35186;
continue;
} else {
var temp__4126__auto___35187__$1 = cljs.core.seq.call(null,seq__34877_35178);
if(temp__4126__auto___35187__$1){
var seq__34877_35188__$1 = temp__4126__auto___35187__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34877_35188__$1)){
var c__18901__auto___35189 = cljs.core.chunk_first.call(null,seq__34877_35188__$1);
var G__35190 = cljs.core.chunk_rest.call(null,seq__34877_35188__$1);
var G__35191 = c__18901__auto___35189;
var G__35192 = cljs.core.count.call(null,c__18901__auto___35189);
var G__35193 = (0);
seq__34877_35178 = G__35190;
chunk__34878_35179 = G__35191;
count__34879_35180 = G__35192;
i__34880_35181 = G__35193;
continue;
} else {
var c_35194 = cljs.core.first.call(null,seq__34877_35188__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_35177,c_35194,level_35139))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35177,c_35194),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35194 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35177 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35177,c_35194),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35194 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35177 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_35139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_35177,c_35194], null)))], null)));
}

var G__35195 = cljs.core.next.call(null,seq__34877_35188__$1);
var G__35196 = null;
var G__35197 = (0);
var G__35198 = (0);
seq__34877_35178 = G__35195;
chunk__34878_35179 = G__35196;
count__34879_35180 = G__35197;
i__34880_35181 = G__35198;
continue;
}
} else {
}
}
break;
}

var G__35199 = cljs.core.next.call(null,seq__34876_35171__$1);
var G__35200 = null;
var G__35201 = (0);
var G__35202 = (0);
seq__34876_35140 = G__35199;
chunk__34881_35141 = G__35200;
count__34882_35142 = G__35201;
i__34883_35143 = G__35202;
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

var G__35203 = seq__34861;
var G__35204 = chunk__34862;
var G__35205 = count__34863;
var G__35206 = (i__34864 + (1));
seq__34861 = G__35203;
chunk__34862 = G__35204;
count__34863 = G__35205;
i__34864 = G__35206;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34861);
if(temp__4126__auto__){
var seq__34861__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34861__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__34861__$1);
var G__35207 = cljs.core.chunk_rest.call(null,seq__34861__$1);
var G__35208 = c__18901__auto__;
var G__35209 = cljs.core.count.call(null,c__18901__auto__);
var G__35210 = (0);
seq__34861 = G__35207;
chunk__34862 = G__35208;
count__34863 = G__35209;
i__34864 = G__35210;
continue;
} else {
var vec__34888 = cljs.core.first.call(null,seq__34861__$1);
var type = cljs.core.nth.call(null,vec__34888,(0),null);
var contents = cljs.core.nth.call(null,vec__34888,(1),null);
var G__34889_35211 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34889_35211) {
case "increase-score":
var score_35213 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"score","score",-1963588780));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(contents) + score_35213));

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
var moves_35214 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"moves","moves",927465255));
var new_moves_35215 = (moves_35214 - (1));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),new_moves_35215);

if((new_moves_35215 === (0))){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-over","game-over",-607322695),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),cljs.core.rand_nth.call(null,romtoff.core.tetriminos));
}

break;
case "tetrimino-at":
var t_35216 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_35217 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(contents);
var tetrimino_blocks_coords_35218 = romtoff.core.tetrimino_coords.call(null,t_35216,c_35217);
if(cljs.core.every_QMARK_.call(null,((function (seq__34861,chunk__34862,count__34863,i__34864,tetrimino_blocks_coords_35218,t_35216,c_35217,G__34889_35211,vec__34888,type,contents,seq__34861__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__34812_SHARP_){
return romtoff.core.in_bounds.call(null,p1__34812_SHARP_);
});})(seq__34861,chunk__34862,count__34863,i__34864,tetrimino_blocks_coords_35218,t_35216,c_35217,G__34889_35211,vec__34888,type,contents,seq__34861__$1,temp__4126__auto__,game_chan,___$1))
,tetrimino_blocks_coords_35218)){
var seq__34890_35219 = cljs.core.seq.call(null,tetrimino_blocks_coords_35218);
var chunk__34891_35220 = null;
var count__34892_35221 = (0);
var i__34893_35222 = (0);
while(true){
if((i__34893_35222 < count__34892_35221)){
var vec__34894_35223 = cljs.core._nth.call(null,chunk__34891_35220,i__34893_35222);
var r_35224 = cljs.core.nth.call(null,vec__34894_35223,(0),null);
var c_35225__$1 = cljs.core.nth.call(null,vec__34894_35223,(1),null);
var tbc_35226 = vec__34894_35223;
var block_type_35227 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_35226));
var visual_35228 = (function (){var G__34895 = (((block_type_35227 instanceof cljs.core.Keyword))?block_type_35227.fqn:null);
switch (G__34895) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/1-1.png","img/2-1.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_35227)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_35218,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_35226)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_35224),cljs.core.str("-"),cljs.core.str(c_35225__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35225__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35224 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_35228)));

var G__35230 = seq__34890_35219;
var G__35231 = chunk__34891_35220;
var G__35232 = count__34892_35221;
var G__35233 = (i__34893_35222 + (1));
seq__34890_35219 = G__35230;
chunk__34891_35220 = G__35231;
count__34892_35221 = G__35232;
i__34893_35222 = G__35233;
continue;
} else {
var temp__4126__auto___35234__$1 = cljs.core.seq.call(null,seq__34890_35219);
if(temp__4126__auto___35234__$1){
var seq__34890_35235__$1 = temp__4126__auto___35234__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34890_35235__$1)){
var c__18901__auto___35236 = cljs.core.chunk_first.call(null,seq__34890_35235__$1);
var G__35237 = cljs.core.chunk_rest.call(null,seq__34890_35235__$1);
var G__35238 = c__18901__auto___35236;
var G__35239 = cljs.core.count.call(null,c__18901__auto___35236);
var G__35240 = (0);
seq__34890_35219 = G__35237;
chunk__34891_35220 = G__35238;
count__34892_35221 = G__35239;
i__34893_35222 = G__35240;
continue;
} else {
var vec__34896_35241 = cljs.core.first.call(null,seq__34890_35235__$1);
var r_35242 = cljs.core.nth.call(null,vec__34896_35241,(0),null);
var c_35243__$1 = cljs.core.nth.call(null,vec__34896_35241,(1),null);
var tbc_35244 = vec__34896_35241;
var block_type_35245 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_35244));
var visual_35246 = (function (){var G__34897 = (((block_type_35245 instanceof cljs.core.Keyword))?block_type_35245.fqn:null);
switch (G__34897) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/1-1.png","img/2-1.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_35245)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_35218,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_35244)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_35242),cljs.core.str("-"),cljs.core.str(c_35243__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35243__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35242 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_35246)));

var G__35248 = cljs.core.next.call(null,seq__34890_35235__$1);
var G__35249 = null;
var G__35250 = (0);
var G__35251 = (0);
seq__34890_35219 = G__35248;
chunk__34891_35220 = G__35249;
count__34892_35221 = G__35250;
i__34893_35222 = G__35251;
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
var data_35252__$1 = om.core.get_props.call(null,self__.owner);
var entities_35253 = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(data_35252__$1);
var arrow_ids_35254 = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,((function (seq__34861,chunk__34862,count__34863,i__34864,data_35252__$1,entities_35253,G__34889_35211,vec__34888,type,contents,seq__34861__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__34810_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__34810_SHARP_));
});})(seq__34861,chunk__34862,count__34863,i__34864,data_35252__$1,entities_35253,G__34889_35211,vec__34888,type,contents,seq__34861__$1,temp__4126__auto__,game_chan,___$1))
,entities_35253)));
var no_arrows_35255 = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (seq__34861,chunk__34862,count__34863,i__34864,data_35252__$1,entities_35253,arrow_ids_35254,G__34889_35211,vec__34888,type,contents,seq__34861__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__34811_SHARP_){
return cljs.core.contains_QMARK_.call(null,arrow_ids_35254,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34811_SHARP_));
});})(seq__34861,chunk__34862,count__34863,i__34864,data_35252__$1,entities_35253,arrow_ids_35254,G__34889_35211,vec__34888,type,contents,seq__34861__$1,temp__4126__auto__,game_chan,___$1))
,entities_35253));
om.core.update_BANG_.call(null,data_35252__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),no_arrows_35255);

break;
case "selection":
var vec__34898_35256 = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(contents);
var r_35257 = cljs.core.nth.call(null,vec__34898_35256,(0),null);
var c_35258 = cljs.core.nth.call(null,vec__34898_35256,(1),null);
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tetrimino-at","tetrimino-at",1514048990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_35257,c_35258], null)], null)], null));

break;
case "load-level":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(0));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),(15));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),false);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.PersistentVector.EMPTY);

var level_35259 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(contents);
var seq__34899_35260 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,level_35259)));
var chunk__34904_35261 = null;
var count__34905_35262 = (0);
var i__34906_35263 = (0);
while(true){
if((i__34906_35263 < count__34905_35262)){
var r_35264 = cljs.core._nth.call(null,chunk__34904_35261,i__34906_35263);
var seq__34907_35265 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_35259))));
var chunk__34908_35266 = null;
var count__34909_35267 = (0);
var i__34910_35268 = (0);
while(true){
if((i__34910_35268 < count__34909_35267)){
var c_35269 = cljs.core._nth.call(null,chunk__34908_35266,i__34910_35268);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_35264,c_35269,level_35259))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35264,c_35269),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35269 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35264 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35264,c_35269),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35269 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35264 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_35259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_35264,c_35269], null)))], null)));
}

var G__35270 = seq__34907_35265;
var G__35271 = chunk__34908_35266;
var G__35272 = count__34909_35267;
var G__35273 = (i__34910_35268 + (1));
seq__34907_35265 = G__35270;
chunk__34908_35266 = G__35271;
count__34909_35267 = G__35272;
i__34910_35268 = G__35273;
continue;
} else {
var temp__4126__auto___35274__$1 = cljs.core.seq.call(null,seq__34907_35265);
if(temp__4126__auto___35274__$1){
var seq__34907_35275__$1 = temp__4126__auto___35274__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34907_35275__$1)){
var c__18901__auto___35276 = cljs.core.chunk_first.call(null,seq__34907_35275__$1);
var G__35277 = cljs.core.chunk_rest.call(null,seq__34907_35275__$1);
var G__35278 = c__18901__auto___35276;
var G__35279 = cljs.core.count.call(null,c__18901__auto___35276);
var G__35280 = (0);
seq__34907_35265 = G__35277;
chunk__34908_35266 = G__35278;
count__34909_35267 = G__35279;
i__34910_35268 = G__35280;
continue;
} else {
var c_35281 = cljs.core.first.call(null,seq__34907_35275__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_35264,c_35281,level_35259))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35264,c_35281),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35281 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35264 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35264,c_35281),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35281 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35264 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_35259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_35264,c_35281], null)))], null)));
}

var G__35282 = cljs.core.next.call(null,seq__34907_35275__$1);
var G__35283 = null;
var G__35284 = (0);
var G__35285 = (0);
seq__34907_35265 = G__35282;
chunk__34908_35266 = G__35283;
count__34909_35267 = G__35284;
i__34910_35268 = G__35285;
continue;
}
} else {
}
}
break;
}

var G__35286 = seq__34899_35260;
var G__35287 = chunk__34904_35261;
var G__35288 = count__34905_35262;
var G__35289 = (i__34906_35263 + (1));
seq__34899_35260 = G__35286;
chunk__34904_35261 = G__35287;
count__34905_35262 = G__35288;
i__34906_35263 = G__35289;
continue;
} else {
var temp__4126__auto___35290__$1 = cljs.core.seq.call(null,seq__34899_35260);
if(temp__4126__auto___35290__$1){
var seq__34899_35291__$1 = temp__4126__auto___35290__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34899_35291__$1)){
var c__18901__auto___35292 = cljs.core.chunk_first.call(null,seq__34899_35291__$1);
var G__35293 = cljs.core.chunk_rest.call(null,seq__34899_35291__$1);
var G__35294 = c__18901__auto___35292;
var G__35295 = cljs.core.count.call(null,c__18901__auto___35292);
var G__35296 = (0);
seq__34899_35260 = G__35293;
chunk__34904_35261 = G__35294;
count__34905_35262 = G__35295;
i__34906_35263 = G__35296;
continue;
} else {
var r_35297 = cljs.core.first.call(null,seq__34899_35291__$1);
var seq__34900_35298 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_35259))));
var chunk__34901_35299 = null;
var count__34902_35300 = (0);
var i__34903_35301 = (0);
while(true){
if((i__34903_35301 < count__34902_35300)){
var c_35302 = cljs.core._nth.call(null,chunk__34901_35299,i__34903_35301);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_35297,c_35302,level_35259))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35297,c_35302),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35302 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35297 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35297,c_35302),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35302 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35297 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_35259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_35297,c_35302], null)))], null)));
}

var G__35303 = seq__34900_35298;
var G__35304 = chunk__34901_35299;
var G__35305 = count__34902_35300;
var G__35306 = (i__34903_35301 + (1));
seq__34900_35298 = G__35303;
chunk__34901_35299 = G__35304;
count__34902_35300 = G__35305;
i__34903_35301 = G__35306;
continue;
} else {
var temp__4126__auto___35307__$2 = cljs.core.seq.call(null,seq__34900_35298);
if(temp__4126__auto___35307__$2){
var seq__34900_35308__$1 = temp__4126__auto___35307__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34900_35308__$1)){
var c__18901__auto___35309 = cljs.core.chunk_first.call(null,seq__34900_35308__$1);
var G__35310 = cljs.core.chunk_rest.call(null,seq__34900_35308__$1);
var G__35311 = c__18901__auto___35309;
var G__35312 = cljs.core.count.call(null,c__18901__auto___35309);
var G__35313 = (0);
seq__34900_35298 = G__35310;
chunk__34901_35299 = G__35311;
count__34902_35300 = G__35312;
i__34903_35301 = G__35313;
continue;
} else {
var c_35314 = cljs.core.first.call(null,seq__34900_35308__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_35297,c_35314,level_35259))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35297,c_35314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35314 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35297 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_35297,c_35314),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_35314 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_35297 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_35259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_35297,c_35314], null)))], null)));
}

var G__35315 = cljs.core.next.call(null,seq__34900_35308__$1);
var G__35316 = null;
var G__35317 = (0);
var G__35318 = (0);
seq__34900_35298 = G__35315;
chunk__34901_35299 = G__35316;
count__34902_35300 = G__35317;
i__34903_35301 = G__35318;
continue;
}
} else {
}
}
break;
}

var G__35319 = cljs.core.next.call(null,seq__34899_35291__$1);
var G__35320 = null;
var G__35321 = (0);
var G__35322 = (0);
seq__34899_35260 = G__35319;
chunk__34904_35261 = G__35320;
count__34905_35262 = G__35321;
i__34906_35263 = G__35322;
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

var G__35323 = cljs.core.next.call(null,seq__34861__$1);
var G__35324 = null;
var G__35325 = (0);
var G__35326 = (0);
seq__34861 = G__35323;
chunk__34862 = G__35324;
count__34863 = G__35325;
i__34864 = G__35326;
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
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__,handler,game_chan,___$1){
return (function (){
var f__24322__auto__ = (function (){var switch__24259__auto__ = ((function (c__24321__auto__,handler,game_chan,___$1){
return (function (state_34919){
var state_val_34920 = (state_34919[(1)]);
if((state_val_34920 === (4))){
var inst_34913 = (state_34919[(2)]);
var inst_34914 = handler.call(null,inst_34913);
var state_34919__$1 = (function (){var statearr_34921 = state_34919;
(statearr_34921[(7)] = inst_34914);

return statearr_34921;
})();
var statearr_34922_35327 = state_34919__$1;
(statearr_34922_35327[(2)] = null);

(statearr_34922_35327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (3))){
var inst_34917 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34919__$1,inst_34917);
} else {
if((state_val_34920 === (2))){
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34919__$1,(4),game_chan);
} else {
if((state_val_34920 === (1))){
var state_34919__$1 = state_34919;
var statearr_34923_35328 = state_34919__$1;
(statearr_34923_35328[(2)] = null);

(statearr_34923_35328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__24321__auto__,handler,game_chan,___$1))
;
return ((function (switch__24259__auto__,c__24321__auto__,handler,game_chan,___$1){
return (function() {
var romtoff$core$state_machine__24260__auto__ = null;
var romtoff$core$state_machine__24260__auto____0 = (function (){
var statearr_34927 = [null,null,null,null,null,null,null,null];
(statearr_34927[(0)] = romtoff$core$state_machine__24260__auto__);

(statearr_34927[(1)] = (1));

return statearr_34927;
});
var romtoff$core$state_machine__24260__auto____1 = (function (state_34919){
while(true){
var ret_value__24261__auto__ = (function (){try{while(true){
var result__24262__auto__ = switch__24259__auto__.call(null,state_34919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24262__auto__;
}
break;
}
}catch (e34928){if((e34928 instanceof Object)){
var ex__24263__auto__ = e34928;
var statearr_34929_35329 = state_34919;
(statearr_34929_35329[(5)] = ex__24263__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35330 = state_34919;
state_34919 = G__35330;
continue;
} else {
return ret_value__24261__auto__;
}
break;
}
});
romtoff$core$state_machine__24260__auto__ = function(state_34919){
switch(arguments.length){
case 0:
return romtoff$core$state_machine__24260__auto____0.call(this);
case 1:
return romtoff$core$state_machine__24260__auto____1.call(this,state_34919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$state_machine__24260__auto____0;
romtoff$core$state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$state_machine__24260__auto____1;
return romtoff$core$state_machine__24260__auto__;
})()
;})(switch__24259__auto__,c__24321__auto__,handler,game_chan,___$1))
})();
var state__24323__auto__ = (function (){var statearr_34930 = f__24322__auto__.call(null);
(statearr_34930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24321__auto__);

return statearr_34930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,handler,game_chan,___$1))
);

return c__24321__auto__;
});

romtoff.core.t34817.prototype.om$core$IInitState$ = true;

romtoff.core.t34817.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919),romtoff.core.game_chan], null);
});

romtoff.core.t34817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34819){
var self__ = this;
var _34819__$1 = this;
return self__.meta34818;
});

romtoff.core.t34817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34819,meta34818__$1){
var self__ = this;
var _34819__$1 = this;
return (new romtoff.core.t34817(self__.owner,self__.data,meta34818__$1));
});

romtoff.core.t34817.cljs$lang$type = true;

romtoff.core.t34817.cljs$lang$ctorStr = "romtoff.core/t34817";

romtoff.core.t34817.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"romtoff.core/t34817");
});

romtoff.core.__GT_t34817 = (function romtoff$core$__GT_t34817(owner__$1,data__$1,meta34818){
return (new romtoff.core.t34817(owner__$1,data__$1,meta34818));
});

}

return (new romtoff.core.t34817(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),romtoff.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
romtoff.core.on_js_reload = (function romtoff$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1431757016966