import { useState } from "react"
import { Button, Space, Table } from "antd"


import { deleteAll } from "../../services/Axios/APiCrud"
import ModalComponent from "../Modal/ModalForm"

const { Column } = Table

interface DataType {
  key: React.Key
  firstName: string
  lastName: string
  age: number
  address: string
  tags: string[]
}

type TableType = {
  loadData: Function
  dataTable: any
}

const TableComponent = ({ loadData, dataTable }: TableType) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [selectedRecord, setSelectedRecord] = useState(null)


  const handleAdd = (record: any) => {
    setSelectedRecord(record)
    setIsModalOpen(true)
  }

  const handleDelete = (id: any) => {
    deleteAll(id._id).then((res) => {
      if (res.status === 200) loadData()
    })
  }

  if (dataTable) {
    return (
      <Table dataSource={dataTable} rowKey={"_id"}>
        <Column title="Codigo" dataIndex="_id" key="_id" />
        <Column title="Titulo" dataIndex="title" key="title" />
        <Column title="Prioridad" dataIndex="priority" key="priority" />
        <Column title="Cantidad" dataIndex="amount" key="amount" />
        <Column title="Descripción" dataIndex="description" key="description" />
        <Column
          title="Action"
          key="action"
          render={(_: any, record: DataType) => (
            <Space className="table-button" size="middle">
              <div>
                <Button onClick={() => handleAdd(record)}>Modificar</Button>
              </div>
              <ModalComponent
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                updateModal={true}
                data={selectedRecord}
                loadData={loadData}
              />
              <div>
                <Button onClick={() => handleDelete(record)}>Eliminar</Button>
              </div>
            </Space>
          )}
        />
      </Table>
    )
  }
  return <h1>No hay datos</h1>
}
export default TableComponent
