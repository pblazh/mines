// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24872__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24872__auto__){
return or__24872__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24872__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38804_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38804_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38809 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38810 = null;
var count__38811 = (0);
var i__38812 = (0);
while(true){
if((i__38812 < count__38811)){
var n = cljs.core._nth.call(null,chunk__38810,i__38812);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38813 = seq__38809;
var G__38814 = chunk__38810;
var G__38815 = count__38811;
var G__38816 = (i__38812 + (1));
seq__38809 = G__38813;
chunk__38810 = G__38814;
count__38811 = G__38815;
i__38812 = G__38816;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38809);
if(temp__4657__auto__){
var seq__38809__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38809__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__38809__$1);
var G__38817 = cljs.core.chunk_rest.call(null,seq__38809__$1);
var G__38818 = c__25683__auto__;
var G__38819 = cljs.core.count.call(null,c__25683__auto__);
var G__38820 = (0);
seq__38809 = G__38817;
chunk__38810 = G__38818;
count__38811 = G__38819;
i__38812 = G__38820;
continue;
} else {
var n = cljs.core.first.call(null,seq__38809__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38821 = cljs.core.next.call(null,seq__38809__$1);
var G__38822 = null;
var G__38823 = (0);
var G__38824 = (0);
seq__38809 = G__38821;
chunk__38810 = G__38822;
count__38811 = G__38823;
i__38812 = G__38824;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38875_38886 = cljs.core.seq.call(null,deps);
var chunk__38876_38887 = null;
var count__38877_38888 = (0);
var i__38878_38889 = (0);
while(true){
if((i__38878_38889 < count__38877_38888)){
var dep_38890 = cljs.core._nth.call(null,chunk__38876_38887,i__38878_38889);
topo_sort_helper_STAR_.call(null,dep_38890,(depth + (1)),state);

var G__38891 = seq__38875_38886;
var G__38892 = chunk__38876_38887;
var G__38893 = count__38877_38888;
var G__38894 = (i__38878_38889 + (1));
seq__38875_38886 = G__38891;
chunk__38876_38887 = G__38892;
count__38877_38888 = G__38893;
i__38878_38889 = G__38894;
continue;
} else {
var temp__4657__auto___38895 = cljs.core.seq.call(null,seq__38875_38886);
if(temp__4657__auto___38895){
var seq__38875_38896__$1 = temp__4657__auto___38895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38875_38896__$1)){
var c__25683__auto___38897 = cljs.core.chunk_first.call(null,seq__38875_38896__$1);
var G__38898 = cljs.core.chunk_rest.call(null,seq__38875_38896__$1);
var G__38899 = c__25683__auto___38897;
var G__38900 = cljs.core.count.call(null,c__25683__auto___38897);
var G__38901 = (0);
seq__38875_38886 = G__38898;
chunk__38876_38887 = G__38899;
count__38877_38888 = G__38900;
i__38878_38889 = G__38901;
continue;
} else {
var dep_38902 = cljs.core.first.call(null,seq__38875_38896__$1);
topo_sort_helper_STAR_.call(null,dep_38902,(depth + (1)),state);

var G__38903 = cljs.core.next.call(null,seq__38875_38896__$1);
var G__38904 = null;
var G__38905 = (0);
var G__38906 = (0);
seq__38875_38886 = G__38903;
chunk__38876_38887 = G__38904;
count__38877_38888 = G__38905;
i__38878_38889 = G__38906;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38879){
var vec__38883 = p__38879;
var seq__38884 = cljs.core.seq.call(null,vec__38883);
var first__38885 = cljs.core.first.call(null,seq__38884);
var seq__38884__$1 = cljs.core.next.call(null,seq__38884);
var x = first__38885;
var xs = seq__38884__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38883,seq__38884,first__38885,seq__38884__$1,x,xs,get_deps__$1){
return (function (p1__38825_SHARP_){
return clojure.set.difference.call(null,p1__38825_SHARP_,x);
});})(vec__38883,seq__38884,first__38885,seq__38884__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__38919 = cljs.core.seq.call(null,provides);
var chunk__38920 = null;
var count__38921 = (0);
var i__38922 = (0);
while(true){
if((i__38922 < count__38921)){
var prov = cljs.core._nth.call(null,chunk__38920,i__38922);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38923_38931 = cljs.core.seq.call(null,requires);
var chunk__38924_38932 = null;
var count__38925_38933 = (0);
var i__38926_38934 = (0);
while(true){
if((i__38926_38934 < count__38925_38933)){
var req_38935 = cljs.core._nth.call(null,chunk__38924_38932,i__38926_38934);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38935,prov);

var G__38936 = seq__38923_38931;
var G__38937 = chunk__38924_38932;
var G__38938 = count__38925_38933;
var G__38939 = (i__38926_38934 + (1));
seq__38923_38931 = G__38936;
chunk__38924_38932 = G__38937;
count__38925_38933 = G__38938;
i__38926_38934 = G__38939;
continue;
} else {
var temp__4657__auto___38940 = cljs.core.seq.call(null,seq__38923_38931);
if(temp__4657__auto___38940){
var seq__38923_38941__$1 = temp__4657__auto___38940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38923_38941__$1)){
var c__25683__auto___38942 = cljs.core.chunk_first.call(null,seq__38923_38941__$1);
var G__38943 = cljs.core.chunk_rest.call(null,seq__38923_38941__$1);
var G__38944 = c__25683__auto___38942;
var G__38945 = cljs.core.count.call(null,c__25683__auto___38942);
var G__38946 = (0);
seq__38923_38931 = G__38943;
chunk__38924_38932 = G__38944;
count__38925_38933 = G__38945;
i__38926_38934 = G__38946;
continue;
} else {
var req_38947 = cljs.core.first.call(null,seq__38923_38941__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38947,prov);

var G__38948 = cljs.core.next.call(null,seq__38923_38941__$1);
var G__38949 = null;
var G__38950 = (0);
var G__38951 = (0);
seq__38923_38931 = G__38948;
chunk__38924_38932 = G__38949;
count__38925_38933 = G__38950;
i__38926_38934 = G__38951;
continue;
}
} else {
}
}
break;
}

var G__38952 = seq__38919;
var G__38953 = chunk__38920;
var G__38954 = count__38921;
var G__38955 = (i__38922 + (1));
seq__38919 = G__38952;
chunk__38920 = G__38953;
count__38921 = G__38954;
i__38922 = G__38955;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38919);
if(temp__4657__auto__){
var seq__38919__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38919__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__38919__$1);
var G__38956 = cljs.core.chunk_rest.call(null,seq__38919__$1);
var G__38957 = c__25683__auto__;
var G__38958 = cljs.core.count.call(null,c__25683__auto__);
var G__38959 = (0);
seq__38919 = G__38956;
chunk__38920 = G__38957;
count__38921 = G__38958;
i__38922 = G__38959;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38919__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38927_38960 = cljs.core.seq.call(null,requires);
var chunk__38928_38961 = null;
var count__38929_38962 = (0);
var i__38930_38963 = (0);
while(true){
if((i__38930_38963 < count__38929_38962)){
var req_38964 = cljs.core._nth.call(null,chunk__38928_38961,i__38930_38963);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38964,prov);

var G__38965 = seq__38927_38960;
var G__38966 = chunk__38928_38961;
var G__38967 = count__38929_38962;
var G__38968 = (i__38930_38963 + (1));
seq__38927_38960 = G__38965;
chunk__38928_38961 = G__38966;
count__38929_38962 = G__38967;
i__38930_38963 = G__38968;
continue;
} else {
var temp__4657__auto___38969__$1 = cljs.core.seq.call(null,seq__38927_38960);
if(temp__4657__auto___38969__$1){
var seq__38927_38970__$1 = temp__4657__auto___38969__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38927_38970__$1)){
var c__25683__auto___38971 = cljs.core.chunk_first.call(null,seq__38927_38970__$1);
var G__38972 = cljs.core.chunk_rest.call(null,seq__38927_38970__$1);
var G__38973 = c__25683__auto___38971;
var G__38974 = cljs.core.count.call(null,c__25683__auto___38971);
var G__38975 = (0);
seq__38927_38960 = G__38972;
chunk__38928_38961 = G__38973;
count__38929_38962 = G__38974;
i__38930_38963 = G__38975;
continue;
} else {
var req_38976 = cljs.core.first.call(null,seq__38927_38970__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38976,prov);

var G__38977 = cljs.core.next.call(null,seq__38927_38970__$1);
var G__38978 = null;
var G__38979 = (0);
var G__38980 = (0);
seq__38927_38960 = G__38977;
chunk__38928_38961 = G__38978;
count__38929_38962 = G__38979;
i__38930_38963 = G__38980;
continue;
}
} else {
}
}
break;
}

var G__38981 = cljs.core.next.call(null,seq__38919__$1);
var G__38982 = null;
var G__38983 = (0);
var G__38984 = (0);
seq__38919 = G__38981;
chunk__38920 = G__38982;
count__38921 = G__38983;
i__38922 = G__38984;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__38989_38993 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38990_38994 = null;
var count__38991_38995 = (0);
var i__38992_38996 = (0);
while(true){
if((i__38992_38996 < count__38991_38995)){
var ns_38997 = cljs.core._nth.call(null,chunk__38990_38994,i__38992_38996);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38997);

var G__38998 = seq__38989_38993;
var G__38999 = chunk__38990_38994;
var G__39000 = count__38991_38995;
var G__39001 = (i__38992_38996 + (1));
seq__38989_38993 = G__38998;
chunk__38990_38994 = G__38999;
count__38991_38995 = G__39000;
i__38992_38996 = G__39001;
continue;
} else {
var temp__4657__auto___39002 = cljs.core.seq.call(null,seq__38989_38993);
if(temp__4657__auto___39002){
var seq__38989_39003__$1 = temp__4657__auto___39002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38989_39003__$1)){
var c__25683__auto___39004 = cljs.core.chunk_first.call(null,seq__38989_39003__$1);
var G__39005 = cljs.core.chunk_rest.call(null,seq__38989_39003__$1);
var G__39006 = c__25683__auto___39004;
var G__39007 = cljs.core.count.call(null,c__25683__auto___39004);
var G__39008 = (0);
seq__38989_38993 = G__39005;
chunk__38990_38994 = G__39006;
count__38991_38995 = G__39007;
i__38992_38996 = G__39008;
continue;
} else {
var ns_39009 = cljs.core.first.call(null,seq__38989_39003__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39009);

var G__39010 = cljs.core.next.call(null,seq__38989_39003__$1);
var G__39011 = null;
var G__39012 = (0);
var G__39013 = (0);
seq__38989_38993 = G__39010;
chunk__38990_38994 = G__39011;
count__38991_38995 = G__39012;
i__38992_38996 = G__39013;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24872__auto__ = goog.require__;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39014__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39015__i = 0, G__39015__a = new Array(arguments.length -  0);
while (G__39015__i < G__39015__a.length) {G__39015__a[G__39015__i] = arguments[G__39015__i + 0]; ++G__39015__i;}
  args = new cljs.core.IndexedSeq(G__39015__a,0);
} 
return G__39014__delegate.call(this,args);};
G__39014.cljs$lang$maxFixedArity = 0;
G__39014.cljs$lang$applyTo = (function (arglist__39016){
var args = cljs.core.seq(arglist__39016);
return G__39014__delegate(args);
});
G__39014.cljs$core$IFn$_invoke$arity$variadic = G__39014__delegate;
return G__39014;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39017 = cljs.core._EQ_;
var expr__39018 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39017.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39018))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__39017,expr__39018){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__39017,expr__39018))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__39017,expr__39018){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39020){if((e39020 instanceof Error)){
var e = e39020;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39020;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__39017,expr__39018))
} else {
if(cljs.core.truth_(pred__39017.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39018))){
return ((function (pred__39017,expr__39018){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__39017,expr__39018){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39017,expr__39018))
);

return deferred.addErrback(((function (deferred,pred__39017,expr__39018){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39017,expr__39018))
);
});
;})(pred__39017,expr__39018))
} else {
if(cljs.core.truth_(pred__39017.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39018))){
return ((function (pred__39017,expr__39018){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39021){if((e39021 instanceof Error)){
var e = e39021;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39021;

}
}})());
});
;})(pred__39017,expr__39018))
} else {
return ((function (pred__39017,expr__39018){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39017,expr__39018))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39022,callback){
var map__39025 = p__39022;
var map__39025__$1 = ((((!((map__39025 == null)))?((((map__39025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39025):map__39025);
var file_msg = map__39025__$1;
var request_url = cljs.core.get.call(null,map__39025__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39025,map__39025__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39025,map__39025__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__){
return (function (state_39049){
var state_val_39050 = (state_39049[(1)]);
if((state_val_39050 === (7))){
var inst_39045 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
var statearr_39051_39071 = state_39049__$1;
(statearr_39051_39071[(2)] = inst_39045);

(statearr_39051_39071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (1))){
var state_39049__$1 = state_39049;
var statearr_39052_39072 = state_39049__$1;
(statearr_39052_39072[(2)] = null);

(statearr_39052_39072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (4))){
var inst_39029 = (state_39049[(7)]);
var inst_39029__$1 = (state_39049[(2)]);
var state_39049__$1 = (function (){var statearr_39053 = state_39049;
(statearr_39053[(7)] = inst_39029__$1);

return statearr_39053;
})();
if(cljs.core.truth_(inst_39029__$1)){
var statearr_39054_39073 = state_39049__$1;
(statearr_39054_39073[(1)] = (5));

} else {
var statearr_39055_39074 = state_39049__$1;
(statearr_39055_39074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (6))){
var state_39049__$1 = state_39049;
var statearr_39056_39075 = state_39049__$1;
(statearr_39056_39075[(2)] = null);

(statearr_39056_39075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (3))){
var inst_39047 = (state_39049[(2)]);
var state_39049__$1 = state_39049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39049__$1,inst_39047);
} else {
if((state_val_39050 === (2))){
var state_39049__$1 = state_39049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39049__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39050 === (11))){
var inst_39041 = (state_39049[(2)]);
var state_39049__$1 = (function (){var statearr_39057 = state_39049;
(statearr_39057[(8)] = inst_39041);

return statearr_39057;
})();
var statearr_39058_39076 = state_39049__$1;
(statearr_39058_39076[(2)] = null);

(statearr_39058_39076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (9))){
var inst_39033 = (state_39049[(9)]);
var inst_39035 = (state_39049[(10)]);
var inst_39037 = inst_39035.call(null,inst_39033);
var state_39049__$1 = state_39049;
var statearr_39059_39077 = state_39049__$1;
(statearr_39059_39077[(2)] = inst_39037);

(statearr_39059_39077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (5))){
var inst_39029 = (state_39049[(7)]);
var inst_39031 = figwheel.client.file_reloading.blocking_load.call(null,inst_39029);
var state_39049__$1 = state_39049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39049__$1,(8),inst_39031);
} else {
if((state_val_39050 === (10))){
var inst_39033 = (state_39049[(9)]);
var inst_39039 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39033);
var state_39049__$1 = state_39049;
var statearr_39060_39078 = state_39049__$1;
(statearr_39060_39078[(2)] = inst_39039);

(statearr_39060_39078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39050 === (8))){
var inst_39035 = (state_39049[(10)]);
var inst_39029 = (state_39049[(7)]);
var inst_39033 = (state_39049[(2)]);
var inst_39034 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39035__$1 = cljs.core.get.call(null,inst_39034,inst_39029);
var state_39049__$1 = (function (){var statearr_39061 = state_39049;
(statearr_39061[(9)] = inst_39033);

(statearr_39061[(10)] = inst_39035__$1);

return statearr_39061;
})();
if(cljs.core.truth_(inst_39035__$1)){
var statearr_39062_39079 = state_39049__$1;
(statearr_39062_39079[(1)] = (9));

} else {
var statearr_39063_39080 = state_39049__$1;
(statearr_39063_39080[(1)] = (10));

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
});})(c__27175__auto__))
;
return ((function (switch__27154__auto__,c__27175__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27155__auto__ = null;
var figwheel$client$file_reloading$state_machine__27155__auto____0 = (function (){
var statearr_39067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39067[(0)] = figwheel$client$file_reloading$state_machine__27155__auto__);

(statearr_39067[(1)] = (1));

return statearr_39067;
});
var figwheel$client$file_reloading$state_machine__27155__auto____1 = (function (state_39049){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_39049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e39068){if((e39068 instanceof Object)){
var ex__27158__auto__ = e39068;
var statearr_39069_39081 = state_39049;
(statearr_39069_39081[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39082 = state_39049;
state_39049 = G__39082;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27155__auto__ = function(state_39049){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27155__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27155__auto____1.call(this,state_39049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27155__auto____0;
figwheel$client$file_reloading$state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27155__auto____1;
return figwheel$client$file_reloading$state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__))
})();
var state__27177__auto__ = (function (){var statearr_39070 = f__27176__auto__.call(null);
(statearr_39070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_39070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__))
);

return c__27175__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39083,callback){
var map__39086 = p__39083;
var map__39086__$1 = ((((!((map__39086 == null)))?((((map__39086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39086):map__39086);
var file_msg = map__39086__$1;
var namespace = cljs.core.get.call(null,map__39086__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39086,map__39086__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39086,map__39086__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39088){
var map__39091 = p__39088;
var map__39091__$1 = ((((!((map__39091 == null)))?((((map__39091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39091):map__39091);
var file_msg = map__39091__$1;
var namespace = cljs.core.get.call(null,map__39091__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39093){
var map__39096 = p__39093;
var map__39096__$1 = ((((!((map__39096 == null)))?((((map__39096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39096):map__39096);
var file_msg = map__39096__$1;
var namespace = cljs.core.get.call(null,map__39096__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24860__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24860__auto__){
var or__24872__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24860__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39098,callback){
var map__39101 = p__39098;
var map__39101__$1 = ((((!((map__39101 == null)))?((((map__39101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39101):map__39101);
var file_msg = map__39101__$1;
var request_url = cljs.core.get.call(null,map__39101__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39101__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27175__auto___39205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto___39205,out){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto___39205,out){
return (function (state_39187){
var state_val_39188 = (state_39187[(1)]);
if((state_val_39188 === (1))){
var inst_39161 = cljs.core.seq.call(null,files);
var inst_39162 = cljs.core.first.call(null,inst_39161);
var inst_39163 = cljs.core.next.call(null,inst_39161);
var inst_39164 = files;
var state_39187__$1 = (function (){var statearr_39189 = state_39187;
(statearr_39189[(7)] = inst_39164);

(statearr_39189[(8)] = inst_39162);

(statearr_39189[(9)] = inst_39163);

return statearr_39189;
})();
var statearr_39190_39206 = state_39187__$1;
(statearr_39190_39206[(2)] = null);

(statearr_39190_39206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39188 === (2))){
var inst_39164 = (state_39187[(7)]);
var inst_39170 = (state_39187[(10)]);
var inst_39169 = cljs.core.seq.call(null,inst_39164);
var inst_39170__$1 = cljs.core.first.call(null,inst_39169);
var inst_39171 = cljs.core.next.call(null,inst_39169);
var inst_39172 = (inst_39170__$1 == null);
var inst_39173 = cljs.core.not.call(null,inst_39172);
var state_39187__$1 = (function (){var statearr_39191 = state_39187;
(statearr_39191[(11)] = inst_39171);

(statearr_39191[(10)] = inst_39170__$1);

return statearr_39191;
})();
if(inst_39173){
var statearr_39192_39207 = state_39187__$1;
(statearr_39192_39207[(1)] = (4));

} else {
var statearr_39193_39208 = state_39187__$1;
(statearr_39193_39208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39188 === (3))){
var inst_39185 = (state_39187[(2)]);
var state_39187__$1 = state_39187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39187__$1,inst_39185);
} else {
if((state_val_39188 === (4))){
var inst_39170 = (state_39187[(10)]);
var inst_39175 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39170);
var state_39187__$1 = state_39187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39187__$1,(7),inst_39175);
} else {
if((state_val_39188 === (5))){
var inst_39181 = cljs.core.async.close_BANG_.call(null,out);
var state_39187__$1 = state_39187;
var statearr_39194_39209 = state_39187__$1;
(statearr_39194_39209[(2)] = inst_39181);

(statearr_39194_39209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39188 === (6))){
var inst_39183 = (state_39187[(2)]);
var state_39187__$1 = state_39187;
var statearr_39195_39210 = state_39187__$1;
(statearr_39195_39210[(2)] = inst_39183);

(statearr_39195_39210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39188 === (7))){
var inst_39171 = (state_39187[(11)]);
var inst_39177 = (state_39187[(2)]);
var inst_39178 = cljs.core.async.put_BANG_.call(null,out,inst_39177);
var inst_39164 = inst_39171;
var state_39187__$1 = (function (){var statearr_39196 = state_39187;
(statearr_39196[(7)] = inst_39164);

(statearr_39196[(12)] = inst_39178);

return statearr_39196;
})();
var statearr_39197_39211 = state_39187__$1;
(statearr_39197_39211[(2)] = null);

(statearr_39197_39211[(1)] = (2));


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
});})(c__27175__auto___39205,out))
;
return ((function (switch__27154__auto__,c__27175__auto___39205,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto____0 = (function (){
var statearr_39201 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39201[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto__);

(statearr_39201[(1)] = (1));

return statearr_39201;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto____1 = (function (state_39187){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_39187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e39202){if((e39202 instanceof Object)){
var ex__27158__auto__ = e39202;
var statearr_39203_39212 = state_39187;
(statearr_39203_39212[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39213 = state_39187;
state_39187 = G__39213;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto__ = function(state_39187){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto____1.call(this,state_39187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto___39205,out))
})();
var state__27177__auto__ = (function (){var statearr_39204 = f__27176__auto__.call(null);
(statearr_39204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto___39205);

return statearr_39204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto___39205,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39214,opts){
var map__39218 = p__39214;
var map__39218__$1 = ((((!((map__39218 == null)))?((((map__39218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39218):map__39218);
var eval_body__$1 = cljs.core.get.call(null,map__39218__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24860__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24860__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24860__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39220){var e = e39220;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39221_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39221_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39230){
var vec__39231 = p__39230;
var k = cljs.core.nth.call(null,vec__39231,(0),null);
var v = cljs.core.nth.call(null,vec__39231,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39234){
var vec__39235 = p__39234;
var k = cljs.core.nth.call(null,vec__39235,(0),null);
var v = cljs.core.nth.call(null,vec__39235,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39241,p__39242){
var map__39489 = p__39241;
var map__39489__$1 = ((((!((map__39489 == null)))?((((map__39489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39489):map__39489);
var opts = map__39489__$1;
var before_jsload = cljs.core.get.call(null,map__39489__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39489__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39489__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39490 = p__39242;
var map__39490__$1 = ((((!((map__39490 == null)))?((((map__39490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39490):map__39490);
var msg = map__39490__$1;
var files = cljs.core.get.call(null,map__39490__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39490__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39490__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27175__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27176__auto__ = (function (){var switch__27154__auto__ = ((function (c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39643){
var state_val_39644 = (state_39643[(1)]);
if((state_val_39644 === (7))){
var inst_39505 = (state_39643[(7)]);
var inst_39504 = (state_39643[(8)]);
var inst_39506 = (state_39643[(9)]);
var inst_39507 = (state_39643[(10)]);
var inst_39512 = cljs.core._nth.call(null,inst_39505,inst_39507);
var inst_39513 = figwheel.client.file_reloading.eval_body.call(null,inst_39512,opts);
var inst_39514 = (inst_39507 + (1));
var tmp39645 = inst_39505;
var tmp39646 = inst_39504;
var tmp39647 = inst_39506;
var inst_39504__$1 = tmp39646;
var inst_39505__$1 = tmp39645;
var inst_39506__$1 = tmp39647;
var inst_39507__$1 = inst_39514;
var state_39643__$1 = (function (){var statearr_39648 = state_39643;
(statearr_39648[(7)] = inst_39505__$1);

(statearr_39648[(8)] = inst_39504__$1);

(statearr_39648[(11)] = inst_39513);

(statearr_39648[(9)] = inst_39506__$1);

(statearr_39648[(10)] = inst_39507__$1);

return statearr_39648;
})();
var statearr_39649_39735 = state_39643__$1;
(statearr_39649_39735[(2)] = null);

(statearr_39649_39735[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (20))){
var inst_39547 = (state_39643[(12)]);
var inst_39555 = figwheel.client.file_reloading.sort_files.call(null,inst_39547);
var state_39643__$1 = state_39643;
var statearr_39650_39736 = state_39643__$1;
(statearr_39650_39736[(2)] = inst_39555);

(statearr_39650_39736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (27))){
var state_39643__$1 = state_39643;
var statearr_39651_39737 = state_39643__$1;
(statearr_39651_39737[(2)] = null);

(statearr_39651_39737[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (1))){
var inst_39496 = (state_39643[(13)]);
var inst_39493 = before_jsload.call(null,files);
var inst_39494 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39495 = (function (){return ((function (inst_39496,inst_39493,inst_39494,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39238_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39238_SHARP_);
});
;})(inst_39496,inst_39493,inst_39494,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39496__$1 = cljs.core.filter.call(null,inst_39495,files);
var inst_39497 = cljs.core.not_empty.call(null,inst_39496__$1);
var state_39643__$1 = (function (){var statearr_39652 = state_39643;
(statearr_39652[(14)] = inst_39493);

(statearr_39652[(13)] = inst_39496__$1);

(statearr_39652[(15)] = inst_39494);

return statearr_39652;
})();
if(cljs.core.truth_(inst_39497)){
var statearr_39653_39738 = state_39643__$1;
(statearr_39653_39738[(1)] = (2));

} else {
var statearr_39654_39739 = state_39643__$1;
(statearr_39654_39739[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (24))){
var state_39643__$1 = state_39643;
var statearr_39655_39740 = state_39643__$1;
(statearr_39655_39740[(2)] = null);

(statearr_39655_39740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (39))){
var inst_39597 = (state_39643[(16)]);
var state_39643__$1 = state_39643;
var statearr_39656_39741 = state_39643__$1;
(statearr_39656_39741[(2)] = inst_39597);

(statearr_39656_39741[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (46))){
var inst_39638 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39657_39742 = state_39643__$1;
(statearr_39657_39742[(2)] = inst_39638);

(statearr_39657_39742[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (4))){
var inst_39541 = (state_39643[(2)]);
var inst_39542 = cljs.core.List.EMPTY;
var inst_39543 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39542);
var inst_39544 = (function (){return ((function (inst_39541,inst_39542,inst_39543,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39239_SHARP_){
var and__24860__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39239_SHARP_);
if(cljs.core.truth_(and__24860__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39239_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39239_SHARP_)));
} else {
return and__24860__auto__;
}
});
;})(inst_39541,inst_39542,inst_39543,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39545 = cljs.core.filter.call(null,inst_39544,files);
var inst_39546 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39547 = cljs.core.concat.call(null,inst_39545,inst_39546);
var state_39643__$1 = (function (){var statearr_39658 = state_39643;
(statearr_39658[(17)] = inst_39543);

(statearr_39658[(12)] = inst_39547);

(statearr_39658[(18)] = inst_39541);

return statearr_39658;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39659_39743 = state_39643__$1;
(statearr_39659_39743[(1)] = (16));

} else {
var statearr_39660_39744 = state_39643__$1;
(statearr_39660_39744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (15))){
var inst_39531 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39661_39745 = state_39643__$1;
(statearr_39661_39745[(2)] = inst_39531);

(statearr_39661_39745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (21))){
var inst_39557 = (state_39643[(19)]);
var inst_39557__$1 = (state_39643[(2)]);
var inst_39558 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39557__$1);
var state_39643__$1 = (function (){var statearr_39662 = state_39643;
(statearr_39662[(19)] = inst_39557__$1);

return statearr_39662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39643__$1,(22),inst_39558);
} else {
if((state_val_39644 === (31))){
var inst_39641 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39643__$1,inst_39641);
} else {
if((state_val_39644 === (32))){
var inst_39597 = (state_39643[(16)]);
var inst_39602 = inst_39597.cljs$lang$protocol_mask$partition0$;
var inst_39603 = (inst_39602 & (64));
var inst_39604 = inst_39597.cljs$core$ISeq$;
var inst_39605 = (inst_39603) || (inst_39604);
var state_39643__$1 = state_39643;
if(cljs.core.truth_(inst_39605)){
var statearr_39663_39746 = state_39643__$1;
(statearr_39663_39746[(1)] = (35));

} else {
var statearr_39664_39747 = state_39643__$1;
(statearr_39664_39747[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (40))){
var inst_39618 = (state_39643[(20)]);
var inst_39617 = (state_39643[(2)]);
var inst_39618__$1 = cljs.core.get.call(null,inst_39617,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39619 = cljs.core.get.call(null,inst_39617,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39620 = cljs.core.not_empty.call(null,inst_39618__$1);
var state_39643__$1 = (function (){var statearr_39665 = state_39643;
(statearr_39665[(21)] = inst_39619);

(statearr_39665[(20)] = inst_39618__$1);

return statearr_39665;
})();
if(cljs.core.truth_(inst_39620)){
var statearr_39666_39748 = state_39643__$1;
(statearr_39666_39748[(1)] = (41));

} else {
var statearr_39667_39749 = state_39643__$1;
(statearr_39667_39749[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (33))){
var state_39643__$1 = state_39643;
var statearr_39668_39750 = state_39643__$1;
(statearr_39668_39750[(2)] = false);

(statearr_39668_39750[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (13))){
var inst_39517 = (state_39643[(22)]);
var inst_39521 = cljs.core.chunk_first.call(null,inst_39517);
var inst_39522 = cljs.core.chunk_rest.call(null,inst_39517);
var inst_39523 = cljs.core.count.call(null,inst_39521);
var inst_39504 = inst_39522;
var inst_39505 = inst_39521;
var inst_39506 = inst_39523;
var inst_39507 = (0);
var state_39643__$1 = (function (){var statearr_39669 = state_39643;
(statearr_39669[(7)] = inst_39505);

(statearr_39669[(8)] = inst_39504);

(statearr_39669[(9)] = inst_39506);

(statearr_39669[(10)] = inst_39507);

return statearr_39669;
})();
var statearr_39670_39751 = state_39643__$1;
(statearr_39670_39751[(2)] = null);

(statearr_39670_39751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (22))){
var inst_39560 = (state_39643[(23)]);
var inst_39561 = (state_39643[(24)]);
var inst_39557 = (state_39643[(19)]);
var inst_39565 = (state_39643[(25)]);
var inst_39560__$1 = (state_39643[(2)]);
var inst_39561__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39560__$1);
var inst_39562 = (function (){var all_files = inst_39557;
var res_SINGLEQUOTE_ = inst_39560__$1;
var res = inst_39561__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39560,inst_39561,inst_39557,inst_39565,inst_39560__$1,inst_39561__$1,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39240_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39240_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39560,inst_39561,inst_39557,inst_39565,inst_39560__$1,inst_39561__$1,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39563 = cljs.core.filter.call(null,inst_39562,inst_39560__$1);
var inst_39564 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39565__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39564);
var inst_39566 = cljs.core.not_empty.call(null,inst_39565__$1);
var state_39643__$1 = (function (){var statearr_39671 = state_39643;
(statearr_39671[(26)] = inst_39563);

(statearr_39671[(23)] = inst_39560__$1);

(statearr_39671[(24)] = inst_39561__$1);

(statearr_39671[(25)] = inst_39565__$1);

return statearr_39671;
})();
if(cljs.core.truth_(inst_39566)){
var statearr_39672_39752 = state_39643__$1;
(statearr_39672_39752[(1)] = (23));

} else {
var statearr_39673_39753 = state_39643__$1;
(statearr_39673_39753[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (36))){
var state_39643__$1 = state_39643;
var statearr_39674_39754 = state_39643__$1;
(statearr_39674_39754[(2)] = false);

(statearr_39674_39754[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (41))){
var inst_39618 = (state_39643[(20)]);
var inst_39622 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39623 = cljs.core.map.call(null,inst_39622,inst_39618);
var inst_39624 = cljs.core.pr_str.call(null,inst_39623);
var inst_39625 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39624)].join('');
var inst_39626 = figwheel.client.utils.log.call(null,inst_39625);
var state_39643__$1 = state_39643;
var statearr_39675_39755 = state_39643__$1;
(statearr_39675_39755[(2)] = inst_39626);

(statearr_39675_39755[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (43))){
var inst_39619 = (state_39643[(21)]);
var inst_39629 = (state_39643[(2)]);
var inst_39630 = cljs.core.not_empty.call(null,inst_39619);
var state_39643__$1 = (function (){var statearr_39676 = state_39643;
(statearr_39676[(27)] = inst_39629);

return statearr_39676;
})();
if(cljs.core.truth_(inst_39630)){
var statearr_39677_39756 = state_39643__$1;
(statearr_39677_39756[(1)] = (44));

} else {
var statearr_39678_39757 = state_39643__$1;
(statearr_39678_39757[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (29))){
var inst_39563 = (state_39643[(26)]);
var inst_39597 = (state_39643[(16)]);
var inst_39560 = (state_39643[(23)]);
var inst_39561 = (state_39643[(24)]);
var inst_39557 = (state_39643[(19)]);
var inst_39565 = (state_39643[(25)]);
var inst_39593 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39596 = (function (){var all_files = inst_39557;
var res_SINGLEQUOTE_ = inst_39560;
var res = inst_39561;
var files_not_loaded = inst_39563;
var dependencies_that_loaded = inst_39565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39563,inst_39597,inst_39560,inst_39561,inst_39557,inst_39565,inst_39593,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39595){
var map__39679 = p__39595;
var map__39679__$1 = ((((!((map__39679 == null)))?((((map__39679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39679):map__39679);
var namespace = cljs.core.get.call(null,map__39679__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39563,inst_39597,inst_39560,inst_39561,inst_39557,inst_39565,inst_39593,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39597__$1 = cljs.core.group_by.call(null,inst_39596,inst_39563);
var inst_39599 = (inst_39597__$1 == null);
var inst_39600 = cljs.core.not.call(null,inst_39599);
var state_39643__$1 = (function (){var statearr_39681 = state_39643;
(statearr_39681[(16)] = inst_39597__$1);

(statearr_39681[(28)] = inst_39593);

return statearr_39681;
})();
if(inst_39600){
var statearr_39682_39758 = state_39643__$1;
(statearr_39682_39758[(1)] = (32));

} else {
var statearr_39683_39759 = state_39643__$1;
(statearr_39683_39759[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (44))){
var inst_39619 = (state_39643[(21)]);
var inst_39632 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39619);
var inst_39633 = cljs.core.pr_str.call(null,inst_39632);
var inst_39634 = [cljs.core.str("not required: "),cljs.core.str(inst_39633)].join('');
var inst_39635 = figwheel.client.utils.log.call(null,inst_39634);
var state_39643__$1 = state_39643;
var statearr_39684_39760 = state_39643__$1;
(statearr_39684_39760[(2)] = inst_39635);

(statearr_39684_39760[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (6))){
var inst_39538 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39685_39761 = state_39643__$1;
(statearr_39685_39761[(2)] = inst_39538);

(statearr_39685_39761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (28))){
var inst_39563 = (state_39643[(26)]);
var inst_39590 = (state_39643[(2)]);
var inst_39591 = cljs.core.not_empty.call(null,inst_39563);
var state_39643__$1 = (function (){var statearr_39686 = state_39643;
(statearr_39686[(29)] = inst_39590);

return statearr_39686;
})();
if(cljs.core.truth_(inst_39591)){
var statearr_39687_39762 = state_39643__$1;
(statearr_39687_39762[(1)] = (29));

} else {
var statearr_39688_39763 = state_39643__$1;
(statearr_39688_39763[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (25))){
var inst_39561 = (state_39643[(24)]);
var inst_39577 = (state_39643[(2)]);
var inst_39578 = cljs.core.not_empty.call(null,inst_39561);
var state_39643__$1 = (function (){var statearr_39689 = state_39643;
(statearr_39689[(30)] = inst_39577);

return statearr_39689;
})();
if(cljs.core.truth_(inst_39578)){
var statearr_39690_39764 = state_39643__$1;
(statearr_39690_39764[(1)] = (26));

} else {
var statearr_39691_39765 = state_39643__$1;
(statearr_39691_39765[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (34))){
var inst_39612 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
if(cljs.core.truth_(inst_39612)){
var statearr_39692_39766 = state_39643__$1;
(statearr_39692_39766[(1)] = (38));

} else {
var statearr_39693_39767 = state_39643__$1;
(statearr_39693_39767[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (17))){
var state_39643__$1 = state_39643;
var statearr_39694_39768 = state_39643__$1;
(statearr_39694_39768[(2)] = recompile_dependents);

(statearr_39694_39768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (3))){
var state_39643__$1 = state_39643;
var statearr_39695_39769 = state_39643__$1;
(statearr_39695_39769[(2)] = null);

(statearr_39695_39769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (12))){
var inst_39534 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39696_39770 = state_39643__$1;
(statearr_39696_39770[(2)] = inst_39534);

(statearr_39696_39770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (2))){
var inst_39496 = (state_39643[(13)]);
var inst_39503 = cljs.core.seq.call(null,inst_39496);
var inst_39504 = inst_39503;
var inst_39505 = null;
var inst_39506 = (0);
var inst_39507 = (0);
var state_39643__$1 = (function (){var statearr_39697 = state_39643;
(statearr_39697[(7)] = inst_39505);

(statearr_39697[(8)] = inst_39504);

(statearr_39697[(9)] = inst_39506);

(statearr_39697[(10)] = inst_39507);

return statearr_39697;
})();
var statearr_39698_39771 = state_39643__$1;
(statearr_39698_39771[(2)] = null);

(statearr_39698_39771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (23))){
var inst_39563 = (state_39643[(26)]);
var inst_39560 = (state_39643[(23)]);
var inst_39561 = (state_39643[(24)]);
var inst_39557 = (state_39643[(19)]);
var inst_39565 = (state_39643[(25)]);
var inst_39568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39570 = (function (){var all_files = inst_39557;
var res_SINGLEQUOTE_ = inst_39560;
var res = inst_39561;
var files_not_loaded = inst_39563;
var dependencies_that_loaded = inst_39565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39563,inst_39560,inst_39561,inst_39557,inst_39565,inst_39568,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39569){
var map__39699 = p__39569;
var map__39699__$1 = ((((!((map__39699 == null)))?((((map__39699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39699):map__39699);
var request_url = cljs.core.get.call(null,map__39699__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39563,inst_39560,inst_39561,inst_39557,inst_39565,inst_39568,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39571 = cljs.core.reverse.call(null,inst_39565);
var inst_39572 = cljs.core.map.call(null,inst_39570,inst_39571);
var inst_39573 = cljs.core.pr_str.call(null,inst_39572);
var inst_39574 = figwheel.client.utils.log.call(null,inst_39573);
var state_39643__$1 = (function (){var statearr_39701 = state_39643;
(statearr_39701[(31)] = inst_39568);

return statearr_39701;
})();
var statearr_39702_39772 = state_39643__$1;
(statearr_39702_39772[(2)] = inst_39574);

(statearr_39702_39772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (35))){
var state_39643__$1 = state_39643;
var statearr_39703_39773 = state_39643__$1;
(statearr_39703_39773[(2)] = true);

(statearr_39703_39773[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (19))){
var inst_39547 = (state_39643[(12)]);
var inst_39553 = figwheel.client.file_reloading.expand_files.call(null,inst_39547);
var state_39643__$1 = state_39643;
var statearr_39704_39774 = state_39643__$1;
(statearr_39704_39774[(2)] = inst_39553);

(statearr_39704_39774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (11))){
var state_39643__$1 = state_39643;
var statearr_39705_39775 = state_39643__$1;
(statearr_39705_39775[(2)] = null);

(statearr_39705_39775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (9))){
var inst_39536 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39706_39776 = state_39643__$1;
(statearr_39706_39776[(2)] = inst_39536);

(statearr_39706_39776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (5))){
var inst_39506 = (state_39643[(9)]);
var inst_39507 = (state_39643[(10)]);
var inst_39509 = (inst_39507 < inst_39506);
var inst_39510 = inst_39509;
var state_39643__$1 = state_39643;
if(cljs.core.truth_(inst_39510)){
var statearr_39707_39777 = state_39643__$1;
(statearr_39707_39777[(1)] = (7));

} else {
var statearr_39708_39778 = state_39643__$1;
(statearr_39708_39778[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (14))){
var inst_39517 = (state_39643[(22)]);
var inst_39526 = cljs.core.first.call(null,inst_39517);
var inst_39527 = figwheel.client.file_reloading.eval_body.call(null,inst_39526,opts);
var inst_39528 = cljs.core.next.call(null,inst_39517);
var inst_39504 = inst_39528;
var inst_39505 = null;
var inst_39506 = (0);
var inst_39507 = (0);
var state_39643__$1 = (function (){var statearr_39709 = state_39643;
(statearr_39709[(32)] = inst_39527);

(statearr_39709[(7)] = inst_39505);

(statearr_39709[(8)] = inst_39504);

(statearr_39709[(9)] = inst_39506);

(statearr_39709[(10)] = inst_39507);

return statearr_39709;
})();
var statearr_39710_39779 = state_39643__$1;
(statearr_39710_39779[(2)] = null);

(statearr_39710_39779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (45))){
var state_39643__$1 = state_39643;
var statearr_39711_39780 = state_39643__$1;
(statearr_39711_39780[(2)] = null);

(statearr_39711_39780[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (26))){
var inst_39563 = (state_39643[(26)]);
var inst_39560 = (state_39643[(23)]);
var inst_39561 = (state_39643[(24)]);
var inst_39557 = (state_39643[(19)]);
var inst_39565 = (state_39643[(25)]);
var inst_39580 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39582 = (function (){var all_files = inst_39557;
var res_SINGLEQUOTE_ = inst_39560;
var res = inst_39561;
var files_not_loaded = inst_39563;
var dependencies_that_loaded = inst_39565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39563,inst_39560,inst_39561,inst_39557,inst_39565,inst_39580,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39581){
var map__39712 = p__39581;
var map__39712__$1 = ((((!((map__39712 == null)))?((((map__39712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39712):map__39712);
var namespace = cljs.core.get.call(null,map__39712__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39712__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39563,inst_39560,inst_39561,inst_39557,inst_39565,inst_39580,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39583 = cljs.core.map.call(null,inst_39582,inst_39561);
var inst_39584 = cljs.core.pr_str.call(null,inst_39583);
var inst_39585 = figwheel.client.utils.log.call(null,inst_39584);
var inst_39586 = (function (){var all_files = inst_39557;
var res_SINGLEQUOTE_ = inst_39560;
var res = inst_39561;
var files_not_loaded = inst_39563;
var dependencies_that_loaded = inst_39565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39563,inst_39560,inst_39561,inst_39557,inst_39565,inst_39580,inst_39582,inst_39583,inst_39584,inst_39585,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39563,inst_39560,inst_39561,inst_39557,inst_39565,inst_39580,inst_39582,inst_39583,inst_39584,inst_39585,state_val_39644,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39587 = setTimeout(inst_39586,(10));
var state_39643__$1 = (function (){var statearr_39714 = state_39643;
(statearr_39714[(33)] = inst_39585);

(statearr_39714[(34)] = inst_39580);

return statearr_39714;
})();
var statearr_39715_39781 = state_39643__$1;
(statearr_39715_39781[(2)] = inst_39587);

(statearr_39715_39781[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (16))){
var state_39643__$1 = state_39643;
var statearr_39716_39782 = state_39643__$1;
(statearr_39716_39782[(2)] = reload_dependents);

(statearr_39716_39782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (38))){
var inst_39597 = (state_39643[(16)]);
var inst_39614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39597);
var state_39643__$1 = state_39643;
var statearr_39717_39783 = state_39643__$1;
(statearr_39717_39783[(2)] = inst_39614);

(statearr_39717_39783[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (30))){
var state_39643__$1 = state_39643;
var statearr_39718_39784 = state_39643__$1;
(statearr_39718_39784[(2)] = null);

(statearr_39718_39784[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (10))){
var inst_39517 = (state_39643[(22)]);
var inst_39519 = cljs.core.chunked_seq_QMARK_.call(null,inst_39517);
var state_39643__$1 = state_39643;
if(inst_39519){
var statearr_39719_39785 = state_39643__$1;
(statearr_39719_39785[(1)] = (13));

} else {
var statearr_39720_39786 = state_39643__$1;
(statearr_39720_39786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (18))){
var inst_39551 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
if(cljs.core.truth_(inst_39551)){
var statearr_39721_39787 = state_39643__$1;
(statearr_39721_39787[(1)] = (19));

} else {
var statearr_39722_39788 = state_39643__$1;
(statearr_39722_39788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (42))){
var state_39643__$1 = state_39643;
var statearr_39723_39789 = state_39643__$1;
(statearr_39723_39789[(2)] = null);

(statearr_39723_39789[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (37))){
var inst_39609 = (state_39643[(2)]);
var state_39643__$1 = state_39643;
var statearr_39724_39790 = state_39643__$1;
(statearr_39724_39790[(2)] = inst_39609);

(statearr_39724_39790[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39644 === (8))){
var inst_39504 = (state_39643[(8)]);
var inst_39517 = (state_39643[(22)]);
var inst_39517__$1 = cljs.core.seq.call(null,inst_39504);
var state_39643__$1 = (function (){var statearr_39725 = state_39643;
(statearr_39725[(22)] = inst_39517__$1);

return statearr_39725;
})();
if(inst_39517__$1){
var statearr_39726_39791 = state_39643__$1;
(statearr_39726_39791[(1)] = (10));

} else {
var statearr_39727_39792 = state_39643__$1;
(statearr_39727_39792[(1)] = (11));

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
});})(c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27154__auto__,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto____0 = (function (){
var statearr_39731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39731[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto__);

(statearr_39731[(1)] = (1));

return statearr_39731;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto____1 = (function (state_39643){
while(true){
var ret_value__27156__auto__ = (function (){try{while(true){
var result__27157__auto__ = switch__27154__auto__.call(null,state_39643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27157__auto__;
}
break;
}
}catch (e39732){if((e39732 instanceof Object)){
var ex__27158__auto__ = e39732;
var statearr_39733_39793 = state_39643;
(statearr_39733_39793[(5)] = ex__27158__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39794 = state_39643;
state_39643 = G__39794;
continue;
} else {
return ret_value__27156__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto__ = function(state_39643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto____1.call(this,state_39643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27155__auto__;
})()
;})(switch__27154__auto__,c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27177__auto__ = (function (){var statearr_39734 = f__27176__auto__.call(null);
(statearr_39734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27175__auto__);

return statearr_39734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27177__auto__);
});})(c__27175__auto__,map__39489,map__39489__$1,opts,before_jsload,on_jsload,reload_dependents,map__39490,map__39490__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27175__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39797,link){
var map__39800 = p__39797;
var map__39800__$1 = ((((!((map__39800 == null)))?((((map__39800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39800):map__39800);
var file = cljs.core.get.call(null,map__39800__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__39800,map__39800__$1,file){
return (function (p1__39795_SHARP_,p2__39796_SHARP_){
if(cljs.core._EQ_.call(null,p1__39795_SHARP_,p2__39796_SHARP_)){
return p1__39795_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__39800,map__39800__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39806){
var map__39807 = p__39806;
var map__39807__$1 = ((((!((map__39807 == null)))?((((map__39807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39807):map__39807);
var match_length = cljs.core.get.call(null,map__39807__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39807__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39802_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39802_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39809_SHARP_,p2__39810_SHARP_){
return cljs.core.assoc.call(null,p1__39809_SHARP_,cljs.core.get.call(null,p2__39810_SHARP_,key),p2__39810_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_39811 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_39811);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_39811);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39812,p__39813){
var map__39818 = p__39812;
var map__39818__$1 = ((((!((map__39818 == null)))?((((map__39818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39818):map__39818);
var on_cssload = cljs.core.get.call(null,map__39818__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__39819 = p__39813;
var map__39819__$1 = ((((!((map__39819 == null)))?((((map__39819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39819):map__39819);
var files_msg = map__39819__$1;
var files = cljs.core.get.call(null,map__39819__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1490248912960