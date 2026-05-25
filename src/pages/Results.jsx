import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%{transform:scale(0.8);opacity:0}
  60%{transform:scale(1.08)}
  100%{transform:scale(1);opacity:1}
`;

const PageHero = styled.section`
  padding: 130px 24px 80px;
  background: linear-gradient(160deg, #fef9f0 0%, #e8f8ef 50%, #fef9f0 100%);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '🎊';
    position: absolute;
    font-size: 6rem;
    opacity: 0.07;
    top: 40px; left: 5%;
  }
  &::after {
    content: '🏆';
    position: absolute;
    font-size: 6rem;
    opacity: 0.07;
    top: 40px; right: 5%;
  }
`;

const Breadcrumb = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 18px;
  a { color: ${({ theme }) => theme.colors.primary}; font-weight: 600; }
  span { margin: 0 8px; }
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 16px;
  .gold {
    background: linear-gradient(135deg, #f5a623, #f5c518);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.75;
`;

const Section = styled.section`
  padding: 80px 24px;
  background: ${({ alt, theme }) => alt ? theme.colors.bgLight : 'white'};
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
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
  .gold {
    background: linear-gradient(135deg, #f5a623, #f5c518);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 52px;
`;

/* Big Result Hero */
const ResultHeroBox = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryDark}, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  border-radius: 28px;
  padding: 56px 40px;
  text-align: center;
  color: white;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(26,107,60,0.25);

  &::before {
    content: '';
    position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z'/%3E%3C/g%3E%3C/svg%3E");
  }
`;

const ResultMainLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  margin-bottom: 16px;
`;

const ResultBigNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(5rem, 15vw, 9rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.secondaryLight};
  line-height: 1;
  animation: ${bounce} 0.8s ease both;
  text-shadow: 0 8px 30px rgba(0,0,0,0.2);
`;

const ResultCaption = styled.div`
  font-size: 1.1rem;
  color: rgba(255,255,255,0.85);
  font-weight: 500;
  margin-top: 12px;
  margin-bottom: 32px;
`;

const ResultStatRow = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`;

const ResultStatPill = styled.div`
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  padding: 10px 22px;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  backdrop-filter: blur(6px);
`;

/* Year Cards */
const YearsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  @media(max-width: 800px) { grid-template-columns: repeat(2, 1fr); }
  @media(max-width: 480px) { grid-template-columns: 1fr; }
`;

const YearCard = styled.div`
  background: ${({ highlight }) => highlight ? 'linear-gradient(135deg, #1a6b3c, #2d9b5a)' : 'white'};
  border-radius: 18px;
  padding: 28px 20px;
  text-align: center;
  border: 1.5px solid ${({ highlight, theme }) => highlight ? 'transparent' : theme.colors.borderLight};
  box-shadow: ${({ highlight }) => highlight ? '0 10px 30px rgba(26,107,60,0.25)' : '0 4px 14px rgba(0,0,0,0.05)'};
  transition: all 0.25s;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ highlight }) => highlight ? '0 16px 40px rgba(26,107,60,0.35)' : '0 10px 30px rgba(0,0,0,0.1)'};
  }
`;

const YearTag = styled.div`
  position: absolute;
  top: -10px; right: 16px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
`;

const YearLabel = styled.div`
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ highlight }) => highlight ? 'rgba(255,255,255,0.6)' : '#6b7c6d'};
  margin-bottom: 8px;
`;

const YearPercent = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ highlight, theme }) => highlight ? theme.colors.secondaryLight : theme.colors.primary};
  line-height: 1;
  margin-bottom: 4px;
`;

const YearNote = styled.div`
  font-size: 0.75rem;
  color: ${({ highlight }) => highlight ? 'rgba(255,255,255,0.7)' : '#6b7c6d'};
`;

/* Achievements */
const AchieveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  @media(max-width: 700px) { grid-template-columns: 1fr; }
`;

const AchieveCard = styled.div`
  background: ${({ bg }) => bg || 'white'};
  border-radius: 18px;
  padding: 30px 24px;
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};
  transition: all 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(26,107,60,0.1);
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }

  .icon { font-size: 2.5rem; margin-bottom: 12px; }
  .title {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 8px;
  }
  .desc {
    font-size: 0.87rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.65;
  }
`;

/* Testimonials */
const TestiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  @media(max-width: 800px) { grid-template-columns: 1fr; }
`;

const TestiCard = styled.div`
  background: white;
  border-radius: 18px;
  padding: 28px 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: 16px; left: 20px;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.bgLight};
    font-family: Georgia, serif;
    line-height: 1;
  }
`;

const TestiText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMid};
  line-height: 1.7;
  margin-bottom: 18px;
  padding-top: 20px;
  font-style: italic;
`;

const TestiAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TestiAvatar = styled.div`
  width: 42px; height: 42px;
  background: ${({ bg }) => bg};
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.3rem;
`;

const TestiName = styled.div`
  .name { font-size: 0.88rem; font-weight: 700; color: ${({ theme }) => theme.colors.textDark}; }
  .role { font-size: 0.75rem; color: ${({ theme }) => theme.colors.primary}; font-weight: 600; }
`;

const Stars = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.85rem;
  margin-bottom: 4px;
`;

const EnrollCTA = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryDark}, ${({ theme }) => theme.colors.primary});
  border-radius: 24px;
  padding: 48px 40px;
  text-align: center;
  color: white;
  margin-top: 60px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
  p { color: rgba(255,255,255,0.8); margin-bottom: 28px; line-height: 1.7; }
`;

const BtnWhite = styled(Link)`
  padding: 13px 30px;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  display: inline-flex; align-items: center; gap: 8px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  transition: all 0.2s;
  &:hover { transform: translateY(-2px); }
`;

export default function Results() {
  return (
    <>
      <PageHero>
        <Breadcrumb><Link to="/">Home</Link><span>›</span>Results</Breadcrumb>
        <PageTitle>Our <span className="gold">Brilliant Results</span></PageTitle>
        <PageSubtitle>Year after year, Minerva students prove that with the right guidance, 100% success is not just a goal — it's a guarantee.</PageSubtitle>
      </PageHero>

      <Section>
        <Inner>
          {/* Big Result Hero */}
          <ResultHeroBox>
            <ResultMainLabel>🏆 SSLC Results — Velliyoor's Best</ResultMainLabel>
            <ResultBigNumber>100%</ResultBigNumber>
            <ResultCaption>Pass Rate — Every Single Year for 15+ Years</ResultCaption>
            <ResultStatRow>
              <ResultStatPill>⭐ Highest A+ Count in Area</ResultStatPill>
              <ResultStatPill>🎓 100% Year After Year</ResultStatPill>
              <ResultStatPill>🌐 English & Malayalam Medium</ResultStatPill>
              <ResultStatPill>📅 15+ Years Strong</ResultStatPill>
            </ResultStatRow>
          </ResultHeroBox>

          {/* Year-by-Year */}
          <SectionHeader>
            <SectionTag>Track Record</SectionTag>
            <SectionTitle>Year-by-Year <span className="accent">SSLC Results</span></SectionTitle>
          </SectionHeader>
          <YearsGrid>
            {[
              { year: '2025', percent: '100%', note: 'Highest A+ count ever', highlight: true, tag: 'Latest' },
              { year: '2024', percent: '100%', note: 'All students passed', highlight: false },
              { year: '2023', percent: '100%', note: 'Outstanding performance', highlight: false },
              { year: '2022', percent: '100%', note: 'Both mediums excellent', highlight: false },
              { year: '2021', percent: '100%', note: 'Pandemic year triumph', highlight: false },
              { year: '2020', percent: '100%', note: 'Consistent excellence', highlight: false },
              { year: '2019', percent: '100%', note: 'A+ tally grew', highlight: false },
              { year: '2018', percent: '100%', note: 'Decade of success', highlight: false },
            ].map((y, i) => (
              <YearCard key={i} highlight={y.highlight ? 1 : 0}>
                {y.tag && <YearTag>{y.tag}</YearTag>}
                <YearLabel highlight={y.highlight}>{y.year}</YearLabel>
                <YearPercent highlight={y.highlight}>{y.percent}</YearPercent>
                <YearNote highlight={y.highlight}>{y.note}</YearNote>
              </YearCard>
            ))}
          </YearsGrid>
        </Inner>
      </Section>

      {/* Achievements */}
      <Section alt>
        <Inner>
          <SectionHeader>
            <SectionTag>What We've Achieved</SectionTag>
            <SectionTitle>Beyond the <span className="gold">Numbers</span></SectionTitle>
          </SectionHeader>
          <AchieveGrid>
            {[
              { icon: '🥇', title: 'Top Scores in Velliyoor', desc: 'Our students consistently secure the highest SSLC scores in the Velliyoor area, year after year.', bg: '#fef9f0' },
              { icon: '📈', title: 'Consistent Improvement', desc: 'Each year, the number of A+ grade achievers grows. Our teaching methods keep getting better.', bg: '#f0faf4' },
              { icon: '🌐', title: 'Both Mediums Excelling', desc: 'Whether English or Malayalam medium, Minerva students perform equally well across all subjects.', bg: '#f5f0ff' },
              { icon: '🎓', title: '15+ Years Unbeaten', desc: 'No other tuition centre in Velliyoor can match our unbroken streak of 100% SSLC pass rates.', bg: '#fff0f0' },
              { icon: '💯', title: 'A+ in Every Subject', desc: 'We celebrate not just passes but top-scorers. Multiple students achieve A+ in all subjects every year.', bg: '#f0f9ff' },
              { icon: '👨‍👩‍👧', title: 'Families Trust Us', desc: 'Parents who studied here now send their own children to Minerva — the ultimate proof of trust.', bg: '#fef9e7' },
            ].map((a, i) => (
              <AchieveCard key={i} bg={a.bg}>
                <div className="icon">{a.icon}</div>
                <div className="title">{a.title}</div>
                <div className="desc">{a.desc}</div>
              </AchieveCard>
            ))}
          </AchieveGrid>
        </Inner>
      </Section>

      {/* Testimonials */}
      <Section>
        <Inner>
          <SectionHeader>
            <SectionTag>Parent & Student Reviews</SectionTag>
            <SectionTitle>What They <span className="accent">Say About Us</span></SectionTitle>
          </SectionHeader>
          <TestiGrid>
            {[
              {
                text: 'My daughter scored A+ in all subjects after joining Minerva. The teachers are incredibly dedicated and the teaching style makes everything easy to understand.',
                name: 'Priya\'s Mother', role: 'Parent of SSLC 2025 student',
                icon: '👩', bg: 'linear-gradient(135deg, #e8f8ef, #1a6b3c30)',
              },
              {
                text: 'I was struggling in Maths and Science. After joining Minerva in Class 9, my grades improved dramatically and I scored A+ in both for SSLC.',
                name: 'Arjun R.', role: 'SSLC 2025 Student',
                icon: '👦', bg: 'linear-gradient(135deg, #fef9f0, #f5a62330)',
              },
              {
                text: 'The best decision we made was enrolling our son in Minerva. The teachers track each student\'s progress personally. We saw improvement from day one.',
                name: 'Suresh\'s Father', role: 'Parent of Class 10 Student',
                icon: '👨', bg: 'linear-gradient(135deg, #f5f0ff, #7c3aed30)',
              },
            ].map((t, i) => (
              <TestiCard key={i}>
                <Stars>★★★★★</Stars>
                <TestiText>{t.text}</TestiText>
                <TestiAuthor>
                  <TestiAvatar bg={t.bg}>{t.icon}</TestiAvatar>
                  <TestiName>
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </TestiName>
                </TestiAuthor>
              </TestiCard>
            ))}
          </TestiGrid>

          <EnrollCTA>
            <h3>Be Part of Our 100% Success Story</h3>
            <p>Join Minerva for 2026–2027 and give your child the best chance at SSLC excellence. Limited seats available.</p>
            <BtnWhite to="/contact">📋 Enroll Your Child Today</BtnWhite>
          </EnrollCTA>
        </Inner>
      </Section>
    </>
  );
}