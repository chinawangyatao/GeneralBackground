import styled from 'styled-components';

export const LoginWrapper = styled.div`
  height: 100vh;
  /*弹性布局居中*/
  display: flex;
  justify-content: center;
  align-items: center;
  /*渐变背景*/
  background: linear-gradient(200deg, #d19fea, #a9c1ed);
  /*溢出影藏*/
  overflow: hidden;
.titleName{
  flex:1;
  text-align: center;
  transform: translateY(50%);
}
  .loginCard{
    flex: 1;

  }
  .loginTitle {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
  
  .inputStyle {
    border-radius: 0;
    border-bottom: 2px solid rgba(114, 114, 114, 0.5);
  }
  
  .ant-card-body {
    box-shadow: 11px 11px 22px 0px rgba(0, 0, 0, 0.1);
  }

`;
