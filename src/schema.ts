import type { Lists } from '.keystone/types';
import { userConfig } from './modules/user';
import { organizationConfig } from './modules/organization';
import { organizationTypeConfig } from './modules/organizationType';

export const lists: Lists = {
  User: userConfig,
  Organization: organizationConfig,
  OrganizationType: organizationTypeConfig
};
