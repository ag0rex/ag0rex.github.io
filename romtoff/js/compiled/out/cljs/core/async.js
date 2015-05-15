// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25995 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25995 = (function (f,fn_handler,meta25996){
this.f = f;
this.fn_handler = fn_handler;
this.meta25996 = meta25996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25995.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25997){
var self__ = this;
var _25997__$1 = this;
return self__.meta25996;
});

cljs.core.async.t25995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25997,meta25996__$1){
var self__ = this;
var _25997__$1 = this;
return (new cljs.core.async.t25995(self__.f,self__.fn_handler,meta25996__$1));
});

cljs.core.async.t25995.cljs$lang$type = true;

cljs.core.async.t25995.cljs$lang$ctorStr = "cljs.core.async/t25995";

cljs.core.async.t25995.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t25995");
});

cljs.core.async.__GT_t25995 = (function cljs$core$async$fn_handler_$___GT_t25995(f__$1,fn_handler__$1,meta25996){
return (new cljs.core.async.t25995(f__$1,fn_handler__$1,meta25996));
});

}

return (new cljs.core.async.t25995(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__25999 = buff;
if(G__25999){
var bit__18790__auto__ = null;
if(cljs.core.truth_((function (){var or__18116__auto__ = bit__18790__auto__;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return G__25999.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25999.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25999);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25999);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26001 = arguments.length;
switch (G__26001) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26004 = arguments.length;
switch (G__26004) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26006 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26006);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26006,ret){
return (function (){
return fn1.call(null,val_26006);
});})(val_26006,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26008 = arguments.length;
switch (G__26008) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19001__auto___26010 = n;
var x_26011 = (0);
while(true){
if((x_26011 < n__19001__auto___26010)){
(a[x_26011] = (0));

var G__26012 = (x_26011 + (1));
x_26011 = G__26012;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26013 = (i + (1));
i = G__26013;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26017 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26017 = (function (flag,alt_flag,meta26018){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26018 = meta26018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26017.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26019){
var self__ = this;
var _26019__$1 = this;
return self__.meta26018;
});})(flag))
;

cljs.core.async.t26017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26019,meta26018__$1){
var self__ = this;
var _26019__$1 = this;
return (new cljs.core.async.t26017(self__.flag,self__.alt_flag,meta26018__$1));
});})(flag))
;

cljs.core.async.t26017.cljs$lang$type = true;

cljs.core.async.t26017.cljs$lang$ctorStr = "cljs.core.async/t26017";

cljs.core.async.t26017.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t26017");
});})(flag))
;

cljs.core.async.__GT_t26017 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26017(flag__$1,alt_flag__$1,meta26018){
return (new cljs.core.async.t26017(flag__$1,alt_flag__$1,meta26018));
});})(flag))
;

}

return (new cljs.core.async.t26017(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26023 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26023 = (function (cb,flag,alt_handler,meta26024){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26024 = meta26024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26023.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26025){
var self__ = this;
var _26025__$1 = this;
return self__.meta26024;
});

cljs.core.async.t26023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26025,meta26024__$1){
var self__ = this;
var _26025__$1 = this;
return (new cljs.core.async.t26023(self__.cb,self__.flag,self__.alt_handler,meta26024__$1));
});

cljs.core.async.t26023.cljs$lang$type = true;

cljs.core.async.t26023.cljs$lang$ctorStr = "cljs.core.async/t26023";

cljs.core.async.t26023.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t26023");
});

cljs.core.async.__GT_t26023 = (function cljs$core$async$alt_handler_$___GT_t26023(cb__$1,flag__$1,alt_handler__$1,meta26024){
return (new cljs.core.async.t26023(cb__$1,flag__$1,alt_handler__$1,meta26024));
});

}

return (new cljs.core.async.t26023(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26026_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26026_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26027_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26027_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18116__auto__ = wport;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26028 = (i + (1));
i = G__26028;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18116__auto__ = ret;
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18104__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18104__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18104__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19156__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19156__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26031){
var map__26032 = p__26031;
var map__26032__$1 = ((cljs.core.seq_QMARK_.call(null,map__26032))?cljs.core.apply.call(null,cljs.core.hash_map,map__26032):map__26032);
var opts = map__26032__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26029){
var G__26030 = cljs.core.first.call(null,seq26029);
var seq26029__$1 = cljs.core.next.call(null,seq26029);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26030,seq26029__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26034 = arguments.length;
switch (G__26034) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21999__auto___26083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___26083){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___26083){
return (function (state_26058){
var state_val_26059 = (state_26058[(1)]);
if((state_val_26059 === (7))){
var inst_26054 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26060_26084 = state_26058__$1;
(statearr_26060_26084[(2)] = inst_26054);

(statearr_26060_26084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (1))){
var state_26058__$1 = state_26058;
var statearr_26061_26085 = state_26058__$1;
(statearr_26061_26085[(2)] = null);

(statearr_26061_26085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (4))){
var inst_26037 = (state_26058[(7)]);
var inst_26037__$1 = (state_26058[(2)]);
var inst_26038 = (inst_26037__$1 == null);
var state_26058__$1 = (function (){var statearr_26062 = state_26058;
(statearr_26062[(7)] = inst_26037__$1);

return statearr_26062;
})();
if(cljs.core.truth_(inst_26038)){
var statearr_26063_26086 = state_26058__$1;
(statearr_26063_26086[(1)] = (5));

} else {
var statearr_26064_26087 = state_26058__$1;
(statearr_26064_26087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (13))){
var state_26058__$1 = state_26058;
var statearr_26065_26088 = state_26058__$1;
(statearr_26065_26088[(2)] = null);

(statearr_26065_26088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (6))){
var inst_26037 = (state_26058[(7)]);
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26058__$1,(11),to,inst_26037);
} else {
if((state_val_26059 === (3))){
var inst_26056 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26058__$1,inst_26056);
} else {
if((state_val_26059 === (12))){
var state_26058__$1 = state_26058;
var statearr_26066_26089 = state_26058__$1;
(statearr_26066_26089[(2)] = null);

(statearr_26066_26089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (2))){
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26058__$1,(4),from);
} else {
if((state_val_26059 === (11))){
var inst_26047 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
if(cljs.core.truth_(inst_26047)){
var statearr_26067_26090 = state_26058__$1;
(statearr_26067_26090[(1)] = (12));

} else {
var statearr_26068_26091 = state_26058__$1;
(statearr_26068_26091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (9))){
var state_26058__$1 = state_26058;
var statearr_26069_26092 = state_26058__$1;
(statearr_26069_26092[(2)] = null);

(statearr_26069_26092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (5))){
var state_26058__$1 = state_26058;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26070_26093 = state_26058__$1;
(statearr_26070_26093[(1)] = (8));

} else {
var statearr_26071_26094 = state_26058__$1;
(statearr_26071_26094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (14))){
var inst_26052 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26072_26095 = state_26058__$1;
(statearr_26072_26095[(2)] = inst_26052);

(statearr_26072_26095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (10))){
var inst_26044 = (state_26058[(2)]);
var state_26058__$1 = state_26058;
var statearr_26073_26096 = state_26058__$1;
(statearr_26073_26096[(2)] = inst_26044);

(statearr_26073_26096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26059 === (8))){
var inst_26041 = cljs.core.async.close_BANG_.call(null,to);
var state_26058__$1 = state_26058;
var statearr_26074_26097 = state_26058__$1;
(statearr_26074_26097[(2)] = inst_26041);

(statearr_26074_26097[(1)] = (10));


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
});})(c__21999__auto___26083))
;
return ((function (switch__21937__auto__,c__21999__auto___26083){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_26078 = [null,null,null,null,null,null,null,null];
(statearr_26078[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_26078[(1)] = (1));

return statearr_26078;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_26058){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_26058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e26079){if((e26079 instanceof Object)){
var ex__21941__auto__ = e26079;
var statearr_26080_26098 = state_26058;
(statearr_26080_26098[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26099 = state_26058;
state_26058 = G__26099;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_26058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_26058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___26083))
})();
var state__22001__auto__ = (function (){var statearr_26081 = f__22000__auto__.call(null);
(statearr_26081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___26083);

return statearr_26081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___26083))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26283){
var vec__26284 = p__26283;
var v = cljs.core.nth.call(null,vec__26284,(0),null);
var p = cljs.core.nth.call(null,vec__26284,(1),null);
var job = vec__26284;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21999__auto___26466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___26466,res,vec__26284,v,p,job,jobs,results){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___26466,res,vec__26284,v,p,job,jobs,results){
return (function (state_26289){
var state_val_26290 = (state_26289[(1)]);
if((state_val_26290 === (2))){
var inst_26286 = (state_26289[(2)]);
var inst_26287 = cljs.core.async.close_BANG_.call(null,res);
var state_26289__$1 = (function (){var statearr_26291 = state_26289;
(statearr_26291[(7)] = inst_26286);

return statearr_26291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26289__$1,inst_26287);
} else {
if((state_val_26290 === (1))){
var state_26289__$1 = state_26289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26289__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21999__auto___26466,res,vec__26284,v,p,job,jobs,results))
;
return ((function (switch__21937__auto__,c__21999__auto___26466,res,vec__26284,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0 = (function (){
var statearr_26295 = [null,null,null,null,null,null,null,null];
(statearr_26295[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__);

(statearr_26295[(1)] = (1));

return statearr_26295;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1 = (function (state_26289){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_26289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e26296){if((e26296 instanceof Object)){
var ex__21941__auto__ = e26296;
var statearr_26297_26467 = state_26289;
(statearr_26297_26467[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26468 = state_26289;
state_26289 = G__26468;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__ = function(state_26289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1.call(this,state_26289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___26466,res,vec__26284,v,p,job,jobs,results))
})();
var state__22001__auto__ = (function (){var statearr_26298 = f__22000__auto__.call(null);
(statearr_26298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___26466);

return statearr_26298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___26466,res,vec__26284,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26299){
var vec__26300 = p__26299;
var v = cljs.core.nth.call(null,vec__26300,(0),null);
var p = cljs.core.nth.call(null,vec__26300,(1),null);
var job = vec__26300;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19001__auto___26469 = n;
var __26470 = (0);
while(true){
if((__26470 < n__19001__auto___26469)){
var G__26301_26471 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26301_26471) {
case "async":
var c__21999__auto___26473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26470,c__21999__auto___26473,G__26301_26471,n__19001__auto___26469,jobs,results,process,async){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (__26470,c__21999__auto___26473,G__26301_26471,n__19001__auto___26469,jobs,results,process,async){
return (function (state_26314){
var state_val_26315 = (state_26314[(1)]);
if((state_val_26315 === (7))){
var inst_26310 = (state_26314[(2)]);
var state_26314__$1 = state_26314;
var statearr_26316_26474 = state_26314__$1;
(statearr_26316_26474[(2)] = inst_26310);

(statearr_26316_26474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (6))){
var state_26314__$1 = state_26314;
var statearr_26317_26475 = state_26314__$1;
(statearr_26317_26475[(2)] = null);

(statearr_26317_26475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (5))){
var state_26314__$1 = state_26314;
var statearr_26318_26476 = state_26314__$1;
(statearr_26318_26476[(2)] = null);

(statearr_26318_26476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (4))){
var inst_26304 = (state_26314[(2)]);
var inst_26305 = async.call(null,inst_26304);
var state_26314__$1 = state_26314;
if(cljs.core.truth_(inst_26305)){
var statearr_26319_26477 = state_26314__$1;
(statearr_26319_26477[(1)] = (5));

} else {
var statearr_26320_26478 = state_26314__$1;
(statearr_26320_26478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26315 === (3))){
var inst_26312 = (state_26314[(2)]);
var state_26314__$1 = state_26314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26314__$1,inst_26312);
} else {
if((state_val_26315 === (2))){
var state_26314__$1 = state_26314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26314__$1,(4),jobs);
} else {
if((state_val_26315 === (1))){
var state_26314__$1 = state_26314;
var statearr_26321_26479 = state_26314__$1;
(statearr_26321_26479[(2)] = null);

(statearr_26321_26479[(1)] = (2));


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
});})(__26470,c__21999__auto___26473,G__26301_26471,n__19001__auto___26469,jobs,results,process,async))
;
return ((function (__26470,switch__21937__auto__,c__21999__auto___26473,G__26301_26471,n__19001__auto___26469,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0 = (function (){
var statearr_26325 = [null,null,null,null,null,null,null];
(statearr_26325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__);

(statearr_26325[(1)] = (1));

return statearr_26325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1 = (function (state_26314){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_26314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e26326){if((e26326 instanceof Object)){
var ex__21941__auto__ = e26326;
var statearr_26327_26480 = state_26314;
(statearr_26327_26480[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26481 = state_26314;
state_26314 = G__26481;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__ = function(state_26314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1.call(this,state_26314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__;
})()
;})(__26470,switch__21937__auto__,c__21999__auto___26473,G__26301_26471,n__19001__auto___26469,jobs,results,process,async))
})();
var state__22001__auto__ = (function (){var statearr_26328 = f__22000__auto__.call(null);
(statearr_26328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___26473);

return statearr_26328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(__26470,c__21999__auto___26473,G__26301_26471,n__19001__auto___26469,jobs,results,process,async))
);


break;
case "compute":
var c__21999__auto___26482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26470,c__21999__auto___26482,G__26301_26471,n__19001__auto___26469,jobs,results,process,async){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (__26470,c__21999__auto___26482,G__26301_26471,n__19001__auto___26469,jobs,results,process,async){
return (function (state_26341){
var state_val_26342 = (state_26341[(1)]);
if((state_val_26342 === (7))){
var inst_26337 = (state_26341[(2)]);
var state_26341__$1 = state_26341;
var statearr_26343_26483 = state_26341__$1;
(statearr_26343_26483[(2)] = inst_26337);

(statearr_26343_26483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (6))){
var state_26341__$1 = state_26341;
var statearr_26344_26484 = state_26341__$1;
(statearr_26344_26484[(2)] = null);

(statearr_26344_26484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (5))){
var state_26341__$1 = state_26341;
var statearr_26345_26485 = state_26341__$1;
(statearr_26345_26485[(2)] = null);

(statearr_26345_26485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (4))){
var inst_26331 = (state_26341[(2)]);
var inst_26332 = process.call(null,inst_26331);
var state_26341__$1 = state_26341;
if(cljs.core.truth_(inst_26332)){
var statearr_26346_26486 = state_26341__$1;
(statearr_26346_26486[(1)] = (5));

} else {
var statearr_26347_26487 = state_26341__$1;
(statearr_26347_26487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26342 === (3))){
var inst_26339 = (state_26341[(2)]);
var state_26341__$1 = state_26341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26341__$1,inst_26339);
} else {
if((state_val_26342 === (2))){
var state_26341__$1 = state_26341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26341__$1,(4),jobs);
} else {
if((state_val_26342 === (1))){
var state_26341__$1 = state_26341;
var statearr_26348_26488 = state_26341__$1;
(statearr_26348_26488[(2)] = null);

(statearr_26348_26488[(1)] = (2));


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
});})(__26470,c__21999__auto___26482,G__26301_26471,n__19001__auto___26469,jobs,results,process,async))
;
return ((function (__26470,switch__21937__auto__,c__21999__auto___26482,G__26301_26471,n__19001__auto___26469,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0 = (function (){
var statearr_26352 = [null,null,null,null,null,null,null];
(statearr_26352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__);

(statearr_26352[(1)] = (1));

return statearr_26352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1 = (function (state_26341){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_26341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e26353){if((e26353 instanceof Object)){
var ex__21941__auto__ = e26353;
var statearr_26354_26489 = state_26341;
(statearr_26354_26489[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26490 = state_26341;
state_26341 = G__26490;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__ = function(state_26341){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1.call(this,state_26341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__;
})()
;})(__26470,switch__21937__auto__,c__21999__auto___26482,G__26301_26471,n__19001__auto___26469,jobs,results,process,async))
})();
var state__22001__auto__ = (function (){var statearr_26355 = f__22000__auto__.call(null);
(statearr_26355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___26482);

return statearr_26355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(__26470,c__21999__auto___26482,G__26301_26471,n__19001__auto___26469,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26491 = (__26470 + (1));
__26470 = G__26491;
continue;
} else {
}
break;
}

var c__21999__auto___26492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___26492,jobs,results,process,async){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___26492,jobs,results,process,async){
return (function (state_26377){
var state_val_26378 = (state_26377[(1)]);
if((state_val_26378 === (9))){
var inst_26370 = (state_26377[(2)]);
var state_26377__$1 = (function (){var statearr_26379 = state_26377;
(statearr_26379[(7)] = inst_26370);

return statearr_26379;
})();
var statearr_26380_26493 = state_26377__$1;
(statearr_26380_26493[(2)] = null);

(statearr_26380_26493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (8))){
var inst_26363 = (state_26377[(8)]);
var inst_26368 = (state_26377[(2)]);
var state_26377__$1 = (function (){var statearr_26381 = state_26377;
(statearr_26381[(9)] = inst_26368);

return statearr_26381;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26377__$1,(9),results,inst_26363);
} else {
if((state_val_26378 === (7))){
var inst_26373 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
var statearr_26382_26494 = state_26377__$1;
(statearr_26382_26494[(2)] = inst_26373);

(statearr_26382_26494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (6))){
var inst_26358 = (state_26377[(10)]);
var inst_26363 = (state_26377[(8)]);
var inst_26363__$1 = cljs.core.async.chan.call(null,(1));
var inst_26364 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26365 = [inst_26358,inst_26363__$1];
var inst_26366 = (new cljs.core.PersistentVector(null,2,(5),inst_26364,inst_26365,null));
var state_26377__$1 = (function (){var statearr_26383 = state_26377;
(statearr_26383[(8)] = inst_26363__$1);

return statearr_26383;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26377__$1,(8),jobs,inst_26366);
} else {
if((state_val_26378 === (5))){
var inst_26361 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26377__$1 = state_26377;
var statearr_26384_26495 = state_26377__$1;
(statearr_26384_26495[(2)] = inst_26361);

(statearr_26384_26495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (4))){
var inst_26358 = (state_26377[(10)]);
var inst_26358__$1 = (state_26377[(2)]);
var inst_26359 = (inst_26358__$1 == null);
var state_26377__$1 = (function (){var statearr_26385 = state_26377;
(statearr_26385[(10)] = inst_26358__$1);

return statearr_26385;
})();
if(cljs.core.truth_(inst_26359)){
var statearr_26386_26496 = state_26377__$1;
(statearr_26386_26496[(1)] = (5));

} else {
var statearr_26387_26497 = state_26377__$1;
(statearr_26387_26497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26378 === (3))){
var inst_26375 = (state_26377[(2)]);
var state_26377__$1 = state_26377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26377__$1,inst_26375);
} else {
if((state_val_26378 === (2))){
var state_26377__$1 = state_26377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26377__$1,(4),from);
} else {
if((state_val_26378 === (1))){
var state_26377__$1 = state_26377;
var statearr_26388_26498 = state_26377__$1;
(statearr_26388_26498[(2)] = null);

(statearr_26388_26498[(1)] = (2));


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
});})(c__21999__auto___26492,jobs,results,process,async))
;
return ((function (switch__21937__auto__,c__21999__auto___26492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0 = (function (){
var statearr_26392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__);

(statearr_26392[(1)] = (1));

return statearr_26392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1 = (function (state_26377){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_26377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e26393){if((e26393 instanceof Object)){
var ex__21941__auto__ = e26393;
var statearr_26394_26499 = state_26377;
(statearr_26394_26499[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26500 = state_26377;
state_26377 = G__26500;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__ = function(state_26377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1.call(this,state_26377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___26492,jobs,results,process,async))
})();
var state__22001__auto__ = (function (){var statearr_26395 = f__22000__auto__.call(null);
(statearr_26395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___26492);

return statearr_26395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___26492,jobs,results,process,async))
);


var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__,jobs,results,process,async){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__,jobs,results,process,async){
return (function (state_26433){
var state_val_26434 = (state_26433[(1)]);
if((state_val_26434 === (7))){
var inst_26429 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
var statearr_26435_26501 = state_26433__$1;
(statearr_26435_26501[(2)] = inst_26429);

(statearr_26435_26501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (20))){
var state_26433__$1 = state_26433;
var statearr_26436_26502 = state_26433__$1;
(statearr_26436_26502[(2)] = null);

(statearr_26436_26502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (1))){
var state_26433__$1 = state_26433;
var statearr_26437_26503 = state_26433__$1;
(statearr_26437_26503[(2)] = null);

(statearr_26437_26503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (4))){
var inst_26398 = (state_26433[(7)]);
var inst_26398__$1 = (state_26433[(2)]);
var inst_26399 = (inst_26398__$1 == null);
var state_26433__$1 = (function (){var statearr_26438 = state_26433;
(statearr_26438[(7)] = inst_26398__$1);

return statearr_26438;
})();
if(cljs.core.truth_(inst_26399)){
var statearr_26439_26504 = state_26433__$1;
(statearr_26439_26504[(1)] = (5));

} else {
var statearr_26440_26505 = state_26433__$1;
(statearr_26440_26505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (15))){
var inst_26411 = (state_26433[(8)]);
var state_26433__$1 = state_26433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26433__$1,(18),to,inst_26411);
} else {
if((state_val_26434 === (21))){
var inst_26424 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
var statearr_26441_26506 = state_26433__$1;
(statearr_26441_26506[(2)] = inst_26424);

(statearr_26441_26506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (13))){
var inst_26426 = (state_26433[(2)]);
var state_26433__$1 = (function (){var statearr_26442 = state_26433;
(statearr_26442[(9)] = inst_26426);

return statearr_26442;
})();
var statearr_26443_26507 = state_26433__$1;
(statearr_26443_26507[(2)] = null);

(statearr_26443_26507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (6))){
var inst_26398 = (state_26433[(7)]);
var state_26433__$1 = state_26433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26433__$1,(11),inst_26398);
} else {
if((state_val_26434 === (17))){
var inst_26419 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
if(cljs.core.truth_(inst_26419)){
var statearr_26444_26508 = state_26433__$1;
(statearr_26444_26508[(1)] = (19));

} else {
var statearr_26445_26509 = state_26433__$1;
(statearr_26445_26509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (3))){
var inst_26431 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26433__$1,inst_26431);
} else {
if((state_val_26434 === (12))){
var inst_26408 = (state_26433[(10)]);
var state_26433__$1 = state_26433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26433__$1,(14),inst_26408);
} else {
if((state_val_26434 === (2))){
var state_26433__$1 = state_26433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26433__$1,(4),results);
} else {
if((state_val_26434 === (19))){
var state_26433__$1 = state_26433;
var statearr_26446_26510 = state_26433__$1;
(statearr_26446_26510[(2)] = null);

(statearr_26446_26510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (11))){
var inst_26408 = (state_26433[(2)]);
var state_26433__$1 = (function (){var statearr_26447 = state_26433;
(statearr_26447[(10)] = inst_26408);

return statearr_26447;
})();
var statearr_26448_26511 = state_26433__$1;
(statearr_26448_26511[(2)] = null);

(statearr_26448_26511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (9))){
var state_26433__$1 = state_26433;
var statearr_26449_26512 = state_26433__$1;
(statearr_26449_26512[(2)] = null);

(statearr_26449_26512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (5))){
var state_26433__$1 = state_26433;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26450_26513 = state_26433__$1;
(statearr_26450_26513[(1)] = (8));

} else {
var statearr_26451_26514 = state_26433__$1;
(statearr_26451_26514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (14))){
var inst_26411 = (state_26433[(8)]);
var inst_26413 = (state_26433[(11)]);
var inst_26411__$1 = (state_26433[(2)]);
var inst_26412 = (inst_26411__$1 == null);
var inst_26413__$1 = cljs.core.not.call(null,inst_26412);
var state_26433__$1 = (function (){var statearr_26452 = state_26433;
(statearr_26452[(8)] = inst_26411__$1);

(statearr_26452[(11)] = inst_26413__$1);

return statearr_26452;
})();
if(inst_26413__$1){
var statearr_26453_26515 = state_26433__$1;
(statearr_26453_26515[(1)] = (15));

} else {
var statearr_26454_26516 = state_26433__$1;
(statearr_26454_26516[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (16))){
var inst_26413 = (state_26433[(11)]);
var state_26433__$1 = state_26433;
var statearr_26455_26517 = state_26433__$1;
(statearr_26455_26517[(2)] = inst_26413);

(statearr_26455_26517[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (10))){
var inst_26405 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
var statearr_26456_26518 = state_26433__$1;
(statearr_26456_26518[(2)] = inst_26405);

(statearr_26456_26518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (18))){
var inst_26416 = (state_26433[(2)]);
var state_26433__$1 = state_26433;
var statearr_26457_26519 = state_26433__$1;
(statearr_26457_26519[(2)] = inst_26416);

(statearr_26457_26519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26434 === (8))){
var inst_26402 = cljs.core.async.close_BANG_.call(null,to);
var state_26433__$1 = state_26433;
var statearr_26458_26520 = state_26433__$1;
(statearr_26458_26520[(2)] = inst_26402);

(statearr_26458_26520[(1)] = (10));


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
});})(c__21999__auto__,jobs,results,process,async))
;
return ((function (switch__21937__auto__,c__21999__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0 = (function (){
var statearr_26462 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__);

(statearr_26462[(1)] = (1));

return statearr_26462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1 = (function (state_26433){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_26433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e26463){if((e26463 instanceof Object)){
var ex__21941__auto__ = e26463;
var statearr_26464_26521 = state_26433;
(statearr_26464_26521[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26522 = state_26433;
state_26433 = G__26522;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__ = function(state_26433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1.call(this,state_26433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21938__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__,jobs,results,process,async))
})();
var state__22001__auto__ = (function (){var statearr_26465 = f__22000__auto__.call(null);
(statearr_26465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_26465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__,jobs,results,process,async))
);

return c__21999__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__26524 = arguments.length;
switch (G__26524) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__26527 = arguments.length;
switch (G__26527) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__26530 = arguments.length;
switch (G__26530) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21999__auto___26582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___26582,tc,fc){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___26582,tc,fc){
return (function (state_26556){
var state_val_26557 = (state_26556[(1)]);
if((state_val_26557 === (7))){
var inst_26552 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
var statearr_26558_26583 = state_26556__$1;
(statearr_26558_26583[(2)] = inst_26552);

(statearr_26558_26583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (1))){
var state_26556__$1 = state_26556;
var statearr_26559_26584 = state_26556__$1;
(statearr_26559_26584[(2)] = null);

(statearr_26559_26584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (4))){
var inst_26533 = (state_26556[(7)]);
var inst_26533__$1 = (state_26556[(2)]);
var inst_26534 = (inst_26533__$1 == null);
var state_26556__$1 = (function (){var statearr_26560 = state_26556;
(statearr_26560[(7)] = inst_26533__$1);

return statearr_26560;
})();
if(cljs.core.truth_(inst_26534)){
var statearr_26561_26585 = state_26556__$1;
(statearr_26561_26585[(1)] = (5));

} else {
var statearr_26562_26586 = state_26556__$1;
(statearr_26562_26586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (13))){
var state_26556__$1 = state_26556;
var statearr_26563_26587 = state_26556__$1;
(statearr_26563_26587[(2)] = null);

(statearr_26563_26587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (6))){
var inst_26533 = (state_26556[(7)]);
var inst_26539 = p.call(null,inst_26533);
var state_26556__$1 = state_26556;
if(cljs.core.truth_(inst_26539)){
var statearr_26564_26588 = state_26556__$1;
(statearr_26564_26588[(1)] = (9));

} else {
var statearr_26565_26589 = state_26556__$1;
(statearr_26565_26589[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (3))){
var inst_26554 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26556__$1,inst_26554);
} else {
if((state_val_26557 === (12))){
var state_26556__$1 = state_26556;
var statearr_26566_26590 = state_26556__$1;
(statearr_26566_26590[(2)] = null);

(statearr_26566_26590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (2))){
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26556__$1,(4),ch);
} else {
if((state_val_26557 === (11))){
var inst_26533 = (state_26556[(7)]);
var inst_26543 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26556__$1,(8),inst_26543,inst_26533);
} else {
if((state_val_26557 === (9))){
var state_26556__$1 = state_26556;
var statearr_26567_26591 = state_26556__$1;
(statearr_26567_26591[(2)] = tc);

(statearr_26567_26591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (5))){
var inst_26536 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26537 = cljs.core.async.close_BANG_.call(null,fc);
var state_26556__$1 = (function (){var statearr_26568 = state_26556;
(statearr_26568[(8)] = inst_26536);

return statearr_26568;
})();
var statearr_26569_26592 = state_26556__$1;
(statearr_26569_26592[(2)] = inst_26537);

(statearr_26569_26592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (14))){
var inst_26550 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
var statearr_26570_26593 = state_26556__$1;
(statearr_26570_26593[(2)] = inst_26550);

(statearr_26570_26593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (10))){
var state_26556__$1 = state_26556;
var statearr_26571_26594 = state_26556__$1;
(statearr_26571_26594[(2)] = fc);

(statearr_26571_26594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26557 === (8))){
var inst_26545 = (state_26556[(2)]);
var state_26556__$1 = state_26556;
if(cljs.core.truth_(inst_26545)){
var statearr_26572_26595 = state_26556__$1;
(statearr_26572_26595[(1)] = (12));

} else {
var statearr_26573_26596 = state_26556__$1;
(statearr_26573_26596[(1)] = (13));

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
});})(c__21999__auto___26582,tc,fc))
;
return ((function (switch__21937__auto__,c__21999__auto___26582,tc,fc){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_26577 = [null,null,null,null,null,null,null,null,null];
(statearr_26577[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_26577[(1)] = (1));

return statearr_26577;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_26556){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_26556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e26578){if((e26578 instanceof Object)){
var ex__21941__auto__ = e26578;
var statearr_26579_26597 = state_26556;
(statearr_26579_26597[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26598 = state_26556;
state_26556 = G__26598;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_26556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_26556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___26582,tc,fc))
})();
var state__22001__auto__ = (function (){var statearr_26580 = f__22000__auto__.call(null);
(statearr_26580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___26582);

return statearr_26580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___26582,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__){
return (function (state_26645){
var state_val_26646 = (state_26645[(1)]);
if((state_val_26646 === (7))){
var inst_26641 = (state_26645[(2)]);
var state_26645__$1 = state_26645;
var statearr_26647_26663 = state_26645__$1;
(statearr_26647_26663[(2)] = inst_26641);

(statearr_26647_26663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26646 === (6))){
var inst_26634 = (state_26645[(7)]);
var inst_26631 = (state_26645[(8)]);
var inst_26638 = f.call(null,inst_26631,inst_26634);
var inst_26631__$1 = inst_26638;
var state_26645__$1 = (function (){var statearr_26648 = state_26645;
(statearr_26648[(8)] = inst_26631__$1);

return statearr_26648;
})();
var statearr_26649_26664 = state_26645__$1;
(statearr_26649_26664[(2)] = null);

(statearr_26649_26664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26646 === (5))){
var inst_26631 = (state_26645[(8)]);
var state_26645__$1 = state_26645;
var statearr_26650_26665 = state_26645__$1;
(statearr_26650_26665[(2)] = inst_26631);

(statearr_26650_26665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26646 === (4))){
var inst_26634 = (state_26645[(7)]);
var inst_26634__$1 = (state_26645[(2)]);
var inst_26635 = (inst_26634__$1 == null);
var state_26645__$1 = (function (){var statearr_26651 = state_26645;
(statearr_26651[(7)] = inst_26634__$1);

return statearr_26651;
})();
if(cljs.core.truth_(inst_26635)){
var statearr_26652_26666 = state_26645__$1;
(statearr_26652_26666[(1)] = (5));

} else {
var statearr_26653_26667 = state_26645__$1;
(statearr_26653_26667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26646 === (3))){
var inst_26643 = (state_26645[(2)]);
var state_26645__$1 = state_26645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26645__$1,inst_26643);
} else {
if((state_val_26646 === (2))){
var state_26645__$1 = state_26645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26645__$1,(4),ch);
} else {
if((state_val_26646 === (1))){
var inst_26631 = init;
var state_26645__$1 = (function (){var statearr_26654 = state_26645;
(statearr_26654[(8)] = inst_26631);

return statearr_26654;
})();
var statearr_26655_26668 = state_26645__$1;
(statearr_26655_26668[(2)] = null);

(statearr_26655_26668[(1)] = (2));


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
});})(c__21999__auto__))
;
return ((function (switch__21937__auto__,c__21999__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21938__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21938__auto____0 = (function (){
var statearr_26659 = [null,null,null,null,null,null,null,null,null];
(statearr_26659[(0)] = cljs$core$async$reduce_$_state_machine__21938__auto__);

(statearr_26659[(1)] = (1));

return statearr_26659;
});
var cljs$core$async$reduce_$_state_machine__21938__auto____1 = (function (state_26645){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_26645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e26660){if((e26660 instanceof Object)){
var ex__21941__auto__ = e26660;
var statearr_26661_26669 = state_26645;
(statearr_26661_26669[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26670 = state_26645;
state_26645 = G__26670;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21938__auto__ = function(state_26645){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21938__auto____1.call(this,state_26645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21938__auto____0;
cljs$core$async$reduce_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21938__auto____1;
return cljs$core$async$reduce_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__))
})();
var state__22001__auto__ = (function (){var statearr_26662 = f__22000__auto__.call(null);
(statearr_26662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_26662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__))
);

return c__21999__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__26672 = arguments.length;
switch (G__26672) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__){
return (function (state_26697){
var state_val_26698 = (state_26697[(1)]);
if((state_val_26698 === (7))){
var inst_26679 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26699_26723 = state_26697__$1;
(statearr_26699_26723[(2)] = inst_26679);

(statearr_26699_26723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (1))){
var inst_26673 = cljs.core.seq.call(null,coll);
var inst_26674 = inst_26673;
var state_26697__$1 = (function (){var statearr_26700 = state_26697;
(statearr_26700[(7)] = inst_26674);

return statearr_26700;
})();
var statearr_26701_26724 = state_26697__$1;
(statearr_26701_26724[(2)] = null);

(statearr_26701_26724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (4))){
var inst_26674 = (state_26697[(7)]);
var inst_26677 = cljs.core.first.call(null,inst_26674);
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26697__$1,(7),ch,inst_26677);
} else {
if((state_val_26698 === (13))){
var inst_26691 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26702_26725 = state_26697__$1;
(statearr_26702_26725[(2)] = inst_26691);

(statearr_26702_26725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (6))){
var inst_26682 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26682)){
var statearr_26703_26726 = state_26697__$1;
(statearr_26703_26726[(1)] = (8));

} else {
var statearr_26704_26727 = state_26697__$1;
(statearr_26704_26727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (3))){
var inst_26695 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26697__$1,inst_26695);
} else {
if((state_val_26698 === (12))){
var state_26697__$1 = state_26697;
var statearr_26705_26728 = state_26697__$1;
(statearr_26705_26728[(2)] = null);

(statearr_26705_26728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (2))){
var inst_26674 = (state_26697[(7)]);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26674)){
var statearr_26706_26729 = state_26697__$1;
(statearr_26706_26729[(1)] = (4));

} else {
var statearr_26707_26730 = state_26697__$1;
(statearr_26707_26730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (11))){
var inst_26688 = cljs.core.async.close_BANG_.call(null,ch);
var state_26697__$1 = state_26697;
var statearr_26708_26731 = state_26697__$1;
(statearr_26708_26731[(2)] = inst_26688);

(statearr_26708_26731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (9))){
var state_26697__$1 = state_26697;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26709_26732 = state_26697__$1;
(statearr_26709_26732[(1)] = (11));

} else {
var statearr_26710_26733 = state_26697__$1;
(statearr_26710_26733[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (5))){
var inst_26674 = (state_26697[(7)]);
var state_26697__$1 = state_26697;
var statearr_26711_26734 = state_26697__$1;
(statearr_26711_26734[(2)] = inst_26674);

(statearr_26711_26734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (10))){
var inst_26693 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26712_26735 = state_26697__$1;
(statearr_26712_26735[(2)] = inst_26693);

(statearr_26712_26735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26698 === (8))){
var inst_26674 = (state_26697[(7)]);
var inst_26684 = cljs.core.next.call(null,inst_26674);
var inst_26674__$1 = inst_26684;
var state_26697__$1 = (function (){var statearr_26713 = state_26697;
(statearr_26713[(7)] = inst_26674__$1);

return statearr_26713;
})();
var statearr_26714_26736 = state_26697__$1;
(statearr_26714_26736[(2)] = null);

(statearr_26714_26736[(1)] = (2));


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
});})(c__21999__auto__))
;
return ((function (switch__21937__auto__,c__21999__auto__){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_26718 = [null,null,null,null,null,null,null,null];
(statearr_26718[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_26718[(1)] = (1));

return statearr_26718;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_26697){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_26697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e26719){if((e26719 instanceof Object)){
var ex__21941__auto__ = e26719;
var statearr_26720_26737 = state_26697;
(statearr_26720_26737[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26738 = state_26697;
state_26697 = G__26738;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_26697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_26697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__))
})();
var state__22001__auto__ = (function (){var statearr_26721 = f__22000__auto__.call(null);
(statearr_26721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_26721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__))
);

return c__21999__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26740 = {};
return obj26740;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18104__auto__ = _;
if(and__18104__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18752__auto__ = (((_ == null))?null:_);
return (function (){var or__18116__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26742 = {};
return obj26742;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26964 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26964 = (function (cs,ch,mult,meta26965){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26965 = meta26965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26964.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26964.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26964.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26964.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26964.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26966){
var self__ = this;
var _26966__$1 = this;
return self__.meta26965;
});})(cs))
;

cljs.core.async.t26964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26966,meta26965__$1){
var self__ = this;
var _26966__$1 = this;
return (new cljs.core.async.t26964(self__.cs,self__.ch,self__.mult,meta26965__$1));
});})(cs))
;

cljs.core.async.t26964.cljs$lang$type = true;

cljs.core.async.t26964.cljs$lang$ctorStr = "cljs.core.async/t26964";

cljs.core.async.t26964.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t26964");
});})(cs))
;

cljs.core.async.__GT_t26964 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26964(cs__$1,ch__$1,mult__$1,meta26965){
return (new cljs.core.async.t26964(cs__$1,ch__$1,mult__$1,meta26965));
});})(cs))
;

}

return (new cljs.core.async.t26964(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21999__auto___27185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___27185,cs,m,dchan,dctr,done){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___27185,cs,m,dchan,dctr,done){
return (function (state_27097){
var state_val_27098 = (state_27097[(1)]);
if((state_val_27098 === (7))){
var inst_27093 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27099_27186 = state_27097__$1;
(statearr_27099_27186[(2)] = inst_27093);

(statearr_27099_27186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (20))){
var inst_26998 = (state_27097[(7)]);
var inst_27008 = cljs.core.first.call(null,inst_26998);
var inst_27009 = cljs.core.nth.call(null,inst_27008,(0),null);
var inst_27010 = cljs.core.nth.call(null,inst_27008,(1),null);
var state_27097__$1 = (function (){var statearr_27100 = state_27097;
(statearr_27100[(8)] = inst_27009);

return statearr_27100;
})();
if(cljs.core.truth_(inst_27010)){
var statearr_27101_27187 = state_27097__$1;
(statearr_27101_27187[(1)] = (22));

} else {
var statearr_27102_27188 = state_27097__$1;
(statearr_27102_27188[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (27))){
var inst_27038 = (state_27097[(9)]);
var inst_27040 = (state_27097[(10)]);
var inst_26969 = (state_27097[(11)]);
var inst_27045 = (state_27097[(12)]);
var inst_27045__$1 = cljs.core._nth.call(null,inst_27038,inst_27040);
var inst_27046 = cljs.core.async.put_BANG_.call(null,inst_27045__$1,inst_26969,done);
var state_27097__$1 = (function (){var statearr_27103 = state_27097;
(statearr_27103[(12)] = inst_27045__$1);

return statearr_27103;
})();
if(cljs.core.truth_(inst_27046)){
var statearr_27104_27189 = state_27097__$1;
(statearr_27104_27189[(1)] = (30));

} else {
var statearr_27105_27190 = state_27097__$1;
(statearr_27105_27190[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (1))){
var state_27097__$1 = state_27097;
var statearr_27106_27191 = state_27097__$1;
(statearr_27106_27191[(2)] = null);

(statearr_27106_27191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (24))){
var inst_26998 = (state_27097[(7)]);
var inst_27015 = (state_27097[(2)]);
var inst_27016 = cljs.core.next.call(null,inst_26998);
var inst_26978 = inst_27016;
var inst_26979 = null;
var inst_26980 = (0);
var inst_26981 = (0);
var state_27097__$1 = (function (){var statearr_27107 = state_27097;
(statearr_27107[(13)] = inst_27015);

(statearr_27107[(14)] = inst_26979);

(statearr_27107[(15)] = inst_26981);

(statearr_27107[(16)] = inst_26978);

(statearr_27107[(17)] = inst_26980);

return statearr_27107;
})();
var statearr_27108_27192 = state_27097__$1;
(statearr_27108_27192[(2)] = null);

(statearr_27108_27192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (39))){
var state_27097__$1 = state_27097;
var statearr_27112_27193 = state_27097__$1;
(statearr_27112_27193[(2)] = null);

(statearr_27112_27193[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (4))){
var inst_26969 = (state_27097[(11)]);
var inst_26969__$1 = (state_27097[(2)]);
var inst_26970 = (inst_26969__$1 == null);
var state_27097__$1 = (function (){var statearr_27113 = state_27097;
(statearr_27113[(11)] = inst_26969__$1);

return statearr_27113;
})();
if(cljs.core.truth_(inst_26970)){
var statearr_27114_27194 = state_27097__$1;
(statearr_27114_27194[(1)] = (5));

} else {
var statearr_27115_27195 = state_27097__$1;
(statearr_27115_27195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (15))){
var inst_26979 = (state_27097[(14)]);
var inst_26981 = (state_27097[(15)]);
var inst_26978 = (state_27097[(16)]);
var inst_26980 = (state_27097[(17)]);
var inst_26994 = (state_27097[(2)]);
var inst_26995 = (inst_26981 + (1));
var tmp27109 = inst_26979;
var tmp27110 = inst_26978;
var tmp27111 = inst_26980;
var inst_26978__$1 = tmp27110;
var inst_26979__$1 = tmp27109;
var inst_26980__$1 = tmp27111;
var inst_26981__$1 = inst_26995;
var state_27097__$1 = (function (){var statearr_27116 = state_27097;
(statearr_27116[(14)] = inst_26979__$1);

(statearr_27116[(15)] = inst_26981__$1);

(statearr_27116[(16)] = inst_26978__$1);

(statearr_27116[(18)] = inst_26994);

(statearr_27116[(17)] = inst_26980__$1);

return statearr_27116;
})();
var statearr_27117_27196 = state_27097__$1;
(statearr_27117_27196[(2)] = null);

(statearr_27117_27196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (21))){
var inst_27019 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27121_27197 = state_27097__$1;
(statearr_27121_27197[(2)] = inst_27019);

(statearr_27121_27197[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (31))){
var inst_27045 = (state_27097[(12)]);
var inst_27049 = done.call(null,null);
var inst_27050 = cljs.core.async.untap_STAR_.call(null,m,inst_27045);
var state_27097__$1 = (function (){var statearr_27122 = state_27097;
(statearr_27122[(19)] = inst_27049);

return statearr_27122;
})();
var statearr_27123_27198 = state_27097__$1;
(statearr_27123_27198[(2)] = inst_27050);

(statearr_27123_27198[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (32))){
var inst_27037 = (state_27097[(20)]);
var inst_27039 = (state_27097[(21)]);
var inst_27038 = (state_27097[(9)]);
var inst_27040 = (state_27097[(10)]);
var inst_27052 = (state_27097[(2)]);
var inst_27053 = (inst_27040 + (1));
var tmp27118 = inst_27037;
var tmp27119 = inst_27039;
var tmp27120 = inst_27038;
var inst_27037__$1 = tmp27118;
var inst_27038__$1 = tmp27120;
var inst_27039__$1 = tmp27119;
var inst_27040__$1 = inst_27053;
var state_27097__$1 = (function (){var statearr_27124 = state_27097;
(statearr_27124[(22)] = inst_27052);

(statearr_27124[(20)] = inst_27037__$1);

(statearr_27124[(21)] = inst_27039__$1);

(statearr_27124[(9)] = inst_27038__$1);

(statearr_27124[(10)] = inst_27040__$1);

return statearr_27124;
})();
var statearr_27125_27199 = state_27097__$1;
(statearr_27125_27199[(2)] = null);

(statearr_27125_27199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (40))){
var inst_27065 = (state_27097[(23)]);
var inst_27069 = done.call(null,null);
var inst_27070 = cljs.core.async.untap_STAR_.call(null,m,inst_27065);
var state_27097__$1 = (function (){var statearr_27126 = state_27097;
(statearr_27126[(24)] = inst_27069);

return statearr_27126;
})();
var statearr_27127_27200 = state_27097__$1;
(statearr_27127_27200[(2)] = inst_27070);

(statearr_27127_27200[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (33))){
var inst_27056 = (state_27097[(25)]);
var inst_27058 = cljs.core.chunked_seq_QMARK_.call(null,inst_27056);
var state_27097__$1 = state_27097;
if(inst_27058){
var statearr_27128_27201 = state_27097__$1;
(statearr_27128_27201[(1)] = (36));

} else {
var statearr_27129_27202 = state_27097__$1;
(statearr_27129_27202[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (13))){
var inst_26988 = (state_27097[(26)]);
var inst_26991 = cljs.core.async.close_BANG_.call(null,inst_26988);
var state_27097__$1 = state_27097;
var statearr_27130_27203 = state_27097__$1;
(statearr_27130_27203[(2)] = inst_26991);

(statearr_27130_27203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (22))){
var inst_27009 = (state_27097[(8)]);
var inst_27012 = cljs.core.async.close_BANG_.call(null,inst_27009);
var state_27097__$1 = state_27097;
var statearr_27131_27204 = state_27097__$1;
(statearr_27131_27204[(2)] = inst_27012);

(statearr_27131_27204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (36))){
var inst_27056 = (state_27097[(25)]);
var inst_27060 = cljs.core.chunk_first.call(null,inst_27056);
var inst_27061 = cljs.core.chunk_rest.call(null,inst_27056);
var inst_27062 = cljs.core.count.call(null,inst_27060);
var inst_27037 = inst_27061;
var inst_27038 = inst_27060;
var inst_27039 = inst_27062;
var inst_27040 = (0);
var state_27097__$1 = (function (){var statearr_27132 = state_27097;
(statearr_27132[(20)] = inst_27037);

(statearr_27132[(21)] = inst_27039);

(statearr_27132[(9)] = inst_27038);

(statearr_27132[(10)] = inst_27040);

return statearr_27132;
})();
var statearr_27133_27205 = state_27097__$1;
(statearr_27133_27205[(2)] = null);

(statearr_27133_27205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (41))){
var inst_27056 = (state_27097[(25)]);
var inst_27072 = (state_27097[(2)]);
var inst_27073 = cljs.core.next.call(null,inst_27056);
var inst_27037 = inst_27073;
var inst_27038 = null;
var inst_27039 = (0);
var inst_27040 = (0);
var state_27097__$1 = (function (){var statearr_27134 = state_27097;
(statearr_27134[(20)] = inst_27037);

(statearr_27134[(21)] = inst_27039);

(statearr_27134[(9)] = inst_27038);

(statearr_27134[(10)] = inst_27040);

(statearr_27134[(27)] = inst_27072);

return statearr_27134;
})();
var statearr_27135_27206 = state_27097__$1;
(statearr_27135_27206[(2)] = null);

(statearr_27135_27206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (43))){
var state_27097__$1 = state_27097;
var statearr_27136_27207 = state_27097__$1;
(statearr_27136_27207[(2)] = null);

(statearr_27136_27207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (29))){
var inst_27081 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27137_27208 = state_27097__$1;
(statearr_27137_27208[(2)] = inst_27081);

(statearr_27137_27208[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (44))){
var inst_27090 = (state_27097[(2)]);
var state_27097__$1 = (function (){var statearr_27138 = state_27097;
(statearr_27138[(28)] = inst_27090);

return statearr_27138;
})();
var statearr_27139_27209 = state_27097__$1;
(statearr_27139_27209[(2)] = null);

(statearr_27139_27209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (6))){
var inst_27029 = (state_27097[(29)]);
var inst_27028 = cljs.core.deref.call(null,cs);
var inst_27029__$1 = cljs.core.keys.call(null,inst_27028);
var inst_27030 = cljs.core.count.call(null,inst_27029__$1);
var inst_27031 = cljs.core.reset_BANG_.call(null,dctr,inst_27030);
var inst_27036 = cljs.core.seq.call(null,inst_27029__$1);
var inst_27037 = inst_27036;
var inst_27038 = null;
var inst_27039 = (0);
var inst_27040 = (0);
var state_27097__$1 = (function (){var statearr_27140 = state_27097;
(statearr_27140[(20)] = inst_27037);

(statearr_27140[(21)] = inst_27039);

(statearr_27140[(30)] = inst_27031);

(statearr_27140[(9)] = inst_27038);

(statearr_27140[(29)] = inst_27029__$1);

(statearr_27140[(10)] = inst_27040);

return statearr_27140;
})();
var statearr_27141_27210 = state_27097__$1;
(statearr_27141_27210[(2)] = null);

(statearr_27141_27210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (28))){
var inst_27037 = (state_27097[(20)]);
var inst_27056 = (state_27097[(25)]);
var inst_27056__$1 = cljs.core.seq.call(null,inst_27037);
var state_27097__$1 = (function (){var statearr_27142 = state_27097;
(statearr_27142[(25)] = inst_27056__$1);

return statearr_27142;
})();
if(inst_27056__$1){
var statearr_27143_27211 = state_27097__$1;
(statearr_27143_27211[(1)] = (33));

} else {
var statearr_27144_27212 = state_27097__$1;
(statearr_27144_27212[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (25))){
var inst_27039 = (state_27097[(21)]);
var inst_27040 = (state_27097[(10)]);
var inst_27042 = (inst_27040 < inst_27039);
var inst_27043 = inst_27042;
var state_27097__$1 = state_27097;
if(cljs.core.truth_(inst_27043)){
var statearr_27145_27213 = state_27097__$1;
(statearr_27145_27213[(1)] = (27));

} else {
var statearr_27146_27214 = state_27097__$1;
(statearr_27146_27214[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (34))){
var state_27097__$1 = state_27097;
var statearr_27147_27215 = state_27097__$1;
(statearr_27147_27215[(2)] = null);

(statearr_27147_27215[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (17))){
var state_27097__$1 = state_27097;
var statearr_27148_27216 = state_27097__$1;
(statearr_27148_27216[(2)] = null);

(statearr_27148_27216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (3))){
var inst_27095 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27097__$1,inst_27095);
} else {
if((state_val_27098 === (12))){
var inst_27024 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27149_27217 = state_27097__$1;
(statearr_27149_27217[(2)] = inst_27024);

(statearr_27149_27217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (2))){
var state_27097__$1 = state_27097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27097__$1,(4),ch);
} else {
if((state_val_27098 === (23))){
var state_27097__$1 = state_27097;
var statearr_27150_27218 = state_27097__$1;
(statearr_27150_27218[(2)] = null);

(statearr_27150_27218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (35))){
var inst_27079 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27151_27219 = state_27097__$1;
(statearr_27151_27219[(2)] = inst_27079);

(statearr_27151_27219[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (19))){
var inst_26998 = (state_27097[(7)]);
var inst_27002 = cljs.core.chunk_first.call(null,inst_26998);
var inst_27003 = cljs.core.chunk_rest.call(null,inst_26998);
var inst_27004 = cljs.core.count.call(null,inst_27002);
var inst_26978 = inst_27003;
var inst_26979 = inst_27002;
var inst_26980 = inst_27004;
var inst_26981 = (0);
var state_27097__$1 = (function (){var statearr_27152 = state_27097;
(statearr_27152[(14)] = inst_26979);

(statearr_27152[(15)] = inst_26981);

(statearr_27152[(16)] = inst_26978);

(statearr_27152[(17)] = inst_26980);

return statearr_27152;
})();
var statearr_27153_27220 = state_27097__$1;
(statearr_27153_27220[(2)] = null);

(statearr_27153_27220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (11))){
var inst_26998 = (state_27097[(7)]);
var inst_26978 = (state_27097[(16)]);
var inst_26998__$1 = cljs.core.seq.call(null,inst_26978);
var state_27097__$1 = (function (){var statearr_27154 = state_27097;
(statearr_27154[(7)] = inst_26998__$1);

return statearr_27154;
})();
if(inst_26998__$1){
var statearr_27155_27221 = state_27097__$1;
(statearr_27155_27221[(1)] = (16));

} else {
var statearr_27156_27222 = state_27097__$1;
(statearr_27156_27222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (9))){
var inst_27026 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27157_27223 = state_27097__$1;
(statearr_27157_27223[(2)] = inst_27026);

(statearr_27157_27223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (5))){
var inst_26976 = cljs.core.deref.call(null,cs);
var inst_26977 = cljs.core.seq.call(null,inst_26976);
var inst_26978 = inst_26977;
var inst_26979 = null;
var inst_26980 = (0);
var inst_26981 = (0);
var state_27097__$1 = (function (){var statearr_27158 = state_27097;
(statearr_27158[(14)] = inst_26979);

(statearr_27158[(15)] = inst_26981);

(statearr_27158[(16)] = inst_26978);

(statearr_27158[(17)] = inst_26980);

return statearr_27158;
})();
var statearr_27159_27224 = state_27097__$1;
(statearr_27159_27224[(2)] = null);

(statearr_27159_27224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (14))){
var state_27097__$1 = state_27097;
var statearr_27160_27225 = state_27097__$1;
(statearr_27160_27225[(2)] = null);

(statearr_27160_27225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (45))){
var inst_27087 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27161_27226 = state_27097__$1;
(statearr_27161_27226[(2)] = inst_27087);

(statearr_27161_27226[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (26))){
var inst_27029 = (state_27097[(29)]);
var inst_27083 = (state_27097[(2)]);
var inst_27084 = cljs.core.seq.call(null,inst_27029);
var state_27097__$1 = (function (){var statearr_27162 = state_27097;
(statearr_27162[(31)] = inst_27083);

return statearr_27162;
})();
if(inst_27084){
var statearr_27163_27227 = state_27097__$1;
(statearr_27163_27227[(1)] = (42));

} else {
var statearr_27164_27228 = state_27097__$1;
(statearr_27164_27228[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (16))){
var inst_26998 = (state_27097[(7)]);
var inst_27000 = cljs.core.chunked_seq_QMARK_.call(null,inst_26998);
var state_27097__$1 = state_27097;
if(inst_27000){
var statearr_27165_27229 = state_27097__$1;
(statearr_27165_27229[(1)] = (19));

} else {
var statearr_27166_27230 = state_27097__$1;
(statearr_27166_27230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (38))){
var inst_27076 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27167_27231 = state_27097__$1;
(statearr_27167_27231[(2)] = inst_27076);

(statearr_27167_27231[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (30))){
var state_27097__$1 = state_27097;
var statearr_27168_27232 = state_27097__$1;
(statearr_27168_27232[(2)] = null);

(statearr_27168_27232[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (10))){
var inst_26979 = (state_27097[(14)]);
var inst_26981 = (state_27097[(15)]);
var inst_26987 = cljs.core._nth.call(null,inst_26979,inst_26981);
var inst_26988 = cljs.core.nth.call(null,inst_26987,(0),null);
var inst_26989 = cljs.core.nth.call(null,inst_26987,(1),null);
var state_27097__$1 = (function (){var statearr_27169 = state_27097;
(statearr_27169[(26)] = inst_26988);

return statearr_27169;
})();
if(cljs.core.truth_(inst_26989)){
var statearr_27170_27233 = state_27097__$1;
(statearr_27170_27233[(1)] = (13));

} else {
var statearr_27171_27234 = state_27097__$1;
(statearr_27171_27234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (18))){
var inst_27022 = (state_27097[(2)]);
var state_27097__$1 = state_27097;
var statearr_27172_27235 = state_27097__$1;
(statearr_27172_27235[(2)] = inst_27022);

(statearr_27172_27235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (42))){
var state_27097__$1 = state_27097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27097__$1,(45),dchan);
} else {
if((state_val_27098 === (37))){
var inst_27065 = (state_27097[(23)]);
var inst_27056 = (state_27097[(25)]);
var inst_26969 = (state_27097[(11)]);
var inst_27065__$1 = cljs.core.first.call(null,inst_27056);
var inst_27066 = cljs.core.async.put_BANG_.call(null,inst_27065__$1,inst_26969,done);
var state_27097__$1 = (function (){var statearr_27173 = state_27097;
(statearr_27173[(23)] = inst_27065__$1);

return statearr_27173;
})();
if(cljs.core.truth_(inst_27066)){
var statearr_27174_27236 = state_27097__$1;
(statearr_27174_27236[(1)] = (39));

} else {
var statearr_27175_27237 = state_27097__$1;
(statearr_27175_27237[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27098 === (8))){
var inst_26981 = (state_27097[(15)]);
var inst_26980 = (state_27097[(17)]);
var inst_26983 = (inst_26981 < inst_26980);
var inst_26984 = inst_26983;
var state_27097__$1 = state_27097;
if(cljs.core.truth_(inst_26984)){
var statearr_27176_27238 = state_27097__$1;
(statearr_27176_27238[(1)] = (10));

} else {
var statearr_27177_27239 = state_27097__$1;
(statearr_27177_27239[(1)] = (11));

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
});})(c__21999__auto___27185,cs,m,dchan,dctr,done))
;
return ((function (switch__21937__auto__,c__21999__auto___27185,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21938__auto__ = null;
var cljs$core$async$mult_$_state_machine__21938__auto____0 = (function (){
var statearr_27181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27181[(0)] = cljs$core$async$mult_$_state_machine__21938__auto__);

(statearr_27181[(1)] = (1));

return statearr_27181;
});
var cljs$core$async$mult_$_state_machine__21938__auto____1 = (function (state_27097){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_27097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e27182){if((e27182 instanceof Object)){
var ex__21941__auto__ = e27182;
var statearr_27183_27240 = state_27097;
(statearr_27183_27240[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27241 = state_27097;
state_27097 = G__27241;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21938__auto__ = function(state_27097){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21938__auto____1.call(this,state_27097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21938__auto____0;
cljs$core$async$mult_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21938__auto____1;
return cljs$core$async$mult_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___27185,cs,m,dchan,dctr,done))
})();
var state__22001__auto__ = (function (){var statearr_27184 = f__22000__auto__.call(null);
(statearr_27184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___27185);

return statearr_27184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___27185,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27243 = arguments.length;
switch (G__27243) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27246 = {};
return obj27246;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18104__auto__ = m;
if(and__18104__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18752__auto__ = (((m == null))?null:m);
return (function (){var or__18116__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19156__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19156__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27251){
var map__27252 = p__27251;
var map__27252__$1 = ((cljs.core.seq_QMARK_.call(null,map__27252))?cljs.core.apply.call(null,cljs.core.hash_map,map__27252):map__27252);
var opts = map__27252__$1;
var statearr_27253_27256 = state;
(statearr_27253_27256[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27252,map__27252__$1,opts){
return (function (val){
var statearr_27254_27257 = state;
(statearr_27254_27257[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27252,map__27252__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27255_27258 = state;
(statearr_27255_27258[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27247){
var G__27248 = cljs.core.first.call(null,seq27247);
var seq27247__$1 = cljs.core.next.call(null,seq27247);
var G__27249 = cljs.core.first.call(null,seq27247__$1);
var seq27247__$2 = cljs.core.next.call(null,seq27247__$1);
var G__27250 = cljs.core.first.call(null,seq27247__$2);
var seq27247__$3 = cljs.core.next.call(null,seq27247__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27248,G__27249,G__27250,seq27247__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27378 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27378 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27379){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27379 = meta27379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27378.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27378.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27378.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27378.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27378.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27378.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27378.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27380){
var self__ = this;
var _27380__$1 = this;
return self__.meta27379;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27380,meta27379__$1){
var self__ = this;
var _27380__$1 = this;
return (new cljs.core.async.t27378(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27379__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27378.cljs$lang$type = true;

cljs.core.async.t27378.cljs$lang$ctorStr = "cljs.core.async/t27378";

cljs.core.async.t27378.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t27378");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27378 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27378(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27379){
return (new cljs.core.async.t27378(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27379));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27378(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21999__auto___27497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___27497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___27497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27450){
var state_val_27451 = (state_27450[(1)]);
if((state_val_27451 === (7))){
var inst_27394 = (state_27450[(7)]);
var inst_27399 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27394);
var state_27450__$1 = state_27450;
var statearr_27452_27498 = state_27450__$1;
(statearr_27452_27498[(2)] = inst_27399);

(statearr_27452_27498[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (20))){
var inst_27409 = (state_27450[(8)]);
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27450__$1,(23),out,inst_27409);
} else {
if((state_val_27451 === (1))){
var inst_27384 = (state_27450[(9)]);
var inst_27384__$1 = calc_state.call(null);
var inst_27385 = cljs.core.seq_QMARK_.call(null,inst_27384__$1);
var state_27450__$1 = (function (){var statearr_27453 = state_27450;
(statearr_27453[(9)] = inst_27384__$1);

return statearr_27453;
})();
if(inst_27385){
var statearr_27454_27499 = state_27450__$1;
(statearr_27454_27499[(1)] = (2));

} else {
var statearr_27455_27500 = state_27450__$1;
(statearr_27455_27500[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (24))){
var inst_27402 = (state_27450[(10)]);
var inst_27394 = inst_27402;
var state_27450__$1 = (function (){var statearr_27456 = state_27450;
(statearr_27456[(7)] = inst_27394);

return statearr_27456;
})();
var statearr_27457_27501 = state_27450__$1;
(statearr_27457_27501[(2)] = null);

(statearr_27457_27501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (4))){
var inst_27384 = (state_27450[(9)]);
var inst_27390 = (state_27450[(2)]);
var inst_27391 = cljs.core.get.call(null,inst_27390,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27392 = cljs.core.get.call(null,inst_27390,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27393 = cljs.core.get.call(null,inst_27390,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27394 = inst_27384;
var state_27450__$1 = (function (){var statearr_27458 = state_27450;
(statearr_27458[(7)] = inst_27394);

(statearr_27458[(11)] = inst_27391);

(statearr_27458[(12)] = inst_27392);

(statearr_27458[(13)] = inst_27393);

return statearr_27458;
})();
var statearr_27459_27502 = state_27450__$1;
(statearr_27459_27502[(2)] = null);

(statearr_27459_27502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (15))){
var state_27450__$1 = state_27450;
var statearr_27460_27503 = state_27450__$1;
(statearr_27460_27503[(2)] = null);

(statearr_27460_27503[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (21))){
var inst_27402 = (state_27450[(10)]);
var inst_27394 = inst_27402;
var state_27450__$1 = (function (){var statearr_27461 = state_27450;
(statearr_27461[(7)] = inst_27394);

return statearr_27461;
})();
var statearr_27462_27504 = state_27450__$1;
(statearr_27462_27504[(2)] = null);

(statearr_27462_27504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (13))){
var inst_27446 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27463_27505 = state_27450__$1;
(statearr_27463_27505[(2)] = inst_27446);

(statearr_27463_27505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (22))){
var inst_27444 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27464_27506 = state_27450__$1;
(statearr_27464_27506[(2)] = inst_27444);

(statearr_27464_27506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (6))){
var inst_27448 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27450__$1,inst_27448);
} else {
if((state_val_27451 === (25))){
var state_27450__$1 = state_27450;
var statearr_27465_27507 = state_27450__$1;
(statearr_27465_27507[(2)] = null);

(statearr_27465_27507[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (17))){
var inst_27424 = (state_27450[(14)]);
var state_27450__$1 = state_27450;
var statearr_27466_27508 = state_27450__$1;
(statearr_27466_27508[(2)] = inst_27424);

(statearr_27466_27508[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (3))){
var inst_27384 = (state_27450[(9)]);
var state_27450__$1 = state_27450;
var statearr_27467_27509 = state_27450__$1;
(statearr_27467_27509[(2)] = inst_27384);

(statearr_27467_27509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (12))){
var inst_27410 = (state_27450[(15)]);
var inst_27405 = (state_27450[(16)]);
var inst_27424 = (state_27450[(14)]);
var inst_27424__$1 = inst_27405.call(null,inst_27410);
var state_27450__$1 = (function (){var statearr_27468 = state_27450;
(statearr_27468[(14)] = inst_27424__$1);

return statearr_27468;
})();
if(cljs.core.truth_(inst_27424__$1)){
var statearr_27469_27510 = state_27450__$1;
(statearr_27469_27510[(1)] = (17));

} else {
var statearr_27470_27511 = state_27450__$1;
(statearr_27470_27511[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (2))){
var inst_27384 = (state_27450[(9)]);
var inst_27387 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27384);
var state_27450__$1 = state_27450;
var statearr_27471_27512 = state_27450__$1;
(statearr_27471_27512[(2)] = inst_27387);

(statearr_27471_27512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (23))){
var inst_27435 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
if(cljs.core.truth_(inst_27435)){
var statearr_27472_27513 = state_27450__$1;
(statearr_27472_27513[(1)] = (24));

} else {
var statearr_27473_27514 = state_27450__$1;
(statearr_27473_27514[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (19))){
var inst_27432 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
if(cljs.core.truth_(inst_27432)){
var statearr_27474_27515 = state_27450__$1;
(statearr_27474_27515[(1)] = (20));

} else {
var statearr_27475_27516 = state_27450__$1;
(statearr_27475_27516[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (11))){
var inst_27409 = (state_27450[(8)]);
var inst_27415 = (inst_27409 == null);
var state_27450__$1 = state_27450;
if(cljs.core.truth_(inst_27415)){
var statearr_27476_27517 = state_27450__$1;
(statearr_27476_27517[(1)] = (14));

} else {
var statearr_27477_27518 = state_27450__$1;
(statearr_27477_27518[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (9))){
var inst_27402 = (state_27450[(10)]);
var inst_27402__$1 = (state_27450[(2)]);
var inst_27403 = cljs.core.get.call(null,inst_27402__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27404 = cljs.core.get.call(null,inst_27402__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27405 = cljs.core.get.call(null,inst_27402__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27450__$1 = (function (){var statearr_27478 = state_27450;
(statearr_27478[(10)] = inst_27402__$1);

(statearr_27478[(17)] = inst_27404);

(statearr_27478[(16)] = inst_27405);

return statearr_27478;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27450__$1,(10),inst_27403);
} else {
if((state_val_27451 === (5))){
var inst_27394 = (state_27450[(7)]);
var inst_27397 = cljs.core.seq_QMARK_.call(null,inst_27394);
var state_27450__$1 = state_27450;
if(inst_27397){
var statearr_27479_27519 = state_27450__$1;
(statearr_27479_27519[(1)] = (7));

} else {
var statearr_27480_27520 = state_27450__$1;
(statearr_27480_27520[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (14))){
var inst_27410 = (state_27450[(15)]);
var inst_27417 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27410);
var state_27450__$1 = state_27450;
var statearr_27481_27521 = state_27450__$1;
(statearr_27481_27521[(2)] = inst_27417);

(statearr_27481_27521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (26))){
var inst_27440 = (state_27450[(2)]);
var state_27450__$1 = state_27450;
var statearr_27482_27522 = state_27450__$1;
(statearr_27482_27522[(2)] = inst_27440);

(statearr_27482_27522[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (16))){
var inst_27420 = (state_27450[(2)]);
var inst_27421 = calc_state.call(null);
var inst_27394 = inst_27421;
var state_27450__$1 = (function (){var statearr_27483 = state_27450;
(statearr_27483[(7)] = inst_27394);

(statearr_27483[(18)] = inst_27420);

return statearr_27483;
})();
var statearr_27484_27523 = state_27450__$1;
(statearr_27484_27523[(2)] = null);

(statearr_27484_27523[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (10))){
var inst_27410 = (state_27450[(15)]);
var inst_27409 = (state_27450[(8)]);
var inst_27408 = (state_27450[(2)]);
var inst_27409__$1 = cljs.core.nth.call(null,inst_27408,(0),null);
var inst_27410__$1 = cljs.core.nth.call(null,inst_27408,(1),null);
var inst_27411 = (inst_27409__$1 == null);
var inst_27412 = cljs.core._EQ_.call(null,inst_27410__$1,change);
var inst_27413 = (inst_27411) || (inst_27412);
var state_27450__$1 = (function (){var statearr_27485 = state_27450;
(statearr_27485[(15)] = inst_27410__$1);

(statearr_27485[(8)] = inst_27409__$1);

return statearr_27485;
})();
if(cljs.core.truth_(inst_27413)){
var statearr_27486_27524 = state_27450__$1;
(statearr_27486_27524[(1)] = (11));

} else {
var statearr_27487_27525 = state_27450__$1;
(statearr_27487_27525[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (18))){
var inst_27410 = (state_27450[(15)]);
var inst_27404 = (state_27450[(17)]);
var inst_27405 = (state_27450[(16)]);
var inst_27427 = cljs.core.empty_QMARK_.call(null,inst_27405);
var inst_27428 = inst_27404.call(null,inst_27410);
var inst_27429 = cljs.core.not.call(null,inst_27428);
var inst_27430 = (inst_27427) && (inst_27429);
var state_27450__$1 = state_27450;
var statearr_27488_27526 = state_27450__$1;
(statearr_27488_27526[(2)] = inst_27430);

(statearr_27488_27526[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27451 === (8))){
var inst_27394 = (state_27450[(7)]);
var state_27450__$1 = state_27450;
var statearr_27489_27527 = state_27450__$1;
(statearr_27489_27527[(2)] = inst_27394);

(statearr_27489_27527[(1)] = (9));


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
});})(c__21999__auto___27497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21937__auto__,c__21999__auto___27497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21938__auto__ = null;
var cljs$core$async$mix_$_state_machine__21938__auto____0 = (function (){
var statearr_27493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27493[(0)] = cljs$core$async$mix_$_state_machine__21938__auto__);

(statearr_27493[(1)] = (1));

return statearr_27493;
});
var cljs$core$async$mix_$_state_machine__21938__auto____1 = (function (state_27450){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_27450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e27494){if((e27494 instanceof Object)){
var ex__21941__auto__ = e27494;
var statearr_27495_27528 = state_27450;
(statearr_27495_27528[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27529 = state_27450;
state_27450 = G__27529;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21938__auto__ = function(state_27450){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21938__auto____1.call(this,state_27450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21938__auto____0;
cljs$core$async$mix_$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21938__auto____1;
return cljs$core$async$mix_$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___27497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22001__auto__ = (function (){var statearr_27496 = f__22000__auto__.call(null);
(statearr_27496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___27497);

return statearr_27496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___27497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj27531 = {};
return obj27531;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__27533 = arguments.length;
switch (G__27533) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18104__auto__ = p;
if(and__18104__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18104__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18752__auto__ = (((p == null))?null:p);
return (function (){var or__18116__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18752__auto__)]);
if(or__18116__auto__){
return or__18116__auto__;
} else {
var or__18116__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18116__auto____$1){
return or__18116__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__27537 = arguments.length;
switch (G__27537) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18116__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18116__auto__)){
return or__18116__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18116__auto__,mults){
return (function (p1__27535_SHARP_){
if(cljs.core.truth_(p1__27535_SHARP_.call(null,topic))){
return p1__27535_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27535_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18116__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27538 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27538 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta27539){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta27539 = meta27539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27538.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27538.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27538.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27538.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27538.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27538.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27540){
var self__ = this;
var _27540__$1 = this;
return self__.meta27539;
});})(mults,ensure_mult))
;

cljs.core.async.t27538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27540,meta27539__$1){
var self__ = this;
var _27540__$1 = this;
return (new cljs.core.async.t27538(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta27539__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27538.cljs$lang$type = true;

cljs.core.async.t27538.cljs$lang$ctorStr = "cljs.core.async/t27538";

cljs.core.async.t27538.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t27538");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27538 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27538(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27539){
return (new cljs.core.async.t27538(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27539));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27538(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21999__auto___27661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___27661,mults,ensure_mult,p){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___27661,mults,ensure_mult,p){
return (function (state_27612){
var state_val_27613 = (state_27612[(1)]);
if((state_val_27613 === (7))){
var inst_27608 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27614_27662 = state_27612__$1;
(statearr_27614_27662[(2)] = inst_27608);

(statearr_27614_27662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (20))){
var state_27612__$1 = state_27612;
var statearr_27615_27663 = state_27612__$1;
(statearr_27615_27663[(2)] = null);

(statearr_27615_27663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (1))){
var state_27612__$1 = state_27612;
var statearr_27616_27664 = state_27612__$1;
(statearr_27616_27664[(2)] = null);

(statearr_27616_27664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (24))){
var inst_27591 = (state_27612[(7)]);
var inst_27600 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27591);
var state_27612__$1 = state_27612;
var statearr_27617_27665 = state_27612__$1;
(statearr_27617_27665[(2)] = inst_27600);

(statearr_27617_27665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (4))){
var inst_27543 = (state_27612[(8)]);
var inst_27543__$1 = (state_27612[(2)]);
var inst_27544 = (inst_27543__$1 == null);
var state_27612__$1 = (function (){var statearr_27618 = state_27612;
(statearr_27618[(8)] = inst_27543__$1);

return statearr_27618;
})();
if(cljs.core.truth_(inst_27544)){
var statearr_27619_27666 = state_27612__$1;
(statearr_27619_27666[(1)] = (5));

} else {
var statearr_27620_27667 = state_27612__$1;
(statearr_27620_27667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (15))){
var inst_27585 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27621_27668 = state_27612__$1;
(statearr_27621_27668[(2)] = inst_27585);

(statearr_27621_27668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (21))){
var inst_27605 = (state_27612[(2)]);
var state_27612__$1 = (function (){var statearr_27622 = state_27612;
(statearr_27622[(9)] = inst_27605);

return statearr_27622;
})();
var statearr_27623_27669 = state_27612__$1;
(statearr_27623_27669[(2)] = null);

(statearr_27623_27669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (13))){
var inst_27567 = (state_27612[(10)]);
var inst_27569 = cljs.core.chunked_seq_QMARK_.call(null,inst_27567);
var state_27612__$1 = state_27612;
if(inst_27569){
var statearr_27624_27670 = state_27612__$1;
(statearr_27624_27670[(1)] = (16));

} else {
var statearr_27625_27671 = state_27612__$1;
(statearr_27625_27671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (22))){
var inst_27597 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
if(cljs.core.truth_(inst_27597)){
var statearr_27626_27672 = state_27612__$1;
(statearr_27626_27672[(1)] = (23));

} else {
var statearr_27627_27673 = state_27612__$1;
(statearr_27627_27673[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (6))){
var inst_27593 = (state_27612[(11)]);
var inst_27591 = (state_27612[(7)]);
var inst_27543 = (state_27612[(8)]);
var inst_27591__$1 = topic_fn.call(null,inst_27543);
var inst_27592 = cljs.core.deref.call(null,mults);
var inst_27593__$1 = cljs.core.get.call(null,inst_27592,inst_27591__$1);
var state_27612__$1 = (function (){var statearr_27628 = state_27612;
(statearr_27628[(11)] = inst_27593__$1);

(statearr_27628[(7)] = inst_27591__$1);

return statearr_27628;
})();
if(cljs.core.truth_(inst_27593__$1)){
var statearr_27629_27674 = state_27612__$1;
(statearr_27629_27674[(1)] = (19));

} else {
var statearr_27630_27675 = state_27612__$1;
(statearr_27630_27675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (25))){
var inst_27602 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27631_27676 = state_27612__$1;
(statearr_27631_27676[(2)] = inst_27602);

(statearr_27631_27676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (17))){
var inst_27567 = (state_27612[(10)]);
var inst_27576 = cljs.core.first.call(null,inst_27567);
var inst_27577 = cljs.core.async.muxch_STAR_.call(null,inst_27576);
var inst_27578 = cljs.core.async.close_BANG_.call(null,inst_27577);
var inst_27579 = cljs.core.next.call(null,inst_27567);
var inst_27553 = inst_27579;
var inst_27554 = null;
var inst_27555 = (0);
var inst_27556 = (0);
var state_27612__$1 = (function (){var statearr_27632 = state_27612;
(statearr_27632[(12)] = inst_27556);

(statearr_27632[(13)] = inst_27555);

(statearr_27632[(14)] = inst_27578);

(statearr_27632[(15)] = inst_27554);

(statearr_27632[(16)] = inst_27553);

return statearr_27632;
})();
var statearr_27633_27677 = state_27612__$1;
(statearr_27633_27677[(2)] = null);

(statearr_27633_27677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (3))){
var inst_27610 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27612__$1,inst_27610);
} else {
if((state_val_27613 === (12))){
var inst_27587 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27634_27678 = state_27612__$1;
(statearr_27634_27678[(2)] = inst_27587);

(statearr_27634_27678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (2))){
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27612__$1,(4),ch);
} else {
if((state_val_27613 === (23))){
var state_27612__$1 = state_27612;
var statearr_27635_27679 = state_27612__$1;
(statearr_27635_27679[(2)] = null);

(statearr_27635_27679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (19))){
var inst_27593 = (state_27612[(11)]);
var inst_27543 = (state_27612[(8)]);
var inst_27595 = cljs.core.async.muxch_STAR_.call(null,inst_27593);
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27612__$1,(22),inst_27595,inst_27543);
} else {
if((state_val_27613 === (11))){
var inst_27567 = (state_27612[(10)]);
var inst_27553 = (state_27612[(16)]);
var inst_27567__$1 = cljs.core.seq.call(null,inst_27553);
var state_27612__$1 = (function (){var statearr_27636 = state_27612;
(statearr_27636[(10)] = inst_27567__$1);

return statearr_27636;
})();
if(inst_27567__$1){
var statearr_27637_27680 = state_27612__$1;
(statearr_27637_27680[(1)] = (13));

} else {
var statearr_27638_27681 = state_27612__$1;
(statearr_27638_27681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (9))){
var inst_27589 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27639_27682 = state_27612__$1;
(statearr_27639_27682[(2)] = inst_27589);

(statearr_27639_27682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (5))){
var inst_27550 = cljs.core.deref.call(null,mults);
var inst_27551 = cljs.core.vals.call(null,inst_27550);
var inst_27552 = cljs.core.seq.call(null,inst_27551);
var inst_27553 = inst_27552;
var inst_27554 = null;
var inst_27555 = (0);
var inst_27556 = (0);
var state_27612__$1 = (function (){var statearr_27640 = state_27612;
(statearr_27640[(12)] = inst_27556);

(statearr_27640[(13)] = inst_27555);

(statearr_27640[(15)] = inst_27554);

(statearr_27640[(16)] = inst_27553);

return statearr_27640;
})();
var statearr_27641_27683 = state_27612__$1;
(statearr_27641_27683[(2)] = null);

(statearr_27641_27683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (14))){
var state_27612__$1 = state_27612;
var statearr_27645_27684 = state_27612__$1;
(statearr_27645_27684[(2)] = null);

(statearr_27645_27684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (16))){
var inst_27567 = (state_27612[(10)]);
var inst_27571 = cljs.core.chunk_first.call(null,inst_27567);
var inst_27572 = cljs.core.chunk_rest.call(null,inst_27567);
var inst_27573 = cljs.core.count.call(null,inst_27571);
var inst_27553 = inst_27572;
var inst_27554 = inst_27571;
var inst_27555 = inst_27573;
var inst_27556 = (0);
var state_27612__$1 = (function (){var statearr_27646 = state_27612;
(statearr_27646[(12)] = inst_27556);

(statearr_27646[(13)] = inst_27555);

(statearr_27646[(15)] = inst_27554);

(statearr_27646[(16)] = inst_27553);

return statearr_27646;
})();
var statearr_27647_27685 = state_27612__$1;
(statearr_27647_27685[(2)] = null);

(statearr_27647_27685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (10))){
var inst_27556 = (state_27612[(12)]);
var inst_27555 = (state_27612[(13)]);
var inst_27554 = (state_27612[(15)]);
var inst_27553 = (state_27612[(16)]);
var inst_27561 = cljs.core._nth.call(null,inst_27554,inst_27556);
var inst_27562 = cljs.core.async.muxch_STAR_.call(null,inst_27561);
var inst_27563 = cljs.core.async.close_BANG_.call(null,inst_27562);
var inst_27564 = (inst_27556 + (1));
var tmp27642 = inst_27555;
var tmp27643 = inst_27554;
var tmp27644 = inst_27553;
var inst_27553__$1 = tmp27644;
var inst_27554__$1 = tmp27643;
var inst_27555__$1 = tmp27642;
var inst_27556__$1 = inst_27564;
var state_27612__$1 = (function (){var statearr_27648 = state_27612;
(statearr_27648[(17)] = inst_27563);

(statearr_27648[(12)] = inst_27556__$1);

(statearr_27648[(13)] = inst_27555__$1);

(statearr_27648[(15)] = inst_27554__$1);

(statearr_27648[(16)] = inst_27553__$1);

return statearr_27648;
})();
var statearr_27649_27686 = state_27612__$1;
(statearr_27649_27686[(2)] = null);

(statearr_27649_27686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (18))){
var inst_27582 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27650_27687 = state_27612__$1;
(statearr_27650_27687[(2)] = inst_27582);

(statearr_27650_27687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (8))){
var inst_27556 = (state_27612[(12)]);
var inst_27555 = (state_27612[(13)]);
var inst_27558 = (inst_27556 < inst_27555);
var inst_27559 = inst_27558;
var state_27612__$1 = state_27612;
if(cljs.core.truth_(inst_27559)){
var statearr_27651_27688 = state_27612__$1;
(statearr_27651_27688[(1)] = (10));

} else {
var statearr_27652_27689 = state_27612__$1;
(statearr_27652_27689[(1)] = (11));

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
});})(c__21999__auto___27661,mults,ensure_mult,p))
;
return ((function (switch__21937__auto__,c__21999__auto___27661,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_27656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27656[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_27656[(1)] = (1));

return statearr_27656;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_27612){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_27612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e27657){if((e27657 instanceof Object)){
var ex__21941__auto__ = e27657;
var statearr_27658_27690 = state_27612;
(statearr_27658_27690[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27691 = state_27612;
state_27612 = G__27691;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_27612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_27612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___27661,mults,ensure_mult,p))
})();
var state__22001__auto__ = (function (){var statearr_27659 = f__22000__auto__.call(null);
(statearr_27659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___27661);

return statearr_27659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___27661,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__27693 = arguments.length;
switch (G__27693) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__27696 = arguments.length;
switch (G__27696) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__27699 = arguments.length;
switch (G__27699) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21999__auto___27769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___27769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___27769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27738){
var state_val_27739 = (state_27738[(1)]);
if((state_val_27739 === (7))){
var state_27738__$1 = state_27738;
var statearr_27740_27770 = state_27738__$1;
(statearr_27740_27770[(2)] = null);

(statearr_27740_27770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (1))){
var state_27738__$1 = state_27738;
var statearr_27741_27771 = state_27738__$1;
(statearr_27741_27771[(2)] = null);

(statearr_27741_27771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (4))){
var inst_27702 = (state_27738[(7)]);
var inst_27704 = (inst_27702 < cnt);
var state_27738__$1 = state_27738;
if(cljs.core.truth_(inst_27704)){
var statearr_27742_27772 = state_27738__$1;
(statearr_27742_27772[(1)] = (6));

} else {
var statearr_27743_27773 = state_27738__$1;
(statearr_27743_27773[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (15))){
var inst_27734 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
var statearr_27744_27774 = state_27738__$1;
(statearr_27744_27774[(2)] = inst_27734);

(statearr_27744_27774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (13))){
var inst_27727 = cljs.core.async.close_BANG_.call(null,out);
var state_27738__$1 = state_27738;
var statearr_27745_27775 = state_27738__$1;
(statearr_27745_27775[(2)] = inst_27727);

(statearr_27745_27775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (6))){
var state_27738__$1 = state_27738;
var statearr_27746_27776 = state_27738__$1;
(statearr_27746_27776[(2)] = null);

(statearr_27746_27776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (3))){
var inst_27736 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27738__$1,inst_27736);
} else {
if((state_val_27739 === (12))){
var inst_27724 = (state_27738[(8)]);
var inst_27724__$1 = (state_27738[(2)]);
var inst_27725 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27724__$1);
var state_27738__$1 = (function (){var statearr_27747 = state_27738;
(statearr_27747[(8)] = inst_27724__$1);

return statearr_27747;
})();
if(cljs.core.truth_(inst_27725)){
var statearr_27748_27777 = state_27738__$1;
(statearr_27748_27777[(1)] = (13));

} else {
var statearr_27749_27778 = state_27738__$1;
(statearr_27749_27778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (2))){
var inst_27701 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27702 = (0);
var state_27738__$1 = (function (){var statearr_27750 = state_27738;
(statearr_27750[(9)] = inst_27701);

(statearr_27750[(7)] = inst_27702);

return statearr_27750;
})();
var statearr_27751_27779 = state_27738__$1;
(statearr_27751_27779[(2)] = null);

(statearr_27751_27779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (11))){
var inst_27702 = (state_27738[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27738,(10),Object,null,(9));
var inst_27711 = chs__$1.call(null,inst_27702);
var inst_27712 = done.call(null,inst_27702);
var inst_27713 = cljs.core.async.take_BANG_.call(null,inst_27711,inst_27712);
var state_27738__$1 = state_27738;
var statearr_27752_27780 = state_27738__$1;
(statearr_27752_27780[(2)] = inst_27713);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27738__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (9))){
var inst_27702 = (state_27738[(7)]);
var inst_27715 = (state_27738[(2)]);
var inst_27716 = (inst_27702 + (1));
var inst_27702__$1 = inst_27716;
var state_27738__$1 = (function (){var statearr_27753 = state_27738;
(statearr_27753[(7)] = inst_27702__$1);

(statearr_27753[(10)] = inst_27715);

return statearr_27753;
})();
var statearr_27754_27781 = state_27738__$1;
(statearr_27754_27781[(2)] = null);

(statearr_27754_27781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (5))){
var inst_27722 = (state_27738[(2)]);
var state_27738__$1 = (function (){var statearr_27755 = state_27738;
(statearr_27755[(11)] = inst_27722);

return statearr_27755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27738__$1,(12),dchan);
} else {
if((state_val_27739 === (14))){
var inst_27724 = (state_27738[(8)]);
var inst_27729 = cljs.core.apply.call(null,f,inst_27724);
var state_27738__$1 = state_27738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27738__$1,(16),out,inst_27729);
} else {
if((state_val_27739 === (16))){
var inst_27731 = (state_27738[(2)]);
var state_27738__$1 = (function (){var statearr_27756 = state_27738;
(statearr_27756[(12)] = inst_27731);

return statearr_27756;
})();
var statearr_27757_27782 = state_27738__$1;
(statearr_27757_27782[(2)] = null);

(statearr_27757_27782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (10))){
var inst_27706 = (state_27738[(2)]);
var inst_27707 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27738__$1 = (function (){var statearr_27758 = state_27738;
(statearr_27758[(13)] = inst_27706);

return statearr_27758;
})();
var statearr_27759_27783 = state_27738__$1;
(statearr_27759_27783[(2)] = inst_27707);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27738__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (8))){
var inst_27720 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
var statearr_27760_27784 = state_27738__$1;
(statearr_27760_27784[(2)] = inst_27720);

(statearr_27760_27784[(1)] = (5));


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
});})(c__21999__auto___27769,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21937__auto__,c__21999__auto___27769,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_27764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27764[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_27764[(1)] = (1));

return statearr_27764;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_27738){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_27738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e27765){if((e27765 instanceof Object)){
var ex__21941__auto__ = e27765;
var statearr_27766_27785 = state_27738;
(statearr_27766_27785[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27786 = state_27738;
state_27738 = G__27786;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_27738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_27738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___27769,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22001__auto__ = (function (){var statearr_27767 = f__22000__auto__.call(null);
(statearr_27767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___27769);

return statearr_27767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___27769,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__27789 = arguments.length;
switch (G__27789) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21999__auto___27844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___27844,out){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___27844,out){
return (function (state_27819){
var state_val_27820 = (state_27819[(1)]);
if((state_val_27820 === (7))){
var inst_27798 = (state_27819[(7)]);
var inst_27799 = (state_27819[(8)]);
var inst_27798__$1 = (state_27819[(2)]);
var inst_27799__$1 = cljs.core.nth.call(null,inst_27798__$1,(0),null);
var inst_27800 = cljs.core.nth.call(null,inst_27798__$1,(1),null);
var inst_27801 = (inst_27799__$1 == null);
var state_27819__$1 = (function (){var statearr_27821 = state_27819;
(statearr_27821[(9)] = inst_27800);

(statearr_27821[(7)] = inst_27798__$1);

(statearr_27821[(8)] = inst_27799__$1);

return statearr_27821;
})();
if(cljs.core.truth_(inst_27801)){
var statearr_27822_27845 = state_27819__$1;
(statearr_27822_27845[(1)] = (8));

} else {
var statearr_27823_27846 = state_27819__$1;
(statearr_27823_27846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (1))){
var inst_27790 = cljs.core.vec.call(null,chs);
var inst_27791 = inst_27790;
var state_27819__$1 = (function (){var statearr_27824 = state_27819;
(statearr_27824[(10)] = inst_27791);

return statearr_27824;
})();
var statearr_27825_27847 = state_27819__$1;
(statearr_27825_27847[(2)] = null);

(statearr_27825_27847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (4))){
var inst_27791 = (state_27819[(10)]);
var state_27819__$1 = state_27819;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27819__$1,(7),inst_27791);
} else {
if((state_val_27820 === (6))){
var inst_27815 = (state_27819[(2)]);
var state_27819__$1 = state_27819;
var statearr_27826_27848 = state_27819__$1;
(statearr_27826_27848[(2)] = inst_27815);

(statearr_27826_27848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (3))){
var inst_27817 = (state_27819[(2)]);
var state_27819__$1 = state_27819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27819__$1,inst_27817);
} else {
if((state_val_27820 === (2))){
var inst_27791 = (state_27819[(10)]);
var inst_27793 = cljs.core.count.call(null,inst_27791);
var inst_27794 = (inst_27793 > (0));
var state_27819__$1 = state_27819;
if(cljs.core.truth_(inst_27794)){
var statearr_27828_27849 = state_27819__$1;
(statearr_27828_27849[(1)] = (4));

} else {
var statearr_27829_27850 = state_27819__$1;
(statearr_27829_27850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (11))){
var inst_27791 = (state_27819[(10)]);
var inst_27808 = (state_27819[(2)]);
var tmp27827 = inst_27791;
var inst_27791__$1 = tmp27827;
var state_27819__$1 = (function (){var statearr_27830 = state_27819;
(statearr_27830[(10)] = inst_27791__$1);

(statearr_27830[(11)] = inst_27808);

return statearr_27830;
})();
var statearr_27831_27851 = state_27819__$1;
(statearr_27831_27851[(2)] = null);

(statearr_27831_27851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (9))){
var inst_27799 = (state_27819[(8)]);
var state_27819__$1 = state_27819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27819__$1,(11),out,inst_27799);
} else {
if((state_val_27820 === (5))){
var inst_27813 = cljs.core.async.close_BANG_.call(null,out);
var state_27819__$1 = state_27819;
var statearr_27832_27852 = state_27819__$1;
(statearr_27832_27852[(2)] = inst_27813);

(statearr_27832_27852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (10))){
var inst_27811 = (state_27819[(2)]);
var state_27819__$1 = state_27819;
var statearr_27833_27853 = state_27819__$1;
(statearr_27833_27853[(2)] = inst_27811);

(statearr_27833_27853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27820 === (8))){
var inst_27800 = (state_27819[(9)]);
var inst_27798 = (state_27819[(7)]);
var inst_27799 = (state_27819[(8)]);
var inst_27791 = (state_27819[(10)]);
var inst_27803 = (function (){var c = inst_27800;
var v = inst_27799;
var vec__27796 = inst_27798;
var cs = inst_27791;
return ((function (c,v,vec__27796,cs,inst_27800,inst_27798,inst_27799,inst_27791,state_val_27820,c__21999__auto___27844,out){
return (function (p1__27787_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27787_SHARP_);
});
;})(c,v,vec__27796,cs,inst_27800,inst_27798,inst_27799,inst_27791,state_val_27820,c__21999__auto___27844,out))
})();
var inst_27804 = cljs.core.filterv.call(null,inst_27803,inst_27791);
var inst_27791__$1 = inst_27804;
var state_27819__$1 = (function (){var statearr_27834 = state_27819;
(statearr_27834[(10)] = inst_27791__$1);

return statearr_27834;
})();
var statearr_27835_27854 = state_27819__$1;
(statearr_27835_27854[(2)] = null);

(statearr_27835_27854[(1)] = (2));


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
});})(c__21999__auto___27844,out))
;
return ((function (switch__21937__auto__,c__21999__auto___27844,out){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_27839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27839[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_27839[(1)] = (1));

return statearr_27839;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_27819){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_27819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e27840){if((e27840 instanceof Object)){
var ex__21941__auto__ = e27840;
var statearr_27841_27855 = state_27819;
(statearr_27841_27855[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27856 = state_27819;
state_27819 = G__27856;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_27819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_27819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___27844,out))
})();
var state__22001__auto__ = (function (){var statearr_27842 = f__22000__auto__.call(null);
(statearr_27842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___27844);

return statearr_27842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___27844,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__27858 = arguments.length;
switch (G__27858) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21999__auto___27906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___27906,out){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___27906,out){
return (function (state_27882){
var state_val_27883 = (state_27882[(1)]);
if((state_val_27883 === (7))){
var inst_27864 = (state_27882[(7)]);
var inst_27864__$1 = (state_27882[(2)]);
var inst_27865 = (inst_27864__$1 == null);
var inst_27866 = cljs.core.not.call(null,inst_27865);
var state_27882__$1 = (function (){var statearr_27884 = state_27882;
(statearr_27884[(7)] = inst_27864__$1);

return statearr_27884;
})();
if(inst_27866){
var statearr_27885_27907 = state_27882__$1;
(statearr_27885_27907[(1)] = (8));

} else {
var statearr_27886_27908 = state_27882__$1;
(statearr_27886_27908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (1))){
var inst_27859 = (0);
var state_27882__$1 = (function (){var statearr_27887 = state_27882;
(statearr_27887[(8)] = inst_27859);

return statearr_27887;
})();
var statearr_27888_27909 = state_27882__$1;
(statearr_27888_27909[(2)] = null);

(statearr_27888_27909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (4))){
var state_27882__$1 = state_27882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27882__$1,(7),ch);
} else {
if((state_val_27883 === (6))){
var inst_27877 = (state_27882[(2)]);
var state_27882__$1 = state_27882;
var statearr_27889_27910 = state_27882__$1;
(statearr_27889_27910[(2)] = inst_27877);

(statearr_27889_27910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (3))){
var inst_27879 = (state_27882[(2)]);
var inst_27880 = cljs.core.async.close_BANG_.call(null,out);
var state_27882__$1 = (function (){var statearr_27890 = state_27882;
(statearr_27890[(9)] = inst_27879);

return statearr_27890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27882__$1,inst_27880);
} else {
if((state_val_27883 === (2))){
var inst_27859 = (state_27882[(8)]);
var inst_27861 = (inst_27859 < n);
var state_27882__$1 = state_27882;
if(cljs.core.truth_(inst_27861)){
var statearr_27891_27911 = state_27882__$1;
(statearr_27891_27911[(1)] = (4));

} else {
var statearr_27892_27912 = state_27882__$1;
(statearr_27892_27912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (11))){
var inst_27859 = (state_27882[(8)]);
var inst_27869 = (state_27882[(2)]);
var inst_27870 = (inst_27859 + (1));
var inst_27859__$1 = inst_27870;
var state_27882__$1 = (function (){var statearr_27893 = state_27882;
(statearr_27893[(10)] = inst_27869);

(statearr_27893[(8)] = inst_27859__$1);

return statearr_27893;
})();
var statearr_27894_27913 = state_27882__$1;
(statearr_27894_27913[(2)] = null);

(statearr_27894_27913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (9))){
var state_27882__$1 = state_27882;
var statearr_27895_27914 = state_27882__$1;
(statearr_27895_27914[(2)] = null);

(statearr_27895_27914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (5))){
var state_27882__$1 = state_27882;
var statearr_27896_27915 = state_27882__$1;
(statearr_27896_27915[(2)] = null);

(statearr_27896_27915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (10))){
var inst_27874 = (state_27882[(2)]);
var state_27882__$1 = state_27882;
var statearr_27897_27916 = state_27882__$1;
(statearr_27897_27916[(2)] = inst_27874);

(statearr_27897_27916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27883 === (8))){
var inst_27864 = (state_27882[(7)]);
var state_27882__$1 = state_27882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27882__$1,(11),out,inst_27864);
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
});})(c__21999__auto___27906,out))
;
return ((function (switch__21937__auto__,c__21999__auto___27906,out){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_27901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27901[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_27901[(1)] = (1));

return statearr_27901;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_27882){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_27882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e27902){if((e27902 instanceof Object)){
var ex__21941__auto__ = e27902;
var statearr_27903_27917 = state_27882;
(statearr_27903_27917[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27918 = state_27882;
state_27882 = G__27918;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_27882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_27882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___27906,out))
})();
var state__22001__auto__ = (function (){var statearr_27904 = f__22000__auto__.call(null);
(statearr_27904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___27906);

return statearr_27904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___27906,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27926 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27926 = (function (ch,f,map_LT_,meta27927){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27927 = meta27927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27926.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27926.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27929 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27929 = (function (fn1,_,meta27927,map_LT_,f,ch,meta27930){
this.fn1 = fn1;
this._ = _;
this.meta27927 = meta27927;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27930 = meta27930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27929.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27919_SHARP_){
return f1.call(null,(((p1__27919_SHARP_ == null))?null:self__.f.call(null,p1__27919_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27931){
var self__ = this;
var _27931__$1 = this;
return self__.meta27930;
});})(___$1))
;

cljs.core.async.t27929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27931,meta27930__$1){
var self__ = this;
var _27931__$1 = this;
return (new cljs.core.async.t27929(self__.fn1,self__._,self__.meta27927,self__.map_LT_,self__.f,self__.ch,meta27930__$1));
});})(___$1))
;

cljs.core.async.t27929.cljs$lang$type = true;

cljs.core.async.t27929.cljs$lang$ctorStr = "cljs.core.async/t27929";

cljs.core.async.t27929.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t27929");
});})(___$1))
;

cljs.core.async.__GT_t27929 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27929(fn1__$1,___$2,meta27927__$1,map_LT___$1,f__$1,ch__$1,meta27930){
return (new cljs.core.async.t27929(fn1__$1,___$2,meta27927__$1,map_LT___$1,f__$1,ch__$1,meta27930));
});})(___$1))
;

}

return (new cljs.core.async.t27929(fn1,___$1,self__.meta27927,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18104__auto__ = ret;
if(cljs.core.truth_(and__18104__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18104__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27926.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27926.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27928){
var self__ = this;
var _27928__$1 = this;
return self__.meta27927;
});

cljs.core.async.t27926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27928,meta27927__$1){
var self__ = this;
var _27928__$1 = this;
return (new cljs.core.async.t27926(self__.ch,self__.f,self__.map_LT_,meta27927__$1));
});

cljs.core.async.t27926.cljs$lang$type = true;

cljs.core.async.t27926.cljs$lang$ctorStr = "cljs.core.async/t27926";

cljs.core.async.t27926.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t27926");
});

cljs.core.async.__GT_t27926 = (function cljs$core$async$map_LT__$___GT_t27926(ch__$1,f__$1,map_LT___$1,meta27927){
return (new cljs.core.async.t27926(ch__$1,f__$1,map_LT___$1,meta27927));
});

}

return (new cljs.core.async.t27926(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27935 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27935 = (function (ch,f,map_GT_,meta27936){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27936 = meta27936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27935.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27935.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27935.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27937){
var self__ = this;
var _27937__$1 = this;
return self__.meta27936;
});

cljs.core.async.t27935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27937,meta27936__$1){
var self__ = this;
var _27937__$1 = this;
return (new cljs.core.async.t27935(self__.ch,self__.f,self__.map_GT_,meta27936__$1));
});

cljs.core.async.t27935.cljs$lang$type = true;

cljs.core.async.t27935.cljs$lang$ctorStr = "cljs.core.async/t27935";

cljs.core.async.t27935.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t27935");
});

cljs.core.async.__GT_t27935 = (function cljs$core$async$map_GT__$___GT_t27935(ch__$1,f__$1,map_GT___$1,meta27936){
return (new cljs.core.async.t27935(ch__$1,f__$1,map_GT___$1,meta27936));
});

}

return (new cljs.core.async.t27935(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27941 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27941 = (function (ch,p,filter_GT_,meta27942){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27942 = meta27942;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27941.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27941.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27941.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27941.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27941.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27941.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27941.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27943){
var self__ = this;
var _27943__$1 = this;
return self__.meta27942;
});

cljs.core.async.t27941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27943,meta27942__$1){
var self__ = this;
var _27943__$1 = this;
return (new cljs.core.async.t27941(self__.ch,self__.p,self__.filter_GT_,meta27942__$1));
});

cljs.core.async.t27941.cljs$lang$type = true;

cljs.core.async.t27941.cljs$lang$ctorStr = "cljs.core.async/t27941";

cljs.core.async.t27941.cljs$lang$ctorPrWriter = (function (this__18695__auto__,writer__18696__auto__,opt__18697__auto__){
return cljs.core._write.call(null,writer__18696__auto__,"cljs.core.async/t27941");
});

cljs.core.async.__GT_t27941 = (function cljs$core$async$filter_GT__$___GT_t27941(ch__$1,p__$1,filter_GT___$1,meta27942){
return (new cljs.core.async.t27941(ch__$1,p__$1,filter_GT___$1,meta27942));
});

}

return (new cljs.core.async.t27941(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__27945 = arguments.length;
switch (G__27945) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21999__auto___27988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___27988,out){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___27988,out){
return (function (state_27966){
var state_val_27967 = (state_27966[(1)]);
if((state_val_27967 === (7))){
var inst_27962 = (state_27966[(2)]);
var state_27966__$1 = state_27966;
var statearr_27968_27989 = state_27966__$1;
(statearr_27968_27989[(2)] = inst_27962);

(statearr_27968_27989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (1))){
var state_27966__$1 = state_27966;
var statearr_27969_27990 = state_27966__$1;
(statearr_27969_27990[(2)] = null);

(statearr_27969_27990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (4))){
var inst_27948 = (state_27966[(7)]);
var inst_27948__$1 = (state_27966[(2)]);
var inst_27949 = (inst_27948__$1 == null);
var state_27966__$1 = (function (){var statearr_27970 = state_27966;
(statearr_27970[(7)] = inst_27948__$1);

return statearr_27970;
})();
if(cljs.core.truth_(inst_27949)){
var statearr_27971_27991 = state_27966__$1;
(statearr_27971_27991[(1)] = (5));

} else {
var statearr_27972_27992 = state_27966__$1;
(statearr_27972_27992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (6))){
var inst_27948 = (state_27966[(7)]);
var inst_27953 = p.call(null,inst_27948);
var state_27966__$1 = state_27966;
if(cljs.core.truth_(inst_27953)){
var statearr_27973_27993 = state_27966__$1;
(statearr_27973_27993[(1)] = (8));

} else {
var statearr_27974_27994 = state_27966__$1;
(statearr_27974_27994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (3))){
var inst_27964 = (state_27966[(2)]);
var state_27966__$1 = state_27966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27966__$1,inst_27964);
} else {
if((state_val_27967 === (2))){
var state_27966__$1 = state_27966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27966__$1,(4),ch);
} else {
if((state_val_27967 === (11))){
var inst_27956 = (state_27966[(2)]);
var state_27966__$1 = state_27966;
var statearr_27975_27995 = state_27966__$1;
(statearr_27975_27995[(2)] = inst_27956);

(statearr_27975_27995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (9))){
var state_27966__$1 = state_27966;
var statearr_27976_27996 = state_27966__$1;
(statearr_27976_27996[(2)] = null);

(statearr_27976_27996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (5))){
var inst_27951 = cljs.core.async.close_BANG_.call(null,out);
var state_27966__$1 = state_27966;
var statearr_27977_27997 = state_27966__$1;
(statearr_27977_27997[(2)] = inst_27951);

(statearr_27977_27997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (10))){
var inst_27959 = (state_27966[(2)]);
var state_27966__$1 = (function (){var statearr_27978 = state_27966;
(statearr_27978[(8)] = inst_27959);

return statearr_27978;
})();
var statearr_27979_27998 = state_27966__$1;
(statearr_27979_27998[(2)] = null);

(statearr_27979_27998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27967 === (8))){
var inst_27948 = (state_27966[(7)]);
var state_27966__$1 = state_27966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27966__$1,(11),out,inst_27948);
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
});})(c__21999__auto___27988,out))
;
return ((function (switch__21937__auto__,c__21999__auto___27988,out){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_27983 = [null,null,null,null,null,null,null,null,null];
(statearr_27983[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_27983[(1)] = (1));

return statearr_27983;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_27966){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_27966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e27984){if((e27984 instanceof Object)){
var ex__21941__auto__ = e27984;
var statearr_27985_27999 = state_27966;
(statearr_27985_27999[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28000 = state_27966;
state_27966 = G__28000;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_27966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_27966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___27988,out))
})();
var state__22001__auto__ = (function (){var statearr_27986 = f__22000__auto__.call(null);
(statearr_27986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___27988);

return statearr_27986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___27988,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28002 = arguments.length;
switch (G__28002) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto__){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto__){
return (function (state_28169){
var state_val_28170 = (state_28169[(1)]);
if((state_val_28170 === (7))){
var inst_28165 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28171_28212 = state_28169__$1;
(statearr_28171_28212[(2)] = inst_28165);

(statearr_28171_28212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (20))){
var inst_28135 = (state_28169[(7)]);
var inst_28146 = (state_28169[(2)]);
var inst_28147 = cljs.core.next.call(null,inst_28135);
var inst_28121 = inst_28147;
var inst_28122 = null;
var inst_28123 = (0);
var inst_28124 = (0);
var state_28169__$1 = (function (){var statearr_28172 = state_28169;
(statearr_28172[(8)] = inst_28123);

(statearr_28172[(9)] = inst_28121);

(statearr_28172[(10)] = inst_28124);

(statearr_28172[(11)] = inst_28146);

(statearr_28172[(12)] = inst_28122);

return statearr_28172;
})();
var statearr_28173_28213 = state_28169__$1;
(statearr_28173_28213[(2)] = null);

(statearr_28173_28213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (1))){
var state_28169__$1 = state_28169;
var statearr_28174_28214 = state_28169__$1;
(statearr_28174_28214[(2)] = null);

(statearr_28174_28214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (4))){
var inst_28110 = (state_28169[(13)]);
var inst_28110__$1 = (state_28169[(2)]);
var inst_28111 = (inst_28110__$1 == null);
var state_28169__$1 = (function (){var statearr_28175 = state_28169;
(statearr_28175[(13)] = inst_28110__$1);

return statearr_28175;
})();
if(cljs.core.truth_(inst_28111)){
var statearr_28176_28215 = state_28169__$1;
(statearr_28176_28215[(1)] = (5));

} else {
var statearr_28177_28216 = state_28169__$1;
(statearr_28177_28216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (15))){
var state_28169__$1 = state_28169;
var statearr_28181_28217 = state_28169__$1;
(statearr_28181_28217[(2)] = null);

(statearr_28181_28217[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (21))){
var state_28169__$1 = state_28169;
var statearr_28182_28218 = state_28169__$1;
(statearr_28182_28218[(2)] = null);

(statearr_28182_28218[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (13))){
var inst_28123 = (state_28169[(8)]);
var inst_28121 = (state_28169[(9)]);
var inst_28124 = (state_28169[(10)]);
var inst_28122 = (state_28169[(12)]);
var inst_28131 = (state_28169[(2)]);
var inst_28132 = (inst_28124 + (1));
var tmp28178 = inst_28123;
var tmp28179 = inst_28121;
var tmp28180 = inst_28122;
var inst_28121__$1 = tmp28179;
var inst_28122__$1 = tmp28180;
var inst_28123__$1 = tmp28178;
var inst_28124__$1 = inst_28132;
var state_28169__$1 = (function (){var statearr_28183 = state_28169;
(statearr_28183[(8)] = inst_28123__$1);

(statearr_28183[(9)] = inst_28121__$1);

(statearr_28183[(14)] = inst_28131);

(statearr_28183[(10)] = inst_28124__$1);

(statearr_28183[(12)] = inst_28122__$1);

return statearr_28183;
})();
var statearr_28184_28219 = state_28169__$1;
(statearr_28184_28219[(2)] = null);

(statearr_28184_28219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (22))){
var state_28169__$1 = state_28169;
var statearr_28185_28220 = state_28169__$1;
(statearr_28185_28220[(2)] = null);

(statearr_28185_28220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (6))){
var inst_28110 = (state_28169[(13)]);
var inst_28119 = f.call(null,inst_28110);
var inst_28120 = cljs.core.seq.call(null,inst_28119);
var inst_28121 = inst_28120;
var inst_28122 = null;
var inst_28123 = (0);
var inst_28124 = (0);
var state_28169__$1 = (function (){var statearr_28186 = state_28169;
(statearr_28186[(8)] = inst_28123);

(statearr_28186[(9)] = inst_28121);

(statearr_28186[(10)] = inst_28124);

(statearr_28186[(12)] = inst_28122);

return statearr_28186;
})();
var statearr_28187_28221 = state_28169__$1;
(statearr_28187_28221[(2)] = null);

(statearr_28187_28221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (17))){
var inst_28135 = (state_28169[(7)]);
var inst_28139 = cljs.core.chunk_first.call(null,inst_28135);
var inst_28140 = cljs.core.chunk_rest.call(null,inst_28135);
var inst_28141 = cljs.core.count.call(null,inst_28139);
var inst_28121 = inst_28140;
var inst_28122 = inst_28139;
var inst_28123 = inst_28141;
var inst_28124 = (0);
var state_28169__$1 = (function (){var statearr_28188 = state_28169;
(statearr_28188[(8)] = inst_28123);

(statearr_28188[(9)] = inst_28121);

(statearr_28188[(10)] = inst_28124);

(statearr_28188[(12)] = inst_28122);

return statearr_28188;
})();
var statearr_28189_28222 = state_28169__$1;
(statearr_28189_28222[(2)] = null);

(statearr_28189_28222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (3))){
var inst_28167 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28169__$1,inst_28167);
} else {
if((state_val_28170 === (12))){
var inst_28155 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28190_28223 = state_28169__$1;
(statearr_28190_28223[(2)] = inst_28155);

(statearr_28190_28223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (2))){
var state_28169__$1 = state_28169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28169__$1,(4),in$);
} else {
if((state_val_28170 === (23))){
var inst_28163 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28191_28224 = state_28169__$1;
(statearr_28191_28224[(2)] = inst_28163);

(statearr_28191_28224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (19))){
var inst_28150 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28192_28225 = state_28169__$1;
(statearr_28192_28225[(2)] = inst_28150);

(statearr_28192_28225[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (11))){
var inst_28135 = (state_28169[(7)]);
var inst_28121 = (state_28169[(9)]);
var inst_28135__$1 = cljs.core.seq.call(null,inst_28121);
var state_28169__$1 = (function (){var statearr_28193 = state_28169;
(statearr_28193[(7)] = inst_28135__$1);

return statearr_28193;
})();
if(inst_28135__$1){
var statearr_28194_28226 = state_28169__$1;
(statearr_28194_28226[(1)] = (14));

} else {
var statearr_28195_28227 = state_28169__$1;
(statearr_28195_28227[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (9))){
var inst_28157 = (state_28169[(2)]);
var inst_28158 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28169__$1 = (function (){var statearr_28196 = state_28169;
(statearr_28196[(15)] = inst_28157);

return statearr_28196;
})();
if(cljs.core.truth_(inst_28158)){
var statearr_28197_28228 = state_28169__$1;
(statearr_28197_28228[(1)] = (21));

} else {
var statearr_28198_28229 = state_28169__$1;
(statearr_28198_28229[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (5))){
var inst_28113 = cljs.core.async.close_BANG_.call(null,out);
var state_28169__$1 = state_28169;
var statearr_28199_28230 = state_28169__$1;
(statearr_28199_28230[(2)] = inst_28113);

(statearr_28199_28230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (14))){
var inst_28135 = (state_28169[(7)]);
var inst_28137 = cljs.core.chunked_seq_QMARK_.call(null,inst_28135);
var state_28169__$1 = state_28169;
if(inst_28137){
var statearr_28200_28231 = state_28169__$1;
(statearr_28200_28231[(1)] = (17));

} else {
var statearr_28201_28232 = state_28169__$1;
(statearr_28201_28232[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (16))){
var inst_28153 = (state_28169[(2)]);
var state_28169__$1 = state_28169;
var statearr_28202_28233 = state_28169__$1;
(statearr_28202_28233[(2)] = inst_28153);

(statearr_28202_28233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28170 === (10))){
var inst_28124 = (state_28169[(10)]);
var inst_28122 = (state_28169[(12)]);
var inst_28129 = cljs.core._nth.call(null,inst_28122,inst_28124);
var state_28169__$1 = state_28169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28169__$1,(13),out,inst_28129);
} else {
if((state_val_28170 === (18))){
var inst_28135 = (state_28169[(7)]);
var inst_28144 = cljs.core.first.call(null,inst_28135);
var state_28169__$1 = state_28169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28169__$1,(20),out,inst_28144);
} else {
if((state_val_28170 === (8))){
var inst_28123 = (state_28169[(8)]);
var inst_28124 = (state_28169[(10)]);
var inst_28126 = (inst_28124 < inst_28123);
var inst_28127 = inst_28126;
var state_28169__$1 = state_28169;
if(cljs.core.truth_(inst_28127)){
var statearr_28203_28234 = state_28169__$1;
(statearr_28203_28234[(1)] = (10));

} else {
var statearr_28204_28235 = state_28169__$1;
(statearr_28204_28235[(1)] = (11));

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
});})(c__21999__auto__))
;
return ((function (switch__21937__auto__,c__21999__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21938__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21938__auto____0 = (function (){
var statearr_28208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28208[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21938__auto__);

(statearr_28208[(1)] = (1));

return statearr_28208;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21938__auto____1 = (function (state_28169){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_28169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e28209){if((e28209 instanceof Object)){
var ex__21941__auto__ = e28209;
var statearr_28210_28236 = state_28169;
(statearr_28210_28236[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28237 = state_28169;
state_28169 = G__28237;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21938__auto__ = function(state_28169){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21938__auto____1.call(this,state_28169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21938__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21938__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto__))
})();
var state__22001__auto__ = (function (){var statearr_28211 = f__22000__auto__.call(null);
(statearr_28211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto__);

return statearr_28211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto__))
);

return c__21999__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28239 = arguments.length;
switch (G__28239) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28242 = arguments.length;
switch (G__28242) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28245 = arguments.length;
switch (G__28245) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21999__auto___28295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___28295,out){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___28295,out){
return (function (state_28269){
var state_val_28270 = (state_28269[(1)]);
if((state_val_28270 === (7))){
var inst_28264 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28271_28296 = state_28269__$1;
(statearr_28271_28296[(2)] = inst_28264);

(statearr_28271_28296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (1))){
var inst_28246 = null;
var state_28269__$1 = (function (){var statearr_28272 = state_28269;
(statearr_28272[(7)] = inst_28246);

return statearr_28272;
})();
var statearr_28273_28297 = state_28269__$1;
(statearr_28273_28297[(2)] = null);

(statearr_28273_28297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (4))){
var inst_28249 = (state_28269[(8)]);
var inst_28249__$1 = (state_28269[(2)]);
var inst_28250 = (inst_28249__$1 == null);
var inst_28251 = cljs.core.not.call(null,inst_28250);
var state_28269__$1 = (function (){var statearr_28274 = state_28269;
(statearr_28274[(8)] = inst_28249__$1);

return statearr_28274;
})();
if(inst_28251){
var statearr_28275_28298 = state_28269__$1;
(statearr_28275_28298[(1)] = (5));

} else {
var statearr_28276_28299 = state_28269__$1;
(statearr_28276_28299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (6))){
var state_28269__$1 = state_28269;
var statearr_28277_28300 = state_28269__$1;
(statearr_28277_28300[(2)] = null);

(statearr_28277_28300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (3))){
var inst_28266 = (state_28269[(2)]);
var inst_28267 = cljs.core.async.close_BANG_.call(null,out);
var state_28269__$1 = (function (){var statearr_28278 = state_28269;
(statearr_28278[(9)] = inst_28266);

return statearr_28278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28269__$1,inst_28267);
} else {
if((state_val_28270 === (2))){
var state_28269__$1 = state_28269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28269__$1,(4),ch);
} else {
if((state_val_28270 === (11))){
var inst_28249 = (state_28269[(8)]);
var inst_28258 = (state_28269[(2)]);
var inst_28246 = inst_28249;
var state_28269__$1 = (function (){var statearr_28279 = state_28269;
(statearr_28279[(7)] = inst_28246);

(statearr_28279[(10)] = inst_28258);

return statearr_28279;
})();
var statearr_28280_28301 = state_28269__$1;
(statearr_28280_28301[(2)] = null);

(statearr_28280_28301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (9))){
var inst_28249 = (state_28269[(8)]);
var state_28269__$1 = state_28269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28269__$1,(11),out,inst_28249);
} else {
if((state_val_28270 === (5))){
var inst_28246 = (state_28269[(7)]);
var inst_28249 = (state_28269[(8)]);
var inst_28253 = cljs.core._EQ_.call(null,inst_28249,inst_28246);
var state_28269__$1 = state_28269;
if(inst_28253){
var statearr_28282_28302 = state_28269__$1;
(statearr_28282_28302[(1)] = (8));

} else {
var statearr_28283_28303 = state_28269__$1;
(statearr_28283_28303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (10))){
var inst_28261 = (state_28269[(2)]);
var state_28269__$1 = state_28269;
var statearr_28284_28304 = state_28269__$1;
(statearr_28284_28304[(2)] = inst_28261);

(statearr_28284_28304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28270 === (8))){
var inst_28246 = (state_28269[(7)]);
var tmp28281 = inst_28246;
var inst_28246__$1 = tmp28281;
var state_28269__$1 = (function (){var statearr_28285 = state_28269;
(statearr_28285[(7)] = inst_28246__$1);

return statearr_28285;
})();
var statearr_28286_28305 = state_28269__$1;
(statearr_28286_28305[(2)] = null);

(statearr_28286_28305[(1)] = (2));


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
});})(c__21999__auto___28295,out))
;
return ((function (switch__21937__auto__,c__21999__auto___28295,out){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_28290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28290[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_28290[(1)] = (1));

return statearr_28290;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_28269){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_28269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e28291){if((e28291 instanceof Object)){
var ex__21941__auto__ = e28291;
var statearr_28292_28306 = state_28269;
(statearr_28292_28306[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28307 = state_28269;
state_28269 = G__28307;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_28269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_28269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___28295,out))
})();
var state__22001__auto__ = (function (){var statearr_28293 = f__22000__auto__.call(null);
(statearr_28293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___28295);

return statearr_28293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___28295,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28309 = arguments.length;
switch (G__28309) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21999__auto___28378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___28378,out){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___28378,out){
return (function (state_28347){
var state_val_28348 = (state_28347[(1)]);
if((state_val_28348 === (7))){
var inst_28343 = (state_28347[(2)]);
var state_28347__$1 = state_28347;
var statearr_28349_28379 = state_28347__$1;
(statearr_28349_28379[(2)] = inst_28343);

(statearr_28349_28379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (1))){
var inst_28310 = (new Array(n));
var inst_28311 = inst_28310;
var inst_28312 = (0);
var state_28347__$1 = (function (){var statearr_28350 = state_28347;
(statearr_28350[(7)] = inst_28312);

(statearr_28350[(8)] = inst_28311);

return statearr_28350;
})();
var statearr_28351_28380 = state_28347__$1;
(statearr_28351_28380[(2)] = null);

(statearr_28351_28380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (4))){
var inst_28315 = (state_28347[(9)]);
var inst_28315__$1 = (state_28347[(2)]);
var inst_28316 = (inst_28315__$1 == null);
var inst_28317 = cljs.core.not.call(null,inst_28316);
var state_28347__$1 = (function (){var statearr_28352 = state_28347;
(statearr_28352[(9)] = inst_28315__$1);

return statearr_28352;
})();
if(inst_28317){
var statearr_28353_28381 = state_28347__$1;
(statearr_28353_28381[(1)] = (5));

} else {
var statearr_28354_28382 = state_28347__$1;
(statearr_28354_28382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (15))){
var inst_28337 = (state_28347[(2)]);
var state_28347__$1 = state_28347;
var statearr_28355_28383 = state_28347__$1;
(statearr_28355_28383[(2)] = inst_28337);

(statearr_28355_28383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (13))){
var state_28347__$1 = state_28347;
var statearr_28356_28384 = state_28347__$1;
(statearr_28356_28384[(2)] = null);

(statearr_28356_28384[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (6))){
var inst_28312 = (state_28347[(7)]);
var inst_28333 = (inst_28312 > (0));
var state_28347__$1 = state_28347;
if(cljs.core.truth_(inst_28333)){
var statearr_28357_28385 = state_28347__$1;
(statearr_28357_28385[(1)] = (12));

} else {
var statearr_28358_28386 = state_28347__$1;
(statearr_28358_28386[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (3))){
var inst_28345 = (state_28347[(2)]);
var state_28347__$1 = state_28347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28347__$1,inst_28345);
} else {
if((state_val_28348 === (12))){
var inst_28311 = (state_28347[(8)]);
var inst_28335 = cljs.core.vec.call(null,inst_28311);
var state_28347__$1 = state_28347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28347__$1,(15),out,inst_28335);
} else {
if((state_val_28348 === (2))){
var state_28347__$1 = state_28347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28347__$1,(4),ch);
} else {
if((state_val_28348 === (11))){
var inst_28327 = (state_28347[(2)]);
var inst_28328 = (new Array(n));
var inst_28311 = inst_28328;
var inst_28312 = (0);
var state_28347__$1 = (function (){var statearr_28359 = state_28347;
(statearr_28359[(10)] = inst_28327);

(statearr_28359[(7)] = inst_28312);

(statearr_28359[(8)] = inst_28311);

return statearr_28359;
})();
var statearr_28360_28387 = state_28347__$1;
(statearr_28360_28387[(2)] = null);

(statearr_28360_28387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (9))){
var inst_28311 = (state_28347[(8)]);
var inst_28325 = cljs.core.vec.call(null,inst_28311);
var state_28347__$1 = state_28347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28347__$1,(11),out,inst_28325);
} else {
if((state_val_28348 === (5))){
var inst_28312 = (state_28347[(7)]);
var inst_28315 = (state_28347[(9)]);
var inst_28320 = (state_28347[(11)]);
var inst_28311 = (state_28347[(8)]);
var inst_28319 = (inst_28311[inst_28312] = inst_28315);
var inst_28320__$1 = (inst_28312 + (1));
var inst_28321 = (inst_28320__$1 < n);
var state_28347__$1 = (function (){var statearr_28361 = state_28347;
(statearr_28361[(11)] = inst_28320__$1);

(statearr_28361[(12)] = inst_28319);

return statearr_28361;
})();
if(cljs.core.truth_(inst_28321)){
var statearr_28362_28388 = state_28347__$1;
(statearr_28362_28388[(1)] = (8));

} else {
var statearr_28363_28389 = state_28347__$1;
(statearr_28363_28389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (14))){
var inst_28340 = (state_28347[(2)]);
var inst_28341 = cljs.core.async.close_BANG_.call(null,out);
var state_28347__$1 = (function (){var statearr_28365 = state_28347;
(statearr_28365[(13)] = inst_28340);

return statearr_28365;
})();
var statearr_28366_28390 = state_28347__$1;
(statearr_28366_28390[(2)] = inst_28341);

(statearr_28366_28390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (10))){
var inst_28331 = (state_28347[(2)]);
var state_28347__$1 = state_28347;
var statearr_28367_28391 = state_28347__$1;
(statearr_28367_28391[(2)] = inst_28331);

(statearr_28367_28391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28348 === (8))){
var inst_28320 = (state_28347[(11)]);
var inst_28311 = (state_28347[(8)]);
var tmp28364 = inst_28311;
var inst_28311__$1 = tmp28364;
var inst_28312 = inst_28320;
var state_28347__$1 = (function (){var statearr_28368 = state_28347;
(statearr_28368[(7)] = inst_28312);

(statearr_28368[(8)] = inst_28311__$1);

return statearr_28368;
})();
var statearr_28369_28392 = state_28347__$1;
(statearr_28369_28392[(2)] = null);

(statearr_28369_28392[(1)] = (2));


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
});})(c__21999__auto___28378,out))
;
return ((function (switch__21937__auto__,c__21999__auto___28378,out){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_28373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28373[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_28373[(1)] = (1));

return statearr_28373;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_28347){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_28347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e28374){if((e28374 instanceof Object)){
var ex__21941__auto__ = e28374;
var statearr_28375_28393 = state_28347;
(statearr_28375_28393[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28394 = state_28347;
state_28347 = G__28394;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_28347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_28347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___28378,out))
})();
var state__22001__auto__ = (function (){var statearr_28376 = f__22000__auto__.call(null);
(statearr_28376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___28378);

return statearr_28376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___28378,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28396 = arguments.length;
switch (G__28396) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21999__auto___28469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21999__auto___28469,out){
return (function (){
var f__22000__auto__ = (function (){var switch__21937__auto__ = ((function (c__21999__auto___28469,out){
return (function (state_28438){
var state_val_28439 = (state_28438[(1)]);
if((state_val_28439 === (7))){
var inst_28434 = (state_28438[(2)]);
var state_28438__$1 = state_28438;
var statearr_28440_28470 = state_28438__$1;
(statearr_28440_28470[(2)] = inst_28434);

(statearr_28440_28470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (1))){
var inst_28397 = [];
var inst_28398 = inst_28397;
var inst_28399 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28438__$1 = (function (){var statearr_28441 = state_28438;
(statearr_28441[(7)] = inst_28399);

(statearr_28441[(8)] = inst_28398);

return statearr_28441;
})();
var statearr_28442_28471 = state_28438__$1;
(statearr_28442_28471[(2)] = null);

(statearr_28442_28471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (4))){
var inst_28402 = (state_28438[(9)]);
var inst_28402__$1 = (state_28438[(2)]);
var inst_28403 = (inst_28402__$1 == null);
var inst_28404 = cljs.core.not.call(null,inst_28403);
var state_28438__$1 = (function (){var statearr_28443 = state_28438;
(statearr_28443[(9)] = inst_28402__$1);

return statearr_28443;
})();
if(inst_28404){
var statearr_28444_28472 = state_28438__$1;
(statearr_28444_28472[(1)] = (5));

} else {
var statearr_28445_28473 = state_28438__$1;
(statearr_28445_28473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (15))){
var inst_28428 = (state_28438[(2)]);
var state_28438__$1 = state_28438;
var statearr_28446_28474 = state_28438__$1;
(statearr_28446_28474[(2)] = inst_28428);

(statearr_28446_28474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (13))){
var state_28438__$1 = state_28438;
var statearr_28447_28475 = state_28438__$1;
(statearr_28447_28475[(2)] = null);

(statearr_28447_28475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (6))){
var inst_28398 = (state_28438[(8)]);
var inst_28423 = inst_28398.length;
var inst_28424 = (inst_28423 > (0));
var state_28438__$1 = state_28438;
if(cljs.core.truth_(inst_28424)){
var statearr_28448_28476 = state_28438__$1;
(statearr_28448_28476[(1)] = (12));

} else {
var statearr_28449_28477 = state_28438__$1;
(statearr_28449_28477[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (3))){
var inst_28436 = (state_28438[(2)]);
var state_28438__$1 = state_28438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28438__$1,inst_28436);
} else {
if((state_val_28439 === (12))){
var inst_28398 = (state_28438[(8)]);
var inst_28426 = cljs.core.vec.call(null,inst_28398);
var state_28438__$1 = state_28438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28438__$1,(15),out,inst_28426);
} else {
if((state_val_28439 === (2))){
var state_28438__$1 = state_28438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28438__$1,(4),ch);
} else {
if((state_val_28439 === (11))){
var inst_28402 = (state_28438[(9)]);
var inst_28406 = (state_28438[(10)]);
var inst_28416 = (state_28438[(2)]);
var inst_28417 = [];
var inst_28418 = inst_28417.push(inst_28402);
var inst_28398 = inst_28417;
var inst_28399 = inst_28406;
var state_28438__$1 = (function (){var statearr_28450 = state_28438;
(statearr_28450[(7)] = inst_28399);

(statearr_28450[(11)] = inst_28418);

(statearr_28450[(8)] = inst_28398);

(statearr_28450[(12)] = inst_28416);

return statearr_28450;
})();
var statearr_28451_28478 = state_28438__$1;
(statearr_28451_28478[(2)] = null);

(statearr_28451_28478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (9))){
var inst_28398 = (state_28438[(8)]);
var inst_28414 = cljs.core.vec.call(null,inst_28398);
var state_28438__$1 = state_28438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28438__$1,(11),out,inst_28414);
} else {
if((state_val_28439 === (5))){
var inst_28402 = (state_28438[(9)]);
var inst_28399 = (state_28438[(7)]);
var inst_28406 = (state_28438[(10)]);
var inst_28406__$1 = f.call(null,inst_28402);
var inst_28407 = cljs.core._EQ_.call(null,inst_28406__$1,inst_28399);
var inst_28408 = cljs.core.keyword_identical_QMARK_.call(null,inst_28399,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28409 = (inst_28407) || (inst_28408);
var state_28438__$1 = (function (){var statearr_28452 = state_28438;
(statearr_28452[(10)] = inst_28406__$1);

return statearr_28452;
})();
if(cljs.core.truth_(inst_28409)){
var statearr_28453_28479 = state_28438__$1;
(statearr_28453_28479[(1)] = (8));

} else {
var statearr_28454_28480 = state_28438__$1;
(statearr_28454_28480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (14))){
var inst_28431 = (state_28438[(2)]);
var inst_28432 = cljs.core.async.close_BANG_.call(null,out);
var state_28438__$1 = (function (){var statearr_28456 = state_28438;
(statearr_28456[(13)] = inst_28431);

return statearr_28456;
})();
var statearr_28457_28481 = state_28438__$1;
(statearr_28457_28481[(2)] = inst_28432);

(statearr_28457_28481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (10))){
var inst_28421 = (state_28438[(2)]);
var state_28438__$1 = state_28438;
var statearr_28458_28482 = state_28438__$1;
(statearr_28458_28482[(2)] = inst_28421);

(statearr_28458_28482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28439 === (8))){
var inst_28402 = (state_28438[(9)]);
var inst_28398 = (state_28438[(8)]);
var inst_28406 = (state_28438[(10)]);
var inst_28411 = inst_28398.push(inst_28402);
var tmp28455 = inst_28398;
var inst_28398__$1 = tmp28455;
var inst_28399 = inst_28406;
var state_28438__$1 = (function (){var statearr_28459 = state_28438;
(statearr_28459[(7)] = inst_28399);

(statearr_28459[(8)] = inst_28398__$1);

(statearr_28459[(14)] = inst_28411);

return statearr_28459;
})();
var statearr_28460_28483 = state_28438__$1;
(statearr_28460_28483[(2)] = null);

(statearr_28460_28483[(1)] = (2));


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
});})(c__21999__auto___28469,out))
;
return ((function (switch__21937__auto__,c__21999__auto___28469,out){
return (function() {
var cljs$core$async$state_machine__21938__auto__ = null;
var cljs$core$async$state_machine__21938__auto____0 = (function (){
var statearr_28464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28464[(0)] = cljs$core$async$state_machine__21938__auto__);

(statearr_28464[(1)] = (1));

return statearr_28464;
});
var cljs$core$async$state_machine__21938__auto____1 = (function (state_28438){
while(true){
var ret_value__21939__auto__ = (function (){try{while(true){
var result__21940__auto__ = switch__21937__auto__.call(null,state_28438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21940__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21940__auto__;
}
break;
}
}catch (e28465){if((e28465 instanceof Object)){
var ex__21941__auto__ = e28465;
var statearr_28466_28484 = state_28438;
(statearr_28466_28484[(5)] = ex__21941__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21939__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28485 = state_28438;
state_28438 = G__28485;
continue;
} else {
return ret_value__21939__auto__;
}
break;
}
});
cljs$core$async$state_machine__21938__auto__ = function(state_28438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21938__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21938__auto____1.call(this,state_28438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21938__auto____0;
cljs$core$async$state_machine__21938__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21938__auto____1;
return cljs$core$async$state_machine__21938__auto__;
})()
;})(switch__21937__auto__,c__21999__auto___28469,out))
})();
var state__22001__auto__ = (function (){var statearr_28467 = f__22000__auto__.call(null);
(statearr_28467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21999__auto___28469);

return statearr_28467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22001__auto__);
});})(c__21999__auto___28469,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1431292029850