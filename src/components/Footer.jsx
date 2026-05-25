import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryDark} 0%, ${({ theme }) => theme.colors.primary} 100%);
  color: white;
  padding: 64px 24px 32px;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  margin-bottom: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const FooterBrand = styled.div``;

const BrandLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const BrandIcon = styled.div`
  width: 48px;
  height: 48px;
  background: rgba(255,255,255,0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border: 1px solid rgba(255,255,255,0.2);
`;

const BrandName = styled.div`
  .name {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.4rem;
    font-weight: 800;
    color: white;
  }
  .tagline {
    font-size: 0.65rem;
    color: rgba(255,255,255,0.6);
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;

const BrandDesc = styled.p`
  font-size: 0.88rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  margin-bottom: 20px;
`;

const PhoneLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondaryLight};
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover { opacity: 0.8; }

  span { font-size: 1rem; }
`;

const FooterSection = styled.div``;

const SectionTitle = styled.h4`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.5);
  margin-bottom: 20px;
  font-weight: 600;
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled(Link)`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.75);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;

  &:before {
    content: '→';
    font-size: 0.75rem;
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover {
    color: white;
    padding-left: 4px;
    &:before { opacity: 1; }
  }
`;

const InfoItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
  align-items: flex-start;

  .icon {
    font-size: 1rem;
    margin-top: 2px;
    flex-shrink: 0;
  }

  .text {
    font-size: 0.87rem;
    color: rgba(255,255,255,0.75);
    line-height: 1.5;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const Badge = styled.div`
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: ${({ theme }) => theme.radii.full};
  padding: 6px 14px;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.85);
  font-weight: 500;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255,255,255,0.12);
  margin-bottom: 28px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  p {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.5);
  }

  .highlight {
    color: ${({ theme }) => theme.colors.secondaryLight};
    font-weight: 600;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterGrid>
          <FooterBrand>
            <BrandLogo>
              <BrandIcon>✏️</BrandIcon>
              <BrandName>
                <div className="name">Minerva</div>
                <div className="tagline">Centre for Quality Education</div>
              </BrandName>
            </BrandLogo>
            <BrandDesc>
              Velliyoor's most trusted tuition centre with 15+ years of excellence.
              Dedicated to helping students achieve 100% results in SSLC and beyond.
            </BrandDesc>
            <PhoneLinks>
              <PhoneLink href="tel:9947152332"><span>📞</span> 9947152332</PhoneLink>
              <PhoneLink href="tel:9539384964"><span>📞</span> 9539384964</PhoneLink>
              <PhoneLink href="tel:9947141765"><span>📞</span> 9947141765</PhoneLink>
            </PhoneLinks>
          </FooterBrand>

          <FooterSection>
            <SectionTitle>Quick Links</SectionTitle>
            <FooterLinks>
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/about">About Us</FooterLink></li>
              <li><FooterLink to="/courses">Courses</FooterLink></li>
              <li><FooterLink to="/results">Results</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Courses</SectionTitle>
            <FooterLinks>
              <li><FooterLink to="/courses">Classes 1–5</FooterLink></li>
              <li><FooterLink to="/courses">Classes 6–8</FooterLink></li>
              <li><FooterLink to="/courses">Class 9 (SSLC Prep)</FooterLink></li>
              <li><FooterLink to="/courses">Class 10 (SSLC)</FooterLink></li>
              <li><FooterLink to="/courses">English Medium</FooterLink></li>
              <li><FooterLink to="/courses">Malayalam Medium</FooterLink></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Visit Us</SectionTitle>
            <InfoItem>
              <span className="icon">📍</span>
              <span className="text">227 - Govt. L.P. School,<br />Cheruvaalur, Thecku Vasham,<br />Velliyoor, Kerala</span>
            </InfoItem>
            <InfoItem>
              <span className="icon">🕐</span>
              <span className="text">Mon – Sat: 8:00 AM – 8:00 PM<br />Sunday: 9:00 AM – 1:00 PM</span>
            </InfoItem>
            <InfoItem>
              <span className="icon">📅</span>
              <span className="text">New batch starting April 2026<br />(English & Malayalam Medium)</span>
            </InfoItem>
            <BadgeRow>
              <Badge>✅ 100% SSLC</Badge>
              <Badge>⭐ A+ Results</Badge>
              <Badge>15+ Years</Badge>
            </BadgeRow>
          </FooterSection>
        </FooterGrid>

        <Divider />

        <FooterBottom>
          <p>© 2026 <span className="highlight">Minerva Centre for Quality Education</span>. All rights reserved.</p>
          <p>Velliyoor's <span className="highlight">#1</span> Tuition Centre</p>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  );
}