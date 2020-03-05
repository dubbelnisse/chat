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
    flex-flow: column;
    height: calc(100% - 40px);
    padding: 20px;
  }

  .chatlog {
    flex-grow: 1;
    background-color: #fff;
  }

  .input {
    display: flex;
    margin-top: 20px;
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
    <Button margin="0 0 0 20px" on:onClick={send} btnText="SEND" />
  </div>
</main>
