<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch }) {
    const names = await fetch('/api.json').then((res) => res.json());
    return { props: { names } };
  }
</script>

<script lang="ts">
  import Card from '$lib/components/card.svelte';

  export let names;
</script>

<div class="layout text-center py-20">
  <h1 class="lg:text-7xl relative text-5xl font-semibold tracking-tight">
    <span>Asmaul Husna</span>
  </h1>

  <div class="mt-16">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16"
    >
      {#each names as name (name.id)}
        <Card {name} />
      {/each}
    </div>
  </div>
</div>
