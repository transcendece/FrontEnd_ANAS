import React, { useEffect } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import axios from 'axios';
import { GoPerson, GoTrophy } from "react-icons/go";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { GiAchievement } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { BiLogOutCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { UserInfos, fetchInfos } from '../Slices/userSlice';
import { fetchChatData } from '../Slices/chatSlice';

interface Datas {
    loading: boolean;
    error: string | null;
   }

interface Props {
    onData: (data: Datas) => void;
}

export default function Sidebar({onData}: Props) {
    
    const loadingUser = useSelector((state: RootState) => state.user.loading);
    const loadingChat = useSelector((state: RootState) => state.chat.loading);
    const errorUser = useSelector((state: RootState) => state.user.error);
    const errorChat = useSelector((state: RootState) => state.chat.error);
    const dispatch = useDispatch<AppDispatch>();
    const entity: UserInfos | null = useSelector((state: RootState) => state.user.entity)
    
    const router = useRouter();
    
    useEffect(() => {
    if (errorChat || errorUser) {
        router.push('/login');
    }
    }, [errorChat, errorUser]);
    
    useEffect(() => {
        dispatch(fetchInfos());
        dispatch(fetchChatData());
    }, [])
    
    //const handleData = (data: Datas) => {
    //    onData({ loading: loadingUser, error: errorUser });
    //};
    
    useEffect(() => {
        onData({ loading: loadingUser, error: errorUser });
    }, [loadingUser, errorUser])
    
    console.log('child data = ', loadingUser);
    console.log('child data = ', errorUser);
    const handlelogout = async () => {
        
        await axios.post('http://localhost:4000/auth/logout', {} ,{withCredentials: true})
        .then(response => {
            
            if (response.status === 200) {
                router.push('/login')
            }
        })
        .catch(error => {
            
            if (error.response && error.response.status === 401) {
                
                console.log(`error: `, error.response.data);
            }
        })
    }
    if(loadingUser || loadingChat){
        return <div></div>
    }
    //if (errorChat || errorUser)
    //    router.push('/login')
    
    return (
        <div id="navbar1" className="bg-[#323232] text-slate-100 flex flex-col justify-between min-h-full h-screen fixed w-12 medium:w-20 xLarge:w-32">                
                <div className='flex flex-col justify-between h-[60%]'>
                    <div className="rounded-full border-2 border-[#E58E27] xLarge:p-0 h-12 medium:h-20">
                        <Image className='rounded-full shadow-neon-light' src={entity?.userData?.avatar || "/noBadge.png"} layout="responsive" width={30} height={30} alt="PING PONG" priority={true} />
                    </div>
                    <div className='flex flex-col justify-between mt-10 xLarge:mt-24 h-[75%]'>
                        <Link className="text-[#E58E27] m-auto text-2xl medium:text-3xl xLarge:text-4xl" href={'/profile'}><GoPerson/></Link>
                        <Link className="text-[#E58E27] m-auto text-2xl medium:text-3xl xLarge:text-4xl" href={'/rank'}><GoTrophy/></Link>
                        <Link className="text-[#E58E27] m-auto text-2xl medium:text-3xl xLarge:text-4xl" href={'/chat'}><HiOutlineChatBubbleLeftEllipsis/></Link>
                        <Link className="text-[#E58E27] m-auto text-2xl medium:text-3xl xLarge:text-4xl" href={'/notFoud404'}><GiAchievement/></Link>
                        <Link className="text-[#E58E27] m-auto text-2xl medium:text-3xl xLarge:text-4xl" href={'/setting'}><IoSettingsOutline/></Link>
                    </div>
                </div>
                <Link className="text-[#E58E27] mx-auto my-5 text-2xl medium:text-3xl xLarge:text-4xl grid place-items-end h-[30%]" onClick={handlelogout} href={'/login'}><BiLogOutCircle/></Link>
            </div>
        )
}
