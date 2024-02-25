import Feed from "@components/Feed";

export default function Home() {
  return (
     <section className="w-full flex-center flex-col ">
       
       <h1 className="head_text text-center"> Discover & Share
       <br className="max-md:hidden"/> <br />
       <span className="orange_gradient text-center">AI-Powerd-Prompts</span>
       </h1>
       <p className="desc text-center">
       Discover the best AI prompts for ChatGPT, Midjourney, Dall-E, 
       and more. Save them and create
        collections with your team
       </p>
       <Feed/>
     </section>
  );
}
