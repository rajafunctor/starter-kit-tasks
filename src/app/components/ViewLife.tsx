import { Skeleton, Descriptions, Result, Button, Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useGetLifeQuery } from '../api';

const StyledDescription = styled(Descriptions)`
    .ant-descriptions-title {
        font-size: 2em;
        text-align: center;
    }
    .ant-descriptions-item-label {
        font-weight: bold;
        background-color: #d9d9d9;
    }
`;

const ViewLife = () => {
    const { t } = useTranslation('life');
    const history = useHistory();
    const params: { id: string } = useParams();
    const { data, loading } = useGetLifeQuery({ variables: { id: params.id } });
    const lifeDetails = data?.getLife;

    return (
        <Skeleton loading={loading} active>
            {!lifeDetails && (
                <Result
                    extra={
                        <Button onClick={() => history.push('/lives')} type="primary">
                            Back to Lives
                        </Button>
                    }
                    status="404"
                    subTitle={t('life:viewLife.lifeNotFound')}
                    title="404"
                />
            )}
            {lifeDetails && (
                <div>
                    <StyledDescription layout="vertical" title={lifeDetails?.title} bordered>
                        <Descriptions.Item label={t('life:listLives.fullName')} span={2}>
                            {lifeDetails.fullName}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('life:listLives.firstName')} span={2}>
                            {lifeDetails.firstName}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('life:listLives.lastName')} span={2}>
                            {lifeDetails.lastName}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('life:listLives.birthday')} span={2}>
                            {lifeDetails.birthday}
                        </Descriptions.Item>
                        <Descriptions.Item label={t('life:listLives.hobbies')} span={3}>
                            <ul>
                                {lifeDetails.hobbies.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </Descriptions.Item>
                        <Descriptions.Item label={t('life:listLives.description')} span={3}>
                            {lifeDetails.description}
                        </Descriptions.Item>
                    </StyledDescription>
                    <Divider />
                    <Button onClick={() => history.push('/lives')} type="primary">
                        {t('life:viewLife.backToLives')}
                    </Button>
                </div>
            )}
        </Skeleton>
    );
};

export default ViewLife;
