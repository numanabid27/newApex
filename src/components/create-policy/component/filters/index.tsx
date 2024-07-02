import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {
    POLICY_ACTIONS,
  POLICY_ENGINE,
  POLICY_SEVERITY,
  POLICY_TAGS,
} from "@/components/session-explorer/session-explore.constant";
import { styles } from "./styles";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { TOPICS } from "@/components/create-policy/createPolicy.constant";

const PolicyFilters = ({
  policies,
  engineName,
  setEngineName,
  isStatus,
  setIsStatus,
  setTags,
  tags,
  setActions,
  actions,
  setseverity,
  severity
}: any) => {
  return (
    <>
      {/* filters */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={styles.session_filters}
        className={policies && "session_filters"}
      >
        {policies ? (
          // create policy filter
          <>
            <Grid item sm={2} xs={12} sx={styles.user}>
              <FormControl fullWidth sx={styles.userFormControl}>
                <InputLabel
                  id="demo-simple-select-label-3"
                  className="interLable"
                  sx={styles.userText}
                >
                  Groups
                </InputLabel>

                <Select
                  sx={styles.sessionEngineFilter}
                  labelId="demo-simple-select-label-3"
                  id="demo-simple-select-3"
                  value={isStatus}
                  label="Groups"
                  onChange={(event) => {
                    setIsStatus(event.target.value as string);
                  }}
                  renderValue={() => isStatus}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {TOPICS.map((item: any) => (
                    <MenuItem
                      value={item.name}
                      sx={styles.enginItem}
                      key={item.id}
                    >
                      {item.name}
                      {isStatus === item.name && (
                        <IconButton
                          sx={styles.iconBtn}
                          aria-label="delete"
                          onClick={() => setIsStatus("")}
                        >
                          <ClearIcon sx={styles.closeIcon} />
                        </IconButton>
                      )}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={2} xs={12} sx={styles.user}>
              <FormControl fullWidth sx={styles.userFormControl}>
                <InputLabel
                  id="demo-simple-select-label-3"
                  className="interLable"
                  sx={styles.userText}
                >
                  Engine
                </InputLabel>

                <Select
                  sx={styles.sessionEngineFilter}
                  labelId="demo-simple-select-label-3"
                  id="demo-simple-select-3"
                  value={engineName}
                  label="Engine"
                  onChange={(event) => {
                    setEngineName(event.target.value as string);
                  }}
                  renderValue={() => engineName}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {POLICY_ENGINE.map((item: any) => (
                    <MenuItem
                      value={item.name}
                      sx={styles.enginItem}
                      key={item.id}
                    >
                      {item.name}
                      {engineName === item.name && (
                        <IconButton
                          sx={styles.iconBtn}
                          aria-label="delete"
                          onClick={() => setEngineName("")}
                        >
                          <ClearIcon sx={styles.closeIcon} />
                        </IconButton>
                      )}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* tags */}
            <Grid item sm={2} xs={12} sx={styles.user}>
              <FormControl fullWidth sx={styles.userFormControl}>
                <InputLabel
                  id="demo-simple-select-label-3456"
                  className="interLable"
                  sx={styles.userText}
                >
                  Tags
                </InputLabel>

                <Select
                  sx={styles.sessionEngineFilter}
                  labelId="demo-simple-select-label-3456"
                  id="demo-simple-select-3456"
                  value={tags}
                  label="Tags"
                  onChange={(event) => {
                    setTags(event.target.value as string);
                  }}
                  renderValue={() => tags}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {POLICY_TAGS.map((item: any) => (
                    <MenuItem
                      value={item.name}
                      sx={styles.enginItem}
                      key={item.id}
                    >
                      {item.name}
                      {tags === item.name && (
                        <IconButton
                          sx={styles.iconBtn}
                          aria-label="delete"
                          onClick={() => setTags("")}
                        >
                          <ClearIcon sx={styles.closeIcon} />
                        </IconButton>
                      )}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* actions */}
            <Grid item sm={2} xs={12} sx={styles.user}>
              <FormControl fullWidth sx={styles.userFormControl}>
                <InputLabel
                  id="demo-simple-select-label-3333"
                  className="interLable"
                  sx={styles.userText}
                >
                  Actions
                </InputLabel>

                <Select
                  sx={styles.sessionEngineFilter}
                  labelId="demo-simple-select-label-3333"
                  id="demo-simple-select-3333"
                  value={actions}
                  label="Actions"
                  onChange={(event) => {
                    setActions(event.target.value as string);
                  }}
                  renderValue={() => actions}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {POLICY_ACTIONS.map((item: any) => (
                    <MenuItem
                      value={item.name}
                      sx={styles.enginItem}
                      key={item.id}
                    >
                      {item.name}
                      {actions === item.name && (
                        <IconButton
                          sx={styles.iconBtn}
                          aria-label="delete"
                          onClick={() => setActions("")}
                        >
                          <ClearIcon sx={styles.closeIcon} />
                        </IconButton>
                      )}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* severity */}
            <Grid item sm={2} xs={12} sx={styles.user}>
              <FormControl fullWidth sx={styles.userFormControl}>
                <InputLabel
                  id="demo-simple-select-label-33331"
                  className="interLable"
                  sx={styles.userText}
                >
                  Severity
                </InputLabel>

                <Select
                  sx={styles.sessionEngineFilter}
                  labelId="demo-simple-select-label-33331"
                  id="demo-simple-select-33331"
                  value={severity}
                  label="Actions"
                  onChange={(event) => {
                    setseverity(event.target.value as string);
                  }}
                  renderValue={() => severity}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {POLICY_SEVERITY.map((item: any) => (
                    <MenuItem
                      value={item.name}
                      sx={styles.enginItem}
                      key={item.id}
                    >
                      {item.name}
                      {severity === item.name && (
                        <IconButton
                          sx={styles.iconBtn}
                          aria-label="delete"
                          onClick={() => setseverity("")}
                        >
                          <ClearIcon sx={styles.closeIcon} />
                        </IconButton>
                      )}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
          </>
        ) : (
        //   <>
        //     <Grid item sm={2} xs={12} sx={styles.engineFilter}>
        //       <FormControl fullWidth sx={styles.userFormControl}>
        //         <InputLabel
        //           id="demo-simple-select-label-2"
        //           className="interLable"
        //           sx={styles.userText}
        //         >
        //           Interface
        //         </InputLabel>

        //         <Select
        //           sx={styles.sessionEngineFilter}
        //           labelId="demo-simple-select-label-2"
        //           id="demo-simple-select-2"
        //           value={isInterface}
        //           label="Interface"
        //           onChange={(event) => {
        //             setIsInterface(event.target.value as string);
        //           }}
        //           renderValue={() => isInterface}
        //           IconComponent={KeyboardArrowDownIcon}
        //         >
        //           {INTERFACE_NAME.map((item: any) => (
        //             <MenuItem
        //               value={item.name}
        //               sx={styles.enginItem}
        //               key={item.id}
        //             >
        //               {item.name}
        //               {isInterface === item.name && (
        //                 <IconButton
        //                   sx={styles.iconBtn}
        //                   aria-label="delete"
        //                   onClick={() => setIsInterface("")}
        //                 >
        //                   <ClearIcon sx={styles.closeIcon} />
        //                 </IconButton>
        //               )}
        //             </MenuItem>
        //           ))}
        //         </Select>
        //       </FormControl>
        //     </Grid>
        //     <Grid
        //       item
        //       sm={2}
        //       xs={12}
        //       sx={styles.datePicker}
        //       className="dateRange"
        //     >
        //       <Image src={calender} alt="" />
        //       <DatePicker
        //         selectsRange={true}
        //         startDate={startDate}
        //         endDate={endDate}
        //         onChange={(update: any) => {
        //           setDateRange(update);
        //         }}
        //         placeholderText="Last updated"
        //         isClearable={true}
        //       />
        //     </Grid>
        //     <Grid item sm={2} xs={12} sx={styles.engineFilter}>
        //       <FormControl sx={styles.formControl}>
        //         <InputLabel sx={styles.engine} className="interLable2">
        //           Engine
        //         </InputLabel>
        //         <Select
        //           sx={styles.sessionEngineFilter}
        //           multiple
        //           value={engineName}
        //           onChange={(e: any) => setEngineName(e.target.value)}
        //           input={<OutlinedInput label="Engine" />}
        //           renderValue={(selected) => (
        //             <Stack gap={1} direction="row" flexWrap="wrap">
        //               {selected.map((value: any) => (
        //                 <Chip
        //                   sx={styles.chip}
        //                   key={value}
        //                   label={value}
        //                   onDelete={() =>
        //                     setEngineName(
        //                       engineName.filter((item: any) => item !== value)
        //                     )
        //                   }
        //                   deleteIcon={
        //                     <CancelIcon
        //                       onMouseDown={(event) => event.stopPropagation()}
        //                     />
        //                   }
        //                 />
        //               ))}
        //             </Stack>
        //           )}
        //           IconComponent={KeyboardArrowDownIcon}
        //         >
        //           {ENGINE_NAMES.map((item: any) => (
        //             <MenuItem key={item.id} value={item.name}>
        //               {item.name}
        //             </MenuItem>
        //           ))}
        //         </Select>
        //       </FormControl>
        //     </Grid>

        //     <Grid item sm={2} xs={12} sx={styles.engineFilter}>
        //       <FormControl sx={styles.formControl}>
        //         <InputLabel sx={styles.engine} className="interLable2">
        //           Topics
        //         </InputLabel>
        //         <Select
        //           sx={styles.sessionEngineFilter}
        //           multiple
        //           value={topicName}
        //           onChange={(e: any) => setTopicName(e.target.value)}
        //           input={<OutlinedInput label="Topics" />}
        //           renderValue={(selected) => (
        //             <Stack gap={1} direction="row" flexWrap="wrap">
        //               {selected.map((value: any) => (
        //                 <Chip
        //                   sx={styles.chip}
        //                   key={value}
        //                   label={value}
        //                   onDelete={() =>
        //                     setTopicName(
        //                       topicName.filter((item: any) => item !== value)
        //                     )
        //                   }
        //                   deleteIcon={
        //                     <CancelIcon
        //                       onMouseDown={(event) => event.stopPropagation()}
        //                     />
        //                   }
        //                 />
        //               ))}
        //             </Stack>
        //           )}
        //           IconComponent={KeyboardArrowDownIcon}
        //         >
        //           {STATUS.map((item: any) => (
        //             <MenuItem key={item.id} value={item.name}>
        //               {item.name}
        //             </MenuItem>
        //           ))}
        //         </Select>
        //       </FormControl>
        //     </Grid>

        //     <Grid item sm={2} xs={12} sx={styles.user}>
        //       <FormControl fullWidth sx={styles.userFormControl}>
        //         <InputLabel
        //           id="demo-simple-select-label-3"
        //           className="interLable"
        //           sx={styles.userText}
        //         >
        //           Status
        //         </InputLabel>

        //         <Select
        //           sx={styles.sessionEngineFilter}
        //           labelId="demo-simple-select-label-3"
        //           id="demo-simple-select-3"
        //           value={isStatus}
        //           label="Status"
        //           onChange={(event) => {
        //             setIsStatus(event.target.value as string);
        //           }}
        //           renderValue={() => isStatus}
        //           IconComponent={KeyboardArrowDownIcon}
        //         >
        //           {TOPICS.map((item: any) => (
        //             <MenuItem
        //               value={item.name}
        //               sx={styles.enginItem}
        //               key={item.id}
        //             >
        //               {item.name}
        //               {isStatus === item.name && (
        //                 <IconButton
        //                   sx={styles.iconBtn}
        //                   aria-label="delete"
        //                   onClick={() => setIsStatus("")}
        //                 >
        //                   <ClearIcon sx={styles.closeIcon} />
        //                 </IconButton>
        //               )}
        //             </MenuItem>
        //           ))}
        //         </Select>
        //       </FormControl>
        //     </Grid>
        //   </>
        <></>
        )}
      </Grid>
    </>
  );
};
export default PolicyFilters;
