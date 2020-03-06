<script>
  import { username } from "../stores";
  import Button from "./Button.svelte";
  import Input from "./Input.svelte";

  let socket = io.connect("http://localhost:9000");
  let message = "";

  function onKeyDown(event) {
    if (event.detail.keyCode === 13 && message !== "") {
      send();
    }
  }

  function send() {
    if (message !== "") {
      socket.emit("chat_message", {
        username: $username,
        message
      });
      message = "";
    }
  }
</script>

<style>
  main {
    display: flex;
    width: 100%;
    position: relative;
  }

  button {
    background-color: none;
    color: #8f8f8f;
    position: absolute;
    right: 15px;
    top: 5px;
    font-size: 30px;
  }
</style>

<main>
  <Input
    bind:value={message}
    on:onKeyDown={onKeyDown}
    placeholder="Type something" />
  <button on:click={send}>
    <i class="far fa-paper-plane" />
  </button>
</main>
