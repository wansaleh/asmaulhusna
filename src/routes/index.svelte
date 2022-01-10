<script context="module">
  import names from '$lib/data/99names.json';

  export const prerender = true;

  /** @type {import('@sveltejs/kit').Load} */
  export async function load() {
    return { props: { names } };
  }
</script>

<script lang="ts">
  import Card from '$lib/components/card.svelte';
  import type { Name } from '$lib/types';

  export let names: Name[];
</script>

<div class="layout text-center py-20">
  <h1 class="lg:text-7xl relative text-5xl font-semibold">
    <span>Asmaul Husna</span>
  </h1>
  <h2 class="lg:text-4xl relative text-2xl italic">
    <span>99 Nama Allah</span>
  </h2>
  <h2 class="lg:text-4xl relative text-2xl">
    <span>99 Names of Allah</span>
  </h2>

  <div class="mt-16">
    <div class="flex flex-wrap flex-row-reverse justify-center -m-2">
      {#each names as name (name.id)}
        <Card {name} />
      {/each}
    </div>
  </div>
</div>
