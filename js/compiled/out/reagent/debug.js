// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__33529__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33530__i = 0, G__33530__a = new Array(arguments.length -  0);
while (G__33530__i < G__33530__a.length) {G__33530__a[G__33530__i] = arguments[G__33530__i + 0]; ++G__33530__i;}
  args = new cljs.core.IndexedSeq(G__33530__a,0);
} 
return G__33529__delegate.call(this,args);};
G__33529.cljs$lang$maxFixedArity = 0;
G__33529.cljs$lang$applyTo = (function (arglist__33531){
var args = cljs.core.seq(arglist__33531);
return G__33529__delegate(args);
});
G__33529.cljs$core$IFn$_invoke$arity$variadic = G__33529__delegate;
return G__33529;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33532__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33533__i = 0, G__33533__a = new Array(arguments.length -  0);
while (G__33533__i < G__33533__a.length) {G__33533__a[G__33533__i] = arguments[G__33533__i + 0]; ++G__33533__i;}
  args = new cljs.core.IndexedSeq(G__33533__a,0);
} 
return G__33532__delegate.call(this,args);};
G__33532.cljs$lang$maxFixedArity = 0;
G__33532.cljs$lang$applyTo = (function (arglist__33534){
var args = cljs.core.seq(arglist__33534);
return G__33532__delegate(args);
});
G__33532.cljs$core$IFn$_invoke$arity$variadic = G__33532__delegate;
return G__33532;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1490248902068