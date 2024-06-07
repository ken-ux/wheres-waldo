import GitHubIcon from "../assets/github-mark.svg";

export default function Footer() {
  return (
    <footer className="bg-yellow-200 p-4">
      <div className="test-border m-auto flex max-w-screen-xl justify-center">
        <a href="https://github.com/ken-ux/wheres-waldo">
          <img src={GitHubIcon} alt="GitHub Repository" className="h-8 w-8" />
        </a>
      </div>
    </footer>
  );
}
