import React, { ReactNode, Suspense } from 'react';

// project imports
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

type LoadableProps = {
  children?: ReactNode;
};

const Loadable = (Component: React.ComponentType<any>) => (props: LoadableProps) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
