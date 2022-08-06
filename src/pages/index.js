import React from "react";
import { Link } from 'gatsby';
import Layout from "../components/Layout";
import Images from '../examples/images.js';

export default function Home() {
  return (
    <Layout>
      <h1>home page</h1>
      <Images />
    </Layout>
    )
}
