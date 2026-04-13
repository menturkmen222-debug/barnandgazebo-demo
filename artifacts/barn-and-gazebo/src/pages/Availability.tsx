import { useState, useEffect } from "react";
import { useLocation } from "wouter";

const BOOKED_DATES_2026: string[] = [
  "2026-04-18",
  "2026-04-25",
  "2026-05-02",
  "2026-05-16",
  "2026-05-30",
  "2026-06-06",
  "2026-06-20",
  "2026-07-11",
  "2026-07-18",
  "2026-08-08",
  "2026-08-22",
  "2026-09-05",
  "2026-09-19",
  "2026-10-03",
  "2026-10-10",
  "2026-10-24",
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function formatDate(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

interface CalendarMonthProps {
  year: number;
  month: number;
  bookedDates: string[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
  onPrev?: () => void;
  onNext?: () => void;
  showPrev?: boolean;
  showNext?: boolean;
}

function CalendarMonth({
  year, month, bookedDates, selectedDate, onSelectDate,
  onPrev, onNext, showPrev = true, showNext = true,
}: CalendarMonthProps) {
  const today = new Date();
  const todayStr = formatDate(today.getFullYear(), today.getMonth(), today.getDate());
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="calendar-month">
      <div className="calendar-header">
        <button className="calendar-nav-btn" onClick={onPrev} aria-label="Previous month" style={{ visibility: showPrev ? "visible" : "hidden" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span className="calendar-month-title">{MONTHS[month]} {year}</span>
        <button className="calendar-nav-btn" onClick={onNext} aria-label="Next month" style={{ visibility: showNext ? "visible" : "hidden" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
      <div className="calendar-day-labels">
        {DAY_LABELS.map((d) => (
          <div key={d} className="calendar-day-label">{d}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} className="calendar-day empty" />;
          }
          const dateStr = formatDate(year, month, day);
          const isBooked = bookedDates.includes(dateStr);
          const isSelected = selectedDate === dateStr;
          const isToday = dateStr === todayStr;
          const isPast = dateStr < todayStr;

          let cls = "calendar-day";
          if (isPast) cls += " past";
          else if (isBooked) cls += " booked";
          else if (isSelected) cls += " selected";
          if (isToday) cls += " today";

          return (
            <div
              key={dateStr}
              className={cls}
              onClick={() => {
                if (!isBooked && !isPast) onSelectDate(dateStr);
              }}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

export default function Availability() {
  const [, navigate] = useLocation();
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Availability | The Barn and Gazebo — Salem, Ohio";
  }, []);

  const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  const handlePrev = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const handleNext = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  return (
    <main>
      {/* HERO */}
      <section className="hero hero-55">
        <div
          className="hero-bg parallax-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1920&q=90')",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content page-hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Availability</span>
            <span className="hero-eyebrow-line" />
          </div>
          <h1 className="hero-title" style={{ opacity: 1, transform: "none" }}>
            Reserve Your Date
          </h1>
        </div>
        <div className="hero-bottom-line" />
      </section>

      {/* CALENDAR */}
      <section className="availability-section">
        <div className="text-center reveal" style={{ marginBottom: 48 }}>
          <p className="eyebrow">2026 Calendar</p>
          <h2 className="section-h2 mt-4">Check Date Availability</h2>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.9rem", color: "var(--color-text-secondary)", maxWidth: 500, margin: "16px auto 0", lineHeight: 1.7 }}>
            Select a date below to check availability and begin your inquiry. Dates shown as reserved are already committed.
          </p>
        </div>

        <div className="calendar-container">
          <CalendarMonth
            year={viewYear}
            month={viewMonth}
            bookedDates={BOOKED_DATES_2026}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            onPrev={handlePrev}
            onNext={handleNext}
            showPrev={true}
            showNext={false}
          />
          <CalendarMonth
            year={nextYear}
            month={nextMonth}
            bookedDates={BOOKED_DATES_2026}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            onPrev={handlePrev}
            onNext={handleNext}
            showPrev={false}
            showNext={true}
          />
        </div>

        <div className="calendar-legend">
          <div className="legend-item">
            <div className="legend-swatch available" />
            <span>Available</span>
          </div>
          <div className="legend-item">
            <div className="legend-swatch reserved" />
            <span>Reserved</span>
          </div>
          <div className="legend-item">
            <div className="legend-swatch selected-swatch" />
            <span>Your Selection</span>
          </div>
        </div>

        <div className="selected-date-display text-center">
          <div className="selected-date-box">
            <div style={{ textAlign: "left" }}>
              <div className="selected-date-label">Selected Date</div>
              <div className="selected-date-value">
                {selectedDate ? formatDisplayDate(selectedDate) : "No date selected"}
              </div>
            </div>
          </div>
          {selectedDate && (
            <div style={{ marginTop: 24 }}>
              <button className="btn-primary" onClick={() => navigate("/contact")}>
                Proceed to Inquiry
              </button>
            </div>
          )}
        </div>

        <p className="calendar-note">
          All dates are subject to confirmation. A signed contract and deposit secures your date upon execution.
        </p>
      </section>

      {/* BOOKING PROCESS */}
      <section className="booking-process">
        <div className="text-center reveal">
          <p className="eyebrow">How It Works</p>
          <h2 className="section-h2 mt-4">The Booking Process</h2>
        </div>
        <div className="booking-steps">
          {[
            { num: "01", title: "Inquiry", desc: "Submit your inquiry online or call us directly. We will confirm availability for your preferred date within 24 hours." },
            { num: "02", title: "Site Visit", desc: "Visit the barn in person. Walk the grounds, see the light, feel the space. Most couples know within minutes of arriving." },
            { num: "03", title: "Contract + Deposit", desc: "A signed contract and 50% deposit secures your date. No date is held without both." },
            { num: "04", title: "Your Day", desc: "Your day arrives. We handle the details. You walk through the pine-lined drive and begin the rest of your life." },
          ].map((step, i) => (
            <div key={step.num} className={`booking-step reveal reveal-delay-${i + 1}`}>
              <span className="booking-step-num">{step.num}</span>
              <h3 className="booking-step-title">{step.title}</h3>
              <p className="booking-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="cta-strip-inner">
          <div>
            <h2 className="cta-strip-title reveal">Questions Before You Book?</h2>
            <p className="cta-strip-text reveal">
              We are happy to answer any questions about the venue, pricing, or process before you commit to anything. Reach out — no pressure, no sales script.
            </p>
          </div>
          <div className="cta-strip-right reveal">
            <button className="btn-primary" onClick={() => navigate("/contact")}>
              Get in Touch
            </button>
            <p className="cta-strip-phone">or call (330) 000-0000</p>
          </div>
        </div>
      </section>
    </main>
  );
}
