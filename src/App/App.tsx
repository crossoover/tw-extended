import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChartWindow } from "../ChartWindow";
import { AppWrapper, ChartsList, StyledTypographyH1, ToolBar } from "./styles";
import "../styles/index.css";
import { Button, Menu, IconButton, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ISymbolObject {
  symbol: string;
  id: string;
}

const App = () => {
  const [symbols, setSymbols] = useState<Array<ISymbolObject>>(
    localStorage.getItem("symbols")
      ? JSON.parse(localStorage.getItem("symbols")!)
      : []
  );
  const [symbolInFocusId, setSymbolInFocusId] = useState<string>("default");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openDeleteList = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const deleteChartById = (id: string) =>
    setSymbols(symbols.filter((el) => el.id !== id));

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!localStorage.getItem("symbols")) {
      localStorage.setItem("symbols", JSON.stringify([]));
      setSymbols([]);
    }
    localStorage.setItem("symbols", JSON.stringify(symbols));
  }, [symbols]);

  return (
    <AppWrapper>
      {symbols && Boolean(symbols.length) ? (
        <ChartsList>
          {symbols.map((el: ISymbolObject) => (
            <ChartWindow
              key={el.id}
              symbol={el.symbol}
              isHighlighted={el.id === symbolInFocusId}
            />
          ))}
        </ChartsList>
      ) : (
        <StyledTypographyH1 variant="h2">
          Add your first chart.
        </StyledTypographyH1>
      )}
      <ToolBar>
        <Button
          onClick={() => {
            setSymbols([...symbols, { symbol: "BTCUSDT", id: uuidv4() }]);
            setAnchorEl(null);
          }}
        >
          add chart
        </Button>
        {symbols && Boolean(symbols.length) && (
          <div>
            <Button onClick={openDeleteList}>Delete chart</Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {symbols.map((el: ISymbolObject, index: number) => (
                <MenuItem
                  key={el.id}
                  onMouseEnter={() => setSymbolInFocusId(el.id)}
                  onMouseLeave={() => setSymbolInFocusId("default")}
                >
                  Chart {index}
                  <IconButton
                    onClick={() => deleteChartById(el.id)}
                    color="error"
                  >
                    <CloseIcon />
                  </IconButton>
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}
      </ToolBar>
    </AppWrapper>
  );
};

export default App;
