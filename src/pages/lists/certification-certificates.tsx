import { FadeTransition } from "@/components/Animations/FadeTransition";
import CertificationCertificateList from "@/components/Lists/CertificationCertificateList";
import { Metadata } from "@/components/Meta/Metadata";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import Head from "next/head";

export default function CourseCertificates() {
  return (
    <>
      <Head>
        <title>{"Certifications" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={"List of Certifications" + " " + WebsiteInfo.NAME}
        />
        <link
          rel="canonical"
          href={WebsiteInfo.BASE_URL + "/lists" + "/certification-certificates"}
        />
        <Metadata
          type="website"
          title={"Certifications" + " | " + WebsiteInfo.NAME}
          description={"List of Certifications" + " " + WebsiteInfo.NAME}
          url={WebsiteInfo.BASE_URL + "/lists" + "/certification-certificates"}
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
                <h1 className="text-center">Certifications</h1>
                <p className="text-center">
                  {`List of Certifications ${WebsiteInfo.NAME}`}
                </p>
                <CertificationCertificateList />
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
