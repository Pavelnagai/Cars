import {useAuthStore} from "../../shared/store/auth.store";

export const Header = () => {

    const telegramUser = useAuthStore((state) => state.telegramUser)

    console.log(telegramUser, 'Header')
    return <div>
      <div className="w-[60px] h-[60px] rounded-full bg-fuchsia-50 flex items-center justify-center">PN</div>
      <img src={telegramUser?.photo_url} className="w-[60px] h-[60px] rounded-full"></img>
        <div>{telegramUser?.first_name}</div>
        <div>{telegramUser?.last_name}</div>
    </div>
}
