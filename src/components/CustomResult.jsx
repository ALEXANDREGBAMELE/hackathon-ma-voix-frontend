import { Button, Result } from "antd";
import { Link } from "react-router-dom";
export default function CustomResult() {
    return (
        <Result
            status="success"
            title="Merci d'avoir participé au sondage  . "
            subTitle="Vous pouvez choisir une autre commune pour participer aux sondages."
            extra={[
                <Link to="/" >
                    <Button type="primary" key="console">
                        Allez a l'aceuil
                    </Button>
                </Link>
               
            ]}
        />
    );
}
