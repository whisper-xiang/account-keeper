import React from "react";
import { Button, Space, message, Input } from "antd";
import { Col, Row, Collapse } from "antd";

import "./style.scss";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const AccountList = () => {
  const handleClick = React.useCallback(() => {
    message.info("hello");
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const getItems = (panelStyle) => [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
      style: panelStyle,
    },
  ];

  const panelStyle = {
    marginBottom: 24,
    background: "#fcfcfc",
    borderRadius: 5,
    border: "none",
  };

  return (
    <Space className="account-list-wrapper">
      <Row>
        <Col span={24} className="d-flex justify-content-center mb-4 mt-4">
          <Search
            placeholder="input search text"
            allowClear
            onInput={onChange}
            className="pl-4 pr-4"
          />
        </Col>
        <Col span={24}>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              // <CaretRightOutlined rotate={isActive ? 90 : 0} />
              <i
                className={`fa ${
                  isActive ? "fa-caret-down" : "fa-caret-right"
                }`}
              />
            )}
            style={{ background: "#fff" }}
            items={getItems(panelStyle)}
          />
        </Col>
      </Row>
    </Space>
  );
};

export default AccountList;
