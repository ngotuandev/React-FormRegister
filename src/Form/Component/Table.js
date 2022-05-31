import styled from "styled-components";

export const Table = styled.table`
  color: #000;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-spacing: 2px;
  border-color: #000;
`;
export const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border: 1px solid #000;
`;

export const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;
export const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border: 1px solid #000;
`;
export const Td = styled.td`
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

export const Th = styled.th`
    background-color: #000
    color: #000
    vertical-align: bottom;
    text-align: inherit;
    border-top: 1px solid #000;
    padding: .75rem;
    border-bottom: 1px solid #000;
`;
