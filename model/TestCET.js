import Model from "./model.js";

export const code = "TestCET";
export const label = "Test Cet";
export const formFields = [
	{
		label: "My Test Cet",
		fields: [
			{"disabled":false,"code":"creationDate","description":"creation date","fieldType":"DATE","appliesTo":"CE_TestCET","valueRequired":false,"matrixColumns":[],"versionable":false,"useInheritedAsDefaultValue":false,"storageType":"SINGLE","triggerEndPeriodEvent":false,"isInDraft":false,"guiPosition":"tab:My Test CET:0;field:0","allowEdit":true,"hideOnNew":false,"unique":false,"filter":true,"summary":true,"identifier":false,"storages":["SQL"],"contentTypes":[],"fileExtensions":[],"saveOnExplorer":false,"samples":[],"audited":false,"persisted":true,"hasReferenceJpaEntity":false,"label":"Creation Date","displayFormat":"dd-M-yyyy HH:mm:ss"},
			{"disabled":false,"code":"name","description":"name","fieldType":"STRING","appliesTo":"CE_TestCET","valueRequired":false,"matrixColumns":[],"versionable":false,"useInheritedAsDefaultValue":false,"storageType":"SINGLE","triggerEndPeriodEvent":false,"isInDraft":false,"guiPosition":"tab:My Test CET:0;field:1","allowEdit":true,"hideOnNew":false,"maxValue":50,"unique":false,"filter":true,"summary":true,"identifier":false,"storages":["SQL"],"contentTypes":[],"fileExtensions":[],"saveOnExplorer":false,"samples":[],"audited":false,"persisted":true,"hasReferenceJpaEntity":false,"label":"Name"},
			{"disabled":false,"code":"age","description":"age","fieldType":"LONG","appliesTo":"CE_TestCET","valueRequired":false,"matrixColumns":[],"versionable":false,"useInheritedAsDefaultValue":false,"storageType":"SINGLE","triggerEndPeriodEvent":false,"isInDraft":false,"guiPosition":"tab:My Test CET:0;field:2","allowEdit":true,"hideOnNew":false,"minValue":1,"unique":false,"filter":true,"summary":false,"identifier":false,"storages":["SQL"],"contentTypes":[],"fileExtensions":[],"saveOnExplorer":false,"samples":[],"audited":false,"persisted":true,"hasReferenceJpaEntity":false,"label":"Age"},
			{"disabled":false,"code":"continent","description":"continent","fieldType":"ENTITY","appliesTo":"CE_TestCET","valueRequired":false,"matrixColumns":[],"versionable":false,"useInheritedAsDefaultValue":false,"storageType":"SINGLE","triggerEndPeriodEvent":false,"isInDraft":false,"guiPosition":"tab:My Test CET:0;field:3","allowEdit":true,"hideOnNew":false,"unique":false,"filter":true,"summary":true,"identifier":false,"storages":["SQL"],"contentTypes":[],"fileExtensions":[],"saveOnExplorer":false,"samples":[],"audited":false,"persisted":true,"hasReferenceJpaEntity":false,"label":"Continent","name":"Continent","entitySchema":"Continent"},
		]
	},

];
export const actions = [

];
export class ModelClass extends Model {
	schemaCode = "TestCET";
	refSchemaCodes = [
		"Continent",
	];

	constructor(auth){
		super(auth, code);
		this.normalizedCode = "test-cet";
		this.code = code;
		this.label = label;
		this.formFields = formFields;
		this.actions = actions;
	}

}
