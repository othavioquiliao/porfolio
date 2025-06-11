(()=>{var e={};e.id=974,e.ids=[974],e.modules={62:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},731:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1440:(e,t,r)=>{Promise.resolve().then(r.bind(r,8336))},1554:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(7675);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw Object.defineProperty(new n.DecodeError("failed to decode param"),"__NEXT_ERROR_CODE",{value:"E528",enumerable:!1,configurable:!0})}},a={};for(let[e,t]of Object.entries(r)){let r=o[t.pos];void 0!==r&&(t.repeat?a[e]=r.split("/").map(e=>i(e)):a[e]=i(r))}return a}}},1972:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)|0;return t>>>0}function n(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return n}})},2557:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(5547).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/othavio/Documentos/projetos/porfolio/app/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/othavio/Documentos/projetos/porfolio/app/page.tsx","default")},2961:(e,t)=>{"use strict";function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3107:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(5130);let o=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3714:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return i},normalizeRscURL:function(){return a}});let n=r(731),o=r(6347);function i(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,o.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function a(e){return e.replace(/\.rsc($|\?)/,"$1")}},3796:(e,t,r)=>{"use strict";function n(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(8639);return n(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return n}})},3824:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DEFAULT_METADATA_ROUTE_EXTENSIONS:function(){return s},STATIC_METADATA_IMAGES:function(){return a},getExtensionRegexString:function(){return l},isMetadataPage:function(){return p},isMetadataRoute:function(){return f},isMetadataRouteFile:function(){return u},isStaticMetadataRoute:function(){return c}});let n=r(62),o=r(3714),i=r(5610),a={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},s=["js","jsx","ts","tsx"],l=(e,t)=>t&&0!==t.length?`(?:\\.(${e.join("|")})|(\\.(${t.join("|")})))`:`(\\.(?:${e.join("|")}))`;function u(e,t,r){let o=(r?"":"?")+"$",i=`\\d?${r?"":"(-\\w{6})?"}`,s=[RegExp(`^[\\\\/]robots${l(t.concat("txt"),null)}${o}`),RegExp(`^[\\\\/]manifest${l(t.concat("webmanifest","json"),null)}${o}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${l(["xml"],t)}${o}`),RegExp(`[\\\\/]${a.icon.filename}${i}${l(a.icon.extensions,t)}${o}`),RegExp(`[\\\\/]${a.apple.filename}${i}${l(a.apple.extensions,t)}${o}`),RegExp(`[\\\\/]${a.openGraph.filename}${i}${l(a.openGraph.extensions,t)}${o}`),RegExp(`[\\\\/]${a.twitter.filename}${i}${l(a.twitter.extensions,t)}${o}`)],u=(0,n.normalizePathSep)(e);return s.some(e=>e.test(u))}function c(e){let t=e.replace(/\/route$/,"");return(0,i.isAppRouteRoute)(e)&&u(t,[],!0)&&"/robots.txt"!==t&&"/manifest.webmanifest"!==t&&!t.endsWith("/sitemap.xml")}function p(e){return!(0,i.isAppRouteRoute)(e)&&u(e,[],!1)}function f(e){let t=(0,o.normalizeAppPath)(e).replace(/^\/?app\//,"").replace("/[__metadata_id__]","").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),(0,i.isAppRouteRoute)(e)&&u(t,[],!1)}},3873:e=>{"use strict";e.exports=require("path")},4207:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return h},getNamedRouteRegex:function(){return m},getRouteRegex:function(){return p},parseParameter:function(){return l}});let n=r(9407),o=r(8605),i=r(5453),a=r(4343),s=/^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;function l(e){let t=e.match(s);return t?u(t[2]):u(e)}function u(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function c(e,t,r){let n={},l=1,c=[];for(let p of(0,a.removeTrailingSlash)(e).slice(1).split("/")){let e=o.INTERCEPTION_ROUTE_MARKERS.find(e=>p.startsWith(e)),a=p.match(s);if(e&&a&&a[2]){let{key:t,optional:r,repeat:o}=u(a[2]);n[t]={pos:l++,repeat:o,optional:r},c.push("/"+(0,i.escapeStringRegexp)(e)+"([^/]+?)")}else if(a&&a[2]){let{key:e,repeat:t,optional:o}=u(a[2]);n[e]={pos:l++,repeat:t,optional:o},r&&a[1]&&c.push("/"+(0,i.escapeStringRegexp)(a[1]));let s=t?o?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)";r&&a[1]&&(s=s.substring(1)),c.push(s)}else c.push("/"+(0,i.escapeStringRegexp)(p));t&&a&&a[3]&&c.push((0,i.escapeStringRegexp)(a[3]))}return{parameterizedRoute:c.join(""),groups:n}}function p(e,t){let{includeSuffix:r=!1,includePrefix:n=!1,excludeOptionalTrailingSlash:o=!1}=void 0===t?{}:t,{parameterizedRoute:i,groups:a}=c(e,r,n),s=i;return o||(s+="(?:/)?"),{re:RegExp("^"+s+"$"),groups:a}}function f(e){let t,{interceptionMarker:r,getSafeRouteKey:n,segment:o,routeKeys:a,keyPrefix:s,backreferenceDuplicateKeys:l}=e,{key:c,optional:p,repeat:f}=u(o),d=c.replace(/\W/g,"");s&&(d=""+s+d);let m=!1;(0===d.length||d.length>30)&&(m=!0),isNaN(parseInt(d.slice(0,1)))||(m=!0),m&&(d=n());let h=d in a;s?a[d]=""+s+c:a[d]=c;let g=r?(0,i.escapeStringRegexp)(r):"";return t=h&&l?"\\k<"+d+">":f?"(?<"+d+">.+?)":"(?<"+d+">[^/]+?)",p?"(?:/"+g+t+")?":"/"+g+t}function d(e,t,r,l,u){let c,p=(c=0,()=>{let e="",t=++c;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),d={},m=[];for(let c of(0,a.removeTrailingSlash)(e).slice(1).split("/")){let e=o.INTERCEPTION_ROUTE_MARKERS.some(e=>c.startsWith(e)),a=c.match(s);if(e&&a&&a[2])m.push(f({getSafeRouteKey:p,interceptionMarker:a[1],segment:a[2],routeKeys:d,keyPrefix:t?n.NEXT_INTERCEPTION_MARKER_PREFIX:void 0,backreferenceDuplicateKeys:u}));else if(a&&a[2]){l&&a[1]&&m.push("/"+(0,i.escapeStringRegexp)(a[1]));let e=f({getSafeRouteKey:p,segment:a[2],routeKeys:d,keyPrefix:t?n.NEXT_QUERY_PARAM_PREFIX:void 0,backreferenceDuplicateKeys:u});l&&a[1]&&(e=e.substring(1)),m.push(e)}else m.push("/"+(0,i.escapeStringRegexp)(c));r&&a&&a[3]&&m.push((0,i.escapeStringRegexp)(a[3]))}return{namedParameterizedRoute:m.join(""),routeKeys:d}}function m(e,t){var r,n,o;let i=d(e,t.prefixRouteKeys,null!=(r=t.includeSuffix)&&r,null!=(n=t.includePrefix)&&n,null!=(o=t.backreferenceDuplicateKeys)&&o),a=i.namedParameterizedRoute;return t.excludeOptionalTrailingSlash||(a+="(?:/)?"),{...p(e,t),namedRegex:"^"+a+"$",routeKeys:i.routeKeys}}function h(e,t){let{parameterizedRoute:r}=c(e,!1,!1),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=d(e,!1,!1,!1,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},5130:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return f},normalizeMetadataPageToRoute:function(){return m},normalizeMetadataRoute:function(){return d}});let n=r(3824),o=function(e){return e&&e.__esModule?e:{default:e}}(r(4975)),i=r(7589),a=r(4207),s=r(1972),l=r(3714),u=r(62),c=r(6347);function p(e){let t=o.default.dirname(e);if(e.endsWith("/sitemap"))return"";let r="";return t.split("/").some(e=>(0,c.isGroupSegment)(e)||(0,c.isParallelRouteSegment)(e))&&(r=(0,s.djb2Hash)(t).toString(36).slice(0,6)),r}function f(e,t,r){let n=(0,l.normalizeAppPath)(e),s=(0,a.getNamedRouteRegex)(n,{prefixRouteKeys:!1}),c=(0,i.interpolateDynamicPath)(n,t,s),{name:f,ext:d}=o.default.parse(r),m=p(o.default.posix.join(e,f)),h=m?`-${m}`:"";return(0,u.normalizePathSep)(o.default.join(c,`${f}${h}${d}`))}function d(e){if(!(0,n.isMetadataPage)(e))return e;let t=e,r="";if("/robots"===e?t+=".txt":"/manifest"===e?t+=".webmanifest":r=p(e),!t.endsWith("/route")){let{dir:e,name:n,ext:i}=o.default.parse(t);t=o.default.posix.join(e,`${n}${r?`-${r}`:""}${i}`,"route")}return t}function m(e,t){let r=e.endsWith("/route"),n=r?e.slice(0,-6):e,o=n.endsWith("/sitemap")?".xml":"";return(t?`${n}/[__metadata_id__]`:`${n}${o}`)+(r?"/route":"")}},5453:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},5610:(e,t)=>{"use strict";function r(e){return e.endsWith("/route")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isAppRouteRoute",{enumerable:!0,get:function(){return r}})},6055:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return i}});let n=r(2961),o=r(8312);function i(e){if(e.startsWith("/"))return(0,o.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,n.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},6447:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>f,tree:()=>u});var n=r(6855),o=r(9880),i=r(4858),a=r.n(i),s=r(4637),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let u={children:["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2557)),"/home/othavio/Documentos/projetos/porfolio/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3107))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9816)),"/home/othavio/Documentos/projetos/porfolio/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9254,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,5007,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,2260,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3107))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["/home/othavio/Documentos/projetos/porfolio/app/page.tsx"],p={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},6592:(e,t,r)=>{Promise.resolve().then(r.bind(r,2557))},7589:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getPreviouslyRevalidatedTags:function(){return x},getUtils:function(){return g},interpolateDynamicPath:function(){return m},normalizeDynamicRouteParams:function(){return h},normalizeVercelUrl:function(){return d}});let n=r(9551),o=r(2791),i=r(9525),a=r(4207),s=r(1554),l=r(9430),u=r(4343),c=r(3714),p=r(9407),f=r(3720);function d(e,t,r){let o=(0,n.parse)(e.url,!0);for(let e of(delete o.search,Object.keys(o.query))){let n=e!==p.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(p.NEXT_QUERY_PARAM_PREFIX),i=e!==p.NEXT_INTERCEPTION_MARKER_PREFIX&&e.startsWith(p.NEXT_INTERCEPTION_MARKER_PREFIX);(n||i||t.includes(e)||r&&Object.keys(r.groups).includes(e))&&delete o.query[e]}e.url=(0,n.format)(o)}function m(e,t,r){if(!r)return e;for(let n of Object.keys(r.groups)){let o,{optional:i,repeat:a}=r.groups[n],s=`[${a?"...":""}${n}]`;i&&(s=`[${s}]`);let l=t[n];o=Array.isArray(l)?l.map(e=>e&&encodeURIComponent(e)).join("/"):l?encodeURIComponent(l):"",e=e.replaceAll(s,o)}return e}function h(e,t,r,n){let o={};for(let i of Object.keys(t.groups)){let a=e[i];"string"==typeof a?a=(0,c.normalizeRscURL)(a):Array.isArray(a)&&(a=a.map(c.normalizeRscURL));let s=r[i],l=t.groups[i].optional;if((Array.isArray(s)?s.some(e=>Array.isArray(a)?a.some(t=>t.includes(e)):null==a?void 0:a.includes(e)):null==a?void 0:a.includes(s))||void 0===a&&!(l&&n))return{params:{},hasValidParams:!1};l&&(!a||Array.isArray(a)&&1===a.length&&("index"===a[0]||a[0]===`[[...${i}]]`))&&(a=void 0,delete e[i]),a&&"string"==typeof a&&t.groups[i].repeat&&(a=a.split("/")),a&&(o[i]=a)}return{params:o,hasValidParams:!0}}function g({page:e,i18n:t,basePath:r,rewrites:n,pageIsDynamic:c,trailingSlash:p,caseSensitive:g}){let x,v,b;return c&&(x=(0,a.getNamedRouteRegex)(e,{prefixRouteKeys:!1}),b=(v=(0,s.getRouteMatcher)(x))(e)),{handleRewrites:function(a,s){let f={},d=s.pathname,m=n=>{let u=(0,i.getPathMatch)(n.source+(p?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!g});if(!s.pathname)return!1;let m=u(s.pathname);if((n.has||n.missing)&&m){let e=(0,l.matchHas)(a,s.query,n.has,n.missing);e?Object.assign(m,e):m=!1}if(m){let{parsedDestination:i,destQuery:a}=(0,l.prepareDestination)({appendParamsToQuery:!0,destination:n.destination,params:m,query:s.query});if(i.protocol)return!0;if(Object.assign(f,a,m),Object.assign(s.query,i.query),delete i.query,Object.assign(s,i),!(d=s.pathname))return!1;if(r&&(d=d.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,o.normalizeLocalePath)(d,t.locales);d=e.pathname,s.query.nextInternalLocale=e.detectedLocale||m.nextInternalLocale}if(d===e)return!0;if(c&&v){let e=v(d);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of n.beforeFiles||[])m(e);if(d!==e){let t=!1;for(let e of n.afterFiles||[])if(t=m(e))break;if(!t&&!(()=>{let t=(0,u.removeTrailingSlash)(d||"");return t===(0,u.removeTrailingSlash)(e)||(null==v?void 0:v(t))})()){for(let e of n.fallback||[])if(t=m(e))break}}return f},defaultRouteRegex:x,dynamicRouteMatcher:v,defaultRouteMatches:b,getParamsFromRouteMatches:function(e){if(!x)return null;let{groups:t,routeKeys:r}=x,n=(0,s.getRouteMatcher)({re:{exec:e=>{let n=Object.fromEntries(new URLSearchParams(e));for(let[e,t]of Object.entries(n)){let r=(0,f.normalizeNextQueryParam)(e);r&&(n[r]=t,delete n[e])}let o={};for(let e of Object.keys(r)){let i=r[e];if(!i)continue;let a=t[i],s=n[e];if(!a.optional&&!s)return null;o[a.pos]=s}return o}},groups:t})(e);return n||null},normalizeDynamicRouteParams:(e,t)=>x&&b?h(e,x,b,t):{params:{},hasValidParams:!1},normalizeVercelUrl:(e,t)=>d(e,t,x),interpolateDynamicPath:(e,t)=>m(e,t,x)}}function x(e,t){return"string"==typeof e[p.NEXT_CACHE_REVALIDATED_TAGS_HEADER]&&e[p.NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER]===t?e[p.NEXT_CACHE_REVALIDATED_TAGS_HEADER].split(","):[]}},7675:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return x},NormalizeError:function(){return h},PageNotFoundError:function(){return g},SP:function(){return f},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return a},getURL:function(){return s},isAbsoluteUrl:function(){return i},isResSent:function(){return u},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return b}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function p(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Object.defineProperty(Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let f="undefined"!=typeof performance,d=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class x extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},8312:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return o}}),r(7675);let n=r(2961);function o(e,t,r){void 0===r&&(r=!0);let o=new URL("http://n"),i=t?new URL(t,o):e.startsWith(".")?new URL("http://n"):o,{pathname:a,searchParams:s,search:l,hash:u,href:c,origin:p}=new URL(e,i);if(p!==o.origin)throw Object.defineProperty(Error("invariant: invalid relative URL, router received "+e),"__NEXT_ERROR_CODE",{value:"E159",enumerable:!1,configurable:!0});return{pathname:a,query:r?(0,n.searchParamsToUrlQuery)(s):void 0,search:l,hash:u,href:c.slice(p.length)}}},8336:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>et});var n=r(1551),o=r(794),i=r(7812),a=r(8233),s=r(9993),l=r(8265),u=new WeakMap;function c(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);let r=function(e,t){let r=e.length,n=p(t),o=n>=0?n:r+n;return o<0||o>=r?-1:o}(e,t);return -1===r?void 0:e[r]}function p(e){return e!=e||0===e?0:Math.trunc(e)}var f=r(2158),d=r(6028),m=r(7098),h=r(5734),g=o.createContext(void 0);function x(e){let t=o.useContext(g);return e||t||"ltr"}var v="rovingFocusGroup.onEntryFocus",b={bubbles:!1,cancelable:!0},y="RovingFocusGroup",[E,R,_]=function(e){let t=e+"CollectionProvider",[r,i]=(0,a.A)(t),[u,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),p=e=>{let{scope:t,children:r}=e,i=o.useRef(null),a=o.useRef(new Map).current;return(0,n.jsx)(u,{scope:t,itemMap:a,collectionRef:i,children:r})};p.displayName=t;let f=e+"CollectionSlot",d=(0,l.TL)(f),m=o.forwardRef((e,t)=>{let{scope:r,children:o}=e,i=c(f,r),a=(0,s.s)(t,i.collectionRef);return(0,n.jsx)(d,{ref:a,children:o})});m.displayName=f;let h=e+"CollectionItemSlot",g="data-radix-collection-item",x=(0,l.TL)(h),v=o.forwardRef((e,t)=>{let{scope:r,children:i,...a}=e,l=o.useRef(null),u=(0,s.s)(t,l),p=c(h,r);return o.useEffect(()=>(p.itemMap.set(l,{ref:l,...a}),()=>void p.itemMap.delete(l))),(0,n.jsx)(x,{...{[g]:""},ref:u,children:i})});return v.displayName=h,[{Provider:p,Slot:m,ItemSlot:v},function(t){let r=c(e+"CollectionConsumer",t);return o.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${g}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},i]}(y),[P,j]=(0,a.A)(y,[_]),[A,S]=P(y),T=o.forwardRef((e,t)=>(0,n.jsx)(E.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,n.jsx)(E.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,n.jsx)(w,{...e,ref:t})})}));T.displayName=y;var w=o.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:a,loop:l=!1,dir:u,currentTabStopId:c,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:f,onEntryFocus:g,preventScrollOnEntryFocus:E=!1,..._}=e,P=o.useRef(null),j=(0,s.s)(t,P),S=x(u),[T,w]=(0,h.i)({prop:c,defaultProp:p??null,onChange:f,caller:y}),[C,O]=o.useState(!1),N=(0,m.c)(g),k=R(r),I=o.useRef(!1),[D,$]=o.useState(0);return o.useEffect(()=>{let e=P.current;if(e)return e.addEventListener(v,N),()=>e.removeEventListener(v,N)},[N]),(0,n.jsx)(A,{scope:r,orientation:a,dir:S,loop:l,currentTabStopId:T,onItemFocus:o.useCallback(e=>w(e),[w]),onItemShiftTab:o.useCallback(()=>O(!0),[]),onFocusableItemAdd:o.useCallback(()=>$(e=>e+1),[]),onFocusableItemRemove:o.useCallback(()=>$(e=>e-1),[]),children:(0,n.jsx)(d.sG.div,{tabIndex:C||0===D?-1:0,"data-orientation":a,..._,ref:j,style:{outline:"none",...e.style},onMouseDown:(0,i.m)(e.onMouseDown,()=>{I.current=!0}),onFocus:(0,i.m)(e.onFocus,e=>{let t=!I.current;if(e.target===e.currentTarget&&t&&!C){let t=new CustomEvent(v,b);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=k().filter(e=>e.focusable);M([e.find(e=>e.active),e.find(e=>e.id===T),...e].filter(Boolean).map(e=>e.ref.current),E)}}I.current=!1}),onBlur:(0,i.m)(e.onBlur,()=>O(!1))})})}),C="RovingFocusGroupItem",O=o.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:a=!0,active:s=!1,tabStopId:l,children:u,...c}=e,p=(0,f.B)(),m=l||p,h=S(C,r),g=h.currentTabStopId===m,x=R(r),{onFocusableItemAdd:v,onFocusableItemRemove:b,currentTabStopId:y}=h;return o.useEffect(()=>{if(a)return v(),()=>b()},[a,v,b]),(0,n.jsx)(E.ItemSlot,{scope:r,id:m,focusable:a,active:s,children:(0,n.jsx)(d.sG.span,{tabIndex:g?0:-1,"data-orientation":h.orientation,...c,ref:t,onMouseDown:(0,i.m)(e.onMouseDown,e=>{a?h.onItemFocus(m):e.preventDefault()}),onFocus:(0,i.m)(e.onFocus,()=>h.onItemFocus(m)),onKeyDown:(0,i.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey)return void h.onItemShiftTab();if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return N[o]}(e,h.orientation,h.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=x().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=h.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>M(r))}}),children:"function"==typeof u?u({isCurrentTabStop:g,hasTabStop:null!=y}):u})})});O.displayName=C;var N={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function M(e,t=!1){let r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var k=r(556),I="Tabs",[D,$]=(0,a.A)(I,[j]),L=j(),[U,F]=D(I),q=o.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,onValueChange:i,defaultValue:a,orientation:s="horizontal",dir:l,activationMode:u="automatic",...c}=e,p=x(l),[m,g]=(0,h.i)({prop:o,onChange:i,defaultProp:a??"",caller:I});return(0,n.jsx)(U,{scope:r,baseId:(0,f.B)(),value:m,onValueChange:g,orientation:s,dir:p,activationMode:u,children:(0,n.jsx)(d.sG.div,{dir:p,"data-orientation":s,...c,ref:t})})});q.displayName=I;var z="TabsList";o.forwardRef((e,t)=>{let{__scopeTabs:r,loop:o=!0,...i}=e,a=F(z,r),s=L(r);return(0,n.jsx)(T,{asChild:!0,...s,orientation:a.orientation,dir:a.dir,loop:o,children:(0,n.jsx)(d.sG.div,{role:"tablist","aria-orientation":a.orientation,...i,ref:t})})}).displayName=z;var G="TabsTrigger";o.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,disabled:a=!1,...s}=e,l=F(G,r),u=L(r),c=H(l.baseId,o),p=V(l.baseId,o),f=o===l.value;return(0,n.jsx)(O,{asChild:!0,...u,focusable:!a,active:f,children:(0,n.jsx)(d.sG.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":p,"data-state":f?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...s,ref:t,onMouseDown:(0,i.m)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():l.onValueChange(o)}),onKeyDown:(0,i.m)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&l.onValueChange(o)}),onFocus:(0,i.m)(e.onFocus,()=>{let e="manual"!==l.activationMode;f||a||!e||l.onValueChange(o)})})})}).displayName=G;var W="TabsContent",K=o.forwardRef((e,t)=>{let{__scopeTabs:r,value:i,forceMount:a,children:s,...l}=e,u=F(W,r),c=H(u.baseId,i),p=V(u.baseId,i),f=i===u.value,m=o.useRef(f);return o.useEffect(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,n.jsx)(k.C,{present:a||f,children:({present:r})=>(0,n.jsx)(d.sG.div,{"data-state":f?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":c,hidden:!r,id:p,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:r&&s})})});function H(e,t){return`${e}-trigger-${t}`}function V(e,t){return`${e}-content-${t}`}K.displayName=W;var X=r(3413);function B({className:e,...t}){return(0,n.jsx)(q,{"data-slot":"tabs",className:(0,X.cn)("flex flex-col gap-2",e),...t})}function Q({className:e,...t}){return(0,n.jsx)(K,{"data-slot":"tabs-content",className:(0,X.cn)("flex-1 outline-none",e),...t})}let J={_sobre:`console.log("Bem-vindo ao meu portf\xf3lio! 👋");

// Ol\xe1! Eu sou um desenvolvedor apaixonado
const developer = {
  name: "Othavio Quili\xe3o",
  role: "Full Stack Developer",
  location: "Brasil",
  status: "Dispon\xedvel para oportunidades",

  greeting() {
    return \`Ol\xe1! Eu sou \${this.name},
           um \${this.role} apaixonado
           localizado em \${this.location}.\`;
  }
};

console.log(developer.greeting());

// Vamos explorar meu trabalho juntos!
const navigation = [
  "📋 Sobre.js        // Saiba mais sobre mim",
  "🚀 Projetos.js     // Confira meus projetos",
  "💼 Habilidades.js  // Minhas compet\xeancias",
  "📞 Contato.js      // Entre em contato"
];

navigation.forEach(item => console.log(item));`,_projetos:`// Meus Projetos em Destaque 🚀

const projetos = [
  {
    nome: "Plataforma E-commerce",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    descricao: "E-commerce full-stack com dashboard admin",
    status: "Produ\xe7\xe3o",
    github: "github.com/usuario/ecommerce",
    live: "minhaloja.vercel.app",
    destaques: [
      "💳 Processamento de pagamentos integrado",
      "📊 Dashboard de analytics em tempo real",
      "🔐 Sistema de autentica\xe7\xe3o JWT",
      "📱 Design completamente responsivo"
    ]
  },

  {
    nome: "App de Gerenciamento de Tarefas",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    descricao: "Ferramenta colaborativa de gest\xe3o de projetos",
    status: "Desenvolvimento",
    github: "github.com/usuario/taskapp",
    destaques: [
      "⚡ Colabora\xe7\xe3o em tempo real",
      "🎯 Interface drag & drop",
      "📈 Acompanhamento de progresso",
      "👥 Gest\xe3o de equipes"
    ]
  },

  {
    nome: "Dashboard do Clima",
    tech: ["Vue.js", "Express", "OpenWeather API"],
    descricao: "App de clima bonito com previs\xf5es",
    status: "Conclu\xeddo",
    github: "github.com/usuario/weather",
    live: "weather-dash.netlify.app",
    destaques: [
      "🌤️ Previs\xf5es de 7 dias",
      "📍 Clima baseado em localiza\xe7\xe3o",
      "📊 Gr\xe1ficos interativos",
      "🎨 \xcdcones de clima animados"
    ]
  }
];

// Atualmente trabalhando em...
const projetoAtual = {
  nome: "Assistente de C\xf3digo IA",
  descricao: "Extens\xe3o VS Code para ajuda com IA",
  progresso: "75%",
  lancamento_previsto: "Q2 2024"
};

console.log("Confira meu trabalho! 💻");`,_habilidades:`// Minhas Habilidades e Compet\xeancias 💪

const habilidades = {
  frontend: {
    linguagens: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    frameworks: ["React", "Next.js", "Vue.js", "Angular"],
    styling: ["Tailwind CSS", "Styled Components", "SCSS", "CSS Modules"],
    ferramentas: ["Webpack", "Vite", "ESLint", "Prettier"]
  },

  backend: {
    linguagens: ["Node.js", "Python", "Java", "PHP"],
    frameworks: ["Express.js", "Fastify", "Django", "Spring Boot"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    orms: ["Prisma", "TypeORM", "Mongoose", "Sequelize"]
  },

  devops: {
    cloud: ["AWS", "Google Cloud", "Vercel", "Netlify"],
    containers: ["Docker", "Docker Compose", "Kubernetes"],
    ci_cd: ["GitHub Actions", "GitLab CI", "Jenkins"],
    monitoring: ["Sentry", "LogRocket", "New Relic"]
  },

  ferramentas: {
    versionamento: ["Git", "GitHub", "GitLab", "Bitbucket"],
    design: ["Figma", "Adobe XD", "Photoshop"],
    apis: ["REST", "GraphQL", "WebSockets", "tRPC"],
    testes: ["Jest", "Cypress", "Testing Library", "Vitest"]
  },

  softSkills: [
    "Trabalho em equipe",
    "Comunica\xe7\xe3o efetiva",
    "Resolu\xe7\xe3o de problemas",
    "Pensamento cr\xedtico",
    "Adaptabilidade",
    "Lideran\xe7a t\xe9cnica",
    "Mentoria",
    "Gest\xe3o de tempo"
  ],

  certificacoes: [
    "AWS Cloud Practitioner",
    "Google Analytics Certified",
    "MongoDB University Certificate"
  ]
};

// N\xedvel de experi\xeancia
const nivelExperiencia = {
  javascript: "Avan\xe7ado",
  react: "Avan\xe7ado",
  nodejs: "Avan\xe7ado",
  typescript: "Intermedi\xe1rio",
  python: "Intermedi\xe1rio",
  aws: "Intermedi\xe1rio",
  docker: "Intermedi\xe1rio"
};

console.log("Sempre aprendendo e evoluindo! 🚀");`,_contato:`// Vamos nos Conectar! 📬

const infoContato = {
  email: "othavio.quiliao@exemplo.com",
  telefone: "+55 11 99999-9999",
  localizacao: "S\xe3o Paulo, SP - Brasil",
  fuso_horario: "GMT-3 (BRT)",

  social: {
    github: "github.com/othavio-quiliao",
    linkedin: "linkedin.com/in/othavio-quiliao",
    twitter: "@othavio_dev",
    portfolio: "othavio.dev"
  },

  disponibilidade: {
    status: "🟢 Dispon\xedvel para novas oportunidades",
    horario_trabalho: "Seg-Sex, 9h-18h BRT",
    tempo_resposta: "Geralmente em at\xe9 24 horas",

    interessado_em: [
      "Posi\xe7\xf5es full-time",
      "Projetos freelance",
      "Consultoria t\xe9cnica",
      "Colabora\xe7\xe3o em c\xf3digo aberto"
    ]
  },

  contato_preferido: "email", // ou "linkedin"

  // Fun\xe7\xe3o de contato r\xe1pido
  enviarMensagem: function(mensagem) {
    return \`
      📧 Email: \${this.email}
      💬 Mensagem: \${mensagem}

      Retornarei em breve!
      Obrigado por entrar em contato! 🚀
    \`;
  }
};

// Sinta-se \xe0 vontade para entrar em contato!
console.log("Vamos construir algo incr\xedvel juntos! ✨");

export default infoContato;`,_readme:`# 💼 Meu Portf\xf3lio

Bem-vindo ao meu portf\xf3lio desenvolvido com tema VSCode!

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Icons**: Lucide React

## 📁 Estrutura do Projeto

\`\`\`
portfolio/
├── 📄 Sobre.js        # P\xe1gina de apresenta\xe7\xe3o
├── 👤 Projetos.js     # Projetos em destaque
├── 🚀 Habilidades.js  # Compet\xeancias t\xe9cnicas
├── 📞 Contato.js      # Informa\xe7\xf5es de contato
└── 📖 README.md       # Este arquivo
\`\`\`

## 🎨 Features

- ✅ Interface similar ao VSCode
- ✅ Syntax highlighting
- ✅ Tabs funcionais
- ✅ Explorer de arquivos
- ✅ Barra de status
- ✅ Tema escuro

## 📫 Contato

Entre em contato comigo atrav\xe9s dos links na barra de status!

---

*Constru\xeddo com ❤️ usando Next.js*`,_package:`{
  "name": "othavio-portfolio",
  "version": "1.0.0",
  "description": "Portf\xf3lio pessoal desenvolvido com tema VSCode",
  "author": "Othavio Quili\xe3o",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "@radix-ui/react-collapsible": "^1.0.0",
    "@radix-ui/react-slot": "^1.0.0",
    "@radix-ui/react-tabs": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.294.0",
    "tailwind-merge": "^2.0.0",
    "tailwindcss-animate": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "autoprefixer": "^10.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "postcss": "^8.0.0",
    "tailwindcss": "^3.0.0"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/othavio-quiliao/portfolio"
  },
  "keywords": [
    "portfolio",
    "nextjs",
    "react",
    "typescript",
    "vscode-theme",
    "developer"
  ],
  "license": "MIT"
}`};function Z({fileName:e}){let t=(J[e.toLowerCase()]||`// Arquivo n\xe3o encontrado: ${e}`).split("\n"),r=e=>e.trim().startsWith("//")?(0,n.jsx)("span",{className:"text-gray-400",children:e}):e.includes("/**")||e.includes("*/")||e.trim().startsWith("*")?(0,n.jsx)("span",{className:"text-[#6A9955]",children:e}):e.includes('"')||e.includes("'")||e.includes("`")?(0,n.jsx)("span",{children:e.split(/("[^"]*"|'[^']*'|`[^`]*`)/).map((e,t)=>t%2==1?(0,n.jsx)("span",{className:"text-emerald-400 font-semibold",children:e},t):(0,n.jsx)("span",{children:o(e)},t))}):(0,n.jsx)("span",{children:o(e)}),o=e=>{let t=/(const|let|var|function|return|export|default|import|from|if|else|for|while|class|extends|async|await)/g;return e.split(t).map((e,r)=>{if(t.test(e))return(0,n.jsx)("span",{className:"text-zinc-300 font-semibold",children:e},`keyword-${r}`);let o=/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g;return e.split(o).map((e,t)=>o.test(e)&&!/(const|let|var|function|return|export|default|import|from|if|else|for|while|class|extends|async|await|console|log|forEach|split|map|includes|trim|startsWith|test)/.test(e)?(0,n.jsx)("span",{className:"text-violet-500 ",children:e},`var-${r}-${t}`):e)})};return(0,n.jsxs)("div",{className:"flex flex-1 bg-background overflow-hidden border-r border-[#3e3e42] h-full",children:[(0,n.jsx)("div",{className:"w-10 bg-background border-r  border-[#3e3e42] py-2 px-3 overflow-y-auto flex-shrink-0",children:t.map((e,t)=>(0,n.jsx)("div",{className:"text-[#858585] text-right text-sm leading-6 select-none",children:t+1},t+1))}),(0,n.jsx)("div",{className:"flex-1 px-4 py-2 overflow-y-auto",children:(0,n.jsx)("pre",{className:"text-[#cccccc] leading-6 font-mono text-sm",children:(0,n.jsx)("code",{children:t.map((e,t)=>(0,n.jsx)("div",{className:"min-h-[24px]",children:r(e)||" "},t))})})})]})}let Y=(0,r(3160).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var ee=r(778);function et(){let[e,t]=(0,o.useState)("_sobre"),[r,i]=(0,o.useState)([{id:"_sobre",name:"_sobre",type:"javascript"}]);(0,o.useCallback)((e,n)=>{r.find(t=>t.name===e)||i([...r,{id:e,name:e,type:n}]),t(e)},[r]);let a=n=>{let o=r.filter(e=>e.id!==n);i(o),e===n&&o.length>0?t(o[o.length-1].id):0===o.length&&(i([{id:"_sobre",name:"_sobre",type:"javascript"}]),t("_sobre"))};return(0,n.jsx)("div",{className:"h-screen bg-background text-[#cccccc] font-mono text-sm flex flex-col",children:(0,n.jsx)("div",{className:"flex-1 flex flex-col overflow-hidden",children:r.length>0&&(0,n.jsxs)(B,{value:e,onValueChange:t,className:"flex-1 flex flex-col ",children:[(0,n.jsxs)("div",{className:"bg-background h-15  justify-between border-[#3e3e42] flex border-b border-t ",children:[(0,n.jsx)("div",{className:"flex border-r border-[#3e3e42] text-lg ",children:r.map(o=>(0,n.jsxs)("div",{className:`group min-w-44 h-15 flex items-center justify-between px-4 border-r border-[#3e3e42] text-base  cursor-pointer ${e===o.id?"border-b-3 border-b-[#007acc]":"border-b hover:bg-[#2a2d2e]"}`,onClick:()=>t(o.id),children:[(0,n.jsx)("span",{className:"truncate",children:o.name}),r.length>1&&(0,n.jsx)(ee.$,{onClick:e=>{e.stopPropagation(),a(o.id)},variant:"ghost",size:"icon",className:"opacity-0 group-hover:opacity-100 hover:bg-[#3e3e42] size-5 ml-2",children:(0,n.jsx)(Y,{className:"size-4"})})]},o.id))}),(0,n.jsx)(ee.$,{variant:"ghost",className:"bg-background border border-[#3e3e42] rounded-none h-15 flex items-center justify-center text-md text-base px-10",children:"_entrar-em-contato"})]}),r.map(e=>(0,n.jsx)(Q,{value:e.id,className:"flex-1 m-0",children:(0,n.jsx)(Z,{fileName:e.name,fileType:e.type})},e.id))]})})})}},8605:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return o},extractInterceptionRouteInformation:function(){return a},isInterceptionRouteAppPath:function(){return i}});let n=r(3714),o=["(..)(..)","(.)","(..)","(...)"];function i(e){return void 0!==e.split("/").find(e=>o.find(t=>e.startsWith(t)))}function a(e){let t,r,i;for(let n of e.split("/"))if(r=o.find(e=>n.startsWith(e))){[t,i]=e.split(r,2);break}if(!t||!r||!i)throw Object.defineProperty(Error("Invalid interception route: "+e+". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"),"__NEXT_ERROR_CODE",{value:"E269",enumerable:!1,configurable:!0});switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":i="/"===t?"/"+i:t+"/"+i;break;case"(..)":if("/"===t)throw Object.defineProperty(Error("Invalid interception route: "+e+". Cannot use (..) marker at the root level, use (.) instead."),"__NEXT_ERROR_CODE",{value:"E207",enumerable:!1,configurable:!0});i=t.split("/").slice(0,-1).concat(i).join("/");break;case"(...)":i="/"+i;break;case"(..)(..)":let a=t.split("/");if(a.length<=2)throw Object.defineProperty(Error("Invalid interception route: "+e+". Cannot use (..)(..) marker at the root level or one level up."),"__NEXT_ERROR_CODE",{value:"E486",enumerable:!1,configurable:!0});i=a.slice(0,-2).concat(i).join("/");break;default:throw Object.defineProperty(Error("Invariant: unexpected marker"),"__NEXT_ERROR_CODE",{value:"E112",enumerable:!1,configurable:!0})}return{interceptingRoute:t,interceptedRoute:i}}},8639:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var o={},i=t.split(n),a=(r||{}).decode||e,s=0;s<i.length;s++){var l=i[s],u=l.indexOf("=");if(!(u<0)){var c=l.substr(0,u).trim(),p=l.substr(++u,l.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),void 0==o[c]&&(o[c]=function(e,t){try{return t(e)}catch(t){return e}}(p,a))}}return o},t.serialize=function(e,t,n){var i=n||{},a=i.encode||r;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var s=a(t);if(s&&!o.test(s))throw TypeError("argument val is invalid");var l=e+"="+s;if(null!=i.maxAge){var u=i.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(u)}if(i.domain){if(!o.test(i.domain))throw TypeError("option domain is invalid");l+="; Domain="+i.domain}if(i.path){if(!o.test(i.path))throw TypeError("option path is invalid");l+="; Path="+i.path}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(l+="; HttpOnly"),i.secure&&(l+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var e=decodeURIComponent,r=encodeURIComponent,n=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},8786:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{function e(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){for(var o="",i=r+1;i<e.length;){var a=e.charCodeAt(i);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||95===a){o+=e[i++];continue}break}if(!o)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:o}),r=i;continue}if("("===n){var s=1,l="",i=r+1;if("?"===e[i])throw TypeError('Pattern cannot start with "?" at '+i);for(;i<e.length;){if("\\"===e[i]){l+=e[i++]+e[i++];continue}if(")"===e[i]){if(0==--s){i++;break}}else if("("===e[i]&&(s++,"?"!==e[i+1]))throw TypeError("Capturing groups are not allowed at "+i);l+=e[i++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!l)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:l}),r=i;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,a="[^"+o(t.delimiter||"/#?")+"]+?",s=[],l=0,u=0,c="",p=function(e){if(u<r.length&&r[u].type===e)return r[u++].value},f=function(e){var t=p(e);if(void 0!==t)return t;var n=r[u];throw TypeError("Unexpected "+n.type+" at "+n.index+", expected "+e)},d=function(){for(var e,t="";e=p("CHAR")||p("ESCAPED_CHAR");)t+=e;return t};u<r.length;){var m=p("CHAR"),h=p("NAME"),g=p("PATTERN");if(h||g){var x=m||"";-1===i.indexOf(x)&&(c+=x,x=""),c&&(s.push(c),c=""),s.push({name:h||l++,prefix:x,suffix:"",pattern:g||a,modifier:p("MODIFIER")||""});continue}var v=m||p("ESCAPED_CHAR");if(v){c+=v;continue}if(c&&(s.push(c),c=""),p("OPEN")){var x=d(),b=p("NAME")||"",y=p("PATTERN")||"",E=d();f("CLOSE"),s.push({name:b||(y?l++:""),pattern:b&&!y?a:y,prefix:x,suffix:E,modifier:p("MODIFIER")||""});continue}f("END")}return s}function r(e,t){void 0===t&&(t={});var r=i(t),n=t.encode,o=void 0===n?function(e){return e}:n,a=t.validate,s=void 0===a||a,l=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",n=0;n<e.length;n++){var i=e[n];if("string"==typeof i){r+=i;continue}var a=t?t[i.name]:void 0,u="?"===i.modifier||"*"===i.modifier,c="*"===i.modifier||"+"===i.modifier;if(Array.isArray(a)){if(!c)throw TypeError('Expected "'+i.name+'" to not repeat, but got an array');if(0===a.length){if(u)continue;throw TypeError('Expected "'+i.name+'" to not be empty')}for(var p=0;p<a.length;p++){var f=o(a[p],i);if(s&&!l[n].test(f))throw TypeError('Expected all "'+i.name+'" to match "'+i.pattern+'", but got "'+f+'"');r+=i.prefix+f+i.suffix}continue}if("string"==typeof a||"number"==typeof a){var f=o(String(a),i);if(s&&!l[n].test(f))throw TypeError('Expected "'+i.name+'" to match "'+i.pattern+'", but got "'+f+'"');r+=i.prefix+f+i.suffix;continue}if(!u){var d=c?"an array":"a string";throw TypeError('Expected "'+i.name+'" to be '+d)}}return r}}function n(e,t,r){void 0===r&&(r={});var n=r.decode,o=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var i=n[0],a=n.index,s=Object.create(null),l=1;l<n.length;l++)!function(e){if(void 0!==n[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=n[e].split(r.prefix+r.suffix).map(function(e){return o(e,r)}):s[r.name]=o(n[e],r)}}(l);return{path:i,index:a,params:s}}}function o(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function i(e){return e&&e.sensitive?"":"i"}function a(e,t,r){void 0===r&&(r={});for(var n=r.strict,a=void 0!==n&&n,s=r.start,l=r.end,u=r.encode,c=void 0===u?function(e){return e}:u,p="["+o(r.endsWith||"")+"]|$",f="["+o(r.delimiter||"/#?")+"]",d=void 0===s||s?"^":"",m=0;m<e.length;m++){var h=e[m];if("string"==typeof h)d+=o(c(h));else{var g=o(c(h.prefix)),x=o(c(h.suffix));if(h.pattern)if(t&&t.push(h),g||x)if("+"===h.modifier||"*"===h.modifier){var v="*"===h.modifier?"?":"";d+="(?:"+g+"((?:"+h.pattern+")(?:"+x+g+"(?:"+h.pattern+"))*)"+x+")"+v}else d+="(?:"+g+"("+h.pattern+")"+x+")"+h.modifier;else d+="("+h.pattern+")"+h.modifier;else d+="(?:"+g+x+")"+h.modifier}}if(void 0===l||l)a||(d+=f+"?"),d+=r.endsWith?"(?="+p+")":"$";else{var b=e[e.length-1],y="string"==typeof b?f.indexOf(b[b.length-1])>-1:void 0===b;a||(d+="(?:"+f+"(?="+p+"))?"),y||(d+="(?="+f+"|"+p+")")}return new RegExp(d,i(r))}function s(t,r,n){if(t instanceof RegExp){if(!r)return t;var o=t.source.match(/\((?!\?)/g);if(o)for(var l=0;l<o.length;l++)r.push({name:l,prefix:"",suffix:"",modifier:"",pattern:""});return t}return Array.isArray(t)?RegExp("(?:"+t.map(function(e){return s(e,r,n).source}).join("|")+")",i(n)):a(e(t,n),r,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=e,t.compile=function(t,n){return r(e(t,n),n)},t.tokensToFunction=r,t.match=function(e,t){var r=[];return n(s(e,r,t),r,t)},t.regexpToFunction=n,t.tokensToRegexp=a,t.pathToRegexp=s})(),e.exports=t})()},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9430:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{compileNonPath:function(){return c},matchHas:function(){return u},parseDestination:function(){return p},prepareDestination:function(){return f}});let n=r(8786),o=r(5453),i=r(6055),a=r(8605),s=r(3796);function l(e){return e.replace(/__ESC_COLON_/gi,":")}function u(e,t,r,n){void 0===r&&(r=[]),void 0===n&&(n=[]);let o={},i=r=>{let n,i=r.key;switch(r.type){case"header":i=i.toLowerCase(),n=e.headers[i];break;case"cookie":n="cookies"in e?e.cookies[r.key]:(0,s.getCookieParser)(e.headers)()[r.key];break;case"query":n=t[i];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{};n=null==t?void 0:t.split(":",1)[0].toLowerCase()}}if(!r.value&&n)return o[function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t}(i)]=n,!0;if(n){let e=RegExp("^"+r.value+"$"),t=Array.isArray(n)?n.slice(-1)[0].match(e):n.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{o[e]=t.groups[e]}):"host"===r.type&&t[0]&&(o.host=t[0])),!0}return!1};return!(!r.every(e=>i(e))||n.some(e=>i(e)))&&o}function c(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,n.compile)("/"+e,{validate:!1})(t).slice(1)}function p(e){let t=e.destination;for(let r of Object.keys({...e.params,...e.query}))r&&(t=t.replace(RegExp(":"+(0,o.escapeStringRegexp)(r),"g"),"__ESC_COLON_"+r));let r=(0,i.parseUrl)(t),n=r.pathname;n&&(n=l(n));let a=r.href;a&&(a=l(a));let s=r.hostname;s&&(s=l(s));let u=r.hash;return u&&(u=l(u)),{...r,pathname:n,hostname:s,href:a,hash:u}}function f(e){let t,r,o=Object.assign({},e.query),i=p(e),{hostname:s,query:u}=i,f=i.pathname;i.hash&&(f=""+f+i.hash);let d=[],m=[];for(let e of((0,n.pathToRegexp)(f,m),m))d.push(e.name);if(s){let e=[];for(let t of((0,n.pathToRegexp)(s,e),e))d.push(t.name)}let h=(0,n.compile)(f,{validate:!1});for(let[r,o]of(s&&(t=(0,n.compile)(s,{validate:!1})),Object.entries(u)))Array.isArray(o)?u[r]=o.map(t=>c(l(t),e.params)):"string"==typeof o&&(u[r]=c(l(o),e.params));let g=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!g.some(e=>d.includes(e)))for(let t of g)t in u||(u[t]=e.params[t]);if((0,a.isInterceptionRouteAppPath)(f))for(let t of f.split("/")){let r=a.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){"(..)(..)"===r?(e.params["0"]="(..)",e.params["1"]="(..)"):e.params["0"]=r;break}}try{let[n,o]=(r=h(e.params)).split("#",2);t&&(i.hostname=t(e.params)),i.pathname=n,i.hash=(o?"#":"")+(o||""),delete i.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Object.defineProperty(Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match"),"__NEXT_ERROR_CODE",{value:"E329",enumerable:!1,configurable:!0});throw e}return i.query={...o,...i.query},{newUrl:r,destQuery:u,parsedDestination:i}}},9525:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return o}});let n=r(8786);function o(e,t){let r=[],o=(0,n.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),i=(0,n.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(o.source),o.flags):o,r);return(e,n)=>{if("string"!=typeof e)return!1;let o=i(e);if(!o)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete o.params[e.name];return{...n,...o.params}}}},9551:e=>{"use strict";e.exports=require("url")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[31,898,536],()=>r(6447));module.exports=n})();