<script>
  import { username } from "../stores";
  import Button from "../components/Button.svelte";
  import Input from "../components/Input.svelte";
  import ChatLog from "../components/ChatLog.svelte";

  let socket = io.connect("http://localhost:9000");
  let message = "";

  function onKeyDown(event) {
    if (event.detail.keyCode === 13 && message !== "") {
      send();
    }
  }

  function send() {
    socket.emit("chat_message", {
      username: $username,
      message
    });
    message = "";
  }
</script>

<style>
  main {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .chatlog {
    flex-grow: 1;
    background-color: #fff;
  }

  .input {
    margin: 20px 10px;
  }
</style>

<main>
  <div class="chatlog">
    <ChatLog />
  </div>
  <div class="input">
    <Input
      bind:value={message}
      on:onKeyDown={onKeyDown}
      placeholder="Type here" />
    <Button on:onClick={send} btnText="SEND" />
  </div>
</main>
