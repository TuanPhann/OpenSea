(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"0T6H":function(e,n,a){"use strict";a.r(n);var t=function(){var e=["trendingCollections"];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"categories"},{defaultValue:null,kind:"LocalArgument",name:"chains"},{defaultValue:12,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:e}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:e},fragmentPathInResult:[],operation:a("7HB6")}},name:"TrendingCollectionsList_data",selections:[{alias:"trendingCollections",args:[{kind:"Variable",name:"categories",variableName:"categories"},{kind:"Variable",name:"chains",variableName:"chains"}],concreteType:"CollectionTypeConnection",kind:"LinkedField",name:"__TrendingCollectionsList_trendingCollections_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"CollectionTypeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"CollectionType",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"relayId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{args:null,kind:"FragmentSpread",name:"CollectionCard_data"},{kind:"InlineDataFragmentSpread",name:"CollectionCard_getShowCollectionCardData",selections:[{alias:null,args:null,kind:"ScalarField",name:"logo",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"banner",storageKey:null}]}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null}}();t.hash="c5c475a09cf13e0d6a172dff412ada04",n.default=t},"0eyN":function(e,n,a){"use strict";a.d(n,"a",(function(){return m}));var t=a("mXGw");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var l=new Map,o=new WeakMap,c=0,s=void 0;function u(e){return Object.keys(e).sort().filter((function(n){return void 0!==e[n]})).map((function(n){return n+"_"+("root"===n?(a=e.root)?(o.has(a)||(c+=1,o.set(a,c.toString())),o.get(a)):"0":e[n]);var a})).toString()}function d(e,n,a,t){if(void 0===a&&(a={}),void 0===t&&(t=s),"undefined"===typeof window.IntersectionObserver&&void 0!==t){var r=e.getBoundingClientRect();return n(t,{isIntersecting:t,target:e,intersectionRatio:"number"===typeof a.threshold?a.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var i=function(e){var n=u(e),a=l.get(n);if(!a){var t,r=new Map,i=new IntersectionObserver((function(n){n.forEach((function(n){var a,i=n.isIntersecting&&t.some((function(e){return n.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=i),null==(a=r.get(n.target))||a.forEach((function(e){e(i,n)}))}))}),e);t=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:n,observer:i,elements:r},l.set(n,a)}return a}(a),o=i.id,c=i.observer,d=i.elements,g=d.get(e)||[];return d.has(e)||d.set(e,g),g.push(n),c.observe(e),function(){g.splice(g.indexOf(n),1),0===g.length&&(d.delete(e),c.unobserve(e)),0===d.size&&(c.disconnect(),l.delete(o))}}var g=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function f(e){return"function"!==typeof e.children}t.Component;function m(e){var n=void 0===e?{}:e,a=n.threshold,r=n.delay,i=n.trackVisibility,l=n.rootMargin,o=n.root,c=n.triggerOnce,s=n.skip,u=n.initialInView,g=n.fallbackInView,f=n.onChange,m=t.useRef(),p=t.useRef(),y=t.useState({inView:!!u}),h=y[0],b=y[1];p.current=f;var v=t.useCallback((function(e){void 0!==m.current&&(m.current(),m.current=void 0),s||e&&(m.current=d(e,(function(e,n){b({inView:e,entry:n}),p.current&&p.current(e,n),n.isIntersecting&&c&&m.current&&(m.current(),m.current=void 0)}),{root:o,rootMargin:l,threshold:a,trackVisibility:i,delay:r},g))}),[Array.isArray(a)?a.toString():a,o,l,c,s,i,g,r]);t.useEffect((function(){m.current||!h.entry||c||s||b({inView:!!u})}));var k=[v,h.inView,h.entry];return k.ref=k[0],k.inView=k[1],k.entry=k[2],k}},"1gvz":function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));a("mXGw");var t,r=a("aXrf"),i=a("LsOE"),l=a("GWLh"),o=a("NNy9"),c=a("oYCi"),s=function(e){var n=e.dataKey,s=Object(r.usePaginationFragment)(void 0!==t?t:t=a("0T6H"),n),u=s.data,d=s.loadNext,g=s.hasNext,f=s.isLoadingNext;return Object(c.jsx)(o.a,{collections:u?Object(i.d)(u.trendingCollections).filter((function(e){return Object(l.b)(e)})):void 0,hasNext:g,isLoadingNext:f,loadNext:d})}},"7HB6":function(e,n,a){"use strict";a.r(n);var t=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"categories"},{defaultValue:null,kind:"LocalArgument",name:"chains"},{defaultValue:12,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"}],n={kind:"Variable",name:"categories",variableName:"categories"},a={kind:"Variable",name:"chains",variableName:"chains"},t=[{kind:"Variable",name:"after",variableName:"cursor"},n,a,{kind:"Variable",name:"first",variableName:"count"}],r={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"TrendingCollectionsListQuery",selections:[{args:[n,a,{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"TrendingCollectionsList_data"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"TrendingCollectionsListQuery",selections:[{alias:null,args:t,concreteType:"CollectionTypeConnection",kind:"LinkedField",name:"trendingCollections",plural:!1,selections:[{alias:null,args:null,concreteType:"CollectionTypeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"CollectionType",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"logo",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"banner",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shortDescription",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isVerified",storageKey:null},{alias:null,args:null,concreteType:"AccountType",kind:"LinkedField",name:"owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"address",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"config",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isCompromised",storageKey:null},{alias:null,args:null,concreteType:"UserType",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"publicUsername",storageKey:null},r],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageUrl",storageKey:null},r],storageKey:null},{alias:null,args:null,concreteType:"CollectionStatsType",kind:"LinkedField",name:"stats",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalSupply",storageKey:null},r],storageKey:null},{alias:null,args:null,concreteType:"ChainType",kind:"LinkedField",name:"defaultChain",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"identifier",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"relayId",storageKey:null},r,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:t,filters:["categories","chains"],handle:"connection",key:"TrendingCollectionsList_trendingCollections",kind:"LinkedHandle",name:"trendingCollections"}]},params:{cacheID:"7a32e280420eb65a21b9af4295305d55",id:null,metadata:{},name:"TrendingCollectionsListQuery",operationKind:"query",text:"query TrendingCollectionsListQuery(\n  $categories: [CategorySlug!]\n  $chains: [ChainScalar!]\n  $count: Int = 12\n  $cursor: String\n) {\n  ...TrendingCollectionsList_data_3hHQDt\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  displayName\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment CollectionCardContextMenu_data on CollectionType {\n  ...collection_url\n}\n\nfragment CollectionCard_data on CollectionType {\n  ...CollectionCardContextMenu_data\n  ...CollectionCard_getShowCollectionCardData\n  ...collection_url\n  description\n  name\n  shortDescription\n  slug\n  logo\n  banner\n  isVerified\n  owner {\n    ...AccountLink_data\n    id\n  }\n  stats {\n    totalSupply\n    id\n  }\n  defaultChain {\n    identifier\n  }\n}\n\nfragment CollectionCard_getShowCollectionCardData on CollectionType {\n  logo\n  banner\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n  user {\n    publicUsername\n    id\n  }\n  displayName\n}\n\nfragment TrendingCollectionsList_data_3hHQDt on Query {\n  trendingCollections(categories: $categories, after: $cursor, first: $count, chains: $chains) {\n    edges {\n      node {\n        ...CollectionCard_data\n        ...CollectionCard_getShowCollectionCardData\n        relayId\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"}}}();t.hash="c5c475a09cf13e0d6a172dff412ada04",n.default=t},"FS/q":function(e,n,a){"use strict";a.d(n,"b",(function(){return f})),a.d(n,"a",(function(){return p}));var t=a("qd51"),r=a("/dBk"),i=a.n(r),l=a("mXGw"),o=a("0eyN"),c=a("jQgF"),s=a("b7Z7"),u=a("67yl"),d=a("g8rX"),g=a("oYCi"),f=function(e){var n=e.loadNext,a=e.count;return new Promise((function(e,t){n(a,{onComplete:function(n){n?t(n):e()}})}))};function m(){return(m=Object(t.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof window.IntersectionObserver){e.next=3;break}return e.next=3,a.e(168).then(a.t.bind(null,"62jW",7));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.e||function(){m.apply(this,arguments)}();var p=function(e){var n=e.disableLoader,a=e.isFirstPageLoading,r=e.intersectionOptions,c=e.page,f=c.hasMore,m=c.loadMore,p=c.isLoading,y=e.children,h=e.onLoad,b=e.onLoadStart,v=e.size,k=Object(o.a)(r),j=k.ref,C=k.inView,O=Object(l.useState)(!1),w=O[0],x=O[1],S=p(),F=f(),L=function(){var e=Object(t.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b&&b(),x(!0),e.next=4,m(v);case 4:setTimeout((function(){return x(!1)}),0),h&&h();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){!C||!F||w||S||n||L()}),[C,F,w,S,n]);return Object(g.jsx)(u.a,{ref:j,children:!w&&!a||n?F?w||a?y||null:Object(g.jsx)(s.a,{height:"1px",width:"1px"}):null:Object(g.jsx)(s.a,{margin:"8px",children:Object(g.jsx)(d.a,{})})})}},Jj8g:function(e,n,a){"use strict";a.d(n,"a",(function(){return _}));var t=a("m6w3"),r=a("qd51"),i=a("uEoR"),l=a("oA/F"),o=a("/dBk"),c=a.n(o),s=a("mXGw"),u=a("us/P"),d=a("gd7o"),g=a("Df6V"),f=a("vy0n"),m=a("r8mc"),p=a("i6SV"),y=a("Bls4"),h=a("QrBS"),b=a("X9C2"),v=a("0c5R"),k=a("A191"),j=a("eV01"),C=a("1spp"),O=a("Ly9W"),w=a("b7Z7"),x=a("67yl"),S=a("FS/q"),F=a("oYCi"),L=["gridGap","itemMinWidth","items","getKey","renderItem","evenSidePadding","variant","pagination","isItemLoaded","threshold","isLoading"];function K(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function T(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?K(Object(a),!0).forEach((function(n){Object(t.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var _=function(e){var n,a=e.gridGap,t=e.itemMinWidth,o=e.items,K=e.getKey,_=e.renderItem,I=e.evenSidePadding,V=e.variant,N=void 0===V?"horizontal":V,P=e.pagination,M=e.isItemLoaded,A=e.threshold,D=e.isLoading,G=void 0!==D&&D,W=Object(l.a)(e,L),R=Object(s.useRef)(null),E=Object(j.a)(R),Q=Object(i.a)(E,1)[0],z=Object(s.useMemo)((function(){return function(e){var n=e.gridGap,a=e.width,t=e.itemMinWidth,r=e.evenSidePadding,i=e.variant;if(!a)return{itemWidth:t,numItems:1};var l=t+2*n,o=r?2*n:0,c=a-o,s=Math.max(1,Math.floor(c/l)),u=a-s*n*2-o;return{itemWidth:"grid"===i||"flex-wrap"===i?Math.floor(u/s):Math.ceil(u/s),numItems:s}}({gridGap:a,width:Q,itemMinWidth:t,evenSidePadding:I,variant:N})}),[a,Q,t,I,N]),B=z.itemWidth,X=z.numItems,q="".concat(a,"px"),H=function(){var e=Object(r.a)(c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P){e.next=2;break}return e.abrupt("return");case 2:if(a=o.length-1,2,!(n+X-1>=a-2&&P.page.hasMore())){e.next=8;break}return e.next=8,P.page.loadMore(P.size);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),$=Object(d.a)(Object(b.a)(P),{isItemLoaded:M,minimumBatchSize:null!==(n=null===P||void 0===P?void 0:P.size)&&void 0!==n?n:16,threshold:null!==A&&void 0!==A?A:2*X+1}),U="".concat(2*B,"px"),J=_,Y=Object(u.b)(),Z=Object(i.a)(Y,2),ee=Z[0],ne=Z[1],ae=Object(g.a)(R,[ee,ne,Q]),te=ae.offset,re=ae.width,ie=Object(f.a)(te),le=ie.scrollTop,oe=ie.isScrolling,ce=Object(k.a)(o),se=Object(m.a)({width:re,columnGutter:a,columnCount:X},[ce]),ue=Object(p.a)(se),de=function(){var e=Object(s.useState)(!1),n=e[0],a=e[1];return Object(v.a)((function(){return a(!0)})),n}(),ge=function(){return Object(F.jsxs)(F.Fragment,{children:[o.map((function(e,n){return Object(F.jsx)(w.a,{role:"card",style:de?{padding:q}:void 0,children:Object(F.jsx)(J,{containerWidth:Q,data:e,index:n,width:B})},K(e,n))})),P&&Object(F.jsx)(S.a,T(T({},P),{},{intersectionOptions:{rootMargin:U,root:R.current}}))]})},fe=Object(y.a)(T({positioner:se,scrollTop:le,isScrolling:oe,height:ne,containerRef:R,items:o,itemKey:K,resizeObserver:ue,render:_,onRender:function(){G||$.apply(void 0,arguments)}},W));switch(N){case"carousel":return Object(F.jsx)(w.a,{overflow:"visible",paddingX:I?"".concat(a,"px"):void 0,ref:R,children:Object(F.jsx)(C.a,{afterChange:H,arrows:1!==X,dotType:"below",dots:!P,overflow:1===X,slidesToShow:X,children:o.map((function(e,n){return Object(F.jsx)("div",{children:Object(F.jsx)(x.a,{children:Object(F.jsx)(J,{containerWidth:Q,data:e,index:n,width:B})})},K(e,n))}))})});case"grid":return Object(F.jsx)(w.a,{ref:R,width:"100%",children:de?fe:Object(F.jsx)(w.a,{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(".concat(B,"px, 1fr))"),gridGap:q,width:"100%"},children:ge()})});case"horizontal":return Object(F.jsx)(w.a,{overflow:"auto",ref:R,children:Object(F.jsx)(w.a,{display:"inline-flex",style:{padding:I?"0 ".concat(a,"px"):void 0},children:ge()})});case"flex-wrap":return Object(F.jsx)(w.a,{overflow:"auto",ref:R,children:Object(F.jsx)(h.a,{flexWrap:"wrap",children:ge()})});default:throw new O.a(N)}}},NNy9:function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));a("mXGw");var t=a("GWLh"),r=a("fCI6"),i=a("FS/q"),l=a("oYCi"),o=function(e){var n=e.data.collection;return n?Object(l.jsx)(t.a,{dataKey:n}):Object(l.jsx)(t.a.Skeleton,{})},c=function(e){var n=e.collections,a=e.hasNext,t=e.isLoadingNext,c=e.loadNext,s=a?12:0,u=Array(n?n.length+s:12).fill({}).map((function(e,a){return{collection:n?n[a]:void 0}}));return Object(l.jsx)(r.Gallery,{getKey:function(e,n){var a;return(null===(a=e.collection)||void 0===a?void 0:a.relayId)||n},gridGap:32,isItemLoaded:function(e,n){var a;return!(null===(a=n[e])||void 0===a||!a.collection)},itemHeightEstimate:400,itemMinWidth:330,items:u,overscanBy:1,pagination:{disableLoader:!0,page:{loadMore:function(e){return Object(i.b)({loadNext:c,count:e})},isLoading:function(){return t},hasMore:function(){return a}},size:12},renderItem:o,threshold:1,variant:"grid"})}},ahQv:function(e,n){},fCI6:function(e,n,a){"use strict";var t=a("Jj8g");a.d(n,"Gallery",(function(){return t.a}));a("ahQv")}}]);
//# sourceMappingURL=8a540f25edb357261176e84123a92e0d3ac141e6.710dde8e6625b7939a11.js.map