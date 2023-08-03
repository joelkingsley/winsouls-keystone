import type { Lists } from '.keystone/types';
import { userConfig } from './modules/user';
import { organizationConfig } from './modules/organization';
import { eventConfig } from './modules/event';
import { soulWinningSessionConfig } from './modules/soulWinningSession';
import { soulWinningSessionGroupConfig } from './modules/soulWinningSessionGroup';
import { encounterConfig } from './modules/encounter';
import { savedPersonConfig } from './modules/savedPerson';
import { mapConfig } from './modules/map';
import { mapAreaConfig } from './modules/mapArea';

export const lists: Lists = {
  User: userConfig,
  Organization: organizationConfig,
  Event: eventConfig,
  SoulWinningSession: soulWinningSessionConfig,
  SoulWinningSessionGroup: soulWinningSessionGroupConfig,
  Encounter: encounterConfig,
  SavedPerson: savedPersonConfig,
  Map: mapConfig,
  MapArea: mapAreaConfig,
};
