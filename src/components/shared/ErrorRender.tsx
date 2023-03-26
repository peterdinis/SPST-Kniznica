interface IProps {
  error: string;
}

function FallbackRender({ error }: IProps) {
  return <p className="mt-4 text-2xl font-bold">{error}</p>;
}

export default FallbackRender;