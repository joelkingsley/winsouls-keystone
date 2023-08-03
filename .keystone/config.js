"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core10 = require("@keystone-6/core");

// src/modules/user.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var userConfig = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    name: (0, import_fields.text)({ validation: { isRequired: true } }),
    email: (0, import_fields.text)({
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    adminUiPassword: (0, import_fields.password)({ validation: { isRequired: true } }),
    memberships: (0, import_fields.relationship)({ ref: "Organization.membersInOrganization", many: true }),
    adminMemberships: (0, import_fields.relationship)({ ref: "Organization.adminsOfOrganization", many: true }),
    createdAt: (0, import_fields.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});

// src/modules/organization.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var organizationConfig = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    name: (0, import_fields2.text)({ validation: { isRequired: true } }),
    membersInOrganization: (0, import_fields2.relationship)({
      ref: "User.memberships",
      many: true
    }),
    adminsOfOrganization: (0, import_fields2.relationship)({
      ref: "User.adminMemberships",
      many: true
    }),
    type: (0, import_fields2.select)({
      type: "enum",
      options: [
        { label: "Church", value: "church" },
        { label: "Soul Winning Club", value: "soul_winning_club" }
      ],
      defaultValue: "church",
      validation: { isRequired: true },
      ui: { displayMode: "select" }
    }),
    eventsByOrganization: (0, import_fields2.relationship)({
      ref: "Event.organization",
      many: true
    }),
    mapsInOrganization: (0, import_fields2.relationship)({
      ref: "Map.belongingOrganization",
      many: true
    })
  }
});

// src/modules/event.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var eventConfig = (0, import_core3.list)({
  access: import_access3.allowAll,
  fields: {
    name: (0, import_fields3.text)({ validation: { isRequired: true } }),
    type: (0, import_fields3.select)({
      type: "enum",
      options: [
        { label: "Marathon", value: "marathon" },
        { label: "Push", value: "push" }
      ],
      defaultValue: "marathon",
      validation: { isRequired: true },
      ui: { displayMode: "select" }
    }),
    organization: (0, import_fields3.relationship)({
      ref: "Organization.eventsByOrganization",
      many: false
    }),
    soulWinningSessions: (0, import_fields3.relationship)({
      ref: "SoulWinningSession.event",
      many: true
    }),
    scheduledStartTimeInUtc: (0, import_fields3.timestamp)({
      validation: { isRequired: true }
    }),
    scheduledEndTimeInUtc: (0, import_fields3.timestamp)({
      validation: { isRequired: true }
    })
  }
});

// src/modules/soulWinningSession.ts
var import_core4 = require("@keystone-6/core");
var import_access4 = require("@keystone-6/core/access");
var import_fields4 = require("@keystone-6/core/fields");
var soulWinningSessionConfig = (0, import_core4.list)({
  access: import_access4.allowAll,
  fields: {
    name: (0, import_fields4.text)({ validation: { isRequired: true } }),
    event: (0, import_fields4.relationship)({
      ref: "Event.soulWinningSessions",
      many: false
    }),
    groups: (0, import_fields4.relationship)({
      ref: "SoulWinningSessionGroup.session",
      many: true
    }),
    scheduledStartTimeInUtc: (0, import_fields4.timestamp)({
      validation: { isRequired: true }
    }),
    scheduledEndTimeInUtc: (0, import_fields4.timestamp)({
      validation: { isRequired: true }
    })
  }
});

// src/modules/soulWinningSessionGroup.ts
var import_core5 = require("@keystone-6/core");
var import_access5 = require("@keystone-6/core/access");
var import_fields5 = require("@keystone-6/core/fields");
var soulWinningSessionGroupConfig = (0, import_core5.list)({
  access: import_access5.allowAll,
  fields: {
    session: (0, import_fields5.relationship)({
      ref: "SoulWinningSession.groups",
      many: false
    }),
    members: (0, import_fields5.relationship)({
      ref: "User",
      many: true
    }),
    assignedMapArea: (0, import_fields5.relationship)({
      ref: "MapArea",
      many: false
    }),
    encounters: (0, import_fields5.relationship)({
      ref: "Encounter.group",
      many: true
    })
  }
});

// src/modules/encounter.ts
var import_core6 = require("@keystone-6/core");
var import_access6 = require("@keystone-6/core/access");
var import_fields6 = require("@keystone-6/core/fields");
var encounterConfig = (0, import_core6.list)({
  access: import_access6.allowAll,
  fields: {
    group: (0, import_fields6.relationship)({
      ref: "SoulWinningSessionGroup.encounters",
      many: false
    }),
    houseAddress: (0, import_fields6.text)({
      validation: { isRequired: false }
    }),
    encounterTimeInUtc: (0, import_fields6.timestamp)({
      validation: { isRequired: false }
    }),
    salvations: (0, import_fields6.relationship)({
      ref: "SavedPerson.savingEncounter",
      many: true
    }),
    result: (0, import_fields6.select)({
      type: "enum",
      options: [
        { label: "Salvation", value: "salvation" },
        { label: "Listened to entire Gospel", value: "listened_to_entire_gospel" },
        { label: "Listened to few verses", value: "listened_to_few_verses" },
        { label: "Not Interested", value: "not_interested" }
      ],
      defaultValue: "not_interested",
      validation: { isRequired: true },
      ui: { displayMode: "select" }
    })
  }
});

// src/modules/savedPerson.ts
var import_core7 = require("@keystone-6/core");
var import_access7 = require("@keystone-6/core/access");
var import_fields7 = require("@keystone-6/core/fields");
var savedPersonConfig = (0, import_core7.list)({
  access: import_access7.allowAll,
  fields: {
    name: (0, import_fields7.text)({ validation: { isRequired: true } }),
    email: (0, import_fields7.text)({
      validation: { isRequired: false },
      isIndexed: "unique"
    }),
    phone: (0, import_fields7.text)({ validation: { isRequired: false } }),
    savingEncounter: (0, import_fields7.relationship)({
      ref: "Encounter.salvations",
      many: false
    })
  }
});

// src/modules/map.ts
var import_core8 = require("@keystone-6/core");
var import_access8 = require("@keystone-6/core/access");
var import_fields8 = require("@keystone-6/core/fields");
var mapConfig = (0, import_core8.list)({
  access: import_access8.allowAll,
  fields: {
    name: (0, import_fields8.text)({ validation: { isRequired: true } }),
    belongingOrganization: (0, import_fields8.relationship)({
      ref: "Organization.mapsInOrganization",
      many: false
    }),
    areas: (0, import_fields8.relationship)({
      ref: "MapArea.belongingMap",
      many: true
    })
  }
});

// src/modules/mapArea.ts
var import_core9 = require("@keystone-6/core");
var import_access9 = require("@keystone-6/core/access");
var import_fields9 = require("@keystone-6/core/fields");
var mapAreaConfig = (0, import_core9.list)({
  access: import_access9.allowAll,
  fields: {
    name: (0, import_fields9.text)({ validation: { isRequired: true } }),
    belongingMap: (0, import_fields9.relationship)({
      ref: "Map.areas",
      many: false
    }),
    polygonGeoJson: (0, import_fields9.json)({
      defaultValue: null
    })
  }
});

// src/schema.ts
var lists = {
  User: userConfig,
  Organization: organizationConfig,
  Event: eventConfig,
  SoulWinningSession: soulWinningSessionConfig,
  SoulWinningSessionGroup: soulWinningSessionGroupConfig,
  Encounter: encounterConfig,
  SavedPerson: savedPersonConfig,
  Map: mapConfig,
  MapArea: mapAreaConfig
};

// src/auth/auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name createdAt adminMemberships { id name }",
  secretField: "adminUiPassword",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    fields: ["name", "email", "adminUiPassword"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var dotenv = __toESM(require("dotenv"));
dotenv.config();
var keystone_default = withAuth(
  (0, import_core10.config)({
    db: {
      provider: "postgresql",
      url: process.env.KEYSTONE_DB_URL ?? ""
    },
    lists,
    session
  })
);
