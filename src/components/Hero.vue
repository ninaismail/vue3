<template>
  <section class="flex flex-col justify-center w-full h-screen p-6 bg-center bg-cover bg-hero">
    <div class="flex flex-col justify-between w-10/12">
      <div class="flex flex-col justify-between min-h-[20vh] gap-y-2">
        <div>
        <h1 class="text-bg1 lg:text-[32px] text-[28px] font-[700]">
          Home of Luxery
        </h1>
        <p class="tracking-wide text-bg1 font-[600] text-justify">what's your style?</p>          
        </div>
        <RouterLink
          id="go-to-portfolio-page"
          aria-label="go to portfolio page"
          to="/portfolio"
          class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px] text-accent1 bg-bg1 hover:brightness-125 uppercase"
          >View Projects</RouterLink>
      </div>
    </div>
  </section>
</template>
  