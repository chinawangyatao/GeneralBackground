import styled from 'styled-components';

export const LayoutWrapper = styled.div`
.avatar{
  display: flex;
  align-items: center;
  justify-content: right;
  height: 100%;

}
  .footerStyle{
    width: 100%;
    text-align: center;
  }
  .ant-card-body {
    box-shadow: 10px 7px 14px -7px rgba(0,0,0,0.1);
  }
  .layoutLeft{
    position: relative;
    width: 200px;
    @media only screen and (max-width: 992px) {
      // 从最小尺寸 576px 开始应用样式（设备的最小屏幕尺寸）
      width: 0px;
    }
    .siderLeft{
      height: 100vh;
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
    }
  }
`;
