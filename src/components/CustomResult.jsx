import { Button, Result } from "antd";
export default function CustomResult() {
    return (
        <Result
            status="success"
            title="Merci d'avoir participé au sondage  . "
            subTitle="Vous pouvez consulter les resultats dans la page sondage."
            extra={[
                <Button type="primary" key="console">
                    Allez a l'accueil
                </Button>,
            ]}
        />
    );
}
