import Auth from '@/auth/auth.component';
import AUTH from '@/common/constants/auth.constant';
import AiBoom from '@/components/ai-boom/aiBoom.component';
import React from 'react'

export default function Home(){
    return <Auth component={<AiBoom />} type={AUTH.PRIVATE} />;
}