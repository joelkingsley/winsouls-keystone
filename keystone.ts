import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './src/modules/auth';
import * as dotenv from 'dotenv';

dotenv.config()

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: process.env.KEYSTONE_DB_URL ?? '',
    },
    lists,
    session,
  })
);
