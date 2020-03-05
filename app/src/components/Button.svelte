<script>
  import { createEventDispatcher } from "svelte";

  export let btnText;

  const dispatch = createEventDispatcher();

  function click() {
    dispatch("onClick");
  }
</script>

<style>
  button {
    color: #fff;
    background-color: #385d6e;
    padding: 20px 25px;
  }
</style>

<button on:click|preventDefault={click}>{btnText}</button>
