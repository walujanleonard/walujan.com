import { FadeTransition } from "@/components/Animations/FadeTransition";
import CompetitionCertificateList from "@/components/Lists/Certifications/CompetitionCertificateList";
import { Metadata } from "@/components/Meta/Metadata";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import Head from "next/head";

export default function CompetitionCertificates() {
  return (
    <>
      <Head>
        <title>{"Competition Certificates" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={"List of Competition Certificates" + " " + WebsiteInfo.NAME}
        />
        <link
          rel="canonical"
          href={WebsiteInfo.BASE_URL + "/lists" + "/competition-certificates"}
        />
        <Metadata
          type="website"
          title={"Competition Certificates" + " | " + WebsiteInfo.NAME}
          description={
            "List of Competition Certificates" + " " + WebsiteInfo.NAME
          }
          url={WebsiteInfo.BASE_URL + "/lists" + "/competition-certificates"}
          siteName={WebsiteInfo.NAME}
          image={WebsiteCoverPhoto.COVER_URL}
          locale={WebsiteInfo.LOCALE}
        />
      </Head>

      <FadeTransition>
        <section className="pt-24 list">
          <div className="container">
            <div className="w-full px-4 xl:px-40">
              <div className="mb-16 list-header">
                <h1 className="text-center">Competition Certificates</h1>
                <p className="text-center">
                  {`List of Competition Certificates ${WebsiteInfo.NAME}`}
                </p>
                <CompetitionCertificateList />
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
