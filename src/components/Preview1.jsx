let Preview1 = ({author})=>{
    return <div className="post-preview">
        <a href="post.html">
          <h2 className="post-title">Failure is not an option</h2>
          <h3 className="post-subtitle">
            Many say exploration is part of our destiny, but it’s actually our
            duty to future generations.
          </h3>
        </a>
        <p className="post-meta">
          Posted by
          <a href="#!"> Start Bootstrap</a>
          on {author}
        </p>
      </div>
}
export default Preview1