import styled from "styled-components";

export const Title = styled.h1`
    color: green;
`;
export const Label = styled.label`
  float: left;
  width: 90px; 
  margin-right: 1px;
`;
export const Input = styled.input`
  width: 50%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Txt = styled.textarea`
  width: 50%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;
