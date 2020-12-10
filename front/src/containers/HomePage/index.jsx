import * as React from 'react'
// layouts
import MainLayout from "../../layouts/MainLayout"
// components
import Posts from "../../components/Posts";

const HomePageContainer = () => (
  <MainLayout isHomePage >
    <Posts />
  </MainLayout>
)

export default HomePageContainer
