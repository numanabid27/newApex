import Auth from '@/auth/auth.component';
import AUTH from '@/common/constants/auth.constant';
import { AiBomView } from '@/components/ai-boom/components/aiBoomView/index.component';
import React from 'react'

export default function Home(){
    return <Auth component={<AiBomView />} type={AUTH.PRIVATE} />;
}