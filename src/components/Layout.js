import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
  return (
    <div>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/todo">To-Do</CustomLink>
        <CustomLink to="/snowfall">Snow-fall</CustomLink>
        <CustomLink to="/weather">Weather</CustomLink>
        <CustomLink to="/timer">Timer</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">2022</footer>
    </div>
  );
};

export default Layout;
