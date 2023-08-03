import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, text, timestamp } from "@keystone-6/core/fields";

export let soulWinningSessionGroupConfig = list({
  access: allowAll,
  fields: {
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