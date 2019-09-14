
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_JOKE } from '../../queries'; import JokeStyles from './styles';
import Button from '../../styles/Button';
import { Colors } from '../../Colors';

const Joke = ({ category }) => {
  const { loading, data, refetch, networkStatus } = useQuery(
    GET_JOKE,
    { variables: { category }, notifyOnNetworkStatusChange: true });

  // if (loading || networkStatus === 4) return 'Loading joke';

  return (
    <JokeStyles>
      <span>
        {/* {data && data.joke.value ? data.joke.value : 'Choose a category to see a joke :-)'} */}
        {((loading || networkStatus === 4)) ? 'Loading.....' : data && data.joke.value ? data.joke.value : 'Choose a category to see a joke :-)'}
      </span>
      <Button
        label='Get another joke'
        onClick={() => refetch()}
        color={Colors.white}
        bgColor={Colors.primary}
        disabled={!(data && data.joke.value) || (loading || networkStatus === 4)}
      />
    </JokeStyles>);
};

export default Joke;
