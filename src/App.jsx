import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompletetodos, setincompletetodos] = useState(["aaa", "bbb"]);
  const [completetodos, setcompletetodos] = useState(["ccc"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/*  
            Reactではloop処理をする場合は先頭の要素にキーを設定する必要がある
            理由：　仮想DOMでは変更前と変更後の差分だけを抽出しているため、差分のみを再レンダリングするため
            再レンダリングされた場合にLoopの何番目の要素なのか判断するための目印としてつける 
          */}
          {incompletetodos.map((todo) => {
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
          {completetodos.map((todo) => {
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
