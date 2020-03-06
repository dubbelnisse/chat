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
    width: 100%;
    border-radius: 20px;
    background-color: #f3f3f3;
  }

  input:focus {
    outline: none;
  }
</style>

<input bind:value on:keydown={keydown} {placeholder} />
