(()=>{var e,t,s,i={7988:(e,t,s)=>{var i={"./pages/Continent/ListPage.js":[7542,512,916,631],"./pages/TestCET/ListPage.js":[2274,512,916,22]};function n(e){if(!s.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return Promise.all(t.slice(1).map(s.e)).then((()=>s(n)))}n.keys=()=>Object.keys(i),n.id=7988,e.exports=n},5997:(e,t,s)=>{var i={"./pages/Continent/NewPage.js":[57,512,606,916,632,57],"./pages/TestCET/NewPage.js":[8943,512,606,916,632,943]};function n(e){if(!s.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return Promise.all(t.slice(1).map(s.e)).then((()=>s(n)))}n.keys=()=>Object.keys(i),n.id=5997,e.exports=n},8021:(e,t,s)=>{var i={"./pages/Continent/UpdatePage.js":[5697,512,606,916,632,697],"./pages/TestCET/UpdatePage.js":[8237,512,606,916,632,237]};function n(e){if(!s.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return Promise.all(t.slice(1).map(s.e)).then((()=>s(n)))}n.keys=()=>Object.keys(i),n.id=8021,e.exports=n},2437:(e,t,s)=>{"use strict";s(7277),s(298),s(8094),s(5530),s(4448),s(836),s(2379),s(2612),s(2233),s(7945),s(9297),s(7706),s(7367);var i=s(5862),n=s(3790),r=s(4675);s(5086);class a extends i.oi{static get properties(){return{auth:{type:Object,attribute:!1},entities:{type:Object,attribute:!1}}}constructor(){super(),this.auth=null,this.entities=null,this.permissions=null}static get styles(){return i.iv`
      :host {
        --font-size-m: 0.825rem;
        --mv-button-padding: 0.825rem;
        --mv-table-row-height: 2.5rem;
      }

      @media screen and (min-width: 1440px) {
        :host {
          --font-size-m: 1rem;
          --mv-button-padding: 1rem;
          --mv-table-row-height: 3rem;
        }
      }
    `}render(){return i.dy`
      <mv-keycloak
        settings-path="keycloak.json"
        @auth-success="${this.loginSuccess}"
        @auth-fail="${this.loginFailed}"
        @auth-init-fail="${this.loginFailed}"
      >
        ${this.auth&&this.entities?this.loadRoutes():null}
        ${this.shadowTemplate("loading",this.loading())}
        ${this.shadowTemplate("authenticating",this.loading())}
        ${this.shadowTemplate("failed","Authentication failed.")}
      </mv-keycloak>
    `}shadowTemplate=(e,t)=>i.dy`
    <mv-main slot="${e}">
      <mv-header slot="header">
        <mv-header item>${" "}</mv-header>
      </mv-header>
      <mv-menu-panel menu showLabel slot="menu">
        <mv-menu-panel label>${" "}</mv-menu-panel>
        <mv-menu-panel item>${" "}</mv-menu-panel>
      </mv-menu-panel>
      <mv-container>${t}</mv-container>
      <mv-footer slot="footer">
        <mv-footer item>${" "}</mv-footer>
      </mv-footer>
    </mv-main>
  `;loading=()=>i.dy`
    <mv-progressbar type="infinite" theme="light"></mv-progressbar>
  `;loadRoutes=()=>i.dy`
      <page-layout
        .entities="${this.entities}"
        .permissions="${this.permissions}"
        .auth="${this.auth}"
      >

      </page-layout>
    `;connectedCallback(){super.connectedCallback(),document.addEventListener("logout",this.logout)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("logout",this.logout)}loginSuccess=async e=>{const{detail:{auth:t}}=e;this.auth=t;const{ENTITY_PERMISSIONS:s}=await(0,n.e1)(this.auth);this.permissions=s,this.entities=(r.d||[]).reduce(((e,s)=>({...e,[s.code]:new s.ModelClass(t)})),{})};loginFailed=()=>{this.auth=null};logout=()=>{this.auth.logout(),this.auth=null}}customElements.define("main-app",a)},5086:(e,t,s)=>{"use strict";var i=s(5862),n=s(1334),r=s(6644),a=(s(7277),s(6786));s(2542),s(6587),s(6594);class o extends i.oi{static get properties(){return{...super.properties,title:{type:String},entityCode:{type:String,attribute:"entity-code"},itemCount:{type:String,attribute:"item-count"}}}static get styles(){return i.iv`
      h1 {
        margin: 0;
      }

      mv-button {
        --mv-button-padding: 10px 20px;
      }

      .tile-contents {
        display: grid;
        align-items: center;
        justify-content: space-between;
        justify-items: center;
        grid-auto-flow: column;        
        padding: 20px;
        box-shadow: var(
          --mv-container-shadow,
          0 0 13px 0 rgba(42, 42, 42, 0.65)
        );
        border: 1px solid #bfbfbf;
        border-radius: 5px;
      }

      .item-count {
        font-size: var(--font-size-m, 16px);
      }
    `}render(){const e=`${this.itemCount} ${this.itemCount>1?"items":"item"}`;return i.dy`
      <div class="tile-contents">
        <h1>${this.title}</h1>
        ${this.itemCount<1?i.dy`
              <mv-button type="rounded" @button-clicked="${this.create}">
                <mv-fa icon="plus"></mv-fa>New
              </mv-button>
            `:i.dy`
              <mv-button
                type="rounded"
                @button-clicked="${this.list}"
                button-style="info"
              >
                ${e}
              </mv-button>
            `}
      </div>
    `}create(){history.pushState(null,"",`${r.BASE_PATH}/${this.entityCode}/new`),window.router.goto(`${r.BASE_PATH}/${this.entityCode}/new`)}list(){history.pushState(null,"",`${r.BASE_PATH}/${this.entityCode}/list`),window.router.goto(`${r.BASE_PATH}/${this.entityCode}/list`)}}customElements.define("dashboard-tile",o);class d extends i.oi{static get properties(){return{...super.properties,auth:{type:Object,attribute:!1},count:{type:Object,attribute:!1},entities:{type:Object,attribute:!1}}}static get styles(){return i.iv`
      h1 {
        margin-top: 0;
      }

      .tiles {
        width: calc(100% - 40px);
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
      }
    `}constructor(){super(),this.auth=null,this.count={},this.entities=null}render(){return i.dy`
        <mv-container>
          <h1>Dashboard</h1>
          <div class="tiles">
            ${Object.keys(this.entities||{}).map((e=>{const t=this.entities[e];return i.dy`
                <dashboard-tile
                  entity-code="${t.code}"
                  title="${t.label}"
                  item-count="${this.count[t.code]||0}"
                ></dashboard-tile>
              `}))}
          </div>
        </mv-container>
    `}connectedCallback(){Object.keys(this.entities).forEach((e=>{const t=this.entities[e];(0,a.z)(t).LIST.executeApiCall({config:r,token:this.auth.token},this.submitSuccess(t),this.submitFailed(t))})),super.connectedCallback()}submitSuccess=e=>t=>{this.count={...this.count,[e.code]:t.detail.result.count||0}};submitFailed=e=>t=>{console.error("Encountered error while retrieving list details."),console.error("entity: ",e),console.error("event.detail: ",JSON.stringify(t.detail,null,2))}}customElements.define("main-dashboard",d);var l=s(6817);class c extends i.oi{static get properties(){return{entities:{type:Object,attribute:!1},permissions:{type:Object,attribute:!1},auth:{type:Object,attribute:!1}}}constructor(){super(),this.entities=null,this.permissions=null,this.auth=null,this._routes=new l.Z5(this,[{path:r.BASE_PATH+"/dashboard",render:()=>i.dy`
        <main-dashboard 
             .auth="${this.auth}"
             .entities="${this.entities}"
             .permissions="${this.permissions}"
        >
        </main-dashboard>`}]),window.router=this._routes}firstUpdated(){Object.keys(this.entities).forEach((e=>{const t=this.entities[e];this._routes.routes.push({path:r.BASE_PATH+`/${t.code}/new`,name:`${t.code}`,render:()=>{const e=`${t.normalizedCode}-new-page`,s=n.s2(e);return n.dy`<${s} .auth=${this.auth} .entity=${t} .permissions=${this.permissions} name=${t.code} .config=${r}></${s}>`},enter:async()=>{await s(5997)(`./pages/${t.code}/NewPage.js`)}}),this._routes.routes.push({path:r.BASE_PATH+`/${t.code}/update/:id`,name:`${t.code}`,render:e=>{const s=`${t.normalizedCode}-update-page`,i=n.s2(s),a={pathParameters:{id:e.id}};return n.dy`<${i} .auth=${this.auth} .entity=${t} .permissions=${this.permissions} name=${t.code} .parameters=${a} .config=${r}></${i}>`},enter:async()=>{await s(8021)(`./pages/${t.code}/UpdatePage.js`)}}),this._routes.routes.push({path:r.BASE_PATH+`/${t.code}/list`,name:`${t.code}`,render:()=>{const e=`${t.normalizedCode}-list-page`,s=n.s2(e);return n.dy`<${s} .auth=${this.auth} .entity=${t} .permissions=${this.permissions} name=${t.code} .config=${r}></${s}>`},enter:async()=>{await s(7988)(`./pages/${t.code}/ListPage.js`)}})})),this._routes.goto(window.location.pathname)}render(){return i.dy`
      <slot .router=${this._routes}>
        ${this._routes.outlet()}
      </slot>
    `}}customElements.define("page-routes",c)},6594:(e,t,s)=>{"use strict";var i=s(5862);s(8094),s(4448),s(298),s(2542),s(4775),s(9838),s(5923),s(6587);class n extends i.oi{static get properties(){return{noMenu:{type:String,attribute:"no-menu"}}}static get styles(){return i.iv`
      :host {
        --mv-button-padding: 3px 5px;
        --mv-button-min-width: 80px;
      }

      router-link {
        outline: none;
        user-select: none;
      }

      .title {
        font-size: var(--font-size-xxl);
        padding: 0 20px;
        cursor: pointer;
      }

      .collapse-button {
        font-size: var(--font-size-xl);
        border: none;
        background: transparent;
        color: #ffffff;
        outline: none;
        cursor: pointer;
        padding: 10px 20px;
        border-radius: 10px;
      }

      .collapse-button:hover {
        background-color: #f45d4e;
      }
    `}constructor(){super(),this.noMenu=!1}render(){return i.dy`
      <mv-header>
        ${this.noMenu?i.dy``:i.dy`
              <mv-header item>
                <button class="collapse-button" @click="${this.toggleSidebar}">
                  <mv-fa icon="bars"></mv-fa>
                </button>
              </mv-header>
            `}
        <mv-header item>
          <h1 class="title">
            
          </h1>
        </mv-header>
        <mv-header item position="right">
          <mv-button
            button-style="error"
            type="outline"
            @button-clicked="${this.logout}"
            >Logout</mv-button
          >
        </mv-header>
      </mv-header>
    `}toggleSidebar=()=>{document.dispatchEvent(new CustomEvent("toggle-sidebar"))};logout=()=>{document.dispatchEvent(new CustomEvent("logout"))}}customElements.define("topbar-menu",n);s(836);var r=s(6644);class a extends i.oi{static get properties(){return{title:{type:String},selected:{type:String},sidebar:{type:Boolean},expanded:{type:Boolean},entities:{type:Object,attribute:!1},permissions:{type:Object,attribute:!1},hasHeader:{type:Boolean,attribute:"has-header"},router:{type:Object}}}static get styles(){return i.iv`
      :host {
        --mv-menu-panel-header-height: 80px;
        --mv-menu-panel-item-height: 50px;
      }

      mv-menu-panel {
        font-family: "MuseoSans";
      }

      .sidebar {
        position: fixed;
        height: 100%;
        z-index: 99;
        box-shadow: 0 1px 30px 1px rgba(0, 0, 0, 0.11);
        background-color: #3f4753;
        --mv-menu-panel-width: var(--sidebar-width);
      }

      .sidebar.collapsed {
        --mv-menu-panel-width: var(--sidebar-width);
        --mv-menu-panel-popout-width: var(--sidebar-width);
      }

      .sidebar-header {
        min-width: 100%;
        display: grid;
        grid-template-columns: 235px var(--sidebar-width);
        grid-column-gap: 10px;
        align-items: center;
        font-size: 2rem;
      }

      .sidebar-header.collapsed {
        grid-template-columns: 0 var(--sidebar-width);
      }

      .collapse-button {
        width: var(--sidebar-width);
        height: var(--mv-menu-panel-header-height);
        font-size: 2rem;
        border: none;
        background: transparent;
        color: #ffffff;
        outline: none;
        cursor: pointer;
      }

      .collapse-button:hover {
        background-color: #f45d4e;
      }

      .sidebar-header.collapsed .header-title {
        display: none;
      }

      .sidebar-header.collapsed .collapse-button {
        margin-left: -20px;
      }

      .text {
        font-size: var(--font-size-m, 1rem);
        display: flex;
        align-items: center;
        width: 100%;
        height: var(--mv-menu-panel-item-height);
        padding: auto;
        cursor: pointer;
      }

      .text *[icon] {
        margin-left: -16px;
      }
    `}constructor(){super(),this.theme="dark",this.expanded=!0,this.hasHeader=!1,this.selected=""}render(){const{entities:e,theme:t}=this,s=this.expanded?"":" collapsed";return i.dy`
      <div class="sidebar${s}">
        <mv-menu-panel menu ?show-header="${this.hasHeader}" .theme="${t}">
          <mv-menu-panel label>
            <div class="${`sidebar-header${s}`}">
              <div class="header-title">${this.title||""}</div>
              <button class="collapse-button" @click="${this.toggleSidebar}">
                ${this.expanded?i.dy`<div><mv-fa icon="chevron-left"></mv-fa></div>`:i.dy`<div><mv-fa icon="chevron-right"></mv-fa></div>`}
              </button>
            </div>
          </mv-menu-panel>

          <mv-menu-panel
            item
            .value="${{selected:"dashboard",path:"/dashboard"}}"
            ?selected="${"dashboard"===this.selected}"
            ?popout="${!this.expanded}"
            @select-item="${this.selectItem}"
          >
              <div class="text">
                <mv-fa icon="home"></mv-fa>
                ${this.expanded?i.dy`<span>Dashboard</span>`:i.dy``}
              </div>
          </mv-menu-panel>

          ${Object.keys(e||{}).map((t=>{const s=e[t];return i.dy`
              <mv-menu-panel
                item
                .value="${{selected:s.code,path:`/${s.code}/list`}}"
                ?selected="${this.selected===s.code}"
                ?popout="${!this.expanded}"
                @select-item="${this.selectItem}"
              >
                <div class="text">
                  <mv-fa icon="database"></mv-fa>
                  ${this.expanded?i.dy`<span>${s.label}</span>`:i.dy``}
                </div>
              </mv-menu-panel>
            `}))}
        </mv-menu-panel>
      </div>
    `}selectItem=e=>{const{detail:t}=e,{value:{selected:s,path:i}}=t;this.selected=s,this.dispatchEvent(new CustomEvent("select-item",{detail:{selected:this.selected}})),window.router.goto(r.BASE_PATH+i),history.pushState({},i,r.BASE_PATH+i)};toggleSidebar=()=>{this.enabled={},document.dispatchEvent(new CustomEvent("toggle-sidebar"))};toggleGroup=e=>{const{detail:t}=e,{value:{selected:s}}=t;this.enabled={...this.enabled,[s]:!this.enabled[s]},this.selected=this.enabled?s:""};closePopout=()=>{const{enabled:e,selected:t}=this;e[t]&&(this.enabled={...e,[t]:!1})}}customElements.define("sidebar-menu",a);s(5086);class o extends i.oi{static get properties(){return{entities:{type:Object,attribute:!1},permissions:{type:Object,attribute:!1},sidebarExpanded:{type:Boolean,attribute:!1},theme:{type:String,attribute:!0},auth:{type:Object,attribute:!1}}}static get styles(){return i.iv`
      :host {
        top: 0;
        padding: 0;
        margin: 0;
        --mv-header-height: 60px;
        --mv-footer-height: 40px;
        --mv-menu-panel-width: 0;
        --mv-main-margin-left: 0;
        --mv-content-padding: 0;
        --container-padding: 40px;
        --container-total-padding: calc(var(--container-padding) * 2);
        --container-dimensions: calc(100% - var(--container-total-padding));
        --mv-container-min-width: var(--container-dimensions);
        --mv-container-max-width: 100%;
        --mv-container-margin: 0 0 var(--container-padding) 0;
      }

      .sidebar {
        background: var(--light-9-background);
        height: 100%;
        position: relative;
        overflow-y: auto;
        --sidebar-width: 16rem;
        --grid-template-columns: auto;
        --mv-footer-margin-left: var(--sidebar-width);
      }

      .sidebar.sidebar-collapse {
        --sidebar-width: 65px;
      }

      .main-section {
        display: grid;
        grid-template-columns: var(--grid-template-columns);
        transition: all 0.3s;
        grid-gap: 0;
        margin-left: var(--sidebar-width);
        padding: 0;
        width: calc(100% - var(--sidebar-width));
        height: 100%;
      }

      .main-container {
        background: var(--light-9-background);
        height: var(--container-dimensions);
        width: var(--container-dimensions);
        min-width: 600px;
        overflow: auto;
        padding: 40px;
        margin: 0;
      }

      .container-wrap {
        transition: padding-left 0.3s;
      }
    `}constructor(){super(),this.theme="light",this.sidebarExpanded=!0}render(){const e=this.sidebarExpanded?"":" sidebar-collapse";return i.dy`
      <div class="sidebar${e}">
        <mv-main>
          <topbar-menu slot="header"></topbar-menu>
          <sidebar-menu
            .entities="${this.entities}"
            .permissions="${this.permissions}"
            ?expanded="${this.sidebarExpanded}"
            .router=${this.router}
            @sidebar-item-clicked="${this.sidebarItemClicked}"
          ></sidebar-menu>
          <div class="main-section">
            <div class="main-container">
              <page-routes
                .entities="${this.entities}"
                .permissions="${this.permissions}"
                .auth="${this.auth}"
              ></page-routes>
            </div>
          </div>
          <mv-footer slot="footer" .theme="${this.theme}">
            <mv-footer item>
              <small> Meveo&copy; 2022 </small>
            </mv-footer>
          </mv-footer>
        </mv-main>
      </div>
    `}firstUpdated(){const e=this.shadowRoot.querySelector("page-routes");this.router=e._routes}connectedCallback(){super.connectedCallback(),document.addEventListener("toggle-sidebar",this.toggleSidebar)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("toggle-sidebar",this.toggleSidebar)}sidebarItemClicked=e=>{const{detail:{selected:t}}=e;this.selected=t};toggleSidebar=()=>{this.sidebarExpanded=!this.sidebarExpanded,document.dispatchEvent(new CustomEvent("page-resize"))}}customElements.define("page-layout",o)},6644:(e,t,s)=>{"use strict";s.r(t),s.d(t,{BASE_PATH:()=>c,BASE_URL:()=>r,CUSTOM_ACTION_PATH:()=>d,MEVEO:()=>i,MODEL_PATH:()=>l,MODULE:()=>n,PERSISTENCE_PATH:()=>o,SCHEMA_PATH:()=>a});const i={REPOSITORY:"default"},n="mv-test",r="/meveo",a=`${r}/api/rest/entityCustomization/entity/schema`,o=`${r}/api/rest/default/persistence`,d=`${r}/rest/runCustomAction`,l=`${r}/rest/getModels/${n}`,c="/meveo/rest/webapp/mv-test"},4675:(e,t,s)=>{"use strict";s.d(t,{d:()=>f});var i={};s.r(i),s.d(i,{ModelClass:()=>u,actions:()=>c,code:()=>o,formFields:()=>l,label:()=>d});var n={};s.r(n),s.d(n,{ModelClass:()=>b,actions:()=>g,code:()=>h,formFields:()=>m,label:()=>p});var r=s(3790);class a{constructor(e,t){this.auth=e,this._schema=null,this._refSchemas=null,this._endpoints=null,this.schemaCode=t,this.schema}get schema(){return this._schema||(0,r.J1)(this.auth,this.schemaCode).then((e=>{this._schema=e,this._schema.properties||(this._schema.properties={})})),this._schema}get refSchemas(){return this._refSchemas||(0,r.dw)(this.auth,this.refSchemaCodes).then((e=>{this._refSchemas=e})),this._refSchemas}get endpoints(){return this._endpoints||(this._endpoints=(0,r.U8)(this.schema)),this._endpoints}}const o="Continent",d="Continent",l=[{label:"Continent",fields:[{disabled:!1,code:"isoCode",description:"code iso",fieldType:"STRING",appliesTo:"CE_Continent",valueRequired:!1,matrixColumns:[],versionable:!1,useInheritedAsDefaultValue:!1,storageType:"SINGLE",triggerEndPeriodEvent:!1,isInDraft:!1,guiPosition:"tab:Continent:0;field:0",allowEdit:!0,hideOnNew:!1,maxValue:3,unique:!1,filter:!0,summary:!0,identifier:!1,storages:["SQL"],contentTypes:[],fileExtensions:[],saveOnExplorer:!1,samples:[],audited:!1,persisted:!0,hasReferenceJpaEntity:!1,label:"Iso Code"},{disabled:!1,code:"name",description:"name",fieldType:"STRING",appliesTo:"CE_Continent",valueRequired:!1,matrixColumns:[],versionable:!1,useInheritedAsDefaultValue:!1,storageType:"SINGLE",triggerEndPeriodEvent:!1,isInDraft:!1,guiPosition:"tab:Continent:0;field:1",allowEdit:!0,hideOnNew:!1,maxValue:50,unique:!1,filter:!0,summary:!0,identifier:!1,storages:["SQL"],contentTypes:[],fileExtensions:[],saveOnExplorer:!1,samples:[],audited:!1,persisted:!0,hasReferenceJpaEntity:!1,label:"Name"}]}],c=[];class u extends a{schemaCode="Continent";refSchemaCodes=[];constructor(e){super(e,o),this.normalizedCode="continent",this.code=o,this.label=d,this.formFields=l,this.actions=c}}const h="TestCET",p="Test Cet",m=[{label:"My Test Cet",fields:[{disabled:!1,code:"creationDate",description:"creation date",fieldType:"DATE",appliesTo:"CE_TestCET",valueRequired:!1,matrixColumns:[],versionable:!1,useInheritedAsDefaultValue:!1,storageType:"SINGLE",triggerEndPeriodEvent:!1,isInDraft:!1,guiPosition:"tab:My Test CET:0;field:0",allowEdit:!0,hideOnNew:!1,unique:!1,filter:!0,summary:!0,identifier:!1,storages:["SQL"],contentTypes:[],fileExtensions:[],saveOnExplorer:!1,samples:[],audited:!1,persisted:!0,hasReferenceJpaEntity:!1,label:"Creation Date",displayFormat:"dd-M-yyyy HH:mm:ss"},{disabled:!1,code:"name",description:"name",fieldType:"STRING",appliesTo:"CE_TestCET",valueRequired:!1,matrixColumns:[],versionable:!1,useInheritedAsDefaultValue:!1,storageType:"SINGLE",triggerEndPeriodEvent:!1,isInDraft:!1,guiPosition:"tab:My Test CET:0;field:1",allowEdit:!0,hideOnNew:!1,maxValue:50,unique:!1,filter:!0,summary:!0,identifier:!1,storages:["SQL"],contentTypes:[],fileExtensions:[],saveOnExplorer:!1,samples:[],audited:!1,persisted:!0,hasReferenceJpaEntity:!1,label:"Name"},{disabled:!1,code:"age",description:"age",fieldType:"LONG",appliesTo:"CE_TestCET",valueRequired:!1,matrixColumns:[],versionable:!1,useInheritedAsDefaultValue:!1,storageType:"SINGLE",triggerEndPeriodEvent:!1,isInDraft:!1,guiPosition:"tab:My Test CET:0;field:2",allowEdit:!0,hideOnNew:!1,minValue:1,unique:!1,filter:!0,summary:!1,identifier:!1,storages:["SQL"],contentTypes:[],fileExtensions:[],saveOnExplorer:!1,samples:[],audited:!1,persisted:!0,hasReferenceJpaEntity:!1,label:"Age"},{disabled:!1,code:"continent",description:"continent",fieldType:"ENTITY",appliesTo:"CE_TestCET",valueRequired:!1,matrixColumns:[],versionable:!1,useInheritedAsDefaultValue:!1,storageType:"SINGLE",triggerEndPeriodEvent:!1,isInDraft:!1,guiPosition:"tab:My Test CET:0;field:3",allowEdit:!0,hideOnNew:!1,unique:!1,filter:!0,summary:!0,identifier:!1,storages:["SQL"],contentTypes:[],fileExtensions:[],saveOnExplorer:!1,samples:[],audited:!1,persisted:!0,hasReferenceJpaEntity:!1,label:"Continent",name:"Continent",entitySchema:"Continent"}]}],g=[];class b extends a{schemaCode="TestCET";refSchemaCodes=["Continent"];constructor(e){super(e,h),this.normalizedCode="test-cet",this.code=h,this.label=p,this.formFields=m,this.actions=g}}const f=[i,n]},6786:(e,t,s)=>{"use strict";s.d(t,{z:()=>u});const i=e=>function(t,s){const i=e[s];return i?{...t,[s]:i}:t},n=(e,t)=>{const s=!!e.allOf&&e.allOf.length>0,i=Object.keys(e.properties||{});return s?e.allOf.reduce(((e,s)=>{const i=t.find((e=>e.id===s.$ref));return[...e,...n(i,t)]}),[...i]):i},r=(e,t)=>{const{entity:s,type:i}=e,{getEndpointConfig:n}=(s.endpoints||{})[i]||{getEndpointConfig:()=>({})};return n({entity:s,endpoint:e,parameters:t})||{}},a=(e,t)=>{const{entity:s,type:r}=e,{schema:a,refSchemas:o={}}=s,{decorateProperties:d}=(s.endpoints||{})[r]||{decorateProperties:()=>({})};if(a){const r=n(a,o).reduce(i(t),{});return d?d({props:r,parameters:t,endpoint:e,entity:s}):r}return d?d({props:{},parameters:t,endpoint:e,entity:s}):null},o=(e,t)=>{const{endpointUrl:s,pathParameters:n}=e,a=r(e,t),{OVERRIDE_URL:o}=a,d=!!n&&n.length>0;let l=s;if(!o&&d){const e=n.reduce(i(t),{}),r=Object.keys(e).map((function(t){return e[t]})).join("/")||"";r&&(l=`${s}/${r}`)}return o||l};class d{constructor(e){this.endpoint=e}buildHeaders=e=>{const{token:t,noAuth:s}=e,i=r(this.endpoint,e),{OVERRIDE_HEADER:n}=i,a=new Headers,o=n||{"Content-Type":"application/json",Accept:"application/json"};return s||(o.Authorization=`Bearer ${t}`),Object.keys(o).forEach((e=>{a.append(e,o[e])})),a};callApi=(e,t)=>{const{successCallback:s,errorCallback:i}=this.endpoint;fetch(e,t).then((e=>{if(!e.ok)throw new Error(`Status code: [${e.status}] - ${e.statusText}`);return(e.headers.get("Content-Type")||"").includes("application/json")?e.json():{statusCode:e.status,status:e.statusText}})).then((e=>{s?s({detail:{result:e}}):console.info(">>>>>>>>>Result: ",e)})).catch((t=>{i?(console.error(">>>>>>>>>Error: ",t),i({detail:{error:{name:"ApiError",message:[`Encountered error calling API: ${e}`,t.message]}}})):console.error(">>>>>>>>>Error: ",t)}))}}const l={GET:class extends d{constructor(e){super(e)}executeRequest(e){const{mock:t}=this.endpoint,s=a(this.endpoint,e),i=Object.keys(s||{}),n=s&&i.length>0,r=o(this.endpoint,e),d=new URL(r,window.location.origin);n&&i.forEach((function(e){d.searchParams.append(e,s[e])})),t&&d.searchParams.append("mock",!0);const l={method:"GET",headers:this.buildHeaders(e)};this.callApi(d,l)}},POST:class extends d{constructor(e){super(e)}executeRequest(e){const{mock:t}=this.endpoint,s=a(this.endpoint,e),i=o(this.endpoint,e);t&&requestUrl.searchParams.append("mock",!0);const n=this.buildHeaders(e),r=JSON.stringify(s),d={method:"POST",headers:n};r&&(d.body=r),this.callApi(i,d)}},DELETE:class extends d{constructor(e){super(e)}executeRequest(e){const{mock:t}=this.endpoint,s=a(this.endpoint,e),i=Object.keys(s||{}),n=s&&i.length>0,r=o(this.endpoint,e),d=new URL(r,window.location.origin);n&&i.forEach((function(e){d.searchParams.append(e,s[e])})),t&&d.searchParams.append("mock",!0);const l={method:"DELETE",headers:this.buildHeaders(e)};this.callApi(d,l)}},PATCH:class extends d{constructor(e){super(e)}executeRequest(e){const{mock:t}=this.endpoint,s=a(this.endpoint,e),i=o(this.endpoint,e),n=new URL(i);t&&n.searchParams.append("mock",!0);const r=this.buildHeaders(e),d=JSON.stringify(s),l={method:"PATCH",headers:r};d&&(l.body=d),this.callApi(n,l)}},PUT:class extends d{constructor(e){super(e)}executeRequest(e){const{mock:t}=this.endpoint,s=a(this.endpoint,e),i=o(this.endpoint,e),n=new URL(i,window.location.origin);t&&n.searchParams.append("mock",!0);const r=this.buildHeaders(e),d=JSON.stringify(s),l={method:"PUT",headers:r};d&&(l.body=d),this.callApi(n,l)}}};class c{constructor(e="GET",t,s){this.name=s.code,this.method=e,this.type=t,this.entity=s,this.successCallback=null,this.errorCallback=null}executeApiCall(e,t,s){const{name:i,method:n}=this,a=e||{},o=r(this,a),{USE_MOCK:d=!1,OVERRIDE_METHOD:c,OFFLINE:u}=o;if(this.successCallback=t,this.errorCallback=s,u)u.execute?t(u.execute(e)):t({detail:{result:u.result}});else if("ENDPOINT"===d){new l[c||n]({...this,mock:!0}).executeRequest(a)}else try{new l[c||n]({...this,name:i}).executeRequest(a)}catch(e){s&&s({detail:{error:e}})}}}const u=e=>({DETAIL:new c("GET","DETAIL",e),LIST:new c("POST","LIST",e),NEW:new c("POST","NEW",e),UPDATE:new c("PUT","UPDATE",e),DELETE:new c("DELETE","DELETE",e),CUSTOM_ACTION:new c("POST","CUSTOM_ACTION",e)})},3790:(e,t,s)=>{"use strict";s.d(t,{kZ:()=>y,V4:()=>E,U8:()=>l,dw:()=>d,J1:()=>o,e1:()=>a,WP:()=>r,sw:()=>f,sl:()=>b,Q_:()=>m});var i=s(6644);const n=e=>{let t=null;switch(e){case"DATE":t=Object;break;case"LIST":t=Array;break;default:t=String}return t},r=(e,t)=>{const s=t.find((t=>t.code===e)),{formFields:i}=s,r=(e=>(e||[]).reduce(((e,t)=>(t.fields||[]).reduce(((e,t)=>({...e,[t.code]:{type:n(t.fieldType),attribute:!1,reflect:!0}})),e)),{}))(i),a=(e=>(e||[]).reduce(((e,t)=>(t.fields||[]).reduce(((e,t)=>[...e,{property:t.code,value:t.code}]),e)),[]))(i);return{properties:r,mappings:a}},a=async e=>{try{return await(await fetch(i.MODEL_PATH,{headers:{Accept:"application/json",Authorization:`Bearer ${e.token}`}})).json()}catch(e){return console.error("error: ",e),{detail:{error:e}}}},o=(e,t)=>(async(e,t,s="GET")=>{const i=new Headers;i.append("Content-Type","application/json"),i.append("Accept","application/json"),i.append("Authorization",`Bearer ${e.token}`);try{const e=await fetch(t,{method:s,headers:i});if(!e.ok)throw new Error({name:"Schema Error",message:[`Encountered error retrieving schema: ${t}`,`Status code: ${e.status} [${e.statusText}]`]});return(e.headers.get("Content-Type")||"").includes("application/json")?await e.json():{statusCode:e.status,status:e.statusText}}catch(e){return console.error("error: ",e),{detail:{error:e}}}})(e,`${i.SCHEMA_PATH}/${t}`),d=async(e,t)=>{const s=(t||[]).map((t=>o(e,t)));return Promise.all(s)},l=e=>({DETAIL:{schema:e,getEndpointConfig:({entity:e,parameters:t})=>{const{uuid:s}=t;return{OVERRIDE_URL:`${i.PERSISTENCE_PATH}/${e.code}/${s}`}}},LIST:{schema:e,getEndpointConfig:({entity:e})=>({OVERRIDE_URL:`${i.PERSISTENCE_PATH}/${e.code}/list?withCount=true`}),decorateProperties:({parameters:e})=>{const{firstRow:t,numberOfRows:s,fetchFields:i,filters:n,sortField:r,ordering:a}=e;return{firstRow:t,numberOfRows:s,fetchFields:i,filters:n,sortField:r,ordering:a}}},NEW:{schema:e,getEndpointConfig:()=>({OVERRIDE_URL:i.PERSISTENCE_PATH}),decorateProperties:({entity:e,props:t})=>[{name:`${g(e.code)} (${v()})`,type:e.code,properties:{...t}}]},UPDATE:{schema:e,getEndpointConfig:({entity:e,parameters:t})=>{const{uuid:s}=t;return{OVERRIDE_URL:`${i.PERSISTENCE_PATH}/${e.code}/${s}`}}},DELETE:{schema:e,getEndpointConfig:({entity:e,parameters:t})=>{const{uuid:s}=t;return{OVERRIDE_URL:`${i.PERSISTENCE_PATH}/${e.code}/${s}`}}},CUSTOM_ACTION:{schema:e,getEndpointConfig:()=>({OVERRIDE_URL:i.CUSTOM_ACTION_PATH}),decorateProperties:({parameters:e})=>{const{uuid:t,runWith:s,actionCode:i}=e;return{uuid:t,runWith:s,actionCode:i}}}}),c=/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])|_|\\s|-/gm,u=e=>e?e.charAt(0).toUpperCase()+e.substring(1).toLowerCase():e,h=e=>e?e.toLowerCase():e,p=(e,t,s)=>e?e.replaceAll(c," ").split(" ").map(t).join(s):"",m=e=>p(e,u," "),g=e=>p(e,u,""),b=e=>p(e,h,"-"),f=(e,t)=>["true","false",!0,!1].includes(e)&&JSON.parse(e)||t,v=()=>{const e=new Uint8Array(8);return(window.crypto||window.msCrypto).getRandomValues(e).reduce(((e,t)=>`${e}${t.toString(16)}`),"")},E={code:"",label:"",schema:{},refSchemas:[],formFields:[],endpoints:{DETAIL:{schema:{},override:{}},LIST:{schema:{},override:{}},NEW:{schema:{},override:{}},UPDATE:{schema:{},override:{}}}},y={title:"",message:"",open:!1}}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={id:e,exports:{}};return i[e].call(s.exports,s,s.exports,r),s.exports}r.m=i,r.amdO={},e=[],r.O=(t,s,i,n)=>{if(!s){var a=1/0;for(c=0;c<e.length;c++){for(var[s,i,n]=e[c],o=!0,d=0;d<s.length;d++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](s[d])))?s.splice(d--,1):(o=!1,n<a&&(a=n));if(o){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,i,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,s)=>(r.f[s](e,t),t)),[])),r.u=e=>e+"."+{22:"e51845460ab013be6110",57:"cf3ccb2cbc73753b765a",237:"a5d3979966f7575e86a1",606:"ecc62e9ee02ce386a5dd",631:"63fa325830a5b9c26384",632:"a021be6eae4bf170d660",697:"f1404b61cd8dbac9ba40",916:"e92acf4e95b5f5c8cb85",943:"5a241ce64d0bf3f8715e"}[e]+".js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},s="mv-template:",r.l=(e,i,n,a)=>{if(t[e])t[e].push(i);else{var o,d;if(void 0!==n)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==s+n){o=u;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",s+n),o.src=e),t[e]=[i];var h=(s,i)=>{o.onerror=o.onload=null,clearTimeout(p);var n=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(i))),s)return s(i)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),d&&document.head.appendChild(o)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="./",(()=>{r.b=document.baseURI||self.location.href;var e={179:0};r.f.j=(t,s)=>{var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)s.push(i[2]);else{var n=new Promise(((s,n)=>i=e[t]=[s,n]));s.push(i[2]=n);var a=r.p+r.u(t),o=new Error;r.l(a,(s=>{if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var n=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,i[1](o)}}),"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,s)=>{var i,n,[a,o,d]=s,l=0;if(a.some((t=>0!==e[t]))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(d)var c=d(r)}for(t&&t(s);l<a.length;l++)n=a[l],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},s=self.webpackChunkmv_template=self.webpackChunkmv_template||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),r.nc=void 0;var a=r.O(void 0,[512,650],(()=>r(2437)));a=r.O(a)})();