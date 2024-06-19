import React from "react";
import Cards from './BlogCards'

const MainBlog = () => {
  return (
    <>
      <div class="flex bg-white px-3 py-4 justify-between items-center rounded-sm ">
        <h5 class="text-base uppercase font-semibold font-roboto ">BUSINESS</h5>
        <a
          href="#"
          class="text-white py-1 px-3 rounded-xl uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition  "
        >
          See More
        </a>
      </div>
      <div class="rounded-sm overflow-hidden bg-white shadow-sm ">
        <a href="#" class="block rounded-md overflow-hidden ">
          <img
            src="assets/images/pic6.png"
            class="w-full h-96 object-cover transform hover:scale-110 transition duration-500 "
          />
        </a>

        <div class="p-4 pb-5 ">
          <a href="#">
            <h2 class="block text-2xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iddo
              loremque,
            </h2>
          </a>

          <p class="text-gray-500 text-sm mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            distinctio doloremque placeat ipsa! Sequi, recusandae. In numquam
            similique molestiae error, magni velit suscipit repudiandae
            itaqu....
          </p>
          <div class="mt-3 flex space-x-4 ">
            <div class="flex text-gray-400 text-sm items-center ">
              <span class="mr-2 text-xs">
                <i class="far fa-user"></i>
              </span>
              Blogiing Tips
            </div>

            <div class="flex text-gray-400 text-sm items-center ">
              <span class="mr-2 text-xs">
                <i class="far fa-clock"></i>
              </span>
              July 15, 2022
            </div>
          </div>
        </div>
      </div>
      <Cards/>
    </>
  );
};

export default MainBlog;
