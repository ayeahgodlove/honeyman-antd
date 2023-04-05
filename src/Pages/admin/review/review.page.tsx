import { Modal } from "antd";
import { ReviewForm } from "components/admin/review/review-form.component";
import ReviewTable from "components/admin/review/review-table.component";
import TitleBar from "components/common/title-bar/title-bar.component";
import PageBreadCrumbs from "components/shared/page-breadcrumb/page-breadcrumb.component";
import { useModalContext } from "context/app-modal.context";
import { useToken } from "hooks/token.hook";
import AppShell from "layout/app/app-shell";
import { UpdateMode } from "models/shared/update-mode.enum";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { fetchReviewsAsync } from "redux/review.slice";

const AdminReviewPage: React.FC = () => {
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

  const createReview = () => {
    setContent(<ReviewForm formMode={UpdateMode.ADD} />);
    setTitle("Create new review");
    setShow(true);
  };

  useEffect(()=> {
    dispatch(fetchReviewsAsync() as any)
  },[])

  return (
    <AppShell>
      <PageBreadCrumbs items={["Configurations", "Review"]} />
      <TitleBar
        title={"Reviews"}
        subTitle={"View and Create Reviews"}
        showButton={true}
        buttonLabel={"Add Record"}
        handleShow={showModal}
        icon={<FiPlus />}
      />
      <ReviewTable createReview={showModal} />

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ReviewForm formMode={UpdateMode.ADD} />
      </Modal>
    </AppShell>
  );
};

export default AdminReviewPage;
