import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

/* ─── Animations ─── */
const fadeUp = keyframes`from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}`;
const float = keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}`;
const pulse = keyframes`0%,100%{transform:scale(1)}50%{transform:scale(1.06)}`;
const shimmer = keyframes`0%{background-position:-400px 0}100%{background-position:400px 0}`;
const confettiFall = keyframes`0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(80px) rotate(720deg);opacity:0}`;

/* ─── Hero ─── */
const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(160deg, #e8f8ef 0%, #fef9f0 40%, #e8f4ff 100%);
  display: flex;
  align-items: center;
  padding: 100px 24px 60px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(26,107,60,0.08) 0%, transparent 70%);
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -60px; left: -60px;
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(245,166,35,0.1) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  animation: ${fadeUp} 0.7s ease both;
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  color: white;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
  box-shadow: 0 4px 14px rgba(26,107,60,0.25);

  span { animation: ${pulse} 2s ease-in-out infinite; }
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 800;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 10px;

  .green { color: ${({ theme }) => theme.colors.primary}; }
  .gold {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.gold});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 18px;
`;

const HeroDesc = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 500px;

  @media(max-width:768px){ margin: 0 auto 36px; }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  @media(max-width:768px){ justify-content: center; }
`;

const BtnPrimary = styled(Link)`
  padding: 14px 30px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  color: white;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 6px 20px rgba(26,107,60,0.35);
  transition: all 0.2s;
  display: inline-flex; align-items: center; gap: 8px;

  &:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(26,107,60,0.45); }
`;

const BtnSecondary = styled(Link)`
  padding: 14px 30px;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  border: 2px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
  transition: all 0.2s;
  display: inline-flex; align-items: center; gap: 8px;

  &:hover { border-color: ${({ theme }) => theme.colors.primary}; transform: translateY(-2px); }
`;

const HeroVisual = styled.div`
  animation: ${fadeUp} 0.7s 0.2s ease both;
  position: relative;
`;

const HeroCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 36px;
  box-shadow: 0 20px 60px rgba(26,107,60,0.12);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 5px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.primaryLight});
  }
`;

const CentreTag = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

const BigPercent = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 5rem;
  font-weight: 800;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary} 0%, ${({ theme }) => theme.colors.gold} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  animation: ${pulse} 2.5s ease-in-out infinite;
`;

const PercentLabel = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const MiniStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const MiniStat = styled.div`
  background: ${({ color }) => color || '#f0faf4'};
  border-radius: 14px;
  padding: 14px;
  text-align: center;

  .val {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.textDark};
    line-height: 1;
  }
  .lbl {
    font-size: 0.72rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-top: 4px;
    font-weight: 500;
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  top: -18px; right: 20px;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(230,57,70,0.35);
  animation: ${float} 3s ease-in-out infinite;
`;

const Confetti = styled.div`
  position: absolute;
  top: 30px; left: 20px;
  font-size: 1.4rem;
  animation: ${confettiFall} 3s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || '0s'};
`;

/* ─── Stats Strip ─── */
const StatsStrip = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  padding: 40px 24px;
`;

const StatsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media(max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
`;

const StatItem = styled.div`
  text-align: center;
  color: white;
  padding: 20px;

  .number {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2.4rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.secondaryLight};
    line-height: 1;
    margin-bottom: 6px;
  }
  .label {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.8);
    font-weight: 500;
  }
`;

/* ─── Features Section ─── */
const FeaturesSection = styled.section`
  padding: 90px 24px;
  background: ${({ theme }) => theme.colors.bgWhite};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTag = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.bgLight};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  padding: 6px 18px;
  border-radius: 999px;
  margin-bottom: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 14px;
  line-height: 1.2;

  .accent { color: ${({ theme }) => theme.colors.primary}; }
`;

const SectionDesc = styled.p`
  font-size: 1.02rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.75;
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media(max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media(max-width: 560px) { grid-template-columns: 1fr; }
`;

const FeatureCard = styled.div`
  background: ${({ bg }) => bg || 'white'};
  border-radius: 20px;
  padding: 32px 28px;
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${({ accent }) => accent || 'linear-gradient(90deg, #1a6b3c, #2d9b5a)'};
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(26,107,60,0.14);
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const FeatureIcon = styled.div`
  width: 56px;
  height: 56px;
  background: ${({ bg }) => bg || 'rgba(26,107,60,0.1)'};
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin-bottom: 18px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 10px;
`;

const FeatureDesc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.65;
`;

/* ─── Results Banner ─── */
const ResultsBanner = styled.section`
  padding: 80px 24px;
  background: linear-gradient(160deg, #fef9f0 0%, #e8f8ef 100%);
`;

const ResultsInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media(max-width: 768px) { grid-template-columns: 1fr; }
`;

const ResultsContent = styled.div``;

const ResultsTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 18px;
  line-height: 1.25;

  .gold {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.gold});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const ResultsDesc = styled.p`
  font-size: 0.97rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.75;
  margin-bottom: 28px;
`;

const ResultsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
`;

const ResultsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.93rem;
  color: ${({ theme }) => theme.colors.textMid};
  font-weight: 500;

  .check {
    width: 24px; height: 24px;
    background: ${({ theme }) => theme.colors.bgLight};
    border: 1.5px solid ${({ theme }) => theme.colors.borderLight};
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.7rem;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ResultsVisual = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const ResultCard = styled.div`
  background: white;
  border-radius: 18px;
  padding: 24px 20px;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0,0,0,0.06);
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};

  .emoji { font-size: 2rem; margin-bottom: 8px; }
  .value {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.8rem;
    font-weight: 800;
    color: ${({ color, theme }) => color || theme.colors.primary};
    line-height: 1;
    margin-bottom: 4px;
  }
  .label {
    font-size: 0.78rem;
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: 500;
  }
`;

const BigResultCard = styled(ResultCard)`
  grid-column: span 2;
  padding: 28px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  border: none;
  box-shadow: 0 10px 30px rgba(26,107,60,0.3);

  .emoji { font-size: 2.5rem; }
  .value {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.secondaryLight};
  }
  .label { color: rgba(255,255,255,0.8); font-size: 0.9rem; }
`;

/* ─── Courses Preview ─── */
const CoursesSection = styled.section`
  padding: 90px 24px;
  background: white;
`;

const CoursesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;

  @media(max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media(max-width: 480px) { grid-template-columns: 1fr; }
`;

const CourseCard = styled.div`
  background: ${({ bg }) => bg || '#f0faf4'};
  border-radius: 20px;
  padding: 28px 22px;
  text-align: center;
  border: 1.5px solid transparent;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(26,107,60,0.12);
  }

  .icon { font-size: 2.2rem; margin-bottom: 12px; }
  .grade {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 6px;
  }
  .desc {
    font-size: 0.83rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.5;
  }
`;

/* ─── Batches Section ─── */
const BatchSection = styled.section`
  padding: 80px 24px;
  background: linear-gradient(160deg, ${({ theme }) => theme.colors.bgLight} 0%, #fef9f0 100%);
`;

const BatchGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media(max-width: 600px) { grid-template-columns: 1fr; }
`;

const BatchCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px 28px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.07);
  border-left: 5px solid ${({ accent }) => accent || '#1a6b3c'};
  transition: all 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(0,0,0,0.1);
  }

  .batch-tag {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${({ accentColor }) => accentColor || '#1a6b3c'};
    margin-bottom: 10px;
  }
  .batch-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 16px;
    line-height: 1.3;
  }
`;

const BatchInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textMid};
  margin-bottom: 10px;

  .icon { font-size: 1rem; }
`;

/* ─── CTA Section ─── */
const CTASection = styled.section`
  padding: 90px 24px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryDark} 0%, ${({ theme }) => theme.colors.primary} 60%, ${({ theme }) => theme.colors.primaryLight} 100%);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

const CTAInner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: white;
  margin-bottom: 18px;
  line-height: 1.2;
`;

const CTADesc = styled.p`
  font-size: 1.05rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 36px;
  line-height: 1.7;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTABtnWhite = styled(Link)`
  padding: 14px 32px;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  transition: all 0.2s;
  display: inline-flex; align-items: center; gap: 8px;

  &:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.25); }
`;

const CTABtnOutline = styled.a`
  padding: 14px 32px;
  border: 2px solid rgba(255,255,255,0.5);
  color: white;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.2s;
  display: inline-flex; align-items: center; gap: 8px;

  &:hover { background: rgba(255,255,255,0.1); border-color: white; }
`;

/* ─── Component ─── */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSection>
        <HeroInner>
          <HeroContent>
            <HeroBadge><span>⭐</span> Velliyoor's #1 Tuition Centre</HeroBadge>
            <HeroSubtitle>Minerva Centre for Quality Education</HeroSubtitle>
            <HeroTitle>
              <span className="green">Excellence</span> in Every<br />
              Grade, Every <span className="gold">Result</span>
            </HeroTitle>
            <HeroDesc>
              Trusted by families in Velliyoor for 15+ years. We deliver 100% SSLC results
              with personalised teaching in both English and Malayalam medium — from Class 1 to Class 10.
            </HeroDesc>
            <HeroButtons>
              <BtnPrimary to="/contact">📞 Enroll Now</BtnPrimary>
              <BtnSecondary to="/results">🏆 See Results</BtnSecondary>
            </HeroButtons>
          </HeroContent>

          <HeroVisual>
            <Confetti delay="0s">🎊</Confetti>
            <Confetti delay="1s" style={{ left: 'auto', right: '30px', top: '50px' }}>🎉</Confetti>
            <FloatingBadge>🏆 Best in Velliyoor!</FloatingBadge>
            <HeroCard>
              <CentreTag>SSLC Results 2025</CentreTag>
              <BigPercent>100%</BigPercent>
              <PercentLabel>Pass Rate — Year after Year</PercentLabel>
              <MiniStats>
                <MiniStat color="#f0faf4">
                  <div className="val">A+</div>
                  <div className="lbl">Max Scorers</div>
                </MiniStat>
                <MiniStat color="#fef9f0">
                  <div className="val">15+</div>
                  <div className="lbl">Years Trust</div>
                </MiniStat>
                <MiniStat color="#fff0f0">
                  <div className="val">Both</div>
                  <div className="lbl">Mediums</div>
                </MiniStat>
                <MiniStat color="#f0f4ff">
                  <div className="val">1–10</div>
                  <div className="lbl">All Classes</div>
                </MiniStat>
              </MiniStats>
            </HeroCard>
          </HeroVisual>
        </HeroInner>
      </HeroSection>

      {/* STATS STRIP */}
      <StatsStrip>
        <StatsGrid>
          {[
            { number: '100%', label: 'SSLC Pass Rate (Every Year)' },
            { number: '15+', label: 'Years of Excellence' },
            { number: 'A+', label: 'Top Scoring Students' },
            { number: '1–10', label: 'Classes Covered' },
          ].map((s, i) => (
            <StatItem key={i}>
              <div className="number">{s.number}</div>
              <div className="label">{s.label}</div>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsStrip>

      {/* FEATURES */}
      <FeaturesSection>
        <SectionHeader>
          <SectionTag>Why Minerva?</SectionTag>
          <SectionTitle>The <span className="accent">Smart Choice</span> for Your Child</SectionTitle>
          <SectionDesc>We combine proven teaching methods with dedicated individual attention to help every student reach their full potential.</SectionDesc>
        </SectionHeader>
        <FeaturesGrid>
          {[
            { icon: '🏆', title: '100% SSLC Results', desc: 'Consistent 100% pass rate every year. Our students top the board with A+ grades in all subjects.', bg: 'rgba(245,166,35,0.06)', accent: 'linear-gradient(90deg, #f5a623, #ffc85a)', iconBg: 'rgba(245,166,35,0.12)' },
            { icon: '👩‍🏫', title: 'Expert Teachers', desc: 'Experienced, subject-expert educators who go beyond textbooks to build real understanding and confidence.', bg: 'rgba(26,107,60,0.04)', accent: 'linear-gradient(90deg, #1a6b3c, #2d9b5a)', iconBg: 'rgba(26,107,60,0.1)' },
            { icon: '🎯', title: 'Personalised Attention', desc: 'Small batch sizes ensure every student gets the individual focus they need to excel.', bg: 'rgba(124,58,237,0.04)', accent: 'linear-gradient(90deg, #7c3aed, #a855f7)', iconBg: 'rgba(124,58,237,0.1)' },
            { icon: '📚', title: 'All Subjects', desc: 'Comprehensive coverage of all SSLC subjects — Science, Maths, Social, English, Malayalam and more.', bg: 'rgba(13,148,136,0.04)', accent: 'linear-gradient(90deg, #0d9488, #14b8a6)', iconBg: 'rgba(13,148,136,0.1)' },
            { icon: '🌐', title: 'Both Mediums', desc: 'Classes available in both English and Malayalam medium for Class 8, 9, and 10.', bg: 'rgba(230,57,70,0.04)', accent: 'linear-gradient(90deg, #e63946, #ff6b75)', iconBg: 'rgba(230,57,70,0.1)' },
            { icon: '📅', title: 'Flexible Batches', desc: 'Morning, afternoon, and evening batches designed to suit every student\'s school schedule.', bg: 'rgba(245,197,24,0.04)', accent: 'linear-gradient(90deg, #f5c518, #fde047)', iconBg: 'rgba(245,197,24,0.12)' },
          ].map((f, i) => (
            <FeatureCard key={i} bg={f.bg} accent={f.accent}>
              <FeatureIcon bg={f.iconBg}>{f.icon}</FeatureIcon>
              <FeatureTitle>{f.title}</FeatureTitle>
              <FeatureDesc>{f.desc}</FeatureDesc>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      {/* RESULTS BANNER */}
      <ResultsBanner>
        <ResultsInner>
          <ResultsContent>
            <SectionTag style={{ display: 'inline-block', marginBottom: '14px' }}>Our Track Record</SectionTag>
            <ResultsTitle>
              This Year's SSLC Results —<br />
              <span className="gold">We Proved It Again!</span>
            </ResultsTitle>
            <ResultsDesc>
              Year after year, Minerva students walk into exams with confidence and come out with outstanding results.
              Our teaching methodology focuses on deep understanding, not rote learning.
            </ResultsDesc>
            <ResultsList>
              {[
                '100% of students passed SSLC 2025',
                'Highest number of A+ grades in Velliyoor',
                'Students excel in both English & Malayalam medium',
                'Consistent improvement track record for 15+ years',
                'Strong focus on Science and Mathematics',
              ].map((item, i) => (
                <ResultsItem key={i}>
                  <div className="check">✓</div>
                  {item}
                </ResultsItem>
              ))}
            </ResultsList>
            <BtnPrimary to="/results" style={{ display: 'inline-flex' }}>View Detailed Results →</BtnPrimary>
          </ResultsContent>
          <ResultsVisual>
            <BigResultCard>
              <div className="emoji">🏆</div>
              <div className="value">100%</div>
              <div className="label">SSLC Pass Rate 2025</div>
            </BigResultCard>
            <ResultCard>
              <div className="emoji">⭐</div>
              <div className="value" style={{ color: '#f5a623' }}>A+</div>
              <div className="label">Top Scorers</div>
            </ResultCard>
            <ResultCard>
              <div className="emoji">📅</div>
              <div className="value" style={{ color: '#7c3aed' }}>15+</div>
              <div className="label">Years Strong</div>
            </ResultCard>
          </ResultsVisual>
        </ResultsInner>
      </ResultsBanner>

      {/* COURSES PREVIEW */}
      <CoursesSection>
        <SectionHeader>
          <SectionTag>Our Courses</SectionTag>
          <SectionTitle>Classes <span className="accent">1 to 10</span> — We've Got You Covered</SectionTitle>
          <SectionDesc>From foundational learning to SSLC board exam preparation — expert tuition at every level.</SectionDesc>
        </SectionHeader>
        <CoursesGrid>
          {[
            { icon: '🌱', grade: 'Class 1 – 5', desc: 'Strong foundation in core subjects', bg: '#f0fdf4' },
            { icon: '📖', grade: 'Class 6 – 8', desc: 'Building skills and subject depth', bg: '#fef9f0' },
            { icon: '🎯', grade: 'Class 9', desc: 'SSLC preparation begins here', bg: '#f5f0ff' },
            { icon: '🏆', grade: 'Class 10', desc: 'Full SSLC board exam coaching', bg: '#fff0f0' },
          ].map((c, i) => (
            <CourseCard key={i} bg={c.bg}>
              <div className="icon">{c.icon}</div>
              <div className="grade">{c.grade}</div>
              <div className="desc">{c.desc}</div>
            </CourseCard>
          ))}
        </CoursesGrid>
      </CoursesSection>

      {/* BATCHES */}
      <BatchSection>
        <SectionHeader>
          <SectionTag>2026–2027 Admissions Open</SectionTag>
          <SectionTitle>New Batch <span className="accent">Starting Soon</span></SectionTitle>
          <SectionDesc>Limited seats available — secure your child's spot now!</SectionDesc>
        </SectionHeader>
        <BatchGrid>
          <BatchCard accent="#1a6b3c" accentColor="#1a6b3c">
            <div className="batch-tag">Class 10</div>
            <div className="batch-title">SSLC English & Malayalam Medium</div>
            <BatchInfo><span className="icon">📅</span> Starting April 6, 2026</BatchInfo>
            <BatchInfo><span className="icon">📚</span> All Subjects Covered</BatchInfo>
            <BatchInfo><span className="icon">🌐</span> English + Malayalam Medium</BatchInfo>
            <BtnPrimary to="/contact" style={{ display: 'inline-flex', marginTop: '16px', padding: '10px 22px', fontSize: '0.88rem' }}>
              Enroll Now →
            </BtnPrimary>
          </BatchCard>
          <BatchCard accent="#f5a623" accentColor="#c47d0a">
            <div className="batch-tag">Class 8 & 9</div>
            <div className="batch-title">Pre-SSLC Foundation Batch</div>
            <BatchInfo><span className="icon">📅</span> Starting April 20, 2026</BatchInfo>
            <BatchInfo><span className="icon">📚</span> Maths, Science, English & More</BatchInfo>
            <BatchInfo><span className="icon">👩‍🏫</span> Expert Subject Teachers</BatchInfo>
            <BtnSecondary to="/contact" style={{ display: 'inline-flex', marginTop: '16px', padding: '10px 22px', fontSize: '0.88rem' }}>
              Enroll Now →
            </BtnSecondary>
          </BatchCard>
        </BatchGrid>
      </BatchSection>

      {/* CTA */}
      <CTASection>
        <CTAInner>
          <CTATitle>Ready to Unlock Your Child's Potential?</CTATitle>
          <CTADesc>
            Join hundreds of successful students at Minerva. Seats are filling fast for the 2026–2027 batches.
            Call us today or visit our centre in Velliyoor.
          </CTADesc>
          <CTAButtons>
            <CTABtnWhite to="/contact">📋 Enquire Now</CTABtnWhite>
            <CTABtnOutline href="tel:9947152332">📞 Call 9947152332</CTABtnOutline>
          </CTAButtons>
        </CTAInner>
      </CTASection>
    </>
  );
}