// 管理者のみアクセスできるページにする予定。
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Modal from "react-modal";

const RecipePost = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <h2 className="PageTitle">Recipe Post -レシピ新規投稿-</h2><br/>

            <br/>
            <div className='Wrap'>
                {/* 新規登録モーダル */}
                <button onClick={() => setModalOpen(true)}>レシピ新規投稿</button>
                <Modal isOpen={modalOpen}>
                    <button onClick={() => setModalOpen(false)}>Close Modal</button>
                </Modal>
                {/* レシピ詳細 全てモーダルで内容表示する */}
                <div className="EachRecipeArea">
                    <div className="EachRecipe">
                        <button className="RecipeEdit">編集</button>
                        <button className="RecipeDelete">削除</button>
                        <p className="RecipeName">レシピ名</p>
                    </div>
                    <div className="EachRecipe">
                        <button className="RecipeEdit">編集</button>
                        <button className="RecipeDelete">削除</button>
                        <p className="RecipeName">レシピ名</p>
                    </div>
                </div>
                <br/>

                <Link to='/'>トップページへ</Link>
            </div>
        </div>
    )
}

export default RecipePost;