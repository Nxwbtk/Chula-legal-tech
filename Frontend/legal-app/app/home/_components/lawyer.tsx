import { Card, CardContent } from "@/components/ui/card";
import { Menu, SortDescIcon, StarIcon, TargetIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type TLawyerInfo = {
  honorific: string;
  name: string;
  province: string;
  rating: number;
  price: number;
  image: string;
  tags: string[];
};

export const LawyerCard = (props: TLawyerInfo) => {
  const { name, province, rating, price, image, tags, honorific } = props;
  return (
    <Card className="inline-block">
      <CardContent className="flex flex-col border border-black rounded-xl">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="self-center rounded-xl p-2"
        />
        <p>
          {honorific}
          {name}
        </p>
        <div className="flex flex-row items-center gap-2">
          <p>{province}</p>
          <div className="border-l border-black h-full mx-2"></div>
          <StarIcon color="#E6D584" size={16} />
          <p>{rating}</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            {tags.map((tag, index) => (
              <div key={index} className="border border-black rounded-xl px-2">
                <p className="text-[#143D7C]">{tag}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end">
            <p>เริ่มต้น</p>
            <p className="text-[#143D7C]">{price} บาท</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const LAWYER: TLawyerInfo[] = [
  {
    honorific: "นาย",
    name: "สมชาย ใจดี",
    province: "กรุงเทพ",
    rating: 4.9,
    price: 5000,
    image: "https://github.com/shadcn.png",
    tags: ["คดีแพ่ง", "คดีอาญา"],
  },
  {
    honorific: "นาง",
    name: "สมหญิง ใจดี",
    province: "กรุงเทพ",
    rating: 4.9,
    price: 5000,
    image: "https://github.com/shadcn.png",
    tags: ["คดีแพ่ง", "คดีอาญา"],
  },
  {
    honorific: "นาง",
    name: "สมหญิง ใจดี",
    province: "กรุงเทพ",
    rating: 4.9,
    price: 5000,
    image: "https://github.com/shadcn.png",
    tags: ["คดีแพ่ง", "คดีอาญา"],
  },
  {
    honorific: "นาง",
    name: "สมหญิง ใจดี",
    province: "กรุงเทพ",
    rating: 4.9,
    price: 5000,
    image: "https://github.com/shadcn.png",
    tags: ["คดีแพ่ง", "คดีอาญา"],
  },
  {
    honorific: "นาง",
    name: "สมหญิง ใจดี",
    province: "กรุงเทพ",
    rating: 4.9,
    price: 5000,
    image: "https://github.com/shadcn.png",
    tags: ["คดีแพ่ง", "คดีอาญา"],
  },
];

export const HomeLawyer = () => {
  return (
    <div className="flex flex-col gap-4 w-3/4">
      <h1 className="text-2xl font-bold">ทนาย</h1>
      <div className="flex flex-row gap-2">
        <div className="border rounded-lg border-black hover:cursor-pointer">
          <div className="p-2 flex flex-row items-center gap-4">
            <Menu color="#143D7C" size={24} />
            <p className="text-xl">Filter</p>
          </div>
        </div>
        <div className=" border rounded-lg border-black hover:cursor-pointer">
          <div className="p-2 flex flex-row items-center gap-4">
            <SortDescIcon color="#143D7C" size={24} />
            <p className="text-xl">Sort by</p>
          </div>
        </div>
        <div className=" border rounded-lg border-black hover:cursor-pointer">
          <div className="p-2 flex flex-row items-center gap-4">
            <TargetIcon color="#143D7C" size={24} />
            <p className="text-xl">Province</p>
          </div>
        </div>
      </div>
      <p className="text-xl">Found 15,481</p>
      <div className="grid grid-cols-4 gap-2">
        {LAWYER.map((lawyer, index) => (
          <Link href={`/lawyer/${index}`} key={index}>
            <LawyerCard key={index} {...lawyer} />
          </Link>
        ))}
      </div>
    </div>
  );
};
