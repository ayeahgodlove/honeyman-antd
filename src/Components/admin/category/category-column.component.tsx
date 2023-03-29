import { ColumnsType } from "antd/es/table";
import { ICategory } from "models/category.model";

export const categorieTableColumns: ColumnsType<ICategory> = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: '20rem',
        filtered: true,
    },
    {
        title: 'NAME',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'SLUG',
        dataIndex: 'slug',
        key: 'slug',
        filtered: true,
    },
    {
        title: 'CREATED_AT',
        dataIndex: 'createdAt',
        key: 'createdAt',
        filtered: true,
    },
]
