import React, {
  FunctionComponent,
  useState,
  useEffect,
  useRef,
  useMemo
} from 'react';
import styled from 'styled-components';

import Motorcycle from '../icons/motorcycle';
import Bike from '../icons/bike';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.color.secondary};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  border-radius: ${({ theme }) => theme.spacing.micro}px;
  margin-right: 0.25em;
  padding: 0.25em 0.5em;
  outline: none;
  :hover {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.background.primary};
    border-color: ${({ theme }) => theme.background.special};
  }
`;

type ButtonProps = {
  iconSize: number;
};

const Button: FunctionComponent<ButtonProps> = ({
  iconSize = 32,
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(null);
  const handleMouseOver = useMemo(() => () => setIsHovered(true), []);
  const handleMouseOut = useMemo(() => () => setIsHovered(false), []);

  useEffect(
    () => {
      const node = hoverRef.current;
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    },
    [hoverRef.current] // Recall only if ref changes
  );

  return (
    <StyledButton ref={hoverRef}>
      {isHovered ? <Bike size={iconSize} /> : <Motorcycle size={iconSize} />}
      &nbsp;
      {children}
    </StyledButton>
  );
};

export default Button;
