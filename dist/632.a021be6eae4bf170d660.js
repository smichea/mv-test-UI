"use strict";(self.webpackChunkmv_template=self.webpackChunkmv_template||[]).push([[632],{5632:(e,t,i)=>{var r=i(5862),s=i(1696);i(2542),i(6833),i(3899),i(6587),i(4397),i(4228);class a extends r.oi{static get properties(){return{field:{type:Object,attribute:!1},errors:{type:Object,attribute:!1},value:{type:Object,attribute:!1},hasError:{type:Boolean,attribute:"has-error",reflect:!0},removable:{type:Boolean},hideLabel:{type:Boolean,attribute:"hide-label"},hidePlaceholder:{type:Boolean,attribute:"hide-placeholder"},hideError:{type:Boolean,attribute:"hide-error"}}}static get styles(){return r.iv`
      :host {
        --button-size: 24px;
        --mv-dropdown-trigger-padding: 0;
      }

      mv-button {
        --mv-button-margin: 0 0 0 5px;
        --mv-button-padding: 3px 4px;
        --mv-button-min-width: var(--button-size);
      }

      .small-button {
        height: var(--button-size);
      }

      .label.error {
        color: #ad4444 !important;
      }
    `}constructor(){super(),this.field={},this.removable=!1,this.hideLabel=!1,this.hidePlaceholder=!1,this.hideError=!1}render(){const{code:e}=this.field||{},t=(0,s.dK)(this.errors,e),i=!!t?" error":"";return r.dy`
      <mv-form-field/mv-form-field.js
        name="${e}"
        label-position="none"
        .error="${this.hideError?null:t}"
      >
        <div slot="field">
          <div class="field-template">
            ${this.renderLabel(this.field,i)}
            <div class="input">${this.renderInput()}</div>
            ${this.renderDeleteButton()}
          </div>
        </div>
      </mv-form-field/mv-form-field.js>
    `}renderLabel(e,t){return this.hideLabel?r.dy``:r.dy`
          <label for="${e.code}" class="label${t}">
            ${e.label}
          </label>
        `}renderDeleteButton(){return this.removable?r.dy`
          <div class="button">
            <mv-button
              button-style="error"
              class="small-button"
              @button-clicked="${this.remove}"
            >
              <mv-fa icon="minus"></mv-fa>
            </mv-button>
          </div>
        `:r.dy``}change=e=>{const{detail:t}=e;this.dispatchEvent(new CustomEvent("change",{detail:{...t,originalEvent:e}}))};remove=e=>{this.dispatchEvent(new CustomEvent("remove",{detail:{originalEvent:e}}))}}customElements.define("field-template",a);customElements.define("binary-field",class extends a{static get properties(){return{...super.properties,multiple:{type:Boolean},buttonLabel:{type:String,attribute:"button-label"}}}constructor(){super(),this.multiple=!1,this.buttonLabel="Add File"}renderInput(){const{multiple:e,buttonLabel:t,field:i,hidePlaceholder:s}=this,{label:a,contentTypes:l,disabled:n,valueRequired:o}=i||{};return r.dy`
      <mv-file-upload
        ?multiple="${e}"
        file-types="${l||"*"}"
        label="${s?"":a}"
        button-label="${t}"
        @update-files="${this.change}"
      >
      </mv-file-upload>
    `}change=e=>{const{detail:t}=e,i=(this.multiple?t.files:(t.files||[])[0])||null;this.dispatchEvent(new CustomEvent("change",{detail:{value:i,originalEvent:e}}))}});var l=i(3790);i(1140);customElements.define("boolean-field",class extends a{static get properties(){return{value:{type:Boolean}}}constructor(){super(),this.value=!1}renderInput(){const{code:e,label:t}=this.field||{},i=(0,l.sw)(this.value);return r.dy`
      <mv-checkbox
        slot="field"
        ?checked="${i}"
        @click-checkbox="${this.change}"
        label="${t}"
      ></mv-checkbox>
    `}change=e=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:!this.value+"",originalEvent:e}}))}});var n=i(4953);i(9605);customElements.define("date-field",class extends a{static get properties(){return{selected:{type:Object,attribute:!1,reflect:!0},value:{type:String,attribute:!0,reflect:!0}}}constructor(){super(),this.selected={...n.$5},this.value=""}renderInput(){const{code:e,label:t}=this.field;return r.dy`
      <mv-calendar
        dropdown
        slot="field"
        name="${e}"
        placeholder="${t}"
        .selected="${this.selected}"
        @select-date="${this.change}"
      ></mv-calendar>
    `}attributeChangedCallback(e,t,i){if("value"===e){const e=new Date(i);this.selected=e.getTime()?(0,n.sG)({date:e}):{...n.$5}}super.attributeChangedCallback(e,t,i)}change=e=>{const{detail:t}=e,{selected:i}=t;this.selected=i;const r=(0,n.xb)(this.selected)?"":moment(i.date).toISOString();this.dispatchEvent(new CustomEvent("change",{detail:{value:r,originalEvent:e}}))}});var o=i(6644),d=i(6786);i(3110),i(7231),i(8916),i(9726),i(1820);customElements.define("entity-field",class extends a{static get properties(){return{auth:{type:Object,attribute:!1},entity:{type:Object,attribute:!1},dialog:{type:Object,attribute:!1},errorDialog:{type:Object,attribute:!1},selectedItem:{type:Object,attribute:!1},hideUuid:{type:Boolean,attribute:"hide-uuid"}}}static get styles(){return r.iv`
      :host {
        --button-size: 24px;
        --entity-field-font-size: var(--font-size-m, 16px);
        --input-padding: var(--entity-field-input-padding, 13.5px);
        --outside-padding: calc(var(--input-padding) * 2);
        --max-height: calc(
          var(--entity-field-font-size) + var(--outside-padding)
        );
        --entity-button-border: 1px solid #4e686d;
        --border-radius: var(--entity-field-border-radius, 5px);
        --active-border: var(--entity-field-active-border, 1px solid #1d9bc9);
        --active-box-shadow: var(
          --entity-field-active-box-shadow,
          inset 0 0 9px 0 rgba(29, 155, 201, 0.3)
        );
      }

      mv-button {
        --mv-button-margin: 0 0 0 5px;
        --mv-button-padding: 3px 4px;
        --mv-button-min-width: var(--button-size);
      }

      .button {
        height: var(--button-size);
      }

      .field-entry {
        outline: none;
        position: relative;
        display: grid;
        align-items: center;
        justify-items: start;
        background: transparent;
        width: 100%;
        border: var(--entity-button-border);
        border-radius: var(--border-radius);
        min-height: var(--max-height);
        max-height: var(--max-height);
        padding: var(--input-padding);
        font-size: var(--entity-field-font-size);
        color: var(--mv-input-color, #818181);
      }

      .field-entry:hover {
        cursor: pointer;
        border: var(--active-border);
        box-shadow: var(--active-box-shadow);
      }

      .no-selection {
        color: #c7c7c7;
      }

      .entity-dialog {
        --mv-dialog-max-height: 100%;
        --mv-dialog-width: calc(100% - 40px);
        --mv-dialog-content-height: 100%;
      }

      .dialog-content {
        padding: 1.8rem 0;
        width: 100%;
      }

      .dialog-size {
        --mv-dialog-width: 500px;
        --mv-dialog-max-height: 300px;
      }

      div[slot="tooltip-content"] {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: flex-start;
        align-items: flex-start;
      }
    `}constructor(){super(),this.selectedItem={},this.options=[],this.hideUuid=!1,this.dialog={open:!1,content:r.dy``},this.errorDialog={open:!1,content:r.dy``},this.entity=null}renderInput=()=>{const e=!!this.value&&Object.getOwnPropertyNames(this.value).length>0,t=`field-entry${e?"":" no-selection"}`,{label:i}=this.field||{};return r.dy`
      ${e?this.renderButtonValues(t):this.renderButtonOnly(t,i)}
      <mv-dialog
        class="entity-dialog"
        header-label="${i}"
        ?open="${this.dialog.open}"
        ?no-footer="${this.dialog.noFooter}"
        @close-dialog="${this.closeDialog}"
        @ok-dialog="${this.change}"
        right-label="Done"
        closeable
      >
        ${this.dialog.content}
      </mv-dialog>
      <mv-dialog
        class="dialog-size"
        header-label="${this.errorDialog.title}"
        ?open="${this.errorDialog.open}"
        @close-dialog="${this.closeErrorDialog}"
        no-left-button
        closeable
      >
        <p>${this.errorDialog.message}</p>
        <span slot="footer">
          <mv-button @button-clicked="${this.closeErrorDialog}">
            Close
          </mv-button>
        </span>
      </mv-dialog>
    `};renderButtonValues=e=>{const{code:t,label:i,name:s,uuid:a}=this.value||{};let l=i||s||t;return l=l||(a||"").split("-")[0],r.dy`
      <mv-tooltip>
        <button class="${e}" @click="${this.openList}">
          ${l}
        </button>
        <div slot="tooltip-content">
          ${Object.keys(this.value).map(this.renderEntityValue)}
        </div>
      </mv-tooltip>
    `};renderEntityValue=e=>r.dy`<span><b>${e}</b>: ${this.value[e]}</span>`;renderButtonOnly=(e,t)=>r.dy`
      <button class="${e}" @click="${this.openList}">${t}</button>
    `;getListComponent=()=>r.dy`
      <div class="dialog-content">
        <list-content
          select-one
          with-checkbox
          no-list-actions
          no-new-button
          no-rows-per-page
          .auth="${this.auth}"
          .entity="${this.entity}"
          @edit-item="${this.editItem}"
          @new-item="${this.newItem}"
          @row-click="${this.selectRow}"
          @clear-selected="${this.clearSelected}"
        ></list-content>
      </div>
    `;getNewItemComponent=()=>r.dy`
      <div class="dialog-content">
        <new-content
          name="${this.entity.code}"
          storage-modes="local"
          .auth="${this.auth}"
          .entity="${this.entity}"
          @submitted="${this.submitNew}"
          @cancel="${this.openList}"
        ></new-content>
      </div>
    `;getUpdateItemComponent=e=>r.dy`
      <div class="dialog-content">
        <update-content
          name="${this.entity.code}"
          storage-modes="local"
          .auth="${this.auth}"
          .entity="${this.entity}"
          .formValues="${e}"
          @submitted="${this.submitUpdate}"
          @cancel="${this.openList}"
        ></update-content>
      </div>
    `;updated=e=>{if(e.has("value")){if(this.value&&"string"==typeof this.value){(0,d.z)(this.entity).DETAIL.executeApiCall({config:o,token:this.auth.token,uuid:this.value},this.updateDetails,this.handleErrors)}}};updateDetails=e=>{const{detail:{result:t}}=e;this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:{value:{...this.value},originalEvent:{target:this}}}))};handleErrors=e=>{const{detail:{error:t}}=e;console.error("error: ",t);const{name:i,message:s}=t;let a=null;if(Array.isArray(s)){const[e,t]=s;a=r.dy`
        <span>${e}</span><br />
        <small>${t}</small>
      `}else a=r.dy`<span>${s}</span>`;this.errorDialog={title:i||"Error",message:a,open:!0}};openList=()=>{this.dialog={...this.dialog,open:!0,content:this.getListComponent(),noFooter:!1}};closeDialog=()=>{this.dialog={...this.dialog,open:!1}};closeErrorDialog=()=>{this.errorDialog={...this.errorDialog,open:!1}};editItem=e=>{const{detail:{row:t}}=e;this.dialog={...this.dialog,open:!0,content:this.getUpdateItemComponent(t),noFooter:!0}};newItem=()=>{this.dialog={...this.dialog,open:!0,content:this.getNewItemComponent(),noFooter:!0}};selectRow=e=>{const{detail:{selected:t}}=e,[i]=t;this.selectedItem=i};change=e=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:this.selectedItem,originalEvent:e}})),this.closeDialog()};submitNew=()=>{this.openList()};submitUpdate=()=>{this.openList()};searchOptions=()=>{};clearSelected=()=>{this.selectedItem={}}});customElements.define("text-field",class extends a{renderInput(){const{label:e,disabled:t,valueRequired:i}=this.field||{};return r.dy`
      <mv-input
        type="text"
        .placeholder="${e}"
        .value="${this.value}"
        ?has-error="${this.hasError}"
        @input-change="${this.change}"
        ?disabled="${t}"
        ?required="${i}"
      ></mv-input>
    `}});i(6606);customElements.define("textarea-field",class extends a{static get styles(){return r.iv`
      :host {
        --mv-textarea-width: calc(100% - 18px);
      }
    `}renderInput(){const{label:e,disabled:t,valueRequired:i}=this.field||{};return r.dy`
      <mv-textarea
        .placeholder="${e}"
        .value="${this.value}"
        ?has-error="${this.hasError}"
        ?required="${i}"
        ?disabled="${t}"
        @textarea-change="${this.change}"
      ></mv-textarea>
    `}});i(4817);customElements.define("select-field",class extends a{static get properties(){return{options:{type:Array,attribute:!1,reflect:!0},selected:{type:Object,attribute:!1,reflect:!0},value:{type:String,attribute:!0,reflect:!0}}}static get styles(){return r.iv`
      mv-select {
        --mv-select-font-size: 16px;
        --mv-select-input-padding: 6.25px;
        --mv-select-width: calc(100% - 15px);
      }

      mv-button {
        --mv-button-margin: 0 0 0 5px;
        --mv-button-padding: 3px 4px;
        --mv-button-min-width: 24px;
      }
    `}constructor(){super(),this.selected={},this.options=[]}renderInput(){return r.dy`
      <mv-select
        slot="field"
        .value="${this.selected}"
        .options="${this.options}"
        @select-option="${this.change}"
        @on-clear="${this.clearValue}"
      ></mv-select>
    `}connectedCallback(){super.connectedCallback();const{listValues:e}=this.field;this.options=Object.keys(e).map((t=>({label:e[t],value:t}))),this.value&&(this.selected=this.options.find((e=>e.value===this.value)))}attributeChangedCallback(e,t,i){"value"===e&&(this.selected=i?this.options.find((e=>e.value===this.value)):{}),super.attributeChangedCallback(e,t,i)}clearValue=e=>{const{detail:{originalEvent:t}}=e;this.dispatchEvent(new CustomEvent("change",{detail:{value:null,originalEvent:t}}))};change=e=>{const{detail:{option:{value:t}}}=e;this.dispatchEvent(new CustomEvent("change",{detail:{value:t,originalEvent:e}}))}});i(7850);customElements.define("number-field",class extends a{static get properties(){return{value:{type:Number},step:{type:Number},min:{type:Number},max:{type:Number},precision:{type:Number}}}constructor(){super(),this.step=1,this.precision=0,this.min=void 0,this.max=void 0}renderInput(){const{field:e,value:t,step:i,min:a,max:l,precision:n}=this,{code:o,label:d,valueRequired:c,disabled:h}=e||{},u=(0,s.dK)(this.errors,o);return r.dy`
      <mv-spinner
        name="${o}"
        step="${i}"
        min="${a}"
        max="${l}"
        precision="${n}"
        placeholder="${d}"
        .value="${t}"
        ?hasError="${u}"
        ?disabled="${h}"
        ?required="${c}"
        @spinner-change="${this.change}"
      ></mv-spinner>
    `}});class c extends r.oi{static get properties(){return{auth:{type:Object,attribute:!1},entity:{type:Object,attribute:!1},entities:{type:Object,attribute:!1},field:{type:Object,attribute:!1},value:{type:Object,attribute:!1},errors:{type:Array,attribute:!1},removable:{type:Boolean},hideLabel:{type:Boolean,attribute:"hide-label"},hidePlaceholder:{type:Boolean,attribute:"hide-placeholder"},hideError:{type:Boolean,attribute:"hide-error"}}}static get styles(){return r.iv``}constructor(){super(),this.removable=!1,this.hideLabel=!1,this.hideError=!1,this.hidePlaceholder=!1,this.entity=null,this.entities={}}render(){switch(this.field.fieldType){case"BINARY":return r.dy`
          <binary-field
            hide-placeholder
            .auth=${this.auth}
            .field="${this.field}"
            .value="${this.value}"
            .errors="${this.errors}"
            ?removable="${this.removable}"
            ?hide-label="${this.hideLabel}"
            ?hide-error="${this.hideError}"
            @change="${this.updateValue}"
            @remove="${this.removeValue}"
          ></binary-field>
        `;case"BOOLEAN":return r.dy`
          <boolean-field
            hide-label
            .field="${this.field}"
            .value="${this.value}"
            .errors="${this.errors}"
            ?removable="${this.removable}"
            ?hide-error="${this.hideError}"
            @change="${this.updateValue}"
            @remove="${this.removeValue}"
          ></boolean-field>
        `;case"STRING":return r.dy`
          <text-field
            .field="${this.field}"
            .value="${this.value}"
            .errors="${this.errors}"
            ?removable="${this.removable}"
            ?hide-label="${this.hideLabel}"
            ?hide-placeholder="${this.hidePlaceholder}"
            ?hide-error="${this.hideError}"
            @change="${this.updateValue}"
            @remove="${this.removeValue}"
          ></text-field>
        `;case"DATE":return r.dy`
          <date-field
            .field="${this.field}"
            .value="${this.value}"
            .errors="${this.errors}"
            ?removable="${this.removable}"
            ?hide-label="${this.hideLabel}"
            ?hide-placeholder="${this.hidePlaceholder}"
            ?hide-error="${this.hideError}"
            @change="${this.updateValue}"
            @remove="${this.removeValue}"
          ></date-field>
        `;case"DOUBLE":return r.dy`
          <number-field
            .field="${this.field}"
            .value="${this.value}"
            .errors="${this.errors}"
            precision="2"
            step="0.01"
            ?removable="${this.removable}"
            ?hide-label="${this.hideLabel}"
            ?hide-placeholder="${this.hidePlaceholder}"
            ?hide-error="${this.hideError}"
            @change="${this.updateValue}"
            @remove="${this.removeValue}"
          ></number-field>
        `;case"LIST":return r.dy`
          <select-field
            .field="${this.field}"
            .value="${this.value}"
            .errors="${this.errors}"
            ?removable="${this.removable}"
            ?hide-label="${this.hideLabel}"
            ?hide-placeholder="${this.hidePlaceholder}"
            ?hide-error="${this.hideError}"
            @change="${this.updateValue}"
            @remove="${this.removeValue}"
          ></select-field>
        `;case"LONG":return r.dy`
          <number-field
            .field="${this.field}"
            .value="${this.value}"
            .errors="${this.errors}"
            ?removable="${this.removable}"
            ?hide-label="${this.hideLabel}"
            ?hide-placeholder="${this.hidePlaceholder}"
            ?hide-error="${this.hideError}"
            @change="${this.updateValue}"
            @remove="${this.removeValue}"
          ></number-field>
        `;case"ENTITY":case"CHILD_ENTITY":const e=this.entities[this.field.name];return r.dy`
          <entity-field
            .auth=${this.auth}
            .entity="${e}"
            .field="${this.field}"
            .value="${this.value}"
            .errors="${this.errors}"
            ?removable="${this.removable}"
            ?hide-label="${this.hideLabel}"
            ?hide-placeholder="${this.hidePlaceholder}"
            ?hide-error="${this.hideError}"
            @change="${this.updateValue}"
            @remove="${this.removeValue}"
          ></entity-field>
        `;case"LONG_TEXT":case"TEXT_AREA":return r.dy`
          <textarea-field
            .field="${this.field}"
            .value="${this.value}"
            .errors="${this.errors}"
            ?removable="${this.removable}"
            ?hide-label="${this.hideLabel}"
            ?hide-placeholder="${this.hidePlaceholder}"
            ?hide-error="${this.hideError}"
            @change="${this.updateValue}"
            @remove="${this.removeValue}"
          ></textarea-field>
        `;default:const t=`Unsupported Single Field:\n\t${`Field: ${this.field.description||this.field.code}`}\n\t${`Type: ${this.field.fieldType}`}`;return console.error(t),r.dy``}}updateValue=e=>{const{detail:t}=e,{value:i,originalEvent:r}=t||{};this.dispatchEvent(new CustomEvent("update-value",{detail:{value:i,originalEvent:r}}))};removeValue=()=>{this.dispatchEvent(new CustomEvent("remove-value"))}}customElements.define("single-field",c);class h extends r.oi{static get properties(){return{auth:{type:Object,attribute:!1},entity:{type:Object,attribute:!1},entities:{type:Object,attribute:!1},field:{type:Object,attribute:!1},errors:{type:Array,attribute:!1},value:{type:Array,attribute:!1}}}static get styles(){return r.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      mv-container {
        --mv-container-min-width: 620px;
        --mv-container-max-width: 620px;
        --mv-container-margin: 50px auto;
        --mv-container-padding: 20px 30px;
      }

      mv-container.location {
        --mv-container-min-width: 560px;
        --mv-container-max-width: 620px;
        --mv-container-margin: 0;
        --mv-container-padding: 20px 30px;
      }

      textarea {
        width: 80%;
        min-height: 50px;
        border: 1px solid black;
        margin: 0;
        padding: 5px;
        border-radius: 5px;
        resize: none;
      }

      label .required {
        font-style: normal;
        color: #ff0000;
      }

      fieldset {
        margin: 0 auto 10px auto;
        border-radius: 5px;
      }

      .inline-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
      }

      .small-button {
        --mv-button-circle-button-size: 28px;
      }
    `}constructor(){super(),this.entity=null,this.entities={},this.errors=null,this.field={},this.value=[]}render=()=>{const{field:e}=this,{label:t}=e||{};return r.dy`
      <label>
        ${t}${this.renderRequired(e)}
        <mv-button
          type="circle"
          class="small-button"
          @button-clicked="${this.addItem}"
        >
          <mv-fa icon="plus"></mv-fa>
        </mv-button>
      </label>
      ${this.renderFieldGroup()}
    `};renderRequired=({valueRequired:e})=>e?r.dy`<i class="required"> *</i>`:null;renderFieldGroup=()=>r.dy`
    <mv-form-group/mv-form-group.js
      name="${this.field.code}"
      .values="${this.value}"
      .error="${(0,s.dK)(this.errors,this.field.code)}"
    >
      ${this.renderFields()}
    </mv-form-group/mv-form-group.js>
  `;renderFields=()=>(this.value||[]).map(((e,t)=>r.dy`
        <single-field
          removable
          hide-label
          hide-error
          .auth="${this.auth}"
          .entity="${this.entity}"
          .entities="${this.entities}"
          .field="${this.field}"
          .value="${e}"
          .errors="${this.errors}"
          @update-value="${this.updateItem(t)}"
          @remove-value="${this.removeItem(t)}"
        ></single-field>
      `));addItem=e=>{const{value:t=[]}=this,i=[...t,null];(0,s.uC)(e.target,{name:this.field.code,originalEvent:e,value:i})};removeItem=e=>t=>{const{target:i}=t,r=[...this.value.slice(0,e),...this.value.slice(e+1)];(0,s.uC)(i,{name:this.field.code,validateGroup:!0,originalEvent:t,value:r})};updateItem=e=>t=>{const{detail:i}=t,r=[...this.value.slice(0,e),i.value,...this.value.slice(e+1)];(0,s.uC)(i.originalEvent.target,{name:this.field.code,validateGroup:!0,originalEvent:t,value:r})}}customElements.define("array-field",h);class u extends r.oi{static get properties(){return{auth:{type:Object,attribute:!1},entity:{type:Object,attribute:!1},entities:{type:Object,attribute:!1},field:{type:Object,attribute:!1},errors:{type:Array,attribute:!1},value:{type:Array,attribute:!1}}}static get styles(){return r.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      mv-container {
        --mv-container-min-width: 620px;
        --mv-container-max-width: 620px;
        --mv-container-margin: 50px auto;
        --mv-container-padding: 20px 30px;
      }

      mv-container.location {
        --mv-container-min-width: 560px;
        --mv-container-max-width: 620px;
        --mv-container-margin: 0;
        --mv-container-padding: 20px 30px;
      }

      textarea {
        width: 80%;
        min-height: 50px;
        border: 1px solid black;
        margin: 0;
        padding: 5px;
        border-radius: 5px;
        resize: none;
      }

      button,
      label {
        font-size: 1em;
        font-weight: bold;
        color: #4e686d;
      }

      label .required {
        font-style: normal;
        color: #ff0000;
      }

      fieldset {
        margin: 0 auto 10px auto;
        border-radius: 5px;
      }

      table {
        width: 100%;
      }

      .inline-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
      }

      .small-button {
        --mv-button-circle-button-size: 28px;
      }

      .key {
        padding-bottom: 10px;
        width: 30%;
      }

      .field {
        width: 60%;
      }
    `}constructor(){super(),this.field={},this.value=[],this.entity=null,this.entities={}}mapFields=(e,t)=>r.dy`
    <tr>
      <td class="key">
        <mv-input
          immediate
          .value="${e.key}"
          @input-change="${this.changeKey(t)}"
        ></mv-input>
      </td>
      <td class="field">
        <single-field
          removable
          hide-label
          hide-placeholder
          .auth="${this.auth}"
          .entity="${this.entity}"
          .entities="${this.entities}"
          .field="${this.field}"
          .value="${e.value}"
          .errors="${this.errors}"
          @update-value="${this.updateItem(t)}"
          @remove-value="${this.removeItem(t)}"
        ></single-field>
      </td>
    </tr>
  `;requiredIndicator=e=>{const{valueRequired:t}=e||{};return t?r.dy`<i class="required"> *</i>`:null};renderFieldMap=e=>e&&e.length>0?r.dy`
          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              ${(e||[]).map(this.mapFields)}
            </tbody>
          </table>
        `:r.dy``;render(){const{value:e,field:t}=this,{label:i}=t||{};return r.dy`
      <fieldset>
        <legend>
          <label>
            ${i}${this.requiredIndicator(t)}
            <mv-button
              type="circle"
              class="small-button"
              @button-clicked="${this.addItem}"
            >
              <mv-fa icon="plus"></mv-fa>
            </mv-button>
          </label>
        </legend>
        ${this.renderFieldMap(e)}
      </fieldset>
    `}changeKey=e=>t=>{const{detail:{value:i}}=t;console.log("index: ",e),console.log("value: ",i)};addItem=e=>{const t=[...this.value,{key:null,value:null}];(0,s.uC)(e.target,{name:this.field.code,originalEvent:e,value:t})};removeItem=e=>t=>{const{target:i}=t,r=[...this.value.slice(0,e),...this.value.slice(e+1)];(0,s.uC)(i,{name:this.field.code,validateGroup:!0,originalEvent:t,value:r})};updateItem=e=>t=>{const{detail:i}=t,r=this.value[e],a=[...this.value.slice(0,e),{...r,value:i.value},...this.value.slice(e+1)];(0,s.uC)(i.originalEvent.target,{name:this.field.code,validateGroup:!0,originalEvent:t,value:a})}}customElements.define("map-field",u);class m extends r.oi{static get properties(){return{auth:{type:Object,attribute:!1},entity:{type:Object,attribute:!1},entities:{type:Object,attribute:!1},field:{type:Object,attribute:!1},errors:{type:Array,attribute:!1},value:{type:Array,attribute:!1}}}static get styles(){return r.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      mv-container {
        --mv-container-min-width: 620px;
        --mv-container-max-width: 620px;
        --mv-container-margin: 50px auto;
        --mv-container-padding: 20px 30px;
      }

      mv-container.location {
        --mv-container-min-width: 560px;
        --mv-container-max-width: 620px;
        --mv-container-margin: 0;
        --mv-container-padding: 20px 30px;
      }

      textarea {
        width: 80%;
        min-height: 50px;
        border: 1px solid black;
        margin: 0;
        padding: 5px;
        border-radius: 5px;
        resize: none;
      }

      button,
      label {
        font-size: 1em;
        font-weight: bold;
        color: #4e686d;
      }

      label .required {
        font-style: normal;
        color: #ff0000;
      }

      fieldset {
        margin: 0 auto 10px auto;
        border-radius: 5px;
      }

      .inline-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
      }

      .small-button {
        --mv-button-circle-button-size: 28px;
      }
    `}constructor(){super(),this.field={},this.value=[],this.entity=null,this.entities={}}render(){const{field:e}=this,{label:t}=e||{};return r.dy`
      <fieldset>
        <legend>
          <label>
            ${t}${this.valueRequired(e)}
            <mv-button
              type="circle"
              class="small-button"
              @button-clicked="${this.addItem}"
            >
              <mv-fa icon="plus"></mv-fa>
            </mv-button>
          </label>
        </legend>
        ${this.renderFields()}
      </fieldset>
    `}renderRequired=({valueRequired:e})=>e?r.dy`<i class="required"> *</i>`:null;renderFields=()=>(this.value||[]).map(((e,t)=>r.dy`
        <single-field
          removable
          hide-label
          .auth="${this.auth}"
          .entity="${this.entity}"
          .entities="${this.entities}"
          .field="${this.field}"
          .value="${e}"
          .errors="${this.errors}"
          @update-value="${this.updateItem(t)}"
          @remove-value="${this.removeItem(t)}"
        ></single-field>
      `));addItem=e=>{const t=[...this.value,null];(0,s.uC)(e.target,{name:this.field.code,originalEvent:e,value:t})};removeItem=e=>t=>{const{target:i}=t,r=[...this.value.slice(0,e),...this.value.slice(e+1)];(0,s.uC)(i,{name:this.field.code,validateGroup:!0,originalEvent:t,value:r})};updateItem=e=>t=>{const{detail:i}=t,r=[...this.value.slice(0,e),i.value,...this.value.slice(e+1)];(0,s.uC)(i.originalEvent.target,{name:this.field.code,validateGroup:!0,originalEvent:t,value:r})}}customElements.define("matrix-field",m);class p extends r.oi{static get properties(){return{auth:{type:Object,attribute:!1},entity:{type:Object,attribute:!1},entities:{type:Object,attribute:!1},field:{type:Object,attribute:!1},value:{type:Object,attribute:!1},errors:{type:Array,attribute:!1}}}static get styles(){return r.iv``}render(){const{auth:e,entity:t,entities:i,field:s,value:a,errors:l}=this;switch(s.storageType){case"SINGLE":return r.dy`
          <single-field
            .auth=${e}
            .entity="${t}"
            .entities="${i}"
            .field="${s}"
            .value="${a}"
            .errors="${l}"
            @update-value="${this.updateValue}"
          ></single-field>
        `;case"LIST":return r.dy`
          <array-field
            .auth=${e}
            .entity="${t}"
            .entities="${i}"
            .field="${s}"
            .value="${a}"
            .errors="${l}"
          ></array-field>
        `;case"MAP":return r.dy`
          <map-field
            .auth=${e}
            .entity="${t}"
            .entities="${i}"
            .field="${s}"
            .value="${a}"
            .errors="${l}"
          ></map-field>
        `;case"MATRIX":return r.dy`
          <matrix-field
            .auth=${e}
            .entity="${t}"
            .entities="${i}"
            .field="${s}"
            .value="${a}"
            .errors="${l}"
          ></matrix-field>
        `;default:return console.error("Unsupported field: ",s),r.dy`
          <div>
            <div>Field: ${s.code}</div>
            <div>Field Type: ${s.fieldType}</div>
            <div>Storage Type: ${s.storageType}</div>
          </div>
        `}}updateValue=e=>{const{code:t}=this.field;(0,s.uC)(e.target,{...e.detail,name:t,originalEvent:e})}}customElements.define("form-field",p)},9726:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(5862),s=i(6644),a=i(1696),l=i(3790),n=i(6786),o=i(7291);i(2542),i(3110),i(6587),i(2332),i(4397),i(7389),i(7231),i(5632);class d extends o.a{static get properties(){return{auth:{type:Object,attribute:!1},entity:{type:Object,attribute:!1},entities:{type:Object,attribute:!1},permissions:{type:Object,attribute:!1},errors:{type:Array,attribute:!1},dialog:{type:Object,attribute:!1}}}static get styles(){return r.iv`
      .form-grid {
        display: flex;
        flex-direction: column;
      }

      .form-content {
        width: 100%;
      }

      .dialog-size {
        --mv-dialog-width: 500px;
        --mv-dialog-max-height: 300px;
      }
    `}constructor(){super(),this.config=s,this.auth=null,this.dialog={...l.kZ}}render(){const{schema:e,refSchemas:t,formFields:i}=this.entity,s=(i||[]).length>1;return r.dy`
      <div>
        <div class="form-container">
          <mv-form
            .store="${this.store}"
            .schema="${e}"
            .refSchemas="${t}"
          >
            <div class="form-content">
              ${s?this.renderGroup(i,e):i&&this.renderFields(i[0],e)}

              <div class="button-grid">
                <mv-button
                  @button-clicked="${this.clearAll}"
                  button-style="info"
                >
                  <mv-fa icon="undo"></mv-fa>Clear
                </mv-button>
                <mv-button
                  @button-clicked="${this.cancel}"
                  button-style="cancel"
                >
                  <mv-fa icon="ban"></mv-fa>Cancel
                </mv-button>
                <mv-button @button-clicked="${this.save}">
                  <mv-fa icon="save"></mv-fa>Save
                </mv-button>
              </div>
            </div>
          </mv-form>
        </div>
      </div>
      <mv-dialog
        class="dialog-size"
        header-label="${this.dialog.title}"
        ?open="${this.dialog.open}"
        @close-dialog="${this.closeDialog}"
        no-left-button
        closeable
      >
        <p>${this.dialog.message}</p>
        <span slot="footer">
          <mv-button @button-clicked="${this.closeDialog}"> Close </mv-button>
        </span>
      </mv-dialog>
    `}renderTabGroup=e=>t=>{const i=(0,l.sl)(t.label);return r.dy`
      <mv-tab tab key="${i}">${t.label}</mv-tab>
      <mv-tab content key="${i}">
        ${this.renderFields(t,e)}
      </mv-tab>
    `};renderGroup=(e,t)=>r.dy`
      <mv-tab group type="rounded">
        ${(e||[]).map(this.renderTabGroup(t))}
      </mv-tab>
    `;renderField=e=>t=>{const i=this[t.code],{properties:s={}}=e||{},a=s[t.code]||{};return r.dy`
      <form-field
        .auth="${this.auth}"
        .entity="${this.entity}"
        .entities="${this.entities}"
        .field="${t}"
        .schemaProp="${a}"
        .value="${i}"
        .errors="${this.errors}"
      ></form-field>
    `};renderFields=(e,t)=>r.dy`
    <div class="form-grid">
      ${(e.fields||[]).map(this.renderField(t))}
    </div>
  `;connectedCallback(){super.connectedCallback(),this.addEventListener("update-errors",this.handleFieldErrors),this.addEventListener("clear-errors",this.clearErrors),this.store.resetState(!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("update-errors",this.handleFieldErrors),this.removeEventListener("clear-errors",this.clearErrors)}cancelCallback=e=>{this.dispatchEvent(e)};successCallback=e=>{this.dispatchEvent(e)};failCallback=e=>{this.dispatchEvent(e)};clearAll=()=>{this.clearErrors();const e=this.renderRoot.querySelector("mv-form");(0,a.ou)()({target:e})};clearErrors=()=>{this.errors=null};handleFieldErrors=e=>{this.errors=e.detail.errors};save=()=>{const{store:e,entity:t}=this,i=(0,a.Gu)(t.schema,e.state,null,null,t.refSchemas);if(i&&Object.keys(i).some((e=>!!i[e])))this.errors=i,console.error("errors :",i);else{const i=e.state;(0,n.z)(t).NEW.executeApiCall({config:s,token:this.auth.token,...i},this.submitSuccess,this.submitFailed)}};cancel=()=>{this.clearAll(),this.cancelCallback(new CustomEvent("cancel"))};submitSuccess=e=>{const{detail:t}=e;this.dialog={status:"success",title:"Success",message:r.dy`<span>Item saved.</span>`,open:!0,detail:t}};submitFailed=e=>{const{detail:{error:t}}=e;console.error("error: ",t);let i=null;const{name:s,message:a}=t;if(Array.isArray(a)){const[e,s]=t;i=r.dy`
        <span>${e}</span><br />
        <small>${s}</small>
      `}else i=r.dy`<span>${t}</span>`;this.dialog={status:"fail",title:s||"Error",message:i,open:!0},this.failCallback(new CustomEvent("failed",{detail:{error:t}}))};closeDialog=()=>{const{status:e,detail:t}=this.dialog;this.dialog={...l.kZ},"success"===e&&(this.clearAll(),this.successCallback(new CustomEvent("submitted",{detail:t})))}}customElements.define("new-content",d)},1820:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(5862),s=i(6644),a=i(1696),l=i(3790),n=i(6786),o=(i(2542),i(3110),i(9838),i(6587),i(2332),i(4397),i(7389),i(7231),i(5632),i(7291));class d extends o.a{static get properties(){return{auth:{type:Object,attribute:!1},entity:{type:Object,attribute:!1},entities:{type:Object,attribute:!1},permissions:{type:Object,attribute:!1},errors:{type:Array,attribute:!1},parameters:{type:Object,attribute:!1},formValues:{type:Object,attribute:!1},schema:{type:Object,attribute:!1},refSchemas:{type:Array,attribute:!1},dialog:{type:Object,attribute:!1},fields:{type:Array,attribute:!1}}}static get styles(){return r.iv`
      mv-dropdown {
        --mv-dropdown-trigger-height: 4rem;
      }

      ul {
        padding: 0;
        margin: 0.3rem 0;
      }

      li {
        display: block;
        width: calc(100% - 2rem);
        padding: 1rem;
        white-space: nowrap;
        cursor: pointer;
      }

      li:hover {
        list-style: none;
        display: block;
        background: #1d9bc9;
        color: #ffffff;
      }

      .action-section {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
      }

      .form-grid {
        display: flex;
        flex-direction: column;
      }

      .form-content {
        width: 100%;
      }

      .dialog-size {
        --mv-dialog-width: 500px;
        --mv-dialog-max-height: 300px;
      }
    `}constructor(){super(),this.auth=null,this.dialog={...l.kZ},this.fields=[],this.config=s}render(){const{schema:e,refSchemas:t,formFields:i,actions:s}=this.entity,a=(i||[]).length>1,l=s.filter((e=>e.applicableToEntityInstance));return r.dy`
      <div>
        <mv-form
          .store="${this.store}"
          .schema="${e}"
          .refSchemas="${t}"
        >
          <div class="form-content">
            ${a?this.renderGroup(i,e):i&&this.renderFields(i[0],e)}

            <div class="action-section">
              <div class="standard-actions">
                <mv-button
                  @button-clicked="${this.clearAll}"
                  button-style="info"
                >
                  <mv-fa icon="undo"></mv-fa>Clear
                </mv-button>
                <mv-button
                  @button-clicked="${this.cancel}"
                  button-style="cancel"
                >
                  <mv-fa icon="ban"></mv-fa>Cancel
                </mv-button>
                <mv-button @button-clicked="${this.save}">
                  <mv-fa icon="save"></mv-fa>Save
                </mv-button>
              </div>
              <div class="custom-actions">
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
                      ${this.renderActions(l)}
                    </ul>
                  </mv-dropdown>
                </mv-dropdown>
              </div>
            </div>
          </div>
        </mv-form>
      </div>
      <mv-dialog
        class="dialog-size"
        header-label="${this.dialog.title}"
        ?open="${this.dialog.open}"
        ?closeable="${this.dialog.closable}"
        ?no-right-button="${this.dialog.noButtons}"
        @close-dialog="${this.closeDialog}"
        no-left-button
      >
        <p>${this.dialog.message}</p>
        <span slot="footer">
          <mv-button @button-clicked="${this.closeDialog}">Close</mv-button>
        </span>
      </mv-dialog>
    `}renderActions=e=>e.map((e=>r.dy`
        <li @click="${this.runAction(e)}">${e.label}</li>
      `));renderTabGroup=e=>t=>{const i=(0,l.sl)(t.label);return r.dy`
      <mv-tab tab key="${i}">${t.label}</mv-tab>
      <mv-tab content key="${i}">
        ${this.renderFields(t,e)}
      </mv-tab>
    `};renderGroup=(e,t)=>r.dy`
      <mv-tab group type="rounded">
        ${(e||[]).map(this.renderTabGroup(t))}
      </mv-tab>
    `;renderField=e=>t=>{const i=this[t.code],{properties:s={}}=e||{},a=s[t.code]||{};return r.dy`
      <form-field
        .auth="${this.auth}"
        .entity="${this.entity}"
        .entities="${this.entities}"
        .field="${t}"
        .schemaProp="${a}"
        .value="${i}"
        .errors="${this.errors}"
      ></form-field>
    `};renderFields=(e,t)=>r.dy`
    <div class="form-grid">
      ${(e.fields||[]).map(this.renderField(t))}
    </div>
  `;connectedCallback(){super.connectedCallback(),this.addEventListener("update-errors",this.handleFieldErrors),this.addEventListener("clear-errors",this.clearErrors);const{formFields:e}=this.entity;this.fields=e.reduce(((e,t)=>[...e,...t.fields]),[]),this.store.resetState(!0),this.loadFormData()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("update-errors",this.handleFieldErrors),this.removeEventListener("clear-errors",this.clearErrors)}cancelCallback=e=>{this.dispatchEvent(e)};successCallback=e=>{this.dispatchEvent(e)};failCallback=e=>{this.dispatchEvent(e)};clearAll=()=>{this.clearErrors();const e=this.renderRoot.querySelector("mv-form");(0,a.ou)()({target:e})};loadFormData=()=>{const{entity:e,parameters:t,formValues:i}=this,{pathParameters:r}=t||{},{id:a}=r||{},l=(0,n.z)(e).DETAIL,o=(i||{}).uuid||a;l.executeApiCall({config:s,token:this.auth.token,uuid:o},this.detailRetrieved,this.handleErrors)};detailRetrieved=e=>{const{detail:{result:t}}=e,{schema:i}=this.entity,{properties:r}=i;Object.getOwnPropertyNames(r).forEach((e=>{const i=this.fields.find((t=>t.code===e)),r=t[e],s="DATE"===i.fieldType&&r?new Date(parseInt(r,10)):r;this.store.updateValue(e,s)}))};clearErrors=()=>{this.errors=null};handleErrors=e=>{const{detail:{error:t}}=e;console.error("error: ",t);const{name:i,message:s}=t;let a=null;if(Array.isArray(s)){const[e,t]=s;a=r.dy`
        <span>${e}</span><br />
        <small>${t}</small>
      `}else a=r.dy`<span>${s}</span>`;this.dialog={title:i||"Error",message:a,open:!0}};handleFieldErrors=e=>{this.errors=e.detail.errors};save=()=>{const{store:e,entity:t}=this,i=(0,a.Gu)(t.schema,e.state,null,null,t.refSchemas);if(i&&Object.keys(i).some((e=>!!i[e])))this.errors=i,console.error("errors :",i);else{const{parameters:i}=this,{pathParameters:r={}}=i||{},{id:a}=r,l=e.state,o=(0,n.z)(t).UPDATE,d=this.uuid||a;o.executeApiCall({token:this.auth.token,config:s,uuid:d,...l},this.submitSuccess,this.submitFailed)}};cancel=()=>{this.clearAll(),this.cancelCallback(new CustomEvent("cancel"))};submitSuccess=e=>{const{detail:t}=e;this.dialog={title:"Success",message:r.dy`<span>Item updated.</span>`,open:!0},this.successCallback(new CustomEvent("submitted",{detail:t}))};submitFailed=e=>{const{detail:{error:t}}=e;console.error("error: ",t);const{name:i,message:[s,a]}=t;this.dialog={title:i,message:r.dy`<span>${s}</span><br /><small>${a}</small>`,open:!0},this.failCallback(new CustomEvent("failed",{detail:{error:t}}))};closeDialog=()=>{this.dialog={...l.kZ}};actionSuccess=e=>()=>{this.dialog={title:"Action Success",message:r.dy`<span>${e.label} successfully executed.</span>`,open:!0}};showLoader=e=>{this.dialog={title:"Loading",message:r.dy`
        <div class="action-loader">
          <div class="message">Invoking ${e.label} action.</div>
          <mv-fa icon="spinner" icon-props="fa-2x fa-pulse"></mv-fa>
        </div>
      `,open:!0,closable:!1,noButtons:!0}};runAction=e=>()=>{this.showLoader(e);const{entity:t,parameters:i,formValues:r}=this,{pathParameters:a}=i||{},{id:l}=a||{},o=(0,n.z)(t).CUSTOM_ACTION,d=(r||{}).uuid||l;o.executeApiCall({token:this.auth.token,config:s,actionCode:e.code,runWith:{entities:[{code:this.entity.code,uuid:d}]}},this.actionSuccess(e),this.handleErrors)}}customElements.define("update-content",d)}}]);