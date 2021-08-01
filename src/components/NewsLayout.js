import React from "react";
import NewsImage from "../images/NewsLight.png";
import { Layout, NewsArchive, NewsPost, Page } from "./";
import { NewsTheme } from "../themes";

export function NewsLayout({post}) {
  return (
    <Layout>
      <Page sectionTheme={NewsTheme} title="News" headerImage={NewsImage}>
        {post ? <NewsPost post={post} /> : <NewsArchive />}
      </Page>
    </Layout>
  );
}
