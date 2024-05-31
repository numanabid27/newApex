import React, { useCallback } from "react";

import ReactFlow from "reactflow";
import { useNodesState, useEdgesState, addEdge, Node } from "reactflow";

import "reactflow/dist/style.css";

import Image from "next/image";

import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";

import BackHandIcon from "@mui/icons-material/BackHand";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import KeyOffIcon from "@mui/icons-material/KeyOff";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Style } from "./graph";
import { Typography } from "@mui/material";
const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 772, y: 0 },
    data: {
      label: (
        <>
          <Grid className="first_node">
            <Box>
              <a
                href="https://www.salesforce.com/"
                className="saleforce_img"
                target="_blank"
              >
                <Image
                  src="/image/Azura_logo_img.png"
                  style={{ position: "relative", top: "7px" }}
                  alt="image"
                  height={50}
                  width={50}
                />
              </a>
              <a
                href="https://www.google.com/drive/"
                className="drive_img"
                target="_blank"
              >
                <Image src="/image/drive.png" alt="Node Image" 
                height={40}
                width={40}
                style={{position:"relative" , top:"10px"}} />
              </a>
            </Box>
          </Grid>
          <Box className="bottom_box">
            <p className="node_description" style={{ fontFamily: ', sans-serif' }}>Tuned by Apex</p>
          </Box>
        </>
      ),
      style: {
        backgroundColor: "red",
      },
      className: "MyCLass",
    },
  },
  {
    id: "2",
    position: { x: 1250, y: 70 },
    data: {
      label: (
        <Grid className="second_node">
          <p style={{ fontFamily: 'Inter, sans-serif' }}>Internet Access</p>
          <Box className="chip_api">
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Api</span>
          </Box>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "3",
    position: { x: 737, y: 222 },
    data: {
      label: (
        <Grid className="third_node" container>
          <Typography
            style={{
              borderBottom: "1px solid #D0D5DD",
              paddingBottom: "20px",
              width:"100%",
            }}
          >
            <Box className="chip_notification">
              <span>
                <NotificationsNoneIcon
                  style={{ position: "relative", top: "2px", fontSize: "15px" ,fontFamily: 'Inter, sans-serif'}}
                  className="text_red"
                />
                16 Alerts
              </span>
            </Box>
            <Image
              src="/image/azure.png"
              style={{ position: "relative", top: "7px" }}
              alt="image"
              height={30}
                  width={30}
            />
            <h1
              style={{
                margin: "0px",
                display: "inline-block",
                width: "75%",
              }}
            >
              Azure General
            </h1>
          </Typography>
          <p style={{ marginTop: "17px" ,fontFamily: 'Inter, sans-serif', textAlign:"left"}} className="description_footer">
            Azure OpenAI
          </p>
          <p className="description_footer" style={{ fontFamily: 'Inter, sans-serif', textAlign:"left" }}>GPT4</p>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "4",
    position: { x: 1255, y: 280 },
    data: {
      label: (
        <Grid className="fourht_node" container>
          <KeyOffIcon
            style={{ fontSize: "16px", marginRight: "10px", color: "#F04438" }}
          />
          <span>Restrict Access</span>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "5",
    position: { x: 392, y: 280 },
    data: {
      label: (
        <Grid className="fifth_node" container>
          <ContentPasteSearchIcon
            style={{ fontSize: "16px", marginRight: "10px", color: "#1570EF" }}
          />
          <span style={{ fontFamily: 'Inter, sans-serif' }}>Potential prompt injection</span>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "6",
    position: { x: 0, y: 275 },
    data: {
      label: (
        <Grid className="sixt_node" container>
          <SmartToyIcon
            style={{
              fontSize: "19px",
              marginRight: "10px",
              color: "#98A2B3",
              position: "relative",
              top: "5px",
            }}
          />
          <span style={{ fontFamily: 'Inter, sans-serif' }}>Customer service chatbot</span>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "7",
    position: { x: 770, y: 500 },
    data: {
      label: (
        <Grid className="fifth_node" container>
          <img style={{marginRight:"6px"}} src="/image/pan_tool.png" />
          <span >Enforce 3 GDPR policies</span>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "8",
    position: { x: 490, y: 540 },
    data: {
      label: <span className="access_span" style={{ fontFamily: 'Inter, sans-serif' }}>Access data</span>,
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "9",
    position: { x: 0, y: 520 },
    data: {
      label: (
        <>
          <Grid className="sixt_node" container>
            <SmartToyIcon
              style={{
                fontSize: "19px",
                marginRight: "10px",
                color: "#98A2B3",
                position: "relative",
                top: "5px",
              }}
            />
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Company Slackbot</span>
          </Grid>
          <Box className="Box_Dropdown">
            <p className="heading_span" style={{ fontFamily: 'Inter, sans-serif' }}>Chat Subject</p>
            <ul className="List">
              <li>
                <p className="list_span" style={{ fontFamily: 'Inter, sans-serif' }}>1. M&A</p>
                <p className="list_span" style={{ fontFamily: 'Inter, sans-serif' }}>2. Company Quarter Goals</p>
                <p className="list_span" style={{ fontFamily: 'Inter, sans-serif' }}>3. Code</p>
                <p className="list_span" style={{ fontFamily: 'Inter, sans-serif' }}>4. Other</p>
              </li>
            </ul>
          </Box>
        </>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "10",
    position: { x: 1250, y: 430 },
    data: {
      label: (
        <Grid className="tenth_node">
          <p style={{ fontFamily: 'Inter, sans-serif' }}>All Company access</p>
        </Grid>
      ),
      Style: {
        color: "red",
      },
    },
  },
  {
    id: "11",
    position: { x: 1100, y: 670 },
    data: {
      label: (
        <span className="access_span" style={{ fontFamily: 'Inter, sans-serif' }}>
          <span className="text_Gray" style={{ fontFamily: 'Inter, sans-serif' }}>Engine created: </span> July 2023
        </span>
      ),
    },
  },
  {
    id: "12",
    position: { x: 800, y: 670 },
    data: {
      label: (
        <span className="access_span" style={{ fontFamily: 'Inter, sans-serif' }}>
          <span className="text_Gray" style={{ fontFamily: 'Inter, sans-serif' }}>Released </span> May 2023
        </span>
      ),
    },
  },
  {
    id: "13",
    position: { x: 550, y: 670 },
    data: {
      label: (
        <span className="access_span text_red" style={{ fontFamily: 'Inter, sans-serif' }}>3 known vulnerabilities</span>
      ),
    },
  },
  {
    id: "14",
    position: { x: 400, y: 640 },
    data: {
      label: (
        <a href=""><img src="/image/okla.png"></img></a>
      ),
    },
  },
];

const initialEdges = [
  { type: "smoothstep", id: "1", source: "1", target: "3" , animated:true},
  { type: "smoothstep", id: "2", source: "2", target: "4" , animated:true},
  { type: "smoothstep", id: "3", source: "4", target: "3" , animated:true},
  { type: "smoothstep", id: "4", source: "3", target: "5" , animated:true},
  { type: "smoothstep", id: "5", source: "5", target: "6" , animated:true},
  { type: "smoothstep", id: "6", source: "3", target: "7" , animated:true},
  { type: "smoothstep", id: "7", source: "7", target: "8" , animated:true},
  { type: "smoothstep", id: "8", source: "8", target: "9" , animated:true},
  { type: "smoothstep", id: "10", source: "10", target: "11" , animated:true},
  { type: "smoothstep", id: "11", source: "11", target: "12" , animated:true},
  { type: "smoothstep", id: "12", source: "12", target: "13" , animated:true},
  { type: "smoothstep", id: "13", source: "13", target: "14" , animated:true},
  { type: "smoothstep", id: "14", source: "14", target: "9" , animated:true},
];
function ZoomOut() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <>
      <Grid container sx={Style.FlowChart_one} style={{ zoom: 0.7 , pointerEvents: 'none' }} className="graph-map">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          zoomOnScroll={false}   // Disable zooming via mou
          onConnect={onConnect}
          className="mynodes2"
          
        />
      </Grid>
    </>
  );
}

export default ZoomOut;
