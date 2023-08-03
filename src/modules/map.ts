import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, text } from "@keystone-6/core/fields";

export let mapConfig = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    belongingOrganization: relationship({
      ref: 'Organization.mapsInOrganization',
      many: false,
    }),
    areas: relationship({
      ref: 'MapArea.belongingMap',
      many: true,
    }),
  },
});