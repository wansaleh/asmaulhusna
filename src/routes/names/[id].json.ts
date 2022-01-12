import names from '$lib/data/99names.json';
import refs from '$lib/data/quranrefs.json';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
  if (params.id !== 'all') {
    const index = names.findIndex((n) => n.id === params.id);
    const name = names[index];
    const prev = index - 1 >= 0 ? names[index - 1] : null;
    const next = index + 1 < 99 ? names[index + 1] : null;

    return {
      body: { name, quranRef: refs[index], prev, next },
    };
  }

  return {
    body: { names },
  };
}
