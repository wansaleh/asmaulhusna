import cheerio from 'cheerio';
import quranrefs from '$lib/data/quranref';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  const output = quranrefs.map((name) => {
    const nameOutput = name.map((ref) => {
      return {
        from: ref[0],
        ar: ref[1],
        en: ref[2],
        num: ref[3],
        ext: ref[4],
      };
    });

    return nameOutput;
  });

  return {
    body: output,
  };
}
