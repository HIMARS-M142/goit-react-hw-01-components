import styled from 'styled-components';
export const Table = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;

  font-size: 20px;
`;
export const TrTable = styled.tr`
  display: flex;
`;
export const THeadText = styled.th`
  border-collapse: collapse;
  border: 3px solid purple;
  font-size: 25px;
  width: 100px;
  background-color: antiquewhite;
  padding: 10px;
`;
export const TdText = styled.td`
  border-collapse: collapse;
  border: 3px solid purple;
  background-color: aqua;
  border-top: none;

  width: 100px;
  padding: 10px;
`;
