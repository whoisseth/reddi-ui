/** @format */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { MessageSquare, QrCode, Upload } from "lucide-react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";

type HomeProps = {
  currentPage?: string;
};
export default function Home(props: HomeProps) {
  return (
    <div className="  flex flex-col gap-3">
      {/* page title */}
      <h2 className="text-3xl font-semibold capitalize">
        {props.currentPage || "Home "}
      </h2>

      <section className="w-full flex items-center justify-center">
        <Carousel
          opts={{
            align: "start"
          }}
          // className="w-[calc(100%-100px)]   "
          className="w-full   "
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem
                key={i}
                className="basis-1/1 sm:asis-1/2   lg:basis-1/3"
              >
                <NewsCard bannerImg={i + 1} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" left-3" />
          <CarouselNext className=" right-16" />
        </Carousel>
      </section>

      {/*  */}

      <section className="flex gap-3">
        {/* left  main */}

        <main className=" flex flex-col gap-3   ">
          <PostCard />
          <PostCard />
          <PostCard />
        </main>

        <aside className="w-full h-fit max-w-80 border  flex-col gap-2 rounded-xl  py-3 px-2 sticky top-0 bg-secondary hidden lg:flex">
          {/* right sidebar */}
          <p className="px-3 font-semibold ">POPULAR COMMUNITIES</p>
          <section className="flex flex-col gap-3">
            <CommnunitiesCard />
            <CommnunitiesCard />
            <CommnunitiesCard />
            <CommnunitiesCard />
            <CommnunitiesCard />
          </section>
        </aside>
      </section>
    </div>
  );
}

function CommnunitiesCard() {
  const imgNo = 44;

  const imgURL = `https://api.dicebear.com/7.x/pixel-art/svg?seed=Charlie${imgNo}`;

  return (
    <div className=" flex gap-3  rounded-full px-3 py-1.5 cursor-pointer">
      {/* left */}
      <img className="h-10 w-10" src={imgURL} alt="cummunity-img" />
      <div className="flex flex-col gap-1">
        {/* c name */}
        <p className="text-sm text-gray-600">utkarshseth</p>
        <p className="text-xs text-gray-400"> 4,345,555 members </p>
        {/* members */}
      </div>
    </div>
  );
}

function PostCard() {
  const imgNo = 1;
  const avatarImg = `https://api.dicebear.com/7.x/lorelei/svg?seed=Charlie${imgNo}&radius=15&backgroundType=gradientLinear&earrings=variant01,variant03`;

  return (
    <div className="w-full rounded-xl bg-background flex flex-col gap-3 pb-4 overflow-auto  border h-auto">
      {/* line 1 */}
      <section className="flex w-full justify-between gap-2 p-2 ">
        {/* left */}
        <div className="flex items-center gap-1 ">
          <img className="h-12 w-12" src={avatarImg} alt="uer-img" />
          {/* username */}
          <p className="text-sm text-gray-600">utkarshseth</p>
          {/* time */}
          <p className="text-gray-400 text-xs">7 hr. ago</p>
        </div>

        {/* right side */}
        <div className="flex gap-3">
          <Button className="bg-blue-500 text-white font-bold rounded-3xl text-xs py-1 px-3">
            Join
          </Button>
          <Button variant="secondary" className="w-10 h-10 p-2 rounded-3xl">
            <PiDotsThreeOutlineFill />
          </Button>
        </div>
      </section>
      <p className="font-bold px-4">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      {/*  */}
      <div className="w-full h-[550px] bg-black rounded-2xl">
        <img
          className="h-full w-full"
          src={`https://api.slingacademy.com/public/sample-photos/${57}.jpeg`}
          alt=""
        />
      </div>

      <div className="flex items-center gap-3 px-2 pt-3 ">
        <div className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2 rounded-full p-1">
          <button className="p-2 rounded-full">
            <TbArrowBigUp />
          </button>
          <p>849</p>
          <button className="p-2 rounded-full">
            <TbArrowBigDown />
          </button>
        </div>

        <Button
          variant={"secondary"}
          className="flex items-center gap-1 rounded-full "
        >
          <MessageSquare />
          114
        </Button>
        <Button
          variant={"secondary"}
          className="flex items-center gap-1 rounded-full "
        >
          <Upload />
          Share
        </Button>
      </div>
    </div>
  );
}

type NewsCardType = {
  bannerImg: number;
};

function NewsCard(props: NewsCardType) {
  return (
    // 280 * 210
    <div className="w-[280px] h-[210px] border relative rounded-lg overflow-hidden text-white flex items-end">
      <img
        className="absolute top-0 left-0 h-full w-full  brightness-50"
        src={`https://api.slingacademy.com/public/sample-photos/${props.bannerImg}.jpeg`}
        alt=""
      />
      <section className="flex flex-col gap-1  relative  p-2 ">
        <h2 className="text-2xl font-bold  w-[260px]  truncate ">
          Lorem ipsum {props.bannerImg}
        </h2>
        <p className="w-[260px]  truncate  text-slate-100 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, neque.
        </p>

        <div className="flex gap-2 items-center">
          <img
            className="h-8 w-8 rounded-full"
            src={`https://api.slingacademy.com/public/sample-photos/${
              props.bannerImg + 11
            }.jpeg`}
          />
          <p className="text-sm">Lorem ipsum dolor sit.</p>
        </div>
      </section>
    </div>
  );
}
