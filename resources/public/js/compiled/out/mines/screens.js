// Compiled by ClojureScript 1.9.229 {}
goog.provide('mines.screens');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('mines.game');
goog.require('mines.channels');
mines.screens.sign = (function mines$screens$sign(which){
if(cljs.core._EQ_.call(null,which,"x")){
return "\u2620 ";
} else {
if(cljs.core._EQ_.call(null,which,"?")){
return "\uD83D\uDEA9";
} else {
return which;

}
}
});
mines.screens.revealed_sign = (function mines$screens$revealed_sign(which){
if(cljs.core._EQ_.call(null,which,(1))){
return "\uD83D\uDCA3";
} else {
if(cljs.core._EQ_.call(null,which,"?")){
return "\uD83D\uDEA9";
} else {
if(cljs.core._EQ_.call(null,which,"x")){
return "\u2620 ";
} else {
return "";

}
}
}
});
mines.screens.is_not_bomb_QMARK_ = (function mines$screens$is_not_bomb_QMARK_(which){
return cljs.core.not_EQ_.call(null,which,"x");
});
mines.screens.is_not_used_QMARK_ = (function mines$screens$is_not_used_QMARK_(which){
return (cljs.core.not_EQ_.call(null,which,"x")) && (cljs.core.not_EQ_.call(null,which,"?"));
});
mines.screens.game_square_style = (function mines$screens$game_square_style(props){
var map__45512 = props;
var map__45512__$1 = ((((!((map__45512 == null)))?((((map__45512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45512):map__45512);
var x = cljs.core.get.call(null,map__45512__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__45512__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__45512__$1,new cljs.core.Keyword(null,"value","value",305978217));
var complete = cljs.core.get.call(null,map__45512__$1,new cljs.core.Keyword(null,"complete","complete",-500388775));
var won = cljs.core.get.call(null,map__45512__$1,new cljs.core.Keyword(null,"won","won",910394405));
var size = cljs.core.get.call(null,map__45512__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"animation-delay","animation-delay",-488570176),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-width","letter-width",-1968592614),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["groove",[cljs.core.str((size - (6))),cljs.core.str("px")].join(''),(cljs.core.truth_((function (){var and__24860__auto__ = cljs.core.not.call(null,won);
if(and__24860__auto__){
return complete;
} else {
return and__24860__auto__;
}
})())?((cljs.core._EQ_.call(null,value,"x"))?"0s":[cljs.core.str((0.3 + cljs.core.rand.call(null,0.3))),cljs.core.str("s")].join('')):"0"),"center",[cljs.core.str((size - (8))),cljs.core.str("px")].join(''),(y * size),(cljs.core.truth_(value)?((cljs.core._EQ_.call(null,value,"x"))?"red":"#4e4e4e"):(cljs.core.truth_(complete)?"#aaaaaa":"#CCCCCC")),(size - (4)),(cljs.core.truth_((function (){var or__24872__auto__ = complete;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return value;
}
})())?"default":"pointer"),"absolute","8px",(size - (4)),(x * size)]);
});
mines.screens.game_square = (function mines$screens$game_square(props){
return (function (props__$1){
if(cljs.core.truth_(mines.screens.is_not_bomb_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props__$1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props__$1))?"box-flipped":"box-normal"),new cljs.core.Keyword(null,"style","style",-496642736),mines.screens.game_square_style.call(null,props__$1),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.async.put_BANG_.call(null,mines.channels.EVENTCNANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"try-square!","try-square!",1098512675),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props__$1)], null));
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (ev){
ev.nativeEvent.preventDefault();

return cljs.core.async.put_BANG_.call(null,mines.channels.EVENTCNANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark-square!","mark-square!",-1919152801),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props__$1)], null));
})], null),mines.screens.sign.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props__$1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"box-flipped",new cljs.core.Keyword(null,"style","style",-496642736),mines.screens.game_square_style.call(null,props__$1)], null),mines.screens.revealed_sign.call(null,new cljs.core.Keyword(null,"initial","initial",1854648214).cljs$core$IFn$_invoke$arity$1(props__$1))], null);
}
});
});
mines.screens.revealed_square = (function mines$screens$revealed_square(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props),"x"))?"box-caboom":"box-normal"),new cljs.core.Keyword(null,"style","style",-496642736),mines.screens.game_square_style.call(null,props)], null),(cljs.core.truth_(mines.screens.is_not_used_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props)))?mines.screens.revealed_sign.call(null,new cljs.core.Keyword(null,"initial","initial",1854648214).cljs$core$IFn$_invoke$arity$1(props)):mines.screens.sign.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props)))], null);
});
mines.screens.game_field = (function mines$screens$game_field(data){
var SQUARE_SIZE = (40);
var columns = cljs.core.range.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(data));
var rows = cljs.core.range.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data));
return ((function (SQUARE_SIZE,columns,rows){
return (function (data__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var and__24860__auto__ = new cljs.core.Keyword(null,"won","won",910394405).cljs$core$IFn$_invoke$arity$1(data__$1);
if(cljs.core.truth_(and__24860__auto__)){
return new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1);
} else {
return and__24860__auto__;
}
})())?"box-won":(cljs.core.truth_((function (){var and__24860__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"won","won",910394405).cljs$core$IFn$_invoke$arity$1(data__$1));
if(and__24860__auto__){
return new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1);
} else {
return and__24860__auto__;
}
})())?"box-exploded":"box-normal"
)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"perspective-origin","perspective-origin",-1049394665),"200px 200px",new cljs.core.Keyword(null,"perspective","perspective",1459886798),"300px",new cljs.core.Keyword(null,"width","width",-384071477),(new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(data__$1) * SQUARE_SIZE),new cljs.core.Keyword(null,"height","height",1025178622),(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data__$1) * SQUARE_SIZE)], null)], null),(function (){var iter__25652__auto__ = ((function (SQUARE_SIZE,columns,rows){
return (function mines$screens$game_field_$_iter__45534(s__45535){
return (new cljs.core.LazySeq(null,((function (SQUARE_SIZE,columns,rows){
return (function (){
var s__45535__$1 = s__45535;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45535__$1);
if(temp__4657__auto__){
var s__45535__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45535__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__45535__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__45537 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__45536 = (0);
while(true){
if((i__45536 < size__25651__auto__)){
var y = cljs.core._nth.call(null,c__25650__auto__,i__45536);
cljs.core.chunk_append.call(null,b__45537,(function (){var iter__25652__auto__ = ((function (i__45536,y,c__25650__auto__,size__25651__auto__,b__45537,s__45535__$2,temp__4657__auto__,SQUARE_SIZE,columns,rows){
return (function mines$screens$game_field_$_iter__45534_$_iter__45546(s__45547){
return (new cljs.core.LazySeq(null,((function (i__45536,y,c__25650__auto__,size__25651__auto__,b__45537,s__45535__$2,temp__4657__auto__,SQUARE_SIZE,columns,rows){
return (function (){
var s__45547__$1 = s__45547;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__45547__$1);
if(temp__4657__auto____$1){
var s__45547__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45547__$2)){
var c__25650__auto____$1 = cljs.core.chunk_first.call(null,s__45547__$2);
var size__25651__auto____$1 = cljs.core.count.call(null,c__25650__auto____$1);
var b__45549 = cljs.core.chunk_buffer.call(null,size__25651__auto____$1);
if((function (){var i__45548 = (0);
while(true){
if((i__45548 < size__25651__auto____$1)){
var x = cljs.core._nth.call(null,c__25650__auto____$1,i__45548);
cljs.core.chunk_append.call(null,b__45549,(function (){var key = mines.game.position__GT_index.call(null,data__$1,x,y);
var props = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1),new cljs.core.Keyword(null,"size","size",1098693007),SQUARE_SIZE,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,new cljs.core.Keyword(null,"gamefield","gamefield",-435441788).cljs$core$IFn$_invoke$arity$1(data__$1),key),new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.nth.call(null,new cljs.core.Keyword(null,"initial","initial",1854648214).cljs$core$IFn$_invoke$arity$1(data__$1),key),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.revealed_square,props], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.game_square,props], null);
}
})());

var G__45554 = (i__45548 + (1));
i__45548 = G__45554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45549),mines$screens$game_field_$_iter__45534_$_iter__45546.call(null,cljs.core.chunk_rest.call(null,s__45547__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45549),null);
}
} else {
var x = cljs.core.first.call(null,s__45547__$2);
return cljs.core.cons.call(null,(function (){var key = mines.game.position__GT_index.call(null,data__$1,x,y);
var props = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1),new cljs.core.Keyword(null,"size","size",1098693007),SQUARE_SIZE,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,new cljs.core.Keyword(null,"gamefield","gamefield",-435441788).cljs$core$IFn$_invoke$arity$1(data__$1),key),new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.nth.call(null,new cljs.core.Keyword(null,"initial","initial",1854648214).cljs$core$IFn$_invoke$arity$1(data__$1),key),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.revealed_square,props], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.game_square,props], null);
}
})(),mines$screens$game_field_$_iter__45534_$_iter__45546.call(null,cljs.core.rest.call(null,s__45547__$2)));
}
} else {
return null;
}
break;
}
});})(i__45536,y,c__25650__auto__,size__25651__auto__,b__45537,s__45535__$2,temp__4657__auto__,SQUARE_SIZE,columns,rows))
,null,null));
});})(i__45536,y,c__25650__auto__,size__25651__auto__,b__45537,s__45535__$2,temp__4657__auto__,SQUARE_SIZE,columns,rows))
;
return iter__25652__auto__.call(null,columns);
})());

var G__45555 = (i__45536 + (1));
i__45536 = G__45555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45537),mines$screens$game_field_$_iter__45534.call(null,cljs.core.chunk_rest.call(null,s__45535__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45537),null);
}
} else {
var y = cljs.core.first.call(null,s__45535__$2);
return cljs.core.cons.call(null,(function (){var iter__25652__auto__ = ((function (y,s__45535__$2,temp__4657__auto__,SQUARE_SIZE,columns,rows){
return (function mines$screens$game_field_$_iter__45534_$_iter__45550(s__45551){
return (new cljs.core.LazySeq(null,((function (y,s__45535__$2,temp__4657__auto__,SQUARE_SIZE,columns,rows){
return (function (){
var s__45551__$1 = s__45551;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__45551__$1);
if(temp__4657__auto____$1){
var s__45551__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45551__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__45551__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__45553 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__45552 = (0);
while(true){
if((i__45552 < size__25651__auto__)){
var x = cljs.core._nth.call(null,c__25650__auto__,i__45552);
cljs.core.chunk_append.call(null,b__45553,(function (){var key = mines.game.position__GT_index.call(null,data__$1,x,y);
var props = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1),new cljs.core.Keyword(null,"size","size",1098693007),SQUARE_SIZE,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,new cljs.core.Keyword(null,"gamefield","gamefield",-435441788).cljs$core$IFn$_invoke$arity$1(data__$1),key),new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.nth.call(null,new cljs.core.Keyword(null,"initial","initial",1854648214).cljs$core$IFn$_invoke$arity$1(data__$1),key),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.revealed_square,props], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.game_square,props], null);
}
})());

var G__45556 = (i__45552 + (1));
i__45552 = G__45556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45553),mines$screens$game_field_$_iter__45534_$_iter__45550.call(null,cljs.core.chunk_rest.call(null,s__45551__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45553),null);
}
} else {
var x = cljs.core.first.call(null,s__45551__$2);
return cljs.core.cons.call(null,(function (){var key = mines.game.position__GT_index.call(null,data__$1,x,y);
var props = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1),new cljs.core.Keyword(null,"size","size",1098693007),SQUARE_SIZE,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,new cljs.core.Keyword(null,"gamefield","gamefield",-435441788).cljs$core$IFn$_invoke$arity$1(data__$1),key),new cljs.core.Keyword(null,"initial","initial",1854648214),cljs.core.nth.call(null,new cljs.core.Keyword(null,"initial","initial",1854648214).cljs$core$IFn$_invoke$arity$1(data__$1),key),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.revealed_square,props], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.game_square,props], null);
}
})(),mines$screens$game_field_$_iter__45534_$_iter__45550.call(null,cljs.core.rest.call(null,s__45551__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__45535__$2,temp__4657__auto__,SQUARE_SIZE,columns,rows))
,null,null));
});})(y,s__45535__$2,temp__4657__auto__,SQUARE_SIZE,columns,rows))
;
return iter__25652__auto__.call(null,columns);
})(),mines$screens$game_field_$_iter__45534.call(null,cljs.core.rest.call(null,s__45535__$2)));
}
} else {
return null;
}
break;
}
});})(SQUARE_SIZE,columns,rows))
,null,null));
});})(SQUARE_SIZE,columns,rows))
;
return iter__25652__auto__.call(null,rows);
})()], null)], null);
});
;})(SQUARE_SIZE,columns,rows))
});
mines.screens.intro = (function mines$screens$intro(done,data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"intro"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Mines"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),done], null),"start"], null)], null);
});
mines.screens.score = (function mines$screens$score(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),value], null);
});
mines.screens.timer = (function mines$screens$timer(value){
var minutes = ((value / (60)) | (0));
var seconds = (value - (minutes * (60)));
var minutes__$1 = (((minutes < (10)))?[cljs.core.str("0"),cljs.core.str(minutes)].join(''):minutes);
var seconds__$1 = (((seconds < (10)))?[cljs.core.str("0"),cljs.core.str(seconds)].join(''):seconds);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),[cljs.core.str(minutes__$1),cljs.core.str(":"),cljs.core.str(seconds__$1)].join('')], null);
});
mines.screens.score_panel = (function mines$screens$score_panel(data){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"25px",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"2px 2px 2px black",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.2em"], null)], null),"bombs: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.score,new cljs.core.Keyword(null,"bombs","bombs",1955561180).cljs$core$IFn$_invoke$arity$1(data)], null),", score: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.score,new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(data)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.timer,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
});
mines.screens.game = (function mines$screens$game(done,data){
var columns = cljs.core.range.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(data));
var rows = cljs.core.range.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data));
return ((function (columns,rows){
return (function (done__$1,data__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.game_field,data__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mines.screens.score_panel,data__$1], null),(cljs.core.truth_(new cljs.core.Keyword(null,"complete","complete",-500388775).cljs$core$IFn$_invoke$arity$1(data__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"6em",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"50%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"won","won",910394405).cljs$core$IFn$_invoke$arity$1(data__$1))?"YOU WON":"ALAS:(")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"restart",new cljs.core.Keyword(null,"on-click","on-click",1632826543),done__$1], null),"restart"], null)], null):null)], null);
});
;})(columns,rows))
});

//# sourceMappingURL=screens.js.map?rel=1490249455468