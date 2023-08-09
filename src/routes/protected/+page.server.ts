import { error ,redirect} from '@sveltejs/kit';

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const session = await event.locals.getSession();
  if (!session) {
    throw error(404,'Not logged in');
  }  
  return session;
};


 