
function PostCard(props) {
    return (
        <div>
            <div>
                Question: {props.posts.title}
            </div>
            <div>
            Body: {props.posts.body}
            </div>
        </div>
    )
}

function Posts(props) {
    const displayPosts = () => {
        const displayedPosts = [];
        props.posts.forEach(element => {
            if (props.title === '') {
                displayedPosts.push(<PostCard posts={element} />);
            } else {
                if (element.title.includes(props.title)) {
                    displayedPosts.push(<PostCard posts={element} />);
                }
            }
        })
        return displayedPosts;
    }

    const displayedPosts = displayPosts();
    return (
        <div>
            Posts
            {displayedPosts}
        </div>
    );
}

export default Posts;