import { ListConfig, list } from "@keystone-6/core";
import type { Lists } from '.keystone/types';
import { allowAll } from "@keystone-6/core/access";
import { relationship, text } from "@keystone-6/core/fields";

export let organizationConfig: ListConfig<Lists.Organization.TypeInfo<any>, any> = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    membersInOrganization: relationship({
      ref: 'User.memberships',
      many: true,
    }),
    adminsOfOrganization: relationship({
      ref: 'User.adminMemberships',
      many: true,
    }),
    type: relationship({
      ref: 'OrganizationType',
      many: true,
    }),
  },
});