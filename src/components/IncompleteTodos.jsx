import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onclickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/*  
            Reactではloop処理をする場合は先頭の要素にキーを設定する必要がある
            理由：　仮想DOMでは変更前と変更後の差分だけを抽出しているため、差分のみを再レンダリングするため
            再レンダリングされた場合にLoopの何番目の要素なのか判断するための目印としてつける 
          */}
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* 何番目の要素の削除ボタンが押されたか判断するために引数に配列のindexを渡す */}
                <button onClick={() => onclickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
