// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs.simple_merge = (function devtools$prefs$simple_merge(var_args){
var args__25954__auto__ = [];
var len__25947__auto___42461 = arguments.length;
var i__25948__auto___42462 = (0);
while(true){
if((i__25948__auto___42462 < len__25947__auto___42461)){
args__25954__auto__.push((arguments[i__25948__auto___42462]));

var G__42463 = (i__25948__auto___42462 + (1));
i__25948__auto___42462 = G__42463;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic = (function (base_map,maps){
var rmaps = cljs.core.reverse.call(null,maps);
var sentinel = {};
var sentinel_QMARK_ = ((function (rmaps,sentinel){
return (function (p1__42455_SHARP_){
return (p1__42455_SHARP_ === sentinel);
});})(rmaps,sentinel))
;
var merged_keys = cljs.core.dedupe.call(null,cljs.core.sort.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.keys,rmaps))));
var result = base_map;
var todo_keys = merged_keys;
while(true){
if(cljs.core.empty_QMARK_.call(null,todo_keys)){
return result;
} else {
var key = cljs.core.first.call(null,todo_keys);
var val = cljs.core.first.call(null,cljs.core.remove.call(null,sentinel_QMARK_,cljs.core.map.call(null,((function (result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys){
return (function (p1__42456_SHARP_){
return cljs.core.get.call(null,p1__42456_SHARP_,key,sentinel);
});})(result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys))
,rmaps)));
var G__42464 = cljs.core.assoc.call(null,result,key,val);
var G__42465 = cljs.core.rest.call(null,todo_keys);
result = G__42464;
todo_keys = G__42465;
continue;
}
break;
}
});

devtools.prefs.simple_merge.cljs$lang$maxFixedArity = (1);

devtools.prefs.simple_merge.cljs$lang$applyTo = (function (seq42457){
var G__42458 = cljs.core.first.call(null,seq42457);
var seq42457__$1 = cljs.core.next.call(null,seq42457);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic(G__42458,seq42457__$1);
});

devtools.prefs.default_config = devtools.defaults.prefs;
devtools.prefs.external_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261),new cljs.core.Keyword(null,"formatters","formatters",-1875637118),new cljs.core.Keyword(null,"hints","hints",-991113151),new cljs.core.Keyword(null,"async","async",1050769601)], null);
devtools.prefs.env_config = cljs.core.PersistentArrayMap.EMPTY;
devtools.prefs.initial_config = devtools.prefs.simple_merge.call(null,devtools.prefs.default_config,devtools.prefs.external_config,devtools.prefs.env_config);
devtools.prefs._STAR_prefs_STAR_ = devtools.prefs.initial_config;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs._STAR_prefs_STAR_);
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_prefs_STAR_ = new_prefs;
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___42469 = arguments.length;
var i__25948__auto___42470 = (0);
while(true){
if((i__25948__auto___42470 < len__25947__auto___42469)){
args__25954__auto__.push((arguments[i__25948__auto___42470]));

var G__42471 = (i__25948__auto___42470 + (1));
i__25948__auto___42470 = G__42471;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq42466){
var G__42467 = cljs.core.first.call(null,seq42466);
var seq42466__$1 = cljs.core.next.call(null,seq42466);
var G__42468 = cljs.core.first.call(null,seq42466__$1);
var seq42466__$2 = cljs.core.next.call(null,seq42466__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42467,G__42468,seq42466__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1490248917932