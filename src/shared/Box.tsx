import styled from 'styled-components';

const Box = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.background.secondary};
  border: 1px dashed ${({ theme }) => theme.background.special};
  border-radius: ${({ theme }) => theme.spacing.small}px;
  padding: ${({ theme }) => theme.spacing.medium}px;
  margin-right: ${({ theme }) => theme.spacing.medium}px;
  margin-bottom: ${({ theme }) => theme.spacing.medium}px;
`;

export default Box;
