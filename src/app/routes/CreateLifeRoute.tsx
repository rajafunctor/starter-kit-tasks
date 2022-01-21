import { ReactElement } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import CreateLifePage from '../pages/CreateLifePage';

const CreateLifeRoute = (): ReactElement => (
    <BasicLayout>
        <CreateLifePage />
    </BasicLayout>
);

export default CreateLifeRoute;
