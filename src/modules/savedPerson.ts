import { ListConfig, list } from "@keystone-6/core";
import type { Lists } from '.keystone/types';
import { allowAll } from "@keystone-6/core/access";
import { password, relationship, text, timestamp } from "@keystone-6/core/fields";

export let savedPersonConfig = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: false },
      isIndexed: 'unique',
    }),
    phone: text({ validation: { isRequired: false } }),
    savingEncounter: relationship({
      ref: 'Encounter.salvations',
      many: false,
    }),
  },
});