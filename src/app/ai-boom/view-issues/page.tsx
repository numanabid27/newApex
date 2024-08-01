import Auth from '@/auth/auth.component';
import AUTH from '@/common/constants/auth.constant';
import { IssuesView } from '@/components/ai-boom/components/issuesView/index.component';
import React from 'react'

export default function Home(){
    return <Auth component={<IssuesView />} type={AUTH.PRIVATE} />;
}