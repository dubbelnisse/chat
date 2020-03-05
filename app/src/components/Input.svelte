<script>
  import { createEventDispatcher } from "svelte";

  export let value;
  export let placeholder;

  const dispatch = createEventDispatcher();

  function keydown(event) {
    dispatch("onKeyDown", event);
  }
</script>

<style>
  input {
    padding: 20px;
  }

  input:focus {
    outline: none;
  }
</style>

<input bind:value on:keydown={keydown} {placeholder} />
