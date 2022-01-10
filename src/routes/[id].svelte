<script context="module">
  export const prerender = true;

  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch, params }) {
    const { name, prev, next } = await fetch(`/names/${params.id}.json`).then(
      (r) => r.json()
    );

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

<Seo
  templateTitle="{name.tr} &ndash; {name.en}"
  description="{name.tr} &ndash; {name.en}"
/>

<div class="layout py-20 max-w-5xl">
  <div class="flex flex-wrap justify-center items-start">
    <div class="md:w-1/3 w-full">
      <div
        class="md:text-right dark:text-black dark:bg-white p-8 text-center text-white bg-black rounded-lg"
      >
        <div class="mb-4 text-3xl font-bold opacity-60">#{name.id}</div>
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
            class="flex flex-col flex-1 px-4 pt-8 pb-2 text-2xl font-semibold text-right rounded-lg border-2 border-current"
          >
            <span class="arabic text-2xl">{prev.ar}</span>
            <span class="text-sm">{prev.tr}</span>
          </a>
        {/if}

        {#if next}
          <a
            href="/{next.id}"
            class="flex flex-col flex-1 px-4 pt-8 pb-2 text-2xl font-semibold text-left rounded-lg border-2 border-current"
          >
            <span class="arabic text-2xl">{next.ar}</span>
            <span class="text-sm">{next.tr}</span>
          </a>
        {/if}
      </div>
    </div>

    <div class="md:text-left md:w-2/3 md:py-8 p-8 py-0 w-full text-center">
      <p class="mb-10 text-xl italic font-normal">{name.desc_ms}</p>
      <p class="text-xl font-normal opacity-60">{name.desc_en}</p>
    </div>
  </div>
</div>
