import { ReactElement } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import LivesPage from '../pages/LivesPage';

const LivesRoute = (): ReactElement => (
    <BasicLayout>
        <LivesPage />
    </BasicLayout>
);

export default LivesRoute;
