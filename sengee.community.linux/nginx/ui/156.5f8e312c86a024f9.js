"use strict";(self.webpackChunksengee_ui=self.webpackChunksengee_ui||[]).push([[156],{27156:(h,r,t)=>{t.r(r),t.d(r,{AppsystemHelperComponent:()=>_,AppsystemHelperModule:()=>y});var l=t(69808),a=t(77152),c=t(41733),u=t(82886),p=t(5e3),d=t(14581),i=t(31453),A=t(42128),E=t(89445);let _=(()=>{class e{constructor(s,o,m){this.route=s,this.router=o,this.api=m,this.appId=this.route.snapshot.paramMap.get("id"),this.api.getAppsystem(this.appId).subscribe(M=>{this.currentApp=M})}goTo(){this.router.navigate(["/datasource/Appsystem"])}}return e.\u0275fac=function(s){return new(s||e)(p.Y36(a.gz),p.Y36(a.F0),p.Y36(d.NE))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-appsystem-helper"]],decls:7,vars:5,consts:[[1,"bread-crumb"],["dy-icon","","type","return",3,"click"],[2,"width","100%","height","calc(100% - 25px)","padding","15px"],[3,"appId"]],template:function(s,o){1&s&&(p.TgZ(0,"div",0)(1,"span"),p._uU(2),p.ALo(3,"nzI18n"),p.qZA(),p.TgZ(4,"i",1),p.NdJ("click",function(){return o.goTo()}),p.qZA()(),p.TgZ(5,"div",2),p._UZ(6,"app-appsystem",3),p.qZA()),2&s&&(p.xp6(2),p.AsE("",p.lcZ(3,3,"menu.datasource"),"\uff1a",null==o.currentApp?null:o.currentApp.name,""),p.xp6(4),p.Q6J("appId",o.appId))},directives:[i.kE,A.w],pipes:[E.o9],encapsulation:2}),e})(),y=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[l.ez,c.L,u.m,a.Bz.forChild([{path:"",component:_}])]]}),e})()}}]);