<style lang="less">
.new-todo-form {
  flex-direction: row;
}
.done-marker,
.todo-marker {
  font-size: 1.3rem;
}
</style>
<template>
  <view class="container">
    <form class="new-todo-form" bindsubmit="onNewTodoFormSubmit">
      <input value="{{newTodoContent}}"
             placeholder="请输入任务描述"
             bindconfirm="onNewTodo"
             bindinput="onEditTodoContent"
             type="text"
             maxlength="20"
             confirm-type="done"/>
      <button formType="submit">新建</button>
      </form>
      <view wx:if="{{newTodoError}}">
        <text>{{newTodoError}}</text>
        </view>
     <view class="todo-list">
       <repeat for="{{todos}}" key="index" index="index" item="todo">
         <view class="todo-item">
         <text wx:if="{{todo.done}}" class="done-marker" @tap="markTodo" data-index="{{index}}">✓</text>
          <text wx:if="{{!todo.done}}" class="todo-marker" @tap="markDone" data-index="{{index}}">☐</text>
         <text>{{todo.content}}</text>
         </view>
         </repeat>
       </view>

  </view>
</template>

<script lang="typescript" src="./index.ts">

</script>
