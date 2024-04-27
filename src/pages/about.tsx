import Head from "next/head";
import Image from "next/image";
import { Metadata } from "@/components/Meta/Metadata";
import { FadeTransition } from "@/components/Animations/FadeTransition";
import { WebsiteCoverPhoto, WebsiteInfo } from "@/lib/MainConstants";
import { LWLogo } from "@/components/Images/WebsiteLogo";

const LWPhotoDirectory = "lw";
const LWAboutPhoto = "lw-13-10-2023-profile-photo-640p-75q.webp";

export default function About() {
  return (
    <>
      <Head>
        <title>{"About" + " | " + WebsiteInfo.NAME}</title>
        <meta name="description" content={"About" + " " + WebsiteInfo.NAME} />
        <link rel="canonical" href={WebsiteInfo.BASE_URL + "/about"} />
        <Metadata
          type="website"
          title={"About" + " | " + WebsiteInfo.NAME}
          description={"About" + " " + WebsiteInfo.NAME}
          url={WebsiteInfo.BASE_URL + "/about"}
          siteName={WebsiteInfo.NAME}
          image={WebsiteCoverPhoto.COVER_URL}
          locale={WebsiteInfo.LOCALE}
        />
      </Head>

      <FadeTransition>
        <article className="pt-24">
          <div className="container">
            <div className="w-full px-4 xl:px-40">
              <div className="mb-16">
                <h1 className="text-center">About</h1>
                <Image
                  src={"/" + LWPhotoDirectory + "/" + LWAboutPhoto}
                  width={500}
                  height={500}
                  alt={`${WebsiteInfo.NAME}`}
                  className="max-w-[200px] mx-auto rounded-full"
                  loading="eager"
                  priority={true}
                />

                <h2>Introduction</h2>

                <p>
                  My name is Leonard Natanael Walujan from Manado, North
                  Sulawesi, Indonesia. I am an Informatics Engineering student
                  at Manado State Polytechnic, 2021 generation.
                </p>

                <p>
                  I am a learner person who likes to learn about computer
                  network, multimedia, and web development.
                </p>

                <p>
                  My daily activity is spending my time to experiment about IT
                  facility from the internet or another place, practising
                  creativity, hanging out with my friends, and playing video
                  game.
                </p>

                <h2>About this website</h2>
                <p>
                  This domain is hosted through Cloudflare CDN and this website
                  is created using Next.js. I make this website for documenting
                  my experiences about my interests, daily activity, and more.
                </p>

                <h2>Logo LW</h2>
                <LWLogo className={"mt-4 mb-4"} width={200} />

                <p>
                  LW Logo is created by Leonard Walujan since December 2017.
                  This logo was revised on 9 September 2019 and revised again on
                  28 January 2022 (latest revision). This logo comes from my
                  name which is abbreviated to LW.
                </p>

                <h2>Education</h2>
                <ul>
                  <li>
                    SMK Negeri 2 Manado | Computer Engineering and Networking
                    (2017 - 2020).
                  </li>
                  <li>
                    Manado State Polytechnic | Informatics Engineering (2021 -
                    current).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </FadeTransition>
    </>
  );
}
