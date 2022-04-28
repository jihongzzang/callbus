import { Suspense } from 'react';
import ErrorBoundary from 'components/Common/ErrorBoundary';
import CardList from '../Common/CardList';

const List: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>Fail</div>}>
      <Suspense fallback={<div>Loading</div>}>
        <CardList />
      </Suspense>
    </ErrorBoundary>
  );
};

export default List;
