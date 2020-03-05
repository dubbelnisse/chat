<script>
  import Message from "./ChatLogMessage.svelte";

  let socket = io.connect("http://localhost:9000");
  let messages = [];

  socket.on("chat_message", serverMessage => {
    messages.push(serverMessage);
    messages = messages;
  });
</script>

<style>
  main {
    background-color: #fff;
  }

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
