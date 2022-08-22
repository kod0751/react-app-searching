import React, { useEffect } from "react";
import { Col, Descriptions, PageHeader, Row, Typography } from "antd";
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

  const isFetched = true;

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={20} lg={14}>
          <PageHeader onBack={() => navigate(-1)} title="사용자 정보">
            {user && (
              <Descriptions layout="vertical" bordered column={1}>
                <Descriptions.Item label="이름">
                  <Typography.Text>{user.name}</Typography.Text>
                </Descriptions.Item>
                <Descriptions.Item label="소속">
                  {user.department}
                </Descriptions.Item>
                <Descriptions.Item label="태그">{user.tag}</Descriptions.Item>
                <Descriptions.Item label="수정 내역">
                  수정 내역
                </Descriptions.Item>
              </Descriptions>
            )}
            {!user && isFetched && (
              <Typography.Text>존재하지 않는 사용자 입니다.</Typography.Text>
            )}
          </PageHeader>
        </Col>
      </Row>
    </>
  );
}
