import{S as f,i as _,s as h,e as g,c as o,a as r,b as m,d as v,n as u,f as d}from"./index.8381b1e6.js";function N(i){let e,s,n;return{c(){e=g("img"),this.h()},l(a){e=o(a,"IMG",{loading:!0,src:!0,alt:!0,class:!0}),this.h()},h(){r(e,"loading","lazy"),m(e.src,s=i[0])||r(e,"src",s),r(e,"alt",i[1]),r(e,"class",n="w-8 h-8 "+(i[3]?"dark:invert":"")+" "+i[2])},m(a,t){v(a,e,t)},p(a,[t]){t&1&&!m(e.src,s=a[0])&&r(e,"src",s),t&2&&r(e,"alt",a[1]),t&12&&n!==(n="w-8 h-8 "+(a[3]?"dark:invert":"")+" "+a[2])&&r(e,"class",n)},i:u,o:u,d(a){a&&d(e)}}}function I(i,e,s){let{src:n}=e,{alt:a}=e,{className:t=""}=e,{invert:c=!0}=e;return i.$$set=l=>{"src"in l&&s(0,n=l.src),"alt"in l&&s(1,a=l.alt),"className"in l&&s(2,t=l.className),"invert"in l&&s(3,c=l.invert)},[n,a,t,c]}class q extends f{constructor(e){super(),_(this,e,I,N,h,{src:0,alt:1,className:2,invert:3})}}export{q as I};