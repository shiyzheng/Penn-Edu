import React, { useState } from 'react';

function PostSearchBar(props) {

    const handleOnChange = (e) => {
        props.setTitle(e.target.value);
    }

    return (
        <div>
            <input type='text' placeholder='Search' onChange={handleOnChange} />
        </div>
    );
}

export default PostSearchBar;