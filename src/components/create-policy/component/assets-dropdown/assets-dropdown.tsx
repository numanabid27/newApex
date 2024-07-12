import { Box, Button, Chip, IconButton } from "@mui/material";
import Image from "next/image";
import { styles } from "./assetsDropdown.style";
import downArrow from "@/common/assets/images/downs.svg";
import useCreatePolicies from "../severityLevel/use-severity.hook";
import { assets } from "../../createPolicy.constant";
import tick from "@/common/assets/images/tick.svg";

const AssetsDropdown = ({ title, img, ltr, onItemClick, data }: any) => {
  const { handleClick, isHide, handleClicked, isValue, dropdownRef } =
    useCreatePolicies();

  const handleItemClick = (label: any) => {
    handleClicked(label);
    if (onItemClick) {
      onItemClick(label);
    }
  };

  return (
    <>
      <Box ref={dropdownRef}>
        <Button sx={styles.dropdwonButton} onClick={handleClick}>
          {isValue ? (
            <Box display="flex" alignItems="center" gap="10px">
              {!ltr && <Image src={img} alt="" />}
              {isValue.length > 9 ? isValue.slice(0, 9) + "..." : isValue}
              <Image src={downArrow} alt="" />
            </Box>
          ) : (
            <>
              {ltr ? (
                <>
                  {title}
                  <Image src={img} alt="" />
                </>
              ) : (
                <>
                  <Image src={img} alt="" />
                  {title}
                </>
              )}
            </>
          )}
        </Button>
        {isHide && (
          <Box sx={ltr ? styles.dropdownStyle2 : styles.dropdownStyle}>
            {data?.map((item: any, i: number) => (
              <Button
                key={i.toString()}
                sx={[
                  styles.typography,
                  isValue == item.label && styles.selected,
                ]}
                onClick={() => handleItemClick(item.label)}
              >
                <>
                  <Box display="flex" alignItems="center" gap="10px">
                    {item.actionImg && <Image src={item.actionImg} alt="" />}
                    {item.label}
                  </Box>
                  {isValue == item.label && <Image src={tick} alt="" />}
                </>
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default AssetsDropdown;
