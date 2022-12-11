function Header() {
  return (
    <header>
      <video src="/video.mp4" loop autoPlay muted></video>
      <h1>Open Source Website</h1>
      <div className="row">
        <button className="btn cursor-pointer w-50">Log in</button>
        <button className="btn cursor-pointer w-50">Sign Up</button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
