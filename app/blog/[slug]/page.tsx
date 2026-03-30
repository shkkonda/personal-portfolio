import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import type { Metadata } from "next";

type Block = {
  _type: string;
  _key: string;
  style?: string;
  children?: { _key: string; text: string; marks?: string[] }[];
  rows?: { _key: string; cells: string[] }[];
  asset?: { _ref: string };
  alt?: string;
  listItem?: string;
  level?: number;
  markDefs?: { _key: string; _type: string; href?: string }[];
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string | null;
  body: Block[];
};

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, publishedAt, excerpt, body
}`;

const builder = client ? imageUrlBuilder(client) : null;
function urlFor(source: { _ref: string }) {
  return builder?.image(source).auto("format").url() ?? "";
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!client) return { title: "Blog" };
  const post = await client.fetch(postQuery, { slug });
  if (!post) return { title: "Blog" };
  return {
    title: `${post.title} — Shriharsha Konda`,
    description: post.excerpt ?? undefined,
  };
}

function renderBlock(block: Block) {
  if (block._type === "image" && block.asset) {
    return (
      <figure key={block._key} className="my-8">
        <img
          src={urlFor(block.asset)}
          alt={block.alt ?? ""}
          className="rounded-lg max-w-full"
        />
      </figure>
    );
  }

  if (block._type === "table" && block.rows) {
    return (
      <div key={block._key} className="my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={row._key} className={i === 0 ? "font-semibold bg-accent-soft" : ""}>
                {row.cells.map((cell, j) => (
                  <td
                    key={j}
                    className="border border-light px-4 py-2"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block._type !== "block" || !block.children) return null;

  const renderChildren = (children: Block["children"], markDefs?: Block["markDefs"]) =>
    children?.map((child) => {
      let text: React.ReactNode = child.text;
      if (child.marks) {
        for (const mark of child.marks) {
          if (mark === "strong") text = <strong key={child._key + mark}>{text}</strong>;
          else if (mark === "em") text = <em key={child._key + mark}>{text}</em>;
          else if (mark === "code") text = <code key={child._key + mark} className="bg-accent-soft px-1.5 py-0.5 rounded text-[0.9em]">{text}</code>;
          else {
            const def = markDefs?.find((d) => d._key === mark);
            if (def?._type === "link" && def.href) {
              text = <a key={child._key + mark} href={def.href} target="_blank" rel="noopener noreferrer" className="text-accent underline">{text}</a>;
            }
          }
        }
      }
      return <span key={child._key}>{text}</span>;
    });

  const content = renderChildren(block.children, block.markDefs);

  switch (block.style) {
    case "h1":
      return <h1 key={block._key} className="font-serif text-3xl mt-10 mb-4">{content}</h1>;
    case "h2":
      return <h2 key={block._key} className="font-serif text-2xl mt-8 mb-3">{content}</h2>;
    case "h3":
      return <h3 key={block._key} className="font-serif text-xl mt-6 mb-2">{content}</h3>;
    case "h4":
      return <h4 key={block._key} className="font-serif text-lg mt-5 mb-2">{content}</h4>;
    case "blockquote":
      return <blockquote key={block._key} className="border-l-4 border-accent pl-5 italic text-mid my-6">{content}</blockquote>;
    default:
      if (block.listItem === "bullet") {
        return <li key={block._key} className="ml-6 list-disc">{content}</li>;
      }
      if (block.listItem === "number") {
        return <li key={block._key} className="ml-6 list-decimal">{content}</li>;
      }
      return <p key={block._key} className="mb-4 leading-relaxed">{content}</p>;
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: Post | null = null;
  try {
    if (client) {
      post = await client.fetch(postQuery, { slug });
    }
  } catch {
    // Sanity not configured
  }

  if (!post) notFound();

  return (
    <article className="py-24 px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[720px] mx-auto">
        <a
          href="/#blog"
          className="text-[13px] font-semibold text-accent tracking-wider no-underline hover:underline mb-8 block"
        >
          ← Back to blog
        </a>
        <div className="text-xs text-mid tracking-wider mb-4">
          {formatDate(post.publishedAt)}
        </div>
        <h1 className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.2] tracking-tight mb-8">
          {post.title}
        </h1>
        <div className="text-ink">{post.body?.map(renderBlock)}</div>
      </div>
    </article>
  );
}
