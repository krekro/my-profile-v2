import { NavLink } from "react-router";

export default function PageIcon() {
  return (
    <NavLink to="/">
      <div className="absolute left-10 top-5 flex flex-row items-center gap-2">
        <img
          src="https://i.ibb.co/QFNNTvDR/icon.png"
          alt="tennweb"
          className="h-12 w-12"
        />
        <span className="text-2xl font-mono text-gray-700 dark:text-gray-100">
          tennyweb
        </span>
      </div>
    </NavLink>
  );
}
