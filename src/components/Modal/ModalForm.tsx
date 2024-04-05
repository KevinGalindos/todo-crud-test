import { useEffect } from "react"
import { Button, Modal, Form, Input, Select, InputNumber } from "antd"

import { createAll, updateAll } from "../../services/Axios/APiCrud"

const { Item } = Form
const { Option } = Select

type IsModal = {
  isModalOpen: boolean
  setIsModalOpen: Function
  updateModal?: Boolean
  data?: any
  loadData: Function
}
type DataType = {
  title: String
  priority: any
  amount: Number
  description: string
  state: Boolean
}
const ModalComponent = ({
  isModalOpen,
  setIsModalOpen,
  updateModal,
  data,
  loadData
}: IsModal) => {
  const [form] = Form.useForm()
  useEffect(() => {
    if (isModalOpen && data) {
      form.setFieldsValue(data)
    }
  }, [data, form])




  const onFinish = async (values: DataType) => {
    await createAll(values).then((res) => {
      if (res?.status === 201) loadData()

    })
    setIsModalOpen(false)
  }
  const onFinishUpdate = (values: DataType) => {
    updateAll(values, data._id).then((res) => {
      if (res.status === 200) loadData()
    })
    setIsModalOpen(false)
  }
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form
          form={form}
          onFinish={updateModal ? onFinishUpdate : onFinish}
          layout="vertical"
          className="login-form"
        >
          <Item
            name="title"
            rules={[
              { required: true },
              { type: "string", message: "titulo no valido" },
            ]}
          >
            <Input placeholder="Title" />
          </Item>

          <Item
            label="Priority"
            name="priority"
            rules={[{ required: true, message: "select an option " }]}
            hasFeedback
          >
            <Select placeholder="Select Priority">
              <Option value="Alta"> Alta</Option>
              <Option value="Media"> Media</Option>
              <Option value="Baja"> Baja</Option>
            </Select>
          </Item>

          <Item
            name="amount"
            rules={[
              { required: true },
              { type: "number", message: "cantidad no valido" },
            ]}
          >
            <InputNumber placeholder="Amount" />
          </Item>

          <Item
            name="description"
            rules={[
              { required: true },
              { type: "string", message: "Descripcion no valido" },
            ]}
          >
            <Input placeholder="Descripcion" />
          </Item>

          <Button
            className="login-button"
            type="primary"
            htmlType="submit"
            block
          >
            {updateModal ? "Actualizar" : "Crear"}
          </Button>
        </Form>
      </Modal>
    </>
  )
}

export default ModalComponent
