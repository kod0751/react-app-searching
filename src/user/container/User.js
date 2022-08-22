import React, { useEffect } from "react";
import { Col, PageHeader, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state";

export default function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useParams();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(actions.fetchUser(name));
  }, [name]);

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={20} lg={14}>
          <PageHeader onBack={() => navigate(-1)} title="사용자 정보">
            {user?.name}
          </PageHeader>
        </Col>
      </Row>
    </>
  );
}
