import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, select, text, timestamp } from "@keystone-6/core/fields";

export let eventConfig = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    type: select({
      type: 'enum',
      options: [
        { label: 'Marathon', value: 'marathon' },
        { label: 'Push', value: 'push' },
      ],
      defaultValue: 'marathon',
      validation: { isRequired: true, },
      ui: { displayMode: 'select' },
    }),
    organization: relationship({
      ref: 'Organization.eventsByOrganization',
      many: false,
    }),
    soulWinningSessions: relationship({
      ref: 'SoulWinningSession.event',
      many: true,
    }),
    scheduledStartTimeInUtc: timestamp({
      validation: { isRequired: true },
    }),
    scheduledEndTimeInUtc: timestamp({
      validation: { isRequired: true },
    }),
  },
});