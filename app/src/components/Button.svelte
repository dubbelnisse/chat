<script>
  import { createEventDispatcher } from "svelte";

  export let btnText;
  export let margin;

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

<button style="margin: {margin}" on:click|preventDefault={click}>
  {btnText}
</button>
