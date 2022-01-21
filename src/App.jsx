import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // TODO入力フォーム内容のstate
  const [todoText, setTodoText] = useState("");
  // 未完了リストのstate
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbb"]);
  // 完了リストのstate
  const [completeTodos, setCompleteTodos] = useState(["ccc"]);

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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/*  
            Reactではloop処理をする場合は先頭の要素にキーを設定する必要がある
            理由：　仮想DOMでは変更前と変更後の差分だけを抽出しているため、差分のみを再レンダリングするため
            再レンダリングされた場合にLoopの何番目の要素なのか判断するための目印としてつける 
          */}
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
