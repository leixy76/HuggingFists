"use strict";(self.webpackChunksengee_ui=self.webpackChunksengee_ui||[]).push([[472],{17472:(at,C,i)=>{i.r(C),i.d(C,{MainModule:()=>nt});var m=i(69808),s=i(77152),d=i(64219),t=i(5e3);let v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-center"]],decls:2,vars:0,consts:[[2,"text-align","center","padding-top","50px"]],template:function(e,o){1&e&&(t.TgZ(0,"p",0),t._uU(1,"\u6b63\u5728\u5f00\u53d1\u4e2d\u3002\u3002\u3002"),t.qZA())},styles:[""]}),n})();var r=i(62545);let b=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-personal"]],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"dy-router-outlet")},directives:[r.Fr],styles:[""]}),n})();var h=i(82683);function Z(n,a){1&n&&(t.TgZ(0,"li",8),t._uU(1," \u57fa\u672c\u8bbe\u7f6e "),t.qZA())}function F(n,a){1&n&&(t.TgZ(0,"li",9),t._uU(1," \u5b89\u5168\u8bbe\u7f6e "),t.qZA())}function T(n,a){1&n&&(t.TgZ(0,"li",10),t._uU(1," \u8d44\u6e90\u8d26\u53f7 "),t.qZA())}function y(n,a){1&n&&(t.TgZ(0,"li",11),t._uU(1," \u65b0\u6d88\u606f\u901a\u77e5 "),t.qZA())}let B=(()=>{class n{constructor(e,o){this.route=e,this.helper=o}ngOnInit(){this.helper.defaultEnter(this.route)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.gz),t.Y36(r.$J))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-settings"]],decls:9,vars:4,consts:[[1,"tab-menu-box"],[1,"menu"],["nz-menu",""],["nz-menu-item","","nzMatchRouter","","routerLink","./base",4,"authx"],["nz-menu-item","","nzMatchRouter","","routerLink","./security",4,"authx"],["nz-menu-item","","nzMatchRouter","","routerLink","./account",4,"authx"],["nz-menu-item","","nzMatchRouter","","routerLink","./notification",4,"authx"],[1,"content",2,"padding","15px"],["nz-menu-item","","nzMatchRouter","","routerLink","./base"],["nz-menu-item","","nzMatchRouter","","routerLink","./security"],["nz-menu-item","","nzMatchRouter","","routerLink","./account"],["nz-menu-item","","nzMatchRouter","","routerLink","./notification"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"ul",2),t.YNc(3,Z,2,0,"li",3),t.YNc(4,F,2,0,"li",4),t.YNc(5,T,2,0,"li",5),t.YNc(6,y,2,0,"li",6),t.qZA()(),t.TgZ(7,"div",7),t._UZ(8,"dy-router-outlet"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("authx","PersonalSettings.Base"),t.xp6(1),t.Q6J("authx","PersonalSettings.Security"),t.xp6(1),t.Q6J("authx","PersonalSettings.Account"),t.xp6(1),t.Q6J("authx","PersonalSettings.Notification"))},directives:[d.wO,r.xo,d.r9,h.w,s.rH,r.Fr],encapsulation:2}),n})();var c=i(93075),p=i(64546),_=i(41894),f=i(11047),g=i(78054),M=i(76042),P=i(92643),w=i(15052),I=i(92124);function N(n,a){1&n&&(t.TgZ(0,"nz-select",27),t._UZ(1,"nz-option",28),t.qZA())}const U=function(){return{authorization:"authorization-text"}};let J=(()=>{class n{constructor(e){this.fb=e}ngOnInit(){this.validateForm=this.fb.group({email:[null,[c.kI.email,c.kI.required]],password:[null,[c.kI.required]],nickname:[null,[c.kI.required]],phoneNumberPrefix:["+86"],phoneNumber:[null,[c.kI.required]],website:[null,[c.kI.required]],captcha:[null,[c.kI.required]],agree:[!1]})}submitForm(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-base"]],decls:40,vars:5,consts:[[1,"base-box"],[1,"title"],[1,"box"],[1,"left"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],["nzRequired","","nzFor","email"],["nzErrorTip","The input is not valid E-mail!"],["nz-input","","formControlName","email","id","email"],["nzFor","nickname","nzRequired",""],["nzErrorTip","Please input your nickname!"],["nz-input","","id","nickname","formControlName","nickname"],["nzFor","phoneNumber","nzRequired",""],["nzErrorTip","Please input your phone number!",3,"nzValidateStatus"],[3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","phoneNumber","id","'phoneNumber'","nz-input",""],["nzFor","website","nzRequired",""],["nzErrorTip","Please input website!"],["nz-input","","id","website","formControlName","website","rows","4"],["nz-row","",1,"register-area"],["nz-button","","nzType","primary"],[1,"right"],[1,"avatar"],["alt","Avatar","src","https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"],["nzAction","https://www.mocky.io/v2/5cc8019d300000980a055e76",3,"nzHeaders"],["nz-button",""],["nz-icon","","nzType","upload"],["formControlName","phoneNumberPrefix",1,"phone-select"],["nzLabel","+86","nzValue","+86"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"\u57fa\u672c\u8bbe\u7f6e"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"form",4),t.NdJ("ngSubmit",function(){return o.submitForm()}),t.TgZ(6,"nz-form-item")(7,"nz-form-label",5),t._uU(8,"\u90ae\u7bb1"),t.qZA(),t.TgZ(9,"nz-form-control",6),t._UZ(10,"input",7),t.qZA()(),t.TgZ(11,"nz-form-item")(12,"nz-form-label",8),t._uU(13,"\u6635\u79f0"),t.qZA(),t.TgZ(14,"nz-form-control",9),t._UZ(15,"input",10),t.qZA()(),t.TgZ(16,"nz-form-item")(17,"nz-form-label",11),t._uU(18,"\u7535\u8bdd"),t.qZA(),t.TgZ(19,"nz-form-control",12)(20,"nz-input-group",13),t.YNc(21,N,2,0,"ng-template",null,14,t.W1O),t._UZ(23,"input",15),t.qZA()()(),t.TgZ(24,"nz-form-item")(25,"nz-form-label",16),t._uU(26,"\u4e2a\u4eba\u7b80\u4ecb"),t.qZA(),t.TgZ(27,"nz-form-control",17),t._UZ(28,"textarea",18),t.qZA()(),t.TgZ(29,"nz-form-item",19)(30,"nz-form-control")(31,"button",20),t._uU(32,"\u66f4\u65b0\u57fa\u672c\u4fe1\u606f"),t.qZA()()()()(),t.TgZ(33,"div",21)(34,"div",22),t._UZ(35,"img",23),t.qZA(),t.TgZ(36,"nz-upload",24)(37,"button",25),t._UZ(38,"i",26),t._uU(39," \u66f4\u6362\u5934\u50cf "),t.qZA()()()()()),2&e){const l=t.MAs(22);t.xp6(5),t.Q6J("formGroup",o.validateForm),t.xp6(14),t.Q6J("nzValidateStatus",o.validateForm.controls.phoneNumber),t.xp6(1),t.Q6J("nzAddOnBefore",l),t.xp6(16),t.Q6J("nzHeaders",t.DdM(4,U))}},directives:[c._Y,c.JL,p.Lr,c.sg,_.SK,p.Nx,_.t3,p.iK,p.Fd,f.Zp,c.Fj,c.JJ,c.u,h.w,f.gB,g.Vq,g.Ip,M.ix,P.dQ,w.FY,I.Ls],styles:["html.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{min-width:1366px}html.default[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}html.default[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0}html.default[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;flex:auto;flex-direction:column}html.default[_ngcontent-%COMP%]   .fdc[_ngcontent-%COMP%]{flex-direction:column}html.default[_ngcontent-%COMP%]   .fdr[_ngcontent-%COMP%]{flex-direction:row}html.default[_ngcontent-%COMP%]   .fauto[_ngcontent-%COMP%]{flex:auto}html.default[_ngcontent-%COMP%]   .pf[_ngcontent-%COMP%]{position:fixed}html.default[_ngcontent-%COMP%]   .pr[_ngcontent-%COMP%]{position:relative}html.default[_ngcontent-%COMP%]   .pa[_ngcontent-%COMP%]{position:absolute}html.default[_ngcontent-%COMP%]   .fl[_ngcontent-%COMP%]{float:left}html.default[_ngcontent-%COMP%]   .fr[_ngcontent-%COMP%]{float:right}html.default[_ngcontent-%COMP%]   .clear-f[_ngcontent-%COMP%]{clear:both}html.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#396669}html.default[_ngcontent-%COMP%]   .ant-table-pagination.ant-pagination[_ngcontent-%COMP%]{margin:0}html.default[_ngcontent-%COMP%]   .ant-pagination[_ngcontent-%COMP%]{text-align:right}html.default[_ngcontent-%COMP%]   .ant-table-column-sorter[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-table-filter-trigger[_ngcontent-%COMP%]{color:#a1a1a1}html.default[_ngcontent-%COMP%]   .ant-table-filter-trigger.active[_ngcontent-%COMP%]{color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]   th.ant-table-column-sort[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]   th.ant-table-column-has-sorters[_ngcontent-%COMP%]:hover{background:#e2eeee}html.default[_ngcontent-%COMP%]   .ant-tree-switcher[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-tree-indent-unit[_ngcontent-%COMP%]{width:17px;color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-tree[_ngcontent-%COMP%]   .ant-tree-node-content-wrapper[_ngcontent-%COMP%]{padding:0}html.default[_ngcontent-%COMP%]   .ant-tree-checkbox-inner[_ngcontent-%COMP%]{display:inline-block}html.default[_ngcontent-%COMP%]   .ant-select-tree[_ngcontent-%COMP%]   .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected[_ngcontent-%COMP%]:hover{background-color:#e2eeee}html.default[_ngcontent-%COMP%]   .ant-modal-title[_ngcontent-%COMP%]{color:#396669}html.default[_ngcontent-%COMP%]   .ant-dropdown-menu-item-selected[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%]{background-color:#e2eeee}html.default[_ngcontent-%COMP%]   .ant-badge-status-processing[_ngcontent-%COMP%]{background-color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-badge-status-processing[_ngcontent-%COMP%]:after{border-color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-tooltip[_ngcontent-%COMP%]{max-width:550px;max-height:550px;overflow:hidden}html.default[_ngcontent-%COMP%]   .ant-tooltip-content[_ngcontent-%COMP%]{width:100%;height:100%;max-width:550px;max-height:542px}html.default[_ngcontent-%COMP%]   .ant-tooltip-inner[_ngcontent-%COMP%]{box-shadow:none}html.default   [_nghost-%COMP%]   .base-box[_ngcontent-%COMP%]{width:100%;height:100%;padding:40px 80px}html.default   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:12px;font-weight:500;font-size:20px;line-height:28px}html.default   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]{display:flex;margin:0 auto}html.default   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:100%;min-width:310px;max-width:448px;padding-top:12px}html.default   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;padding-left:104px;padding-top:24px}html.default   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:144px;height:144px;margin-bottom:12px;overflow:hidden}html.default   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}html.default   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%]{width:144px}html.dark   [_nghost-%COMP%]   .base-box[_ngcontent-%COMP%]{width:100%;height:100%;padding:40px 80px}html.dark   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:12px;font-weight:500;font-size:20px;line-height:28px}html.dark   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]{display:flex;margin:0 auto}html.dark   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:100%;min-width:310px;max-width:448px;padding-top:12px}html.dark   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;padding-left:104px;padding-top:24px}html.dark   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:144px;height:144px;margin-bottom:12px;overflow:hidden}html.dark   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}html.dark   [_nghost-%COMP%]   .box[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .ant-btn[_ngcontent-%COMP%]{width:144px}"]}),n})(),E=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-security"]],decls:2,vars:0,consts:[[2,"text-align","center","padding-top","50px"]],template:function(e,o){1&e&&(t.TgZ(0,"p",0),t._uU(1,"\u6b63\u5728\u5f00\u53d1\u4e2d\u3002\u3002\u3002"),t.qZA())},styles:[""]}),n})();var O=i(91139),x=i(89445),q=i(49727),z=i(50489),D=i(5156),k=i(3214),S=i(90685);function $(n,a){if(1&n&&t._UZ(0,"nz-option",20),2&n){const e=a.$implicit;t.Q6J("nzLabel",e.alias)("nzValue",e.id)}}function L(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"nz-select",18),t.NdJ("ngModelChange",function(l){return t.CHM(e),t.oxw().resourceDescriptorId=l})("ngModelChange",function(l){return t.CHM(e),t.oxw().toggleResDescriptor(l)}),t.YNc(2,$,1,2,"nz-option",19),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngModel",e.resourceDescriptorId),t.xp6(1),t.Q6J("ngForOf",e.serviceTypes)}}function Y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"input",21),t.NdJ("ngModelChange",function(l){return t.CHM(e),t.oxw().resourceDescriptorType=l}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("ngModel",e.resourceDescriptorType)("disabled",!e.formParams.externalId&&e.id)}}function Q(n,a){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"sightx-group",22),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("parameter",e.parameters)}}function R(n,a){1&n&&t._UZ(0,"nz-empty",23),2&n&&t.Q6J("nzNotFoundContent","\u6682\u65e0\u5c5e\u6027")}let A=(()=>{class n{constructor(e,o,l,u,et,ot){this.i18n=e,this.message=o,this.route=l,this.router=u,this.resApi=et,this.api=ot,this.formParams={alias:"",settingXml:"",module:""},this.mappingKResIdVParametergroups={}}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.title="authx."+(this.id?"edit":"add"),this.groupId=this.route.snapshot.queryParamMap.get("groupId"),this.resApi.getResDescriptorList().subscribe(e=>{e&&e.length&&(this.serviceTypes=e,this.id?this.api.get(this.id).subscribe(o=>{this.formParams.alias=o.alias,this.formParams.module=o.module,this.resourceDescriptorType=o.resourceDescriptorType,o.settingXml&&(this.parameters=O.n.parseParameters(o.settingXml,"authx-from"))}):(this.resourceDescriptorId=this.serviceTypes[0].id,this.toggleResDescriptor(this.resourceDescriptorId)))})}toggleResDescriptor(e){let o=this.mappingKResIdVParametergroups[e];o?this.parameters=o:(o=O.n.parseParameters(this.serviceTypes.find(l=>l.id===e).descriptorXml,"authx-from"),this.parameters=o,this.mappingKResIdVParametergroups[e]=o)}saveHandler(){!this.getApiParams()||(this.id?this.api.edit(this.id,this.formParams).subscribe(e=>{this.message.success(`${this.i18n.translate("base.update")}${this.i18n.translate("base.success")}`),this.goBack(300)}):this.api.add(this.groupId,this.resourceDescriptorId,this.formParams).subscribe(e=>{this.message.success(`${this.i18n.translate("base.add")}${this.i18n.translate("base.success")}`),this.goBack(300)}))}getApiParams(){return this.formParams.alias?(this.formParams.settingXml=this.parameters?this.parameters.getXml(!1):"",!0):(this.message.warning(`${this.i18n.translate("base.pleaseInput")}${this.i18n.translate("base.name").toLocaleLowerCase()}`),!1)}goBack(e=0){setTimeout(()=>{this.router.navigate(["personal/settings/account"])},e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(x.wi),t.Y36(q.dD),t.Y36(s.gz),t.Y36(s.F0),t.Y36(z.u4),t.Y36(z.Y2))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-form"]],decls:42,vars:15,consts:[[1,"layout"],[1,"bread-crumb"],["sz-icon","","type","return",3,"click"],[1,"page-form","fauto"],[1,"form-box"],[1,"sub-title","pr"],[1,"base-params"],[1,"form-label"],[1,"form-label-required"],["nz-input","","type","text",3,"ngModel","ngModelChange"],[4,"ngIf","ngIfElse"],["selectTemplate",""],["nz-input",""],[1,"other-params"],["noParametersTemplate",""],[1,"ant-modal-footer"],["nz-button","","nzType","default",3,"click"],["nz-button","","nzType","primary",3,"disabled","click"],[3,"ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"],["nz-input","","type","text",3,"ngModel","disabled","ngModelChange"],[3,"parameter"],["nzNotFoundImage","simple",3,"nzNotFoundContent"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span"),t._uU(3),t.ALo(4,"nzI18n"),t.qZA(),t.TgZ(5,"i",2),t.NdJ("click",function(){return o.goBack()}),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"p",5),t._uU(9,"\u57fa\u672c\u4fe1\u606f"),t.qZA(),t.TgZ(10,"div",6)(11,"p")(12,"span",7)(13,"span",8),t._uU(14,"* "),t.qZA(),t._uU(15,"\u540d\u79f0\uff1a "),t.qZA(),t.TgZ(16,"input",9),t.NdJ("ngModelChange",function(u){return o.formParams.alias=u}),t.qZA()(),t.TgZ(17,"p")(18,"span",7)(19,"span",8),t._uU(20,"* "),t.qZA(),t._uU(21,"\u7c7b\u578b\uff1a "),t.qZA(),t.YNc(22,L,3,2,"ng-container",10),t.YNc(23,Y,1,2,"ng-template",null,11,t.W1O),t.qZA(),t.TgZ(25,"p")(26,"span",7),t._uU(27,"\u63cf\u8ff0\uff1a"),t.qZA(),t._UZ(28,"textarea",12),t.qZA()(),t.TgZ(29,"p",5),t._uU(30,"\u8d26\u53f7\u914d\u7f6e\u4fe1\u606f"),t.qZA(),t.TgZ(31,"div",13),t.YNc(32,Q,2,1,"div",10),t.YNc(33,R,1,1,"ng-template",null,14,t.W1O),t.qZA(),t.TgZ(35,"div",15)(36,"button",16),t.NdJ("click",function(){return o.goBack()}),t._uU(37),t.ALo(38,"nzI18n"),t.qZA(),t.TgZ(39,"button",17),t.NdJ("click",function(){return o.saveHandler()}),t._uU(40),t.ALo(41,"nzI18n"),t.qZA()()()()()),2&e){const l=t.MAs(24),u=t.MAs(34);t.xp6(3),t.Oqu(t.lcZ(4,9,o.title)),t.xp6(13),t.Q6J("ngModel",o.formParams.alias),t.xp6(6),t.Q6J("ngIf",!o.id)("ngIfElse",l),t.xp6(10),t.Q6J("ngIf",o.parameters)("ngIfElse",u),t.xp6(5),t.Oqu(t.lcZ(38,11,"base.return")),t.xp6(2),t.Q6J("disabled",o.formParams.externalId&&o.id),t.xp6(1),t.Oqu(t.lcZ(41,13,"base.submit"))}},directives:[D.D6,f.Zp,c.Fj,c.JJ,c.On,m.O5,g.Vq,m.sg,g.Ip,k.S,S.p9,M.ix,P.dQ,h.w],pipes:[x.o9],styles:[""]}),n})(),X=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-notification"]],decls:2,vars:0,consts:[[2,"text-align","center","padding-top","50px"]],template:function(e,o){1&e&&(t.TgZ(0,"p",0),t._uU(1,"\u6b63\u5728\u5f00\u53d1\u4e2d\u3002\u3002\u3002"),t.qZA())},styles:[""]}),n})();var V=i(82886),H=i(79635),j=i(35746),K=i(21821);const W=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-account-box"]],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"app-account")},directives:[K.P],encapsulation:2}),n})()}];let G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,j.Y,s.Bz.forChild(W)]]}),n})();const tt=[{path:"",component:b,children:[{path:"center",component:v,data:{authPathMatch:"full"},canActivate:[r.$P],canActivateChild:[r.$P]},{path:"settings",component:B,data:{authPathMatch:"full"},canActivate:[r.$P],canActivateChild:[r.$P],children:[{path:"base",component:J,data:{authPathMatch:"full"},canActivate:[r.$P],canActivateChild:[r.$P]},{path:"security",component:E,data:{authPathMatch:"full"},canActivate:[r.$P],canActivateChild:[r.$P]},{path:"account",loadChildren:()=>G,data:{authPathMatch:"full"},canActivate:[r.$P],canActivateChild:[r.$P]},{path:"notification",component:X,data:{authPathMatch:"full"},canActivate:[r.$P],canActivateChild:[r.$P]}]},{path:"settings/account/add",component:A,canActivate:[r.$P],canActivateChild:[r.$P]},{path:"settings/account/edit/:id",component:A,canActivate:[r.$P],canActivateChild:[r.$P]}]}];let nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,c.u5,d.ip,V.m,H.L,c.UX,r.OX,s.Bz.forChild(tt)]]}),n})()}}]);