import { ListConfig, list } from "@keystone-6/core";
import type { Lists } from '.keystone/types';
import { allowAll } from "@keystone-6/core/access";
import { relationship, text, timestamp } from "@keystone-6/core/fields";

export let soulWinningSessionGroupConfig: ListConfig<Lists.SoulWinningSessionGroup.TypeInfo<any>, any> = list({
  access: allowAll,
  fields: {
    name: text({
      validation: { isRequired: true },
    }),
    session: relationship({
      ref: 'SoulWinningSession.groups',
      many: false,
    }),
    members: relationship({
      ref: 'User',
      many: true,
    }),
    assignedMapArea: relationship({
      ref: 'MapArea',
      many: false,
    }),
    encounters: relationship({
      ref: 'Encounter.group',
      many: true,
    }),
  },
});