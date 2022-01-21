import { Card } from 'antd';
import CreateLifeForm from '../components/CreateLifeForm';
import { withErrorBoundary } from '../layouts/RoutedErrorBoundary';

const CreateLifePage = () => (
    <Card>
        <CreateLifeForm />
    </Card>
);

export default withErrorBoundary(CreateLifePage);
