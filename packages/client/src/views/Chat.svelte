<script>
  import { onMount, onDestroy } from "svelte";
  import ChatLog from "../components/ChatLog.svelte";
  import ChatInput from "../components/ChatInput.svelte";
  import { socket } from "../helpers/socketio";
  import { userid, username } from "../stores/";

  onMount(() => {
    socket.emit("user_connected", {
      username: $username,
      userid: $userid
    });
  });

  onDestroy(() => {
    socket.emit("user_disconnected", {
      username: $username,
      userid: $userid
    });
  });
</script>

<style>
  main {
    display: flex;
    flex-flow: column;
    height: calc(100% - 40px);
    padding: 20px;
  }

  .input {
    display: flex;
    margin-top: 20px;
  }
</style>

<main>
  <ChatLog />
  <div class="input">
    <ChatInput />
  </div>
</main>
