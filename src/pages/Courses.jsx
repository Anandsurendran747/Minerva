import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const SectionDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.75;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 52px;
`;

/* Filter Tabs */
const FilterTabs = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
`;

const FilterTab = styled.button`
  padding: 9px 22px;
  border-radius: 999px;
  border: 1.5px solid ${({ active, theme }) => active ? theme.colors.primary : theme.colors.borderLight};
  background: ${({ active, theme }) => active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryLight})` : 'white'};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.textMid};
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ active, theme }) => active ? 'white' : theme.colors.primary};
  }
`;

/* Course Cards */
const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media(max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media(max-width: 560px) { grid-template-columns: 1fr; }
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: all 0.25s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 40px rgba(26,107,60,0.12);
    border-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const CardHeader = styled.div`
  background: ${({ bg }) => bg || 'linear-gradient(135deg, #e8f8ef, #f0faf4)'};
  padding: 28px;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: ${({ accent }) => accent || 'linear-gradient(90deg, #1a6b3c, #2d9b5a)'};
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const CardGrade = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textDark};
`;

const CardBody = styled.div`
  padding: 24px;
`;

const CardDesc = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.65;
  margin-bottom: 18px;
`;

const SubjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

const SubjectItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMid};
  font-weight: 500;

  .dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

const MediumTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const MediumTag = styled.span`
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ color }) => color || '#e8f8ef'};
  color: ${({ textColor }) => textColor || '#1a6b3c'};
  border: 1px solid ${({ borderColor }) => borderColor || '#d4edda'};
`;

/* Batches Grid */
const BatchTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media(max-width: 600px) { grid-template-columns: 1fr; }
`;

const BatchCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 32px;
  border-left: 5px solid ${({ accent }) => accent || '#1a6b3c'};
  box-shadow: 0 6px 24px rgba(0,0,0,0.06);
  transition: all 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(0,0,0,0.1);
  }
`;

const BatchTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 6px;
`;

const BatchSubtitle = styled.div`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 18px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textMid};
  margin-bottom: 10px;
  .icon { font-size: 1rem; }
`;

const EnrollBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  color: white;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 700;
  margin-top: 16px;
  box-shadow: 0 4px 14px rgba(26,107,60,0.25);
  transition: all 0.2s;

  &:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(26,107,60,0.35); }
`;

/* Subjects */
const SubjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  @media(max-width: 800px) { grid-template-columns: repeat(2, 1fr); }
`;

const SubjectCard = styled.div`
  background: ${({ bg }) => bg || '#f0faf4'};
  border-radius: 16px;
  padding: 24px 18px;
  text-align: center;
  border: 1.5px solid transparent;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(26,107,60,0.1);
  }

  .icon { font-size: 2rem; margin-bottom: 10px; }
  .name { font-size: 0.9rem; font-weight: 700; color: ${({ theme }) => theme.colors.textDark}; }
  .detail { font-size: 0.78rem; color: ${({ theme }) => theme.colors.textLight}; margin-top: 4px; }
`;

/* CTA Banner */
const CTABanner = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  border-radius: 24px;
  padding: 48px 40px;
  text-align: center;
  color: white;
  margin-top: 60px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 12px;
  }
  p {
    font-size: 0.97rem;
    color: rgba(255,255,255,0.82);
    margin-bottom: 28px;
    line-height: 1.7;
  }
`;

const CTABtnWhite = styled(Link)`
  padding: 13px 30px;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  display: inline-flex; align-items: center; gap: 8px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.18);
  transition: all 0.2s;
  &:hover { transform: translateY(-2px); }
`;

const allCourses = [
  {
    icon: '🌱', grade: 'Class 1 – 5', category: 'primary',
    desc: 'Building a strong academic foundation in core subjects with engaging, activity-based learning.',
    subjects: ['Mathematics', 'English Language', 'Malayalam', 'Environmental Science'],
    mediums: ['English', 'Malayalam'],
    bg: 'linear-gradient(135deg, #e8f8ef, #f0fdf4)',
    accent: 'linear-gradient(90deg, #1a6b3c, #2d9b5a)',
  },
  {
    icon: '📖', grade: 'Class 6 – 8', category: 'middle',
    desc: 'Deepening subject knowledge with structured coaching to prepare for the SSLC years ahead.',
    subjects: ['Mathematics', 'Science', 'Social Science', 'English', 'Malayalam'],
    mediums: ['English', 'Malayalam'],
    bg: 'linear-gradient(135deg, #fef9f0, #fff7e6)',
    accent: 'linear-gradient(90deg, #f5a623, #ffc85a)',
  },
  {
    icon: '🎯', grade: 'Class 9', category: 'sslc',
    desc: 'Focused SSLC foundation year. We build conceptual clarity across all subjects for a confident Class 10.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social', 'English', 'Malayalam'],
    mediums: ['English', 'Malayalam'],
    bg: 'linear-gradient(135deg, #f5f0ff, #ede9fe)',
    accent: 'linear-gradient(90deg, #7c3aed, #a855f7)',
  },
  {
    icon: '🏆', grade: 'Class 10 (SSLC)', category: 'sslc',
    desc: 'Complete SSLC board exam coaching. Our students achieve 100% pass rates with outstanding A+ grades.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Science', 'English', 'IT'],
    mediums: ['English', 'Malayalam'],
    bg: 'linear-gradient(135deg, #fff0f0, #ffe4e6)',
    accent: 'linear-gradient(90deg, #e63946, #ff6b75)',
  },
];

const FILTERS = ['all', 'primary', 'middle', 'sslc'];

export default function Courses() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? allCourses : allCourses.filter(c => c.category === filter);

  return (
    <>
      <PageHero>
        <Breadcrumb><Link to="/">Home</Link><span>›</span>Courses</Breadcrumb>
        <PageTitle>Our <span className="accent">Courses</span></PageTitle>
        <PageSubtitle>Comprehensive tuition for Classes 1–10 in English and Malayalam medium, covering all SSLC subjects.</PageSubtitle>
      </PageHero>

      {/* Courses */}
      <Section>
        <Inner>
          <SectionHeader>
            <SectionTag>All Programmes</SectionTag>
            <SectionTitle>Find the <span className="accent">Right Course</span></SectionTitle>
          </SectionHeader>
          <FilterTabs>
            {FILTERS.map(f => (
              <FilterTab key={f} active={filter === f ? 1 : 0} onClick={() => setFilter(f)}>
                {f === 'all' ? 'All Classes' : f === 'primary' ? 'Primary (1–5)' : f === 'middle' ? 'Middle (6–8)' : 'SSLC (9–10)'}
              </FilterTab>
            ))}
          </FilterTabs>
          <CoursesGrid>
            {filtered.map((c, i) => (
              <CourseCard key={i}>
                <CardHeader bg={c.bg} accent={c.accent}>
                  <CardIcon>{c.icon}</CardIcon>
                  <CardGrade>{c.grade}</CardGrade>
                </CardHeader>
                <CardBody>
                  <CardDesc>{c.desc}</CardDesc>
                  <SubjectList>
                    {c.subjects.slice(0, 4).map((s, j) => (
                      <SubjectItem key={j}><span className="dot"></span>{s}</SubjectItem>
                    ))}
                    {c.subjects.length > 4 && (
                      <SubjectItem style={{ color: '#6b7c6d', fontStyle: 'italic' }}>
                        <span className="dot"></span>+{c.subjects.length - 4} more subjects
                      </SubjectItem>
                    )}
                  </SubjectList>
                  <MediumTags>
                    {c.mediums.map((m, j) => (
                      <MediumTag key={j}
                        color={j === 0 ? '#e8f4ff' : '#f0faf4'}
                        textColor={j === 0 ? '#0d6efd' : '#1a6b3c'}
                        borderColor={j === 0 ? '#bee3f8' : '#d4edda'}
                      >{m} Medium</MediumTag>
                    ))}
                  </MediumTags>
                </CardBody>
              </CourseCard>
            ))}
          </CoursesGrid>
        </Inner>
      </Section>

      {/* Subjects */}
      <Section alt>
        <Inner>
          <SectionHeader>
            <SectionTag>What We Teach</SectionTag>
            <SectionTitle>All Core <span className="accent">Subjects Covered</span></SectionTitle>
            <SectionDesc>Expert teaching across every SSLC subject — science, maths, languages, and social science.</SectionDesc>
          </SectionHeader>
          <SubjectGrid>
            {[
              { icon: '🔢', name: 'Mathematics', detail: 'All classes', bg: '#f0faf4' },
              { icon: '⚗️', name: 'Science', detail: 'Physics, Chemistry, Biology', bg: '#fef9f0' },
              { icon: '🌍', name: 'Social Science', detail: 'History, Geography, Civics', bg: '#f5f0ff' },
              { icon: '📝', name: 'English', detail: 'Grammar, Literature, Writing', bg: '#f0f9ff' },
              { icon: '🔤', name: 'Malayalam', detail: 'Language & Literature', bg: '#fff0f0' },
              { icon: '💻', name: 'IT / Computer', detail: 'Class 10', bg: '#e8f8ef' },
              { icon: '🔬', name: 'Physics', detail: 'SSLC focus', bg: '#fef9e7' },
              { icon: '🧪', name: 'Chemistry', detail: 'SSLC focus', bg: '#f0fff4' },
            ].map((s, i) => (
              <SubjectCard key={i} bg={s.bg}>
                <div className="icon">{s.icon}</div>
                <div className="name">{s.name}</div>
                <div className="detail">{s.detail}</div>
              </SubjectCard>
            ))}
          </SubjectGrid>
        </Inner>
      </Section>

      {/* Batches */}
      <Section>
        <Inner>
          <SectionHeader>
            <SectionTag>2026–2027 Admissions</SectionTag>
            <SectionTitle>New Batches <span className="accent">Starting Soon</span></SectionTitle>
            <SectionDesc>Seats are limited — secure your spot now for the upcoming academic year.</SectionDesc>
          </SectionHeader>
          <BatchTable>
            <BatchCard accent="#1a6b3c">
              <BatchSubtitle>Class 10 Batch</BatchSubtitle>
              <BatchTitle>SSLC — English & Malayalam Medium</BatchTitle>
              <InfoRow><span className="icon">📅</span> Starts: April 6, 2026</InfoRow>
              <InfoRow><span className="icon">📚</span> All Subjects Included</InfoRow>
              <InfoRow><span className="icon">🌐</span> Both Mediums Available</InfoRow>
              <InfoRow><span className="icon">⏰</span> Morning & Evening Batches</InfoRow>
              <InfoRow><span className="icon">👥</span> Limited Seats — Enroll Early</InfoRow>
              <EnrollBtn to="/contact">📋 Enroll for Class 10 →</EnrollBtn>
            </BatchCard>
            <BatchCard accent="#f5a623">
              <BatchSubtitle>Class 8 & 9 Batch</BatchSubtitle>
              <BatchTitle>Pre-SSLC Foundation Batch</BatchTitle>
              <InfoRow><span className="icon">📅</span> Starts: April 20, 2026</InfoRow>
              <InfoRow><span className="icon">📚</span> All Core Subjects</InfoRow>
              <InfoRow><span className="icon">🌐</span> English Medium</InfoRow>
              <InfoRow><span className="icon">⏰</span> Afternoon Batches</InfoRow>
              <InfoRow><span className="icon">👥</span> Small Batch — Personal Attention</InfoRow>
              <EnrollBtn to="/contact" style={{ background: 'linear-gradient(135deg, #f5a623, #ffc85a)', color: '#1a1a2e', boxShadow: '0 4px 14px rgba(245,166,35,0.35)' }}>
                📋 Enroll for Class 8 & 9 →
              </EnrollBtn>
            </BatchCard>
          </BatchTable>

          <CTABanner>
            <h3>Not Sure Which Batch is Right?</h3>
            <p>Call us and we'll help you find the perfect class for your child's needs and schedule.</p>
            <CTABtnWhite to="/contact">📞 Contact Us Now</CTABtnWhite>
          </CTABanner>
        </Inner>
      </Section>
    </>
  );
}