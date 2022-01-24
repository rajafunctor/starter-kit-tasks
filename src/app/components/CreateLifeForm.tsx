import { Form, Input, DatePicker, Select, Button, notification, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { useCreateLifeMutation } from '../api';

const { TextArea } = Input;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const CreateLifeFrom = () => {
    const { t } = useTranslation('life');
    const [form] = Form.useForm();
    const history = useHistory();
    const [createLifeMutation, { loading }] = useCreateLifeMutation();

    const onFinish = (values: any) => {
        const birthday = values.birthday.toISOString();
        const body = { ...values, birthday };
        createLifeMutation({ variables: { body } })
            .then(() => {
                history.push('/lives');
            })
            .catch(() => {
                notification.error({
                    message: t('life:createLife.createLifeErrorHeading'),
                    description: t('life:createLife.createLifeErrorDescription'),
                });
            });
    };

    return (
        <div>
            <Title>{t('life:createLife.title')}</Title>
            <Divider />
            <Form
                {...formItemLayout}
                form={form}
                initialValues={{
                    firstName: null,
                    lastName: null,
                    title: null,
                    description: null,
                    hobbies: [],
                    birthday: null,
                }}
                name="createLife"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    label={t('life:listLives.fullName')}
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: t('life:createLife.firstNameError'),
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t('life:listLives.lastName')}
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: t('life:createLife.lastNameError'),
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label={t('life:listLives.title')}
                    name="title"
                    rules={[{ required: true, message: t('life:createLife.titleError') }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label={t('life:listLives.birthday')}
                    name="birthday"
                    rules={[{ required: true, message: t('life:createLife.birthdayError') }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label={t('life:listLives.hobbies')}
                    name="hobbies"
                    rules={[{ required: true, message: t('life:createLife.hobbiesError') }]}
                >
                    <Select mode="tags" tokenSeparators={[',']} />
                </Form.Item>
                <Form.Item
                    label={t('life:listLives.description')}
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: t('life:createLife.descriptionError'),
                        },
                    ]}
                >
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button htmlType="submit" loading={loading} shape="round" size="large" type="primary">
                        {t('life:listLives.createLife')}
                    </Button>

                    <Button onClick={() => history.push(`/lives`)} shape="round" size="large">
                        {t('life:viewLife.backToLives')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateLifeFrom;
