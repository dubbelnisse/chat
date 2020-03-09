<script>
  import { username } from "./stores/";
  import Start from "./views/Start.svelte";
  import Chat from "./views/Chat.svelte";
</script>

{#if $username !== ''}
  <Chat />
{:else}
  <Start />
{/if}
