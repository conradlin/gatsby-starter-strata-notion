import React from "react"
import { Link } from "gatsby"
import { parseImageUrl } from '@conradlin/notabase/src/utils'

export default ({ data }) => {
    const { title, tags, cover_image, publish_date, desc, read_time, url, slug } = data
    let coverimageURL = parseImageUrl(cover_image[0], 1000, slug)

    return (
        <div style={{ margin: 10 }}>        
            <Link to={`posts/${url}/`}>
              <img 
                alt={`${title} cover image`}
                style={{ width: '100%' }}
                src={coverimageURL}
              />
              <h1 style = {{ color: "black" }}>{title}</h1>
              <div style = {{color: "grey", margin: '-30px 0px 0px 0px'}}>Tags: {tags && tags.join(', ')}<br></br>Published: {publish_date.startDate}<br></br>Read Time: {read_time} mins</div>
              <p style = {{ color: "black", margin: '15px 0px 30px 0px' }} dangerouslySetInnerHTML={{ __html: desc }}></p>
            </Link>
        </div>
    )
}