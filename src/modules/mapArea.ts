import { ListConfig, list } from "@keystone-6/core";
import type { Lists } from '.keystone/types';
import { allowAll } from "@keystone-6/core/access";
import { json, relationship, text } from "@keystone-6/core/fields";

export let mapAreaConfig: ListConfig<Lists.MapArea.TypeInfo<any>, any> = list({
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