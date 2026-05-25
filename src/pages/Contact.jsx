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

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 56px;
  align-items: start;

  @media(max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

/* Form */
const FormCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 44px 40px;
  box-shadow: 0 10px 40px rgba(26,107,60,0.09);
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};

  @media(max-width: 480px) { padding: 28px 20px; }
`;

const FormTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.7rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 8px;
`;

const FormSubtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 30px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media(max-width: 560px) { grid-template-columns: 1fr; }
`;

const FormGroup = styled.div`
  margin-bottom: 18px;

  label {
    display: block;
    font-size: 0.83rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textMid};
    margin-bottom: 7px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 10px;
  font-size: 0.93rem;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.textDark};
  transition: all 0.2s;
  background: ${({ theme }) => theme.colors.bgWhite};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(26,107,60,0.1);
  }

  &::placeholder { color: #b0b8b1; }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 10px;
  font-size: 0.93rem;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.textDark};
  transition: all 0.2s;
  background: white;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7c6d' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(26,107,60,0.1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 10px;
  font-size: 0.93rem;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.textDark};
  transition: all 0.2s;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(26,107,60,0.1);
  }

  &::placeholder { color: #b0b8b1; }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(26,107,60,0.3);
  transition: all 0.2s;
  margin-top: 8px;

  &:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(26,107,60,0.4); }
  &:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
`;

const SuccessBox = styled.div`
  background: linear-gradient(135deg, #e8f8ef, #f0fdf4);
  border: 2px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  margin-top: 20px;

  .icon { font-size: 3rem; margin-bottom: 12px; }
  .title { font-size: 1.2rem; font-weight: 700; color: ${({ theme }) => theme.colors.primary}; margin-bottom: 8px; }
  .msg { font-size: 0.9rem; color: ${({ theme }) => theme.colors.textLight}; line-height: 1.65; }
`;

/* Contact Info */
const InfoSide = styled.div``;

const InfoTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.7rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textDark};
  margin-bottom: 8px;
`;

const InfoSubtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 28px;
`;

const ContactCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

const ContactCard = styled.a`
  display: flex;
  gap: 16px;
  align-items: center;
  background: ${({ bg }) => bg || '#f0faf4'};
  border-radius: 16px;
  padding: 18px 20px;
  border: 1.5px solid ${({ borderColor }) => borderColor || 'rgba(26,107,60,0.12)'};
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  }
`;

const ContactIcon = styled.div`
  width: 48px; height: 48px;
  background: ${({ iconBg }) => iconBg};
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
`;

const ContactText = styled.div`
  .label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ labelColor }) => labelColor || '#1a6b3c'};
    margin-bottom: 3px;
  }
  .value {
    font-size: 0.93rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

const HoursCard = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryLight});
  border-radius: 18px;
  padding: 24px;
  color: white;
`;

const HoursTitle = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 16px;
  display: flex; align-items: center; gap: 8px;
`;

const HourRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.12);

  &:last-child { border-bottom: none; }

  .day { font-size: 0.88rem; color: rgba(255,255,255,0.8); }
  .time { font-size: 0.88rem; font-weight: 600; color: ${({ theme }) => theme.colors.secondaryLight}; }
`;

/* Quick Contact Strip */
const QuickStrip = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primaryDark}, ${({ theme }) => theme.colors.primary});
  border-radius: 20px;
  padding: 36px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const QuickText = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.4rem;
    color: white;
    margin-bottom: 4px;
  }
  p { font-size: 0.88rem; color: rgba(255,255,255,0.7); }
`;

const PhoneButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PhoneBtn = styled.a`
  padding: 11px 22px;
  background: rgba(255,255,255,0.12);
  border: 1.5px solid rgba(255,255,255,0.25);
  border-radius: 999px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover { background: rgba(255,255,255,0.2); }
`;

/* Map placeholder */
const MapPlaceholder = styled.div`
  background: ${({ theme }) => theme.colors.bgLight};
  border-radius: 20px;
  padding: 48px;
  text-align: center;
  border: 1.5px dashed ${({ theme }) => theme.colors.borderLight};
  margin-top: 40px;

  .icon { font-size: 3rem; margin-bottom: 12px; }
  .title { font-size: 1.1rem; font-weight: 700; color: ${({ theme }) => theme.colors.textDark}; margin-bottom: 6px; }
  .addr { font-size: 0.9rem; color: ${({ theme }) => theme.colors.textLight}; line-height: 1.6; }
`;

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', grade: '', medium: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <PageHero>
        <Breadcrumb><Link to="/">Home</Link><span>›</span>Contact</Breadcrumb>
        <PageTitle>Get in <span className="accent">Touch</span></PageTitle>
        <PageSubtitle>Ready to enroll or have questions? Reach out to us — we're here to help your child succeed.</PageSubtitle>
      </PageHero>

      <Section>
        <Inner>
          <TwoCol>
            {/* Form */}
            <FormCard>
              <FormTitle>Enroll or Enquire</FormTitle>
              <FormSubtitle>Fill out the form and we'll contact you within 24 hours.</FormSubtitle>

              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <FormRow>
                    <FormGroup>
                      <label>Student Name *</label>
                      <Input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                      <label>Parent's Phone *</label>
                      <Input name="phone" type="tel" placeholder="Mobile number" value={form.phone} onChange={handleChange} required />
                    </FormGroup>
                  </FormRow>
                  <FormRow>
                    <FormGroup>
                      <label>Class / Grade *</label>
                      <Select name="grade" value={form.grade} onChange={handleChange} required>
                        <option value="">Select class</option>
                        <option value="1-5">Class 1 – 5</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10 (SSLC)</option>
                      </Select>
                    </FormGroup>
                    <FormGroup>
                      <label>Medium</label>
                      <Select name="medium" value={form.medium} onChange={handleChange}>
                        <option value="">Select medium</option>
                        <option value="english">English Medium</option>
                        <option value="malayalam">Malayalam Medium</option>
                      </Select>
                    </FormGroup>
                  </FormRow>
                  <FormGroup>
                    <label>Message (optional)</label>
                    <Textarea name="message" placeholder="Any questions or specific requirements..." value={form.message} onChange={handleChange} />
                  </FormGroup>
                  <SubmitBtn type="submit" disabled={loading}>
                    {loading ? '⏳ Submitting...' : '📋 Submit Enquiry'}
                  </SubmitBtn>
                </form>
              ) : (
                <SuccessBox>
                  <div className="icon">✅</div>
                  <div className="title">Enquiry Received!</div>
                  <div className="msg">
                    Thank you! We've received your enquiry for <strong>{form.name}</strong>.
                    We will contact you on <strong>{form.phone}</strong> within 24 hours.
                  </div>
                </SuccessBox>
              )}
            </FormCard>

            {/* Info */}
            <InfoSide>
              <InfoTitle>Contact Details</InfoTitle>
              <InfoSubtitle>Call us directly or visit our centre in Velliyoor.</InfoSubtitle>

              <ContactCards>
                <ContactCard href="tel:9947152332" bg="#f0faf4" borderColor="rgba(26,107,60,0.15)">
                  <ContactIcon iconBg="rgba(26,107,60,0.12)">📞</ContactIcon>
                  <ContactText labelColor="#1a6b3c">
                    <div className="label">Phone 1</div>
                    <div className="value">9947152332</div>
                  </ContactText>
                </ContactCard>
                <ContactCard href="tel:9539384964" bg="#fef9f0" borderColor="rgba(245,166,35,0.2)">
                  <ContactIcon iconBg="rgba(245,166,35,0.12)">📱</ContactIcon>
                  <ContactText labelColor="#c47d0a">
                    <div className="label">Phone 2</div>
                    <div className="value">9539384964</div>
                  </ContactText>
                </ContactCard>
                <ContactCard href="tel:9947141765" bg="#f5f0ff" borderColor="rgba(124,58,237,0.15)">
                  <ContactIcon iconBg="rgba(124,58,237,0.1)">☎️</ContactIcon>
                  <ContactText labelColor="#7c3aed">
                    <div className="label">Phone 3</div>
                    <div className="value">9947141765</div>
                  </ContactText>
                </ContactCard>
                <ContactCard as="div" bg="#fff0f0" borderColor="rgba(230,57,70,0.12)" style={{ cursor: 'default' }}>
                  <ContactIcon iconBg="rgba(230,57,70,0.1)">📍</ContactIcon>
                  <ContactText labelColor="#c0392b">
                    <div className="label">Address</div>
                    <div className="value">227 - Govt. L.P. School, Cheruvaalur, Thecku Vasham, Velliyoor</div>
                  </ContactText>
                </ContactCard>
              </ContactCards>

              <HoursCard>
                <HoursTitle><span>🕐</span> Centre Hours</HoursTitle>
                {[
                  { day: 'Monday – Friday', time: '8:00 AM – 8:00 PM' },
                  { day: 'Saturday', time: '8:00 AM – 8:00 PM' },
                  { day: 'Sunday', time: '9:00 AM – 1:00 PM' },
                ].map((h, i) => (
                  <HourRow key={i}>
                    <span className="day">{h.day}</span>
                    <span className="time">{h.time}</span>
                  </HourRow>
                ))}
              </HoursCard>
            </InfoSide>
          </TwoCol>

          {/* Quick Strip */}
          <QuickStrip style={{ marginTop: '48px' }}>
            <QuickText>
              <h3>Call Us Right Now</h3>
              <p>Our team is available to answer all your questions</p>
            </QuickText>
            <PhoneButtons>
              <PhoneBtn href="tel:9947152332">📞 9947152332</PhoneBtn>
              <PhoneBtn href="tel:9539384964">📞 9539384964</PhoneBtn>
              <PhoneBtn href="tel:9947141765">📞 9947141765</PhoneBtn>
            </PhoneButtons>
          </QuickStrip>

          {/* Map Placeholder */}
          <MapPlaceholder>
            <div className="icon">📍</div>
            <div className="title">Find Us in Velliyoor</div>
            <div className="addr">
              227 - Govt. L.P. School, Cheruvaalur,<br />
              Thecku Vasham, Velliyoor, Kerala
            </div>
          </MapPlaceholder>
        </Inner>
      </Section>
    </>
  );
}