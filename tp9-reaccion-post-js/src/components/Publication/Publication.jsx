import React, { useState } from 'react';
import './publication.css';
function Publication() {
    const [likes, setLikes] = useState(0);
    const [fun, setFun] = useState(0);
    const [surprise, setSurprise] = useState(0);

    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const [error, setError] = useState('');
    const handleCommentSubmit = () => {
        if (!comment.trim()) {
            setError('El comentario no puede estar vacío');
            return;
        }

        if (comment.length > 40) {
            setError('El comentario no puede exceder los 40 caracteres');
            return;
        }
        setCommentsList([...commentsList, comment]);
        setComment('');
        setError('');
    };
    return(
        <div className="publication-content">
            <div className='publication'>
                <h1 className='text-publication'>Mi primer post</h1>
                <img className='img-publication' src="https://i.pinimg.com/736x/c4/32/79/c432799c7ad0fbf4551ca867e6fcfcaa.jpg" alt="" />
                <h2 className='text-publication'>Jinx LoL</h2>
                <div className="btn-publication">
                    <button className='reaction-btn' onClick={() => setLikes(likes + 1)}>❤️{likes}</button>
                    <button className='reaction-btn' onClick={() => setFun(fun + 1)}>😂{fun}</button>
                    <button className='reaction-btn' onClick={() => setSurprise(surprise + 1)}>😮{surprise}</button>
                </div>
            </div>
            <div className='comment-list'>
                <h3 className='h3-comment'>Comentarios</h3>
                {commentsList.map((comment, index) => (
                    <p key={index} className='text-comment-list'>{comment}</p>
                ))}
            </div>
            <div className='comment-content'>
                <input className='input-comment' type="text" name="comment" id="comment" placeholder='Escribe un comentario...' maxLength={40} value={comment} onChange={(e) => setComment(e.target.value)} />
                <button className='btn-comment' onClick={() => handleCommentSubmit()}>Comentar</button>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    )
}

export default Publication;