import { notification } from "antd";

export const openSuccesNotificationWithIcon = (api, text, desc, placement) => {
    api.success({
        message: text,
        description: desc ? desc : "",
        placement: placement ? placement : "bottomLeft",
    });
};
export const openErrorNotificationWithIcon = (api, types, text, desc, placement) => {
    api.types({
        message: text,
        description: desc ? desc : "",
        placement: placement ? placement : "topCenter",
    });
}