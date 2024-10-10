import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import Image from 'next/image'
import check from "@/common/assets/images/check-check.svg";

// import useCreatePolicies from '../../use-createPolicies.hook';
import ClearIcon from '@mui/icons-material/Clear';
import useCreatePolicies from '@/components/create-policy/component/severityLevel/use-severity.hook';
import { styles } from './selector.style';
import { multiAction } from './selector.constant';

interface MultiSelectProps {
    data: any;
    setForAllLabel?: string; // Optional prop for custom "Set for all" label
}

const MultiSelect = ({ data, setForAllLabel = 'Set for all' }: MultiSelectProps) => {

    const { handleClick, handleChange, isHide, checkedValues } = useCreatePolicies();

    return (
        <>
            <Box>
                <Button sx={styles.dropdwonButton} onClick={handleClick}>
                    {
                        checkedValues.length === 0 ?
                            <>
                                <Image src={check} alt="" />
                                {setForAllLabel}
                            </>
                            :
                            checkedValues.map((item: any, i: any) => (
                                <Typography key={i.toString()} sx={styles.typography2}>
                                    {item}
                                    <ClearIcon onClick={() => handleChange(item)} />
                                </Typography>
                            ))
                    }

                </Button>
                {
                    isHide &&
                    <Box sx={styles.dropdownStyle}>
                        {
                            data.map((item: any, i: number) => (
                                <FormControlLabel
                                    key={i.toString()}
                                    label={<Box sx={styles.checkBoxItems}>
                                        {item.img ? (
                                            <Image src={item.img} alt="icon" />
                                        ) : ''}
                                        <Typography sx={styles.typography}>{item.label}</Typography>
                                    </Box>}
                                    control={
                                        <Checkbox
                                            color="success"
                                            checked={checkedValues.includes(item.label)}
                                            onChange={() => handleChange(item.label)}
                                        />
                                    }
                                />
                            ))
                        }
                    </Box>
                }

            </Box>
        </>
    )
}

export default MultiSelect;