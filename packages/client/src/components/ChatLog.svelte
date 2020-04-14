<script>
  import Message from "./ChatLogMessage.svelte";
  import { socket } from "../helpers/socketio";
  import { userid } from "../stores/";

  let messages = [];
  let logWrapper;

  socket.on("chat_message", serverMessage => {
    serverMessage.type = "MESSAGE";
    messages.push(serverMessage);
    messages = messages;

    // TODO: A hacky solution that needs a fix
    setTimeout(() => {
      logWrapper.scrollTop = logWrapper.scrollHeight;
    }, 0);
  });

  socket.on("user_connected", serverMessage => {
    serverMessage.type = "CONNECTION";
    serverMessage.message = `${serverMessage.username} connected!`;
    messages.push(serverMessage);
    messages = messages;

    // TODO: A hacky solution that needs a fix
    setTimeout(() => {
      logWrapper.scrollTop = logWrapper.scrollHeight;
    }, 0);
  });
</script>

<style>
  main {
    flex-grow: 1;
    overflow: auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

<main bind:this={logWrapper}>
  <ul>
    {#each messages as message}
      <Message {message} />
    {/each}
  </ul>
</main>
