// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args34211 = [];
var len__25947__auto___34217 = arguments.length;
var i__25948__auto___34218 = (0);
while(true){
if((i__25948__auto___34218 < len__25947__auto___34217)){
args34211.push((arguments[i__25948__auto___34218]));

var G__34219 = (i__25948__auto___34218 + (1));
i__25948__auto___34218 = G__34219;
continue;
} else {
}
break;
}

var G__34213 = args34211.length;
switch (G__34213) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34211.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34214 = (function (f,blockable,meta34215){
this.f = f;
this.blockable = blockable;
this.meta34215 = meta34215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34216,meta34215__$1){
var self__ = this;
var _34216__$1 = this;
return (new cljs.core.async.t_cljs$core$async34214(self__.f,self__.blockable,meta34215__$1));
});

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34216){
var self__ = this;
var _34216__$1 = this;
return self__.meta34215;
});

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34215","meta34215",434328583,null)], null);
});

cljs.core.async.t_cljs$core$async34214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34214";

cljs.core.async.t_cljs$core$async34214.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async34214");
});

cljs.core.async.__GT_t_cljs$core$async34214 = (function cljs$core$async$__GT_t_cljs$core$async34214(f__$1,blockable__$1,meta34215){
return (new cljs.core.async.t_cljs$core$async34214(f__$1,blockable__$1,meta34215));
});

}

return (new cljs.core.async.t_cljs$core$async34214(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args34223 = [];
var len__25947__auto___34226 = arguments.length;
var i__25948__auto___34227 = (0);
while(true){
if((i__25948__auto___34227 < len__25947__auto___34226)){
args34223.push((arguments[i__25948__auto___34227]));

var G__34228 = (i__25948__auto___34227 + (1));
i__25948__auto___34227 = G__34228;
continue;
} else {
}
break;
}

var G__34225 = args34223.length;
switch (G__34225) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34223.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args34230 = [];
var len__25947__auto___34233 = arguments.length;
var i__25948__auto___34234 = (0);
while(true){
if((i__25948__auto___34234 < len__25947__auto___34233)){
args34230.push((arguments[i__25948__auto___34234]));

var G__34235 = (i__25948__auto___34234 + (1));
i__25948__auto___34234 = G__34235;
continue;
} else {
}
break;
}

var G__34232 = args34230.length;
switch (G__34232) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34230.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args34237 = [];
var len__25947__auto___34240 = arguments.length;
var i__25948__auto___34241 = (0);
while(true){
if((i__25948__auto___34241 < len__25947__auto___34240)){
args34237.push((arguments[i__25948__auto___34241]));

var G__34242 = (i__25948__auto___34241 + (1));
i__25948__auto___34241 = G__34242;
continue;
} else {
}
break;
}

var G__34239 = args34237.length;
switch (G__34239) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34237.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34244 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34244);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34244,ret){
return (function (){
return fn1.call(null,val_34244);
});})(val_34244,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args34245 = [];
var len__25947__auto___34248 = arguments.length;
var i__25948__auto___34249 = (0);
while(true){
if((i__25948__auto___34249 < len__25947__auto___34248)){
args34245.push((arguments[i__25948__auto___34249]));

var G__34250 = (i__25948__auto___34249 + (1));
i__25948__auto___34249 = G__34250;
continue;
} else {
}
break;
}

var G__34247 = args34245.length;
switch (G__34247) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34245.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__25787__auto___34252 = n;
var x_34253 = (0);
while(true){
if((x_34253 < n__25787__auto___34252)){
(a[x_34253] = (0));

var G__34254 = (x_34253 + (1));
x_34253 = G__34254;
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

var G__34255 = (i + (1));
i = G__34255;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34259 = (function (alt_flag,flag,meta34260){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34260 = meta34260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34261,meta34260__$1){
var self__ = this;
var _34261__$1 = this;
return (new cljs.core.async.t_cljs$core$async34259(self__.alt_flag,self__.flag,meta34260__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34261){
var self__ = this;
var _34261__$1 = this;
return self__.meta34260;
});})(flag))
;

cljs.core.async.t_cljs$core$async34259.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34259.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34260","meta34260",-27601647,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34259";

cljs.core.async.t_cljs$core$async34259.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async34259");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34259 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34259(alt_flag__$1,flag__$1,meta34260){
return (new cljs.core.async.t_cljs$core$async34259(alt_flag__$1,flag__$1,meta34260));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34259(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34265 = (function (alt_handler,flag,cb,meta34266){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34266 = meta34266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34267,meta34266__$1){
var self__ = this;
var _34267__$1 = this;
return (new cljs.core.async.t_cljs$core$async34265(self__.alt_handler,self__.flag,self__.cb,meta34266__$1));
});

cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34267){
var self__ = this;
var _34267__$1 = this;
return self__.meta34266;
});

cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34266","meta34266",843599840,null)], null);
});

cljs.core.async.t_cljs$core$async34265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34265";

cljs.core.async.t_cljs$core$async34265.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async34265");
});

cljs.core.async.__GT_t_cljs$core$async34265 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34265(alt_handler__$1,flag__$1,cb__$1,meta34266){
return (new cljs.core.async.t_cljs$core$async34265(alt_handler__$1,flag__$1,cb__$1,meta34266));
});

}

return (new cljs.core.async.t_cljs$core$async34265(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34268_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34268_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34269_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34269_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24872__auto__ = wport;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34270 = (i + (1));
i = G__34270;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24872__auto__ = ret;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24860__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___34276 = arguments.length;
var i__25948__auto___34277 = (0);
while(true){
if((i__25948__auto___34277 < len__25947__auto___34276)){
args__25954__auto__.push((arguments[i__25948__auto___34277]));

var G__34278 = (i__25948__auto___34277 + (1));
i__25948__auto___34277 = G__34278;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34273){
var map__34274 = p__34273;
var map__34274__$1 = ((((!((map__34274 == null)))?((((map__34274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34274):map__34274);
var opts = map__34274__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34271){
var G__34272 = cljs.core.first.call(null,seq34271);
var seq34271__$1 = cljs.core.next.call(null,seq34271);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34272,seq34271__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args34279 = [];
var len__25947__auto___34329 = arguments.length;
var i__25948__auto___34330 = (0);
while(true){
if((i__25948__auto___34330 < len__25947__auto___34329)){
args34279.push((arguments[i__25948__auto___34330]));

var G__34331 = (i__25948__auto___34330 + (1));
i__25948__auto___34330 = G__34331;
continue;
} else {
}
break;
}

var G__34281 = args34279.length;
switch (G__34281) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34279.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27175__auto___34333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___34333){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___34333){
return (function (state_34305){
var state_val_34306 = (state_34305[(1)]);
if((state_val_34306 === (7))){
var inst_34301 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34307_34334 = state_34305__$1;
(statearr_34307_34334[(2)] = inst_34301);

(statearr_34307_34334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (1))){
var state_34305__$1 = state_34305;
var statearr_34308_34335 = state_34305__$1;
(statearr_34308_34335[(2)] = null);

(statearr_34308_34335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (4))){
var inst_34284 = (state_34305[(7)]);
var inst_34284__$1 = (state_34305[(2)]);
var inst_34285 = (inst_34284__$1 == null);
var state_34305__$1 = (function (){var statearr_34309 = state_34305;
(statearr_34309[(7)] = inst_34284__$1);

return statearr_34309;
})();
if(cljs.core.truth_(inst_34285)){
var statearr_34310_34336 = state_34305__$1;
(statearr_34310_34336[(1)] = (5));

} else {
var statearr_34311_34337 = state_34305__$1;
(statearr_34311_34337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (13))){
var state_34305__$1 = state_34305;
var statearr_34312_34338 = state_34305__$1;
(statearr_34312_34338[(2)] = null);

(statearr_34312_34338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (6))){
var inst_34284 = (state_34305[(7)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34305__$1,(11),to,inst_34284);
} else {
if((state_val_34306 === (3))){
var inst_34303 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34305__$1,inst_34303);
} else {
if((state_val_34306 === (12))){
var state_34305__$1 = state_34305;
var statearr_34313_34339 = state_34305__$1;
(statearr_34313_34339[(2)] = null);

(statearr_34313_34339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (2))){
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34305__$1,(4),from);
} else {
if((state_val_34306 === (11))){
var inst_34294 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
if(cljs.core.truth_(inst_34294)){
var statearr_34314_34340 = state_34305__$1;
(statearr_34314_34340[(1)] = (12));

} else {
var statearr_34315_34341 = state_34305__$1;
(statearr_34315_34341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (9))){
var state_34305__$1 = state_34305;
var statearr_34316_34342 = state_34305__$1;
(statearr_34316_34342[(2)] = null);

(statearr_34316_34342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (5))){
var state_34305__$1 = state_34305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34317_34343 = state_34305__$1;
(statearr_34317_34343[(1)] = (8));

} else {
var statearr_34318_34344 = state_34305__$1;
(statearr_34318_34344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (14))){
var inst_34299 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34319_34345 = state_34305__$1;
(statearr_34319_34345[(2)] = inst_34299);

(statearr_34319_34345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (10))){
var inst_34291 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34320_34346 = state_34305__$1;
(statearr_34320_34346[(2)] = inst_34291);

(statearr_34320_34346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (8))){
var inst_34288 = cljs.core.async.close_BANG_.call(null,to);
var state_34305__$1 = state_34305;
var statearr_34321_34347 = state_34305__$1;
(statearr_34321_34347[(2)] = inst_34288);

(statearr_34321_34347[(1)] = (10));


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
});})(c__27175__auto___34333))
;
return ((function (switch__27154__auto__,c__27175__auto___34333){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_34325 = [null,null,null,null,null,null,null,null];
(statearr_34325[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_34325[(1)] = (1));

return statearr_34325;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_34305){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_34305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e34326){if((e34326 instanceof Object)){
var ex__27158__auto__ = e34326;
var statearr_34327_34348 = state_34305;
(statearr_34327_34348[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34349 = state_34305;
state_34305 = G__34349;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_34305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_34305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___34333))
})();
var state__27177__auto__ = (function (){var statearr_34328 = f__27176__auto__.call(null);
(statearr_34328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___34333);

return statearr_34328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___34333))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34537){
var vec__34538 = p__34537;
var v = cljs.core.nth.call(null,vec__34538,(0),null);
var p = cljs.core.nth.call(null,vec__34538,(1),null);
var job = vec__34538;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27175__auto___34724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___34724,res,vec__34538,v,p,job,jobs,results){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___34724,res,vec__34538,v,p,job,jobs,results){
return (function (state_34545){
var state_val_34546 = (state_34545[(1)]);
if((state_val_34546 === (1))){
var state_34545__$1 = state_34545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34545__$1,(2),res,v);
} else {
if((state_val_34546 === (2))){
var inst_34542 = (state_34545[(2)]);
var inst_34543 = cljs.core.async.close_BANG_.call(null,res);
var state_34545__$1 = (function (){var statearr_34547 = state_34545;
(statearr_34547[(7)] = inst_34542);

return statearr_34547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34545__$1,inst_34543);
} else {
return null;
}
}
});})(c__27175__auto___34724,res,vec__34538,v,p,job,jobs,results))
;
return ((function (switch__27154__auto__,c__27175__auto___34724,res,vec__34538,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0 = (function (){
var statearr_34551 = [null,null,null,null,null,null,null,null];
(statearr_34551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__);

(statearr_34551[(1)] = (1));

return statearr_34551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1 = (function (state_34545){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_34545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e34552){if((e34552 instanceof Object)){
var ex__27158__auto__ = e34552;
var statearr_34553_34725 = state_34545;
(statearr_34553_34725[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34726 = state_34545;
state_34545 = G__34726;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__ = function(state_34545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1.call(this,state_34545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___34724,res,vec__34538,v,p,job,jobs,results))
})();
var state__27177__auto__ = (function (){var statearr_34554 = f__27176__auto__.call(null);
(statearr_34554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___34724);

return statearr_34554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___34724,res,vec__34538,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34555){
var vec__34556 = p__34555;
var v = cljs.core.nth.call(null,vec__34556,(0),null);
var p = cljs.core.nth.call(null,vec__34556,(1),null);
var job = vec__34556;
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
var n__25787__auto___34727 = n;
var __34728 = (0);
while(true){
if((__34728 < n__25787__auto___34727)){
var G__34559_34729 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34559_34729) {
case "compute":
var c__27175__auto___34731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34728,c__27175__auto___34731,G__34559_34729,n__25787__auto___34727,jobs,results,process,async){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (__34728,c__27175__auto___34731,G__34559_34729,n__25787__auto___34727,jobs,results,process,async){
return (function (state_34572){
var state_val_34573 = (state_34572[(1)]);
if((state_val_34573 === (1))){
var state_34572__$1 = state_34572;
var statearr_34574_34732 = state_34572__$1;
(statearr_34574_34732[(2)] = null);

(statearr_34574_34732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (2))){
var state_34572__$1 = state_34572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34572__$1,(4),jobs);
} else {
if((state_val_34573 === (3))){
var inst_34570 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34572__$1,inst_34570);
} else {
if((state_val_34573 === (4))){
var inst_34562 = (state_34572[(2)]);
var inst_34563 = process.call(null,inst_34562);
var state_34572__$1 = state_34572;
if(cljs.core.truth_(inst_34563)){
var statearr_34575_34733 = state_34572__$1;
(statearr_34575_34733[(1)] = (5));

} else {
var statearr_34576_34734 = state_34572__$1;
(statearr_34576_34734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (5))){
var state_34572__$1 = state_34572;
var statearr_34577_34735 = state_34572__$1;
(statearr_34577_34735[(2)] = null);

(statearr_34577_34735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (6))){
var state_34572__$1 = state_34572;
var statearr_34578_34736 = state_34572__$1;
(statearr_34578_34736[(2)] = null);

(statearr_34578_34736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34573 === (7))){
var inst_34568 = (state_34572[(2)]);
var state_34572__$1 = state_34572;
var statearr_34579_34737 = state_34572__$1;
(statearr_34579_34737[(2)] = inst_34568);

(statearr_34579_34737[(1)] = (3));


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
});})(__34728,c__27175__auto___34731,G__34559_34729,n__25787__auto___34727,jobs,results,process,async))
;
return ((function (__34728,switch__27154__auto__,c__27175__auto___34731,G__34559_34729,n__25787__auto___34727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0 = (function (){
var statearr_34583 = [null,null,null,null,null,null,null];
(statearr_34583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__);

(statearr_34583[(1)] = (1));

return statearr_34583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1 = (function (state_34572){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_34572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e34584){if((e34584 instanceof Object)){
var ex__27158__auto__ = e34584;
var statearr_34585_34738 = state_34572;
(statearr_34585_34738[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34739 = state_34572;
state_34572 = G__34739;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__ = function(state_34572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1.call(this,state_34572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__;
})()
;})(__34728,switch__27154__auto__,c__27175__auto___34731,G__34559_34729,n__25787__auto___34727,jobs,results,process,async))
})();
var state__27177__auto__ = (function (){var statearr_34586 = f__27176__auto__.call(null);
(statearr_34586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___34731);

return statearr_34586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(__34728,c__27175__auto___34731,G__34559_34729,n__25787__auto___34727,jobs,results,process,async))
);


break;
case "async":
var c__27175__auto___34740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34728,c__27175__auto___34740,G__34559_34729,n__25787__auto___34727,jobs,results,process,async){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (__34728,c__27175__auto___34740,G__34559_34729,n__25787__auto___34727,jobs,results,process,async){
return (function (state_34599){
var state_val_34600 = (state_34599[(1)]);
if((state_val_34600 === (1))){
var state_34599__$1 = state_34599;
var statearr_34601_34741 = state_34599__$1;
(statearr_34601_34741[(2)] = null);

(statearr_34601_34741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (2))){
var state_34599__$1 = state_34599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34599__$1,(4),jobs);
} else {
if((state_val_34600 === (3))){
var inst_34597 = (state_34599[(2)]);
var state_34599__$1 = state_34599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34599__$1,inst_34597);
} else {
if((state_val_34600 === (4))){
var inst_34589 = (state_34599[(2)]);
var inst_34590 = async.call(null,inst_34589);
var state_34599__$1 = state_34599;
if(cljs.core.truth_(inst_34590)){
var statearr_34602_34742 = state_34599__$1;
(statearr_34602_34742[(1)] = (5));

} else {
var statearr_34603_34743 = state_34599__$1;
(statearr_34603_34743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (5))){
var state_34599__$1 = state_34599;
var statearr_34604_34744 = state_34599__$1;
(statearr_34604_34744[(2)] = null);

(statearr_34604_34744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (6))){
var state_34599__$1 = state_34599;
var statearr_34605_34745 = state_34599__$1;
(statearr_34605_34745[(2)] = null);

(statearr_34605_34745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34600 === (7))){
var inst_34595 = (state_34599[(2)]);
var state_34599__$1 = state_34599;
var statearr_34606_34746 = state_34599__$1;
(statearr_34606_34746[(2)] = inst_34595);

(statearr_34606_34746[(1)] = (3));


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
});})(__34728,c__27175__auto___34740,G__34559_34729,n__25787__auto___34727,jobs,results,process,async))
;
return ((function (__34728,switch__27154__auto__,c__27175__auto___34740,G__34559_34729,n__25787__auto___34727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0 = (function (){
var statearr_34610 = [null,null,null,null,null,null,null];
(statearr_34610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__);

(statearr_34610[(1)] = (1));

return statearr_34610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1 = (function (state_34599){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_34599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e34611){if((e34611 instanceof Object)){
var ex__27158__auto__ = e34611;
var statearr_34612_34747 = state_34599;
(statearr_34612_34747[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34748 = state_34599;
state_34599 = G__34748;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__ = function(state_34599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1.call(this,state_34599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__;
})()
;})(__34728,switch__27154__auto__,c__27175__auto___34740,G__34559_34729,n__25787__auto___34727,jobs,results,process,async))
})();
var state__27177__auto__ = (function (){var statearr_34613 = f__27176__auto__.call(null);
(statearr_34613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___34740);

return statearr_34613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(__34728,c__27175__auto___34740,G__34559_34729,n__25787__auto___34727,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__34749 = (__34728 + (1));
__34728 = G__34749;
continue;
} else {
}
break;
}

var c__27175__auto___34750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___34750,jobs,results,process,async){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___34750,jobs,results,process,async){
return (function (state_34635){
var state_val_34636 = (state_34635[(1)]);
if((state_val_34636 === (1))){
var state_34635__$1 = state_34635;
var statearr_34637_34751 = state_34635__$1;
(statearr_34637_34751[(2)] = null);

(statearr_34637_34751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (2))){
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(4),from);
} else {
if((state_val_34636 === (3))){
var inst_34633 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34635__$1,inst_34633);
} else {
if((state_val_34636 === (4))){
var inst_34616 = (state_34635[(7)]);
var inst_34616__$1 = (state_34635[(2)]);
var inst_34617 = (inst_34616__$1 == null);
var state_34635__$1 = (function (){var statearr_34638 = state_34635;
(statearr_34638[(7)] = inst_34616__$1);

return statearr_34638;
})();
if(cljs.core.truth_(inst_34617)){
var statearr_34639_34752 = state_34635__$1;
(statearr_34639_34752[(1)] = (5));

} else {
var statearr_34640_34753 = state_34635__$1;
(statearr_34640_34753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (5))){
var inst_34619 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34635__$1 = state_34635;
var statearr_34641_34754 = state_34635__$1;
(statearr_34641_34754[(2)] = inst_34619);

(statearr_34641_34754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (6))){
var inst_34621 = (state_34635[(8)]);
var inst_34616 = (state_34635[(7)]);
var inst_34621__$1 = cljs.core.async.chan.call(null,(1));
var inst_34622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34623 = [inst_34616,inst_34621__$1];
var inst_34624 = (new cljs.core.PersistentVector(null,2,(5),inst_34622,inst_34623,null));
var state_34635__$1 = (function (){var statearr_34642 = state_34635;
(statearr_34642[(8)] = inst_34621__$1);

return statearr_34642;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34635__$1,(8),jobs,inst_34624);
} else {
if((state_val_34636 === (7))){
var inst_34631 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34643_34755 = state_34635__$1;
(statearr_34643_34755[(2)] = inst_34631);

(statearr_34643_34755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (8))){
var inst_34621 = (state_34635[(8)]);
var inst_34626 = (state_34635[(2)]);
var state_34635__$1 = (function (){var statearr_34644 = state_34635;
(statearr_34644[(9)] = inst_34626);

return statearr_34644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34635__$1,(9),results,inst_34621);
} else {
if((state_val_34636 === (9))){
var inst_34628 = (state_34635[(2)]);
var state_34635__$1 = (function (){var statearr_34645 = state_34635;
(statearr_34645[(10)] = inst_34628);

return statearr_34645;
})();
var statearr_34646_34756 = state_34635__$1;
(statearr_34646_34756[(2)] = null);

(statearr_34646_34756[(1)] = (2));


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
});})(c__27175__auto___34750,jobs,results,process,async))
;
return ((function (switch__27154__auto__,c__27175__auto___34750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0 = (function (){
var statearr_34650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__);

(statearr_34650[(1)] = (1));

return statearr_34650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1 = (function (state_34635){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_34635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e34651){if((e34651 instanceof Object)){
var ex__27158__auto__ = e34651;
var statearr_34652_34757 = state_34635;
(statearr_34652_34757[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34758 = state_34635;
state_34635 = G__34758;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__ = function(state_34635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1.call(this,state_34635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___34750,jobs,results,process,async))
})();
var state__27177__auto__ = (function (){var statearr_34653 = f__27176__auto__.call(null);
(statearr_34653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___34750);

return statearr_34653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___34750,jobs,results,process,async))
);


var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__,jobs,results,process,async){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__,jobs,results,process,async){
return (function (state_34691){
var state_val_34692 = (state_34691[(1)]);
if((state_val_34692 === (7))){
var inst_34687 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34693_34759 = state_34691__$1;
(statearr_34693_34759[(2)] = inst_34687);

(statearr_34693_34759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (20))){
var state_34691__$1 = state_34691;
var statearr_34694_34760 = state_34691__$1;
(statearr_34694_34760[(2)] = null);

(statearr_34694_34760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (1))){
var state_34691__$1 = state_34691;
var statearr_34695_34761 = state_34691__$1;
(statearr_34695_34761[(2)] = null);

(statearr_34695_34761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (4))){
var inst_34656 = (state_34691[(7)]);
var inst_34656__$1 = (state_34691[(2)]);
var inst_34657 = (inst_34656__$1 == null);
var state_34691__$1 = (function (){var statearr_34696 = state_34691;
(statearr_34696[(7)] = inst_34656__$1);

return statearr_34696;
})();
if(cljs.core.truth_(inst_34657)){
var statearr_34697_34762 = state_34691__$1;
(statearr_34697_34762[(1)] = (5));

} else {
var statearr_34698_34763 = state_34691__$1;
(statearr_34698_34763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (15))){
var inst_34669 = (state_34691[(8)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34691__$1,(18),to,inst_34669);
} else {
if((state_val_34692 === (21))){
var inst_34682 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34699_34764 = state_34691__$1;
(statearr_34699_34764[(2)] = inst_34682);

(statearr_34699_34764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (13))){
var inst_34684 = (state_34691[(2)]);
var state_34691__$1 = (function (){var statearr_34700 = state_34691;
(statearr_34700[(9)] = inst_34684);

return statearr_34700;
})();
var statearr_34701_34765 = state_34691__$1;
(statearr_34701_34765[(2)] = null);

(statearr_34701_34765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (6))){
var inst_34656 = (state_34691[(7)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34691__$1,(11),inst_34656);
} else {
if((state_val_34692 === (17))){
var inst_34677 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
if(cljs.core.truth_(inst_34677)){
var statearr_34702_34766 = state_34691__$1;
(statearr_34702_34766[(1)] = (19));

} else {
var statearr_34703_34767 = state_34691__$1;
(statearr_34703_34767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (3))){
var inst_34689 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34691__$1,inst_34689);
} else {
if((state_val_34692 === (12))){
var inst_34666 = (state_34691[(10)]);
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34691__$1,(14),inst_34666);
} else {
if((state_val_34692 === (2))){
var state_34691__$1 = state_34691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34691__$1,(4),results);
} else {
if((state_val_34692 === (19))){
var state_34691__$1 = state_34691;
var statearr_34704_34768 = state_34691__$1;
(statearr_34704_34768[(2)] = null);

(statearr_34704_34768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (11))){
var inst_34666 = (state_34691[(2)]);
var state_34691__$1 = (function (){var statearr_34705 = state_34691;
(statearr_34705[(10)] = inst_34666);

return statearr_34705;
})();
var statearr_34706_34769 = state_34691__$1;
(statearr_34706_34769[(2)] = null);

(statearr_34706_34769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (9))){
var state_34691__$1 = state_34691;
var statearr_34707_34770 = state_34691__$1;
(statearr_34707_34770[(2)] = null);

(statearr_34707_34770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (5))){
var state_34691__$1 = state_34691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34708_34771 = state_34691__$1;
(statearr_34708_34771[(1)] = (8));

} else {
var statearr_34709_34772 = state_34691__$1;
(statearr_34709_34772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (14))){
var inst_34671 = (state_34691[(11)]);
var inst_34669 = (state_34691[(8)]);
var inst_34669__$1 = (state_34691[(2)]);
var inst_34670 = (inst_34669__$1 == null);
var inst_34671__$1 = cljs.core.not.call(null,inst_34670);
var state_34691__$1 = (function (){var statearr_34710 = state_34691;
(statearr_34710[(11)] = inst_34671__$1);

(statearr_34710[(8)] = inst_34669__$1);

return statearr_34710;
})();
if(inst_34671__$1){
var statearr_34711_34773 = state_34691__$1;
(statearr_34711_34773[(1)] = (15));

} else {
var statearr_34712_34774 = state_34691__$1;
(statearr_34712_34774[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (16))){
var inst_34671 = (state_34691[(11)]);
var state_34691__$1 = state_34691;
var statearr_34713_34775 = state_34691__$1;
(statearr_34713_34775[(2)] = inst_34671);

(statearr_34713_34775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (10))){
var inst_34663 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34714_34776 = state_34691__$1;
(statearr_34714_34776[(2)] = inst_34663);

(statearr_34714_34776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (18))){
var inst_34674 = (state_34691[(2)]);
var state_34691__$1 = state_34691;
var statearr_34715_34777 = state_34691__$1;
(statearr_34715_34777[(2)] = inst_34674);

(statearr_34715_34777[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34692 === (8))){
var inst_34660 = cljs.core.async.close_BANG_.call(null,to);
var state_34691__$1 = state_34691;
var statearr_34716_34778 = state_34691__$1;
(statearr_34716_34778[(2)] = inst_34660);

(statearr_34716_34778[(1)] = (10));


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
});})(c__27175__auto__,jobs,results,process,async))
;
return ((function (switch__27154__auto__,c__27175__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0 = (function (){
var statearr_34720 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__);

(statearr_34720[(1)] = (1));

return statearr_34720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1 = (function (state_34691){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_34691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e34721){if((e34721 instanceof Object)){
var ex__27158__auto__ = e34721;
var statearr_34722_34779 = state_34691;
(statearr_34722_34779[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34780 = state_34691;
state_34691 = G__34780;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__ = function(state_34691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1.call(this,state_34691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27155__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__,jobs,results,process,async))
})();
var state__27177__auto__ = (function (){var statearr_34723 = f__27176__auto__.call(null);
(statearr_34723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_34723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__,jobs,results,process,async))
);

return c__27175__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args34781 = [];
var len__25947__auto___34784 = arguments.length;
var i__25948__auto___34785 = (0);
while(true){
if((i__25948__auto___34785 < len__25947__auto___34784)){
args34781.push((arguments[i__25948__auto___34785]));

var G__34786 = (i__25948__auto___34785 + (1));
i__25948__auto___34785 = G__34786;
continue;
} else {
}
break;
}

var G__34783 = args34781.length;
switch (G__34783) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34781.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args34788 = [];
var len__25947__auto___34791 = arguments.length;
var i__25948__auto___34792 = (0);
while(true){
if((i__25948__auto___34792 < len__25947__auto___34791)){
args34788.push((arguments[i__25948__auto___34792]));

var G__34793 = (i__25948__auto___34792 + (1));
i__25948__auto___34792 = G__34793;
continue;
} else {
}
break;
}

var G__34790 = args34788.length;
switch (G__34790) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34788.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args34795 = [];
var len__25947__auto___34848 = arguments.length;
var i__25948__auto___34849 = (0);
while(true){
if((i__25948__auto___34849 < len__25947__auto___34848)){
args34795.push((arguments[i__25948__auto___34849]));

var G__34850 = (i__25948__auto___34849 + (1));
i__25948__auto___34849 = G__34850;
continue;
} else {
}
break;
}

var G__34797 = args34795.length;
switch (G__34797) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34795.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27175__auto___34852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___34852,tc,fc){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___34852,tc,fc){
return (function (state_34823){
var state_val_34824 = (state_34823[(1)]);
if((state_val_34824 === (7))){
var inst_34819 = (state_34823[(2)]);
var state_34823__$1 = state_34823;
var statearr_34825_34853 = state_34823__$1;
(statearr_34825_34853[(2)] = inst_34819);

(statearr_34825_34853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (1))){
var state_34823__$1 = state_34823;
var statearr_34826_34854 = state_34823__$1;
(statearr_34826_34854[(2)] = null);

(statearr_34826_34854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (4))){
var inst_34800 = (state_34823[(7)]);
var inst_34800__$1 = (state_34823[(2)]);
var inst_34801 = (inst_34800__$1 == null);
var state_34823__$1 = (function (){var statearr_34827 = state_34823;
(statearr_34827[(7)] = inst_34800__$1);

return statearr_34827;
})();
if(cljs.core.truth_(inst_34801)){
var statearr_34828_34855 = state_34823__$1;
(statearr_34828_34855[(1)] = (5));

} else {
var statearr_34829_34856 = state_34823__$1;
(statearr_34829_34856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (13))){
var state_34823__$1 = state_34823;
var statearr_34830_34857 = state_34823__$1;
(statearr_34830_34857[(2)] = null);

(statearr_34830_34857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (6))){
var inst_34800 = (state_34823[(7)]);
var inst_34806 = p.call(null,inst_34800);
var state_34823__$1 = state_34823;
if(cljs.core.truth_(inst_34806)){
var statearr_34831_34858 = state_34823__$1;
(statearr_34831_34858[(1)] = (9));

} else {
var statearr_34832_34859 = state_34823__$1;
(statearr_34832_34859[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (3))){
var inst_34821 = (state_34823[(2)]);
var state_34823__$1 = state_34823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34823__$1,inst_34821);
} else {
if((state_val_34824 === (12))){
var state_34823__$1 = state_34823;
var statearr_34833_34860 = state_34823__$1;
(statearr_34833_34860[(2)] = null);

(statearr_34833_34860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (2))){
var state_34823__$1 = state_34823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34823__$1,(4),ch);
} else {
if((state_val_34824 === (11))){
var inst_34800 = (state_34823[(7)]);
var inst_34810 = (state_34823[(2)]);
var state_34823__$1 = state_34823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34823__$1,(8),inst_34810,inst_34800);
} else {
if((state_val_34824 === (9))){
var state_34823__$1 = state_34823;
var statearr_34834_34861 = state_34823__$1;
(statearr_34834_34861[(2)] = tc);

(statearr_34834_34861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (5))){
var inst_34803 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34804 = cljs.core.async.close_BANG_.call(null,fc);
var state_34823__$1 = (function (){var statearr_34835 = state_34823;
(statearr_34835[(8)] = inst_34803);

return statearr_34835;
})();
var statearr_34836_34862 = state_34823__$1;
(statearr_34836_34862[(2)] = inst_34804);

(statearr_34836_34862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (14))){
var inst_34817 = (state_34823[(2)]);
var state_34823__$1 = state_34823;
var statearr_34837_34863 = state_34823__$1;
(statearr_34837_34863[(2)] = inst_34817);

(statearr_34837_34863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (10))){
var state_34823__$1 = state_34823;
var statearr_34838_34864 = state_34823__$1;
(statearr_34838_34864[(2)] = fc);

(statearr_34838_34864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34824 === (8))){
var inst_34812 = (state_34823[(2)]);
var state_34823__$1 = state_34823;
if(cljs.core.truth_(inst_34812)){
var statearr_34839_34865 = state_34823__$1;
(statearr_34839_34865[(1)] = (12));

} else {
var statearr_34840_34866 = state_34823__$1;
(statearr_34840_34866[(1)] = (13));

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
});})(c__27175__auto___34852,tc,fc))
;
return ((function (switch__27154__auto__,c__27175__auto___34852,tc,fc){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_34844 = [null,null,null,null,null,null,null,null,null];
(statearr_34844[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_34844[(1)] = (1));

return statearr_34844;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_34823){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_34823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e34845){if((e34845 instanceof Object)){
var ex__27158__auto__ = e34845;
var statearr_34846_34867 = state_34823;
(statearr_34846_34867[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34868 = state_34823;
state_34823 = G__34868;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_34823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_34823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___34852,tc,fc))
})();
var state__27177__auto__ = (function (){var statearr_34847 = f__27176__auto__.call(null);
(statearr_34847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___34852);

return statearr_34847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___34852,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__){
return (function (state_34932){
var state_val_34933 = (state_34932[(1)]);
if((state_val_34933 === (7))){
var inst_34928 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_34934_34955 = state_34932__$1;
(statearr_34934_34955[(2)] = inst_34928);

(statearr_34934_34955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (1))){
var inst_34912 = init;
var state_34932__$1 = (function (){var statearr_34935 = state_34932;
(statearr_34935[(7)] = inst_34912);

return statearr_34935;
})();
var statearr_34936_34956 = state_34932__$1;
(statearr_34936_34956[(2)] = null);

(statearr_34936_34956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (4))){
var inst_34915 = (state_34932[(8)]);
var inst_34915__$1 = (state_34932[(2)]);
var inst_34916 = (inst_34915__$1 == null);
var state_34932__$1 = (function (){var statearr_34937 = state_34932;
(statearr_34937[(8)] = inst_34915__$1);

return statearr_34937;
})();
if(cljs.core.truth_(inst_34916)){
var statearr_34938_34957 = state_34932__$1;
(statearr_34938_34957[(1)] = (5));

} else {
var statearr_34939_34958 = state_34932__$1;
(statearr_34939_34958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (6))){
var inst_34919 = (state_34932[(9)]);
var inst_34915 = (state_34932[(8)]);
var inst_34912 = (state_34932[(7)]);
var inst_34919__$1 = f.call(null,inst_34912,inst_34915);
var inst_34920 = cljs.core.reduced_QMARK_.call(null,inst_34919__$1);
var state_34932__$1 = (function (){var statearr_34940 = state_34932;
(statearr_34940[(9)] = inst_34919__$1);

return statearr_34940;
})();
if(inst_34920){
var statearr_34941_34959 = state_34932__$1;
(statearr_34941_34959[(1)] = (8));

} else {
var statearr_34942_34960 = state_34932__$1;
(statearr_34942_34960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (3))){
var inst_34930 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34932__$1,inst_34930);
} else {
if((state_val_34933 === (2))){
var state_34932__$1 = state_34932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34932__$1,(4),ch);
} else {
if((state_val_34933 === (9))){
var inst_34919 = (state_34932[(9)]);
var inst_34912 = inst_34919;
var state_34932__$1 = (function (){var statearr_34943 = state_34932;
(statearr_34943[(7)] = inst_34912);

return statearr_34943;
})();
var statearr_34944_34961 = state_34932__$1;
(statearr_34944_34961[(2)] = null);

(statearr_34944_34961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (5))){
var inst_34912 = (state_34932[(7)]);
var state_34932__$1 = state_34932;
var statearr_34945_34962 = state_34932__$1;
(statearr_34945_34962[(2)] = inst_34912);

(statearr_34945_34962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (10))){
var inst_34926 = (state_34932[(2)]);
var state_34932__$1 = state_34932;
var statearr_34946_34963 = state_34932__$1;
(statearr_34946_34963[(2)] = inst_34926);

(statearr_34946_34963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34933 === (8))){
var inst_34919 = (state_34932[(9)]);
var inst_34922 = cljs.core.deref.call(null,inst_34919);
var state_34932__$1 = state_34932;
var statearr_34947_34964 = state_34932__$1;
(statearr_34947_34964[(2)] = inst_34922);

(statearr_34947_34964[(1)] = (10));


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
});})(c__27175__auto__))
;
return ((function (switch__27154__auto__,c__27175__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27155__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27155__auto____0 = (function (){
var statearr_34951 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34951[(0)] = cljs$core$async$reduce_$_state_machine__27155__auto__);

(statearr_34951[(1)] = (1));

return statearr_34951;
});
var cljs$core$async$reduce_$_state_machine__27155__auto____1 = (function (state_34932){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_34932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e34952){if((e34952 instanceof Object)){
var ex__27158__auto__ = e34952;
var statearr_34953_34965 = state_34932;
(statearr_34953_34965[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34966 = state_34932;
state_34932 = G__34966;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27155__auto__ = function(state_34932){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27155__auto____1.call(this,state_34932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27155__auto____0;
cljs$core$async$reduce_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27155__auto____1;
return cljs$core$async$reduce_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__))
})();
var state__27177__auto__ = (function (){var statearr_34954 = f__27176__auto__.call(null);
(statearr_34954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_34954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__))
);

return c__27175__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__,f__$1){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__,f__$1){
return (function (state_34986){
var state_val_34987 = (state_34986[(1)]);
if((state_val_34987 === (1))){
var inst_34981 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34986__$1 = state_34986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34986__$1,(2),inst_34981);
} else {
if((state_val_34987 === (2))){
var inst_34983 = (state_34986[(2)]);
var inst_34984 = f__$1.call(null,inst_34983);
var state_34986__$1 = state_34986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34986__$1,inst_34984);
} else {
return null;
}
}
});})(c__27175__auto__,f__$1))
;
return ((function (switch__27154__auto__,c__27175__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27155__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27155__auto____0 = (function (){
var statearr_34991 = [null,null,null,null,null,null,null];
(statearr_34991[(0)] = cljs$core$async$transduce_$_state_machine__27155__auto__);

(statearr_34991[(1)] = (1));

return statearr_34991;
});
var cljs$core$async$transduce_$_state_machine__27155__auto____1 = (function (state_34986){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_34986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e34992){if((e34992 instanceof Object)){
var ex__27158__auto__ = e34992;
var statearr_34993_34995 = state_34986;
(statearr_34993_34995[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34996 = state_34986;
state_34986 = G__34996;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27155__auto__ = function(state_34986){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27155__auto____1.call(this,state_34986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27155__auto____0;
cljs$core$async$transduce_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27155__auto____1;
return cljs$core$async$transduce_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__,f__$1))
})();
var state__27177__auto__ = (function (){var statearr_34994 = f__27176__auto__.call(null);
(statearr_34994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_34994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__,f__$1))
);

return c__27175__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args34997 = [];
var len__25947__auto___35049 = arguments.length;
var i__25948__auto___35050 = (0);
while(true){
if((i__25948__auto___35050 < len__25947__auto___35049)){
args34997.push((arguments[i__25948__auto___35050]));

var G__35051 = (i__25948__auto___35050 + (1));
i__25948__auto___35050 = G__35051;
continue;
} else {
}
break;
}

var G__34999 = args34997.length;
switch (G__34999) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34997.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__){
return (function (state_35024){
var state_val_35025 = (state_35024[(1)]);
if((state_val_35025 === (7))){
var inst_35006 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35026_35053 = state_35024__$1;
(statearr_35026_35053[(2)] = inst_35006);

(statearr_35026_35053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (1))){
var inst_35000 = cljs.core.seq.call(null,coll);
var inst_35001 = inst_35000;
var state_35024__$1 = (function (){var statearr_35027 = state_35024;
(statearr_35027[(7)] = inst_35001);

return statearr_35027;
})();
var statearr_35028_35054 = state_35024__$1;
(statearr_35028_35054[(2)] = null);

(statearr_35028_35054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (4))){
var inst_35001 = (state_35024[(7)]);
var inst_35004 = cljs.core.first.call(null,inst_35001);
var state_35024__$1 = state_35024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35024__$1,(7),ch,inst_35004);
} else {
if((state_val_35025 === (13))){
var inst_35018 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35029_35055 = state_35024__$1;
(statearr_35029_35055[(2)] = inst_35018);

(statearr_35029_35055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (6))){
var inst_35009 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
if(cljs.core.truth_(inst_35009)){
var statearr_35030_35056 = state_35024__$1;
(statearr_35030_35056[(1)] = (8));

} else {
var statearr_35031_35057 = state_35024__$1;
(statearr_35031_35057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (3))){
var inst_35022 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35024__$1,inst_35022);
} else {
if((state_val_35025 === (12))){
var state_35024__$1 = state_35024;
var statearr_35032_35058 = state_35024__$1;
(statearr_35032_35058[(2)] = null);

(statearr_35032_35058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (2))){
var inst_35001 = (state_35024[(7)]);
var state_35024__$1 = state_35024;
if(cljs.core.truth_(inst_35001)){
var statearr_35033_35059 = state_35024__$1;
(statearr_35033_35059[(1)] = (4));

} else {
var statearr_35034_35060 = state_35024__$1;
(statearr_35034_35060[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (11))){
var inst_35015 = cljs.core.async.close_BANG_.call(null,ch);
var state_35024__$1 = state_35024;
var statearr_35035_35061 = state_35024__$1;
(statearr_35035_35061[(2)] = inst_35015);

(statearr_35035_35061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (9))){
var state_35024__$1 = state_35024;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35036_35062 = state_35024__$1;
(statearr_35036_35062[(1)] = (11));

} else {
var statearr_35037_35063 = state_35024__$1;
(statearr_35037_35063[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (5))){
var inst_35001 = (state_35024[(7)]);
var state_35024__$1 = state_35024;
var statearr_35038_35064 = state_35024__$1;
(statearr_35038_35064[(2)] = inst_35001);

(statearr_35038_35064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (10))){
var inst_35020 = (state_35024[(2)]);
var state_35024__$1 = state_35024;
var statearr_35039_35065 = state_35024__$1;
(statearr_35039_35065[(2)] = inst_35020);

(statearr_35039_35065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35025 === (8))){
var inst_35001 = (state_35024[(7)]);
var inst_35011 = cljs.core.next.call(null,inst_35001);
var inst_35001__$1 = inst_35011;
var state_35024__$1 = (function (){var statearr_35040 = state_35024;
(statearr_35040[(7)] = inst_35001__$1);

return statearr_35040;
})();
var statearr_35041_35066 = state_35024__$1;
(statearr_35041_35066[(2)] = null);

(statearr_35041_35066[(1)] = (2));


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
});})(c__27175__auto__))
;
return ((function (switch__27154__auto__,c__27175__auto__){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_35045 = [null,null,null,null,null,null,null,null];
(statearr_35045[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_35045[(1)] = (1));

return statearr_35045;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_35024){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_35024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e35046){if((e35046 instanceof Object)){
var ex__27158__auto__ = e35046;
var statearr_35047_35067 = state_35024;
(statearr_35047_35067[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35068 = state_35024;
state_35024 = G__35068;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_35024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_35024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__))
})();
var state__27177__auto__ = (function (){var statearr_35048 = f__27176__auto__.call(null);
(statearr_35048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_35048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__))
);

return c__27175__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25535__auto__ = (((_ == null))?null:_);
var m__25536__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,_);
} else {
var m__25536__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25536__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m);
} else {
var m__25536__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35294 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35294 = (function (mult,ch,cs,meta35295){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35295 = meta35295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35296,meta35295__$1){
var self__ = this;
var _35296__$1 = this;
return (new cljs.core.async.t_cljs$core$async35294(self__.mult,self__.ch,self__.cs,meta35295__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35296){
var self__ = this;
var _35296__$1 = this;
return self__.meta35295;
});})(cs))
;

cljs.core.async.t_cljs$core$async35294.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35294.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35294.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async35294.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35294.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35294.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35294.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35295","meta35295",-1865357957,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35294.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35294";

cljs.core.async.t_cljs$core$async35294.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async35294");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35294 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35294(mult__$1,ch__$1,cs__$1,meta35295){
return (new cljs.core.async.t_cljs$core$async35294(mult__$1,ch__$1,cs__$1,meta35295));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35294(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27175__auto___35519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___35519,cs,m,dchan,dctr,done){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___35519,cs,m,dchan,dctr,done){
return (function (state_35431){
var state_val_35432 = (state_35431[(1)]);
if((state_val_35432 === (7))){
var inst_35427 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35433_35520 = state_35431__$1;
(statearr_35433_35520[(2)] = inst_35427);

(statearr_35433_35520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (20))){
var inst_35330 = (state_35431[(7)]);
var inst_35342 = cljs.core.first.call(null,inst_35330);
var inst_35343 = cljs.core.nth.call(null,inst_35342,(0),null);
var inst_35344 = cljs.core.nth.call(null,inst_35342,(1),null);
var state_35431__$1 = (function (){var statearr_35434 = state_35431;
(statearr_35434[(8)] = inst_35343);

return statearr_35434;
})();
if(cljs.core.truth_(inst_35344)){
var statearr_35435_35521 = state_35431__$1;
(statearr_35435_35521[(1)] = (22));

} else {
var statearr_35436_35522 = state_35431__$1;
(statearr_35436_35522[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (27))){
var inst_35379 = (state_35431[(9)]);
var inst_35374 = (state_35431[(10)]);
var inst_35299 = (state_35431[(11)]);
var inst_35372 = (state_35431[(12)]);
var inst_35379__$1 = cljs.core._nth.call(null,inst_35372,inst_35374);
var inst_35380 = cljs.core.async.put_BANG_.call(null,inst_35379__$1,inst_35299,done);
var state_35431__$1 = (function (){var statearr_35437 = state_35431;
(statearr_35437[(9)] = inst_35379__$1);

return statearr_35437;
})();
if(cljs.core.truth_(inst_35380)){
var statearr_35438_35523 = state_35431__$1;
(statearr_35438_35523[(1)] = (30));

} else {
var statearr_35439_35524 = state_35431__$1;
(statearr_35439_35524[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (1))){
var state_35431__$1 = state_35431;
var statearr_35440_35525 = state_35431__$1;
(statearr_35440_35525[(2)] = null);

(statearr_35440_35525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (24))){
var inst_35330 = (state_35431[(7)]);
var inst_35349 = (state_35431[(2)]);
var inst_35350 = cljs.core.next.call(null,inst_35330);
var inst_35308 = inst_35350;
var inst_35309 = null;
var inst_35310 = (0);
var inst_35311 = (0);
var state_35431__$1 = (function (){var statearr_35441 = state_35431;
(statearr_35441[(13)] = inst_35311);

(statearr_35441[(14)] = inst_35349);

(statearr_35441[(15)] = inst_35308);

(statearr_35441[(16)] = inst_35309);

(statearr_35441[(17)] = inst_35310);

return statearr_35441;
})();
var statearr_35442_35526 = state_35431__$1;
(statearr_35442_35526[(2)] = null);

(statearr_35442_35526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (39))){
var state_35431__$1 = state_35431;
var statearr_35446_35527 = state_35431__$1;
(statearr_35446_35527[(2)] = null);

(statearr_35446_35527[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (4))){
var inst_35299 = (state_35431[(11)]);
var inst_35299__$1 = (state_35431[(2)]);
var inst_35300 = (inst_35299__$1 == null);
var state_35431__$1 = (function (){var statearr_35447 = state_35431;
(statearr_35447[(11)] = inst_35299__$1);

return statearr_35447;
})();
if(cljs.core.truth_(inst_35300)){
var statearr_35448_35528 = state_35431__$1;
(statearr_35448_35528[(1)] = (5));

} else {
var statearr_35449_35529 = state_35431__$1;
(statearr_35449_35529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (15))){
var inst_35311 = (state_35431[(13)]);
var inst_35308 = (state_35431[(15)]);
var inst_35309 = (state_35431[(16)]);
var inst_35310 = (state_35431[(17)]);
var inst_35326 = (state_35431[(2)]);
var inst_35327 = (inst_35311 + (1));
var tmp35443 = inst_35308;
var tmp35444 = inst_35309;
var tmp35445 = inst_35310;
var inst_35308__$1 = tmp35443;
var inst_35309__$1 = tmp35444;
var inst_35310__$1 = tmp35445;
var inst_35311__$1 = inst_35327;
var state_35431__$1 = (function (){var statearr_35450 = state_35431;
(statearr_35450[(13)] = inst_35311__$1);

(statearr_35450[(15)] = inst_35308__$1);

(statearr_35450[(18)] = inst_35326);

(statearr_35450[(16)] = inst_35309__$1);

(statearr_35450[(17)] = inst_35310__$1);

return statearr_35450;
})();
var statearr_35451_35530 = state_35431__$1;
(statearr_35451_35530[(2)] = null);

(statearr_35451_35530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (21))){
var inst_35353 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35455_35531 = state_35431__$1;
(statearr_35455_35531[(2)] = inst_35353);

(statearr_35455_35531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (31))){
var inst_35379 = (state_35431[(9)]);
var inst_35383 = done.call(null,null);
var inst_35384 = cljs.core.async.untap_STAR_.call(null,m,inst_35379);
var state_35431__$1 = (function (){var statearr_35456 = state_35431;
(statearr_35456[(19)] = inst_35383);

return statearr_35456;
})();
var statearr_35457_35532 = state_35431__$1;
(statearr_35457_35532[(2)] = inst_35384);

(statearr_35457_35532[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (32))){
var inst_35371 = (state_35431[(20)]);
var inst_35374 = (state_35431[(10)]);
var inst_35373 = (state_35431[(21)]);
var inst_35372 = (state_35431[(12)]);
var inst_35386 = (state_35431[(2)]);
var inst_35387 = (inst_35374 + (1));
var tmp35452 = inst_35371;
var tmp35453 = inst_35373;
var tmp35454 = inst_35372;
var inst_35371__$1 = tmp35452;
var inst_35372__$1 = tmp35454;
var inst_35373__$1 = tmp35453;
var inst_35374__$1 = inst_35387;
var state_35431__$1 = (function (){var statearr_35458 = state_35431;
(statearr_35458[(20)] = inst_35371__$1);

(statearr_35458[(10)] = inst_35374__$1);

(statearr_35458[(21)] = inst_35373__$1);

(statearr_35458[(12)] = inst_35372__$1);

(statearr_35458[(22)] = inst_35386);

return statearr_35458;
})();
var statearr_35459_35533 = state_35431__$1;
(statearr_35459_35533[(2)] = null);

(statearr_35459_35533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (40))){
var inst_35399 = (state_35431[(23)]);
var inst_35403 = done.call(null,null);
var inst_35404 = cljs.core.async.untap_STAR_.call(null,m,inst_35399);
var state_35431__$1 = (function (){var statearr_35460 = state_35431;
(statearr_35460[(24)] = inst_35403);

return statearr_35460;
})();
var statearr_35461_35534 = state_35431__$1;
(statearr_35461_35534[(2)] = inst_35404);

(statearr_35461_35534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (33))){
var inst_35390 = (state_35431[(25)]);
var inst_35392 = cljs.core.chunked_seq_QMARK_.call(null,inst_35390);
var state_35431__$1 = state_35431;
if(inst_35392){
var statearr_35462_35535 = state_35431__$1;
(statearr_35462_35535[(1)] = (36));

} else {
var statearr_35463_35536 = state_35431__$1;
(statearr_35463_35536[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (13))){
var inst_35320 = (state_35431[(26)]);
var inst_35323 = cljs.core.async.close_BANG_.call(null,inst_35320);
var state_35431__$1 = state_35431;
var statearr_35464_35537 = state_35431__$1;
(statearr_35464_35537[(2)] = inst_35323);

(statearr_35464_35537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (22))){
var inst_35343 = (state_35431[(8)]);
var inst_35346 = cljs.core.async.close_BANG_.call(null,inst_35343);
var state_35431__$1 = state_35431;
var statearr_35465_35538 = state_35431__$1;
(statearr_35465_35538[(2)] = inst_35346);

(statearr_35465_35538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (36))){
var inst_35390 = (state_35431[(25)]);
var inst_35394 = cljs.core.chunk_first.call(null,inst_35390);
var inst_35395 = cljs.core.chunk_rest.call(null,inst_35390);
var inst_35396 = cljs.core.count.call(null,inst_35394);
var inst_35371 = inst_35395;
var inst_35372 = inst_35394;
var inst_35373 = inst_35396;
var inst_35374 = (0);
var state_35431__$1 = (function (){var statearr_35466 = state_35431;
(statearr_35466[(20)] = inst_35371);

(statearr_35466[(10)] = inst_35374);

(statearr_35466[(21)] = inst_35373);

(statearr_35466[(12)] = inst_35372);

return statearr_35466;
})();
var statearr_35467_35539 = state_35431__$1;
(statearr_35467_35539[(2)] = null);

(statearr_35467_35539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (41))){
var inst_35390 = (state_35431[(25)]);
var inst_35406 = (state_35431[(2)]);
var inst_35407 = cljs.core.next.call(null,inst_35390);
var inst_35371 = inst_35407;
var inst_35372 = null;
var inst_35373 = (0);
var inst_35374 = (0);
var state_35431__$1 = (function (){var statearr_35468 = state_35431;
(statearr_35468[(20)] = inst_35371);

(statearr_35468[(10)] = inst_35374);

(statearr_35468[(21)] = inst_35373);

(statearr_35468[(12)] = inst_35372);

(statearr_35468[(27)] = inst_35406);

return statearr_35468;
})();
var statearr_35469_35540 = state_35431__$1;
(statearr_35469_35540[(2)] = null);

(statearr_35469_35540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (43))){
var state_35431__$1 = state_35431;
var statearr_35470_35541 = state_35431__$1;
(statearr_35470_35541[(2)] = null);

(statearr_35470_35541[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (29))){
var inst_35415 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35471_35542 = state_35431__$1;
(statearr_35471_35542[(2)] = inst_35415);

(statearr_35471_35542[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (44))){
var inst_35424 = (state_35431[(2)]);
var state_35431__$1 = (function (){var statearr_35472 = state_35431;
(statearr_35472[(28)] = inst_35424);

return statearr_35472;
})();
var statearr_35473_35543 = state_35431__$1;
(statearr_35473_35543[(2)] = null);

(statearr_35473_35543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (6))){
var inst_35363 = (state_35431[(29)]);
var inst_35362 = cljs.core.deref.call(null,cs);
var inst_35363__$1 = cljs.core.keys.call(null,inst_35362);
var inst_35364 = cljs.core.count.call(null,inst_35363__$1);
var inst_35365 = cljs.core.reset_BANG_.call(null,dctr,inst_35364);
var inst_35370 = cljs.core.seq.call(null,inst_35363__$1);
var inst_35371 = inst_35370;
var inst_35372 = null;
var inst_35373 = (0);
var inst_35374 = (0);
var state_35431__$1 = (function (){var statearr_35474 = state_35431;
(statearr_35474[(30)] = inst_35365);

(statearr_35474[(20)] = inst_35371);

(statearr_35474[(10)] = inst_35374);

(statearr_35474[(21)] = inst_35373);

(statearr_35474[(12)] = inst_35372);

(statearr_35474[(29)] = inst_35363__$1);

return statearr_35474;
})();
var statearr_35475_35544 = state_35431__$1;
(statearr_35475_35544[(2)] = null);

(statearr_35475_35544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (28))){
var inst_35371 = (state_35431[(20)]);
var inst_35390 = (state_35431[(25)]);
var inst_35390__$1 = cljs.core.seq.call(null,inst_35371);
var state_35431__$1 = (function (){var statearr_35476 = state_35431;
(statearr_35476[(25)] = inst_35390__$1);

return statearr_35476;
})();
if(inst_35390__$1){
var statearr_35477_35545 = state_35431__$1;
(statearr_35477_35545[(1)] = (33));

} else {
var statearr_35478_35546 = state_35431__$1;
(statearr_35478_35546[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (25))){
var inst_35374 = (state_35431[(10)]);
var inst_35373 = (state_35431[(21)]);
var inst_35376 = (inst_35374 < inst_35373);
var inst_35377 = inst_35376;
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35377)){
var statearr_35479_35547 = state_35431__$1;
(statearr_35479_35547[(1)] = (27));

} else {
var statearr_35480_35548 = state_35431__$1;
(statearr_35480_35548[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (34))){
var state_35431__$1 = state_35431;
var statearr_35481_35549 = state_35431__$1;
(statearr_35481_35549[(2)] = null);

(statearr_35481_35549[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (17))){
var state_35431__$1 = state_35431;
var statearr_35482_35550 = state_35431__$1;
(statearr_35482_35550[(2)] = null);

(statearr_35482_35550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (3))){
var inst_35429 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35431__$1,inst_35429);
} else {
if((state_val_35432 === (12))){
var inst_35358 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35483_35551 = state_35431__$1;
(statearr_35483_35551[(2)] = inst_35358);

(statearr_35483_35551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (2))){
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(4),ch);
} else {
if((state_val_35432 === (23))){
var state_35431__$1 = state_35431;
var statearr_35484_35552 = state_35431__$1;
(statearr_35484_35552[(2)] = null);

(statearr_35484_35552[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (35))){
var inst_35413 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35485_35553 = state_35431__$1;
(statearr_35485_35553[(2)] = inst_35413);

(statearr_35485_35553[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (19))){
var inst_35330 = (state_35431[(7)]);
var inst_35334 = cljs.core.chunk_first.call(null,inst_35330);
var inst_35335 = cljs.core.chunk_rest.call(null,inst_35330);
var inst_35336 = cljs.core.count.call(null,inst_35334);
var inst_35308 = inst_35335;
var inst_35309 = inst_35334;
var inst_35310 = inst_35336;
var inst_35311 = (0);
var state_35431__$1 = (function (){var statearr_35486 = state_35431;
(statearr_35486[(13)] = inst_35311);

(statearr_35486[(15)] = inst_35308);

(statearr_35486[(16)] = inst_35309);

(statearr_35486[(17)] = inst_35310);

return statearr_35486;
})();
var statearr_35487_35554 = state_35431__$1;
(statearr_35487_35554[(2)] = null);

(statearr_35487_35554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (11))){
var inst_35308 = (state_35431[(15)]);
var inst_35330 = (state_35431[(7)]);
var inst_35330__$1 = cljs.core.seq.call(null,inst_35308);
var state_35431__$1 = (function (){var statearr_35488 = state_35431;
(statearr_35488[(7)] = inst_35330__$1);

return statearr_35488;
})();
if(inst_35330__$1){
var statearr_35489_35555 = state_35431__$1;
(statearr_35489_35555[(1)] = (16));

} else {
var statearr_35490_35556 = state_35431__$1;
(statearr_35490_35556[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (9))){
var inst_35360 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35491_35557 = state_35431__$1;
(statearr_35491_35557[(2)] = inst_35360);

(statearr_35491_35557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (5))){
var inst_35306 = cljs.core.deref.call(null,cs);
var inst_35307 = cljs.core.seq.call(null,inst_35306);
var inst_35308 = inst_35307;
var inst_35309 = null;
var inst_35310 = (0);
var inst_35311 = (0);
var state_35431__$1 = (function (){var statearr_35492 = state_35431;
(statearr_35492[(13)] = inst_35311);

(statearr_35492[(15)] = inst_35308);

(statearr_35492[(16)] = inst_35309);

(statearr_35492[(17)] = inst_35310);

return statearr_35492;
})();
var statearr_35493_35558 = state_35431__$1;
(statearr_35493_35558[(2)] = null);

(statearr_35493_35558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (14))){
var state_35431__$1 = state_35431;
var statearr_35494_35559 = state_35431__$1;
(statearr_35494_35559[(2)] = null);

(statearr_35494_35559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (45))){
var inst_35421 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35495_35560 = state_35431__$1;
(statearr_35495_35560[(2)] = inst_35421);

(statearr_35495_35560[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (26))){
var inst_35363 = (state_35431[(29)]);
var inst_35417 = (state_35431[(2)]);
var inst_35418 = cljs.core.seq.call(null,inst_35363);
var state_35431__$1 = (function (){var statearr_35496 = state_35431;
(statearr_35496[(31)] = inst_35417);

return statearr_35496;
})();
if(inst_35418){
var statearr_35497_35561 = state_35431__$1;
(statearr_35497_35561[(1)] = (42));

} else {
var statearr_35498_35562 = state_35431__$1;
(statearr_35498_35562[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (16))){
var inst_35330 = (state_35431[(7)]);
var inst_35332 = cljs.core.chunked_seq_QMARK_.call(null,inst_35330);
var state_35431__$1 = state_35431;
if(inst_35332){
var statearr_35499_35563 = state_35431__$1;
(statearr_35499_35563[(1)] = (19));

} else {
var statearr_35500_35564 = state_35431__$1;
(statearr_35500_35564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (38))){
var inst_35410 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35501_35565 = state_35431__$1;
(statearr_35501_35565[(2)] = inst_35410);

(statearr_35501_35565[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (30))){
var state_35431__$1 = state_35431;
var statearr_35502_35566 = state_35431__$1;
(statearr_35502_35566[(2)] = null);

(statearr_35502_35566[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (10))){
var inst_35311 = (state_35431[(13)]);
var inst_35309 = (state_35431[(16)]);
var inst_35319 = cljs.core._nth.call(null,inst_35309,inst_35311);
var inst_35320 = cljs.core.nth.call(null,inst_35319,(0),null);
var inst_35321 = cljs.core.nth.call(null,inst_35319,(1),null);
var state_35431__$1 = (function (){var statearr_35503 = state_35431;
(statearr_35503[(26)] = inst_35320);

return statearr_35503;
})();
if(cljs.core.truth_(inst_35321)){
var statearr_35504_35567 = state_35431__$1;
(statearr_35504_35567[(1)] = (13));

} else {
var statearr_35505_35568 = state_35431__$1;
(statearr_35505_35568[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (18))){
var inst_35356 = (state_35431[(2)]);
var state_35431__$1 = state_35431;
var statearr_35506_35569 = state_35431__$1;
(statearr_35506_35569[(2)] = inst_35356);

(statearr_35506_35569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (42))){
var state_35431__$1 = state_35431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35431__$1,(45),dchan);
} else {
if((state_val_35432 === (37))){
var inst_35399 = (state_35431[(23)]);
var inst_35299 = (state_35431[(11)]);
var inst_35390 = (state_35431[(25)]);
var inst_35399__$1 = cljs.core.first.call(null,inst_35390);
var inst_35400 = cljs.core.async.put_BANG_.call(null,inst_35399__$1,inst_35299,done);
var state_35431__$1 = (function (){var statearr_35507 = state_35431;
(statearr_35507[(23)] = inst_35399__$1);

return statearr_35507;
})();
if(cljs.core.truth_(inst_35400)){
var statearr_35508_35570 = state_35431__$1;
(statearr_35508_35570[(1)] = (39));

} else {
var statearr_35509_35571 = state_35431__$1;
(statearr_35509_35571[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35432 === (8))){
var inst_35311 = (state_35431[(13)]);
var inst_35310 = (state_35431[(17)]);
var inst_35313 = (inst_35311 < inst_35310);
var inst_35314 = inst_35313;
var state_35431__$1 = state_35431;
if(cljs.core.truth_(inst_35314)){
var statearr_35510_35572 = state_35431__$1;
(statearr_35510_35572[(1)] = (10));

} else {
var statearr_35511_35573 = state_35431__$1;
(statearr_35511_35573[(1)] = (11));

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
});})(c__27175__auto___35519,cs,m,dchan,dctr,done))
;
return ((function (switch__27154__auto__,c__27175__auto___35519,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27155__auto__ = null;
var cljs$core$async$mult_$_state_machine__27155__auto____0 = (function (){
var statearr_35515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35515[(0)] = cljs$core$async$mult_$_state_machine__27155__auto__);

(statearr_35515[(1)] = (1));

return statearr_35515;
});
var cljs$core$async$mult_$_state_machine__27155__auto____1 = (function (state_35431){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_35431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e35516){if((e35516 instanceof Object)){
var ex__27158__auto__ = e35516;
var statearr_35517_35574 = state_35431;
(statearr_35517_35574[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35575 = state_35431;
state_35431 = G__35575;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27155__auto__ = function(state_35431){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27155__auto____1.call(this,state_35431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27155__auto____0;
cljs$core$async$mult_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27155__auto____1;
return cljs$core$async$mult_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___35519,cs,m,dchan,dctr,done))
})();
var state__27177__auto__ = (function (){var statearr_35518 = f__27176__auto__.call(null);
(statearr_35518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___35519);

return statearr_35518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___35519,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args35576 = [];
var len__25947__auto___35579 = arguments.length;
var i__25948__auto___35580 = (0);
while(true){
if((i__25948__auto___35580 < len__25947__auto___35579)){
args35576.push((arguments[i__25948__auto___35580]));

var G__35581 = (i__25948__auto___35580 + (1));
i__25948__auto___35580 = G__35581;
continue;
} else {
}
break;
}

var G__35578 = args35576.length;
switch (G__35578) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35576.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m);
} else {
var m__25536__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,state_map);
} else {
var m__25536__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,mode);
} else {
var m__25536__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35593 = arguments.length;
var i__25948__auto___35594 = (0);
while(true){
if((i__25948__auto___35594 < len__25947__auto___35593)){
args__25954__auto__.push((arguments[i__25948__auto___35594]));

var G__35595 = (i__25948__auto___35594 + (1));
i__25948__auto___35594 = G__35595;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35587){
var map__35588 = p__35587;
var map__35588__$1 = ((((!((map__35588 == null)))?((((map__35588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35588):map__35588);
var opts = map__35588__$1;
var statearr_35590_35596 = state;
(statearr_35590_35596[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35588,map__35588__$1,opts){
return (function (val){
var statearr_35591_35597 = state;
(statearr_35591_35597[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35588,map__35588__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35592_35598 = state;
(statearr_35592_35598[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35583){
var G__35584 = cljs.core.first.call(null,seq35583);
var seq35583__$1 = cljs.core.next.call(null,seq35583);
var G__35585 = cljs.core.first.call(null,seq35583__$1);
var seq35583__$2 = cljs.core.next.call(null,seq35583__$1);
var G__35586 = cljs.core.first.call(null,seq35583__$2);
var seq35583__$3 = cljs.core.next.call(null,seq35583__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35584,G__35585,G__35586,seq35583__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async35764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35764 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35765){
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
this.meta35765 = meta35765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35766,meta35765__$1){
var self__ = this;
var _35766__$1 = this;
return (new cljs.core.async.t_cljs$core$async35764(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35765__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35766){
var self__ = this;
var _35766__$1 = this;
return self__.meta35765;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35764.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35765","meta35765",-667014000,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35764";

cljs.core.async.t_cljs$core$async35764.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async35764");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35764 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35764(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35765){
return (new cljs.core.async.t_cljs$core$async35764(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35765));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35764(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27175__auto___35929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___35929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___35929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35866){
var state_val_35867 = (state_35866[(1)]);
if((state_val_35867 === (7))){
var inst_35782 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
var statearr_35868_35930 = state_35866__$1;
(statearr_35868_35930[(2)] = inst_35782);

(statearr_35868_35930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (20))){
var inst_35794 = (state_35866[(7)]);
var state_35866__$1 = state_35866;
var statearr_35869_35931 = state_35866__$1;
(statearr_35869_35931[(2)] = inst_35794);

(statearr_35869_35931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (27))){
var state_35866__$1 = state_35866;
var statearr_35870_35932 = state_35866__$1;
(statearr_35870_35932[(2)] = null);

(statearr_35870_35932[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (1))){
var inst_35770 = (state_35866[(8)]);
var inst_35770__$1 = calc_state.call(null);
var inst_35772 = (inst_35770__$1 == null);
var inst_35773 = cljs.core.not.call(null,inst_35772);
var state_35866__$1 = (function (){var statearr_35871 = state_35866;
(statearr_35871[(8)] = inst_35770__$1);

return statearr_35871;
})();
if(inst_35773){
var statearr_35872_35933 = state_35866__$1;
(statearr_35872_35933[(1)] = (2));

} else {
var statearr_35873_35934 = state_35866__$1;
(statearr_35873_35934[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (24))){
var inst_35817 = (state_35866[(9)]);
var inst_35826 = (state_35866[(10)]);
var inst_35840 = (state_35866[(11)]);
var inst_35840__$1 = inst_35817.call(null,inst_35826);
var state_35866__$1 = (function (){var statearr_35874 = state_35866;
(statearr_35874[(11)] = inst_35840__$1);

return statearr_35874;
})();
if(cljs.core.truth_(inst_35840__$1)){
var statearr_35875_35935 = state_35866__$1;
(statearr_35875_35935[(1)] = (29));

} else {
var statearr_35876_35936 = state_35866__$1;
(statearr_35876_35936[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (4))){
var inst_35785 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
if(cljs.core.truth_(inst_35785)){
var statearr_35877_35937 = state_35866__$1;
(statearr_35877_35937[(1)] = (8));

} else {
var statearr_35878_35938 = state_35866__$1;
(statearr_35878_35938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (15))){
var inst_35811 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
if(cljs.core.truth_(inst_35811)){
var statearr_35879_35939 = state_35866__$1;
(statearr_35879_35939[(1)] = (19));

} else {
var statearr_35880_35940 = state_35866__$1;
(statearr_35880_35940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (21))){
var inst_35816 = (state_35866[(12)]);
var inst_35816__$1 = (state_35866[(2)]);
var inst_35817 = cljs.core.get.call(null,inst_35816__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35818 = cljs.core.get.call(null,inst_35816__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35819 = cljs.core.get.call(null,inst_35816__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35866__$1 = (function (){var statearr_35881 = state_35866;
(statearr_35881[(9)] = inst_35817);

(statearr_35881[(13)] = inst_35818);

(statearr_35881[(12)] = inst_35816__$1);

return statearr_35881;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35866__$1,(22),inst_35819);
} else {
if((state_val_35867 === (31))){
var inst_35848 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
if(cljs.core.truth_(inst_35848)){
var statearr_35882_35941 = state_35866__$1;
(statearr_35882_35941[(1)] = (32));

} else {
var statearr_35883_35942 = state_35866__$1;
(statearr_35883_35942[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (32))){
var inst_35825 = (state_35866[(14)]);
var state_35866__$1 = state_35866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35866__$1,(35),out,inst_35825);
} else {
if((state_val_35867 === (33))){
var inst_35816 = (state_35866[(12)]);
var inst_35794 = inst_35816;
var state_35866__$1 = (function (){var statearr_35884 = state_35866;
(statearr_35884[(7)] = inst_35794);

return statearr_35884;
})();
var statearr_35885_35943 = state_35866__$1;
(statearr_35885_35943[(2)] = null);

(statearr_35885_35943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (13))){
var inst_35794 = (state_35866[(7)]);
var inst_35801 = inst_35794.cljs$lang$protocol_mask$partition0$;
var inst_35802 = (inst_35801 & (64));
var inst_35803 = inst_35794.cljs$core$ISeq$;
var inst_35804 = (inst_35802) || (inst_35803);
var state_35866__$1 = state_35866;
if(cljs.core.truth_(inst_35804)){
var statearr_35886_35944 = state_35866__$1;
(statearr_35886_35944[(1)] = (16));

} else {
var statearr_35887_35945 = state_35866__$1;
(statearr_35887_35945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (22))){
var inst_35826 = (state_35866[(10)]);
var inst_35825 = (state_35866[(14)]);
var inst_35824 = (state_35866[(2)]);
var inst_35825__$1 = cljs.core.nth.call(null,inst_35824,(0),null);
var inst_35826__$1 = cljs.core.nth.call(null,inst_35824,(1),null);
var inst_35827 = (inst_35825__$1 == null);
var inst_35828 = cljs.core._EQ_.call(null,inst_35826__$1,change);
var inst_35829 = (inst_35827) || (inst_35828);
var state_35866__$1 = (function (){var statearr_35888 = state_35866;
(statearr_35888[(10)] = inst_35826__$1);

(statearr_35888[(14)] = inst_35825__$1);

return statearr_35888;
})();
if(cljs.core.truth_(inst_35829)){
var statearr_35889_35946 = state_35866__$1;
(statearr_35889_35946[(1)] = (23));

} else {
var statearr_35890_35947 = state_35866__$1;
(statearr_35890_35947[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (36))){
var inst_35816 = (state_35866[(12)]);
var inst_35794 = inst_35816;
var state_35866__$1 = (function (){var statearr_35891 = state_35866;
(statearr_35891[(7)] = inst_35794);

return statearr_35891;
})();
var statearr_35892_35948 = state_35866__$1;
(statearr_35892_35948[(2)] = null);

(statearr_35892_35948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (29))){
var inst_35840 = (state_35866[(11)]);
var state_35866__$1 = state_35866;
var statearr_35893_35949 = state_35866__$1;
(statearr_35893_35949[(2)] = inst_35840);

(statearr_35893_35949[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (6))){
var state_35866__$1 = state_35866;
var statearr_35894_35950 = state_35866__$1;
(statearr_35894_35950[(2)] = false);

(statearr_35894_35950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (28))){
var inst_35836 = (state_35866[(2)]);
var inst_35837 = calc_state.call(null);
var inst_35794 = inst_35837;
var state_35866__$1 = (function (){var statearr_35895 = state_35866;
(statearr_35895[(7)] = inst_35794);

(statearr_35895[(15)] = inst_35836);

return statearr_35895;
})();
var statearr_35896_35951 = state_35866__$1;
(statearr_35896_35951[(2)] = null);

(statearr_35896_35951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (25))){
var inst_35862 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
var statearr_35897_35952 = state_35866__$1;
(statearr_35897_35952[(2)] = inst_35862);

(statearr_35897_35952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (34))){
var inst_35860 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
var statearr_35898_35953 = state_35866__$1;
(statearr_35898_35953[(2)] = inst_35860);

(statearr_35898_35953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (17))){
var state_35866__$1 = state_35866;
var statearr_35899_35954 = state_35866__$1;
(statearr_35899_35954[(2)] = false);

(statearr_35899_35954[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (3))){
var state_35866__$1 = state_35866;
var statearr_35900_35955 = state_35866__$1;
(statearr_35900_35955[(2)] = false);

(statearr_35900_35955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (12))){
var inst_35864 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35866__$1,inst_35864);
} else {
if((state_val_35867 === (2))){
var inst_35770 = (state_35866[(8)]);
var inst_35775 = inst_35770.cljs$lang$protocol_mask$partition0$;
var inst_35776 = (inst_35775 & (64));
var inst_35777 = inst_35770.cljs$core$ISeq$;
var inst_35778 = (inst_35776) || (inst_35777);
var state_35866__$1 = state_35866;
if(cljs.core.truth_(inst_35778)){
var statearr_35901_35956 = state_35866__$1;
(statearr_35901_35956[(1)] = (5));

} else {
var statearr_35902_35957 = state_35866__$1;
(statearr_35902_35957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (23))){
var inst_35825 = (state_35866[(14)]);
var inst_35831 = (inst_35825 == null);
var state_35866__$1 = state_35866;
if(cljs.core.truth_(inst_35831)){
var statearr_35903_35958 = state_35866__$1;
(statearr_35903_35958[(1)] = (26));

} else {
var statearr_35904_35959 = state_35866__$1;
(statearr_35904_35959[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (35))){
var inst_35851 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
if(cljs.core.truth_(inst_35851)){
var statearr_35905_35960 = state_35866__$1;
(statearr_35905_35960[(1)] = (36));

} else {
var statearr_35906_35961 = state_35866__$1;
(statearr_35906_35961[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (19))){
var inst_35794 = (state_35866[(7)]);
var inst_35813 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35794);
var state_35866__$1 = state_35866;
var statearr_35907_35962 = state_35866__$1;
(statearr_35907_35962[(2)] = inst_35813);

(statearr_35907_35962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (11))){
var inst_35794 = (state_35866[(7)]);
var inst_35798 = (inst_35794 == null);
var inst_35799 = cljs.core.not.call(null,inst_35798);
var state_35866__$1 = state_35866;
if(inst_35799){
var statearr_35908_35963 = state_35866__$1;
(statearr_35908_35963[(1)] = (13));

} else {
var statearr_35909_35964 = state_35866__$1;
(statearr_35909_35964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (9))){
var inst_35770 = (state_35866[(8)]);
var state_35866__$1 = state_35866;
var statearr_35910_35965 = state_35866__$1;
(statearr_35910_35965[(2)] = inst_35770);

(statearr_35910_35965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (5))){
var state_35866__$1 = state_35866;
var statearr_35911_35966 = state_35866__$1;
(statearr_35911_35966[(2)] = true);

(statearr_35911_35966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (14))){
var state_35866__$1 = state_35866;
var statearr_35912_35967 = state_35866__$1;
(statearr_35912_35967[(2)] = false);

(statearr_35912_35967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (26))){
var inst_35826 = (state_35866[(10)]);
var inst_35833 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35826);
var state_35866__$1 = state_35866;
var statearr_35913_35968 = state_35866__$1;
(statearr_35913_35968[(2)] = inst_35833);

(statearr_35913_35968[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (16))){
var state_35866__$1 = state_35866;
var statearr_35914_35969 = state_35866__$1;
(statearr_35914_35969[(2)] = true);

(statearr_35914_35969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (38))){
var inst_35856 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
var statearr_35915_35970 = state_35866__$1;
(statearr_35915_35970[(2)] = inst_35856);

(statearr_35915_35970[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (30))){
var inst_35817 = (state_35866[(9)]);
var inst_35818 = (state_35866[(13)]);
var inst_35826 = (state_35866[(10)]);
var inst_35843 = cljs.core.empty_QMARK_.call(null,inst_35817);
var inst_35844 = inst_35818.call(null,inst_35826);
var inst_35845 = cljs.core.not.call(null,inst_35844);
var inst_35846 = (inst_35843) && (inst_35845);
var state_35866__$1 = state_35866;
var statearr_35916_35971 = state_35866__$1;
(statearr_35916_35971[(2)] = inst_35846);

(statearr_35916_35971[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (10))){
var inst_35770 = (state_35866[(8)]);
var inst_35790 = (state_35866[(2)]);
var inst_35791 = cljs.core.get.call(null,inst_35790,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35792 = cljs.core.get.call(null,inst_35790,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35793 = cljs.core.get.call(null,inst_35790,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35794 = inst_35770;
var state_35866__$1 = (function (){var statearr_35917 = state_35866;
(statearr_35917[(7)] = inst_35794);

(statearr_35917[(16)] = inst_35791);

(statearr_35917[(17)] = inst_35792);

(statearr_35917[(18)] = inst_35793);

return statearr_35917;
})();
var statearr_35918_35972 = state_35866__$1;
(statearr_35918_35972[(2)] = null);

(statearr_35918_35972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (18))){
var inst_35808 = (state_35866[(2)]);
var state_35866__$1 = state_35866;
var statearr_35919_35973 = state_35866__$1;
(statearr_35919_35973[(2)] = inst_35808);

(statearr_35919_35973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (37))){
var state_35866__$1 = state_35866;
var statearr_35920_35974 = state_35866__$1;
(statearr_35920_35974[(2)] = null);

(statearr_35920_35974[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35867 === (8))){
var inst_35770 = (state_35866[(8)]);
var inst_35787 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35770);
var state_35866__$1 = state_35866;
var statearr_35921_35975 = state_35866__$1;
(statearr_35921_35975[(2)] = inst_35787);

(statearr_35921_35975[(1)] = (10));


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
});})(c__27175__auto___35929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27154__auto__,c__27175__auto___35929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27155__auto__ = null;
var cljs$core$async$mix_$_state_machine__27155__auto____0 = (function (){
var statearr_35925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35925[(0)] = cljs$core$async$mix_$_state_machine__27155__auto__);

(statearr_35925[(1)] = (1));

return statearr_35925;
});
var cljs$core$async$mix_$_state_machine__27155__auto____1 = (function (state_35866){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_35866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e35926){if((e35926 instanceof Object)){
var ex__27158__auto__ = e35926;
var statearr_35927_35976 = state_35866;
(statearr_35927_35976[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35977 = state_35866;
state_35866 = G__35977;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27155__auto__ = function(state_35866){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27155__auto____1.call(this,state_35866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27155__auto____0;
cljs$core$async$mix_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27155__auto____1;
return cljs$core$async$mix_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___35929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27177__auto__ = (function (){var statearr_35928 = f__27176__auto__.call(null);
(statearr_35928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___35929);

return statearr_35928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___35929,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25536__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35978 = [];
var len__25947__auto___35981 = arguments.length;
var i__25948__auto___35982 = (0);
while(true){
if((i__25948__auto___35982 < len__25947__auto___35981)){
args35978.push((arguments[i__25948__auto___35982]));

var G__35983 = (i__25948__auto___35982 + (1));
i__25948__auto___35982 = G__35983;
continue;
} else {
}
break;
}

var G__35980 = args35978.length;
switch (G__35980) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35978.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args35986 = [];
var len__25947__auto___36111 = arguments.length;
var i__25948__auto___36112 = (0);
while(true){
if((i__25948__auto___36112 < len__25947__auto___36111)){
args35986.push((arguments[i__25948__auto___36112]));

var G__36113 = (i__25948__auto___36112 + (1));
i__25948__auto___36112 = G__36113;
continue;
} else {
}
break;
}

var G__35988 = args35986.length;
switch (G__35988) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35986.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24872__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24872__auto__,mults){
return (function (p1__35985_SHARP_){
if(cljs.core.truth_(p1__35985_SHARP_.call(null,topic))){
return p1__35985_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35985_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24872__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35989 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35990){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35990 = meta35990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35991,meta35990__$1){
var self__ = this;
var _35991__$1 = this;
return (new cljs.core.async.t_cljs$core$async35989(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35990__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35991){
var self__ = this;
var _35991__$1 = this;
return self__.meta35990;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35989.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35989.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35989.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35989.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35989.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35989.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35989.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35989.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35990","meta35990",-2029861188,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35989.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35989";

cljs.core.async.t_cljs$core$async35989.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async35989");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35989 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35989(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35990){
return (new cljs.core.async.t_cljs$core$async35989(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35990));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35989(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27175__auto___36115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___36115,mults,ensure_mult,p){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___36115,mults,ensure_mult,p){
return (function (state_36063){
var state_val_36064 = (state_36063[(1)]);
if((state_val_36064 === (7))){
var inst_36059 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36065_36116 = state_36063__$1;
(statearr_36065_36116[(2)] = inst_36059);

(statearr_36065_36116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (20))){
var state_36063__$1 = state_36063;
var statearr_36066_36117 = state_36063__$1;
(statearr_36066_36117[(2)] = null);

(statearr_36066_36117[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (1))){
var state_36063__$1 = state_36063;
var statearr_36067_36118 = state_36063__$1;
(statearr_36067_36118[(2)] = null);

(statearr_36067_36118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (24))){
var inst_36042 = (state_36063[(7)]);
var inst_36051 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36042);
var state_36063__$1 = state_36063;
var statearr_36068_36119 = state_36063__$1;
(statearr_36068_36119[(2)] = inst_36051);

(statearr_36068_36119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (4))){
var inst_35994 = (state_36063[(8)]);
var inst_35994__$1 = (state_36063[(2)]);
var inst_35995 = (inst_35994__$1 == null);
var state_36063__$1 = (function (){var statearr_36069 = state_36063;
(statearr_36069[(8)] = inst_35994__$1);

return statearr_36069;
})();
if(cljs.core.truth_(inst_35995)){
var statearr_36070_36120 = state_36063__$1;
(statearr_36070_36120[(1)] = (5));

} else {
var statearr_36071_36121 = state_36063__$1;
(statearr_36071_36121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (15))){
var inst_36036 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36072_36122 = state_36063__$1;
(statearr_36072_36122[(2)] = inst_36036);

(statearr_36072_36122[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (21))){
var inst_36056 = (state_36063[(2)]);
var state_36063__$1 = (function (){var statearr_36073 = state_36063;
(statearr_36073[(9)] = inst_36056);

return statearr_36073;
})();
var statearr_36074_36123 = state_36063__$1;
(statearr_36074_36123[(2)] = null);

(statearr_36074_36123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (13))){
var inst_36018 = (state_36063[(10)]);
var inst_36020 = cljs.core.chunked_seq_QMARK_.call(null,inst_36018);
var state_36063__$1 = state_36063;
if(inst_36020){
var statearr_36075_36124 = state_36063__$1;
(statearr_36075_36124[(1)] = (16));

} else {
var statearr_36076_36125 = state_36063__$1;
(statearr_36076_36125[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (22))){
var inst_36048 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
if(cljs.core.truth_(inst_36048)){
var statearr_36077_36126 = state_36063__$1;
(statearr_36077_36126[(1)] = (23));

} else {
var statearr_36078_36127 = state_36063__$1;
(statearr_36078_36127[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (6))){
var inst_36044 = (state_36063[(11)]);
var inst_36042 = (state_36063[(7)]);
var inst_35994 = (state_36063[(8)]);
var inst_36042__$1 = topic_fn.call(null,inst_35994);
var inst_36043 = cljs.core.deref.call(null,mults);
var inst_36044__$1 = cljs.core.get.call(null,inst_36043,inst_36042__$1);
var state_36063__$1 = (function (){var statearr_36079 = state_36063;
(statearr_36079[(11)] = inst_36044__$1);

(statearr_36079[(7)] = inst_36042__$1);

return statearr_36079;
})();
if(cljs.core.truth_(inst_36044__$1)){
var statearr_36080_36128 = state_36063__$1;
(statearr_36080_36128[(1)] = (19));

} else {
var statearr_36081_36129 = state_36063__$1;
(statearr_36081_36129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (25))){
var inst_36053 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36082_36130 = state_36063__$1;
(statearr_36082_36130[(2)] = inst_36053);

(statearr_36082_36130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (17))){
var inst_36018 = (state_36063[(10)]);
var inst_36027 = cljs.core.first.call(null,inst_36018);
var inst_36028 = cljs.core.async.muxch_STAR_.call(null,inst_36027);
var inst_36029 = cljs.core.async.close_BANG_.call(null,inst_36028);
var inst_36030 = cljs.core.next.call(null,inst_36018);
var inst_36004 = inst_36030;
var inst_36005 = null;
var inst_36006 = (0);
var inst_36007 = (0);
var state_36063__$1 = (function (){var statearr_36083 = state_36063;
(statearr_36083[(12)] = inst_36007);

(statearr_36083[(13)] = inst_36029);

(statearr_36083[(14)] = inst_36005);

(statearr_36083[(15)] = inst_36004);

(statearr_36083[(16)] = inst_36006);

return statearr_36083;
})();
var statearr_36084_36131 = state_36063__$1;
(statearr_36084_36131[(2)] = null);

(statearr_36084_36131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (3))){
var inst_36061 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36063__$1,inst_36061);
} else {
if((state_val_36064 === (12))){
var inst_36038 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36085_36132 = state_36063__$1;
(statearr_36085_36132[(2)] = inst_36038);

(statearr_36085_36132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (2))){
var state_36063__$1 = state_36063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36063__$1,(4),ch);
} else {
if((state_val_36064 === (23))){
var state_36063__$1 = state_36063;
var statearr_36086_36133 = state_36063__$1;
(statearr_36086_36133[(2)] = null);

(statearr_36086_36133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (19))){
var inst_36044 = (state_36063[(11)]);
var inst_35994 = (state_36063[(8)]);
var inst_36046 = cljs.core.async.muxch_STAR_.call(null,inst_36044);
var state_36063__$1 = state_36063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36063__$1,(22),inst_36046,inst_35994);
} else {
if((state_val_36064 === (11))){
var inst_36004 = (state_36063[(15)]);
var inst_36018 = (state_36063[(10)]);
var inst_36018__$1 = cljs.core.seq.call(null,inst_36004);
var state_36063__$1 = (function (){var statearr_36087 = state_36063;
(statearr_36087[(10)] = inst_36018__$1);

return statearr_36087;
})();
if(inst_36018__$1){
var statearr_36088_36134 = state_36063__$1;
(statearr_36088_36134[(1)] = (13));

} else {
var statearr_36089_36135 = state_36063__$1;
(statearr_36089_36135[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (9))){
var inst_36040 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36090_36136 = state_36063__$1;
(statearr_36090_36136[(2)] = inst_36040);

(statearr_36090_36136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (5))){
var inst_36001 = cljs.core.deref.call(null,mults);
var inst_36002 = cljs.core.vals.call(null,inst_36001);
var inst_36003 = cljs.core.seq.call(null,inst_36002);
var inst_36004 = inst_36003;
var inst_36005 = null;
var inst_36006 = (0);
var inst_36007 = (0);
var state_36063__$1 = (function (){var statearr_36091 = state_36063;
(statearr_36091[(12)] = inst_36007);

(statearr_36091[(14)] = inst_36005);

(statearr_36091[(15)] = inst_36004);

(statearr_36091[(16)] = inst_36006);

return statearr_36091;
})();
var statearr_36092_36137 = state_36063__$1;
(statearr_36092_36137[(2)] = null);

(statearr_36092_36137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (14))){
var state_36063__$1 = state_36063;
var statearr_36096_36138 = state_36063__$1;
(statearr_36096_36138[(2)] = null);

(statearr_36096_36138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (16))){
var inst_36018 = (state_36063[(10)]);
var inst_36022 = cljs.core.chunk_first.call(null,inst_36018);
var inst_36023 = cljs.core.chunk_rest.call(null,inst_36018);
var inst_36024 = cljs.core.count.call(null,inst_36022);
var inst_36004 = inst_36023;
var inst_36005 = inst_36022;
var inst_36006 = inst_36024;
var inst_36007 = (0);
var state_36063__$1 = (function (){var statearr_36097 = state_36063;
(statearr_36097[(12)] = inst_36007);

(statearr_36097[(14)] = inst_36005);

(statearr_36097[(15)] = inst_36004);

(statearr_36097[(16)] = inst_36006);

return statearr_36097;
})();
var statearr_36098_36139 = state_36063__$1;
(statearr_36098_36139[(2)] = null);

(statearr_36098_36139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (10))){
var inst_36007 = (state_36063[(12)]);
var inst_36005 = (state_36063[(14)]);
var inst_36004 = (state_36063[(15)]);
var inst_36006 = (state_36063[(16)]);
var inst_36012 = cljs.core._nth.call(null,inst_36005,inst_36007);
var inst_36013 = cljs.core.async.muxch_STAR_.call(null,inst_36012);
var inst_36014 = cljs.core.async.close_BANG_.call(null,inst_36013);
var inst_36015 = (inst_36007 + (1));
var tmp36093 = inst_36005;
var tmp36094 = inst_36004;
var tmp36095 = inst_36006;
var inst_36004__$1 = tmp36094;
var inst_36005__$1 = tmp36093;
var inst_36006__$1 = tmp36095;
var inst_36007__$1 = inst_36015;
var state_36063__$1 = (function (){var statearr_36099 = state_36063;
(statearr_36099[(12)] = inst_36007__$1);

(statearr_36099[(14)] = inst_36005__$1);

(statearr_36099[(15)] = inst_36004__$1);

(statearr_36099[(17)] = inst_36014);

(statearr_36099[(16)] = inst_36006__$1);

return statearr_36099;
})();
var statearr_36100_36140 = state_36063__$1;
(statearr_36100_36140[(2)] = null);

(statearr_36100_36140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (18))){
var inst_36033 = (state_36063[(2)]);
var state_36063__$1 = state_36063;
var statearr_36101_36141 = state_36063__$1;
(statearr_36101_36141[(2)] = inst_36033);

(statearr_36101_36141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36064 === (8))){
var inst_36007 = (state_36063[(12)]);
var inst_36006 = (state_36063[(16)]);
var inst_36009 = (inst_36007 < inst_36006);
var inst_36010 = inst_36009;
var state_36063__$1 = state_36063;
if(cljs.core.truth_(inst_36010)){
var statearr_36102_36142 = state_36063__$1;
(statearr_36102_36142[(1)] = (10));

} else {
var statearr_36103_36143 = state_36063__$1;
(statearr_36103_36143[(1)] = (11));

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
});})(c__27175__auto___36115,mults,ensure_mult,p))
;
return ((function (switch__27154__auto__,c__27175__auto___36115,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_36107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36107[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_36107[(1)] = (1));

return statearr_36107;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_36063){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_36063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e36108){if((e36108 instanceof Object)){
var ex__27158__auto__ = e36108;
var statearr_36109_36144 = state_36063;
(statearr_36109_36144[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36145 = state_36063;
state_36063 = G__36145;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_36063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_36063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___36115,mults,ensure_mult,p))
})();
var state__27177__auto__ = (function (){var statearr_36110 = f__27176__auto__.call(null);
(statearr_36110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___36115);

return statearr_36110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___36115,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args36146 = [];
var len__25947__auto___36149 = arguments.length;
var i__25948__auto___36150 = (0);
while(true){
if((i__25948__auto___36150 < len__25947__auto___36149)){
args36146.push((arguments[i__25948__auto___36150]));

var G__36151 = (i__25948__auto___36150 + (1));
i__25948__auto___36150 = G__36151;
continue;
} else {
}
break;
}

var G__36148 = args36146.length;
switch (G__36148) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36146.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args36153 = [];
var len__25947__auto___36156 = arguments.length;
var i__25948__auto___36157 = (0);
while(true){
if((i__25948__auto___36157 < len__25947__auto___36156)){
args36153.push((arguments[i__25948__auto___36157]));

var G__36158 = (i__25948__auto___36157 + (1));
i__25948__auto___36157 = G__36158;
continue;
} else {
}
break;
}

var G__36155 = args36153.length;
switch (G__36155) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36153.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args36160 = [];
var len__25947__auto___36231 = arguments.length;
var i__25948__auto___36232 = (0);
while(true){
if((i__25948__auto___36232 < len__25947__auto___36231)){
args36160.push((arguments[i__25948__auto___36232]));

var G__36233 = (i__25948__auto___36232 + (1));
i__25948__auto___36232 = G__36233;
continue;
} else {
}
break;
}

var G__36162 = args36160.length;
switch (G__36162) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36160.length)].join('')));

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
var c__27175__auto___36235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___36235,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___36235,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36201){
var state_val_36202 = (state_36201[(1)]);
if((state_val_36202 === (7))){
var state_36201__$1 = state_36201;
var statearr_36203_36236 = state_36201__$1;
(statearr_36203_36236[(2)] = null);

(statearr_36203_36236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (1))){
var state_36201__$1 = state_36201;
var statearr_36204_36237 = state_36201__$1;
(statearr_36204_36237[(2)] = null);

(statearr_36204_36237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (4))){
var inst_36165 = (state_36201[(7)]);
var inst_36167 = (inst_36165 < cnt);
var state_36201__$1 = state_36201;
if(cljs.core.truth_(inst_36167)){
var statearr_36205_36238 = state_36201__$1;
(statearr_36205_36238[(1)] = (6));

} else {
var statearr_36206_36239 = state_36201__$1;
(statearr_36206_36239[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (15))){
var inst_36197 = (state_36201[(2)]);
var state_36201__$1 = state_36201;
var statearr_36207_36240 = state_36201__$1;
(statearr_36207_36240[(2)] = inst_36197);

(statearr_36207_36240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (13))){
var inst_36190 = cljs.core.async.close_BANG_.call(null,out);
var state_36201__$1 = state_36201;
var statearr_36208_36241 = state_36201__$1;
(statearr_36208_36241[(2)] = inst_36190);

(statearr_36208_36241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (6))){
var state_36201__$1 = state_36201;
var statearr_36209_36242 = state_36201__$1;
(statearr_36209_36242[(2)] = null);

(statearr_36209_36242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (3))){
var inst_36199 = (state_36201[(2)]);
var state_36201__$1 = state_36201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36201__$1,inst_36199);
} else {
if((state_val_36202 === (12))){
var inst_36187 = (state_36201[(8)]);
var inst_36187__$1 = (state_36201[(2)]);
var inst_36188 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36187__$1);
var state_36201__$1 = (function (){var statearr_36210 = state_36201;
(statearr_36210[(8)] = inst_36187__$1);

return statearr_36210;
})();
if(cljs.core.truth_(inst_36188)){
var statearr_36211_36243 = state_36201__$1;
(statearr_36211_36243[(1)] = (13));

} else {
var statearr_36212_36244 = state_36201__$1;
(statearr_36212_36244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (2))){
var inst_36164 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36165 = (0);
var state_36201__$1 = (function (){var statearr_36213 = state_36201;
(statearr_36213[(7)] = inst_36165);

(statearr_36213[(9)] = inst_36164);

return statearr_36213;
})();
var statearr_36214_36245 = state_36201__$1;
(statearr_36214_36245[(2)] = null);

(statearr_36214_36245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (11))){
var inst_36165 = (state_36201[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36201,(10),Object,null,(9));
var inst_36174 = chs__$1.call(null,inst_36165);
var inst_36175 = done.call(null,inst_36165);
var inst_36176 = cljs.core.async.take_BANG_.call(null,inst_36174,inst_36175);
var state_36201__$1 = state_36201;
var statearr_36215_36246 = state_36201__$1;
(statearr_36215_36246[(2)] = inst_36176);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36201__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (9))){
var inst_36165 = (state_36201[(7)]);
var inst_36178 = (state_36201[(2)]);
var inst_36179 = (inst_36165 + (1));
var inst_36165__$1 = inst_36179;
var state_36201__$1 = (function (){var statearr_36216 = state_36201;
(statearr_36216[(7)] = inst_36165__$1);

(statearr_36216[(10)] = inst_36178);

return statearr_36216;
})();
var statearr_36217_36247 = state_36201__$1;
(statearr_36217_36247[(2)] = null);

(statearr_36217_36247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (5))){
var inst_36185 = (state_36201[(2)]);
var state_36201__$1 = (function (){var statearr_36218 = state_36201;
(statearr_36218[(11)] = inst_36185);

return statearr_36218;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36201__$1,(12),dchan);
} else {
if((state_val_36202 === (14))){
var inst_36187 = (state_36201[(8)]);
var inst_36192 = cljs.core.apply.call(null,f,inst_36187);
var state_36201__$1 = state_36201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36201__$1,(16),out,inst_36192);
} else {
if((state_val_36202 === (16))){
var inst_36194 = (state_36201[(2)]);
var state_36201__$1 = (function (){var statearr_36219 = state_36201;
(statearr_36219[(12)] = inst_36194);

return statearr_36219;
})();
var statearr_36220_36248 = state_36201__$1;
(statearr_36220_36248[(2)] = null);

(statearr_36220_36248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (10))){
var inst_36169 = (state_36201[(2)]);
var inst_36170 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36201__$1 = (function (){var statearr_36221 = state_36201;
(statearr_36221[(13)] = inst_36169);

return statearr_36221;
})();
var statearr_36222_36249 = state_36201__$1;
(statearr_36222_36249[(2)] = inst_36170);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36201__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36202 === (8))){
var inst_36183 = (state_36201[(2)]);
var state_36201__$1 = state_36201;
var statearr_36223_36250 = state_36201__$1;
(statearr_36223_36250[(2)] = inst_36183);

(statearr_36223_36250[(1)] = (5));


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
});})(c__27175__auto___36235,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27154__auto__,c__27175__auto___36235,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_36227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36227[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_36227[(1)] = (1));

return statearr_36227;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_36201){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_36201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e36228){if((e36228 instanceof Object)){
var ex__27158__auto__ = e36228;
var statearr_36229_36251 = state_36201;
(statearr_36229_36251[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36252 = state_36201;
state_36201 = G__36252;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_36201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_36201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___36235,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27177__auto__ = (function (){var statearr_36230 = f__27176__auto__.call(null);
(statearr_36230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___36235);

return statearr_36230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___36235,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args36254 = [];
var len__25947__auto___36312 = arguments.length;
var i__25948__auto___36313 = (0);
while(true){
if((i__25948__auto___36313 < len__25947__auto___36312)){
args36254.push((arguments[i__25948__auto___36313]));

var G__36314 = (i__25948__auto___36313 + (1));
i__25948__auto___36313 = G__36314;
continue;
} else {
}
break;
}

var G__36256 = args36254.length;
switch (G__36256) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36254.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27175__auto___36316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___36316,out){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___36316,out){
return (function (state_36288){
var state_val_36289 = (state_36288[(1)]);
if((state_val_36289 === (7))){
var inst_36268 = (state_36288[(7)]);
var inst_36267 = (state_36288[(8)]);
var inst_36267__$1 = (state_36288[(2)]);
var inst_36268__$1 = cljs.core.nth.call(null,inst_36267__$1,(0),null);
var inst_36269 = cljs.core.nth.call(null,inst_36267__$1,(1),null);
var inst_36270 = (inst_36268__$1 == null);
var state_36288__$1 = (function (){var statearr_36290 = state_36288;
(statearr_36290[(7)] = inst_36268__$1);

(statearr_36290[(8)] = inst_36267__$1);

(statearr_36290[(9)] = inst_36269);

return statearr_36290;
})();
if(cljs.core.truth_(inst_36270)){
var statearr_36291_36317 = state_36288__$1;
(statearr_36291_36317[(1)] = (8));

} else {
var statearr_36292_36318 = state_36288__$1;
(statearr_36292_36318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (1))){
var inst_36257 = cljs.core.vec.call(null,chs);
var inst_36258 = inst_36257;
var state_36288__$1 = (function (){var statearr_36293 = state_36288;
(statearr_36293[(10)] = inst_36258);

return statearr_36293;
})();
var statearr_36294_36319 = state_36288__$1;
(statearr_36294_36319[(2)] = null);

(statearr_36294_36319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (4))){
var inst_36258 = (state_36288[(10)]);
var state_36288__$1 = state_36288;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36288__$1,(7),inst_36258);
} else {
if((state_val_36289 === (6))){
var inst_36284 = (state_36288[(2)]);
var state_36288__$1 = state_36288;
var statearr_36295_36320 = state_36288__$1;
(statearr_36295_36320[(2)] = inst_36284);

(statearr_36295_36320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (3))){
var inst_36286 = (state_36288[(2)]);
var state_36288__$1 = state_36288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36288__$1,inst_36286);
} else {
if((state_val_36289 === (2))){
var inst_36258 = (state_36288[(10)]);
var inst_36260 = cljs.core.count.call(null,inst_36258);
var inst_36261 = (inst_36260 > (0));
var state_36288__$1 = state_36288;
if(cljs.core.truth_(inst_36261)){
var statearr_36297_36321 = state_36288__$1;
(statearr_36297_36321[(1)] = (4));

} else {
var statearr_36298_36322 = state_36288__$1;
(statearr_36298_36322[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (11))){
var inst_36258 = (state_36288[(10)]);
var inst_36277 = (state_36288[(2)]);
var tmp36296 = inst_36258;
var inst_36258__$1 = tmp36296;
var state_36288__$1 = (function (){var statearr_36299 = state_36288;
(statearr_36299[(11)] = inst_36277);

(statearr_36299[(10)] = inst_36258__$1);

return statearr_36299;
})();
var statearr_36300_36323 = state_36288__$1;
(statearr_36300_36323[(2)] = null);

(statearr_36300_36323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (9))){
var inst_36268 = (state_36288[(7)]);
var state_36288__$1 = state_36288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36288__$1,(11),out,inst_36268);
} else {
if((state_val_36289 === (5))){
var inst_36282 = cljs.core.async.close_BANG_.call(null,out);
var state_36288__$1 = state_36288;
var statearr_36301_36324 = state_36288__$1;
(statearr_36301_36324[(2)] = inst_36282);

(statearr_36301_36324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (10))){
var inst_36280 = (state_36288[(2)]);
var state_36288__$1 = state_36288;
var statearr_36302_36325 = state_36288__$1;
(statearr_36302_36325[(2)] = inst_36280);

(statearr_36302_36325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36289 === (8))){
var inst_36268 = (state_36288[(7)]);
var inst_36267 = (state_36288[(8)]);
var inst_36269 = (state_36288[(9)]);
var inst_36258 = (state_36288[(10)]);
var inst_36272 = (function (){var cs = inst_36258;
var vec__36263 = inst_36267;
var v = inst_36268;
var c = inst_36269;
return ((function (cs,vec__36263,v,c,inst_36268,inst_36267,inst_36269,inst_36258,state_val_36289,c__27175__auto___36316,out){
return (function (p1__36253_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36253_SHARP_);
});
;})(cs,vec__36263,v,c,inst_36268,inst_36267,inst_36269,inst_36258,state_val_36289,c__27175__auto___36316,out))
})();
var inst_36273 = cljs.core.filterv.call(null,inst_36272,inst_36258);
var inst_36258__$1 = inst_36273;
var state_36288__$1 = (function (){var statearr_36303 = state_36288;
(statearr_36303[(10)] = inst_36258__$1);

return statearr_36303;
})();
var statearr_36304_36326 = state_36288__$1;
(statearr_36304_36326[(2)] = null);

(statearr_36304_36326[(1)] = (2));


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
});})(c__27175__auto___36316,out))
;
return ((function (switch__27154__auto__,c__27175__auto___36316,out){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_36308 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36308[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_36308[(1)] = (1));

return statearr_36308;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_36288){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_36288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e36309){if((e36309 instanceof Object)){
var ex__27158__auto__ = e36309;
var statearr_36310_36327 = state_36288;
(statearr_36310_36327[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36328 = state_36288;
state_36288 = G__36328;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_36288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_36288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___36316,out))
})();
var state__27177__auto__ = (function (){var statearr_36311 = f__27176__auto__.call(null);
(statearr_36311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___36316);

return statearr_36311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___36316,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args36329 = [];
var len__25947__auto___36378 = arguments.length;
var i__25948__auto___36379 = (0);
while(true){
if((i__25948__auto___36379 < len__25947__auto___36378)){
args36329.push((arguments[i__25948__auto___36379]));

var G__36380 = (i__25948__auto___36379 + (1));
i__25948__auto___36379 = G__36380;
continue;
} else {
}
break;
}

var G__36331 = args36329.length;
switch (G__36331) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36329.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27175__auto___36382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___36382,out){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___36382,out){
return (function (state_36355){
var state_val_36356 = (state_36355[(1)]);
if((state_val_36356 === (7))){
var inst_36337 = (state_36355[(7)]);
var inst_36337__$1 = (state_36355[(2)]);
var inst_36338 = (inst_36337__$1 == null);
var inst_36339 = cljs.core.not.call(null,inst_36338);
var state_36355__$1 = (function (){var statearr_36357 = state_36355;
(statearr_36357[(7)] = inst_36337__$1);

return statearr_36357;
})();
if(inst_36339){
var statearr_36358_36383 = state_36355__$1;
(statearr_36358_36383[(1)] = (8));

} else {
var statearr_36359_36384 = state_36355__$1;
(statearr_36359_36384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36356 === (1))){
var inst_36332 = (0);
var state_36355__$1 = (function (){var statearr_36360 = state_36355;
(statearr_36360[(8)] = inst_36332);

return statearr_36360;
})();
var statearr_36361_36385 = state_36355__$1;
(statearr_36361_36385[(2)] = null);

(statearr_36361_36385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36356 === (4))){
var state_36355__$1 = state_36355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36355__$1,(7),ch);
} else {
if((state_val_36356 === (6))){
var inst_36350 = (state_36355[(2)]);
var state_36355__$1 = state_36355;
var statearr_36362_36386 = state_36355__$1;
(statearr_36362_36386[(2)] = inst_36350);

(statearr_36362_36386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36356 === (3))){
var inst_36352 = (state_36355[(2)]);
var inst_36353 = cljs.core.async.close_BANG_.call(null,out);
var state_36355__$1 = (function (){var statearr_36363 = state_36355;
(statearr_36363[(9)] = inst_36352);

return statearr_36363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36355__$1,inst_36353);
} else {
if((state_val_36356 === (2))){
var inst_36332 = (state_36355[(8)]);
var inst_36334 = (inst_36332 < n);
var state_36355__$1 = state_36355;
if(cljs.core.truth_(inst_36334)){
var statearr_36364_36387 = state_36355__$1;
(statearr_36364_36387[(1)] = (4));

} else {
var statearr_36365_36388 = state_36355__$1;
(statearr_36365_36388[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36356 === (11))){
var inst_36332 = (state_36355[(8)]);
var inst_36342 = (state_36355[(2)]);
var inst_36343 = (inst_36332 + (1));
var inst_36332__$1 = inst_36343;
var state_36355__$1 = (function (){var statearr_36366 = state_36355;
(statearr_36366[(10)] = inst_36342);

(statearr_36366[(8)] = inst_36332__$1);

return statearr_36366;
})();
var statearr_36367_36389 = state_36355__$1;
(statearr_36367_36389[(2)] = null);

(statearr_36367_36389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36356 === (9))){
var state_36355__$1 = state_36355;
var statearr_36368_36390 = state_36355__$1;
(statearr_36368_36390[(2)] = null);

(statearr_36368_36390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36356 === (5))){
var state_36355__$1 = state_36355;
var statearr_36369_36391 = state_36355__$1;
(statearr_36369_36391[(2)] = null);

(statearr_36369_36391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36356 === (10))){
var inst_36347 = (state_36355[(2)]);
var state_36355__$1 = state_36355;
var statearr_36370_36392 = state_36355__$1;
(statearr_36370_36392[(2)] = inst_36347);

(statearr_36370_36392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36356 === (8))){
var inst_36337 = (state_36355[(7)]);
var state_36355__$1 = state_36355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36355__$1,(11),out,inst_36337);
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
});})(c__27175__auto___36382,out))
;
return ((function (switch__27154__auto__,c__27175__auto___36382,out){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_36374 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36374[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_36374[(1)] = (1));

return statearr_36374;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_36355){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_36355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e36375){if((e36375 instanceof Object)){
var ex__27158__auto__ = e36375;
var statearr_36376_36393 = state_36355;
(statearr_36376_36393[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36394 = state_36355;
state_36355 = G__36394;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_36355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_36355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___36382,out))
})();
var state__27177__auto__ = (function (){var statearr_36377 = f__27176__auto__.call(null);
(statearr_36377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___36382);

return statearr_36377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___36382,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36402 = (function (map_LT_,f,ch,meta36403){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36403 = meta36403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36404,meta36403__$1){
var self__ = this;
var _36404__$1 = this;
return (new cljs.core.async.t_cljs$core$async36402(self__.map_LT_,self__.f,self__.ch,meta36403__$1));
});

cljs.core.async.t_cljs$core$async36402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36404){
var self__ = this;
var _36404__$1 = this;
return self__.meta36403;
});

cljs.core.async.t_cljs$core$async36402.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36402.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36402.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36405 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36405 = (function (map_LT_,f,ch,meta36403,_,fn1,meta36406){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36403 = meta36403;
this._ = _;
this.fn1 = fn1;
this.meta36406 = meta36406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36407,meta36406__$1){
var self__ = this;
var _36407__$1 = this;
return (new cljs.core.async.t_cljs$core$async36405(self__.map_LT_,self__.f,self__.ch,self__.meta36403,self__._,self__.fn1,meta36406__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36407){
var self__ = this;
var _36407__$1 = this;
return self__.meta36406;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36395_SHARP_){
return f1.call(null,(((p1__36395_SHARP_ == null))?null:self__.f.call(null,p1__36395_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36405.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36403","meta36403",-959925481,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36402","cljs.core.async/t_cljs$core$async36402",-1964101683,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36406","meta36406",557341672,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36405.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36405";

cljs.core.async.t_cljs$core$async36405.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async36405");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36405 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36405(map_LT___$1,f__$1,ch__$1,meta36403__$1,___$2,fn1__$1,meta36406){
return (new cljs.core.async.t_cljs$core$async36405(map_LT___$1,f__$1,ch__$1,meta36403__$1,___$2,fn1__$1,meta36406));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36405(self__.map_LT_,self__.f,self__.ch,self__.meta36403,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24860__auto__ = ret;
if(cljs.core.truth_(and__24860__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24860__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36402.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36403","meta36403",-959925481,null)], null);
});

cljs.core.async.t_cljs$core$async36402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36402";

cljs.core.async.t_cljs$core$async36402.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async36402");
});

cljs.core.async.__GT_t_cljs$core$async36402 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36402(map_LT___$1,f__$1,ch__$1,meta36403){
return (new cljs.core.async.t_cljs$core$async36402(map_LT___$1,f__$1,ch__$1,meta36403));
});

}

return (new cljs.core.async.t_cljs$core$async36402(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36411 = (function (map_GT_,f,ch,meta36412){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36412 = meta36412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36413,meta36412__$1){
var self__ = this;
var _36413__$1 = this;
return (new cljs.core.async.t_cljs$core$async36411(self__.map_GT_,self__.f,self__.ch,meta36412__$1));
});

cljs.core.async.t_cljs$core$async36411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36413){
var self__ = this;
var _36413__$1 = this;
return self__.meta36412;
});

cljs.core.async.t_cljs$core$async36411.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36411.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36411.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36412","meta36412",-1642056479,null)], null);
});

cljs.core.async.t_cljs$core$async36411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36411";

cljs.core.async.t_cljs$core$async36411.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async36411");
});

cljs.core.async.__GT_t_cljs$core$async36411 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36411(map_GT___$1,f__$1,ch__$1,meta36412){
return (new cljs.core.async.t_cljs$core$async36411(map_GT___$1,f__$1,ch__$1,meta36412));
});

}

return (new cljs.core.async.t_cljs$core$async36411(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36417 = (function (filter_GT_,p,ch,meta36418){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36418 = meta36418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36419,meta36418__$1){
var self__ = this;
var _36419__$1 = this;
return (new cljs.core.async.t_cljs$core$async36417(self__.filter_GT_,self__.p,self__.ch,meta36418__$1));
});

cljs.core.async.t_cljs$core$async36417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36419){
var self__ = this;
var _36419__$1 = this;
return self__.meta36418;
});

cljs.core.async.t_cljs$core$async36417.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36417.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36417.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36417.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36418","meta36418",-1966030719,null)], null);
});

cljs.core.async.t_cljs$core$async36417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36417";

cljs.core.async.t_cljs$core$async36417.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async36417");
});

cljs.core.async.__GT_t_cljs$core$async36417 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36417(filter_GT___$1,p__$1,ch__$1,meta36418){
return (new cljs.core.async.t_cljs$core$async36417(filter_GT___$1,p__$1,ch__$1,meta36418));
});

}

return (new cljs.core.async.t_cljs$core$async36417(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args36420 = [];
var len__25947__auto___36464 = arguments.length;
var i__25948__auto___36465 = (0);
while(true){
if((i__25948__auto___36465 < len__25947__auto___36464)){
args36420.push((arguments[i__25948__auto___36465]));

var G__36466 = (i__25948__auto___36465 + (1));
i__25948__auto___36465 = G__36466;
continue;
} else {
}
break;
}

var G__36422 = args36420.length;
switch (G__36422) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36420.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27175__auto___36468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___36468,out){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___36468,out){
return (function (state_36443){
var state_val_36444 = (state_36443[(1)]);
if((state_val_36444 === (7))){
var inst_36439 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
var statearr_36445_36469 = state_36443__$1;
(statearr_36445_36469[(2)] = inst_36439);

(statearr_36445_36469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (1))){
var state_36443__$1 = state_36443;
var statearr_36446_36470 = state_36443__$1;
(statearr_36446_36470[(2)] = null);

(statearr_36446_36470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (4))){
var inst_36425 = (state_36443[(7)]);
var inst_36425__$1 = (state_36443[(2)]);
var inst_36426 = (inst_36425__$1 == null);
var state_36443__$1 = (function (){var statearr_36447 = state_36443;
(statearr_36447[(7)] = inst_36425__$1);

return statearr_36447;
})();
if(cljs.core.truth_(inst_36426)){
var statearr_36448_36471 = state_36443__$1;
(statearr_36448_36471[(1)] = (5));

} else {
var statearr_36449_36472 = state_36443__$1;
(statearr_36449_36472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (6))){
var inst_36425 = (state_36443[(7)]);
var inst_36430 = p.call(null,inst_36425);
var state_36443__$1 = state_36443;
if(cljs.core.truth_(inst_36430)){
var statearr_36450_36473 = state_36443__$1;
(statearr_36450_36473[(1)] = (8));

} else {
var statearr_36451_36474 = state_36443__$1;
(statearr_36451_36474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (3))){
var inst_36441 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36443__$1,inst_36441);
} else {
if((state_val_36444 === (2))){
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36443__$1,(4),ch);
} else {
if((state_val_36444 === (11))){
var inst_36433 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
var statearr_36452_36475 = state_36443__$1;
(statearr_36452_36475[(2)] = inst_36433);

(statearr_36452_36475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (9))){
var state_36443__$1 = state_36443;
var statearr_36453_36476 = state_36443__$1;
(statearr_36453_36476[(2)] = null);

(statearr_36453_36476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (5))){
var inst_36428 = cljs.core.async.close_BANG_.call(null,out);
var state_36443__$1 = state_36443;
var statearr_36454_36477 = state_36443__$1;
(statearr_36454_36477[(2)] = inst_36428);

(statearr_36454_36477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (10))){
var inst_36436 = (state_36443[(2)]);
var state_36443__$1 = (function (){var statearr_36455 = state_36443;
(statearr_36455[(8)] = inst_36436);

return statearr_36455;
})();
var statearr_36456_36478 = state_36443__$1;
(statearr_36456_36478[(2)] = null);

(statearr_36456_36478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36444 === (8))){
var inst_36425 = (state_36443[(7)]);
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36443__$1,(11),out,inst_36425);
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
});})(c__27175__auto___36468,out))
;
return ((function (switch__27154__auto__,c__27175__auto___36468,out){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_36460 = [null,null,null,null,null,null,null,null,null];
(statearr_36460[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_36460[(1)] = (1));

return statearr_36460;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_36443){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_36443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e36461){if((e36461 instanceof Object)){
var ex__27158__auto__ = e36461;
var statearr_36462_36479 = state_36443;
(statearr_36462_36479[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36480 = state_36443;
state_36443 = G__36480;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_36443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_36443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___36468,out))
})();
var state__27177__auto__ = (function (){var statearr_36463 = f__27176__auto__.call(null);
(statearr_36463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___36468);

return statearr_36463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___36468,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36481 = [];
var len__25947__auto___36484 = arguments.length;
var i__25948__auto___36485 = (0);
while(true){
if((i__25948__auto___36485 < len__25947__auto___36484)){
args36481.push((arguments[i__25948__auto___36485]));

var G__36486 = (i__25948__auto___36485 + (1));
i__25948__auto___36485 = G__36486;
continue;
} else {
}
break;
}

var G__36483 = args36481.length;
switch (G__36483) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36481.length)].join('')));

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
var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__){
return (function (state_36653){
var state_val_36654 = (state_36653[(1)]);
if((state_val_36654 === (7))){
var inst_36649 = (state_36653[(2)]);
var state_36653__$1 = state_36653;
var statearr_36655_36696 = state_36653__$1;
(statearr_36655_36696[(2)] = inst_36649);

(statearr_36655_36696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (20))){
var inst_36619 = (state_36653[(7)]);
var inst_36630 = (state_36653[(2)]);
var inst_36631 = cljs.core.next.call(null,inst_36619);
var inst_36605 = inst_36631;
var inst_36606 = null;
var inst_36607 = (0);
var inst_36608 = (0);
var state_36653__$1 = (function (){var statearr_36656 = state_36653;
(statearr_36656[(8)] = inst_36605);

(statearr_36656[(9)] = inst_36607);

(statearr_36656[(10)] = inst_36606);

(statearr_36656[(11)] = inst_36608);

(statearr_36656[(12)] = inst_36630);

return statearr_36656;
})();
var statearr_36657_36697 = state_36653__$1;
(statearr_36657_36697[(2)] = null);

(statearr_36657_36697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (1))){
var state_36653__$1 = state_36653;
var statearr_36658_36698 = state_36653__$1;
(statearr_36658_36698[(2)] = null);

(statearr_36658_36698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (4))){
var inst_36594 = (state_36653[(13)]);
var inst_36594__$1 = (state_36653[(2)]);
var inst_36595 = (inst_36594__$1 == null);
var state_36653__$1 = (function (){var statearr_36659 = state_36653;
(statearr_36659[(13)] = inst_36594__$1);

return statearr_36659;
})();
if(cljs.core.truth_(inst_36595)){
var statearr_36660_36699 = state_36653__$1;
(statearr_36660_36699[(1)] = (5));

} else {
var statearr_36661_36700 = state_36653__$1;
(statearr_36661_36700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (15))){
var state_36653__$1 = state_36653;
var statearr_36665_36701 = state_36653__$1;
(statearr_36665_36701[(2)] = null);

(statearr_36665_36701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (21))){
var state_36653__$1 = state_36653;
var statearr_36666_36702 = state_36653__$1;
(statearr_36666_36702[(2)] = null);

(statearr_36666_36702[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (13))){
var inst_36605 = (state_36653[(8)]);
var inst_36607 = (state_36653[(9)]);
var inst_36606 = (state_36653[(10)]);
var inst_36608 = (state_36653[(11)]);
var inst_36615 = (state_36653[(2)]);
var inst_36616 = (inst_36608 + (1));
var tmp36662 = inst_36605;
var tmp36663 = inst_36607;
var tmp36664 = inst_36606;
var inst_36605__$1 = tmp36662;
var inst_36606__$1 = tmp36664;
var inst_36607__$1 = tmp36663;
var inst_36608__$1 = inst_36616;
var state_36653__$1 = (function (){var statearr_36667 = state_36653;
(statearr_36667[(8)] = inst_36605__$1);

(statearr_36667[(9)] = inst_36607__$1);

(statearr_36667[(10)] = inst_36606__$1);

(statearr_36667[(11)] = inst_36608__$1);

(statearr_36667[(14)] = inst_36615);

return statearr_36667;
})();
var statearr_36668_36703 = state_36653__$1;
(statearr_36668_36703[(2)] = null);

(statearr_36668_36703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (22))){
var state_36653__$1 = state_36653;
var statearr_36669_36704 = state_36653__$1;
(statearr_36669_36704[(2)] = null);

(statearr_36669_36704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (6))){
var inst_36594 = (state_36653[(13)]);
var inst_36603 = f.call(null,inst_36594);
var inst_36604 = cljs.core.seq.call(null,inst_36603);
var inst_36605 = inst_36604;
var inst_36606 = null;
var inst_36607 = (0);
var inst_36608 = (0);
var state_36653__$1 = (function (){var statearr_36670 = state_36653;
(statearr_36670[(8)] = inst_36605);

(statearr_36670[(9)] = inst_36607);

(statearr_36670[(10)] = inst_36606);

(statearr_36670[(11)] = inst_36608);

return statearr_36670;
})();
var statearr_36671_36705 = state_36653__$1;
(statearr_36671_36705[(2)] = null);

(statearr_36671_36705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (17))){
var inst_36619 = (state_36653[(7)]);
var inst_36623 = cljs.core.chunk_first.call(null,inst_36619);
var inst_36624 = cljs.core.chunk_rest.call(null,inst_36619);
var inst_36625 = cljs.core.count.call(null,inst_36623);
var inst_36605 = inst_36624;
var inst_36606 = inst_36623;
var inst_36607 = inst_36625;
var inst_36608 = (0);
var state_36653__$1 = (function (){var statearr_36672 = state_36653;
(statearr_36672[(8)] = inst_36605);

(statearr_36672[(9)] = inst_36607);

(statearr_36672[(10)] = inst_36606);

(statearr_36672[(11)] = inst_36608);

return statearr_36672;
})();
var statearr_36673_36706 = state_36653__$1;
(statearr_36673_36706[(2)] = null);

(statearr_36673_36706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (3))){
var inst_36651 = (state_36653[(2)]);
var state_36653__$1 = state_36653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36653__$1,inst_36651);
} else {
if((state_val_36654 === (12))){
var inst_36639 = (state_36653[(2)]);
var state_36653__$1 = state_36653;
var statearr_36674_36707 = state_36653__$1;
(statearr_36674_36707[(2)] = inst_36639);

(statearr_36674_36707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (2))){
var state_36653__$1 = state_36653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36653__$1,(4),in$);
} else {
if((state_val_36654 === (23))){
var inst_36647 = (state_36653[(2)]);
var state_36653__$1 = state_36653;
var statearr_36675_36708 = state_36653__$1;
(statearr_36675_36708[(2)] = inst_36647);

(statearr_36675_36708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (19))){
var inst_36634 = (state_36653[(2)]);
var state_36653__$1 = state_36653;
var statearr_36676_36709 = state_36653__$1;
(statearr_36676_36709[(2)] = inst_36634);

(statearr_36676_36709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (11))){
var inst_36605 = (state_36653[(8)]);
var inst_36619 = (state_36653[(7)]);
var inst_36619__$1 = cljs.core.seq.call(null,inst_36605);
var state_36653__$1 = (function (){var statearr_36677 = state_36653;
(statearr_36677[(7)] = inst_36619__$1);

return statearr_36677;
})();
if(inst_36619__$1){
var statearr_36678_36710 = state_36653__$1;
(statearr_36678_36710[(1)] = (14));

} else {
var statearr_36679_36711 = state_36653__$1;
(statearr_36679_36711[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (9))){
var inst_36641 = (state_36653[(2)]);
var inst_36642 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36653__$1 = (function (){var statearr_36680 = state_36653;
(statearr_36680[(15)] = inst_36641);

return statearr_36680;
})();
if(cljs.core.truth_(inst_36642)){
var statearr_36681_36712 = state_36653__$1;
(statearr_36681_36712[(1)] = (21));

} else {
var statearr_36682_36713 = state_36653__$1;
(statearr_36682_36713[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (5))){
var inst_36597 = cljs.core.async.close_BANG_.call(null,out);
var state_36653__$1 = state_36653;
var statearr_36683_36714 = state_36653__$1;
(statearr_36683_36714[(2)] = inst_36597);

(statearr_36683_36714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (14))){
var inst_36619 = (state_36653[(7)]);
var inst_36621 = cljs.core.chunked_seq_QMARK_.call(null,inst_36619);
var state_36653__$1 = state_36653;
if(inst_36621){
var statearr_36684_36715 = state_36653__$1;
(statearr_36684_36715[(1)] = (17));

} else {
var statearr_36685_36716 = state_36653__$1;
(statearr_36685_36716[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (16))){
var inst_36637 = (state_36653[(2)]);
var state_36653__$1 = state_36653;
var statearr_36686_36717 = state_36653__$1;
(statearr_36686_36717[(2)] = inst_36637);

(statearr_36686_36717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36654 === (10))){
var inst_36606 = (state_36653[(10)]);
var inst_36608 = (state_36653[(11)]);
var inst_36613 = cljs.core._nth.call(null,inst_36606,inst_36608);
var state_36653__$1 = state_36653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36653__$1,(13),out,inst_36613);
} else {
if((state_val_36654 === (18))){
var inst_36619 = (state_36653[(7)]);
var inst_36628 = cljs.core.first.call(null,inst_36619);
var state_36653__$1 = state_36653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36653__$1,(20),out,inst_36628);
} else {
if((state_val_36654 === (8))){
var inst_36607 = (state_36653[(9)]);
var inst_36608 = (state_36653[(11)]);
var inst_36610 = (inst_36608 < inst_36607);
var inst_36611 = inst_36610;
var state_36653__$1 = state_36653;
if(cljs.core.truth_(inst_36611)){
var statearr_36687_36718 = state_36653__$1;
(statearr_36687_36718[(1)] = (10));

} else {
var statearr_36688_36719 = state_36653__$1;
(statearr_36688_36719[(1)] = (11));

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
});})(c__27175__auto__))
;
return ((function (switch__27154__auto__,c__27175__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27155__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27155__auto____0 = (function (){
var statearr_36692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36692[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27155__auto__);

(statearr_36692[(1)] = (1));

return statearr_36692;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27155__auto____1 = (function (state_36653){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_36653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e36693){if((e36693 instanceof Object)){
var ex__27158__auto__ = e36693;
var statearr_36694_36720 = state_36653;
(statearr_36694_36720[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36721 = state_36653;
state_36653 = G__36721;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27155__auto__ = function(state_36653){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27155__auto____1.call(this,state_36653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27155__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27155__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__))
})();
var state__27177__auto__ = (function (){var statearr_36695 = f__27176__auto__.call(null);
(statearr_36695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_36695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__))
);

return c__27175__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36722 = [];
var len__25947__auto___36725 = arguments.length;
var i__25948__auto___36726 = (0);
while(true){
if((i__25948__auto___36726 < len__25947__auto___36725)){
args36722.push((arguments[i__25948__auto___36726]));

var G__36727 = (i__25948__auto___36726 + (1));
i__25948__auto___36726 = G__36727;
continue;
} else {
}
break;
}

var G__36724 = args36722.length;
switch (G__36724) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36722.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args36729 = [];
var len__25947__auto___36732 = arguments.length;
var i__25948__auto___36733 = (0);
while(true){
if((i__25948__auto___36733 < len__25947__auto___36732)){
args36729.push((arguments[i__25948__auto___36733]));

var G__36734 = (i__25948__auto___36733 + (1));
i__25948__auto___36733 = G__36734;
continue;
} else {
}
break;
}

var G__36731 = args36729.length;
switch (G__36731) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36729.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args36736 = [];
var len__25947__auto___36787 = arguments.length;
var i__25948__auto___36788 = (0);
while(true){
if((i__25948__auto___36788 < len__25947__auto___36787)){
args36736.push((arguments[i__25948__auto___36788]));

var G__36789 = (i__25948__auto___36788 + (1));
i__25948__auto___36788 = G__36789;
continue;
} else {
}
break;
}

var G__36738 = args36736.length;
switch (G__36738) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36736.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27175__auto___36791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___36791,out){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___36791,out){
return (function (state_36762){
var state_val_36763 = (state_36762[(1)]);
if((state_val_36763 === (7))){
var inst_36757 = (state_36762[(2)]);
var state_36762__$1 = state_36762;
var statearr_36764_36792 = state_36762__$1;
(statearr_36764_36792[(2)] = inst_36757);

(statearr_36764_36792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (1))){
var inst_36739 = null;
var state_36762__$1 = (function (){var statearr_36765 = state_36762;
(statearr_36765[(7)] = inst_36739);

return statearr_36765;
})();
var statearr_36766_36793 = state_36762__$1;
(statearr_36766_36793[(2)] = null);

(statearr_36766_36793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (4))){
var inst_36742 = (state_36762[(8)]);
var inst_36742__$1 = (state_36762[(2)]);
var inst_36743 = (inst_36742__$1 == null);
var inst_36744 = cljs.core.not.call(null,inst_36743);
var state_36762__$1 = (function (){var statearr_36767 = state_36762;
(statearr_36767[(8)] = inst_36742__$1);

return statearr_36767;
})();
if(inst_36744){
var statearr_36768_36794 = state_36762__$1;
(statearr_36768_36794[(1)] = (5));

} else {
var statearr_36769_36795 = state_36762__$1;
(statearr_36769_36795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (6))){
var state_36762__$1 = state_36762;
var statearr_36770_36796 = state_36762__$1;
(statearr_36770_36796[(2)] = null);

(statearr_36770_36796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (3))){
var inst_36759 = (state_36762[(2)]);
var inst_36760 = cljs.core.async.close_BANG_.call(null,out);
var state_36762__$1 = (function (){var statearr_36771 = state_36762;
(statearr_36771[(9)] = inst_36759);

return statearr_36771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36762__$1,inst_36760);
} else {
if((state_val_36763 === (2))){
var state_36762__$1 = state_36762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36762__$1,(4),ch);
} else {
if((state_val_36763 === (11))){
var inst_36742 = (state_36762[(8)]);
var inst_36751 = (state_36762[(2)]);
var inst_36739 = inst_36742;
var state_36762__$1 = (function (){var statearr_36772 = state_36762;
(statearr_36772[(10)] = inst_36751);

(statearr_36772[(7)] = inst_36739);

return statearr_36772;
})();
var statearr_36773_36797 = state_36762__$1;
(statearr_36773_36797[(2)] = null);

(statearr_36773_36797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (9))){
var inst_36742 = (state_36762[(8)]);
var state_36762__$1 = state_36762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36762__$1,(11),out,inst_36742);
} else {
if((state_val_36763 === (5))){
var inst_36739 = (state_36762[(7)]);
var inst_36742 = (state_36762[(8)]);
var inst_36746 = cljs.core._EQ_.call(null,inst_36742,inst_36739);
var state_36762__$1 = state_36762;
if(inst_36746){
var statearr_36775_36798 = state_36762__$1;
(statearr_36775_36798[(1)] = (8));

} else {
var statearr_36776_36799 = state_36762__$1;
(statearr_36776_36799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (10))){
var inst_36754 = (state_36762[(2)]);
var state_36762__$1 = state_36762;
var statearr_36777_36800 = state_36762__$1;
(statearr_36777_36800[(2)] = inst_36754);

(statearr_36777_36800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36763 === (8))){
var inst_36739 = (state_36762[(7)]);
var tmp36774 = inst_36739;
var inst_36739__$1 = tmp36774;
var state_36762__$1 = (function (){var statearr_36778 = state_36762;
(statearr_36778[(7)] = inst_36739__$1);

return statearr_36778;
})();
var statearr_36779_36801 = state_36762__$1;
(statearr_36779_36801[(2)] = null);

(statearr_36779_36801[(1)] = (2));


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
});})(c__27175__auto___36791,out))
;
return ((function (switch__27154__auto__,c__27175__auto___36791,out){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_36783 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36783[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_36783[(1)] = (1));

return statearr_36783;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_36762){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_36762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e36784){if((e36784 instanceof Object)){
var ex__27158__auto__ = e36784;
var statearr_36785_36802 = state_36762;
(statearr_36785_36802[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36803 = state_36762;
state_36762 = G__36803;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_36762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_36762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___36791,out))
})();
var state__27177__auto__ = (function (){var statearr_36786 = f__27176__auto__.call(null);
(statearr_36786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___36791);

return statearr_36786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___36791,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36804 = [];
var len__25947__auto___36874 = arguments.length;
var i__25948__auto___36875 = (0);
while(true){
if((i__25948__auto___36875 < len__25947__auto___36874)){
args36804.push((arguments[i__25948__auto___36875]));

var G__36876 = (i__25948__auto___36875 + (1));
i__25948__auto___36875 = G__36876;
continue;
} else {
}
break;
}

var G__36806 = args36804.length;
switch (G__36806) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36804.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27175__auto___36878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___36878,out){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___36878,out){
return (function (state_36844){
var state_val_36845 = (state_36844[(1)]);
if((state_val_36845 === (7))){
var inst_36840 = (state_36844[(2)]);
var state_36844__$1 = state_36844;
var statearr_36846_36879 = state_36844__$1;
(statearr_36846_36879[(2)] = inst_36840);

(statearr_36846_36879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (1))){
var inst_36807 = (new Array(n));
var inst_36808 = inst_36807;
var inst_36809 = (0);
var state_36844__$1 = (function (){var statearr_36847 = state_36844;
(statearr_36847[(7)] = inst_36808);

(statearr_36847[(8)] = inst_36809);

return statearr_36847;
})();
var statearr_36848_36880 = state_36844__$1;
(statearr_36848_36880[(2)] = null);

(statearr_36848_36880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (4))){
var inst_36812 = (state_36844[(9)]);
var inst_36812__$1 = (state_36844[(2)]);
var inst_36813 = (inst_36812__$1 == null);
var inst_36814 = cljs.core.not.call(null,inst_36813);
var state_36844__$1 = (function (){var statearr_36849 = state_36844;
(statearr_36849[(9)] = inst_36812__$1);

return statearr_36849;
})();
if(inst_36814){
var statearr_36850_36881 = state_36844__$1;
(statearr_36850_36881[(1)] = (5));

} else {
var statearr_36851_36882 = state_36844__$1;
(statearr_36851_36882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (15))){
var inst_36834 = (state_36844[(2)]);
var state_36844__$1 = state_36844;
var statearr_36852_36883 = state_36844__$1;
(statearr_36852_36883[(2)] = inst_36834);

(statearr_36852_36883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (13))){
var state_36844__$1 = state_36844;
var statearr_36853_36884 = state_36844__$1;
(statearr_36853_36884[(2)] = null);

(statearr_36853_36884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (6))){
var inst_36809 = (state_36844[(8)]);
var inst_36830 = (inst_36809 > (0));
var state_36844__$1 = state_36844;
if(cljs.core.truth_(inst_36830)){
var statearr_36854_36885 = state_36844__$1;
(statearr_36854_36885[(1)] = (12));

} else {
var statearr_36855_36886 = state_36844__$1;
(statearr_36855_36886[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (3))){
var inst_36842 = (state_36844[(2)]);
var state_36844__$1 = state_36844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36844__$1,inst_36842);
} else {
if((state_val_36845 === (12))){
var inst_36808 = (state_36844[(7)]);
var inst_36832 = cljs.core.vec.call(null,inst_36808);
var state_36844__$1 = state_36844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36844__$1,(15),out,inst_36832);
} else {
if((state_val_36845 === (2))){
var state_36844__$1 = state_36844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36844__$1,(4),ch);
} else {
if((state_val_36845 === (11))){
var inst_36824 = (state_36844[(2)]);
var inst_36825 = (new Array(n));
var inst_36808 = inst_36825;
var inst_36809 = (0);
var state_36844__$1 = (function (){var statearr_36856 = state_36844;
(statearr_36856[(10)] = inst_36824);

(statearr_36856[(7)] = inst_36808);

(statearr_36856[(8)] = inst_36809);

return statearr_36856;
})();
var statearr_36857_36887 = state_36844__$1;
(statearr_36857_36887[(2)] = null);

(statearr_36857_36887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (9))){
var inst_36808 = (state_36844[(7)]);
var inst_36822 = cljs.core.vec.call(null,inst_36808);
var state_36844__$1 = state_36844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36844__$1,(11),out,inst_36822);
} else {
if((state_val_36845 === (5))){
var inst_36808 = (state_36844[(7)]);
var inst_36809 = (state_36844[(8)]);
var inst_36812 = (state_36844[(9)]);
var inst_36817 = (state_36844[(11)]);
var inst_36816 = (inst_36808[inst_36809] = inst_36812);
var inst_36817__$1 = (inst_36809 + (1));
var inst_36818 = (inst_36817__$1 < n);
var state_36844__$1 = (function (){var statearr_36858 = state_36844;
(statearr_36858[(12)] = inst_36816);

(statearr_36858[(11)] = inst_36817__$1);

return statearr_36858;
})();
if(cljs.core.truth_(inst_36818)){
var statearr_36859_36888 = state_36844__$1;
(statearr_36859_36888[(1)] = (8));

} else {
var statearr_36860_36889 = state_36844__$1;
(statearr_36860_36889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (14))){
var inst_36837 = (state_36844[(2)]);
var inst_36838 = cljs.core.async.close_BANG_.call(null,out);
var state_36844__$1 = (function (){var statearr_36862 = state_36844;
(statearr_36862[(13)] = inst_36837);

return statearr_36862;
})();
var statearr_36863_36890 = state_36844__$1;
(statearr_36863_36890[(2)] = inst_36838);

(statearr_36863_36890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (10))){
var inst_36828 = (state_36844[(2)]);
var state_36844__$1 = state_36844;
var statearr_36864_36891 = state_36844__$1;
(statearr_36864_36891[(2)] = inst_36828);

(statearr_36864_36891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36845 === (8))){
var inst_36808 = (state_36844[(7)]);
var inst_36817 = (state_36844[(11)]);
var tmp36861 = inst_36808;
var inst_36808__$1 = tmp36861;
var inst_36809 = inst_36817;
var state_36844__$1 = (function (){var statearr_36865 = state_36844;
(statearr_36865[(7)] = inst_36808__$1);

(statearr_36865[(8)] = inst_36809);

return statearr_36865;
})();
var statearr_36866_36892 = state_36844__$1;
(statearr_36866_36892[(2)] = null);

(statearr_36866_36892[(1)] = (2));


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
});})(c__27175__auto___36878,out))
;
return ((function (switch__27154__auto__,c__27175__auto___36878,out){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_36870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36870[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_36870[(1)] = (1));

return statearr_36870;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_36844){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_36844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e36871){if((e36871 instanceof Object)){
var ex__27158__auto__ = e36871;
var statearr_36872_36893 = state_36844;
(statearr_36872_36893[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36894 = state_36844;
state_36844 = G__36894;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_36844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_36844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___36878,out))
})();
var state__27177__auto__ = (function (){var statearr_36873 = f__27176__auto__.call(null);
(statearr_36873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___36878);

return statearr_36873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___36878,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36895 = [];
var len__25947__auto___36969 = arguments.length;
var i__25948__auto___36970 = (0);
while(true){
if((i__25948__auto___36970 < len__25947__auto___36969)){
args36895.push((arguments[i__25948__auto___36970]));

var G__36971 = (i__25948__auto___36970 + (1));
i__25948__auto___36970 = G__36971;
continue;
} else {
}
break;
}

var G__36897 = args36895.length;
switch (G__36897) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36895.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27175__auto___36973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___36973,out){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___36973,out){
return (function (state_36939){
var state_val_36940 = (state_36939[(1)]);
if((state_val_36940 === (7))){
var inst_36935 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_36941_36974 = state_36939__$1;
(statearr_36941_36974[(2)] = inst_36935);

(statearr_36941_36974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (1))){
var inst_36898 = [];
var inst_36899 = inst_36898;
var inst_36900 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36939__$1 = (function (){var statearr_36942 = state_36939;
(statearr_36942[(7)] = inst_36900);

(statearr_36942[(8)] = inst_36899);

return statearr_36942;
})();
var statearr_36943_36975 = state_36939__$1;
(statearr_36943_36975[(2)] = null);

(statearr_36943_36975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (4))){
var inst_36903 = (state_36939[(9)]);
var inst_36903__$1 = (state_36939[(2)]);
var inst_36904 = (inst_36903__$1 == null);
var inst_36905 = cljs.core.not.call(null,inst_36904);
var state_36939__$1 = (function (){var statearr_36944 = state_36939;
(statearr_36944[(9)] = inst_36903__$1);

return statearr_36944;
})();
if(inst_36905){
var statearr_36945_36976 = state_36939__$1;
(statearr_36945_36976[(1)] = (5));

} else {
var statearr_36946_36977 = state_36939__$1;
(statearr_36946_36977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (15))){
var inst_36929 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_36947_36978 = state_36939__$1;
(statearr_36947_36978[(2)] = inst_36929);

(statearr_36947_36978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (13))){
var state_36939__$1 = state_36939;
var statearr_36948_36979 = state_36939__$1;
(statearr_36948_36979[(2)] = null);

(statearr_36948_36979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (6))){
var inst_36899 = (state_36939[(8)]);
var inst_36924 = inst_36899.length;
var inst_36925 = (inst_36924 > (0));
var state_36939__$1 = state_36939;
if(cljs.core.truth_(inst_36925)){
var statearr_36949_36980 = state_36939__$1;
(statearr_36949_36980[(1)] = (12));

} else {
var statearr_36950_36981 = state_36939__$1;
(statearr_36950_36981[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (3))){
var inst_36937 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36939__$1,inst_36937);
} else {
if((state_val_36940 === (12))){
var inst_36899 = (state_36939[(8)]);
var inst_36927 = cljs.core.vec.call(null,inst_36899);
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36939__$1,(15),out,inst_36927);
} else {
if((state_val_36940 === (2))){
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36939__$1,(4),ch);
} else {
if((state_val_36940 === (11))){
var inst_36907 = (state_36939[(10)]);
var inst_36903 = (state_36939[(9)]);
var inst_36917 = (state_36939[(2)]);
var inst_36918 = [];
var inst_36919 = inst_36918.push(inst_36903);
var inst_36899 = inst_36918;
var inst_36900 = inst_36907;
var state_36939__$1 = (function (){var statearr_36951 = state_36939;
(statearr_36951[(7)] = inst_36900);

(statearr_36951[(11)] = inst_36919);

(statearr_36951[(12)] = inst_36917);

(statearr_36951[(8)] = inst_36899);

return statearr_36951;
})();
var statearr_36952_36982 = state_36939__$1;
(statearr_36952_36982[(2)] = null);

(statearr_36952_36982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (9))){
var inst_36899 = (state_36939[(8)]);
var inst_36915 = cljs.core.vec.call(null,inst_36899);
var state_36939__$1 = state_36939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36939__$1,(11),out,inst_36915);
} else {
if((state_val_36940 === (5))){
var inst_36900 = (state_36939[(7)]);
var inst_36907 = (state_36939[(10)]);
var inst_36903 = (state_36939[(9)]);
var inst_36907__$1 = f.call(null,inst_36903);
var inst_36908 = cljs.core._EQ_.call(null,inst_36907__$1,inst_36900);
var inst_36909 = cljs.core.keyword_identical_QMARK_.call(null,inst_36900,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36910 = (inst_36908) || (inst_36909);
var state_36939__$1 = (function (){var statearr_36953 = state_36939;
(statearr_36953[(10)] = inst_36907__$1);

return statearr_36953;
})();
if(cljs.core.truth_(inst_36910)){
var statearr_36954_36983 = state_36939__$1;
(statearr_36954_36983[(1)] = (8));

} else {
var statearr_36955_36984 = state_36939__$1;
(statearr_36955_36984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (14))){
var inst_36932 = (state_36939[(2)]);
var inst_36933 = cljs.core.async.close_BANG_.call(null,out);
var state_36939__$1 = (function (){var statearr_36957 = state_36939;
(statearr_36957[(13)] = inst_36932);

return statearr_36957;
})();
var statearr_36958_36985 = state_36939__$1;
(statearr_36958_36985[(2)] = inst_36933);

(statearr_36958_36985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (10))){
var inst_36922 = (state_36939[(2)]);
var state_36939__$1 = state_36939;
var statearr_36959_36986 = state_36939__$1;
(statearr_36959_36986[(2)] = inst_36922);

(statearr_36959_36986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36940 === (8))){
var inst_36899 = (state_36939[(8)]);
var inst_36907 = (state_36939[(10)]);
var inst_36903 = (state_36939[(9)]);
var inst_36912 = inst_36899.push(inst_36903);
var tmp36956 = inst_36899;
var inst_36899__$1 = tmp36956;
var inst_36900 = inst_36907;
var state_36939__$1 = (function (){var statearr_36960 = state_36939;
(statearr_36960[(7)] = inst_36900);

(statearr_36960[(14)] = inst_36912);

(statearr_36960[(8)] = inst_36899__$1);

return statearr_36960;
})();
var statearr_36961_36987 = state_36939__$1;
(statearr_36961_36987[(2)] = null);

(statearr_36961_36987[(1)] = (2));


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
});})(c__27175__auto___36973,out))
;
return ((function (switch__27154__auto__,c__27175__auto___36973,out){
return (function() {
var cljs$core$async$state_machine__27155__auto__ = null;
var cljs$core$async$state_machine__27155__auto____0 = (function (){
var statearr_36965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36965[(0)] = cljs$core$async$state_machine__27155__auto__);

(statearr_36965[(1)] = (1));

return statearr_36965;
});
var cljs$core$async$state_machine__27155__auto____1 = (function (state_36939){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_36939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e36966){if((e36966 instanceof Object)){
var ex__27158__auto__ = e36966;
var statearr_36967_36988 = state_36939;
(statearr_36967_36988[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36989 = state_36939;
state_36939 = G__36989;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
cljs$core$async$state_machine__27155__auto__ = function(state_36939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27155__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27155__auto____1.call(this,state_36939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27155__auto____0;
cljs$core$async$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27155__auto____1;
return cljs$core$async$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___36973,out))
})();
var state__27177__auto__ = (function (){var statearr_36968 = f__27176__auto__.call(null);
(statearr_36968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___36973);

return statearr_36968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___36973,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1490248907689