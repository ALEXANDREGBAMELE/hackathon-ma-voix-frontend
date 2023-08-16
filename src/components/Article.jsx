export default function Article() {
    return (
        <div className="newsCard">
            <div className="newsCard__img">
                <img
                    src="https://images.unsplash.com/photo-1466285746891-30d1cd3a5409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                />
            </div>
            <div className="newsDetails">
                <span>14 aout 2023</span>
                <h3>Ouverture du 5em pont </h3>
                <p>1200 vues</p>
            </div>
        </div>
    );
}
