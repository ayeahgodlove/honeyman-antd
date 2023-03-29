import { Modal } from "antd";
import { CategoryForm } from "components/admin/category/category-form.component";
import CategoryTable from "components/admin/category/category-table.component";
import TitleBar from "components/common/title-bar/title-bar.component";
import PageBreadCrumbs from "components/shared/page-breadcrumb/page-breadcrumb.component";
import { useModalContext } from "context/app-modal.context";
import { useToken } from "hooks/token.hook";
import AppShell from "layout/app/app-shell";
import { UpdateMode } from "models/shared/update-mode.enum";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "redux/category.slice";

const AdminCategoryPage: React.FC = () => {
  const { token } = useToken();
  useEffect(() => {}, [token]);
  const { setContent, setTitle, setShow } = useModalContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const createCategory = () => {
    setContent(<CategoryForm formMode={UpdateMode.ADD} />);
    setTitle("Create new category");
    setShow(true);
  };

  useEffect(()=> {
    dispatch(fetchCategoriesAsync() as any)
  },[])

  return (
    <AppShell>
      <PageBreadCrumbs items={["Configurations", "Category"]} />
      <TitleBar
        title={"Difficulty Levels"}
        subTitle={"View and Create Difficulty Levels"}
        showButton={true}
        buttonLabel={"Add Record"}
        handleShow={showModal}
        icon={<FiPlus />}
      />
      <CategoryTable createCategory={showModal} />

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CategoryForm formMode={UpdateMode.ADD} />
      </Modal>
    </AppShell>
  );
};

export default AdminCategoryPage;
