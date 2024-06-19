import Link from "next/link";
import Button from "../Elements/Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link href={"/"} className="font-bold text-xl">
        JOB BOARD
      </Link>

      <nav className="flex gap-4">
        <Link href={"/login"}>
          <Button
            type="button"
            btnText="Login"
            btnClass="bg-gray-200 text-black"
          />
        </Link>

        <Link href={"/post-job"}>
          <Button type="button" btnText="Post a Job" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
