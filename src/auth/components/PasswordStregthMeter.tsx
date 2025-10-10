import zxcvbn from "zxcvbn";

interface Props {
    password: string;
}

export const PasswordStregthMeter = ({ password }: Props) => {

    const testResult = zxcvbn(password);
    const score = testResult.score;

    if (password === "") {
        return;
    }

    const getColor = () => {
        switch (score) {
            case 0: return "red";
            case 1: return "orange";
            case 2: return "yellow";
            case 3: return "ligthgreen";
            case 4: return "green";
            default: return "transparent";
        }
    };

    return (
        <div className="relative w-full mb-3" style={{ height: "8px" }}>
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gray-100" />
            <div
                className="absolute top-0 left-0 rounded-lg"
                style={{
                    height: "8px",
                    width: `${(score + 1) * 20}%`,
                    background: getColor(),
                    transition: "width 0.5s"
                }}
            />
        </div>
    );

}
