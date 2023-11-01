import styled from 'styled-components';
import bg1 from '@/assets/bg1.jpg';
import bg2 from '@/assets/bg2.jpg';
import bg3 from '@/assets/bg3.jpg';
import bg4 from '@/assets/bg4.jpg';
export const LoginWrapper = styled.div`
  height: 100vh;
  /*弹性布局居中*/
  display: flex;
  justify-content: center;
  align-items: center;
  /*渐变背景*/
  //background: linear-gradient(200deg, #d19fea, #a9c1ed);
  background: url(${bg4}) no-repeat center center;
  background-size: cover;
  /*溢出影藏*/
  overflow: hidden;
.titleName{
  flex:1;
  text-align: center;
  transform: translateY(50%);
}
  .loginCard{
    .ant-card-body{
        display: flex;
      .content{
        width: 200px;
        position: relative;
        img{
          width: 100px;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
      }

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
.verificationCode{
  display: flex;
  align-items: end;
  div{
    flex: 1;
    .ant-input{
      width: 180px;
    }
  }
  img{
    //flex: 1;
    width: 100px;
    height: 40px;
    cursor: pointer;
  }
}

`;
