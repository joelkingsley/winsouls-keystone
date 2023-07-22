import { ListConfig, list } from "@keystone-6/core";
import type { Lists } from '.keystone/types';
import { allowAll } from "@keystone-6/core/access";
import { password, relationship, text, timestamp } from "@keystone-6/core/fields";

export let userConfig: ListConfig<Lists.User.TypeInfo<any>, any> = list({
  access: allowAll,

  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    adminUiPassword: password({ validation: { isRequired: true } }),
    memberships: relationship({ ref: 'Organization.membersInOrganization', many: true }),
    adminMemberships: relationship({ ref: 'Organization.adminsOfOrganization', many: true }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
  },
});