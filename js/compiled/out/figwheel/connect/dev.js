// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('mines.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27528__delegate = function (x){
if(cljs.core.truth_(mines.core.on_js_reload)){
return cljs.core.apply.call(null,mines.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'mines.core/on-js-reload' is missing");
}
};
var G__27528 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27529__i = 0, G__27529__a = new Array(arguments.length -  0);
while (G__27529__i < G__27529__a.length) {G__27529__a[G__27529__i] = arguments[G__27529__i + 0]; ++G__27529__i;}
  x = new cljs.core.IndexedSeq(G__27529__a,0);
} 
return G__27528__delegate.call(this,x);};
G__27528.cljs$lang$maxFixedArity = 0;
G__27528.cljs$lang$applyTo = (function (arglist__27530){
var x = cljs.core.seq(arglist__27530);
return G__27528__delegate(x);
});
G__27528.cljs$core$IFn$_invoke$arity$variadic = G__27528__delegate;
return G__27528;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=dev.js.map?rel=1500472206666