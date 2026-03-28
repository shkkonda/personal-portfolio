import { client } from "@/sanity/lib/client";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string | null;
};

const query = `*[_type == "post"] | order(publishedAt desc)[0...6]{
  _id, title, slug, publishedAt, excerpt
}`;

const fallbackPosts: Post[] = [
  {
    _id: "fb-1",
    title: "Overwhelmed by AI Framework Choices? I Built a Tool to Help",
    slug: { current: "ai-framework-finder" },
    publishedAt: "2025-06-07",
    excerpt:
      "Staring at a growing list of agentic AI frameworks, wondering which one to learn first. I had three exciting projects but was stuck before writing a line of code.",
  },
  {
    _id: "fb-2",
    title: "Crypto from India: High Taxes, No ETFs, and Too Many Risks",
    slug: { current: "why-crypto-investing-is-hard-in-india" },
    publishedAt: "2025-05-20",
    excerpt:
      "For Indian investors, the crypto journey is especially fraught with hurdles. From regulatory uncertainty to security threats and the complexity of managing digital assets.",
  },
  {
    _id: "fb-3",
    title: "From Salary to Contract: Section 44ADA Simplified",
    slug: { current: "salary-to-contract-44ada" },
    publishedAt: "2025-01-01",
    excerpt:
      "Freelancing has become more popular than ever. Many worry filing taxes is complicated, when in fact it can be just as straightforward with the right approach.",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Blog() {
  let posts: Post[] = [];

  try {
    if (client) {
      posts = await client.fetch(query);
    }
  } catch {
    // Sanity not configured yet
  }

  if (!posts || posts.length === 0) {
    posts = fallbackPosts;
  }

  return (
    <section id="blog" className="py-24 px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[1080px] mx-auto">
        <span className="text-[11px] font-semibold tracking-[2px] uppercase text-accent mb-4 block">
          Blog
        </span>
        <h2 className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.2] tracking-tight mb-10">
          Writing & thinking
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post._id}
              href={`/${post.slug.current}`}
              className="reveal block p-8 border border-light rounded-[10px] no-underline text-inherit transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="text-xs text-mid tracking-wider mb-3">
                {formatDate(post.publishedAt)}
              </div>
              <div className="font-serif text-xl leading-snug mb-3">
                {post.title}
              </div>
              {post.excerpt && (
                <div className="text-sm text-mid leading-relaxed">
                  {post.excerpt}
                </div>
              )}
              <span className="inline-block mt-4 text-[13px] font-semibold text-accent tracking-wider">
                Read more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
