import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // TODO入力フォーム内容のstate
  const [todoText, setTodoText] = useState("");
  // 未完了リストのstate
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了リストのstate
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    // フォームに何も入力されずに追加ボタンが押された場合は処理を終了
    if (todoText === "") return;
    // 現在の未完了リストにフォームに入力した内容を足した配列を作成
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // 未完了TODOリストに追加が完了した場合はフォームを空に戻す
    setTodoText("");
  };
  const onclickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // spliceは第一引数に削除する最初の要素のindexを、第二引数に何個の要素を削除するかを入力する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    // 未完了のリストから要素を削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    // 完了リストに要素を追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompletetodos = [...completeTodos];
    newCompletetodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompletetodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までです！！まず未完了のTODOを消化してください
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onclickDelete={onclickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
