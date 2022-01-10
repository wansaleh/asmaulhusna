<script lang="ts">
  import type { Name } from '$lib/types';

  export let name: Name;
</script>

<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-6 py-10">
  <div class="text-4xl arabic mb-4 font-semibold">{@html name.name_ar}</div>
  <div class="text-lg font-semibold">{name.name_tr}</div>
  <div class="text-sm font-normal italic">{name.name_ms}</div>
  <div class="text-sm font-normal opacity-60">{name.name_en}</div>
</div>
