import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabsContent from './tabs-content.component';
import { SettingsStyle } from '../settings.style';
import { TabsButtons } from '../settings.constant';
import IntegrationPopUp from '@/components/integration-popup/integration-popup.component';

export default function AccessibleTabs() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                aria-label="Tabs where each tab needs to be selected manually"
                sx={SettingsStyle.tabs}
                className='demoooo'
            >
                {TabsButtons?.map((tab, index) => (
                    <Tab label={tab.text} sx={SettingsStyle.TabButton} onClick={() => setValue(index)} key={index} />
                ))}
            </Tabs>

            <Box sx={SettingsStyle.TabsContentWrapper}>
                <TabsContent index={value + 1} />
            </Box>

            <IntegrationPopUp />

        </Box>
    );
}
