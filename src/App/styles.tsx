import { Typography } from "@mui/material";
import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 20px 40px;
`;

export const ChartsList = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const ToolBar = styled.div`
  background: #181c27;
  max-width: 100px;
  height: 100vh;
  right: 0;
`;

export const StyledTypographyH1 = styled(Typography)`
  color: white;
  margin-top: 100px !important;
`;
