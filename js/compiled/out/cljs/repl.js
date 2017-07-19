// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40838){
var map__40863 = p__40838;
var map__40863__$1 = ((((!((map__40863 == null)))?((((map__40863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40863):map__40863);
var m = map__40863__$1;
var n = cljs.core.get.call(null,map__40863__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40863__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40865_40887 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40866_40888 = null;
var count__40867_40889 = (0);
var i__40868_40890 = (0);
while(true){
if((i__40868_40890 < count__40867_40889)){
var f_40891 = cljs.core._nth.call(null,chunk__40866_40888,i__40868_40890);
cljs.core.println.call(null,"  ",f_40891);

var G__40892 = seq__40865_40887;
var G__40893 = chunk__40866_40888;
var G__40894 = count__40867_40889;
var G__40895 = (i__40868_40890 + (1));
seq__40865_40887 = G__40892;
chunk__40866_40888 = G__40893;
count__40867_40889 = G__40894;
i__40868_40890 = G__40895;
continue;
} else {
var temp__4657__auto___40896 = cljs.core.seq.call(null,seq__40865_40887);
if(temp__4657__auto___40896){
var seq__40865_40897__$1 = temp__4657__auto___40896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40865_40897__$1)){
var c__25683__auto___40898 = cljs.core.chunk_first.call(null,seq__40865_40897__$1);
var G__40899 = cljs.core.chunk_rest.call(null,seq__40865_40897__$1);
var G__40900 = c__25683__auto___40898;
var G__40901 = cljs.core.count.call(null,c__25683__auto___40898);
var G__40902 = (0);
seq__40865_40887 = G__40899;
chunk__40866_40888 = G__40900;
count__40867_40889 = G__40901;
i__40868_40890 = G__40902;
continue;
} else {
var f_40903 = cljs.core.first.call(null,seq__40865_40897__$1);
cljs.core.println.call(null,"  ",f_40903);

var G__40904 = cljs.core.next.call(null,seq__40865_40897__$1);
var G__40905 = null;
var G__40906 = (0);
var G__40907 = (0);
seq__40865_40887 = G__40904;
chunk__40866_40888 = G__40905;
count__40867_40889 = G__40906;
i__40868_40890 = G__40907;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40908 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40908);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40908)))?cljs.core.second.call(null,arglists_40908):arglists_40908));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40869_40909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40870_40910 = null;
var count__40871_40911 = (0);
var i__40872_40912 = (0);
while(true){
if((i__40872_40912 < count__40871_40911)){
var vec__40873_40913 = cljs.core._nth.call(null,chunk__40870_40910,i__40872_40912);
var name_40914 = cljs.core.nth.call(null,vec__40873_40913,(0),null);
var map__40876_40915 = cljs.core.nth.call(null,vec__40873_40913,(1),null);
var map__40876_40916__$1 = ((((!((map__40876_40915 == null)))?((((map__40876_40915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40876_40915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40876_40915):map__40876_40915);
var doc_40917 = cljs.core.get.call(null,map__40876_40916__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40918 = cljs.core.get.call(null,map__40876_40916__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40914);

cljs.core.println.call(null," ",arglists_40918);

if(cljs.core.truth_(doc_40917)){
cljs.core.println.call(null," ",doc_40917);
} else {
}

var G__40919 = seq__40869_40909;
var G__40920 = chunk__40870_40910;
var G__40921 = count__40871_40911;
var G__40922 = (i__40872_40912 + (1));
seq__40869_40909 = G__40919;
chunk__40870_40910 = G__40920;
count__40871_40911 = G__40921;
i__40872_40912 = G__40922;
continue;
} else {
var temp__4657__auto___40923 = cljs.core.seq.call(null,seq__40869_40909);
if(temp__4657__auto___40923){
var seq__40869_40924__$1 = temp__4657__auto___40923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40869_40924__$1)){
var c__25683__auto___40925 = cljs.core.chunk_first.call(null,seq__40869_40924__$1);
var G__40926 = cljs.core.chunk_rest.call(null,seq__40869_40924__$1);
var G__40927 = c__25683__auto___40925;
var G__40928 = cljs.core.count.call(null,c__25683__auto___40925);
var G__40929 = (0);
seq__40869_40909 = G__40926;
chunk__40870_40910 = G__40927;
count__40871_40911 = G__40928;
i__40872_40912 = G__40929;
continue;
} else {
var vec__40878_40930 = cljs.core.first.call(null,seq__40869_40924__$1);
var name_40931 = cljs.core.nth.call(null,vec__40878_40930,(0),null);
var map__40881_40932 = cljs.core.nth.call(null,vec__40878_40930,(1),null);
var map__40881_40933__$1 = ((((!((map__40881_40932 == null)))?((((map__40881_40932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40881_40932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40881_40932):map__40881_40932);
var doc_40934 = cljs.core.get.call(null,map__40881_40933__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40935 = cljs.core.get.call(null,map__40881_40933__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40931);

cljs.core.println.call(null," ",arglists_40935);

if(cljs.core.truth_(doc_40934)){
cljs.core.println.call(null," ",doc_40934);
} else {
}

var G__40936 = cljs.core.next.call(null,seq__40869_40924__$1);
var G__40937 = null;
var G__40938 = (0);
var G__40939 = (0);
seq__40869_40909 = G__40936;
chunk__40870_40910 = G__40937;
count__40871_40911 = G__40938;
i__40872_40912 = G__40939;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__40883 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40884 = null;
var count__40885 = (0);
var i__40886 = (0);
while(true){
if((i__40886 < count__40885)){
var role = cljs.core._nth.call(null,chunk__40884,i__40886);
var temp__4657__auto___40940__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___40940__$1)){
var spec_40941 = temp__4657__auto___40940__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40941));
} else {
}

var G__40942 = seq__40883;
var G__40943 = chunk__40884;
var G__40944 = count__40885;
var G__40945 = (i__40886 + (1));
seq__40883 = G__40942;
chunk__40884 = G__40943;
count__40885 = G__40944;
i__40886 = G__40945;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__40883);
if(temp__4657__auto____$1){
var seq__40883__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40883__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__40883__$1);
var G__40946 = cljs.core.chunk_rest.call(null,seq__40883__$1);
var G__40947 = c__25683__auto__;
var G__40948 = cljs.core.count.call(null,c__25683__auto__);
var G__40949 = (0);
seq__40883 = G__40946;
chunk__40884 = G__40947;
count__40885 = G__40948;
i__40886 = G__40949;
continue;
} else {
var role = cljs.core.first.call(null,seq__40883__$1);
var temp__4657__auto___40950__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___40950__$2)){
var spec_40951 = temp__4657__auto___40950__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_40951));
} else {
}

var G__40952 = cljs.core.next.call(null,seq__40883__$1);
var G__40953 = null;
var G__40954 = (0);
var G__40955 = (0);
seq__40883 = G__40952;
chunk__40884 = G__40953;
count__40885 = G__40954;
i__40886 = G__40955;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1490248915617