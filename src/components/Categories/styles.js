import styled from 'styled-components';
import { Colors } from '../../Colors';

const CategoriesWrapper = styled.div`
  padding: 50px;
`;

CategoriesWrapper.Title = styled.div`
  display: flex;
  margin: 20px 0px;
  font-size: 1.5rem;
  color: #7d7d7d;
`;

CategoriesWrapper.List = styled.ul`
  padding: 0;
`;

CategoriesWrapper.ListItem = styled.li`
  display: inline-flex;
  margin: 12px;
  padding: 30px;
  background-color: ${Colors.white};
  border-radius: 4px;
  border: 1px solid #880E4F;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
  cursor: pointer;
  color: ${Colors.coal};
  text-transform: capitalize;
  font-weight: 500;
`;

export default CategoriesWrapper;
