import React from 'react';
import { useState } from 'react'
function AddPost(props) {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priv, setPriv] = useState(false);

    const [anon, setAnon] = useState(false);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newPost = {title: title, body: body, private: priv, anonymous: anon};

        const form = document.getElementById('add');
        form.reset();
        setTitle('');
        setBody('');
        props.addNewPost([...props.posts, newPost]);
    }

    return (
        <div>
            {' '}
            <form id = 'add' class ="mx-auto" style={{width: "800px"}}>
            <div class="form-group" >                            
                <label class="form-check-label" for="Title">Title</label>
                <input type="text" class="form-control" id="Title" onChange={e => setTitle(e.target.value)}/>
            
            </div>

            <div class="form-group" data-testid="form-group">                            
            <div class="input-group-prepend">

                </div>
                <textarea class="form-control" aria-label="With textarea" data-testid="body" onChange={e => setBody(e.target.value)}></textarea>
            </div>

            <div class="form-row">
            <div class="form-check col-md-4">
                <input class="form-check-input" type="checkbox" id="Private" onclick={()=>setPriv(!priv)}/>
                <label class="form-check-label" for="Private">
                    Private
                </label>
                </div>
                <div class="form-check col-md-6 ">
                <input class="form-check-input" type="checkbox" id="Anonymous"onclick={()=>setAnon(!anon)} />
                <label class="form-check-label" for="Anonymous">
                    
                Anonymous
                </label>
                </div>   
                <button onClick={handleOnSubmit}type="submit" class="btn btn-primary" data-testid="button">Create Post</button>
            </div>



 
            </form>
        </div>
    );
}

export default AddPost;