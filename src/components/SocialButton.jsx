export default function SocialButton({ link, socialName }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <button className="bg-primary font-mainText text-accent p-4 rounded-lg shadow text-xl">
          {socialName}
        </button>
      </a>
    </div>
  );
}
