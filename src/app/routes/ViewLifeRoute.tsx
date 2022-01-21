import { ReactElement } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import ViewLifePage from '../pages/ViewLifePage';

const ViewLifeRoute = (): ReactElement => (
    <BasicLayout>
        <ViewLifePage />
    </BasicLayout>
);

export default ViewLifeRoute;
