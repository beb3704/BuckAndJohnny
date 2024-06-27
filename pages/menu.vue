<template>
  <div>
    <Bnjnav></Bnjnav>
    <SubHeader title="menu" sub-title="delicious choices for every meal">
      <div
        class="text-textLight grid grid-cols-1 p-2 gap-10 m-auto"
        style="width: 375px"
      >
        <div class="bg-lightRed py-1">
          <div class="clip-right bg-lightRed"></div>
          <NuxtLink
            to="/"
            class="flex items-center font-bold text-sm justify-center h-full w-full text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <div>GET DIRECTIONS</div>
          </NuxtLink>
        </div>

        <!--  <div class="bg-darkRed py-1">
          <div class="clip-left bg-darkRed"></div>
          <NuxtLink
            to="/"
            class="flex items-center font-bold text-sm justify-center h-full w-full text-center -ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.26 21.82"
              class="h-4 w-4 mr-2"
            >
              <defs></defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_2-2" data-name="Layer 2">
                  <rect
                    class="cls-1"
                    x="4.49"
                    y="2.6"
                    width="11.29"
                    height="16.62"
                    transform="translate(-2.91 3.72) rotate(-18.26)"
                  />
                  <rect
                    class="cls-1"
                    x="1.82"
                    y="5.27"
                    width="16.62"
                    height="11.29"
                    transform="translate(-2.08 19.42) rotate(-82)"
                  />
                  <rect
                    class="cls-1"
                    x="1.82"
                    y="5.27"
                    width="16.62"
                    height="11.29"
                    transform="translate(-4.54 13.45) rotate(-56.95)"
                  />
                </g>
              </g>
            </svg>

            <div class="uppercase">ORDER ONLINE</div>
          </NuxtLink>
        </div>-->
      </div>
    </SubHeader>

    <div class="bg-[#000]">
      <div
        class="flex m-auto py-3 p-2 col-span-full grid lg:grid-cols-3 md:grid-cols-2 m-auto max-w-6xl"
      >
        <a href="/FullMenu2.pdf"><div class="MenuButtons">Full menu</div></a>
        <a href="/LightMenu2.pdf"><div class="MenuButtons">Light menu</div></a>
        <a href="/DessertMenu2.pdf"
          ><div class="MenuButtons">Dessert Menu</div></a
        >
        <a href="/ZydecoMenu2.pdf"
          ><div class="MenuButtons">Zydeco Breakfast</div></a
        >
        <a href="/TogoMenu2.pdf"><div class="MenuButtons">To-Go menu</div></a>

        <!--       <a href="/HolidayMenu.pdf"
          ><div class="MenuButtons Holiday">Holiday Menu : Avail Nov. 1</div></a
        > -->
      </div>

      <h4 class="text-[#fff] uppercase text-center text-3xl font-bold py-4">
        MAIN Lunch & dinner
      </h4>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 m-auto max-w-6xl">
      <div class="flex m-auto py-3 col-span-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-lightRed mr-2"
        >
          <path
            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
          />
        </svg>
        <div class="text-lightRed uppercase mb-6">fan favorites</div>
      </div>

      <h5
        class="col-span-full m-auto text-3xl uppercase font-bold text-darkRed tracking-widest mb-10"
      >
        starters
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Praline chicken</div>
        <div class="text-lightRed font-bold ml-auto">10.39</div>
        <div class="col-span-full">
          boneless chicken fried golden brown and hand tossed in our famous
          praline sauce. Served with ranch dressing
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Garlic Bites</div>
        <div class="text-lightRed font-bold ml-auto">9.47</div>
        <div class="col-span-full">
          bite size garlic bread served with marinara
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Spinach & Artichoke dip</div>
        <div class="text-lightRed font-bold ml-auto">12.47</div>
        <div class="col-span-full">
          topped with cheddar cheese served with homemade tortilla chips
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Eggplant Fries</div>
        <div class="text-lightRed font-bold ml-auto">10.39</div>
        <div class="col-span-full">
          sliced eggplant - fried golden brown - served with marinara & topped
          with parmesan
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Quesadilla</div>
        <div class="text-lightRed font-bold ml-auto">15.59</div>
        <div class="col-span-full">
          classic style quesadilla with Chicken or Shrimp (18.67)
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Bread and Oil</div>
        <div class="text-lightRed font-bold ml-auto">8.31</div>
        <div class="col-span-full">
          baked ciabatta - sliced and served with olive oil & spices
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Swamp Sticks</div>
        <div class="text-lightRed font-bold ml-auto">9.35</div>
        <div class="col-span-full">
          garlic cheese sticks - served with ranch or marinara
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Caprese</div>
        <div class="text-lightRed font-bold ml-auto">11.43</div>
        <div class="col-span-full">
          vine-ripened tomato - fresh mozzarella - basil - olive oil balsamic
          reduction
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Stuffed Fried Mushroom</div>
        <div class="text-lightRed font-bold ml-auto">14.55</div>
        <div class="col-span-full">
          mushrooms stuffed with seafood stuffing served with ranch
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Hot Wings</div>
        <div class="text-lightRed font-bold ml-auto">9.99</div>
        <div class="col-span-full">
          wings coated in Tangy Barbecue Sauce served with ranch or bleu cheese
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Cajun Fried Fish Bites</div>
        <div class="text-lightRed font-bold ml-auto">12.47</div>
        <div class="col-span-full">served with tartar sauce</div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Johnny's Drunken Shrimp</div>
        <div class="text-lightRed font-bold ml-auto">12.47</div>
        <div class="col-span-full">
          half dozen fresh gulf shrimp fried golden brown and tossed in our
          famous praline sauce
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Cup of Crawfish Etouffee</div>
        <div class="text-lightRed font-bold ml-auto">11.43</div>
        <div class="col-span-full">
          crawfish smothered in rich creamy étouffée sauce - served with white
          rice
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Appetizer Sampler</div>
        <div class="text-lightRed font-bold ml-auto">26.99</div>
        <div class="col-span-full">
          catfish bites - stuffed mushrooms - drunken shrimp - praline chicken -
          hot wings - served with ranch
        </div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        Soups
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Zydeco Gumbo</div>

        <div class="col-span-full">
          <span class="text-lightRed font-bold">Cup 10.39 | Bowl 14.03</span
          ><br />Chef Tony’s award-winning chicken & sausage gumbo served with
          white rice. Make it a bowl and we’ll add a side of potato salad!
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Seafood Gumbo</div>

        <div class="col-span-full">
          <span class="text-lightRed font-bold">Cup 11.43 | Bowl 15.07</span
          ><br />
          crab, shrimp & crawfish - served with white rice. Make it a bowl and
          we’ll add a side of potato salad!
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Crab Portabella Brie</div>

        <div class="col-span-full">
          <span class="text-lightRed font-bold">Cup 11.43 | Bowl 15.07</span
          ><br />rich & creamy fan-favorite
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        Salads
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Caesar Salad</div>
        <div class="text-lightRed font-bold ml-auto">11.43</div>
        <div class="col-span-full">
          romaine - croutons - tomato - parmesan - garlic caesar dressing
          <br />chicken $5.49 | shrimp $6.49 | tuna $11.99
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Spinach Salad</div>
        <div class="text-lightRed font-bold ml-auto">14.55</div>
        <div class="col-span-full">
          spinach - mushroom - red onion - feta - candied walnuts - tossed in
          cane syrup vinaigrette<br />
          chicken $5.71 | shrimp $6.75 | tuna $11.99
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Protein Cajun Cobb</div>
        <div class="text-lightRed font-bold ml-auto">21.79</div>
        <div class="col-span-full">
          spring mix - spinach | fried, blackened or grilled | shrimp - chicken
          - crawfish (seasonal) - tomato - avocado - applewood bacon - egg-
          cheddar - creole honey mustard
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Grilled Tuna Salad</div>
        <div class="text-lightRed font-bold ml-auto">22.35</div>
        <div class="col-span-full">
          tomato - mushroom - black olives - parmesan - sesame vinaigrette
          cooked to order
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>

      <!--       <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Side House or Caesar Salad</div>
        <div class="text-lightRed font-bold ml-auto">3.49</div>
        <div class="uppercase font-bold">Side Spinach Salad</div>
        <div class="text-lightRed font-bold ml-auto">4.49</div>
        <div class="col-span-full"></div>
      </div> -->
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Dressings Available</div>
        <div class="col-span-full">
          ranch - honey mustard - caesar - cane syrup vinaigrette - thousand
          island - bleu cheese - italian - balsamic vinaigrette - sesame
          vinaigrette - French
        </div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        Handhelds
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Club Sandwich</div>
        <div class="text-lightRed font-bold ml-auto">15.59</div>
        <div class="col-span-full">
          ham, turkey, bacon, lettuce, tomatoes and mayonnaise stacked high
          between texas toast
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Praline Wrap</div>
        <div class="text-lightRed font-bold ml-auto">16.63</div>
        <div class="col-span-full">
          Chicken or Shrimp (18.71). fried or grilled | spinach, mushroom, red
          onion, feta, candied walnuts, cane syrup vinaigrette, tomato basil
          wrap
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">B&J CheeseBurger</div>
        <div class="text-lightRed font-bold ml-auto">14.55</div>
        <div class="col-span-full">
          homemade hamburger patty topped with grilled onions, mushrooms,
          cheddar served on a jalapeño bun with lettuce, tomatoes, mayonnaise, &
          pickles
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Caesar Wrap</div>
        <div class="text-lightRed font-bold ml-auto">16.63</div>
        <div class="col-span-full">
          Chicken or Shrimp (18.71). fried, blackened or grilled <br />romaine,
          croutons, tomato, parmesan, garlic caesar dressing, tomato basil wrap
        </div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        Entrees
      </h5>
      <h6
        class="col-span-full m-auto text-1xl md:text-1xl uppercase font-bold text-lightRed tracking-widest mt-2"
      >
        Served with 2 sides of your choice
      </h6>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Cajun Fish Platter</div>
        <div class="text-lightRed font-bold ml-auto">18.71</div>
        <div class="col-span-full">fried | grilled | blackened</div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Shrimp Platter</div>
        <div class="text-lightRed font-bold ml-auto">19.75</div>
        <div class="col-span-full">fried | grilled | blackened</div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Hamburger Steak</div>
        <div class="text-lightRed font-bold ml-auto">17.67</div>
        <div class="col-span-full">
          Homemade Hamburger Steak topped with grilled onions, mushrooms, brown
          gravy <br />add pepperjack cheese for .99
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Blackened Tilapia</div>
        <div class="text-lightRed font-bold ml-auto">23.91</div>
        <div class="col-span-full">
          blackened tilapia fillet topped with grilled shrimp & basil cream
          sauce
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Grilled Ribeye</div>
        <div class="text-lightRed font-bold ml-auto">Market</div>
        <div class="col-span-full">grilled to perfection</div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Coatney's Crabcakes</div>
        <div class="text-lightRed font-bold ml-auto">25.00</div>
        <div class="col-span-full">
          two baked crab cakes topped with crab portabella brie
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Pork Ribeye</div>
        <div class="text-lightRed font-bold ml-auto">20.79</div>
        <div class="col-span-full">grilled to perfection</div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Stuffed Fish Savoy</div>
        <div class="text-lightRed font-bold ml-auto">30.15</div>
        <div class="col-span-full">
          grilled fish fillet - stuffed with crab - topped with crab portabella
          brie
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Filet Mignon</div>
        <div class="text-lightRed font-bold ml-auto">Market</div>
        <div class="col-span-full">grilled to perfection</div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Blackened Tacos</div>
        <div class="text-lightRed font-bold ml-auto">19.75</div>
        <div class="col-span-full">
          Choose fish or shrimp. topped with spicy ranch - avocado - angel hair
          cabbage - cilantro<br />Served with choice of fries
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Craw-fish Breaux Bridge</div>
        <div class="text-lightRed font-bold ml-auto">25.43</div>
        <div class="col-span-full">
          golden fried fish filet topped with crawfish étouffée served over
          white rice
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Crawfish Etouffee</div>
        <div class="text-lightRed font-bold ml-auto">22.43</div>
        <div class="col-span-full">served with potato salad & bread roll</div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Sides</div>
        <div class="text-lightRed font-bold ml-auto"></div>
        <div class="col-span-full">
          Loaded Mashed Potatoes &nbsp;3.11<br />
          Sweet Potato Fries &nbsp;4.15<br />
          Roasted Potatoes &nbsp;2.07<br />
          Potato Salad &nbsp;3.11<br />
          Bread Roll &nbsp;1.03<br />
          Grilled Veggies &nbsp;2.07<br />
          French Fries &nbsp;3.11<br />
          House Salad &nbsp;3.64<br />
          Caesar Salad &nbsp;5.19<br />
        </div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        Custom Pizza
      </h5>
      <h6
        class="col-span-full m-auto text-1xl md:text-1xl uppercase font-bold text-lightRed tracking-widest mt-2"
      >
        Substitute for 10" Cauliflour Crust Available
      </h6>
      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Speciality Sauce
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">6.75</div>
        <div class="text-lightRed text-center">10.91</div>
        <div class="text-lightRed text-center">15.59</div>
        <p class="col-span-full text-[#929497] text-center">
          pesto, bbq sauce, roasted garlic sauce
        </p>
      </div>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Toppings
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">1.03</div>
        <div class="text-lightRed text-center">2.07</div>
        <div class="text-lightRed text-center">3.63</div>
        <p class="col-span-full text-[#929497] text-center">
          extra cheese – parmesan – cheddar – feta – pepper jack – artichoke –
          tomato – jalapeńo – red onion – yellow onion – banana pepper – green
          onion – mushroom – spinach – bell pepper – pineapple – black olive –
          green olive – pepperoni – canadian bacon – ham – beef – applewood
          bacon – italian sausage
        </p>
      </div>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Speciality Toppings
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">3.11</div>
        <div class="text-lightRed text-center">4.67</div>
        <div class="text-lightRed text-center">6.75</div>
        <p class="col-span-full text-[#929497] text-center">
          roasted garlic – caramelized onion – sun-dried tomato – fresh basil –
          fresh mozzarella – grilled chicken – tasso – smoked pork sausage –
          shrimp – crawfish – crab – smoked chaurice – fresh alligator sausage
        </p>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10 mb-10"
      >
        Classic Pizza
      </h5>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Margherita
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">8.83</div>
        <div class="text-lightRed text-center">12.99</div>
        <div class="text-lightRed text-center">20.27</div>
        <p class="col-span-full text-[#929497] text-center">
          roasted garlic – mozzarella -roma tomato – fresh basil – balsamic
          reduction
        </p>
      </div>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Bianca
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">9.87</div>
        <div class="text-lightRed text-center">15.07</div>
        <div class="text-lightRed text-center">22.35</div>
        <p class="col-span-full text-[#929497] text-center">
          roasted garlic – mozzarella – spinach – mushroom – sun-dried tomato
        </p>
      </div>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Veggie
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">9.87</div>
        <div class="text-lightRed text-center">15.07</div>
        <div class="text-lightRed text-center">22.35</div>
        <p class="col-span-full text-[#929497] text-center">
          pesto – mozzarella – feta – artichoke – spinach – mushroom – green &
          red onion
        </p>
      </div>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          BBQ Chicken
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">10.91</div>
        <div class="text-lightRed text-center">16.11</div>
        <div class="text-lightRed text-center">22.35</div>
        <p class="col-span-full text-[#929497] text-center">
          bbq sauce – mozzarella – grilled chicken – red onion
        </p>
      </div>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Ragin’ Cajun
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">12.99</div>
        <div class="text-lightRed text-center">18.19</div>
        <div class="text-lightRed text-center">25.99</div>
        <p class="col-span-full text-[#929497] text-center">
          red sauce – pepper jack – shrimp – tasso – smoked chaurice – bell
          pepper – tomato
        </p>
      </div>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Steakhouse
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">12.99</div>
        <div class="text-lightRed text-center">18.19</div>
        <div class="text-lightRed text-center">25.99</div>
        <p class="col-span-full text-[#929497] text-center">
          roasted garlic – mozzarella – parmesan – prime rib – mushroom –
          caramelized onion
        </p>
      </div>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Caveman
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">12.99</div>
        <div class="text-lightRed text-center">18.19</div>
        <div class="text-lightRed text-center">25.99</div>
        <p class="col-span-full text-[#929497] text-center">
          red sauce – mozzarella – beef – pork sausage – italian sausage –
          applewood bacon – smoked chaurice
        </p>
      </div>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Bayou Blast
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">12.99</div>
        <div class="text-lightRed text-center">18.19</div>
        <div class="text-lightRed text-center">25.99</div>
        <p class="col-span-full text-[#929497] text-center">
          red sauce – cheddar – alligator sausage – tasso – shrimp – crawfish
          (seasonal) – jalapeńo – yellow onion
        </p>
      </div>
      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        Pasta
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Pasta Breaux Bridge</div>
        <div class="text-lightRed font-bold ml-auto">24.95</div>
        <div class="col-span-full">
          chicken – tasso – cream sauce – served over penne
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Chicken Atchafalaya</div>
        <div class="text-lightRed font-bold ml-auto">19.23</div>
        <div class="col-span-full">
          fried | grilled | blackened boneless chicken topped with pepper jack
          grilled onions - sautéed in a cream sauce - mushrooms - tasso - diced
          tomato served over angel hair
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Spaghetti with Meat Sauce</div>
        <div class="text-lightRed font-bold ml-auto">14.55</div>
        <div class="col-span-full">
          smothered Italian meat sauce served with angel hair noodles add
          <br />Italian sausage 3.00 <br />
          meatballs 3.49 <br />
          chicken 5.49<br />
          shrimp 6.49
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Alfredo Over Fettucine</div>
        <div class="text-lightRed font-bold ml-auto">14.55</div>
        <div class="col-span-full">
          Add Chicken 4.49 | Add Shrimp 5.49<br />
          rich creamy alfredo sauce served over fettucini
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Pasta Cecilia</div>
        <div class="text-lightRed font-bold ml-auto">25.47</div>
        <div class="col-span-full">
          shrimp - crabmeat - crawfish (seasonal) - spinach - mushroom -
          sun-dried tomato - served with a sherry cream sauce over penne
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Spicy Scampi</div>
        <div class="text-lightRed font-bold ml-auto">24.95</div>
        <div class="col-span-full">
          bacon garlic butter - shrimp - tasso - smoked chaurice jalapeño -
          served over penne
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Seafood Pasta</div>
        <div class="text-lightRed font-bold ml-auto">25.99</div>
        <div class="col-span-full">
          shrimp - crab - crawfish (seasonal) - tossed in a spicy cream sauce
          served over penne
        </div>
        <div class="absolute top-7 left-3 md:-left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4 text-lightRed mr-2"
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </svg>
        </div>
      </div>

      <!--<h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        ZYDECO BREAKFAST STARTERS
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Lil Troubles</div>
        <div class="text-lightRed font-bold ml-auto">8.00</div>
        <div class="col-span-full">grits topped with crawfish étouffée</div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Your Biscuit, Your Way</div>
        <div class="text-lightRed font-bold ml-auto">8.00</div>
        <div class="col-span-full">
          topped with crawfish étouffée or crab portabella brie
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Beignets</div>
        <div class="text-lightRed font-bold ml-auto">7.00</div>
        <div class="col-span-full"></div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Pancakes</div>
        <div class="text-lightRed font-bold ml-auto">7.00</div>
        <div class="col-span-full"></div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Sweet Potato Pancakes</div>
        <div class="text-lightRed font-bold ml-auto">8.00</div>
        <div class="col-span-full"></div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Biscuit and Gravy</div>
        <div class="text-lightRed font-bold ml-auto">7.00</div>
        <div class="col-span-full"></div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        ZYDECO BREAKFAST entrees
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">B and J Breakfast</div>
        <div class="text-lightRed font-bold ml-auto">12.00</div>
        <div class="col-span-full">
          2 eggs cooked your way + bacon + grits + biscuit *no substitutions*
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Don't Mess with my Tasso</div>
        <div class="text-lightRed font-bold ml-auto">13.00</div>
        <div class="col-span-full">
          omelet with grilled onions & tasso – topped with atchafalaya cream
          sauce served with biscuit
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Troubled Water</div>
        <div class="text-lightRed font-bold ml-auto">12.00</div>
        <div class="col-span-full">grits topped with crawfish étouffée</div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">All Jacked Up</div>
        <div class="text-lightRed font-bold ml-auto">13.00</div>
        <div class="col-span-full">
          omelet stuffed w. boudin – topped with pepper jack cheese served with
          biscuit
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Eggs Savoy</div>
        <div class="text-lightRed font-bold ml-auto">16.00</div>
        <div class="col-span-full">
          2 eggs cooked your way – my biscuit, my way (topped w/ crab portabella
          brie) & cajun crabcake
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Big Hat</div>
        <div class="text-lightRed font-bold ml-auto">14.00</div>
        <div class="col-span-full">
          omelet topped w. pepper jack cheese served w. troubled water (grits &
          étouffée)
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Ti-Na-Na</div>
        <div class="text-lightRed font-bold ml-auto">13.00</div>
        <div class="col-span-full">
          6″ cajun boudin pizza red sauce – pepper jack – spicy boudin – pork
          skins – steen’s syrup
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Cajun Boudin Breakfast</div>
        <div class="text-lightRed font-bold ml-auto">11.00</div>
        <div class="col-span-full">
          2 eggs cooked your way – grilled boudin – biscuit
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Egg Sandwich</div>
        <div class="text-lightRed font-bold ml-auto">6.00</div>
        <div class="col-span-full">
          2 fried eggs w. mayo, lettuce, tomato – on texas toast
          <br />
          make it a BB King (add bacon) – 5
          <br />
          make it a Sammy Davis (add sausage) – 5
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Zydeco Omelet</div>
        <div class="text-lightRed font-bold ml-auto">12.00</div>
        <div class="col-span-full">
          grilled onions – bell peppers – mushrooms – tomatoes – bacon topped
          with cheddar cheese served w. biscuit
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Cajun Swamp Rice</div>
        <div class="text-lightRed font-bold ml-auto">11.00</div>
        <div class="col-span-full">
          scrambled eggs & rice topped w. crawfish étouffée
        </div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        ZYDECO BREAKFAST Sides
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Biscuit</div>
        <div class="text-lightRed font-bold ml-auto">3.00</div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Hash Browns</div>
        <div class="text-lightRed font-bold ml-auto">4.00</div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Toast (white or wheat)</div>
        <div class="text-lightRed font-bold ml-auto">3.00</div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Sausage</div>
        <div class="text-lightRed font-bold ml-auto">4.00</div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Egg</div>
        <div class="text-lightRed font-bold ml-auto">2.00</div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Bacon</div>
        <div class="text-lightRed font-bold ml-auto">4.00</div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Grits</div>
        <div class="text-lightRed font-bold ml-auto">2.00</div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Boudin</div>
        <div class="text-lightRed font-bold ml-auto">6.00</div>
      </div>-->
    </div>

    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<style scoped>
.cls-1 {
  fill: #fff;
  stroke: #231f20;
  stroke-miterlimit: 10;
  stroke-width: 1.25px;
}

.cls-1 {
  fill: #fff;
}

.MenuButtons {
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  background-color: #333333b3;
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 2px solid #000;
}

.Holiday {
  background-color: #970017;
}
</style>
