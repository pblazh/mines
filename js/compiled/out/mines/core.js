// Compiled by ClojureScript 1.9.229 {}
goog.provide('mines.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('mines.screens');
goog.require('mines.game');
goog.require('mines.channels');
if(typeof mines.core.app_state !== 'undefined'){
} else {
mines.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"screen-intro","screen-intro",-1683559960)], null));
}
mines.core.time_tick = (function mines$core$time_tick(){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mines.core.app_state)))){
return setTimeout((function (){
cljs.core.swap_BANG_.call(null,mines.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mines.core.app_state)) + (1)));

return mines$core$time_tick.call(null);
}),(1000));
} else {
return null;
}
});
mines.core.start_game = (function mines$core$start_game(){
cljs.core.async.put_BANG_.call(null,mines.channels.EVENTCNANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset!","reset!",-1113255895)], null));

cljs.core.async.put_BANG_.call(null,mines.channels.EVENTCNANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-screen!","set-screen!",747305934),new cljs.core.Keyword(null,"screen-game","screen-game",544449528)], null));

return cljs.core.async.put_BANG_.call(null,mines.channels.EVENTCNANNEL,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null));
});
mines.core.EVENTS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"set-screen!","set-screen!",747305934),(function (p1__45559_SHARP_){
return cljs.core.swap_BANG_.call(null,mines.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),p1__45559_SHARP_);
}),new cljs.core.Keyword(null,"try-square!","try-square!",1098512675),(function (p1__45560_SHARP_){
return cljs.core.reset_BANG_.call(null,mines.core.app_state,mines.game.try_complete.call(null,mines.game.try_square.call(null,cljs.core.deref.call(null,mines.core.app_state),p1__45560_SHARP_)));
}),new cljs.core.Keyword(null,"mark-square!","mark-square!",-1919152801),(function (p1__45561_SHARP_){
return cljs.core.reset_BANG_.call(null,mines.core.app_state,mines.game.try_complete.call(null,mines.game.mark_square.call(null,cljs.core.deref.call(null,mines.core.app_state),p1__45561_SHARP_)));
}),new cljs.core.Keyword(null,"reset!","reset!",-1113255895),(function (){
return cljs.core.reset_BANG_.call(null,mines.core.app_state,mines.game.initial_state.call(null));
}),new cljs.core.Keyword(null,"start","start",-355208981),mines.core.time_tick], null);
mines.core.app = (function mines$core$app(){
return (function (){
var state = cljs.core.deref.call(null,mines.core.app_state);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"screen-intro","screen-intro",-1683559960))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.intro,mines.core.start_game,state], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"screen-game","screen-game",544449528))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.game,((function (state){
return (function (){
return cljs.core.async.put_BANG_.call(null,mines.channels.EVENTCNANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-screen!","set-screen!",747305934),new cljs.core.Keyword(null,"screen-intro","screen-intro",-1683559960)], null));
});})(state))
,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"screen doesn't exists"], null);

}
}
});
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.core.app,mines.core.app_state], null),document.getElementById("app"));
mines.channels.start.call(null,mines.core.EVENTS);
mines.core.on_js_reload = (function mines$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1490249455505