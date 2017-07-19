// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args41277 = [];
var len__25947__auto___41280 = arguments.length;
var i__25948__auto___41281 = (0);
while(true){
if((i__25948__auto___41281 < len__25947__auto___41280)){
args41277.push((arguments[i__25948__auto___41281]));

var G__41282 = (i__25948__auto___41281 + (1));
i__25948__auto___41281 = G__41282;
continue;
} else {
}
break;
}

var G__41279 = args41277.length;
switch (G__41279) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41277.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25954__auto__ = [];
var len__25947__auto___41285 = arguments.length;
var i__25948__auto___41286 = (0);
while(true){
if((i__25948__auto___41286 < len__25947__auto___41285)){
args__25954__auto__.push((arguments[i__25948__auto___41286]));

var G__41287 = (i__25948__auto___41286 + (1));
i__25948__auto___41286 = G__41287;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41284){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41284));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25954__auto__ = [];
var len__25947__auto___41289 = arguments.length;
var i__25948__auto___41290 = (0);
while(true){
if((i__25948__auto___41290 < len__25947__auto___41289)){
args__25954__auto__.push((arguments[i__25948__auto___41290]));

var G__41291 = (i__25948__auto___41290 + (1));
i__25948__auto___41290 = G__41291;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41288){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41288));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41292){
var map__41295 = p__41292;
var map__41295__$1 = ((((!((map__41295 == null)))?((((map__41295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41295):map__41295);
var message = cljs.core.get.call(null,map__41295__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41295__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24872__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24860__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24860__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24860__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27175__auto___41457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___41457,ch){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___41457,ch){
return (function (state_41426){
var state_val_41427 = (state_41426[(1)]);
if((state_val_41427 === (7))){
var inst_41422 = (state_41426[(2)]);
var state_41426__$1 = state_41426;
var statearr_41428_41458 = state_41426__$1;
(statearr_41428_41458[(2)] = inst_41422);

(statearr_41428_41458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (1))){
var state_41426__$1 = state_41426;
var statearr_41429_41459 = state_41426__$1;
(statearr_41429_41459[(2)] = null);

(statearr_41429_41459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (4))){
var inst_41379 = (state_41426[(7)]);
var inst_41379__$1 = (state_41426[(2)]);
var state_41426__$1 = (function (){var statearr_41430 = state_41426;
(statearr_41430[(7)] = inst_41379__$1);

return statearr_41430;
})();
if(cljs.core.truth_(inst_41379__$1)){
var statearr_41431_41460 = state_41426__$1;
(statearr_41431_41460[(1)] = (5));

} else {
var statearr_41432_41461 = state_41426__$1;
(statearr_41432_41461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (15))){
var inst_41386 = (state_41426[(8)]);
var inst_41401 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41386);
var inst_41402 = cljs.core.first.call(null,inst_41401);
var inst_41403 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41402);
var inst_41404 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_41403)].join('');
var inst_41405 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41404);
var state_41426__$1 = state_41426;
var statearr_41433_41462 = state_41426__$1;
(statearr_41433_41462[(2)] = inst_41405);

(statearr_41433_41462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (13))){
var inst_41410 = (state_41426[(2)]);
var state_41426__$1 = state_41426;
var statearr_41434_41463 = state_41426__$1;
(statearr_41434_41463[(2)] = inst_41410);

(statearr_41434_41463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (6))){
var state_41426__$1 = state_41426;
var statearr_41435_41464 = state_41426__$1;
(statearr_41435_41464[(2)] = null);

(statearr_41435_41464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (17))){
var inst_41408 = (state_41426[(2)]);
var state_41426__$1 = state_41426;
var statearr_41436_41465 = state_41426__$1;
(statearr_41436_41465[(2)] = inst_41408);

(statearr_41436_41465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (3))){
var inst_41424 = (state_41426[(2)]);
var state_41426__$1 = state_41426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41426__$1,inst_41424);
} else {
if((state_val_41427 === (12))){
var inst_41385 = (state_41426[(9)]);
var inst_41399 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41385,opts);
var state_41426__$1 = state_41426;
if(cljs.core.truth_(inst_41399)){
var statearr_41437_41466 = state_41426__$1;
(statearr_41437_41466[(1)] = (15));

} else {
var statearr_41438_41467 = state_41426__$1;
(statearr_41438_41467[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (2))){
var state_41426__$1 = state_41426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41426__$1,(4),ch);
} else {
if((state_val_41427 === (11))){
var inst_41386 = (state_41426[(8)]);
var inst_41391 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41392 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41386);
var inst_41393 = cljs.core.async.timeout.call(null,(1000));
var inst_41394 = [inst_41392,inst_41393];
var inst_41395 = (new cljs.core.PersistentVector(null,2,(5),inst_41391,inst_41394,null));
var state_41426__$1 = state_41426;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41426__$1,(14),inst_41395);
} else {
if((state_val_41427 === (9))){
var inst_41386 = (state_41426[(8)]);
var inst_41412 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41413 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41386);
var inst_41414 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41413);
var inst_41415 = [cljs.core.str("Not loading: "),cljs.core.str(inst_41414)].join('');
var inst_41416 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41415);
var state_41426__$1 = (function (){var statearr_41439 = state_41426;
(statearr_41439[(10)] = inst_41412);

return statearr_41439;
})();
var statearr_41440_41468 = state_41426__$1;
(statearr_41440_41468[(2)] = inst_41416);

(statearr_41440_41468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (5))){
var inst_41379 = (state_41426[(7)]);
var inst_41381 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41382 = (new cljs.core.PersistentArrayMap(null,2,inst_41381,null));
var inst_41383 = (new cljs.core.PersistentHashSet(null,inst_41382,null));
var inst_41384 = figwheel.client.focus_msgs.call(null,inst_41383,inst_41379);
var inst_41385 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41384);
var inst_41386 = cljs.core.first.call(null,inst_41384);
var inst_41387 = figwheel.client.autoload_QMARK_.call(null);
var state_41426__$1 = (function (){var statearr_41441 = state_41426;
(statearr_41441[(9)] = inst_41385);

(statearr_41441[(8)] = inst_41386);

return statearr_41441;
})();
if(cljs.core.truth_(inst_41387)){
var statearr_41442_41469 = state_41426__$1;
(statearr_41442_41469[(1)] = (8));

} else {
var statearr_41443_41470 = state_41426__$1;
(statearr_41443_41470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (14))){
var inst_41397 = (state_41426[(2)]);
var state_41426__$1 = state_41426;
var statearr_41444_41471 = state_41426__$1;
(statearr_41444_41471[(2)] = inst_41397);

(statearr_41444_41471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (16))){
var state_41426__$1 = state_41426;
var statearr_41445_41472 = state_41426__$1;
(statearr_41445_41472[(2)] = null);

(statearr_41445_41472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (10))){
var inst_41418 = (state_41426[(2)]);
var state_41426__$1 = (function (){var statearr_41446 = state_41426;
(statearr_41446[(11)] = inst_41418);

return statearr_41446;
})();
var statearr_41447_41473 = state_41426__$1;
(statearr_41447_41473[(2)] = null);

(statearr_41447_41473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41427 === (8))){
var inst_41385 = (state_41426[(9)]);
var inst_41389 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41385,opts);
var state_41426__$1 = state_41426;
if(cljs.core.truth_(inst_41389)){
var statearr_41448_41474 = state_41426__$1;
(statearr_41448_41474[(1)] = (11));

} else {
var statearr_41449_41475 = state_41426__$1;
(statearr_41449_41475[(1)] = (12));

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
});})(c__27175__auto___41457,ch))
;
return ((function (switch__27154__auto__,c__27175__auto___41457,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27155__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27155__auto____0 = (function (){
var statearr_41453 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41453[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27155__auto__);

(statearr_41453[(1)] = (1));

return statearr_41453;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27155__auto____1 = (function (state_41426){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_41426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e41454){if((e41454 instanceof Object)){
var ex__27158__auto__ = e41454;
var statearr_41455_41476 = state_41426;
(statearr_41455_41476[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41477 = state_41426;
state_41426 = G__41477;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27155__auto__ = function(state_41426){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27155__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27155__auto____1.call(this,state_41426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27155__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27155__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___41457,ch))
})();
var state__27177__auto__ = (function (){var statearr_41456 = f__27176__auto__.call(null);
(statearr_41456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___41457);

return statearr_41456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___41457,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41478_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41478_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41481 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41481){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41480){if((e41480 instanceof Error)){
var e = e41480;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41481], null));
} else {
var e = e41480;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41481))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41482){
var map__41491 = p__41482;
var map__41491__$1 = ((((!((map__41491 == null)))?((((map__41491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41491):map__41491);
var opts = map__41491__$1;
var build_id = cljs.core.get.call(null,map__41491__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41491,map__41491__$1,opts,build_id){
return (function (p__41493){
var vec__41494 = p__41493;
var seq__41495 = cljs.core.seq.call(null,vec__41494);
var first__41496 = cljs.core.first.call(null,seq__41495);
var seq__41495__$1 = cljs.core.next.call(null,seq__41495);
var map__41497 = first__41496;
var map__41497__$1 = ((((!((map__41497 == null)))?((((map__41497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41497):map__41497);
var msg = map__41497__$1;
var msg_name = cljs.core.get.call(null,map__41497__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41495__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41494,seq__41495,first__41496,seq__41495__$1,map__41497,map__41497__$1,msg,msg_name,_,map__41491,map__41491__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41494,seq__41495,first__41496,seq__41495__$1,map__41497,map__41497__$1,msg,msg_name,_,map__41491,map__41491__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41491,map__41491__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41505){
var vec__41506 = p__41505;
var seq__41507 = cljs.core.seq.call(null,vec__41506);
var first__41508 = cljs.core.first.call(null,seq__41507);
var seq__41507__$1 = cljs.core.next.call(null,seq__41507);
var map__41509 = first__41508;
var map__41509__$1 = ((((!((map__41509 == null)))?((((map__41509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41509):map__41509);
var msg = map__41509__$1;
var msg_name = cljs.core.get.call(null,map__41509__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41507__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41511){
var map__41523 = p__41511;
var map__41523__$1 = ((((!((map__41523 == null)))?((((map__41523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41523):map__41523);
var on_compile_warning = cljs.core.get.call(null,map__41523__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41523__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41523,map__41523__$1,on_compile_warning,on_compile_fail){
return (function (p__41525){
var vec__41526 = p__41525;
var seq__41527 = cljs.core.seq.call(null,vec__41526);
var first__41528 = cljs.core.first.call(null,seq__41527);
var seq__41527__$1 = cljs.core.next.call(null,seq__41527);
var map__41529 = first__41528;
var map__41529__$1 = ((((!((map__41529 == null)))?((((map__41529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41529):map__41529);
var msg = map__41529__$1;
var msg_name = cljs.core.get.call(null,map__41529__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41527__$1;
var pred__41531 = cljs.core._EQ_;
var expr__41532 = msg_name;
if(cljs.core.truth_(pred__41531.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41532))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41531.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41532))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41523,map__41523__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__,msg_hist,msg_names,msg){
return (function (state_41760){
var state_val_41761 = (state_41760[(1)]);
if((state_val_41761 === (7))){
var inst_41680 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
if(cljs.core.truth_(inst_41680)){
var statearr_41762_41812 = state_41760__$1;
(statearr_41762_41812[(1)] = (8));

} else {
var statearr_41763_41813 = state_41760__$1;
(statearr_41763_41813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (20))){
var inst_41754 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
var statearr_41764_41814 = state_41760__$1;
(statearr_41764_41814[(2)] = inst_41754);

(statearr_41764_41814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (27))){
var inst_41750 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
var statearr_41765_41815 = state_41760__$1;
(statearr_41765_41815[(2)] = inst_41750);

(statearr_41765_41815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (1))){
var inst_41673 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41760__$1 = state_41760;
if(cljs.core.truth_(inst_41673)){
var statearr_41766_41816 = state_41760__$1;
(statearr_41766_41816[(1)] = (2));

} else {
var statearr_41767_41817 = state_41760__$1;
(statearr_41767_41817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (24))){
var inst_41752 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
var statearr_41768_41818 = state_41760__$1;
(statearr_41768_41818[(2)] = inst_41752);

(statearr_41768_41818[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (4))){
var inst_41758 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41760__$1,inst_41758);
} else {
if((state_val_41761 === (15))){
var inst_41756 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
var statearr_41769_41819 = state_41760__$1;
(statearr_41769_41819[(2)] = inst_41756);

(statearr_41769_41819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (21))){
var inst_41709 = (state_41760[(2)]);
var inst_41710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41711 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41710);
var state_41760__$1 = (function (){var statearr_41770 = state_41760;
(statearr_41770[(7)] = inst_41709);

return statearr_41770;
})();
var statearr_41771_41820 = state_41760__$1;
(statearr_41771_41820[(2)] = inst_41711);

(statearr_41771_41820[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (31))){
var inst_41739 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41760__$1 = state_41760;
if(cljs.core.truth_(inst_41739)){
var statearr_41772_41821 = state_41760__$1;
(statearr_41772_41821[(1)] = (34));

} else {
var statearr_41773_41822 = state_41760__$1;
(statearr_41773_41822[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (32))){
var inst_41748 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
var statearr_41774_41823 = state_41760__$1;
(statearr_41774_41823[(2)] = inst_41748);

(statearr_41774_41823[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (33))){
var inst_41735 = (state_41760[(2)]);
var inst_41736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41737 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41736);
var state_41760__$1 = (function (){var statearr_41775 = state_41760;
(statearr_41775[(8)] = inst_41735);

return statearr_41775;
})();
var statearr_41776_41824 = state_41760__$1;
(statearr_41776_41824[(2)] = inst_41737);

(statearr_41776_41824[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (13))){
var inst_41694 = figwheel.client.heads_up.clear.call(null);
var state_41760__$1 = state_41760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41760__$1,(16),inst_41694);
} else {
if((state_val_41761 === (22))){
var inst_41715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41716 = figwheel.client.heads_up.append_warning_message.call(null,inst_41715);
var state_41760__$1 = state_41760;
var statearr_41777_41825 = state_41760__$1;
(statearr_41777_41825[(2)] = inst_41716);

(statearr_41777_41825[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (36))){
var inst_41746 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
var statearr_41778_41826 = state_41760__$1;
(statearr_41778_41826[(2)] = inst_41746);

(statearr_41778_41826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (29))){
var inst_41726 = (state_41760[(2)]);
var inst_41727 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41728 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41727);
var state_41760__$1 = (function (){var statearr_41779 = state_41760;
(statearr_41779[(9)] = inst_41726);

return statearr_41779;
})();
var statearr_41780_41827 = state_41760__$1;
(statearr_41780_41827[(2)] = inst_41728);

(statearr_41780_41827[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (6))){
var inst_41675 = (state_41760[(10)]);
var state_41760__$1 = state_41760;
var statearr_41781_41828 = state_41760__$1;
(statearr_41781_41828[(2)] = inst_41675);

(statearr_41781_41828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (28))){
var inst_41722 = (state_41760[(2)]);
var inst_41723 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41724 = figwheel.client.heads_up.display_warning.call(null,inst_41723);
var state_41760__$1 = (function (){var statearr_41782 = state_41760;
(statearr_41782[(11)] = inst_41722);

return statearr_41782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41760__$1,(29),inst_41724);
} else {
if((state_val_41761 === (25))){
var inst_41720 = figwheel.client.heads_up.clear.call(null);
var state_41760__$1 = state_41760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41760__$1,(28),inst_41720);
} else {
if((state_val_41761 === (34))){
var inst_41741 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41760__$1 = state_41760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41760__$1,(37),inst_41741);
} else {
if((state_val_41761 === (17))){
var inst_41700 = (state_41760[(2)]);
var inst_41701 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41702 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41701);
var state_41760__$1 = (function (){var statearr_41783 = state_41760;
(statearr_41783[(12)] = inst_41700);

return statearr_41783;
})();
var statearr_41784_41829 = state_41760__$1;
(statearr_41784_41829[(2)] = inst_41702);

(statearr_41784_41829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (3))){
var inst_41692 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41760__$1 = state_41760;
if(cljs.core.truth_(inst_41692)){
var statearr_41785_41830 = state_41760__$1;
(statearr_41785_41830[(1)] = (13));

} else {
var statearr_41786_41831 = state_41760__$1;
(statearr_41786_41831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (12))){
var inst_41688 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
var statearr_41787_41832 = state_41760__$1;
(statearr_41787_41832[(2)] = inst_41688);

(statearr_41787_41832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (2))){
var inst_41675 = (state_41760[(10)]);
var inst_41675__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41760__$1 = (function (){var statearr_41788 = state_41760;
(statearr_41788[(10)] = inst_41675__$1);

return statearr_41788;
})();
if(cljs.core.truth_(inst_41675__$1)){
var statearr_41789_41833 = state_41760__$1;
(statearr_41789_41833[(1)] = (5));

} else {
var statearr_41790_41834 = state_41760__$1;
(statearr_41790_41834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (23))){
var inst_41718 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41760__$1 = state_41760;
if(cljs.core.truth_(inst_41718)){
var statearr_41791_41835 = state_41760__$1;
(statearr_41791_41835[(1)] = (25));

} else {
var statearr_41792_41836 = state_41760__$1;
(statearr_41792_41836[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (35))){
var state_41760__$1 = state_41760;
var statearr_41793_41837 = state_41760__$1;
(statearr_41793_41837[(2)] = null);

(statearr_41793_41837[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (19))){
var inst_41713 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41760__$1 = state_41760;
if(cljs.core.truth_(inst_41713)){
var statearr_41794_41838 = state_41760__$1;
(statearr_41794_41838[(1)] = (22));

} else {
var statearr_41795_41839 = state_41760__$1;
(statearr_41795_41839[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (11))){
var inst_41684 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
var statearr_41796_41840 = state_41760__$1;
(statearr_41796_41840[(2)] = inst_41684);

(statearr_41796_41840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (9))){
var inst_41686 = figwheel.client.heads_up.clear.call(null);
var state_41760__$1 = state_41760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41760__$1,(12),inst_41686);
} else {
if((state_val_41761 === (5))){
var inst_41677 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41760__$1 = state_41760;
var statearr_41797_41841 = state_41760__$1;
(statearr_41797_41841[(2)] = inst_41677);

(statearr_41797_41841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (14))){
var inst_41704 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41760__$1 = state_41760;
if(cljs.core.truth_(inst_41704)){
var statearr_41798_41842 = state_41760__$1;
(statearr_41798_41842[(1)] = (18));

} else {
var statearr_41799_41843 = state_41760__$1;
(statearr_41799_41843[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (26))){
var inst_41730 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41760__$1 = state_41760;
if(cljs.core.truth_(inst_41730)){
var statearr_41800_41844 = state_41760__$1;
(statearr_41800_41844[(1)] = (30));

} else {
var statearr_41801_41845 = state_41760__$1;
(statearr_41801_41845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (16))){
var inst_41696 = (state_41760[(2)]);
var inst_41697 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41698 = figwheel.client.heads_up.display_exception.call(null,inst_41697);
var state_41760__$1 = (function (){var statearr_41802 = state_41760;
(statearr_41802[(13)] = inst_41696);

return statearr_41802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41760__$1,(17),inst_41698);
} else {
if((state_val_41761 === (30))){
var inst_41732 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41733 = figwheel.client.heads_up.display_warning.call(null,inst_41732);
var state_41760__$1 = state_41760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41760__$1,(33),inst_41733);
} else {
if((state_val_41761 === (10))){
var inst_41690 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
var statearr_41803_41846 = state_41760__$1;
(statearr_41803_41846[(2)] = inst_41690);

(statearr_41803_41846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (18))){
var inst_41706 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41707 = figwheel.client.heads_up.display_exception.call(null,inst_41706);
var state_41760__$1 = state_41760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41760__$1,(21),inst_41707);
} else {
if((state_val_41761 === (37))){
var inst_41743 = (state_41760[(2)]);
var state_41760__$1 = state_41760;
var statearr_41804_41847 = state_41760__$1;
(statearr_41804_41847[(2)] = inst_41743);

(statearr_41804_41847[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41761 === (8))){
var inst_41682 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41760__$1 = state_41760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41760__$1,(11),inst_41682);
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
});})(c__27175__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27154__auto__,c__27175__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto____0 = (function (){
var statearr_41808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41808[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto__);

(statearr_41808[(1)] = (1));

return statearr_41808;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto____1 = (function (state_41760){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_41760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e41809){if((e41809 instanceof Object)){
var ex__27158__auto__ = e41809;
var statearr_41810_41848 = state_41760;
(statearr_41810_41848[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41849 = state_41760;
state_41760 = G__41849;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto__ = function(state_41760){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto____1.call(this,state_41760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__,msg_hist,msg_names,msg))
})();
var state__27177__auto__ = (function (){var statearr_41811 = f__27176__auto__.call(null);
(statearr_41811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_41811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__,msg_hist,msg_names,msg))
);

return c__27175__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27175__auto___41912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___41912,ch){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___41912,ch){
return (function (state_41895){
var state_val_41896 = (state_41895[(1)]);
if((state_val_41896 === (1))){
var state_41895__$1 = state_41895;
var statearr_41897_41913 = state_41895__$1;
(statearr_41897_41913[(2)] = null);

(statearr_41897_41913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41896 === (2))){
var state_41895__$1 = state_41895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41895__$1,(4),ch);
} else {
if((state_val_41896 === (3))){
var inst_41893 = (state_41895[(2)]);
var state_41895__$1 = state_41895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41895__$1,inst_41893);
} else {
if((state_val_41896 === (4))){
var inst_41883 = (state_41895[(7)]);
var inst_41883__$1 = (state_41895[(2)]);
var state_41895__$1 = (function (){var statearr_41898 = state_41895;
(statearr_41898[(7)] = inst_41883__$1);

return statearr_41898;
})();
if(cljs.core.truth_(inst_41883__$1)){
var statearr_41899_41914 = state_41895__$1;
(statearr_41899_41914[(1)] = (5));

} else {
var statearr_41900_41915 = state_41895__$1;
(statearr_41900_41915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41896 === (5))){
var inst_41883 = (state_41895[(7)]);
var inst_41885 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41883);
var state_41895__$1 = state_41895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41895__$1,(8),inst_41885);
} else {
if((state_val_41896 === (6))){
var state_41895__$1 = state_41895;
var statearr_41901_41916 = state_41895__$1;
(statearr_41901_41916[(2)] = null);

(statearr_41901_41916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41896 === (7))){
var inst_41891 = (state_41895[(2)]);
var state_41895__$1 = state_41895;
var statearr_41902_41917 = state_41895__$1;
(statearr_41902_41917[(2)] = inst_41891);

(statearr_41902_41917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41896 === (8))){
var inst_41887 = (state_41895[(2)]);
var state_41895__$1 = (function (){var statearr_41903 = state_41895;
(statearr_41903[(8)] = inst_41887);

return statearr_41903;
})();
var statearr_41904_41918 = state_41895__$1;
(statearr_41904_41918[(2)] = null);

(statearr_41904_41918[(1)] = (2));


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
});})(c__27175__auto___41912,ch))
;
return ((function (switch__27154__auto__,c__27175__auto___41912,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27155__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27155__auto____0 = (function (){
var statearr_41908 = [null,null,null,null,null,null,null,null,null];
(statearr_41908[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27155__auto__);

(statearr_41908[(1)] = (1));

return statearr_41908;
});
var figwheel$client$heads_up_plugin_$_state_machine__27155__auto____1 = (function (state_41895){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_41895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e41909){if((e41909 instanceof Object)){
var ex__27158__auto__ = e41909;
var statearr_41910_41919 = state_41895;
(statearr_41910_41919[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41920 = state_41895;
state_41895 = G__41920;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27155__auto__ = function(state_41895){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27155__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27155__auto____1.call(this,state_41895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27155__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27155__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___41912,ch))
})();
var state__27177__auto__ = (function (){var statearr_41911 = f__27176__auto__.call(null);
(statearr_41911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___41912);

return statearr_41911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___41912,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__){
return (function (state_41941){
var state_val_41942 = (state_41941[(1)]);
if((state_val_41942 === (1))){
var inst_41936 = cljs.core.async.timeout.call(null,(3000));
var state_41941__$1 = state_41941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41941__$1,(2),inst_41936);
} else {
if((state_val_41942 === (2))){
var inst_41938 = (state_41941[(2)]);
var inst_41939 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41941__$1 = (function (){var statearr_41943 = state_41941;
(statearr_41943[(7)] = inst_41938);

return statearr_41943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41941__$1,inst_41939);
} else {
return null;
}
}
});})(c__27175__auto__))
;
return ((function (switch__27154__auto__,c__27175__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27155__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27155__auto____0 = (function (){
var statearr_41947 = [null,null,null,null,null,null,null,null];
(statearr_41947[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27155__auto__);

(statearr_41947[(1)] = (1));

return statearr_41947;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27155__auto____1 = (function (state_41941){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_41941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e41948){if((e41948 instanceof Object)){
var ex__27158__auto__ = e41948;
var statearr_41949_41951 = state_41941;
(statearr_41949_41951[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41952 = state_41941;
state_41941 = G__41952;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27155__auto__ = function(state_41941){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27155__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27155__auto____1.call(this,state_41941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27155__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27155__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__))
})();
var state__27177__auto__ = (function (){var statearr_41950 = f__27176__auto__.call(null);
(statearr_41950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_41950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__))
);

return c__27175__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__,figwheel_version,temp__4657__auto__){
return (function (state_41975){
var state_val_41976 = (state_41975[(1)]);
if((state_val_41976 === (1))){
var inst_41969 = cljs.core.async.timeout.call(null,(2000));
var state_41975__$1 = state_41975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41975__$1,(2),inst_41969);
} else {
if((state_val_41976 === (2))){
var inst_41971 = (state_41975[(2)]);
var inst_41972 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_41973 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41972);
var state_41975__$1 = (function (){var statearr_41977 = state_41975;
(statearr_41977[(7)] = inst_41971);

return statearr_41977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41975__$1,inst_41973);
} else {
return null;
}
}
});})(c__27175__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27154__auto__,c__27175__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto____0 = (function (){
var statearr_41981 = [null,null,null,null,null,null,null,null];
(statearr_41981[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto__);

(statearr_41981[(1)] = (1));

return statearr_41981;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto____1 = (function (state_41975){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_41975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e41982){if((e41982 instanceof Object)){
var ex__27158__auto__ = e41982;
var statearr_41983_41985 = state_41975;
(statearr_41983_41985[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41986 = state_41975;
state_41975 = G__41986;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto__ = function(state_41975){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto____1.call(this,state_41975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27177__auto__ = (function (){var statearr_41984 = f__27176__auto__.call(null);
(statearr_41984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_41984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__,figwheel_version,temp__4657__auto__))
);

return c__27175__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41987){
var map__41991 = p__41987;
var map__41991__$1 = ((((!((map__41991 == null)))?((((map__41991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41991):map__41991);
var file = cljs.core.get.call(null,map__41991__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41991__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41991__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41993 = "";
var G__41993__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__41993),cljs.core.str("file "),cljs.core.str(file)].join(''):G__41993);
var G__41993__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__41993__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__41993__$1);
if(cljs.core.truth_((function (){var and__24860__auto__ = line;
if(cljs.core.truth_(and__24860__auto__)){
return column;
} else {
return and__24860__auto__;
}
})())){
return [cljs.core.str(G__41993__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__41993__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41994){
var map__42001 = p__41994;
var map__42001__$1 = ((((!((map__42001 == null)))?((((map__42001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42001):map__42001);
var ed = map__42001__$1;
var formatted_exception = cljs.core.get.call(null,map__42001__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42001__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42001__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42003_42007 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42004_42008 = null;
var count__42005_42009 = (0);
var i__42006_42010 = (0);
while(true){
if((i__42006_42010 < count__42005_42009)){
var msg_42011 = cljs.core._nth.call(null,chunk__42004_42008,i__42006_42010);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42011);

var G__42012 = seq__42003_42007;
var G__42013 = chunk__42004_42008;
var G__42014 = count__42005_42009;
var G__42015 = (i__42006_42010 + (1));
seq__42003_42007 = G__42012;
chunk__42004_42008 = G__42013;
count__42005_42009 = G__42014;
i__42006_42010 = G__42015;
continue;
} else {
var temp__4657__auto___42016 = cljs.core.seq.call(null,seq__42003_42007);
if(temp__4657__auto___42016){
var seq__42003_42017__$1 = temp__4657__auto___42016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42003_42017__$1)){
var c__25683__auto___42018 = cljs.core.chunk_first.call(null,seq__42003_42017__$1);
var G__42019 = cljs.core.chunk_rest.call(null,seq__42003_42017__$1);
var G__42020 = c__25683__auto___42018;
var G__42021 = cljs.core.count.call(null,c__25683__auto___42018);
var G__42022 = (0);
seq__42003_42007 = G__42019;
chunk__42004_42008 = G__42020;
count__42005_42009 = G__42021;
i__42006_42010 = G__42022;
continue;
} else {
var msg_42023 = cljs.core.first.call(null,seq__42003_42017__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42023);

var G__42024 = cljs.core.next.call(null,seq__42003_42017__$1);
var G__42025 = null;
var G__42026 = (0);
var G__42027 = (0);
seq__42003_42007 = G__42024;
chunk__42004_42008 = G__42025;
count__42005_42009 = G__42026;
i__42006_42010 = G__42027;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42028){
var map__42031 = p__42028;
var map__42031__$1 = ((((!((map__42031 == null)))?((((map__42031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42031):map__42031);
var w = map__42031__$1;
var message = cljs.core.get.call(null,map__42031__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24860__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24860__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24860__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42043 = cljs.core.seq.call(null,plugins);
var chunk__42044 = null;
var count__42045 = (0);
var i__42046 = (0);
while(true){
if((i__42046 < count__42045)){
var vec__42047 = cljs.core._nth.call(null,chunk__42044,i__42046);
var k = cljs.core.nth.call(null,vec__42047,(0),null);
var plugin = cljs.core.nth.call(null,vec__42047,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42053 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42043,chunk__42044,count__42045,i__42046,pl_42053,vec__42047,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42053.call(null,msg_hist);
});})(seq__42043,chunk__42044,count__42045,i__42046,pl_42053,vec__42047,k,plugin))
);
} else {
}

var G__42054 = seq__42043;
var G__42055 = chunk__42044;
var G__42056 = count__42045;
var G__42057 = (i__42046 + (1));
seq__42043 = G__42054;
chunk__42044 = G__42055;
count__42045 = G__42056;
i__42046 = G__42057;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42043);
if(temp__4657__auto__){
var seq__42043__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42043__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__42043__$1);
var G__42058 = cljs.core.chunk_rest.call(null,seq__42043__$1);
var G__42059 = c__25683__auto__;
var G__42060 = cljs.core.count.call(null,c__25683__auto__);
var G__42061 = (0);
seq__42043 = G__42058;
chunk__42044 = G__42059;
count__42045 = G__42060;
i__42046 = G__42061;
continue;
} else {
var vec__42050 = cljs.core.first.call(null,seq__42043__$1);
var k = cljs.core.nth.call(null,vec__42050,(0),null);
var plugin = cljs.core.nth.call(null,vec__42050,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42062 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42043,chunk__42044,count__42045,i__42046,pl_42062,vec__42050,k,plugin,seq__42043__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42062.call(null,msg_hist);
});})(seq__42043,chunk__42044,count__42045,i__42046,pl_42062,vec__42050,k,plugin,seq__42043__$1,temp__4657__auto__))
);
} else {
}

var G__42063 = cljs.core.next.call(null,seq__42043__$1);
var G__42064 = null;
var G__42065 = (0);
var G__42066 = (0);
seq__42043 = G__42063;
chunk__42044 = G__42064;
count__42045 = G__42065;
i__42046 = G__42066;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args42067 = [];
var len__25947__auto___42074 = arguments.length;
var i__25948__auto___42075 = (0);
while(true){
if((i__25948__auto___42075 < len__25947__auto___42074)){
args42067.push((arguments[i__25948__auto___42075]));

var G__42076 = (i__25948__auto___42075 + (1));
i__25948__auto___42075 = G__42076;
continue;
} else {
}
break;
}

var G__42069 = args42067.length;
switch (G__42069) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42067.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42070_42078 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42071_42079 = null;
var count__42072_42080 = (0);
var i__42073_42081 = (0);
while(true){
if((i__42073_42081 < count__42072_42080)){
var msg_42082 = cljs.core._nth.call(null,chunk__42071_42079,i__42073_42081);
figwheel.client.socket.handle_incoming_message.call(null,msg_42082);

var G__42083 = seq__42070_42078;
var G__42084 = chunk__42071_42079;
var G__42085 = count__42072_42080;
var G__42086 = (i__42073_42081 + (1));
seq__42070_42078 = G__42083;
chunk__42071_42079 = G__42084;
count__42072_42080 = G__42085;
i__42073_42081 = G__42086;
continue;
} else {
var temp__4657__auto___42087 = cljs.core.seq.call(null,seq__42070_42078);
if(temp__4657__auto___42087){
var seq__42070_42088__$1 = temp__4657__auto___42087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42070_42088__$1)){
var c__25683__auto___42089 = cljs.core.chunk_first.call(null,seq__42070_42088__$1);
var G__42090 = cljs.core.chunk_rest.call(null,seq__42070_42088__$1);
var G__42091 = c__25683__auto___42089;
var G__42092 = cljs.core.count.call(null,c__25683__auto___42089);
var G__42093 = (0);
seq__42070_42078 = G__42090;
chunk__42071_42079 = G__42091;
count__42072_42080 = G__42092;
i__42073_42081 = G__42093;
continue;
} else {
var msg_42094 = cljs.core.first.call(null,seq__42070_42088__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42094);

var G__42095 = cljs.core.next.call(null,seq__42070_42088__$1);
var G__42096 = null;
var G__42097 = (0);
var G__42098 = (0);
seq__42070_42078 = G__42095;
chunk__42071_42079 = G__42096;
count__42072_42080 = G__42097;
i__42073_42081 = G__42098;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25954__auto__ = [];
var len__25947__auto___42103 = arguments.length;
var i__25948__auto___42104 = (0);
while(true){
if((i__25948__auto___42104 < len__25947__auto___42103)){
args__25954__auto__.push((arguments[i__25948__auto___42104]));

var G__42105 = (i__25948__auto___42104 + (1));
i__25948__auto___42104 = G__42105;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42100){
var map__42101 = p__42100;
var map__42101__$1 = ((((!((map__42101 == null)))?((((map__42101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42101):map__42101);
var opts = map__42101__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42099){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42099));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42107){if((e42107 instanceof Error)){
var e = e42107;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42107;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__42111){
var map__42112 = p__42111;
var map__42112__$1 = ((((!((map__42112 == null)))?((((map__42112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42112):map__42112);
var msg_name = cljs.core.get.call(null,map__42112__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1490248917094