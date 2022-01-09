<script lang="ts">
  type Name = {
    id: string;
    name: string;
    arabic: string;
    english: string;
    description: string;
  };

  export let name: Name;
</script>

<div>
  <div class="text-4xl arabic mb-4">{@html name.arabic}</div>
  <div class="text-xl">{name.name}</div>
</div>
