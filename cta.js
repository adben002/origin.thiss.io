!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("cta",[],t):"object"==typeof exports?exports.cta=t():n.cta=t()}(this,(function(){return function(n){function t(t){for(var i,I,g=t[0],r=t[1],c=t[2],j=0,l=[];j<g.length;j++)I=g[j],Object.prototype.hasOwnProperty.call(M,I)&&M[I]&&l.push(M[I][0]),M[I]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i]);for(u&&u(t);l.length;)l.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],i=!0,g=1;g<e.length;g++){var r=e[g];0!==M[r]&&(i=!1)}i&&(o.splice(t--,1),n=I(I.s=e[0]))}return n}var i={},M={2:0},o=[];function I(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,I),e.l=!0,e.exports}I.m=n,I.c=i,I.d=function(n,t,e){I.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},I.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},I.t=function(n,t){if(1&t&&(n=I(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(I.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)I.d(e,i,function(t){return n[t]}.bind(null,i));return e},I.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return I.d(t,"a",t),t},I.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},I.p="/";var g=this.webpackJsonp_name_=this.webpackJsonp_name_||[],r=g.push.bind(g);g.push=t,g=g.slice();for(var c=0;c<g.length;c++)t(g[c]);var u=r;return o.push([20,1,0]),e()}({20:function(n,t,e){function i(){e(21)}var M=function(){return["findIndex"in Array.prototype?0:1,"values"in Object?0:1,"Promise"in this?0:1,"fetch"in this?0:1]}.call(window);if(-1===M.indexOf(1))i();else{var o=document.createElement("script");o.src="/polyfills."+M.join("")+".js",o.onload=i,o.onerror=function(n){console.error("Could not load the polyfills: "+n)},document.head.appendChild(o)}},21:function(n,t,e){"use strict";e.r(t);var i=e(2),M=e(9),o=e(3);e(4),e(46),e(24);i.c.add(M.faPlusSquare),i.b.watch();var I,g="https://md.thiss.io/entities/",r="https://use.thiss.io/ps/",c=window.xprops.loginInitiatorURL||window.xprops.loginHandlerURL,u=window.xprops.discoveryRequest,j=window.xprops.discoveryResponse;if(u||(u=c),j||(j=c),"function"!=typeof u){var l=u;u=function(){window.top.location.href=l}}if("function"!=typeof j){var a=j;j=function(n){var t={return:a};return window.top.location.href=Object(o.ds_response_url)(n,t)}}document.getElementById("main").style.background=window.xprops.backgroundColor,document.getElementById("idpbutton").style.background=window.xprops.color,window.xprops.persistenceURL&&(r=window.xprops.persistenceURL),window.xprops.context&&(I=window.xprops.context),window.xprops.MDQ&&(g=window.xprops.MDQ);var N=new o.DiscoveryService(g,r,I),s=[];window.xprops.pinned&&s.push(N.pin(window.xprops.pinned)),Promise.all(s).then((function(){var n=0,t=null,e=document.getElementById("idpbutton"),i=document.getElementById("dsbutton");i.hidden=!0,e.addEventListener("click",(function(n){n.preventDefault(),null!==t?N.do_saml_discovery_response(t).then((function(n){j(n.entity)})):u()})),i.addEventListener("click",(function(n){n.preventDefault(),u()})),N.with_items((function(e){if(e&&e.length>0){var M=e[e.length-1];M&&M.entity&&M.entity.title&&M.entity.entityID&&(document.getElementById("title").innerText=M.entity.title,t=M.entity.entityID,document.getElementById("headline").innerText="Access through",document.getElementById("headline").className="ra21-button-text-secondary",n+=1)}return 0==n?document.getElementById("title").innerText="Access through your institution":i.hidden=!1,e}))}))},24:function(n,t){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5idWlsZGluZ0FuZEtleV82PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTguOSUiIHk9Ii05LjElIiB3aWR0aD0iMTQyLjAlIiBoZWlnaHQ9IjEzNi40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTEiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjE1MDc1ODYwNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIj48L2ZlTWVyZ2VOb2RlPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIj48L2ZlTWVyZ2VOb2RlPgogICAgICAgICAgICA8L2ZlTWVyZ2U+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iR1NLLWRlbW8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwcm9kdWN0LXJldHVybmluZy0tLWV4cGFuZGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjcwLjAwMDAwMCwgLTIwMy4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iQ1RBLS0tbGV2ZWwyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NTMuMDAwMDAwLCAxODQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ1RBIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iYnVpbGRpbmdBbmRLZXlfNiIgZmlsdGVyPSJ1cmwoI2ZpbHRlci0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMDAwMDAwLCAxOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuMzE1OTY3NTUsOS42Nzk5OTYzNyBMMTkuNzk3OTQ1NCw5LjY3OTk5NjM3IEMyMC4zNzIwMTA4LDkuNjgxMzY5MjggMjAuODgwOTk1Nyw5LjI5MzU0NDk3IDIxLjA1NjY0NzksOC43MjA5MTk5OSBDMjEuMjMyMyw4LjE0ODI5NSAyMS4wMzQyNzQyLDcuNTIyMzk0NTkgMjAuNTY2OTM2Niw3LjE3MzA4OTQ2IEwxMS4zMjU5NDc3LDAuMjU3MjY5MTU5IEMxMC44NjY4Njk0LC0wLjA4NTc1NjM4NjMgMTAuMjUwNjE0NywtMC4wODU3NTYzODYzIDkuNzkxNTM2NDEsMC4yNTcyNjkxNTkgTDAuNTUwNTQ3NTAyLDcuMTczMDg5NDYgQzAuMDg1MzcxNzQwMSw3LjUyMjg0Njk4IC0wLjExMTU5MTIwOCw4LjE0NjkwNTY2IDAuMDYyODYxOTc1Miw4LjcxODI3NTQ1IEMwLjIzNzMxNTE1OCw5LjI4OTY0NTIzIDAuNzQzNDEwNDkxLDkuNjc4MDU4MjEgMS4zMTU5Njc1NSw5LjY3OTk5NjM3IFogTTEwLjU1Njk1NjUsMy4wNzcyMjc2MyBMMTUuNjc1NjI4Nyw2LjkwODY3OTM4IEw1LjQzNDcxMzA5LDYuOTA4Njc5MzggTDEwLjU1Njk1NjUsMy4wNzcyMjc2MyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLjM0NDIxMTgsMjAuMDIyNTA5MiBMMTkuNjMwMjk2MywyMC4wMjI1MDkyIEwxOS42MzAyOTYzLDE5LjEzMTkyMDEgQzE5LjYzMDI5NjMsMTguNzAwODgyNSAxOS4yODI5NjQxLDE4LjM1MTQ1NzYgMTguODU0NTA4MiwxOC4zNTE0NTc2IEwxNy44ODgzNDI1LDE4LjM1MTQ1NzYgTDE3Ljg4ODM0MjUsMTEuODg3NTA0NCBDMTcuODg4MzQyNSwxMS4xNTQzNDQgMTcuMjk3NTU4MiwxMC41NiAxNi41Njg3ODg3LDEwLjU2IEMxNS44NDAwMTkzLDEwLjU2IDE1LjI0OTIzNDksMTEuMTU0MzQ0IDE1LjI0OTIzNDksMTEuODg3NTA0NCBMMTUuMjQ5MjM0OSwxOC4zNTE0NTc2IEw1Ljg3MDc2NTA3LDE4LjM1MTQ1NzYgTDUuODcwNzY1MDcsMTEuODg3NTA0NCBDNS44NzA3NjUwNywxMS4xNTQzNDQgNS4yNzk5ODA3MSwxMC41NiA0LjU1MTIxMTI3LDEwLjU2IEMzLjgyMjQ0MTgzLDEwLjU2IDMuMjMxNjU3NDYsMTEuMTU0MzQ0IDMuMjMxNjU3NDYsMTEuODg3NTA0NCBMMy4yMzE2NTc0NiwxOC4zNTE0NTc2IEwyLjI2NjY4MTY5LDE4LjM1MTQ1NzYgQzIuMDYwNzIzOCwxOC4zNTExMzk4IDEuODYzMDkzMjIsMTguNDMzMjI2NSAxLjcxNzM0NzI3LDE4LjU3OTYyNjEgQzEuNTcxNjAxMzIsMTguNzI2MDI1NyAxLjQ4OTcwMzQyLDE4LjkyNDcyMSAxLjQ4OTcwMzY2LDE5LjEzMTkyMDEgTDEuNDg5NzAzNjYsMjAuMDIyNTA5MiBMMC43NzU3ODgxNjksMjAuMDIyNTA5MiBDMC4zNDczMzIxOTQsMjAuMDIyNTA5MiAwLDIwLjM3MTkzNDEgMCwyMC44MDI5NzE2IEwwLDIyIEwyMS4xMiwyMiBMMjEuMTIsMjAuODAxNzc0NiBDMjEuMTE5MzQzNiwyMC4zNzEyMDQ2IDIwLjc3MjIwMzYsMjAuMDIyNTA4NiAyMC4zNDQyMTE4LDIwLjAyMjUwOTIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi4zMTk5OTg1LDEyLjI5NTAwNDQgQzEyLjMyMTA5MzcsMTEuNDc1ODg4IDExLjczOTMyODMsMTAuNzY3OTM4MSAxMC45MjUzOTI4LDEwLjU5NzkwOTggQzEwLjExMTQ1NzMsMTAuNDI3ODgxNSA5LjI4Nzc3OTA3LDEwLjg0MjIzOTIgOC45NTA4NzQ4MiwxMS41OTEyMDYzIEM4LjYxMzk3MDU4LDEyLjM0MDE3MzQgOC44NTU5MDc0NSwxMy4yMTkwNzY2IDkuNTMwODQ0ODksMTMuNjk4MTA5NiBMOC44ODU2MTk4OSwxNi43MiBMMTIuMjM0NTMwMiwxNi43MiBMMTEuNTkwNTA5LDEzLjY5ODEwOTYgQzEyLjA0ODY3ODksMTMuMzczMDY5MSAxMi4zMjAxMjY2LDEyLjg1MDk2NDYgMTIuMzE5OTk4NSwxMi4yOTUwMDQ0IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},4:function(n,t,e){"use strict";e.r(t),e.d(t,"DiscoveryComponent",(function(){return o}));var i=e(8),M=e(6),o=i.create({tag:"thiss-component",url:{thiss:"https://use.thiss.io/cta/"},defaultEnv:"thiss",dimensions:{width:"350px",height:"80px"},defaultLogLevel:"error",autoResize:{width:!0,height:!0},contexts:{iframe:!0,popup:!1},backgroundColor:"#FFFFFF",color:"#0079ff",prerenderTemplate:function(n){var t=n.document.createElement("html");return t.innerHTML=M(),t}})},46:function(n,t){},6:function(module,exports,__webpack_require__){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <style>\n        :root {\n          --white: #ffffff;\n          --text-grey: #444444;\n          --warm-grey: #767676;\n          --white-two: #f6f6f6;\n          --footer-grey: #ebebeb;\n          --primary-blue: #0079ff;\n          --white-50: rgba(255, 255, 255, 0.5);\n          --white-three: #e6e6e6;\n        }\n        body {\n            box-sizing: border-box;\n            padding: 0;\n            margin: 0;\n        }\n        .ra21CTALoadingContainer {\n            width: 350px;\n            height: 80px;\n            float: top;\n        }\n        .ra21CTAMain {\n            max-height: 60px;\n            max-width: 350px;\n            align: top;\n            float: bottom;\n            font-family: \'Helvetica\', sans-serif;\n            font-size: 12px;\n            font-weight: normal;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: 1.67;\n            letter-spacing: normal;\n            text-align: center;\n            background-color: var(--primary-blue);\n            border-radius: 5px;\n        }\n\n        .ra21-button {\n          background-color: var(--primary-blue);\n          border-radius: 5px;\n          color: var(--warm-grey);\n          cursor: pointer;\n          display: flex;\n          margin-bottom: 5px;\n          padding: 10px;\n          text-decoration: none;\n        }\n\n        .ra21-button-logo-wrap {\n            text-align: center;\n            /* width: 50px; */\n            max-width: 50px;\n            height: 100%;\n            border-right: 1px solid #FFFFFF;\n            padding: 5px 12px 5px 7px;\n        }\n\n        .ra21-button-logo {\n          width: 30px;\n          vertical-align: middle;\n        }\n\n        .ra21-button-text {\n          padding-left: 10px;\n          text-align: center;\n          width: 85%;\n          color: var(--white);\n        }\n\n        .ra21-button-text-primary {\n          font-family: \'Helvetica\', sans-serif;\n          font-size: 14px;\n          font-weight: 700;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: 1.4;\n          letter-spacing: normal;\n        }\n\n        .ra21-button-text-secondary {\n          /* Zep */\n          font-family: \'Helvetica\', sans-serif;\n          font-size: 13px;\n          font-weight: normal;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: 1.4;\n          letter-spacing: normal;\n        }\n\n        .ra21-access-text {\n          cursor: pointer;\n          text-align: center;\n\n          /* Zep */\n          font-family: \'Helvetica\', sans-serif;\n          font-size: 13px;\n          font-weight: normal;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: 1.46;\n          letter-spacing: normal;\n          color: var(--primary-blue);\n        }\n        .align-items-center {\n            -ms-flex-align: center!important;\n            align-items: center!important;\n        }\n        .justify-content-center {\n            -ms-flex-pack: center!important;\n            justify-content: center!important;\n        }\n        .d-flex { display: flex!important; }\n    </style>\n</head>\n<body>\n    <div class="ra21CTALoadingContainer">\n        <div class="ra21CTAMain ra21-button">\n            <div class="ra21CTAiconButton ra21CTAbutton ra21-button-logo-wrap">\n                <img class="ra21CTAicon ra21-button-logo" src="'+(null==(__t=__webpack_require__(7))?"":__t)+'">\n            </div>\n            <div class="identityprovider d-flex justify-content-center align-items-center ra21CTAbutton text-truncate ra21-button-text">\n                <div class="ra21CTAbuttonLabel ra21-button-text-primary text-truncate">\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n</html>';return __p}},7:function(n,t){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTMuODggMjUzLjk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTMuODggMjUzLjk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjU4LDk3Ljc2aDE3OC43M2M1LjcsMCwxMC42OC0zLjU2LDEyLjQ2LTguOWMxLjQyLTUuMzQtMC4zNi0xMS4wNC00Ljk5LTE0LjI0bC04OS4zNy02NC4wOQoJCWMtNC42My0zLjItMTAuNjgtMy4yLTE0Ljk1LDBMMzAuMTEsNzQuNjFjLTMuMiwyLjQ5LTUuMzQsNi4wNS01LjM0LDEwLjMzQzI0Ljc3LDkyLjA2LDMwLjQ2LDk3Ljc2LDM3LjU4LDk3Ljc2eiBNMTI2Ljk1LDM2Ljg3CgkJbDQ5LjQ5LDM1LjI1SDc3LjQ2TDEyNi45NSwzNi44N3oiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTA5LjQ1LDE4NS40IDEwOS44NSwxMjcuODIgODAuMjUsMTEzLjU1IDgwLjI1LDE5OS42NyAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE3NC4xOSwxOTkuMjYgMTc0LjE5LDExNC4zNyAxNDQuOTksMTI4LjY0IDE0NC45OSwxODYuMjEgCSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0Mi4wNywyMjYuNDJjLTAuMDEsMC0wLjAzLDAtMC4wNCwwaC0xMC43NXYtMTAuNzRjMC0zLjcxLTMuMDEtNi43Mi02LjcyLTYuNzJsLTEwLjEsMHYtODYuMjEKCQljMC04LjItNi43MS0xNC45LTE0LjktMTQuOWMtOC4yLDAtMTQuOSw2LjcxLTE0LjksMTQuOXY4Ni4yMWwtMTE1LjQyLTAuMDJ2LTg2LjE5YzAtOC4yLTYuNzEtMTQuOS0xNC45LTE0LjkKCQljLTguMiwwLTE0LjksNi43MS0xNC45LDE0Ljl2ODYuMThsLTEwLjA4LDBjLTMuNzEsMC02LjcyLDMuMDEtNi43Miw2LjcydjEwLjc0SDExLjg2Yy0zLjcxLDAtNi43MiwzLjAxLTYuNzIsNi43MnYxMS42OGgyNDMuNjIKCQl2LTExLjYzQzI0OC43NywyMjkuNDUsMjQ1Ljc4LDIyNi40MywyNDIuMDcsMjI2LjQyeiIvPgo8L2c+Cjwvc3ZnPgo="}})}));