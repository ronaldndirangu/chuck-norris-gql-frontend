import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { GET_JOKE } from '../../queries';
import Button from '../../styles/Button';
import { Redirect, withRouter } from 'react-router-dom';

const JokeContainer = ({ category }) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_JOKE,
    { variables: { category }, notifyOnNetworkStatusChange: true });

  if (loading || networkStatus === 4) return 'Loading joke';

  return !category ? (
    <Redirect to='/categories' />
  ) : (
    <div>
      {data && data.joke.value}
      <Button label='Get another joke' onClick={() => refetch()} />
    </div>
  );
};

const mapStateToProps = ({ jokeReducer }) => ({
  category: jokeReducer.category
});

export default connect(mapStateToProps)(withRouter(JokeContainer));
