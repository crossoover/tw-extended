export interface ISymbolObject {
  symbol: string;
  id: string;
}

export const addNewSymbolToLocalStorage = (symbol: ISymbolObject) => {
  let symbols = JSON.parse(localStorage.getItem("symbols")!);
  symbols.push(symbol);
  localStorage.setItem("symbols", JSON.stringify(symbols));
};

export const deleteSymbolFromLocalStorageById = (symbolId: string) => {
  let symbols = JSON.parse(localStorage.getItem("symbols")!);
  symbols.filter((i: ISymbolObject) => i.id !== symbolId);
  localStorage.setItem("symbols", JSON.stringify(symbols));
};
