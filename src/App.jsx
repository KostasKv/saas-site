import "./App.css";

function App() {
  return (
    <div class="font-primary">
      <div className="w-full h-10 bg-black flex items-center justify-center">
        <p className="text-white text-sm leading-tight">
          <strong class="mr-1 font-medium">New!</strong> We launched our
          affiliate program! <a class="underline ml-1">See more</a>
        </p>
      </div>
      <div class="flex justify-around mt-4 items-center">
        <a
          href=""
          className="text-black text-[32px] font-semibold leading-7 font-heading"
        >
          launch
        </a>
        <div class="flex gap-10">
          <a href="">What is Launch?</a>
          <a href="">Pricing</a>
          <a href="faq">FAQ</a>
        </div>
        <button className="bg-sky-100 rounded-lg font-medium px-5 py-3 duration-75 hover:bg-sky-300">
          Buy now
        </button>
      </div>
      <div className="grid grid-cols-[1fr_min(50rem,calc(100%-64px))_1fr] mt-24">
        <div class="flex flex-col col-[2] items-center">
          <h1 className="text-center text-black text-8xl font-semibold font-heading leading-[1.1]">
            Launch a saas product in style
          </h1>
          <p className="text-center text-gray-700 text-[24px] font-normal leading-9 mt-[1.5rem]">
            Create a stylish website easy and for everyone – SaaS Platforms,
            Technology Startups and more.
          </p>
          <div className="flex mt-[2rem] text-lg font-medium gap-4">
            <button className="bg-black text-center text-white rounded-xl px-8 py-7">
              Buy Now{" "}
              <span className="ml-1">
                <i class="fa fa-arrow-right"></i>
              </span>
            </button>
            <button className="bg-sky-100 text-center text-black rounded-xl px-8 py-7 duration-75 hover:bg-sky-300">
              Preview in Figma
            </button>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
