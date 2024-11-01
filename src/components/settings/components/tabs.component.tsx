import * as React from 'react';
import Box from '@mui/material/Box';
import { SettingsStyle } from '../settings.style';
import { TabsButtons } from '../settings.constant';
import IntegrationPopUp from '@/components/integration-popup/integration-popup.component';
import ControlledAccordions from './accordion.component';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function AccessibleTabs() {

    const [value, setValue] = React.useState(100);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [selectedTab, setSelectedTab] = React.useState<string | null>(null); // Store the selected tab index

    const handleTabChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        setSelectedTab(value);
    };

    const renderComponent = () => {
        if (selectedTab === null) {
            return <ControlledAccordions />;
        }
        switch (Number(selectedTab)) {
            case 0:
                return <ControlledAccordions filterData="0" />;
            case 1:
                return <ControlledAccordions filterData="1" />;
            case 2:
                return <ControlledAccordions filterData="2" />;
            case 3:
                return <ControlledAccordions filterData="3" />;
            case 4:
                return <ControlledAccordions filterData="4" />;
            case 5:
                return <ControlledAccordions filterData="5" />;
            case 6:
                return <ControlledAccordions filterData="6" />;
            case 7:
                return <ControlledAccordions filterData="7" />;
            default:
                return <ControlledAccordions />;
        }
    };

    return (
        <Box sx={{ width: '100%' }}>

            <FormControl sx={SettingsStyle.tabs}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={selectedTab}
                    onChange={handleTabChange}
                >
                    {TabsButtons?.map((tab, index) => (
                        <FormControlLabel
                            key={index}
                            sx={SettingsStyle.TabButton}
                            value={index.toString()}
                            control={<Radio />}
                            label={tab.text} />
                    ))}
                </RadioGroup>
            </FormControl>

            <Box sx={SettingsStyle.TabsContentWrapper}>
                {renderComponent()}
            </Box>

            {/* <IntegrationPopUp /> */}

        </Box>
    );
}
