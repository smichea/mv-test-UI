"use strict";(self.webpackChunkmv_template=self.webpackChunkmv_template||[]).push([[916],{8916:(t,e,i)=>{var s=i(5862),o=i(6786),n=i(6644),l=i(3790);i(2542),i(3110),i(9838),i(6587),i(4897),i(7503),i(7231),i(4817);class r extends s.oi{static get properties(){return{row:{type:Object,attribute:!1},"row-actions":{type:Object,attribute:!1}}}static get styles(){return s.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      .action-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      .action-button {
        --mv-button-padding: 10px 10px;
        --mv-button-min-width: 30px;
      }

      mv-tooltip {
        --mv-tooltip-height: 38px;
      }
    `}render(){!!this["row-actions"]&&this["row-actions"].length;return s.dy`
      <div class="action-container">
        <mv-tooltip position="left">
          <mv-button
            class="action-button"
            type="outline"
            button-style="info"
            @button-clicked="${this.handleAction("edit")}"
          >
            <mv-fa icon="pencil-alt"></mv-fa>
          </mv-button>
          <span slot="tooltip-content">Edit</span>
        </mv-tooltip>

        <mv-tooltip position="left">
          <mv-button
            class="action-button"
            type="outline"
            button-style="error"
            @button-clicked="${this.handleAction("delete")}"
          >
            <mv-fa icon="trash-alt"></mv-fa>
          </mv-button>
          <div slot="tooltip-content">Delete</div>
        </mv-tooltip>
      </div>
    `}renderRowActions=()=>this["row-actions"].map((t=>s.dy`
        <mv-tooltip position="left">
          <mv-button
            class="action-button"
            type="outline"
            @button-clicked="${this.handleAction("run-action",t)}"
          >
            <mv-fa icon="play"></mv-fa>
          </mv-button>
          <div slot="tooltip-content">${t.label}</div>
        </mv-tooltip>
      `));handleAction=(t,e)=>i=>{const{row:s}=this;this.dispatchEvent(new CustomEvent(t,{detail:{row:s,event:i,action:e}}))}}customElements.define("table-actions",r);const a=[{label:"10",value:10},{label:"20",value:20},{label:"50",value:50},{label:"100",value:100}];class c extends s.oi{static get properties(){return{auth:{type:Object,attribute:!1},code:{type:String},selectable:{type:Boolean},noListActions:{type:Boolean,attribute:"no-list-actions"},selectOne:{type:Boolean,attribute:"select-one"},"selected-rows":{type:Array,attribute:!1},withCheckbox:{type:Boolean,attribute:"with-checkbox"},noNewButton:{type:Boolean,attribute:"no-new-button"},noRowsPerPage:{type:Boolean,attribute:"no-rows-per-page"},entity:{type:Object,attribute:!1},entities:{type:Object,attribute:!1},permissions:{type:Object,attribute:!1},filters:{type:Object,attribute:!1},fields:{type:Array,attribute:!1},messageDialog:{type:Object,attribute:!1},confirmDialog:{type:Object,attribute:!1},columns:{type:Array,attribute:!1},columnOrder:{type:Array,attribute:!1},rows:{type:Array,attribute:!1},pages:{type:Number},currentPage:{type:Number},rowsPerPage:{type:Number},visibleFilters:{type:Boolean},sortOrder:{type:Object},rowActions:{type:Array,attribute:!1},listActions:{type:Array,attribute:!1}}}static get styles(){return s.iv`
      h1 {
        margin-top: 0;
      }

      mv-table {
        --mv-table-row-cursor: pointer;
      }

      .dialog-size {
        --mv-dialog-width: 500px;
        --mv-dialog-max-height: 300px;
      }

      .action-section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .action-loader {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .action-loader .message {
        margin-bottom: 2rem;
      }

      .text-with-selection {
        display: flex;
        align-items: center;
      }

      .text-with-selection mv-select {
        --mv-select-width: 3rem;
        margin: 0 5px;
      }

      .action-section .right {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .action-section .right mv-dropdown {
        --mv-dropdown-trigger-height: 60px;
        --mv-container-min-width: 50rem;
        --mv-container-max-width: 50rem;
      }

      .action-section .right mv-dropdown ul {
        padding: 0;
      }

      .action-section .right mv-dropdown li {
        display: block;
        width: calc(100% - 10px);
        padding: 5px;
      }

      .action-section .right mv-dropdown li:hover {
        list-style: none;
        display: block;
        background: #1d9bc9;
        color: #ffffff;
        --mv-checkbox-label-color: #ffffff;
      }

      .custom-actions mv-dropdown {
        --mv-dropdown-trigger-height: 4rem;
      }

      .custom-actions ul {
        padding: 0;
        margin: 0.3rem 0;
      }

      .custom-actions li {
        display: block;
        width: calc(100% - 2rem);
        padding: 1rem;
        white-space: nowrap;
        cursor: pointer;
      }

      .custom-actions li:hover {
        list-style: none;
        display: block;
        background: #1d9bc9;
        color: #ffffff;
      }

      .table-actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    `}constructor(){super(),this.config=n,this.auth=null,this.selectable=!1,this.selectOne=!1,this.noListActions=!1,this.noNewButton=!1,this.noRowsPerPage=!1,this.entity={...l.V4},this.entities={},this.pages=1,this.currentPage=1,this.rowsPerPage=a[0].value,this.selectedRowsPerPage=a[0],this.rows=[],this.fields=[],this.columnOrder=[],this.visibleFilters=!1,this.messageDialog={...l.kZ},this.confirmDialog={...l.kZ},this.filters={},this.actionColumn={getActionComponent:(t,e)=>s.dy`
        <table-actions
          .row="${t}"
          .row-actions="${e}"
          @edit="${this.editRow}"
          @delete="${this.confirmDelete}"
          @run-action="${this.runAction}"
        ></table-actions>
      `},this.rowActions=[],this.listActions=[],this["selected-rows"]=[]}render(){const{entity:t,rowActions:e}=this,{formFields:i}=t;return s.dy`
      <div>
        <h1>${this.entity.label}</h1>
        <div class="action-section">
          <div>${this.renderNewButton()}</div>
          <div class="right">
            ${this.renderRowsPerPage()}
            <mv-dropdown
              container
              justify="right"
              position="bottom"
              theme="light"
            >
              <mv-dropdown trigger>
                <mv-button type="rounded">Show Columns</mv-button>
              </mv-dropdown>
              ${i.map((t=>this.renderFieldGroup(t)))}
            </mv-dropdown>
            <mv-button type="rounded" @button-clicked="${this.toggleFilters}">
              Filters
            </mv-button>
          </div>
        </div>
        <table-filters
          ?open="${this.visibleFilters}"
          .fields="${i}"
          @apply-filters="${this.applyFilters}"
          @clear-filters="${this.clearFilters}"
          @close-filters="${this.toggleFilters}"
        ></table-filters>
        <mv-table
          sortable
          .columns="${this.columns||[]}"
          .rows="${this.rows}"
          .action-column="${this.actionColumn}"
          .row-actions="${e}"
          .sort-order="${this.sortOrder}"
          .selected-rows="${this["selected-rows"]}"
          ?selectable="${this.selectable}"
          ?select-one="${this.selectOne}"
          ?with-checkbox="${this.withCheckbox}"
          @select-row="${this.selectRow}"
          @column-sort="${this.sortTable}"
        ></mv-table>
        <div class="table-actions">
          <div class="custom-actions">
            ${this.noListActions?null:this.renderListCustomActions()}
          </div>
          <div class="pagination-actions">
            <mv-pagination
              type="text"
              .page="${this.currentPage}"
              .pages="${this.pages}"
              @change-page="${this.gotoPage}"
            ></mv-pagination>
          </div>
        </div>
      </div>
      <mv-dialog
        class="message-dialog dialog-size"
        header-label="${this.messageDialog.title}"
        ?open="${this.messageDialog.open}"
        ?closeable="${this.messageDialog.closable}"
        ?no-right-button="${this.messageDialog.noButtons}"
        @ok-dialog="${this.closeDialog("messageDialog")}"
        no-left-button
      >
        <p>${this.messageDialog.message}</p>
      </mv-dialog>
      <mv-dialog
        class="confirm dialog dialog-size"
        header-label="${this.confirmDialog.title}"
        ?open="${this.confirmDialog.open}"
        @close-dialog="${this.closeDialog("confirmDialog")}"
        @ok-dialog="${this.confirmDialog.okAction}"
        closeable
      >
        <p>${this.confirmDialog.message}</p>
      </mv-dialog>
    `}renderNewButton=()=>this.noNewButton?null:s.dy`
          <mv-button type="rounded" @button-clicked="${this.newItem}">
            <mv-fa icon="plus"></mv-fa>New
          </mv-button>
        `;renderRowsPerPage=()=>this.noRowsPerPage?null:s.dy`
          <div class="text-with-selection">
            <span>Show</span>
            <mv-select
              .value="${this.selectedRowsPerPage}"
              .options="${a}"
              @select-option="${this.changeRowsPerPage}"
              no-clear-button
            ></mv-select>
            <span>rows</span>
          </div>
        `;renderListCustomActions=()=>{const{listActions:t}=this;return t&&t.length>0?s.dy`
        <mv-dropdown
          container
          toggle
          justify="left"
          position="bottom"
          theme="light"
        >
          <mv-dropdown trigger>
            <mv-button>
              More actions <mv-fa icon="chevron-down"></mv-fa>
            </mv-button>
          </mv-dropdown>
          <mv-dropdown content theme="light">
            <ul>
              ${this.renderCustomAction(t)}
            </ul>
          </mv-dropdown>
        </mv-dropdown>
      `:s.dy``};renderCustomAction=t=>t.map((t=>s.dy`
        <li @click="${this.runListAction(t)}">${t.label}</li>
      `));connectedCallback(){super.connectedCallback();const{formFields:t,schema:e,actions:i}=this.entity,{properties:s={}}=e||{},o=t.reduce(((t,e)=>[...t,...e.fields.reduce(((t,e)=>e.summary?[...t,e.code]:t),[])]),[]);this.fields=t.reduce(((t,e)=>[...t,...e.fields]),[]),this.columnOrder=o.length>0?o:Object.keys(s),this.columns=this.columns||this.parseColumns(this.columnOrder),this.rowActions=i.filter((t=>t.applicableToEntityInstance)),this.listActions=i.filter((t=>t.applicableToEntityList)),this.loadList(1)}renderFieldGroup=t=>{const{fields:e,label:i}=t;return s.dy`
      <mv-dropdown header theme="light">${i}</mv-dropdown>
      <mv-dropdown content theme="light">
        <ul>
          ${e.map((e=>this.renderFieldItem(t,e)))}
        </ul>
      </mv-dropdown>
    `};renderFieldItem=(t,e)=>{const{summary:i,label:o}=e;return s.dy`
      <li>
        <mv-checkbox
          .checked="${i}"
          @click-checkbox="${this.selectColumn(t,e)}"
          label="${o}"
        >
        </mv-checkbox>
      </li>
    `};parseColumns=t=>t.reduce(((t,e)=>{const i=this.fields.find((t=>t.code===e));if(i){const s=i.description||(0,l.Q_)(e),o=i.listValues&&Object.keys(i.listValues).length>0,n=i.matrixColumns&&i.matrixColumns.length>0,r={name:i.code,code:i.code,title:s,tooltip:s,type:i.fieldType,fieldType:i.fieldType,storageType:i.storageType,filter:i.filter,disabled:i.disabled};o&&(r.options=Object.keys(i.listValues).map((t=>({label:i.listValues[t],value:t})))),n&&(r.options=i.matrixColumns),t.push(r)}return t}),[]);loadList=t=>{const{filters:e,sortOrder:i,entity:s,rowsPerPage:l,columnOrder:r}=this;this.currentPage=t<1?1:t;const a=(this.currentPage-1)*l,c=(0,o.z)(s).LIST,d={config:n,firstRow:a,token:this.auth.token,numberOfRows:l,fetchFields:r};if(e&&Object.keys(e).length>0&&(d.filters=e),i){const[t]=Object.keys(this.sortOrder);d.sortField=t,d.ordering=this.sortOrder[t]}c.executeApiCall(d,this.retrieveSuccess,this.handleErrors)};retrieveSuccess=t=>{const{detail:{result:{result:e=[],count:i=0}}}=t;i>0&&e.length<1&&this.currentPage>1?this.loadList(this.currentPage-1):(this.rows=e,this.pages=this.rowsPerPage>0?Math.ceil(i/this.rowsPerPage):1)};handleErrors=t=>{const{detail:{error:e}}=t;console.error("error: ",e);const{name:i,message:o}=e;let n=null;if(Array.isArray(o)){const[t,e]=o;n=s.dy`
        <span>${t}</span><br />
        <small>${e}</small>
      `}else n=s.dy`<span>${o}</span>`;this.messageDialog={title:i||"Error",message:n,open:!0}};gotoPage=t=>{const{detail:e={}}=t||{};this.loadList(e.page||1)};newItem=t=>{this.dispatchEvent(new CustomEvent("new-item"))};editRow=t=>{const{detail:{row:e}}=t;this.dispatchEvent(new CustomEvent("edit-item",{detail:{row:e}}))};confirmDelete=t=>{const{detail:{row:e}}=t;this.confirmDialog={title:"Confirm delete",message:s.dy`<span>Delete item?</span>`,open:!0,okAction:this.deleteRow(e)}};deleteRow=t=>()=>{const{uuid:e}=t;(0,o.z)(this.entity).DELETE.executeApiCall({token:this.auth.token,config:n,uuid:e},this.deleteSuccess,this.handleErrors)};deleteSuccess=()=>{this.confirmDialog={...l.kZ},this.messageDialog={title:"Success",message:s.dy`<span>Item deleted.</span>`,open:!0},this.loadList(this.currentPage),this.dispatchEvent(new CustomEvent("clear-selected"))};selectRow=t=>{const{detail:e}=t;this.dispatchEvent(new CustomEvent("row-click",{detail:e}))};closeDialog=t=>()=>{this[t]={...l.kZ}};changeRowsPerPage=t=>{const{detail:{option:e}}=t;this.selectedRowsPerPage=e,this.rowsPerPage=e.value,this.loadList(this.currentPage)};selectColumn=(t,e)=>()=>{const t=this.columnOrder.findIndex((t=>t===e.code));this.columnOrder=t>-1?[...this.columnOrder.slice(0,t),...this.columnOrder.slice(t+1)]:[...this.columnOrder,e.code];const i=this.parseColumns(this.columnOrder);this.columns=i.map((t=>({...t,title:(0,l.Q_)(t.title)}))),this.loadList(this.currentPage)};toggleFilters=()=>{this.visibleFilters=!this.visibleFilters};clearFilters=()=>{this.filters={},this.loadList(1)};applyFilters=t=>{const{detail:{filters:e}}=t;this.filters={...e},this.loadList(1)};sortTable=t=>{const{detail:{column:e,order:i}}=t;this.sortOrder={[e.name]:i},this.loadList(this.currentPage)};runAction=t=>{const{detail:{row:e,action:i}}=t,{uuid:s}=e;this.showLoader(i);(0,o.z)(this.entity).CUSTOM_ACTION.executeApiCall({token:this.auth.token,config:n,actionCode:i.code,runWith:{entities:[{code:this.entity.code,uuid:s}]}},this.actionSuccess(i),this.handleErrors)};runListAction=t=>()=>{this.showLoader(t);const{code:e}=this.entity,i=(0,o.z)(this.entity).CUSTOM_ACTION,l=this["selected-rows"].map((({uuid:t})=>({code:e,uuid:t})))||[];l.length>0?i.executeApiCall({token:this.auth.token,config:n,actionCode:t.code,runWith:{entities:l}},this.actionSuccess(t),this.handleErrors):this.messageDialog={title:"Error",message:s.dy`
          <span> Cannot run custom action. No items selected. </span>
        `,open:!0}};actionSuccess=t=>()=>{this.messageDialog={title:"Action Success",message:s.dy`<span>${t.label} successfully executed.</span>`,open:!0},this.loadList(this.currentPage),this.dispatchEvent(new CustomEvent("clear-selected"))};showLoader=t=>{this.messageDialog={title:"Loading",message:s.dy`
        <div class="action-loader">
          <div class="message">Invoking ${t.label} action.</div>
          <mv-fa icon="spinner" icon-props="fa-2x fa-pulse"></mv-fa>
        </div>
      `,open:!0,closable:!1,noButtons:!0}}}customElements.define("list-content",c)}}]);