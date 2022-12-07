import Link from "next/link";

const Anchor = (props) => {
  return (
    <Link href={props.href}>
      {props.children}
    </Link>
  );
};

export default Anchor;