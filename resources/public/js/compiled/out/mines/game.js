// Compiled by ClojureScript 1.9.229 {}
goog.provide('mines.game');
goog.require('cljs.core');
goog.require('clojure.string');
mines.game.empty_gamefield = (function mines$game$empty_gamefield(columns,rows){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.repeat.call(null,(columns * rows),null));
});
mines.game.random_gamefield = (function mines$game$random_gamefield(var_args){
var args36992 = [];
var len__25947__auto___36995 = arguments.length;
var i__25948__auto___36996 = (0);
while(true){
if((i__25948__auto___36996 < len__25947__auto___36995)){
args36992.push((arguments[i__25948__auto___36996]));

var G__36997 = (i__25948__auto___36996 + (1));
i__25948__auto___36996 = G__36997;
continue;
} else {
}
break;
}

var G__36994 = args36992.length;
switch (G__36994) {
case 2:
return mines.game.random_gamefield.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mines.game.random_gamefield.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36992.length)].join('')));

}
});

mines.game.random_gamefield.cljs$core$IFn$_invoke$arity$2 = (function (columns,rows){
return mines.game.random_gamefield.call(null,columns,rows,(((columns * rows) / (10)) | (0)));
});

mines.game.random_gamefield.cljs$core$IFn$_invoke$arity$3 = (function (columns,rows,n){
return cljs.core.shuffle.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,n,(1)),cljs.core.repeat.call(null,((columns * rows) - n),(0))));
});

mines.game.random_gamefield.cljs$lang$maxFixedArity = 3;

if(typeof mines.game.BOMBS !== 'undefined'){
} else {
mines.game.BOMBS = (10);
}
mines.game.initial_state = (function mines$game$initial_state(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"gamefield","gamefield",-435441788),new cljs.core.Keyword(null,"won","won",910394405),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"bombs","bombs",1955561180)],[new cljs.core.Keyword(null,"screen-intro","screen-intro",-1683559960),mines.game.empty_gamefield.call(null,(10),(10)),false,(10),(0),(10),(0),mines.game.random_gamefield.call(null,(10),(10),mines.game.BOMBS),false,mines.game.BOMBS]);
});
mines.game.position__GT_index = (function mines$game$position__GT_index(data,x,y){
if(cljs.core._EQ_.call(null,y,(0))){
return x;
} else {
return (x + (y * new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(data)));
}
});
mines.game.index__GT_position = (function mines$game$index__GT_position(data,index){
var x__25706__auto__ = cljs.core.rem.call(null,index,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data));
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = ((index / new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(data)) | (0));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
});
mines.game.get_nearest_count = (function mines$game$get_nearest_count(data,app_state,n){
var vec__37002 = mines.game.index__GT_position.call(null,data,n);
var x = cljs.core.nth.call(null,vec__37002,(0),null);
var y = cljs.core.nth.call(null,vec__37002,(1),null);
var left = (x > (0));
var top = (y > (0));
var right = (x < (new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(data) - (1)));
var bottom = (y < (new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data) - (1)));
return (((((((((left)?cljs.core.nth.call(null,app_state,mines.game.position__GT_index.call(null,data,(x - (1)),y)):(0)) + ((top)?cljs.core.nth.call(null,app_state,mines.game.position__GT_index.call(null,data,x,(y - (1)))):(0))) + ((right)?cljs.core.nth.call(null,app_state,mines.game.position__GT_index.call(null,data,(x + (1)),y)):(0))) + ((bottom)?cljs.core.nth.call(null,app_state,mines.game.position__GT_index.call(null,data,x,(y + (1)))):(0))) + (((left) && (top))?cljs.core.nth.call(null,app_state,mines.game.position__GT_index.call(null,data,(x - (1)),(y - (1)))):(0))) + (((right) && (top))?cljs.core.nth.call(null,app_state,mines.game.position__GT_index.call(null,data,(x + (1)),(y - (1)))):(0))) + (((right) && (bottom))?cljs.core.nth.call(null,app_state,mines.game.position__GT_index.call(null,data,(x + (1)),(y + (1)))):(0))) + (((left) && (bottom))?cljs.core.nth.call(null,app_state,mines.game.position__GT_index.call(null,data,(x - (1)),(y + (1)))):(0)));
});
mines.game.get_score = (function mines$game$get_score(gamefield){
return cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.number_QMARK_,gamefield));
});
mines.game.alive_QMARK_ = (function mines$game$alive_QMARK_(gamefield){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__37005_SHARP_){
return cljs.core._EQ_.call(null,"x",p1__37005_SHARP_);
}),gamefield));
});
mines.game.try_complete = (function mines$game$try_complete(app_state){
var won_QMARK_ = (cljs.core.every_QMARK_.call(null,cljs.core.identity,new cljs.core.Keyword(null,"gamefield","gamefield",-435441788).cljs$core$IFn$_invoke$arity$1(app_state))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"bombs","bombs",1955561180).cljs$core$IFn$_invoke$arity$1(app_state),cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__37006_SHARP_){
return cljs.core._EQ_.call(null,p1__37006_SHARP_,"?");
}),new cljs.core.Keyword(null,"gamefield","gamefield",-435441788).cljs$core$IFn$_invoke$arity$1(app_state)))));
return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"won","won",910394405),won_QMARK_,new cljs.core.Keyword(null,"complete","complete",-500388775),(function (){var or__24872__auto__ = won_QMARK_;
if(or__24872__auto__){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(app_state);
}
})());
});
mines.game.try_square = (function mines$game$try_square(app_state,id){
var gamefield = new cljs.core.Keyword(null,"gamefield","gamefield",-435441788).cljs$core$IFn$_invoke$arity$1(app_state);
var initial = new cljs.core.Keyword(null,"initial","initial",1854648214).cljs$core$IFn$_invoke$arity$1(app_state);
var value = cljs.core.nth.call(null,initial,id);
var alive_QMARK_ = cljs.core._EQ_.call(null,(0),value);
var new_value = ((alive_QMARK_)?mines.game.get_nearest_count.call(null,app_state,initial,id):"x"
);
var gamefield__$1 = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"gamefield","gamefield",-435441788).cljs$core$IFn$_invoke$arity$1(app_state),id,new_value);
return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"gamefield","gamefield",-435441788),gamefield__$1,new cljs.core.Keyword(null,"score","score",-1963588780),mines.game.get_score.call(null,gamefield__$1),new cljs.core.Keyword(null,"complete","complete",-500388775),!(alive_QMARK_));
});
mines.game.mark_square = (function mines$game$mark_square(app_state,id){
var gamefield = new cljs.core.Keyword(null,"gamefield","gamefield",-435441788).cljs$core$IFn$_invoke$arity$1(app_state);
var value = cljs.core.nth.call(null,gamefield,id);
var new_value = ((cljs.core._EQ_.call(null,"?",value))?null:((cljs.core._EQ_.call(null,null,value))?"?":value
));
return cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"gamefield","gamefield",-435441788),cljs.core.assoc.call(null,gamefield,id,new_value));
});

//# sourceMappingURL=game.js.map?rel=1490248907981