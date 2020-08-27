import React from "react"
import "../style.css"
import Info from "../components/info"
import { Helmet } from "react-helmet"
import Background from '../components/backgroundanim'


function index() {
  return (
    <div className="content">
      <Background></Background>
      <Info/>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Home | Seshadri</title>
      </Helmet>
    </div>
  )
}

export default index
