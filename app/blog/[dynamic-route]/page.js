// params already configured in next.config.js
// key will be what is encoded in the url
export default function BlogPostPage({params}) {
    return (
        <div>
            <h1>Blog Posts</h1>
            {/* {console.log(params)} */}
            <p>Post: {params['dynamic-route']}</p>
        </div>
    )
}