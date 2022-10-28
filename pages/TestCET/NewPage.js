import NewPageTemplate from "../../components/page_templates/NewPageTemplate.js";
import { parseModelDetails } from "../../utils/index.js";
import { MODELS } from "../../model/index.js";

const entityCode = "TestCET";
const { properties, mappings } = parseModelDetails(entityCode, MODELS);

export default class TestCETNewPage extends NewPageTemplate {
  static get properties() {
    return {
      ...super.properties,
      ...properties,
    };
  }

  get model() {
    return {
      entity: this.entity,
      mappings: [...mappings],
    };
  }

  constructor() {
    super();
    this.entity = null;
  }
}

customElements.define("test-cet-new-page", TestCETNewPage);
