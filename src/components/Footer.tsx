import GitHubIcon from "../assets/github-mark.svg";

export default function Footer() {
  return (
    <footer className="bg-teal-50 p-4">
      <div className="m-auto flex max-w-screen-xl justify-center">
        <a
          href="https://github.com/ken-ux/wheres-waldo"
          target="_blank"
          rel="noopener"
          aria-label="Github"
        >
          <img src={GitHubIcon} alt="GitHub Repository" className="h-8 w-8" />
        </a>
      </div>
    </footer>
  );
}
