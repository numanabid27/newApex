import { Box, Button } from "@mui/material";
import Image from "next/image";
import { styles } from "./severity.style";
// import useCreatePolicies from "../../use-createPolicies.hook";
import downArrow from "@/common/assets/images/downs.svg";
import useCreatePolicies from "./use-severity.hook";

const Severity = ({ title, img, severity, ltr , onItemClick}: any) => {
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
            {severity?.map((item: any, i: number) => (
              <Button
                key={i.toString()}
                sx={[
                  styles.typography,
                  isValue == item.label && styles.selected,
                ]}
                onClick={() => handleItemClick(item.label)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Severity;
