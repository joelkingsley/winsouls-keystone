import { ListConfig, list } from "@keystone-6/core";
import type { Lists } from '.keystone/types';
import { allowAll } from "@keystone-6/core/access";
import { relationship, select, text, timestamp } from "@keystone-6/core/fields";

export let eventConfig: ListConfig<Lists.Event.TypeInfo<any>, any> = list({
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
    coverPhotoUrl: text({ validation: { isRequired: true } }),
    whatToExpect: text({ validation: { isRequired: true } }),
    eventPlan: text({ validation: { isRequired: true } }),
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