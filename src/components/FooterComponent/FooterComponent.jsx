import React from 'react';
import { Row, Col, Divider } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import logo from '../../assets/images/logonew.png'
import logoSaleNoti from '../../assets/images/logoSaleNoti.png'


const FooterComponent = () => {
  return (
    <div style={{ heiht: '100%', width: '100%', display: 'flex', background: '#515154', justifyContent: 'center' }}>
      <FooterWrapper >
        <FooterContent>
          <FooterSection span={24}>
            <FooterLogo><img src={logo} alt="Logo" height={50} /></FooterLogo>
            <FooterTextWrapper>
              <FooterText>
                Năm 2023, SHOPPUU trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.
              </FooterText>
            </FooterTextWrapper>
            <SocialIcons>
              <SocialIcon href="#" target="_blank">
                <FacebookOutlined />
              </SocialIcon>
              <SocialIcon href="#" target="_blank">
                <TwitterOutlined />
              </SocialIcon>
              <SocialIcon href="#" target="_blank">
                <InstagramOutlined />
              </SocialIcon>
            </SocialIcons>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Thông tin</FooterTitle>
            <FooterLinks>
              <FooterLink href="/">trang chủ</FooterLink>
              <FooterLink href="/">Giới thiệu</FooterLink>
              <FooterLink href="/">Dịch vụ</FooterLink>
              <FooterLink href="/">Liên hệ</FooterLink>
            </FooterLinks>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Liên hệ chúng tôi</FooterTitle>
            <FooterText>
              Địa chỉ: 98/22A Năm Châu, Phường 11, Quận Tân Bình, Thành Phố Hồ Chí Minh
              <br />
              Email: lienhe@shoppuu.com
              <br />
              Phone: 0822.688.668
            </FooterText>
          </FooterSection>
        </FooterContent>
        <Divider style={{ borderColor: '#fff' }} />
        <FooterNote>
          <div>
            © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH & ĐT TP. Hà Nội cấp ngày 08/06/2016
          </div>
          <img src={logoSaleNoti} alt="logoSaleNoti" height={50} />
        </FooterNote>
      </FooterWrapper>
    </div>
  );
};

export default FooterComponent;

const FooterTextWrapper = styled.div`
  text-align: justify;
`;

const FooterWrapper = styled.div`
  background-color: var(--primary-color);
  color: #fff;
  padding: 40px 0;
  
`;

const FooterContent = styled(Row)`
  max-width: 1270px;
  margin: 0 auto;
`;

const FooterSection = styled(Col)`
  flex: 1;
  padding: 0 20px;
`;

const FooterLogo = styled.h1`
  font-size: 24px;
  color: #fff;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #fff;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.a`
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  display: block;
  margin-bottom: 6px;

  &:hover {
    color: rgb(26, 148, 255);
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  font-size: 20px;
  color: #fff;
  margin-right: 10px;

  &:hover {
    color: rgb(26, 148, 255);
  }
`;

const FooterNote = styled.p`
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
`;
