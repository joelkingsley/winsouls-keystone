// Welcome to your schema
//   Schema driven development is Keystone's modus operandi
//
// This file is where we define the lists, fields and hooks for our data.

import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';

// the document field is a more complicated field, so it has it's own package
import { document } from '@keystone-6/fields-document';
// if you want to make your own fields, see https://keystonejs.com/docs/guides/custom-fields

// when using Typescript, you can refine your types to a stricter subset by importing
// the generated types from '.keystone/types'
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
