interface Props {
  name: string;
}

function Header({ name }: Props) {
  return <h1 className="text-center text-5xl mt-8 text-black">{name}</h1>;
}

export default Header;
