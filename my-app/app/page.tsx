// import Image from "next/image";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <Header />
      <h1>hello world!</h1>
      <Button variant="destructive">click me</Button>
    </div>
  );
}
