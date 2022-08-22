import React, { useEffect } from "react";
import { Col, PageHeader, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function User({ match }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const name = match.params.name;
  useEffect(() => {
    dispatch;
  }, [name]);

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={20} lg={14}>
          <PageHeader onBack={() => navigate(-1)} title="사용자 정보">
            {user.name}
          </PageHeader>
        </Col>
      </Row>
    </>
  );
}
