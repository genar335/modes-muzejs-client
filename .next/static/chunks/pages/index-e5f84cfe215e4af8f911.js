_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("YFqc"),o=n.n(r),a=n("q1tI"),c=n.n(a).a.createElement;t.default=function(){return c("div",null,c(o.a,{href:"http://localhost:3000/client/languages"},"Click here to go to languages"))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),f=n("elyg"),u=n("nOHt"),i=new Map,s=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,f.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],i=o[1],h=(0,u.useRouter)(),v=h&&h.pathname||"/",w=c.default.useMemo((function(){var t=(0,f.resolveHref)(v,e.href);return{href:t,as:e.as?(0,f.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),g=w.href,E=w.as;c.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,f.isLocalURL)(g)&&!l[g+"%"+E])return p(a,(function(){d(h,g,E)}))}),[t,a,g,E,h]);var y=e.children,_=e.replace,b=e.shallow,m=e.scroll;"string"===typeof y&&(y=c.default.createElement("a",null,y));var L=c.Children.only(y),R={ref:function(e){e&&i(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,f.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,g,E,_,b,m)}};return t&&(R.onMouseEnter=function(e){(0,f.isLocalURL)(g)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),d(h,g,E,{priority:!0}))}),(e.passHref||"a"===L.type&&!("href"in L.props))&&(R.href=(0,f.addBasePath)(E)),c.default.cloneElement(L,R)};t.default=h}},[["/EDR",0,1,2]]]);