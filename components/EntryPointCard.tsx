'use client';
import { Card, CardBody } from "@heroui/react";
import Link from "next/link";

interface EntryPointCardProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}

export default function EntryPointCard({ title, icon, link }: EntryPointCardProps) {
  const cardContent = (
    <Card className="h-full w-full bg-gradient-to-b from-primary-50 to-primary-100 rounded-[25px] transition-transform duration-300 hover:scale-105 cursor-pointer">
      <CardBody className="p-10">
        <div className="h-1/2 flex items-center relative">
          <div className="absolute z-0 opacity-30">
            {icon}
          </div>

          <div className="z-10 ml-4">
            {icon}
          </div>
        </div>

        <div className="h-1/2 flex justify-between items-center">
          <p className="text-5xl font-semibold text-primary-700">{title}</p>
        </div>
      </CardBody>
    </Card>
  );

  return <Link href={link}>{cardContent}</Link>;
}
