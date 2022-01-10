<script lang="ts">
  import type { Name } from '$lib/types';

  export let name: Name;
</script>

<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 link-overlay p-2">
  <div
    class="p-6 py-6 flex flex-col border-2 border-transparent hover:border-current transition rounded-2xl"
  >
    <span class="text-4xl arabic mb-4 font-semibold">{@html name.name_ar}</span>
    <a class="text-lg font-semibold link" href="/{name.id}">{name.name_tr}</a>
    <span class="text-sm font-normal italic">{name.name_ms}</span>
    <span class="text-sm font-normal opacity-60">{name.name_en}</span>
  </div>
</div>
