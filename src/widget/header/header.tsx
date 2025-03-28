import {useAuthStore} from "../../shared/store/auth.store";

export const Header = () => {
    const telegramUser = useAuthStore((state) => state.telegramUser)

    return (
        <div className="fixed top-0 left-0 w-full bg-white/10 h-[60px] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div
                    className="relative flex gap-1 rounded-full bg-white/10 py-[4px] px-[8px] w-fit  h-fit backdrop-blur-[20px]">
                    <img src={telegramUser?.photo_url}
                         className="absolute -translate-y-1/2 top-[50%] left-0 w-[40px] h-[40px] bg-white/50 rounded-full"
                         alt="avatar"/>
                    <div className="ml-[40px]">{telegramUser?.first_name}</div>
                    <div>{telegramUser?.last_name}</div>
                </div>
            </div>
            <div
                className="relative flex gap-1 rounded-full bg-white/10 py-[4px] px-[8px] w-fit  h-fit backdrop-blur-[20px]">
                <div>Coins: 0</div>
            </div>
        </div>
    )
}
