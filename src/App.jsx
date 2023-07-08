import "./App.css";

function App() {
  return (
    <div class="font-primary">
      <div className="w-full h-10 bg-black flex items-center justify-center">
        <p className="text-white leading-tight text-xs sm:text-sm">
          <strong class="mr-1 font-medium">New!</strong> We launched our
          affiliate program! <a class="underline ml-1">See more</a>
        </p>
      </div>
      <div class="flex justify-between sm:justify-around mt-4 items-center px-5">
        <a
          href=""
          className="text-black font-semibold leading-7 font-heading text-[clamp(1.5rem,2.13vw+1rem,2rem)]"
        >
          launch
        </a>
        <a href="" className="sm:hidden">
          <i className="fa fa-bars"></i>
        </a>
        <div class="hidden gap-10 sm:flex">
          <a href="">What is Launch?</a>
          <a href="">Pricing</a>
          <a href="faq">FAQ</a>
        </div>
        <button className="hidden bg-sky-100 rounded-lg font-medium px-5 py-3  hover:bg-sky-300 sm:inline-block">
          Buy now
        </button>
      </div>
      <div class="flex flex-col items-center mx-auto mt-24 px-5 sm:max-w-[50rem]">
        <h1 className="text-center text-black text-[clamp(2rem,6.4vw+1rem,6rem)] font-semibold font-heading leading-[1.1]">
          Launch a saas product in style
        </h1>
        <p className="text-center text-gray-700 text-lg sm:text-2xl font-normal leading-9 mt-[1.5rem]">
          Create a stylish website easy and for everyone – SaaS Platforms,
          Technology Startups and more.
        </p>
        <div className="flex flex-col mt-[2rem] font-medium gap-4 w-full justify-center sm:flex-row sm:text-lg">
          <button className="bg-black text-center text-white rounded-xl py-3.5 px-8 sm:py-7">
            Buy Now
            <span className="ml-2">
              <i class="fa fa-arrow-right"></i>
            </span>
          </button>
          <button className="bg-sky-100 text-center text-black rounded-xl px-8 py-3.5 hover:bg-sky-300">
            Preview in Figma
          </button>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
