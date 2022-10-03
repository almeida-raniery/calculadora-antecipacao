import { ListContainer, ReturnButton } from "./style";

function ResultList({
  results,
  isShowingResults,
  setIsShowingResults,
  isCalculating,
}) {
  function formatValue(value) {
    return Number(value).toLocaleString("PT-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <ListContainer isShowingResults={isShowingResults}>
      {isCalculating ? (
        <h2>Calculando...</h2>
      ) : (
        <div>
          <h1>Você Receberá:</h1>
          {Object.keys(results).map((key) => (
            <h3>
              Em {key} dias: {formatValue(results[key])}
            </h3>
          ))}
          <ReturnButton onClick={() => setIsShowingResults(false)}>Fazer outra simulação</ReturnButton>
        </div>
      )}
    </ListContainer>
  );
}

export default ResultList;
