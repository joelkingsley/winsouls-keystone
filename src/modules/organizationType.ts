import { ListConfig, list } from "@keystone-6/core";
import type { Lists } from '.keystone/types';
import { allowAll } from "@keystone-6/core/access";
import { text } from "@keystone-6/core/fields";

export let organizationTypeConfig: ListConfig<Lists.OrganizationType.TypeInfo<any>, any> = list({
  access: allowAll,
  fields: {
    name: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
  },
});