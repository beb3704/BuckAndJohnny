<template>
  <div>
    <Bnjnav></Bnjnav>
    <SubHeader title="menu" sub-title="delicious choices for every meal">
      <div
        class="text-textLight grid grid-cols-2 p-2 gap-10 m-auto"
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

        <div class="bg-darkRed py-1">
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
        </div>
      </div>
    </SubHeader>

    <div class="bg-[#000]">
      <h4 class="text-[#fff] uppercase text-center text-3xl font-bold py-4">
        Lunch & dinner
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
        <div class="text-lightRed font-bold ml-auto">8.99</div>
        <div class="col-span-full">
          boneless chicken fried golden brown and hand-tossed in our famous
          praline sauce
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
        <div class="text-lightRed font-bold ml-auto">6.99</div>
        <div class="col-span-full">
          bite-size garlic bread served with marinara
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Spinach & Artichoke dip</div>
        <div class="text-lightRed font-bold ml-auto">10.99</div>
        <div class="col-span-full">
          creamy spinach dip topped with cheddar cheese served with homemade
          tortilla chips
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
        <div class="text-lightRed font-bold ml-auto">7.99</div>
        <div class="col-span-full">
          sliced eggplant - fried golden brown and served with marinara
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Grilled Quesadilla</div>
        <div class="text-lightRed font-bold ml-auto">12.99</div>
        <div class="col-span-full">
          Chicken or Shrimp (+$2) - served with salsa and sour cream
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Bread and Oil</div>
        <div class="text-lightRed font-bold ml-auto">6.99</div>
        <div class="col-span-full">
          baked ciabatta roll - sliced and served with olive oil and spices
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Swamp Sticks</div>
        <div class="text-lightRed font-bold ml-auto">7.99</div>
        <div class="col-span-full">
          garlic cheese sticks served with ranch or marinara
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Caprese</div>
        <div class="text-lightRed font-bold ml-auto">10.99</div>
        <div class="col-span-full">
          vine-ripened tomato - fresh mozzarella - basil - olive oil balsamic
          reduction
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Stuffed Fried Mushroom</div>
        <div class="text-lightRed font-bold ml-auto">11.99</div>
        <div class="col-span-full">
          portabella mushrooms stuffed with seafood stuffing served with ranch
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Hot Wings</div>
        <div class="text-lightRed font-bold ml-auto">7.99</div>
        <div class="col-span-full">
          eight wings served with ranch or bleu cheese
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Crabmeat Crustini</div>
        <div class="text-lightRed font-bold ml-auto">10.99</div>
        <div class="col-span-full">
          garlic toast topped with crabmeat stuffing served with ranch
        </div>
      </div>
      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        TASTE OF SOUTH LOUISIANA
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Cajun Fried Catfish Bites</div>
        <div class="text-lightRed font-bold ml-auto">10.99</div>
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
        <div class="text-lightRed font-bold ml-auto">10.99</div>
        <div class="col-span-full">
          half dozen fresh gulf shrimp fried golden brown and tossed in our
          famous praline sauce
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Cup of Crawfish Etouffee</div>
        <div class="text-lightRed font-bold ml-auto">8.99</div>
        <div class="col-span-full">
          crawfish smothered in rich creamy etouffee sauce - served with white
          rice
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Appetizer Sampler</div>
        <div class="text-lightRed font-bold ml-auto">21.99</div>
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
        <div class="uppercase font-bold">Award Winning Zydeco Gumbo</div>

        <div class="col-span-full">
          <span class="text-lightRed font-bold">Cup 8.99 | Bowl 13.49</span
          ><br />chef tony's award-winning chicken and sausage gumbo - served
          with white rice and potato salad
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Award Winning Seafood Gumbo</div>

        <div class="col-span-full">
          <span class="text-lightRed font-bold">Cup 9.99 | Bowl 14.49</span
          ><br />
          crab, shrimp & crawfish – served with white rice & potato salad
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Crab Portabella Brie</div>

        <div class="col-span-full">
          <span class="text-lightRed font-bold">Cup 9.99 | Bowl 14.49</span
          ><br />crab meat and portabella mushroom soup
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
        <div class="text-lightRed font-bold ml-auto">10.99</div>
        <div class="col-span-full">
          romaine - crouton - tomato - parmesan - garrlic caesar dressing. Add
          Grilled Chicken (+4.49), Grilled Shrimp (+5.49), Add Tuna (+10.99)
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Spinach Salad</div>
        <div class="text-lightRed font-bold ml-auto">13.99</div>
        <div class="col-span-full">
          spinach - mushroom - red onion - feta - candied walnut - cane syrup
          vinaigrette. Add Grilled Chicken (+4.49), Grilled Shrimp (+5.49), Add
          Tuna (+10.99)
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Protein Cajun Cobb</div>
        <div class="text-lightRed font-bold ml-auto">16.99</div>
        <div class="col-span-full">
          romaine - spinach - fried or grilled shrimp - chicken - crawfish
          (seasonal) - tomato - avocado -applewood bacon - egg - cheddar -
          creole honey mustard
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
        <div class="text-lightRed font-bold ml-auto">19.49</div>
        <div class="col-span-full">
          tomato - mushroom - black olive - parmesan - cooked to order tuna
          steak - sesame vinaigrette
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
        <div class="uppercase font-bold">Side House or Caesar Salad</div>
        <div class="text-lightRed font-bold ml-auto">3.49</div>
        <div class="uppercase font-bold">Side Spinach Salad</div>
        <div class="text-lightRed font-bold ml-auto">4.49</div>
        <div class="col-span-full"></div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Dressings Available</div>
        <div class="col-span-full">
          ranch - honey mustard - caesar - cane syrup vinaigrette - thousand
          island - bleu cheese - italian - balsamic vinaigrette - sesame
          vinaigrette
        </div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        Sandwiches
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Club</div>
        <div class="text-lightRed font-bold ml-auto">13.49</div>
        <div class="col-span-full">
          smoked turkey – ham – applewood bacon – american cheese – fully
          dressed on texas toast or wheat
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Praline Wrap</div>
        <div class="text-lightRed font-bold ml-auto">13.99</div>
        <div class="col-span-full">
          Chicken or Shrimp (+2.00). fried or grilled – spinach – mushroom – red
          onion – feta – candied walnut – cane syrup vinaigrette rolled in a
          tomato basil tortilla
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">B&J Burger</div>
        <div class="text-lightRed font-bold ml-auto">12.99</div>
        <div class="col-span-full">
          homemade flame-broiled patty topped with cheddar – grilled onion
          sautéed mushroom – fully dressed on jalapeńo bun
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Caesar Wrap</div>
        <div class="text-lightRed font-bold ml-auto">19.49</div>
        <div class="col-span-full">
          Chicken or Shrimp (+2.00). fried or grilled – romaine – crouton –
          tomato – parmesan – garlic caesar dressing – rolled in a tomato basil
          tortilla
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Creole Cajun Wrap</div>
        <div class="text-lightRed font-bold ml-auto">16.99</div>
        <div class="col-span-full">
          Chicken or Shrimp (+2.00). fried or grilled – romaine – crouton –
          tomato – parmesan – garlic caesar dressing – rolled in a tomato basil
          tortilla
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Cajun Po-Boy</div>
        <div class="text-lightRed font-bold ml-auto">12.99</div>
        <div class="col-span-full">
          Catfish or Shrimp (+1.00). fried or grilled – lettuce – tomato – mayo
        </div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        Entrees
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Cajun Fried Fish Platter</div>
        <div class="text-lightRed font-bold ml-auto">16.99</div>
        <div class="col-span-full">
          fried with choice of fries or grilled with roasted potatoes & veggies
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
        <div class="uppercase font-bold">Hamburger Steak</div>
        <div class="text-lightRed font-bold ml-auto">16.99</div>
        <div class="col-span-full">
          homemade hamburger steak topped with grilled onion sautéed mushroom –
          brown gravy – add cheese .99
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Blackened Tilapia</div>
        <div class="text-lightRed font-bold ml-auto">19.49</div>
        <div class="col-span-full">
          blackened tilapia filet topped with grilled shrimp & basil cream sauce
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
        <div class="col-span-full">
          grilled to perfection -served with veggies & twice-baked potato
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Coatney's Crabcakes</div>
        <div class="text-lightRed font-bold ml-auto">21.99</div>
        <div class="col-span-full">
          two baked crab cakes topped with crab portabella brie
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Pork Ribeye</div>
        <div class="text-lightRed font-bold ml-auto">16.99</div>
        <div class="col-span-full">
          grilled to perfection – served with veggies & twice-baked potato
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Shrimp Platter</div>
        <div class="text-lightRed font-bold ml-auto">18.99</div>
        <div class="col-span-full">
          fried with choice of fries or grilled with roasted potatoes & veggies
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Stuffed Fish Savoy</div>
        <div class="text-lightRed font-bold ml-auto">21.99</div>
        <div class="col-span-full">
          grilled fish filet – stuffed with crab topped with crab portabella
          brie
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Filet Mignon</div>
        <div class="text-lightRed font-bold ml-auto">Market</div>
        <div class="col-span-full">
          grilled to perfection – served with veggies & twice-baked potato
        </div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10"
      >
        Taste of South Louisiana
      </h5>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Blackened Fish Tacos</div>
        <div class="text-lightRed font-bold ml-auto">17.99</div>
        <div class="col-span-full">
          topped with spicy avocado ranch – angel hair cabbage – cilantro served
          with choice of fries
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Crawfish Enchiladas</div>
        <div class="text-lightRed font-bold ml-auto">21.99</div>
        <div class="col-span-full">
          autéed crawfish with pepper jack rolled and topped with cheddar &
          chili rotel sauce – order of three
        </div>
      </div>

      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Craw-fish Breaux Bridge</div>
        <div class="text-lightRed font-bold ml-auto">22.49</div>
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
        <div class="text-lightRed font-bold ml-auto">18.99</div>
        <div class="col-span-full">served with potato salad & bread roll</div>
      </div>

      <h5
        class="col-span-full m-auto text-2xl md:text-3xl uppercase font-bold text-darkRed tracking-widest mt-10 mb-10"
      >
        Custom Pizza
      </h5>

      <div class="grid grid-cols-[1fr,1fr,1fr] py-6 px-4 content-center">
        <div class="uppercase font-bold col-span-full mb-2 text-center">
          Speciality Sauce
        </div>
        <div class="text-[#929497] text-center">6"</div>
        <div class="text-[#929497] text-center">10"</div>
        <div class="text-[#929497] text-center">14"</div>
        <div class="text-lightRed text-center">6.49</div>
        <div class="text-lightRed text-center">10.49</div>
        <div class="text-lightRed text-center">14.99</div>
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
        <div class="text-lightRed text-center">.99</div>
        <div class="text-lightRed text-center">1.99</div>
        <div class="text-lightRed text-center">3.49</div>
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
        <div class="text-lightRed text-center">2.99</div>
        <div class="text-lightRed text-center">4.49</div>
        <div class="text-lightRed text-center">6.49</div>
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
        <div class="text-lightRed text-center">8.49</div>
        <div class="text-lightRed text-center">12.49</div>
        <div class="text-lightRed text-center">19.49</div>
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
        <div class="text-lightRed text-center">9.49</div>
        <div class="text-lightRed text-center">14.49</div>
        <div class="text-lightRed text-center">21.49</div>
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
        <div class="text-lightRed text-center">9.49</div>
        <div class="text-lightRed text-center">14.49</div>
        <div class="text-lightRed text-center">21.49</div>
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
        <div class="text-lightRed text-center">10.49</div>
        <div class="text-lightRed text-center">15.49</div>
        <div class="text-lightRed text-center">21.49</div>
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
        <div class="text-lightRed text-center">12.49</div>
        <div class="text-lightRed text-center">17.49</div>
        <div class="text-lightRed text-center">24.99</div>
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
        <div class="text-lightRed text-center">12.49</div>
        <div class="text-lightRed text-center">17.49</div>
        <div class="text-lightRed text-center">24.99</div>
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
        <div class="text-lightRed text-center">12.49</div>
        <div class="text-lightRed text-center">17.49</div>
        <div class="text-lightRed text-center">24.99</div>
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
        <div class="text-lightRed text-center">12.49</div>
        <div class="text-lightRed text-center">17.49</div>
        <div class="text-lightRed text-center">24.99</div>
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
        <div class="text-lightRed font-bold ml-auto">20.99</div>
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
        <div class="text-lightRed font-bold ml-auto">17.49</div>
        <div class="col-span-full">
          fried or grilled boneless chicken breast topped with pepper jack
          grilled onion – sautéed mushroom – tasso – diced tomato – served over
          angel hair
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
        <div class="uppercase font-bold">Spaghetti with Marinara Sauce</div>
        <div class="text-lightRed font-bold ml-auto">13.99</div>
        <div class="col-span-full">
          Add Meatballs – 3.49 smothered italian meat sauce served with
          spaghetti noodles
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Alfredo Over Fettucine</div>
        <div class="text-lightRed font-bold ml-auto">13.99</div>
        <div class="col-span-full">
          Add Chicken 4.49 | Add Shrimp 5.49<br />
          rich creamy alfredo sauce served over fettucini
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Fresca Over Angel Hair</div>
        <div class="text-lightRed font-bold ml-auto">14.99</div>
        <div class="col-span-full">
          Add Chicken 4.49 | Add Shrimp 5.49<br />
          fresh basil – garlic – cherry tomato – herb butter cream sauce
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Pasta Cecilia</div>
        <div class="text-lightRed font-bold ml-auto">22.49</div>
        <div class="col-span-full">
          shrimp – crabmeat – crawfish (seasonal) – spinach – mushroom –
          sun-dried tomato – sherry cream sauce
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Spicy Scampi</div>
        <div class="text-lightRed font-bold ml-auto">22.99</div>
        <div class="col-span-full">
          bacon garlic butter – shrimp – tasso – smoked chaurice – jalapeńo
        </div>
      </div>
      <div
        class="grid grid-cols-[1fr,min-content] py-6 md:px-4 px-8 content-start"
      >
        <div class="uppercase font-bold">Seafood Pasta</div>
        <div class="text-lightRed font-bold ml-auto">23.99</div>
        <div class="col-span-full">
          shrimp – crab – crawfish (seasonal) – tossed in spicy cream sauce –
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

      <h5
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
      </div>
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
</style>