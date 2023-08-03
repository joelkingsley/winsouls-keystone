import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { json, relationship, text } from "@keystone-6/core/fields";

export let mapAreaConfig = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    belongingMap: relationship({
      ref: 'Map.areas',
      many: false,
    }),
    polygonGeoJson: json({
        defaultValue: null,
    }),
  },
});