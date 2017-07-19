// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39825 = arguments.length;
var i__25948__auto___39826 = (0);
while(true){
if((i__25948__auto___39826 < len__25947__auto___39825)){
args__25954__auto__.push((arguments[i__25948__auto___39826]));

var G__39827 = (i__25948__auto___39826 + (1));
i__25948__auto___39826 = G__39827;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq39824){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39824));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39829 = arguments.length;
var i__25948__auto___39830 = (0);
while(true){
if((i__25948__auto___39830 < len__25947__auto___39829)){
args__25954__auto__.push((arguments[i__25948__auto___39830]));

var G__39831 = (i__25948__auto___39830 + (1));
i__25948__auto___39830 = G__39831;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq39828){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39828));
});

var g_QMARK__39832 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_39833 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__39832){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__39832))
,null));
var mkg_39834 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__39832,g_39833){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__39832,g_39833))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__39832,g_39833,mkg_39834){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__39832).call(null,x);
});})(g_QMARK__39832,g_39833,mkg_39834))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__39832,g_39833,mkg_39834){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_39834).call(null,gfn);
});})(g_QMARK__39832,g_39833,mkg_39834))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__39832,g_39833,mkg_39834){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_39833).call(null,generator);
});})(g_QMARK__39832,g_39833,mkg_39834))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30556__auto___39853 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__30556__auto___39853){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39854 = arguments.length;
var i__25948__auto___39855 = (0);
while(true){
if((i__25948__auto___39855 < len__25947__auto___39854)){
args__25954__auto__.push((arguments[i__25948__auto___39855]));

var G__39856 = (i__25948__auto___39855 + (1));
i__25948__auto___39855 = G__39856;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39853))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39853){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39853),args);
});})(g__30556__auto___39853))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__30556__auto___39853){
return (function (seq39835){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39835));
});})(g__30556__auto___39853))
;


var g__30556__auto___39857 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__30556__auto___39857){
return (function cljs$spec$impl$gen$list(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39858 = arguments.length;
var i__25948__auto___39859 = (0);
while(true){
if((i__25948__auto___39859 < len__25947__auto___39858)){
args__25954__auto__.push((arguments[i__25948__auto___39859]));

var G__39860 = (i__25948__auto___39859 + (1));
i__25948__auto___39859 = G__39860;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39857))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39857){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39857),args);
});})(g__30556__auto___39857))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__30556__auto___39857){
return (function (seq39836){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39836));
});})(g__30556__auto___39857))
;


var g__30556__auto___39861 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__30556__auto___39861){
return (function cljs$spec$impl$gen$map(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39862 = arguments.length;
var i__25948__auto___39863 = (0);
while(true){
if((i__25948__auto___39863 < len__25947__auto___39862)){
args__25954__auto__.push((arguments[i__25948__auto___39863]));

var G__39864 = (i__25948__auto___39863 + (1));
i__25948__auto___39863 = G__39864;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39861))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39861){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39861),args);
});})(g__30556__auto___39861))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__30556__auto___39861){
return (function (seq39837){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39837));
});})(g__30556__auto___39861))
;


var g__30556__auto___39865 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__30556__auto___39865){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39866 = arguments.length;
var i__25948__auto___39867 = (0);
while(true){
if((i__25948__auto___39867 < len__25947__auto___39866)){
args__25954__auto__.push((arguments[i__25948__auto___39867]));

var G__39868 = (i__25948__auto___39867 + (1));
i__25948__auto___39867 = G__39868;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39865))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39865){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39865),args);
});})(g__30556__auto___39865))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__30556__auto___39865){
return (function (seq39838){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39838));
});})(g__30556__auto___39865))
;


var g__30556__auto___39869 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__30556__auto___39869){
return (function cljs$spec$impl$gen$set(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39870 = arguments.length;
var i__25948__auto___39871 = (0);
while(true){
if((i__25948__auto___39871 < len__25947__auto___39870)){
args__25954__auto__.push((arguments[i__25948__auto___39871]));

var G__39872 = (i__25948__auto___39871 + (1));
i__25948__auto___39871 = G__39872;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39869))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39869){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39869),args);
});})(g__30556__auto___39869))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__30556__auto___39869){
return (function (seq39839){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39839));
});})(g__30556__auto___39869))
;


var g__30556__auto___39873 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__30556__auto___39873){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39874 = arguments.length;
var i__25948__auto___39875 = (0);
while(true){
if((i__25948__auto___39875 < len__25947__auto___39874)){
args__25954__auto__.push((arguments[i__25948__auto___39875]));

var G__39876 = (i__25948__auto___39875 + (1));
i__25948__auto___39875 = G__39876;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39873))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39873){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39873),args);
});})(g__30556__auto___39873))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__30556__auto___39873){
return (function (seq39840){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39840));
});})(g__30556__auto___39873))
;


var g__30556__auto___39877 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__30556__auto___39877){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39878 = arguments.length;
var i__25948__auto___39879 = (0);
while(true){
if((i__25948__auto___39879 < len__25947__auto___39878)){
args__25954__auto__.push((arguments[i__25948__auto___39879]));

var G__39880 = (i__25948__auto___39879 + (1));
i__25948__auto___39879 = G__39880;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39877))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39877){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39877),args);
});})(g__30556__auto___39877))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__30556__auto___39877){
return (function (seq39841){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39841));
});})(g__30556__auto___39877))
;


var g__30556__auto___39881 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__30556__auto___39881){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39882 = arguments.length;
var i__25948__auto___39883 = (0);
while(true){
if((i__25948__auto___39883 < len__25947__auto___39882)){
args__25954__auto__.push((arguments[i__25948__auto___39883]));

var G__39884 = (i__25948__auto___39883 + (1));
i__25948__auto___39883 = G__39884;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39881))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39881){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39881),args);
});})(g__30556__auto___39881))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__30556__auto___39881){
return (function (seq39842){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39842));
});})(g__30556__auto___39881))
;


var g__30556__auto___39885 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__30556__auto___39885){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39886 = arguments.length;
var i__25948__auto___39887 = (0);
while(true){
if((i__25948__auto___39887 < len__25947__auto___39886)){
args__25954__auto__.push((arguments[i__25948__auto___39887]));

var G__39888 = (i__25948__auto___39887 + (1));
i__25948__auto___39887 = G__39888;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39885))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39885){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39885),args);
});})(g__30556__auto___39885))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__30556__auto___39885){
return (function (seq39843){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39843));
});})(g__30556__auto___39885))
;


var g__30556__auto___39889 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__30556__auto___39889){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39890 = arguments.length;
var i__25948__auto___39891 = (0);
while(true){
if((i__25948__auto___39891 < len__25947__auto___39890)){
args__25954__auto__.push((arguments[i__25948__auto___39891]));

var G__39892 = (i__25948__auto___39891 + (1));
i__25948__auto___39891 = G__39892;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39889))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39889){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39889),args);
});})(g__30556__auto___39889))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__30556__auto___39889){
return (function (seq39844){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39844));
});})(g__30556__auto___39889))
;


var g__30556__auto___39893 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__30556__auto___39893){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39894 = arguments.length;
var i__25948__auto___39895 = (0);
while(true){
if((i__25948__auto___39895 < len__25947__auto___39894)){
args__25954__auto__.push((arguments[i__25948__auto___39895]));

var G__39896 = (i__25948__auto___39895 + (1));
i__25948__auto___39895 = G__39896;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39893))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39893){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39893),args);
});})(g__30556__auto___39893))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__30556__auto___39893){
return (function (seq39845){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39845));
});})(g__30556__auto___39893))
;


var g__30556__auto___39897 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__30556__auto___39897){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39898 = arguments.length;
var i__25948__auto___39899 = (0);
while(true){
if((i__25948__auto___39899 < len__25947__auto___39898)){
args__25954__auto__.push((arguments[i__25948__auto___39899]));

var G__39900 = (i__25948__auto___39899 + (1));
i__25948__auto___39899 = G__39900;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39897))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39897){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39897),args);
});})(g__30556__auto___39897))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__30556__auto___39897){
return (function (seq39846){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39846));
});})(g__30556__auto___39897))
;


var g__30556__auto___39901 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__30556__auto___39901){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39902 = arguments.length;
var i__25948__auto___39903 = (0);
while(true){
if((i__25948__auto___39903 < len__25947__auto___39902)){
args__25954__auto__.push((arguments[i__25948__auto___39903]));

var G__39904 = (i__25948__auto___39903 + (1));
i__25948__auto___39903 = G__39904;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39901))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39901){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39901),args);
});})(g__30556__auto___39901))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__30556__auto___39901){
return (function (seq39847){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39847));
});})(g__30556__auto___39901))
;


var g__30556__auto___39905 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__30556__auto___39905){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39906 = arguments.length;
var i__25948__auto___39907 = (0);
while(true){
if((i__25948__auto___39907 < len__25947__auto___39906)){
args__25954__auto__.push((arguments[i__25948__auto___39907]));

var G__39908 = (i__25948__auto___39907 + (1));
i__25948__auto___39907 = G__39908;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39905))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39905){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39905),args);
});})(g__30556__auto___39905))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__30556__auto___39905){
return (function (seq39848){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39848));
});})(g__30556__auto___39905))
;


var g__30556__auto___39909 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__30556__auto___39909){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39910 = arguments.length;
var i__25948__auto___39911 = (0);
while(true){
if((i__25948__auto___39911 < len__25947__auto___39910)){
args__25954__auto__.push((arguments[i__25948__auto___39911]));

var G__39912 = (i__25948__auto___39911 + (1));
i__25948__auto___39911 = G__39912;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39909))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39909){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39909),args);
});})(g__30556__auto___39909))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__30556__auto___39909){
return (function (seq39849){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39849));
});})(g__30556__auto___39909))
;


var g__30556__auto___39913 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__30556__auto___39913){
return (function cljs$spec$impl$gen$return(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39914 = arguments.length;
var i__25948__auto___39915 = (0);
while(true){
if((i__25948__auto___39915 < len__25947__auto___39914)){
args__25954__auto__.push((arguments[i__25948__auto___39915]));

var G__39916 = (i__25948__auto___39915 + (1));
i__25948__auto___39915 = G__39916;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39913))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39913){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39913),args);
});})(g__30556__auto___39913))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__30556__auto___39913){
return (function (seq39850){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39850));
});})(g__30556__auto___39913))
;


var g__30556__auto___39917 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__30556__auto___39917){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39918 = arguments.length;
var i__25948__auto___39919 = (0);
while(true){
if((i__25948__auto___39919 < len__25947__auto___39918)){
args__25954__auto__.push((arguments[i__25948__auto___39919]));

var G__39920 = (i__25948__auto___39919 + (1));
i__25948__auto___39919 = G__39920;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39917))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39917){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39917),args);
});})(g__30556__auto___39917))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30556__auto___39917){
return (function (seq39851){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39851));
});})(g__30556__auto___39917))
;


var g__30556__auto___39921 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__30556__auto___39921){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39922 = arguments.length;
var i__25948__auto___39923 = (0);
while(true){
if((i__25948__auto___39923 < len__25947__auto___39922)){
args__25954__auto__.push((arguments[i__25948__auto___39923]));

var G__39924 = (i__25948__auto___39923 + (1));
i__25948__auto___39923 = G__39924;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30556__auto___39921))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30556__auto___39921){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30556__auto___39921),args);
});})(g__30556__auto___39921))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__30556__auto___39921){
return (function (seq39852){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39852));
});})(g__30556__auto___39921))
;

var g__30569__auto___39946 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__30569__auto___39946){
return (function cljs$spec$impl$gen$any(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39947 = arguments.length;
var i__25948__auto___39948 = (0);
while(true){
if((i__25948__auto___39948 < len__25947__auto___39947)){
args__25954__auto__.push((arguments[i__25948__auto___39948]));

var G__39949 = (i__25948__auto___39948 + (1));
i__25948__auto___39948 = G__39949;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39946))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39946){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39946);
});})(g__30569__auto___39946))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__30569__auto___39946){
return (function (seq39925){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39925));
});})(g__30569__auto___39946))
;


var g__30569__auto___39950 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__30569__auto___39950){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39951 = arguments.length;
var i__25948__auto___39952 = (0);
while(true){
if((i__25948__auto___39952 < len__25947__auto___39951)){
args__25954__auto__.push((arguments[i__25948__auto___39952]));

var G__39953 = (i__25948__auto___39952 + (1));
i__25948__auto___39952 = G__39953;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39950))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39950){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39950);
});})(g__30569__auto___39950))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__30569__auto___39950){
return (function (seq39926){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39926));
});})(g__30569__auto___39950))
;


var g__30569__auto___39954 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__30569__auto___39954){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39955 = arguments.length;
var i__25948__auto___39956 = (0);
while(true){
if((i__25948__auto___39956 < len__25947__auto___39955)){
args__25954__auto__.push((arguments[i__25948__auto___39956]));

var G__39957 = (i__25948__auto___39956 + (1));
i__25948__auto___39956 = G__39957;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39954))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39954){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39954);
});})(g__30569__auto___39954))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__30569__auto___39954){
return (function (seq39927){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39927));
});})(g__30569__auto___39954))
;


var g__30569__auto___39958 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__30569__auto___39958){
return (function cljs$spec$impl$gen$char(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39959 = arguments.length;
var i__25948__auto___39960 = (0);
while(true){
if((i__25948__auto___39960 < len__25947__auto___39959)){
args__25954__auto__.push((arguments[i__25948__auto___39960]));

var G__39961 = (i__25948__auto___39960 + (1));
i__25948__auto___39960 = G__39961;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39958))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39958){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39958);
});})(g__30569__auto___39958))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__30569__auto___39958){
return (function (seq39928){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39928));
});})(g__30569__auto___39958))
;


var g__30569__auto___39962 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__30569__auto___39962){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39963 = arguments.length;
var i__25948__auto___39964 = (0);
while(true){
if((i__25948__auto___39964 < len__25947__auto___39963)){
args__25954__auto__.push((arguments[i__25948__auto___39964]));

var G__39965 = (i__25948__auto___39964 + (1));
i__25948__auto___39964 = G__39965;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39962))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39962){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39962);
});})(g__30569__auto___39962))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__30569__auto___39962){
return (function (seq39929){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39929));
});})(g__30569__auto___39962))
;


var g__30569__auto___39966 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__30569__auto___39966){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39967 = arguments.length;
var i__25948__auto___39968 = (0);
while(true){
if((i__25948__auto___39968 < len__25947__auto___39967)){
args__25954__auto__.push((arguments[i__25948__auto___39968]));

var G__39969 = (i__25948__auto___39968 + (1));
i__25948__auto___39968 = G__39969;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39966))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39966){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39966);
});})(g__30569__auto___39966))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__30569__auto___39966){
return (function (seq39930){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39930));
});})(g__30569__auto___39966))
;


var g__30569__auto___39970 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__30569__auto___39970){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39971 = arguments.length;
var i__25948__auto___39972 = (0);
while(true){
if((i__25948__auto___39972 < len__25947__auto___39971)){
args__25954__auto__.push((arguments[i__25948__auto___39972]));

var G__39973 = (i__25948__auto___39972 + (1));
i__25948__auto___39972 = G__39973;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39970))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39970){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39970);
});})(g__30569__auto___39970))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__30569__auto___39970){
return (function (seq39931){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39931));
});})(g__30569__auto___39970))
;


var g__30569__auto___39974 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__30569__auto___39974){
return (function cljs$spec$impl$gen$double(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39975 = arguments.length;
var i__25948__auto___39976 = (0);
while(true){
if((i__25948__auto___39976 < len__25947__auto___39975)){
args__25954__auto__.push((arguments[i__25948__auto___39976]));

var G__39977 = (i__25948__auto___39976 + (1));
i__25948__auto___39976 = G__39977;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39974))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39974){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39974);
});})(g__30569__auto___39974))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__30569__auto___39974){
return (function (seq39932){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39932));
});})(g__30569__auto___39974))
;


var g__30569__auto___39978 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__30569__auto___39978){
return (function cljs$spec$impl$gen$int(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39979 = arguments.length;
var i__25948__auto___39980 = (0);
while(true){
if((i__25948__auto___39980 < len__25947__auto___39979)){
args__25954__auto__.push((arguments[i__25948__auto___39980]));

var G__39981 = (i__25948__auto___39980 + (1));
i__25948__auto___39980 = G__39981;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39978))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39978){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39978);
});})(g__30569__auto___39978))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__30569__auto___39978){
return (function (seq39933){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39933));
});})(g__30569__auto___39978))
;


var g__30569__auto___39982 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__30569__auto___39982){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39983 = arguments.length;
var i__25948__auto___39984 = (0);
while(true){
if((i__25948__auto___39984 < len__25947__auto___39983)){
args__25954__auto__.push((arguments[i__25948__auto___39984]));

var G__39985 = (i__25948__auto___39984 + (1));
i__25948__auto___39984 = G__39985;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39982))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39982){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39982);
});})(g__30569__auto___39982))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__30569__auto___39982){
return (function (seq39934){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39934));
});})(g__30569__auto___39982))
;


var g__30569__auto___39986 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__30569__auto___39986){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39987 = arguments.length;
var i__25948__auto___39988 = (0);
while(true){
if((i__25948__auto___39988 < len__25947__auto___39987)){
args__25954__auto__.push((arguments[i__25948__auto___39988]));

var G__39989 = (i__25948__auto___39988 + (1));
i__25948__auto___39988 = G__39989;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39986))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39986){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39986);
});})(g__30569__auto___39986))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__30569__auto___39986){
return (function (seq39935){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39935));
});})(g__30569__auto___39986))
;


var g__30569__auto___39990 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__30569__auto___39990){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39991 = arguments.length;
var i__25948__auto___39992 = (0);
while(true){
if((i__25948__auto___39992 < len__25947__auto___39991)){
args__25954__auto__.push((arguments[i__25948__auto___39992]));

var G__39993 = (i__25948__auto___39992 + (1));
i__25948__auto___39992 = G__39993;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39990))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39990){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39990);
});})(g__30569__auto___39990))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__30569__auto___39990){
return (function (seq39936){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39936));
});})(g__30569__auto___39990))
;


var g__30569__auto___39994 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__30569__auto___39994){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39995 = arguments.length;
var i__25948__auto___39996 = (0);
while(true){
if((i__25948__auto___39996 < len__25947__auto___39995)){
args__25954__auto__.push((arguments[i__25948__auto___39996]));

var G__39997 = (i__25948__auto___39996 + (1));
i__25948__auto___39996 = G__39997;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39994))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39994){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39994);
});})(g__30569__auto___39994))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__30569__auto___39994){
return (function (seq39937){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39937));
});})(g__30569__auto___39994))
;


var g__30569__auto___39998 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__30569__auto___39998){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39999 = arguments.length;
var i__25948__auto___40000 = (0);
while(true){
if((i__25948__auto___40000 < len__25947__auto___39999)){
args__25954__auto__.push((arguments[i__25948__auto___40000]));

var G__40001 = (i__25948__auto___40000 + (1));
i__25948__auto___40000 = G__40001;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___39998))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___39998){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___39998);
});})(g__30569__auto___39998))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__30569__auto___39998){
return (function (seq39938){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39938));
});})(g__30569__auto___39998))
;


var g__30569__auto___40002 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__30569__auto___40002){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40003 = arguments.length;
var i__25948__auto___40004 = (0);
while(true){
if((i__25948__auto___40004 < len__25947__auto___40003)){
args__25954__auto__.push((arguments[i__25948__auto___40004]));

var G__40005 = (i__25948__auto___40004 + (1));
i__25948__auto___40004 = G__40005;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___40002))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___40002){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___40002);
});})(g__30569__auto___40002))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__30569__auto___40002){
return (function (seq39939){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39939));
});})(g__30569__auto___40002))
;


var g__30569__auto___40006 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__30569__auto___40006){
return (function cljs$spec$impl$gen$string(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40007 = arguments.length;
var i__25948__auto___40008 = (0);
while(true){
if((i__25948__auto___40008 < len__25947__auto___40007)){
args__25954__auto__.push((arguments[i__25948__auto___40008]));

var G__40009 = (i__25948__auto___40008 + (1));
i__25948__auto___40008 = G__40009;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___40006))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___40006){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___40006);
});})(g__30569__auto___40006))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__30569__auto___40006){
return (function (seq39940){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39940));
});})(g__30569__auto___40006))
;


var g__30569__auto___40010 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__30569__auto___40010){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40011 = arguments.length;
var i__25948__auto___40012 = (0);
while(true){
if((i__25948__auto___40012 < len__25947__auto___40011)){
args__25954__auto__.push((arguments[i__25948__auto___40012]));

var G__40013 = (i__25948__auto___40012 + (1));
i__25948__auto___40012 = G__40013;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___40010))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___40010){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___40010);
});})(g__30569__auto___40010))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__30569__auto___40010){
return (function (seq39941){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39941));
});})(g__30569__auto___40010))
;


var g__30569__auto___40014 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__30569__auto___40014){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40015 = arguments.length;
var i__25948__auto___40016 = (0);
while(true){
if((i__25948__auto___40016 < len__25947__auto___40015)){
args__25954__auto__.push((arguments[i__25948__auto___40016]));

var G__40017 = (i__25948__auto___40016 + (1));
i__25948__auto___40016 = G__40017;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___40014))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___40014){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___40014);
});})(g__30569__auto___40014))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__30569__auto___40014){
return (function (seq39942){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39942));
});})(g__30569__auto___40014))
;


var g__30569__auto___40018 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__30569__auto___40018){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40019 = arguments.length;
var i__25948__auto___40020 = (0);
while(true){
if((i__25948__auto___40020 < len__25947__auto___40019)){
args__25954__auto__.push((arguments[i__25948__auto___40020]));

var G__40021 = (i__25948__auto___40020 + (1));
i__25948__auto___40020 = G__40021;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___40018))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___40018){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___40018);
});})(g__30569__auto___40018))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__30569__auto___40018){
return (function (seq39943){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39943));
});})(g__30569__auto___40018))
;


var g__30569__auto___40022 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__30569__auto___40022){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40023 = arguments.length;
var i__25948__auto___40024 = (0);
while(true){
if((i__25948__auto___40024 < len__25947__auto___40023)){
args__25954__auto__.push((arguments[i__25948__auto___40024]));

var G__40025 = (i__25948__auto___40024 + (1));
i__25948__auto___40024 = G__40025;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___40022))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___40022){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___40022);
});})(g__30569__auto___40022))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__30569__auto___40022){
return (function (seq39944){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39944));
});})(g__30569__auto___40022))
;


var g__30569__auto___40026 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__30569__auto___40026){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40027 = arguments.length;
var i__25948__auto___40028 = (0);
while(true){
if((i__25948__auto___40028 < len__25947__auto___40027)){
args__25954__auto__.push((arguments[i__25948__auto___40028]));

var G__40029 = (i__25948__auto___40028 + (1));
i__25948__auto___40028 = G__40029;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(g__30569__auto___40026))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30569__auto___40026){
return (function (args){
return cljs.core.deref.call(null,g__30569__auto___40026);
});})(g__30569__auto___40026))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__30569__auto___40026){
return (function (seq39945){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39945));
});})(g__30569__auto___40026))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40032 = arguments.length;
var i__25948__auto___40033 = (0);
while(true){
if((i__25948__auto___40033 < len__25947__auto___40032)){
args__25954__auto__.push((arguments[i__25948__auto___40033]));

var G__40034 = (i__25948__auto___40033 + (1));
i__25948__auto___40033 = G__40034;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__40030_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__40030_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq40031){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40031));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__40035_SHARP_){
return (new Date(p1__40035_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1490248913603