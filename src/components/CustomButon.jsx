export default function CustomButon({ title, type ,children }) {
    const setClasseName = () => {
        if (type === "fill") {
            return "butomFillSecondary";
        }
        if (type === "fillPrimary") {
            return "butomFillPrimary";
        }
        return "butomAoutlin";
    }
    return (
        <div className={setClasseName()}>
            <p> {children} {title} </p>
        </div>
    );
}
