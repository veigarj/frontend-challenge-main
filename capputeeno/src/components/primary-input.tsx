import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { SearchIcon } from './icon/search-icon';

// styled components input
export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  background-color: var(--bg-secondary);

  /* inherit erda as configuraçõe do pai */
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

// colocar icon svg dentro do input
const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    // container do input
    <InputContainer>
      {/* input  */}
      <PrimaryInput {...props} />
      {/* icon svg */}
      <SearchIcon />
    </InputContainer>
  );
}
