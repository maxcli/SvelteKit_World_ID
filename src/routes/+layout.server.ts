// no auth logic here -does not propogate .
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.getSession(),
  };
};