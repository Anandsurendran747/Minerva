import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}`;

const PageHero = styled.section`
  padding: 130px 24px 80px;
  background: linear-gradient(160deg, #e8f8ef 0%, #fef9f0 60%, #e8f4ff 100%);
  text-align: center;
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
  animation: ${fadeUp} 0.6s ease both;

  .accent { color: ${({ theme }) => theme.colors.primary}; }
`;

const PageSubtitle = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.75;
`;

const Section = styled.section`
  padding: ${({ slim }) => slim ? '60px 24px' : '90px 24px'};
  background: ${({ alt, theme }) => alt ? theme.colors.bgLight : 'white'};
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  &.reverse { direction: rtl; > * { direction: ltr; } }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 36px;
    &.reverse { direction: ltr; }
  }
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
  font-size: clamp(1.7rem, 3.5vw, 2.4rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 16px;
  line-height: 1.2;

  .accent { color: ${({ theme }) => theme.colors.primary}; }
  .gold {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.gold});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Paragraph = styled.p`
  font-size: 0.97rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: 18px;
`;

const VisualBox = styled.div`
  background: ${({ bg }) => bg || 'linear-gradient(135deg, #e8f8ef, #fef9f0)'};
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(26,107,60,0.1);
`;

const BigEmoji = styled.div`
  font-size: 5rem;
  margin-bottom: 16px;
`;

const VisualStat = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  font-weight: 800;
  color: ${({ color, theme }) => color || theme.colors.primary};
  margin-bottom: 4px;
  line-height: 1;
`;

const VisualLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: 500;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  @media(max-width: 700px) { grid-template-columns: 1fr; }
`;

const ValueCard = styled.div`
  background: ${({ bg }) => bg || 'white'};
  border-radius: 18px;
  padding: 28px 22px;
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};
  text-align: center;
  transition: all 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(26,107,60,0.1);
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }

  .icon { font-size: 2.2rem; margin-bottom: 12px; }
  .title {
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 8px;
  }
  .desc {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media(max-width: 700px) { grid-template-columns: 1fr; }
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: all 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(26,107,60,0.1);
  }
`;

const Avatar = styled.div`
  width: 72px;
  height: 72px;
  background: ${({ bg }) => bg || 'linear-gradient(135deg, #e8f8ef, #1a6b3c)'};
  border-radius: 50%;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
`;

const TeacherName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 4px;
`;

const TeacherSubject = styled.div`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: 10px;
`;

const TeacherExp = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const BtnPrimary = styled(Link)`
  padding: 13px 28px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  color: white;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.93rem;
  display: inline-flex; align-items: center; gap: 8px;
  box-shadow: 0 6px 20px rgba(26,107,60,0.3);
  transition: all 0.2s;
  margin-top: 8px;

  &:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(26,107,60,0.4); }
`;

const MilestoneList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Milestone = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;
`;

const MileYear = styled.div`
  min-width: 64px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 2px;
`;

const MileDot = styled.div`
  width: 14px; height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 4px;
  flex-shrink: 0;
  box-shadow: 0 0 0 3px rgba(26,107,60,0.15);
`;

const MileContent = styled.div`
  .title {
    font-size: 0.95rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 4px;
  }
  .desc {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.5;
  }
`;

export default function About() {
  return (
    <>
      <PageHero>
        <Breadcrumb><Link to="/">Home</Link><span>›</span>About Us</Breadcrumb>
        <PageTitle>About <span className="accent">Minerva</span></PageTitle>
        <PageSubtitle>15+ years of transforming young minds in Velliyoor with quality education, dedication, and proven results.</PageSubtitle>
      </PageHero>

      {/* Our Story */}
      <Section>
        <Inner>
          <TwoCol>
            <div>
              <SectionTag>Our Story</SectionTag>
              <SectionTitle>A <span className="accent">Legacy</span> of Learning in Velliyoor</SectionTitle>
              <Paragraph>
                Minerva Centre for Quality Education was founded with a simple yet powerful mission: to give every child in Velliyoor access to the best possible academic coaching — regardless of their background or learning pace.
              </Paragraph>
              <Paragraph>
                Over 15 years, we have grown from a small coaching class into the most trusted name in education across the Velliyoor region. Our students consistently top the SSLC board examinations, securing 100% pass rates year after year.
              </Paragraph>
              <Paragraph>
                Our approach blends deep subject expertise, small batch sizes, and a genuine care for every student's progress. We don't just prepare students for exams — we build confident, capable learners for life.
              </Paragraph>
              <BtnPrimary to="/contact">Get in Touch →</BtnPrimary>
            </div>
            <VisualBox>
              <BigEmoji>🏫</BigEmoji>
              <VisualStat>15+</VisualStat>
              <VisualLabel>Years of Excellence in Velliyoor</VisualLabel>
              <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {[
                  { val: '100%', lbl: 'SSLC Rate', color: '#1a6b3c' },
                  { val: 'A+', lbl: 'Top Grades', color: '#f5a623' },
                  { val: '1–10', lbl: 'All Classes', color: '#7c3aed' },
                  { val: '2', lbl: 'Mediums', color: '#0d9488' },
                ].map((s, i) => (
                  <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '16px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', fontWeight: 800, color: s.color }}>{s.val}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7c6d', fontWeight: 500 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </VisualBox>
          </TwoCol>
        </Inner>
      </Section>

      {/* Values */}
      <Section alt>
        <Inner>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <SectionTag>What We Stand For</SectionTag>
            <SectionTitle>Our <span className="accent">Core Values</span></SectionTitle>
          </div>
          <ValuesGrid>
            {[
              { icon: '🎯', title: 'Results-Driven', desc: '100% SSLC pass rate. We set high targets and work relentlessly with every student to achieve them.', bg: '#fef9f0' },
              { icon: '❤️', title: 'Genuine Care', desc: 'We treat every student like family. Their growth and confidence matter as much as their marks.', bg: '#fff0f0' },
              { icon: '📖', title: 'Deep Understanding', desc: 'No rote learning here. We build real understanding so students can tackle any question with confidence.', bg: '#f0fdf4' },
              { icon: '🤝', title: 'Parent Partnership', desc: 'We keep parents informed and involved — because a childs success is a team effort.', bg: '#f5f0ff' },
              { icon: '🌱', title: 'Holistic Growth', desc: 'Academic excellence and personal development go hand in hand at Minerva.', bg: '#f0f9ff' },
              { icon: '🏆', title: 'Proven Excellence', desc: 'Year after year, Minerva students outperform expectations. Our track record speaks for itself.', bg: '#fef9e7' },
            ].map((v, i) => (
              <ValueCard key={i} bg={v.bg}>
                <div className="icon">{v.icon}</div>
                <div className="title">{v.title}</div>
                <div className="desc">{v.desc}</div>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Inner>
      </Section>

      {/* Team */}
      <Section>
        <Inner>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <SectionTag>Our Teachers</SectionTag>
            <SectionTitle>Meet the <span className="accent">Expert Faculty</span></SectionTitle>
          </div>
          <TeamGrid>
            {[
              { name: 'Subject Expert', subject: 'Mathematics & Science', exp: '12+ years experience', icon: '📐', bg: 'linear-gradient(135deg, #e8f8ef, #1a6b3c30)' },
              { name: 'Language Teacher', subject: 'English & Malayalam', exp: '10+ years experience', icon: '✍️', bg: 'linear-gradient(135deg, #fef9f0, #f5a62330)' },
              { name: 'Social Science', subject: 'History & Geography', exp: '8+ years experience', icon: '🌍', bg: 'linear-gradient(135deg, #f5f0ff, #7c3aed30)' },
            ].map((t, i) => (
              <TeamCard key={i}>
                <Avatar bg={t.bg}>{t.icon}</Avatar>
                <TeacherName>{t.name}</TeacherName>
                <TeacherSubject>{t.subject}</TeacherSubject>
                <TeacherExp>{t.exp}</TeacherExp>
              </TeamCard>
            ))}
          </TeamGrid>
        </Inner>
      </Section>

      {/* Milestones */}
      <Section alt>
        <Inner>
          <TwoCol className="reverse">
            <div>
              <SectionTag>Our Journey</SectionTag>
              <SectionTitle>Milestones That <span className="gold">Define Us</span></SectionTitle>
              <MilestoneList>
                {[
                  { year: '2008', title: 'Minerva Founded', desc: 'Started as a small coaching class with a big dream in Velliyoor.' },
                  { year: '2012', title: 'First 100% Result', desc: 'All SSLC students passed with flying colours — a tradition began.' },
                  { year: '2018', title: 'Expanded to All Classes', desc: 'Began coaching from Class 1, serving more families across the area.' },
                  { year: '2022', title: 'Both Mediums Added', desc: 'Launched Malayalam medium batches alongside English medium.' },
                  { year: '2025', title: '100% Again!', desc: 'Another year, another 100% SSLC result — 15+ years of excellence.' },
                ].map((m, i) => (
                  <Milestone key={i}>
                    <MileYear>{m.year}</MileYear>
                    <MileDot />
                    <MileContent>
                      <div className="title">{m.title}</div>
                      <div className="desc">{m.desc}</div>
                    </MileContent>
                  </Milestone>
                ))}
              </MilestoneList>
            </div>
            <VisualBox bg="linear-gradient(135deg, #1a6b3c, #2d9b5a)">
              <BigEmoji>🎓</BigEmoji>
              <VisualStat style={{ color: '#ffc85a' }}>100%</VisualStat>
              <VisualLabel style={{ color: 'rgba(255,255,255,0.8)' }}>SSLC Pass Rate — Every Single Year</VisualLabel>
              <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  "Minerva is not just a tuition centre — it is where futures are built."
                </div>
              </div>
            </VisualBox>
          </TwoCol>
        </Inner>
      </Section>
    </>
  );
}