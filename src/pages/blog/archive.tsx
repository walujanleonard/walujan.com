import { FadeTransition } from "@/components/Animations/FadeTransition";
import { Metadata } from "@/components/Meta/Metadata";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import { BlogPostMeta, getBlogPosts } from "@/utils/PostsAPI";
import Head from "next/head";
import Link from "next/link";

const longDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export async function getStaticProps() {
  const blogPosts = await getBlogPosts();
  const posts: BlogPostMeta[] = blogPosts.map((blogPost) => blogPost.meta);
  return { props: { posts } };
}

export default function BlogPostArchive({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <>
      <Head>
        <title>{"Blog Post Archive" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={`${WebsiteInfo.NAME} blog post archive.`}
        />
        <link
          rel="canonical"
          href={WebsiteInfo.BASE_URL + "/blog" + "/archive"}
        />
        <Metadata
          type="website"
          title={"Blog Post Archive" + " | " + WebsiteInfo.NAME}
          description={`${WebsiteInfo.NAME} blog post archive.`}
          url={WebsiteInfo.BASE_URL + "/blog" + "/archive"}
          siteName={WebsiteInfo.NAME}
          image={WebsiteCoverPhoto.COVER_URL}
          locale={WebsiteInfo.LOCALE}
        />
      </Head>

      <FadeTransition>
        <section className="py-24 list">
          <div className="container">
            <div className="w-full px-4">
              <div className="mb-16 list-header">
                <h1 className="text-center">Blog Post Archive</h1>
                <p className="text-center">{`${WebsiteInfo.NAME} blog posts archive.`}</p>
                <div className="flex justify-center list">
                  <ul>
                    {posts.map((post, index) => (
                      <li key={index} className="mt-2">
                        <Link
                          href={`/blog/${post.year}/${post.slug}`}
                          className="hover:underline"
                        >{`${longDate(post.date)} - ${post.title}`}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
