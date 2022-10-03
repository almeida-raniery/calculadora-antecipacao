import { useState } from "react";
import AppContainer from "./components/AppContainer";
import TransactionForm from "./components/Forms/TransactionForm";
import ResultList from "./components/ResultList";
import { GlobalStyle } from "./globalStyles";

function App() {
  const [isShowingResults, setIsShowingResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(true)
  const [results, setResults] = useState({})

  return (
    <AppContainer>
      <TransactionForm
        setIsShowingResults={setIsShowingResults}
        isShowingResults={isShowingResults}
        setIsCalculating={setIsCalculating}
        setResults={setResults}
      />
      <ResultList
        isShowingResults={isShowingResults}
        setIsShowingResults={setIsShowingResults}
        isCalculating={isCalculating}
        results={results}
      />
      <GlobalStyle />
    </AppContainer>
  );
}

export default App;
