import React, { useState, useEffect } from "react";
import "./feed.css";
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";
import { api } from "../services/api";

function Feed() {
    const [posts, setPosts] = useState([{}]);

    useEffect(() => {
        async function getPosts() {
            const response = await api.get("/posts");
            setPosts(response.data);
        }
        getPosts();
    }, [posts])



    async function handleLike(id) {
        try {
             await api.post(`/posts/${id}/likes`, null)
        } catch (error) {
            console.error(error.message)
        }

    }



    return (
        <section id="post-list">
            {posts.map((post) => {

                return (
                    <article key={post._id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>
                            <img src={more} alt="Mais" />
                        </header>

                        <img src={`http://localhost:3333/uploads/resized/${post.image}`} alt={post.description} />
                        <footer>
                            <div className="actions">
                                <button  type="button" onClick={() => handleLike(post._id)}>
                                    <img src={like} alt="" />
                                </button>
                                <img src={comment} alt="" />
                                <img src={send} alt="" />
                            </div>
                            <strong>{post.likes} Curtidas</strong>
                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>

                        </footer>
                    </article>

                )
            })}
        </section>
    )
}


export { Feed };