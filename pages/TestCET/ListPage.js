import { css } from "lit";
import ListPageTemplate from "../../components/page_templates/ListPageTemplate.js";

export default class TestCETListPage extends ListPageTemplate {
  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [super.styles, css``];
  }
}

customElements.define("test-cet-list-page", TestCETListPage);
