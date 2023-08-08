import { error ,redirect} from '@sveltejs/kit';

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const session = await event.locals.getSession();
  console.log(session?.user?.image)
  if (!session?.user) throw redirect(303, "/auth");
  return {};
};


 