import { ArrowRightOutlined } from '@ant-design/icons';
import { Row, Col, Button, Divider, Skeleton, Empty } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { useGetListLivesQuery } from '../api';

// Types
// ------------------------------------------------------

type FieldLayoutProps = {
    layout: 'row' | 'column';
};

type FieldProps = {
    label: string;
    value: string | string[];
};

// Styled Components
// ------------------------------------------------------

const StyledLabel = styled.div`
    font-weight: bold;
    font-size: 14px;
    padding: 5px;
`;

const StyledValue = styled.div`
    font-size: 16px;
    padding: 5px;
`;

const StyledRow = styled(Row)`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    .mainDetails {
        height: 100%;
        background-color: #f5f5f5;
        padding: 1em;
        margin-right: 10px;
        border-radius: 5px;
    }

    .otherDetails {
        height: 100%;
        padding: 1em;
        margin-right: 10px;
    }

    .actions {
        display: flex;
        align-items: center;
    }
`;

const StyledField = styled('div')<FieldLayoutProps>`
    display: flex;
    flex-flow: ${props => props.layout} nowrap;

    .label {
        width: ${props => (props.layout === 'row' ? '50%' : '100%')};
    }
    .value {
        width: ${props => (props.layout === 'row' ? '50%' : '100%')};
    }
`;

// React Components
// ------------------------------------------------------

const Field = ({ label, value, layout }: FieldProps & FieldLayoutProps): JSX.Element => {
    const valueIsArray = Array.isArray(value);

    return (
        <StyledField layout={layout}>
            <StyledLabel className="label">{label}</StyledLabel>
            <StyledValue className="value">
                {!valueIsArray && value}
                {valueIsArray && (
                    <ul>
                        {value.map(val => (
                            <li key={val}>{val}</li>
                        ))}
                    </ul>
                )}
            </StyledValue>
        </StyledField>
    );
};

const ListLives = () => {
    const { t } = useTranslation(['life']);
    const history = useHistory();
    const { data, loading } = useGetListLivesQuery({
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'cache-first',
    });
    const listLives = data?.listLives || [];
    const noLives = !listLives?.length;

    if (!loading && noLives) {
        return (
            <Empty description={t('life:noLives')}>
                <Button onClick={() => history.push(`/lives/create`)} shape="round" type="primary">
                    {t('life:listLives:createLife')}
                </Button>
            </Empty>
        );
    }

    return (
        <div>
            <Button onClick={() => history.push(`/lives/create`)} shape="round" size="large" type="primary">
                {t('life:listLives:createLife')}
            </Button>

            <Divider />
            <Skeleton loading={loading} active>
                {listLives.map(life => (
                    <React.Fragment key={life.id}>
                        <StyledRow>
                            <Col lg={6} sm={24}>
                                <div className="mainDetails">
                                    <Field label={t('life:listLives:fullName')} layout="row" value={life.fullName} />
                                    <Field label={t('life:listLives:firstName')} layout="row" value={life.firstName} />
                                    <Field label={t('life:listLives:lastName')} layout="row" value={life.lastName} />
                                    <Field
                                        label={t('life:listLives:birthday')}
                                        layout="row"
                                        value={life.birthday?.toString()?.split('T')?.[0]}
                                    />
                                </div>
                            </Col>
                            <Col lg={14} sm={24}>
                                <div className="otherDetails">
                                    <Field label={t('life:listLives:hobbies')} layout="column" value={life.hobbies} />
                                    <Field
                                        label={t('life:listLives:description')}
                                        layout="column"
                                        value={life.description}
                                    />
                                </div>
                            </Col>
                            <Col className="actions" lg={4} sm={24}>
                                <Button
                                    onClick={() => history.push(`/lives/${life.id}/life`)}
                                    shape="round"
                                    size="large"
                                    type="primary"
                                    block
                                >
                                    {t('life:listLives:viewLife')} <ArrowRightOutlined />
                                </Button>
                            </Col>
                        </StyledRow>
                        <Divider />
                    </React.Fragment>
                ))}
            </Skeleton>
        </div>
    );
};

export default ListLives;
