!function(I,M){"object"==typeof exports&&"object"==typeof module?module.exports=M():"function"==typeof define&&define.amd?define([],M):"object"==typeof exports?exports.cta=M():I.cta=M()}(this,function(){return(this.webpackJsonp_name_=this.webpackJsonp_name_||[]).push([[8],{19:function(I,M,g){function i(){g(20)}var A=function(){return["findIndex"in Array.prototype?0:1,"values"in Object?0:1,"Promise"in this?0:1,"fetch"in this?0:1]}.call(window);if(-1===A.indexOf(1))i();else{var N=document.createElement("script");N.src="/polyfills."+A.join("")+".js",N.onload=i,N.onerror=function(I){console.error("Could not load the polyfills: "+I)},document.head.appendChild(N)}},20:function(I,M,g){"use strict";g.r(M);var i=g(2),A=g(3),N=g(4);g(7),g(9),g(24),g(8),g(26);i.b.add(A.b),i.a.i2svg();var D,t="https://md.thiss.io/entities/",n="https://use.thiss.io/ps/",T=window.xprops.loginInitiatorURL||window.xprops.loginHandlerURL,e=window.xprops.discoveryRequest,j=window.xprops.discoveryResponse;if(e||(e=T),j||(j=T),"function"!=typeof e){var w=e;e=function(){window.top.location.href=w}}if("function"!=typeof j){var o=j;j=function(I){var M={return:o};return window.top.location.href=Object(N.ds_response_url)(I,M)}}document.getElementById("main").style.background=window.xprops.backgroundColor,document.getElementById("idpbutton").style.background=window.xprops.color,window.xprops.persistenceURL&&(n=window.xprops.persistenceURL),window.xprops.context&&(D=window.xprops.context),window.xprops.MDQ&&(t=window.xprops.MDQ);var C=new N.DiscoveryService(t,n,D),c=[];window.xprops.pinned&&c.push(C.pin(window.xprops.pinned)),Promise.all(c).then(function(){var I=0;C.with_items(function(M){var g=document.getElementById("idpbutton"),i=document.getElementById("dsbutton"),A="";if(M&&M.length>0){var N=M[M.length-1];N&&N.entity&&N.entity.title&&N.entity.entityID&&(document.getElementById("title").innerText=N.entity.title,A=N.entity.entityID,document.getElementById("headline").innerText="Access through",document.getElementById("headline").className="ra21-button-text-secondary",I+=1)}return 0==I&&(document.getElementById("title").innerText="Access through your institution",g.dataset.href="",$("#dsbutton").hide()),g.addEventListener("click",function(I){I.preventDefault(),A?C.do_saml_discovery_response(A).then(function(I){j(I)}):e()}),i.addEventListener("click",function(I){I.preventDefault(),e()}),M})})},24:function(I,M,g){var i=g(25);"string"==typeof i&&(i=[[I.i,i,""]]);var A={hmr:!0,transform:void 0,insertInto:void 0};g(6)(i,A);i.locals&&(I.exports=i.locals)},25:function(I,M,g){},26:function(I,M){I.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5idWlsZGluZ0FuZEtleV82PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTguOSUiIHk9Ii05LjElIiB3aWR0aD0iMTQyLjAlIiBoZWlnaHQ9IjEzNi40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTEiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjE1MDc1ODYwNSAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIj48L2ZlTWVyZ2VOb2RlPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIj48L2ZlTWVyZ2VOb2RlPgogICAgICAgICAgICA8L2ZlTWVyZ2U+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iR1NLLWRlbW8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwcm9kdWN0LXJldHVybmluZy0tLWV4cGFuZGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjcwLjAwMDAwMCwgLTIwMy4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0iQ1RBLS0tbGV2ZWwyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NTMuMDAwMDAwLCAxODQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ1RBIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iYnVpbGRpbmdBbmRLZXlfNiIgZmlsdGVyPSJ1cmwoI2ZpbHRlci0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTkuMDAwMDAwLCAxOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuMzE1OTY3NTUsOS42Nzk5OTYzNyBMMTkuNzk3OTQ1NCw5LjY3OTk5NjM3IEMyMC4zNzIwMTA4LDkuNjgxMzY5MjggMjAuODgwOTk1Nyw5LjI5MzU0NDk3IDIxLjA1NjY0NzksOC43MjA5MTk5OSBDMjEuMjMyMyw4LjE0ODI5NSAyMS4wMzQyNzQyLDcuNTIyMzk0NTkgMjAuNTY2OTM2Niw3LjE3MzA4OTQ2IEwxMS4zMjU5NDc3LDAuMjU3MjY5MTU5IEMxMC44NjY4Njk0LC0wLjA4NTc1NjM4NjMgMTAuMjUwNjE0NywtMC4wODU3NTYzODYzIDkuNzkxNTM2NDEsMC4yNTcyNjkxNTkgTDAuNTUwNTQ3NTAyLDcuMTczMDg5NDYgQzAuMDg1MzcxNzQwMSw3LjUyMjg0Njk4IC0wLjExMTU5MTIwOCw4LjE0NjkwNTY2IDAuMDYyODYxOTc1Miw4LjcxODI3NTQ1IEMwLjIzNzMxNTE1OCw5LjI4OTY0NTIzIDAuNzQzNDEwNDkxLDkuNjc4MDU4MjEgMS4zMTU5Njc1NSw5LjY3OTk5NjM3IFogTTEwLjU1Njk1NjUsMy4wNzcyMjc2MyBMMTUuNjc1NjI4Nyw2LjkwODY3OTM4IEw1LjQzNDcxMzA5LDYuOTA4Njc5MzggTDEwLjU1Njk1NjUsMy4wNzcyMjc2MyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLjM0NDIxMTgsMjAuMDIyNTA5MiBMMTkuNjMwMjk2MywyMC4wMjI1MDkyIEwxOS42MzAyOTYzLDE5LjEzMTkyMDEgQzE5LjYzMDI5NjMsMTguNzAwODgyNSAxOS4yODI5NjQxLDE4LjM1MTQ1NzYgMTguODU0NTA4MiwxOC4zNTE0NTc2IEwxNy44ODgzNDI1LDE4LjM1MTQ1NzYgTDE3Ljg4ODM0MjUsMTEuODg3NTA0NCBDMTcuODg4MzQyNSwxMS4xNTQzNDQgMTcuMjk3NTU4MiwxMC41NiAxNi41Njg3ODg3LDEwLjU2IEMxNS44NDAwMTkzLDEwLjU2IDE1LjI0OTIzNDksMTEuMTU0MzQ0IDE1LjI0OTIzNDksMTEuODg3NTA0NCBMMTUuMjQ5MjM0OSwxOC4zNTE0NTc2IEw1Ljg3MDc2NTA3LDE4LjM1MTQ1NzYgTDUuODcwNzY1MDcsMTEuODg3NTA0NCBDNS44NzA3NjUwNywxMS4xNTQzNDQgNS4yNzk5ODA3MSwxMC41NiA0LjU1MTIxMTI3LDEwLjU2IEMzLjgyMjQ0MTgzLDEwLjU2IDMuMjMxNjU3NDYsMTEuMTU0MzQ0IDMuMjMxNjU3NDYsMTEuODg3NTA0NCBMMy4yMzE2NTc0NiwxOC4zNTE0NTc2IEwyLjI2NjY4MTY5LDE4LjM1MTQ1NzYgQzIuMDYwNzIzOCwxOC4zNTExMzk4IDEuODYzMDkzMjIsMTguNDMzMjI2NSAxLjcxNzM0NzI3LDE4LjU3OTYyNjEgQzEuNTcxNjAxMzIsMTguNzI2MDI1NyAxLjQ4OTcwMzQyLDE4LjkyNDcyMSAxLjQ4OTcwMzY2LDE5LjEzMTkyMDEgTDEuNDg5NzAzNjYsMjAuMDIyNTA5MiBMMC43NzU3ODgxNjksMjAuMDIyNTA5MiBDMC4zNDczMzIxOTQsMjAuMDIyNTA5MiAwLDIwLjM3MTkzNDEgMCwyMC44MDI5NzE2IEwwLDIyIEwyMS4xMiwyMiBMMjEuMTIsMjAuODAxNzc0NiBDMjEuMTE5MzQzNiwyMC4zNzEyMDQ2IDIwLjc3MjIwMzYsMjAuMDIyNTA4NiAyMC4zNDQyMTE4LDIwLjAyMjUwOTIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi4zMTk5OTg1LDEyLjI5NTAwNDQgQzEyLjMyMTA5MzcsMTEuNDc1ODg4IDExLjczOTMyODMsMTAuNzY3OTM4MSAxMC45MjUzOTI4LDEwLjU5NzkwOTggQzEwLjExMTQ1NzMsMTAuNDI3ODgxNSA5LjI4Nzc3OTA3LDEwLjg0MjIzOTIgOC45NTA4NzQ4MiwxMS41OTEyMDYzIEM4LjYxMzk3MDU4LDEyLjM0MDE3MzQgOC44NTU5MDc0NSwxMy4yMTkwNzY2IDkuNTMwODQ0ODksMTMuNjk4MTA5NiBMOC44ODU2MTk4OSwxNi43MiBMMTIuMjM0NTMwMiwxNi43MiBMMTEuNTkwNTA5LDEzLjY5ODEwOTYgQzEyLjA0ODY3ODksMTMuMzczMDY5MSAxMi4zMjAxMjY2LDEyLjg1MDk2NDYgMTIuMzE5OTk4NSwxMi4yOTUwMDQ0IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"}},[[19,1,0,2,4,5,7,3,6]]])});