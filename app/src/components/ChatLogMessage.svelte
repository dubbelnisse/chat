<script>
  import { username } from "../stores/";
  import moment from "moment";

  export let message;
</script>

<style>
  li {
    display: flex;
    font-size: 20px;
  }

  li:not(:first-child) {
    margin-top: 20px;
  }

  .inner {
    max-width: 60%;
  }

  .me {
    justify-content: flex-end;
  }

  .other {
    justify-content: flex-start;
  }

  .message {
    font-size: 20px;
    padding: 20px;
  }

  .message--me {
    background-color: #fef8e6;
    border-radius: 20px 20px 3px 20px;
  }

  .message--other {
    background-color: #e8f4f9;
    border-radius: 20px 20px 20px 3px;
  }

  .time {
    color: #999999;
    font-size: 13px;
    margin-top: 10px;
  }
</style>

{#if message.username === $username}
  <li class="me">
    <div class="inner">
      <div class="message message--me">{message.message}</div>
      <div class="time">{moment(message.time).format('LT')}</div>
    </div>
  </li>
{:else}
  <li class="other">
    <div class="inne">
      <div class="message message--other">{message.message}</div>
      <div class="time">{moment(message.time).format('LT')}</div>
    </div>
  </li>
{/if}
