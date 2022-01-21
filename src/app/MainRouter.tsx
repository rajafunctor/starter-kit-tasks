import { Switch, Route } from 'react-router-dom';
import { withErrorBoundary } from './layouts/RoutedErrorBoundary';
import DummyErrorRoute from './routes/DummyErrorRoute';
import HomeRoute from './routes/HomeRoute';
import InternalErrorRoute from './routes/InternalErrorRoute';
import LivesRoute from './routes/LivesRoute';
import NotFoundRoute from './routes/NotFoundRoute';
import ViewLifeRoute from './routes/ViewLifeRoute';

const MainRouter = () => (
    <Switch>
        <Route component={ViewLifeRoute} path="/lives/:id/life" exact />
        <Route component={LivesRoute} path="/lives" exact />
        <Route component={HomeRoute} path="/" exact />
        <Route component={DummyErrorRoute} path="/dummyError" exact />
        <Route component={InternalErrorRoute} path="/500" exact />l
        <Route component={NotFoundRoute} />
    </Switch>
);

export default withErrorBoundary(MainRouter);
