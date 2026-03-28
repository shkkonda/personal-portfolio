export default function Footer() {
  return (
    <footer className="py-10 px-[clamp(20px,5vw,80px)] text-center text-[13px] text-[#666] bg-ink border-t border-[#2a2a2a]">
      <div className="max-w-[1080px] mx-auto">
        © 2026 Shriharsha Konda. Built with Claude. Powered by{" "}
        <a
          href="https://appweave.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent no-underline"
        >
          Appweave Labs
        </a>
        .
      </div>
    </footer>
  );
}
