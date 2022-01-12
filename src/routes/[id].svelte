<script context="module">
  import names from '$lib/data/99names.json';
  import refs from '$lib/data/quranrefs.json';

  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch, params }) {
    const index = names.findIndex((n) => n.id === params.id);
    const name = names[index];
    const prev = index - 1 >= 0 ? names[index - 1] : null;
    const next = index + 1 < 99 ? names[index + 1] : null;

    return {
      props: {
        name,
        quranRefs: refs[index],
        prev,
        next,
      },
    };
  }
</script>

<script lang="ts">
  import Seo from '$lib/components/seo.svelte';
  import type { Name, QuranRef } from '$lib/types';

  export let name: Name;
  export let quranRefs: QuranRef[];
  export let prev: Name | null;
  export let next: Name | null;
</script>

<Seo
  templateTitle="{name.tr} &ndash; {name.en}"
  description="{name.tr} &ndash; {name.en}"
/>

<div
  class="absolute top-[-10vh] left-[-10vw] right-[-10vw] bottom-[-10vh] text-8xl font-bold select-none pointer-events-none opacity-5 transform -rotate-12 whitespace-nowrap repeating -z-10"
>
  {#each Array.from(Array(30).keys()) as i}
    <div class="my-8">
      {#each Array.from(Array(7).keys()) as j}
        <span class="mx-8">{name.tr}</span>
      {/each}
    </div>
  {/each}
  <!-- {@html `<div>${`<span>${name.tr}</span>`.repeat(10)}</div>`.repeat(20)} -->
</div>

<div class="layout py-20 max-w-5xl">
  <div class="flex flex-wrap justify-center items-start">
    <div class="md:w-1/3 w-full">
      <div
        class="md:text-right dark:text-black dark:bg-white p-8 text-center text-white bg-black rounded-lg"
      >
        <div class="mb-4 text-xl font-bold opacity-60">#{name.id}</div>
        <h1 class="arabic mb-16 text-7xl font-semibold leading-tight">
          {name.ar}
        </h1>
        <div class="link mt-10 mb-2 text-4xl font-semibold">{name.tr}</div>
        <div class="text-xl italic font-normal">{name.ms}</div>
        <div class="text-xl font-normal opacity-60">{name.en}</div>
      </div>

      <div class="flex flex-row-reverse gap-4 justify-between mt-4 mb-14">
        {#if prev}
          <a
            href="/{prev.id}"
            class="flex flex-col flex-1 px-4 pt-2 pb-2 text-2xl font-semibold text-right rounded-lg border-2 border-current bg-white dark:bg-black"
          >
            <span class="mb-2 text-base opacity-60">#{prev.id}</span>
            <span class="arabic text-2xl">{prev.ar}</span>
            <span class="text-sm">{prev.tr}</span>
          </a>
        {/if}

        {#if next}
          <a
            href="/{next.id}"
            class="flex flex-col flex-1 px-4 pt-2 pb-2 text-2xl font-semibold text-left rounded-lg border-2 border-current bg-white dark:bg-black"
          >
            <span class="mb-2 text-base opacity-60">#{next.id}</span>
            <span class="arabic text-2xl">{next.ar}</span>
            <span class="text-sm">{next.tr}</span>
          </a>
        {/if}
      </div>
    </div>

    <div class="md:text-left md:w-2/3 md:py-8 p-8 py-0 w-full text-center">
      <p class="mb-10 text-xl italic font-normal">{name.desc_ms}</p>
      <p class="text-xl font-normal opacity-60">
        {name.desc_en}
      </p>
      {#if quranRefs}
        <div class="text-sm font-normal mt-10">
          <b>Mentioned in:</b>
          {#each quranRefs as ref}
            <p>
              <a
                href="https://quran.com/{ref.num}"
                rel="external"
                class="hover:underline decoration-slate-500 decoration-2"
              >
                {@html ref.from}{#if ref.num !== '0'}, {ref.num}{/if}
              </a>
            </p>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .repeating > div:nth-child(even) {
    @apply ml-[-10rem];
  }
</style>
