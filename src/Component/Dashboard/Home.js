import React from "react";
import Categories from "./Categories";
import RandomPost from "./RandomPost";
import MainBlog from "./MainBlog";

const Home = () => {
  return (
    <div class="py-12 bg-gray-200 ">
      <div class="container mx-auto px-4 flex ">
        <div class="w-3/12">
          <Categories/>
          <RandomPost/>
        </div>
        <div class="xl:w-6/12 lg:w-9/12 w-full xl:ml-6 lg:mr-6">
        <MainBlog/>
        </div>

        <div class="w-3/12 bg-white shadow-sm shadow-white rounded-xl py-12 "></div>
      </div>
    </div>
  );
};

export default Home;
