import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import MediaQuery from "react-responsive"

const Photos = () => {
    const data = useStaticQuery(graphql`
        query Images {
            image: file(relativePath: {eq: "me-new.jpg"}) {
                id
                childImageSharp {
                  fixed(width: 400, height: 550) {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
        }
    `)
    return (
        <div className="col-md-4 float-right container image">
            <MediaQuery minDeviceWidth={1224} device={{deviceWidth: 1600}}>
                <Img fixed={data.image.childImageSharp.fixed} durationFadeIn={7000} className="imgfade" ></Img>
            </MediaQuery>
        </div>
    )
}

export default Photos