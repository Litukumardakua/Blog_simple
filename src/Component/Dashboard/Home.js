import React from "react";
import Categories from "./Categories";
import RandomPost from "./RandomPost";

const Home = () => {
  return (
    <div class="py-12 bg-gray-200 ">
      <div class="container mx-auto px-4 flex ">
        <div class="w-3/12">
          <Categories/>
          <RandomPost/>
        </div>
        <div class="w-6/12 bg-white shadow-sm shadow-white rounded-xl py-12 mr-4 "></div>

        <div class="w-3/12 bg-white shadow-sm shadow-white rounded-xl py-12 "></div>
      </div>
    </div>
  );
};

export default Home;
