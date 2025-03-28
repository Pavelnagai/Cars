import {LaunchParams, postEvent, retrieveLaunchParams} from "@telegram-apps/sdk-react";
import {useAuthStore} from "../store/auth.store";

export const useMe = () => {
    const setTelegramUser = useAuthStore((state) => state.setTelegramUser)

    const lp: LaunchParams = retrieveLaunchParams();

    if (['macos', 'tdesktop', 'weba', 'web', 'webk'].includes(lp.tgWebAppPlatform)) {
        return;
    }

    postEvent('web_app_expand');

    console.log(lp)

    if(lp.tgWebAppData?.user) {
        setTelegramUser(lp.tgWebAppData.user)
    }

}
