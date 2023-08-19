export default function CustomButon({
    title,
    type,
    children,
    onClicked,
    width,
    rd,
    stylePropes,
}) {
    const handleClick = () => {
        if (onClicked) {
            onClicked();
        }
    };
    const setClasseName = () => {
        if (type === "fill") {
            return "butomFillSecondary";
        }
        if (type === "fillPrimary") {
            return "butomFillPrimary";
        }
        if (type === "butomFillPrimaryLeft") {
            return "butomFillPrimaryLeft";
        }
        return "butomAoutlin";
    };
    return (
        <div
            onClick={handleClick}
            style={
                stylePropes
                    ? stylePropes
                    : {
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: rd ? rd : "10px",
                      }
            }
            className={setClasseName()}
        >
            <p>
                {children} {title}
            </p>
        </div>
    );
}
