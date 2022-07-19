import React from "react";
import { Link } from 'gatsby';
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>

    <h1>Hello world!</h1>
    <div>
    <Link to="/about">About</Link>
    </div>

    <div>
    <Link to="/company/history">History</Link>
    </div>

    <a href="/about">reg link</a>
    <a href="https://www.gatsbyjs.com/">gatsby link</a>
    </Layout>
    )
}
