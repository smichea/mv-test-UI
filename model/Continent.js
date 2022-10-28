import Model from "./model.js";

export const code = "Continent";
export const label = "Continent";
export const formFields = [
	{
		label: "Continent",
		fields: [
			{"disabled":false,"code":"isoCode","description":"code iso","fieldType":"STRING","appliesTo":"CE_Continent","valueRequired":false,"matrixColumns":[],"versionable":false,"useInheritedAsDefaultValue":false,"storageType":"SINGLE","triggerEndPeriodEvent":false,"isInDraft":false,"guiPosition":"tab:Continent:0;field:0","allowEdit":true,"hideOnNew":false,"maxValue":3,"unique":false,"filter":true,"summary":true,"identifier":false,"storages":["SQL"],"contentTypes":[],"fileExtensions":[],"saveOnExplorer":false,"samples":[],"audited":false,"persisted":true,"hasReferenceJpaEntity":false,"label":"Iso Code"},
			{"disabled":false,"code":"name","description":"name","fieldType":"STRING","appliesTo":"CE_Continent","valueRequired":false,"matrixColumns":[],"versionable":false,"useInheritedAsDefaultValue":false,"storageType":"SINGLE","triggerEndPeriodEvent":false,"isInDraft":false,"guiPosition":"tab:Continent:0;field:1","allowEdit":true,"hideOnNew":false,"maxValue":50,"unique":false,"filter":true,"summary":true,"identifier":false,"storages":["SQL"],"contentTypes":[],"fileExtensions":[],"saveOnExplorer":false,"samples":[],"audited":false,"persisted":true,"hasReferenceJpaEntity":false,"label":"Name"},
		]
	},

];
export const actions = [

];
export class ModelClass extends Model {
	schemaCode = "Continent";
	refSchemaCodes = [	];

	constructor(auth){
		super(auth, code);
		this.normalizedCode = "continent";
		this.code = code;
		this.label = label;
		this.formFields = formFields;
		this.actions = actions;
	}

}
