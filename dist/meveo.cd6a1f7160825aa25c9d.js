"use strict";(self.webpackChunkmv_template=self.webpackChunkmv_template||[]).push([[512],{2542:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{visible:{type:Boolean,attribute:!0},selected:{type:Boolean,attribute:!0},disabled:{type:Boolean,attribute:!0},type:{type:String,attribute:!0},"button-style":{type:String,attribute:!0},fill:{type:String,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        --font-size: var(--mv-button-font-size, 1rem);
        --circle-button-size: var(--mv-button-circle-button-size, 55px);
        --button-margin: var(--mv-button-margin, 5px);
        --button-padding: var(--mv-button-padding, 10px 30px);
        --button-min-width: var(--mv-button-min-width, 120px);
        --button-max-width: var(--mv-button-max-width);
        --button-width: var(--mv-button-width);
        --rounded-radius: var(--mv-button-rounded-radius, 50px);
        --color: var(--mv-button-color, #ffffff);
        --button-color: var(--mv-button-custom-color);
        --button-hover-color: var(--mv-button-hover-custom-color)
        --hover-color: var(--mv-button-custom-hover-color);
      }
      button {
        font-family: var(--font-family, Arial);
        min-width: var(--button-min-width);
        max-width: var(--button-max-width);
        width: var(--button-width);
        font-size: var(--font-size);
        margin: var(--button-margin);
      }
      button.success:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: #bbbfce !important;
      }
      button.error:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: #bbbfce !important;
      }
      button.info:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: #bbbfce !important;
      }
      button.cancel:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color:  #bbbfce !important;
        border-color: #bbbfce !important;
      }
      button:focus {
        outline: none;
      }
      button:hover:not([disabled]) {
        cursor: pointer;
      }
      button.circle {
        min-width: var(--circle-button-size);
        max-width: var(--button-max-width);
        width: var(--button-width);
        height: var(--circle-button-size);
        background-color: var(--mv-button-circle-background, #eaebf0);
        color: var(--mv-button-circle-color, #80828c);
        border-radius: 50%;
        box-shadow: unset;
        border: none;
      }
      button.circle:hover:not([disabled]) {
        cursor: pointer;
        color: var(--button-hover-color, #1d9bc9);
        border: var(--mv-button-border,1px solid var(--button-color, #1d9bc9));
        background-color: var(--mv-button-custom-hover-color, #ffffff);
        box-shadow: var(--mv-button-box-shadow,
          inset 0px 0px 9px 0px rgba(29, 155, 201, 0.3)
          );
      }
      button.circle.selected,
      button.circle.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #008fc3);
        box-shadow: 0px 0px 10px 0px rgba(0, 143, 195, 0.6);
        z-index: 100;
      }
      button.circle:disabled {
        background-color: var(--mv-button-circle-background, #eaebf0);
        color: #cacbd2;
        z-index: 100;
      }
      button.default {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
      }
      button.default.success {
        color: var(--color);
        border-color: var(--button-color, #54ca95);
        background-color: var(--button-color, #54ca95);
      }
      button.default.success:hover:not([disabled]) {
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.default.error {
        color: #ffffff;
        border-color: var(--button-color, #dd5c55);
        background-color: var(--button-color, #dd5c55);
      }
      button.default.error:hover:not([disabled]) {
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.default.info {
        color: #ffffff;
        border-color: var(--button-color, #3999c1);
        background-color: var(--button-color, #3999c1);
      }
      button.default.info:hover:not([disabled]) {
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.default.cancel {
        color: #ffffff;
        border-color: var(--button-color, #bbbfce);
        background-color: var(--button-color, #bbbfce);
      }
      button.default.cancel:hover:not([disabled]) {
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
      button.outline {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
        background: transparent;
      }
      button.outline.success {
        color: var(--button-color, #54ca95);
        border-color: var(--button-color, #54ca95);
      }
      button.outline.success:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.outline.error {
        color: var(--button-color, #dd5c55);
        border-color: var(--button-color, #dd5c55);
      }
      button.outline.error:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.outline.info {
        color: var(--button-color, #3999c1);
        border-color: var(--button-color, #3999c1);
      }
      button.outline.info:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.outline.cancel {
        color: var(--button-color, #bbbfce);
        border-color: var(--button-color, #bbbfce);
      }
      button.outline.cancel:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
      button.outline.success.selected,
      button.outline.success.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #0ca361);
      }
      button.outline.error.selected,
      button.outline.error.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #e71919);
      }
      button.outline.info.selected,
      button.outline.info.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #3999c1);
      }
      button.outline.cancel.selected,
      button.outline.cancel.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #9297a6);
      }
      button.rounded {
        border-width: 1px;
        border-style: solid;
        border-radius: var(--rounded-radius);
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
        background: transparent;
      }
      button.rounded.success {
        color: var(--button-color, #54ca95);
        border-color: var(--button-color, #54ca95);
      }
      button.rounded.success:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.rounded.error {
        color: var(--button-color, #dd5c55);
        border-color: var(--button-color, #dd5c55);
      }
      button.rounded.error:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.rounded.info {
        color: var(--button-color, #3999c1);
        border-color: var(--button-color, #3999c1);
      }
      button.rounded.info:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.rounded.cancel {
        color: var(--button-color, #bbbfce);
        border-color: var(--button-color, #bbbfce);
      }
      button.rounded.cancel:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
    `}constructor(){super(),this.visible=!0,this.selected=!1,this.disabled=!1,this.type="default",this["button-style"]="success",this.theme="light"}render(){const e="round"!==this.type?` ${this["button-style"]}`:"",t=this.selected?" selected":"",r=`${this.type}${e}${t}`;return this.visible?o.dy`
          <button
            class="${r} ${this.theme}"
            @click="${this.handleClick}"
            ?disabled="${this.disabled}"
          >
            <slot> </slot>
          </button>
        `:o.dy``}handleClick=()=>{this.dispatchEvent(new CustomEvent("button-clicked"))}}customElements.define("mv-button",a)},9605:(e,t,r)=>{var o=r(5862),a=r(4953);const n=["January","February","March","April","May","June","July","August","September","October","November","December"],i=(()=>{let e=[...n],t=[];for(;e.length;)t.push(e.splice(0,3));return t})();class s extends o.oi{static get properties(){return{visible:{type:Object,attribute:!1,reflect:!0},selected:{type:Object,attribute:!1,reflect:!0}}}static get styles(){return o.iv`
      :host {
        color: var(--theme-text-color);
        background: var(--theme-background);
        font-family: var(--font-family);
        --font-size: var(--font-size-m, 1rem);
        --day-hover: var(--mv-calendar-day-hover, #666666);
        --day-hover-color: var(--mv-calendar-day-hover-color, #ffffff);
        --today-color: var(--theme-today-color, #3d3d3d);
        --today-background: var(--theme-today-background, #ededed);
        --cell-size: calc(var(--font-size) * 2);
        --shadow-offset: calc(var(--font-size) * 0.04);
        --active-color: var(--mv-calendar-active-color, #ffffff);
        --active-background: var(
          --mv-calendar-active-background,
          linear-gradient(to right, #007adf 0%, #00ecbc 180%)
        );
        --table-padding: var(--month-table-padding, 0);
      }

      button {
        font-family: var(--font-family);
        font-size: var(--font-size);
        display: inline-block;
        border: none;
        text-decoration: none;
        background: transparent;
        color: var(--theme-text-color);
        text-transform: none;
        cursor: pointer;
        text-align: center;
        padding: 5px;
        margin: 5px auto;
        border-radius: 5px;
        font-weight: 500;
        width: 100%;
        outline: none;
      }

      button:hover {
        background-color: var(--hover-background-color, #666);
        color: #ffffff;
      }

      td {
        padding: 0;
        margin: 0;
      }

      .month-container {
        max-width: calc(100% - 4px);
      }

      .month-table {
        border-spacing: 3px;
        border-collapse: separate;
        margin: 0 0 4px 3px;
      }

      button.now {
        font-weight: bold;
        color: var(--today-color);
        background-color: var(--today-background);
      }

      button.selected {
        background: var(--active-background);
        color: var(--active-color);
      }
    `}constructor(){super(),this.selected={...a.$5},this.visible={...a.Kp}}render(){const e=this.selected.month;return o.dy`
      <div class="month-container">
        <table class="month-table">
          <tbody>
            ${i.map(((t,r)=>o.dy`
                <tr>
                  ${t.map(((t,n)=>{const i=3*r+n,s=i===e?"selected":"",l=i===a.Kp.month?" now":"";return o.dy`<td>
                      <button
                        class="${s}${l}"
                        @click="${this.selectMonth(i)}"
                      >
                        ${t}
                      </button>
                    </td>`}))}
                </tr>
              `))}
          </tbody>
        </table>
      </div>
    `}selectMonth=e=>()=>{this.dispatchEvent(new CustomEvent("select-month",{detail:{month:e}}))}}customElements.define("month-table",s);r(7277),r(4228),r(9838);class l extends o.oi{static get properties(){return{theme:{type:String},justify:{type:String},placeholder:{type:String},position:{type:String},pattern:{type:String},rounded:{type:Boolean},visible:{type:Object,attribute:!1,reflect:!0},selected:{type:Object,attribute:!0,reflect:!0},minYear:{type:Number,attribute:"min-year",reflect:!0},maxYear:{type:Number,attribute:"max-year",reflect:!0},hasError:{type:Boolean,attribute:"has-error",reflect:!0},inputValue:{type:String,attribute:!1,reflect:!0},patternRegex:{type:String,attribute:"pattern-regex",reflect:!0},patternMatcher:{type:String,attribute:"pattern-matcher",reflect:!0},allowPartial:{type:Boolean,attribute:"allow-partial",reflect:!0},noClearButton:{type:Boolean,attribute:"no-clear-button",reflect:!0}}}static get styles(){return o.iv`
      :host {
        --font-size: var(--font-size-m, 1rem);
        --width: calc(var(--font-size) * 16);
        --mv-dropdown-trigger-height: calc(var(--font-size) + 32px);
        --mv-dropdown-min-width: calc(var(--width) + 4px);
        --mv-dropdown-max-width: calc(var(--width) + 4px);
        --mv-dropdown-content-max-height: auto;
      }

      mv-input > button {
        background: transparent;
        border: none;
        padding: 0;
        margin: 0 var(--font-size-m) 0 0;
        height: 100%;
        outline: none;
        color: #777;
        cursor: pointer;
      }

      .clear-button {
        font-size: var(--font-size-m);
      }
    `}constructor(){super(),this.visible=new Date,this.theme="light",this.justify="left",this.position="bottom",this.allowPartial=!1,this.inputValue="",this.pattern="MM/DD/YYYY",this.patternMatcher="MDY",this.patternRegex="\\d",this.noClearButton=!1,this.rounded=!1}render(){const{theme:e,selected:t,allowPartial:r,pattern:a,inputValue:n,hasError:i}=this,s=this.parseInput(t,r,a),l=s.patternMatcher||this.patternMatcher,c=s.patternRegex||this.patternRegex,d=this.placeholder||s.pattern,f=s.value,h=i&&n||"";return o.dy`
      <mv-input
        .theme="${e}"
        value="${f||h}"
        placeholder="${d}"
        pattern="${s.pattern}"
        pattern-matcher="${l}"
        pattern-regex="${c}"
        ?rounded="${this.rounded}"
        ?has-error="${this.hasError}"
        @input-change="${this.updateEnteredValue}"
      >
        ${this.noClearButton?o.dy``:o.dy`
              <button
                slot="suffix"
                class="clear-button"
                @click="${this.clearSelectedDate}"
              >
                &times;
              </button>
            `}
      </mv-input>
    `}attributeChangedCallback(e,t,r){if("selected"===e){const e=this.parseInput(r,this.allowPartial,this.pattern);this.inputValue=e.value}super.attributeChangedCallback(e,t,r)}dispatchUpdates=e=>{const{visible:t}=this;this.dispatchEvent(new CustomEvent("select-date",{detail:{selected:e,visible:t}}))};clearSelectedDate=()=>{this.inputValue="",this.hasError=!1,this.dispatchUpdates({...a.$5})};validateDate=({year:e,month:t,day:r})=>{const o=!!e,a=!!t||0===t,n=!!r;return{hasYearOnly:o&&!a&&!n,hasYearAndMonthOnly:o&&a&&!n,hasFullDate:o&&a&&n}};parseInput=(e,t,r)=>{const{date:o,year:a,month:n,day:i}=e,s=!!a,l=!!n||0===n,c=!!i,d=s&&l&&c,f=s&&!l&&!c,h=s&&l&&!c,u={};let b=o;return!!o||(f?(b=new Date,b.setFullYear(a)):b=h?new Date(a,n):d?new Date(a,n,i):null),u.pattern=r,t&&(u.patternMatcher="MDY",u.patternRegex="\\d",u.pattern=f?"YYYY":h?"YYYY/MM":"YYYY/MM/DD"),u.value=b?moment(b.getTime()).format(u.pattern):"",u};normalizeInput=e=>{if(this.allowPartial){const t=e.split("/")||[],[r,o,a]=t.map((e=>Number(e)));return{year:r,month:o,day:a}}{const t=moment(e,this.pattern,!0);return t.isValid()?{year:t.year(),month:t.month()+1,day:t.date()}:{...a.$5}}};updateEnteredValue=e=>{const{detail:{value:t}}=e;this.hasError=!1,this.inputValue=t;if(!!t){const{year:e,month:r,day:o}=this.normalizeInput(t),n=!!e&&!isNaN(e),i=n&&!(void 0!==this.minYear&&e<this.minYear),s=n&&!(void 0!==this.maxYear&&e>this.maxYear),l=n&&i&&s,c=!!r&&!isNaN(r)&&r>0&&r<13,d=!!o&&!isNaN(o),f=l&&c&&new Date(e,r,0).getDate()||0,h=d&&o>0&&o<f;this.hasError=!(l&&c&&h);const u={year:e,month:r-1,day:o},b=this.validateDate(u),{hasFullDate:p,hasYearOnly:m,hasYearAndMonthOnly:v}=b,g=p&&l&&c&&h||v&&l&&c||m&&l;if(this.hasError=!g,g){const e=(0,a.kX)(u);this.visible={...this.visible,...e},p&&(u.date=new Date(u.year,u.month,u.day)),this.dispatchUpdates({...a.$5,...e})}else this.dispatchUpdates({...a.$5})}}}customElements.define("calendar-input",l);class c extends o.oi{static get properties(){return{visible:{type:Object,reflect:!0},selected:{type:Object,reflect:!0},range:{type:Object,reflect:!0},weekDays:{type:Array,attribute:"week-days",reflect:!0},mondayFirst:{type:Boolean,attribute:"monday-first",reflect:!0},calendarDates:{type:Array,attribute:!1},currentDate:{type:String,attribute:!1}}}static get styles(){return o.iv`
      :host {
        color: var(--theme-text-color);
        background: var(--theme-background);
        font-family: var(--font-family);
        --font-size: var(--font-size-m, 1rem);
        --day-hover: var(--mv-calendar-day-hover, #666666);
        --day-hover-color: var(--mv-calendar-day-hover-color, #ffffff);
        --today-color: var(--theme-today-color, #3d3d3d);
        --today-background: var(--theme-today-background, #ededed);
        --cell-size: calc(var(--font-size) * 2);
        --shadow-offset: calc(var(--font-size) * 0.04);
        --active-color: var(--mv-calendar-active-color, #ffffff);
        --active-background: var(
          --mv-calendar-active-background,
          linear-gradient(to right, #007adf 0%, #00ecbc 180%)
        );
      }

      td {
        padding: 0;
        margin: 0;
        height: var(--cell-size);
        width: var(--cell-size);
      }

      .month-container {
        display: flex;
        justify-content: center;
      }

      .calendar-table {
        margin: 0;
      }

      .day {
        font-family: var(--font-family);
        font-size: var(--font-size);
        margin: 0;
        padding: 0;
        text-align: center;
        cursor: default;
        height: var(--cell-size);
        width: var(--cell-size);
        border-radius: 50%;
      }

      .day.button {
        cursor: pointer;
        text-align: center;
      }

      .day.button.today {
        font-weight: bold;
        color: var(--today-color);
        background-color: var(--today-background);
      }

      .day.button:hover {
        background: var(--day-hover);
        color: var(--day-hover-color);
      }

      .day.button.selected {
        background: var(--active-background);
        color: var(--active-color);
      }
    `}constructor(){super(),this.mondayFirst=!1,this.selected={...a.$5},this.visible={...a.Kp}}render(){return o.dy`
      <div class="month-container">
        <table class="calendar-table">
          <thead>
            <tr>
              ${(this.weekDays||[]).map((e=>o.dy`<td class="day">${e}</td>`))}
            </tr>
          </thead>
          <tbody>
            ${(this.calendarDates||[]).map((e=>o.dy`
                <tr>
                  ${e.map((e=>{const t=((e,t)=>`day${(0,a.xb)(e)?"":" button"}${(0,a.Xy)(e,a.Kp)?" today":""}${(0,a.Xy)(e,t)?" selected":""}`)(e,this.selected);return o.dy`
                      <td
                        class="${t}"
                        @click="${this.selectDate(e)}"
                      >
                        ${e.day}
                      </td>
                    `}))}
                </tr>
              `))}
          </tbody>
        </table>
      </div>
    `}attributeChangedCallback(e,t,r){"visible"===e&&this.initializeCalendarTable(),super.attributeChangedCallback(e,t,r)}initializeCalendarTable=()=>{this.visible=(0,a.xb)(this.visible)?{...a.Kp}:this.visible;const e=this.visible.year,t=this.visible.month,r=this.visible.month+1,o=new Date(e,r,0).getDate(),n=this.mondayFirst?-1:0,i=new Date(e,t,1).getDay()+n,s=new Date(e,t,o).getDay()+n,l=i<0?6:i,c=s<0?6:s;this.calendarDates=[];const d=l>0?(0,a.g_)({year:e,month:t,offset:1,limit:7-l,padding:l,prefix:!0}):[],f=c<6?(0,a.g_)({year:e,month:t,offset:o-c,limit:c+1,padding:6-c,prefix:!1}):[],h=d.length<1,u=f.length<1,b=h?1:8-l,p=o-b-(u?0:c+1)+1,m=(0,a.g_)({year:e,month:t,offset:b,limit:p});h||this.calendarDates.push(d),this.calendarDates.push(...m),u||this.calendarDates.push(f),this.weekDays=this.weekDays||(this.mondayFirst?a.hg:a.Ls),this.requestUpdate()};selectDate=e=>()=>{if(!(0,a.xb)(e)){const t=(0,a.Xy)(e,this.selected)?{...a.$5}:e;this.dispatchEvent(new CustomEvent("select-date",{detail:{...t}}))}}}customElements.define("calendar-table",c);class d extends o.oi{static get properties(){return{visible:{type:Object,attribute:!1,reflect:!0},selected:{type:Object,attribute:!1,reflect:!0},minYear:{type:Number,attribute:"min-year",reflect:!0},maxYear:{type:Number,attribute:"max-year",reflect:!0},yearIndex:{type:Number,attribute:!1,reflect:!0}}}static get styles(){return o.iv`
      :host {
        color: var(--theme-text-color);
        background: var(--theme-background);
        font-family: var(--font-family);
        --font-size: var(--font-size-m, 1rem);
        --day-hover: var(--mv-calendar-day-hover, #666666);
        --day-hover-color: var(--mv-calendar-day-hover-color, #ffffff);
        --today-color: var(--theme-today-color, #3d3d3d);
        --today-background: var(--theme-today-background, #ededed);
        --cell-size: calc(var(--font-size) * 2);
        --shadow-offset: calc(var(--font-size) * 0.04);
        --active-color: var(--mv-calendar-active-color, #ffffff);
        --active-background: var(
          --mv-calendar-active-background,
          linear-gradient(to right, #007adf 0%, #00ecbc 180%)
        );
      }

      button {
        font-family: var(--font-family);
        font-size: var(--font-size);
        display: inline-block;
        border: none;
        text-decoration: none;
        background: transparent;
        color: var(--theme-text-color);
        text-transform: none;
        cursor: pointer;
        text-align: center;
        padding: 5px;
        margin: 5px auto;
        border-radius: 5px;
        font-weight: 500;
        width: 100%;
        outline: none;
      }

      button:hover {
        background-color: var(--hover-background-color, #666);
        color: #ffffff;
      }

      td {
        padding: 0;
        margin: 0;
      }

      .year-container {
        display: flex;
        justify-content: center;
      }

      .year-table {
        border-spacing: 4px;
        border-collapse: separate;
        margin: 0 0 4px 4px;
      }

      button.now {
        font-weight: bold;
        color: var(--today-color);
        background-color: var(--today-background);
      }

      button.selected {
        background: var(--active-background);
        color: var(--active-color);
      }

      button:disabled {
        color: var(--theme-disabled-text);
        background: var(--theme-background);
        cursor: not-allowed;
      }

      .navigation-text {
        text-align: center;
      }
    `}constructor(){super(),this.selected={...a.$5},this.visible={...a.Kp},this.yearIndex=0}render(){const e=this.selected.year,t=this.visible.year||a.Kp.year,r=(e||t)+this.yearIndex,n=r-7<=this.minYear,i=r+7>=this.maxYear;return o.dy`
      <div class="year-container">
        <table class="year-table">
          <tbody>
            ${(e=>{const t=Array.from({length:15},((t,r)=>e-7+r));let r=[];for(;t.length;)r.push(t.splice(0,5));return r})(r).map((t=>o.dy`
                <tr>
                  ${t.map((t=>{const r=t===e?"selected":"",n=t===a.Kp.year?" now":"",i=void 0!==this.minYear,s=void 0!==this.maxYear,l=i&&t<this.minYear,c=s&&t>this.maxYear,d=l||c?"disabled":"";return o.dy`
                      <td>
                        <button
                          class="${r}${n}"
                          ?disabled="${d}"
                          @click="${this.selectYear(t)}"
                        >
                          ${t}
                        </button>
                      </td>
                    `}))}
                </tr>
              `))}
            <tr>
              <td>
                <button
                  ?disabled="${n}"
                  @click="${this.navigateBack}"
                >
                  &#x25C1;
                </button>
              </td>
              <td class="navigation-text" colspan="3">
                <button @click="${this.selectYear(a.Kp.year)}">Now</button>
              </td>
              <td>
                <button
                  ?disabled="${i}"
                  @click="${this.navigateForward}"
                >
                  &#x25B7;
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `}navigateBack=()=>{this.yearIndex=this.yearIndex-15};navigateForward=()=>{this.yearIndex=this.yearIndex+15};selectYear=e=>()=>{this.yearIndex=0,this.dispatchEvent(new CustomEvent("select-year",{detail:{year:e}}))}}customElements.define("year-table",d);class f extends o.oi{static get properties(){return{name:{type:String},theme:{type:String},placeholder:{type:String},selected:{type:Object,attribute:!0,reflect:!0},visible:{type:Object,attribute:!1,reflect:!0},inputDate:{type:String,attribute:!1,reflect:!0},monthTableVisible:{type:Boolean,attribute:!1,reflect:!0},yearTableVisible:{type:Boolean,attribute:!1,reflect:!0},noBorder:{type:Boolean,attribute:"no-border",reflect:!0},inlineInput:{type:Boolean,attribute:"inline-input",reflect:!0},mondayFirst:{type:Boolean,attribute:"monday-first",reflect:!0},minYear:{type:Number,attribute:"min-year",reflect:!0},maxYear:{type:Number,attribute:"max-year",reflect:!0},hasError:{type:Boolean,attribute:"has-error",reflect:!0},pattern:{type:String},patternRegex:{type:String,attribute:"pattern-regex",reflect:!0},patternMatcher:{type:String,attribute:"pattern-matcher",reflect:!0},allowPartial:{type:Boolean,attribute:"allow-partial",reflect:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family);
        --font-size: var(--font-size-m, 1rem);
        --mv-container-padding: 10px;
        --mv-container-margin: 0;
      }

      .light {
        --theme-text-color: #000000;
        --theme-disabled-text: #ededed;
        --theme-background: #ffffff;
        --theme-today-color: #3d3d3d;
        --theme-today-background: #ededed;
      }

      .dark {
        --theme-text-color: #ffffff;
        --theme-disabled-text: #666666;
        --theme-background: #373e48;
        --theme-today-color: #cccccc;
        --theme-today-background: #6d6d6d;
      }

      .mv-calendar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 1px 3px 3px;
      }

      .year-month-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .year-month-container * {
        margin: 2px;
      }

      .current-month,
      .current-year {
        font-family: var(--font-family);
        font-size: var(--font-size);
        display: inline-block;
        border: none;
        text-decoration: none;
        background: transparent;
        color: var(--theme-text-color);
        text-transform: none;
        cursor: pointer;
        text-align: center;
        padding: 5px;
        margin: 5px auto;
        border-radius: 5px;
        font-weight: 500;
        width: 100%;
        outline: none;
      }

      .current-month:hover,
      .current-year:hover {
        background-color: var(--hover-background-color, #666);
        color: #ffffff;
      }
    `}constructor(){super(),this.theme="light",this.pattern="MM/DD/YYYY",this.patternMatcher="MDY",this.patternRegex="\\d",this.noBorder=!1,this.inlineInput=!1,this.mondayFirst=!1,this.allowPartial=!1,this.monthTableVisible=!1,this.yearTableVisible=!1,this.selected={...a.$5},this.visible={...a.Kp}}render(){return this.noBorder?this.renderCalendar():o.dy`
      <mv-container .theme="${this.theme}">
        ${this.renderCalendar()}
      </mv-container>
    `}renderCalendar=()=>{const{selected:e,visible:t}=this,r=`current-month${this.monthTableVisible?" selected":""}`,i=`current-year${this.yearTableVisible?" selected":""}`;return o.dy`
      <div class="mv-calendar ${this.theme}">
        <slot name="header">
          ${this.inlineInput?o.dy`
                <div class="inline-input">
                  <calendar-input
                    rounded
                    min-year="${this.minYear}"
                    max-year="${this.maxYear}"
                    .placeholder="${this.placeholder}"
                    .theme="${this.theme}"
                    .visible="${this.visible}"
                    .selected="${this.selected}"
                    .pattern="${this.pattern}"
                    .pattern-matcher="${this.patternMatcher}"
                    .pattern-regex="${this.patternRegex}"
                    ?allow-partial="${this.allowPartial}"
                    ?no-clear-button="${this.noClearButton}"
                    @select-date="${this.updateSelected}"
                  ></calendar-input>
                </div>
              `:o.dy``}
        </slot>
        <div class="year-month-container">
          <button class="${r}" @click="${this.toggleMonthTable}">
            ${n[t.month]}
          </button>
          <button class="${i}" @click="${this.toggleYearTable}">
            ${t.year||a.Kp.year}
          </button>
        </div>
        ${this.monthTableVisible?o.dy`
              <month-table
                .visible="${t}"
                .selected="${e}"
                @select-month="${this.updateMonth}"
              ></month-table>
            `:o.dy``}
        ${this.yearTableVisible?o.dy`
              <year-table
                min-year="${this.minYear}"
                max-year="${this.maxYear}"
                .visible="${t}"
                .selected="${e}"
                @select-year="${this.updateYear}"
              ></year-table>
            `:o.dy``}
        ${this.monthTableVisible||this.yearTableVisible?o.dy``:o.dy`
              <calendar-table
                class="${this.theme}"
                .visible="${t}"
                .selected="${e}"
                ?monday-first="${this.mondayFirst}"
                @select-date="${this.updateDay}"
              ></calendar-table>
            `}
        <slot name="footer"></slot>
      </div>
    `};connectedCallback(){const e=!(0,a.xb)(this.selected);this.visible=e?this.selected:this.visible||a.Kp,super.connectedCallback()}toggleMonthTable=()=>{this.monthTableVisible=!this.monthTableVisible,this.yearTableVisible=!1};toggleYearTable=()=>{this.yearTableVisible=!this.yearTableVisible,this.monthTableVisible=!1};updateDay=e=>{const{detail:t}=e,{day:r,month:o,year:n}=t,i=(0,a.xb)({day:r,month:o,year:n});this.visible=i?{...a.Kp}:{day:r,month:o,year:n};const s=i?{...a.$5}:{date:new Date(n,o,r),day:r,month:o,year:n};this.dispatchUpdates(s)};updateMonth=e=>{const{detail:t}=e,{month:r}=t;if(this.visible={...this.visible,month:r},this.allowPartial){const e=this.selected.year?this.selected.year:a.Kp.year,t={...(0,a.FT)(this.selected),day:"",month:r,year:e};this.dispatchUpdates(t)}this.monthTableVisible=!1};updateYear=e=>{const{detail:t}=e,{year:r}=t;if(this.visible={...this.visible,year:r},this.allowPartial){const e=this.visible.month===this.selected.month,t=this.visible.year===this.selected.year,o=e&&t?this.selected.day:"",n={...(0,a.FT)(this.selected),day:o,year:r};this.dispatchUpdates(n)}this.yearTableVisible=!1};updateSelected=e=>{const{detail:{selected:t,visible:r}}=e;this.visible=r,this.dispatchUpdates(t)};dispatchUpdates=e=>{const{visible:t,name:r}=this;this.dispatchEvent(new CustomEvent("select-date",{detail:{name:r,selected:e,visible:t}}))}}customElements.define("single-calendar",f);class h extends o.oi{static get properties(){return{name:{type:String},theme:{type:String},justify:{type:String},placeholder:{type:String},position:{type:String},pattern:{type:String},visible:{type:Object,attribute:!1,reflect:!0},selected:{type:Object,attribute:!1,reflect:!0},inputDate:{type:String,attribute:!1,reflect:!0},mondayFirst:{type:Boolean,attribute:"monday-first",reflect:!0},minYear:{type:Number,attribute:"min-year",reflect:!0},maxYear:{type:Number,attribute:"max-year",reflect:!0},hasError:{type:Boolean,attribute:"has-error",reflect:!0},patternRegex:{type:String,attribute:"pattern-regex",reflect:!0},patternMatcher:{type:String,attribute:"pattern-matcher",reflect:!0},allowPartial:{type:Boolean,attribute:"allow-partial",reflect:!0},noClearButton:{type:Boolean,attribute:"no-clear-button",reflect:!0}}}static get styles(){return o.iv`
      :host {
        --font-size: var(--font-size-m, 1rem);
        --width: calc(var(--font-size) * 16);
        --mv-dropdown-trigger-height: calc(var(--font-size) + 32px);
        --mv-dropdown-min-width: calc(var(--width) + 4px);
        --mv-dropdown-max-width: calc(var(--width) + 4px);
        --mv-dropdown-content-max-height: auto;
      }

      mv-dropdown[content] {
        --mv-container-margin: 0;
      }

      .clear-button {
        font-size: var(--font-size-m);
      }
    `}constructor(){super(),this.visible=new Date,this.theme="light",this.justify="left",this.position="bottom",this.noBorder=!1,this.mondayFirst=!1,this.allowPartial=!1,this.pattern="MM/DD/YYYY",this.patternMatcher="MDY",this.patternRegex="\\d",this.noClearButton=!1}render(){return o.dy`
      <mv-dropdown
        container
        .justify="${this.justify}"
        .position="${this.position}"
        .theme="${this.theme}"
      >
        <mv-dropdown trigger>
          <calendar-input
            min-year="${this.minYear}"
            max-year="${this.maxYear}"
            .placeholder="${this.placeholder}"
            .theme="${this.theme}"
            .visible="${this.visible}"
            .selected="${this.selected}"
            .pattern="${this.pattern}"
            .pattern-matcher="${this.patternMatcher}"
            .pattern-regex="${this.patternRegex}"
            ?allow-partial="${this.allowPartial}"
            ?no-clear-button="${this.noClearButton}"
            @select-date="${this.updateSelected}"
          ></calendar-input>
        </mv-dropdown>
        <mv-dropdown content .theme="${this.theme}">
          <single-calendar
            no-border
            name="${this.name}"
            min-year="${this.minYear}"
            max-year="${this.maxYear}"
            .theme="${this.theme}"
            .visible="${this.visible}"
            .selected="${this.selected}"
            .pattern="${this.pattern}"
            .pattern-matcher="${this.patternMatcher}"
            .pattern-regex="${this.patternRegex}"
            ?monday-first="${this.mondayFirst}"
            ?allow-partial="${this.allowPartial}"
            @select-date="${this.updateSelected}"
          ></single-calendar>
        </mv-dropdown>
      </mv-dropdown>
    `}updateSelected=e=>{const{detail:{selected:t,visible:r}}=e,{name:o}=this;this.visible=r,this.dispatchEvent(new CustomEvent("select-date",{detail:{name:o,selected:t,visible:r}}))}}customElements.define("dropdown-calendar",h);class u extends o.oi{static get properties(){return{theme:{type:String},pattern:{type:String},start:{type:Object,attribute:!1,reflect:!0},end:{type:Object,attribute:!1,reflect:!0},mondayFirst:{type:Boolean,attribute:"monday-first",reflect:!0},inlineInput:{type:Boolean,attribute:"inline-input",reflect:!0},patternRegex:{type:String,attribute:"pattern-regex",reflect:!0},patternMatcher:{type:String,attribute:"pattern-matcher",reflect:!0},allowPartial:{type:Boolean,attribute:"allow-partial",reflect:!0},noClearButton:{type:Boolean,attribute:"no-clear-button",reflect:!0}}}static get styles(){return o.iv`
      :host {
        --font-size: var(--font-size-m, 1rem);
        --width: var(--mv-calendar-width, calc(var(--font-size) * 43));
        --mv-container-min-width: var(--width);
        --mv-container-max-width: var(--width);
        --mv-container-padding: 0 10px;
      }

      .range-calendar {
        display: flex;
        flex-direction: row;
      }

      .button-section {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        padding: 10px 10px 10px 0;
        min-width: 140px;
        border-right: 1px solid #999;
        margin: 0;
      }

      .button-section button {
        font-family: var(--font-family);
        font-size: var(--font-size-m);
        display: inline-block;
        border: none;
        text-decoration: none;
        background: transparent;
        color: #777;
        text-transform: none;
        cursor: pointer;
        text-align: center;
        padding: 5px;
        margin: 5px auto;
        border-radius: 5px;
        box-shadow: 0px 0px 20px 1px rgba(93, 94, 97, 0.35);
        font-weight: 500;
        width: calc(100% - 10px);
        outline: none;
      }

      .button-section button:hover {
        background-color: var(--hover-background-color, #666);
        color: #ffffff;
      }

      .calendar-section {
        display: grid;
        padding: 10px 0 0 10px;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
      }
    `}constructor(){super(),this.theme="light",this.start={selected:{...a.$5},visible:{...a.Kp},placeholder:"",hasError:null,minYear:null,maxYear:null},this.end={selected:{...a.$5},visible:{...a.Kp},placeholder:"",hasError:null,minYear:null,maxYear:null},this.mondayFirst=!1,this.allowPartial=!1,this.pattern="MM/DD/YYYY",this.patternMatcher="MDY",this.patternRegex="\\d",this.noClearButton=!1}render(){return o.dy`
      <mv-container .theme="${this.theme}">
        <div class="range-calendar">
          <div class="button-section">
            <button @click="${this.selectDateRange()}">Today</button>
            <button @click="${this.selectDateRange(1)}">Yesterday</button>
            <button @click="${this.selectDateRange(7)}">Last 7 days</button>
            <button @click="${this.selectDateRange(30)}">Last 30 days</button>
            <button @click="${this.selectDateRange(3,"months")}">
              Last 3 months
            </button>
            <button @click="${this.selectDateRange(6,"months")}">
              Last 6 months
            </button>
            <button @click="${this.resetDateRange}">Custom</button>
          </div>
          <div class="calendar-section">
            ${this.renderSingleCalendar("start")}
            ${this.renderSingleCalendar("end")}
          </div>
        </div>
      </mv-container>
    `}renderSingleCalendar=e=>{const t=this[e],{minYear:r,maxYear:a,placeholder:n,visible:i,selected:s,hasError:l}=t;return o.dy`
      <single-calendar
        no-border
        name="${e}"
        min-year="${r}"
        max-year="${a}"
        placeholder="${n}"
        .theme="${this.theme}"
        .visible="${i}"
        .selected="${s}"
        .pattern="${this.pattern}"
        .pattern-matcher="${this.patternMatcher}"
        .pattern-regex="${this.patternRegex}"
        ?has-error="${l}"
        ?monday-first="${this.mondayFirst}"
        ?inline-input="${this.inlineInput}"
        ?allow-partial="${this.allowPartial}"
        @select-date="${this.updateSelected}"
      ></single-calendar>
    `};parseValues=(e,t,r)=>(r||(r=t),{start:{...this.start},end:{...this.end},[e]:{...this[e],selected:t,visible:{...this[e].visible,...r}}});updateSelected=e=>{const{detail:t}=e,{name:r,selected:o,visible:a}=t;this[r].visible=a,this.dispatchDateChange(this.parseValues(r,o,a))};selectDateRange=(e,t)=>()=>{const r=new Date,o=new Date(r.getFullYear(),r.getMonth(),r.getDate()),n=t||"days",i=e?moment(o).subtract(e,n).toDate():o,s=o,l=(0,a.sG)({date:i}),c=(0,a.sG)({date:s}),d=this.parseValues("start",l),f=this.parseValues("end",c);this.dispatchDateChange({start:d.start,end:f.end})};resetDateRange=()=>{const e={start:{...this.start,selected:{...a.$5},visible:{...a.Kp}},end:{...this.end,selected:{...a.$5},visible:{...a.Kp}}};this.dispatchDateChange(e)};dispatchDateChange=e=>{this.dispatchEvent(new CustomEvent("select-range",{detail:{...e}}))}}customElements.define("range-calendar",u);class b extends o.oi{static get properties(){return{name:{type:String},placeholder:{type:String},theme:{type:String},justify:{type:String},position:{type:String},dropdown:{type:Boolean},selected:{type:Object,attribute:!1,reflect:!0},visible:{type:Object,attribute:!1,reflect:!0},inlineInput:{type:Boolean,attribute:"inline-input",reflect:!0},mondayFirst:{type:Boolean,attribute:"monday-first",reflect:!0},start:{type:Object,attribute:!1,reflect:!0},end:{type:Object,attribute:!1,reflect:!0},minYear:{type:Number,attribute:"min-year"},maxYear:{type:Number,attribute:"max-year"},pattern:{type:String},patternRegex:{type:String,attribute:"pattern-regex",reflect:!0},patternMatcher:{type:String,attribute:"pattern-matcher",reflect:!0},allowPartial:{type:Boolean,attribute:"allow-partial",reflect:!0},rangeCalendar:{type:Boolean,attribute:"range-calendar",reflect:!0},noClearButton:{type:Boolean,attribute:"no-clear-button",reflect:!0}}}static get styles(){return o.iv``}constructor(){super(),this.theme="light",this.justify="left",this.position="bottom",this.pattern="MM/DD/YYYY",this.patternMatcher="MDY",this.patternRegex="\\d",this.inlineInput=!1,this.mondayFirst=!1,this.allowPartial=!1,this.dropdown=!1,this.rangeCalendar=!1,this.noClearButton=!1,this.selected={...a.$5},this.visible={...a.Kp},this.start={selected:{...a.$5},visible:{...a.Kp},placeholder:""},this.end={selected:{...a.$5},visible:{...a.Kp},placeholder:""}}render(){return this.dropdown?o.dy`
        <dropdown-calendar
          min-year="${this.minYear}"
          max-year="${this.maxYear}"
          .placeholder="${this.placeholder}"
          .theme="${this.theme}"
          .visible="${this.visible}"
          .selected="${this.selected}"
          .pattern="${this.pattern}"
          .pattern-matcher="${this.patternMatcher}"
          .pattern-regex="${this.patternRegex}"
          .justify="${this.justify}"
          .position="${this.position}"
          ?monday-first="${this.mondayFirst}"
          ?allow-partial="${this.allowPartial}"
          ?no-clear-button="${this.noClearButton}"
          @select-date="${this.updateSelected}"
        ></dropdown-calendar>
      `:this.rangeCalendar?o.dy`
        <range-calendar
          min-year="${this.minYear}"
          max-year="${this.maxYear}"
          .theme="${this.theme}"
          .start="${this.start}"
          .end="${this.end}"
          .pattern="${this.pattern}"
          .pattern-matcher="${this.patternMatcher}"
          .pattern-regex="${this.patternRegex}"
          ?inline-input="${this.inlineInput}"
          ?monday-first="${this.mondayFirst}"
          ?allow-partial="${this.allowPartial}"
          @select-range="${this.updateRange}"
        ></range-calendar>
      `:o.dy`
      <single-calendar
        min-year="${this.minYear}"
        max-year="${this.maxYear}"
        .placeholder="${this.placeholder}"
        .theme="${this.theme}"
        .visible="${this.visible}"
        .selected="${this.selected}"
        .pattern="${this.pattern}"
        .pattern-matcher="${this.patternMatcher}"
        .pattern-regex="${this.patternRegex}"
        ?inline-input="${this.inlineInput}"
        ?monday-first="${this.mondayFirst}"
        ?allow-partial="${this.allowPartial}"
        @select-date="${this.updateSelected}"
      ></single-calendar>
    `}updateSelected=e=>{const{name:t}=this,{detail:{selected:r,visible:o}}=e;this.visible=o,this.dispatchEvent(new CustomEvent("select-date",{detail:{name:t,selected:r}}))};updateRange=e=>{const{name:t}=this,{detail:r}=e,{start:o,end:a}=r;this.dispatchEvent(new CustomEvent("select-date",{detail:{name:t,selected:{start:o,end:a}}}))}}customElements.define("mv-calendar",b)},4953:(e,t,r)=>{r.d(t,{$5:()=>o,Kp:()=>s,hg:()=>n,Ls:()=>a,kX:()=>d,g_:()=>u,FT:()=>h,xb:()=>l,Xy:()=>f,sG:()=>c});const o={day:"",month:"",year:""},a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],n=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],i=new Date,s={day:i.getDate(),month:i.getMonth(),year:i.getFullYear()},l=e=>{const t=!e.day,r=!e.month&&0!==e.month,o=!e.year;return t&&r&&o},c=e=>{const t=!!e&&e.date,r=t||{getFullYear:()=>e.year,getMonth:()=>e.month,getDate:()=>e.day},o=r.getFullYear(),a=r.getMonth(),n={day:r.getDate(),month:a,year:o};return t&&(n.date=t),n},d=e=>{const{date:t,year:r,month:o,day:a}=c(e),n={};return t&&(n.date=t),r&&(n.year=r),(o||0===o)&&(n.month=o),a&&(n.day=a),n},f=(e,t)=>{const r=c(e),o=c(t),a=r.day===o.day,n=r.month===o.month,i=r.year===o.year;return a&&n&&i},h=e=>{if(!e)return{...o};const{day:t,month:r,year:a}=e;return{day:t,month:r,year:a}},u=e=>{const{year:t,month:r,offset:a,limit:n,padding:i,prefix:s}=e,l=Array.from({length:n},((e,o)=>({day:o+a,month:r,year:t})));if(i){const e=Array.from({length:i},(()=>({...o})));return s?[...e,...l]:[...l,...e]}return Array.from({length:l.length/7},((e,t)=>l.slice(7*t,7*t+7)))}},1140:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{value:{type:Object,attribute:!0},checked:{type:Boolean,attribute:!0},disabled:{type:Boolean,attribute:!0},label:{type:String,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        --checked-content: var(--mv-checkbox-checked-content, "\u2713");
        --checked-font-size: var(--mv-checkbox-checked-font-size, 18px);
        --border-dark-color: var(--mv-checkbox-border-dark-color, #ffffff);
        --border-color: var(--mv-checkbox-border-color, #4e686d);
        --checkbox-background: var(--mv-checkbox-background,#FFFFFF);
        --checkbox-width: var(--mv-checkbox-label-width, 12px);
        --checkbox-box-shadow-hover: var(--mv-checkbox-box-shadow-hover ,none);
        --checkbox-box-shadow: var(--mv-checkbox-box-shadow, none);
        --input-border-radius: var(--mv-checkbox-border-radius, 3px);
        --checkbox-border: var(--mv-checkbox-border, 1px solid var(--border-color));
        --checkbox-background: var(--mv-checkbox-background);
        --checkbox-checked-border: var(--mv-checkbox-checked-border);
        --checkbox-checked-background: var(--mv-checkbox-checked-background);
        --checkbox-checked-color: var(--mv-checkbox-checked-color);
      }
      label {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 16px);
        display: flex;
        align-items: center;
        width: var(--mv-checkbox-label-width, auto);
        --label-color: var(--mv-checkbox-label-color, #818181);
        --label-dark-color: var(--mv-checkbox-label-dark-color, #ffffff);
        --checked-background: var(--mv-checkbox-checked-background);
        --checked-label-background: var(--mv-checkbox-checked-label-background, var(--checked-background))
        --checked-dark-background: var(
          --mv-checkbox-checked-dark-background,
          #ffffff
        );
        --hover-border-color: var(--mv-checkbox-hover-border-color, #1d9bc9);
        --hover-border-dark-color: var(
          --mv-checkbox-hover-border-dark-color,
          #ffffff
        );
        --checked-dark-background: var(
          --mv-checkbox-checked-dark-background,
          #ffffff
        );
      }
      
      span {
        display: flex;
        align-items: center;
      }

      span::before {
        display: inline-block;
      }

      label,
      label * {
        cursor: pointer;
        border-radius: var(--checkbox-border-radius);
        width: var(--checkbox-width); 
      }

      input[checked] + span {
        background-color: var(--checked-label-background);
        border-radius: var(--input-border-radius);
      }

      input[type="checkbox"] {
        opacity: 0;
        position: absolute;
        width: var(--checkbox-width);
      }

      input[type="checkbox"]:disabled {
        cursor: default;
      }

      input[type="checkbox"] + span::before {
        content: "\u2003";
        font-weight: bolder;
        font-size: 16px;
        width: 14px;
        height: 14px;
        margin: 0 4px 0 0;
        line-height: 14px;
        text-align: center;
        border-radius: var(--input-border-radius)
      }

      input[type="checkbox"]:checked + span::before {
        //content: "\u2713";
        content: var(--checked-content);
        font-size: var(--checked-font-size)
      }

      input[type="checkbox"] + span.light::before {
        border: var(--checkbox-border);
        background-color: var(--checkbox-background);
        box-shadow: var(--checkbox-box-shadow, none);
      }

      label:hover input[type="checkbox"] + span.light::before {
        border: 1px solid var(--hover-border-color);
        box-shadow: var(--checkbox-box-shadow-hover, inset 0 0 5 0 rgba(29, 155, 201, 0.3))
      }

      input[type="checkbox"]:checked + span.light::before {
        border: var(--checkbox-checked-border, 1px solid var(--checked-background));
        background-color: var(--checkbox-checked-background, var(--checked-background));
        color: var(--checkbox-checked-color, #FFFFFF);
      }

      label:hover input[type="checkbox"]:disabled + span.light,
      input[type="checkbox"]:disabled + span.light {
        color: #c7c7c7;
        cursor: default;
      }

      label:hover input[type="checkbox"]:disabled + span.light::before,
      input[type="checkbox"]:disabled + span.light::before {
        border: 1px solid #a8b5b7;
        color: #c7c7c7;
        cursor: default;
      }

      input[type="checkbox"] + span.dark::before {
        border: 1px solid var(--border-dark-color);
      }

      label:hover input[type="checkbox"] + span.dark::before {
        border: 1px solid var(--hover-border-dark-color);
        background-color: #656c75;
        box-shadow: var(--checkbox-box-shadow, none);
      }

      input[type="checkbox"]:checked + span.dark::before {
        border: var(--checkbox-checked-border ,1px solid var(--checked-dark-background));
        background-color: var(--checkbox-checked-background, var(--checked-dark-background));
        color: var(--checkbox-checked-color ,#3f4753);
      }

      label:hover input[type="checkbox"]:disabled + span.dark::before,
      input[type="checkbox"]:disabled + span.dark::before {
        border: 1px solid #a8b5b7;
        color: #c7c7c7;
        cursor: default;
      }

      span.light {
        color: var(--label-color);
      }

      span.dark {
        color: var(--label-dark-color);
      }

    `}constructor(){super(),this.label="",this.checked=!1,this.disabled=!1,this.theme="light"}render(){const{checked:e,disabled:t,label:r,handleClick:a}=this;return o.dy`
      <label class="${this.theme}">
        ${e?o.dy`<input
              type="checkbox"
              @click="${a}"
              ?disabled="${t}"
              checked
            />`:o.dy`<input
              type="checkbox"
              @click="${a}"
              ?disabled="${t}"
            />`}
        <span class="${this.theme}">${r}</span>
      </label>
    `}handleClick(e){e.stopPropagation();const{value:t,checked:r}=this;this.dispatchEvent(new CustomEvent("click-checkbox",{detail:{value:t,checked:!r,originalEvent:e}}))}}customElements.define("mv-checkbox",a)},5895:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
    `}render(){return o.dy`<slot></slot>`}connectedCallback(){document.addEventListener("click",this.handleClickAway),super.connectedCallback()}detachedCallback(){document.removeEventListener("click",this.handleClickAway),super.detachedCallback()}isInPath=(e,t)=>e.some((e=>e===t));isInParentNode=(e,t)=>!!e&&(e===t||this.isInParentNode(e.parentNode,t));handleClickAway=e=>{const{path:t,originalTarget:r}=e,o=t||e.composedPath();let a=!1;if(o)a=!this.isInPath(o,this);else{const e=this.shadowRoot.firstElementChild;a=!this.isInParentNode(r,e)}a?this.dispatchEvent(new CustomEvent("clicked-away")):this.dispatchEvent(new CustomEvent("clicked-inside"))}}customElements.define("mv-click-away",a)},3110:(e,t,r)=>{var o=r(5862);r(2542),r(6587);class a extends o.oi{static get properties(){return{open:{type:Boolean,reflect:!0},closeable:{type:Boolean,reflect:!0},leftLabel:{type:String,attribute:"left-label",reflect:!0},rightLabel:{type:String,attribute:"right-label",reflect:!0},headerLabel:{type:String,attribute:"header-label",reflect:!0},noFooter:{type:Boolean,attribute:"no-footer",reflect:!0},noLeftButton:{type:Boolean,attribute:"no-left-button",reflect:!0},noRightButton:{type:Boolean,attribute:"no-right-button",reflect:!0},theme:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        --mv-dialog-font-family: var(--font-family, MuseoSans);
        --mv-dialog-title-font-size: var(--font-size-xl, 12pt);
        --mv-dialog-close-icon-font-size: var(--font-size-xl, 12pt);
        --mv-dialog-content-font-size: var(--font-size-m, 10pt);
        --max-height: var(--mv-dialog-max-height, 528px);
        --width: var(--mv-dialog-width, 756px);
        --dialog-body-height: var(
          --mv-dialog-content-height,
          calc(var(--max-height) - 150px)
        );
        --footer-height: var(--mv-dialog-footer-height, 66px);
        --dialog-body-width: var(--mv-dialog-content-width, 100%);
        --border-radius: var(--mv-dialog-border-radius, 5px);
        --color-close-icon: var(--mv-dialog-color-close-icon, #48c5b9);
        --dialog-z-index: var(--mv-dialog-z-index, 99);
        --light-background: var(--mv-dialog-background-color, #ffffff);
        --dark-background: var(--mv-dialog-dark-background, #373e48);
        --light-color: var(--mv-dialog-color, #80828c);
        --dark-color: var(--mv-dialog-dark-color, #ffffff);
      }

      .mv-container-dialog {
        opacity: 0;
        transition: visibility 0s, opacity 0.25s ease-in;
        z-index: var(--dialog-z-index);
      }

      .overlay-dialog {
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        opacity: 0.5;
        background-color: #000000;
      }

      .dialog {
        background: var(--background-color);
        width: var(--width);
        max-height: var(--max-height);
        position: fixed;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
        border-radius: var(--border-radius);
        font-family: var(--mv-dialog-font-family);
        font-size: var(--mv-dialog-content-font-size);
        color: var(--text-color);
      }

      .opened {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 1;
        visibility: visible;
      }

      .closed {
        visibility: hidden;
      }

      mv-fa {
        font-size: var(--mv-dialog-close-icon-font-size);
        color: var(--color-close-icon);
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }

      .header {
        width: 100%;
        height: 70px;
        box-shadow: 0 5px 10px 0 rgba(7, 17, 26, 0.2);
        border-radius: var(--border-radius) var(--border-radius) 0 0;
        position: relative;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
      }

      .title {
        font-size: var(--mv-dialog-title-font-size);
        color: var(--text-color);
        font-weight: 500;
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: default;
      }

      .footer {
        width: 100%;
        height: var(--footer-height);
        box-shadow: 0 5px 10px 0 rgba(7, 17, 26, 0.2);
        border-radius: 0 0 var(--border-radius) var(--border-radius);
        border-top: 1px solid rgba(0, 0, 0, 0.12);
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px 0 30px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
      }

      .body {
        overflow-y: inherit;
        width: var(--dialog-body-width);
        height: var(--dialog-body-height, auto);
        position: relative;
        padding: 0 30px 0 30px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
      }

      .footer mv-button:first-child:last-child {
        margin: 0 auto;
      }

      .light {
        --background-color: var(--light-background);
        --text-color: var(--light-color);
      }

      .dark {
        --background-color: var(--dark-background);
        --text-color: var(--dark-color);
      }
    `}constructor(){super(),this.open=!1,this.leftLabel="Cancel",this.rightLabel="OK",this.headerLabel="Dialog",this.closeable=!1,this.noLeftButton=!1,this.noRightButton=!1,this.theme="light"}render(){const e=this.open?"opened":"closed";return o.dy`
      <div class="mv-container-dialog ${e} ${this.theme}">
        <div class="overlay-dialog" @click="${this.handleClose}"></div>
        <div class="dialog" role="dialog">
          <div class="header">
            <slot name="header">
              ${this.closeable?o.dy`
                    <mv-fa icon="times" @click="${this.handleClose}"></mv-fa>
                  `:o.dy``}
              <span class="title">${this.headerLabel}</span>
            </slot>
          </div>

          <div class="body">
            <slot></slot>
          </div>
          ${this.noFooter?o.dy``:o.dy`
                <div class="footer">
                  <slot name="footer">
                    ${this.noLeftButton?o.dy``:o.dy`
                          <mv-button
                            class="left-button"
                            type="outline"
                            button-style="cancel"
                            @button-clicked="${this.handleClose}"
                          >
                            ${this.leftLabel}
                          </mv-button>
                        `}
                    ${this.noRightButton?o.dy``:o.dy`
                          <mv-button
                            class="right-button"
                            @button-clicked="${this.handleOK}"
                          >
                            ${this.rightLabel}
                          </mv-button>
                        `}
                  </slot>
                </div>
              `}
        </div>
      </div>
    `}handleClose(e){e&&e.stopImmediatePropagation(),this.dispatchEvent(new CustomEvent("close-dialog"))}handleOK(e){e&&e.stopImmediatePropagation(),this.dispatchEvent(new CustomEvent("ok-dialog"))}}customElements.define("mv-dialog",a)},9838:(e,t,r)=>{var o=r(5862);r(5895);class a extends o.oi{static get properties(){return{container:{type:Boolean},trigger:{type:Boolean},header:{type:Boolean},footer:{type:Boolean},content:{type:Boolean},hover:{type:Boolean},closeOnClick:{type:Boolean,attribute:"close-on-click",reflect:!0},toggle:{type:Boolean},hidden:{type:Boolean},justify:{type:String},position:{type:String},theme:{type:String}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --trigger-height: var(--mv-dropdown-trigger-height, 26px);
        --trigger-padding: var(--mv-dropdown-trigger-padding, 5px);
        --min-width: var(--mv-dropdown-min-width, auto);
        --max-width: var(--mv-dropdown-max-width, auto);
        --content-max-height: var(--mv-dropdown-content-max-height, 150px);
        --content-overflow: var(--mv-dropdown-content-overflow, auto);
        --content-margin: var(--mv-dropdown-content-margin, 0);
        --header-padding: var(--mv-dropdown-header-padding, 5px 15px);
        --dropdown-box-shadow: var(--mv-dropdown-box-shadow);
      }

      @-webkit-keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .mv-dropdown-container {
        display: inline-block;
        position: relative;
        padding: var(--trigger-padding) 0;
      }

      .mv-dropdown-container:hover {
        cursor: pointer;
      }

      .mv-dropdown {
        min-width: var(--min-width);
        max-width: var(--max-width);
        border: var(--mv-dropdown-border, 1px solid #1e3843);
        background: var(--mv-dropdown-background, #3f4753);
        color: var(--mv-dropdown-color, #999999);
        position: absolute;
        border-radius: 5px;
        box-shadow: var(--dropdown-box-shadow, 0 0 20px 1px rgba(93, 94, 97, 0.35));
        z-index: 10;
        visibility: visible;
        animation: fadeIn 0.3s;
      }

      .mv-dropdown.light {
        border: var(--mv-dropdown-light-border, 1px solid #4e686d);
        background: var(--mv-dropdown-light-background, #ffffff);
        color: var(--mv-dropdown-light-color, #818181);
      }

      .mv-dropdown.top {
        bottom: var(--trigger-height);
      }

      .mv-dropdown.bottom {
        top: var(--trigger-height);
      }

      .mv-dropdown-slot-container {
        position: relative;
        display: flex;
        flex-direction: column;
      }

      .mv-dropdown-slot-container.top {
        justify-content: flex-end;
      }

      .mv-dropdown-slot-container.bottom {
        justify-content: flex-start;
      }

      .mv-dropdown-slot-container.left {
        align-items: flex-start;
      }

      .mv-dropdown-slot-container.center {
        align-items: center;
      }

      .mv-dropdown-slot-container.right {
        align-items: flex-end;
      }

      .mv-dropdown-header {
        color: var(--mv-dropdown-header-color, #ffffff);
        box-shadow: 0 0 10px 1px rgba(7, 17, 26, 0.35);
        padding: var(--header-padding);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .mv-dropdown-header.light {
        color: var(--mv-dropdown-header-light-color, #000000);
      }

      .mv-dropdown-footer {
        box-shadow: 0 0 10px 1px rgba(7, 17, 26, 0.35);
        padding: 5px 15px;
      }

      .mv-dropdown-content {
        overflow: var(--content-overflow);
        max-height: var(--content-max-height);
      }

      .mv-dropdown-content.scrollbar {
        width: calc(100% - 2px);
        float: left;
        overflow-y: var(--content-overflow);
        margin: 0;
        /* fallback for firefox */
        scrollbar-color: #5a6473 #788394;
        scrollbar-width: thin;
        margin: var(--content-margin);
      }

      .mv-dropdown-content.scrollbar:focus {
        outline: transparent auto 0;
      }

      .mv-dropdown-content.scrollbar::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #788394;
      }

      .mv-dropdown-content.scrollbar::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #788394;
        border-radius: 10px;
      }

      .mv-dropdown-content.scrollbar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #5a6473;
      }

      .mv-dropdown-content.scrollbar.light {
        // fallback for firefox
        scrollbar-color: #1d9bc9 #eaebf0 !important;
      }

      .mv-dropdown-content.scrollbar.light::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #eaebf0 !important;
      }

      .mv-dropdown-content.scrollbar.light::-webkit-scrollbar {
        background-color: #1d9bc9;
      }

      .mv-dropdown-content.scrollbar.light::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #008fc3;
      }

      .hidden {
        display: none;
        visibility: hidden;
        opacity: 0;
      }
    `}constructor(){super(),this.trigger=!1,this.header=!1,this.footer=!1,this.content=!1,this.container=!1,this.hover=!1,this.closeOnClick=!1,this.hidden=!0,this.justify="left",this.position="bottom",this.theme="dark",this.toggle=!1}render(){const{hidden:e,position:t,justify:r,theme:a}=this,n=` ${t||"bottom"}`,i=`mv-dropdown${e?" hidden":""}${n} ${a}`,s=`mv-dropdown-slot-container${n}${` ${r||"left"}`}`;return this.container?o.dy`
        <mv-click-away @clicked-away="${this.hideDropdown}">
          <div
            class="mv-dropdown-container"
            @mouseenter="${this.triggerMouseOver}"
            @mouseleave="${this.triggerMouseOut}"
          >
            <div class="${s}">
              <div class="mv-dropdown-trigger" @mouseup="${this.toggleMenu}">
                <slot name="trigger"></slot>
              </div>
              <div class="${i}" @click="${this.handleContentClick}">
                <slot></slot>
              </div>
            </div>
          </div>
        </mv-click-away>
      `:this.header?o.dy`
        <div class="mv-dropdown-header ${a}">
          <slot></slot>
        </div>
      `:this.footer?o.dy`
        <div class="mv-dropdown-footer ${a}">
          <slot></slot>
        </div>
      `:this.content?o.dy`
        <div class="mv-dropdown-content scrollbar ${this.theme}">
          <slot></slot>
        </div>
      `:o.dy` <slot></slot> `}connectedCallback(){this.trigger&&this.setAttribute("slot","trigger"),super.connectedCallback()}hideDropdown=e=>{this.hidden=!0};toggleMenu=()=>{this.hover||(this.hidden=!!this.toggle&&!this.hidden)};triggerMouseOver=()=>{this.hover&&(this.hidden=!1)};triggerMouseOut=()=>{this.hover&&(this.hidden=!0)};handleContentClick=e=>{this.closeOnClick&&!this.hidden&&(this.hidden=!0)}}customElements.define("mv-dropdown",a)},7291:(e,t,r)=>{r.d(t,{a:()=>i});var o=r(5862);r(8998);const a=e=>{if("string"!=typeof e)return e;var t=new XMLHttpRequest;return t.open("GET","./model/"+e+".json",!1),t.send(null),200===t.status?JSON.parse(t.responseText):void 0};String.prototype.evaluateOnContext=function(e){const t=Object.keys(e),r=Object.values(e);return new Function(...t,`return \`${this}\`;`)(...r)};class n{constructor(e,t,r,o=null,a){this.repository=e,this.name=t,this.element=r,this.parentStore=o,this.listeners={},this.subStores={},this.state=null==o?{}:o.registerSubStore(this),this.localStore=!1,this.serverStore=!1,this.config=a,this.element.storageModes&&(this.localStore=this.element.storageModes.includes("local"),this.serverStore=this.element.storageModes.includes("server"));const n=r.constructor.model||r.model;n&&(this.model=n,this.model.mappings&&this.registerElementListener(r,n.mappings,!1,this)),(this.localStore||this.serverStore)&&this.initLocalState(),this.dispatch("")}initLocalState(){this.resetState(),this.loadState()}extractNamesFromAst(e,t){if(e.hasOwnProperty("type")&&"path"===e.type){const r=e.steps.reduce(((e,t)=>"name"===t.type?""===e?t.value:e+"."+t.value:e),"");-1===t.indexOf(r)&&t.push(r)}else Object.keys(e).forEach((r=>{if(Array.isArray(e[r])&&["arguments","expressions","steps"].includes(r))for(let o of e[r])"object"==typeof o&&this.extractNamesFromAst(o,t);else"object"==typeof e[r]&&this.extractNamesFromAst(e[r],t)}))}extractNamesFromMappings(e,t){for(const r of e)r.value?-1===t.indexOf(r.value)&&t.push(r.value):r.jsonataExpression&&(r.jsonata||(r.jsonata=jsonata(r.jsonataExpression)),this.extractNamesFromAst(r.jsonata.ast(),t))}registerElementListener(e,t,r,o){if(t=t.map((e=>e.jsonataExpression?{...e,jsonata:jsonata(e.jsonataExpression)}:e)),r||(r=[],this.extractNamesFromMappings(t,r)),this.parentStore)r=r.map((e=>this.name+"."+e)),this.parentStore.registerElementListener(e,t,r,o||this);else for(let a of r)this.listeners[a]||(this.listeners[a]=[]),this.listeners[a].push({element:e,mappings:t,store:o||this})}registerSubStore(e){return this.subStores[e.name]=e,this.getState(e.name)}getState(e){return this.parentStore?this.parentStore.getState(this.name+(""===e?"":"."+e)):(this.state[e]||(this.state[e]={}),this.state[e])}dispatch(e="",t=null){if(this.parentStore)this.parentStore.dispatch(this.name+(""===e?"":"."+e),t);else{let r=[];Object.keys(this.listeners).forEach((o=>{let a=!1;if(a=null==t?o===e||o.startsWith(e+".")||""===e:o===e||o===e+"."+t,a)for(const e of this.listeners[o])if(0===r.length)r.push(e);else{let t=!1;for(const o of r)if(o.element===e.element){t=!0;break}t||r.push(e)}}));for(const e of r){let r=e.element;for(const o of e.mappings)o.jsonata?r[o.property]=o.jsonata.evaluate(e.store.state):!o.value||null!=t&&o.value!==t||(r[o.property]=e.store.state[o.value])}}}filterOutSubstores(e,t){return t.reduce(((t,r)=>void 0!==e[r]?Object.assign(t,{[r]:e[r]}):t),{})}storeState(){this.serverStore&&((e,t,r,o,a)=>{const{API_URL:n}=(a||{}).MEVEO||{};fetch((n||"/meveo/api/rest/")+e+"/persistence",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify([{name:t,type:r,properties:o}])}).then((e=>console.log(JSON.stringify(e)))).catch((e=>console.error(e)))})(this.repository,this.name,this.model.modelClass,this.state,this.config),this.localStore&&this.parentStore?this.parentStore.storeState():this.localStore&&localStorage.setItem(this.name,JSON.stringify(this.state))}loadState(){if(this.serverStore&&this.model.filters){let e={};for(let t of this.model.filters)null!=this.element[t]&&(e[t]=this.element[t]);let t=((e,t,r,o)=>{var a=new XMLHttpRequest;const{API_URL:n}=(o||{}).MEVEO||{},i=(n||"/meveo/api/rest/")+e+"/persistence/"+t+"/list";if(a.open("POST",i,!1),a.setRequestHeader("Content-Type","application/json"),a.send(JSON.stringify({filters:r})),200===a.status){let e=JSON.parse(a.responseText);return 1===e.length?e[0]:e}})(this.repository,this.model.modelClass,e,this.config);null!=t&&(this.state={...this.state,...t})}if(!this.parentStore&&this.localStore){let e=JSON.parse(localStorage.getItem(this.name));null!=e&&(this.state={...this.state,...e})}}initializeStore(e,t,r,o){const{type:a,properties:n,allOf:i}=t||{};(i||[]).length>0&&i.forEach((t=>{const a=(r||[]).find((e=>e.id===t.$ref));this.initializeStore(e,a,r,o)})),"object"===a&&Object.getOwnPropertyNames(n).forEach((t=>{const a=n[t];if(o||void 0===e[t]){if(!a.type&&a.$ref){e[t]={};const n=(r||[]).find((e=>e.id===a.$ref));this.initializeStore(e[t],n,r,o)}else switch(a.type){case"object":e[t]={};break;case"array":e[t]=[];break;case"string":e[t]="";break;case"number":case"integer":e[t]=0;break;case"boolean":e[t]=!1;break;default:e[t]=null}void 0===this.element[t]||o||(e[t]=this.element[t])}}))}resetState(e){const{modelClass:t,entity:r}=this.model||{};if(t){const r=a(t)||{},o=(this.model.refSchemas||[]).map((e=>a(e)))||[];this.initializeStore(this.state,r,o,e),e&&(this.storeState(),this.dispatch(""))}else if(r){const{schema:t,refSchemas:o}=r;this.initializeStore(this.state,t,o,e),e&&(this.storeState(),this.dispatch(""))}}mapValue(e,t,r){const o=(t||"").indexOf(".");if(o>-1){const a=t.substring(0,o);return{[a]:this.mapValue(e[a],t.substring(o+1),r)}}return{[t]:r}}updateValue(e,t,r=!0){const o=(e||"").indexOf(".");if(o>-1){const r=e.substring(0,o),a=e.substring(o+1);this.state[r]={...this.state[r],...this.mapValue(this.state[r]||{},a,t)}}else this.state[e]=t;this.storeState(),r&&this.dispatch(e)}addItem(e,t,r=!0){this.removeItem(e,t,!1),this.state[e]=[...this.state[e],t],this.storeState(),r&&this.dispatch(e)}removeItem(e,t,r=!0){this.state[e]=this.state[e].filter((e=>e.value!==t.value)),this.storeState(),r&&this.dispatch(e)}updateItem(e,t,r=!0){this.state[e]=this.state[e].map((e=>(e.value===t.value&&(e={...e,...t}),e))),this.storeState(),r&&this.dispatch(e)}}class i extends o.oi{static get properties(){return{name:{type:String,attribute:!0},storageModes:{type:String,attribute:"storage-modes"},config:{type:Object}}}getParentStore(e){return void 0===e?null:(e instanceof DocumentFragment&&(e=e.host),e instanceof Element?e instanceof i?e.store:this.getParentStore(e.parentNode):null)}connectedCallback(){let e=this.getParentStore(this.parentNode);const{MEVEO:t}=this.config||{},{REPOSITORY:r}=t||{};this.store=new n(r||"default",this.attributes.name.value,this,e,this.config),super.connectedCallback()}}},3899:(e,t,r)=>{var o=r(5862);r(2542),r(6587);class a extends o.oi{static get properties(){return{name:{type:String},label:{type:String},placeholder:{type:String},multiple:{type:Boolean},buttonLabel:{type:String,attribute:"button-label"},fileTypes:{type:String,attribute:"file-types",reflect:!0},files:{type:Object,attribute:!1,reflect:!0}}}static get styles(){return o.iv`
      :host {
        --mv-button-padding: 5px 8px;
        --mv-button-min-width: 16px;
        font-size: var(--font-size-m, 16px);
      }

      table {
        width: 100%;
      }

      .upload-button {
        display: flex;
        font-size: 14px;
      }

      .upload-button div {
        margin-left: 5px;
      }
    `}constructor(){super(),this.name="mv-file-upload",this.label="",this.buttonLabel="Add file",this.multiple=!1,this.fileTypes="",this.files=[]}render(){const e=[...this.files],t=e.length>0;return o.dy`
      ${this.multiple&&t?o.dy`
            <table>
              <tbody>
                ${t?e.map(((e,t)=>o.dy`
                        <tr>
                          <td>${e.name}</td>
                          <td>
                            <mv-button
                              @button-clicked="${this.removeFile(t)}"
                              button-style="error"
                            >
                              <mv-fa icon="times"></mv-fa>
                            </mv-button>
                          </td>
                        </tr>
                      `)):null}
              </tbody>
            </table>
          `:null}
      <input
        type="file"
        files="${this.files}"
        id="${this.name}"
        name="${this.name}"
        ?multiple="${this.multiple}"
        accept="${this.fileTypes}"
        @change="${this.addFiles}"
        hidden
      />
      <div>
        ${this.label?o.dy`<label for="${this.name}">${this.label}</label>`:null}
        <mv-button @button-clicked="${this.openFileDialog}" type="outline">
          <div class="upload-button">
            <mv-fa icon="file-upload"></mv-fa>
            <div>${this.buttonLabel}</div>
          </div>
        </mv-button>
        ${!this.multiple&&t?o.dy`
              <label>${this.files[0].name}</label>
              <mv-button
                @button-clicked="${this.removeFile(0)}"
                button-style="error"
              >
                <mv-fa icon="times"></mv-fa>
              </mv-button>
            `:null}
      </div>
    `}openFileDialog=()=>{this.shadowRoot.querySelector('input[type="file"]').click()};removeFile=e=>t=>{this.updateFiles([...this.files.slice(0,e),...this.files.slice(e+1)])};addFiles=e=>{const{target:{files:t}}=e,r=[...t].filter((e=>![...this.files].find((t=>t.name===e.name&&t.size===e.size&&t.lastDateModified===e.lastDateModified))));this.updateFiles([...this.files,...r])};updateFiles=e=>{this.files=e,this.dispatchEvent(new CustomEvent("update-files",{detail:{files:e}}))}}customElements.define("mv-file-upload",a)},6587:(e,t,r)=>{var o=r(5862);const a=["ad","address-book","address-card","adjust","air-freshener","align-center","align-justify","align-left","align-right","allergies","ambulance","american-sign-language-interpreting","anchor","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","angry","ankh","apple-alt","archive","archway","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows-alt","arrows-alt-h","arrows-alt-v","assistive-listening-systems","asterisk","at","atlas","atom","audio-description","award","baby","baby-carriage","backspace","backward","bacon","balance-scale","balance-scale-left","balance-scale-right","ban","band-aid","barcode","bars","baseball-ball","basketball-ball","bath","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","beer","bell","bell-slash","bezier-curve","bible","bicycle","biking","binoculars","biohazard","birthday-cake","blender","blender-phone","blind","blog","bold","bolt","bomb","bone","bong","book","book-dead","book-medical","book-open","book-reader","bookmark","border-all","border-none","border-style","bowling-ball","box","box-open","boxes","braille","brain","bread-slice","briefcase","briefcase-medical","broadcast-tower","broom","brush","bug","building","bullhorn","bullseye","burn","bus","bus-alt","business-time","calculator","calendar","calendar-alt","calendar-check","calendar-day","calendar-minus","calendar-plus","calendar-times","calendar-week","camera","camera-retro","campground","candy-cane","cannabis","capsules","car","car-alt","car-battery","car-crash","car-side","caret-down","caret-left","caret-right","caret-square-down","caret-square-left","caret-square-right","caret-square-up","caret-up","carrot","cart-arrow-down","cart-plus","cash-register","cat","certificate","chair","chalkboard","chalkboard-teacher","charging-station","chart-area","chart-bar","chart-line","chart-pie","check","check-circle","check-double","check-square","cheese","chess","chess-bishop","chess-board","chess-king","chess-knight","chess-pawn","chess-queen","chess-rook","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","child","church","circle","circle-notch","city","clinic-medical","clipboard","clipboard-check","clipboard-list","clock","clone","closed-captioning","cloud","cloud-download-alt","cloud-meatball","cloud-moon","cloud-moon-rain","cloud-rain","cloud-showers-heavy","cloud-sun","cloud-sun-rain","cloud-upload-alt","cocktail","code","code-branch","coffee","cog","cogs","coins","columns","comment","comment-alt","comment-dollar","comment-dots","comment-medical","comment-slash","comments","comments-dollar","compact-disc","compass","compress","compress-arrows-alt","concierge-bell","cookie","cookie-bite","copy","copyright","couch","credit-card","crop","crop-alt","cross","crosshairs","crow","crown","crutch","cube","cubes","cut","database","deaf","democrat","desktop","dharmachakra","diagnoses","dice","dice-d20","dice-d6","dice-five","dice-four","dice-one","dice-six","dice-three","dice-two","digital-tachograph","directions","divide","dizzy","dna","dog","dollar-sign","dolly","dolly-flatbed","donate","door-closed","door-open","dot-circle","dove","download","drafting-compass","dragon","draw-polygon","drum","drum-steelpan","drumstick-bite","dumbbell","dumpster","dumpster-fire","dungeon","edit","egg","eject","ellipsis-h","ellipsis-v","envelope","envelope-open","envelope-open-text","envelope-square","equals","eraser","ethernet","euro-sign","exchange-alt","exclamation","exclamation-circle","exclamation-triangle","expand","expand-arrows-alt","external-link-alt","external-link-square-alt","eye","eye-dropper","eye-slash","fan","fast-backward","fast-forward","fax","feather","feather-alt","female","fighter-jet","file","file-alt","file-archive","file-audio","file-code","file-contract","file-csv","file-download","file-excel","file-export","file-image","file-import","file-invoice","file-invoice-dollar","file-medical","file-medical-alt","file-pdf","file-powerpoint","file-prescription","file-signature","file-upload","file-video","file-word","fill","fill-drip","film","filter","fingerprint","fire","fire-alt","fire-extinguisher","first-aid","fish","fist-raised","flag","flag-checkered","flag-usa","flask","flushed","folder","folder-minus","folder-open","folder-plus","font","football-ball","forward","frog","frown","frown-open","funnel-dollar","futbol","gamepad","gas-pump","gavel","gem","genderless","ghost","gift","gifts","glass-cheers","glass-martini","glass-martini-alt","glass-whiskey","glasses","globe","globe-africa","globe-americas","globe-asia","globe-europe","golf-ball","gopuram","graduation-cap","greater-than","greater-than-equal","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","grip-horizontal","grip-lines","grip-lines-vertical","grip-vertical","guitar","h-square","hamburger","hammer","hamsa","hand-holding","hand-holding-heart","hand-holding-usd","hand-lizard","hand-middle-finger","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","hands","hands-helping","handshake","hanukiah","hard-hat","hashtag","hat-cowboy","hat-cowboy-side","hat-wizard","haykal","hdd","heading","headphones","headphones-alt","headset","heart","heart-broken","heartbeat","helicopter","highlighter","hiking","hippo","history","hockey-puck","holly-berry","home","horse","horse-head","hospital","hospital-alt","hospital-symbol","hot-tub","hotdog","hotel","hourglass","hourglass-end","hourglass-half","hourglass-start","house-damage","hryvnia","i-cursor","ice-cream","icicles","icons","id-badge","id-card","id-card-alt","igloo","image","images","inbox","indent","industry","infinity","info","info-circle","italic","jedi","joint","journal-whills","kaaba","key","keyboard","khanda","kiss","kiss-beam","kiss-wink-heart","kiwi-bird","landmark","language","laptop","laptop-code","laptop-medical","laugh","laugh-beam","laugh-squint","laugh-wink","layer-group","leaf","lemon","less-than","less-than-equal","level-down-alt","level-up-alt","life-ring","lightbulb","link","lira-sign","list","list-alt","list-ol","list-ul","location-arrow","lock","lock-open","long-arrow-alt-down","long-arrow-alt-left","long-arrow-alt-right","long-arrow-alt-up","low-vision","luggage-cart","magic","magnet","mail-bulk","male","map","map-marked","map-marked-alt","map-marker","map-marker-alt","map-pin","map-signs","marker","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","mask","medal","medkit","meh","meh-blank","meh-rolling-eyes","memory","menorah","mercury","meteor","microchip","microphone","microphone-alt","microphone-alt-slash","microphone-slash","microscope","minus","minus-circle","minus-square","mitten","mobile","mobile-alt","money-bill","money-bill-alt","money-bill-wave","money-bill-wave-alt","money-check","money-check-alt","monument","moon","mortar-pestle","mosque","motorcycle","mountain","mouse","mouse-pointer","mug-hot","music","network-wired","neuter","newspaper","not-equal","notes-medical","object-group","object-ungroup","oil-can","om","otter","outdent","pager","paint-brush","paint-roller","palette","pallet","paper-plane","paperclip","parachute-box","paragraph","parking","passport","pastafarianism","paste","pause","pause-circle","paw","peace","pen","pen-alt","pen-fancy","pen-nib","pen-square","pencil-alt","pencil-ruler","people-carry","pepper-hot","percent","percentage","person-booth","phone","phone-alt","phone-slash","phone-square","phone-square-alt","phone-volume","photo-video","piggy-bank","pills","pizza-slice","place-of-worship","plane","plane-arrival","plane-departure","play","play-circle","plug","plus","plus-circle","plus-square","podcast","poll","poll-h","poo","poo-storm","poop","portrait","pound-sign","power-off","pray","praying-hands","prescription","prescription-bottle","prescription-bottle-alt","print","procedures","project-diagram","puzzle-piece","qrcode","question","question-circle","quidditch","quote-left","quote-right","quran","radiation","radiation-alt","rainbow","random","receipt","record-vinyl","recycle","redo","redo-alt","registered","remove-format","reply","reply-all","republican","restroom","retweet","ribbon","ring","road","robot","rocket","route","rss","rss-square","ruble-sign","ruler","ruler-combined","ruler-horizontal","ruler-vertical","running","rupee-sign","sad-cry","sad-tear","satellite","satellite-dish","save","school","screwdriver","scroll","sd-card","search","search-dollar","search-location","search-minus","search-plus","seedling","server","shapes","share","share-alt","share-alt-square","share-square","shekel-sign","shield-alt","ship","shipping-fast","shoe-prints","shopping-bag","shopping-basket","shopping-cart","shower","shuttle-van","sign","sign-in-alt","sign-language","sign-out-alt","signal","signature","sim-card","sitemap","skating","skiing","skiing-nordic","skull","skull-crossbones","slash","sleigh","sliders-h","smile","smile-beam","smile-wink","smog","smoking","smoking-ban","sms","snowboarding","snowflake","snowman","snowplow","socks","solar-panel","sort","sort-alpha-down","sort-alpha-down-alt","sort-alpha-up","sort-alpha-up-alt","sort-amount-down","sort-amount-down-alt","sort-amount-up","sort-amount-up-alt","sort-down","sort-numeric-down","sort-numeric-down-alt","sort-numeric-up","sort-numeric-up-alt","sort-up","spa","space-shuttle","spell-check","spider","spinner","splotch","spray-can","square","square-full","square-root-alt","stamp","star","star-and-crescent","star-half","star-half-alt","star-of-david","star-of-life","step-backward","step-forward","stethoscope","sticky-note","stop","stop-circle","stopwatch","store","store-alt","stream","street-view","strikethrough","stroopwafel","subscript","subway","suitcase","suitcase-rolling","sun","superscript","surprise","swatchbook","swimmer","swimming-pool","synagogue","sync","sync-alt","syringe","table","table-tennis","tablet","tablet-alt","tablets","tachometer-alt","tag","tags","tape","tasks","taxi","teeth","teeth-open","temperature-high","temperature-low","tenge","terminal","text-height","text-width","th","th-large","th-list","theater-masks","thermometer","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","thumbs-down","thumbs-up","thumbtack","ticket-alt","times","times-circle","tint","tint-slash","tired","toggle-off","toggle-on","toilet","toilet-paper","toolbox","tools","tooth","torah","torii-gate","tractor","trademark","traffic-light","train","tram","transgender","transgender-alt","trash","trash-alt","trash-restore","trash-restore-alt","tree","trophy","truck","truck-loading","truck-monster","truck-moving","truck-pickup","tshirt","tty","tv","umbrella","umbrella-beach","underline","undo","undo-alt","universal-access","university","unlink","unlock","unlock-alt","upload","user","user-alt","user-alt-slash","user-astronaut","user-check","user-circle","user-clock","user-cog","user-edit","user-friends","user-graduate","user-injured","user-lock","user-md","user-minus","user-ninja","user-nurse","user-plus","user-secret","user-shield","user-slash","user-tag","user-tie","user-times","users","users-cog","utensil-spoon","utensils","vector-square","venus","venus-double","venus-mars","vial","vials","video","video-slash","vihara","voicemail","volleyball-ball","volume-down","volume-mute","volume-off","volume-up","vote-yea","vr-cardboard","walking","wallet","warehouse","water","wave-square","weight","weight-hanging","wheelchair","wifi","wind","window-close","window-maximize","window-minimize","window-restore","wine-bottle","wine-glass","wine-glass-alt","won-sign","wrench","x-ray","yen-sign","yin-yang"],n=["address-book","address-card","angry","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","bell","bell-slash","bookmark","building","calendar","calendar-alt","calendar-check","calendar-minus","calendar-plus","calendar-times","caret-square-down","caret-square-left","caret-square-right","caret-square-up","chart-bar","check-circle","check-square","circle","clipboard","clock","clone","closed-captioning","comment","comment-alt","comment-dots","comments","compass","copy","copyright","credit-card","dizzy","dot-circle","edit","envelope","envelope-open","eye","eye-slash","file","file-alt","file-archive","file-audio","file-code","file-excel","file-image","file-pdf","file-powerpoint","file-video","file-word","flag","flushed","folder","folder-open","frown","frown-open","futbol","gem","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","hand-lizard","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","handshake","hdd","heart","hospital","hourglass","id-badge","id-card","image","images","keyboard","kiss","kiss-beam","kiss-wink-heart","laugh","laugh-beam","laugh-squint","laugh-wink","lemon","life-ring","lightbulb","list-alt","map","meh","meh-blank","meh-rolling-eyes","minus-square","money-bill-alt","moon","newspaper","object-group","object-ungroup","paper-plane","pause-circle","play-circle","plus-square","question-circle","registered","sad-cry","sad-tear","save","share-square","smile","smile-beam","smile-wink","snowflake","square","star","star-half","sticky-note","stop-circle","sun","surprise","thumbs-down","thumbs-up","times-circle","tired","trash-alt","user","user-circle","window-close","window-maximize","window-minimize","window-restore"],i=["500px","accessible-icon","accusoft","acquisitions-incorporated","adn","adobe","adversal","affiliatetheme","airbnb","algolia","alipay","amazon","amazon-pay","amilia","android","angellist","angrycreative","angular","app-store","app-store-ios","apper","apple","apple-pay","artstation","asymmetrik","atlassian","audible","autoprefixer","avianex","aviato","aws","bandcamp","battle-net","behance","behance-square","bimobject","bitbucket","bitcoin","bity","black-tie","blackberry","blogger","blogger-b","bluetooth","bluetooth-b","bootstrap","btc","buffer","buromobelexperte","buy-n-large","buysellads","canadian-maple-leaf","cc-amazon-pay","cc-amex","cc-apple-pay","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","centercode","centos","chrome","chromecast","cloudscale","cloudsmith","cloudversify","codepen","codiepie","confluence","connectdevelop","contao","cotton-bureau","cpanel","creative-commons","creative-commons-by","creative-commons-nc","creative-commons-nc-eu","creative-commons-nc-jp","creative-commons-nd","creative-commons-pd","creative-commons-pd-alt","creative-commons-remix","creative-commons-sa","creative-commons-sampling","creative-commons-sampling-plus","creative-commons-share","creative-commons-zero","critical-role","css3","css3-alt","cuttlefish","d-and-d","d-and-d-beyond","dashcube","delicious","deploydog","deskpro","dev","deviantart","dhl","diaspora","digg","digital-ocean","discord","discourse","dochub","docker","draft2digital","dribbble","dribbble-square","dropbox","drupal","dyalog","earlybirds","ebay","edge","elementor","ello","ember","empire","envira","erlang","ethereum","etsy","evernote","expeditedssl","facebook","facebook-f","facebook-messenger","facebook-square","fantasy-flight-games","fedex","fedora","figma","firefox","first-order","first-order-alt","firstdraft","flickr","flipboard","fly","font-awesome","font-awesome-alt","font-awesome-flag","fonticons","fonticons-fi","fort-awesome","fort-awesome-alt","forumbee","foursquare","free-code-camp","freebsd","fulcrum","galactic-republic","galactic-senate","get-pocket","gg","gg-circle","git","git-alt","git-square","github","github-alt","github-square","gitkraken","gitlab","gitter","glide","glide-g","gofore","goodreads","goodreads-g","google","google-drive","google-play","google-plus","google-plus-g","google-plus-square","google-wallet","gratipay","grav","gripfire","grunt","gulp","hacker-news","hacker-news-square","hackerrank","hips","hire-a-helper","hooli","hornbill","hotjar","houzz","html5","hubspot","imdb","instagram","intercom","internet-explorer","invision","ioxhost","itch-io","itunes","itunes-note","java","jedi-order","jenkins","jira","joget","joomla","js","js-square","jsfiddle","kaggle","keybase","keycdn","kickstarter","kickstarter-k","korvue","laravel","lastfm","lastfm-square","leanpub","less","line","linkedin","linkedin-in","linode","linux","lyft","magento","mailchimp","mandalorian","markdown","mastodon","maxcdn","mdb","medapps","medium","medium-m","medrt","meetup","megaport","mendeley","microsoft","mix","mixcloud","mizuni","modx","monero","napster","neos","nimblr","node","node-js","npm","ns8","nutritionix","odnoklassniki","odnoklassniki-square","old-republic","opencart","openid","opera","optin-monster","orcid","osi","page4","pagelines","palfed","patreon","paypal","penny-arcade","periscope","phabricator","phoenix-framework","phoenix-squadron","php","pied-piper","pied-piper-alt","pied-piper-hat","pied-piper-pp","pinterest","pinterest-p","pinterest-square","playstation","product-hunt","pushed","python","qq","quinscape","quora","r-project","raspberry-pi","ravelry","react","reacteurope","readme","rebel","red-river","reddit","reddit-alien","reddit-square","redhat","renren","replyd","researchgate","resolving","rev","rocketchat","rockrms","safari","salesforce","sass","schlix","scribd","searchengin","sellcast","sellsy","servicestack","shirtsinbulk","shopware","simplybuilt","sistrix","sith","sketch","skyatlas","skype","slack","slack-hash","slideshare","snapchat","snapchat-ghost","snapchat-square","soundcloud","sourcetree","speakap","speaker-deck","spotify","squarespace","stack-exchange","stack-overflow","stackpath","staylinked","steam","steam-square","steam-symbol","sticker-mule","strava","stripe","stripe-s","studiovinari","stumbleupon","stumbleupon-circle","superpowers","supple","suse","swift","symfony","teamspeak","telegram","telegram-plane","tencent-weibo","the-red-yeti","themeco","themeisle","think-peaks","trade-federation","trello","tripadvisor","tumblr","tumblr-square","twitch","twitter","twitter-square","typo3","uber","ubuntu","uikit","umbraco","uniregistry","untappd","ups","usb","usps","ussunnah","vaadin","viacoin","viadeo","viadeo-square","viber","vimeo","vimeo-square","vimeo-v","vine","vk","vnv","vuejs","waze","weebly","weibo","weixin","whatsapp","whatsapp-square","whmcs","wikipedia-w","windows","wix","wizards-of-the-coast","wolf-pack-battalion","wordpress","wordpress-simple","wpbeginner","wpexplorer","wpforms","wpressr","xbox","xing","xing-square","y-combinator","yahoo","yammer","yandex","yandex-international","yarn","yelp","yoast","youtube","youtube-square","zhihu"];class s extends o.oi{static get properties(){return{icon:{type:String},regular:{type:Boolean},prefix:{type:String,attribute:!1},showIcon:{type:Boolean,attribute:!1},iconProps:{type:String,attribute:"icon-props"}}}static get styles(){return o.iv`
      /*!
    * Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com
    * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
    */
      .fa,
      .fas,
      .far,
      .fal,
      .fad,
      .fab {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
      }

      .fa-lg {
        font-size: 1.33333em;
        line-height: 0.75em;
        vertical-align: -0.0667em;
      }

      .fa-xs {
        font-size: 0.75em;
      }

      .fa-sm {
        font-size: 0.875em;
      }

      .fa-1x {
        font-size: 1em;
      }

      .fa-2x {
        font-size: 2em;
      }

      .fa-3x {
        font-size: 3em;
      }

      .fa-4x {
        font-size: 4em;
      }

      .fa-5x {
        font-size: 5em;
      }

      .fa-6x {
        font-size: 6em;
      }

      .fa-7x {
        font-size: 7em;
      }

      .fa-8x {
        font-size: 8em;
      }

      .fa-9x {
        font-size: 9em;
      }

      .fa-10x {
        font-size: 10em;
      }

      .fa-fw {
        text-align: center;
        width: 1.25em;
      }

      .fa-ul {
        list-style-type: none;
        margin-left: 2.5em;
        padding-left: 0;
      }
      .fa-ul > li {
        position: relative;
      }

      .fa-li {
        left: -2em;
        position: absolute;
        text-align: center;
        width: 2em;
        line-height: inherit;
      }

      .fa-border {
        border: solid 0.08em #eee;
        border-radius: 0.1em;
        padding: 0.2em 0.25em 0.15em;
      }

      .fa-pull-left {
        float: left;
      }

      .fa-pull-right {
        float: right;
      }

      .fa.fa-pull-left,
      .fas.fa-pull-left,
      .far.fa-pull-left,
      .fal.fa-pull-left,
      .fab.fa-pull-left {
        margin-right: 0.3em;
      }

      .fa.fa-pull-right,
      .fas.fa-pull-right,
      .far.fa-pull-right,
      .fal.fa-pull-right,
      .fab.fa-pull-right {
        margin-left: 0.3em;
      }

      .fa-spin {
        -webkit-animation: fa-spin 2s infinite linear;
        animation: fa-spin 2s infinite linear;
      }

      .fa-pulse {
        -webkit-animation: fa-spin 1s infinite steps(8);
        animation: fa-spin 1s infinite steps(8);
      }

      @-webkit-keyframes fa-spin {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @keyframes fa-spin {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      .fa-rotate-90 {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }

      .fa-rotate-180 {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .fa-rotate-270 {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
      }

      .fa-flip-horizontal {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
        -webkit-transform: scale(-1, 1);
        transform: scale(-1, 1);
      }

      .fa-flip-vertical {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
        -webkit-transform: scale(1, -1);
        transform: scale(1, -1);
      }

      .fa-flip-both,
      .fa-flip-horizontal.fa-flip-vertical {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
        -webkit-transform: scale(-1, -1);
        transform: scale(-1, -1);
      }

      :root .fa-rotate-90,
      :root .fa-rotate-180,
      :root .fa-rotate-270,
      :root .fa-flip-horizontal,
      :root .fa-flip-vertical,
      :root .fa-flip-both {
        -webkit-filter: none;
        filter: none;
      }

      .fa-stack {
        display: inline-block;
        height: 2em;
        line-height: 2em;
        position: relative;
        vertical-align: middle;
        width: 2.5em;
      }

      .fa-stack-1x,
      .fa-stack-2x {
        left: 0;
        position: absolute;
        text-align: center;
        width: 100%;
      }

      .fa-stack-1x {
        line-height: inherit;
      }

      .fa-stack-2x {
        font-size: 2em;
      }

      .fa-inverse {
        color: #fff;
      }

      /* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
    readers do not read off random characters that represent icons */
      .fa-500px:before {
        content: "\\f26e";
      }

      .fa-accessible-icon:before {
        content: "\\f368";
      }

      .fa-accusoft:before {
        content: "\\f369";
      }

      .fa-acquisitions-incorporated:before {
        content: "\\f6af";
      }

      .fa-ad:before {
        content: "\\f641";
      }

      .fa-address-book:before {
        content: "\\f2b9";
      }

      .fa-address-card:before {
        content: "\\f2bb";
      }

      .fa-adjust:before {
        content: "\\f042";
      }

      .fa-adn:before {
        content: "\\f170";
      }

      .fa-adobe:before {
        content: "\\f778";
      }

      .fa-adversal:before {
        content: "\\f36a";
      }

      .fa-affiliatetheme:before {
        content: "\\f36b";
      }

      .fa-air-freshener:before {
        content: "\\f5d0";
      }

      .fa-airbnb:before {
        content: "\\f834";
      }

      .fa-algolia:before {
        content: "\\f36c";
      }

      .fa-align-center:before {
        content: "\\f037";
      }

      .fa-align-justify:before {
        content: "\\f039";
      }

      .fa-align-left:before {
        content: "\\f036";
      }

      .fa-align-right:before {
        content: "\\f038";
      }

      .fa-alipay:before {
        content: "\\f642";
      }

      .fa-allergies:before {
        content: "\\f461";
      }

      .fa-amazon:before {
        content: "\\f270";
      }

      .fa-amazon-pay:before {
        content: "\\f42c";
      }

      .fa-ambulance:before {
        content: "\\f0f9";
      }

      .fa-american-sign-language-interpreting:before {
        content: "\\f2a3";
      }

      .fa-amilia:before {
        content: "\\f36d";
      }

      .fa-anchor:before {
        content: "\\f13d";
      }

      .fa-android:before {
        content: "\\f17b";
      }

      .fa-angellist:before {
        content: "\\f209";
      }

      .fa-angle-double-down:before {
        content: "\\f103";
      }

      .fa-angle-double-left:before {
        content: "\\f100";
      }

      .fa-angle-double-right:before {
        content: "\\f101";
      }

      .fa-angle-double-up:before {
        content: "\\f102";
      }

      .fa-angle-down:before {
        content: "\\f107";
      }

      .fa-angle-left:before {
        content: "\\f104";
      }

      .fa-angle-right:before {
        content: "\\f105";
      }

      .fa-angle-up:before {
        content: "\\f106";
      }

      .fa-angry:before {
        content: "\\f556";
      }

      .fa-angrycreative:before {
        content: "\\f36e";
      }

      .fa-angular:before {
        content: "\\f420";
      }

      .fa-ankh:before {
        content: "\\f644";
      }

      .fa-app-store:before {
        content: "\\f36f";
      }

      .fa-app-store-ios:before {
        content: "\\f370";
      }

      .fa-apper:before {
        content: "\\f371";
      }

      .fa-apple:before {
        content: "\\f179";
      }

      .fa-apple-alt:before {
        content: "\\f5d1";
      }

      .fa-apple-pay:before {
        content: "\\f415";
      }

      .fa-archive:before {
        content: "\\f187";
      }

      .fa-archway:before {
        content: "\\f557";
      }

      .fa-arrow-alt-circle-down:before {
        content: "\\f358";
      }

      .fa-arrow-alt-circle-left:before {
        content: "\\f359";
      }

      .fa-arrow-alt-circle-right:before {
        content: "\\f35a";
      }

      .fa-arrow-alt-circle-up:before {
        content: "\\f35b";
      }

      .fa-arrow-circle-down:before {
        content: "\\f0ab";
      }

      .fa-arrow-circle-left:before {
        content: "\\f0a8";
      }

      .fa-arrow-circle-right:before {
        content: "\\f0a9";
      }

      .fa-arrow-circle-up:before {
        content: "\\f0aa";
      }

      .fa-arrow-down:before {
        content: "\\f063";
      }

      .fa-arrow-left:before {
        content: "\\f060";
      }

      .fa-arrow-right:before {
        content: "\\f061";
      }

      .fa-arrow-up:before {
        content: "\\f062";
      }

      .fa-arrows-alt:before {
        content: "\\f0b2";
      }

      .fa-arrows-alt-h:before {
        content: "\\f337";
      }

      .fa-arrows-alt-v:before {
        content: "\\f338";
      }

      .fa-artstation:before {
        content: "\\f77a";
      }

      .fa-assistive-listening-systems:before {
        content: "\\f2a2";
      }

      .fa-asterisk:before {
        content: "\\f069";
      }

      .fa-asymmetrik:before {
        content: "\\f372";
      }

      .fa-at:before {
        content: "\\f1fa";
      }

      .fa-atlas:before {
        content: "\\f558";
      }

      .fa-atlassian:before {
        content: "\\f77b";
      }

      .fa-atom:before {
        content: "\\f5d2";
      }

      .fa-audible:before {
        content: "\\f373";
      }

      .fa-audio-description:before {
        content: "\\f29e";
      }

      .fa-autoprefixer:before {
        content: "\\f41c";
      }

      .fa-avianex:before {
        content: "\\f374";
      }

      .fa-aviato:before {
        content: "\\f421";
      }

      .fa-award:before {
        content: "\\f559";
      }

      .fa-aws:before {
        content: "\\f375";
      }

      .fa-baby:before {
        content: "\\f77c";
      }

      .fa-baby-carriage:before {
        content: "\\f77d";
      }

      .fa-backspace:before {
        content: "\\f55a";
      }

      .fa-backward:before {
        content: "\\f04a";
      }

      .fa-bacon:before {
        content: "\\f7e5";
      }

      .fa-balance-scale:before {
        content: "\\f24e";
      }

      .fa-balance-scale-left:before {
        content: "\\f515";
      }

      .fa-balance-scale-right:before {
        content: "\\f516";
      }

      .fa-ban:before {
        content: "\\f05e";
      }

      .fa-band-aid:before {
        content: "\\f462";
      }

      .fa-bandcamp:before {
        content: "\\f2d5";
      }

      .fa-barcode:before {
        content: "\\f02a";
      }

      .fa-bars:before {
        content: "\\f0c9";
      }

      .fa-baseball-ball:before {
        content: "\\f433";
      }

      .fa-basketball-ball:before {
        content: "\\f434";
      }

      .fa-bath:before {
        content: "\\f2cd";
      }

      .fa-battery-empty:before {
        content: "\\f244";
      }

      .fa-battery-full:before {
        content: "\\f240";
      }

      .fa-battery-half:before {
        content: "\\f242";
      }

      .fa-battery-quarter:before {
        content: "\\f243";
      }

      .fa-battery-three-quarters:before {
        content: "\\f241";
      }

      .fa-battle-net:before {
        content: "\\f835";
      }

      .fa-bed:before {
        content: "\\f236";
      }

      .fa-beer:before {
        content: "\\f0fc";
      }

      .fa-behance:before {
        content: "\\f1b4";
      }

      .fa-behance-square:before {
        content: "\\f1b5";
      }

      .fa-bell:before {
        content: "\\f0f3";
      }

      .fa-bell-slash:before {
        content: "\\f1f6";
      }

      .fa-bezier-curve:before {
        content: "\\f55b";
      }

      .fa-bible:before {
        content: "\\f647";
      }

      .fa-bicycle:before {
        content: "\\f206";
      }

      .fa-biking:before {
        content: "\\f84a";
      }

      .fa-bimobject:before {
        content: "\\f378";
      }

      .fa-binoculars:before {
        content: "\\f1e5";
      }

      .fa-biohazard:before {
        content: "\\f780";
      }

      .fa-birthday-cake:before {
        content: "\\f1fd";
      }

      .fa-bitbucket:before {
        content: "\\f171";
      }

      .fa-bitcoin:before {
        content: "\\f379";
      }

      .fa-bity:before {
        content: "\\f37a";
      }

      .fa-black-tie:before {
        content: "\\f27e";
      }

      .fa-blackberry:before {
        content: "\\f37b";
      }

      .fa-blender:before {
        content: "\\f517";
      }

      .fa-blender-phone:before {
        content: "\\f6b6";
      }

      .fa-blind:before {
        content: "\\f29d";
      }

      .fa-blog:before {
        content: "\\f781";
      }

      .fa-blogger:before {
        content: "\\f37c";
      }

      .fa-blogger-b:before {
        content: "\\f37d";
      }

      .fa-bluetooth:before {
        content: "\\f293";
      }

      .fa-bluetooth-b:before {
        content: "\\f294";
      }

      .fa-bold:before {
        content: "\\f032";
      }

      .fa-bolt:before {
        content: "\\f0e7";
      }

      .fa-bomb:before {
        content: "\\f1e2";
      }

      .fa-bone:before {
        content: "\\f5d7";
      }

      .fa-bong:before {
        content: "\\f55c";
      }

      .fa-book:before {
        content: "\\f02d";
      }

      .fa-book-dead:before {
        content: "\\f6b7";
      }

      .fa-book-medical:before {
        content: "\\f7e6";
      }

      .fa-book-open:before {
        content: "\\f518";
      }

      .fa-book-reader:before {
        content: "\\f5da";
      }

      .fa-bookmark:before {
        content: "\\f02e";
      }

      .fa-bootstrap:before {
        content: "\\f836";
      }

      .fa-border-all:before {
        content: "\\f84c";
      }

      .fa-border-none:before {
        content: "\\f850";
      }

      .fa-border-style:before {
        content: "\\f853";
      }

      .fa-bowling-ball:before {
        content: "\\f436";
      }

      .fa-box:before {
        content: "\\f466";
      }

      .fa-box-open:before {
        content: "\\f49e";
      }

      .fa-boxes:before {
        content: "\\f468";
      }

      .fa-braille:before {
        content: "\\f2a1";
      }

      .fa-brain:before {
        content: "\\f5dc";
      }

      .fa-bread-slice:before {
        content: "\\f7ec";
      }

      .fa-briefcase:before {
        content: "\\f0b1";
      }

      .fa-briefcase-medical:before {
        content: "\\f469";
      }

      .fa-broadcast-tower:before {
        content: "\\f519";
      }

      .fa-broom:before {
        content: "\\f51a";
      }

      .fa-brush:before {
        content: "\\f55d";
      }

      .fa-btc:before {
        content: "\\f15a";
      }

      .fa-buffer:before {
        content: "\\f837";
      }

      .fa-bug:before {
        content: "\\f188";
      }

      .fa-building:before {
        content: "\\f1ad";
      }

      .fa-bullhorn:before {
        content: "\\f0a1";
      }

      .fa-bullseye:before {
        content: "\\f140";
      }

      .fa-burn:before {
        content: "\\f46a";
      }

      .fa-buromobelexperte:before {
        content: "\\f37f";
      }

      .fa-bus:before {
        content: "\\f207";
      }

      .fa-bus-alt:before {
        content: "\\f55e";
      }

      .fa-business-time:before {
        content: "\\f64a";
      }

      .fa-buy-n-large:before {
        content: "\\f8a6";
      }

      .fa-buysellads:before {
        content: "\\f20d";
      }

      .fa-calculator:before {
        content: "\\f1ec";
      }

      .fa-calendar:before {
        content: "\\f133";
      }

      .fa-calendar-alt:before {
        content: "\\f073";
      }

      .fa-calendar-check:before {
        content: "\\f274";
      }

      .fa-calendar-day:before {
        content: "\\f783";
      }

      .fa-calendar-minus:before {
        content: "\\f272";
      }

      .fa-calendar-plus:before {
        content: "\\f271";
      }

      .fa-calendar-times:before {
        content: "\\f273";
      }

      .fa-calendar-week:before {
        content: "\\f784";
      }

      .fa-camera:before {
        content: "\\f030";
      }

      .fa-camera-retro:before {
        content: "\\f083";
      }

      .fa-campground:before {
        content: "\\f6bb";
      }

      .fa-canadian-maple-leaf:before {
        content: "\\f785";
      }

      .fa-candy-cane:before {
        content: "\\f786";
      }

      .fa-cannabis:before {
        content: "\\f55f";
      }

      .fa-capsules:before {
        content: "\\f46b";
      }

      .fa-car:before {
        content: "\\f1b9";
      }

      .fa-car-alt:before {
        content: "\\f5de";
      }

      .fa-car-battery:before {
        content: "\\f5df";
      }

      .fa-car-crash:before {
        content: "\\f5e1";
      }

      .fa-car-side:before {
        content: "\\f5e4";
      }

      .fa-caret-down:before {
        content: "\\f0d7";
      }

      .fa-caret-left:before {
        content: "\\f0d9";
      }

      .fa-caret-right:before {
        content: "\\f0da";
      }

      .fa-caret-square-down:before {
        content: "\\f150";
      }

      .fa-caret-square-left:before {
        content: "\\f191";
      }

      .fa-caret-square-right:before {
        content: "\\f152";
      }

      .fa-caret-square-up:before {
        content: "\\f151";
      }

      .fa-caret-up:before {
        content: "\\f0d8";
      }

      .fa-carrot:before {
        content: "\\f787";
      }

      .fa-cart-arrow-down:before {
        content: "\\f218";
      }

      .fa-cart-plus:before {
        content: "\\f217";
      }

      .fa-cash-register:before {
        content: "\\f788";
      }

      .fa-cat:before {
        content: "\\f6be";
      }

      .fa-cc-amazon-pay:before {
        content: "\\f42d";
      }

      .fa-cc-amex:before {
        content: "\\f1f3";
      }

      .fa-cc-apple-pay:before {
        content: "\\f416";
      }

      .fa-cc-diners-club:before {
        content: "\\f24c";
      }

      .fa-cc-discover:before {
        content: "\\f1f2";
      }

      .fa-cc-jcb:before {
        content: "\\f24b";
      }

      .fa-cc-mastercard:before {
        content: "\\f1f1";
      }

      .fa-cc-paypal:before {
        content: "\\f1f4";
      }

      .fa-cc-stripe:before {
        content: "\\f1f5";
      }

      .fa-cc-visa:before {
        content: "\\f1f0";
      }

      .fa-centercode:before {
        content: "\\f380";
      }

      .fa-centos:before {
        content: "\\f789";
      }

      .fa-certificate:before {
        content: "\\f0a3";
      }

      .fa-chair:before {
        content: "\\f6c0";
      }

      .fa-chalkboard:before {
        content: "\\f51b";
      }

      .fa-chalkboard-teacher:before {
        content: "\\f51c";
      }

      .fa-charging-station:before {
        content: "\\f5e7";
      }

      .fa-chart-area:before {
        content: "\\f1fe";
      }

      .fa-chart-bar:before {
        content: "\\f080";
      }

      .fa-chart-line:before {
        content: "\\f201";
      }

      .fa-chart-pie:before {
        content: "\\f200";
      }

      .fa-check:before {
        content: "\\f00c";
      }

      .fa-check-circle:before {
        content: "\\f058";
      }

      .fa-check-double:before {
        content: "\\f560";
      }

      .fa-check-square:before {
        content: "\\f14a";
      }

      .fa-cheese:before {
        content: "\\f7ef";
      }

      .fa-chess:before {
        content: "\\f439";
      }

      .fa-chess-bishop:before {
        content: "\\f43a";
      }

      .fa-chess-board:before {
        content: "\\f43c";
      }

      .fa-chess-king:before {
        content: "\\f43f";
      }

      .fa-chess-knight:before {
        content: "\\f441";
      }

      .fa-chess-pawn:before {
        content: "\\f443";
      }

      .fa-chess-queen:before {
        content: "\\f445";
      }

      .fa-chess-rook:before {
        content: "\\f447";
      }

      .fa-chevron-circle-down:before {
        content: "\\f13a";
      }

      .fa-chevron-circle-left:before {
        content: "\\f137";
      }

      .fa-chevron-circle-right:before {
        content: "\\f138";
      }

      .fa-chevron-circle-up:before {
        content: "\\f139";
      }

      .fa-chevron-down:before {
        content: "\\f078";
      }

      .fa-chevron-left:before {
        content: "\\f053";
      }

      .fa-chevron-right:before {
        content: "\\f054";
      }

      .fa-chevron-up:before {
        content: "\\f077";
      }

      .fa-child:before {
        content: "\\f1ae";
      }

      .fa-chrome:before {
        content: "\\f268";
      }

      .fa-chromecast:before {
        content: "\\f838";
      }

      .fa-church:before {
        content: "\\f51d";
      }

      .fa-circle:before {
        content: "\\f111";
      }

      .fa-circle-notch:before {
        content: "\\f1ce";
      }

      .fa-city:before {
        content: "\\f64f";
      }

      .fa-clinic-medical:before {
        content: "\\f7f2";
      }

      .fa-clipboard:before {
        content: "\\f328";
      }

      .fa-clipboard-check:before {
        content: "\\f46c";
      }

      .fa-clipboard-list:before {
        content: "\\f46d";
      }

      .fa-clock:before {
        content: "\\f017";
      }

      .fa-clone:before {
        content: "\\f24d";
      }

      .fa-closed-captioning:before {
        content: "\\f20a";
      }

      .fa-cloud:before {
        content: "\\f0c2";
      }

      .fa-cloud-download-alt:before {
        content: "\\f381";
      }

      .fa-cloud-meatball:before {
        content: "\\f73b";
      }

      .fa-cloud-moon:before {
        content: "\\f6c3";
      }

      .fa-cloud-moon-rain:before {
        content: "\\f73c";
      }

      .fa-cloud-rain:before {
        content: "\\f73d";
      }

      .fa-cloud-showers-heavy:before {
        content: "\\f740";
      }

      .fa-cloud-sun:before {
        content: "\\f6c4";
      }

      .fa-cloud-sun-rain:before {
        content: "\\f743";
      }

      .fa-cloud-upload-alt:before {
        content: "\\f382";
      }

      .fa-cloudscale:before {
        content: "\\f383";
      }

      .fa-cloudsmith:before {
        content: "\\f384";
      }

      .fa-cloudversify:before {
        content: "\\f385";
      }

      .fa-cocktail:before {
        content: "\\f561";
      }

      .fa-code:before {
        content: "\\f121";
      }

      .fa-code-branch:before {
        content: "\\f126";
      }

      .fa-codepen:before {
        content: "\\f1cb";
      }

      .fa-codiepie:before {
        content: "\\f284";
      }

      .fa-coffee:before {
        content: "\\f0f4";
      }

      .fa-cog:before {
        content: "\\f013";
      }

      .fa-cogs:before {
        content: "\\f085";
      }

      .fa-coins:before {
        content: "\\f51e";
      }

      .fa-columns:before {
        content: "\\f0db";
      }

      .fa-comment:before {
        content: "\\f075";
      }

      .fa-comment-alt:before {
        content: "\\f27a";
      }

      .fa-comment-dollar:before {
        content: "\\f651";
      }

      .fa-comment-dots:before {
        content: "\\f4ad";
      }

      .fa-comment-medical:before {
        content: "\\f7f5";
      }

      .fa-comment-slash:before {
        content: "\\f4b3";
      }

      .fa-comments:before {
        content: "\\f086";
      }

      .fa-comments-dollar:before {
        content: "\\f653";
      }

      .fa-compact-disc:before {
        content: "\\f51f";
      }

      .fa-compass:before {
        content: "\\f14e";
      }

      .fa-compress:before {
        content: "\\f066";
      }

      .fa-compress-arrows-alt:before {
        content: "\\f78c";
      }

      .fa-concierge-bell:before {
        content: "\\f562";
      }

      .fa-confluence:before {
        content: "\\f78d";
      }

      .fa-connectdevelop:before {
        content: "\\f20e";
      }

      .fa-contao:before {
        content: "\\f26d";
      }

      .fa-cookie:before {
        content: "\\f563";
      }

      .fa-cookie-bite:before {
        content: "\\f564";
      }

      .fa-copy:before {
        content: "\\f0c5";
      }

      .fa-copyright:before {
        content: "\\f1f9";
      }

      .fa-cotton-bureau:before {
        content: "\\f89e";
      }

      .fa-couch:before {
        content: "\\f4b8";
      }

      .fa-cpanel:before {
        content: "\\f388";
      }

      .fa-creative-commons:before {
        content: "\\f25e";
      }

      .fa-creative-commons-by:before {
        content: "\\f4e7";
      }

      .fa-creative-commons-nc:before {
        content: "\\f4e8";
      }

      .fa-creative-commons-nc-eu:before {
        content: "\\f4e9";
      }

      .fa-creative-commons-nc-jp:before {
        content: "\\f4ea";
      }

      .fa-creative-commons-nd:before {
        content: "\\f4eb";
      }

      .fa-creative-commons-pd:before {
        content: "\\f4ec";
      }

      .fa-creative-commons-pd-alt:before {
        content: "\\f4ed";
      }

      .fa-creative-commons-remix:before {
        content: "\\f4ee";
      }

      .fa-creative-commons-sa:before {
        content: "\\f4ef";
      }

      .fa-creative-commons-sampling:before {
        content: "\\f4f0";
      }

      .fa-creative-commons-sampling-plus:before {
        content: "\\f4f1";
      }

      .fa-creative-commons-share:before {
        content: "\\f4f2";
      }

      .fa-creative-commons-zero:before {
        content: "\\f4f3";
      }

      .fa-credit-card:before {
        content: "\\f09d";
      }

      .fa-critical-role:before {
        content: "\\f6c9";
      }

      .fa-crop:before {
        content: "\\f125";
      }

      .fa-crop-alt:before {
        content: "\\f565";
      }

      .fa-cross:before {
        content: "\\f654";
      }

      .fa-crosshairs:before {
        content: "\\f05b";
      }

      .fa-crow:before {
        content: "\\f520";
      }

      .fa-crown:before {
        content: "\\f521";
      }

      .fa-crutch:before {
        content: "\\f7f7";
      }

      .fa-css3:before {
        content: "\\f13c";
      }

      .fa-css3-alt:before {
        content: "\\f38b";
      }

      .fa-cube:before {
        content: "\\f1b2";
      }

      .fa-cubes:before {
        content: "\\f1b3";
      }

      .fa-cut:before {
        content: "\\f0c4";
      }

      .fa-cuttlefish:before {
        content: "\\f38c";
      }

      .fa-d-and-d:before {
        content: "\\f38d";
      }

      .fa-d-and-d-beyond:before {
        content: "\\f6ca";
      }

      .fa-dashcube:before {
        content: "\\f210";
      }

      .fa-database:before {
        content: "\\f1c0";
      }

      .fa-deaf:before {
        content: "\\f2a4";
      }

      .fa-delicious:before {
        content: "\\f1a5";
      }

      .fa-democrat:before {
        content: "\\f747";
      }

      .fa-deploydog:before {
        content: "\\f38e";
      }

      .fa-deskpro:before {
        content: "\\f38f";
      }

      .fa-desktop:before {
        content: "\\f108";
      }

      .fa-dev:before {
        content: "\\f6cc";
      }

      .fa-deviantart:before {
        content: "\\f1bd";
      }

      .fa-dharmachakra:before {
        content: "\\f655";
      }

      .fa-dhl:before {
        content: "\\f790";
      }

      .fa-diagnoses:before {
        content: "\\f470";
      }

      .fa-diaspora:before {
        content: "\\f791";
      }

      .fa-dice:before {
        content: "\\f522";
      }

      .fa-dice-d20:before {
        content: "\\f6cf";
      }

      .fa-dice-d6:before {
        content: "\\f6d1";
      }

      .fa-dice-five:before {
        content: "\\f523";
      }

      .fa-dice-four:before {
        content: "\\f524";
      }

      .fa-dice-one:before {
        content: "\\f525";
      }

      .fa-dice-six:before {
        content: "\\f526";
      }

      .fa-dice-three:before {
        content: "\\f527";
      }

      .fa-dice-two:before {
        content: "\\f528";
      }

      .fa-digg:before {
        content: "\\f1a6";
      }

      .fa-digital-ocean:before {
        content: "\\f391";
      }

      .fa-digital-tachograph:before {
        content: "\\f566";
      }

      .fa-directions:before {
        content: "\\f5eb";
      }

      .fa-discord:before {
        content: "\\f392";
      }

      .fa-discourse:before {
        content: "\\f393";
      }

      .fa-divide:before {
        content: "\\f529";
      }

      .fa-dizzy:before {
        content: "\\f567";
      }

      .fa-dna:before {
        content: "\\f471";
      }

      .fa-dochub:before {
        content: "\\f394";
      }

      .fa-docker:before {
        content: "\\f395";
      }

      .fa-dog:before {
        content: "\\f6d3";
      }

      .fa-dollar-sign:before {
        content: "\\f155";
      }

      .fa-dolly:before {
        content: "\\f472";
      }

      .fa-dolly-flatbed:before {
        content: "\\f474";
      }

      .fa-donate:before {
        content: "\\f4b9";
      }

      .fa-door-closed:before {
        content: "\\f52a";
      }

      .fa-door-open:before {
        content: "\\f52b";
      }

      .fa-dot-circle:before {
        content: "\\f192";
      }

      .fa-dove:before {
        content: "\\f4ba";
      }

      .fa-download:before {
        content: "\\f019";
      }

      .fa-draft2digital:before {
        content: "\\f396";
      }

      .fa-drafting-compass:before {
        content: "\\f568";
      }

      .fa-dragon:before {
        content: "\\f6d5";
      }

      .fa-draw-polygon:before {
        content: "\\f5ee";
      }

      .fa-dribbble:before {
        content: "\\f17d";
      }

      .fa-dribbble-square:before {
        content: "\\f397";
      }

      .fa-dropbox:before {
        content: "\\f16b";
      }

      .fa-drum:before {
        content: "\\f569";
      }

      .fa-drum-steelpan:before {
        content: "\\f56a";
      }

      .fa-drumstick-bite:before {
        content: "\\f6d7";
      }

      .fa-drupal:before {
        content: "\\f1a9";
      }

      .fa-dumbbell:before {
        content: "\\f44b";
      }

      .fa-dumpster:before {
        content: "\\f793";
      }

      .fa-dumpster-fire:before {
        content: "\\f794";
      }

      .fa-dungeon:before {
        content: "\\f6d9";
      }

      .fa-dyalog:before {
        content: "\\f399";
      }

      .fa-earlybirds:before {
        content: "\\f39a";
      }

      .fa-ebay:before {
        content: "\\f4f4";
      }

      .fa-edge:before {
        content: "\\f282";
      }

      .fa-edit:before {
        content: "\\f044";
      }

      .fa-egg:before {
        content: "\\f7fb";
      }

      .fa-eject:before {
        content: "\\f052";
      }

      .fa-elementor:before {
        content: "\\f430";
      }

      .fa-ellipsis-h:before {
        content: "\\f141";
      }

      .fa-ellipsis-v:before {
        content: "\\f142";
      }

      .fa-ello:before {
        content: "\\f5f1";
      }

      .fa-ember:before {
        content: "\\f423";
      }

      .fa-empire:before {
        content: "\\f1d1";
      }

      .fa-envelope:before {
        content: "\\f0e0";
      }

      .fa-envelope-open:before {
        content: "\\f2b6";
      }

      .fa-envelope-open-text:before {
        content: "\\f658";
      }

      .fa-envelope-square:before {
        content: "\\f199";
      }

      .fa-envira:before {
        content: "\\f299";
      }

      .fa-equals:before {
        content: "\\f52c";
      }

      .fa-eraser:before {
        content: "\\f12d";
      }

      .fa-erlang:before {
        content: "\\f39d";
      }

      .fa-ethereum:before {
        content: "\\f42e";
      }

      .fa-ethernet:before {
        content: "\\f796";
      }

      .fa-etsy:before {
        content: "\\f2d7";
      }

      .fa-euro-sign:before {
        content: "\\f153";
      }

      .fa-evernote:before {
        content: "\\f839";
      }

      .fa-exchange-alt:before {
        content: "\\f362";
      }

      .fa-exclamation:before {
        content: "\\f12a";
      }

      .fa-exclamation-circle:before {
        content: "\\f06a";
      }

      .fa-exclamation-triangle:before {
        content: "\\f071";
      }

      .fa-expand:before {
        content: "\\f065";
      }

      .fa-expand-arrows-alt:before {
        content: "\\f31e";
      }

      .fa-expeditedssl:before {
        content: "\\f23e";
      }

      .fa-external-link-alt:before {
        content: "\\f35d";
      }

      .fa-external-link-square-alt:before {
        content: "\\f360";
      }

      .fa-eye:before {
        content: "\\f06e";
      }

      .fa-eye-dropper:before {
        content: "\\f1fb";
      }

      .fa-eye-slash:before {
        content: "\\f070";
      }

      .fa-facebook:before {
        content: "\\f09a";
      }

      .fa-facebook-f:before {
        content: "\\f39e";
      }

      .fa-facebook-messenger:before {
        content: "\\f39f";
      }

      .fa-facebook-square:before {
        content: "\\f082";
      }

      .fa-fan:before {
        content: "\\f863";
      }

      .fa-fantasy-flight-games:before {
        content: "\\f6dc";
      }

      .fa-fast-backward:before {
        content: "\\f049";
      }

      .fa-fast-forward:before {
        content: "\\f050";
      }

      .fa-fax:before {
        content: "\\f1ac";
      }

      .fa-feather:before {
        content: "\\f52d";
      }

      .fa-feather-alt:before {
        content: "\\f56b";
      }

      .fa-fedex:before {
        content: "\\f797";
      }

      .fa-fedora:before {
        content: "\\f798";
      }

      .fa-female:before {
        content: "\\f182";
      }

      .fa-fighter-jet:before {
        content: "\\f0fb";
      }

      .fa-figma:before {
        content: "\\f799";
      }

      .fa-file:before {
        content: "\\f15b";
      }

      .fa-file-alt:before {
        content: "\\f15c";
      }

      .fa-file-archive:before {
        content: "\\f1c6";
      }

      .fa-file-audio:before {
        content: "\\f1c7";
      }

      .fa-file-code:before {
        content: "\\f1c9";
      }

      .fa-file-contract:before {
        content: "\\f56c";
      }

      .fa-file-csv:before {
        content: "\\f6dd";
      }

      .fa-file-download:before {
        content: "\\f56d";
      }

      .fa-file-excel:before {
        content: "\\f1c3";
      }

      .fa-file-export:before {
        content: "\\f56e";
      }

      .fa-file-image:before {
        content: "\\f1c5";
      }

      .fa-file-import:before {
        content: "\\f56f";
      }

      .fa-file-invoice:before {
        content: "\\f570";
      }

      .fa-file-invoice-dollar:before {
        content: "\\f571";
      }

      .fa-file-medical:before {
        content: "\\f477";
      }

      .fa-file-medical-alt:before {
        content: "\\f478";
      }

      .fa-file-pdf:before {
        content: "\\f1c1";
      }

      .fa-file-powerpoint:before {
        content: "\\f1c4";
      }

      .fa-file-prescription:before {
        content: "\\f572";
      }

      .fa-file-signature:before {
        content: "\\f573";
      }

      .fa-file-upload:before {
        content: "\\f574";
      }

      .fa-file-video:before {
        content: "\\f1c8";
      }

      .fa-file-word:before {
        content: "\\f1c2";
      }

      .fa-fill:before {
        content: "\\f575";
      }

      .fa-fill-drip:before {
        content: "\\f576";
      }

      .fa-film:before {
        content: "\\f008";
      }

      .fa-filter:before {
        content: "\\f0b0";
      }

      .fa-fingerprint:before {
        content: "\\f577";
      }

      .fa-fire:before {
        content: "\\f06d";
      }

      .fa-fire-alt:before {
        content: "\\f7e4";
      }

      .fa-fire-extinguisher:before {
        content: "\\f134";
      }

      .fa-firefox:before {
        content: "\\f269";
      }

      .fa-first-aid:before {
        content: "\\f479";
      }

      .fa-first-order:before {
        content: "\\f2b0";
      }

      .fa-first-order-alt:before {
        content: "\\f50a";
      }

      .fa-firstdraft:before {
        content: "\\f3a1";
      }

      .fa-fish:before {
        content: "\\f578";
      }

      .fa-fist-raised:before {
        content: "\\f6de";
      }

      .fa-flag:before {
        content: "\\f024";
      }

      .fa-flag-checkered:before {
        content: "\\f11e";
      }

      .fa-flag-usa:before {
        content: "\\f74d";
      }

      .fa-flask:before {
        content: "\\f0c3";
      }

      .fa-flickr:before {
        content: "\\f16e";
      }

      .fa-flipboard:before {
        content: "\\f44d";
      }

      .fa-flushed:before {
        content: "\\f579";
      }

      .fa-fly:before {
        content: "\\f417";
      }

      .fa-folder:before {
        content: "\\f07b";
      }

      .fa-folder-minus:before {
        content: "\\f65d";
      }

      .fa-folder-open:before {
        content: "\\f07c";
      }

      .fa-folder-plus:before {
        content: "\\f65e";
      }

      .fa-font:before {
        content: "\\f031";
      }

      .fa-font-awesome:before {
        content: "\\f2b4";
      }

      .fa-font-awesome-alt:before {
        content: "\\f35c";
      }

      .fa-font-awesome-flag:before {
        content: "\\f425";
      }

      .fa-font-awesome-logo-full:before {
        content: "\\f4e6";
      }

      .fa-fonticons:before {
        content: "\\f280";
      }

      .fa-fonticons-fi:before {
        content: "\\f3a2";
      }

      .fa-football-ball:before {
        content: "\\f44e";
      }

      .fa-fort-awesome:before {
        content: "\\f286";
      }

      .fa-fort-awesome-alt:before {
        content: "\\f3a3";
      }

      .fa-forumbee:before {
        content: "\\f211";
      }

      .fa-forward:before {
        content: "\\f04e";
      }

      .fa-foursquare:before {
        content: "\\f180";
      }

      .fa-free-code-camp:before {
        content: "\\f2c5";
      }

      .fa-freebsd:before {
        content: "\\f3a4";
      }

      .fa-frog:before {
        content: "\\f52e";
      }

      .fa-frown:before {
        content: "\\f119";
      }

      .fa-frown-open:before {
        content: "\\f57a";
      }

      .fa-fulcrum:before {
        content: "\\f50b";
      }

      .fa-funnel-dollar:before {
        content: "\\f662";
      }

      .fa-futbol:before {
        content: "\\f1e3";
      }

      .fa-galactic-republic:before {
        content: "\\f50c";
      }

      .fa-galactic-senate:before {
        content: "\\f50d";
      }

      .fa-gamepad:before {
        content: "\\f11b";
      }

      .fa-gas-pump:before {
        content: "\\f52f";
      }

      .fa-gavel:before {
        content: "\\f0e3";
      }

      .fa-gem:before {
        content: "\\f3a5";
      }

      .fa-genderless:before {
        content: "\\f22d";
      }

      .fa-get-pocket:before {
        content: "\\f265";
      }

      .fa-gg:before {
        content: "\\f260";
      }

      .fa-gg-circle:before {
        content: "\\f261";
      }

      .fa-ghost:before {
        content: "\\f6e2";
      }

      .fa-gift:before {
        content: "\\f06b";
      }

      .fa-gifts:before {
        content: "\\f79c";
      }

      .fa-git:before {
        content: "\\f1d3";
      }

      .fa-git-alt:before {
        content: "\\f841";
      }

      .fa-git-square:before {
        content: "\\f1d2";
      }

      .fa-github:before {
        content: "\\f09b";
      }

      .fa-github-alt:before {
        content: "\\f113";
      }

      .fa-github-square:before {
        content: "\\f092";
      }

      .fa-gitkraken:before {
        content: "\\f3a6";
      }

      .fa-gitlab:before {
        content: "\\f296";
      }

      .fa-gitter:before {
        content: "\\f426";
      }

      .fa-glass-cheers:before {
        content: "\\f79f";
      }

      .fa-glass-martini:before {
        content: "\\f000";
      }

      .fa-glass-martini-alt:before {
        content: "\\f57b";
      }

      .fa-glass-whiskey:before {
        content: "\\f7a0";
      }

      .fa-glasses:before {
        content: "\\f530";
      }

      .fa-glide:before {
        content: "\\f2a5";
      }

      .fa-glide-g:before {
        content: "\\f2a6";
      }

      .fa-globe:before {
        content: "\\f0ac";
      }

      .fa-globe-africa:before {
        content: "\\f57c";
      }

      .fa-globe-americas:before {
        content: "\\f57d";
      }

      .fa-globe-asia:before {
        content: "\\f57e";
      }

      .fa-globe-europe:before {
        content: "\\f7a2";
      }

      .fa-gofore:before {
        content: "\\f3a7";
      }

      .fa-golf-ball:before {
        content: "\\f450";
      }

      .fa-goodreads:before {
        content: "\\f3a8";
      }

      .fa-goodreads-g:before {
        content: "\\f3a9";
      }

      .fa-google:before {
        content: "\\f1a0";
      }

      .fa-google-drive:before {
        content: "\\f3aa";
      }

      .fa-google-play:before {
        content: "\\f3ab";
      }

      .fa-google-plus:before {
        content: "\\f2b3";
      }

      .fa-google-plus-g:before {
        content: "\\f0d5";
      }

      .fa-google-plus-square:before {
        content: "\\f0d4";
      }

      .fa-google-wallet:before {
        content: "\\f1ee";
      }

      .fa-gopuram:before {
        content: "\\f664";
      }

      .fa-graduation-cap:before {
        content: "\\f19d";
      }

      .fa-gratipay:before {
        content: "\\f184";
      }

      .fa-grav:before {
        content: "\\f2d6";
      }

      .fa-greater-than:before {
        content: "\\f531";
      }

      .fa-greater-than-equal:before {
        content: "\\f532";
      }

      .fa-grimace:before {
        content: "\\f57f";
      }

      .fa-grin:before {
        content: "\\f580";
      }

      .fa-grin-alt:before {
        content: "\\f581";
      }

      .fa-grin-beam:before {
        content: "\\f582";
      }

      .fa-grin-beam-sweat:before {
        content: "\\f583";
      }

      .fa-grin-hearts:before {
        content: "\\f584";
      }

      .fa-grin-squint:before {
        content: "\\f585";
      }

      .fa-grin-squint-tears:before {
        content: "\\f586";
      }

      .fa-grin-stars:before {
        content: "\\f587";
      }

      .fa-grin-tears:before {
        content: "\\f588";
      }

      .fa-grin-tongue:before {
        content: "\\f589";
      }

      .fa-grin-tongue-squint:before {
        content: "\\f58a";
      }

      .fa-grin-tongue-wink:before {
        content: "\\f58b";
      }

      .fa-grin-wink:before {
        content: "\\f58c";
      }

      .fa-grip-horizontal:before {
        content: "\\f58d";
      }

      .fa-grip-lines:before {
        content: "\\f7a4";
      }

      .fa-grip-lines-vertical:before {
        content: "\\f7a5";
      }

      .fa-grip-vertical:before {
        content: "\\f58e";
      }

      .fa-gripfire:before {
        content: "\\f3ac";
      }

      .fa-grunt:before {
        content: "\\f3ad";
      }

      .fa-guitar:before {
        content: "\\f7a6";
      }

      .fa-gulp:before {
        content: "\\f3ae";
      }

      .fa-h-square:before {
        content: "\\f0fd";
      }

      .fa-hacker-news:before {
        content: "\\f1d4";
      }

      .fa-hacker-news-square:before {
        content: "\\f3af";
      }

      .fa-hackerrank:before {
        content: "\\f5f7";
      }

      .fa-hamburger:before {
        content: "\\f805";
      }

      .fa-hammer:before {
        content: "\\f6e3";
      }

      .fa-hamsa:before {
        content: "\\f665";
      }

      .fa-hand-holding:before {
        content: "\\f4bd";
      }

      .fa-hand-holding-heart:before {
        content: "\\f4be";
      }

      .fa-hand-holding-usd:before {
        content: "\\f4c0";
      }

      .fa-hand-lizard:before {
        content: "\\f258";
      }

      .fa-hand-middle-finger:before {
        content: "\\f806";
      }

      .fa-hand-paper:before {
        content: "\\f256";
      }

      .fa-hand-peace:before {
        content: "\\f25b";
      }

      .fa-hand-point-down:before {
        content: "\\f0a7";
      }

      .fa-hand-point-left:before {
        content: "\\f0a5";
      }

      .fa-hand-point-right:before {
        content: "\\f0a4";
      }

      .fa-hand-point-up:before {
        content: "\\f0a6";
      }

      .fa-hand-pointer:before {
        content: "\\f25a";
      }

      .fa-hand-rock:before {
        content: "\\f255";
      }

      .fa-hand-scissors:before {
        content: "\\f257";
      }

      .fa-hand-spock:before {
        content: "\\f259";
      }

      .fa-hands:before {
        content: "\\f4c2";
      }

      .fa-hands-helping:before {
        content: "\\f4c4";
      }

      .fa-handshake:before {
        content: "\\f2b5";
      }

      .fa-hanukiah:before {
        content: "\\f6e6";
      }

      .fa-hard-hat:before {
        content: "\\f807";
      }

      .fa-hashtag:before {
        content: "\\f292";
      }

      .fa-hat-cowboy:before {
        content: "\\f8c0";
      }

      .fa-hat-cowboy-side:before {
        content: "\\f8c1";
      }

      .fa-hat-wizard:before {
        content: "\\f6e8";
      }

      .fa-haykal:before {
        content: "\\f666";
      }

      .fa-hdd:before {
        content: "\\f0a0";
      }

      .fa-heading:before {
        content: "\\f1dc";
      }

      .fa-headphones:before {
        content: "\\f025";
      }

      .fa-headphones-alt:before {
        content: "\\f58f";
      }

      .fa-headset:before {
        content: "\\f590";
      }

      .fa-heart:before {
        content: "\\f004";
      }

      .fa-heart-broken:before {
        content: "\\f7a9";
      }

      .fa-heartbeat:before {
        content: "\\f21e";
      }

      .fa-helicopter:before {
        content: "\\f533";
      }

      .fa-highlighter:before {
        content: "\\f591";
      }

      .fa-hiking:before {
        content: "\\f6ec";
      }

      .fa-hippo:before {
        content: "\\f6ed";
      }

      .fa-hips:before {
        content: "\\f452";
      }

      .fa-hire-a-helper:before {
        content: "\\f3b0";
      }

      .fa-history:before {
        content: "\\f1da";
      }

      .fa-hockey-puck:before {
        content: "\\f453";
      }

      .fa-holly-berry:before {
        content: "\\f7aa";
      }

      .fa-home:before {
        content: "\\f015";
      }

      .fa-hooli:before {
        content: "\\f427";
      }

      .fa-hornbill:before {
        content: "\\f592";
      }

      .fa-horse:before {
        content: "\\f6f0";
      }

      .fa-horse-head:before {
        content: "\\f7ab";
      }

      .fa-hospital:before {
        content: "\\f0f8";
      }

      .fa-hospital-alt:before {
        content: "\\f47d";
      }

      .fa-hospital-symbol:before {
        content: "\\f47e";
      }

      .fa-hot-tub:before {
        content: "\\f593";
      }

      .fa-hotdog:before {
        content: "\\f80f";
      }

      .fa-hotel:before {
        content: "\\f594";
      }

      .fa-hotjar:before {
        content: "\\f3b1";
      }

      .fa-hourglass:before {
        content: "\\f254";
      }

      .fa-hourglass-end:before {
        content: "\\f253";
      }

      .fa-hourglass-half:before {
        content: "\\f252";
      }

      .fa-hourglass-start:before {
        content: "\\f251";
      }

      .fa-house-damage:before {
        content: "\\f6f1";
      }

      .fa-houzz:before {
        content: "\\f27c";
      }

      .fa-hryvnia:before {
        content: "\\f6f2";
      }

      .fa-html5:before {
        content: "\\f13b";
      }

      .fa-hubspot:before {
        content: "\\f3b2";
      }

      .fa-i-cursor:before {
        content: "\\f246";
      }

      .fa-ice-cream:before {
        content: "\\f810";
      }

      .fa-icicles:before {
        content: "\\f7ad";
      }

      .fa-icons:before {
        content: "\\f86d";
      }

      .fa-id-badge:before {
        content: "\\f2c1";
      }

      .fa-id-card:before {
        content: "\\f2c2";
      }

      .fa-id-card-alt:before {
        content: "\\f47f";
      }

      .fa-igloo:before {
        content: "\\f7ae";
      }

      .fa-image:before {
        content: "\\f03e";
      }

      .fa-images:before {
        content: "\\f302";
      }

      .fa-imdb:before {
        content: "\\f2d8";
      }

      .fa-inbox:before {
        content: "\\f01c";
      }

      .fa-indent:before {
        content: "\\f03c";
      }

      .fa-industry:before {
        content: "\\f275";
      }

      .fa-infinity:before {
        content: "\\f534";
      }

      .fa-info:before {
        content: "\\f129";
      }

      .fa-info-circle:before {
        content: "\\f05a";
      }

      .fa-instagram:before {
        content: "\\f16d";
      }

      .fa-intercom:before {
        content: "\\f7af";
      }

      .fa-internet-explorer:before {
        content: "\\f26b";
      }

      .fa-invision:before {
        content: "\\f7b0";
      }

      .fa-ioxhost:before {
        content: "\\f208";
      }

      .fa-italic:before {
        content: "\\f033";
      }

      .fa-itch-io:before {
        content: "\\f83a";
      }

      .fa-itunes:before {
        content: "\\f3b4";
      }

      .fa-itunes-note:before {
        content: "\\f3b5";
      }

      .fa-java:before {
        content: "\\f4e4";
      }

      .fa-jedi:before {
        content: "\\f669";
      }

      .fa-jedi-order:before {
        content: "\\f50e";
      }

      .fa-jenkins:before {
        content: "\\f3b6";
      }

      .fa-jira:before {
        content: "\\f7b1";
      }

      .fa-joget:before {
        content: "\\f3b7";
      }

      .fa-joint:before {
        content: "\\f595";
      }

      .fa-joomla:before {
        content: "\\f1aa";
      }

      .fa-journal-whills:before {
        content: "\\f66a";
      }

      .fa-js:before {
        content: "\\f3b8";
      }

      .fa-js-square:before {
        content: "\\f3b9";
      }

      .fa-jsfiddle:before {
        content: "\\f1cc";
      }

      .fa-kaaba:before {
        content: "\\f66b";
      }

      .fa-kaggle:before {
        content: "\\f5fa";
      }

      .fa-key:before {
        content: "\\f084";
      }

      .fa-keybase:before {
        content: "\\f4f5";
      }

      .fa-keyboard:before {
        content: "\\f11c";
      }

      .fa-keycdn:before {
        content: "\\f3ba";
      }

      .fa-khanda:before {
        content: "\\f66d";
      }

      .fa-kickstarter:before {
        content: "\\f3bb";
      }

      .fa-kickstarter-k:before {
        content: "\\f3bc";
      }

      .fa-kiss:before {
        content: "\\f596";
      }

      .fa-kiss-beam:before {
        content: "\\f597";
      }

      .fa-kiss-wink-heart:before {
        content: "\\f598";
      }

      .fa-kiwi-bird:before {
        content: "\\f535";
      }

      .fa-korvue:before {
        content: "\\f42f";
      }

      .fa-landmark:before {
        content: "\\f66f";
      }

      .fa-language:before {
        content: "\\f1ab";
      }

      .fa-laptop:before {
        content: "\\f109";
      }

      .fa-laptop-code:before {
        content: "\\f5fc";
      }

      .fa-laptop-medical:before {
        content: "\\f812";
      }

      .fa-laravel:before {
        content: "\\f3bd";
      }

      .fa-lastfm:before {
        content: "\\f202";
      }

      .fa-lastfm-square:before {
        content: "\\f203";
      }

      .fa-laugh:before {
        content: "\\f599";
      }

      .fa-laugh-beam:before {
        content: "\\f59a";
      }

      .fa-laugh-squint:before {
        content: "\\f59b";
      }

      .fa-laugh-wink:before {
        content: "\\f59c";
      }

      .fa-layer-group:before {
        content: "\\f5fd";
      }

      .fa-leaf:before {
        content: "\\f06c";
      }

      .fa-leanpub:before {
        content: "\\f212";
      }

      .fa-lemon:before {
        content: "\\f094";
      }

      .fa-less:before {
        content: "\\f41d";
      }

      .fa-less-than:before {
        content: "\\f536";
      }

      .fa-less-than-equal:before {
        content: "\\f537";
      }

      .fa-level-down-alt:before {
        content: "\\f3be";
      }

      .fa-level-up-alt:before {
        content: "\\f3bf";
      }

      .fa-life-ring:before {
        content: "\\f1cd";
      }

      .fa-lightbulb:before {
        content: "\\f0eb";
      }

      .fa-line:before {
        content: "\\f3c0";
      }

      .fa-link:before {
        content: "\\f0c1";
      }

      .fa-linkedin:before {
        content: "\\f08c";
      }

      .fa-linkedin-in:before {
        content: "\\f0e1";
      }

      .fa-linode:before {
        content: "\\f2b8";
      }

      .fa-linux:before {
        content: "\\f17c";
      }

      .fa-lira-sign:before {
        content: "\\f195";
      }

      .fa-list:before {
        content: "\\f03a";
      }

      .fa-list-alt:before {
        content: "\\f022";
      }

      .fa-list-ol:before {
        content: "\\f0cb";
      }

      .fa-list-ul:before {
        content: "\\f0ca";
      }

      .fa-location-arrow:before {
        content: "\\f124";
      }

      .fa-lock:before {
        content: "\\f023";
      }

      .fa-lock-open:before {
        content: "\\f3c1";
      }

      .fa-long-arrow-alt-down:before {
        content: "\\f309";
      }

      .fa-long-arrow-alt-left:before {
        content: "\\f30a";
      }

      .fa-long-arrow-alt-right:before {
        content: "\\f30b";
      }

      .fa-long-arrow-alt-up:before {
        content: "\\f30c";
      }

      .fa-low-vision:before {
        content: "\\f2a8";
      }

      .fa-luggage-cart:before {
        content: "\\f59d";
      }

      .fa-lyft:before {
        content: "\\f3c3";
      }

      .fa-magento:before {
        content: "\\f3c4";
      }

      .fa-magic:before {
        content: "\\f0d0";
      }

      .fa-magnet:before {
        content: "\\f076";
      }

      .fa-mail-bulk:before {
        content: "\\f674";
      }

      .fa-mailchimp:before {
        content: "\\f59e";
      }

      .fa-male:before {
        content: "\\f183";
      }

      .fa-mandalorian:before {
        content: "\\f50f";
      }

      .fa-map:before {
        content: "\\f279";
      }

      .fa-map-marked:before {
        content: "\\f59f";
      }

      .fa-map-marked-alt:before {
        content: "\\f5a0";
      }

      .fa-map-marker:before {
        content: "\\f041";
      }

      .fa-map-marker-alt:before {
        content: "\\f3c5";
      }

      .fa-map-pin:before {
        content: "\\f276";
      }

      .fa-map-signs:before {
        content: "\\f277";
      }

      .fa-markdown:before {
        content: "\\f60f";
      }

      .fa-marker:before {
        content: "\\f5a1";
      }

      .fa-mars:before {
        content: "\\f222";
      }

      .fa-mars-double:before {
        content: "\\f227";
      }

      .fa-mars-stroke:before {
        content: "\\f229";
      }

      .fa-mars-stroke-h:before {
        content: "\\f22b";
      }

      .fa-mars-stroke-v:before {
        content: "\\f22a";
      }

      .fa-mask:before {
        content: "\\f6fa";
      }

      .fa-mastodon:before {
        content: "\\f4f6";
      }

      .fa-maxcdn:before {
        content: "\\f136";
      }

      .fa-mdb:before {
        content: "\\f8ca";
      }

      .fa-medal:before {
        content: "\\f5a2";
      }

      .fa-medapps:before {
        content: "\\f3c6";
      }

      .fa-medium:before {
        content: "\\f23a";
      }

      .fa-medium-m:before {
        content: "\\f3c7";
      }

      .fa-medkit:before {
        content: "\\f0fa";
      }

      .fa-medrt:before {
        content: "\\f3c8";
      }

      .fa-meetup:before {
        content: "\\f2e0";
      }

      .fa-megaport:before {
        content: "\\f5a3";
      }

      .fa-meh:before {
        content: "\\f11a";
      }

      .fa-meh-blank:before {
        content: "\\f5a4";
      }

      .fa-meh-rolling-eyes:before {
        content: "\\f5a5";
      }

      .fa-memory:before {
        content: "\\f538";
      }

      .fa-mendeley:before {
        content: "\\f7b3";
      }

      .fa-menorah:before {
        content: "\\f676";
      }

      .fa-mercury:before {
        content: "\\f223";
      }

      .fa-meteor:before {
        content: "\\f753";
      }

      .fa-microchip:before {
        content: "\\f2db";
      }

      .fa-microphone:before {
        content: "\\f130";
      }

      .fa-microphone-alt:before {
        content: "\\f3c9";
      }

      .fa-microphone-alt-slash:before {
        content: "\\f539";
      }

      .fa-microphone-slash:before {
        content: "\\f131";
      }

      .fa-microscope:before {
        content: "\\f610";
      }

      .fa-microsoft:before {
        content: "\\f3ca";
      }

      .fa-minus:before {
        content: "\\f068";
      }

      .fa-minus-circle:before {
        content: "\\f056";
      }

      .fa-minus-square:before {
        content: "\\f146";
      }

      .fa-mitten:before {
        content: "\\f7b5";
      }

      .fa-mix:before {
        content: "\\f3cb";
      }

      .fa-mixcloud:before {
        content: "\\f289";
      }

      .fa-mizuni:before {
        content: "\\f3cc";
      }

      .fa-mobile:before {
        content: "\\f10b";
      }

      .fa-mobile-alt:before {
        content: "\\f3cd";
      }

      .fa-modx:before {
        content: "\\f285";
      }

      .fa-monero:before {
        content: "\\f3d0";
      }

      .fa-money-bill:before {
        content: "\\f0d6";
      }

      .fa-money-bill-alt:before {
        content: "\\f3d1";
      }

      .fa-money-bill-wave:before {
        content: "\\f53a";
      }

      .fa-money-bill-wave-alt:before {
        content: "\\f53b";
      }

      .fa-money-check:before {
        content: "\\f53c";
      }

      .fa-money-check-alt:before {
        content: "\\f53d";
      }

      .fa-monument:before {
        content: "\\f5a6";
      }

      .fa-moon:before {
        content: "\\f186";
      }

      .fa-mortar-pestle:before {
        content: "\\f5a7";
      }

      .fa-mosque:before {
        content: "\\f678";
      }

      .fa-motorcycle:before {
        content: "\\f21c";
      }

      .fa-mountain:before {
        content: "\\f6fc";
      }

      .fa-mouse:before {
        content: "\\f8cc";
      }

      .fa-mouse-pointer:before {
        content: "\\f245";
      }

      .fa-mug-hot:before {
        content: "\\f7b6";
      }

      .fa-music:before {
        content: "\\f001";
      }

      .fa-napster:before {
        content: "\\f3d2";
      }

      .fa-neos:before {
        content: "\\f612";
      }

      .fa-network-wired:before {
        content: "\\f6ff";
      }

      .fa-neuter:before {
        content: "\\f22c";
      }

      .fa-newspaper:before {
        content: "\\f1ea";
      }

      .fa-nimblr:before {
        content: "\\f5a8";
      }

      .fa-node:before {
        content: "\\f419";
      }

      .fa-node-js:before {
        content: "\\f3d3";
      }

      .fa-not-equal:before {
        content: "\\f53e";
      }

      .fa-notes-medical:before {
        content: "\\f481";
      }

      .fa-npm:before {
        content: "\\f3d4";
      }

      .fa-ns8:before {
        content: "\\f3d5";
      }

      .fa-nutritionix:before {
        content: "\\f3d6";
      }

      .fa-object-group:before {
        content: "\\f247";
      }

      .fa-object-ungroup:before {
        content: "\\f248";
      }

      .fa-odnoklassniki:before {
        content: "\\f263";
      }

      .fa-odnoklassniki-square:before {
        content: "\\f264";
      }

      .fa-oil-can:before {
        content: "\\f613";
      }

      .fa-old-republic:before {
        content: "\\f510";
      }

      .fa-om:before {
        content: "\\f679";
      }

      .fa-opencart:before {
        content: "\\f23d";
      }

      .fa-openid:before {
        content: "\\f19b";
      }

      .fa-opera:before {
        content: "\\f26a";
      }

      .fa-optin-monster:before {
        content: "\\f23c";
      }

      .fa-orcid:before {
        content: "\\f8d2";
      }

      .fa-osi:before {
        content: "\\f41a";
      }

      .fa-otter:before {
        content: "\\f700";
      }

      .fa-outdent:before {
        content: "\\f03b";
      }

      .fa-page4:before {
        content: "\\f3d7";
      }

      .fa-pagelines:before {
        content: "\\f18c";
      }

      .fa-pager:before {
        content: "\\f815";
      }

      .fa-paint-brush:before {
        content: "\\f1fc";
      }

      .fa-paint-roller:before {
        content: "\\f5aa";
      }

      .fa-palette:before {
        content: "\\f53f";
      }

      .fa-palfed:before {
        content: "\\f3d8";
      }

      .fa-pallet:before {
        content: "\\f482";
      }

      .fa-paper-plane:before {
        content: "\\f1d8";
      }

      .fa-paperclip:before {
        content: "\\f0c6";
      }

      .fa-parachute-box:before {
        content: "\\f4cd";
      }

      .fa-paragraph:before {
        content: "\\f1dd";
      }

      .fa-parking:before {
        content: "\\f540";
      }

      .fa-passport:before {
        content: "\\f5ab";
      }

      .fa-pastafarianism:before {
        content: "\\f67b";
      }

      .fa-paste:before {
        content: "\\f0ea";
      }

      .fa-patreon:before {
        content: "\\f3d9";
      }

      .fa-pause:before {
        content: "\\f04c";
      }

      .fa-pause-circle:before {
        content: "\\f28b";
      }

      .fa-paw:before {
        content: "\\f1b0";
      }

      .fa-paypal:before {
        content: "\\f1ed";
      }

      .fa-peace:before {
        content: "\\f67c";
      }

      .fa-pen:before {
        content: "\\f304";
      }

      .fa-pen-alt:before {
        content: "\\f305";
      }

      .fa-pen-fancy:before {
        content: "\\f5ac";
      }

      .fa-pen-nib:before {
        content: "\\f5ad";
      }

      .fa-pen-square:before {
        content: "\\f14b";
      }

      .fa-pencil-alt:before {
        content: "\\f303";
      }

      .fa-pencil-ruler:before {
        content: "\\f5ae";
      }

      .fa-penny-arcade:before {
        content: "\\f704";
      }

      .fa-people-carry:before {
        content: "\\f4ce";
      }

      .fa-pepper-hot:before {
        content: "\\f816";
      }

      .fa-percent:before {
        content: "\\f295";
      }

      .fa-percentage:before {
        content: "\\f541";
      }

      .fa-periscope:before {
        content: "\\f3da";
      }

      .fa-person-booth:before {
        content: "\\f756";
      }

      .fa-phabricator:before {
        content: "\\f3db";
      }

      .fa-phoenix-framework:before {
        content: "\\f3dc";
      }

      .fa-phoenix-squadron:before {
        content: "\\f511";
      }

      .fa-phone:before {
        content: "\\f095";
      }

      .fa-phone-alt:before {
        content: "\\f879";
      }

      .fa-phone-slash:before {
        content: "\\f3dd";
      }

      .fa-phone-square:before {
        content: "\\f098";
      }

      .fa-phone-square-alt:before {
        content: "\\f87b";
      }

      .fa-phone-volume:before {
        content: "\\f2a0";
      }

      .fa-photo-video:before {
        content: "\\f87c";
      }

      .fa-php:before {
        content: "\\f457";
      }

      .fa-pied-piper:before {
        content: "\\f2ae";
      }

      .fa-pied-piper-alt:before {
        content: "\\f1a8";
      }

      .fa-pied-piper-hat:before {
        content: "\\f4e5";
      }

      .fa-pied-piper-pp:before {
        content: "\\f1a7";
      }

      .fa-piggy-bank:before {
        content: "\\f4d3";
      }

      .fa-pills:before {
        content: "\\f484";
      }

      .fa-pinterest:before {
        content: "\\f0d2";
      }

      .fa-pinterest-p:before {
        content: "\\f231";
      }

      .fa-pinterest-square:before {
        content: "\\f0d3";
      }

      .fa-pizza-slice:before {
        content: "\\f818";
      }

      .fa-place-of-worship:before {
        content: "\\f67f";
      }

      .fa-plane:before {
        content: "\\f072";
      }

      .fa-plane-arrival:before {
        content: "\\f5af";
      }

      .fa-plane-departure:before {
        content: "\\f5b0";
      }

      .fa-play:before {
        content: "\\f04b";
      }

      .fa-play-circle:before {
        content: "\\f144";
      }

      .fa-playstation:before {
        content: "\\f3df";
      }

      .fa-plug:before {
        content: "\\f1e6";
      }

      .fa-plus:before {
        content: "\\f067";
      }

      .fa-plus-circle:before {
        content: "\\f055";
      }

      .fa-plus-square:before {
        content: "\\f0fe";
      }

      .fa-podcast:before {
        content: "\\f2ce";
      }

      .fa-poll:before {
        content: "\\f681";
      }

      .fa-poll-h:before {
        content: "\\f682";
      }

      .fa-poo:before {
        content: "\\f2fe";
      }

      .fa-poo-storm:before {
        content: "\\f75a";
      }

      .fa-poop:before {
        content: "\\f619";
      }

      .fa-portrait:before {
        content: "\\f3e0";
      }

      .fa-pound-sign:before {
        content: "\\f154";
      }

      .fa-power-off:before {
        content: "\\f011";
      }

      .fa-pray:before {
        content: "\\f683";
      }

      .fa-praying-hands:before {
        content: "\\f684";
      }

      .fa-prescription:before {
        content: "\\f5b1";
      }

      .fa-prescription-bottle:before {
        content: "\\f485";
      }

      .fa-prescription-bottle-alt:before {
        content: "\\f486";
      }

      .fa-print:before {
        content: "\\f02f";
      }

      .fa-procedures:before {
        content: "\\f487";
      }

      .fa-product-hunt:before {
        content: "\\f288";
      }

      .fa-project-diagram:before {
        content: "\\f542";
      }

      .fa-pushed:before {
        content: "\\f3e1";
      }

      .fa-puzzle-piece:before {
        content: "\\f12e";
      }

      .fa-python:before {
        content: "\\f3e2";
      }

      .fa-qq:before {
        content: "\\f1d6";
      }

      .fa-qrcode:before {
        content: "\\f029";
      }

      .fa-question:before {
        content: "\\f128";
      }

      .fa-question-circle:before {
        content: "\\f059";
      }

      .fa-quidditch:before {
        content: "\\f458";
      }

      .fa-quinscape:before {
        content: "\\f459";
      }

      .fa-quora:before {
        content: "\\f2c4";
      }

      .fa-quote-left:before {
        content: "\\f10d";
      }

      .fa-quote-right:before {
        content: "\\f10e";
      }

      .fa-quran:before {
        content: "\\f687";
      }

      .fa-r-project:before {
        content: "\\f4f7";
      }

      .fa-radiation:before {
        content: "\\f7b9";
      }

      .fa-radiation-alt:before {
        content: "\\f7ba";
      }

      .fa-rainbow:before {
        content: "\\f75b";
      }

      .fa-random:before {
        content: "\\f074";
      }

      .fa-raspberry-pi:before {
        content: "\\f7bb";
      }

      .fa-ravelry:before {
        content: "\\f2d9";
      }

      .fa-react:before {
        content: "\\f41b";
      }

      .fa-reacteurope:before {
        content: "\\f75d";
      }

      .fa-readme:before {
        content: "\\f4d5";
      }

      .fa-rebel:before {
        content: "\\f1d0";
      }

      .fa-receipt:before {
        content: "\\f543";
      }

      .fa-record-vinyl:before {
        content: "\\f8d9";
      }

      .fa-recycle:before {
        content: "\\f1b8";
      }

      .fa-red-river:before {
        content: "\\f3e3";
      }

      .fa-reddit:before {
        content: "\\f1a1";
      }

      .fa-reddit-alien:before {
        content: "\\f281";
      }

      .fa-reddit-square:before {
        content: "\\f1a2";
      }

      .fa-redhat:before {
        content: "\\f7bc";
      }

      .fa-redo:before {
        content: "\\f01e";
      }

      .fa-redo-alt:before {
        content: "\\f2f9";
      }

      .fa-registered:before {
        content: "\\f25d";
      }

      .fa-remove-format:before {
        content: "\\f87d";
      }

      .fa-renren:before {
        content: "\\f18b";
      }

      .fa-reply:before {
        content: "\\f3e5";
      }

      .fa-reply-all:before {
        content: "\\f122";
      }

      .fa-replyd:before {
        content: "\\f3e6";
      }

      .fa-republican:before {
        content: "\\f75e";
      }

      .fa-researchgate:before {
        content: "\\f4f8";
      }

      .fa-resolving:before {
        content: "\\f3e7";
      }

      .fa-restroom:before {
        content: "\\f7bd";
      }

      .fa-retweet:before {
        content: "\\f079";
      }

      .fa-rev:before {
        content: "\\f5b2";
      }

      .fa-ribbon:before {
        content: "\\f4d6";
      }

      .fa-ring:before {
        content: "\\f70b";
      }

      .fa-road:before {
        content: "\\f018";
      }

      .fa-robot:before {
        content: "\\f544";
      }

      .fa-rocket:before {
        content: "\\f135";
      }

      .fa-rocketchat:before {
        content: "\\f3e8";
      }

      .fa-rockrms:before {
        content: "\\f3e9";
      }

      .fa-route:before {
        content: "\\f4d7";
      }

      .fa-rss:before {
        content: "\\f09e";
      }

      .fa-rss-square:before {
        content: "\\f143";
      }

      .fa-ruble-sign:before {
        content: "\\f158";
      }

      .fa-ruler:before {
        content: "\\f545";
      }

      .fa-ruler-combined:before {
        content: "\\f546";
      }

      .fa-ruler-horizontal:before {
        content: "\\f547";
      }

      .fa-ruler-vertical:before {
        content: "\\f548";
      }

      .fa-running:before {
        content: "\\f70c";
      }

      .fa-rupee-sign:before {
        content: "\\f156";
      }

      .fa-sad-cry:before {
        content: "\\f5b3";
      }

      .fa-sad-tear:before {
        content: "\\f5b4";
      }

      .fa-safari:before {
        content: "\\f267";
      }

      .fa-salesforce:before {
        content: "\\f83b";
      }

      .fa-sass:before {
        content: "\\f41e";
      }

      .fa-satellite:before {
        content: "\\f7bf";
      }

      .fa-satellite-dish:before {
        content: "\\f7c0";
      }

      .fa-save:before {
        content: "\\f0c7";
      }

      .fa-schlix:before {
        content: "\\f3ea";
      }

      .fa-school:before {
        content: "\\f549";
      }

      .fa-screwdriver:before {
        content: "\\f54a";
      }

      .fa-scribd:before {
        content: "\\f28a";
      }

      .fa-scroll:before {
        content: "\\f70e";
      }

      .fa-sd-card:before {
        content: "\\f7c2";
      }

      .fa-search:before {
        content: "\\f002";
      }

      .fa-search-dollar:before {
        content: "\\f688";
      }

      .fa-search-location:before {
        content: "\\f689";
      }

      .fa-search-minus:before {
        content: "\\f010";
      }

      .fa-search-plus:before {
        content: "\\f00e";
      }

      .fa-searchengin:before {
        content: "\\f3eb";
      }

      .fa-seedling:before {
        content: "\\f4d8";
      }

      .fa-sellcast:before {
        content: "\\f2da";
      }

      .fa-sellsy:before {
        content: "\\f213";
      }

      .fa-server:before {
        content: "\\f233";
      }

      .fa-servicestack:before {
        content: "\\f3ec";
      }

      .fa-shapes:before {
        content: "\\f61f";
      }

      .fa-share:before {
        content: "\\f064";
      }

      .fa-share-alt:before {
        content: "\\f1e0";
      }

      .fa-share-alt-square:before {
        content: "\\f1e1";
      }

      .fa-share-square:before {
        content: "\\f14d";
      }

      .fa-shekel-sign:before {
        content: "\\f20b";
      }

      .fa-shield-alt:before {
        content: "\\f3ed";
      }

      .fa-ship:before {
        content: "\\f21a";
      }

      .fa-shipping-fast:before {
        content: "\\f48b";
      }

      .fa-shirtsinbulk:before {
        content: "\\f214";
      }

      .fa-shoe-prints:before {
        content: "\\f54b";
      }

      .fa-shopping-bag:before {
        content: "\\f290";
      }

      .fa-shopping-basket:before {
        content: "\\f291";
      }

      .fa-shopping-cart:before {
        content: "\\f07a";
      }

      .fa-shopware:before {
        content: "\\f5b5";
      }

      .fa-shower:before {
        content: "\\f2cc";
      }

      .fa-shuttle-van:before {
        content: "\\f5b6";
      }

      .fa-sign:before {
        content: "\\f4d9";
      }

      .fa-sign-in-alt:before {
        content: "\\f2f6";
      }

      .fa-sign-language:before {
        content: "\\f2a7";
      }

      .fa-sign-out-alt:before {
        content: "\\f2f5";
      }

      .fa-signal:before {
        content: "\\f012";
      }

      .fa-signature:before {
        content: "\\f5b7";
      }

      .fa-sim-card:before {
        content: "\\f7c4";
      }

      .fa-simplybuilt:before {
        content: "\\f215";
      }

      .fa-sistrix:before {
        content: "\\f3ee";
      }

      .fa-sitemap:before {
        content: "\\f0e8";
      }

      .fa-sith:before {
        content: "\\f512";
      }

      .fa-skating:before {
        content: "\\f7c5";
      }

      .fa-sketch:before {
        content: "\\f7c6";
      }

      .fa-skiing:before {
        content: "\\f7c9";
      }

      .fa-skiing-nordic:before {
        content: "\\f7ca";
      }

      .fa-skull:before {
        content: "\\f54c";
      }

      .fa-skull-crossbones:before {
        content: "\\f714";
      }

      .fa-skyatlas:before {
        content: "\\f216";
      }

      .fa-skype:before {
        content: "\\f17e";
      }

      .fa-slack:before {
        content: "\\f198";
      }

      .fa-slack-hash:before {
        content: "\\f3ef";
      }

      .fa-slash:before {
        content: "\\f715";
      }

      .fa-sleigh:before {
        content: "\\f7cc";
      }

      .fa-sliders-h:before {
        content: "\\f1de";
      }

      .fa-slideshare:before {
        content: "\\f1e7";
      }

      .fa-smile:before {
        content: "\\f118";
      }

      .fa-smile-beam:before {
        content: "\\f5b8";
      }

      .fa-smile-wink:before {
        content: "\\f4da";
      }

      .fa-smog:before {
        content: "\\f75f";
      }

      .fa-smoking:before {
        content: "\\f48d";
      }

      .fa-smoking-ban:before {
        content: "\\f54d";
      }

      .fa-sms:before {
        content: "\\f7cd";
      }

      .fa-snapchat:before {
        content: "\\f2ab";
      }

      .fa-snapchat-ghost:before {
        content: "\\f2ac";
      }

      .fa-snapchat-square:before {
        content: "\\f2ad";
      }

      .fa-snowboarding:before {
        content: "\\f7ce";
      }

      .fa-snowflake:before {
        content: "\\f2dc";
      }

      .fa-snowman:before {
        content: "\\f7d0";
      }

      .fa-snowplow:before {
        content: "\\f7d2";
      }

      .fa-socks:before {
        content: "\\f696";
      }

      .fa-solar-panel:before {
        content: "\\f5ba";
      }

      .fa-sort:before {
        content: "\\f0dc";
      }

      .fa-sort-alpha-down:before {
        content: "\\f15d";
      }

      .fa-sort-alpha-down-alt:before {
        content: "\\f881";
      }

      .fa-sort-alpha-up:before {
        content: "\\f15e";
      }

      .fa-sort-alpha-up-alt:before {
        content: "\\f882";
      }

      .fa-sort-amount-down:before {
        content: "\\f160";
      }

      .fa-sort-amount-down-alt:before {
        content: "\\f884";
      }

      .fa-sort-amount-up:before {
        content: "\\f161";
      }

      .fa-sort-amount-up-alt:before {
        content: "\\f885";
      }

      .fa-sort-down:before {
        content: "\\f0dd";
      }

      .fa-sort-numeric-down:before {
        content: "\\f162";
      }

      .fa-sort-numeric-down-alt:before {
        content: "\\f886";
      }

      .fa-sort-numeric-up:before {
        content: "\\f163";
      }

      .fa-sort-numeric-up-alt:before {
        content: "\\f887";
      }

      .fa-sort-up:before {
        content: "\\f0de";
      }

      .fa-soundcloud:before {
        content: "\\f1be";
      }

      .fa-sourcetree:before {
        content: "\\f7d3";
      }

      .fa-spa:before {
        content: "\\f5bb";
      }

      .fa-space-shuttle:before {
        content: "\\f197";
      }

      .fa-speakap:before {
        content: "\\f3f3";
      }

      .fa-speaker-deck:before {
        content: "\\f83c";
      }

      .fa-spell-check:before {
        content: "\\f891";
      }

      .fa-spider:before {
        content: "\\f717";
      }

      .fa-spinner:before {
        content: "\\f110";
      }

      .fa-splotch:before {
        content: "\\f5bc";
      }

      .fa-spotify:before {
        content: "\\f1bc";
      }

      .fa-spray-can:before {
        content: "\\f5bd";
      }

      .fa-square:before {
        content: "\\f0c8";
      }

      .fa-square-full:before {
        content: "\\f45c";
      }

      .fa-square-root-alt:before {
        content: "\\f698";
      }

      .fa-squarespace:before {
        content: "\\f5be";
      }

      .fa-stack-exchange:before {
        content: "\\f18d";
      }

      .fa-stack-overflow:before {
        content: "\\f16c";
      }

      .fa-stackpath:before {
        content: "\\f842";
      }

      .fa-stamp:before {
        content: "\\f5bf";
      }

      .fa-star:before {
        content: "\\f005";
      }

      .fa-star-and-crescent:before {
        content: "\\f699";
      }

      .fa-star-half:before {
        content: "\\f089";
      }

      .fa-star-half-alt:before {
        content: "\\f5c0";
      }

      .fa-star-of-david:before {
        content: "\\f69a";
      }

      .fa-star-of-life:before {
        content: "\\f621";
      }

      .fa-staylinked:before {
        content: "\\f3f5";
      }

      .fa-steam:before {
        content: "\\f1b6";
      }

      .fa-steam-square:before {
        content: "\\f1b7";
      }

      .fa-steam-symbol:before {
        content: "\\f3f6";
      }

      .fa-step-backward:before {
        content: "\\f048";
      }

      .fa-step-forward:before {
        content: "\\f051";
      }

      .fa-stethoscope:before {
        content: "\\f0f1";
      }

      .fa-sticker-mule:before {
        content: "\\f3f7";
      }

      .fa-sticky-note:before {
        content: "\\f249";
      }

      .fa-stop:before {
        content: "\\f04d";
      }

      .fa-stop-circle:before {
        content: "\\f28d";
      }

      .fa-stopwatch:before {
        content: "\\f2f2";
      }

      .fa-store:before {
        content: "\\f54e";
      }

      .fa-store-alt:before {
        content: "\\f54f";
      }

      .fa-strava:before {
        content: "\\f428";
      }

      .fa-stream:before {
        content: "\\f550";
      }

      .fa-street-view:before {
        content: "\\f21d";
      }

      .fa-strikethrough:before {
        content: "\\f0cc";
      }

      .fa-stripe:before {
        content: "\\f429";
      }

      .fa-stripe-s:before {
        content: "\\f42a";
      }

      .fa-stroopwafel:before {
        content: "\\f551";
      }

      .fa-studiovinari:before {
        content: "\\f3f8";
      }

      .fa-stumbleupon:before {
        content: "\\f1a4";
      }

      .fa-stumbleupon-circle:before {
        content: "\\f1a3";
      }

      .fa-subscript:before {
        content: "\\f12c";
      }

      .fa-subway:before {
        content: "\\f239";
      }

      .fa-suitcase:before {
        content: "\\f0f2";
      }

      .fa-suitcase-rolling:before {
        content: "\\f5c1";
      }

      .fa-sun:before {
        content: "\\f185";
      }

      .fa-superpowers:before {
        content: "\\f2dd";
      }

      .fa-superscript:before {
        content: "\\f12b";
      }

      .fa-supple:before {
        content: "\\f3f9";
      }

      .fa-surprise:before {
        content: "\\f5c2";
      }

      .fa-suse:before {
        content: "\\f7d6";
      }

      .fa-swatchbook:before {
        content: "\\f5c3";
      }

      .fa-swift:before {
        content: "\\f8e1";
      }

      .fa-swimmer:before {
        content: "\\f5c4";
      }

      .fa-swimming-pool:before {
        content: "\\f5c5";
      }

      .fa-symfony:before {
        content: "\\f83d";
      }

      .fa-synagogue:before {
        content: "\\f69b";
      }

      .fa-sync:before {
        content: "\\f021";
      }

      .fa-sync-alt:before {
        content: "\\f2f1";
      }

      .fa-syringe:before {
        content: "\\f48e";
      }

      .fa-table:before {
        content: "\\f0ce";
      }

      .fa-table-tennis:before {
        content: "\\f45d";
      }

      .fa-tablet:before {
        content: "\\f10a";
      }

      .fa-tablet-alt:before {
        content: "\\f3fa";
      }

      .fa-tablets:before {
        content: "\\f490";
      }

      .fa-tachometer-alt:before {
        content: "\\f3fd";
      }

      .fa-tag:before {
        content: "\\f02b";
      }

      .fa-tags:before {
        content: "\\f02c";
      }

      .fa-tape:before {
        content: "\\f4db";
      }

      .fa-tasks:before {
        content: "\\f0ae";
      }

      .fa-taxi:before {
        content: "\\f1ba";
      }

      .fa-teamspeak:before {
        content: "\\f4f9";
      }

      .fa-teeth:before {
        content: "\\f62e";
      }

      .fa-teeth-open:before {
        content: "\\f62f";
      }

      .fa-telegram:before {
        content: "\\f2c6";
      }

      .fa-telegram-plane:before {
        content: "\\f3fe";
      }

      .fa-temperature-high:before {
        content: "\\f769";
      }

      .fa-temperature-low:before {
        content: "\\f76b";
      }

      .fa-tencent-weibo:before {
        content: "\\f1d5";
      }

      .fa-tenge:before {
        content: "\\f7d7";
      }

      .fa-terminal:before {
        content: "\\f120";
      }

      .fa-text-height:before {
        content: "\\f034";
      }

      .fa-text-width:before {
        content: "\\f035";
      }

      .fa-th:before {
        content: "\\f00a";
      }

      .fa-th-large:before {
        content: "\\f009";
      }

      .fa-th-list:before {
        content: "\\f00b";
      }

      .fa-the-red-yeti:before {
        content: "\\f69d";
      }

      .fa-theater-masks:before {
        content: "\\f630";
      }

      .fa-themeco:before {
        content: "\\f5c6";
      }

      .fa-themeisle:before {
        content: "\\f2b2";
      }

      .fa-thermometer:before {
        content: "\\f491";
      }

      .fa-thermometer-empty:before {
        content: "\\f2cb";
      }

      .fa-thermometer-full:before {
        content: "\\f2c7";
      }

      .fa-thermometer-half:before {
        content: "\\f2c9";
      }

      .fa-thermometer-quarter:before {
        content: "\\f2ca";
      }

      .fa-thermometer-three-quarters:before {
        content: "\\f2c8";
      }

      .fa-think-peaks:before {
        content: "\\f731";
      }

      .fa-thumbs-down:before {
        content: "\\f165";
      }

      .fa-thumbs-up:before {
        content: "\\f164";
      }

      .fa-thumbtack:before {
        content: "\\f08d";
      }

      .fa-ticket-alt:before {
        content: "\\f3ff";
      }

      .fa-times:before {
        content: "\\f00d";
      }

      .fa-times-circle:before {
        content: "\\f057";
      }

      .fa-tint:before {
        content: "\\f043";
      }

      .fa-tint-slash:before {
        content: "\\f5c7";
      }

      .fa-tired:before {
        content: "\\f5c8";
      }

      .fa-toggle-off:before {
        content: "\\f204";
      }

      .fa-toggle-on:before {
        content: "\\f205";
      }

      .fa-toilet:before {
        content: "\\f7d8";
      }

      .fa-toilet-paper:before {
        content: "\\f71e";
      }

      .fa-toolbox:before {
        content: "\\f552";
      }

      .fa-tools:before {
        content: "\\f7d9";
      }

      .fa-tooth:before {
        content: "\\f5c9";
      }

      .fa-torah:before {
        content: "\\f6a0";
      }

      .fa-torii-gate:before {
        content: "\\f6a1";
      }

      .fa-tractor:before {
        content: "\\f722";
      }

      .fa-trade-federation:before {
        content: "\\f513";
      }

      .fa-trademark:before {
        content: "\\f25c";
      }

      .fa-traffic-light:before {
        content: "\\f637";
      }

      .fa-train:before {
        content: "\\f238";
      }

      .fa-tram:before {
        content: "\\f7da";
      }

      .fa-transgender:before {
        content: "\\f224";
      }

      .fa-transgender-alt:before {
        content: "\\f225";
      }

      .fa-trash:before {
        content: "\\f1f8";
      }

      .fa-trash-alt:before {
        content: "\\f2ed";
      }

      .fa-trash-restore:before {
        content: "\\f829";
      }

      .fa-trash-restore-alt:before {
        content: "\\f82a";
      }

      .fa-tree:before {
        content: "\\f1bb";
      }

      .fa-trello:before {
        content: "\\f181";
      }

      .fa-tripadvisor:before {
        content: "\\f262";
      }

      .fa-trophy:before {
        content: "\\f091";
      }

      .fa-truck:before {
        content: "\\f0d1";
      }

      .fa-truck-loading:before {
        content: "\\f4de";
      }

      .fa-truck-monster:before {
        content: "\\f63b";
      }

      .fa-truck-moving:before {
        content: "\\f4df";
      }

      .fa-truck-pickup:before {
        content: "\\f63c";
      }

      .fa-tshirt:before {
        content: "\\f553";
      }

      .fa-tty:before {
        content: "\\f1e4";
      }

      .fa-tumblr:before {
        content: "\\f173";
      }

      .fa-tumblr-square:before {
        content: "\\f174";
      }

      .fa-tv:before {
        content: "\\f26c";
      }

      .fa-twitch:before {
        content: "\\f1e8";
      }

      .fa-twitter:before {
        content: "\\f099";
      }

      .fa-twitter-square:before {
        content: "\\f081";
      }

      .fa-typo3:before {
        content: "\\f42b";
      }

      .fa-uber:before {
        content: "\\f402";
      }

      .fa-ubuntu:before {
        content: "\\f7df";
      }

      .fa-uikit:before {
        content: "\\f403";
      }

      .fa-umbraco:before {
        content: "\\f8e8";
      }

      .fa-umbrella:before {
        content: "\\f0e9";
      }

      .fa-umbrella-beach:before {
        content: "\\f5ca";
      }

      .fa-underline:before {
        content: "\\f0cd";
      }

      .fa-undo:before {
        content: "\\f0e2";
      }

      .fa-undo-alt:before {
        content: "\\f2ea";
      }

      .fa-uniregistry:before {
        content: "\\f404";
      }

      .fa-universal-access:before {
        content: "\\f29a";
      }

      .fa-university:before {
        content: "\\f19c";
      }

      .fa-unlink:before {
        content: "\\f127";
      }

      .fa-unlock:before {
        content: "\\f09c";
      }

      .fa-unlock-alt:before {
        content: "\\f13e";
      }

      .fa-untappd:before {
        content: "\\f405";
      }

      .fa-upload:before {
        content: "\\f093";
      }

      .fa-ups:before {
        content: "\\f7e0";
      }

      .fa-usb:before {
        content: "\\f287";
      }

      .fa-user:before {
        content: "\\f007";
      }

      .fa-user-alt:before {
        content: "\\f406";
      }

      .fa-user-alt-slash:before {
        content: "\\f4fa";
      }

      .fa-user-astronaut:before {
        content: "\\f4fb";
      }

      .fa-user-check:before {
        content: "\\f4fc";
      }

      .fa-user-circle:before {
        content: "\\f2bd";
      }

      .fa-user-clock:before {
        content: "\\f4fd";
      }

      .fa-user-cog:before {
        content: "\\f4fe";
      }

      .fa-user-edit:before {
        content: "\\f4ff";
      }

      .fa-user-friends:before {
        content: "\\f500";
      }

      .fa-user-graduate:before {
        content: "\\f501";
      }

      .fa-user-injured:before {
        content: "\\f728";
      }

      .fa-user-lock:before {
        content: "\\f502";
      }

      .fa-user-md:before {
        content: "\\f0f0";
      }

      .fa-user-minus:before {
        content: "\\f503";
      }

      .fa-user-ninja:before {
        content: "\\f504";
      }

      .fa-user-nurse:before {
        content: "\\f82f";
      }

      .fa-user-plus:before {
        content: "\\f234";
      }

      .fa-user-secret:before {
        content: "\\f21b";
      }

      .fa-user-shield:before {
        content: "\\f505";
      }

      .fa-user-slash:before {
        content: "\\f506";
      }

      .fa-user-tag:before {
        content: "\\f507";
      }

      .fa-user-tie:before {
        content: "\\f508";
      }

      .fa-user-times:before {
        content: "\\f235";
      }

      .fa-users:before {
        content: "\\f0c0";
      }

      .fa-users-cog:before {
        content: "\\f509";
      }

      .fa-usps:before {
        content: "\\f7e1";
      }

      .fa-ussunnah:before {
        content: "\\f407";
      }

      .fa-utensil-spoon:before {
        content: "\\f2e5";
      }

      .fa-utensils:before {
        content: "\\f2e7";
      }

      .fa-vaadin:before {
        content: "\\f408";
      }

      .fa-vector-square:before {
        content: "\\f5cb";
      }

      .fa-venus:before {
        content: "\\f221";
      }

      .fa-venus-double:before {
        content: "\\f226";
      }

      .fa-venus-mars:before {
        content: "\\f228";
      }

      .fa-viacoin:before {
        content: "\\f237";
      }

      .fa-viadeo:before {
        content: "\\f2a9";
      }

      .fa-viadeo-square:before {
        content: "\\f2aa";
      }

      .fa-vial:before {
        content: "\\f492";
      }

      .fa-vials:before {
        content: "\\f493";
      }

      .fa-viber:before {
        content: "\\f409";
      }

      .fa-video:before {
        content: "\\f03d";
      }

      .fa-video-slash:before {
        content: "\\f4e2";
      }

      .fa-vihara:before {
        content: "\\f6a7";
      }

      .fa-vimeo:before {
        content: "\\f40a";
      }

      .fa-vimeo-square:before {
        content: "\\f194";
      }

      .fa-vimeo-v:before {
        content: "\\f27d";
      }

      .fa-vine:before {
        content: "\\f1ca";
      }

      .fa-vk:before {
        content: "\\f189";
      }

      .fa-vnv:before {
        content: "\\f40b";
      }

      .fa-voicemail:before {
        content: "\\f897";
      }

      .fa-volleyball-ball:before {
        content: "\\f45f";
      }

      .fa-volume-down:before {
        content: "\\f027";
      }

      .fa-volume-mute:before {
        content: "\\f6a9";
      }

      .fa-volume-off:before {
        content: "\\f026";
      }

      .fa-volume-up:before {
        content: "\\f028";
      }

      .fa-vote-yea:before {
        content: "\\f772";
      }

      .fa-vr-cardboard:before {
        content: "\\f729";
      }

      .fa-vuejs:before {
        content: "\\f41f";
      }

      .fa-walking:before {
        content: "\\f554";
      }

      .fa-wallet:before {
        content: "\\f555";
      }

      .fa-warehouse:before {
        content: "\\f494";
      }

      .fa-water:before {
        content: "\\f773";
      }

      .fa-wave-square:before {
        content: "\\f83e";
      }

      .fa-waze:before {
        content: "\\f83f";
      }

      .fa-weebly:before {
        content: "\\f5cc";
      }

      .fa-weibo:before {
        content: "\\f18a";
      }

      .fa-weight:before {
        content: "\\f496";
      }

      .fa-weight-hanging:before {
        content: "\\f5cd";
      }

      .fa-weixin:before {
        content: "\\f1d7";
      }

      .fa-whatsapp:before {
        content: "\\f232";
      }

      .fa-whatsapp-square:before {
        content: "\\f40c";
      }

      .fa-wheelchair:before {
        content: "\\f193";
      }

      .fa-whmcs:before {
        content: "\\f40d";
      }

      .fa-wifi:before {
        content: "\\f1eb";
      }

      .fa-wikipedia-w:before {
        content: "\\f266";
      }

      .fa-wind:before {
        content: "\\f72e";
      }

      .fa-window-close:before {
        content: "\\f410";
      }

      .fa-window-maximize:before {
        content: "\\f2d0";
      }

      .fa-window-minimize:before {
        content: "\\f2d1";
      }

      .fa-window-restore:before {
        content: "\\f2d2";
      }

      .fa-windows:before {
        content: "\\f17a";
      }

      .fa-wine-bottle:before {
        content: "\\f72f";
      }

      .fa-wine-glass:before {
        content: "\\f4e3";
      }

      .fa-wine-glass-alt:before {
        content: "\\f5ce";
      }

      .fa-wix:before {
        content: "\\f5cf";
      }

      .fa-wizards-of-the-coast:before {
        content: "\\f730";
      }

      .fa-wolf-pack-battalion:before {
        content: "\\f514";
      }

      .fa-won-sign:before {
        content: "\\f159";
      }

      .fa-wordpress:before {
        content: "\\f19a";
      }

      .fa-wordpress-simple:before {
        content: "\\f411";
      }

      .fa-wpbeginner:before {
        content: "\\f297";
      }

      .fa-wpexplorer:before {
        content: "\\f2de";
      }

      .fa-wpforms:before {
        content: "\\f298";
      }

      .fa-wpressr:before {
        content: "\\f3e4";
      }

      .fa-wrench:before {
        content: "\\f0ad";
      }

      .fa-x-ray:before {
        content: "\\f497";
      }

      .fa-xbox:before {
        content: "\\f412";
      }

      .fa-xing:before {
        content: "\\f168";
      }

      .fa-xing-square:before {
        content: "\\f169";
      }

      .fa-y-combinator:before {
        content: "\\f23b";
      }

      .fa-yahoo:before {
        content: "\\f19e";
      }

      .fa-yammer:before {
        content: "\\f840";
      }

      .fa-yandex:before {
        content: "\\f413";
      }

      .fa-yandex-international:before {
        content: "\\f414";
      }

      .fa-yarn:before {
        content: "\\f7e3";
      }

      .fa-yelp:before {
        content: "\\f1e9";
      }

      .fa-yen-sign:before {
        content: "\\f157";
      }

      .fa-yin-yang:before {
        content: "\\f6ad";
      }

      .fa-yoast:before {
        content: "\\f2b1";
      }

      .fa-youtube:before {
        content: "\\f167";
      }

      .fa-youtube-square:before {
        content: "\\f431";
      }

      .fa-zhihu:before {
        content: "\\f63f";
      }

      .sr-only {
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .sr-only-focusable:active,
      .sr-only-focusable:focus {
        clip: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        position: static;
        width: auto;
      }

      .fab {
        font-family: "Font Awesome 5 Brands";
      }

      .far {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }

      .fa,
      .fas {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
      }
    `}constructor(){super(),this.regular=!1,this.prefix="fas",this.showIcon=!1,this.iconProps=null}render(){const{icon:e,prefix:t,showIcon:r,iconProps:a}=this,n=a?` ${a}`:"";return r?o.dy` <i class="${t} fa-${e}${n}"></i> `:o.dy``}connectedCallback(){const e=n.includes(this.icon)&&this.regular,t=!e&&a.includes(this.icon),r=!e&&!t&&i.includes(this.icon);this.showIcon=e||t||r,e&&(this.prefix="far"),r&&(this.prefix="fab"),super.connectedCallback()}}customElements.define("mv-fa",s)},298:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{item:{type:Boolean,attribute:!0},custom:{type:Boolean,attribute:!0},position:{type:String,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --height: var(--mv-footer-height, 40px);
        --shadow: var(--mv-footer-shadow, 0 5px 10px 0 rgba(7,17,26,0.2));
        --margin-top: var(--mv-footer-margin-top, 1px);
        --margin-left: var(--mv-footer-margin-left, 0);
        --margin-right: var(--mv-footer-margin-right, 0);
        --total-margins: calc(var(--margin-left) + var(--margin-right));
        --item-padding: var(--mv-footer-item-padding, 10px);
        --light-background: var(--mv-footer-light-background, #F3F3F3);
        --item-light-color: var(--mv-footer-item-light-color, #B0B3B6);
        --dark-background: var(--mv-footer-dark-background, #373E48);
        --item-dark-color: var(--mv-footer-item-light-color, #B0B3B6);
      }

      footer {        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;        
        margin-top: var(--margin-top);
        margin-left: var(--margin-left);
        margin-right: var(--margin-right);
        padding-left: var(--item-padding);
        padding-right: var(--item-padding);
        width: calc(100% - var(--total-margins));
        min-height: var(--height);
        max-height: var(--height);
        background: var(--background);
        box-shadow: var(--shadow);
        transition: margin-left 0.3s;
        transition: margin-right 0.3s;
      }

      section {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      section.left {
        justify-content: flex-start;
      }

      section.center {
        justify-content: center;
      }

      section.right {        
        justify-content: flex-end;
      }

      section ::slotted(*) {
        margin: auto var(--item-padding, 10px);
      }

      .mv-footer-item,
      .mv-footer-item ::slotted(*) {
        margin: 0;
        text-decoration: none;
        color: var(--item-color);
      }
      
      .mv-footer-item:hover ::slotted(a) {
        text-decoration: underline;
      }
      
      .light {
        --background: var(--light-background);
        --item-color: var(--item-light-color);
      }
      
      .dark {
        --background: var(--dark-background);
        --item-color: var(--item-dark-color);
      }
    `}constructor(){super(),this.item=!1,this.custom=!1,this.position="center",this.theme="light"}render(){return this.item?(this.setAttribute("slot",this.position),o.dy`
        <div class="mv-footer-item">
          <slot></slot>
        </div>
      `):o.dy`
      <footer class="${this.theme}">
      ${this.custom?o.dy`<slot></slot>`:o.dy`
            <section class="left">
              <slot name="left"></slot>
            </section>
            <section class="center">
              <slot name="center"></slot>
            </section>
            <section class="right">
              <slot name="right"></slot>
            </section>
          `}
      </footer>
      `}}customElements.define("mv-footer",a)},2332:(e,t,r)=>{var o=r(5862),a=r(1696);const n=(e,t,r)=>{const o=(t||"").indexOf(".");if(o>-1){const a=t.substring(0,o);return{[a]:n(e[a],t.substring(o+1),r)}}return{[t]:r}};class i extends o.oi{static get properties(){return{store:{type:Object,attribute:!1,reflect:!0},schema:{type:Object,attribute:!1,reflect:!0},formValues:{type:Object,attribute:!1,reflect:!0},refSchemas:{type:Array,attribute:!1,reflect:!0},storageModes:{type:String,attribute:"storage-modes",reflect:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 1em);
      }

      .mv-form {
        display: grid;
        grid-gap: var(--mv-form-grid-gap, 5px 10px);
        grid-template-columns: var(--mv-form-grid-columns, auto);
        grid-template-rows: var(--mv-form-grid-rows, auto);
      }
    `}constructor(){super(),this.store=null,this.schema=null,this.formValues={}}render(){return o.dy`
      <div class="mv-form">
        <slot></slot>
      </div>
    `}connectedCallback(){this.addEventListener("change-field",this.changeField),this.addEventListener("submit-form",this.submitForm),this.addEventListener("clear-form",this.clearForm),super.connectedCallback()}changeField=e=>{const t=!!this.store,{detail:{name:r,value:o,group:i,index:s,validateGroup:l}}=e;let c=null;const d=i||r,f=i?l?i:`${i}[${s}].${r}`:r,h=t?this.store.state:this.formValues;if(t)this.store.updateValue(d,o);else{const e=n(this.formValues,d,o);this.formValues={...this.formValues,...e},this.dispatchEvent(new CustomEvent("update-form",{detail:{values:this.formValues},bubbles:!0,composed:!0}))}if(c=(0,a.Gu)(this.schema,h,f,l,this.refSchemas),c){const e=l?c:{[f]:c};this.errors=l?{...Object.keys(this.errors||{}).reduce(((e,t)=>t.startsWith(r)?e:{...e,[t]:this.errors[t]}),{}),...e}:{...this.errors,...e},this.dispatchEvent(new CustomEvent("update-errors",{detail:{errors:{...this.errors}},bubbles:!0,composed:!0}))}else{Object.keys(this.errors||{}).some((e=>e===f))&&(delete this.errors[f],this.dispatchEvent(new CustomEvent("update-errors",{detail:{errors:{...this.errors}},bubbles:!0,composed:!0})))}};submitForm=()=>{const e=!!this.store;if(e){const{state:e}=this.store;this.errors=(0,a.Gu)(this.schema,e,null,null,this.refSchemas)}else this.errors=(0,a.Gu)(this.schema,this.formValues,null,null,this.refSchemas);this.errors?this.dispatchEvent(new CustomEvent("update-errors",{detail:{errors:this.errors},bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("validation-success",{detail:{formValues:e?this.store.state:this.formValues},bubbles:!0,composed:!0}))};clearForm=()=>{this.store?this.store.resetState(!0):(this.formValues={},this.dispatchEvent(new CustomEvent("update-form",{detail:{values:this.formValues},bubbles:!0,composed:!0}))),this.dispatchEvent(new CustomEvent("clear-errors",{bubbles:!0,composed:!0}))}}customElements.define("mv-form",i);r(4397),r(6833)},4397:(e,t,r)=>{var o=r(5862),a=r(1696);r(4228);class n extends o.oi{static get properties(){return{name:{type:String},label:{type:String},value:{type:Object},type:{type:String},placeholder:{type:String},error:{type:String},item:{type:Boolean},index:{type:Number},required:{type:Boolean,attribute:!0,reflect:!0},disabled:{type:Boolean,attribute:!0,reflect:!0},immediate:{type:Boolean,attribute:!0,reflect:!0},labelPosition:{type:String,attribute:"label-position",reflect:!0}}}static get styles(){return o.iv`
      :host {
        --mv-form-font-family: var(--font-family, Arial);
        --mv-form-font-size: var(--font-size-m, 1em);
      }

      .label {
        grid-area: label;
      }

      .label .default-label,
      .label ::slotted(*) {
        font-size: var(--mv-form-font-size);
        font-weight: bold;
        color: #4e686d;
      }

      .label .required {
        font-style: normal;
        color: #ff0000;
      }

      .field {
        grid-area: field;
        font-size: var(--mv-form-font-size);
      }

      .error {
        grid-area: error;
        position: relative;
        font-size: calc(var(--mv-form-font-size) * 0.8);
        color: #ad4444;
      }

      .field .default-field,
      .field ::slotted(*) {
        width: 100%;
      }

      .field .default-field,
      .field ::slotted(*),
      .field .default-field::placeholder,
      .field ::slotted(*)::placeholder {
        font-family: var(--mv-form-font-family);
        font-size: var(--mv-form-font-size);
      }

      .field .default-field::placeholder,
      .field ::slotted(*)::placeholder {
        font-weight: 100;
      }

      .mv-form-field {
        display: grid;
        grid-column-gap: 20px;
        grid-row-gap: 5px;
        margin-bottom: 10px;
        align-items: center;
      }

      .mv-form-field.label-left {
        grid-template-columns: 20% auto;
        grid-template-rows: auto;
        grid-template-areas:
          "label field"
          ". error";
      }

      .mv-form-field.label-right {
        grid-template-columns: auto 20%;
        grid-template-rows: auto;
        grid-template-areas:
          "field label"
          "error .";
      }

      .mv-form-field.label-top {
        grid-template-areas:
          "label"
          "field"
          "error";
      }

      .mv-form-field.label-bottom {
        grid-template-areas:
          "field"
          "label"
          "error";
      }

      .mv-form-field.label-none {
        grid-template-areas:
          "field"
          "error";
      }
    `}constructor(){super(),this.name="",this.label="",this.value="",this.type="",this.placeholder="",this.error="",this.required=!1,this.disabled=!1,this.immediate=!1,this.labelPosition="left"}render(){const e=this.value||"",t=!!this.error,r="none"===this.labelPosition;return o.dy`
      <div class="mv-form-field label-${this.labelPosition}">
        ${r?o.dy``:o.dy`
              <div class="label">
                <slot name="label">
                  <label class="default-label">
                    ${this.label}
                  </label>
                </slot>
                ${this.required?o.dy`
                      <i class="required">*</i>
                    `:o.dy``}
              </div>
            `}

        <div class="field">
          <slot name="field">
            <mv-input
              name="${this.name}"
              type="${this.type}"
              .value="${e}"
              placeholder="${this.placeholder}"
              ?has-error="${t}"
              @input-change="${this.changeValue}"
              ?disabled="${this.disabled}"
              ?required="${this.required}"
              ?immediate="${this.immediate}"
            ></mv-input>
          </slot>
        </div>
        ${t?o.dy`
              <div class="error">${this.error}</div>
            `:o.dy``}
      </div>
    `}changeValue=e=>{this.item?(0,a.QK)(e.target,{...e.detail,name:this.name,originalEvent:e},this.index):(0,a.uC)(e.target,{...e.detail,name:this.name,originalEvent:e})}}customElements.define("mv-form-field",n)},6833:(e,t,r)=>{var o=r(5862),a=r(1696);class n extends o.oi{static get properties(){return{name:{type:String},values:{type:Object},error:{type:String}}}static get styles(){return o.iv`
      .form-group {
        grid-area: group;
      }

      .error {
        grid-area: error;
        position: relative;
        font-size: 0.8em;
        color: #ad4444;
      }

      .mv-form-group {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: auto;
        grid-template-rows: auto;
        grid-template-areas:
          "group";
      }

      .has-error {
        grid-template-areas:
          "group"
          "error";
      }
    `}render(){const e=this.error?" has-error":"";return o.dy`
      <div class="mv-form-group${e}">
        <div class="form-group">
          <slot></slot>
        </div>
        ${this.error?o.dy`
              <div class="error">${this.error}</div>
            `:o.dy``}
      </div>
    `}connectedCallback(){this.addEventListener("change-group-field",this.changeGroupField),super.connectedCallback()}changeGroupField=e=>{const{detail:t}=e,{name:r,value:o,index:n,element:i}=t,s=this.values[n],l=[...this.values.slice(0,n),{...s,[r]:o},...this.values.slice(n+1)];(0,a.uC)(i,{name:r,value:l,group:this.name,index:n})}}customElements.define("mv-form-group",n)},1370:(e,t,r)=>{var o=r(5072),a=r(4463),n=r(4450),i=r(2175),s=r(5035),l=r(954),c=r(4257),d=r(1254),f=r(9970);e.exports=v,v.prototype.validate=function(e,t){var r;if("string"==typeof e){if(!(r=this.getSchema(e)))throw new Error('no schema with key or ref "'+e+'"')}else{var o=this._addSchema(e);r=o.validate||this._compile(o)}var a=r(t);!0!==r.$async&&(this.errors=r.errors);return a},v.prototype.compile=function(e,t){var r=this._addSchema(e,void 0,t);return r.validate||this._compile(r)},v.prototype.addSchema=function(e,t,r,o){if(Array.isArray(e)){for(var n=0;n<e.length;n++)this.addSchema(e[n],void 0,r,o);return this}var i=this._getId(e);if(void 0!==i&&"string"!=typeof i)throw new Error("schema id must be string");return $(this,t=a.normalizeId(t||i)),this._schemas[t]=this._addSchema(e,r,o,!0),this},v.prototype.addMetaSchema=function(e,t,r){return this.addSchema(e,t,r,!0),this},v.prototype.validateSchema=function(e,t){var r=e.$schema;if(void 0!==r&&"string"!=typeof r)throw new Error("$schema must be a string");if(!(r=r||this._opts.defaultMeta||function(e){var t=e._opts.meta;return e._opts.defaultMeta="object"==typeof t?e._getId(t)||t:e.getSchema(b)?b:void 0,e._opts.defaultMeta}(this)))return this.logger.warn("meta-schema not available"),this.errors=null,!0;var o=this.validate(r,e);if(!o&&t){var a="schema is invalid: "+this.errorsText();if("log"!=this._opts.validateSchema)throw new Error(a);this.logger.error(a)}return o},v.prototype.getSchema=function(e){var t=g(this,e);switch(typeof t){case"object":return t.validate||this._compile(t);case"string":return this.getSchema(t);case"undefined":return function(e,t){var r=a.schema.call(e,{schema:{}},t);if(r){var n=r.schema,s=r.root,l=r.baseId,c=o.call(e,n,s,void 0,l);return e._fragments[t]=new i({ref:t,fragment:!0,schema:n,root:s,baseId:l,validate:c}),c}}(this,e)}},v.prototype.removeSchema=function(e){if(e instanceof RegExp)return y(this,this._schemas,e),y(this,this._refs,e),this;switch(typeof e){case"undefined":return y(this,this._schemas),y(this,this._refs),this._cache.clear(),this;case"string":var t=g(this,e);return t&&this._cache.del(t.cacheKey),delete this._schemas[e],delete this._refs[e],this;case"object":var r=this._opts.serialize,o=r?r(e):e;this._cache.del(o);var n=this._getId(e);n&&(n=a.normalizeId(n),delete this._schemas[n],delete this._refs[n])}return this},v.prototype.addFormat=function(e,t){"string"==typeof t&&(t=new RegExp(t));return this._formats[e]=t,this},v.prototype.errorsText=function(e,t){if(!(e=e||this.errors))return"No errors";for(var r=void 0===(t=t||{}).separator?", ":t.separator,o=void 0===t.dataVar?"data":t.dataVar,a="",n=0;n<e.length;n++){var i=e[n];i&&(a+=o+i.dataPath+" "+i.message+r)}return a.slice(0,-r.length)},v.prototype._addSchema=function(e,t,r,o){if("object"!=typeof e&&"boolean"!=typeof e)throw new Error("schema should be object or boolean");var n=this._opts.serialize,s=n?n(e):e,l=this._cache.get(s);if(l)return l;o=o||!1!==this._opts.addUsedSchema;var c=a.normalizeId(this._getId(e));c&&o&&$(this,c);var d,f=!1!==this._opts.validateSchema&&!t;f&&!(d=c&&c==a.normalizeId(e.$schema))&&this.validateSchema(e,!0);var h=a.ids.call(this,e),u=new i({id:c,schema:e,localRefs:h,cacheKey:s,meta:r});"#"!=c[0]&&o&&(this._refs[c]=u);this._cache.put(s,u),f&&d&&this.validateSchema(e,!0);return u},v.prototype._compile=function(e,t){if(e.compiling)return e.validate=n,n.schema=e.schema,n.errors=null,n.root=t||n,!0===e.schema.$async&&(n.$async=!0),n;var r,a;e.compiling=!0,e.meta&&(r=this._opts,this._opts=this._metaOpts);try{a=o.call(this,e.schema,t,e.localRefs)}catch(t){throw delete e.validate,t}finally{e.compiling=!1,e.meta&&(this._opts=r)}return e.validate=a,e.refs=a.refs,e.refVal=a.refVal,e.root=a.root,a;function n(){var t=e.validate,r=t.apply(this,arguments);return n.errors=t.errors,r}},v.prototype.compileAsync=r(5047);var h=r(3099);v.prototype.addKeyword=h.add,v.prototype.getKeyword=h.get,v.prototype.removeKeyword=h.remove,v.prototype.validateKeyword=h.validate;var u=r(179);v.ValidationError=u.Validation,v.MissingRefError=u.MissingRef,v.$dataMetaSchema=d;var b="http://json-schema.org/draft-07/schema",p=["removeAdditional","useDefaults","coerceTypes","strictDefaults"],m=["/properties"];function v(e){if(!(this instanceof v))return new v(e);e=this._opts=f.copy(e)||{},function(e){var t=e._opts.logger;if(!1===t)e.logger={log:E,warn:E,error:E};else{if(void 0===t&&(t=console),!("object"==typeof t&&t.log&&t.warn&&t.error))throw new Error("logger must implement log, warn and error methods");e.logger=t}}(this),this._schemas={},this._refs={},this._fragments={},this._formats=l(e.format),this._cache=e.cache||new n,this._loadingSchemas={},this._compilations=[],this.RULES=c(),this._getId=function(e){switch(e.schemaId){case"auto":return x;case"id":return k;default:return w}}(e),e.loopRequired=e.loopRequired||1/0,"property"==e.errorDataPath&&(e._errorDataPathProperty=!0),void 0===e.serialize&&(e.serialize=s),this._metaOpts=function(e){for(var t=f.copy(e._opts),r=0;r<p.length;r++)delete t[p[r]];return t}(this),e.formats&&function(e){for(var t in e._opts.formats){var r=e._opts.formats[t];e.addFormat(t,r)}}(this),e.keywords&&function(e){for(var t in e._opts.keywords){var r=e._opts.keywords[t];e.addKeyword(t,r)}}(this),function(e){var t;e._opts.$data&&(t=r(1290),e.addMetaSchema(t,t.$id,!0));if(!1===e._opts.meta)return;var o=r(5484);e._opts.$data&&(o=d(o,m));e.addMetaSchema(o,b,!0),e._refs["http://json-schema.org/schema"]=b}(this),"object"==typeof e.meta&&this.addMetaSchema(e.meta),e.nullable&&this.addKeyword("nullable",{metaSchema:{type:"boolean"}}),function(e){var t=e._opts.schemas;if(!t)return;if(Array.isArray(t))e.addSchema(t);else for(var r in t)e.addSchema(t[r],r)}(this)}function g(e,t){return t=a.normalizeId(t),e._schemas[t]||e._refs[t]||e._fragments[t]}function y(e,t,r){for(var o in t){var a=t[o];a.meta||r&&!r.test(o)||(e._cache.del(a.cacheKey),delete t[o])}}function k(e){return e.$id&&this.logger.warn("schema $id ignored",e.$id),e.id}function w(e){return e.id&&this.logger.warn("schema id ignored",e.id),e.$id}function x(e){if(e.$id&&e.id&&e.$id!=e.id)throw new Error("schema $id is different from id");return e.$id||e.id}function $(e,t){if(e._schemas[t]||e._refs[t])throw new Error('schema with key or id "'+t+'" already exists')}function E(){}},4450:e=>{var t=e.exports=function(){this._cache={}};t.prototype.put=function(e,t){this._cache[e]=t},t.prototype.get=function(e){return this._cache[e]},t.prototype.del=function(e){delete this._cache[e]},t.prototype.clear=function(){this._cache={}}},5047:(e,t,r)=>{var o=r(179).MissingRef;e.exports=function e(t,r,a){var n=this;if("function"!=typeof this._opts.loadSchema)throw new Error("options.loadSchema should be a function");"function"==typeof r&&(a=r,r=void 0);var i=s(t).then((function(){var e=n._addSchema(t,void 0,r);return e.validate||l(e)}));a&&i.then((function(e){a(null,e)}),a);return i;function s(t){var r=t.$schema;return r&&!n.getSchema(r)?e.call(n,{$ref:r},!0):Promise.resolve()}function l(e){try{return n._compile(e)}catch(t){if(t instanceof o)return function(t){var o=t.missingSchema;if(c(o))throw new Error("Schema "+o+" is loaded but "+t.missingRef+" cannot be resolved");var a=n._loadingSchemas[o];a||(a=n._loadingSchemas[o]=n._opts.loadSchema(o)).then(i,i);return a.then((function(e){if(!c(o))return s(e).then((function(){c(o)||n.addSchema(e,o,void 0,r)}))})).then((function(){return l(e)}));function i(){delete n._loadingSchemas[o]}function c(e){return n._refs[e]||n._schemas[e]}}(t);throw t}}}},179:(e,t,r)=>{var o=r(4463);function a(e,t,r){this.message=r||a.message(e,t),this.missingRef=o.url(e,t),this.missingSchema=o.normalizeId(o.fullPath(this.missingRef))}function n(e){return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}e.exports={Validation:n((function(e){this.message="validation failed",this.errors=e,this.ajv=this.validation=!0})),MissingRef:n(a)},a.message=function(e,t){return"can't resolve reference "+t+" from id "+e}},954:(e,t,r)=>{var o=r(9970),a=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,n=[0,31,28,31,30,31,30,31,31,30,31,30,31],i=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i,s=/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,l=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,c=/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,d=/^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,f=/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,h=/^(?:\/(?:[^~/]|~0|~1)*)*$/,u=/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,b=/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;function p(e){return e="full"==e?"full":"fast",o.copy(p[e])}function m(e){var t=e.match(a);if(!t)return!1;var r=+t[1],o=+t[2],i=+t[3];return o>=1&&o<=12&&i>=1&&i<=(2==o&&function(e){return e%4==0&&(e%100!=0||e%400==0)}(r)?29:n[o])}function v(e,t){var r=e.match(i);if(!r)return!1;var o=r[1],a=r[2],n=r[3],s=r[5];return(o<=23&&a<=59&&n<=59||23==o&&59==a&&60==n)&&(!t||s)}e.exports=p,p.fast={date:/^\d\d\d\d-[0-1]\d-[0-3]\d$/,time:/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,"date-time":/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,"uri-template":c,url:d,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,hostname:s,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:w,uuid:f,"json-pointer":h,"json-pointer-uri-fragment":u,"relative-json-pointer":b},p.full={date:m,time:v,"date-time":function(e){var t=e.split(g);return 2==t.length&&m(t[0])&&v(t[1],!0)},uri:function(e){return y.test(e)&&l.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":c,url:d,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:s,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:w,uuid:f,"json-pointer":h,"json-pointer-uri-fragment":u,"relative-json-pointer":b};var g=/t|\s/i;var y=/\/|:/;var k=/[^\\]\\Z/;function w(e){if(k.test(e))return!1;try{return new RegExp(e),!0}catch(e){return!1}}},5072:(e,t,r)=>{var o=r(4463),a=r(9970),n=r(179),i=r(5035),s=r(7565),l=a.ucs2length,c=r(4063),d=n.Validation;function f(e,t,r){var o=u.call(this,e,t,r);return o>=0?{index:o,compiling:!0}:(o=this._compilations.length,this._compilations[o]={schema:e,root:t,baseId:r},{index:o,compiling:!1})}function h(e,t,r){var o=u.call(this,e,t,r);o>=0&&this._compilations.splice(o,1)}function u(e,t,r){for(var o=0;o<this._compilations.length;o++){var a=this._compilations[o];if(a.schema==e&&a.root==t&&a.baseId==r)return o}return-1}function b(e,t){return"var pattern"+e+" = new RegExp("+a.toQuotedString(t[e])+");"}function p(e){return"var default"+e+" = defaults["+e+"];"}function m(e,t){return void 0===t[e]?"":"var refVal"+e+" = refVal["+e+"];"}function v(e){return"var customRule"+e+" = customRules["+e+"];"}function g(e,t){if(!e.length)return"";for(var r="",o=0;o<e.length;o++)r+=t(o,e);return r}e.exports=function e(t,r,u,y){var k=this,w=this._opts,x=[void 0],$={},E=[],P={},S=[],F={},z=[];r=r||{schema:t,refVal:x,refs:$};var C=f.call(this,t,r,y),R=this._compilations[C.index];if(C.compiling)return R.callValidate=function e(){var t=R.validate,r=t.apply(this,arguments);return e.errors=t.errors,r};var D=this._formats,j=this.RULES;try{var B=O(t,r,u,y);R.validate=B;var _=R.callValidate;return _&&(_.schema=B.schema,_.errors=null,_.refs=B.refs,_.refVal=B.refVal,_.root=B.root,_.$async=B.$async,w.sourceCode&&(_.source=B.source)),B}finally{h.call(this,t,r,y)}function O(t,i,f,h){var u=!i||i&&i.schema==t;if(i.schema!=r.schema)return e.call(k,t,i,f,h);var y,P=!0===t.$async,F=s({isTop:!0,schema:t,isRoot:u,baseId:h,root:i,schemaPath:"",errSchemaPath:"#",errorPath:'""',MissingRefError:n.MissingRef,RULES:j,validate:s,util:a,resolve:o,resolveRef:I,usePattern:L,useDefault:U,useCustomRule:T,opts:w,formats:D,logger:k.logger,self:k});F=g(x,m)+g(E,b)+g(S,p)+g(z,v)+F,w.processCode&&(F=w.processCode(F,t));try{y=new Function("self","RULES","formats","root","refVal","defaults","customRules","equal","ucs2length","ValidationError",F)(k,j,D,r,x,S,z,c,l,d),x[0]=y}catch(e){throw k.logger.error("Error compiling schema, function code:",F),e}return y.schema=t,y.errors=null,y.refs=$,y.refVal=x,y.root=u?y:i,P&&(y.$async=!0),!0===w.sourceCode&&(y.source={code:F,patterns:E,defaults:S}),y}function I(t,a,n){a=o.url(t,a);var i,s,l=$[a];if(void 0!==l)return q(i=x[l],s="refVal["+l+"]");if(!n&&r.refs){var c=r.refs[a];if(void 0!==c)return q(i=r.refVal[c],s=A(a,i))}s=A(a);var d=o.call(k,O,r,a);if(void 0===d){var f=u&&u[a];f&&(d=o.inlineRef(f,w.inlineRefs)?f:e.call(k,f,r,u,t))}if(void 0!==d)return function(e,t){var r=$[e];x[r]=t}(a,d),q(d,s);!function(e){delete $[e]}(a)}function A(e,t){var r=x.length;return x[r]=t,$[e]=r,"refVal"+r}function q(e,t){return"object"==typeof e||"boolean"==typeof e?{code:t,schema:e,inline:!0}:{code:t,$async:e&&!!e.$async}}function L(e){var t=P[e];return void 0===t&&(t=P[e]=E.length,E[t]=e),"pattern"+t}function U(e){switch(typeof e){case"boolean":case"number":return""+e;case"string":return a.toQuotedString(e);case"object":if(null===e)return"null";var t=i(e),r=F[t];return void 0===r&&(r=F[t]=S.length,S[r]=e),"default"+r}}function T(e,t,r,o){if(!1!==k._opts.validateSchema){var a=e.definition.dependencies;if(a&&!a.every((function(e){return Object.prototype.hasOwnProperty.call(r,e)})))throw new Error("parent schema must have all required keywords: "+a.join(","));var n=e.definition.validateSchema;if(n)if(!n(t)){var i="keyword schema is invalid: "+k.errorsText(n.errors);if("log"!=k._opts.validateSchema)throw new Error(i);k.logger.error(i)}}var s,l=e.definition.compile,c=e.definition.inline,d=e.definition.macro;if(l)s=l.call(k,t,r,o);else if(d)s=d.call(k,t,r,o),!1!==w.validateSchema&&k.validateSchema(s,!0);else if(c)s=c.call(k,o,e.keyword,t,r);else if(!(s=e.definition.validate))return;if(void 0===s)throw new Error('custom keyword "'+e.keyword+'"failed to compile');var f=z.length;return z[f]=s,{code:"customRule"+f,validate:s}}}},4463:(e,t,r)=>{var o=r(540),a=r(4063),n=r(9970),i=r(2175),s=r(780);function l(e,t,r){var o=this._refs[r];if("string"==typeof o){if(!this._refs[o])return l.call(this,e,t,o);o=this._refs[o]}if((o=o||this._schemas[r])instanceof i)return b(o.schema,this._opts.inlineRefs)?o.schema:o.validate||this._compile(o);var a,n,s,d=c.call(this,t,r);return d&&(a=d.schema,t=d.root,s=d.baseId),a instanceof i?n=a.validate||e.call(this,a.schema,t,void 0,s):void 0!==a&&(n=b(a,this._opts.inlineRefs)?a:e.call(this,a,t,void 0,s)),n}function c(e,t){var r=o.parse(t),a=g(r),n=v(this._getId(e.schema));if(0===Object.keys(e.schema).length||a!==n){var s=k(a),l=this._refs[s];if("string"==typeof l)return d.call(this,e,l,r);if(l instanceof i)l.validate||this._compile(l),e=l;else{if(!((l=this._schemas[s])instanceof i))return;if(l.validate||this._compile(l),s==k(t))return{schema:l,root:e,baseId:n};e=l}if(!e.schema)return;n=v(this._getId(e.schema))}return h.call(this,r,n,e.schema,e)}function d(e,t,r){var o=c.call(this,e,t);if(o){var a=o.schema,n=o.baseId;e=o.root;var i=this._getId(a);return i&&(n=w(n,i)),h.call(this,r,n,a,e)}}e.exports=l,l.normalizeId=k,l.fullPath=v,l.url=w,l.ids=function(e){var t=k(this._getId(e)),r={"":t},i={"":v(t,!1)},l={},c=this;return s(e,{allKeys:!0},(function(e,t,s,d,f,h,u){if(""!==t){var b=c._getId(e),p=r[d],m=i[d]+"/"+f;if(void 0!==u&&(m+="/"+("number"==typeof u?u:n.escapeFragment(u))),"string"==typeof b){b=p=k(p?o.resolve(p,b):b);var v=c._refs[b];if("string"==typeof v&&(v=c._refs[v]),v&&v.schema){if(!a(e,v.schema))throw new Error('id "'+b+'" resolves to more than one schema')}else if(b!=k(m))if("#"==b[0]){if(l[b]&&!a(e,l[b]))throw new Error('id "'+b+'" resolves to more than one schema');l[b]=e}else c._refs[b]=m}r[t]=p,i[t]=m}})),l},l.inlineRef=b,l.schema=c;var f=n.toHash(["properties","patternProperties","enum","dependencies","definitions"]);function h(e,t,r,o){if(e.fragment=e.fragment||"","/"==e.fragment.slice(0,1)){for(var a=e.fragment.split("/"),i=1;i<a.length;i++){var s=a[i];if(s){if(void 0===(r=r[s=n.unescapeFragment(s)]))break;var l;if(!f[s]&&((l=this._getId(r))&&(t=w(t,l)),r.$ref)){var d=w(t,r.$ref),h=c.call(this,o,d);h&&(r=h.schema,o=h.root,t=h.baseId)}}}return void 0!==r&&r!==o.schema?{schema:r,root:o,baseId:t}:void 0}}var u=n.toHash(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum"]);function b(e,t){return!1!==t&&(void 0===t||!0===t?p(e):t?m(e)<=t:void 0)}function p(e){var t;if(Array.isArray(e)){for(var r=0;r<e.length;r++)if("object"==typeof(t=e[r])&&!p(t))return!1}else for(var o in e){if("$ref"==o)return!1;if("object"==typeof(t=e[o])&&!p(t))return!1}return!0}function m(e){var t,r=0;if(Array.isArray(e)){for(var o=0;o<e.length;o++)if("object"==typeof(t=e[o])&&(r+=m(t)),r==1/0)return 1/0}else for(var a in e){if("$ref"==a)return 1/0;if(u[a])r++;else if("object"==typeof(t=e[a])&&(r+=m(t)+1),r==1/0)return 1/0}return r}function v(e,t){return!1!==t&&(e=k(e)),g(o.parse(e))}function g(e){return o.serialize(e).split("#")[0]+"#"}var y=/#\/?$/;function k(e){return e?e.replace(y,""):""}function w(e,t){return t=k(t),o.resolve(e,t)}},4257:(e,t,r)=>{var o=r(6105),a=r(9970).toHash;e.exports=function(){var e=[{type:"number",rules:[{maximum:["exclusiveMaximum"]},{minimum:["exclusiveMinimum"]},"multipleOf","format"]},{type:"string",rules:["maxLength","minLength","pattern","format"]},{type:"array",rules:["maxItems","minItems","items","contains","uniqueItems"]},{type:"object",rules:["maxProperties","minProperties","required","dependencies","propertyNames",{properties:["additionalProperties","patternProperties"]}]},{rules:["$ref","const","enum","not","anyOf","oneOf","allOf","if"]}],t=["type","$comment"];return e.all=a(t),e.types=a(["number","integer","string","array","object","boolean","null"]),e.forEach((function(r){r.rules=r.rules.map((function(r){var a;if("object"==typeof r){var n=Object.keys(r)[0];a=r[n],r=n,a.forEach((function(r){t.push(r),e.all[r]=!0}))}return t.push(r),e.all[r]={keyword:r,code:o[r],implements:a}})),e.all.$comment={keyword:"$comment",code:o.$comment},r.type&&(e.types[r.type]=r)})),e.keywords=a(t.concat(["$schema","$id","id","$data","$async","title","description","default","definitions","examples","readOnly","writeOnly","contentMediaType","contentEncoding","additionalItems","then","else"])),e.custom={},e}},2175:(e,t,r)=>{var o=r(9970);e.exports=function(e){o.copy(e,this)}},5124:e=>{e.exports=function(e){for(var t,r=0,o=e.length,a=0;a<o;)r++,(t=e.charCodeAt(a++))>=55296&&t<=56319&&a<o&&56320==(64512&(t=e.charCodeAt(a)))&&a++;return r}},9970:(e,t,r)=>{function o(e,t,r,o){var a=o?" !== ":" === ",n=o?" || ":" && ",i=o?"!":"",s=o?"":"!";switch(e){case"null":return t+a+"null";case"array":return i+"Array.isArray("+t+")";case"object":return"("+i+t+n+"typeof "+t+a+'"object"'+n+s+"Array.isArray("+t+"))";case"integer":return"(typeof "+t+a+'"number"'+n+s+"("+t+" % 1)"+n+t+a+t+(r?n+i+"isFinite("+t+")":"")+")";case"number":return"(typeof "+t+a+'"'+e+'"'+(r?n+i+"isFinite("+t+")":"")+")";default:return"typeof "+t+a+'"'+e+'"'}}e.exports={copy:function(e,t){for(var r in t=t||{},e)t[r]=e[r];return t},checkDataType:o,checkDataTypes:function(e,t,r){if(1===e.length)return o(e[0],t,r,!0);var a="",i=n(e);for(var s in i.array&&i.object&&(a=i.null?"(":"(!"+t+" || ",a+="typeof "+t+' !== "object")',delete i.null,delete i.array,delete i.object),i.number&&delete i.integer,i)a+=(a?" && ":"")+o(s,t,r,!0);return a},coerceToTypes:function(e,t){if(Array.isArray(t)){for(var r=[],o=0;o<t.length;o++){var n=t[o];(a[n]||"array"===e&&"array"===n)&&(r[r.length]=n)}if(r.length)return r}else{if(a[t])return[t];if("array"===e&&"array"===t)return["array"]}},toHash:n,getProperty:l,escapeQuotes:c,equal:r(4063),ucs2length:r(5124),varOccurences:function(e,t){t+="[^0-9]";var r=e.match(new RegExp(t,"g"));return r?r.length:0},varReplace:function(e,t,r){return t+="([^0-9])",r=r.replace(/\$/g,"$$$$"),e.replace(new RegExp(t,"g"),r+"$1")},schemaHasRules:function(e,t){if("boolean"==typeof e)return!e;for(var r in e)if(t[r])return!0},schemaHasRulesExcept:function(e,t,r){if("boolean"==typeof e)return!e&&"not"!=r;for(var o in e)if(o!=r&&t[o])return!0},schemaUnknownRules:function(e,t){if("boolean"==typeof e)return;for(var r in e)if(!t[r])return r},toQuotedString:d,getPathExpr:function(e,t,r,o){return u(e,r?"'/' + "+t+(o?"":".replace(/~/g, '~0').replace(/\\//g, '~1')"):o?"'[' + "+t+" + ']'":"'[\\'' + "+t+" + '\\']'")},getPath:function(e,t,r){var o=d(r?"/"+b(t):l(t));return u(e,o)},getData:function(e,t,r){var o,a,n,i;if(""===e)return"rootData";if("/"==e[0]){if(!f.test(e))throw new Error("Invalid JSON-pointer: "+e);a=e,n="rootData"}else{if(!(i=e.match(h)))throw new Error("Invalid JSON-pointer: "+e);if(o=+i[1],"#"==(a=i[2])){if(o>=t)throw new Error("Cannot access property/index "+o+" levels up, current level is "+t);return r[t-o]}if(o>t)throw new Error("Cannot access data "+o+" levels up, current level is "+t);if(n="data"+(t-o||""),!a)return n}for(var s=n,c=a.split("/"),d=0;d<c.length;d++){var u=c[d];u&&(n+=l(p(u)),s+=" && "+n)}return s},unescapeFragment:function(e){return p(decodeURIComponent(e))},unescapeJsonPointer:p,escapeFragment:function(e){return encodeURIComponent(b(e))},escapeJsonPointer:b};var a=n(["string","number","integer","boolean","null"]);function n(e){for(var t={},r=0;r<e.length;r++)t[e[r]]=!0;return t}var i=/^[a-z$_][a-z$_0-9]*$/i,s=/'|\\/g;function l(e){return"number"==typeof e?"["+e+"]":i.test(e)?"."+e:"['"+c(e)+"']"}function c(e){return e.replace(s,"\\$&").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\f/g,"\\f").replace(/\t/g,"\\t")}function d(e){return"'"+c(e)+"'"}var f=/^\/(?:[^~]|~0|~1)*$/,h=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function u(e,t){return'""'==e?t:(e+" + "+t).replace(/([^\\])' \+ '/g,"$1")}function b(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function p(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}},1254:e=>{var t=["multipleOf","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","additionalItems","maxItems","minItems","uniqueItems","maxProperties","minProperties","required","additionalProperties","enum","format","const"];e.exports=function(e,r){for(var o=0;o<r.length;o++){e=JSON.parse(JSON.stringify(e));var a,n=r[o].split("/"),i=e;for(a=1;a<n.length;a++)i=i[n[a]];for(a=0;a<t.length;a++){var s=t[a],l=i[s];l&&(i[s]={anyOf:[l,{$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"}]})}}return e}},6345:(e,t,r)=>{var o=r(5484);e.exports={$id:"https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",definitions:{simpleTypes:o.definitions.simpleTypes},type:"object",dependencies:{schema:["validate"],$data:["validate"],statements:["inline"],valid:{not:{required:["macro"]}}},properties:{type:o.properties.type,schema:{type:"boolean"},statements:{type:"boolean"},dependencies:{type:"array",items:{type:"string"}},metaSchema:{type:"object"},modifying:{type:"boolean"},valid:{type:"boolean"},$data:{type:"boolean"},async:{type:"boolean"},errors:{anyOf:[{type:"boolean"},{const:"full"}]}}}},3627:e=>{e.exports=function(e,t,r){var o,a=" ",n=e.level,i=e.dataLevel,s=e.schema[t],l=e.schemaPath+e.util.getProperty(t),c=e.errSchemaPath+"/"+t,d=!e.opts.allErrors,f="data"+(i||""),h=e.opts.$data&&s&&s.$data;h?(a+=" var schema"+n+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; ",o="schema"+n):o=s;var u="maximum"==t,b=u?"exclusiveMaximum":"exclusiveMinimum",p=e.schema[b],m=e.opts.$data&&p&&p.$data,v=u?"<":">",g=u?">":"<",y=void 0;if(!h&&"number"!=typeof s&&void 0!==s)throw new Error(t+" must be number");if(!m&&void 0!==p&&"number"!=typeof p&&"boolean"!=typeof p)throw new Error(b+" must be number or boolean");if(m){var k=e.util.getData(p.$data,i,e.dataPathArr),w="exclusive"+n,x="exclType"+n,$="exclIsNumber"+n,E="' + "+(F="op"+n)+" + '";a+=" var schemaExcl"+n+" = "+k+"; ",a+=" var "+w+"; var "+x+" = typeof "+(k="schemaExcl"+n)+"; if ("+x+" != 'boolean' && "+x+" != 'undefined' && "+x+" != 'number') { ";var P;y=b;(P=P||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+(y||"_exclusiveLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: '"+b+" should be boolean' "),e.opts.verbose&&(a+=" , schema: validate.schema"+l+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";var S=a;a=P.pop(),!e.compositeRule&&d?e.async?a+=" throw new ValidationError(["+S+"]); ":a+=" validate.errors = ["+S+"]; return false; ":a+=" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else if ( ",h&&(a+=" ("+o+" !== undefined && typeof "+o+" != 'number') || "),a+=" "+x+" == 'number' ? ( ("+w+" = "+o+" === undefined || "+k+" "+v+"= "+o+") ? "+f+" "+g+"= "+k+" : "+f+" "+g+" "+o+" ) : ( ("+w+" = "+k+" === true) ? "+f+" "+g+"= "+o+" : "+f+" "+g+" "+o+" ) || "+f+" !== "+f+") { var op"+n+" = "+w+" ? '"+v+"' : '"+v+"='; ",void 0===s&&(y=b,c=e.errSchemaPath+"/"+b,o=k,h=m)}else{E=v;if(($="number"==typeof p)&&h){var F="'"+E+"'";a+=" if ( ",h&&(a+=" ("+o+" !== undefined && typeof "+o+" != 'number') || "),a+=" ( "+o+" === undefined || "+p+" "+v+"= "+o+" ? "+f+" "+g+"= "+p+" : "+f+" "+g+" "+o+" ) || "+f+" !== "+f+") { "}else{$&&void 0===s?(w=!0,y=b,c=e.errSchemaPath+"/"+b,o=p,g+="="):($&&(o=Math[u?"min":"max"](p,s)),p===(!$||o)?(w=!0,y=b,c=e.errSchemaPath+"/"+b,g+="="):(w=!1,E+="="));F="'"+E+"'";a+=" if ( ",h&&(a+=" ("+o+" !== undefined && typeof "+o+" != 'number') || "),a+=" "+f+" "+g+" "+o+" || "+f+" !== "+f+") { "}}y=y||t,(P=P||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+(y||"_limit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { comparison: "+F+", limit: "+o+", exclusive: "+w+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be "+E+" ",a+=h?"' + "+o:o+"'"),e.opts.verbose&&(a+=" , schema:  ",a+=h?"validate.schema"+l:""+s,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";S=a;return a=P.pop(),!e.compositeRule&&d?e.async?a+=" throw new ValidationError(["+S+"]); ":a+=" validate.errors = ["+S+"]; return false; ":a+=" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",d&&(a+=" else { "),a}},2829:e=>{e.exports=function(e,t,r){var o,a=" ",n=e.level,i=e.dataLevel,s=e.schema[t],l=e.schemaPath+e.util.getProperty(t),c=e.errSchemaPath+"/"+t,d=!e.opts.allErrors,f="data"+(i||""),h=e.opts.$data&&s&&s.$data;if(h?(a+=" var schema"+n+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; ",o="schema"+n):o=s,!h&&"number"!=typeof s)throw new Error(t+" must be number");a+="if ( ",h&&(a+=" ("+o+" !== undefined && typeof "+o+" != 'number') || "),a+=" "+f+".length "+("maxItems"==t?">":"<")+" "+o+") { ";var u=t,b=b||[];b.push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+(u||"_limitItems")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { limit: "+o+" } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have ",a+="maxItems"==t?"more":"fewer",a+=" than ",a+=h?"' + "+o+" + '":""+s,a+=" items' "),e.opts.verbose&&(a+=" , schema:  ",a+=h?"validate.schema"+l:""+s,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";var p=a;return a=b.pop(),!e.compositeRule&&d?e.async?a+=" throw new ValidationError(["+p+"]); ":a+=" validate.errors = ["+p+"]; return false; ":a+=" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",d&&(a+=" else { "),a}},7645:e=>{e.exports=function(e,t,r){var o,a=" ",n=e.level,i=e.dataLevel,s=e.schema[t],l=e.schemaPath+e.util.getProperty(t),c=e.errSchemaPath+"/"+t,d=!e.opts.allErrors,f="data"+(i||""),h=e.opts.$data&&s&&s.$data;if(h?(a+=" var schema"+n+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; ",o="schema"+n):o=s,!h&&"number"!=typeof s)throw new Error(t+" must be number");var u="maxLength"==t?">":"<";a+="if ( ",h&&(a+=" ("+o+" !== undefined && typeof "+o+" != 'number') || "),!1===e.opts.unicode?a+=" "+f+".length ":a+=" ucs2length("+f+") ",a+=" "+u+" "+o+") { ";var b=t,p=p||[];p.push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+(b||"_limitLength")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { limit: "+o+" } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT be ",a+="maxLength"==t?"longer":"shorter",a+=" than ",a+=h?"' + "+o+" + '":""+s,a+=" characters' "),e.opts.verbose&&(a+=" , schema:  ",a+=h?"validate.schema"+l:""+s,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";var m=a;return a=p.pop(),!e.compositeRule&&d?e.async?a+=" throw new ValidationError(["+m+"]); ":a+=" validate.errors = ["+m+"]; return false; ":a+=" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",d&&(a+=" else { "),a}},2408:e=>{e.exports=function(e,t,r){var o,a=" ",n=e.level,i=e.dataLevel,s=e.schema[t],l=e.schemaPath+e.util.getProperty(t),c=e.errSchemaPath+"/"+t,d=!e.opts.allErrors,f="data"+(i||""),h=e.opts.$data&&s&&s.$data;if(h?(a+=" var schema"+n+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; ",o="schema"+n):o=s,!h&&"number"!=typeof s)throw new Error(t+" must be number");a+="if ( ",h&&(a+=" ("+o+" !== undefined && typeof "+o+" != 'number') || "),a+=" Object.keys("+f+").length "+("maxProperties"==t?">":"<")+" "+o+") { ";var u=t,b=b||[];b.push(a),a="",!1!==e.createErrors?(a+=" { keyword: '"+(u||"_limitProperties")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { limit: "+o+" } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have ",a+="maxProperties"==t?"more":"fewer",a+=" than ",a+=h?"' + "+o+" + '":""+s,a+=" properties' "),e.opts.verbose&&(a+=" , schema:  ",a+=h?"validate.schema"+l:""+s,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";var p=a;return a=b.pop(),!e.compositeRule&&d?e.async?a+=" throw new ValidationError(["+p+"]); ":a+=" validate.errors = ["+p+"]; return false; ":a+=" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",d&&(a+=" else { "),a}},351:e=>{e.exports=function(e,t,r){var o=" ",a=e.schema[t],n=e.schemaPath+e.util.getProperty(t),i=e.errSchemaPath+"/"+t,s=!e.opts.allErrors,l=e.util.copy(e),c="";l.level++;var d="valid"+l.level,f=l.baseId,h=!0,u=a;if(u)for(var b,p=-1,m=u.length-1;p<m;)b=u[p+=1],(e.opts.strictKeywords?"object"==typeof b&&Object.keys(b).length>0||!1===b:e.util.schemaHasRules(b,e.RULES.all))&&(h=!1,l.schema=b,l.schemaPath=n+"["+p+"]",l.errSchemaPath=i+"/"+p,o+="  "+e.validate(l)+" ",l.baseId=f,s&&(o+=" if ("+d+") { ",c+="}"));return s&&(o+=h?" if (true) { ":" "+c.slice(0,-1)+" "),o}},4370:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="valid"+a,h="errs__"+a,u=e.util.copy(e),b="";u.level++;var p="valid"+u.level,m=i.every((function(t){return e.opts.strictKeywords?"object"==typeof t&&Object.keys(t).length>0||!1===t:e.util.schemaHasRules(t,e.RULES.all)}));if(m){var v=u.baseId;o+=" var "+h+" = errors; var "+f+" = false;  ";var g=e.compositeRule;e.compositeRule=u.compositeRule=!0;var y=i;if(y)for(var k,w=-1,x=y.length-1;w<x;)k=y[w+=1],u.schema=k,u.schemaPath=s+"["+w+"]",u.errSchemaPath=l+"/"+w,o+="  "+e.validate(u)+" ",u.baseId=v,o+=" "+f+" = "+f+" || "+p+"; if (!"+f+") { ",b+="}";e.compositeRule=u.compositeRule=g,o+=" "+b+" if (!"+f+") {   var err =   ",!1!==e.createErrors?(o+=" { keyword: 'anyOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(o+=" , message: 'should match some schema in anyOf' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&c&&(e.async?o+=" throw new ValidationError(vErrors); ":o+=" validate.errors = vErrors; return false; "),o+=" } else {  errors = "+h+"; if (vErrors !== null) { if ("+h+") vErrors.length = "+h+"; else vErrors = null; } ",e.opts.allErrors&&(o+=" } ")}else c&&(o+=" if (true) { ");return o}},9831:e=>{e.exports=function(e,t,r){var o=" ",a=e.schema[t],n=e.errSchemaPath+"/"+t,i=(e.opts.allErrors,e.util.toQuotedString(a));return!0===e.opts.$comment?o+=" console.log("+i+");":"function"==typeof e.opts.$comment&&(o+=" self._opts.$comment("+i+", "+e.util.toQuotedString(n)+", validate.root.schema);"),o}},345:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="valid"+a,h=e.opts.$data&&i&&i.$data;h&&(o+=" var schema"+a+" = "+e.util.getData(i.$data,n,e.dataPathArr)+"; "),h||(o+=" var schema"+a+" = validate.schema"+s+";"),o+="var "+f+" = equal("+d+", schema"+a+"); if (!"+f+") {   ";var u=u||[];u.push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'const' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { allowedValue: schema"+a+" } ",!1!==e.opts.messages&&(o+=" , message: 'should be equal to constant' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var b=o;return o=u.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+b+"]); ":o+=" validate.errors = ["+b+"]; return false; ":o+=" var err = "+b+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" }",c&&(o+=" else { "),o}},6226:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="valid"+a,h="errs__"+a,u=e.util.copy(e);u.level++;var b="valid"+u.level,p="i"+a,m=u.dataLevel=e.dataLevel+1,v="data"+m,g=e.baseId,y=e.opts.strictKeywords?"object"==typeof i&&Object.keys(i).length>0||!1===i:e.util.schemaHasRules(i,e.RULES.all);if(o+="var "+h+" = errors;var "+f+";",y){var k=e.compositeRule;e.compositeRule=u.compositeRule=!0,u.schema=i,u.schemaPath=s,u.errSchemaPath=l,o+=" var "+b+" = false; for (var "+p+" = 0; "+p+" < "+d+".length; "+p+"++) { ",u.errorPath=e.util.getPathExpr(e.errorPath,p,e.opts.jsonPointers,!0);var w=d+"["+p+"]";u.dataPathArr[m]=p;var x=e.validate(u);u.baseId=g,e.util.varOccurences(x,v)<2?o+=" "+e.util.varReplace(x,v,w)+" ":o+=" var "+v+" = "+w+"; "+x+" ",o+=" if ("+b+") break; }  ",e.compositeRule=u.compositeRule=k,o+="  if (!"+b+") {"}else o+=" if ("+d+".length == 0) {";var $=$||[];$.push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'contains' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(o+=" , message: 'should contain a valid item' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var E=o;return o=$.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+E+"]); ":o+=" validate.errors = ["+E+"]; return false; ":o+=" var err = "+E+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } else { ",y&&(o+="  errors = "+h+"; if (vErrors !== null) { if ("+h+") vErrors.length = "+h+"; else vErrors = null; } "),e.opts.allErrors&&(o+=" } "),o}},1447:e=>{e.exports=function(e,t,r){var o,a,n=" ",i=e.level,s=e.dataLevel,l=e.schema[t],c=e.schemaPath+e.util.getProperty(t),d=e.errSchemaPath+"/"+t,f=!e.opts.allErrors,h="data"+(s||""),u="valid"+i,b="errs__"+i,p=e.opts.$data&&l&&l.$data;p?(n+=" var schema"+i+" = "+e.util.getData(l.$data,s,e.dataPathArr)+"; ",a="schema"+i):a=l;var m,v,g,y,k,w=this,x="definition"+i,$=w.definition,E="";if(p&&$.$data){k="keywordValidate"+i;var P=$.validateSchema;n+=" var "+x+" = RULES.custom['"+t+"'].definition; var "+k+" = "+x+".validate;"}else{if(!(y=e.useCustomRule(w,l,e.schema,e)))return;a="validate.schema"+c,k=y.code,m=$.compile,v=$.inline,g=$.macro}var S=k+".errors",F="i"+i,z="ruleErr"+i,C=$.async;if(C&&!e.async)throw new Error("async keyword in sync schema");if(v||g||(n+=S+" = null;"),n+="var "+b+" = errors;var "+u+";",p&&$.$data&&(E+="}",n+=" if ("+a+" === undefined) { "+u+" = true; } else { ",P&&(E+="}",n+=" "+u+" = "+x+".validateSchema("+a+"); if ("+u+") { ")),v)$.statements?n+=" "+y.validate+" ":n+=" "+u+" = "+y.validate+"; ";else if(g){var R=e.util.copy(e);E="";R.level++;var D="valid"+R.level;R.schema=y.validate,R.schemaPath="";var j=e.compositeRule;e.compositeRule=R.compositeRule=!0;var B=e.validate(R).replace(/validate\.schema/g,k);e.compositeRule=R.compositeRule=j,n+=" "+B}else{(A=A||[]).push(n),n="",n+="  "+k+".call( ",e.opts.passContext?n+="this":n+="self",m||!1===$.schema?n+=" , "+h+" ":n+=" , "+a+" , "+h+" , validate.schema"+e.schemaPath+" ",n+=" , (dataPath || '')",'""'!=e.errorPath&&(n+=" + "+e.errorPath);var _=s?"data"+(s-1||""):"parentData",O=s?e.dataPathArr[s]:"parentDataProperty",I=n+=" , "+_+" , "+O+" , rootData )  ";n=A.pop(),!1===$.errors?(n+=" "+u+" = ",C&&(n+="await "),n+=I+"; "):n+=C?" var "+(S="customErrors"+i)+" = null; try { "+u+" = await "+I+"; } catch (e) { "+u+" = false; if (e instanceof ValidationError) "+S+" = e.errors; else throw e; } ":" "+S+" = null; "+u+" = "+I+"; "}if($.modifying&&(n+=" if ("+_+") "+h+" = "+_+"["+O+"];"),n+=""+E,$.valid)f&&(n+=" if (true) { ");else{var A;n+=" if ( ",void 0===$.valid?(n+=" !",n+=g?""+D:""+u):n+=" "+!$.valid+" ",n+=") { ",o=w.keyword,(A=A||[]).push(n),n="",(A=A||[]).push(n),n="",!1!==e.createErrors?(n+=" { keyword: '"+(o||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(d)+" , params: { keyword: '"+w.keyword+"' } ",!1!==e.opts.messages&&(n+=" , message: 'should pass \""+w.keyword+"\" keyword validation' "),e.opts.verbose&&(n+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),n+=" } "):n+=" {} ";var q=n;n=A.pop(),!e.compositeRule&&f?e.async?n+=" throw new ValidationError(["+q+"]); ":n+=" validate.errors = ["+q+"]; return false; ":n+=" var err = "+q+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";var L=n;n=A.pop(),v?$.errors?"full"!=$.errors&&(n+="  for (var "+F+"="+b+"; "+F+"<errors; "+F+"++) { var "+z+" = vErrors["+F+"]; if ("+z+".dataPath === undefined) "+z+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+z+".schemaPath === undefined) { "+z+'.schemaPath = "'+d+'"; } ',e.opts.verbose&&(n+=" "+z+".schema = "+a+"; "+z+".data = "+h+"; "),n+=" } "):!1===$.errors?n+=" "+L+" ":(n+=" if ("+b+" == errors) { "+L+" } else {  for (var "+F+"="+b+"; "+F+"<errors; "+F+"++) { var "+z+" = vErrors["+F+"]; if ("+z+".dataPath === undefined) "+z+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+z+".schemaPath === undefined) { "+z+'.schemaPath = "'+d+'"; } ',e.opts.verbose&&(n+=" "+z+".schema = "+a+"; "+z+".data = "+h+"; "),n+=" } } "):g?(n+="   var err =   ",!1!==e.createErrors?(n+=" { keyword: '"+(o||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(d)+" , params: { keyword: '"+w.keyword+"' } ",!1!==e.opts.messages&&(n+=" , message: 'should pass \""+w.keyword+"\" keyword validation' "),e.opts.verbose&&(n+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),n+=" } "):n+=" {} ",n+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&f&&(e.async?n+=" throw new ValidationError(vErrors); ":n+=" validate.errors = vErrors; return false; ")):!1===$.errors?n+=" "+L+" ":(n+=" if (Array.isArray("+S+")) { if (vErrors === null) vErrors = "+S+"; else vErrors = vErrors.concat("+S+"); errors = vErrors.length;  for (var "+F+"="+b+"; "+F+"<errors; "+F+"++) { var "+z+" = vErrors["+F+"]; if ("+z+".dataPath === undefined) "+z+".dataPath = (dataPath || '') + "+e.errorPath+";  "+z+'.schemaPath = "'+d+'";  ',e.opts.verbose&&(n+=" "+z+".schema = "+a+"; "+z+".data = "+h+"; "),n+=" } } else { "+L+" } "),n+=" } ",f&&(n+=" else { ")}return n}},5414:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="errs__"+a,h=e.util.copy(e),u="";h.level++;var b="valid"+h.level,p={},m={},v=e.opts.ownProperties;for(w in i)if("__proto__"!=w){var g=i[w],y=Array.isArray(g)?m:p;y[w]=g}o+="var "+f+" = errors;";var k=e.errorPath;for(var w in o+="var missing"+a+";",m)if((y=m[w]).length){if(o+=" if ( "+d+e.util.getProperty(w)+" !== undefined ",v&&(o+=" && Object.prototype.hasOwnProperty.call("+d+", '"+e.util.escapeQuotes(w)+"') "),c){o+=" && ( ";var x=y;if(x)for(var $=-1,E=x.length-1;$<E;){R=x[$+=1],$&&(o+=" || "),o+=" ( ( "+(_=d+(B=e.util.getProperty(R)))+" === undefined ",v&&(o+=" || ! Object.prototype.hasOwnProperty.call("+d+", '"+e.util.escapeQuotes(R)+"') "),o+=") && (missing"+a+" = "+e.util.toQuotedString(e.opts.jsonPointers?R:B)+") ) "}o+=")) {  ";var P="missing"+a,S="' + "+P+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(k,P,!0):k+" + "+P);var F=F||[];F.push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+S+"', depsCount: "+y.length+", deps: '"+e.util.escapeQuotes(1==y.length?y[0]:y.join(", "))+"' } ",!1!==e.opts.messages&&(o+=" , message: 'should have ",1==y.length?o+="property "+e.util.escapeQuotes(y[0]):o+="properties "+e.util.escapeQuotes(y.join(", ")),o+=" when property "+e.util.escapeQuotes(w)+" is present' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var z=o;o=F.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+z+"]); ":o+=" validate.errors = ["+z+"]; return false; ":o+=" var err = "+z+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}else{o+=" ) { ";var C=y;if(C)for(var R,D=-1,j=C.length-1;D<j;){R=C[D+=1];var B=e.util.getProperty(R),_=(S=e.util.escapeQuotes(R),d+B);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(k,R,e.opts.jsonPointers)),o+=" if ( "+_+" === undefined ",v&&(o+=" || ! Object.prototype.hasOwnProperty.call("+d+", '"+e.util.escapeQuotes(R)+"') "),o+=") {  var err =   ",!1!==e.createErrors?(o+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+S+"', depsCount: "+y.length+", deps: '"+e.util.escapeQuotes(1==y.length?y[0]:y.join(", "))+"' } ",!1!==e.opts.messages&&(o+=" , message: 'should have ",1==y.length?o+="property "+e.util.escapeQuotes(y[0]):o+="properties "+e.util.escapeQuotes(y.join(", ")),o+=" when property "+e.util.escapeQuotes(w)+" is present' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "}}o+=" }   ",c&&(u+="}",o+=" else { ")}e.errorPath=k;var O=h.baseId;for(var w in p){g=p[w];(e.opts.strictKeywords?"object"==typeof g&&Object.keys(g).length>0||!1===g:e.util.schemaHasRules(g,e.RULES.all))&&(o+=" "+b+" = true; if ( "+d+e.util.getProperty(w)+" !== undefined ",v&&(o+=" && Object.prototype.hasOwnProperty.call("+d+", '"+e.util.escapeQuotes(w)+"') "),o+=") { ",h.schema=g,h.schemaPath=s+e.util.getProperty(w),h.errSchemaPath=l+"/"+e.util.escapeFragment(w),o+="  "+e.validate(h)+" ",h.baseId=O,o+=" }  ",c&&(o+=" if ("+b+") { ",u+="}"))}return c&&(o+="   "+u+" if ("+f+" == errors) {"),o}},692:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="valid"+a,h=e.opts.$data&&i&&i.$data;h&&(o+=" var schema"+a+" = "+e.util.getData(i.$data,n,e.dataPathArr)+"; ");var u="i"+a,b="schema"+a;h||(o+=" var "+b+" = validate.schema"+s+";"),o+="var "+f+";",h&&(o+=" if (schema"+a+" === undefined) "+f+" = true; else if (!Array.isArray(schema"+a+")) "+f+" = false; else {"),o+=f+" = false;for (var "+u+"=0; "+u+"<"+b+".length; "+u+"++) if (equal("+d+", "+b+"["+u+"])) { "+f+" = true; break; }",h&&(o+="  }  "),o+=" if (!"+f+") {   ";var p=p||[];p.push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'enum' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { allowedValues: schema"+a+" } ",!1!==e.opts.messages&&(o+=" , message: 'should be equal to one of the allowed values' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var m=o;return o=p.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+m+"]); ":o+=" validate.errors = ["+m+"]; return false; ":o+=" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" }",c&&(o+=" else { "),o}},7803:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||"");if(!1===e.opts.format)return c&&(o+=" if (true) { "),o;var f,h=e.opts.$data&&i&&i.$data;h?(o+=" var schema"+a+" = "+e.util.getData(i.$data,n,e.dataPathArr)+"; ",f="schema"+a):f=i;var u=e.opts.unknownFormats,b=Array.isArray(u);if(h){o+=" var "+(p="format"+a)+" = formats["+f+"]; var "+(m="isObject"+a)+" = typeof "+p+" == 'object' && !("+p+" instanceof RegExp) && "+p+".validate; var "+(v="formatType"+a)+" = "+m+" && "+p+".type || 'string'; if ("+m+") { ",e.async&&(o+=" var async"+a+" = "+p+".async; "),o+=" "+p+" = "+p+".validate; } if (  ",h&&(o+=" ("+f+" !== undefined && typeof "+f+" != 'string') || "),o+=" (","ignore"!=u&&(o+=" ("+f+" && !"+p+" ",b&&(o+=" && self._opts.unknownFormats.indexOf("+f+") == -1 "),o+=") || "),o+=" ("+p+" && "+v+" == '"+r+"' && !(typeof "+p+" == 'function' ? ",e.async?o+=" (async"+a+" ? await "+p+"("+d+") : "+p+"("+d+")) ":o+=" "+p+"("+d+") ",o+=" : "+p+".test("+d+"))))) {"}else{var p;if(!(p=e.formats[i])){if("ignore"==u)return e.logger.warn('unknown format "'+i+'" ignored in schema at path "'+e.errSchemaPath+'"'),c&&(o+=" if (true) { "),o;if(b&&u.indexOf(i)>=0)return c&&(o+=" if (true) { "),o;throw new Error('unknown format "'+i+'" is used in schema at path "'+e.errSchemaPath+'"')}var m,v=(m="object"==typeof p&&!(p instanceof RegExp)&&p.validate)&&p.type||"string";if(m){var g=!0===p.async;p=p.validate}if(v!=r)return c&&(o+=" if (true) { "),o;if(g){if(!e.async)throw new Error("async format in sync schema");o+=" if (!(await "+(y="formats"+e.util.getProperty(i)+".validate")+"("+d+"))) { "}else{o+=" if (! ";var y="formats"+e.util.getProperty(i);m&&(y+=".validate"),o+="function"==typeof p?" "+y+"("+d+") ":" "+y+".test("+d+") ",o+=") { "}}var k=k||[];k.push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'format' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { format:  ",o+=h?""+f:""+e.util.toQuotedString(i),o+="  } ",!1!==e.opts.messages&&(o+=" , message: 'should match format \"",o+=h?"' + "+f+" + '":""+e.util.escapeQuotes(i),o+="\"' "),e.opts.verbose&&(o+=" , schema:  ",o+=h?"validate.schema"+s:""+e.util.toQuotedString(i),o+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var w=o;return o=k.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+w+"]); ":o+=" validate.errors = ["+w+"]; return false; ":o+=" var err = "+w+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } ",c&&(o+=" else { "),o}},1868:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="valid"+a,h="errs__"+a,u=e.util.copy(e);u.level++;var b="valid"+u.level,p=e.schema.then,m=e.schema.else,v=void 0!==p&&(e.opts.strictKeywords?"object"==typeof p&&Object.keys(p).length>0||!1===p:e.util.schemaHasRules(p,e.RULES.all)),g=void 0!==m&&(e.opts.strictKeywords?"object"==typeof m&&Object.keys(m).length>0||!1===m:e.util.schemaHasRules(m,e.RULES.all)),y=u.baseId;if(v||g){var k;u.createErrors=!1,u.schema=i,u.schemaPath=s,u.errSchemaPath=l,o+=" var "+h+" = errors; var "+f+" = true;  ";var w=e.compositeRule;e.compositeRule=u.compositeRule=!0,o+="  "+e.validate(u)+" ",u.baseId=y,u.createErrors=!0,o+="  errors = "+h+"; if (vErrors !== null) { if ("+h+") vErrors.length = "+h+"; else vErrors = null; }  ",e.compositeRule=u.compositeRule=w,v?(o+=" if ("+b+") {  ",u.schema=e.schema.then,u.schemaPath=e.schemaPath+".then",u.errSchemaPath=e.errSchemaPath+"/then",o+="  "+e.validate(u)+" ",u.baseId=y,o+=" "+f+" = "+b+"; ",v&&g?o+=" var "+(k="ifClause"+a)+" = 'then'; ":k="'then'",o+=" } ",g&&(o+=" else { ")):o+=" if (!"+b+") { ",g&&(u.schema=e.schema.else,u.schemaPath=e.schemaPath+".else",u.errSchemaPath=e.errSchemaPath+"/else",o+="  "+e.validate(u)+" ",u.baseId=y,o+=" "+f+" = "+b+"; ",v&&g?o+=" var "+(k="ifClause"+a)+" = 'else'; ":k="'else'",o+=" } "),o+=" if (!"+f+") {   var err =   ",!1!==e.createErrors?(o+=" { keyword: 'if' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { failingKeyword: "+k+" } ",!1!==e.opts.messages&&(o+=" , message: 'should match \"' + "+k+" + '\" schema' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&c&&(e.async?o+=" throw new ValidationError(vErrors); ":o+=" validate.errors = vErrors; return false; "),o+=" }   ",c&&(o+=" else { ")}else c&&(o+=" if (true) { ");return o}},6105:(e,t,r)=>{e.exports={$ref:r(1478),allOf:r(351),anyOf:r(4370),$comment:r(9831),const:r(345),contains:r(6226),dependencies:r(5414),enum:r(692),format:r(7803),if:r(1868),items:r(5090),maximum:r(3627),minimum:r(3627),maxItems:r(2829),minItems:r(2829),maxLength:r(7645),minLength:r(7645),maxProperties:r(2408),minProperties:r(2408),multipleOf:r(3570),not:r(3445),oneOf:r(5884),pattern:r(6729),properties:r(7225),propertyNames:r(3500),required:r(3850),uniqueItems:r(6302),validate:r(7565)}},5090:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="valid"+a,h="errs__"+a,u=e.util.copy(e),b="";u.level++;var p="valid"+u.level,m="i"+a,v=u.dataLevel=e.dataLevel+1,g="data"+v,y=e.baseId;if(o+="var "+h+" = errors;var "+f+";",Array.isArray(i)){var k=e.schema.additionalItems;if(!1===k){o+=" "+f+" = "+d+".length <= "+i.length+"; ";var w=l;l=e.errSchemaPath+"/additionalItems",o+="  if (!"+f+") {   ";var x=x||[];x.push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'additionalItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { limit: "+i.length+" } ",!1!==e.opts.messages&&(o+=" , message: 'should NOT have more than "+i.length+" items' "),e.opts.verbose&&(o+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var $=o;o=x.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+$+"]); ":o+=" validate.errors = ["+$+"]; return false; ":o+=" var err = "+$+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } ",l=w,c&&(b+="}",o+=" else { ")}var E=i;if(E)for(var P,S=-1,F=E.length-1;S<F;)if(P=E[S+=1],e.opts.strictKeywords?"object"==typeof P&&Object.keys(P).length>0||!1===P:e.util.schemaHasRules(P,e.RULES.all)){o+=" "+p+" = true; if ("+d+".length > "+S+") { ";var z=d+"["+S+"]";u.schema=P,u.schemaPath=s+"["+S+"]",u.errSchemaPath=l+"/"+S,u.errorPath=e.util.getPathExpr(e.errorPath,S,e.opts.jsonPointers,!0),u.dataPathArr[v]=S;var C=e.validate(u);u.baseId=y,e.util.varOccurences(C,g)<2?o+=" "+e.util.varReplace(C,g,z)+" ":o+=" var "+g+" = "+z+"; "+C+" ",o+=" }  ",c&&(o+=" if ("+p+") { ",b+="}")}if("object"==typeof k&&(e.opts.strictKeywords?"object"==typeof k&&Object.keys(k).length>0||!1===k:e.util.schemaHasRules(k,e.RULES.all))){u.schema=k,u.schemaPath=e.schemaPath+".additionalItems",u.errSchemaPath=e.errSchemaPath+"/additionalItems",o+=" "+p+" = true; if ("+d+".length > "+i.length+") {  for (var "+m+" = "+i.length+"; "+m+" < "+d+".length; "+m+"++) { ",u.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers,!0);z=d+"["+m+"]";u.dataPathArr[v]=m;C=e.validate(u);u.baseId=y,e.util.varOccurences(C,g)<2?o+=" "+e.util.varReplace(C,g,z)+" ":o+=" var "+g+" = "+z+"; "+C+" ",c&&(o+=" if (!"+p+") break; "),o+=" } }  ",c&&(o+=" if ("+p+") { ",b+="}")}}else if(e.opts.strictKeywords?"object"==typeof i&&Object.keys(i).length>0||!1===i:e.util.schemaHasRules(i,e.RULES.all)){u.schema=i,u.schemaPath=s,u.errSchemaPath=l,o+="  for (var "+m+" = 0; "+m+" < "+d+".length; "+m+"++) { ",u.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers,!0);z=d+"["+m+"]";u.dataPathArr[v]=m;C=e.validate(u);u.baseId=y,e.util.varOccurences(C,g)<2?o+=" "+e.util.varReplace(C,g,z)+" ":o+=" var "+g+" = "+z+"; "+C+" ",c&&(o+=" if (!"+p+") break; "),o+=" }"}return c&&(o+=" "+b+" if ("+h+" == errors) {"),o}},3570:e=>{e.exports=function(e,t,r){var o,a=" ",n=e.level,i=e.dataLevel,s=e.schema[t],l=e.schemaPath+e.util.getProperty(t),c=e.errSchemaPath+"/"+t,d=!e.opts.allErrors,f="data"+(i||""),h=e.opts.$data&&s&&s.$data;if(h?(a+=" var schema"+n+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; ",o="schema"+n):o=s,!h&&"number"!=typeof s)throw new Error(t+" must be number");a+="var division"+n+";if (",h&&(a+=" "+o+" !== undefined && ( typeof "+o+" != 'number' || "),a+=" (division"+n+" = "+f+" / "+o+", ",e.opts.multipleOfPrecision?a+=" Math.abs(Math.round(division"+n+") - division"+n+") > 1e-"+e.opts.multipleOfPrecision+" ":a+=" division"+n+" !== parseInt(division"+n+") ",a+=" ) ",h&&(a+="  )  "),a+=" ) {   ";var u=u||[];u.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'multipleOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { multipleOf: "+o+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be multiple of ",a+=h?"' + "+o:o+"'"),e.opts.verbose&&(a+=" , schema:  ",a+=h?"validate.schema"+l:""+s,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";var b=a;return a=u.pop(),!e.compositeRule&&d?e.async?a+=" throw new ValidationError(["+b+"]); ":a+=" validate.errors = ["+b+"]; return false; ":a+=" var err = "+b+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",d&&(a+=" else { "),a}},3445:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="errs__"+a,h=e.util.copy(e);h.level++;var u="valid"+h.level;if(e.opts.strictKeywords?"object"==typeof i&&Object.keys(i).length>0||!1===i:e.util.schemaHasRules(i,e.RULES.all)){h.schema=i,h.schemaPath=s,h.errSchemaPath=l,o+=" var "+f+" = errors;  ";var b,p=e.compositeRule;e.compositeRule=h.compositeRule=!0,h.createErrors=!1,h.opts.allErrors&&(b=h.opts.allErrors,h.opts.allErrors=!1),o+=" "+e.validate(h)+" ",h.createErrors=!0,b&&(h.opts.allErrors=b),e.compositeRule=h.compositeRule=p,o+=" if ("+u+") {   ";var m=m||[];m.push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(o+=" , message: 'should NOT be valid' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var v=o;o=m.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+v+"]); ":o+=" validate.errors = ["+v+"]; return false; ":o+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } else {  errors = "+f+"; if (vErrors !== null) { if ("+f+") vErrors.length = "+f+"; else vErrors = null; } ",e.opts.allErrors&&(o+=" } ")}else o+="  var err =   ",!1!==e.createErrors?(o+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(o+=" , message: 'should NOT be valid' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",c&&(o+=" if (false) { ");return o}},5884:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="valid"+a,h="errs__"+a,u=e.util.copy(e),b="";u.level++;var p="valid"+u.level,m=u.baseId,v="prevValid"+a,g="passingSchemas"+a;o+="var "+h+" = errors , "+v+" = false , "+f+" = false , "+g+" = null; ";var y=e.compositeRule;e.compositeRule=u.compositeRule=!0;var k=i;if(k)for(var w,x=-1,$=k.length-1;x<$;)w=k[x+=1],(e.opts.strictKeywords?"object"==typeof w&&Object.keys(w).length>0||!1===w:e.util.schemaHasRules(w,e.RULES.all))?(u.schema=w,u.schemaPath=s+"["+x+"]",u.errSchemaPath=l+"/"+x,o+="  "+e.validate(u)+" ",u.baseId=m):o+=" var "+p+" = true; ",x&&(o+=" if ("+p+" && "+v+") { "+f+" = false; "+g+" = ["+g+", "+x+"]; } else { ",b+="}"),o+=" if ("+p+") { "+f+" = "+v+" = true; "+g+" = "+x+"; }";return e.compositeRule=u.compositeRule=y,o+=b+"if (!"+f+") {   var err =   ",!1!==e.createErrors?(o+=" { keyword: 'oneOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { passingSchemas: "+g+" } ",!1!==e.opts.messages&&(o+=" , message: 'should match exactly one schema in oneOf' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&c&&(e.async?o+=" throw new ValidationError(vErrors); ":o+=" validate.errors = vErrors; return false; "),o+="} else {  errors = "+h+"; if (vErrors !== null) { if ("+h+") vErrors.length = "+h+"; else vErrors = null; }",e.opts.allErrors&&(o+=" } "),o}},6729:e=>{e.exports=function(e,t,r){var o,a=" ",n=e.level,i=e.dataLevel,s=e.schema[t],l=e.schemaPath+e.util.getProperty(t),c=e.errSchemaPath+"/"+t,d=!e.opts.allErrors,f="data"+(i||""),h=e.opts.$data&&s&&s.$data;h?(a+=" var schema"+n+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; ",o="schema"+n):o=s,a+="if ( ",h&&(a+=" ("+o+" !== undefined && typeof "+o+" != 'string') || "),a+=" !"+(h?"(new RegExp("+o+"))":e.usePattern(s))+".test("+f+") ) {   ";var u=u||[];u.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'pattern' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { pattern:  ",a+=h?""+o:""+e.util.toQuotedString(s),a+="  } ",!1!==e.opts.messages&&(a+=" , message: 'should match pattern \"",a+=h?"' + "+o+" + '":""+e.util.escapeQuotes(s),a+="\"' "),e.opts.verbose&&(a+=" , schema:  ",a+=h?"validate.schema"+l:""+e.util.toQuotedString(s),a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";var b=a;return a=u.pop(),!e.compositeRule&&d?e.async?a+=" throw new ValidationError(["+b+"]); ":a+=" validate.errors = ["+b+"]; return false; ":a+=" var err = "+b+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",d&&(a+=" else { "),a}},7225:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="errs__"+a,h=e.util.copy(e),u="";h.level++;var b="valid"+h.level,p="key"+a,m="idx"+a,v=h.dataLevel=e.dataLevel+1,g="data"+v,y="dataProperties"+a,k=Object.keys(i||{}).filter(B),w=e.schema.patternProperties||{},x=Object.keys(w).filter(B),$=e.schema.additionalProperties,E=k.length||x.length,P=!1===$,S="object"==typeof $&&Object.keys($).length,F=e.opts.removeAdditional,z=P||S||F,C=e.opts.ownProperties,R=e.baseId,D=e.schema.required;if(D&&(!e.opts.$data||!D.$data)&&D.length<e.opts.loopRequired)var j=e.util.toHash(D);function B(e){return"__proto__"!==e}if(o+="var "+f+" = errors;var "+b+" = true;",C&&(o+=" var "+y+" = undefined;"),z){if(o+=C?" "+y+" = "+y+" || Object.keys("+d+"); for (var "+m+"=0; "+m+"<"+y+".length; "+m+"++) { var "+p+" = "+y+"["+m+"]; ":" for (var "+p+" in "+d+") { ",E){if(o+=" var isAdditional"+a+" = !(false ",k.length)if(k.length>8)o+=" || validate.schema"+s+".hasOwnProperty("+p+") ";else{var _=k;if(_)for(var O=-1,I=_.length-1;O<I;)W=_[O+=1],o+=" || "+p+" == "+e.util.toQuotedString(W)+" "}if(x.length){var A=x;if(A)for(var q=-1,L=A.length-1;q<L;)ne=A[q+=1],o+=" || "+e.usePattern(ne)+".test("+p+") "}o+=" ); if (isAdditional"+a+") { "}if("all"==F)o+=" delete "+d+"["+p+"]; ";else{var U=e.errorPath,T="' + "+p+" + '";if(e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(e.errorPath,p,e.opts.jsonPointers)),P)if(F)o+=" delete "+d+"["+p+"]; ";else{o+=" "+b+" = false; ";var M=l;l=e.errSchemaPath+"/additionalProperties",(re=re||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'additionalProperties' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { additionalProperty: '"+T+"' } ",!1!==e.opts.messages&&(o+=" , message: '",e.opts._errorDataPathProperty?o+="is an invalid additional property":o+="should NOT have additional properties",o+="' "),e.opts.verbose&&(o+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var V=o;o=re.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+V+"]); ":o+=" validate.errors = ["+V+"]; return false; ":o+=" var err = "+V+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l=M,c&&(o+=" break; ")}else if(S)if("failing"==F){o+=" var "+f+" = errors;  ";var Y=e.compositeRule;e.compositeRule=h.compositeRule=!0,h.schema=$,h.schemaPath=e.schemaPath+".additionalProperties",h.errSchemaPath=e.errSchemaPath+"/additionalProperties",h.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,p,e.opts.jsonPointers);var N=d+"["+p+"]";h.dataPathArr[v]=p;var K=e.validate(h);h.baseId=R,e.util.varOccurences(K,g)<2?o+=" "+e.util.varReplace(K,g,N)+" ":o+=" var "+g+" = "+N+"; "+K+" ",o+=" if (!"+b+") { errors = "+f+"; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete "+d+"["+p+"]; }  ",e.compositeRule=h.compositeRule=Y}else{h.schema=$,h.schemaPath=e.schemaPath+".additionalProperties",h.errSchemaPath=e.errSchemaPath+"/additionalProperties",h.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,p,e.opts.jsonPointers);N=d+"["+p+"]";h.dataPathArr[v]=p;K=e.validate(h);h.baseId=R,e.util.varOccurences(K,g)<2?o+=" "+e.util.varReplace(K,g,N)+" ":o+=" var "+g+" = "+N+"; "+K+" ",c&&(o+=" if (!"+b+") break; ")}e.errorPath=U}E&&(o+=" } "),o+=" }  ",c&&(o+=" if ("+b+") { ",u+="}")}var Q=e.opts.useDefaults&&!e.compositeRule;if(k.length){var Z=k;if(Z)for(var W,X=-1,H=Z.length-1;X<H;){var G=i[W=Z[X+=1]];if(e.opts.strictKeywords?"object"==typeof G&&Object.keys(G).length>0||!1===G:e.util.schemaHasRules(G,e.RULES.all)){var J=e.util.getProperty(W),ee=(N=d+J,Q&&void 0!==G.default);h.schema=G,h.schemaPath=s+J,h.errSchemaPath=l+"/"+e.util.escapeFragment(W),h.errorPath=e.util.getPath(e.errorPath,W,e.opts.jsonPointers),h.dataPathArr[v]=e.util.toQuotedString(W);K=e.validate(h);if(h.baseId=R,e.util.varOccurences(K,g)<2){K=e.util.varReplace(K,g,N);var te=N}else{te=g;o+=" var "+g+" = "+N+"; "}if(ee)o+=" "+K+" ";else{if(j&&j[W]){o+=" if ( "+te+" === undefined ",C&&(o+=" || ! Object.prototype.hasOwnProperty.call("+d+", '"+e.util.escapeQuotes(W)+"') "),o+=") { "+b+" = false; ";U=e.errorPath,M=l;var re,oe=e.util.escapeQuotes(W);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(U,W,e.opts.jsonPointers)),l=e.errSchemaPath+"/required",(re=re||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+oe+"' } ",!1!==e.opts.messages&&(o+=" , message: '",e.opts._errorDataPathProperty?o+="is a required property":o+="should have required property \\'"+oe+"\\'",o+="' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";V=o;o=re.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+V+"]); ":o+=" validate.errors = ["+V+"]; return false; ":o+=" var err = "+V+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l=M,e.errorPath=U,o+=" } else { "}else c?(o+=" if ( "+te+" === undefined ",C&&(o+=" || ! Object.prototype.hasOwnProperty.call("+d+", '"+e.util.escapeQuotes(W)+"') "),o+=") { "+b+" = true; } else { "):(o+=" if ("+te+" !== undefined ",C&&(o+=" &&   Object.prototype.hasOwnProperty.call("+d+", '"+e.util.escapeQuotes(W)+"') "),o+=" ) { ");o+=" "+K+" } "}}c&&(o+=" if ("+b+") { ",u+="}")}}if(x.length){var ae=x;if(ae)for(var ne,ie=-1,se=ae.length-1;ie<se;){G=w[ne=ae[ie+=1]];if(e.opts.strictKeywords?"object"==typeof G&&Object.keys(G).length>0||!1===G:e.util.schemaHasRules(G,e.RULES.all)){h.schema=G,h.schemaPath=e.schemaPath+".patternProperties"+e.util.getProperty(ne),h.errSchemaPath=e.errSchemaPath+"/patternProperties/"+e.util.escapeFragment(ne),o+=C?" "+y+" = "+y+" || Object.keys("+d+"); for (var "+m+"=0; "+m+"<"+y+".length; "+m+"++) { var "+p+" = "+y+"["+m+"]; ":" for (var "+p+" in "+d+") { ",o+=" if ("+e.usePattern(ne)+".test("+p+")) { ",h.errorPath=e.util.getPathExpr(e.errorPath,p,e.opts.jsonPointers);N=d+"["+p+"]";h.dataPathArr[v]=p;K=e.validate(h);h.baseId=R,e.util.varOccurences(K,g)<2?o+=" "+e.util.varReplace(K,g,N)+" ":o+=" var "+g+" = "+N+"; "+K+" ",c&&(o+=" if (!"+b+") break; "),o+=" } ",c&&(o+=" else "+b+" = true; "),o+=" }  ",c&&(o+=" if ("+b+") { ",u+="}")}}}return c&&(o+=" "+u+" if ("+f+" == errors) {"),o}},3500:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="errs__"+a,h=e.util.copy(e);h.level++;var u="valid"+h.level;if(o+="var "+f+" = errors;",e.opts.strictKeywords?"object"==typeof i&&Object.keys(i).length>0||!1===i:e.util.schemaHasRules(i,e.RULES.all)){h.schema=i,h.schemaPath=s,h.errSchemaPath=l;var b="key"+a,p="idx"+a,m="i"+a,v="' + "+b+" + '",g="data"+(h.dataLevel=e.dataLevel+1),y="dataProperties"+a,k=e.opts.ownProperties,w=e.baseId;k&&(o+=" var "+y+" = undefined; "),o+=k?" "+y+" = "+y+" || Object.keys("+d+"); for (var "+p+"=0; "+p+"<"+y+".length; "+p+"++) { var "+b+" = "+y+"["+p+"]; ":" for (var "+b+" in "+d+") { ",o+=" var startErrs"+a+" = errors; ";var x=b,$=e.compositeRule;e.compositeRule=h.compositeRule=!0;var E=e.validate(h);h.baseId=w,e.util.varOccurences(E,g)<2?o+=" "+e.util.varReplace(E,g,x)+" ":o+=" var "+g+" = "+x+"; "+E+" ",e.compositeRule=h.compositeRule=$,o+=" if (!"+u+") { for (var "+m+"=startErrs"+a+"; "+m+"<errors; "+m+"++) { vErrors["+m+"].propertyName = "+b+"; }   var err =   ",!1!==e.createErrors?(o+=" { keyword: 'propertyNames' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { propertyName: '"+v+"' } ",!1!==e.opts.messages&&(o+=" , message: 'property name \\'"+v+"\\' is invalid' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&c&&(e.async?o+=" throw new ValidationError(vErrors); ":o+=" validate.errors = vErrors; return false; "),c&&(o+=" break; "),o+=" } }"}return c&&(o+="  if ("+f+" == errors) {"),o}},1478:e=>{e.exports=function(e,t,r){var o,a,n=" ",i=e.level,s=e.dataLevel,l=e.schema[t],c=e.errSchemaPath+"/"+t,d=!e.opts.allErrors,f="data"+(s||""),h="valid"+i;if("#"==l||"#/"==l)e.isRoot?(o=e.async,a="validate"):(o=!0===e.root.schema.$async,a="root.refVal[0]");else{var u=e.resolveRef(e.baseId,l,e.isRoot);if(void 0===u){var b=e.MissingRefError.message(e.baseId,l);if("fail"==e.opts.missingRefs){e.logger.error(b),(g=g||[]).push(n),n="",!1!==e.createErrors?(n+=" { keyword: '$ref' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { ref: '"+e.util.escapeQuotes(l)+"' } ",!1!==e.opts.messages&&(n+=" , message: 'can\\'t resolve reference "+e.util.escapeQuotes(l)+"' "),e.opts.verbose&&(n+=" , schema: "+e.util.toQuotedString(l)+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),n+=" } "):n+=" {} ";var p=n;n=g.pop(),!e.compositeRule&&d?e.async?n+=" throw new ValidationError(["+p+"]); ":n+=" validate.errors = ["+p+"]; return false; ":n+=" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",d&&(n+=" if (false) { ")}else{if("ignore"!=e.opts.missingRefs)throw new e.MissingRefError(e.baseId,l,b);e.logger.warn(b),d&&(n+=" if (true) { ")}}else if(u.inline){var m=e.util.copy(e);m.level++;var v="valid"+m.level;m.schema=u.schema,m.schemaPath="",m.errSchemaPath=l,n+=" "+e.validate(m).replace(/validate\.schema/g,u.code)+" ",d&&(n+=" if ("+v+") { ")}else o=!0===u.$async||e.async&&!1!==u.$async,a=u.code}if(a){var g;(g=g||[]).push(n),n="",e.opts.passContext?n+=" "+a+".call(this, ":n+=" "+a+"( ",n+=" "+f+", (dataPath || '')",'""'!=e.errorPath&&(n+=" + "+e.errorPath);var y=n+=" , "+(s?"data"+(s-1||""):"parentData")+" , "+(s?e.dataPathArr[s]:"parentDataProperty")+", rootData)  ";if(n=g.pop(),o){if(!e.async)throw new Error("async schema referenced by sync schema");d&&(n+=" var "+h+"; "),n+=" try { await "+y+"; ",d&&(n+=" "+h+" = true; "),n+=" } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ",d&&(n+=" "+h+" = false; "),n+=" } ",d&&(n+=" if ("+h+") { ")}else n+=" if (!"+y+") { if (vErrors === null) vErrors = "+a+".errors; else vErrors = vErrors.concat("+a+".errors); errors = vErrors.length; } ",d&&(n+=" else { ")}return n}},3850:e=>{e.exports=function(e,t,r){var o=" ",a=e.level,n=e.dataLevel,i=e.schema[t],s=e.schemaPath+e.util.getProperty(t),l=e.errSchemaPath+"/"+t,c=!e.opts.allErrors,d="data"+(n||""),f="valid"+a,h=e.opts.$data&&i&&i.$data;h&&(o+=" var schema"+a+" = "+e.util.getData(i.$data,n,e.dataPathArr)+"; ");var u="schema"+a;if(!h)if(i.length<e.opts.loopRequired&&e.schema.properties&&Object.keys(e.schema.properties).length){var b=[],p=i;if(p)for(var m,v=-1,g=p.length-1;v<g;){m=p[v+=1];var y=e.schema.properties[m];y&&(e.opts.strictKeywords?"object"==typeof y&&Object.keys(y).length>0||!1===y:e.util.schemaHasRules(y,e.RULES.all))||(b[b.length]=m)}}else b=i;if(h||b.length){var k=e.errorPath,w=h||b.length>=e.opts.loopRequired,x=e.opts.ownProperties;if(c)if(o+=" var missing"+a+"; ",w){h||(o+=" var "+u+" = validate.schema"+s+"; ");var $="' + "+(C="schema"+a+"["+(S="i"+a)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(k,C,e.opts.jsonPointers)),o+=" var "+f+" = true; ",h&&(o+=" if (schema"+a+" === undefined) "+f+" = true; else if (!Array.isArray(schema"+a+")) "+f+" = false; else {"),o+=" for (var "+S+" = 0; "+S+" < "+u+".length; "+S+"++) { "+f+" = "+d+"["+u+"["+S+"]] !== undefined ",x&&(o+=" &&   Object.prototype.hasOwnProperty.call("+d+", "+u+"["+S+"]) "),o+="; if (!"+f+") break; } ",h&&(o+="  }  "),o+="  if (!"+f+") {   ",(z=z||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+$+"' } ",!1!==e.opts.messages&&(o+=" , message: '",e.opts._errorDataPathProperty?o+="is a required property":o+="should have required property \\'"+$+"\\'",o+="' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var E=o;o=z.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+E+"]); ":o+=" validate.errors = ["+E+"]; return false; ":o+=" var err = "+E+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } else { "}else{o+=" if ( ";var P=b;if(P)for(var S=-1,F=P.length-1;S<F;){D=P[S+=1],S&&(o+=" || "),o+=" ( ( "+(O=d+(_=e.util.getProperty(D)))+" === undefined ",x&&(o+=" || ! Object.prototype.hasOwnProperty.call("+d+", '"+e.util.escapeQuotes(D)+"') "),o+=") && (missing"+a+" = "+e.util.toQuotedString(e.opts.jsonPointers?D:_)+") ) "}o+=") {  ";var z;$="' + "+(C="missing"+a)+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(k,C,!0):k+" + "+C),(z=z||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+$+"' } ",!1!==e.opts.messages&&(o+=" , message: '",e.opts._errorDataPathProperty?o+="is a required property":o+="should have required property \\'"+$+"\\'",o+="' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";E=o;o=z.pop(),!e.compositeRule&&c?e.async?o+=" throw new ValidationError(["+E+"]); ":o+=" validate.errors = ["+E+"]; return false; ":o+=" var err = "+E+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } else { "}else if(w){h||(o+=" var "+u+" = validate.schema"+s+"; ");var C;$="' + "+(C="schema"+a+"["+(S="i"+a)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(k,C,e.opts.jsonPointers)),h&&(o+=" if ("+u+" && !Array.isArray("+u+")) {  var err =   ",!1!==e.createErrors?(o+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+$+"' } ",!1!==e.opts.messages&&(o+=" , message: '",e.opts._errorDataPathProperty?o+="is a required property":o+="should have required property \\'"+$+"\\'",o+="' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if ("+u+" !== undefined) { "),o+=" for (var "+S+" = 0; "+S+" < "+u+".length; "+S+"++) { if ("+d+"["+u+"["+S+"]] === undefined ",x&&(o+=" || ! Object.prototype.hasOwnProperty.call("+d+", "+u+"["+S+"]) "),o+=") {  var err =   ",!1!==e.createErrors?(o+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+$+"' } ",!1!==e.opts.messages&&(o+=" , message: '",e.opts._errorDataPathProperty?o+="is a required property":o+="should have required property \\'"+$+"\\'",o+="' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ",h&&(o+="  }  ")}else{var R=b;if(R)for(var D,j=-1,B=R.length-1;j<B;){D=R[j+=1];var _=e.util.getProperty(D),O=($=e.util.escapeQuotes(D),d+_);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(k,D,e.opts.jsonPointers)),o+=" if ( "+O+" === undefined ",x&&(o+=" || ! Object.prototype.hasOwnProperty.call("+d+", '"+e.util.escapeQuotes(D)+"') "),o+=") {  var err =   ",!1!==e.createErrors?(o+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+$+"' } ",!1!==e.opts.messages&&(o+=" , message: '",e.opts._errorDataPathProperty?o+="is a required property":o+="should have required property \\'"+$+"\\'",o+="' "),e.opts.verbose&&(o+=" , schema: validate.schema"+s+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "}}e.errorPath=k}else c&&(o+=" if (true) {");return o}},6302:e=>{e.exports=function(e,t,r){var o,a=" ",n=e.level,i=e.dataLevel,s=e.schema[t],l=e.schemaPath+e.util.getProperty(t),c=e.errSchemaPath+"/"+t,d=!e.opts.allErrors,f="data"+(i||""),h="valid"+n,u=e.opts.$data&&s&&s.$data;if(u?(a+=" var schema"+n+" = "+e.util.getData(s.$data,i,e.dataPathArr)+"; ",o="schema"+n):o=s,(s||u)&&!1!==e.opts.uniqueItems){u&&(a+=" var "+h+"; if ("+o+" === false || "+o+" === undefined) "+h+" = true; else if (typeof "+o+" != 'boolean') "+h+" = false; else { "),a+=" var i = "+f+".length , "+h+" = true , j; if (i > 1) { ";var b=e.schema.items&&e.schema.items.type,p=Array.isArray(b);if(!b||"object"==b||"array"==b||p&&(b.indexOf("object")>=0||b.indexOf("array")>=0))a+=" outer: for (;i--;) { for (j = i; j--;) { if (equal("+f+"[i], "+f+"[j])) { "+h+" = false; break outer; } } } ";else{a+=" var itemIndices = {}, item; for (;i--;) { var item = "+f+"[i]; ";var m="checkDataType"+(p?"s":"");a+=" if ("+e.util[m](b,"item",e.opts.strictNumbers,!0)+") continue; ",p&&(a+=" if (typeof item == 'string') item = '\"' + item; "),a+=" if (typeof itemIndices[item] == 'number') { "+h+" = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "}a+=" } ",u&&(a+="  }  "),a+=" if (!"+h+") {   ";var v=v||[];v.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'uniqueItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { i: i, j: j } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),e.opts.verbose&&(a+=" , schema:  ",a+=u?"validate.schema"+l:""+s,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+f+" "),a+=" } "):a+=" {} ";var g=a;a=v.pop(),!e.compositeRule&&d?e.async?a+=" throw new ValidationError(["+g+"]); ":a+=" validate.errors = ["+g+"]; return false; ":a+=" var err = "+g+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",d&&(a+=" else { ")}else d&&(a+=" if (true) { ");return a}},7565:e=>{e.exports=function(e,t,r){var o="",a=!0===e.schema.$async,n=e.util.schemaHasRulesExcept(e.schema,e.RULES.all,"$ref"),i=e.self._getId(e.schema);if(e.opts.strictKeywords){var s=e.util.schemaUnknownRules(e.schema,e.RULES.keywords);if(s){var l="unknown keyword: "+s;if("log"!==e.opts.strictKeywords)throw new Error(l);e.logger.warn(l)}}if(e.isTop&&(o+=" var validate = ",a&&(e.async=!0,o+="async "),o+="function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ",i&&(e.opts.sourceCode||e.opts.processCode)&&(o+=" /*# sourceURL="+i+" */ ")),"boolean"==typeof e.schema||!n&&!e.schema.$ref){t="false schema";var c=e.level,d=e.dataLevel,f=e.schema[t],h=e.schemaPath+e.util.getProperty(t),u=e.errSchemaPath+"/"+t,b=!e.opts.allErrors,p="data"+(d||""),m="valid"+c;if(!1===e.schema){e.isTop?b=!0:o+=" var "+m+" = false; ",(X=X||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'false schema' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: {} ",!1!==e.opts.messages&&(o+=" , message: 'boolean schema is false' "),e.opts.verbose&&(o+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),o+=" } "):o+=" {} ";var v=o;o=X.pop(),!e.compositeRule&&b?e.async?o+=" throw new ValidationError(["+v+"]); ":o+=" validate.errors = ["+v+"]; return false; ":o+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}else e.isTop?o+=a?" return data; ":" validate.errors = null; return true; ":o+=" var "+m+" = true; ";return e.isTop&&(o+=" }; return validate; "),o}if(e.isTop){var g=e.isTop;c=e.level=0,d=e.dataLevel=0,p="data";if(e.rootId=e.resolve.fullPath(e.self._getId(e.root.schema)),e.baseId=e.baseId||e.rootId,delete e.isTop,e.dataPathArr=[""],void 0!==e.schema.default&&e.opts.useDefaults&&e.opts.strictDefaults){var y="default is ignored in the schema root";if("log"!==e.opts.strictDefaults)throw new Error(y);e.logger.warn(y)}o+=" var vErrors = null; ",o+=" var errors = 0;     ",o+=" if (rootData === undefined) rootData = data; "}else{c=e.level,p="data"+((d=e.dataLevel)||"");if(i&&(e.baseId=e.resolve.url(e.baseId,i)),a&&!e.async)throw new Error("async schema in sync schema");o+=" var errs_"+c+" = errors;"}m="valid"+c,b=!e.opts.allErrors;var k="",w="",x=e.schema.type,$=Array.isArray(x);if(x&&e.opts.nullable&&!0===e.schema.nullable&&($?-1==x.indexOf("null")&&(x=x.concat("null")):"null"!=x&&(x=[x,"null"],$=!0)),$&&1==x.length&&(x=x[0],$=!1),e.schema.$ref&&n){if("fail"==e.opts.extendRefs)throw new Error('$ref: validation keywords used in schema at path "'+e.errSchemaPath+'" (see option extendRefs)');!0!==e.opts.extendRefs&&(n=!1,e.logger.warn('$ref: keywords ignored in schema at path "'+e.errSchemaPath+'"'))}if(e.schema.$comment&&e.opts.$comment&&(o+=" "+e.RULES.all.$comment.code(e,"$comment")),x){if(e.opts.coerceTypes)var E=e.util.coerceToTypes(e.opts.coerceTypes,x);var P=e.RULES.types[x];if(E||$||!0===P||P&&!H(P)){h=e.schemaPath+".type",u=e.errSchemaPath+"/type",h=e.schemaPath+".type",u=e.errSchemaPath+"/type";var S=$?"checkDataTypes":"checkDataType";if(o+=" if ("+e.util[S](x,p,e.opts.strictNumbers,!0)+") { ",E){var F="dataType"+c,z="coerced"+c;o+=" var "+F+" = typeof "+p+"; var "+z+" = undefined; ","array"==e.opts.coerceTypes&&(o+=" if ("+F+" == 'object' && Array.isArray("+p+") && "+p+".length == 1) { "+p+" = "+p+"[0]; "+F+" = typeof "+p+"; if ("+e.util.checkDataType(e.schema.type,p,e.opts.strictNumbers)+") "+z+" = "+p+"; } "),o+=" if ("+z+" !== undefined) ; ";var C=E;if(C)for(var R,D=-1,j=C.length-1;D<j;)"string"==(R=C[D+=1])?o+=" else if ("+F+" == 'number' || "+F+" == 'boolean') "+z+" = '' + "+p+"; else if ("+p+" === null) "+z+" = ''; ":"number"==R||"integer"==R?(o+=" else if ("+F+" == 'boolean' || "+p+" === null || ("+F+" == 'string' && "+p+" && "+p+" == +"+p+" ","integer"==R&&(o+=" && !("+p+" % 1)"),o+=")) "+z+" = +"+p+"; "):"boolean"==R?o+=" else if ("+p+" === 'false' || "+p+" === 0 || "+p+" === null) "+z+" = false; else if ("+p+" === 'true' || "+p+" === 1) "+z+" = true; ":"null"==R?o+=" else if ("+p+" === '' || "+p+" === 0 || "+p+" === false) "+z+" = null; ":"array"==e.opts.coerceTypes&&"array"==R&&(o+=" else if ("+F+" == 'string' || "+F+" == 'number' || "+F+" == 'boolean' || "+p+" == null) "+z+" = ["+p+"]; ");o+=" else {   ",(X=X||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'type' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { type: '",o+=$?""+x.join(","):""+x,o+="' } ",!1!==e.opts.messages&&(o+=" , message: 'should be ",o+=$?""+x.join(","):""+x,o+="' "),e.opts.verbose&&(o+=" , schema: validate.schema"+h+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),o+=" } "):o+=" {} ";v=o;o=X.pop(),!e.compositeRule&&b?e.async?o+=" throw new ValidationError(["+v+"]); ":o+=" validate.errors = ["+v+"]; return false; ":o+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } if ("+z+" !== undefined) {  ";var B=d?"data"+(d-1||""):"parentData";o+=" "+p+" = "+z+"; ",d||(o+="if ("+B+" !== undefined)"),o+=" "+B+"["+(d?e.dataPathArr[d]:"parentDataProperty")+"] = "+z+"; } "}else{(X=X||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'type' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { type: '",o+=$?""+x.join(","):""+x,o+="' } ",!1!==e.opts.messages&&(o+=" , message: 'should be ",o+=$?""+x.join(","):""+x,o+="' "),e.opts.verbose&&(o+=" , schema: validate.schema"+h+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),o+=" } "):o+=" {} ";v=o;o=X.pop(),!e.compositeRule&&b?e.async?o+=" throw new ValidationError(["+v+"]); ":o+=" validate.errors = ["+v+"]; return false; ":o+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}o+=" } "}}if(e.schema.$ref&&!n)o+=" "+e.RULES.all.$ref.code(e,"$ref")+" ",b&&(o+=" } if (errors === ",o+=g?"0":"errs_"+c,o+=") { ",w+="}");else{var _=e.RULES;if(_)for(var O=-1,I=_.length-1;O<I;)if(H(P=_[O+=1])){if(P.type&&(o+=" if ("+e.util.checkDataType(P.type,p,e.opts.strictNumbers)+") { "),e.opts.useDefaults)if("object"==P.type&&e.schema.properties){f=e.schema.properties;var A=Object.keys(f);if(A)for(var q,L=-1,U=A.length-1;L<U;){if(void 0!==(V=f[q=A[L+=1]]).default){var T=p+e.util.getProperty(q);if(e.compositeRule){if(e.opts.strictDefaults){y="default is ignored for: "+T;if("log"!==e.opts.strictDefaults)throw new Error(y);e.logger.warn(y)}}else o+=" if ("+T+" === undefined ","empty"==e.opts.useDefaults&&(o+=" || "+T+" === null || "+T+" === '' "),o+=" ) "+T+" = ","shared"==e.opts.useDefaults?o+=" "+e.useDefault(V.default)+" ":o+=" "+JSON.stringify(V.default)+" ",o+="; "}}}else if("array"==P.type&&Array.isArray(e.schema.items)){var M=e.schema.items;if(M){D=-1;for(var V,Y=M.length-1;D<Y;)if(void 0!==(V=M[D+=1]).default){T=p+"["+D+"]";if(e.compositeRule){if(e.opts.strictDefaults){y="default is ignored for: "+T;if("log"!==e.opts.strictDefaults)throw new Error(y);e.logger.warn(y)}}else o+=" if ("+T+" === undefined ","empty"==e.opts.useDefaults&&(o+=" || "+T+" === null || "+T+" === '' "),o+=" ) "+T+" = ","shared"==e.opts.useDefaults?o+=" "+e.useDefault(V.default)+" ":o+=" "+JSON.stringify(V.default)+" ",o+="; "}}}var N=P.rules;if(N)for(var K,Q=-1,Z=N.length-1;Q<Z;)if(G(K=N[Q+=1])){var W=K.code(e,K.keyword,P.type);W&&(o+=" "+W+" ",b&&(k+="}"))}if(b&&(o+=" "+k+" ",k=""),P.type&&(o+=" } ",x&&x===P.type&&!E)){o+=" else { ";var X;h=e.schemaPath+".type",u=e.errSchemaPath+"/type";(X=X||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: 'type' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { type: '",o+=$?""+x.join(","):""+x,o+="' } ",!1!==e.opts.messages&&(o+=" , message: 'should be ",o+=$?""+x.join(","):""+x,o+="' "),e.opts.verbose&&(o+=" , schema: validate.schema"+h+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+p+" "),o+=" } "):o+=" {} ";v=o;o=X.pop(),!e.compositeRule&&b?e.async?o+=" throw new ValidationError(["+v+"]); ":o+=" validate.errors = ["+v+"]; return false; ":o+=" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",o+=" } "}b&&(o+=" if (errors === ",o+=g?"0":"errs_"+c,o+=") { ",w+="}")}}function H(e){for(var t=e.rules,r=0;r<t.length;r++)if(G(t[r]))return!0}function G(t){return void 0!==e.schema[t.keyword]||t.implements&&function(t){for(var r=t.implements,o=0;o<r.length;o++)if(void 0!==e.schema[r[o]])return!0}(t)}return b&&(o+=" "+w+" "),g?(a?(o+=" if (errors === 0) return data;           ",o+=" else throw new ValidationError(vErrors); "):(o+=" validate.errors = vErrors; ",o+=" return errors === 0;       "),o+=" }; return validate;"):o+=" var "+m+" = errors === errs_"+c+";",o}},3099:(e,t,r)=>{var o=/^[a-z_$][a-z0-9_$-]*$/i,a=r(1447),n=r(6345);e.exports={add:function(e,t){var r=this.RULES;if(r.keywords[e])throw new Error("Keyword "+e+" is already defined");if(!o.test(e))throw new Error("Keyword "+e+" is not a valid identifier");if(t){this.validateKeyword(t,!0);var n=t.type;if(Array.isArray(n))for(var i=0;i<n.length;i++)l(e,n[i],t);else l(e,n,t);var s=t.metaSchema;s&&(t.$data&&this._opts.$data&&(s={anyOf:[s,{$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"}]}),t.validateSchema=this.compile(s,!0))}function l(e,t,o){for(var n,i=0;i<r.length;i++){var s=r[i];if(s.type==t){n=s;break}}n||(n={type:t,rules:[]},r.push(n));var l={keyword:e,definition:o,custom:!0,code:a,implements:o.implements};n.rules.push(l),r.custom[e]=l}return r.keywords[e]=r.all[e]=!0,this},get:function(e){var t=this.RULES.custom[e];return t?t.definition:this.RULES.keywords[e]||!1},remove:function(e){var t=this.RULES;delete t.keywords[e],delete t.all[e],delete t.custom[e];for(var r=0;r<t.length;r++)for(var o=t[r].rules,a=0;a<o.length;a++)if(o[a].keyword==e){o.splice(a,1);break}return this},validate:function e(t,r){e.errors=null;var o=this._validateKeyword=this._validateKeyword||this.compile(n,!0);if(o(t))return!0;if(e.errors=o.errors,r)throw new Error("custom keyword definition is invalid: "+this.errorsText(o.errors));return!1}}},780:e=>{var t=e.exports=function(e,t,o){"function"==typeof t&&(o=t,t={}),r(t,"function"==typeof(o=t.cb||o)?o:o.pre||function(){},o.post||function(){},e,"",e)};function r(e,o,a,n,i,s,l,c,d,f){if(n&&"object"==typeof n&&!Array.isArray(n)){for(var h in o(n,i,s,l,c,d,f),n){var u=n[h];if(Array.isArray(u)){if(h in t.arrayKeywords)for(var b=0;b<u.length;b++)r(e,o,a,u[b],i+"/"+h+"/"+b,s,i,h,n,b)}else if(h in t.propsKeywords){if(u&&"object"==typeof u)for(var p in u)r(e,o,a,u[p],i+"/"+h+"/"+p.replace(/~/g,"~0").replace(/\//g,"~1"),s,i,h,n,p)}else(h in t.keywords||e.allKeys&&!(h in t.skipKeywords))&&r(e,o,a,u,i+"/"+h,s,i,h,n)}a(n,i,s,l,c,d,f)}}t.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0},t.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},t.propsKeywords={definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},t.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0}},1696:(e,t,r)=>{r.d(t,{uC:()=>d,QK:()=>f,ou:()=>h,dK:()=>c,Gu:()=>l});var o=r(1370),a=r.n(o),n=r(8998),i=r.n(n);const s={allErrors:!0,format:"full",missingRefs:!0,loopRequired:"Infinite",verbose:!0,extendRefs:!0,schemaId:"auto",useDefaults:"empty"},l=(e,t,r,o,n)=>{const l=new(a())(s);n&&n.length>0&&n.forEach((e=>{l.addSchema(e)}));const c=l.validate(e,t),d=((e,t,r,o)=>(r||[]).reduce(((r,a)=>{const{keyword:n,dataPath:s,schemaPath:l,message:c,parentSchema:d}=a,f=s.slice(1),h=l.replace("#/","").replace(`/${n}`,"").replace(/\//g,"."),u=h.indexOf("."),b=u>-1?".":"",p=[t,...o||[]].find((e=>{const t=`${e.id}${b}`;return h.startsWith(t)||d.title.startsWith(t)}))||t,m=!h.startsWith("properties.")&&p.id&&t.id!==p.id?h.substring(u+1):h;return{...r,[f]:`${(i()(m).evaluate(p)||{}).title||e} ${c}`}}),{}))(r,e,l.errors,n);return c?null:o?Object.keys(d||{}).reduce(((e,t)=>t.startsWith(r)?{...e,[t]:d[t]}:e),{}):r?d[r]:d},c=(e,t,r,o)=>{if(e){if(r){return e[`${r}[${o}]${t?`.${t}`:""}`]}return e[t]}return null},d=(e,t)=>{e.dispatchEvent(new CustomEvent("change-field",{detail:{...t},bubbles:!0,composed:!0}))},f=(e,t,r)=>{e.dispatchEvent(new CustomEvent("change-group-field",{detail:{...t,element:e,index:r},bubbles:!0,composed:!0}))},h=e=>t=>{if(!e||e()){const{target:e}=t;(e||t).dispatchEvent(new CustomEvent("clear-form",{bubbles:!0,composed:!0}))}}},8094:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{item:{type:Boolean,attribute:!0},custom:{type:Boolean,attribute:!0},position:{type:String,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --height: var(--mv-header-height, 66px);
        --shadow: var(--mv-header-shadow, 0 2px 15px 0 rgba(0,0,0,0.2));
        --margin-left: var(--mv-header-margin-left, 0);
        --margin-right: var(--mv-header-margin-right, 0);
        --margin-bottom: var(--mv-header-margin-bottom, 1px);
        --total-margins: calc(var(--margin-left) + var(--margin-right));
        --item-padding: var(--mv-header-item-padding: 10px);
        --light-background: var(--mv-header-light-background, #F3F3F3);
        --item-light-color: var(--mv-header-item-light-color, #B0B3B6);
        --dark-background: var(--mv-header-dark-background, #373E48);
        --item-dark-color: var(--mv-header-item-light-color, #B0B3B6);
      }

      header {               
        min-height: var(--height);
        max-height: var(--height);
        background: var(--background);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 0;
        margin-bottom: var(--margin-bottom);
        margin-left: var(--margin-left);
        margin-right: var(--margin-right);
        padding-left: var(--item-padding);
        padding-right: var(--item-padding);
        width: calc(100% - var(--total-margins));
        box-shadow: var(--shadow);
        transition: margin-left 0.3s;
        transition: margin-right 0.3s;
      }

      section {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      section.left {
        justify-content: flex-start;
      }

      section.center {
        justify-content: center;
      }

      section.right {        
        justify-content: flex-end;
      }

      section ::slotted(*) {
        margin: auto var(--item-padding, 10px);
      }

      .mv-header-item,
      .mv-header-item ::slotted(*) {
        margin: 0;
        text-decoration: none;
        color: var(--item-color);
      }
      
      .mv-header-item:hover ::slotted(a) {
        text-decoration: underline;
      }
      
      .light {
        --background: var(--light-background);
        --item-color: var(--item-light-color);
      }
      
      .dark {
        --background: var(--dark-background);
        --item-color: var(--item-dark-color);
      }
    `}constructor(){super(),this.item=!1,this.custom=!1,this.position="left",this.theme="dark"}render(){return this.item?(this.setAttribute("slot",this.position),o.dy`
        <div class="mv-header-item">
          <slot></slot>
        </div>
      `):o.dy`
      <header class="${this.theme}">
      ${this.custom?o.dy`<slot></slot>`:o.dy`
            <section class="left">
              <slot name="left"></slot>
            </section>
            <section class="center">
              <slot name="center"></slot>
            </section>
            <section class="right">
              <slot name="right"></slot>
            </section>
          `}
      </header>
      `}}customElements.define("mv-header",a)},4228:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{name:{type:String},rounded:{type:Boolean},value:{type:String},placeholder:{type:String},focus:{type:Boolean,attribute:!1},hasError:{type:Boolean,attribute:"has-error",reflect:!0},type:{type:String},disabled:{type:Boolean},required:{type:Boolean},immediate:{type:Boolean},pattern:{type:String},patternMatcher:{type:String,attribute:"pattern-matcher",reflect:!0},patternRegex:{type:String,attribute:"pattern-regex",reflect:!0}}}static get styles(){return o.iv`
      :host {
        --mv-input-font-family: var(--font-family, Arial);
        --font-size: var(--font-size-m, 16px);
        --color: var(--mv-input-color, #818181);
        --min-width: var(--mv-input-min-width, auto);
        --max-width: var(--mv-input-max-width, auto);
        --margin: var(--mv-input-margin, 0);
        --border: var(--mv-input-border, 1px solid #4e686d);
        --active-border: var(--mv-input-active-border, 1px solid #1d9bc9);
        --disabled-border: var(--mv-input-disabled-border, 1px solid #c8c6c6);
        --disabled-background: var(--mv-input-disabled-background, #f8f6f6);
        --placeholder-color: var(--mv-input-placeholder-color, #c8c6c6);
        --required-placeholder-color: var(
          --mv-input-required-placeholder-color,
          #818181
        );
        --active-box-shadow: var(
          --mv-input-active-box-shadow,
          inset 0 0 9px 0 rgba(29, 155, 201, 0.3)
        );
        --error-border: var(
          --mv-input-error-border,
          1px solid rgba(247, 112, 98, 1)
        );
        --error-box-shadow: var(
          --mv-input-error-box-shadow,
          inset 0 0 9px 0 rgba(229, 47, 47, 0.3)
        );
        --box-radius: 5px;
        --rounded-radius: 50px;
        --box-padding: var(--mv-input-box-padding, 11px 8px);
        --rounded-padding: 11px 20px;
        --prefix-width: var(--mv-input-prefix-width, 0);
        --suffix-width: var(--mv-input-suffix-width, 0);

        --inactive-box-shadow: var(--mv-input-inactive-box-shadow, none);
        --box-height: var(--mv-input-box-height, auto);
      }

      .mv-input {
        min-width: var(--min-width);
        max-width: var(--max-width);
        border: var(--border);
        margin: var(--margin);
        background-color: var(--mv-input-background, #ffffff);
        display: grid;
        grid-template-areas: "prefix input-value suffix";
        grid-template-columns: var(--prefix-width) auto var(--suffix-width);
        align-items: center;
      }

      .mv-input:hover:not(.disabled),
      .mv-input.focus:not(.disabled) {
        border: var(--active-border);
        box-shadow: var(--active-box-shadow);
      }

      .mv-input.box.disabled {
        border: var(--disabled-border);
        background: var(--disabled-background);
      }

      .mv-input.box {
        border-radius: var(--box-radius);
        box-shadow: var(--mv-input-inactive-box-shadow);
        height: var(--box-height);
        padding: var(--box-padding);
      }

      .mv-input.rounded {
        padding: var(--rounded-padding);
        border-radius: var(--rounded-radius);
      }

      .mv-input.error {
        border: var(--error-border);
      }

      .mv-input.error:hover:not(.disabled),
      .mv-input.error.focus:not(.disabled) {
        border: var(--error-border);
        box-shadow: var(--error-box-shadow);
      }

      .mv-input-value {
        color: var(--color);
        font-family: var(--mv-input-font-family);
        font-size: var(--font-size);
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0;
        grid-area: input-value;
        width: 100%;
      }

      ::placeholder {
        color: var(--placeholder-color);
        font-weight: 100;
      }

      .required::placeholder {
        font-weight: 700;
        color: var(--required-placeholder-color);
      }

      .prefix {
        grid-area: prefix;
        justify-self: center;
        align-self: center;
      }

      .suffix {
        grid-area: suffix;
        justify-self: center;
        align-self: center;
      }
    `}constructor(){super(),this.type="text",this.focus=!1,this.rounded=!1,this.hasError=!1,this.disabled=!1,this.required=!1,this.pattern="",this.patternMatcher="_",this.patternRegex="\\d"}render(){const e=this.rounded?"rounded":"box",t=this.focus?" focus":"",r=this.hasError?" error":"",a=this.required?" required":"",n=`mv-input ${e}${t}${r}${a}${this.disabled?" disabled":""}`,i=`mv-input-value ${e}${a}`,s=this.value||0===this.value?this.value:"",l=this.placeholder||0===this.placeholder?this.placeholder:"";return o.dy`
      <div class="${n}">
        <div class="prefix">        
          <slot name="prefix"></slot>
        </div>
        <input
          name="${this.name}"
          placeholder="${l}"
          class="${i}"
          .type="${this.type}"
          .value="${"file"===this.type?"":s}"
          @change="${this.inputChange()}"
          @input="${this.inputChange(!0)}"
          @focusin="${this.focusInInput}"
          @focusout="${this.focusOutInput}"
          ?disabled="${this.disabled}"
        />
        </span>
        <div class="suffix">
          <slot name="suffix"></slot>
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),this.pattern&&(this.matcher=new Set(this.patternMatcher),this.regex=new RegExp(this.patternRegex,"g"))}inputChange=e=>t=>{const{name:r,type:o}=this,{target:a}=t;let n;n="file"===o?a.files[0]:a.value;const i=this.immediate&&e,s=!this.immediate&&!e,l=i||s;this.pattern&&this.format(t),l&&this.dispatchEvent(new CustomEvent("input-change",{detail:{name:r,type:o,value:n,originalEvent:t}}))};focusInInput=e=>{this.focus=!0,this.pattern&&this.format(e)};focusOutInput=e=>{const{name:t,type:r}=this,{target:o}=e;this.pattern&&this.pattern===o.value&&(o.value="",this.dispatchEvent(new CustomEvent("input-change",{detail:{name:t,type:r,value:o.value,originalEvent:e}}))),this.focus=!1};isInMatcher=e=>this.matcher.has(e);clean=e=>(e=e.match(this.regex)||[],Array.from(this.pattern,(t=>(e[0]===t||this.matcher.has(t))&&e.shift()||t)));format=e=>{const{target:t,key:r}=e,o=(e=>Array.from(this.pattern,((t,r)=>this.matcher.has(t)?e=r+1:e)))(0),a=this.clean(t.value).findIndex(this.isInMatcher),n="Backspace"===r,i=[...this.pattern].findIndex(this.isInMatcher),s=a<0?o[o.length-1]:n?o[a-1]||i:a;t.value=this.clean(t.value).join``,setTimeout((()=>{t.setSelectionRange(s,s)}))}}customElements.define("mv-input",a)},5530:(e,t,r)=>{var o=r(5862),a=r(2385),n=r.n(a);class i extends o.oi{static get properties(){return{settingsPath:{type:String,attribute:"settings-path",reflect:!0},minValidity:{type:Number,attribute:"min-validity",reflect:!0},auth:{type:Object,attribute:!1,reflect:!0},authenticated:{type:Boolean,attribute:!1,reflect:!0},failed:{type:Boolean,attribute:!1,reflect:!0}}}constructor(){super(),this.settingsPath="./keycloak.json",this.auth=null,this.authenticated=!1,this.failed=!1,this.minValidity=10}render(){const{auth:e,authenticated:t,failed:r,minValidity:a}=this;if(e){const r=e.isTokenExpired(a);return t&&!r?o.dy`<slot></slot>`:o.dy`<slot name="loading"><b>Loading...</b></slot>`}return r?o.dy`<slot name="failed"><b>Authentication failed</b></slot>`:o.dy`
      <slot name="authenticating">
        <b>Authenticating...</b>
      </slot>
    `}connectedCallback(){const e=this,t=new(n())(this.settingsPath);t.init({onLoad:"login-required",promiseType:"native",checkLoginIframe:!1}).then((function(r){r?(e.failed=!1,e.auth=t,e.authenticated=r,e.dispatchEvent(new CustomEvent("auth-success",{detail:{auth:t}}))):(e.failed=!0,e.dispatchEvent(new CustomEvent("auth-fail")))})).catch((function(){e.failed=!0,e.dispatchEvent(new CustomEvent("auth-init-fail"))})),super.connectedCallback()}}customElements.define("mv-keycloak",i)},4775:(e,t,r)=>{var o=r(5862);const a=["home","apartment","pencil","magic-wand","drop","lighter","poop","sun","moon","cloud","cloud-upload","cloud-download","cloud-sync","cloud-check","database","lock","cog","trash","dice","heart","star","star-half","star-empty","flag","envelope","paperclip","inbox","eye","printer","file-empty","file-add","enter","exit","graduation-hat","license","music-note","film-play","camera-video","camera","picture","book","bookmark","user","users","shirt","store","cart","tag","phone-handset","phone","pushpin","map-marker","map","location","calendar-full","keyboard","spell-check","screen","smartphone","tablet","laptop","laptop-phone","power-switch","bubble","heart-pulse","construction","pie-chart","chart-bars","gift","diamond","linearicons","dinner","coffee-cup","leaf","paw","rocket","briefcase","bus","car","train","bicycle","wheelchair","select","earth","smile","sad","neutral","mustache","alarm","bullhorn","volume-high","volume-medium","volume-low","volume","mic","hourglass","undo","redo","sync","history","clock","download","upload","enter-down","exit-up","bug","code","link","unlink","thumbs-up","thumbs-down","magnifier","cross","menu","list","chevron-up","chevron-down","chevron-left","chevron-right","arrow-up","arrow-down","arrow-left","arrow-right","move","warning","question-circle","menu-circle","checkmark-circle","cross-circle","plus-circle","circle-minus","arrow-up-circle","arrow-down-circle","arrow-left-circle","arrow-right-circle","chevron-up-circle","chevron-down-circle","chevron-left-circle","chevron-right-circle","crop","frame-expand","frame-contract","layers","funnel","text-format","text-format-remove","text-size","bold","italic","underline","strikethrough","highlight","text-align-left","text-align-center","text-align-right","text-align-justify","line-spacing","indent-increase","indent-decrease","pilcrow","direction-ltr","direction-rtl","page-break","sort-alpha-asc","sort-amount-asc","hand","pointer-up","pointer-right","pointer-down","pointer-left"];class n extends o.oi{static get properties(){return{icon:{type:String,attribute:!0},showIcon:{type:Boolean,attribute:!1,reflect:!0}}}static get styles(){return o.iv`
    .lnr {
      font-family: 'Linearicons-Free';
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
    
      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .lnr-home:before {
      content: "\\e800";
    }
    .lnr-apartment:before {
      content: "\\e801";
    }
    .lnr-pencil:before {
      content: "\\e802";
    }
    .lnr-magic-wand:before {
      content: "\\e803";
    }
    .lnr-drop:before {
      content: "\\e804";
    }
    .lnr-lighter:before {
      content: "\\e805";
    }
    .lnr-poop:before {
      content: "\\e806";
    }
    .lnr-sun:before {
      content: "\\e807";
    }
    .lnr-moon:before {
      content: "\\e808";
    }
    .lnr-cloud:before {
      content: "\\e809";
    }
    .lnr-cloud-upload:before {
      content: "\\e80a";
    }
    .lnr-cloud-download:before {
      content: "\\e80b";
    }
    .lnr-cloud-sync:before {
      content: "\\e80c";
    }
    .lnr-cloud-check:before {
      content: "\\e80d";
    }
    .lnr-database:before {
      content: "\\e80e";
    }
    .lnr-lock:before {
      content: "\\e80f";
    }
    .lnr-cog:before {
      content: "\\e810";
    }
    .lnr-trash:before {
      content: "\\e811";
    }
    .lnr-dice:before {
      content: "\\e812";
    }
    .lnr-heart:before {
      content: "\\e813";
    }
    .lnr-star:before {
      content: "\\e814";
    }
    .lnr-star-half:before {
      content: "\\e815";
    }
    .lnr-star-empty:before {
      content: "\\e816";
    }
    .lnr-flag:before {
      content: "\\e817";
    }
    .lnr-envelope:before {
      content: "\\e818";
    }
    .lnr-paperclip:before {
      content: "\\e819";
    }
    .lnr-inbox:before {
      content: "\\e81a";
    }
    .lnr-eye:before {
      content: "\\e81b";
    }
    .lnr-printer:before {
      content: "\\e81c";
    }
    .lnr-file-empty:before {
      content: "\\e81d";
    }
    .lnr-file-add:before {
      content: "\\e81e";
    }
    .lnr-enter:before {
      content: "\\e81f";
    }
    .lnr-exit:before {
      content: "\\e820";
    }
    .lnr-graduation-hat:before {
      content: "\\e821";
    }
    .lnr-license:before {
      content: "\\e822";
    }
    .lnr-music-note:before {
      content: "\\e823";
    }
    .lnr-film-play:before {
      content: "\\e824";
    }
    .lnr-camera-video:before {
      content: "\\e825";
    }
    .lnr-camera:before {
      content: "\\e826";
    }
    .lnr-picture:before {
      content: "\\e827";
    }
    .lnr-book:before {
      content: "\\e828";
    }
    .lnr-bookmark:before {
      content: "\\e829";
    }
    .lnr-user:before {
      content: "\\e82a";
    }
    .lnr-users:before {
      content: "\\e82b";
    }
    .lnr-shirt:before {
      content: "\\e82c";
    }
    .lnr-store:before {
      content: "\\e82d";
    }
    .lnr-cart:before {
      content: "\\e82e";
    }
    .lnr-tag:before {
      content: "\\e82f";
    }
    .lnr-phone-handset:before {
      content: "\\e830";
    }
    .lnr-phone:before {
      content: "\\e831";
    }
    .lnr-pushpin:before {
      content: "\\e832";
    }
    .lnr-map-marker:before {
      content: "\\e833";
    }
    .lnr-map:before {
      content: "\\e834";
    }
    .lnr-location:before {
      content: "\\e835";
    }
    .lnr-calendar-full:before {
      content: "\\e836";
    }
    .lnr-keyboard:before {
      content: "\\e837";
    }
    .lnr-spell-check:before {
      content: "\\e838";
    }
    .lnr-screen:before {
      content: "\\e839";
    }
    .lnr-smartphone:before {
      content: "\\e83a";
    }
    .lnr-tablet:before {
      content: "\\e83b";
    }
    .lnr-laptop:before {
      content: "\\e83c";
    }
    .lnr-laptop-phone:before {
      content: "\\e83d";
    }
    .lnr-power-switch:before {
      content: "\\e83e";
    }
    .lnr-bubble:before {
      content: "\\e83f";
    }
    .lnr-heart-pulse:before {
      content: "\\e840";
    }
    .lnr-construction:before {
      content: "\\e841";
    }
    .lnr-pie-chart:before {
      content: "\\e842";
    }
    .lnr-chart-bars:before {
      content: "\\e843";
    }
    .lnr-gift:before {
      content: "\\e844";
    }
    .lnr-diamond:before {
      content: "\\e845";
    }
    .lnr-linearicons:before {
      content: "\\e846";
    }
    .lnr-dinner:before {
      content: "\\e847";
    }
    .lnr-coffee-cup:before {
      content: "\\e848";
    }
    .lnr-leaf:before {
      content: "\\e849";
    }
    .lnr-paw:before {
      content: "\\e84a";
    }
    .lnr-rocket:before {
      content: "\\e84b";
    }
    .lnr-briefcase:before {
      content: "\\e84c";
    }
    .lnr-bus:before {
      content: "\\e84d";
    }
    .lnr-car:before {
      content: "\\e84e";
    }
    .lnr-train:before {
      content: "\\e84f";
    }
    .lnr-bicycle:before {
      content: "\\e850";
    }
    .lnr-wheelchair:before {
      content: "\\e851";
    }
    .lnr-select:before {
      content: "\\e852";
    }
    .lnr-earth:before {
      content: "\\e853";
    }
    .lnr-smile:before {
      content: "\\e854";
    }
    .lnr-sad:before {
      content: "\\e855";
    }
    .lnr-neutral:before {
      content: "\\e856";
    }
    .lnr-mustache:before {
      content: "\\e857";
    }
    .lnr-alarm:before {
      content: "\\e858";
    }
    .lnr-bullhorn:before {
      content: "\\e859";
    }
    .lnr-volume-high:before {
      content: "\\e85a";
    }
    .lnr-volume-medium:before {
      content: "\\e85b";
    }
    .lnr-volume-low:before {
      content: "\\e85c";
    }
    .lnr-volume:before {
      content: "\\e85d";
    }
    .lnr-mic:before {
      content: "\\e85e";
    }
    .lnr-hourglass:before {
      content: "\\e85f";
    }
    .lnr-undo:before {
      content: "\\e860";
    }
    .lnr-redo:before {
      content: "\\e861";
    }
    .lnr-sync:before {
      content: "\\e862";
    }
    .lnr-history:before {
      content: "\\e863";
    }
    .lnr-clock:before {
      content: "\\e864";
    }
    .lnr-download:before {
      content: "\\e865";
    }
    .lnr-upload:before {
      content: "\\e866";
    }
    .lnr-enter-down:before {
      content: "\\e867";
    }
    .lnr-exit-up:before {
      content: "\\e868";
    }
    .lnr-bug:before {
      content: "\\e869";
    }
    .lnr-code:before {
      content: "\\e86a";
    }
    .lnr-link:before {
      content: "\\e86b";
    }
    .lnr-unlink:before {
      content: "\\e86c";
    }
    .lnr-thumbs-up:before {
      content: "\\e86d";
    }
    .lnr-thumbs-down:before {
      content: "\\e86e";
    }
    .lnr-magnifier:before {
      content: "\\e86f";
    }
    .lnr-cross:before {
      content: "\\e870";
    }
    .lnr-menu:before {
      content: "\\e871";
    }
    .lnr-list:before {
      content: "\\e872";
    }
    .lnr-chevron-up:before {
      content: "\\e873";
    }
    .lnr-chevron-down:before {
      content: "\\e874";
    }
    .lnr-chevron-left:before {
      content: "\\e875";
    }
    .lnr-chevron-right:before {
      content: "\\e876";
    }
    .lnr-arrow-up:before {
      content: "\\e877";
    }
    .lnr-arrow-down:before {
      content: "\\e878";
    }
    .lnr-arrow-left:before {
      content: "\\e879";
    }
    .lnr-arrow-right:before {
      content: "\\e87a";
    }
    .lnr-move:before {
      content: "\\e87b";
    }
    .lnr-warning:before {
      content: "\\e87c";
    }
    .lnr-question-circle:before {
      content: "\\e87d";
    }
    .lnr-menu-circle:before {
      content: "\\e87e";
    }
    .lnr-checkmark-circle:before {
      content: "\\e87f";
    }
    .lnr-cross-circle:before {
      content: "\\e880";
    }
    .lnr-plus-circle:before {
      content: "\\e881";
    }
    .lnr-circle-minus:before {
      content: "\\e882";
    }
    .lnr-arrow-up-circle:before {
      content: "\\e883";
    }
    .lnr-arrow-down-circle:before {
      content: "\\e884";
    }
    .lnr-arrow-left-circle:before {
      content: "\\e885";
    }
    .lnr-arrow-right-circle:before {
      content: "\\e886";
    }
    .lnr-chevron-up-circle:before {
      content: "\\e887";
    }
    .lnr-chevron-down-circle:before {
      content: "\\e888";
    }
    .lnr-chevron-left-circle:before {
      content: "\\e889";
    }
    .lnr-chevron-right-circle:before {
      content: "\\e88a";
    }
    .lnr-crop:before {
      content: "\\e88b";
    }
    .lnr-frame-expand:before {
      content: "\\e88c";
    }
    .lnr-frame-contract:before {
      content: "\\e88d";
    }
    .lnr-layers:before {
      content: "\\e88e";
    }
    .lnr-funnel:before {
      content: "\\e88f";
    }
    .lnr-text-format:before {
      content: "\\e890";
    }
    .lnr-text-format-remove:before {
      content: "\\e891";
    }
    .lnr-text-size:before {
      content: "\\e892";
    }
    .lnr-bold:before {
      content: "\\e893";
    }
    .lnr-italic:before {
      content: "\\e894";
    }
    .lnr-underline:before {
      content: "\\e895";
    }
    .lnr-strikethrough:before {
      content: "\\e896";
    }
    .lnr-highlight:before {
      content: "\\e897";
    }
    .lnr-text-align-left:before {
      content: "\\e898";
    }
    .lnr-text-align-center:before {
      content: "\\e899";
    }
    .lnr-text-align-right:before {
      content: "\\e89a";
    }
    .lnr-text-align-justify:before {
      content: "\\e89b";
    }
    .lnr-line-spacing:before {
      content: "\\e89c";
    }
    .lnr-indent-increase:before {
      content: "\\e89d";
    }
    .lnr-indent-decrease:before {
      content: "\\e89e";
    }
    .lnr-pilcrow:before {
      content: "\\e89f";
    }
    .lnr-direction-ltr:before {
      content: "\\e8a0";
    }
    .lnr-direction-rtl:before {
      content: "\\e8a1";
    }
    .lnr-page-break:before {
      content: "\\e8a2";
    }
    .lnr-sort-alpha-asc:before {
      content: "\\e8a3";
    }
    .lnr-sort-amount-asc:before {
      content: "\\e8a4";
    }
    .lnr-hand:before {
      content: "\\e8a5";
    }
    .lnr-pointer-up:before {
      content: "\\e8a6";
    }
    .lnr-pointer-right:before {
      content: "\\e8a7";
    }
    .lnr-pointer-down:before {
      content: "\\e8a8";
    }
    .lnr-pointer-left:before {
      content: "\\e8a9";
    }    
    `}constructor(){super(),this.showIcon=!1}render(){return this.showIcon?o.dy`
          <i class="lnr lnr-${this.icon}"></i>
        `:o.dy``}connectedCallback(){this.showIcon=a.includes(this.icon),super.connectedCallback()}}customElements.define("mv-lnr",n)},4448:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{value:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 1rem);
        --header-height: var(--mv-header-height, 0);
        --footer-height: var(--mv-footer-height, 0);
        --content-padding: var(--mv-content-padding, 20px);
        --margin-left: var(--mv-menu-panel-width, 0);
        --main-margin-left: var(--mv-main-margin-left, 0);
      }

      main {
        padding: var(--content-padding);
        grid-area: main;
        overflow-y: auto;
        margin-left: var(--main-margin-left);
      }

      .header {
        grid-area: header;
      }

      .menu {
        grid-area: menu;
      }

      .footer {
        grid-area: footer;
      }

      .mv-main-container {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 0;
        margin: 0;
        display: grid;
        place-items: stretch stretch;
        grid-template-columns: var(--margin-left) auto;
        grid-template-rows: var(--header-height) auto calc(var(--footer-height) + 1px);
        grid-template-areas:
          "menu header"
          "menu main"
          "menu footer";
      }
    `}render(){return o.dy`
      <div class="mv-main-container">
        <div class="header"><slot name="header"></slot></div>
        <div class="menu"><slot name="menu"></slot></div>
        <main><slot></slot></main>
        <div class="footer"><slot name="footer"></slot></div>
      </div>
    `}}customElements.define("mv-main",a)},836:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{value:{type:Object,attribute:!1},menu:{type:Boolean},showHeader:{type:Boolean,attribute:"show-header"},label:{type:Boolean},group:{type:Boolean},popout:{type:Boolean},item:{type:Boolean},open:{type:Boolean},disabled:{type:Boolean},selected:{type:Boolean},custom:{type:Boolean},position:{type:String},theme:{type:String}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        user-select: none;
        --menu-width: var(--mv-menu-panel-width, 330px);
        --popout-width: var(--mv-menu-panel-popout-width, var(--menu-width));
        --menu-collapse-width: var(--mv-menu-panel-collapse-width, 65px);

        --menu-header-font-size: var(--font-size-xl, 1.375rem);
        --menu-header-height: var(--mv-menu-panel-header-height, 66px);

        --menu-item-font-size: var(--font-size-m, 1rem);
        --menu-item-height: var(--mv-menu-panel-item-height, 40px);
        --menu-item-padding: var(--mv-menu-panel-item-padding, 20px);
        --menu-shadow: var(
          --mv-menu-panel-shadow,
          0 0 16px 1px rgba(151, 156, 163, 0.35)
        );

        --group-icon-size: calc(var(--menu-item-font-size) * 0.3);

        --menu-header-dark-color: var(
          --mv-menu-panel-header-dark-color,
          #ffffff
        );
        --menu-header-dark-background: var(
          --mv-menu-panel-header-dark-background,
          linear-gradient(
            45deg,
            rgba(232, 179, 56, 1) 0%,
            rgba(255, 150, 0, 1) 100%
          )
        );
        --menu-item-dark-color: var(--mv-menu-panel-item-dark-color, #ffffff);
        --menu-dark-background: var(
          --mv-menu-panel-dark-background,
          linear-gradient(
            180deg,
            rgba(63, 71, 83, 1) 0%,
            rgba(26, 30, 35, 1) 100%
          )
        );
        --selected-dark-highlight: var(
          --mv-menu-panel-selected-dark-highlight,
          rgba(26, 30, 35, 0.6)
        );
        --disabled-dark-color: var(
          --mv-menu-panel-disabled-dark-color,
          #898c91
        );
        --hover-dark-color: var(--mv-menu-panel-hover-dark-color, #00d8ff);
        --hover-dark-background: var(
          --mv-menu-panel-hover-dark-background,
          rgba(26, 30, 35, 0.4)
        );

        --menu-header-light-color: var(
          --mv-menu-panel-header-light-color,
          #80828c
        );
        --menu-header-light-background: var(
          --mv-menu-panel-header-light-background,
          #f0fff0
        );
        --menu-item-light-color: var(--mv-menu-panel-item-light-color, #ffffff);
        --menu-light-background: var(--mv-menu-panel-light-background, #cccccc);
        --selected-light-highlight: var(
          --mv-menu-panel-selected-light-highlight,
          #4a6572
        );
        --disabled-light-color: var(
          --mv-menu-panel-disabled-light-color,
          #898c91
        );
        --hover-light-color: var(--mv-menu-panel-hover-light-color, #00d8ff);
        --hover-light-background: var(
          --mv-menu-panel-hover-light-background,
          rgba(26, 30, 35, 0.4)
        );
      }

      :host([group]:hover:not([disabled])),
      :host([item]:hover:not([disabled])) {
        cursor: pointer;
      }

      ul {
        padding: 0;
        margin: 0;
      }

      li {
        display: block;
        text-indent: var(--menu-item-padding);
        font-size: var(--menu-item-font-size);
      }

      li,
      li ::slotted(*) {
        margin: 0;
        text-decoration: none;
        list-style-type: none;
        color: var(--menu-item-color);
        line-height: var(--menu-item-height);
      }

      li ::slotted(a) {
        display: block;
      }

      li:hover:not(.disabled),
      li.open:not(.disabled) {
        color: var(--hover-color);
        background: var(--hover-background);
      }

      li:hover:not(.disabled) ::slotted(*) {
        color: var(--hover-color);
      }

      li.selected,
      li.selected div ::slotted(*),
      li.selected .menu-label-group.open {
        color: var(--hover-color);
        background: var(--selected-highlight);
      }

      li.disabled,
      li.disabled ::slotted(*) {
        color: var(--disabled-color);
        cursor: not-allowed;
      }

      .mv-menu-panel {
        z-index: 100;
        height: 100%;
        width: var(--menu-width);
        background: var(--menu-background);
        box-shadow: var(--menu-shadow);
      }

      .menu-panel-header {
        font-size: var(--menu-header-font-size);
        color: var(--menu-header-color);
        background: var(--menu-header-background);
        height: var(--menu-header-height);
        display: flex;
        align-items: center;
        padding: 0 0 0 var(--menu-item-padding);
      }

      .menu-label-group {
        width: 100%;
        height: var(--menu-item-height);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .menu-label-group:hover:not(.disabled) ::slotted(*),
      .menu-label-group.open:not(.disabled) ::slotted(*),
      .menu-label-group:hover:not(.disabled) i,
      .menu-label-group.open:not(.disabled) i {
        color: var(--hover-color);
      }

      .menu-panel-label {
        width: 100%;
        line-height: calc(var(--menu-item-font-size) * 1.2);
        font-size: var(--menu-item-font-size);
      }

      .menu-group-dropdown-icon {
        position: relative;
        width: var(--group-icon-size);
        height: var(--group-icon-size);
        border-top: 2px solid var(--menu-item-color);
        border-right: 2px solid var(--menu-item-color);
        left: -20px;
        float: right;
      }

      .menu-group-dropdown-icon.close {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .menu-group-dropdown-icon.open {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
      }

      .popout {
        display: block;
        position: absolute;
        left: calc(var(--menu-width) + 2px);
        margin-top: calc(var(--menu-item-height) * -1);
        width: var(--popout-width);
        background: var(--menu-background);
        border-radius: 5px;
        z-index: 1;
      }

      .dark {
        --menu-header-color: var(--menu-header-dark-color);
        --menu-header-background: var(--menu-header-dark-background);
        --menu-item-color: var(--menu-item-dark-color);
        --menu-background: var(--menu-dark-background);
        --selected-highlight: var(--selected-dark-highlight);
        --disabled-color: var(--disabled-dark-color);
        --hover-color: var(--hover-dark-color);
        --hover-background: var(--hover-dark-background);
      }

      .light {
        --menu-header-color: var(--menu-header-light-color);
        --menu-header-background: var(--menu-header-light-background);
        --menu-item-color: var(--menu-item-light-color);
        --menu-background: var(--menu-light-background);
        --selected-highlight: var(--selected-light-highlight);
        --disabled-color: var(--disabled-light-color);
        --hover-color: var(--hover-light-color);
        --hover-background: var(--hover-light-background);
      }
    `}constructor(){super(),this.showHeader=!1,this.disabled=!1,this.selected=!1,this.custom=!1,this.theme="dark"}render(){const{menu:e,showHeader:t,label:r,group:a,popout:n,item:i,open:s,disabled:l,selected:c,custom:d}=this,f=s&&!n?" open":" close",h=`${(l?" disabled":"")||(c?" selected":"")}`;return e?s?o.dy`
            <aside class="mv-menu-panel ${this.theme}">
              ${t?o.dy`
                    <div
                      class="menu-panel-header"
                      @click="${this.handleHeaderClick}"
                    >
                      <slot name="menu-panel-label"></slot>
                    </div>
                  `:o.dy``}
              <nav>
                <ul class="main">
                  <slot></slot>
                </ul>
              </nav>
            </aside>
          `:o.dy``:r?(this.setAttribute("slot","menu-panel-label"),o.dy` <slot></slot> `):a?o.dy`
        <li class="${f}${h}" @click="${this.handleOpenMenu}">
          <div class="sub-menu${f}">
            <div class="menu-label-group${f}">
              <div class="menu-panel-label">
                <slot name="menu-panel-label"></slot>
              </div>
              ${d?o.dy``:o.dy`
                    <i class="${`menu-group-dropdown-icon${f}`}"></i>
                  `}
            </div>
            ${s?o.dy`
                  <div class="group">
                    <ul class="${n?" popout":""}">
                      <slot></slot>
                    </ul>
                  </div>
                `:o.dy``}
          </div>
        </li>
      `:i?o.dy`
        <li class="${h}" @click="${this.handleItemClick}">
          <div>
            <slot></slot>
          </div>
        </li>
      `:o.dy``}connectedCallback(){void 0===this.open&&(this.group||this.menu)&&(this.open=!this.group),document.addEventListener("click",this.handleClickAway),super.connectedCallback()}detachedCallback(){document.removeEventListener("click",this.handleClickAway),super.detachedCallback()}handleHeaderClick(e){const{value:t}=this;this.dispatchEvent(new CustomEvent("select-header",{detail:{value:t,originalEvent:e}}))}handleOpenMenu(e){const{custom:t,open:r,value:o}=this;e.stopPropagation(),t||(this.open=!r),this.dispatchEvent(new CustomEvent("select-group",{detail:{value:o,originalEvent:e}}))}handleItemClick(e){const{value:t,disabled:r}=this;e.stopPropagation(),t&&!r&&this.dispatchEvent(new CustomEvent("select-item",{detail:{value:t,originalEvent:e}}))}isInPath=(e,t)=>e.some((e=>e===t));isInParentNode=(e,t)=>!!e&&(e===t||this.isInParentNode(e.parentNode,t));handleClickAway=e=>{if(this.popout){const{path:t,originalTarget:r}=e,o=t||e.composedPath();let a=!1;if(o)a=!this.isInPath(o,this);else{const e=this.shadowRoot.firstElementChild;a=!this.isInParentNode(r,e)}if(a){this.open=!1;const{value:e,originalEvent:t}=this;this.dispatchEvent(new CustomEvent("close-popout"))}}}}customElements.define("mv-menu-panel",a)},5923:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5862),_meveo_org_mv_click_away__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5895);class MvMenu extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static get properties(){return{text:{type:String,attribute:!0},shortCut:{type:String,attribute:!0},checked:{type:Boolean,attribute:!0},disabled:{type:Boolean,attribute:!0},isOpen:{type:Boolean,attribute:!0},action:{type:String,attribute:!0},type:{type:String,attribute:!0},parentType:{type:String,attribute:!0},title:{type:String,attribute:!0},showFooter:{type:Boolean,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return lit__WEBPACK_IMPORTED_MODULE_0__.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        line-height: var(--line-height-s, 1.625);
        --border: var(--mv-menu-border, 1px solid #344955);

        --light-background: var(--mv-menu-light-background, #FFFFFF);
        --hover-light-background: var(--mv-menu-hover-light-background, #F0FFF0);
        --light-color: var(--mv-menu-light-color, #80828C);
        --dark-background: var(--mv-menu-dark-background, #344955);
        --hover-dark-background: var(--mv-menu-hover-dark-background, #232F34);
        --dark-color: var(--mv-menu-dark-color, rgb(202, 213, 218));

        --dropdown-sublevel-height: var(--mv-dropdown-sublevel-height, 41px);
        --dropdown-sublevel-width: var(--mv-dropdown-sublevel-width, 198px);
        --dropdown-level-height: var(--mv-dropdown-level-height, 95px);
        --dropdown-level-width: var(--mv-dropdown-level-width, 265px);
        --dropdown-sublevel-position-top: var(--mv-dropdown-sublevel-position-top, 100px);
        --dropdown-sublevel-position-left: var(--mv-dropdown-sublevel-position-left, 0px);
        --dropdown-dark-background: var(--mv-menu-dropdown-dark-background, #3F4753);
        --dropdown-hover-dark-background: var(--mv-menu-dropdown-hover-dark-background, #353F4D);
        --dropdown-light-background: var(--mv-menu-dropdown-light-background, #FFFFFF);
        --dropdown-hover-light-background: var(--mv-menu-dropdown-hover-light-background, #F0FFF0);

        --notification-level-size: var(--mv-notification-level-size, 48px);
        --notification-sublevel-height: var(--mv-notification-sublevel-height, 400px);
        --notification-sublevel-width: var(--mv-notification-sublevel-width, 756px);
        --notification-sublevel-position-top: var(--mv-notification-sublevel-position-top, 80px);
        --notification-sublevel-position-left: var(--mv-notification-sublevel-position-left, -355px);
        --notification-dark-background: var(--mv-menu-notification-dark-background, #3F4753);
        --notification-button-dark-background: var(--mv-menu-notification-button-dark-background, #3F4753);
        --notification-button-hover-dark-background: var(--mv-menu-notification-button-hover-dark-background, #353F4D);
        --notification-menu-dark-background: var(--mv-menu-notification-menu-dark-background, #3F4753);
        --notification-dark-color: var(--mv-menu-notification-dark-color, #FFFFFF);
        --notification-light-background: var(--mv-menu-notification-light-background, #FFFFFF);
        --notification-button-light-background: var(--mv-menu-notification-button-light-background, #FFFFFF);
        --notification-button-hover-light-background: var(--mv-menu-notification-button-hover-light-background, #F0FFF0);
        --notification-menu-light-background: var(--mv-menu-notification-menu-light-background, #FFFFFF);
        --notification-light-color: var(--mv-menu-notification-light-color, #80828C);
        --level-dropdown-box-shadow: var(--mv-level-dropdown-box-shadow, 0 0px 25px 5px rgba(205,210,214,0.8));
      }

      ul {
        margin: 0px;
        list-style: none;
        border: var(--border);
        background-color: var(--background-color);
      }

      li {
        padding: 1em;
        display: block;
        color: var(--color);
        text-decoration: none;
        background-color: var(--background-color);
      }

      li:hover {
        background: var(--hover-background-color);
        color: var(--color);
      }

      .menu {
        display: flex;
        flex-direction : row;
        justify-content: left;
        padding: 0;

        @media(max-width: 450px) {
          flex-flow: column wrap;
        }
      }

      .level1 {
        position: relative;
      }

      .level1:hover > .sous-menu {
        display: flex;
      }

      .submenu {
        display: none;
        top: 2em;
        flex-flow: column wrap;
        min-width: 100px;
        position: absolute;
        background: var(--hover-background-color);

        @media(max-width: 450px) {
          position: static;
        }
      }

      .submenu.is-open {
        display: flex !important;
      }

      .submenu span {
        text-align: left;
        color: white;

        @media(max-width: 450px) {
          text-align: center;
        }
      }

      .level2 {
        top: 0px;
        left: 100%;
        background: var(--background-color);
        color: var(--color);
      }

      .level2:hover {
        top: 0px;
        left: 100%;
      }

      .menuitem {
        display: flex;
        justify-content: space-between;
      }

      .text{
        padding-right: 1em;
      }

      ul.dropdown {
        border: none;
      }

      .sublevel.dropdown {
        height: var(--dropdown-sublevel-height);
        padding: 0 10px;
        line-height: var(--dropdown-sublevel-height);
        background-color: var(--dropdown-background-color);
        border-radius: 1px;
      }

      .sublevel.dropdown:hover {
        background-color: var(--dropdown-hover-background-color);
        color: var(--color);
      }

      .level.dropdown {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        height: var(--dropdown-level-height);
        width: var(--dropdown-level-width);
        cursor: pointer;
        position: relative;
        padding: 0 20px;
        display: flex;
        align-items: center;
        background-color: var(--dropdown-background-color);
        box-shadow: var(--level-dropdown-box-shadow);
      }

      .level.dropdown:hover {
        background-color: var(--dropdown-hover-background-color);
        color: var(--color);
      }

      .level.dropdown > ul {
        width: var(--dropdown-sublevel-width) !important;
        border-radius: 5px;
        padding: 0;
        border: 1px solid var(--dropdown-hover-background-color);
        box-shadow: 0 0 20px 1px rgba(93, 94, 07, 0.35);
        z-index: 101;
        position: absolute;
        top: var(--dropdown-sublevel-position-top);
        left: var(--dropdown-sublevel-position-left);
      }

      ul.notification {
        border: none;
      }

      .level.notification {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        width: var(--notification-level-size);
        height: var(--notification-level-size);
        border-radius: 50%;
        display: flex;
        margin: auto;
        position: relative;
        background-color: var(--notification-button-background-color);
      }

      .level.notification:hover {
        background-color: var(--notification-button-hover-background-color);
        cursor: pointer;
      }

      .level.notification .text {
        display: none;
      }

      .level.dropdown .text {
        display: none;
      }

      .level.notification > ul {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        height: var(--notification-sublevel-height);
        width: var(--notification-sublevel-width) !important;
        border-radius: 5px;
        padding: 0;
        box-shadow: 0 0 20px 1px rgba(93, 94, 07, 0.35);
        z-index: 101;
        position: absolute;
        top: var(--notification-sublevel-position-top);
        left: var(--notification-sublevel-position-left);
        border: none;
      }

      .sublevel.notification {
        display: none;
      }

      .menu.notification {
        background-color: var(--notification-menu-background-color);
      }

      .wrap-notification {
        width: 100%;
        height: 100%;
        cursor: default;
        box-shadow: 0 0 15px 1px rgba(151, 156, 163, 1);
        border-radius: 5px;
        color: var(--notification-color);
      }

      .title {
        font-size: --font-size-xl;
        font-weight: 500;
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: default;
      }

      .header {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        height: 60px;
        position: relative;
        background-color: var(--notification-background-color);
        box-shadow: 0 5px 10px 0 rgba(7, 17, 26, 0.2);
        z-index: 1;
        border-radius: 5px 5px 0 0;
      }

      .footer {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border-top: 1px solid #B0B3B6;
        height: 55px;
        position: relative;
        background-color: var(--notification-background-color);
        border-radius: 0 0 5px 5px;
      }

      .body {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        height: calc(var(--notification-sublevel-height) - 60px);
        position: relative;
        background-color: var(--notification-background-color);
        border-radius: 0 0 5px 5px;
      }

      .wrap-notification[showFooter] .body {
        height: calc(var(--notification-sublevel-height) - 115px);
        position: relative;
        border-radius: 0;
      }

      .level.default .submenu {
        margin-top: 22px;
        margin-left: 194px;
        min-width: 210px !important;
        max-width: 210px;
      }

      .level1.default .submenu {
        margin-left: 0px;
      }

      .light {
        --background-color: var(--light-background);
        --hover-background-color: var(--hover-light-background);
        --color: var(--light-color);
        --dropdown-background-color: var(--dropdown-light-background);
        --dropdown-hover-background-color: var(--dropdown-hover-light-background);
        --notification-button-background-color: var(--notification-button-light-background);
        --notification-button-hover-background-color: var(--notification-button-hover-light-background);
        --notification-background-color: var(--notification-light-background);
        --notification-menu-background-color: var(--notification-menu-light-background);
        --notification-color: var(--notification-light-color);
      }

      .dark {
        --background-color: var(--dark-background);
        --hover-background-color: var(--hover-dark-background);
        --color: var(--dark-color);
        --dropdown-background-color: var(--dropdown-dark-background);
        --dropdown-hover-background-color: var(--dropdown-hover-dark-background);
        --notification-button-background-color: var(--notification-button-dark-background);
        --notification-button-hover-background-color: var(--notification-button-hover-dark-background);
        --notification-background-color: var(--notification-dark-background);
        --notification-menu-background-color: var(--notification-menu-dark-background)
        --notification-color: var(--notification-dark-color);
      }
    `}constructor(){super(),this.type="default",this.title="Notifications",this.showFooter=!0,this.theme="dark"}render(){const e=["dropdown","notification"].includes(this.type),t="notification"===this.type;return this.isRoot?lit__WEBPACK_IMPORTED_MODULE_0__.dy`
        <mv-click-away @clicked-away="${this.handleClickAway}">
          <ul class="menu ${this.type} ${this.theme}"><slot></slot></ul>
        </mv-click-away>
      `:this.hasChildren?lit__WEBPACK_IMPORTED_MODULE_0__.dy`
        <li
          class="level${this.level} level ${this.type}"
          @click=${this.clicked}
        >
          <span class="menuitem">
            ${e?lit__WEBPACK_IMPORTED_MODULE_0__.dy`<slot name="title"></slot>`:lit__WEBPACK_IMPORTED_MODULE_0__.dy``}
            <span class="text">${this.text}</span>
            <span class="shortCut">${this.shortCut}</span>
          </span>
          <ul class="submenu ${this.isOpen?"is-open":""}">
          ${t?lit__WEBPACK_IMPORTED_MODULE_0__.dy`
              <div
                class="wrap-notification"
                @click=${this.stopImmediatePropagation}
                ?showFooter="${this.showFooter}"
              >
                <div class="header">
                  <slot name="header">
                    <div class="title">${this.title}</div>
                  </slot>
                </div>
                <div class="body">
                  <slot name="body"></slot>
                </div>
                ${this.showFooter?lit__WEBPACK_IMPORTED_MODULE_0__.dy`
                    <div class="footer">
                      <slot name="footer"></slot>
                    </div>`:lit__WEBPACK_IMPORTED_MODULE_0__.dy``}
                </div>`:lit__WEBPACK_IMPORTED_MODULE_0__.dy``}
            <slot></slot>
          </ul>
        </li>`:lit__WEBPACK_IMPORTED_MODULE_0__.dy`
         <li @click=${this.clicked} class="sublevel ${this.type}">
            <span class="menuitem">
              <span class="text">${this.text}</span>
              <span class="shortCut">${this.shortCut}</span>
            </span>
         </li>`}connectedCallback(){this.level=0,this.submenus=[],this.hasChildren=!1,this.isRoot=void 0===this.text,this.parentType=this.type,this.isRoot||(this.level=this.parentNode.registerChild(this),this.hasChildren=this.children.length>0,this.isOpen=!1),this.hasChildren&&(this.type=this.parentNode.parentType,this.parentType=this.type),this.isRoot||this.hasChildren||this.parentNode.parentType&&(this.type=this.parentNode.parentType),document.addEventListener("click",this.handleClickAway),super.connectedCallback()}detachedCallback(){document.removeEventListener("click",this.handleClickAway),super.detachedCallback()}firstUpdated(e){(this.isRoot||this.hasChildren)&&this.submenus.map((e=>{e.addEventListener("submenu-clicked",this.submenuClicked)}))}clicked=event=>{if(!this.isRoot){this.hasChildren&&(event.stopImmediatePropagation(),this.isOpen=!this.isOpen),this.action&&eval(this.action);let submenuEvent=new CustomEvent("submenu-clicked",{detail:{message:this.text}});this.dispatchEvent(submenuEvent)}};submenuClicked=e=>{this.submenus.map((t=>{t.text!==e.detail.message&&t.isOpen&&(t.isOpen=!1)})),e.stopImmediatePropagation()};registerChild=e=>(this.submenus.push(e),this.level+1);handleClickAway=()=>{this.isOpen=!1};stopImmediatePropagation(e){e&&e.stopImmediatePropagation()}}customElements.define("mv-menu",MvMenu)},4897:(e,t,r)=>{var o=r(5862);r(2542);class a extends o.oi{static get properties(){return{page:{type:Number,attribute:!0,reflect:!0},pages:{type:Number,attribute:!0,reflect:!0},"max-buttons":{type:Number,attribute:!0,reflect:!0},justify:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},theme:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --light-background: var(--mv-pagination-light-background, #eaebf0);
        --dark-background: var(--mv-pagination-dark-background, #3999c1);
        --selected-light-background: var(
          --mv-pagination-selected-light-background,
          #008fc3
        );
        --selected-dark-background: var(
          --mv-pagination-selected-dark-background,
          #23404c
        );
        --light-color: var(--mv-pagination-light-color, #80828c);
        --dark-color: var(--mv-pagination-dark-color, #ffffff);
        --hover-light-background: var(
          --mv-pagination-hover-light-background,
          #ffffff
        );
        --hover-dark-background: var(
          --mv-pagination-hover-dark-background,
          #007fad
        );
        --pagination-width: var(--mv-pagination-width);
        --pagination-min-width: var(--mv-pagination-min-width);
        --pagination-height: var(--mv-pagination-height);
        --pagination-display: var(--mv-pagination-display);
        --pagination-align-items: var(--mv-pagination-align-items);
        --pagination-span-justify-content: var(--mv---pagination-span-justify-content);
        --pagination-current-page-margin: var(--mv-pagination-current-page-margin);
        --pagination-current-page-padding: var(--mv-pagination-current-page-padding);
        --pagination-current-page-background-color: var(--mv-pagination-current-page-background-color);
        --pagination-current-page-border-radius: var(--mv-pagination-current-page-border-radius);
        --pagination-current-page-font-weight: var(--mv-pagination-current-page-font-weight);
        --mv-pagination-container-height: var(--mv-pagination-container-light-height);
        --pagination-group-top-margin: var(--mv-pagination-group-top-margin);
      }
      .mv-pagination-container {
        margin-top: var(--pagination-group-top-margin, 10px);
        display: flex;
        flex-direction: row;
        height: var(--mv-pagination-container-height);
      }
      .mv-pagination-container.left {
        justify-content: flex-start;
      }
      .mv-pagination-container.center {
        justify-content: center;
      }
      .mv-pagination-container.right {
        justify-content: flex-end;
      }
      .mv-pagination-group {
        display: flex;
        align-items: center;
        width: var(--pagination-width);
        justify-content: var(--mv-pagination-justify-content);
      }
      .button-group {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: var(--background-color);
        border-radius: 55px;
        margin: 0px 15px;
        --mv-button-margin: 0 5px;
      }
      .button-group mv-button:first-child,
      .button-group mv-button:nth-child(2) {
        --mv-button-margin: 0 5px 0 0;
      }
      .button-group mv-button:last-child,
      .button-group mv-button:nth-last-child(2) {
        --mv-button-margin: 0 0 0 5px;
      }
      .page-buttons {
        font-size: var(--font-size-m, 16px);
        font-weight: var(--pagination-button-font-weight, normal);
      }
      .page-buttons.large {
        font-size: var(--font-size-xxl, 24px);
        font-weight: var(--pagination-button-font-weight-large, bold);
        height: 24px;
        width: 24px;
        display: inline-block;
        position: relative;
        top: -6px;
      }
      .current-page {
        color: var(--mv-pagination-current-page-color);
        width: var(--pagination-width);
        min-width: var(--pagination-min-width);
        height: var(--pagination-height);
        display: var(--pagination-display);
        align-items: var(--pagination-align-items);
        justify-content: var(--pagination-span-justify-content);
        margin: var(--pagination-current-page-margin);
        padding: var(--pagination-current-page-padding);
        background-color: var(--pagination-current-page-background-color);
        border-radius: var(--pagination-current-page-border-radius);
        font-weight: var(--pagination-current-page-font-weight);
      }
      .light {
        --mv-button-circle-background: var(--light-background);
        --mv-button-light-background: var(--selected-light-background);
        --background-color: var(--light-background);
        --mv-button-circle-hover-background: var(--hover-light-background);
        --mv-button-circle-color: var(--light-color);
        --width: var(--pagination-width, auto);
        --mv-pagination-justify-content: var(--mv-pagination-light-justify-content, space-evenly);
        --mv-pagination-current-page-color: var(--mv-pagination-current-page-text-color, black);
      }
      .dark {
        --mv-button-circle-background: var(--dark-background);
        --mv-button-light-background: var(--selected-dark-background);
        --background-color: var(--dark-background);
        --mv-button-circle-hover-background: var(--hover-dark-background);
        --mv-button-circle-color: var(--dark-color);
        --width: var(--pagination-width, auto);
        --mv-pagination-justify-content: space-evenly;
        --mv-pagination-current-page-color: white;
      }
    `}constructor(){super(),this.page=1,this.pages=0,this["max-buttons"]=5,this.justify="center",this.type="button",this.isButtonType=!0,this.isHidden=!0,this.showLeftSeparator=!1,this.showRightSeparator=!1,this.showFirstPageButton=!1,this.showLastPageButton=!1,this.leftMostButton=0,this.rightMostButton=0,this.pageGroup=[],this.theme="light"}render(){const e=`mv-pagination-container ${this.justify}`,t=1===this.page,r=this.page===this.pages;return this.setVisibility(this.page,this.pages),this.isHidden?o.dy``:o.dy`
          <div class="${e} ${this.theme}">
            <div class="mv-pagination-group">
              <mv-button
                @button-clicked="${this.gotoPage(1)}"
                ?disabled="${t}"
                .visible="${!this.isButtonType}"
                type="circle"
              >
                <slot name="first-button">
                  <span class="page-buttons large">&laquo;</span>
                </slot>
              </mv-button>
              <mv-button
                @button-clicked="${this.gotoPage(this.page-1)}"
                ?disabled="${t}"
                type="circle"
              >
                <slot name="previous-button">
                  <span class="page-buttons large">&lsaquo;</span>
                </slot>
              </mv-button>
              ${"text"===this.type?o.dy`
                    <span class="current-page">
                      ${`Page ${this.page} of ${this.pages}`}
                    </span>
                  `:o.dy``}
              ${this.isButtonType?o.dy`
                    <div class="button-group">
                      <mv-button
                        @button-clicked="${this.gotoPage(1)}"
                        ?disabled="${t}"
                        .visible="${this.showFirstPageButton}"
                        type="circle"
                      >
                        <span class="page-buttons">1</span>
                      </mv-button>
                      ${this.showLeftSeparator?o.dy` <span class="page-buttons">...</span> `:o.dy``}
                      ${this.pageGroup.map((e=>o.dy`
                          <mv-button
                            @button-clicked="${this.gotoPage(e)}"
                            ?selected="${e===this.page}"
                            ?disabled="${e>this.pages}"
                            type="circle"
                          >
                            <span class="page-buttons">${e}</span>
                          </mv-button>
                        `))}
                      ${this.showRightSeparator?o.dy` <span class="page-buttons">...</span> `:o.dy``}
                      <mv-button
                        @button-clicked="${this.gotoPage(this.pages)}"
                        ?disabled="${r}"
                        .visible="${this.showLastPageButton}"
                        type="circle"
                      >
                        <span class="page-buttons">${this.pages}</span>
                      </mv-button>
                    </div>
                  `:o.dy``}
              <mv-button
                @button-clicked="${this.gotoPage(this.page+1)}"
                ?disabled="${r}"
                type="circle"
              >
                <slot name="next-button">
                  <span class="page-buttons large">&rsaquo;</span>
                </slot>
              </mv-button>
              <mv-button
                @button-clicked="${this.gotoPage(this.pages)}"
                ?disabled="${r}"
                .visible="${!this.isButtonType}"
                type="circle"
              >
                <slot name="last-button">
                  <span class="page-buttons large">&raquo;</span>
                </slot>
              </mv-button>
            </div>
          </div>
        `}connectedCallback(){const{page:e,pages:t}=this;if(this.isFirstPage=1===e,this.isLastPage=e===t,this.setVisibility(e,t),"button"===this.type){const e=this["max-buttons"];e%2==0&&(this["max-buttons"]=e-1),this.setButtonProps()}super.connectedCallback()}attributeChangedCallback(e,t,r){this.isButtonType="button"===this.type,this.isButtonType&&this.setButtonProps(),super.attributeChangedCallback(e,t,r)}setVisibility=(e,t)=>{this.isHidden=e<1||t<1};setButtonProps(){const e=this["max-buttons"],t=Math.floor(e/2);this.pageGroup=[],this.leftMostButton=this.page-t,this.rightMostButton=this.page+t;let r=1;r=this.leftMostButton<1?1:this.rightMostButton>this.pages?this.pages-e+1:this.leftMostButton,this.pageGroup=Array.from({length:e},((e,t)=>t+r)),this.showLeftSeparator=this.leftMostButton>2,this.showRightSeparator=this.rightMostButton<this.pages-1,this.showFirstPageButton=this.isButtonType&&this.showLeftSeparator||2===this.leftMostButton,this.showLastPageButton=this.isButtonType&&this.showRightSeparator||this.rightMostButton===this.pages-1}gotoPage(e){return()=>{this.dispatchEvent(new CustomEvent("change-page",{detail:{page:e}}))}}}customElements.define("mv-pagination",a)},2379:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{value:{type:Number,attribute:!0},striped:{type:Boolean,attribute:!0},animated:{type:Boolean,attribute:!0},type:{type:String,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, MuseoSans);
        font-size: var(--font-size-m, 16px);
        --height: var(--mv-progressbar-height, 10px);
        --progress-background: var(--mv-progressbar-progress-background, #E4E3E3);
        --border-radius: var(--mv-progressbar-border-radius, 25px);
        --light-background: var(--mv-progressbar-light-background, linear-gradient(to left, rgba(79, 172, 254, 1) 0%, rgba(0, 242, 254, 1) 100%));
        --dark-background: var(--mv-progressbar-dark-background, linear-gradient(to right, #4E686D 0%, #0C14FE 180%));
      }
      
      .progress { 
        position: relative;
        -moz-border-radius: var(--border-radius);
        -webkit-border-radius: var(--border-radius);
        border-radius: var(--border-radius);
        height: var(--height);
        background: var(--progress-background);
        overflow: hidden;
      }
      
      .progress > span {
        display: block;
        position: relative;
        overflow: hidden;
        -moz-border-radius: var(--border-radius);
        -webkit-border-radius: var(--border-radius);
        border-radius: var(--border-radius);
        height: 100%;
      }
      
      @-webkit-keyframes move {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 50px 50px;
        }
      }
      
      .progress[striped] > span:after, .infinite[striped] > span:after {
        content: "";
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        background-image: 
           -webkit-gradient(linear, 0 0, 100% 100%, 
              color-stop(.25, rgba(255, 255, 255, .2)), 
              color-stop(.25, transparent), color-stop(.5, transparent), 
              color-stop(.5, rgba(255, 255, 255, .2)), 
              color-stop(.75, rgba(255, 255, 255, .2)), 
              color-stop(.75, transparent), to(transparent)
           );
        background-image: 
          -moz-linear-gradient(
              -45deg, 
              rgba(255, 255, 255, .2) 25%, 
              transparent 25%, 
              transparent 50%, 
              rgba(255, 255, 255, .2) 50%, 
              rgba(255, 255, 255, .2) 75%, 
              transparent 75%, 
              transparent
           );
        z-index: 1;
        -webkit-background-size: 40px 40px;
        -moz-background-size: 40px 40px;
        overflow: hidden;
      }
      
      .progress[striped][animated] > span:after, .infinite[striped][animated] > span:after {
        -webkit-animation: move 2s linear infinite;
      }
      
      .default > span, .infinite > span {
        background: var(--background);
      }
      
      .infinite > span {
        position: relative;
        animation: progress-infinite 6s linear infinite;
      }
      
      @keyframes progress-infinite {
        from { left: -25%; width: 25%; }
        to { left: 100%; width: 25%;}
      }
      
      .light {
        --background: var(--light-background);
      }
      
      .dark {
        --background: var(--dark-background);
      }
    `}constructor(){super(),this.striped=!1,this.animated=!1,this.type="default",this.value=null,this.theme="light"}render(){return o.dy`
      <div 
        class="progress ${this.type} ${this.theme}" 
        ?striped="${this.striped}"
        ?animated="${this.animated}"
      >
        <span style="width: ${this.value}%">
          <slot></slot>
        </span>
      </div>
    `}}customElements.define("mv-progressbar",a)},4817:(e,t,r)=>{var o=r(5862);r(5895);class a extends o.oi{static get properties(){return{value:{type:Object,attribute:!0,reflect:!0},options:{type:Array,attribute:!1,reflect:!0},open:{type:Boolean,attribute:!0,reflect:!0},placeholder:{type:String,attribute:!0},searchable:{type:Boolean,attribute:!0},hasEmptyOption:{type:Boolean,attribute:"has-empty-option"},noClearButton:{type:Boolean,attribute:"no-clear-button"},emptyLabel:{type:String,attribute:"empty-label"},alwaysOpen:{type:Boolean,attribute:"always-open"},multiSelect:{type:Boolean,attribute:"multi-select"},showInput:{type:Boolean,attribute:!1,reflect:!0},theme:{type:String},isFilter:{type:Boolean,attribute:"is-filter"}}}static get styles(){return o.iv`
      :host {
        user-select: none;
        --mv-select-font-family: var(--font-family, Arial);
        --color: var(--mv-select-color, #777);
        --width: var(--mv-select-width, 200px);
        --input-padding: var(--mv-select-input-padding, 4px);
        --outside-padding: calc(var(--input-padding) * 2);
        --max-height: var(--mv-select-max-height, calc(var(--mv-select-font-size) + var(--outside-padding)));
        --input-height: var(--max-height);
        --total-height: calc(var(--max-height) + var(--outside-padding));
        --full-height: calc(var(--total-height) + 2px);
        --border: var(--mv-select-border, 1px solid #4e686d);
        --border-radius: var(--mv-select-border-radius, 5px);
        --clear-icon-size: var(
          --mv-select-clear-icon-size,
          var(--mv-select-font-size)
        );
        --dropdown-icon-button-margin: var(--input-padding);
        --dropdown-icon-size: var(
          --mv-select-dropdown-icon-size,
          calc(var(--mv-select-font-size) * 0.75)
        );
        --dropdown-icon-button-size: calc(
          var(--dropdown-icon-size) + var(--dropdown-icon-button-margin)
        );
        --dropdown-icon-total-width: calc(
          var(--dropdown-icon-button-size) + var(--input-padding)
        );
        --button-section-width: calc(var(--dropdown-icon-total-width) * 2);
        --dropdown-icon-button-color: var(
          --mv-select-dropdown-icon-button-color,
          var(--color)
        );
        --option-max-height: var(--mv-select-option-max-height, 250px);
        --option-color: var(--mv-select-option-color, var(--color));
        --option-background: var(--mv-select-option-background, #ffffff);
        --option-hover-background: var(
          --mv-select-option-hover-background,
          #1d9bc9
        );
        --option-hover-color: var(--mv-select-option-hover-color, #ffffff);
        --option-item-padding: var(--mv-select-option-max-height, 10px);
        --mv-select-selected-font-size: var(--mv-select-selected-option-font-size, 12px);
        --mv-select-input-group-bg-color: var(--mv-select-background-color, transparent);
      }

      .mv-select {
        position: relative;
        min-height: var(--full-height);
      }

      .mv-select-contents {
        height: var(--full-height);
      }

      .mv-select-contents.always-open {
        position: relative;
        height: unset;
      }

      .mv-select-input-group {
        background-color: var(--mv-select-input-group-bg-color);
        position: relative;
        display: grid;
        align-items: center;
        justify-items: start;
        border: var(--border);
        border-radius: var(--border-radius);
        min-height: var(--max-height);
        max-height: var(--max-height);
        padding: var(--input-padding);
        width: var(--width)
      }

      .mv-select-input {
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        border: 0;
        outline: none;
        min-height: var(--input-height);
        max-height: var(--input-height);
        line-height: var(--input-height);
        width: calc(100% - var(--button-section-width));
      }

      .mv-select-input.no-clear,
      .mv-select-input.no-dropdown {
        width: calc(100% - var(--dropdown-icon-button-size));
      }

      .mv-select-button > * {
        border: 0;
        padding: 0;
        position: absolute;
        height: 100%;
        cursor: pointer;
      }

      .mv-select-dropdown-button {
        top: 0;
        right: 0;
        font-size: var(--dropdown-icon-size);
      }

      .mv-select-clear-button,
      .mv-select-dropdown-button {
        background: transparent;
        outline: none;
        margin: auto var(--dropdown-icon-button-margin);
        width: var(--dropdown-icon-button-size);
        color: var(--dropdown-icon-button-color);
      }

      .mv-select-dropdown-button.close {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }

      .mv-select-dropdown-button.open {
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .mv-select-clear-button {
        top: 0;
        right: var(--dropdown-icon-total-width);
        font-size: var(--clear-icon-size);
      }

      .mv-select-clear-button.no-dropdown {
        top: 0;
        right: 0;
      }

      .mv-select-input.static {
        user-select: none;
        background: transparent;
        padding: auto;
        width: calc(100% - var(--dropdown-icon-total-width));
        overflow-x: hidden;
        white-space: nowrap;  
      }

      .mv-select-input.static:hover {
        cursor: pointer;
      }

      .mv-select-input.searchable:hover {
        cursor: text;
      }

      .mv-select-options {
        margin: 0;
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        border: var(--border);
        border-radius: var(--border-radius);
        max-height: var(--option-max-height);
        background: var(--option-background);
        overflow: auto;
        display: block;
        left: 0;
        padding: 5px 0;
        width: auto;
        list-style: none;
        z-index: 0;
        position: absolute;
        top: calc(var(--full-height) + 2px);
      }

      .always-open .mv-select-options {
        top: 2px;
        position: relative;
      }

      .mv-select-options.open {
        box-shadow: 3px 3px 10px 0px rgba(58, 58, 58, 0.6);
        z-index: 10;
      }

      .mv-select-item {
        font-family: var(--mv-select-font-family);
        font-size: var(--mv-select-font-size);
        color: var(--color);
        padding: var(--option-item-padding);
        display: block;
      }

      .mv-select-item.selected,
      .mv-select-item.highlight,
      .mv-select-item:hover {
        background: var(--option-hover-background);
        color: var(--option-hover-color);
        cursor: pointer;
      }

      .scrollbar {
        width: 100%;
        float: left;
        overflow-y: auto;
        margin: 0;
        /* fallback for firefox */
        scrollbar-color: #5a6473 #788394;
        scrollbar-width: thin;
        margin: var(--content-margin);
      }

      .scrollbar:focus {
        outline: transparent auto 0;
      }

      .scrollbar::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #788394;
      }

      .scrollbar::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #788394;
        border-radius: 10px;
      }

      .scrollbar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #5a6473;
      }

      .mv-select-input {
        --mv-select-font-size: var(--mv-select-selected-font-size);
      }

      .scrollbar.light {
        // fallback for firefox
        scrollbar-color: #1d9bc9 #eaebf0 !important;
      }

      .scrollbar.light::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #eaebf0 !important;
      }

      .scrollbar.light::-webkit-scrollbar {
        background-color: #1d9bc9;
      }

      .scrollbar.light::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #008fc3;
      }

      .active {
        background-color: rgba(86,190,172, 0.1);
        border: 2px solid #56BEAC;
      }
    `}constructor(){super(),this.emptyOption={label:"- Select one -",value:null},this.placeholder="",this.value=null,this.options=[],this.searchable=!1,this.open=!1,this.showInput=!1,this.alwaysOpen=!1,this.hasEmptyOption=!1,this.noClearButton=!1,this.multiSelect=!1,this.theme="light"}render(){const e=this.alwaysOpen,t=this.hasEmptyOption?[this.emptyOption,...this.options]:this.options,r=this.noClearButton?" no-clear":"",a=e?" no-dropdown":"",n=`mv-select-input ${this.searchable?"searchable":"static"}${a}${r}`,i=`mv-select-clear-button${a}`,s="mv-select-dropdown-button "+(this.open?"open":"close"),l=`mv-select-options scrollbar ${this.theme}${this.open&&!e?" open":""}`,c=this.value?this.value.label:"",d=this.showInput?"":c;return o.dy`
      <mv-click-away @clicked-away="${this.handleClickAway}">
        <div class="mv-select ">
          <div class="mv-select-contents${e?" always-open":""}">
            <div
              class="mv-select-input-group${this.isFilter&&this.value.value?" active":""}"
              @click="${this.toggleDropdown}"
              @keyup="${this.handleKeyPress}"
            >
              ${this.showInput?o.dy`
                  <input
                    class="${n}"
                    .value="${d}"
                    placeholder="${this.placeholder}"
                  >
                `:o.dy`
                    <slot name="custom-value">
                      <div class=${n}>${c}</div>
                    </slot>
                  `}
              ${this.noClearButton?o.dy``:o.dy`
                    <slot name="custom-clear-button" class="mv-select-button">
                      <button
                        class="${i}"
                        @click="${this.clearSearch}"
                      >
                        &times;
                      </button>
                    </slot>
                  `}
              ${e?o.dy``:o.dy`
                    <slot
                      name="custom-dropdown-button"
                      class="mv-select-button"
                    >
                      <button class="${s}">&#9660;</button>
                    </slot>
                  `}
            </div>
            ${this.open||e?o.dy`
                  ${t.length>0?o.dy`
                        <ul class="${l}">
                          ${t.map((e=>{const t=`mv-select-item${e===this.value?" selected":""}`;return o.dy`
                              <li
                                class="${t}"
                                @click="${this.selectItem(e)}"
                              >
                                <slot name="custom-option">${e.label}</slot>
                              </li>
                            `}))}
                        </ul>
                      `:o.dy`
                        <ul class="${l}">
                          <li class="mv-select-item">
                            <slot name="custom-empty-message"
                              >No available options</slot
                            >
                          </li>
                        </ul>
                      `}
                `:o.dy``}
          </div>
        </div>
      </mv-click-away>
    `}connectedCallback(){this.hasEmptyOption&&(this.emptyOption.label=this.emptyLabel||"- Select one -",this.value||(this.value=this.emptyOption)),this.addEventListener("select-option",this.setValue),super.connectedCallback()}attributeChangedCallback(e,t,r){"value"===e&&!this.value&&this.hasEmptyOption&&(this.value=this.emptyOption),super.attributeChangedCallback(e,t,r)}handleClickAway=()=>{this.open=!1,this.showInput=!1};handleKeyPress=((e,t,r)=>{let o;return(...a)=>{const n=void 0,i=r&&!o;clearTimeout(o),o=setTimeout((function(){o=null,r||e.apply(n,a)}),t),i&&e.apply(n,a)}})((e=>{const{path:t,originalTarget:r}=e,o=t||e.composedPath(),[a]=o,{value:n}=a||r;this.dispatchEvent(new CustomEvent("on-search",{detail:{value:n,originalEvent:e}}))}),300);toggleDropdown=e=>{if(this.open=!this.open,this.searchable){this.showInput=!!this.alwaysOpen||this.open;const t=this;setTimeout((()=>{t.shadowRoot.querySelector(".mv-select-input").focus(),t.dispatchEvent(new CustomEvent("on-search",{detail:{value:null,originalEvent:e}}))}),0)}};setValue=e=>{const{detail:{option:t}}=e;this.value=t,this.open=!1,this.searchable&&(this.showInput=!1)};selectItem=e=>{const t=this;return()=>{t.dispatchEvent(new CustomEvent("select-option",{detail:{option:e}}))}};clearSearch=e=>{const t=this.shadowRoot.querySelector(".mv-select-input");t.value="",this.dispatchEvent(new CustomEvent("on-clear",{detail:{originalEvent:e}})),t.focus()}}customElements.define("mv-select",a)},7850:(e,t,r)=>{var o=r(5862);r(4228);class a extends o.oi{static get properties(){return{name:{type:String,attribute:!0},value:{type:Number,attribute:!0},step:{type:Number,attribute:!0},min:{type:Number,attribute:!0},max:{type:Number,attribute:!0},precision:{type:Number,attribute:!0},rounded:{type:Boolean,attribute:!0},placeholder:{type:String,attribute:!0},focus:{type:Boolean,attribute:!1},hasError:{type:Boolean,attribute:"has-error",reflect:!0},disabled:{type:Boolean,attribute:!0},required:{type:Boolean,attribute:!0},immediate:{type:Boolean,attribute:!0}}}static get styles(){return o.iv`
      .buttons {
        padding: 0;
        margin: -6px 10px 0 0;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 3px;
        width: 5px;
      }

      .buttons > button {
        font-size: 12px;
        outline: none;
        padding: 0;
        margin: 0;
        background: transparent;
        border: none;
        height: 8px;
        width: 8px;
        text-align: center;
        cursor: pointer;
      }

      .buttons > button:hover {
        color: #4e686d;
      }

      .buttons > button:disabled {
        cursor: default;
      }
    `}constructor(){super(),this.focus=!1,this.rounded=!1,this.hasError=!1,this.disabled=!1,this.required=!1,this.step=1,this.precision=0,this.value="",this.min=void 0,this.max=void 0}render(){return o.dy`
      <mv-input
        .name="${this.name}"
        .placeholder="${this.placeholder}"
        .value="${this.value}"
        .focus="${this.focus}"
        ?rounded="${this.rounded}"
        ?has-error="${this.hasError}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        ?immediate="${this.immediate}"
        @input-change="${this.inputChange}"
      >
        <div class="buttons" slot="suffix">
          <button
            class="up"
            .disabled="${this.disabled}"
            @click="${this.add(this.step)}"
          >
            &#x25B2;
          </button>
          <button
            class="down"
            .disabled="${this.disabled}"
            @click="${this.add(-this.step)}"
          >
            &#x25BC;
          </button>
        </div>
      </mv-input>
    `}inputChange=e=>{const{detail:t}=e,{name:r,value:o,originalEvent:a}=t,n=new Number(o),i=isNaN(n);this.hasError=i||this.hasError,this.changeValue({name:r,value:o,originalEvent:a,invalid:i})};add=e=>t=>{const r=this.shadowRoot.querySelector("mv-input"),{name:o,value:a}=r,n=Math.pow(10,this.precision),i=new Number(a),s=new Number(e),l=isNaN(i);this.hasError=l||this.hasError;const c=l?a:(i*n+s*n)/n;this.changeValue({name:o,value:c,originalEvent:t,invalid:this.hasError})};changeValue=e=>{const{min:t,max:r}=this,o=Number.isNaN(t)||void 0===t||e.value>=t,a=Number.isNaN(r)||void 0===r||e.value<=r;if(o&&a)e.value!==Number.NaN&&(this.value=e.value),this.dispatchEvent(new CustomEvent("spinner-change",{detail:e}));else{const e=this.value;this.value=0,setTimeout((()=>{this.value=e}),0)}}}customElements.define("mv-spinner",a)},7389:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{key:{type:String,attribute:!0},group:{type:Boolean,attribute:!0},tab:{type:Boolean,attribute:!0},content:{type:Boolean,attribute:!0},disabled:{type:Boolean,attribute:!0},active:{type:Boolean,reflect:!0},selected:{type:String,reflect:!0},type:{type:String,attribute:!0},first:{type:Boolean,attribute:!0},last:{type:Boolean,attribute:!0},total:{type:Number,attribute:!0},lastItem:{type:String,attribute:!0},firstItem:{type:String,attribute:!0},parentType:{type:String,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        --mv-tab-font-family: var(--font-family, Arial);
        --mv-tab-font-size: var(--font-size-m, 1rem);
        --padding-bottom: var(--mv-tab-padding-bottom, 0px);
        --width: var(--mv-tab-width, 100%);
        --header-font-size: var(--font-size-m, 1rem);
        --header-padding: var(--mv-tab-header-padding, 8px);
        --header-border-radius: var(--mv-tab-header-border-radius, 5px);
        --header-light-background: var(
          --mv-tab-header-light-background,
          #dfe7ee
        );
        --header-active-light-background: var(
          --mv-tab-header-active-light-background,
          radial-gradient(circle, #007adf 0%, #00ec76 180%)
        );
        --header-first-active-light-background: var(
          --mv-tab-header-first-active-light-background,
          linear-gradient(to right, #007adf 0%, #00ec76 180%)
        );
        --header-last-active-light-background: var(
          --mv-tab-header-last-active-light-background,
          linear-gradient(to left, #007adf 0%, #00ec76 180%)
        );
        --header-border-light-color: var(
          --mv-tab-header-border-light-color,
          #99d2e7
        );
        --header-light-color: var(--mv-tab-header-light-color, #67afd3);
        --header-active-light-color: var(
          --mv-tab-header-active-light-color,
          #ffffff
        );
        --header-dark-background: var(--mv-tab-header-dark-background, #dfe7ee);
        --header-active-dark-background: var(
          --mv-tab-header-active-dark-background,
          radial-gradient(circle, #4e686d 0%, #00ec76 180%)
        );
        --header-first-active-dark-background: var(
          --mv-tab-header-first-active-dark-background,
          linear-gradient(to right, #4e686d 0%, #00ec76 180%)
        );
        --header-last-active-dark-background: var(
          --mv-tab-header-last-active-dark-background,
          linear-gradient(to left, #4e686d 0%, #00ec76 180%)
        );
        --header-border-dark-color: var(
          --mv-tab-header-border-dark-color,
          #99d2e7
        );
        --header-dark-color: var(--mv-tab-header-dark-color, #67afd3);
        --header-active-dark-color: var(
          --mv-tab-header-active-dark-color,
          #ffffff
        );
        --rounded-font-size: var(--mv-rounded-font-size, var(--font-size-m));
        --rounded-padding: var(--mv-rounded-padding, 5px 10px);
        --rounded-height: var(--mv-tab-rounded-height, 51px);
        --rounded-border-radius: var(--mv-tab-rounded-border-radius, 25px);
        --rounded-light-background: var(
          --mv-tab-rounded-light-background,
          #ffffff
        );
        --rounded-active-light-background: var(
          --mv-tab-rounded-active-light-background,
          #007adf
        );
        --rounded-light-color: var(--mv-tab-rounded-light-color, #4e686d);
        --rounded-active-light-color: var(
          --mv-tab-rounded-active-light-color,
          #ffffff
        );
        --rounded-dark-background: var(
          --mv-tab-rounded-dark-background,
          #ffffff
        );
        --rounded-active-dark-background: var(
          --mv-tab-rounded-active-dark-background,
          #4e686d
        );
        --rounded-dark-color: var(--mv-tab-rounded-dark-color, #4e686d);
        --rounded-active-dark-color: var(
          --mv-tab-rounded-active-dark-color,
          #ffffff
        );
        --icon-font-size: var(--font-size-m, 1rem);
        --icon-size: var(--mv-tab-icon-size, 29px);
        --icon-border-radius: var(--mv-tab-icon-border-radius, 5px);
        --icon-border: var(
          --mv-tab-icon-border,
          1px solid var(--icon-background-color-active)
        );
        --icon-margin: var(--mv-tab-icon-margin, 0 5px);
        --icon-justify-items: var(--mv-tab-icon-justify, flex-end);
        --icon-dark-background: var(--mv-tab-icon-dark-background, #ffffff);
        --icon-active-dark-background: var(
          --mv-tab-icon-active-dark-background,
          #4e686d
        );
        --icon-dark-color: var(--mv-tab-icon-dark-color, #4e686d);
        --icon-active-dark-color: var(--mv-tab-icon-active-dark-color, #ffffff);
        --icon-light-background: var(--mv-tab-icon-light-background, #ffffff);
        --icon-active-light-background: var(
          --mv-tab-icon-active-light-background,
          #007adf
        );
        --icon-light-color: var(--mv-tab-icon-light-color, #007adf);
        --icon-active-light-color: var(
          --mv-tab-icon-active-light-color,
          #ffffff
        );
        --content-light-background: var(
          --mv-tab-content-light-background,
          --b-color,
          rgb(255, 255, 255)
        );
        --content-dark-background: var(
          --mv-tab-content-dark-background,
          #373e48
        );
        --content-light-color: var(--mv-tab-content-light-color, #000000);
        --content-dark-color: var(--mv-tab-content-dark-color, #ffffff);
        z-index: var(--mv-tab-icon-z-index, 0);
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-auto-flow: column;
        position: relative;
        font-family: var(--mv-tab-font-family);
        width: max-content;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
      }

      li[disabled] {
        cursor: unset;
        color: var(--n-color, rgb(105, 109, 110));
        background-color: var(--on-pl-color, rgb(187, 187, 187));
        border-color: var(--nd-color, rgb(187, 187, 187));
      }

      section {
        padding: var(--mv-tab-content-padding, 10px);
        background-color: var(--background-color);
        font-family: var(--mv-tab-font-family);
        font-size: var(--mv-tab-font-size);
        color: var(--color);
      }

      p {
        display: none;
        margin-block-start: unset;
        margin-block-end: unset;
      }

      li.header {
        font-size: var(--header-font-size);
        font-weight: 400;
        box-shadow: inset 0 0 9px 0 rgba(29, 155, 201, 0.3);
        background: var(--header-background-color);
        color: var(--header-color);
        border: 1px solid var(--header-border-color);
        padding: var(--header-padding);
        overflow: hidden;
        height: 100%;
      }

      li.header:hover {
        box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.3);
      }

      li[active].header {
        font-weight: 700;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
        color: var(--header-color-active);
        cursor: default;
        background: var(--header-background-color-active);
      }

      li[first].header {
        border-top-left-radius: var(--header-border-radius);
        border-bottom-left-radius: var(--header-border-radius);
      }

      li[first][active].header {
        background: var(--header-first-background-color-active);
        border: none;
      }

      li[last].header {
        border-top-right-radius: var(--header-border-radius);
        border-bottom-right-radius: var(--header-border-radius);
      }

      li[last][active].header {
        background: var(--header-last-background-color-active);
        border: none;
      }

      ul.rounded {
        position: relative;
      }

      li.rounded {
        font-size: var(--rounded-font-size);
        font-weight: 400;
        color: var(--rounded-color);
        border: solid 1px var(--rounded-active-background-color);
        background: var(--rounded-background-color);
        padding: var(--rounded-padding);
        height: 100%;
      }

      li.rounded:hover {
        box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.3);
      }

      li[first].rounded {
        border-radius: var(--rounded-border-radius) 0 0
          var(--rounded-border-radius);
      }

      li[last].rounded {
        border-radius: 0 var(--rounded-border-radius)
          var(--rounded-border-radius) 0;
      }

      li[active].rounded {
        background: var(--rounded-active-background-color);
        color: var(--rounded-color-active);
        box-shadow: none;
        cursor: default;
      }

      ul.icon {
        display: flex;
        justify-content: var(--icon-justify-items);
        padding: 0;
        margin: 0;
      }

      li.icon {
        border-radius: var(--icon-border-radius);
        width: var(--icon-size);
        height: var(--icon-size);
        background-color: var(--icon-background-color);
        color: var(--icon-color);
        border: var(--icon-border);
        font-size: var(--icon-font-size);
        margin: var(--icon-margin);
      }

      li.icon:hover {
        box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.4);
      }

      li[active].icon {
        background: var(--icon-background-color-active);
        color: var(--icon-color-active);
        box-shadow: none;
        cursor: default;
      }

      .mv-tab-group {
        display: grid;
      }

      .mv-tab-menu {
        overflow-x: auto;
      }

      .light {
        --header-background-color: var(--header-light-background);
        --header-background-color-active: var(--header-active-light-background);
        --header-first-background-color-active: var(
          --header-first-active-light-background
        );
        --header-last-background-color-active: var(
          --header-last-active-light-background
        );
        --header-border-color: var(--header-border-light-color);
        --header-color: var(--header-light-color);
        --header-color-active: var(--header-active-light-color);
        --rounded-background-color: var(--rounded-light-background);
        --rounded-active-background-color: var(
          --rounded-active-light-background
        );
        --rounded-color: var(--rounded-light-color);
        --rounded-color-active: var(--rounded-active-light-color);
        --icon-background-color: var(--icon-light-background);
        --icon-background-color-active: var(--icon-active-light-background);
        --icon-color: var(--icon-light-color);
        --icon-color-active: var(--icon-active-light-color);
        --background-color: var(--content-light-background);
        --color: var(--content-light-color);
      }

      .dark {
        --header-background-color: var(--header-dark-background);
        --header-background-color: var(--header-dark-background);
        --header-background-color-active: var(--header-active-dark-background);
        --header-first-background-color-active: var(
          --header-first-active-dark-background
        );
        --header-last-background-color-active: var(
          --header-last-active-dark-background
        );
        --header-border-color: var(--header-border-dark-color);
        --header-color: var(--header-dark-color);
        --header-color-active: var(--header-active-dark-color);
        --rounded-background-color: var(--rounded-dark-background);
        --rounded-active-background-color: var(
          --rounded-active-dark-background
        );
        --rounded-color: var(--rounded-dark-color);
        --rounded-color-active: var(--rounded-active-dark-color);
        --icon-background-color: var(--icon-dark-background);
        --icon-background-color-active: var(--icon-active-dark-background);
        --icon-color: var(--icon-dark-color);
        --icon-color-active: var(--icon-active-dark-color);
        --background-color: var(--content-dark-background);
        --color: var(--content-dark-color);
      }
    `}constructor(){super(),this.type="header",this.theme="light"}render(){return this.group?o.dy`
        <div class="mv-tab-group ${this.theme}">
          <nav class="mv-tab-menu">
            <ul class="${this.type}">
              <slot name="tab-item"></slot>
            </ul>
          </nav>
          <section class="mv-tab-content">
            <slot name="tab-content"></slot>
          </section>
        </div>
      `:this.tab?(this.setAttribute("slot","tab-item"),o.dy`
        <li
          class="${this.type}"
          .value="${this.key}"
          ?first="${this.first}"
          ?last="${this.last}"
          ?disabled="${this.disabled}"
          ?active="${this.active}"
          @click="${this.selectTab}"
        >
          <slot></slot>
        </li>
      `):this.content&&this.active?(this.setAttribute("slot","tab-content"),o.dy` <slot></slot> `):o.dy``}connectedCallback(){this.group&&(this.firstItem=this.children&&this.children[0]&&this.children[0].getAttribute("key"),this.selected=this.selected?this.selected:this.firstItem,this.lastItem=this.children&&this.children[this.children.length-1]&&this.children[this.children.length-1].getAttribute("key"),this.parentType=this.type),(this.tab||this.content)&&(this.active=this.key===this.parentNode.selected,this.last=this.key===this.parentNode.lastItem,this.first=this.key===this.parentNode.firstItem,this.parentNode.parentType&&(this.type=this.parentNode.parentType)),super.connectedCallback()}attributeChangedCallback(e,t,r){if(this.group&&"selected"===e){let e=!1,t=!1,r=!1,o=!1;for(let a of this.children){const n=a.active,i=a.key===this.selected;if(e&&r&&t&&o)break;n&&!i?(e=!!this.tab||e,t=!!this.content||t,a.active=!1):i&&(r=!!this.tab||r,o=!!this.content||o,a.active=!0)}}super.attributeChangedCallback(e,t,r)}selectTab=()=>{this.disabled||(this.parentNode.selected=this.key,this.dispatchEvent(new CustomEvent("change-tab")))}}customElements.define("mv-tab",a)},7503:(e,t,r)=>{var o=r(5862),a=r(7521);r(1140),r(6587),r(2379);class n extends o.oi{static get properties(){return{value:{type:Array,attribute:!0},scrollable:{type:Boolean,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);				
      }
      
      ul {
        list-style: none;
        padding-left: 0;
      }

      ul.scrollbar {
        width: calc(100% - 8px);
        max-height: 66px;
        float: left;
        overflow-y: auto;
        margin: 0;
        // fallback for firefox
        scrollbar-color: #5A6473 #788394;
        scrollbar-width: thin;
      }

      ul.scrollbar:focus {
        outline: transparent auto 0;
      }
    
      ul.scrollbar::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #788394;
      }
    
      ul.scrollbar::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: #788394;
        border-radius: 10px;
      }
    
      ul.scrollbar::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #5A6473;
      }
    
      ul.scrollbar.light {
        // fallback for firefox
        scrollbar-color: #1D9BC9 #EAEBF0 !important;
      }

      ul.scrollbar.light::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #EAEBF0 !important;
      }
  
      ul.scrollbar.light::-webkit-scrollbar {
        background-color: #1D9BC9;
      }
  
      ul.scrollbar.light::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 5px 0 rgba(29, 155, 201, 0.3);
        background-color: #008FC3;
      }
    `}constructor(){super()}render(){return this.value&&this.value.length>0&&o.dy`     
        <ul class="scrollbar light">
          ${this.value.map((e=>o.dy`<li>${e}</li>`))}
        </ul>
      `}}customElements.define("mv-array-cell",n);class i extends o.oi{static get properties(){return{value:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
    `}render(){return o.dy` ${this.value+""||""} `}}customElements.define("mv-boolean-cell",i);class s extends o.oi{static get properties(){return{value:{type:String,attribute:!0},locale:{type:String,attribute:!0},format:{type:String,attribute:!0},datePattern:{type:String,attribute:"date-pattern",reflect:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);				
      }
    `}constructor(){super(),this.locale="en-US",this.format="date",this.formattedDate="",this.datePattern=null}formatDateByPattern=(e,t)=>{const r=new Date(t);let o=r.getMonth()+1,a=r.getDate();const n=r.getFullYear();return a<10&&(a=`0${a}`),o<10&&(o=`0${o}`),"mm/dd/yyyy"===e?`${o}/${a}/${n}`:"yyyy/dd/mm"===e?`${n}/${a}/${o}`:`${o}/${a}/${n}`};set value(e){const t=this.formattedDate;try{const t=new Date(e);"time"===this.format?this.formattedDate=t.toLocaleTimeString(this.locale):"both"===this.format?this.formattedDate=t.toLocaleString(this.locale):this.formattedDate=t.toLocaleDateString(this.locale)}catch(e){console.log("=".repeat(80)),console.error(`Error encountered while parsing date: ${e}`),console.log("=".repeat(80))}this.requestUpdate("value",t)}get value(){return this.formattedDate}render(){const e=this.datePattern?this.formatDateByPattern(this.datePattern,this.value):this.value;return o.dy`
      ${e}
    `}}customElements.define("mv-date-cell",s);class l extends o.oi{static get properties(){return{value:{type:Object,attribute:!1,reflect:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
      .entity-value {
        height: var(--table-row-height);
        overflow: auto;
      }
      .entity-value ul {
        padding: 10px 0;
        margin: 0;
      }
    `}render=()=>{const e=Array.isArray(this.value);return o.dy`
      <div class="entity-value">
        ${e?this.renderList():this.renderValues(this.value)}
      </div>
    `};renderList=()=>o.dy`
    <ul>
      ${this.value.map(this.renderItem)}
    </ul>
  `;renderValues=e=>o.dy`
    <ul>
      ${this.renderItem(e)}
    </ul>
  `;renderItem=e=>{const{code:t,label:r,name:a,uuid:n}=e,i=r||a||t||n||e||"";return i?o.dy`<li>${i}</li>`:""}}customElements.define("mv-entity-cell",l);class c extends o.oi{static get properties(){return{value:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);				
      }
    `}render(){return o.dy`
      ${this.value+""||""}
    `}}customElements.define("mv-text-cell",c);class d extends o.oi{static get properties(){return{href:{type:String,attribute:!0},label:{type:String,attribute:!0},target:{type:String,attribute:!0}}}static get styles(){return o.iv`
	  :host {
		font-family: var(--font-family, Arial);
		font-size: var(--font-size-m, 10pt);
		--color: var(--mv-table-url-color, #80828C);				
      }

      a {
        color: var(--color);
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
	`}constructor(){super(),this.target="_self"}render(){const e=this.label||this.href;return o.dy`
      <a href="${this.href}" target="${this.target}">${e}</a>
    `}}customElements.define("mv-url-cell",d);r(7231);class f extends o.oi{static get properties(){return{href:{type:String,attribute:!0},alt:{type:String,attribute:!0},title:{type:String,attribute:!0},content:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --width: var(--mv-table-image-width, 50px);
        --height: var(--mv-table-image-height, 50px);
        --radius: var(--mv-table-image-border-radius, 50%);
      }
      
      .image {
        border-radius: var(--radius);
        width: var(--width);
        height: var(--height);
      }
    `}constructor(){super(),this.href="",this.alt=""}render(){const{href:e,alt:t,content:r,title:a}=this;return o.dy`
      <div class="container">
        ${a?o.dy`
            <mv-tooltip>
              <img
                src="${e}"
                alt="${t}"
                class="image"
              />
              <span slot="tooltip-content">${a}</span>
            </mv-tooltip>
          `:o.dy`
            <img
              src="${e}"
              alt="${t}"
              class="image"
            />
            <span slot="tooltip-content">${a}</span>
          `}
        ${r?o.dy`<div class="content">${r}</div>`:o.dy``}
      </div>
    `}}customElements.define("mv-image-cell",f);class h extends o.oi{static get properties(){return{options:{type:Array,attribute:!1},value:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }
    `}render(){const e=this.options.find((e=>e.value===this.value));return o.dy` ${e.label+""||""} `}}customElements.define("mv-list-cell",h);class u extends o.oi{static get properties(){return{field:{type:Object,attribute:!1},value:{type:Object,attribute:!1},no_label:{type:Boolean,attribute:"no-label"}}}static get styles(){return o.iv``}constructor(){super(),this.field={},this.value={},this.no_label=!1}render=()=>o.dy`
    <div class="filter">
      ${this.no_label?null:o.dy`<label>${this.field.label}</label>`}
      ${this.renderInput()}
    </div>
  `;updateValue=e=>{this.dispatchEvent(new CustomEvent("update-value",{detail:{value:e},bubbles:!0,composed:!0}))}}var b=r(4953);r(9605);customElements.define("date-filter",class extends u{static get properties(){return{...super.properties,start:{type:Object,reactive:!0},end:{type:Object,reactive:!0}}}static get styles(){return o.iv`
      :host {
        --mv-input-min-width: 8rem;
        --mv-dropdown-trigger-padding: 0;
      }

      .date-range {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: space-around;
        justify-content: start;
        align-items: center;
        gap: 0.5rem;
      }
    `}constructor(){super(),this.start={},this.end={}}parseDate=e=>{if(e){const[t,r,o]=e.split("/"),a=Number(r)-1;return{date:new Date(`${t}-${r}-${o}`),day:Number(o),month:a,year:Number(t)}}return b.$5};renderInput=()=>(this.start=new Date,this.end=new Date,o.dy`
      <div class="date-range">
        <mv-calendar
          name="start"
          range-calendar
          monday-first
          pattern="MM/DD/YYYY"
          pattern-matcher="MDY"
          pattern-regex="\\d"
          .start=${this.start}
          .end=${this.end}
          @select-date="${this.changeDate}"
        ></mv-calendar>
        <!-- <span> - </span>
        <mv-calendar
          name="end"
          dropdown
          .selected=${this.end}
          @select-date="${this.changeDate}"
        ></mv-calendar> -->
      </div>
    `);formatDate=e=>{if(e&&e.year&&e.month&&e.day){const t=e.month+1;return`${t&&t<10?`0${t}`:t}/${e.day&&e.day<10?`0${e.day}`:e.day}/${e.year}`}};changeDate=e=>{const{detail:{name:t,selected:r}}=e;console.log(e),console.log(this.start,this.end),this.updateValue({end:this.end,[t]:r})}});customElements.define("icon-filter",class extends u{static get properties(){return{data:{type:Array,attribute:!0},isFilter:{type:Boolean},name:{type:String}}}static get styles(){return o.iv`
            :host {
                font-family: var(--font-family, Arial);
                font-size: var(--font-size-, 10pt);
                --width: var(--mv-table-image-width, 50px);
                --height: var(--mv-table-image-height, 50px);
                --radius: var(--mv-table-image-border-radius, 50%);
            }

            custom-icon-cell:hover {
                cursor: pointer;
            }
        `}constructor(){super(),this.data="",this.isFilter=!1,this.name=""}selectIcon=e=>{const{detail:{data:t}}=e;console.log(t),this.updateValue(t)};renderInput(){const{data:e}=this;return o.dy`
            <div class="container">
                ${this.data.map((e=>o.dy`
                    <custom-icon-cell
                        .name="${this.name}"
                        .value="${e}"
                        .isFilter=${this.isFilter}
                    ></custom-icon-cell>
                    `))}
            </div>
        `}});r(4817);customElements.define("list-filter",class extends u{static get properties(){return{...super.properties,options:{type:Array,attribute:!1}}}static get styles(){return o.iv`
      mv-select {
        --mv-select-font-size: 16px;
        --mv-select-input-padding: 6.25px;
        --mv-select-width: calc(100% - 14px);
      }
    `}constructor(){super(),this.options=[]}connectedCallback(){super.connectedCallback();const{listValues:e}=this.field;this.options=Object.keys(this.field.listValues||{}).map((t=>({label:e[t],value:t})))}renderInput=()=>{const e=this.options.find((e=>e.value===this.value));return o.dy`
      <mv-select
        .value="${e}"
        .options="${this.options}"
        @select-option="${this.updateSelectedItem}"
        has-empty-option
      ></mv-select>
    `};updateSelectedItem=({detail:e})=>{const{option:{value:t}}=e;this.updateValue(t)}});customElements.define("select-filter",class extends u{static get styles(){return o.iv`
    .advanced {
      display: inline-block;
      color: black;
      overflow: hidden;
    }

    .hide {
      max-height: 0px;
      transition: max-height 2s;
    }

    .show {
      max-height: 150px;
      transition: max-height 2s;
    }
    `}static get properties(){return{...super.properties,field:{type:Array,attribute:!1},options:{type:Array,attribute:!1},filtersInTable:{type:Boolean,attribute:!1,reflect:!0}}}constructor(){super(),this.field=[],this.options=[],this.filtersInTable=!1}renderInput(){return o.dy`
    <mv-select
        name="${this.field.code}"
        .options="${this.options}"
        no-transparency
        is-filter
        has-empty-option
        @on-clear="${this.clear}"
        @select-option="${this.inputChange}"
    
    ></mv-select>
  `}clear=e=>{this.dispatchEvent(new CustomEvent("on-clear",e)),e.path[0].value=this.emptyOption};inputChange=e=>{const{detail:{option:t}}=e;this.updateValue(t)}});r(4228);var p=r(7599);class m extends p.oi{static get properties(){return{data:{type:Array},theme:{type:String,attribute:!0},type:{type:String,attribute:!0},checked:{type:Boolean,attribute:!0},disabled:{type:Boolean,attribute:!0},noToggle:{type:Boolean,attribute:"no-toggle"},label:{type:String,attribute:!0},value:{type:Object,attribute:!0},id:{type:Object,attribute:!0}}}static get styles(){return p.iv`
      :host {
        font-family: var(--font-family, Arial);
        --font-size: var(--font-size-m, 10pt);
        --padding-left: var(--mv-radio-padding-left, 35px);
        --margin-bottom: var(--mv-radio-margin-bottom, 12px);
        --radio-size: var(--mv-radio-radio-size, 18px);
        --checkmark-size: var(--mv-radio-checkmark-size, 12px);
        --checkmark-top: calc((var(--radio-size) - var(--checkmark-size)) / 2);
        --radio-light-background-color: var(
          --mv-radio-light-background-color,
          #ffffff
        );
        --radio-light-border: var(--mv-radio-light-border, 1px solid #4e686d);
        --radio-light-color: var(--mv-radio-light-color, #818181);
        --radio-light-hover-background-color: var(
          --mv-radio-light-hover-background-color,
          #ffffff
        );
        --radio-light-hover-border: var(
          --mv-radio-light-hover-border,
          1px solid #1d9bc9
        );
        --radio-light-checked-background-color: var(
          --mv-radio-light-checked-background-color,
          #ffffff
        );
        --radio-light-checkmark-background-color: var(
          --mv-radio-light-checkmark-background-color,
          #1d9bc9
        );
        --radio-dark-color: var(--mv-radio-dark-color, #ffffff);
        --radio-dark-background-color: var(
          --mv-radio-dark-background-color,
          #3f4753
        );
        --radio-dark-border: var(--mv-radio-dark-border, 1px solid #fff);
        --radio-dark-hover-background-color: var(
          --mv-radio-dark-hover-background-color,
          #656c75
        );
        --dark-dark-hover-border: var(
          --mv-radio-dark-hover-border,
          1px solid #ffffff
        );
        --radio-dark-checked-background-color: var(
          --mv-radio-dark-checked-background-color,
          #3f4753
        );
        --radio-dark-checkmark-background-color: var(
          --mv-radio-dark-checkmark-background-color,
          #ffffff
        );
        --disabled-background: var(--mv-radio-disabled-background, none);
        --disabled-border: var(--mv-radio-disabled-border, 1px solid #c7c7c7);
        --disabled-color: var(--mv-radio-disabled-color, #c7c7c7);
      }

      .radio-group-container {
        text-align: left;
        padding: 10px;
      }

      .container {
        display: block;
        position: relative;
        padding-left: var(--padding-left);
        margin-bottom: var(--margin-bottom);
        cursor: pointer;
        font-size: var(--font-size);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: var(--radio-size);
        width: var(--radio-size);
        border-radius: 50%;
      }

      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      .container input:checked ~ .checkmark:after {
        display: block;
      }

      .container .checkmark:after {
        top: var(--checkmark-top);
        left: var(--checkmark-top);
        width: var(--checkmark-size);
        height: var(--checkmark-size);
        border-radius: 50%;
      }

      .light {
        color: var(--radio-light-color);
      }

      .light.container .checkmark {
        background-color: var(--radio-light-background-color);
        border: var(--radio-light-border);
      }

      .light.container:hover input ~ .checkmark {
        background-color: var(--radio-light-hover-background-color);
        border: var(--radio-light-hover-border);
      }

      .light.container input:checked ~ .checkmark {
        background-color: var(--radio-light-checked-background-color);
      }

      .light.container .checkmark:after {
        background: var(--radio-light-checkmark-background-color);
      }

      .light.container input.no-toggle:disabled ~ .checkmark {
        border: var(--mv-radio-light-border);
      }

      .light.container input.no-toggle:disabled:checked ~ .checkmark:after {
        top: var(--checkmark-top);
        left: var(--checkmark-top);
        width: calc(var(--checkmark-size) - 2px);
        height: calc(var(--checkmark-size) - 2px);
        background-color: var(--radio-light-checkmark-background-color);
        border-color: var(--radio-light-checkmark-background-color);
        pointer-events: none;
        border-radius: 50%;
      }

      .dark {
        color: var(--radio-dark-color);
      }

      .dark.container .checkmark {
        border: var(--radio-dark-border);
        background-color: var(--radio-dark-background-color);
      }

      .dark.container:hover input ~ .checkmark {
        background-color: var(--radio-dark-hover-background-color);
        border: var(--dark-dark-hover-border);
      }

      .dark.container input:checked ~ .checkmark {
        background-color: var(--radio-dark-checked-background-color);
      }

      .dark.container .checkmark:after {
        background: var(--radio-dark-checkmark-background-color);
      }

      .dark.container input:disabled:checked ~ .checkmark {
        border: var(--mv-radio-dark-border);
      }

      .dark.container input:disabled:checked ~ .checkmark:after {
        top: var(--checkmark-top);
        left: var(--checkmark-top);
        width: calc(var(--checkmark-size) - 2px);
        height: calc(var(--checkmark-size) - 2px);
        background-color: var(--radio-dark-checkmark-background-color);
        border-color: var(--radio-dark-checkmark-background-color);
        pointer-events: none;
        border-radius: 50%;
      }

      .single {
        display: inline;
        margin: 0;
        padding-left: calc(var(--radio-size) + 2px);
      }

      .single input {
        display: none;
      }

      .single label {
        cursor: pointer;
      }

      .label {
        margin-left: 10px;
      }

      .container input:disabled ~ .checkmark,
      .container:hover input:disabled ~ .checkmark,
      .container input:disabled ~ .checkmark:after,
      .container input:checked:disabled ~ .checkmark {
        border: var(--disabled-border);
        pointer-events: none;
        background-color: var(--disabled-background);
      }

      .container input:disabled + .label,
      .container.disabled {
        cursor: context-menu;
        color: var(--disabled-color);
      }

      .light.container input.no-toggle:disabled + .label {
        color: var(--mv-radio-light-color);
      }

      .dark.container input.no-toggle:disabled + .label {
        color: var(--mv-radio-dark-color);
      }
    `}constructor(){super(),this.theme="light",this.type="multiple",this.label="",this.checked=!1,this.disabled=!1}renderMutiRadio(){return p.dy``}renderSingleRadio(){return p.dy``}render(){if("multiple"===this.type)return p.dy`
        <div class="radio-group-container">
          ${(this.data||[]).map((e=>p.dy`
              <label
                class="container ${this.theme} ${e.disabled?"disabled":""}"
              >
                ${e.label}
                <input
                  type="radio"
                  name="${e.name}"
                  ?checked=${e.checked}
                  ?disabled=${e.disabled}
                  @click="${this.handleClick(e)}"
                />
                <span class="checkmark"></span>
              </label>
            `))}
        </div>
      `;if("single"===this.type){const e=this.disabled?" disabled":"",t=this.noToggle?" no-toggle":"";return p.dy`
        <label class="container single ${this.theme}${e}">
          ${this.checked?p.dy`
                <input
                  id="single-radio"
                  type="radio"
                  checked="checked"
                  class="${t}"
                  ?disabled=${this.disabled}
                  @click="${this.handleClickSingleRadio}"
                />
              `:p.dy`
                <input
                  id="single-radio"
                  type="radio"
                  class="${t}"
                  ?disabled=${this.disabled}
                  @click="${this.handleClickSingleRadio}"
                />
              `}
          ${this.label?p.dy`<span class="label">${this.label}</span>`:p.dy``}
          <span class="checkmark"></span>
          <slot></slot>
        </label>
      `}}handleClick=e=>()=>{const{value:t,label:r}=e;this.dispatchEvent(new CustomEvent("radio-clicked",{detail:{label:r,value:t}}))};handleClickSingleRadio=e=>{if(!this.disabled){e.stopPropagation();const{value:t,id:r,label:o}=this;this.dispatchEvent(new CustomEvent("radio-clicked",{detail:{value:t,id:r,label:o,checked:!this.checked,originalEvent:e}}))}}}customElements.define("mv-radio",m);customElements.define("text-filter",class extends u{static get styles(){return o.iv`
    .advanced {
      display: inline-block;
      color: black;
      overflow: hidden;
    }

    .hide {
      max-height: 0px;
      transition: max-height 2s;
    }

    .show {
      max-height: 150px;
      transition: max-height 2s;
    }
    `}renderInput=()=>o.dy`
    <mv-input
      name="${this.field.code}"
      placeholder="${this.field.description}"
      value="${this.value}"
      @input-change="${this.inputChange}"
    ></mv-input>
    ${this.advanced?o.dy`
    <input type="checkbox" id="includes" name="includes">
      <label for="includes">${(0,a.WI)("Includes",{id:"SP.textFilter.includes"})}</label>
    <input type="checkbox" id="excludes" name="excludes">
      <label for="excludes">${(0,a.WI)("Excludes",{id:"SP.textFilter.excludes"})}</label>
    </div>
    `:null}
  `;inputChange=e=>{const{detail:{value:t}}=e;this.updateValue(t)};handleRadioClicked=e=>{const{detail:{value:t}}=e;console.log(e),console.log(this.field.code+" et value : "+t)}});const v=[{value:!0,label:"True"},{value:!1,label:"False"}];customElements.define("boolean-filter",class extends u{static get styles(){return o.iv`
      mv-select {
        --mv-select-font-size: 16px;
        --mv-select-input-padding: 6.25px;
        --mv-select-width: calc(100% - 14px);
      }
    `}renderInput=()=>{const e=v.find((e=>e.value===this.value));return o.dy`
      <mv-select
        .value="${e}"
        .options="${v}"
        @select-option="${this.selectOption}"
        has-empty-option
      ></mv-select>
    `};selectOption=e=>{const{detail:{option:t}}=e;this.updateValue(t.value)}});const g={id:"page",value:"page"},y={id:"all",value:"all"};class k extends o.oi{selectFilter=[{label:(0,a.WI)("Est égale à ...",{id:"SP.table.filtreEgalite"}),value:"="},{label:(0,a.WI)("Est different de ...",{id:"SP.table.filtreDifferent"}),value:"!="}];selectFilterString=[{label:(0,a.WI)("Contient",{id:"SP.table.filtreContient"}),value:"contain"},{label:(0,a.WI)("Ne contient pas",{id:"SP.table.filtreContientPas"}),value:"notContain"}];selectFilterNum=[{label:(0,a.WI)("Supérieur à ...",{id:"SP.table.filtreSuperieur"}),value:">"},{label:(0,a.WI)("Inférieur à ...",{id:"SP.table.filtreInferieur"}),value:"<"},{label:(0,a.WI)("Entre",{id:"SP.table.filtreEntre"}),value:"between"}];selectFilterDate=[{label:(0,a.WI)("Avant ...",{id:"SP.table.filtreAvant"}),value:"before"},{label:(0,a.WI)("Après ...",{id:"SP.table.filtreApres"}),value:"after"},{label:(0,a.WI)("Entre",{id:"SP.table.filtreEntre"}),value:"between"}];static get properties(){return{formFields:{type:Array,attribute:!1},rows:{type:Array,attribute:!1},columns:{type:Array},selectable:{type:Boolean},selectOne:{type:Boolean,attribute:"select-one"},withCheckbox:{type:Boolean,attribute:"with-checkbox"},checkboxColumnLabel:{type:String,attribute:"checkbox-column-label"},"action-column":{type:Object,attribute:!1},"row-actions":{type:Array,attribute:!1},"selected-rows":{type:Array,attribute:!1},pagination:{type:Array},theme:{type:String,attribute:!1},datePattern:{type:String,attribute:"date-pattern"},"sort-order":{type:Object,attribute:!1},sortable:{type:Boolean},dataIsLoading:{type:Boolean},filterValues:{type:Array,reflect:!0},customTypes:{type:Object},position:{type:String}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        --font-size: var(--font-size-s, 1rem);
        --font-size-s: 8px;
        --font-size-m: 13px;
        --td-light-color: var(--mv-table-td-light-color);
        --light-color: var(--mv-table-light-color);
        --table-header-font-family: var(
          --mv-table-header-font-family,
          var(--font-family, Arial)
        );
        --no-border-spacing: var(--mv-table-no-border-spacing);
        --mv-input-inactive-box-shadow: var(--mv-table-input-inactive-box-shadow);
        --mv-checkbox-shadow: var(--mv-table-checkbox-shadow);
        --transparent-background: var(--mv-table-transparent-background);
        --table-row-height: var(--mv-table-row-height, 66px);
        --table-row-cursor: var(--mv-table-row-cursor, default);
        --table-td-font-size: var(--mv-table-td-font-size);
        --body-light-background: var(--mv-table-body-light-background);
        --hover-light-background: var(
          --mv-table-hover-light-background,
          #ededed
        );

        --table-light-row-height: var(--mv-table-light-row-height)
        --head-dark-background: var(--mv-table-head-dark-background, #23404c);
        --body-dark-background: var(--mv-table-body-dark-background, #373e48);
        --hover-dark-background: var(--mv-table-hover-dark-background, #4e686d);
        --color: var(--mv-table-color);
        --mv-button-padding: 5px 5px;
        --input-border: var(--mv-input-border);
      }

      .advancedFilter > mv-select {
        /* mv-select */
        --mv-select-max-height: 20px;
        --mv-select-selected-option-font-size: 10px;
        --mv-select-background-color: #328cc0;
        --mv-select-option-background: #328cc0;
        --mv-select-color: white;
        --mv-select-width: 90px;
        --mv-select-border: none;
        --mv-select-font-size: var(--font-size-s);
        --mv-select-input-padding: 1px 4px;
        --mv-select-selected-option-font-size: 8px;
      }

      *::-webkit-scrollbar {
            width: 27px;
            height: 30px;
        }
        *::-webkit-scrollbar-track {
          border-radius: 3px;
          background-color: #CECECE;
          border: 10px solid #FFFFFF;
        }
        *::-webkit-scrollbar-track:hover {
            background-color: #B8C0C2;
        }
        *::-webkit-scrollbar-track:active {
            background-color: #B8C0C2;
        }   
        *::-webkit-scrollbar-thumb {
            border-radius: 16px;
            background-color: #676767;
            border: 10px solid #FFFFFF;
        }
        *::-webkit-scrollbar-thumb:hover {
            background-color: #328cc0
        }
        *::-webkit-scrollbar-thumb:active {
            background-color: #328cc0
        }
        .action-header {
          text-align: center;
        }
        .action-header>span:hover {
          color: var(--hover-color);
        }
        .active {
          color: #C0328C;
        }
        .advancedFilter {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          max-height: 18px;
        }
        
        .advancedFilter > * {
          margin: 4px;
        }
        .advancedFilter mv-input {
          border: var(--input-border);
          --mv-input-min-width: 80px;
          width: 90px;
          --mv-input-max-width: 90px;
        }
        .button_container {
          text-align: end;
        }
        .cell_container {
          display: flex;
          align-items: center;
          overflow: hidden;
          font-size: var(--table-td-font-size);
        }
        .checkbox {
          width: 5px;
        }
        .container_progressbar {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .dark {
          --head-background: var(--head-dark-background);
          --body-background: var(--body-dark-background);
          --hover-background: var(--hover-dark-background);
          --color: var(--dark-color, #ffffff);
          --hover-color: #b3b3b3;
          --mv-checkbox-border-color: var(--color);
          --mv-table-url-color: var(--td-color);
          --border-colapse: collapse;
          --table-head-height: var(--mv-table-head-height, 60px);
          --table-row-height: var(--mv-table-row-height, 66px);
          --head-first-child-radius:var(--mv-table-head-classic-first-radius);
          --body-td-first-child-radius: var(--mv-table-head-classic-first-radius);
          --head-last-child-radius:var(--mv-table-head-classic-last-radius);
          --word-wrap: break-word;
          --table-overflow-y: hidden;
        }
        .header_menu {
          text-transform: none;
          font-weight: normal;
          font-size: 10px;
          padding-left: 10px !important;
          padding-right: 10px !important;
        }
        .header_menu > div {
          width: 115px;
        }
        .is-loading {
          padding-top: 15px;
          padding-bottom: 15px;
        }
        .light {
          --head-background: var(--head-light-background);
          --body-background: var(--body-light-background);
          --hover-background: var(--hover-light-background);
          --mv-input-box-padding: var(--mv-table-input-box-padding);
          --border-spacing: var(--mv-table-border-spacing);
          --color: var(--light-color, #80828c);
          --td-color: var(--td-light-color) // Couleur proposée par contrast-finder.tanaguru.com avec constrat de 3.9 #9e9e9e; */
          --hover-color: #5c5e65;
          --mv-checkbox-border-color: var(--color);
          --mv-table-url-color: var(--td-color);
          --border-colapse: var(--mv-table-border-colapse, collapse)
          --table-head-height: var(--mv-table-head-height, 60px);
          --table-row-height: var(--mv-table-row-height, 66px);
          --head-first-child-radius: var(--mv-table-head-light-first-radius);
          --head-last-child-radius: var(--mv-table-head-light-last-radius);
          --body-td-first-child-radius: var(--mv-table-head-light-first-radius);
          --body-td-last-child-radius: var(--mv-table-head-light-last-radius);
          --word-wrap: var(--mv-table-word-wrap, break-word);
          --table-overflow-y: var(--mv-table-overflow-y, hidden);
        }

        .loading {
          display: block;
          text-align: center;
          font-weight: 500;
          color: #FFFFFF;
        }
        .mv-input.box {
          box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.15);
        }
        .mv-table-container {
          width: 100%;
          height: 78%;
          max-height: 78%;
          overflow-x: auto;
          overflow-y: var(--table-overflow-y);
        }
        
        .no-data {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          color: var(--warning-color);
          padding-top: 15px;
          padding-bottom: 15px;
        }
        .numeric {
          text-align: right;
        }
        .progressbar mv-progressbar, mv-progressbar[type="infinite"] {
          --mv-progressbar-height: 20px;
        }
        .selected {
          color: #328cc0;
        }
        .sortable thead td {
          cursor: pointer;
        }
        .sortable thead td:hover {
          color: var(--hover-color);
        }
        .sortable thead td:hover:not(.action-header) {
          color: var(--hover-color);
        }
        .subMenu {
          position: absolute;
          left: 130px;
          top: -25px;
          min-width: 210px;
          width: 100%;
          color: var(--mv-dropdown-light-color, #328cc0);
          background: var(--mv-dropdown-background, #3f4753);
          border-radius: 5px;
          border: none;
          padding: 5px;
          font-size: 10px;
      }
        .subMenu div,
        .header_menu div {
          margin-bottom: 5px;
        }
        .table-container {
        max-height: 85%;
      }
        a {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 0px;
          font-feature-settings: 'kern' off;
          color: #02657e;
          text-decoration: none;
          margin-left: 30px;
        }
        div.progress_container {
          line-height: 40px !important;
        }
        hr {
          background-color: white;
          border: 0px;
          border-color: white;
          width: 95%;
          height: 1px;
        }
        mv-dropdown {
          font-size: 10px;
        }
        span>mv-fa:hover {
          cursor: pointer;
        }
        table {
          display: table;
          border-collapse: var(--border-colapse);
          width: 100%;
          /* Espace blanc entre chaque ligne*/
          border-spacing: var(--border-spacing);
          background-color: var(--transparent-background);
          position: var(--table-position);
        }
        table thead #table_header {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          z-index: 9;
          height: var(--table-light-row-height)
        }
        tbody {
          overflow-y: scroll;
        }
        tbody tr {
          border-bottom: 1px solid #e9e9e9;
          cursor: var(--table-row-cursor);
          background-color: var(--body-background);
          z-index: 8;
        }
        tbody tr:hover,
        tbody tr.selected {
          background-color: var(--hover-background);
        }
        tbody tr.selectable {
          cursor: pointer;
        }
        td {
          border-bottom: none;
          padding: 0 15px 0 15px;
          text-align: left;
          overflow: initial;
          white-space: nowrap;
          text-overflow: ellipsis;
          height: var(--table-light-row-height);
          max-height: var(--table-light-row-height);
          color: var(--td-light-color);
          white-space: normal;
          word-wrap: var(--word-wrap);
          border: var(--mv-table-body-td-border);
          border-style: var(--mv-table-body-td-border-style);
        }
        /**
        * ? Si filtre appliqué sur la colonne (class filtered)
        */
        .filtered {
          border-radius: 14px;
          background-color: #317297 !important;
          height: var(--table-row-height);
          padding: 0 8px 0 8px;
        }

        .display-middle {
          display: inline-flex;
          align-items: center;
          height: 100%;
        }

        td:first-child {
          border-radius: var(--body-td-first-child-radius);
        }
        td:last-child {
          border-radius: var(--body-td-last-child-radius);
        }
        td.td-filters {
          vertical-align: top;
        }
        td.is-loading {
          height: 80px !important;
        }
        thead {
          margin: auto;
          height: var(--table-row-height);
          max-height: var(--table-row-height);
          background-color: var(--head-background);
        }
        thead>tr:not(#filter){
        margin: auto;
        max-height: var(--table-head-height);
        background-color: var(--head-background);
        border-spacing: var(--no-border-spacing);
        // 9 because filters contains mv-select with z-index: 10.
        z-index: 9;
      }
        thead td {
          cursor: default;
          color: var(--color);
        }
        thead td .title {
          font-family: var(--table-header-font-family);
          font-size: var(--font-size-m);
          font-weight: 700;
          text-transform: uppercase;
          white-space: nowrap;
        }
        thead td:first-child {
          border-radius: var(--head-first-child-radius);
        }
        thead td:last-child {
          border-radius: var(--head-last-child-radius);
        }
        tr {
          max-height: 26px;
          height: 26px;
          // 8 because, need to pass under thead, and thead have 9 in z-index
          z-index: 8;
        }
        tr.is-loading {
          height: 80px !important;
        }

        ul {
          padding: 0 10px;
        }
        
        .locked {
          --mv-checkbox-checked-content: '🔒'
        }

        span.dropdown-trigger {
          float: right;
        }
    `}constructor(){super(),this.formFields=[],this.pages=1,this.filterValues=[],this.filterType="=",this.filterValue="",this.columns=[],this.rows=[],this.selectable=!1,this.selectOne=!1,this.withCheckbox=!1,this.checkboxColumnLabel="",this.isAllSelected=!1,this.selectionOption="",this.theme="light",this.datePattern=null,this.sortable=!1,this["selected-rows"]=[],this["action-column"]=null,this["row-actions"]=[],this["sort-order"]={},this.dataIsLoading=!0,this.selection={selectedRows:[],selectAll:!1,filters:{}},this.hasActiveFilter=!1,this.position="top"}getCellComponent(e){const{column:{type:t}}=e;return this.CELL_TYPES(e)[t]||this.CELL_TYPES(e).TEXT}CELL_TYPES(e){const{row:t,column:r,datePattern:a}=e,{name:n,target:i}=r,s=t[n],{href:l,alt:c,label:d,title:f,content:h}=s||{};let u;this.customTypes&&(u=this.customTypes(e));const b={ARRAY:o.dy`<mv-array-cell .value="${s||[]}"></mv-array-cell>`,BOOLEAN:o.dy`<mv-boolean-cell .value="${s}"></mv-boolean-cell>`,DATE:o.dy`
        <mv-date-cell
          .value="${s}"
          .datePattern="${a}"
        ></mv-date-cell>
      `,ENTITY:o.dy`<mv-entity-cell .value="${s}"></mv-entity-cell>`,LIST:o.dy`<mv-list-cell
        .value="${s}"
        .options="${r.options}"
      ></mv-list-cell>`,IMAGE:o.dy`
        <mv-image-cell
          .href="${l}"
          .alt="${c}"
          .title="${f}"
          .content="${h}"
        ></mv-image-cell>
      `,STRING:o.dy`<mv-text-cell .value="${s||""}"></mv-text-cell>`,TEXT:o.dy`<mv-text-cell .value="${s||""}"></mv-text-cell>`,URL:o.dy`
        <mv-url-cell
          .href="${l}"
          .label="${d}"
          .target="${i}"
        ></mv-url-cell>
      `};return u&&(b[r.type]=u),b}render(){const e=this.withCheckbox,t=this["row-actions"],r=t&&t.length>0,n=!!this["action-column"]||r,i=this.sortable?" sortable":"",{datePattern:s}=this;return this.isPageSelected=this.hasPageSelected(),this.isAllSelected=this.hasAllSelected(),o.dy`
      ${"top"==this.position?o.dy`      
          <mv-table-options
            .columns="${this.columns}"
            .formFields="${this.formFields}"
            .pagination="${this.pagination}"
        ></mv-table-options>`:null}
      <div class="mv-table-container${i} ${this.theme}">
      ${1==this.selection.selectAll?o.dy`<div style="text-align: center"><span style="color: red">ATTENTION TOUTES</span> les lignes sont sélectionnées</div>`:this.selection.selectedRows.length?o.dy`<div style="text-align: center">${this.selection.selectedRows.length} lignes sélectionnées</div>`:null}
        <table>
          <thead>
            <tr id="table_header">
              ${e&&!this.selectOne?o.dy`
                  <td>
                    <mv-dropdown
                      container
                      justify="left"
                      position="bottom"
                      theme="${this.theme}"
                    >
                      <mv-dropdown trigger>
                          <mv-checkbox
                            .theme="${this.theme}"
                            ?checked="${"page"==this.selectionOption||"all"==this.selectionOption}"
                            @click-checkbox="${this.handleOptionCheckbox}"
                            label="${this.checkboxColumnLabel}"
                          >
                          </mv-checkbox>
                      </mv-dropdown>
                      <mv-dropdown header theme="${this.theme}">Selection</mv-dropdown>
                        <mv-dropdown content theme="${this.theme}">
                          <ul>
                          <mv-checkbox
                            .value="${g}"
                            .theme="${this.theme}"
                            ?checked="${"page"==this.selectionOption}"
                            @click-checkbox="${this.handleClickCheckbox(this.isPageSelected)}"
                            label="${"Page"}"
                          >
                          </mv-checkbox>
                          <mv-checkbox
                            .value="${y}"
                            .theme="${this.theme}"
                            ?checked="${"all"==this.selectionOption}"
                            @click-checkbox="${this.handleClickCheckbox(this.isAllSelected)}"
                            label="${"All"}"
                          >
                          </mv-checkbox>
                          </ul>
                        </mv-dropdown>  
                    </mv-dropdown>
                  </td>
                  `:this.selectOne?o.dy`<td></td>`:o.dy``}
              ${this.columns.map((e=>e.disabled?null:this.sortable?o.dy`
                    <td>
                      <div class="title ${this.filterValues.find((t=>t.hasOwnProperty(e.name)))&&this.hasActiveFilter?"filtered":""}">
                        <span class="${this.filterValues.find((t=>t.hasOwnProperty(e.name)))&&this.hasActiveFilter?"display-middle":""}">${e.title}</span> 
                        <span class="dropdown-trigger ${this.filterValues.find((t=>t.hasOwnProperty(e.name)))&&this.hasActiveFilter?"display-middle":""}">
                        <mv-dropdown
                          container
                            justify="right"
                            position="bottom"
                            theme="${this.theme}"
                          >
                          <mv-dropdown trigger>
                            <mv-lnr icon="chevron-down"></mv-lnr>
                          </mv-dropdown>
                          <mv-dropdown content theme="${this.theme}" style="overflow: visible !important">
                            <ul class="header_menu" style="padding-left: 10px; padding-right: 10px">
                            <div @click="${this.handleSort(e,"asc")}"><mv-fa icon="sort-alpha-down" ></mv-fa>${(0,a.WI)("Tri croissant",{id:"SP.table.sortAZ"})}</div>
                            <div @click="${this.handleSort(e,"desc")}"><mv-fa icon="sort-alpha-up-alt"></mv-fa>${(0,a.WI)("Tri decroissant",{id:"SP.table.sortZA"})}</div>
                            <div>${this.renderFilterItem(e)}</div>
                              <mv-dropdown
                                container
                                justify="left"
                                position="bottom"
                                theme="${this.theme}"
                              >
                                <mv-dropdown trigger>
                                  <mv-fa icon="filter"></mv-fa>${(0,a.WI)("Advanced filters",{id:"SP.popup.advancedFilters"})}<mv-fa icon="angle-right"></mv-fa>
                                </mv-dropdown>
                                <mv-dropdown content theme="${this.theme}">
                                  <div class="subMenu" >
                                    <div>${(0,a.WI)("Advanced filters",{id:"SP.popup.advancedFilters"})}</div> 
                                    <div>
                                      ${this.renderAdvancedFilter(e)}
                                    </div>
                                    <div class="button_container">
                                      <mv-button
                                        type="default" style="--mv-button-custom-color: #4f4f7a;" theme="${this.theme}"
                                        @button-clicked="${this.applyFilters}"
                                      >OK</mv-button>
                                      <mv-button
                                        type="default" style="--mv-button-custom-color: #4f4f7a;" theme="${this.theme}"
                                        @button-clicked="${this.clearFilters}"
                                      >Annuler</mv-button>
                                    </div>
                                  </div>
                                </mv-dropdown>
                              </mv-dropdown>
                              <hr/> 
                              <div class="button_container">
                                <mv-button
                                  type="default" style="--mv-button-custom-color: #4f4f7a;" theme="${this.theme}"
                                  @button-clicked="${this.applyFilters}"
                                >Appliquer</mv-button>
                              </div>
                            </ul>
                          </mv-dropdown>  
                        </mv-dropdown>
                      </span>
                    </div>
                  </td>
                  `:this.sortable?o.dy`
                      <td @click="${this.handleSort(e)}">
                        <span class="title">${e.title}</span>
                        <span>${this.sortIcon(e)}</span>
                      </td>
                    `:o.dy`
                      <td>
                        <span class="title">${e.title}</span>
                      </td>
                    `))}
              ${n?o.dy`
                    <td class="action-header">
                      ${this["action-column"].label}
                    </td>
                  `:o.dy``}
            </tr>
          </thead>
          <tbody>
          ${1==this.dataIsLoading&&0==this.rows.length?o.dy`
          <tr>
            <td colspan="100" class="container_progressbar">
                  <div class="progressbar">
                <mv-progressbar
                  animated
                  striped
                  value=100
                >
                <span class="loading">Please wait<span class="dotdotdot"></span></span>
              </mv-progressbar></div></td></tr>
            `:null}
            ${0!=this.rows.length||this.dataIsLoading?null:o.dy`
              <tr>
                <td colspan="100" class="no-data"> No data to show</td>
              </tr>
              `}
            ${this.rows.map((r=>{const a=!!this.selection.selectAll||this.isSelectVisible(r),i="mv-table-row"+(a?" selected":"");return o.dy`
                <tr @click="${"light"==this.theme?null:this.handleRowClick(r)}" class="${i} ${"all"==this.selectionOption?"disabled":""}">
                  ${e?o.dy`
                        <td>
                          <mv-checkbox class="${"all"==this.selectionOption?"locked":""}"
                            .value="${r}"
                            .theme="${"all"==this.selectionOption?"":this.theme}"
                            ?checked="${a}"
                            ?disabled="${"all"==this.selectionOption}"
                            @click-checkbox="${this.handleClickCheckbox(a)}"
                          >
                          </mv-checkbox>
                        </td>
                      `:o.dy``}
                  ${this.columns.map((e=>{const t=this.getCellComponent({row:r,column:e,datePattern:s});return o.dy`
                      <td @click="${this.handleCellClick(r,e)}">
                      <div class="cell_container">
                        ${t}
                        </div>
                      </td>
                    `}))}
                  ${n?o.dy`
                        <td>
                        <div class="cell_container">
                          ${this["action-column"].getActionComponent(r,t)}
                          </div>
                        </td>
                      `:o.dy``}
                </tr>
              `}))}
          </tbody>
        </table>
      </div>
      ${"bottom"==this.position?o.dy`      
          <mv-table-options
            .columns="${this.columns}"
            .formFields="${this.formFields}"
            .pagination="${this.pagination}"
        ></mv-table-options>`:null}
        `}applyFilters=()=>{this.filterValues.length>0?this.hasActiveFilter=!0:this.hasActiveFilter=!1,this.dispatchEvent(new CustomEvent("apply-filters",{detail:{filters:this.filterValues},bubbles:!0,composed:!0}))};clearFilters=()=>{this.filterValues=[],this.applyFilters()};handleCellClick=(e,t)=>r=>{if(e||t){const{name:o}=t,a=e[o];this.dispatchEvent(new CustomEvent("cell-click",{detail:{row:e,column:t,value:a,originalEvent:r}}))}else r.stopPropagation()};handleClickCheckbox=e=>t=>{const{detail:{value:r,originalEvent:o}}=t;this.selectRow(r,!e,o)};handleOptionCheckbox=e=>{""==this.selectionOption?e.target.shadowRoot.querySelector("input").checked=!1:e.target.shadowRoot.querySelector("input").checked=!0};handleRowClick=e=>t=>{this.selection.selectAll||(this.dispatchEvent(new CustomEvent("row-click",{detail:{row:e,originalEvent:t}})),(this.selectable||this.selectOne)&&this.selectRow(e,!this.isSelected(e),t))};handleSelectOption=e=>{const{detail:{option:t}}=e;this.filterType=t.value};handleSort=(e,t)=>r=>{this["sort-order"];const o="desc"==t?"DESCENDING":"ASCENDING";this.dispatchEvent(new CustomEvent("column-sort",{detail:{column:e,order:o,originalEvent:r}}))};hasAllSelected=()=>this.rows.length>0&&1==this.selection.selectAll;isSelectVisible=e=>this["selected-rows"].includes(e);isSelected=e=>this["selected-rows"].some((t=>t.uuid===e.uuid));renderAdvancedFilter=e=>{var t;return t="STRING"==e.type?[...this.selectFilter,...this.selectFilterString]:[...this.selectFilter,...this.selectFilterNum],o.dy`
    <div class="advancedFilter">
      <mv-select
        .theme="${this.theme}"
        .value="${t[0]}"
        .options="${t}"
        @select-option="${this.handleSelectOption}"
        no-clear-button
        no-transparency
      ></mv-select>
      ${this.renderFilterItem(e,"advanced")}
    </div>`};renderFilterItem=(e,t)=>{const r=this.filterValues.filter?this.filterValues.filter[e?.code]:"";if(e?.filter)switch(e.fieldType){case"BOOLEAN":return o.dy`
            <boolean-filter
              no-label
              .field="${e}"
              .value="${r}"
              @update-value="${this.updateValue(e,t)}"
            ></boolean-filter>
          `;case"DATE":const{start:a,end:n}=r||{};return o.dy`
            <date-filter
              no-label
              .field="${e}"
              start="${a||""}"
              end="${n||""}"
              @update-value="${this.updateValue(e,t)}"
            ></date-filter>
          `;case"LIST":return o.dy`
            <list-filter
              no-label
              .field="${e}"
              .value="${r}"
              @update-value="${this.updateValue(e,t)}"
            ></list-filter>
          `;case"BINARY":case"CHILD_ENTITY":case"DOUBLE":case"EMBEDDED_ENTITY":case"ENTITY":case"EXPRESSION":case"LONG":case"LONG_TEXT":case"SECRET":case"STRING":case"URL":case"TEXT_AREA":return o.dy`
            <text-filter
              no-label
              .field="${e}"
              .value="${r}"
              @update-value="${this.updateValue(e,t)}"
            ></text-filter>
          `;default:return console.error("Unsupported field: ",e),o.dy` ${this.filtersInTable?null:o.dy`
          <div>
            <div>Filter: ${e.code}</div>
            <div>Filter Type: ${e.fieldType}</div>
            <div>Storage Type: ${e.storageType}</div>
          </div>`}`}};selectRow=(e,t,r)=>{let o=[],a=[];if(this.selectOne){const t=this.isSelected(e);o=[...this["selected-rows"]],a=t?[]:[e],this["selected-rows"]=t?[]:[e]}else{if(e===g){this.selectionOption="page";this.hasPageSelected()?(this.selectionOption="",o=[...this.rows],a=[],this["selected-rows"]=[...this["selected-rows"].filter((e=>!this.rows.some((t=>t.id===e.id))))],this.selection.selectAll=!1,this.selection.selectedRows=[],this.selection.filters={},this.selectionOption=""):(o=[],a=this.rows.filter((e=>!this.isSelected(e))),this["selected-rows"]=[...this.rows],this.selection.selectAll=!1,this.selection.selectedRows=this["selected-rows"],this.selection.filters=this.filterValues)}else if(e===y){this.selectionOption="all";this.hasAllSelected()?(this["selected-rows"]=[],this.selection.selectAll=!1,this.selection.selectedRows=[],this.selection.filters={},this.selectionOption=""):(this["selected-rows"]=[],this.selection.selectAll=!0,this.selection.selectedRows=[],this.selection.filters=this.filterValues)}else if(t){o=[],a=[e];const t=this.isSelected(e);this["selected-rows"]=t?this["selected-rows"]:[...this["selected-rows"],e],this.selection.selectAll=!1,this.selection.selectedRows=this["selected-rows"],this.selection.filters=this.filterValues}else{const t=this["selected-rows"].findIndex((t=>t.id===e.id));t>-1&&(o=[this["selected-rows"][t]],a=[],this.selection.selectAll=!1,this.selection.selectedRows=[],this.selection.filters={},this["selected-rows"]=[...this["selected-rows"].slice(0,t),...this["selected-rows"].slice(t+1)])}this.dispatchEvent(new CustomEvent("select-row",{detail:{originalEvent:r,removed:o,added:a,selected:this.selection}}))}};hasPageSelected=()=>this.rows.length>0&&this["selected-rows"].length>0&&this.rows.every((e=>this.isSelected(e)));hasAllSelected=()=>this.rows.length>0&&1==this.selection.selectAll;sortIcon=e=>{const t=(this["sort-order"]||{})[e.name];if(t){return"ASCENDING"===t?o.dy`<mv-fa icon="sort-up"></mv-fa>`:o.dy`<mv-fa icon="sort-down"></mv-fa>`}return o.dy`<mv-fa icon="sort"></mv-fa>`};updateValue=(e,t="simple")=>r=>{const{code:o}=e,{detail:{value:a}}=r,n="simple"!=t?this.filterType:"";if(this.filterValues.find((e=>e.hasOwnProperty(o)))){let e=this.filterValues.find((e=>e.hasOwnProperty(o)));""!=a?e[o]=a:this.filterValues=this.filterValues.filter((e=>!Object.keys(e).includes(o)))}else{const e={[o]:a,type:n};this.filterValues=[...this.filterValues,e]}}}customElements.define("mv-table",k)},6606:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{name:{type:String,attribute:!0},value:{type:String,attribute:!0},placeholder:{type:String,attribute:!0},focus:{type:Boolean,attribute:!1},hasError:{type:Boolean,attribute:"has-error",reflect:!0}}}static get styles(){return o.iv`
      :host {
        --mv-textarea-font-family: var(--font-family, MuseoSans);
        --mv-textarea-font-size: var(--font-size-m, 16px);
        --color: var(--mv-textarea-color, #818181);
        --width: var(--mv-textarea-width, 620px);
        --height: var(--mv-textarea-height, 153px);    
        --margin: var(--mv-textarea-margin, 0);
        --border: var(--mv-textarea-border, 1px solid #4E686D);
        --active-border: var(--mv-textarea-active-border, 1px solid #1D9BC9);
        --placeholder-color: var(--mv-textarea-placeholder-color, #80828C);
        --active-box-shadow: var(--mv-textarea-active-box-shadow, inset 0 0 9px 0 rgba(29, 155, 201, 0.3));
        --error-border: var(--mv-textarea-error-border, 1px solid rgba(247, 112, 98, 1));
        --error-box-shadow: var(--mv-textarea-error-box-shadow, inset 0 0 9px 0 rgba(229, 47, 47, 0.3));
        --box-radius: 5px;
        --box-padding: 11px 8px;
      }
      
      textarea {
        color: var(--color);
        font-family: var(--mv-textarea-font-family);
        font-size: var(--mv-textarea-font-size);
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0 8px;
        resize: none;
        width: 100%;
        height: var(--height);
        // fallback for firefox
        scrollbar-color: #5A6473 #788394;
        scrollbar-width: thin;
      }

      .mv-textarea {
        width: var(--width);
        height: var(--height);       
        border: var(--border);
        margin: var(--margin);
        background-color: var(--mv-textarea-background, #FFFFFF);
        display: flex;
        flex-direction: row;
      }
      
      .mv-textarea:hover, .mv-textarea.focus {
        border: var(--active-border);
        box-shadow: var(--active-box-shadow);
      }

      .mv-textarea.box {
        padding: var(--box-padding);
        border-radius: var(--box-radius); 
      }

      .mv-textarea.error {
        border: var(--error-border);        
      }

      .mv-textarea.error:hover, .mv-textarea.error.focus {
        box-shadow: var(--error-box-shadow);
      }

      ::placeholder {
        color: var(--placeholder-color);
        font-weight: 100;
      }
    
      textarea::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #EAEBF0;
      }
    
      textarea::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        border-radius: 10px;
      }
    
      textarea::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #008FC3;
      }
      
      .mv-textarea.error textarea::-webkit-scrollbar-thumb {
        background-color: rgba(247, 112, 98, 1);
      }
    `}constructor(){super(),this.focus=!1,this.hasError=!1}render(){const e=`mv-textarea box${this.focus?" focus":""}${this.hasError?" error":""}`;return o.dy`
      <div class="${e}">
        <textarea
          name="${this.name}"
          .value="${this.value||""}"
          placeholder="${this.placeholder||""}"
          @change="${this.textareaChange}"
          @focusin="${this.focusInInput}"
          @focusout="${this.focusOutInput}"
        />
      </div>
    `}textareaChange=e=>{const{name:t,type:r}=this,{target:o}=e,{value:a}=o;this.dispatchEvent(new CustomEvent("textarea-change",{detail:{name:t,type:r,value:a,originalEvent:e}}))};focusInInput=()=>{this.focus=!0};focusOutInput=()=>{this.focus=!1}}customElements.define("mv-textarea",a)},7231:(e,t,r)=>{var o=r(5862);r(6587),r(5895);class a extends o.oi{static get properties(){return{title:{type:String},clickable:{type:Boolean},open:{type:Boolean},closeable:{type:Boolean},noAutoClose:{type:Boolean,attribute:"no-auto-close",reflect:!0},position:{type:String},theme:{type:String,attribute:!0},size:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        --mv-tooltip-font-family: var(--font-family, MuseoSans);
        --mv-tooltip-content-font-size: var(--font-size-m, 0.8125rem);
        --mv-tooltip-title-font-size: var(--font-size-l, 1.125rem);
        --mv-close-button-font-size: var(--font-size-l, 1.125rem);
        --min-height: var(--mv-tooltip-height, 29px);
        --border-radius: var(--mv-tooltip-border-radius, 5px);
        --background-color: var(--mv-tooltip-background, #363f4c);
        --text-color: var(--mv-tooltip-color, #ffffff);
        --light-background: var(--mv-tooltip-light-background);
        --light-color: var(--mv-tooltip-light-color);
        --border: 1px solid var(--mv-tooltip-border);
      }

      @-webkit-keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
      }

      @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity:1 ;}
      }

      .tooltip {
        position: relative;
        z-index: unset;
        display: inline-block;
        width: var(--mv-tooltip-trigger-width, 100%);
      }

      .mv-tooltip-container {
        color: #ffffff;
        position: absolute;
        visibility: hidden;
        z-index: 9999;
        cursor: context-menu;
        max-width: var(--mv-tooltip-width, 500px);
        min-width: var(--mv-tooltip-min-width, 93px);
        width: var(--mv-tooltip-width);
        min-height: var(--min-height);
        box-shadow: 0 0px 25px 5px rgba(205, 210, 214, 0.8);
        border-radius: var(--border-radius);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        width: max-content;
        border: var(--border);
      }

      .mv-tooltip-container::after {
        content: "";
        height: 10px;
        position: absolute;
        transform: rotate(45deg);
        width: 10px;
        background: var(--background-color);
        box-shadow: 0 0px 25px 5px rgba(205, 210, 214, 0.8);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: var(--border);
      }

      .tooltip-popup {
        text-align: center;
        position: relative;
        z-index: 2;
        border-radius: var(--border-radius);
        background: var(--background-color);
        color: var(--text-color);
        min-height: var(--min-height);
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .mv-tooltip-container-bottom {
        top: calc(100% + 16px);
        left: 50%;
        transform: translateX(-50%);
      }

      .mv-tooltip-container-bottom::after {
        top: -5px;
        left: 50%;
        margin-left: -5px;
      }

      .mv-tooltip-container-top {
        bottom: calc(100% + 16px);
        left: 50%;
        transform: translateX(-50%);
      }

      .mv-tooltip-container-top::after {
        bottom: -5px;
        left: 50%;
        margin-left: -5px;
      }

      .mv-tooltip-container-left {
        right: calc(100% + 24px);
        top: 50%;
        transform: translateY(-50%);
      }

      .mv-tooltip-container-left::after {
        right: -5px;
        margin-top: -5px;
        top: 50%;
      }

      .mv-tooltip-container-right {
        left: calc(100% + 24px);
        top: 50%;
        transform: translateY(-50%);
      }

      .mv-tooltip-container-right::after {
        left: -5px;
        margin-top: -5px;
        top: 50%;
      }

      .tooltip-trigger {
        display: inline-block;
        position: relative;
        z-index: 1;
        width: var(--mv-tooltip-trigger-width, 100%);
      }

      .tooltip-title {
        font-family: var(--mv-tooltip-font-family);
        font-size: var(--mv-tooltip-title-font-size);
        color: var(--text-color);
        font-weight: 500;
      }

      .active .mv-tooltip-container {
        visibility: visible;
        -webkit-animation: fadeIn 0.3s;
        animation: fadeIn 0.3s;
      }

      mv-fa {
        position: absolute;
        right: 5px;
        top: 0;
        font-size: var(--mv-close-button-font-size);
        color: var(--text-color);
        cursor: pointer;
      }

      .mv-tooltip-container.light::after {
        background: var(--light-background, #ffffff);
      }

      .mv-tooltip-container.light > .tooltip-popup {
        background: var(--light-background, #ffffff);
        color: var(--light-color, #363f4c);
      }

      span > ::slotted(*) {
        cursor: pointer;
      }

      .content ::slotted(*) {
        max-width: 500px;
        overflow-wrap: break-word;        
        padding: 8px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        font-family: var(--mv-tooltip-font-family);
        font-size: var(--mv-tooltip-content-font-size);
        font-weight: 100;
      }

      .mv-tooltip-container.large {
        min-width: 163px;
        min-height: 46px;
      }

      .mv-tooltip-container.large > .tooltip-popup {
        min-height: 46px;
      }

      .mv-tooltip-container.light mv-fa {
        color: #363f4c;
      }
    `}constructor(){super(),this.position="bottom",this.open=!1,this.theme="dark",this.size="small",this.title=null,this.closeable=!1,this.noAutoClose=!1}render(){const e=this.open?" active":"",t=`${`mv-tooltip-container-${this.position}`} ${this.theme} ${this.size}`;return o.dy`
      <mv-click-away @clicked-away="${this.handleClickAway}">
        <span class="${`tooltip${e}`}">
          <span class="mv-tooltip-container ${t}">
            <span class="tooltip-popup">
              ${this.closeable&&this.clickable?o.dy`
                    <slot name="close-button">
                      <mv-fa
                        icon="times"
                        @click="${this.toggleTooltip}"
                      ></mv-fa>
                    </slot>
                  `:o.dy``}
              <div>
                ${this.title?o.dy`
                      <slot name="title">
                        <div class="tooltip-title">${this.title}</div>
                      </slot>
                    `:o.dy``}
                <span class="content"
                  ><slot name="tooltip-content"></slot
                ></span>
              </div>
            </span>
          </span>
          <span
            class="tooltip-trigger"
            @mouseover="${this.showTooltip}"
            @mouseout="${this.hideTooltip}"
            @click="${this.toggleTooltip}"
          >
            <slot></slot>
          </span>
        </span>
      </mv-click-away>
    `}dispatchToggleEvent=e=>{this.dispatchEvent(new CustomEvent("tooltip-toggle",{detail:{open:e}}))};handleClickAway=()=>{this.noAutoClose||(this.open=!1,this.dispatchToggleEvent(this.open))};hideTooltip(){this.clickable||(this.open=!1,this.dispatchToggleEvent(this.open))}showTooltip(){this.clickable||(this.open=!0,this.dispatchToggleEvent(this.open))}toggleTooltip(){this.clickable&&(this.open=!this.open,this.dispatchToggleEvent(this.open))}}customElements.define("mv-tooltip",a)},5097:(e,t,r)=>{r.d(t,{Z:()=>V});var o=r(8081),a=r.n(o),n=r(3645),i=r.n(n),s=r(1667),l=r.n(s),c=new URL(r(3678),r.b),d=new URL(r(175),r.b),f=new URL(r(3572),r.b),h=new URL(r(7535),r.b),u=new URL(r(9637),r.b),b=new URL(r(1688),r.b),p=new URL(r(4062),r.b),m=new URL(r(6994),r.b),v=new URL(r(1895),r.b),g=new URL(r(6026),r.b),y=new URL(r(5410),r.b),k=new URL(r(5030),r.b),w=new URL(r(9292),r.b),x=new URL(r(8083),r.b),$=new URL(r(2184),r.b),E=i()(a()),P=l()(c),S=l()(c,{hash:"?#iefix"}),F=l()(d,{hash:"#Comfortaa-Light"}),z=l()(f),C=l()(h),R=l()(u),D=l()(b),j=l()(b,{hash:"?#iefix"}),B=l()(p,{hash:"#Comfortaa"}),_=l()(m),O=l()(v),I=l()(g),A=l()(y),q=l()(y,{hash:"?#iefix"}),L=l()(k,{hash:"#Comfortaa-Bold"}),U=l()(w),T=l()(x),M=l()($);E.push([e.id,"@font-face {\r\n  font-family: 'Comfortaa-Light';\r\n  src: url("+P+");\r\n  src: url("+S+") format('embedded-opentype'),\r\n       url("+F+") format('svg'),\r\n       url("+z+") format('truetype'),\r\n       url("+C+") format('woff'),\r\n       url("+R+") format('woff2');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Comfortaa-Regular';\r\n    src: url("+D+");\r\n    src: url("+j+") format('embedded-opentype');\r\n    src: url("+B+") format('svg'),\r\n    url("+_+") format('truetype'),\r\n    url("+O+") format('woff'),\r\n    url("+I+") format('woff2');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Comfortaa-Bold';\r\n    src: url("+A+");\r\n    src: url("+q+") format('embedded-opentype'),\r\n    url("+L+") format('svg'),\r\n    url("+U+") format('truetype'),\r\n    url("+T+") format('woff'),\r\n    url("+M+") format('woff2');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n",""]);const V=E},5728:(e,t,r)=>{r.d(t,{Z:()=>V});var o=r(8081),a=r.n(o),n=r(3645),i=r.n(n),s=r(1667),l=r.n(s),c=new URL(r(8249),r.b),d=new URL(r(2462),r.b),f=new URL(r(7746),r.b),h=new URL(r(1835),r.b),u=new URL(r(7283),r.b),b=new URL(r(417),r.b),p=new URL(r(9991),r.b),m=new URL(r(2193),r.b),v=new URL(r(1172),r.b),g=new URL(r(3323),r.b),y=new URL(r(8639),r.b),k=new URL(r(7824),r.b),w=new URL(r(3791),r.b),x=new URL(r(6086),r.b),$=new URL(r(6092),r.b),E=i()(a()),P=l()(c),S=l()(c,{hash:"?#iefix"}),F=l()(d),z=l()(f),C=l()(h),R=l()(u,{hash:"#fontawesome"}),D=l()(b),j=l()(b,{hash:"?#iefix"}),B=l()(p),_=l()(m),O=l()(v),I=l()(g,{hash:"#fontawesome"}),A=l()(y),q=l()(y,{hash:"?#iefix"}),L=l()(k),U=l()(w),T=l()(x),M=l()($,{hash:"#fontawesome"});E.push([e.id,"/* Brands */\r\n@font-face {\r\n  font-family: 'Font Awesome 5 Brands';\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-display: auto;\r\n  src: url("+P+");\r\n  src: url("+S+') format("embedded-opentype"),\r\n    url('+F+') format("woff2"),\r\n    url('+z+') format("woff"),\r\n    url('+C+') format("truetype"),\r\n    url('+R+") format(\"svg\");\r\n}\r\n\r\n/* Regular */\r\n@font-face {\r\n  font-family: 'Font Awesome 5 Free';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-display: auto;\r\n  src: url("+D+");\r\n  src: url("+j+') format("embedded-opentype"),\r\n    url('+B+') format("woff2"),\r\n    url('+_+') format("woff"),\r\n    url('+O+') format("truetype"),\r\n    url('+I+") format(\"svg\");\r\n}\r\n\r\n/* Solid */\r\n@font-face {\r\n  font-family: 'Font Awesome 5 Free';\r\n  font-style: normal;\r\n  font-weight: 900;\r\n  font-display: auto;\r\n  src: url("+A+");\r\n  src: url("+q+') format("embedded-opentype"),\r\n    url('+L+') format("woff2"),\r\n    url('+U+') format("woff"),\r\n    url('+T+') format("truetype"),\r\n    url('+M+') format("svg");\r\n}',""]);const V=E},9058:(e,t,r)=>{r.d(t,{Z:()=>x});var o=r(8081),a=r.n(o),n=r(3645),i=r.n(n),s=r(1667),l=r.n(s),c=new URL(r(770),r.b),d=new URL(r(7075),r.b),f=new URL(r(5717),r.b),h=new URL(r(7206),r.b),u=new URL(r(865),r.b),b=new URL(r(6670),r.b),p=i()(a()),m=l()(c),v=l()(d,{hash:"?#iefixw118d"}),g=l()(f),y=l()(h),k=l()(u),w=l()(b,{hash:"#Linearicons-Free"});p.push([e.id,'/*\r\nLinearicons Free v1.0.0 - https://linearicons.com/free\r\nBy Perxis - https://perxis.com\r\n(c) 2014-2015 Perxis.com\r\nLicense: https://linearicons.com/free/license\r\n*/\r\n@font-face {\r\n  font-family: "Linearicons-Free";\r\n  src: url('+m+");\r\n  src: url("+v+') format("embedded-opentype"),\r\n    url('+g+') format("woff2"),\r\n    url('+y+') format("woff"),\r\n    url('+k+') format("truetype"),\r\n    url('+w+') format("svg");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n.lnr {\r\n  font-family: Linearicons-Free;\r\n  speak: none;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.lnr-home:before {\r\n  content: "\\e800";\r\n}\r\n.lnr-apartment:before {\r\n  content: "\\e801";\r\n}\r\n.lnr-pencil:before {\r\n  content: "\\e802";\r\n}\r\n.lnr-magic-wand:before {\r\n  content: "\\e803";\r\n}\r\n.lnr-drop:before {\r\n  content: "\\e804";\r\n}\r\n.lnr-lighter:before {\r\n  content: "\\e805";\r\n}\r\n.lnr-poop:before {\r\n  content: "\\e806";\r\n}\r\n.lnr-sun:before {\r\n  content: "\\e807";\r\n}\r\n.lnr-moon:before {\r\n  content: "\\e808";\r\n}\r\n.lnr-cloud:before {\r\n  content: "\\e809";\r\n}\r\n.lnr-cloud-upload:before {\r\n  content: "\\e80a";\r\n}\r\n.lnr-cloud-download:before {\r\n  content: "\\e80b";\r\n}\r\n.lnr-cloud-sync:before {\r\n  content: "\\e80c";\r\n}\r\n.lnr-cloud-check:before {\r\n  content: "\\e80d";\r\n}\r\n.lnr-database:before {\r\n  content: "\\e80e";\r\n}\r\n.lnr-lock:before {\r\n  content: "\\e80f";\r\n}\r\n.lnr-cog:before {\r\n  content: "\\e810";\r\n}\r\n.lnr-trash:before {\r\n  content: "\\e811";\r\n}\r\n.lnr-dice:before {\r\n  content: "\\e812";\r\n}\r\n.lnr-heart:before {\r\n  content: "\\e813";\r\n}\r\n.lnr-star:before {\r\n  content: "\\e814";\r\n}\r\n.lnr-star-half:before {\r\n  content: "\\e815";\r\n}\r\n.lnr-star-empty:before {\r\n  content: "\\e816";\r\n}\r\n.lnr-flag:before {\r\n  content: "\\e817";\r\n}\r\n.lnr-envelope:before {\r\n  content: "\\e818";\r\n}\r\n.lnr-paperclip:before {\r\n  content: "\\e819";\r\n}\r\n.lnr-inbox:before {\r\n  content: "\\e81a";\r\n}\r\n.lnr-eye:before {\r\n  content: "\\e81b";\r\n}\r\n.lnr-printer:before {\r\n  content: "\\e81c";\r\n}\r\n.lnr-file-empty:before {\r\n  content: "\\e81d";\r\n}\r\n.lnr-file-add:before {\r\n  content: "\\e81e";\r\n}\r\n.lnr-enter:before {\r\n  content: "\\e81f";\r\n}\r\n.lnr-exit:before {\r\n  content: "\\e820";\r\n}\r\n.lnr-graduation-hat:before {\r\n  content: "\\e821";\r\n}\r\n.lnr-license:before {\r\n  content: "\\e822";\r\n}\r\n.lnr-music-note:before {\r\n  content: "\\e823";\r\n}\r\n.lnr-film-play:before {\r\n  content: "\\e824";\r\n}\r\n.lnr-camera-video:before {\r\n  content: "\\e825";\r\n}\r\n.lnr-camera:before {\r\n  content: "\\e826";\r\n}\r\n.lnr-picture:before {\r\n  content: "\\e827";\r\n}\r\n.lnr-book:before {\r\n  content: "\\e828";\r\n}\r\n.lnr-bookmark:before {\r\n  content: "\\e829";\r\n}\r\n.lnr-user:before {\r\n  content: "\\e82a";\r\n}\r\n.lnr-users:before {\r\n  content: "\\e82b";\r\n}\r\n.lnr-shirt:before {\r\n  content: "\\e82c";\r\n}\r\n.lnr-store:before {\r\n  content: "\\e82d";\r\n}\r\n.lnr-cart:before {\r\n  content: "\\e82e";\r\n}\r\n.lnr-tag:before {\r\n  content: "\\e82f";\r\n}\r\n.lnr-phone-handset:before {\r\n  content: "\\e830";\r\n}\r\n.lnr-phone:before {\r\n  content: "\\e831";\r\n}\r\n.lnr-pushpin:before {\r\n  content: "\\e832";\r\n}\r\n.lnr-map-marker:before {\r\n  content: "\\e833";\r\n}\r\n.lnr-map:before {\r\n  content: "\\e834";\r\n}\r\n.lnr-location:before {\r\n  content: "\\e835";\r\n}\r\n.lnr-calendar-full:before {\r\n  content: "\\e836";\r\n}\r\n.lnr-keyboard:before {\r\n  content: "\\e837";\r\n}\r\n.lnr-spell-check:before {\r\n  content: "\\e838";\r\n}\r\n.lnr-screen:before {\r\n  content: "\\e839";\r\n}\r\n.lnr-smartphone:before {\r\n  content: "\\e83a";\r\n}\r\n.lnr-tablet:before {\r\n  content: "\\e83b";\r\n}\r\n.lnr-laptop:before {\r\n  content: "\\e83c";\r\n}\r\n.lnr-laptop-phone:before {\r\n  content: "\\e83d";\r\n}\r\n.lnr-power-switch:before {\r\n  content: "\\e83e";\r\n}\r\n.lnr-bubble:before {\r\n  content: "\\e83f";\r\n}\r\n.lnr-heart-pulse:before {\r\n  content: "\\e840";\r\n}\r\n.lnr-construction:before {\r\n  content: "\\e841";\r\n}\r\n.lnr-pie-chart:before {\r\n  content: "\\e842";\r\n}\r\n.lnr-chart-bars:before {\r\n  content: "\\e843";\r\n}\r\n.lnr-gift:before {\r\n  content: "\\e844";\r\n}\r\n.lnr-diamond:before {\r\n  content: "\\e845";\r\n}\r\n.lnr-linearicons:before {\r\n  content: "\\e846";\r\n}\r\n.lnr-dinner:before {\r\n  content: "\\e847";\r\n}\r\n.lnr-coffee-cup:before {\r\n  content: "\\e848";\r\n}\r\n.lnr-leaf:before {\r\n  content: "\\e849";\r\n}\r\n.lnr-paw:before {\r\n  content: "\\e84a";\r\n}\r\n.lnr-rocket:before {\r\n  content: "\\e84b";\r\n}\r\n.lnr-briefcase:before {\r\n  content: "\\e84c";\r\n}\r\n.lnr-bus:before {\r\n  content: "\\e84d";\r\n}\r\n.lnr-car:before {\r\n  content: "\\e84e";\r\n}\r\n.lnr-train:before {\r\n  content: "\\e84f";\r\n}\r\n.lnr-bicycle:before {\r\n  content: "\\e850";\r\n}\r\n.lnr-wheelchair:before {\r\n  content: "\\e851";\r\n}\r\n.lnr-select:before {\r\n  content: "\\e852";\r\n}\r\n.lnr-earth:before {\r\n  content: "\\e853";\r\n}\r\n.lnr-smile:before {\r\n  content: "\\e854";\r\n}\r\n.lnr-sad:before {\r\n  content: "\\e855";\r\n}\r\n.lnr-neutral:before {\r\n  content: "\\e856";\r\n}\r\n.lnr-mustache:before {\r\n  content: "\\e857";\r\n}\r\n.lnr-alarm:before {\r\n  content: "\\e858";\r\n}\r\n.lnr-bullhorn:before {\r\n  content: "\\e859";\r\n}\r\n.lnr-volume-high:before {\r\n  content: "\\e85a";\r\n}\r\n.lnr-volume-medium:before {\r\n  content: "\\e85b";\r\n}\r\n.lnr-volume-low:before {\r\n  content: "\\e85c";\r\n}\r\n.lnr-volume:before {\r\n  content: "\\e85d";\r\n}\r\n.lnr-mic:before {\r\n  content: "\\e85e";\r\n}\r\n.lnr-hourglass:before {\r\n  content: "\\e85f";\r\n}\r\n.lnr-undo:before {\r\n  content: "\\e860";\r\n}\r\n.lnr-redo:before {\r\n  content: "\\e861";\r\n}\r\n.lnr-sync:before {\r\n  content: "\\e862";\r\n}\r\n.lnr-history:before {\r\n  content: "\\e863";\r\n}\r\n.lnr-clock:before {\r\n  content: "\\e864";\r\n}\r\n.lnr-download:before {\r\n  content: "\\e865";\r\n}\r\n.lnr-upload:before {\r\n  content: "\\e866";\r\n}\r\n.lnr-enter-down:before {\r\n  content: "\\e867";\r\n}\r\n.lnr-exit-up:before {\r\n  content: "\\e868";\r\n}\r\n.lnr-bug:before {\r\n  content: "\\e869";\r\n}\r\n.lnr-code:before {\r\n  content: "\\e86a";\r\n}\r\n.lnr-link:before {\r\n  content: "\\e86b";\r\n}\r\n.lnr-unlink:before {\r\n  content: "\\e86c";\r\n}\r\n.lnr-thumbs-up:before {\r\n  content: "\\e86d";\r\n}\r\n.lnr-thumbs-down:before {\r\n  content: "\\e86e";\r\n}\r\n.lnr-magnifier:before {\r\n  content: "\\e86f";\r\n}\r\n.lnr-cross:before {\r\n  content: "\\e870";\r\n}\r\n.lnr-menu:before {\r\n  content: "\\e871";\r\n}\r\n.lnr-list:before {\r\n  content: "\\e872";\r\n}\r\n.lnr-chevron-up:before {\r\n  content: "\\e873";\r\n}\r\n.lnr-chevron-down:before {\r\n  content: "\\e874";\r\n}\r\n.lnr-chevron-left:before {\r\n  content: "\\e875";\r\n}\r\n.lnr-chevron-right:before {\r\n  content: "\\e876";\r\n}\r\n.lnr-arrow-up:before {\r\n  content: "\\e877";\r\n}\r\n.lnr-arrow-down:before {\r\n  content: "\\e878";\r\n}\r\n.lnr-arrow-left:before {\r\n  content: "\\e879";\r\n}\r\n.lnr-arrow-right:before {\r\n  content: "\\e87a";\r\n}\r\n.lnr-move:before {\r\n  content: "\\e87b";\r\n}\r\n.lnr-warning:before {\r\n  content: "\\e87c";\r\n}\r\n.lnr-question-circle:before {\r\n  content: "\\e87d";\r\n}\r\n.lnr-menu-circle:before {\r\n  content: "\\e87e";\r\n}\r\n.lnr-checkmark-circle:before {\r\n  content: "\\e87f";\r\n}\r\n.lnr-cross-circle:before {\r\n  content: "\\e880";\r\n}\r\n.lnr-plus-circle:before {\r\n  content: "\\e881";\r\n}\r\n.lnr-circle-minus:before {\r\n  content: "\\e882";\r\n}\r\n.lnr-arrow-up-circle:before {\r\n  content: "\\e883";\r\n}\r\n.lnr-arrow-down-circle:before {\r\n  content: "\\e884";\r\n}\r\n.lnr-arrow-left-circle:before {\r\n  content: "\\e885";\r\n}\r\n.lnr-arrow-right-circle:before {\r\n  content: "\\e886";\r\n}\r\n.lnr-chevron-up-circle:before {\r\n  content: "\\e887";\r\n}\r\n.lnr-chevron-down-circle:before {\r\n  content: "\\e888";\r\n}\r\n.lnr-chevron-left-circle:before {\r\n  content: "\\e889";\r\n}\r\n.lnr-chevron-right-circle:before {\r\n  content: "\\e88a";\r\n}\r\n.lnr-crop:before {\r\n  content: "\\e88b";\r\n}\r\n.lnr-frame-expand:before {\r\n  content: "\\e88c";\r\n}\r\n.lnr-frame-contract:before {\r\n  content: "\\e88d";\r\n}\r\n.lnr-layers:before {\r\n  content: "\\e88e";\r\n}\r\n.lnr-funnel:before {\r\n  content: "\\e88f";\r\n}\r\n.lnr-text-format:before {\r\n  content: "\\e890";\r\n}\r\n.lnr-text-format-remove:before {\r\n  content: "\\e891";\r\n}\r\n.lnr-text-size:before {\r\n  content: "\\e892";\r\n}\r\n.lnr-bold:before {\r\n  content: "\\e893";\r\n}\r\n.lnr-italic:before {\r\n  content: "\\e894";\r\n}\r\n.lnr-underline:before {\r\n  content: "\\e895";\r\n}\r\n.lnr-strikethrough:before {\r\n  content: "\\e896";\r\n}\r\n.lnr-highlight:before {\r\n  content: "\\e897";\r\n}\r\n.lnr-text-align-left:before {\r\n  content: "\\e898";\r\n}\r\n.lnr-text-align-center:before {\r\n  content: "\\e899";\r\n}\r\n.lnr-text-align-right:before {\r\n  content: "\\e89a";\r\n}\r\n.lnr-text-align-justify:before {\r\n  content: "\\e89b";\r\n}\r\n.lnr-line-spacing:before {\r\n  content: "\\e89c";\r\n}\r\n.lnr-indent-increase:before {\r\n  content: "\\e89d";\r\n}\r\n.lnr-indent-decrease:before {\r\n  content: "\\e89e";\r\n}\r\n.lnr-pilcrow:before {\r\n  content: "\\e89f";\r\n}\r\n.lnr-direction-ltr:before {\r\n  content: "\\e8a0";\r\n}\r\n.lnr-direction-rtl:before {\r\n  content: "\\e8a1";\r\n}\r\n.lnr-page-break:before {\r\n  content: "\\e8a2";\r\n}\r\n.lnr-sort-alpha-asc:before {\r\n  content: "\\e8a3";\r\n}\r\n.lnr-sort-amount-asc:before {\r\n  content: "\\e8a4";\r\n}\r\n.lnr-hand:before {\r\n  content: "\\e8a5";\r\n}\r\n.lnr-pointer-up:before {\r\n  content: "\\e8a6";\r\n}\r\n.lnr-pointer-right:before {\r\n  content: "\\e8a7";\r\n}\r\n.lnr-pointer-down:before {\r\n  content: "\\e8a8";\r\n}\r\n.lnr-pointer-left:before {\r\n  content: "\\e8a9";\r\n}\r\n',""]);const x=p},5319:(e,t,r)=>{r.d(t,{Z:()=>Ye});var o=r(8081),a=r.n(o),n=r(3645),i=r.n(n),s=r(1667),l=r.n(s),c=new URL(r(8708),r.b),d=new URL(r(6038),r.b),f=new URL(r(7378),r.b),h=new URL(r(9865),r.b),u=new URL(r(8364),r.b),b=new URL(r(4920),r.b),p=new URL(r(9190),r.b),m=new URL(r(7907),r.b),v=new URL(r(5120),r.b),g=new URL(r(9050),r.b),y=new URL(r(6693),r.b),k=new URL(r(9724),r.b),w=new URL(r(7411),r.b),x=new URL(r(3208),r.b),$=new URL(r(4958),r.b),E=new URL(r(2579),r.b),P=new URL(r(1879),r.b),S=new URL(r(804),r.b),F=new URL(r(2158),r.b),z=new URL(r(6340),r.b),C=new URL(r(9284),r.b),R=new URL(r(1900),r.b),D=new URL(r(269),r.b),j=new URL(r(3028),r.b),B=new URL(r(4375),r.b),_=new URL(r(7021),r.b),O=new URL(r(6997),r.b),I=new URL(r(4173),r.b),A=new URL(r(3866),r.b),q=new URL(r(2219),r.b),L=new URL(r(8885),r.b),U=new URL(r(9103),r.b),T=new URL(r(8276),r.b),M=new URL(r(9488),r.b),V=new URL(r(4636),r.b),Y=new URL(r(9733),r.b),N=new URL(r(9036),r.b),K=new URL(r(2941),r.b),Q=new URL(r(5516),r.b),Z=new URL(r(9876),r.b),W=i()(a()),X=l()(c),H=l()(c,{hash:"?#iefix"}),G=l()(d,{hash:"#MuseoSans-100"}),J=l()(f),ee=l()(h),te=l()(u),re=l()(b),oe=l()(b,{hash:"?#iefix"}),ae=l()(p,{hash:"#MuseoSans-100Italic"}),ne=l()(m),ie=l()(v),se=l()(g),le=l()(y),ce=l()(y,{hash:"?#iefix"}),de=l()(k,{hash:"#MuseoSans-300"}),fe=l()(w),he=l()(x),ue=l()($),be=l()(E),pe=l()(E,{hash:"?#iefix"}),me=l()(P,{hash:"#MuseoSans-300Italic"}),ve=l()(S),ge=l()(F),ye=l()(z),ke=l()(C),we=l()(C,{hash:"?#iefix"}),xe=l()(R,{hash:"#MuseoSans-500"}),$e=l()(D),Ee=l()(j),Pe=l()(B),Se=l()(_),Fe=l()(_,{hash:"?#iefix"}),ze=l()(O,{hash:"#MuseoSans-500Italic"}),Ce=l()(I),Re=l()(A),De=l()(q),je=l()(L),Be=l()(L,{hash:"?#iefix"}),_e=l()(U,{hash:"#MuseoSans-700"}),Oe=l()(T),Ie=l()(M),Ae=l()(V),qe=l()(Y),Le=l()(Y,{hash:"?#iefix"}),Ue=l()(N,{hash:"#MuseoSans-700Italic"}),Te=l()(K),Me=l()(Q),Ve=l()(Z);W.push([e.id,'@font-face {\r\n  font-family: "MuseoSans";\r\n  src: url('+X+");\r\n  src: url("+H+') format("embedded-opentype"),\r\n    url('+G+') format("svg"),\r\n    url('+J+') format("truetype"),\r\n    url('+ee+') format("woff"),\r\n    url('+te+') format("woff2");\r\n  font-weight: 100;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: "MuseoSans";\r\n  src: url('+re+");\r\n  src: url("+oe+') format("embedded-opentype"),\r\n    url('+ae+') format("svg"),\r\n    url('+ne+') format("truetype"),\r\n    url('+ie+') format("woff"),\r\n    url('+se+') format("woff2");\r\n  font-weight: 100;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: "MuseoSans";\r\n  src: url('+le+");\r\n  src: url("+ce+') format("embedded-opentype"),\r\n    url('+de+') format("svg"),\r\n    url('+fe+') format("truetype"),\r\n    url('+he+') format("woff"),\r\n    url('+ue+') format("woff2");\r\n  font-weight: 300 400;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: "MuseoSans";\r\n  src: url('+be+");\r\n  src: url("+pe+') format("embedded-opentype"),\r\n    url('+me+') format("svg"),\r\n    url('+ve+') format("truetype"),\r\n    url('+ge+') format("woff"),\r\n    url('+ye+') format("woff2");\r\n  font-weight: 300 400;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: "MuseoSans";\r\n  src: url('+ke+");\r\n  src: url("+we+') format("embedded-opentype"),\r\n    url('+xe+') format("svg"),\r\n    url('+$e+') format("truetype"),\r\n    url('+Ee+') format("woff"),\r\n    url('+Pe+') format("woff2");\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: "MuseoSans";\r\n  src: url('+Se+");\r\n  src: url("+Fe+') format("embedded-opentype"),\r\n    url('+ze+') format("svg"),\r\n    url('+Ce+') format("truetype"),\r\n    url('+Re+') format("woff"),\r\n    url('+De+') format("woff2");\r\n  font-weight: 500;\r\n  font-style: italic;\r\n}\r\n\r\n@font-face {\r\n  font-family: "MuseoSans";\r\n  src: url('+je+");\r\n  src: url("+Be+') format("embedded-opentype"),\r\n    url('+_e+') format("svg"),\r\n    url('+Oe+') format("truetype"),\r\n    url('+Ie+') format("woff"),\r\n    url('+Ae+') format("woff2");\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: "MuseoSans";\r\n  src: url('+qe+");\r\n  src: url("+Le+') format("embedded-opentype"),\r\n    url('+Ue+') format("svg"),\r\n    url('+Te+') format("truetype"),\r\n    url('+Me+') format("woff"),\r\n    url('+Ve+') format("woff2");\r\n  font-weight: 700;\r\n  font-style: italic;\r\n}\r\n',""]);const Ye=W},7732:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(8081),a=r.n(o),n=r(3645),i=r.n(n)()(a());i.push([e.id,'/* cyrillic-ext */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold Italic"), local("SourceSansPro-BoldItalic"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdh18S0xR41YDw.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,\r\n    U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold Italic"), local("SourceSansPro-BoldItalic"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdo18S0xR41YDw.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold Italic"), local("SourceSansPro-BoldItalic"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdg18S0xR41YDw.woff2)\r\n      format("woff2");\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold Italic"), local("SourceSansPro-BoldItalic"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdv18S0xR41YDw.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold Italic"), local("SourceSansPro-BoldItalic"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdj18S0xR41YDw.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold Italic"), local("SourceSansPro-BoldItalic"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdi18S0xR41YDw.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,\r\n    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold Italic"), local("SourceSansPro-BoldItalic"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSds18S0xR41.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\r\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\r\n    U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lujVj9_mf.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,\r\n    U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qPK7lujVj9_mf.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNK7lujVj9_mf.woff2)\r\n      format("woff2");\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qO67lujVj9_mf.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qN67lujVj9_mf.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lujVj9_mf.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,\r\n    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\r\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\r\n    U+FEFF, U+FFFD;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmhdu3cOWxy40.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,\r\n    U+FE2E-FE2F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwkxdu3cOWxy40.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmxdu3cOWxy40.woff2)\r\n      format("woff2");\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlBdu3cOWxy40.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmBdu3cOWxy40.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmRdu3cOWxy40.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,\r\n    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: "Source Sans Pro";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local("Source Sans Pro Bold"), local("SourceSansPro-Bold"),\r\n    url(https://fonts.gstatic.com/s/sourcesanspro/v13/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu3cOWxw.woff2)\r\n      format("woff2");\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\r\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\r\n    U+FEFF, U+FFFD;\r\n}\r\n',""]);const s=i},4714:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(8081),a=r.n(o),n=r(3645),i=r.n(n)()(a());i.push([e.id,'/* normalization styles */\r\n*,\r\n*:before,\r\n*:after {\r\n     margin: 0;\r\n     padding: 0;\r\n     box-sizing: border-box;\r\n}\r\n\r\n*:before,\r\n*:after {\r\n     content: \'\';\r\n     display: block;\r\n     position: absolute;\r\n}\r\n\r\nhtml,\r\nbody {\r\n     margin: 0;\r\n     padding: 0;\r\n     width: 100%;\r\n     height: 100%;\r\n}\r\n\r\n/* theme styles */\r\nhtml {\r\n     /* Primary */\r\n     --p-color: #344955;\r\n     --pd-color: #232F34;\r\n     --pdd-color: rgb(22, 29, 32);\r\n     --pl-color: #4A6572;\r\n     --pll-color: rgb(110, 140, 155);\r\n     --on-p-color: #e8eef1;\r\n     --on-pd-color: rgb(202, 213, 218);\r\n     --on-pdd-color: rgb(202, 213, 218);\r\n     --on-pl-color: rgb(187, 187, 187);\r\n     --on-pll-color: rgb(255, 255, 255);\r\n\r\n     /* Accent */\r\n     --a-color: #F9AA33;\r\n     --ad-color: #E89313;\r\n     --add-color: rgb(194, 123, 18);\r\n     --al-color: #FFCA55;\r\n     --all-color : rgb(253, 215, 133);\r\n     --on-a-color: rgb(32, 31, 30);\r\n     --on-ad-color: rgb(2, 2, 2);\r\n     --on-add-color: rgb(0, 0, 0);\r\n     --on-al-color: rgb(37, 34, 27);\r\n     --on-al-color: rgb(58, 54, 47);\r\n\r\n     /* Semantic */\r\n     --success-color:rgb(92, 216, 133);\r\n     --warning-color:rgb(238, 133, 91);\r\n     --error-color:rgb(250, 52, 26);\r\n     --on-success-color:rgb(28, 29, 28);\r\n     --on-warning-color:rgb(53, 48, 46);\r\n     --on-error-color:rgb(248, 240, 239);\r\n\r\n     /* Neutral */\r\n     --n-color:rgb(105, 109, 110);\r\n     --nd-color:rgb(71, 74, 75);\r\n     --nl-color:rgb(173, 179, 180);\r\n\r\n     /* Background */\r\n     --b-color:rgb(255, 255, 255);\r\n     --s-color:rgb(248, 240, 239);\r\n\r\n\r\n     /* Data */\r\n     --cat-1-color:#2F8DFA;\r\n     --cat-2-color:#1FD0BF;\r\n     --cat-3-color:#EB648B;\r\n     --cat-4-color:#F8C753;\r\n     --cat-5-color:#EB7E30;\r\n     --cat-6-color:#A93790;\r\n     --cat-7-color:#049587;\r\n     --cat-8-color:#1553B6;\r\n     --cat-9-color:#55008C;\r\n     --cat-10-color:#8B572A;\r\n\r\n     --seq-1-color:#DCEDC8;\r\n     --seq-2-color:#B2DDCC;\r\n     --seq-3-color:#75C6D1;\r\n     --seq-4-color:#42B3D5;\r\n     --seq-5-color:#3993C2;\r\n     --seq-6-color:#3073AE;\r\n     --seq-7-color:#27539B;\r\n     --seq-8-color:#1E3388;\r\n     --seq-9-color:#171E6D;\r\n     --seq-10-color:#10154C;\r\n\r\n     --pol-1-color:#D5001A;\r\n     --pol-2-color:#FF6A00;\r\n     --pol-3-color:#B30949;\r\n     --pol-4-color:#FFD972;\r\n     --pol-5-color:#FFF5DA;\r\n     --pol-6-color:#74135B;\r\n     --pol-7-color:#B2DDCC;\r\n     --pol-8-color:#42B3D5;\r\n     --pol-9-color:#27539B;\r\n     --pol-10-color:#182276;\r\n\r\n    /* Typography */\r\n    /* Font families */\r\n    --font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\r\n    /* Font sizes */\r\n    --font-size-xxs: .75rem;\r\n    --font-size-xs: .8125rem;\r\n    --font-size-s: .875rem;\r\n    --font-size-m: 1rem;\r\n    --font-size-l: 1.125rem;\r\n    --font-size-xl: 1.375rem;\r\n    --font-size-xxl: 1.75rem;\r\n    --font-size-xxxl: 2.5rem;\r\n    /* Line heights */\r\n    --line-height-xs: 1.25;\r\n    --line-height-s: 1.375;\r\n    --line-height-m: 1.625;\r\n\r\n    /* light */\r\n    /* background */\r\n    --light-1-background: #FFFFFF;\r\n    --light-2-background: #F5F6FA;\r\n    --light-3-background: #EDEDED;\r\n    --light-4-background: #F0FFF0;\r\n    --light-5-background: #B0B3B6;\r\n    --light-6-background: #F3F3F3;\r\n    --light-7-background: #CCCCCC;\r\n    --light-8-background: #007ADF;\r\n    --light-9-background: #EAEBF0;\r\n    --light-10-background: #1E87F0;\r\n    --light-11-background: #1D9BC9;\r\n    --light-12-background: #0792C5;\r\n    /* text */\r\n    --light-1-text: #FFFFFF;\r\n    --light-2-text: #00D8FF;\r\n    --light-3-text: #999999;\r\n    /* border */\r\n    --light-1-border: #99D2E7;\r\n    --light-2-border: #1D9BC9;\r\n    --light-3-border: #FFFFFF;\r\n\r\n    /* dark */\r\n    /* background */\r\n    --dark-1-background: #4E686D;\r\n    --dark-2-background: #23404C;\r\n    --dark-3-background: #373E48;\r\n    --dark-4-background: #3F4753;\r\n    --dark-5-background: #344955;\r\n    --dark-6-background: #353F4D;\r\n    --dark-7-background: #898C91;\r\n    --dark-8-background: #39404B;\r\n    --dark-9-background: #1E3843;\r\n    --dark-10-background: #363F4C;\r\n    --dark-11-background: #656C75;\r\n    /* text */\r\n    --dark-1-text: #80828C;\r\n    --dark-2-text: #000000;\r\n    --dark-3-text: #B0B3B6;\r\n    --dark-4-text: #363F4C;\r\n    --dark-5-text: #4E686D;\r\n    --dark-6-text: #4F4F4F;\r\n    --dark-7-text: #B8CCE0;\r\n    --dark-8-text: #818181;\r\n    --dark-9-text: #C8C6C6;\r\n    /* border */\r\n    --dark-1-border: #4E686D;\r\n\r\n    /* mv-header */\r\n    --mv-header-height: 66px;\r\n    --mv-header-shadow: 0 2px 15px 0 rgba(0,0,0,0.2);\r\n    --mv-header-margin-left: 0;\r\n    --mv-header-margin-right: 0;\r\n    --mv-header-margin-bottom: 1px;\r\n    --mv-header-item-padding: 10px;\r\n    --mv-header-light-background: var(--light-6-background);\r\n    --mv-header-item-light-color: var(--dark-3-text);\r\n    --mv-header-dark-background: var(--dark-3-background);\r\n    --mv-header-item-dark-color: var(--dark-3-text);\r\n\r\n    /* mv-footer */\r\n    --mv-footer-height: 40px;\r\n    --mv-footer-shadow: 0 5px 10px 0 rgba(7,17,26,0.2);\r\n    --mv-footer-margin-top: 1px;\r\n    --mv-footer-margin-left: 0;\r\n    --mv-footer-margin-right: 0;\r\n    --mv-footer-item-padding: 10px;\r\n    --mv-footer-light-background: var(--light-6-background);\r\n    --mv-footer-item-light-color: var(--dark-3-text);\r\n    --mv-footer-dark-background: var(--dark-3-background);\r\n    --mv-footer-item-dark-color: var(--dark-3-text);\r\n\r\n    /* mv-menu */\r\n    --mv-menu-light-background: var(--light-1-background);\r\n    --mv-menu-hover-light-background: var(--light-4-background);\r\n    --mv-dropdown-level-width: 265px;\r\n    --mv-dropdown-level-height: 95px;\r\n    --mv-dropdown-sublevel-width: 198px;\r\n    --mv-dropdown-sublevel-height: 41px;\r\n    --mv-dropdown-sublevel-position-top: 100px;\r\n    --mv-dropdown-sublevel-position-left: 0px;\r\n    --mv-menu-dropdown-dark-background: var(--dark-4-background);\r\n    --mv-menu-dropdown-hover-dark-background: var(--dark-6-background);\r\n    --mv-menu-dropdown-light-background: var(--light-1-background);\r\n    --mv-menu-dropdown-hover-light-background: var(--light-4-background);\r\n    --mv-notification-sublevel-height: 400px;\r\n    --mv-notification-sublevel-width: 756px;\r\n    --mv-notification-level-size: 48px;\r\n    --mv-notification-sublevel-position-top: 80px;\r\n    --mv-notification-sublevel-position-left: -355px;\r\n    --mv-menu-notification-dark-background: var(--dark-4-background);\r\n    --mv-menu-notification-button-dark-background: var(--dark-4-background);\r\n    --mv-menu-notification-button-hover-dark-background: var(--dark-6-background);\r\n    --mv-menu-notification-menu-dark-background: var(--dark-4-background);\r\n    --mv-menu-notification-light-background: var(--light-1-background);\r\n    --mv-menu-notification-button-light-background: var(--light-1-background);\r\n    --mv-menu-notification-button-hover-light-background: var(--light-4-background);\r\n    --mv-menu-notification-menu-light-background: var(--light-1-background);\r\n\r\n    /* mv-menu-panel */\r\n    --mv-menu-panel-width: 330px;\r\n    --mv-menu-panel-header-height: 66px;\r\n    --mv-menu-panel-item-height: 40px;\r\n    --mv-menu-panel-item-padding: 20px;\r\n    --mv-menu-panel-shadow: 0 0 16px 1px rgba(151, 156, 163, 0.35);\r\n    --mv-menu-panel-header-dark-color: var(--light-1-text);\r\n    --mv-menu-panel-header-dark-background: linear-gradient(45deg, rgba(232, 179, 56, 1) 0%, rgba(255, 150, 0, 1) 100%);\r\n    --mv-menu-panel-item-dark-color: var(--light-1-text);\r\n    --mv-menu-panel-dark-background: linear-gradient(180deg, rgba(63, 71, 83, 1) 0%, rgba(26, 30, 35, 1) 100%);\r\n    --mv-menu-panel-selected-dark-highlight: rgba(26, 30, 35, 0.6);\r\n    --mv-menu-panel-disabled-dark-color: var(--dark-7-background);\r\n    --mv-menu-panel-hover-dark-color: var(--light-2-text);\r\n    --mv-menu-panel-hover-dark-background: rgba(26, 30, 35, 0.4);\r\n    --mv-menu-panel-header-light-color: var(--dark-1-text);\r\n    --mv-menu-panel-header-light-background: var(--light-4-background);\r\n    --mv-menu-panel-item-light-color: var(--light-1-text);\r\n    --mv-menu-panel-light-background: var(--light-7-background);\r\n    --mv-menu-panel-selected-light-highlight: var(--pl-color);\r\n    --mv-menu-panel-disabled-light-color: #898C91;\r\n    --mv-menu-panel-hover-light-color: var(--light-2-text);\r\n    --mv-menu-panel-hover-light-background: rgba(26, 30, 35, 0.4);\r\n\r\n    /* mv-button */\r\n    --mv-button-circle-button-size: 55px;\r\n    --mv-button-margin: 5px;\r\n    --mv-button-padding: 16px 59px;\r\n    --mv-button-min-width: 120px;\r\n    --mv-button-rounded-radius: 50px;\r\n    --mv-button-dark-background: var(--dark-1-background);\r\n    --mv-button-hover-dark-background: var(--dark-2-background);\r\n\r\n    /* mv-table */\r\n    --table-row-height: 66px;\r\n    --header-font-family: Arial;\r\n    --mv-table-head-light-background: var(--light-2-background);\r\n    --mv-table-body-light-background: var(--light-1-background);\r\n    --mv-table-hover-light-background: var(--light-3-background);\r\n    --mv-table-head-dark-background: var(--dark-2-background);\r\n    --mv-table-body-dark-background: var(--dark-3-background);\r\n    --mv-table-hover-dark-background: var(--dark-1-background);\r\n\r\n    /* mv-pagination */\r\n    --pagination-group-top-margin: 10px;\r\n    --pagination-button-font-weight: normal;\r\n    --pagination-button-font-weight-large: bold;\r\n    --mv-pagination-light-background: var(--light-9-background);\r\n    --mv-pagination-dark-background: #3999C1;\r\n    --mv-pagination-selected-light-background: #008FC3;\r\n    --mv-pagination-selected-dark-background: var(--dark-2-background);\r\n    --mv-pagination-light-color: var(--dark-1-text);\r\n    --mv-pagination-dark-color: var(--light-1-text);\r\n    --mv-pagination-hover-light-background: var(--light-1-background);\r\n    --mv-pagination-hover-dark-background: #007FAD;\r\n\r\n    /* mv-toggle */\r\n    --mv-toggle-label-font-family: var(--font-family);\r\n    --mv-toggle-custom-size: 100px;\r\n    --mv-toggle-not-checked-light-background: var(--light-7-background);\r\n    --mv-toggle-checked-light-background: #2196F3;\r\n    --mv-toggle-slider-light-background: var(--light-1-background);\r\n    --mv-toggle-not-checked-dark-background: var(--light-7-background);\r\n    --mv-toggle-checked-dark-background: #48c9c4;\r\n    --mv-toggle-slider-dark-background: var(--dark-4-background);\r\n\r\n    /* mv-tooltip */\r\n    --mv-tooltip-font-family: var(--font-family);\r\n    --mv-tooltip-height: 29px;\r\n    --mv-tooltip-border-radius: 5px;\r\n    --mv-tooltip-background: var(--dark-10-background);\r\n    --mv-tooltip-color: var(--light-1-text);\r\n    --mv-tooltip-light-background: var(--light-1-background);\r\n    --mv-tooltip-light-color: var(--dark-4-text);\r\n\r\n    /* mv-tab */\r\n    --mv-tab-header-height: 71px;\r\n    --mv-tab-header-border-radius: 5px;\r\n    --mv-tab-header-dark-background: #DFE7EE;\r\n    --mv-tab-header-active-dark-background: radial-gradient(circle , #4E686D 0%, #00ec76 180%);\r\n    --mv-tab-header-first-active-dark-background: linear-gradient(to right, #4E686D 0%, #00ec76 180%);\r\n    --mv-tab-header-last-active-dark-background: linear-gradient(to left, #4E686D 0%, #00ec76 180%);\r\n    --mv-tab-header-border-dark-color: #99D2E7;\r\n    --mv-tab-header-dark-color: #67AFD3;\r\n    --mv-tab-header-active-dark-color: #FFFFFF;\r\n    --mv-tab-header-light-background: #DFE7EE;\r\n    --mv-tab-header-active-light-background: radial-gradient(circle , var(--light-8-background) 0%, #00ec76 180%);\r\n    --mv-tab-header-first-active-light-background: linear-gradient(to right, var(--light-8-background) 0%, #00ec76 180%);\r\n    --mv-tab-header-last-active-light-background: linear-gradient(to left, var(--light-8-background) 0%, #00ec76 180%);\r\n    --mv-tab-header-border-light-color: var(--light-1-border);\r\n    --mv-tab-header-light-color: #67AFD3;\r\n    --mv-tab-header-active-light-color: var(--light-1-background);\r\n    --mv-tab-rounded-height: 51px;\r\n    --mv-tab-rounded-border-radius: 25px;\r\n    --mv-tab-rounded-dark-background: #FFFFFF;\r\n    --mv-tab-rounded-active-dark-background: var(--dark-1-background);\r\n    --mv-tab-rounded-dark-color: var(--dark-1-background);\r\n    --mv-tab-rounded-active-dark-color: var(--light-1-text);\r\n    --mv-tab-rounded-light-background: var(--light-1-background);\r\n    --mv-tab-rounded-active-light-background: #007ADF;\r\n    --mv-tab-rounded-light-color: var(--dark-5-text);\r\n    --mv-tab-rounded-active-light-color: var(--light-1-background);\r\n    --mv-tab-icon-size: 29px;\r\n    --mv-tab-icon-border-radius: 5px;\r\n    --mv-tab-icon-dark-background: #FFFFFF;\r\n    --mv-tab-icon-active-dark-background: var(--dark-1-background);\r\n    --mv-tab-icon-dark-color: var(--dark-1-background);\r\n    --mv-tab-icon-active-dark-color: var(--light-1-text);\r\n    --mv-tab-icon-light-background: var(--light-1-background);\r\n    --mv-tab-icon-active-light-background: var(--light-8-background);\r\n    --mv-tab-icon-light-color: var(--light-8-background);\r\n    --mv-tab-icon-active-light-color: var(--light-1-background);\r\n\r\n    /* mv-select */\r\n    --mv-select-font-family: var(--font-family);\r\n    --mv-select-color: #777;\r\n    --mv-select-width: 200px;\r\n    --mv-select-input-padding: 4px;\r\n    --mv-select-border: 1px solid #4e686d;\r\n    --mv-select-border-radius: 5px;\r\n    --mv-select-dropdown-icon-size: calc(var(--font-size-m) * 0.75);\r\n    --mv-select-dropdown-icon-button-color: var(--mv-select-color);\r\n    --mv-select-option-color: var(--mv-select-color);\r\n    --mv-select-option-background: #FFFFFF;\r\n    --mv-select-option-hover-background: #1D9BC9;\r\n    --mv-select-option-hover-color: #FFFFFF;\r\n\r\n    /* mv-dialog */\r\n    --mv-dialog-max-height: 528px;\r\n    --mv-dialog-width: 756px;\r\n    --mv-dialog-border-radius: 5px;\r\n    --mv-dialog-background-color: var(--light-1-background);\r\n    --mv-dialog-dark-background: var(--dark-3-background);\r\n    --mv-dialog-color-close-icon: #48C5B9;\r\n    --mv-dialog-color: var(--dark-1-text);\r\n    --mv-dialog-dark-color: var(--light-1-text);\r\n\r\n    /* mv-breadcrumbs */\r\n    --mv-breadcrumbs-link-decoration: underline;\r\n    --mv-breadcrumbs-separator-margin: 0 10px;\r\n    --mv-breadcrumbs-color: var(--dark-6-text);\r\n    --mv-breadcrumbs-hover-color: var(--dark-7-text);\r\n    --mv-breadcrumbs-dark-color: var(--light-1-text);\r\n    --mv-breadcrumbs-hover-dark-color: var(--dark-7-text);\r\n\r\n    /* mv-container */\r\n    --mv-container-min-width: 300px;\r\n    --mv-container-max-width: 500px;\r\n    --mv-container-margin: 20px auto;\r\n    --mv-container-padding: 20px;\r\n    --mv-container-border: 1px solid #BFBFBF;\r\n    --mv-container-background: #FFFFFF;\r\n    --mv-container-shadow: 0 0 13px 0 rgba(42, 42, 42, 0.65);\r\n\r\n    /* mv-calendar */\r\n    --mv-calendar-select-max-width: 200px;\r\n    --mv-calendar-input-width: 100%;\r\n    --mv-calendar-input-border-input: solid 1px var(--dark-1-border);\r\n    --mv-calendar-hover-background-color: #666;\r\n    --mv-calendar-active-background-color: linear-gradient(to right, #007ADF 0%, #00ECBC 180%);\r\n    --mv-calendar-input-light-background: var(--light-1-background);\r\n    --mv-calendar-input-light-color: var(--dark-2-text);\r\n    --mv-calendar-input-dark-background: var(--dark-4-background);\r\n    --mv-calendar-input-dark-color: var(--light-1-text);\r\n    --mv-calendar-single-light-background: var(--light-1-background);\r\n    --mv-calendar-single-button-light-background: var(--light-5-background);\r\n    --mv-calendar-single-light-color: var(--dark-2-text);\r\n    --mv-calendar-single-dark-background: var(--dark-4-background);\r\n    --mv-calendar-single-button-dark-background: var(--dark-8-background);\r\n    --mv-calendar-single-dark-color: var(--light-1-text);\r\n\r\n    /* mv-radio */\r\n    --mv-radio-padding-left: 35px;\r\n    --mv-radio-margin-bottom: 12px;\r\n    --mv-radio-radio-height: 18px;\r\n    --mv-radio-radio-width: 18px;\r\n    --mv-radio-light-background-color: var(--light-1-background);\r\n    --mv-radio-light-border: 1px solid var(--dark-1-border);\r\n    --mv-radio-light-color: var(--dark-8-text);\r\n    --mv-radio-light-hover-background-color: var(--light-1-background);\r\n    --mv-radio-light-hover-border: 1px solid var(--light-2-border);\r\n    --mv-radio-light-checked-background-color: var(--light-1-background);\r\n    --mv-radio-light-checkmark-background-color: var(--light-11-background);\r\n    --mv-radio-dark-color: var(--light-1-text);\r\n    --mv-radio-dark-background-color: var(--dark-4-background);\r\n    --mv-radio-dark-border: 1px solid var(--light-3-border);\r\n    --mv-radio-dark-hover-background-color: var(--dark-11-background);\r\n    --mv-radio-dark-hover-border: 1px solid var(--light-3-border);\r\n    --mv-radio-dark-checked-background-color: var(--dark-4-background);\r\n    --mv-radio-dark-checkmark-background-color: var(--light-1-background);\r\n\r\n    /* mv-toast */\r\n    --mv-toast-dark-background: var(--dark-1-background);\r\n    --mv-toast-hover-dark-color: var(--dark-2-background);\r\n\r\n    /* mv-dropdown */\r\n    --mv-dropdown-trigger-height: 26px;\r\n    --mv-dropdown-trigger-padding: 5px;\r\n    --mv-dropdown-min-width: 188px;\r\n    --mv-dropdown-max-width: 300px;\r\n    --mv-dropdown-border: 1px solid var(--dark-9-background);\r\n    --mv-dropdown-background: var(--dark-4-background);\r\n    --mv-dropdown-color: var(--light-3-text);\r\n    --mv-dropdown-header-color: var(--light-1-text);\r\n    --mv-dropdown-light-border: 1px solid var(--dark-1-border);\r\n    --mv-dropdown-light-background: var(--light-1-background);\r\n    --mv-dropdown-light-color: var(--dark-1-text);\r\n    --mv-dropdown-header-light-color: var(--dark-2-text);\r\n\r\n    /* mv-tags */\r\n    --mv-tags-color: var(--dark-8-text);\r\n    --mv-tags-min-width: auto;\r\n    --mv-tags-max-width: auto;\r\n    --mv-tags-margin: 0;\r\n    --mv-tags-border: 1px solid var(--dark-1-border);\r\n    --mv-tags-active-border: 1px solid var(--light-2-border);\r\n    --mv-tags-placeholder-color: var(--dark-9-text);\r\n    --mv-tags-active-box-shadow: inset 0 0 9px 0 rgba(29, 155, 201, 0.3);\r\n    --mv-tags-error-border: 1px solid rgba(247, 112, 98, 1);\r\n    --mv-tags-error-box-shadow: inset 0 0 9px 0 rgba(229, 47, 47, 0.3);\r\n    --mv-tags-light-background: var(--light-10-background);\r\n    --mv-tags-dark-background: var(--dark-3-background);\r\n\r\n    /* mv-textarea */\r\n    --mv-textarea-color: var(--dark-8-text);\r\n    --mv-textarea-width: 620px;\r\n    --mv-textarea-height: 153px;\r\n    --mv-textarea-margin: 0;\r\n    --mv-textarea-border: 1px solid var(--dark-1-border);\r\n    --mv-textarea-active-border: 1px solid var(--light-2-border);\r\n    --mv-textarea-placeholder-color: var(--dark-1-text);\r\n    --mv-textarea-active-box-shadow: inset 0 0 9px 0 rgba(29, 155, 201, 0.3);\r\n    --mv-textarea-error-border: 1px solid rgba(247, 112, 98, 1);\r\n    --mv-textarea-error-box-shadow: inset 0 0 9px 0 rgba(229, 47, 47, 0.3);\r\n\r\n    /* mv-slider */\r\n    --mv-slider-track-light-background: linear-gradient(to left, #F01F14, #00F2FE);\r\n    --mv-slider-light-color: var(--dark-8-text);\r\n    --mv-slider-thumb-light-background: var(--light-1-background);\r\n    --mv-slider-tooltip-dark-border: #00F2FE;\r\n\r\n    /* mv-input */\r\n    --mv-input-color: var(--dark-8-text);\r\n    --mv-input-min-width: auto;\r\n    --mv-input-max-width: auto;\r\n    --mv-input-margin: 0;\r\n    --mv-input-border: 1px solid var(--dark-1-border);\r\n    --mv-input-active-border: 1px solid var(--light-2-border);\r\n    --mv-input-placeholder-color: var(--dark-9-text);\r\n    --mv-input-active-box-shadow: inset 0 0 9px 0 rgba(29, 155, 201, 0.3);\r\n    --mv-input-error-border: 1px solid rgba(247, 112, 98, 1);\r\n    --mv-input-error-box-shadow: inset 0 0 9px 0 rgba(229, 47, 47, 0.3);\r\n\r\n    /* mv-checkbox */\r\n    --mv-checkbox-border-color: var(--dark-1-border);\r\n    --mv-checkbox-label-color: var(--dark-8-text);\r\n    --mv-checkbox-checked-background: var(--light-12-background);\r\n    --mv-checkbox-hover-border-color: var(--light-2-border);\r\n    --mv-checkbox-border-dark-color: var(--light-3-border);\r\n    --mv-checkbox-label-dark-color: var(--light-1-text);\r\n    --mv-checkbox-checked-dark-background: var(--light-1-background);\r\n    --mv-checkbox-hover-border-dark-color: var(--light-3-border);\r\n}\r\n',""]);const s=i},9297:(e,t,r)=>{var o=r(3379),a=r.n(o),n=r(7795),i=r.n(n),s=r(569),l=r.n(s),c=r(3565),d=r.n(c),f=r(9216),h=r.n(f),u=r(4589),b=r.n(u),p=r(5097),m={};m.styleTagTransform=b(),m.setAttributes=d(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=h();a()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals},7367:(e,t,r)=>{var o=r(3379),a=r.n(o),n=r(7795),i=r.n(n),s=r(569),l=r.n(s),c=r(3565),d=r.n(c),f=r(9216),h=r.n(f),u=r(4589),b=r.n(u),p=r(5728),m={};m.styleTagTransform=b(),m.setAttributes=d(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=h();a()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals},7706:(e,t,r)=>{var o=r(3379),a=r.n(o),n=r(7795),i=r.n(n),s=r(569),l=r.n(s),c=r(3565),d=r.n(c),f=r(9216),h=r.n(f),u=r(4589),b=r.n(u),p=r(9058),m={};m.styleTagTransform=b(),m.setAttributes=d(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=h();a()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals},2233:(e,t,r)=>{var o=r(3379),a=r.n(o),n=r(7795),i=r.n(n),s=r(569),l=r.n(s),c=r(3565),d=r.n(c),f=r(9216),h=r.n(f),u=r(4589),b=r.n(u),p=r(5319),m={};m.styleTagTransform=b(),m.setAttributes=d(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=h();a()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals},7945:(e,t,r)=>{var o=r(3379),a=r.n(o),n=r(7795),i=r.n(n),s=r(569),l=r.n(s),c=r(3565),d=r.n(c),f=r(9216),h=r.n(f),u=r(4589),b=r.n(u),p=r(7732),m={};m.styleTagTransform=b(),m.setAttributes=d(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=h();a()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals},2612:(e,t,r)=>{var o=r(3379),a=r.n(o),n=r(7795),i=r.n(n),s=r(569),l=r.n(s),c=r(3565),d=r.n(c),f=r(9216),h=r.n(f),u=r(4589),b=r.n(u),p=r(4714),m={};m.styleTagTransform=b(),m.setAttributes=d(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=h();a()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals},5410:(e,t,r)=>{e.exports=r.p+"b0e879d051480e1251be.eot"},5030:(e,t,r)=>{e.exports=r.p+"1afd86eb24d7cc5633e8.svg"},9292:(e,t,r)=>{e.exports=r.p+"68e64caf50faa197dcf4.ttf"},8083:(e,t,r)=>{e.exports=r.p+"8d565b4e2817da6dd5c6.woff"},2184:(e,t,r)=>{e.exports=r.p+"3300951cc1fca7fc0d6d.woff2"},3678:(e,t,r)=>{e.exports=r.p+"8e1a00f80e8ab148fff4.eot"},175:(e,t,r)=>{e.exports=r.p+"00970272cad5df8b1eff.svg"},3572:(e,t,r)=>{e.exports=r.p+"e00fa9827a67ed133673.ttf"},7535:(e,t,r)=>{e.exports=r.p+"391066404d288f7ea74a.woff"},9637:(e,t,r)=>{e.exports=r.p+"a61e2a0c7dac0e9123f1.woff2"},1688:(e,t,r)=>{e.exports=r.p+"57e4f357f4035fa500d6.eot"},6026:(e,t,r)=>{e.exports=r.p+"031edb308c003d13cabd.woff2"},4062:(e,t,r)=>{e.exports=r.p+"29d5cc33128549ee716b.svg"},6994:(e,t,r)=>{e.exports=r.p+"8827866ebb7dce5c56cf.ttf"},1895:(e,t,r)=>{e.exports=r.p+"deb9029a6c32acfb4242.woff"},8249:(e,t,r)=>{e.exports=r.p+"b09f783b99c88d6989f7.eot"},7283:(e,t,r)=>{e.exports=r.p+"d21386c92d7f4fbf03dc.svg"},1835:(e,t,r)=>{e.exports=r.p+"ec7723ea62ad74c14959.ttf"},7746:(e,t,r)=>{e.exports=r.p+"dc957891d535aa198135.woff"},2462:(e,t,r)=>{e.exports=r.p+"1c638e5f7632ea819e77.woff2"},417:(e,t,r)=>{e.exports=r.p+"86ce78132c18df414d83.eot"},3323:(e,t,r)=>{e.exports=r.p+"68bba3adb61c08195530.svg"},1172:(e,t,r)=>{e.exports=r.p+"235a1aa30ba10c7d00d0.ttf"},2193:(e,t,r)=>{e.exports=r.p+"2ccf005a6998d30de3d3.woff"},9991:(e,t,r)=>{e.exports=r.p+"e5917ad1531005ea8c3f.woff2"},8639:(e,t,r)=>{e.exports=r.p+"d93bcbbb0fbfad39d905.eot"},6092:(e,t,r)=>{e.exports=r.p+"decfdcb63165be4a18b6.svg"},6086:(e,t,r)=>{e.exports=r.p+"aae41ea25bd0dde9f796.ttf"},3791:(e,t,r)=>{e.exports=r.p+"3ef4f1acb44a2df412bf.woff"},7824:(e,t,r)=>{e.exports=r.p+"4a83f63fd7dd55c4ca85.woff2"},7075:(e,t,r)=>{e.exports=r.p+"eb992e965197b4672140.eot"},770:(e,t,r)=>{e.exports=r.p+"eb992e965197b4672140.eot?w118d"},6670:(e,t,r)=>{e.exports=r.p+"4e7e7d737315790fbb14.svg?w118d"},865:(e,t,r)=>{e.exports=r.p+"5cbe0a85581dc42087ac.ttf?w118d"},5717:(e,t,r)=>{e.exports=r.p+"857c65d6452680b4f3b1.woff2?w118d"},7206:(e,t,r)=>{e.exports=r.p+"a78a26fb0b18bc4cde28.woff?w118d"},8708:(e,t,r)=>{e.exports=r.p+"83712e254db5dadac824.eot"},6038:(e,t,r)=>{e.exports=r.p+"da027ea12458786dfb95.svg"},7378:(e,t,r)=>{e.exports=r.p+"71bdc540fd8a94fb235c.ttf"},9865:(e,t,r)=>{e.exports=r.p+"dbe4c53750999cd00590.woff"},8364:(e,t,r)=>{e.exports=r.p+"1c44fe80dae1cad6de30.woff2"},4920:(e,t,r)=>{e.exports=r.p+"3067510fc66a2db817a6.eot"},9190:(e,t,r)=>{e.exports=r.p+"2f91ea56c6647112027a.svg"},7907:(e,t,r)=>{e.exports=r.p+"51a071b1da845450e34c.ttf"},5120:(e,t,r)=>{e.exports=r.p+"2f2f4995ba90bcfdf44b.woff"},9050:(e,t,r)=>{e.exports=r.p+"9fd95b9747b5092ae599.woff2"},6693:(e,t,r)=>{e.exports=r.p+"7493abdd5e1ff8bc2a7d.eot"},9724:(e,t,r)=>{e.exports=r.p+"0718ebc6d615367f1016.svg"},7411:(e,t,r)=>{e.exports=r.p+"b9d070c0ea97e5c4ca02.ttf"},3208:(e,t,r)=>{e.exports=r.p+"754512de5442d8e558ef.woff"},4958:(e,t,r)=>{e.exports=r.p+"3cc6cc19efcd5e1aaeb7.woff2"},2579:(e,t,r)=>{e.exports=r.p+"61bda9e480d5099284e9.eot"},1879:(e,t,r)=>{e.exports=r.p+"cb503ae14b7e99dc377c.svg"},804:(e,t,r)=>{e.exports=r.p+"5f8edace40a916f3a46f.ttf"},2158:(e,t,r)=>{e.exports=r.p+"ca2096fde552a3d46f6c.woff"},6340:(e,t,r)=>{e.exports=r.p+"0ff4be9b19ec70ee1d2a.woff2"},9284:(e,t,r)=>{e.exports=r.p+"adacd7d61c9460863a45.eot"},1900:(e,t,r)=>{e.exports=r.p+"ef7686704c7f8dfd007b.svg"},269:(e,t,r)=>{e.exports=r.p+"9300cc9f9b107e16449f.ttf"},3028:(e,t,r)=>{e.exports=r.p+"de42c6c5f5ed81af351b.woff"},4375:(e,t,r)=>{e.exports=r.p+"2b3e96770e8d7c572707.woff2"},7021:(e,t,r)=>{e.exports=r.p+"e7aaa40d402aadbc0079.eot"},6997:(e,t,r)=>{e.exports=r.p+"acbc0ddab04e8b097797.svg"},4173:(e,t,r)=>{e.exports=r.p+"8fe39d7c477dd2bcfc3b.ttf"},3866:(e,t,r)=>{e.exports=r.p+"ffd9da1c51637aa9baf2.woff"},2219:(e,t,r)=>{e.exports=r.p+"4de0f0e1cbdc09d6d137.woff2"},8885:(e,t,r)=>{e.exports=r.p+"357a5656ebfb5ca70076.eot"},9103:(e,t,r)=>{e.exports=r.p+"ef3517a6872ec0fe1ff6.svg"},8276:(e,t,r)=>{e.exports=r.p+"cca99ff6a8f30b4ee8d1.ttf"},9488:(e,t,r)=>{e.exports=r.p+"4a2b07e032a591f6d472.woff"},4636:(e,t,r)=>{e.exports=r.p+"1b4e2bda156eba63cb92.woff2"},9733:(e,t,r)=>{e.exports=r.p+"ebbe87c5554e5a3207be.eot"},9036:(e,t,r)=>{e.exports=r.p+"38ab40e50e8a8e06013e.svg"},2941:(e,t,r)=>{e.exports=r.p+"09ba611356e9d22bb348.ttf"},5516:(e,t,r)=>{e.exports=r.p+"ba4db2f902b67b89447a.woff"},9876:(e,t,r)=>{e.exports=r.p+"afc6b4ade0f0a5916985.woff2"},7277:(e,t,r)=>{var o=r(5862);class a extends o.oi{static get properties(){return{value:{type:String,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return o.iv`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --light-background: var(--mv-container-background, #ffffff);
        --dark-background: var(--mv-container-dark-background, #373e48);
        --light-color: var(--mv-container-light-color, #000000);
        --dark-color: var(--mv-container-dark-color, #ffffff);
      }

      section {
        min-width: var(--mv-container-min-width, 300px);
        max-width: var(--mv-container-max-width, 500px);
        min-height: var(--mv-container-min-height, auto);
        max-height: var(--mv-container-max-height, auto);
        margin: var(--mv-container-margin, 20px auto);
        padding: var(--mv-container-padding, 20px);
        border: var(--mv-container-border, 1px solid #bfbfbf);
        border-radius: var(--mv-container-border-radius, 5px);
        top: var(--mv-container-top, 0);
        position: var(--mv-container-position, relative);
        background-color: var(--background-color);
        box-shadow: var(
          --mv-container-shadow,
          0 0 13px 0 rgba(42, 42, 42, 0.65)
        );
        color: var(--color);
      }

      .light {
        background-color: var(--light-background);
        color: var(--light-color);
      }

      .dark {
        background-color: var(--dark-background);
        color: var(--dark-color);
      }
    `}constructor(){super(),this.theme="light"}render(){return o.dy`
      <section class="${this.theme}">
        <slot></slot>
      </section>
    `}}customElements.define("mv-container",a)},1290:e=>{e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#","description":"Meta-schema for $data reference (JSON Schema extension proposal)","type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}')},5484:e=>{e.exports=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"http://json-schema.org/draft-07/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":true,"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":true},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":true},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"propertyNames":{"format":"regex"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":true,"enum":{"type":"array","items":true,"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#"},"then":{"$ref":"#"},"else":{"$ref":"#"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":true}')}}]);