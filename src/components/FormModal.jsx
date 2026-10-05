'use client';

import { Form, Input, InputNumber, Modal } from "antd";

export default function FormModal({ openModal, serie, confirmLoading, onSubmit, onCancel }) {
    const [form] = Form.useForm();

    return (
        <Modal
            open={openModal}
            title={serie ? 'Editar série' : 'Criar nova série'}
            centered
            onOk={() => form.submit()}
            onCancel={onCancel}
            confirmLoading={confirmLoading}
            destroyOnHidden
        >
            <Form form={form} layout="vertical" initialValues={serie} onFinish={onSubmit}>
                <Form.Item
                    name='title'
                    label='Nome da série:'
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 120,
                            message: 'O nome da série obrigatório deve ter entre 3 e 120 caracteres.'
                        }
                    ]}>
                    <Input placeholder="ex: The Vampire Diaries" />
                </Form.Item>

                <Form.Item
                    name='genero'
                    label='Gênero:'
                    rules={[
                        {
                            required: true,
                            message: 'O gênero é obrigatório.'
                        }
                    ]}>
                    <Input placeholder="ex: Aventura" />
                </Form.Item>

                <Form.Item
                    name='plataforma'
                    label='Plataforma:'
                    rules={[
                        {
                            required: true,
                            message: 'A plataforma é obrigatória.'
                        }
                    ]}>
                    <Input placeholder="ex: Netflix" />
                </Form.Item>

                <Form.Item
                    name='numero_temporadas'
                    label='Temporadas:'
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            message: 'O número de temporadas é obrigatório.'
                        }
                    ]}>
                    <InputNumber placeholder="ex: 8" min={1} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name='ano_lancamento'
                    label='Ano de Lançamento:'
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            message: 'O ano de lançamento é obrigatório.'
                        }
                    ]}>
                    <InputNumber
                        placeholder="ex: 2008"
                        min={1900}
                        max={2100}
                        style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name='imageUrl'
                    label='URL da imagem:'
                    rules={[
                        {
                            type: 'url',
                            message: 'Deve ser uma URL válida.'
                        }
                    ]}>
                    <Input
                        placeholder="ex: https://codeverse.dev.br/the-vampire-diaries.png"
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
}