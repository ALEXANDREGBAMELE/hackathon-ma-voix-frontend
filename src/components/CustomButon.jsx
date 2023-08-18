export default function CustomButon({ title, type, children, onClicked,width }) {
    const handleClick = () => {
        if (onClicked) {
            onClicked();
        }

    }
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
    }
    return (
        <div onClick={handleClick} style={{
            width: width ? width : "8rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }} className={setClasseName()}>
            <p> {children} {title} </p>
        </div>
    );
}
