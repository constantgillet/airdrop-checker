import Head from "next/head";
import Header from "../components/Header";
import Container from "../components/Container";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import airdropIllustration from "../assets/images/home-image.png";
import { useState } from "react";
import { Footer } from "../components/Footer";

export default function Home() {
  const [address, setAddress] = useState("");

  return (
    <div>
      <Head>
        <title>Airdrop checker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="index-background px-0 pt-8 pb-32">
        <Header />
        <Container>
          <div className="mx-auto w-full space-y-10 mt-16">
            <p className="uppercase text-center text-gray-500 font-bold">
              welcome to airdrop checker
            </p>
            <h1 className="md:text-7xl mx-auto max-w-xl text-center font-bold">
              Never miss airdrops.
            </h1>
            <p className="text-center max-w-2xl text-gray-400 mx-auto">
              Ernify is a software which find and alert you when you are avaible
              for an airdrop. apps and services, built for a decentralized
              future.
            </p>
          </div>
        </Container>
      </div>
      <Container>
        <div className="grid grid-cols-12 gap-x-8 my-14">
          <div className="col-span-6 space-y-8 text-center">
            <h2 className="text-center text-2xl font-bold">
              Check your eligibility
            </h2>
            <p className="text-center max-w-xs mx-auto">
              Enter your address EVM address for checking if you can claim
              airdrops
            </p>
            <Input
              placeholder="0x8604d... or wallet your address"
              block
              align="center"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Button className="text-center">Check my airdrops</Button>
          </div>
          <div className="col-span-6">
            <img src={airdropIllustration.src} className="my-0 mx-auto w-4/6" />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
