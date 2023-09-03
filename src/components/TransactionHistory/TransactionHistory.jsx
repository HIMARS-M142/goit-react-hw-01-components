import { Table, TrTable, THeadText, TdText } from './TransactionHistoryStyled';

export const TransactionHistory = values => {
  return (
    <Table className="transaction-history">
      <thead>
        <TrTable>
          <THeadText>Type</THeadText>
          <THeadText>Amount</THeadText>
          <THeadText>Currency</THeadText>
        </TrTable>
      </thead>
      {values.items.map(({ id, type, amount, currency }) => {
        return (
          <tbody key={id}>
            <TrTable>
              <TdText>{type}</TdText>
              <TdText>{amount}</TdText>
              <TdText>{currency}</TdText>
            </TrTable>
          </tbody>
        );
      })}
    </Table>
  );
};
