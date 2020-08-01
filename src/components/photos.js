import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const Photos = () => {
    const data = useStaticQuery(graphql`
        query Images {
            image: file(relativePath: {eq: "me-new.jpg"}) {
                id
                childImageSharp {
                  fixed(width: 400, height: 550) {
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `)
    return (
        <div className="col-md-4 float-right container">
            <Img fixed={data.image.childImageSharp.fixed} durationFadeIn={6000} className="imgfade" ></Img>
        </div>
    )
}

export default Photos