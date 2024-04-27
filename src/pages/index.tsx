import Head from "next/head";
import Link from "next/link";
import { FadeTransition } from "@/components/Animations/FadeTransition";
import {
  WebsiteContact,
  WebsiteCoverPhoto,
  WebsiteInfo,
} from "@/lib/MainConstants";
import { LWLogo } from "@/components/Images/WebsiteLogo";
import { Metadata } from "@/components/Meta/Metadata";

const HomeContactLinks = [
  {
    platform: "Email",
    url: `${"mailto:" + WebsiteContact.EMAIL}`,
    svgLogo:
      "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z",
  },
];

const JSONLDSiteNames = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: WebsiteInfo.NAME,
  alternateName: [WebsiteInfo.ABBR, WebsiteInfo.FULL_NAME, WebsiteInfo.DOMAIN],
  url: WebsiteInfo.BASE_URL,
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{WebsiteInfo.NAME}</title>
        <meta name="description" content="Leonard Natanael Walujan" />
        <link rel="canonical" href={WebsiteInfo.BASE_URL} />
        <Metadata
          type="website"
          title={WebsiteInfo.NAME}
          description="Leonard Natanael Walujan"
          url={WebsiteInfo.BASE_URL}
          siteName={WebsiteInfo.NAME}
          image={WebsiteCoverPhoto.COVER_URL}
          locale={WebsiteInfo.LOCALE}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLDSiteNames) }}
        />
      </Head>

      <FadeTransition>
        <section id="hero" className="pt-24 lg:pt-40">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="self-center w-full px-4 lg:w-1/2">
                <h1 className="hero-title">{WebsiteInfo.NAME}</h1>
                <h2 className="hero-subtitle">
                  IT Learner from {WebsiteInfo.LOCATION}
                </h2>
                <p className="hero-desc">
                  Hi, my name is {WebsiteInfo.FULL_NAME} from Manado, North
                  Sulawesi, Indonesia. I am an Informatics Engineering student
                  at Manado State Polytechnic. Currently focus on computer
                  network, multimedia, and web development.
                </p>
                <Link className="hero-button" href="/blog">
                  Visit Blog
                </Link>
              </div>
              <div className="self-end w-full px-4 mt-12 lg:w-1/2">
                <div className="lg:m-auto flex justify-center">
                  <LWLogo
                    className={"lg:w-96 md:w-72 sm:w-60 w-48 mb-10 fill-favo"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pb-24 lg:pt-16">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-10 lg:w-1/2">
                <h2 className="home-work-contact-title">Contact</h2>
                <h3 className="home-work-contact-subtitle">Contact me</h3>
                <p className="home-work-contact-desc">
                  If you want to ask me, you can contact me via email.
                </p>
                <div className="flex items-center mt-5">
                  {HomeContactLinks.map((account) => (
                    <a
                      href={account.url}
                      className="home-link-icon"
                      target="_blank"
                      rel="noreferrer nofollow"
                      key={account.platform}
                    >
                      <svg
                        role="img"
                        width={20}
                        className="fill-current"
                        viewBox="0 0 24 24"
                      >
                        <title>{account.platform}</title>
                        <path d={account.svgLogo} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
