<script context="module">
  import names from '$lib/data/99names.json';

  export const prerender = true;

  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ params }) {
    const index = names.findIndex((n) => n.id === params.id);
    const name = names[index];
    const prev = index - 1 >= 0 ? names[index - 1] : null;
    const next = index + 1 < 99 ? names[index + 1] : null;

    return { props: { name, prev, next } };
  }
</script>

<script lang="ts">
  import Seo from '$lib/components/seo.svelte';
  import type { Name } from '$lib/types';

  export let name: Name;
  export let prev: Name | null;
  export let next: Name | null;
</script>

<Seo templateTitle="{name.tr} &ndash; {name.en}" />

<div class="layout py-20 max-w-4xl">
  <div class="flex justify-between mb-20">
    {#if prev}
      <a
        href="/{prev.id}"
        class="text-2xl font-semibold flex flex-col text-left"
      >
        <span class="arabic text-2xl">{prev.ar}</span>
        <span class="text-lg">{prev.tr}</span>
      </a>
    {/if}

    <div class="flex-1" />

    {#if next}
      <a href="/{next.id}" class="text-2xl font-semibold flex flex-col">
        <span class="arabic text-2xl">{next.ar}</span>
        <span class="text-lg">{next.tr}</span>
      </a>
    {/if}
  </div>

  <div class="flex flex-wrap justify-center items-end -m-4">
    <div class="text-center md:text-right w-full md:w-1/3 p-4">
      <div class="text-2xl mb-8 font-semibold opacity-40">{name.id}</div>
      <h1 class="text-8xl arabic mb-12 font-semibold leading-tight">
        {name.ar}
      </h1>
      <div class="text-4xl mt-10 font-semibold link">{name.tr}</div>
      <div class="text-xl font-normal italic">{name.ms}</div>
      <div class="text-xl font-normal opacity-60">{name.en}</div>
    </div>
    <div class="text-center md:text-left w-full md:w-2/3 p-4">
      <p class="text-xl font-normal italic mb-10">{name.desc_ms}</p>
      <p class="text-xl font-normal opacity-60">{name.desc_en}</p>
    </div>
  </div>
</div>
