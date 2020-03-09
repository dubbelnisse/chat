<script>
  import Message from "./ChatLogMessage.svelte";

  let socket = io.connect(process.env.SOCKET_IO_URL);
  let messages = [];

  socket.on("chat_message", serverMessage => {
    messages.push(serverMessage);
    messages = messages;
  });
</script>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

<main>
  <ul>
    {#each messages as message}
      <Message {message} />
    {/each}
  </ul>
</main>
