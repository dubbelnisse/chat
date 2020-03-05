<script>
  import { username } from "../stores";
  import Button from "../components/Button.svelte";
  import Input from "../components/Input.svelte";

  let name = "";

  username.useLocalStorage();

  function onKeyDown(event) {
    if (event.detail.keyCode === 13 && name !== "") {
      submit();
    }
  }

  function submit() {
    username.set(name);
  }
</script>

<style>
  main {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .input-wrapper {
    display: flex;
    max-width: 300px;
  }
</style>

<main>
  <div class="input-wrapper">
    <Input bind:value={name} on:onKeyDown={onKeyDown} placeholder="Username" />
    <Button margin="0 0 0 20px" on:onClick={submit} btnText="GO!" />
  </div>
</main>
