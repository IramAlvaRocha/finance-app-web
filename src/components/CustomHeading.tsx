
interface Props {
    title: string;
}

export const CustomHeading = ({ title }: Props) => {
    return (
        <h1 className="text-4xl w-full text-center font-bold">
            {title}
        </h1>
    )
}
