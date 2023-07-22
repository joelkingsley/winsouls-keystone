import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';

import type { Lists } from '.keystone/types';

export const lists: Lists = {
  User: list({
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
  }),

  Organization: list({
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
  }),

  OrganizationType: list({
    access: allowAll,
    fields: {
      name: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),
    },
  }),
};
