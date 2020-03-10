<script>
  import ChatLog from "../components/ChatLog.svelte";
  import ChatInput from "../components/ChatInput.svelte";
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
