import names from '$lib/data/99names.json';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  return {
    body: names,
  };
}
