import { Card } from 'antd';
import ViewLife from '../components/ViewLife';
import { withErrorBoundary } from '../layouts/RoutedErrorBoundary';

const ViewLifePage = () => (
    <Card>
        <ViewLife />
    </Card>
);

export default withErrorBoundary(ViewLifePage);
