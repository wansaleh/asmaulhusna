<script lang="ts">
  import type { Name } from '$lib/types';

  export let name: Name;
</script>

<div class="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 link-overlay p-2 w-full">
  <div
    class="dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white flex flex-col py-6 px-4 rounded-lg transition"
  >
    <span class="arabic mb-4 text-4xl font-semibold">{@html name.ar}</span>
    <a class="link text-lg font-semibold" href="/{name.id}">{name.tr}</a>
    <span class="text-sm italic font-normal">{name.ms}</span>
    <span class="text-sm font-normal opacity-60">{name.en}</span>
  </div>
</div>
