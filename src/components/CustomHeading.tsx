interface Props {
  title: string;
  description?: string;
}

export const CustomHeading = ({ title, description }: Props) => {
  return (
    <>
      <h1 className="text-4xl w-full text-center font-bold">{title}</h1>
      <h2 className="text-2xl w-full text-center text-gray-500">{description}</h2>
    </>
  );
};
