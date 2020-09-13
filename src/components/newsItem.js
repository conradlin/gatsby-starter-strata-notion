import React from "react"
import { Link } from "gatsby";

export default ({ data }) => {
    const { title, tags, cover_image, publish_date, desc, read_time, url, slug } = data

    return (
        <div style={{ margin: 10 }}>        
            <Link to={`subscribe/posts/${url}/`}>
              <div style = {{color: "grey"}}>Tags: {tags && tags.join(', ')} • Published: {publish_date} • {read_time} MIN READ</div>
              <h2>{title}</h2>
              <p style = {{ color: "black" }} dangerouslySetInnerHTML={{ __html: desc }}></p>
            </Link>
        </div>
    )
}