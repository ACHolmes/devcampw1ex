import styled from 'styled-components'

export const TodoList = styled.ul`
  flex: 1;
  display: flex;
  list-style: inside;
  list-style-type: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

`
export const TodoItem = styled.li`
  background-color: cornsilk;
  box-shadow: 1px grey;
  padding: 10px 20px;
  width: 100%;
  font-size: 32px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  cursor: pointer;
  text-decoration: none;
  max-width: 50%;
  text-align: center;
  border: 1px solid darkslategray;
  border-radius: 5px;
  transition: 0.5s color;
  box-shadow: 2px 2px 2px 1px grey;
  &:hover{
    color: blue;
  }
`
export const TodoH2 = styled.h2`
  color: crimson;
  font-size: 36px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 0px 20px;
  text-decoration: underline;
`

export const FunctionalComponents = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h3{
    color: red;
    font-size: 30px;
  }
  textarea{
    font-size: 28px;
    width: 100%;
    height: 20%;
  }
  button{
    font-size: 28px;
    width: 32%;
    min-width: 100px;
    margin-top: 10px;
    background-color: #4CAF50;
    border-radius: 10px;
    color: white;
  }
`