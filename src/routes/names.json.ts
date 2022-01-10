import names from '$lib/data/99names.json';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ url }) {
  const id = url.searchParams.get('id');

  if (id) {
    const index = names.findIndex((n) => n.id === id);
    const name = names[index];
    const prev = index - 1 >= 0 ? names[index - 1] : null;
    const next = index + 1 < 99 ? names[index + 1] : null;

    return {
      body: { name, prev, next },
    };
  }

  return {
    body: { names },
  };
}
