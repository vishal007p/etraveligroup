import { Button, Form, Input, Modal } from "antd";
import React from "react";
const FormItem = Form.Item;

function CustomModal({ isModalOpen, handleCancel, handleSubmit }) {
  const handleOk = () => {
    alert("sd");
  };
  //   const { getFieldDecorator } = this.props.form;
  //   const handleSubmit = (value) => {
  //     alert(JSON.stringify(value));
  //   };

  return (
    <div>
      <Modal
        title="Add Form"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form onFinish={handleSubmit}>
          {/* <FormItem label="E-mail" hasFeedback>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ],
            })(<Input />)}
          </FormItem> */}
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lasttName"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default CustomModal;
