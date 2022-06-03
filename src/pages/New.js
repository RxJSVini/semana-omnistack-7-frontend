import React, { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from"react-toastify";
import "./new.css";
function New() {

    const [image, setImage] = useState([]);
    const [place, setPlace] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [hashtags, setHashtags] = useState([]);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("image", image);
        data.append("author", author);
        data.append("place", place);
        data.append("description", description);
        data.append("hashtags", hashtags);

        console.log(image, place, author,description, hashtags)

        try {
            await api.post("/posts", data);
            toast.success("Publicação postada com sucesso!")
            setTimeout(() =>{
                return navigate("/");
            }, 2000)

        } catch (error) {
            console.log(error);

        }

    }


    return (


        <>
            <form onSubmit={handleSubmit} id="new-post">

                <input type="file" onChange={(e) => setImage(e.target.files[0])} />

                <input
                    type="text"
                    value={author}
                    name="author"
                    placeholder="Autor do post"
                    onChange={(e) => setAuthor(e.target.value)}

                />

                <input
                    type="text"
                    value={place}
                    name="place"
                    placeholder="Local do post"
                    onChange={(e) => setPlace(e.target.value)}
                />

                <input

                    type="text"
                    value={description}
                    name="description"
                    placeholder="Descrição do post"
                    onChange={(e) => setDescription(e.target.value)}

                />

                <input

                    type="text"
                    value={hashtags}
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={(e) => setHashtags(e.target.value)}

                />

                <button>Postar</button>
            </form>

        </>
    )
}


export { New };