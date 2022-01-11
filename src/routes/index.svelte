<script context="module">
  import names from '$lib/data/99names.json';

  export const prerender = true;

  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch }) {
    return { props: { names } };
  }
</script>

<script lang="ts">
  import Card from '$lib/components/card.svelte';
  import type { Name } from '$lib/types';
  import Seo from '$lib/components/seo.svelte';

  export let names: Name[];
</script>

<Seo />

<div class="layout py-24 text-center">
  <h1 class="lg:text-8xl arabic relative mb-4 text-5xl font-semibold">
    أسماء ٱلحسنى
  </h1>
  <h1 class="lg:text-6xl relative text-5xl font-semibold">
    <span>Asmaul Husna</span>
  </h1>
  <h2 class="lg:text-3xl relative text-2xl italic">
    <span>99 Nama Allah</span>
  </h2>
  <h2 class="lg:text-3xl relative text-2xl opacity-60">
    <span>99 Names of Allah</span>
  </h2>

  <div class="mt-24">
    <div class="flex flex-row-reverse flex-wrap justify-center -m-2">
      {#each names as name (name.id)}
        <Card {name} />
      {/each}
    </div>
  </div>
</div>
