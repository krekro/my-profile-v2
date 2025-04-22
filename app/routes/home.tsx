import type { Route } from "./+types/home";
import {Button} from "app/components/ui/button";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "My Profile" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return(  <>
  

    <div className="mt-5 p-3 flex flex-wrap">
      <div className="font-bold text-8xl text-gray-700">
        
        <h1 className="p-8">Hi,</h1>
        <h1 className="p-8">I am <span className="text-blue-400">Tennyson</span></h1>
        <h1 className="p-8">I am a <span className="font-nerdy">Web Developer</span></h1>
      </div>
    </div>
    <div className="mt-10 p-3 flex flex-wrap justify-center">
      <Button className="p-5 rounded-2xl text-xl bg-blue-400 text-white hover:bg-gray-900">
        <a href="/">Contact me</a>
      </Button>
    </div>
    


  </>)

}
