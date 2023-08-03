import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, select, text, timestamp } from "@keystone-6/core/fields";

export let encounterConfig = list({
  access: allowAll,
  fields: {
    group: relationship({
      ref: 'SoulWinningSessionGroup.encounters',
      many: false,
    }),
    houseAddress: text({
      validation: { isRequired: false },
    }),
    encounterTimeInUtc: timestamp({
      validation: { isRequired: false },
    }),
    salvations: relationship({
      ref: 'SavedPerson.savingEncounter',
      many: true,
    }),
    result: select({
      type: 'enum',
      options: [
        { label: 'Salvation', value: 'salvation' },
        { label: 'Listened to entire Gospel', value: 'listened_to_entire_gospel' },
        { label: 'Listened to few verses', value: 'listened_to_few_verses' },
        { label: 'Not Interested', value: 'not_interested' },
      ],
      defaultValue: 'not_interested',
      validation: { isRequired: true, },
      ui: { displayMode: 'select' },
    }),
  },
});