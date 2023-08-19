export default function MuyButon({title,secondary}) {
    return (
        <div
            style={{ background: secondary ? "green" : "#ff7200" }}
            className="myButon"
        >
            <p>{title}</p>
        </div>
    );
}
