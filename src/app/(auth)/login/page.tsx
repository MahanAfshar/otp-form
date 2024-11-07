"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import star from "@/../public/icons/star.svg";
import Button from "@/components/reuseable/Button";
import chevronLeft from "@/../public/icons/chevronLeft.svg";
import Toggle from "@/components/reuseable/Toggle";
import OtpInputs from "@/components/reuseable/OtpInputs";

export default function LoginPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showInputCode, setShowInputCode] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    timer;
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <main className="flex flex-col justify-between gap-14 min-h-screen p-5 max-w-[400px]">
      <div className="flex items-center justify-between">
        <Button
          srcIcon={chevronLeft}
          altIcon="back"
          outline
          className="!w-10 !h-10"
          onClick={() => {
            if (showInputCode) {
              setIsValid(true);
              setShowInputCode(false);
            } else router.push("/");
          }}
        />
        <Image src={star} width={45} height={45} alt="star" />
      </div>
      {showInputCode ? (
        <>
          <div className="grid gap-6">
            <div>
              <h2 className="font-bold text-2xl">Enter code</h2>
              <p className="text-black/70 mt-4">
                We’ve sent an SMS with an activation code to your phone +98{" "}
                {phoneNumber}
              </p>
            </div>
            <div
              className={`flex flex-col items-center gap-3 *:gap-3 py-3 ${
                isValid ? "border-black/50" : " border-red-500"
              }`}
            >
              <OtpInputs
                className={isValid ? "border-black/50" : "border-red-500"}
              />
              {!isValid && (
                <span className="text-red-500 text-center">
                  Wrong code, please try again
                </span>
              )}
            </div>
          </div>
          <div>
            {countdown > 0 ? (
              <p className="text-center">
                Send code again 00:{countdown.toString().padStart(2, "0")}
              </p>
            ) : (
              <Button
                title="Send code"
                className="!p-0 w-fit mx-auto"
                onClick={() => setCountdown(30)}
              />
            )}
            <Button
              title="Continue"
              className="bg-black text-white mt-3"
              onClick={() => {
                setIsValid(false);
              }}
            />
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-5">
            <h2 className="font-bold text-2xl">Log in</h2>
            <p className="text-black/70">
              Please confirm your country code and enter your phone number.
            </p>
            <div
              className={`flex items-center py-3 border-b ${
                isValid ? "border-black/50" : " border-red-500"
              }`}
            >
              <span className="pr-4 border-r border-black/50">+98</span>
              <input
                type="tel"
                placeholder="000 000 0000"
                className="text-black/50 placeholder:text-black/50 outline-none border-none pl-4 w-full"
                value={phoneNumber}
                maxLength={10}
                onChange={(e) => {
                  setIsValid(true);
                  const value = e.target.value;
                  setPhoneNumber(value);
                  if (value.length >= 3) {
                    const validNumber = /^9[0 | 1 | 2 | 3 | 9]\d+$/g.test(value);
                    setIsValid(validNumber);
                  }
                }}
              />
            </div>
            {!isValid && (
              <span className="text-red-500 text-center">
                Please enter a valid phone number
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span>Sync Contacts</span>
              <Toggle />
            </div>
            <Button
              title="Continue"
              className="bg-black text-white mt-3"
              disabled={!isValid || phoneNumber.length !== 10}
              onClick={() => {
                setIsValid(true);
                setShowInputCode((prev) => !prev);
                setCountdown(30);
              }}
            />
          </div>
        </>
      )}
    </main>
  );
}
