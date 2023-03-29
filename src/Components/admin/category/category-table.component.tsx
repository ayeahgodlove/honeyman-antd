import React from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { categorieTableColumns } from "./category-column.component";
import { ICategory } from "models/category.model";
import { useCategory } from "hooks/category.hook";
import { NoContent } from "components/shared/no-content/no-content.component";

type Prop = {
  createCategory: () => void
}
const CategoryTable: React.FC<Prop> = ({ createCategory }) => {
  const { categories, setCategory } = useCategory();
  const router = useNavigate();
  // const route = use
  const handleRowClick = (category: ICategory) => {
    setCategory(category);
    router(`/admin/categories/${category.slug}`);
  };

  return (
    <>
      {categories && categories.length ? (
        <Table<ICategory>
          dataSource={categories}
          columns={categorieTableColumns}
          size={"small"}
          rowKey={"id"}
          onRow={(record: ICategory) => {
            return {
              onClick: (e) => {
                console.log(e)
                handleRowClick(record);
              },
            };
          }}
        />
      ) : (
        <NoContent
          title="No data for category"
          showButton={true}
          buttonLabel="Add Category"
          handleClick={createCategory}
        />
      )}
    </>
  );
};

export default CategoryTable;
