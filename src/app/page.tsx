"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import manyStars from "@/../public/icons/manyStars.svg";
import Button from "@/components/reuseable/Button";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="p-5 flex flex-col justify-between gap-9 min-h-screen max-w-[400px]">
      <Image src={manyStars} width={315} height={275} alt="many stars" />
      <div className="text-center">
        <h1 className="font-bold text-2xl">Explore the app</h1>
        <p className="text-black/70 mt-3">
          Now your finances are in one place and always under control
        </p>
      </div>
      <div>
        <Button
          title="Log in"
          className="bg-black text-white"
          onClick={() => router.push("/login")}
        />
        <Button title="Create account" className="mt-2" outline />
      </div>
    </main>
  );
}
