import { css } from "lit";
import ListPageTemplate from "../../components/page_templates/ListPageTemplate.js";

export default class ContinentListPage extends ListPageTemplate {
  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [super.styles, css``];
  }
}

customElements.define("continent-list-page", ContinentListPage);
