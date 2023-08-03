import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, text, timestamp } from "@keystone-6/core/fields";

export let soulWinningSessionConfig = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    event: relationship({
      ref: 'Event.soulWinningSessions',
      many: false,
    }),
    groups: relationship({
      ref: 'SoulWinningSessionGroup.session',
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