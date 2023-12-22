"use strict";(self.webpackChunksengee_ui=self.webpackChunksengee_ui||[]).push([[964],{8964:(T,d,o)=>{o.r(d),o.d(d,{LoginModule:()=>S});var x=o(9808),i=o(3075),p=o(7152),c=o(6042),f=o(6114),a=o(4546),l=o(1047),C=o(7781),y=o(7910),M=o(2340),n=o(5e3),O=o(489),P=o(9727),z=o(2545),v=o(1894),F=o(2683),b=o(2643);const Z=[{path:"",component:(()=>{class r{constructor(t,e,u,m){this.fb=t,this.api=e,this.message=u,this.userSer=m,this.logo=M.N.loginLogo}ngOnInit(){this.year=(0,y.Z)(new Date,"yyyy");const t=JSON.parse(localStorage.getItem("s_userInfo")||"null");let e=(null==t?void 0:t.password)||"";e&&(e=(0,C.Jk)(e)),this.validateForm=this.fb.group({userName:[(null==t?void 0:t.userName)||"",[i.kI.required]],password:[e||"",[i.kI.required]],verifyCode:["",[i.kI.required]],remember:[!0]})}ngAfterViewInit(){this.gVerify=new GVerify({id:"verifyCodeDom"})}submitForm(){if(!this.validateForm.valid)return void Object.values(this.validateForm.controls).forEach(g=>{g.invalid&&(g.markAsDirty(),g.updateValueAndValidity({onlySelf:!0}))});const{userName:t,password:e,verifyCode:u,remember:m}=this.validateForm.value;if(!this.gVerify.validate(u))return this.message.error("\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\uff01"),this.validateForm.patchValue({verifyCode:""},{emitEvent:!1}),void this.gVerify.refresh();const h=(0,C.To)(e);this.api.login(t,h).subscribe({next:g=>{m?localStorage.setItem("s_userInfo",JSON.stringify({userName:t,password:h})):localStorage.removeItem("s_userInfo"),sessionStorage.setItem("s_accessToken",g.accessToken),sessionStorage.setItem("s_refreshToken",g.refreshToken),this.userSer.init()},error:g=>{this.validateForm.patchValue({verifyCode:""},{emitEvent:!1}),this.gVerify.refresh()}})}}return r.\u0275fac=function(t){return new(t||r)(n.Y36(i.qu),n.Y36(O.z9),n.Y36(P.dD),n.Y36(z.KD))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-login"]],decls:42,vars:7,consts:[[1,"login-box"],[1,"top"],[1,"header"],["alt","",3,"src"],[1,"main"],["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],["nzErrorTip","\u8bf7\u8f93\u5165\u7528\u6237\u540d\uff01"],["type","text","nz-input","","formControlName","userName","placeholder","\u8bf7\u8f93\u5165\u7528\u6237\u540d"],["nzErrorTip","\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"],["type","password","nz-input","","formControlName","password","placeholder","\u8bf7\u8f93\u5165\u5bc6\u7801"],["nzErrorTip","\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01"],[1,"verify-code-input"],["type","text","nz-input","","formControlName","verifyCode","placeholder","\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801"],["id","verifyCodeDom",1,"verify-code"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],["nz-checkbox","","formControlName","remember"],["routerLink","/register",1,"login-form-forgot"],[1,"login-form-forgot"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType"],[1,"footer"],[1,"links"],["href","javascript:void(0);"],[1,"copyright"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3),n.qZA()(),n.TgZ(4,"div",4)(5,"form",5),n.NdJ("ngSubmit",function(){return e.submitForm()}),n.TgZ(6,"nz-form-item")(7,"nz-form-control",6)(8,"nz-input-group"),n._UZ(9,"input",7),n.qZA()()(),n.TgZ(10,"nz-form-item")(11,"nz-form-control",8)(12,"nz-input-group"),n._UZ(13,"input",9),n.qZA()()(),n.TgZ(14,"nz-form-item")(15,"nz-form-control",10)(16,"nz-input-group",11),n._UZ(17,"input",12),n.qZA(),n._UZ(18,"p",13),n.qZA()(),n.TgZ(19,"div",14)(20,"div",15)(21,"label",16)(22,"span"),n._uU(23,"\u8bb0\u4f4f\u6211"),n.qZA()()(),n.TgZ(24,"div",15)(25,"a",17),n._uU(26,"\u6ce8\u518c\u8d26\u6237"),n.qZA()(),n.TgZ(27,"div",15)(28,"a",18),n._uU(29,"\u5fd8\u8bb0\u5bc6\u7801"),n.qZA()()(),n.TgZ(30,"button",19),n._uU(31,"\u767b \u5f55"),n.qZA()()(),n.TgZ(32,"div",20)(33,"div",21)(34,"a",22),n._uU(35,"\u5e2e\u52a9"),n.qZA(),n.TgZ(36,"a",22),n._uU(37,"\u9690\u79c1"),n.qZA(),n.TgZ(38,"a",22),n._uU(39,"\u6761\u6b3e"),n.qZA()(),n.TgZ(40,"div",23),n._uU(41),n.qZA()()()),2&t&&(n.xp6(3),n.Q6J("src","../../../assets/logo/"+e.logo,n.LSH),n.xp6(2),n.Q6J("formGroup",e.validateForm),n.xp6(15),n.Q6J("nzSpan",16),n.xp6(4),n.Q6J("nzSpan",4),n.xp6(3),n.Q6J("nzSpan",4),n.xp6(3),n.Q6J("nzType","primary"),n.xp6(11),n.hij(" Copyright \xa9 ",e.year," "))},directives:[i._Y,i.JL,a.Lr,i.sg,v.SK,a.Nx,v.t3,a.Fd,l.gB,F.w,l.Zp,i.Fj,i.JJ,i.u,f.Ie,p.yS,c.ix,b.dQ],styles:[".login-box[_ngcontent-%COMP%]{width:100%;min-height:100%;background:#f0f2f5 url(login-bg.ed05d5bdf866ab00.svg) no-repeat 50%;background-size:100%;padding:110px 0 144px;position:relative}.login-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:36px;line-height:36px;text-align:center;margin-bottom:120px}.login-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:290px;vertical-align:top;border-style:none}.login-box[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:33px;color:#000000d9;font-family:Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-weight:600;position:relative;top:2px}.login-box[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{min-width:260px;width:380px;margin:0 auto}.login-box[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%}.login-box[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px;align-items:center;justify-content:space-between}.login-box[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .login-form-forgot[_ngcontent-%COMP%]{float:right}.login-box[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .login-form-button[_ngcontent-%COMP%]{width:100%}.login-box[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]     .ant-form-item-control-input-content{display:flex}.login-box[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .verify-code-input[_ngcontent-%COMP%]{width:280px}.login-box[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .verify-code[_ngcontent-%COMP%]{width:100px;height:32px;margin-bottom:0}.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:0;padding:0 16px;margin:48px 0 24px;text-align:center}.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{margin-bottom:8px;font-size:14px}.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child){margin-right:20px}.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{color:#00000073;font-size:14px}"]}),r})()}];let S=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[x.ez,i.u5,i.UX,a.U5,l.o7,c.sL,f.Wr,p.Bz.forChild(Z)]]}),r})()}}]);