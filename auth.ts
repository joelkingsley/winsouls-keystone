// Welcome to some authentication for Keystone
//
// This is using @keystone-6/auth to add the following
// - A sign-in page for your Admin UI
// - A cookie-based stateless session strategy
//    - Using a User email as the identifier
//    - 30 day cookie expiration
//
// This file does not configure what Users can do, and the default for this starter
// project is to allow anyone - logged-in or not - to do anything.
//
// If you want to prevent random people on the internet from accessing your data,
// you can find out how by reading https://keystonejs.com/docs/guides/auth-and-access-control
//
// If you want to learn more about how our out-of-the-box authentication works, please
// read https://keystonejs.com/docs/apis/auth#authentication-api

import { randomBytes } from 'crypto';
import { createAuth } from '@keystone-6/auth';

import { statelessSessions } from '@keystone-6/core/session';

let sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== 'production') {
  sessionSecret = randomBytes(32).toString('hex');
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  sessionData: 'name createdAt adminMemberships { id name }',
  secretField: 'adminUiPassword',

  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  // initFirstItem: {
  //   fields: ['name', 'email', 'adminUiPassword'],
  // },
});

// statelessSessions uses cookies for session tracking
//   these cookies have an expiry, in seconds
//   we use an expiry of 30 days for this starter
const sessionMaxAge = 60 * 60 * 24 * 30;

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret!,
});

export { withAuth, session };
