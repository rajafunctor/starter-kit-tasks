import { Card } from 'antd';
import ListLives from '../components/ListLives';
import { withErrorBoundary } from '../layouts/RoutedErrorBoundary';

const LivesPage = () => (
    <Card>
        <ListLives />
    </Card>
);

export default withErrorBoundary(LivesPage);
