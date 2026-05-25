import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ scrolled }) =>
    scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)'};
  backdrop-filter: blur(12px);
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 4px 30px rgba(26,107,60,0.12)' : '0 2px 10px rgba(0,0,0,0.06)'};
  transition: all 0.3s ease;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderLight};
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoIcon = styled.div`
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  box-shadow: 0 4px 14px rgba(26,107,60,0.3);
`;

const LogoText = styled.div`
  .name {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.35rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1.1;
    letter-spacing: -0.5px;
  }
  .tagline {
    font-size: 0.65rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: 500;
  font-size: 0.9rem;
  color: ${({ active, theme }) => active ? theme.colors.bgWhite : theme.colors.textMid};
  background: ${({ active, theme }) => active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryLight})` : 'transparent'};
  transition: all 0.2s ease;
  box-shadow: ${({ active }) => active ? '0 4px 14px rgba(26,107,60,0.3)' : 'none'};

  &:hover {
    background: ${({ active, theme }) => active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryLight})` : theme.colors.bgLight};
    color: ${({ active, theme }) => active ? theme.colors.bgWhite : theme.colors.primary};
  }
`;

const CTAButton = styled(Link)`
  padding: 10px 22px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.secondaryLight});
  color: ${({ theme }) => theme.colors.textDark};
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: 700;
  font-size: 0.88rem;
  box-shadow: 0 4px 14px rgba(245,166,35,0.35);
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245,166,35,0.5);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ open }) => open ? 'block' : 'none'};
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: white;
    border-bottom: 2px solid ${({ theme }) => theme.colors.borderLight};
    padding: 16px 24px 24px;
    animation: fadeInUp 0.2s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 500;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.textMid};
  background: ${({ active, theme }) => active ? theme.colors.bgLight : 'transparent'};
  margin-bottom: 4px;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.bgLight};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileCTA = styled(Link)`
  display: block;
  margin-top: 12px;
  padding: 13px;
  text-align: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  color: white;
  border-radius: 12px;
  font-weight: 700;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 48px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(26,107,60,0.18);
  border: 2px solid rgba(255,255,255,0.6);
//   background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  padding: 4px;
  display: block;
`;

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Results', path: '/results' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <NavWrapper scrolled={scrolled ? 1 : 0}>
      <NavInner>
        <Logo to="/">
          <LogoImage src="/Minerva1.png" alt="Minerva logo" />
          <LogoText>
            <div className="name">Minerva College</div>
            <div className="tagline">Centre for Quality Education</div>
          </LogoText>
        </Logo>

        <NavLinks>
          {navItems.map(({ label, path }) => (
            <NavItem key={path}>
              <NavLink to={path} active={location.pathname === path ? 1 : 0}>
                {label}
              </NavLink>
            </NavItem>
          ))}
        </NavLinks>

        <CTAButton to="/contact">📞 Enroll Now</CTAButton>

        <HamburgerBtn onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </HamburgerBtn>
      </NavInner>

      <MobileMenu open={menuOpen}>
        {navItems.map(({ label, path }) => (
          <MobileNavLink key={path} to={path} active={location.pathname === path ? 1 : 0}>
            {label}
          </MobileNavLink>
        ))}
        <MobileCTA to="/contact">📞 Enroll Now</MobileCTA>
      </MobileMenu>
    </NavWrapper>
  );
}