import React from 'react'
import { Descriptions, message } from 'antd'

const Index: React.FC = () => (
    <div className="card">
        <Descriptions title="Mu Admin" bordered>
            <Descriptions.Item label="GitHub" span={3}>
                <a
                    style={{ color: '#1890ff' }}
                    href="https://github.com/chinawangyatao/GeneralBackground"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://github.com/chinawangyatao/GeneralBackground
                </a>
            </Descriptions.Item>
            <Descriptions.Item label="预览地址" span={3}>
                <a
                    style={{ color: '#1890ff' }}
                    href="javascript:void(0)"
                    rel="noreferrer"
                    onClick={() => message.warn('穷b没钱买服务器')}
                >
                    预览站点
                </a>
            </Descriptions.Item>
            <Descriptions.Item label="PackAge">
                react: ^18.2.0
                <br />
                react-router-dom: ^6.9.0
                <br />
                redux: ^4.2.1
                <br />
                typescript: ^4.9.3
                <br />
                antd: ^4.24.8
                <br />
                vite: ^4.2.0
            </Descriptions.Item>
        </Descriptions>
    </div>
)

export default Index
