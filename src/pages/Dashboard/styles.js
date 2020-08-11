import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  padding: 10px;

  div {
    display: flex;
    flex-direction: row
  }
`;

export const Circle = styled.span`
  margin-top: 4px;
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
`;

export const Log = styled.div`
  margin-top: 20px;
`;