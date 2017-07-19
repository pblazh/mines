// Compiled by ClojureScript 1.9.229 {}
goog.provide('mines.channels');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
mines.channels.EVENTCNANNEL = cljs.core.async.chan.call(null);
mines.channels.start = (function mines$channels$start(events){
var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__){
return (function (state_37061){
var state_val_37062 = (state_37061[(1)]);
if((state_val_37062 === (1))){
var state_37061__$1 = state_37061;
var statearr_37063_37077 = state_37061__$1;
(statearr_37063_37077[(2)] = null);

(statearr_37063_37077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (2))){
var state_37061__$1 = state_37061;
var statearr_37064_37078 = state_37061__$1;
(statearr_37064_37078[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (3))){
var inst_37059 = (state_37061[(2)]);
var state_37061__$1 = state_37061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37061__$1,inst_37059);
} else {
if((state_val_37062 === (4))){
var state_37061__$1 = state_37061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37061__$1,(7),mines.channels.EVENTCNANNEL);
} else {
if((state_val_37062 === (5))){
var state_37061__$1 = state_37061;
var statearr_37066_37079 = state_37061__$1;
(statearr_37066_37079[(2)] = null);

(statearr_37066_37079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (6))){
var inst_37057 = (state_37061[(2)]);
var state_37061__$1 = state_37061;
var statearr_37067_37080 = state_37061__$1;
(statearr_37067_37080[(2)] = inst_37057);

(statearr_37067_37080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (7))){
var inst_37049 = (state_37061[(2)]);
var inst_37050 = cljs.core.nth.call(null,inst_37049,(0),null);
var inst_37051 = cljs.core.nth.call(null,inst_37049,(1),null);
var inst_37052 = inst_37050.call(null,events);
var inst_37053 = inst_37052.call(null,inst_37051);
var state_37061__$1 = (function (){var statearr_37068 = state_37061;
(statearr_37068[(7)] = inst_37053);

return statearr_37068;
})();
var statearr_37069_37081 = state_37061__$1;
(statearr_37069_37081[(2)] = null);

(statearr_37069_37081[(1)] = (2));


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
});})(c__27175__auto__))
;
return ((function (switch__27154__auto__,c__27175__auto__){
return (function() {
var mines$channels$start_$_state_machine__27155__auto__ = null;
var mines$channels$start_$_state_machine__27155__auto____0 = (function (){
var statearr_37073 = [null,null,null,null,null,null,null,null];
(statearr_37073[(0)] = mines$channels$start_$_state_machine__27155__auto__);

(statearr_37073[(1)] = (1));

return statearr_37073;
});
var mines$channels$start_$_state_machine__27155__auto____1 = (function (state_37061){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_37061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e37074){if((e37074 instanceof Object)){
var ex__27158__auto__ = e37074;
var statearr_37075_37082 = state_37061;
(statearr_37075_37082[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37083 = state_37061;
state_37061 = G__37083;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
mines$channels$start_$_state_machine__27155__auto__ = function(state_37061){
switch(arguments.length){
case 0:
return mines$channels$start_$_state_machine__27155__auto____0.call(this);
case 1:
return mines$channels$start_$_state_machine__27155__auto____1.call(this,state_37061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mines$channels$start_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = mines$channels$start_$_state_machine__27155__auto____0;
mines$channels$start_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = mines$channels$start_$_state_machine__27155__auto____1;
return mines$channels$start_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__))
})();
var state__27177__auto__ = (function (){var statearr_37076 = f__27176__auto__.call(null);
(statearr_37076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_37076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__))
);

return c__27175__auto__;
});

//# sourceMappingURL=channels.js.map?rel=1490248908033