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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__42846_SHARP_){
return cljs.core._EQ_.call(null,entity_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__42846_SHARP_));
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
romtoff.core.in_bounds = (function romtoff$core$in_bounds(p__42847){
var vec__42849 = p__42847;
var r = cljs.core.nth.call(null,vec__42849,(0),null);
var c = cljs.core.nth.call(null,vec__42849,(1),null);
return (((-1) < r)) && (((-1) < c)) && ((r < romtoff.core.ROWS)) && ((c < romtoff.core.COLS));
});
romtoff.core.covered = (function romtoff$core$covered(p__42850){
var vec__42852 = p__42850;
var r = cljs.core.nth.call(null,vec__42852,(0),null);
var c = cljs.core.nth.call(null,vec__42852,(1),null);
return cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clouds","clouds",-632461223),r,c], null)));
});
romtoff.core.tetrimino_coords = (function romtoff$core$tetrimino_coords(t,p__42853){
var vec__42863 = p__42853;
var x = cljs.core.nth.call(null,vec__42863,(0),null);
var y = cljs.core.nth.call(null,vec__42863,(1),null);
var all_tiles = (function (){var iter__18870__auto__ = ((function (vec__42863,x,y){
return (function romtoff$core$tetrimino_coords_$_iter__42864(s__42865){
return (new cljs.core.LazySeq(null,((function (vec__42863,x,y){
return (function (){
var s__42865__$1 = s__42865;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42865__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18866__auto__ = ((function (s__42865__$1,r,xs__4624__auto__,temp__4126__auto__,vec__42863,x,y){
return (function romtoff$core$tetrimino_coords_$_iter__42864_$_iter__42866(s__42867){
return (new cljs.core.LazySeq(null,((function (s__42865__$1,r,xs__4624__auto__,temp__4126__auto__,vec__42863,x,y){
return (function (){
var s__42867__$1 = s__42867;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__42867__$1);
if(temp__4126__auto____$1){
var s__42867__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42867__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__42867__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__42869 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__42868 = (0);
while(true){
if((i__42868 < size__18869__auto__)){
var c = cljs.core._nth.call(null,c__18868__auto__,i__42868);
cljs.core.chunk_append.call(null,b__42869,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__42872 = (i__42868 + (1));
i__42868 = G__42872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42869),romtoff$core$tetrimino_coords_$_iter__42864_$_iter__42866.call(null,cljs.core.chunk_rest.call(null,s__42867__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42869),null);
}
} else {
var c = cljs.core.first.call(null,s__42867__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),romtoff$core$tetrimino_coords_$_iter__42864_$_iter__42866.call(null,cljs.core.rest.call(null,s__42867__$2)));
}
} else {
return null;
}
break;
}
});})(s__42865__$1,r,xs__4624__auto__,temp__4126__auto__,vec__42863,x,y))
,null,null));
});})(s__42865__$1,r,xs__4624__auto__,temp__4126__auto__,vec__42863,x,y))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)))));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,romtoff$core$tetrimino_coords_$_iter__42864.call(null,cljs.core.rest.call(null,s__42865__$1)));
} else {
var G__42873 = cljs.core.rest.call(null,s__42865__$1);
s__42865__$1 = G__42873;
continue;
}
} else {
return null;
}
break;
}
});})(vec__42863,x,y))
,null,null));
});})(vec__42863,x,y))
;
return iter__18870__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,t)));
})();
var x_offset = (- cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,t)).indexOf((1)));
return cljs.core.reduce.call(null,((function (all_tiles,x_offset,vec__42863,x,y){
return (function (acc,p__42870){
var vec__42871 = p__42870;
var r = cljs.core.nth.call(null,vec__42871,(0),null);
var c = cljs.core.nth.call(null,vec__42871,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)))){
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + r),((y + c) + x_offset)], null));
} else {
return acc;
}
});})(all_tiles,x_offset,vec__42863,x,y))
,cljs.core.PersistentVector.EMPTY,all_tiles);
});
romtoff.core.block_id = (function romtoff$core$block_id(r,c){
return cljs.core.keyword.call(null,[cljs.core.str("block-"),cljs.core.str(r),cljs.core.str("-"),cljs.core.str(c)].join(''));
});
romtoff.core.block_coords = (function romtoff$core$block_coords(block_id){
return cljs.core.vec.call(null,cljs.core.map.call(null,parseInt,cljs.core.subvec.call(null,clojure.string.split.call(null,cljs.core.name.call(null,block_id),"-"),(1))));
});
romtoff.core.block_by_coords = (function romtoff$core$block_by_coords(p__42874){
var vec__42876 = p__42874;
var x = cljs.core.nth.call(null,vec__42876,(0),null);
var y = cljs.core.nth.call(null,vec__42876,(1),null);
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
}),cljs.core.PersistentVector.EMPTY,(function (){var iter__18870__auto__ = (function romtoff$core$get_uncovered_coords_$_iter__42883(s__42884){
return (new cljs.core.LazySeq(null,(function (){
var s__42884__$1 = s__42884;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42884__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18866__auto__ = ((function (s__42884__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function romtoff$core$get_uncovered_coords_$_iter__42883_$_iter__42885(s__42886){
return (new cljs.core.LazySeq(null,((function (s__42884__$1,r,xs__4624__auto__,temp__4126__auto__){
return (function (){
var s__42886__$1 = s__42886;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__42886__$1);
if(temp__4126__auto____$1){
var s__42886__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42886__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__42886__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__42888 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__42887 = (0);
while(true){
if((i__42887 < size__18869__auto__)){
var c = cljs.core._nth.call(null,c__18868__auto__,i__42887);
cljs.core.chunk_append.call(null,b__42888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null));

var G__42889 = (i__42887 + (1));
i__42887 = G__42889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42888),romtoff$core$get_uncovered_coords_$_iter__42883_$_iter__42885.call(null,cljs.core.chunk_rest.call(null,s__42886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42888),null);
}
} else {
var c = cljs.core.first.call(null,s__42886__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),romtoff$core$get_uncovered_coords_$_iter__42883_$_iter__42885.call(null,cljs.core.rest.call(null,s__42886__$2)));
}
} else {
return null;
}
break;
}
});})(s__42884__$1,r,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__42884__$1,r,xs__4624__auto__,temp__4126__auto__))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,cljs.core.range.call(null,romtoff.core.COLS)));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,romtoff$core$get_uncovered_coords_$_iter__42883.call(null,cljs.core.rest.call(null,s__42884__$1)));
} else {
var G__42890 = cljs.core.rest.call(null,s__42884__$1);
s__42884__$1 = G__42890;
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
romtoff.core.is_near = (function romtoff$core$is_near(p__42891,p__42892){
var vec__42895 = p__42891;
var r1 = cljs.core.nth.call(null,vec__42895,(0),null);
var c1 = cljs.core.nth.call(null,vec__42895,(1),null);
var vec__42896 = p__42892;
var r2 = cljs.core.nth.call(null,vec__42896,(0),null);
var c2 = cljs.core.nth.call(null,vec__42896,(1),null);
return ((cljs.core._EQ_.call(null,c1,c2)) && (cljs.core._EQ_.call(null,r1,(r2 - (1))))) || ((cljs.core._EQ_.call(null,c1,c2)) && (cljs.core._EQ_.call(null,r1,(r2 + (1))))) || ((cljs.core._EQ_.call(null,r1,r2)) && (cljs.core._EQ_.call(null,c1,(c2 - (1))))) || ((cljs.core._EQ_.call(null,r1,r2)) && (cljs.core._EQ_.call(null,c1,(c2 + (1)))));
});
romtoff.core.rotate_left = (function romtoff$core$rotate_left(t){
return cljs.core.reduce.call(null,(function (acc,index){
return cljs.core.conj.call(null,acc,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__42897_SHARP_){
return cljs.core.get.call(null,p1__42897_SHARP_,index);
}),t)));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,t)))));
});
romtoff.core.build_sprite = (function romtoff$core$build_sprite(p__42900,owner,event_handlers,message_handlers){
var map__43029 = p__42900;
var map__43029__$1 = ((cljs.core.seq_QMARK_.call(null,map__43029))?cljs.core.apply.call(null,cljs.core.hash_map,map__43029):map__43029);
var data = map__43029__$1;
var width = cljs.core.get.call(null,map__43029__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__43029__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__43029__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__43029__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__43029__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__43029__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__43029__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__43029__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__43029__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(typeof romtoff.core.t43030 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t43030 = (function (x,map__43029,owner,height,data,y,event_handlers,rotation,animation,width,p__42900,ch,sprite,message_handlers,build_sprite,id,meta43031){
this.x = x;
this.map__43029 = map__43029;
this.owner = owner;
this.height = height;
this.data = data;
this.y = y;
this.event_handlers = event_handlers;
this.rotation = rotation;
this.animation = animation;
this.width = width;
this.p__42900 = p__42900;
this.ch = ch;
this.sprite = sprite;
this.message_handlers = message_handlers;
this.build_sprite = build_sprite;
this.id = id;
this.meta43031 = meta43031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t43030.prototype.om$core$IRender$ = true;

romtoff.core.t43030.prototype.om$core$IRender$render$arity$1 = ((function (map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
var self__ = this;
var ___$1 = this;
var img = (cljs.core.truth_(self__.animation)?new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(self__.animation):self__.sprite);
return om_tools.dom.element.call(null,React.DOM.g,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": [cljs.core.str("<image width=\""),cljs.core.str(self__.width),cljs.core.str("\" height=\""),cljs.core.str(self__.height),cljs.core.str("\" x=\""),cljs.core.str(self__.x),cljs.core.str("\" y=\""),cljs.core.str(self__.y),cljs.core.str("\" xlink:href=\""),cljs.core.str(img),cljs.core.str("\" />")].join('')},new cljs.core.Keyword(null,"width","width",-384071477),self__.width,new cljs.core.Keyword(null,"height","height",1025178622),self__.height,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("rotate("),cljs.core.str((cljs.core.truth_(self__.rotation)?self__.rotation:(0))),cljs.core.str(" "),cljs.core.str(((self__.width / (2)) + self__.x)),cljs.core.str(" "),cljs.core.str(((self__.height / (2)) + self__.y)),cljs.core.str(")")].join('')], null),self__.event_handlers),cljs.core.PersistentVector.EMPTY);
});})(map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t43030.prototype.om$core$IWillMount$ = true;

romtoff.core.t43030.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
var self__ = this;
var ___$1 = this;
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (){
var f__24322__auto__ = (function (){var switch__24259__auto__ = ((function (c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (state_43107){
var state_val_43108 = (state_43107[(1)]);
if((state_val_43108 === (7))){
var inst_43060 = (state_43107[(7)]);
var inst_43058 = (state_43107[(8)]);
var inst_43051 = (state_43107[(9)]);
var inst_43049 = (state_43107[(10)]);
var inst_43042 = (state_43107[(11)]);
var inst_43057 = cljs.core._nth.call(null,inst_43049,inst_43051);
var inst_43058__$1 = cljs.core.nth.call(null,inst_43057,(0),null);
var inst_43059 = cljs.core.nth.call(null,inst_43057,(1),null);
var inst_43060__$1 = inst_43042.call(null,inst_43058__$1);
var state_43107__$1 = (function (){var statearr_43109 = state_43107;
(statearr_43109[(7)] = inst_43060__$1);

(statearr_43109[(8)] = inst_43058__$1);

(statearr_43109[(12)] = inst_43059);

return statearr_43109;
})();
if(cljs.core.truth_(inst_43060__$1)){
var statearr_43110_43157 = state_43107__$1;
(statearr_43110_43157[(1)] = (10));

} else {
var statearr_43111_43158 = state_43107__$1;
(statearr_43111_43158[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (20))){
var inst_43082 = (state_43107[(13)]);
var inst_43088 = [cljs.core.str(self__.id),cljs.core.str(": Missing message handler for "),cljs.core.str(inst_43082)].join('');
var inst_43089 = console.warn(inst_43088);
var state_43107__$1 = state_43107;
var statearr_43112_43159 = state_43107__$1;
(statearr_43112_43159[(2)] = inst_43089);

(statearr_43112_43159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (1))){
var state_43107__$1 = state_43107;
var statearr_43113_43160 = state_43107__$1;
(statearr_43113_43160[(2)] = null);

(statearr_43113_43160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (4))){
var inst_43035 = (state_43107[(2)]);
var inst_43036 = [new cljs.core.Keyword(null,"tween","tween",1743568853),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"transact","transact",-267998670)];
var inst_43037 = (function (){var messages = inst_43035;
return ((function (messages,inst_43035,inst_43036,state_val_43108,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (messages,inst_43035,inst_43036,state_val_43108,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (p1__42898_SHARP_){
return cljs.core.merge.call(null,p1__42898_SHARP_,content);
});})(messages,inst_43035,inst_43036,state_val_43108,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);
});
;})(messages,inst_43035,inst_43036,state_val_43108,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_43038 = (function (){var messages = inst_43035;
return ((function (messages,inst_43035,inst_43036,inst_43037,state_val_43108,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
return om.core.transact_BANG_.call(null,self__.data,((function (messages,inst_43035,inst_43036,inst_43037,state_val_43108,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (p1__42899_SHARP_){
return cljs.core.merge.call(null,p1__42899_SHARP_,content);
});})(messages,inst_43035,inst_43036,inst_43037,state_val_43108,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);
});
;})(messages,inst_43035,inst_43036,inst_43037,state_val_43108,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_43039 = (function (){var messages = inst_43035;
return ((function (messages,inst_43035,inst_43036,inst_43037,inst_43038,state_val_43108,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (content){
var seq__43114 = cljs.core.seq.call(null,content);
var chunk__43115 = null;
var count__43116 = (0);
var i__43117 = (0);
while(true){
if((i__43117 < count__43116)){
var vec__43118 = cljs.core._nth.call(null,chunk__43115,i__43117);
var key = cljs.core.nth.call(null,vec__43118,(0),null);
var fn = cljs.core.nth.call(null,vec__43118,(1),null);
om.core.transact_BANG_.call(null,self__.data,key,fn);

var G__43161 = seq__43114;
var G__43162 = chunk__43115;
var G__43163 = count__43116;
var G__43164 = (i__43117 + (1));
seq__43114 = G__43161;
chunk__43115 = G__43162;
count__43116 = G__43163;
i__43117 = G__43164;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__43114);
if(temp__4126__auto__){
var seq__43114__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43114__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__43114__$1);
var G__43165 = cljs.core.chunk_rest.call(null,seq__43114__$1);
var G__43166 = c__18901__auto__;
var G__43167 = cljs.core.count.call(null,c__18901__auto__);
var G__43168 = (0);
seq__43114 = G__43165;
chunk__43115 = G__43166;
count__43116 = G__43167;
i__43117 = G__43168;
continue;
} else {
var vec__43119 = cljs.core.first.call(null,seq__43114__$1);
var key = cljs.core.nth.call(null,vec__43119,(0),null);
var fn = cljs.core.nth.call(null,vec__43119,(1),null);
om.core.transact_BANG_.call(null,self__.data,key,fn);

var G__43169 = cljs.core.next.call(null,seq__43114__$1);
var G__43170 = null;
var G__43171 = (0);
var G__43172 = (0);
seq__43114 = G__43169;
chunk__43115 = G__43170;
count__43116 = G__43171;
i__43117 = G__43172;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(messages,inst_43035,inst_43036,inst_43037,inst_43038,state_val_43108,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var inst_43040 = [inst_43037,inst_43038,inst_43039];
var inst_43041 = cljs.core.PersistentHashMap.fromArrays(inst_43036,inst_43040);
var inst_43042 = cljs.core.merge.call(null,inst_43041,self__.message_handlers);
var inst_43047 = cljs.core.seq.call(null,inst_43035);
var inst_43048 = inst_43047;
var inst_43049 = null;
var inst_43050 = (0);
var inst_43051 = (0);
var state_43107__$1 = (function (){var statearr_43120 = state_43107;
(statearr_43120[(9)] = inst_43051);

(statearr_43120[(14)] = inst_43050);

(statearr_43120[(15)] = inst_43048);

(statearr_43120[(10)] = inst_43049);

(statearr_43120[(11)] = inst_43042);

return statearr_43120;
})();
var statearr_43121_43173 = state_43107__$1;
(statearr_43121_43173[(2)] = null);

(statearr_43121_43173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (15))){
var inst_43098 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43122_43174 = state_43107__$1;
(statearr_43122_43174[(2)] = inst_43098);

(statearr_43122_43174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (21))){
var inst_43071 = (state_43107[(16)]);
var inst_43091 = (state_43107[(2)]);
var inst_43092 = cljs.core.next.call(null,inst_43071);
var inst_43048 = inst_43092;
var inst_43049 = null;
var inst_43050 = (0);
var inst_43051 = (0);
var state_43107__$1 = (function (){var statearr_43123 = state_43107;
(statearr_43123[(17)] = inst_43091);

(statearr_43123[(9)] = inst_43051);

(statearr_43123[(14)] = inst_43050);

(statearr_43123[(15)] = inst_43048);

(statearr_43123[(10)] = inst_43049);

return statearr_43123;
})();
var statearr_43124_43175 = state_43107__$1;
(statearr_43124_43175[(2)] = null);

(statearr_43124_43175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (13))){
var inst_43071 = (state_43107[(16)]);
var inst_43073 = cljs.core.chunked_seq_QMARK_.call(null,inst_43071);
var state_43107__$1 = state_43107;
if(inst_43073){
var statearr_43125_43176 = state_43107__$1;
(statearr_43125_43176[(1)] = (16));

} else {
var statearr_43126_43177 = state_43107__$1;
(statearr_43126_43177[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (6))){
var inst_43102 = (state_43107[(2)]);
var state_43107__$1 = (function (){var statearr_43127 = state_43107;
(statearr_43127[(18)] = inst_43102);

return statearr_43127;
})();
var statearr_43128_43178 = state_43107__$1;
(statearr_43128_43178[(2)] = null);

(statearr_43128_43178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (17))){
var inst_43084 = (state_43107[(19)]);
var inst_43071 = (state_43107[(16)]);
var inst_43042 = (state_43107[(11)]);
var inst_43082 = (state_43107[(13)]);
var inst_43081 = cljs.core.first.call(null,inst_43071);
var inst_43082__$1 = cljs.core.nth.call(null,inst_43081,(0),null);
var inst_43083 = cljs.core.nth.call(null,inst_43081,(1),null);
var inst_43084__$1 = inst_43042.call(null,inst_43082__$1);
var state_43107__$1 = (function (){var statearr_43132 = state_43107;
(statearr_43132[(19)] = inst_43084__$1);

(statearr_43132[(20)] = inst_43083);

(statearr_43132[(13)] = inst_43082__$1);

return statearr_43132;
})();
if(cljs.core.truth_(inst_43084__$1)){
var statearr_43133_43179 = state_43107__$1;
(statearr_43133_43179[(1)] = (19));

} else {
var statearr_43134_43180 = state_43107__$1;
(statearr_43134_43180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (3))){
var inst_43105 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43107__$1,inst_43105);
} else {
if((state_val_43108 === (12))){
var inst_43051 = (state_43107[(9)]);
var inst_43050 = (state_43107[(14)]);
var inst_43048 = (state_43107[(15)]);
var inst_43049 = (state_43107[(10)]);
var inst_43067 = (state_43107[(2)]);
var inst_43068 = (inst_43051 + (1));
var tmp43129 = inst_43050;
var tmp43130 = inst_43048;
var tmp43131 = inst_43049;
var inst_43048__$1 = tmp43130;
var inst_43049__$1 = tmp43131;
var inst_43050__$1 = tmp43129;
var inst_43051__$1 = inst_43068;
var state_43107__$1 = (function (){var statearr_43135 = state_43107;
(statearr_43135[(9)] = inst_43051__$1);

(statearr_43135[(14)] = inst_43050__$1);

(statearr_43135[(15)] = inst_43048__$1);

(statearr_43135[(10)] = inst_43049__$1);

(statearr_43135[(21)] = inst_43067);

return statearr_43135;
})();
var statearr_43136_43181 = state_43107__$1;
(statearr_43136_43181[(2)] = null);

(statearr_43136_43181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (2))){
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43107__$1,(4),self__.ch);
} else {
if((state_val_43108 === (19))){
var inst_43084 = (state_43107[(19)]);
var inst_43083 = (state_43107[(20)]);
var inst_43086 = inst_43084.call(null,inst_43083);
var state_43107__$1 = state_43107;
var statearr_43137_43182 = state_43107__$1;
(statearr_43137_43182[(2)] = inst_43086);

(statearr_43137_43182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (11))){
var inst_43058 = (state_43107[(8)]);
var inst_43064 = [cljs.core.str(self__.id),cljs.core.str(": Missing message handler for "),cljs.core.str(inst_43058)].join('');
var inst_43065 = console.warn(inst_43064);
var state_43107__$1 = state_43107;
var statearr_43138_43183 = state_43107__$1;
(statearr_43138_43183[(2)] = inst_43065);

(statearr_43138_43183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (9))){
var inst_43100 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43139_43184 = state_43107__$1;
(statearr_43139_43184[(2)] = inst_43100);

(statearr_43139_43184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (5))){
var inst_43051 = (state_43107[(9)]);
var inst_43050 = (state_43107[(14)]);
var inst_43053 = (inst_43051 < inst_43050);
var inst_43054 = inst_43053;
var state_43107__$1 = state_43107;
if(cljs.core.truth_(inst_43054)){
var statearr_43140_43185 = state_43107__$1;
(statearr_43140_43185[(1)] = (7));

} else {
var statearr_43141_43186 = state_43107__$1;
(statearr_43141_43186[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (14))){
var state_43107__$1 = state_43107;
var statearr_43142_43187 = state_43107__$1;
(statearr_43142_43187[(2)] = null);

(statearr_43142_43187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (16))){
var inst_43071 = (state_43107[(16)]);
var inst_43075 = cljs.core.chunk_first.call(null,inst_43071);
var inst_43076 = cljs.core.chunk_rest.call(null,inst_43071);
var inst_43077 = cljs.core.count.call(null,inst_43075);
var inst_43048 = inst_43076;
var inst_43049 = inst_43075;
var inst_43050 = inst_43077;
var inst_43051 = (0);
var state_43107__$1 = (function (){var statearr_43143 = state_43107;
(statearr_43143[(9)] = inst_43051);

(statearr_43143[(14)] = inst_43050);

(statearr_43143[(15)] = inst_43048);

(statearr_43143[(10)] = inst_43049);

return statearr_43143;
})();
var statearr_43144_43188 = state_43107__$1;
(statearr_43144_43188[(2)] = null);

(statearr_43144_43188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (10))){
var inst_43060 = (state_43107[(7)]);
var inst_43059 = (state_43107[(12)]);
var inst_43062 = inst_43060.call(null,inst_43059);
var state_43107__$1 = state_43107;
var statearr_43145_43189 = state_43107__$1;
(statearr_43145_43189[(2)] = inst_43062);

(statearr_43145_43189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (18))){
var inst_43095 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43146_43190 = state_43107__$1;
(statearr_43146_43190[(2)] = inst_43095);

(statearr_43146_43190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43108 === (8))){
var inst_43048 = (state_43107[(15)]);
var inst_43071 = (state_43107[(16)]);
var inst_43071__$1 = cljs.core.seq.call(null,inst_43048);
var state_43107__$1 = (function (){var statearr_43147 = state_43107;
(statearr_43147[(16)] = inst_43071__$1);

return statearr_43147;
})();
if(inst_43071__$1){
var statearr_43148_43191 = state_43107__$1;
(statearr_43148_43191[(1)] = (13));

} else {
var statearr_43149_43192 = state_43107__$1;
(statearr_43149_43192[(1)] = (14));

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
});})(c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;
return ((function (switch__24259__auto__,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function() {
var romtoff$core$build_sprite_$_state_machine__24260__auto__ = null;
var romtoff$core$build_sprite_$_state_machine__24260__auto____0 = (function (){
var statearr_43153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43153[(0)] = romtoff$core$build_sprite_$_state_machine__24260__auto__);

(statearr_43153[(1)] = (1));

return statearr_43153;
});
var romtoff$core$build_sprite_$_state_machine__24260__auto____1 = (function (state_43107){
while(true){
var ret_value__24261__auto__ = (function (){try{while(true){
var result__24262__auto__ = switch__24259__auto__.call(null,state_43107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24262__auto__;
}
break;
}
}catch (e43154){if((e43154 instanceof Object)){
var ex__24263__auto__ = e43154;
var statearr_43155_43193 = state_43107;
(statearr_43155_43193[(5)] = ex__24263__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43194 = state_43107;
state_43107 = G__43194;
continue;
} else {
return ret_value__24261__auto__;
}
break;
}
});
romtoff$core$build_sprite_$_state_machine__24260__auto__ = function(state_43107){
switch(arguments.length){
case 0:
return romtoff$core$build_sprite_$_state_machine__24260__auto____0.call(this);
case 1:
return romtoff$core$build_sprite_$_state_machine__24260__auto____1.call(this,state_43107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$build_sprite_$_state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$build_sprite_$_state_machine__24260__auto____0;
romtoff$core$build_sprite_$_state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$build_sprite_$_state_machine__24260__auto____1;
return romtoff$core$build_sprite_$_state_machine__24260__auto__;
})()
;})(switch__24259__auto__,c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
})();
var state__24323__auto__ = (function (){var statearr_43156 = f__24322__auto__.call(null);
(statearr_43156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24321__auto__);

return statearr_43156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,___$1,map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
);

return c__24321__auto__;
});})(map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t43030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_43032){
var self__ = this;
var _43032__$1 = this;
return self__.meta43031;
});})(map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t43030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_43032,meta43031__$1){
var self__ = this;
var _43032__$1 = this;
return (new romtoff.core.t43030(self__.x,self__.map__43029,self__.owner,self__.height,self__.data,self__.y,self__.event_handlers,self__.rotation,self__.animation,self__.width,self__.p__42900,self__.ch,self__.sprite,self__.message_handlers,self__.build_sprite,self__.id,meta43031__$1));
});})(map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.t43030.cljs$lang$type = true;

romtoff.core.t43030.cljs$lang$ctorStr = "romtoff.core/t43030";

romtoff.core.t43030.cljs$lang$ctorPrWriter = ((function (map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"romtoff.core/t43030");
});})(map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

romtoff.core.__GT_t43030 = ((function (map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function romtoff$core$build_sprite_$___GT_t43030(x__$1,map__43029__$2,owner__$1,height__$1,data__$1,y__$1,event_handlers__$1,rotation__$1,animation__$1,width__$1,p__42900__$1,ch__$1,sprite__$1,message_handlers__$1,build_sprite__$1,id__$1,meta43031){
return (new romtoff.core.t43030(x__$1,map__43029__$2,owner__$1,height__$1,data__$1,y__$1,event_handlers__$1,rotation__$1,animation__$1,width__$1,p__42900__$1,ch__$1,sprite__$1,message_handlers__$1,build_sprite__$1,id__$1,meta43031));
});})(map__43029,map__43029__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
;

}

return (new romtoff.core.t43030(x,map__43029__$1,owner,height,data,y,event_handlers,rotation,animation,width,p__42900,ch,sprite,message_handlers,romtoff$core$build_sprite,id,cljs.core.PersistentArrayMap.EMPTY));
});
romtoff.core.stage__GT_sprite = new cljs.core.PersistentArrayMap(null, 3, [(0),"img/1.png",(1),"img/crate1.png",(2),"img/crate2.png"], null);
romtoff.core.int__GT_sprite = (function romtoff$core$int__GT_sprite(i){
return [cljs.core.str("img/"),cljs.core.str(i),cljs.core.str(".png")].join('');
});
romtoff.core.land = (function romtoff$core$land(p__43195,owner){
var map__43198 = p__43195;
var map__43198__$1 = ((cljs.core.seq_QMARK_.call(null,map__43198))?cljs.core.apply.call(null,cljs.core.hash_map,map__43198):map__43198);
var data = map__43198__$1;
var x = cljs.core.get.call(null,map__43198__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var height = cljs.core.get.call(null,map__43198__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y = cljs.core.get.call(null,map__43198__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rotation = cljs.core.get.call(null,map__43198__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var animation = cljs.core.get.call(null,map__43198__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var stage = cljs.core.get.call(null,map__43198__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var width = cljs.core.get.call(null,map__43198__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ch = cljs.core.get.call(null,map__43198__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var sprite = cljs.core.get.call(null,map__43198__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var id = cljs.core.get.call(null,map__43198__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__43198,map__43198__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id){
return (function (_){
return cljs.core.println.call(null,id);
});})(map__43198,map__43198__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),((function (map__43198,map__43198__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id){
return (function (_){
var stage__$1 = om.core.get_props.call(null,owner,new cljs.core.Keyword(null,"stage","stage",1843544772));
var G__43199 = stage__$1;
switch (G__43199) {
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
});})(map__43198,map__43198__$1,data,x,height,y,rotation,animation,stage,width,ch,sprite,id))
], null));
});
romtoff.core.water = (function romtoff$core$water(p__43201,owner){
var map__43203 = p__43201;
var map__43203__$1 = ((cljs.core.seq_QMARK_.call(null,map__43203))?cljs.core.apply.call(null,cljs.core.hash_map,map__43203):map__43203);
var data = map__43203__$1;
var width = cljs.core.get.call(null,map__43203__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__43203__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__43203__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__43203__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__43203__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__43203__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__43203__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__43203__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__43203__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__43203,map__43203__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
return cljs.core.println.call(null,id);
});})(map__43203,map__43203__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),((function (map__43203,map__43203__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
return romtoff.core.play_sound.call(null,"rockDrop");
});})(map__43203,map__43203__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null));
});
romtoff.core.arrow = (function romtoff$core$arrow(p__43204,owner){
var map__43210 = p__43204;
var map__43210__$1 = ((cljs.core.seq_QMARK_.call(null,map__43210))?cljs.core.apply.call(null,cljs.core.hash_map,map__43210):map__43210);
var data = map__43210__$1;
var width = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var sprite = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));
var animation = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var ch = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var rotation = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var y = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var id = cljs.core.get.call(null,map__43210__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return romtoff.core.build_sprite.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),((function (map__43210,map__43210__$1,data,width,height,sprite,animation,ch,rotation,y,x,id){
return (function (_){
cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

var t_43215 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_43216 = romtoff.core.block_coords.call(null,id);
var tetrimino_blocks_coords_43217 = romtoff.core.tetrimino_coords.call(null,t_43215,c_43216);
var seq__43211_43218 = cljs.core.seq.call(null,tetrimino_blocks_coords_43217);
var chunk__43212_43219 = null;
var count__43213_43220 = (0);
var i__43214_43221 = (0);
while(true){
if((i__43214_43221 < count__43213_43220)){
var block_coords_43222 = cljs.core._nth.call(null,chunk__43212_43219,i__43214_43221);
romtoff.core.tell.call(null,cljs.core.apply.call(null,romtoff.core.block_id,block_coords_43222),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY], null));

var G__43223 = seq__43211_43218;
var G__43224 = chunk__43212_43219;
var G__43225 = count__43213_43220;
var G__43226 = (i__43214_43221 + (1));
seq__43211_43218 = G__43223;
chunk__43212_43219 = G__43224;
count__43213_43220 = G__43225;
i__43214_43221 = G__43226;
continue;
} else {
var temp__4126__auto___43227 = cljs.core.seq.call(null,seq__43211_43218);
if(temp__4126__auto___43227){
var seq__43211_43228__$1 = temp__4126__auto___43227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43211_43228__$1)){
var c__18901__auto___43229 = cljs.core.chunk_first.call(null,seq__43211_43228__$1);
var G__43230 = cljs.core.chunk_rest.call(null,seq__43211_43228__$1);
var G__43231 = c__18901__auto___43229;
var G__43232 = cljs.core.count.call(null,c__18901__auto___43229);
var G__43233 = (0);
seq__43211_43218 = G__43230;
chunk__43212_43219 = G__43231;
count__43213_43220 = G__43232;
i__43214_43221 = G__43233;
continue;
} else {
var block_coords_43234 = cljs.core.first.call(null,seq__43211_43228__$1);
romtoff.core.tell.call(null,cljs.core.apply.call(null,romtoff.core.block_id,block_coords_43234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.PersistentArrayMap.EMPTY], null));

var G__43235 = cljs.core.next.call(null,seq__43211_43228__$1);
var G__43236 = null;
var G__43237 = (0);
var G__43238 = (0);
seq__43211_43218 = G__43235;
chunk__43212_43219 = G__43236;
count__43213_43220 = G__43237;
i__43214_43221 = G__43238;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-move","next-move",1501229918),cljs.core.PersistentArrayMap.EMPTY], null));
});})(map__43210,map__43210__$1,data,width,height,sprite,animation,ch,rotation,y,x,id))
], null),cljs.core.PersistentArrayMap.EMPTY);
});
romtoff.core.falling_circle = (function romtoff$core$falling_circle(p__43241,owner){
var map__43501 = p__43241;
var map__43501__$1 = ((cljs.core.seq_QMARK_.call(null,map__43501))?cljs.core.apply.call(null,cljs.core.hash_map,map__43501):map__43501);
var data = map__43501__$1;
var y = cljs.core.get.call(null,map__43501__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__43501__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ch = cljs.core.get.call(null,map__43501__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(typeof romtoff.core.t43502 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t43502 = (function (ch,x,y,data,map__43501,owner,p__43241,falling_circle,meta43503){
this.ch = ch;
this.x = x;
this.y = y;
this.data = data;
this.map__43501 = map__43501;
this.owner = owner;
this.p__43241 = p__43241;
this.falling_circle = falling_circle;
this.meta43503 = meta43503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t43502.prototype.om$core$IRender$ = true;

romtoff.core.t43502.prototype.om$core$IRender$render$arity$1 = ((function (map__43501,map__43501__$1,data,y,x,ch){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.circle({"onClick": ((function (___$1,map__43501,map__43501__$1,data,y,x,ch){
return (function (___$2){
cljs.core.async.put_BANG_.call(null,romtoff.core.game_chan,new cljs.core.Keyword(null,"create","create",-1301499256));

return "";
});})(___$1,map__43501,map__43501__$1,data,y,x,ch))
, "r": (25), "cy": self__.y, "cx": self__.x});
});})(map__43501,map__43501__$1,data,y,x,ch))
;

romtoff.core.t43502.prototype.om$core$IWillMount$ = true;

romtoff.core.t43502.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__43501,map__43501__$1,data,y,x,ch){
return (function (_){
var self__ = this;
var ___$1 = this;
var c__24321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch){
return (function (){
var f__24322__auto__ = (function (){var switch__24259__auto__ = ((function (c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch){
return (function (state_43666){
var state_val_43667 = (state_43666[(1)]);
if((state_val_43667 === (7))){
var inst_43514 = (state_43666[(7)]);
var inst_43522 = (state_43666[(8)]);
var inst_43516 = (state_43666[(9)]);
var inst_43523 = (state_43666[(10)]);
var inst_43522__$1 = cljs.core._nth.call(null,inst_43514,inst_43516);
var inst_43523__$1 = cljs.core.nth.call(null,inst_43522__$1,(0),null);
var inst_43524 = cljs.core.nth.call(null,inst_43522__$1,(1),null);
var state_43666__$1 = (function (){var statearr_43668 = state_43666;
(statearr_43668[(8)] = inst_43522__$1);

(statearr_43668[(11)] = inst_43524);

(statearr_43668[(10)] = inst_43523__$1);

return statearr_43668;
})();
var G__43669_43760 = (((inst_43523__$1 instanceof cljs.core.Keyword))?inst_43523__$1.fqn:null);
switch (G__43669_43760) {
case "transact":
var statearr_43670_43762 = state_43666__$1;
(statearr_43670_43762[(1)] = (13));


break;
case "update":
var statearr_43671_43763 = state_43666__$1;
(statearr_43671_43763[(1)] = (12));


break;
case "tween":
var statearr_43672_43764 = state_43666__$1;
(statearr_43672_43764[(1)] = (11));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_43523__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (20))){
var state_43666__$1 = state_43666;
var statearr_43673_43765 = state_43666__$1;
(statearr_43673_43765[(2)] = null);

(statearr_43673_43765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (27))){
var inst_43657 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43674_43766 = state_43666__$1;
(statearr_43674_43766[(2)] = inst_43657);

(statearr_43674_43766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (1))){
var state_43666__$1 = state_43666;
var statearr_43675_43767 = state_43666__$1;
(statearr_43675_43767[(2)] = null);

(statearr_43675_43767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (24))){
var inst_43569 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43676_43768 = state_43666__$1;
(statearr_43676_43768[(2)] = inst_43569);

(statearr_43676_43768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (39))){
var inst_43645 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43677_43769 = state_43666__$1;
(statearr_43677_43769[(2)] = inst_43645);

(statearr_43677_43769[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (4))){
var inst_43507 = (state_43666[(12)]);
var inst_43507__$1 = (state_43666[(2)]);
var inst_43512 = cljs.core.seq.call(null,inst_43507__$1);
var inst_43513 = inst_43512;
var inst_43514 = null;
var inst_43515 = (0);
var inst_43516 = (0);
var state_43666__$1 = (function (){var statearr_43678 = state_43666;
(statearr_43678[(7)] = inst_43514);

(statearr_43678[(13)] = inst_43515);

(statearr_43678[(9)] = inst_43516);

(statearr_43678[(14)] = inst_43513);

(statearr_43678[(12)] = inst_43507__$1);

return statearr_43678;
})();
var statearr_43679_43770 = state_43666__$1;
(statearr_43679_43770[(2)] = null);

(statearr_43679_43770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (15))){
var inst_43576 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43680_43771 = state_43666__$1;
(statearr_43680_43771[(2)] = inst_43576);

(statearr_43680_43771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (21))){
var inst_43572 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43681_43772 = state_43666__$1;
(statearr_43681_43772[(2)] = inst_43572);

(statearr_43681_43772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (31))){
var inst_43583 = (state_43666[(15)]);
var inst_43650 = (state_43666[(2)]);
var inst_43651 = cljs.core.next.call(null,inst_43583);
var inst_43513 = inst_43651;
var inst_43514 = null;
var inst_43515 = (0);
var inst_43516 = (0);
var state_43666__$1 = (function (){var statearr_43682 = state_43666;
(statearr_43682[(7)] = inst_43514);

(statearr_43682[(13)] = inst_43515);

(statearr_43682[(9)] = inst_43516);

(statearr_43682[(16)] = inst_43650);

(statearr_43682[(14)] = inst_43513);

return statearr_43682;
})();
var statearr_43683_43773 = state_43666__$1;
(statearr_43683_43773[(2)] = null);

(statearr_43683_43773[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (32))){
var inst_43514 = (state_43666[(7)]);
var inst_43515 = (state_43666[(13)]);
var inst_43594 = (state_43666[(17)]);
var inst_43516 = (state_43666[(9)]);
var inst_43583 = (state_43666[(15)]);
var inst_43507 = (state_43666[(12)]);
var inst_43595 = (state_43666[(18)]);
var inst_43593 = (state_43666[(19)]);
var inst_43596 = (function (){var content = inst_43595;
var type = inst_43594;
var vec__43592 = inst_43593;
var temp__4126__auto__ = inst_43583;
var seq__43508 = inst_43583;
var chunk__43509 = inst_43514;
var count__43510 = inst_43515;
var i__43511 = inst_43516;
var messages = inst_43507;
return ((function (content,type,vec__43592,temp__4126__auto__,seq__43508,chunk__43509,count__43510,i__43511,messages,inst_43514,inst_43515,inst_43594,inst_43516,inst_43583,inst_43507,inst_43595,inst_43593,state_val_43667,c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch){
return (function (p1__43239_SHARP_){
return cljs.core.merge.call(null,p1__43239_SHARP_,content);
});
;})(content,type,vec__43592,temp__4126__auto__,seq__43508,chunk__43509,count__43510,i__43511,messages,inst_43514,inst_43515,inst_43594,inst_43516,inst_43583,inst_43507,inst_43595,inst_43593,state_val_43667,c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch))
})();
var inst_43597 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),inst_43596);
var state_43666__$1 = state_43666;
var statearr_43684_43774 = state_43666__$1;
(statearr_43684_43774[(2)] = inst_43597);

(statearr_43684_43774[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (40))){
var inst_43623 = (state_43666[(20)]);
var inst_43625 = cljs.core.chunked_seq_QMARK_.call(null,inst_43623);
var state_43666__$1 = state_43666;
if(inst_43625){
var statearr_43685_43775 = state_43666__$1;
(statearr_43685_43775[(1)] = (43));

} else {
var statearr_43686_43776 = state_43666__$1;
(statearr_43686_43776[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (33))){
var inst_43514 = (state_43666[(7)]);
var inst_43515 = (state_43666[(13)]);
var inst_43594 = (state_43666[(17)]);
var inst_43516 = (state_43666[(9)]);
var inst_43583 = (state_43666[(15)]);
var inst_43507 = (state_43666[(12)]);
var inst_43595 = (state_43666[(18)]);
var inst_43593 = (state_43666[(19)]);
var inst_43599 = (function (){var content = inst_43595;
var type = inst_43594;
var vec__43592 = inst_43593;
var temp__4126__auto__ = inst_43583;
var seq__43508 = inst_43583;
var chunk__43509 = inst_43514;
var count__43510 = inst_43515;
var i__43511 = inst_43516;
var messages = inst_43507;
return ((function (content,type,vec__43592,temp__4126__auto__,seq__43508,chunk__43509,count__43510,i__43511,messages,inst_43514,inst_43515,inst_43594,inst_43516,inst_43583,inst_43507,inst_43595,inst_43593,state_val_43667,c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch){
return (function (p1__43240_SHARP_){
return cljs.core.merge.call(null,p1__43240_SHARP_,content);
});
;})(content,type,vec__43592,temp__4126__auto__,seq__43508,chunk__43509,count__43510,i__43511,messages,inst_43514,inst_43515,inst_43594,inst_43516,inst_43583,inst_43507,inst_43595,inst_43593,state_val_43667,c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch))
})();
var inst_43600 = om.core.transact_BANG_.call(null,self__.data,inst_43599);
var state_43666__$1 = state_43666;
var statearr_43687_43777 = state_43666__$1;
(statearr_43687_43777[(2)] = inst_43600);

(statearr_43687_43777[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (13))){
var inst_43524 = (state_43666[(11)]);
var inst_43535 = cljs.core.seq.call(null,inst_43524);
var inst_43536 = inst_43535;
var inst_43537 = null;
var inst_43538 = (0);
var inst_43539 = (0);
var state_43666__$1 = (function (){var statearr_43688 = state_43666;
(statearr_43688[(21)] = inst_43536);

(statearr_43688[(22)] = inst_43538);

(statearr_43688[(23)] = inst_43539);

(statearr_43688[(24)] = inst_43537);

return statearr_43688;
})();
var statearr_43689_43778 = state_43666__$1;
(statearr_43689_43778[(2)] = null);

(statearr_43689_43778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (22))){
var inst_43552 = (state_43666[(25)]);
var inst_43556 = cljs.core.chunk_first.call(null,inst_43552);
var inst_43557 = cljs.core.chunk_rest.call(null,inst_43552);
var inst_43558 = cljs.core.count.call(null,inst_43556);
var inst_43536 = inst_43557;
var inst_43537 = inst_43556;
var inst_43538 = inst_43558;
var inst_43539 = (0);
var state_43666__$1 = (function (){var statearr_43690 = state_43666;
(statearr_43690[(21)] = inst_43536);

(statearr_43690[(22)] = inst_43538);

(statearr_43690[(23)] = inst_43539);

(statearr_43690[(24)] = inst_43537);

return statearr_43690;
})();
var statearr_43691_43779 = state_43666__$1;
(statearr_43691_43779[(2)] = null);

(statearr_43691_43779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (36))){
var inst_43647 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43692_43780 = state_43666__$1;
(statearr_43692_43780[(2)] = inst_43647);

(statearr_43692_43780[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (41))){
var state_43666__$1 = state_43666;
var statearr_43693_43781 = state_43666__$1;
(statearr_43693_43781[(2)] = null);

(statearr_43693_43781[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (43))){
var inst_43623 = (state_43666[(20)]);
var inst_43627 = cljs.core.chunk_first.call(null,inst_43623);
var inst_43628 = cljs.core.chunk_rest.call(null,inst_43623);
var inst_43629 = cljs.core.count.call(null,inst_43627);
var inst_43607 = inst_43628;
var inst_43608 = inst_43627;
var inst_43609 = inst_43629;
var inst_43610 = (0);
var state_43666__$1 = (function (){var statearr_43694 = state_43666;
(statearr_43694[(26)] = inst_43607);

(statearr_43694[(27)] = inst_43610);

(statearr_43694[(28)] = inst_43609);

(statearr_43694[(29)] = inst_43608);

return statearr_43694;
})();
var statearr_43695_43782 = state_43666__$1;
(statearr_43695_43782[(2)] = null);

(statearr_43695_43782[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (29))){
var inst_43594 = (state_43666[(17)]);
var inst_43583 = (state_43666[(15)]);
var inst_43593 = (state_43666[(19)]);
var inst_43593__$1 = cljs.core.first.call(null,inst_43583);
var inst_43594__$1 = cljs.core.nth.call(null,inst_43593__$1,(0),null);
var inst_43595 = cljs.core.nth.call(null,inst_43593__$1,(1),null);
var state_43666__$1 = (function (){var statearr_43696 = state_43666;
(statearr_43696[(17)] = inst_43594__$1);

(statearr_43696[(18)] = inst_43595);

(statearr_43696[(19)] = inst_43593__$1);

return statearr_43696;
})();
var G__43697_43783 = (((inst_43594__$1 instanceof cljs.core.Keyword))?inst_43594__$1.fqn:null);
switch (G__43697_43783) {
case "transact":
var statearr_43698_43785 = state_43666__$1;
(statearr_43698_43785[(1)] = (34));


break;
case "update":
var statearr_43699_43786 = state_43666__$1;
(statearr_43699_43786[(1)] = (33));


break;
case "tween":
var statearr_43700_43787 = state_43666__$1;
(statearr_43700_43787[(1)] = (32));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_43594__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (44))){
var inst_43623 = (state_43666[(20)]);
var inst_43633 = cljs.core.first.call(null,inst_43623);
var inst_43634 = cljs.core.nth.call(null,inst_43633,(0),null);
var inst_43635 = cljs.core.nth.call(null,inst_43633,(1),null);
var inst_43636 = om.core.transact_BANG_.call(null,self__.data,inst_43634,inst_43635);
var inst_43637 = cljs.core.next.call(null,inst_43623);
var inst_43607 = inst_43637;
var inst_43608 = null;
var inst_43609 = (0);
var inst_43610 = (0);
var state_43666__$1 = (function (){var statearr_43701 = state_43666;
(statearr_43701[(30)] = inst_43636);

(statearr_43701[(26)] = inst_43607);

(statearr_43701[(27)] = inst_43610);

(statearr_43701[(28)] = inst_43609);

(statearr_43701[(29)] = inst_43608);

return statearr_43701;
})();
var statearr_43702_43788 = state_43666__$1;
(statearr_43702_43788[(2)] = null);

(statearr_43702_43788[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (6))){
var inst_43661 = (state_43666[(2)]);
var state_43666__$1 = (function (){var statearr_43703 = state_43666;
(statearr_43703[(31)] = inst_43661);

return statearr_43703;
})();
var statearr_43704_43789 = state_43666__$1;
(statearr_43704_43789[(2)] = null);

(statearr_43704_43789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (28))){
var inst_43583 = (state_43666[(15)]);
var inst_43587 = cljs.core.chunk_first.call(null,inst_43583);
var inst_43588 = cljs.core.chunk_rest.call(null,inst_43583);
var inst_43589 = cljs.core.count.call(null,inst_43587);
var inst_43513 = inst_43588;
var inst_43514 = inst_43587;
var inst_43515 = inst_43589;
var inst_43516 = (0);
var state_43666__$1 = (function (){var statearr_43705 = state_43666;
(statearr_43705[(7)] = inst_43514);

(statearr_43705[(13)] = inst_43515);

(statearr_43705[(9)] = inst_43516);

(statearr_43705[(14)] = inst_43513);

return statearr_43705;
})();
var statearr_43706_43790 = state_43666__$1;
(statearr_43706_43790[(2)] = null);

(statearr_43706_43790[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (25))){
var inst_43583 = (state_43666[(15)]);
var inst_43585 = cljs.core.chunked_seq_QMARK_.call(null,inst_43583);
var state_43666__$1 = state_43666;
if(inst_43585){
var statearr_43707_43791 = state_43666__$1;
(statearr_43707_43791[(1)] = (28));

} else {
var statearr_43708_43792 = state_43666__$1;
(statearr_43708_43792[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (34))){
var inst_43595 = (state_43666[(18)]);
var inst_43606 = cljs.core.seq.call(null,inst_43595);
var inst_43607 = inst_43606;
var inst_43608 = null;
var inst_43609 = (0);
var inst_43610 = (0);
var state_43666__$1 = (function (){var statearr_43709 = state_43666;
(statearr_43709[(26)] = inst_43607);

(statearr_43709[(27)] = inst_43610);

(statearr_43709[(28)] = inst_43609);

(statearr_43709[(29)] = inst_43608);

return statearr_43709;
})();
var statearr_43710_43793 = state_43666__$1;
(statearr_43710_43793[(2)] = null);

(statearr_43710_43793[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (17))){
var inst_43536 = (state_43666[(21)]);
var inst_43552 = (state_43666[(25)]);
var inst_43552__$1 = cljs.core.seq.call(null,inst_43536);
var state_43666__$1 = (function (){var statearr_43711 = state_43666;
(statearr_43711[(25)] = inst_43552__$1);

return statearr_43711;
})();
if(inst_43552__$1){
var statearr_43712_43794 = state_43666__$1;
(statearr_43712_43794[(1)] = (19));

} else {
var statearr_43713_43795 = state_43666__$1;
(statearr_43713_43795[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (3))){
var inst_43664 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43666__$1,inst_43664);
} else {
if((state_val_43667 === (12))){
var inst_43514 = (state_43666[(7)]);
var inst_43522 = (state_43666[(8)]);
var inst_43515 = (state_43666[(13)]);
var inst_43516 = (state_43666[(9)]);
var inst_43513 = (state_43666[(14)]);
var inst_43524 = (state_43666[(11)]);
var inst_43507 = (state_43666[(12)]);
var inst_43523 = (state_43666[(10)]);
var inst_43528 = (function (){var content = inst_43524;
var type = inst_43523;
var vec__43521 = inst_43522;
var seq__43508 = inst_43513;
var chunk__43509 = inst_43514;
var count__43510 = inst_43515;
var i__43511 = inst_43516;
var messages = inst_43507;
return ((function (content,type,vec__43521,seq__43508,chunk__43509,count__43510,i__43511,messages,inst_43514,inst_43522,inst_43515,inst_43516,inst_43513,inst_43524,inst_43507,inst_43523,state_val_43667,c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch){
return (function (p1__43240_SHARP_){
return cljs.core.merge.call(null,p1__43240_SHARP_,content);
});
;})(content,type,vec__43521,seq__43508,chunk__43509,count__43510,i__43511,messages,inst_43514,inst_43522,inst_43515,inst_43516,inst_43513,inst_43524,inst_43507,inst_43523,state_val_43667,c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch))
})();
var inst_43529 = om.core.transact_BANG_.call(null,self__.data,inst_43528);
var state_43666__$1 = state_43666;
var statearr_43714_43796 = state_43666__$1;
(statearr_43714_43796[(2)] = inst_43529);

(statearr_43714_43796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (2))){
var state_43666__$1 = state_43666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43666__$1,(4),self__.ch);
} else {
if((state_val_43667 === (23))){
var inst_43552 = (state_43666[(25)]);
var inst_43562 = cljs.core.first.call(null,inst_43552);
var inst_43563 = cljs.core.nth.call(null,inst_43562,(0),null);
var inst_43564 = cljs.core.nth.call(null,inst_43562,(1),null);
var inst_43565 = om.core.transact_BANG_.call(null,self__.data,inst_43563,inst_43564);
var inst_43566 = cljs.core.next.call(null,inst_43552);
var inst_43536 = inst_43566;
var inst_43537 = null;
var inst_43538 = (0);
var inst_43539 = (0);
var state_43666__$1 = (function (){var statearr_43715 = state_43666;
(statearr_43715[(21)] = inst_43536);

(statearr_43715[(22)] = inst_43538);

(statearr_43715[(23)] = inst_43539);

(statearr_43715[(32)] = inst_43565);

(statearr_43715[(24)] = inst_43537);

return statearr_43715;
})();
var statearr_43716_43797 = state_43666__$1;
(statearr_43716_43797[(2)] = null);

(statearr_43716_43797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (35))){
var inst_43610 = (state_43666[(27)]);
var inst_43609 = (state_43666[(28)]);
var inst_43612 = (inst_43610 < inst_43609);
var inst_43613 = inst_43612;
var state_43666__$1 = state_43666;
if(cljs.core.truth_(inst_43613)){
var statearr_43717_43798 = state_43666__$1;
(statearr_43717_43798[(1)] = (37));

} else {
var statearr_43718_43799 = state_43666__$1;
(statearr_43718_43799[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (19))){
var inst_43552 = (state_43666[(25)]);
var inst_43554 = cljs.core.chunked_seq_QMARK_.call(null,inst_43552);
var state_43666__$1 = state_43666;
if(inst_43554){
var statearr_43719_43800 = state_43666__$1;
(statearr_43719_43800[(1)] = (22));

} else {
var statearr_43720_43801 = state_43666__$1;
(statearr_43720_43801[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (11))){
var inst_43514 = (state_43666[(7)]);
var inst_43522 = (state_43666[(8)]);
var inst_43515 = (state_43666[(13)]);
var inst_43516 = (state_43666[(9)]);
var inst_43513 = (state_43666[(14)]);
var inst_43524 = (state_43666[(11)]);
var inst_43507 = (state_43666[(12)]);
var inst_43523 = (state_43666[(10)]);
var inst_43525 = (function (){var content = inst_43524;
var type = inst_43523;
var vec__43521 = inst_43522;
var seq__43508 = inst_43513;
var chunk__43509 = inst_43514;
var count__43510 = inst_43515;
var i__43511 = inst_43516;
var messages = inst_43507;
return ((function (content,type,vec__43521,seq__43508,chunk__43509,count__43510,i__43511,messages,inst_43514,inst_43522,inst_43515,inst_43516,inst_43513,inst_43524,inst_43507,inst_43523,state_val_43667,c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch){
return (function (p1__43239_SHARP_){
return cljs.core.merge.call(null,p1__43239_SHARP_,content);
});
;})(content,type,vec__43521,seq__43508,chunk__43509,count__43510,i__43511,messages,inst_43514,inst_43522,inst_43515,inst_43516,inst_43513,inst_43524,inst_43507,inst_43523,state_val_43667,c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch))
})();
var inst_43526 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),inst_43525);
var state_43666__$1 = state_43666;
var statearr_43721_43802 = state_43666__$1;
(statearr_43721_43802[(2)] = inst_43526);

(statearr_43721_43802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (9))){
var inst_43659 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43722_43803 = state_43666__$1;
(statearr_43722_43803[(2)] = inst_43659);

(statearr_43722_43803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (5))){
var inst_43515 = (state_43666[(13)]);
var inst_43516 = (state_43666[(9)]);
var inst_43518 = (inst_43516 < inst_43515);
var inst_43519 = inst_43518;
var state_43666__$1 = state_43666;
if(cljs.core.truth_(inst_43519)){
var statearr_43723_43804 = state_43666__$1;
(statearr_43723_43804[(1)] = (7));

} else {
var statearr_43724_43805 = state_43666__$1;
(statearr_43724_43805[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (14))){
var inst_43538 = (state_43666[(22)]);
var inst_43539 = (state_43666[(23)]);
var inst_43541 = (inst_43539 < inst_43538);
var inst_43542 = inst_43541;
var state_43666__$1 = state_43666;
if(cljs.core.truth_(inst_43542)){
var statearr_43725_43806 = state_43666__$1;
(statearr_43725_43806[(1)] = (16));

} else {
var statearr_43726_43807 = state_43666__$1;
(statearr_43726_43807[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (45))){
var inst_43640 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43730_43808 = state_43666__$1;
(statearr_43730_43808[(2)] = inst_43640);

(statearr_43730_43808[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (26))){
var state_43666__$1 = state_43666;
var statearr_43731_43809 = state_43666__$1;
(statearr_43731_43809[(2)] = null);

(statearr_43731_43809[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (16))){
var inst_43536 = (state_43666[(21)]);
var inst_43538 = (state_43666[(22)]);
var inst_43539 = (state_43666[(23)]);
var inst_43537 = (state_43666[(24)]);
var inst_43545 = cljs.core._nth.call(null,inst_43537,inst_43539);
var inst_43546 = cljs.core.nth.call(null,inst_43545,(0),null);
var inst_43547 = cljs.core.nth.call(null,inst_43545,(1),null);
var inst_43548 = om.core.transact_BANG_.call(null,self__.data,inst_43546,inst_43547);
var inst_43549 = (inst_43539 + (1));
var tmp43727 = inst_43536;
var tmp43728 = inst_43538;
var tmp43729 = inst_43537;
var inst_43536__$1 = tmp43727;
var inst_43537__$1 = tmp43729;
var inst_43538__$1 = tmp43728;
var inst_43539__$1 = inst_43549;
var state_43666__$1 = (function (){var statearr_43732 = state_43666;
(statearr_43732[(33)] = inst_43548);

(statearr_43732[(21)] = inst_43536__$1);

(statearr_43732[(22)] = inst_43538__$1);

(statearr_43732[(23)] = inst_43539__$1);

(statearr_43732[(24)] = inst_43537__$1);

return statearr_43732;
})();
var statearr_43733_43810 = state_43666__$1;
(statearr_43733_43810[(2)] = null);

(statearr_43733_43810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (38))){
var inst_43607 = (state_43666[(26)]);
var inst_43623 = (state_43666[(20)]);
var inst_43623__$1 = cljs.core.seq.call(null,inst_43607);
var state_43666__$1 = (function (){var statearr_43737 = state_43666;
(statearr_43737[(20)] = inst_43623__$1);

return statearr_43737;
})();
if(inst_43623__$1){
var statearr_43738_43811 = state_43666__$1;
(statearr_43738_43811[(1)] = (40));

} else {
var statearr_43739_43812 = state_43666__$1;
(statearr_43739_43812[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (30))){
var inst_43654 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43740_43813 = state_43666__$1;
(statearr_43740_43813[(2)] = inst_43654);

(statearr_43740_43813[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (10))){
var inst_43514 = (state_43666[(7)]);
var inst_43515 = (state_43666[(13)]);
var inst_43516 = (state_43666[(9)]);
var inst_43513 = (state_43666[(14)]);
var inst_43579 = (state_43666[(2)]);
var inst_43580 = (inst_43516 + (1));
var tmp43734 = inst_43514;
var tmp43735 = inst_43515;
var tmp43736 = inst_43513;
var inst_43513__$1 = tmp43736;
var inst_43514__$1 = tmp43734;
var inst_43515__$1 = tmp43735;
var inst_43516__$1 = inst_43580;
var state_43666__$1 = (function (){var statearr_43741 = state_43666;
(statearr_43741[(7)] = inst_43514__$1);

(statearr_43741[(34)] = inst_43579);

(statearr_43741[(13)] = inst_43515__$1);

(statearr_43741[(9)] = inst_43516__$1);

(statearr_43741[(14)] = inst_43513__$1);

return statearr_43741;
})();
var statearr_43742_43814 = state_43666__$1;
(statearr_43742_43814[(2)] = null);

(statearr_43742_43814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (18))){
var inst_43574 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43746_43815 = state_43666__$1;
(statearr_43746_43815[(2)] = inst_43574);

(statearr_43746_43815[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (42))){
var inst_43643 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43747_43816 = state_43666__$1;
(statearr_43747_43816[(2)] = inst_43643);

(statearr_43747_43816[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (37))){
var inst_43607 = (state_43666[(26)]);
var inst_43610 = (state_43666[(27)]);
var inst_43609 = (state_43666[(28)]);
var inst_43608 = (state_43666[(29)]);
var inst_43616 = cljs.core._nth.call(null,inst_43608,inst_43610);
var inst_43617 = cljs.core.nth.call(null,inst_43616,(0),null);
var inst_43618 = cljs.core.nth.call(null,inst_43616,(1),null);
var inst_43619 = om.core.transact_BANG_.call(null,self__.data,inst_43617,inst_43618);
var inst_43620 = (inst_43610 + (1));
var tmp43743 = inst_43607;
var tmp43744 = inst_43609;
var tmp43745 = inst_43608;
var inst_43607__$1 = tmp43743;
var inst_43608__$1 = tmp43745;
var inst_43609__$1 = tmp43744;
var inst_43610__$1 = inst_43620;
var state_43666__$1 = (function (){var statearr_43748 = state_43666;
(statearr_43748[(35)] = inst_43619);

(statearr_43748[(26)] = inst_43607__$1);

(statearr_43748[(27)] = inst_43610__$1);

(statearr_43748[(28)] = inst_43609__$1);

(statearr_43748[(29)] = inst_43608__$1);

return statearr_43748;
})();
var statearr_43749_43817 = state_43666__$1;
(statearr_43749_43817[(2)] = null);

(statearr_43749_43817[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (8))){
var inst_43583 = (state_43666[(15)]);
var inst_43513 = (state_43666[(14)]);
var inst_43583__$1 = cljs.core.seq.call(null,inst_43513);
var state_43666__$1 = (function (){var statearr_43750 = state_43666;
(statearr_43750[(15)] = inst_43583__$1);

return statearr_43750;
})();
if(inst_43583__$1){
var statearr_43751_43818 = state_43666__$1;
(statearr_43751_43818[(1)] = (25));

} else {
var statearr_43752_43819 = state_43666__$1;
(statearr_43752_43819[(1)] = (26));

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
});})(c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch))
;
return ((function (switch__24259__auto__,c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch){
return (function() {
var romtoff$core$falling_circle_$_state_machine__24260__auto__ = null;
var romtoff$core$falling_circle_$_state_machine__24260__auto____0 = (function (){
var statearr_43756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43756[(0)] = romtoff$core$falling_circle_$_state_machine__24260__auto__);

(statearr_43756[(1)] = (1));

return statearr_43756;
});
var romtoff$core$falling_circle_$_state_machine__24260__auto____1 = (function (state_43666){
while(true){
var ret_value__24261__auto__ = (function (){try{while(true){
var result__24262__auto__ = switch__24259__auto__.call(null,state_43666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24262__auto__;
}
break;
}
}catch (e43757){if((e43757 instanceof Object)){
var ex__24263__auto__ = e43757;
var statearr_43758_43820 = state_43666;
(statearr_43758_43820[(5)] = ex__24263__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43821 = state_43666;
state_43666 = G__43821;
continue;
} else {
return ret_value__24261__auto__;
}
break;
}
});
romtoff$core$falling_circle_$_state_machine__24260__auto__ = function(state_43666){
switch(arguments.length){
case 0:
return romtoff$core$falling_circle_$_state_machine__24260__auto____0.call(this);
case 1:
return romtoff$core$falling_circle_$_state_machine__24260__auto____1.call(this,state_43666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$falling_circle_$_state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$falling_circle_$_state_machine__24260__auto____0;
romtoff$core$falling_circle_$_state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$falling_circle_$_state_machine__24260__auto____1;
return romtoff$core$falling_circle_$_state_machine__24260__auto__;
})()
;})(switch__24259__auto__,c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch))
})();
var state__24323__auto__ = (function (){var statearr_43759 = f__24322__auto__.call(null);
(statearr_43759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24321__auto__);

return statearr_43759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,___$1,map__43501,map__43501__$1,data,y,x,ch))
);

return c__24321__auto__;
});})(map__43501,map__43501__$1,data,y,x,ch))
;

romtoff.core.t43502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__43501,map__43501__$1,data,y,x,ch){
return (function (_43504){
var self__ = this;
var _43504__$1 = this;
return self__.meta43503;
});})(map__43501,map__43501__$1,data,y,x,ch))
;

romtoff.core.t43502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__43501,map__43501__$1,data,y,x,ch){
return (function (_43504,meta43503__$1){
var self__ = this;
var _43504__$1 = this;
return (new romtoff.core.t43502(self__.ch,self__.x,self__.y,self__.data,self__.map__43501,self__.owner,self__.p__43241,self__.falling_circle,meta43503__$1));
});})(map__43501,map__43501__$1,data,y,x,ch))
;

romtoff.core.t43502.cljs$lang$type = true;

romtoff.core.t43502.cljs$lang$ctorStr = "romtoff.core/t43502";

romtoff.core.t43502.cljs$lang$ctorPrWriter = ((function (map__43501,map__43501__$1,data,y,x,ch){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"romtoff.core/t43502");
});})(map__43501,map__43501__$1,data,y,x,ch))
;

romtoff.core.__GT_t43502 = ((function (map__43501,map__43501__$1,data,y,x,ch){
return (function romtoff$core$falling_circle_$___GT_t43502(ch__$1,x__$1,y__$1,data__$1,map__43501__$2,owner__$1,p__43241__$1,falling_circle__$1,meta43503){
return (new romtoff.core.t43502(ch__$1,x__$1,y__$1,data__$1,map__43501__$2,owner__$1,p__43241__$1,falling_circle__$1,meta43503));
});})(map__43501,map__43501__$1,data,y,x,ch))
;

}

return (new romtoff.core.t43502(ch,x,y,data,map__43501__$1,owner,p__43241,romtoff$core$falling_circle,cljs.core.PersistentArrayMap.EMPTY));
});
romtoff.core.from_default_entity = (function romtoff$core$from_default_entity(m){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"tweens","tweens",-1927735551),cljs.core.PersistentArrayMap.EMPTY], null),m);
});
romtoff.core.add_entity = (function romtoff$core$add_entity(data,entity){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"entities","entities",1940967403),(function (p1__43822_SHARP_){
return cljs.core.conj.call(null,p1__43822_SHARP_,entity);
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
if(typeof romtoff.core.t43830 !== 'undefined'){
} else {

/**
* @constructor
*/
romtoff.core.t43830 = (function (owner,data,meta43831){
this.owner = owner;
this.data = data;
this.meta43831 = meta43831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
romtoff.core.t43830.prototype.om$core$IRenderState$ = true;

romtoff.core.t43830.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__43833){
var self__ = this;
var map__43834 = p__43833;
var map__43834__$1 = ((cljs.core.seq_QMARK_.call(null,map__43834))?cljs.core.apply.call(null,cljs.core.hash_map,map__43834):map__43834);
var game_chan = cljs.core.get.call(null,map__43834__$1,new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919));
var ___$1 = this;
var seq__43835_43944 = cljs.core.seq.call(null,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)));
var chunk__43836_43945 = null;
var count__43837_43946 = (0);
var i__43838_43947 = (0);
while(true){
if((i__43838_43947 < count__43837_43946)){
var entity_43948 = cljs.core._nth.call(null,chunk__43836_43945,i__43838_43947);
var seq__43839_43949 = cljs.core.seq.call(null,cljs.core.get.call(null,entity_43948,new cljs.core.Keyword(null,"tweens","tweens",-1927735551)));
var chunk__43840_43950 = null;
var count__43841_43951 = (0);
var i__43842_43952 = (0);
while(true){
if((i__43842_43952 < count__43841_43951)){
var vec__43843_43953 = cljs.core._nth.call(null,chunk__43840_43950,i__43842_43952);
var key_43954 = cljs.core.nth.call(null,vec__43843_43953,(0),null);
var map__43844_43955 = cljs.core.nth.call(null,vec__43843_43953,(1),null);
var map__43844_43956__$1 = ((cljs.core.seq_QMARK_.call(null,map__43844_43955))?cljs.core.apply.call(null,cljs.core.hash_map,map__43844_43955):map__43844_43955);
var tween_43957 = map__43844_43956__$1;
var when_done_43958 = cljs.core.get.call(null,map__43844_43956__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_43959 = cljs.core.get.call(null,map__43844_43956__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_43960 = cljs.core.get.call(null,map__43844_43956__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_43961 = cljs.core.get.call(null,map__43844_43956__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_43962 = cljs.core.get.call(null,map__43844_43956__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_43963 = cljs.core.get.call(null,map__43844_43956__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_43960)){
om.core.update_BANG_.call(null,tween_43957,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_43957,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_43948,key_43954));
} else {
var easing_fn_43964 = (function (){var G__43845 = (((easing_43961 instanceof cljs.core.Keyword))?easing_43961.fqn:null);
switch (G__43845) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_43961)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_43948,key_43954,easing_fn_43964.call(null,initial_43959,target_43963,progress_43960,duration_43962));

om.core.transact_BANG_.call(null,tween_43957,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_43962,progress_43960)){
om.core.transact_BANG_.call(null,entity_43948,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__43839_43949,chunk__43840_43950,count__43841_43951,i__43842_43952,seq__43835_43944,chunk__43836_43945,count__43837_43946,i__43838_43947,vec__43843_43953,key_43954,map__43844_43955,map__43844_43956__$1,tween_43957,when_done_43958,initial_43959,progress_43960,easing_43961,duration_43962,target_43963,entity_43948,___$1,map__43834,map__43834__$1,game_chan){
return (function (p1__43826_SHARP_){
return cljs.core.dissoc.call(null,p1__43826_SHARP_,key_43954);
});})(seq__43839_43949,chunk__43840_43950,count__43841_43951,i__43842_43952,seq__43835_43944,chunk__43836_43945,count__43837_43946,i__43838_43947,vec__43843_43953,key_43954,map__43844_43955,map__43844_43956__$1,tween_43957,when_done_43958,initial_43959,progress_43960,easing_43961,duration_43962,target_43963,entity_43948,___$1,map__43834,map__43834__$1,game_chan))
);

if(cljs.core.truth_(when_done_43958)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_43958,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__43966 = seq__43839_43949;
var G__43967 = chunk__43840_43950;
var G__43968 = count__43841_43951;
var G__43969 = (i__43842_43952 + (1));
seq__43839_43949 = G__43966;
chunk__43840_43950 = G__43967;
count__43841_43951 = G__43968;
i__43842_43952 = G__43969;
continue;
} else {
var temp__4126__auto___43970 = cljs.core.seq.call(null,seq__43839_43949);
if(temp__4126__auto___43970){
var seq__43839_43971__$1 = temp__4126__auto___43970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43839_43971__$1)){
var c__18901__auto___43972 = cljs.core.chunk_first.call(null,seq__43839_43971__$1);
var G__43973 = cljs.core.chunk_rest.call(null,seq__43839_43971__$1);
var G__43974 = c__18901__auto___43972;
var G__43975 = cljs.core.count.call(null,c__18901__auto___43972);
var G__43976 = (0);
seq__43839_43949 = G__43973;
chunk__43840_43950 = G__43974;
count__43841_43951 = G__43975;
i__43842_43952 = G__43976;
continue;
} else {
var vec__43846_43977 = cljs.core.first.call(null,seq__43839_43971__$1);
var key_43978 = cljs.core.nth.call(null,vec__43846_43977,(0),null);
var map__43847_43979 = cljs.core.nth.call(null,vec__43846_43977,(1),null);
var map__43847_43980__$1 = ((cljs.core.seq_QMARK_.call(null,map__43847_43979))?cljs.core.apply.call(null,cljs.core.hash_map,map__43847_43979):map__43847_43979);
var tween_43981 = map__43847_43980__$1;
var when_done_43982 = cljs.core.get.call(null,map__43847_43980__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_43983 = cljs.core.get.call(null,map__43847_43980__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_43984 = cljs.core.get.call(null,map__43847_43980__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_43985 = cljs.core.get.call(null,map__43847_43980__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_43986 = cljs.core.get.call(null,map__43847_43980__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_43987 = cljs.core.get.call(null,map__43847_43980__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_43984)){
om.core.update_BANG_.call(null,tween_43981,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_43981,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_43948,key_43978));
} else {
var easing_fn_43988 = (function (){var G__43848 = (((easing_43985 instanceof cljs.core.Keyword))?easing_43985.fqn:null);
switch (G__43848) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_43985)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_43948,key_43978,easing_fn_43988.call(null,initial_43983,target_43987,progress_43984,duration_43986));

om.core.transact_BANG_.call(null,tween_43981,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_43986,progress_43984)){
om.core.transact_BANG_.call(null,entity_43948,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__43839_43949,chunk__43840_43950,count__43841_43951,i__43842_43952,seq__43835_43944,chunk__43836_43945,count__43837_43946,i__43838_43947,vec__43846_43977,key_43978,map__43847_43979,map__43847_43980__$1,tween_43981,when_done_43982,initial_43983,progress_43984,easing_43985,duration_43986,target_43987,seq__43839_43971__$1,temp__4126__auto___43970,entity_43948,___$1,map__43834,map__43834__$1,game_chan){
return (function (p1__43826_SHARP_){
return cljs.core.dissoc.call(null,p1__43826_SHARP_,key_43978);
});})(seq__43839_43949,chunk__43840_43950,count__43841_43951,i__43842_43952,seq__43835_43944,chunk__43836_43945,count__43837_43946,i__43838_43947,vec__43846_43977,key_43978,map__43847_43979,map__43847_43980__$1,tween_43981,when_done_43982,initial_43983,progress_43984,easing_43985,duration_43986,target_43987,seq__43839_43971__$1,temp__4126__auto___43970,entity_43948,___$1,map__43834,map__43834__$1,game_chan))
);

if(cljs.core.truth_(when_done_43982)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_43982,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__43990 = cljs.core.next.call(null,seq__43839_43971__$1);
var G__43991 = null;
var G__43992 = (0);
var G__43993 = (0);
seq__43839_43949 = G__43990;
chunk__43840_43950 = G__43991;
count__43841_43951 = G__43992;
i__43842_43952 = G__43993;
continue;
}
} else {
}
}
break;
}

var G__43994 = seq__43835_43944;
var G__43995 = chunk__43836_43945;
var G__43996 = count__43837_43946;
var G__43997 = (i__43838_43947 + (1));
seq__43835_43944 = G__43994;
chunk__43836_43945 = G__43995;
count__43837_43946 = G__43996;
i__43838_43947 = G__43997;
continue;
} else {
var temp__4126__auto___43998 = cljs.core.seq.call(null,seq__43835_43944);
if(temp__4126__auto___43998){
var seq__43835_43999__$1 = temp__4126__auto___43998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43835_43999__$1)){
var c__18901__auto___44000 = cljs.core.chunk_first.call(null,seq__43835_43999__$1);
var G__44001 = cljs.core.chunk_rest.call(null,seq__43835_43999__$1);
var G__44002 = c__18901__auto___44000;
var G__44003 = cljs.core.count.call(null,c__18901__auto___44000);
var G__44004 = (0);
seq__43835_43944 = G__44001;
chunk__43836_43945 = G__44002;
count__43837_43946 = G__44003;
i__43838_43947 = G__44004;
continue;
} else {
var entity_44005 = cljs.core.first.call(null,seq__43835_43999__$1);
var seq__43849_44006 = cljs.core.seq.call(null,cljs.core.get.call(null,entity_44005,new cljs.core.Keyword(null,"tweens","tweens",-1927735551)));
var chunk__43850_44007 = null;
var count__43851_44008 = (0);
var i__43852_44009 = (0);
while(true){
if((i__43852_44009 < count__43851_44008)){
var vec__43853_44010 = cljs.core._nth.call(null,chunk__43850_44007,i__43852_44009);
var key_44011 = cljs.core.nth.call(null,vec__43853_44010,(0),null);
var map__43854_44012 = cljs.core.nth.call(null,vec__43853_44010,(1),null);
var map__43854_44013__$1 = ((cljs.core.seq_QMARK_.call(null,map__43854_44012))?cljs.core.apply.call(null,cljs.core.hash_map,map__43854_44012):map__43854_44012);
var tween_44014 = map__43854_44013__$1;
var when_done_44015 = cljs.core.get.call(null,map__43854_44013__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_44016 = cljs.core.get.call(null,map__43854_44013__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_44017 = cljs.core.get.call(null,map__43854_44013__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_44018 = cljs.core.get.call(null,map__43854_44013__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_44019 = cljs.core.get.call(null,map__43854_44013__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_44020 = cljs.core.get.call(null,map__43854_44013__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_44017)){
om.core.update_BANG_.call(null,tween_44014,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_44014,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_44005,key_44011));
} else {
var easing_fn_44021 = (function (){var G__43855 = (((easing_44018 instanceof cljs.core.Keyword))?easing_44018.fqn:null);
switch (G__43855) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_44018)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_44005,key_44011,easing_fn_44021.call(null,initial_44016,target_44020,progress_44017,duration_44019));

om.core.transact_BANG_.call(null,tween_44014,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_44019,progress_44017)){
om.core.transact_BANG_.call(null,entity_44005,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__43849_44006,chunk__43850_44007,count__43851_44008,i__43852_44009,seq__43835_43944,chunk__43836_43945,count__43837_43946,i__43838_43947,vec__43853_44010,key_44011,map__43854_44012,map__43854_44013__$1,tween_44014,when_done_44015,initial_44016,progress_44017,easing_44018,duration_44019,target_44020,entity_44005,seq__43835_43999__$1,temp__4126__auto___43998,___$1,map__43834,map__43834__$1,game_chan){
return (function (p1__43826_SHARP_){
return cljs.core.dissoc.call(null,p1__43826_SHARP_,key_44011);
});})(seq__43849_44006,chunk__43850_44007,count__43851_44008,i__43852_44009,seq__43835_43944,chunk__43836_43945,count__43837_43946,i__43838_43947,vec__43853_44010,key_44011,map__43854_44012,map__43854_44013__$1,tween_44014,when_done_44015,initial_44016,progress_44017,easing_44018,duration_44019,target_44020,entity_44005,seq__43835_43999__$1,temp__4126__auto___43998,___$1,map__43834,map__43834__$1,game_chan))
);

if(cljs.core.truth_(when_done_44015)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_44015,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__44023 = seq__43849_44006;
var G__44024 = chunk__43850_44007;
var G__44025 = count__43851_44008;
var G__44026 = (i__43852_44009 + (1));
seq__43849_44006 = G__44023;
chunk__43850_44007 = G__44024;
count__43851_44008 = G__44025;
i__43852_44009 = G__44026;
continue;
} else {
var temp__4126__auto___44027__$1 = cljs.core.seq.call(null,seq__43849_44006);
if(temp__4126__auto___44027__$1){
var seq__43849_44028__$1 = temp__4126__auto___44027__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43849_44028__$1)){
var c__18901__auto___44029 = cljs.core.chunk_first.call(null,seq__43849_44028__$1);
var G__44030 = cljs.core.chunk_rest.call(null,seq__43849_44028__$1);
var G__44031 = c__18901__auto___44029;
var G__44032 = cljs.core.count.call(null,c__18901__auto___44029);
var G__44033 = (0);
seq__43849_44006 = G__44030;
chunk__43850_44007 = G__44031;
count__43851_44008 = G__44032;
i__43852_44009 = G__44033;
continue;
} else {
var vec__43856_44034 = cljs.core.first.call(null,seq__43849_44028__$1);
var key_44035 = cljs.core.nth.call(null,vec__43856_44034,(0),null);
var map__43857_44036 = cljs.core.nth.call(null,vec__43856_44034,(1),null);
var map__43857_44037__$1 = ((cljs.core.seq_QMARK_.call(null,map__43857_44036))?cljs.core.apply.call(null,cljs.core.hash_map,map__43857_44036):map__43857_44036);
var tween_44038 = map__43857_44037__$1;
var when_done_44039 = cljs.core.get.call(null,map__43857_44037__$1,new cljs.core.Keyword(null,"when-done","when-done",889619364));
var initial_44040 = cljs.core.get.call(null,map__43857_44037__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var progress_44041 = cljs.core.get.call(null,map__43857_44037__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var easing_44042 = cljs.core.get.call(null,map__43857_44037__$1,new cljs.core.Keyword(null,"easing","easing",735372043));
var duration_44043 = cljs.core.get.call(null,map__43857_44037__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var target_44044 = cljs.core.get.call(null,map__43857_44037__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.not.call(null,progress_44041)){
om.core.update_BANG_.call(null,tween_44038,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,tween_44038,new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.get.call(null,entity_44005,key_44035));
} else {
var easing_fn_44045 = (function (){var G__43858 = (((easing_44042 instanceof cljs.core.Keyword))?easing_44042.fqn:null);
switch (G__43858) {
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
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(easing_44042)].join('')));

}
})();
om.core.update_BANG_.call(null,entity_44005,key_44035,easing_fn_44045.call(null,initial_44040,target_44044,progress_44041,duration_44043));

om.core.transact_BANG_.call(null,tween_44038,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_44043,progress_44041)){
om.core.transact_BANG_.call(null,entity_44005,new cljs.core.Keyword(null,"tweens","tweens",-1927735551),((function (seq__43849_44006,chunk__43850_44007,count__43851_44008,i__43852_44009,seq__43835_43944,chunk__43836_43945,count__43837_43946,i__43838_43947,vec__43856_44034,key_44035,map__43857_44036,map__43857_44037__$1,tween_44038,when_done_44039,initial_44040,progress_44041,easing_44042,duration_44043,target_44044,seq__43849_44028__$1,temp__4126__auto___44027__$1,entity_44005,seq__43835_43999__$1,temp__4126__auto___43998,___$1,map__43834,map__43834__$1,game_chan){
return (function (p1__43826_SHARP_){
return cljs.core.dissoc.call(null,p1__43826_SHARP_,key_44035);
});})(seq__43849_44006,chunk__43850_44007,count__43851_44008,i__43852_44009,seq__43835_43944,chunk__43836_43945,count__43837_43946,i__43838_43947,vec__43856_44034,key_44035,map__43857_44036,map__43857_44037__$1,tween_44038,when_done_44039,initial_44040,progress_44041,easing_44042,duration_44043,target_44044,seq__43849_44028__$1,temp__4126__auto___44027__$1,entity_44005,seq__43835_43999__$1,temp__4126__auto___43998,___$1,map__43834,map__43834__$1,game_chan))
);

if(cljs.core.truth_(when_done_44039)){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap.fromArray([when_done_44039,cljs.core.PersistentArrayMap.EMPTY], true, false));
} else {
}
} else {
}
}

var G__44047 = cljs.core.next.call(null,seq__43849_44028__$1);
var G__44048 = null;
var G__44049 = (0);
var G__44050 = (0);
seq__43849_44006 = G__44047;
chunk__43850_44007 = G__44048;
count__43851_44008 = G__44049;
i__43852_44009 = G__44050;
continue;
}
} else {
}
}
break;
}

var G__44051 = cljs.core.next.call(null,seq__43835_43999__$1);
var G__44052 = null;
var G__44053 = (0);
var G__44054 = (0);
seq__43835_43944 = G__44051;
chunk__43836_43945 = G__44052;
count__43837_43946 = G__44053;
i__43838_43947 = G__44054;
continue;
}
} else {
}
}
break;
}

var seq__43859_44055 = cljs.core.seq.call(null,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)));
var chunk__43860_44056 = null;
var count__43861_44057 = (0);
var i__43862_44058 = (0);
while(true){
if((i__43862_44058 < count__43861_44057)){
var entity_44059 = cljs.core._nth.call(null,chunk__43860_44056,i__43862_44058);
var temp__4126__auto___44060 = new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(entity_44059);
if(cljs.core.truth_(temp__4126__auto___44060)){
var map__43863_44061 = temp__4126__auto___44060;
var map__43863_44062__$1 = ((cljs.core.seq_QMARK_.call(null,map__43863_44061))?cljs.core.apply.call(null,cljs.core.hash_map,map__43863_44061):map__43863_44061);
var animation_44063 = map__43863_44062__$1;
var current_44064 = cljs.core.get.call(null,map__43863_44062__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var progress_44065 = cljs.core.get.call(null,map__43863_44062__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var duration_44066 = cljs.core.get.call(null,map__43863_44062__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var frames_44067 = cljs.core.get.call(null,map__43863_44062__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.not.call(null,progress_44065)){
om.core.update_BANG_.call(null,animation_44063,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,animation_44063,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.first.call(null,frames_44067));
} else {
om.core.transact_BANG_.call(null,animation_44063,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_44066,progress_44065)){
om.core.update_BANG_.call(null,animation_44063,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

var current_index_44068 = cljs.core.to_array.call(null,frames_44067).indexOf(current_44064);
var next_index_44069 = ((cljs.core._EQ_.call(null,(cljs.core.count.call(null,frames_44067) - (1)),current_index_44068))?(0):(current_index_44068 + (1)));
om.core.update_BANG_.call(null,animation_44063,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.get.call(null,frames_44067,next_index_44069));
} else {
}
}
} else {
}

var G__44070 = seq__43859_44055;
var G__44071 = chunk__43860_44056;
var G__44072 = count__43861_44057;
var G__44073 = (i__43862_44058 + (1));
seq__43859_44055 = G__44070;
chunk__43860_44056 = G__44071;
count__43861_44057 = G__44072;
i__43862_44058 = G__44073;
continue;
} else {
var temp__4126__auto___44074 = cljs.core.seq.call(null,seq__43859_44055);
if(temp__4126__auto___44074){
var seq__43859_44075__$1 = temp__4126__auto___44074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43859_44075__$1)){
var c__18901__auto___44076 = cljs.core.chunk_first.call(null,seq__43859_44075__$1);
var G__44077 = cljs.core.chunk_rest.call(null,seq__43859_44075__$1);
var G__44078 = c__18901__auto___44076;
var G__44079 = cljs.core.count.call(null,c__18901__auto___44076);
var G__44080 = (0);
seq__43859_44055 = G__44077;
chunk__43860_44056 = G__44078;
count__43861_44057 = G__44079;
i__43862_44058 = G__44080;
continue;
} else {
var entity_44081 = cljs.core.first.call(null,seq__43859_44075__$1);
var temp__4126__auto___44082__$1 = new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(entity_44081);
if(cljs.core.truth_(temp__4126__auto___44082__$1)){
var map__43864_44083 = temp__4126__auto___44082__$1;
var map__43864_44084__$1 = ((cljs.core.seq_QMARK_.call(null,map__43864_44083))?cljs.core.apply.call(null,cljs.core.hash_map,map__43864_44083):map__43864_44083);
var animation_44085 = map__43864_44084__$1;
var current_44086 = cljs.core.get.call(null,map__43864_44084__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var progress_44087 = cljs.core.get.call(null,map__43864_44084__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var duration_44088 = cljs.core.get.call(null,map__43864_44084__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var frames_44089 = cljs.core.get.call(null,map__43864_44084__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.not.call(null,progress_44087)){
om.core.update_BANG_.call(null,animation_44085,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

om.core.update_BANG_.call(null,animation_44085,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.first.call(null,frames_44089));
} else {
om.core.transact_BANG_.call(null,animation_44085,new cljs.core.Keyword(null,"progress","progress",244323547),cljs.core.inc);

if(cljs.core._EQ_.call(null,duration_44088,progress_44087)){
om.core.update_BANG_.call(null,animation_44085,new cljs.core.Keyword(null,"progress","progress",244323547),(0));

var current_index_44090 = cljs.core.to_array.call(null,frames_44089).indexOf(current_44086);
var next_index_44091 = ((cljs.core._EQ_.call(null,(cljs.core.count.call(null,frames_44089) - (1)),current_index_44090))?(0):(current_index_44090 + (1)));
om.core.update_BANG_.call(null,animation_44085,new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.get.call(null,frames_44089,next_index_44091));
} else {
}
}
} else {
}

var G__44092 = cljs.core.next.call(null,seq__43859_44075__$1);
var G__44093 = null;
var G__44094 = (0);
var G__44095 = (0);
seq__43859_44055 = G__44092;
chunk__43860_44056 = G__44093;
count__43861_44057 = G__44094;
i__43862_44058 = G__44095;
continue;
}
} else {
}
}
break;
}

var entities_44096 = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403));
var lands_44097 = cljs.core.filter.call(null,((function (entities_44096,___$1,map__43834,map__43834__$1,game_chan){
return (function (p1__43827_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__43827_SHARP_));
});})(entities_44096,___$1,map__43834,map__43834__$1,game_chan))
,entities_44096);
var filled_44098 = cljs.core.filter.call(null,((function (entities_44096,lands_44097,___$1,map__43834,map__43834__$1,game_chan){
return (function (p1__43828_SHARP_){
return ((0) < new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(p1__43828_SHARP_));
});})(entities_44096,lands_44097,___$1,map__43834,map__43834__$1,game_chan))
,lands_44097);
var all_filled_44099 = cljs.core.every_QMARK_.call(null,((function (entities_44096,lands_44097,filled_44098,___$1,map__43834,map__43834__$1,game_chan){
return (function (p1__43829_SHARP_){
return ((0) < new cljs.core.Keyword(null,"stage","stage",1843544772).cljs$core$IFn$_invoke$arity$1(p1__43829_SHARP_));
});})(entities_44096,lands_44097,filled_44098,___$1,map__43834,map__43834__$1,game_chan))
,lands_44097);
if(cljs.core.truth_(cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)))){
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.count.call(null,filled_44098),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.count.call(null,lands_44097)], null));

if(all_filled_44099){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-win","game-win",-833284778),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
}
} else {
}

return cljs.core.apply.call(null,React.DOM.div,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.svg,{"onClick": ((function (___$1,map__43834,map__43834__$1,game_chan){
return (function (e){
var x = e.pageX;
var y = e.pageY;
if(((((200) < x)) && ((x < (400)))) && ((((30) < y)) && ((y < (200))))){
return cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate-tetrimino","rotate-tetrimino",-608997480),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return null;
}
});})(___$1,map__43834,map__43834__$1,game_chan))
, "onMouseUp": ((function (___$1,map__43834,map__43834__$1,game_chan){
return (function (e){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null),false);
});})(___$1,map__43834,map__43834__$1,game_chan))
, "onMouseDown": ((function (___$1,map__43834,map__43834__$1,game_chan){
return (function (e){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),e.pageX,new cljs.core.Keyword(null,"y","y",-1757859776),e.pageY], null));
});})(___$1,map__43834,map__43834__$1,game_chan))
, "onMouseMove": ((function (___$1,map__43834,map__43834__$1,game_chan){
return (function (e){
var x = e.pageX;
var y = e.pageY;
om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"current","current",-1088038603)], null)));

om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));

var new_selection_44100 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,((y - romtoff.core.Y_OFFSET) - romtoff.core.Y_IN_OFFSET),romtoff.core.TILE_HEIGHT),cljs.core.quot.call(null,((x - romtoff.core.X_OFFSET) - romtoff.core.X_IN_OFFSET),romtoff.core.TILE_WIDTH)], null);
var current_selection_44101 = cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
if(cljs.core.not_EQ_.call(null,new_selection_44100,current_selection_44101)){
om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),current_selection_44101);

om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_selection_44100);

if(cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prev","prev",-1597069226),current_selection_44101,new cljs.core.Keyword(null,"current","current",-1088038603),new_selection_44100], null)], null));
} else {
}
} else {
}

if(cljs.core.truth_(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"down","down",1565245570)], null)))){
var map__43865 = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"mouse","mouse",478628972));
var map__43865__$1 = ((cljs.core.seq_QMARK_.call(null,map__43865))?cljs.core.apply.call(null,cljs.core.hash_map,map__43865):map__43865);
var prev = cljs.core.get.call(null,map__43865__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var current = cljs.core.get.call(null,map__43865__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var dx = (current.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) - prev.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
var dy = (current.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)) - prev.call(null,new cljs.core.Keyword(null,"y","y",-1757859776)));
return null;
} else {
return null;
}
});})(___$1,map__43834,map__43834__$1,game_chan))
, "style": {"float": "left"}, "height": (1136), "width": (640)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.rect({"style": {"fill": "rgb(250, 250, 200)"}, "height": (1136), "width": (640), "y": (0), "x": (0)}),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.g,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (___$1,map__43834,map__43834__$1,game_chan){
return (function (p__43866){
var map__43867 = p__43866;
var map__43867__$1 = ((cljs.core.seq_QMARK_.call(null,map__43867))?cljs.core.apply.call(null,cljs.core.hash_map,map__43867):map__43867);
var entity = map__43867__$1;
var type = cljs.core.get.call(null,map__43867__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return om.core.build.call(null,romtoff.core.builder,entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919),game_chan], null)], null));
});})(___$1,map__43834,map__43834__$1,game_chan))
,cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403)))],null)))):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?(function (){var tetrimino = cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var offset_x = (270);
var offset_y = (70);
var height = ((22) * cljs.core.count.call(null,tetrimino));
var width = ((22) * cljs.core.count.call(null,cljs.core.first.call(null,tetrimino)));
var iter__18870__auto__ = ((function (tetrimino,offset_x,offset_y,height,width,___$1,map__43834,map__43834__$1,game_chan){
return (function romtoff$core$iter__43868(s__43869){
return (new cljs.core.LazySeq(null,((function (tetrimino,offset_x,offset_y,height,width,___$1,map__43834,map__43834__$1,game_chan){
return (function (){
var s__43869__$1 = s__43869;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__43869__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var r = cljs.core.first.call(null,xs__4624__auto__);
var iterys__18866__auto__ = ((function (s__43869__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__43834,map__43834__$1,game_chan){
return (function romtoff$core$iter__43868_$_iter__43870(s__43871){
return (new cljs.core.LazySeq(null,((function (s__43869__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__43834,map__43834__$1,game_chan){
return (function (){
var s__43871__$1 = s__43871;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__43871__$1);
if(temp__4126__auto____$1){
var s__43871__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43871__$2)){
var c__18868__auto__ = cljs.core.chunk_first.call(null,s__43871__$2);
var size__18869__auto__ = cljs.core.count.call(null,c__18868__auto__);
var b__43873 = cljs.core.chunk_buffer.call(null,size__18869__auto__);
if((function (){var i__43872 = (0);
while(true){
if((i__43872 < size__18869__auto__)){
var c = cljs.core._nth.call(null,c__18868__auto__,i__43872);
cljs.core.chunk_append.call(null,b__43873,((cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,tetrimino,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))))?React.DOM.rect({"style": {"fill": "rgb(250, 250, 200)"}, "height": (20), "width": (20), "y": (((65) + (((88) - height) / (2))) + ((22) * r)), "x": (((274) + (((88) - width) / (2))) + ((22) * c))}):null));

var G__44102 = (i__43872 + (1));
i__43872 = G__44102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43873),romtoff$core$iter__43868_$_iter__43870.call(null,cljs.core.chunk_rest.call(null,s__43871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43873),null);
}
} else {
var c = cljs.core.first.call(null,s__43871__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,(1),cljs.core.get_in.call(null,tetrimino,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))))?React.DOM.rect({"style": {"fill": "rgb(250, 250, 200)"}, "height": (20), "width": (20), "y": (((65) + (((88) - height) / (2))) + ((22) * r)), "x": (((274) + (((88) - width) / (2))) + ((22) * c))}):null),romtoff$core$iter__43868_$_iter__43870.call(null,cljs.core.rest.call(null,s__43871__$2)));
}
} else {
return null;
}
break;
}
});})(s__43869__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__43834,map__43834__$1,game_chan))
,null,null));
});})(s__43869__$1,r,xs__4624__auto__,temp__4126__auto__,tetrimino,offset_x,offset_y,height,width,___$1,map__43834,map__43834__$1,game_chan))
;
var fs__18867__auto__ = cljs.core.seq.call(null,iterys__18866__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,tetrimino)))));
if(fs__18867__auto__){
return cljs.core.concat.call(null,fs__18867__auto__,romtoff$core$iter__43868.call(null,cljs.core.rest.call(null,s__43869__$1)));
} else {
var G__44103 = cljs.core.rest.call(null,s__43869__$1);
s__43869__$1 = G__44103;
continue;
}
} else {
return null;
}
break;
}
});})(tetrimino,offset_x,offset_y,height,width,___$1,map__43834,map__43834__$1,game_chan))
,null,null));
});})(tetrimino,offset_x,offset_y,height,width,___$1,map__43834,map__43834__$1,game_chan))
;
return iter__18870__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,tetrimino)));
})():null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?React.DOM.text({"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (76), "x": (92)},"?"):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.text,{"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (161), "x": (92)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255))],null)))):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.text,{"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (161), "x": (500)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"current","current",-1088038603)], null))),cljs.core.str("/"),cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"target","target",253001721)], null)))].join('')],null)))):null),(((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true))?cljs.core.apply.call(null,React.DOM.text,{"fontSize": (25), "fontFamily": "Courier New", "fill": "white", "y": (76), "x": (500)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780))],null)))):null),((!((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695)) === false) && (cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === true)))?((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-started","game-started",626704795)) === false)?React.DOM.g({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__43834,map__43834__$1,game_chan){
return (function (___$2){
return cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-level","load-level",868893349),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [romtoff.core.level_1,romtoff.core.level_2,romtoff.core.level_3,romtoff.core.level_4,romtoff.core.level_5], null))], null)], null));
});})(___$1,map__43834,map__43834__$1,game_chan))
), "height": (1136), "width": (640), "dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image width=\""),cljs.core.str((640)),cljs.core.str("\" height=\""),cljs.core.str((1136)),cljs.core.str("\" x=\""),cljs.core.str((0)),cljs.core.str("\" y=\""),cljs.core.str((0)),cljs.core.str("\" xlink:href=\""),cljs.core.str("img/start.png"),cljs.core.str("\" />")].join('')}}):((cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"game-won","game-won",-1358704823)) === true)?cljs.core.apply.call(null,React.DOM.g,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.g({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__43834,map__43834__$1,game_chan){
return (function (___$2){
return window.location.reload();
});})(___$1,map__43834,map__43834__$1,game_chan))
), "height": (1136), "width": (640), "dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image width=\""),cljs.core.str((640)),cljs.core.str("\" height=\""),cljs.core.str((1136)),cljs.core.str("\" x=\""),cljs.core.str((0)),cljs.core.str("\" y=\""),cljs.core.str((0)),cljs.core.str("\" xlink:href=\""),cljs.core.str("img/win.png"),cljs.core.str("\" />")].join('')}}),cljs.core.apply.call(null,React.DOM.text,{"fontSize": (50), "fontFamily": "Courier New", "fill": "white", "y": (900), "x": (250)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780))],null))))],null)))):React.DOM.g({"onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__43834,map__43834__$1,game_chan){
return (function (___$2){
return window.location.reload();
});})(___$1,map__43834,map__43834__$1,game_chan))
), "height": (1136), "width": (640), "dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image width=\""),cljs.core.str((640)),cljs.core.str("\" height=\""),cljs.core.str((1136)),cljs.core.str("\" x=\""),cljs.core.str((0)),cljs.core.str("\" y=\""),cljs.core.str((0)),cljs.core.str("\" xlink:href=\""),cljs.core.str("img/moves.png"),cljs.core.str("\" />")].join('')}}))):null)],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"height": (800), "width": (400), "float": "left"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.img({"src": "img/1.jpg", "float": "left"})],null))))],null))));
});

romtoff.core.t43830.prototype.om$core$IDidMount$ = true;

romtoff.core.t43830.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
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

romtoff.core.t43830.prototype.om$core$IWillMount$ = true;

romtoff.core.t43830.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
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
var seq__43874 = cljs.core.seq.call(null,messages);
var chunk__43875 = null;
var count__43876 = (0);
var i__43877 = (0);
while(true){
if((i__43877 < count__43876)){
var vec__43878 = cljs.core._nth.call(null,chunk__43875,i__43877);
var type = cljs.core.nth.call(null,vec__43878,(0),null);
var contents = cljs.core.nth.call(null,vec__43878,(1),null);
var G__43879_44104 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__43879_44104) {
case "increase-score":
var score_44106 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"score","score",-1963588780));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(contents) + score_44106));

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
var moves_44107 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"moves","moves",927465255));
var new_moves_44108 = (moves_44107 - (1));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),new_moves_44108);

if((new_moves_44108 === (0))){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-over","game-over",-607322695),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),cljs.core.rand_nth.call(null,romtoff.core.tetriminos));
}

break;
case "tetrimino-at":
var t_44109 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_44110 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(contents);
var tetrimino_blocks_coords_44111 = romtoff.core.tetrimino_coords.call(null,t_44109,c_44110);
if(cljs.core.every_QMARK_.call(null,((function (seq__43874,chunk__43875,count__43876,i__43877,tetrimino_blocks_coords_44111,t_44109,c_44110,G__43879_44104,vec__43878,type,contents,game_chan,___$1){
return (function (p1__43825_SHARP_){
return romtoff.core.in_bounds.call(null,p1__43825_SHARP_);
});})(seq__43874,chunk__43875,count__43876,i__43877,tetrimino_blocks_coords_44111,t_44109,c_44110,G__43879_44104,vec__43878,type,contents,game_chan,___$1))
,tetrimino_blocks_coords_44111)){
var seq__43880_44112 = cljs.core.seq.call(null,tetrimino_blocks_coords_44111);
var chunk__43881_44113 = null;
var count__43882_44114 = (0);
var i__43883_44115 = (0);
while(true){
if((i__43883_44115 < count__43882_44114)){
var vec__43884_44116 = cljs.core._nth.call(null,chunk__43881_44113,i__43883_44115);
var r_44117 = cljs.core.nth.call(null,vec__43884_44116,(0),null);
var c_44118__$1 = cljs.core.nth.call(null,vec__43884_44116,(1),null);
var tbc_44119 = vec__43884_44116;
var block_type_44120 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_44119));
var visual_44121 = (function (){var G__43885 = (((block_type_44120 instanceof cljs.core.Keyword))?block_type_44120.fqn:null);
switch (G__43885) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/1-1.png","img/2-1.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_44120)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_44111,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_44119)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_44117),cljs.core.str("-"),cljs.core.str(c_44118__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44118__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44117 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_44121)));

var G__44123 = seq__43880_44112;
var G__44124 = chunk__43881_44113;
var G__44125 = count__43882_44114;
var G__44126 = (i__43883_44115 + (1));
seq__43880_44112 = G__44123;
chunk__43881_44113 = G__44124;
count__43882_44114 = G__44125;
i__43883_44115 = G__44126;
continue;
} else {
var temp__4126__auto___44127 = cljs.core.seq.call(null,seq__43880_44112);
if(temp__4126__auto___44127){
var seq__43880_44128__$1 = temp__4126__auto___44127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43880_44128__$1)){
var c__18901__auto___44129 = cljs.core.chunk_first.call(null,seq__43880_44128__$1);
var G__44130 = cljs.core.chunk_rest.call(null,seq__43880_44128__$1);
var G__44131 = c__18901__auto___44129;
var G__44132 = cljs.core.count.call(null,c__18901__auto___44129);
var G__44133 = (0);
seq__43880_44112 = G__44130;
chunk__43881_44113 = G__44131;
count__43882_44114 = G__44132;
i__43883_44115 = G__44133;
continue;
} else {
var vec__43886_44134 = cljs.core.first.call(null,seq__43880_44128__$1);
var r_44135 = cljs.core.nth.call(null,vec__43886_44134,(0),null);
var c_44136__$1 = cljs.core.nth.call(null,vec__43886_44134,(1),null);
var tbc_44137 = vec__43886_44134;
var block_type_44138 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_44137));
var visual_44139 = (function (){var G__43887 = (((block_type_44138 instanceof cljs.core.Keyword))?block_type_44138.fqn:null);
switch (G__43887) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/1-1.png","img/2-1.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_44138)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_44111,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_44137)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_44135),cljs.core.str("-"),cljs.core.str(c_44136__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44136__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44135 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_44139)));

var G__44141 = cljs.core.next.call(null,seq__43880_44128__$1);
var G__44142 = null;
var G__44143 = (0);
var G__44144 = (0);
seq__43880_44112 = G__44141;
chunk__43881_44113 = G__44142;
count__43882_44114 = G__44143;
i__43883_44115 = G__44144;
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
var data_44145__$1 = om.core.get_props.call(null,self__.owner);
var entities_44146 = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(data_44145__$1);
var arrow_ids_44147 = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,((function (seq__43874,chunk__43875,count__43876,i__43877,data_44145__$1,entities_44146,G__43879_44104,vec__43878,type,contents,game_chan,___$1){
return (function (p1__43823_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__43823_SHARP_));
});})(seq__43874,chunk__43875,count__43876,i__43877,data_44145__$1,entities_44146,G__43879_44104,vec__43878,type,contents,game_chan,___$1))
,entities_44146)));
var no_arrows_44148 = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (seq__43874,chunk__43875,count__43876,i__43877,data_44145__$1,entities_44146,arrow_ids_44147,G__43879_44104,vec__43878,type,contents,game_chan,___$1){
return (function (p1__43824_SHARP_){
return cljs.core.contains_QMARK_.call(null,arrow_ids_44147,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43824_SHARP_));
});})(seq__43874,chunk__43875,count__43876,i__43877,data_44145__$1,entities_44146,arrow_ids_44147,G__43879_44104,vec__43878,type,contents,game_chan,___$1))
,entities_44146));
om.core.update_BANG_.call(null,data_44145__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),no_arrows_44148);

break;
case "selection":
var vec__43888_44149 = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(contents);
var r_44150 = cljs.core.nth.call(null,vec__43888_44149,(0),null);
var c_44151 = cljs.core.nth.call(null,vec__43888_44149,(1),null);
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tetrimino-at","tetrimino-at",1514048990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_44150,c_44151], null)], null)], null));

break;
case "load-level":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(0));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),(15));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),false);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.PersistentVector.EMPTY);

var level_44152 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(contents);
var seq__43889_44153 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,level_44152)));
var chunk__43894_44154 = null;
var count__43895_44155 = (0);
var i__43896_44156 = (0);
while(true){
if((i__43896_44156 < count__43895_44155)){
var r_44157 = cljs.core._nth.call(null,chunk__43894_44154,i__43896_44156);
var seq__43897_44158 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_44152))));
var chunk__43898_44159 = null;
var count__43899_44160 = (0);
var i__43900_44161 = (0);
while(true){
if((i__43900_44161 < count__43899_44160)){
var c_44162 = cljs.core._nth.call(null,chunk__43898_44159,i__43900_44161);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_44157,c_44162,level_44152))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44157,c_44162),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44162 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44157 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44157,c_44162),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44162 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44157 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_44152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_44157,c_44162], null)))], null)));
}

var G__44163 = seq__43897_44158;
var G__44164 = chunk__43898_44159;
var G__44165 = count__43899_44160;
var G__44166 = (i__43900_44161 + (1));
seq__43897_44158 = G__44163;
chunk__43898_44159 = G__44164;
count__43899_44160 = G__44165;
i__43900_44161 = G__44166;
continue;
} else {
var temp__4126__auto___44167 = cljs.core.seq.call(null,seq__43897_44158);
if(temp__4126__auto___44167){
var seq__43897_44168__$1 = temp__4126__auto___44167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43897_44168__$1)){
var c__18901__auto___44169 = cljs.core.chunk_first.call(null,seq__43897_44168__$1);
var G__44170 = cljs.core.chunk_rest.call(null,seq__43897_44168__$1);
var G__44171 = c__18901__auto___44169;
var G__44172 = cljs.core.count.call(null,c__18901__auto___44169);
var G__44173 = (0);
seq__43897_44158 = G__44170;
chunk__43898_44159 = G__44171;
count__43899_44160 = G__44172;
i__43900_44161 = G__44173;
continue;
} else {
var c_44174 = cljs.core.first.call(null,seq__43897_44168__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_44157,c_44174,level_44152))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44157,c_44174),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44174 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44157 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44157,c_44174),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44174 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44157 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_44152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_44157,c_44174], null)))], null)));
}

var G__44175 = cljs.core.next.call(null,seq__43897_44168__$1);
var G__44176 = null;
var G__44177 = (0);
var G__44178 = (0);
seq__43897_44158 = G__44175;
chunk__43898_44159 = G__44176;
count__43899_44160 = G__44177;
i__43900_44161 = G__44178;
continue;
}
} else {
}
}
break;
}

var G__44179 = seq__43889_44153;
var G__44180 = chunk__43894_44154;
var G__44181 = count__43895_44155;
var G__44182 = (i__43896_44156 + (1));
seq__43889_44153 = G__44179;
chunk__43894_44154 = G__44180;
count__43895_44155 = G__44181;
i__43896_44156 = G__44182;
continue;
} else {
var temp__4126__auto___44183 = cljs.core.seq.call(null,seq__43889_44153);
if(temp__4126__auto___44183){
var seq__43889_44184__$1 = temp__4126__auto___44183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43889_44184__$1)){
var c__18901__auto___44185 = cljs.core.chunk_first.call(null,seq__43889_44184__$1);
var G__44186 = cljs.core.chunk_rest.call(null,seq__43889_44184__$1);
var G__44187 = c__18901__auto___44185;
var G__44188 = cljs.core.count.call(null,c__18901__auto___44185);
var G__44189 = (0);
seq__43889_44153 = G__44186;
chunk__43894_44154 = G__44187;
count__43895_44155 = G__44188;
i__43896_44156 = G__44189;
continue;
} else {
var r_44190 = cljs.core.first.call(null,seq__43889_44184__$1);
var seq__43890_44191 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_44152))));
var chunk__43891_44192 = null;
var count__43892_44193 = (0);
var i__43893_44194 = (0);
while(true){
if((i__43893_44194 < count__43892_44193)){
var c_44195 = cljs.core._nth.call(null,chunk__43891_44192,i__43893_44194);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_44190,c_44195,level_44152))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44190,c_44195),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44195 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44190 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44190,c_44195),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44195 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44190 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_44152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_44190,c_44195], null)))], null)));
}

var G__44196 = seq__43890_44191;
var G__44197 = chunk__43891_44192;
var G__44198 = count__43892_44193;
var G__44199 = (i__43893_44194 + (1));
seq__43890_44191 = G__44196;
chunk__43891_44192 = G__44197;
count__43892_44193 = G__44198;
i__43893_44194 = G__44199;
continue;
} else {
var temp__4126__auto___44200__$1 = cljs.core.seq.call(null,seq__43890_44191);
if(temp__4126__auto___44200__$1){
var seq__43890_44201__$1 = temp__4126__auto___44200__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43890_44201__$1)){
var c__18901__auto___44202 = cljs.core.chunk_first.call(null,seq__43890_44201__$1);
var G__44203 = cljs.core.chunk_rest.call(null,seq__43890_44201__$1);
var G__44204 = c__18901__auto___44202;
var G__44205 = cljs.core.count.call(null,c__18901__auto___44202);
var G__44206 = (0);
seq__43890_44191 = G__44203;
chunk__43891_44192 = G__44204;
count__43892_44193 = G__44205;
i__43893_44194 = G__44206;
continue;
} else {
var c_44207 = cljs.core.first.call(null,seq__43890_44201__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_44190,c_44207,level_44152))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44190,c_44207),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44207 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44190 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44190,c_44207),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44207 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44190 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_44152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_44190,c_44207], null)))], null)));
}

var G__44208 = cljs.core.next.call(null,seq__43890_44201__$1);
var G__44209 = null;
var G__44210 = (0);
var G__44211 = (0);
seq__43890_44191 = G__44208;
chunk__43891_44192 = G__44209;
count__43892_44193 = G__44210;
i__43893_44194 = G__44211;
continue;
}
} else {
}
}
break;
}

var G__44212 = cljs.core.next.call(null,seq__43889_44184__$1);
var G__44213 = null;
var G__44214 = (0);
var G__44215 = (0);
seq__43889_44153 = G__44212;
chunk__43894_44154 = G__44213;
count__43895_44155 = G__44214;
i__43896_44156 = G__44215;
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

var G__44216 = seq__43874;
var G__44217 = chunk__43875;
var G__44218 = count__43876;
var G__44219 = (i__43877 + (1));
seq__43874 = G__44216;
chunk__43875 = G__44217;
count__43876 = G__44218;
i__43877 = G__44219;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__43874);
if(temp__4126__auto__){
var seq__43874__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43874__$1)){
var c__18901__auto__ = cljs.core.chunk_first.call(null,seq__43874__$1);
var G__44220 = cljs.core.chunk_rest.call(null,seq__43874__$1);
var G__44221 = c__18901__auto__;
var G__44222 = cljs.core.count.call(null,c__18901__auto__);
var G__44223 = (0);
seq__43874 = G__44220;
chunk__43875 = G__44221;
count__43876 = G__44222;
i__43877 = G__44223;
continue;
} else {
var vec__43901 = cljs.core.first.call(null,seq__43874__$1);
var type = cljs.core.nth.call(null,vec__43901,(0),null);
var contents = cljs.core.nth.call(null,vec__43901,(1),null);
var G__43902_44224 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__43902_44224) {
case "increase-score":
var score_44226 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"score","score",-1963588780));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(contents) + score_44226));

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
var moves_44227 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"moves","moves",927465255));
var new_moves_44228 = (moves_44227 - (1));
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),new_moves_44228);

if((new_moves_44228 === (0))){
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-over","game-over",-607322695),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883),cljs.core.rand_nth.call(null,romtoff.core.tetriminos));
}

break;
case "tetrimino-at":
var t_44229 = cljs.core.get.call(null,cljs.core.deref.call(null,romtoff.core.app_state),new cljs.core.Keyword(null,"next-tetrimino","next-tetrimino",69356883));
var c_44230 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(contents);
var tetrimino_blocks_coords_44231 = romtoff.core.tetrimino_coords.call(null,t_44229,c_44230);
if(cljs.core.every_QMARK_.call(null,((function (seq__43874,chunk__43875,count__43876,i__43877,tetrimino_blocks_coords_44231,t_44229,c_44230,G__43902_44224,vec__43901,type,contents,seq__43874__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__43825_SHARP_){
return romtoff.core.in_bounds.call(null,p1__43825_SHARP_);
});})(seq__43874,chunk__43875,count__43876,i__43877,tetrimino_blocks_coords_44231,t_44229,c_44230,G__43902_44224,vec__43901,type,contents,seq__43874__$1,temp__4126__auto__,game_chan,___$1))
,tetrimino_blocks_coords_44231)){
var seq__43903_44232 = cljs.core.seq.call(null,tetrimino_blocks_coords_44231);
var chunk__43904_44233 = null;
var count__43905_44234 = (0);
var i__43906_44235 = (0);
while(true){
if((i__43906_44235 < count__43905_44234)){
var vec__43907_44236 = cljs.core._nth.call(null,chunk__43904_44233,i__43906_44235);
var r_44237 = cljs.core.nth.call(null,vec__43907_44236,(0),null);
var c_44238__$1 = cljs.core.nth.call(null,vec__43907_44236,(1),null);
var tbc_44239 = vec__43907_44236;
var block_type_44240 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_44239));
var visual_44241 = (function (){var G__43908 = (((block_type_44240 instanceof cljs.core.Keyword))?block_type_44240.fqn:null);
switch (G__43908) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/1-1.png","img/2-1.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_44240)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_44231,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_44239)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_44237),cljs.core.str("-"),cljs.core.str(c_44238__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44238__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44237 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_44241)));

var G__44243 = seq__43903_44232;
var G__44244 = chunk__43904_44233;
var G__44245 = count__43905_44234;
var G__44246 = (i__43906_44235 + (1));
seq__43903_44232 = G__44243;
chunk__43904_44233 = G__44244;
count__43905_44234 = G__44245;
i__43906_44235 = G__44246;
continue;
} else {
var temp__4126__auto___44247__$1 = cljs.core.seq.call(null,seq__43903_44232);
if(temp__4126__auto___44247__$1){
var seq__43903_44248__$1 = temp__4126__auto___44247__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43903_44248__$1)){
var c__18901__auto___44249 = cljs.core.chunk_first.call(null,seq__43903_44248__$1);
var G__44250 = cljs.core.chunk_rest.call(null,seq__43903_44248__$1);
var G__44251 = c__18901__auto___44249;
var G__44252 = cljs.core.count.call(null,c__18901__auto___44249);
var G__44253 = (0);
seq__43903_44232 = G__44250;
chunk__43904_44233 = G__44251;
count__43905_44234 = G__44252;
i__43906_44235 = G__44253;
continue;
} else {
var vec__43909_44254 = cljs.core.first.call(null,seq__43903_44248__$1);
var r_44255 = cljs.core.nth.call(null,vec__43909_44254,(0),null);
var c_44256__$1 = cljs.core.nth.call(null,vec__43909_44254,(1),null);
var tbc_44257 = vec__43909_44254;
var block_type_44258 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_44257));
var visual_44259 = (function (){var G__43910 = (((block_type_44258 instanceof cljs.core.Keyword))?block_type_44258.fqn:null);
switch (G__43910) {
case "water":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/1-1.png","img/2-1.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
case "land":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/sageata01.png","img/sageata02.png","img/sageata03.png"], null),new cljs.core.Keyword(null,"duration","duration",1444101068),(10)], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(block_type_44258)].join('')));

}
})();
cljs.core.println.call(null,tetrimino_blocks_coords_44231,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(romtoff.core.block_by_coords.call(null,tbc_44257)));

romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,[cljs.core.str("arrow-"),cljs.core.str(r_44255),cljs.core.str("-"),cljs.core.str(c_44256__$1)].join('')),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44256__$1 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44255 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),visual_44259)));

var G__44261 = cljs.core.next.call(null,seq__43903_44248__$1);
var G__44262 = null;
var G__44263 = (0);
var G__44264 = (0);
seq__43903_44232 = G__44261;
chunk__43904_44233 = G__44262;
count__43905_44234 = G__44263;
i__43906_44235 = G__44264;
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
var data_44265__$1 = om.core.get_props.call(null,self__.owner);
var entities_44266 = new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(data_44265__$1);
var arrow_ids_44267 = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,((function (seq__43874,chunk__43875,count__43876,i__43877,data_44265__$1,entities_44266,G__43902_44224,vec__43901,type,contents,seq__43874__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__43823_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"arrow","arrow",1071351425),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__43823_SHARP_));
});})(seq__43874,chunk__43875,count__43876,i__43877,data_44265__$1,entities_44266,G__43902_44224,vec__43901,type,contents,seq__43874__$1,temp__4126__auto__,game_chan,___$1))
,entities_44266)));
var no_arrows_44268 = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (seq__43874,chunk__43875,count__43876,i__43877,data_44265__$1,entities_44266,arrow_ids_44267,G__43902_44224,vec__43901,type,contents,seq__43874__$1,temp__4126__auto__,game_chan,___$1){
return (function (p1__43824_SHARP_){
return cljs.core.contains_QMARK_.call(null,arrow_ids_44267,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43824_SHARP_));
});})(seq__43874,chunk__43875,count__43876,i__43877,data_44265__$1,entities_44266,arrow_ids_44267,G__43902_44224,vec__43901,type,contents,seq__43874__$1,temp__4126__auto__,game_chan,___$1))
,entities_44266));
om.core.update_BANG_.call(null,data_44265__$1,new cljs.core.Keyword(null,"entities","entities",1940967403),no_arrows_44268);

break;
case "selection":
var vec__43911_44269 = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(contents);
var r_44270 = cljs.core.nth.call(null,vec__43911_44269,(0),null);
var c_44271 = cljs.core.nth.call(null,vec__43911_44269,(1),null);
cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear-selection","clear-selection",681992755),cljs.core.PersistentArrayMap.EMPTY], null));

cljs.core.async.put_BANG_.call(null,game_chan,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tetrimino-at","tetrimino-at",1514048990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_44270,c_44271], null)], null)], null));

break;
case "load-level":
om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"score","score",-1963588780),(0));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"moves","moves",927465255),(15));

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),false);

om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.PersistentVector.EMPTY);

var level_44272 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(contents);
var seq__43912_44273 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,level_44272)));
var chunk__43917_44274 = null;
var count__43918_44275 = (0);
var i__43919_44276 = (0);
while(true){
if((i__43919_44276 < count__43918_44275)){
var r_44277 = cljs.core._nth.call(null,chunk__43917_44274,i__43919_44276);
var seq__43920_44278 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_44272))));
var chunk__43921_44279 = null;
var count__43922_44280 = (0);
var i__43923_44281 = (0);
while(true){
if((i__43923_44281 < count__43922_44280)){
var c_44282 = cljs.core._nth.call(null,chunk__43921_44279,i__43923_44281);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_44277,c_44282,level_44272))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44277,c_44282),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44282 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44277 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44277,c_44282),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44282 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44277 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_44272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_44277,c_44282], null)))], null)));
}

var G__44283 = seq__43920_44278;
var G__44284 = chunk__43921_44279;
var G__44285 = count__43922_44280;
var G__44286 = (i__43923_44281 + (1));
seq__43920_44278 = G__44283;
chunk__43921_44279 = G__44284;
count__43922_44280 = G__44285;
i__43923_44281 = G__44286;
continue;
} else {
var temp__4126__auto___44287__$1 = cljs.core.seq.call(null,seq__43920_44278);
if(temp__4126__auto___44287__$1){
var seq__43920_44288__$1 = temp__4126__auto___44287__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43920_44288__$1)){
var c__18901__auto___44289 = cljs.core.chunk_first.call(null,seq__43920_44288__$1);
var G__44290 = cljs.core.chunk_rest.call(null,seq__43920_44288__$1);
var G__44291 = c__18901__auto___44289;
var G__44292 = cljs.core.count.call(null,c__18901__auto___44289);
var G__44293 = (0);
seq__43920_44278 = G__44290;
chunk__43921_44279 = G__44291;
count__43922_44280 = G__44292;
i__43923_44281 = G__44293;
continue;
} else {
var c_44294 = cljs.core.first.call(null,seq__43920_44288__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_44277,c_44294,level_44272))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44277,c_44294),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44294 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44277 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44277,c_44294),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44294 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44277 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_44272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_44277,c_44294], null)))], null)));
}

var G__44295 = cljs.core.next.call(null,seq__43920_44288__$1);
var G__44296 = null;
var G__44297 = (0);
var G__44298 = (0);
seq__43920_44278 = G__44295;
chunk__43921_44279 = G__44296;
count__43922_44280 = G__44297;
i__43923_44281 = G__44298;
continue;
}
} else {
}
}
break;
}

var G__44299 = seq__43912_44273;
var G__44300 = chunk__43917_44274;
var G__44301 = count__43918_44275;
var G__44302 = (i__43919_44276 + (1));
seq__43912_44273 = G__44299;
chunk__43917_44274 = G__44300;
count__43918_44275 = G__44301;
i__43919_44276 = G__44302;
continue;
} else {
var temp__4126__auto___44303__$1 = cljs.core.seq.call(null,seq__43912_44273);
if(temp__4126__auto___44303__$1){
var seq__43912_44304__$1 = temp__4126__auto___44303__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43912_44304__$1)){
var c__18901__auto___44305 = cljs.core.chunk_first.call(null,seq__43912_44304__$1);
var G__44306 = cljs.core.chunk_rest.call(null,seq__43912_44304__$1);
var G__44307 = c__18901__auto___44305;
var G__44308 = cljs.core.count.call(null,c__18901__auto___44305);
var G__44309 = (0);
seq__43912_44273 = G__44306;
chunk__43917_44274 = G__44307;
count__43918_44275 = G__44308;
i__43919_44276 = G__44309;
continue;
} else {
var r_44310 = cljs.core.first.call(null,seq__43912_44304__$1);
var seq__43913_44311 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.first.call(null,level_44272))));
var chunk__43914_44312 = null;
var count__43915_44313 = (0);
var i__43916_44314 = (0);
while(true){
if((i__43916_44314 < count__43915_44313)){
var c_44315 = cljs.core._nth.call(null,chunk__43914_44312,i__43916_44314);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_44310,c_44315,level_44272))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44310,c_44315),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44315 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44310 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44310,c_44315),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44315 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44310 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_44272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_44310,c_44315], null)))], null)));
}

var G__44316 = seq__43913_44311;
var G__44317 = chunk__43914_44312;
var G__44318 = count__43915_44313;
var G__44319 = (i__43916_44314 + (1));
seq__43913_44311 = G__44316;
chunk__43914_44312 = G__44317;
count__43915_44313 = G__44318;
i__43916_44314 = G__44319;
continue;
} else {
var temp__4126__auto___44320__$2 = cljs.core.seq.call(null,seq__43913_44311);
if(temp__4126__auto___44320__$2){
var seq__43913_44321__$1 = temp__4126__auto___44320__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43913_44321__$1)){
var c__18901__auto___44322 = cljs.core.chunk_first.call(null,seq__43913_44321__$1);
var G__44323 = cljs.core.chunk_rest.call(null,seq__43913_44321__$1);
var G__44324 = c__18901__auto___44322;
var G__44325 = cljs.core.count.call(null,c__18901__auto___44322);
var G__44326 = (0);
seq__43913_44311 = G__44323;
chunk__43914_44312 = G__44324;
count__43915_44313 = G__44325;
i__43916_44314 = G__44326;
continue;
} else {
var c_44327 = cljs.core.first.call(null,seq__43913_44321__$1);
if(cljs.core.truth_(romtoff.core.is_land.call(null,r_44310,c_44327,level_44272))){
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44310,c_44327),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44327 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44310 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["img/10.png","img/11.png","img/12.png"], null)),new cljs.core.Keyword(null,"stage","stage",1843544772),(0)], null)));
} else {
romtoff.core.add_entity.call(null,self__.data,romtoff.core.from_default_entity.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),romtoff.core.block_id.call(null,r_44310,c_44327),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"water","water",-824098213),new cljs.core.Keyword(null,"x","x",2099068185),(romtoff.core.X_IN_OFFSET + (c_44327 * (70))),new cljs.core.Keyword(null,"y","y",-1757859776),(romtoff.core.Y_IN_OFFSET + (r_44310 * (70))),new cljs.core.Keyword(null,"height","height",1025178622),(70),new cljs.core.Keyword(null,"width","width",-384071477),(70),new cljs.core.Keyword(null,"sprite","sprite",172516848),romtoff.core.int__GT_sprite.call(null,cljs.core.get_in.call(null,level_44272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_44310,c_44327], null)))], null)));
}

var G__44328 = cljs.core.next.call(null,seq__43913_44321__$1);
var G__44329 = null;
var G__44330 = (0);
var G__44331 = (0);
seq__43913_44311 = G__44328;
chunk__43914_44312 = G__44329;
count__43915_44313 = G__44330;
i__43916_44314 = G__44331;
continue;
}
} else {
}
}
break;
}

var G__44332 = cljs.core.next.call(null,seq__43912_44304__$1);
var G__44333 = null;
var G__44334 = (0);
var G__44335 = (0);
seq__43912_44273 = G__44332;
chunk__43917_44274 = G__44333;
count__43918_44275 = G__44334;
i__43919_44276 = G__44335;
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

var G__44336 = cljs.core.next.call(null,seq__43874__$1);
var G__44337 = null;
var G__44338 = (0);
var G__44339 = (0);
seq__43874 = G__44336;
chunk__43875 = G__44337;
count__43876 = G__44338;
i__43877 = G__44339;
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
return (function (state_43932){
var state_val_43933 = (state_43932[(1)]);
if((state_val_43933 === (4))){
var inst_43926 = (state_43932[(2)]);
var inst_43927 = handler.call(null,inst_43926);
var state_43932__$1 = (function (){var statearr_43934 = state_43932;
(statearr_43934[(7)] = inst_43927);

return statearr_43934;
})();
var statearr_43935_44340 = state_43932__$1;
(statearr_43935_44340[(2)] = null);

(statearr_43935_44340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43933 === (3))){
var inst_43930 = (state_43932[(2)]);
var state_43932__$1 = state_43932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43932__$1,inst_43930);
} else {
if((state_val_43933 === (2))){
var state_43932__$1 = state_43932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43932__$1,(4),game_chan);
} else {
if((state_val_43933 === (1))){
var state_43932__$1 = state_43932;
var statearr_43936_44341 = state_43932__$1;
(statearr_43936_44341[(2)] = null);

(statearr_43936_44341[(1)] = (2));


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
var statearr_43940 = [null,null,null,null,null,null,null,null];
(statearr_43940[(0)] = romtoff$core$state_machine__24260__auto__);

(statearr_43940[(1)] = (1));

return statearr_43940;
});
var romtoff$core$state_machine__24260__auto____1 = (function (state_43932){
while(true){
var ret_value__24261__auto__ = (function (){try{while(true){
var result__24262__auto__ = switch__24259__auto__.call(null,state_43932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24262__auto__;
}
break;
}
}catch (e43941){if((e43941 instanceof Object)){
var ex__24263__auto__ = e43941;
var statearr_43942_44342 = state_43932;
(statearr_43942_44342[(5)] = ex__24263__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44343 = state_43932;
state_43932 = G__44343;
continue;
} else {
return ret_value__24261__auto__;
}
break;
}
});
romtoff$core$state_machine__24260__auto__ = function(state_43932){
switch(arguments.length){
case 0:
return romtoff$core$state_machine__24260__auto____0.call(this);
case 1:
return romtoff$core$state_machine__24260__auto____1.call(this,state_43932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
romtoff$core$state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$0 = romtoff$core$state_machine__24260__auto____0;
romtoff$core$state_machine__24260__auto__.cljs$core$IFn$_invoke$arity$1 = romtoff$core$state_machine__24260__auto____1;
return romtoff$core$state_machine__24260__auto__;
})()
;})(switch__24259__auto__,c__24321__auto__,handler,game_chan,___$1))
})();
var state__24323__auto__ = (function (){var statearr_43943 = f__24322__auto__.call(null);
(statearr_43943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24321__auto__);

return statearr_43943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24323__auto__);
});})(c__24321__auto__,handler,game_chan,___$1))
);

return c__24321__auto__;
});

romtoff.core.t43830.prototype.om$core$IInitState$ = true;

romtoff.core.t43830.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-chan","game-chan",-1435861919),romtoff.core.game_chan], null);
});

romtoff.core.t43830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43832){
var self__ = this;
var _43832__$1 = this;
return self__.meta43831;
});

romtoff.core.t43830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43832,meta43831__$1){
var self__ = this;
var _43832__$1 = this;
return (new romtoff.core.t43830(self__.owner,self__.data,meta43831__$1));
});

romtoff.core.t43830.cljs$lang$type = true;

romtoff.core.t43830.cljs$lang$ctorStr = "romtoff.core/t43830";

romtoff.core.t43830.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"romtoff.core/t43830");
});

romtoff.core.__GT_t43830 = (function romtoff$core$__GT_t43830(owner__$1,data__$1,meta43831){
return (new romtoff.core.t43830(owner__$1,data__$1,meta43831));
});

}

return (new romtoff.core.t43830(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),romtoff.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
romtoff.core.on_js_reload = (function romtoff$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1431759606982