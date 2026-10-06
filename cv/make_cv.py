import re, sys
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_COLOR_INDEX
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

out = sys.argv[1]
doc = Document()
for s in doc.sections:
    s.top_margin = s.bottom_margin = Cm(1.3)
    s.left_margin = s.right_margin = Cm(1.9)
    s.page_height, s.page_width = Cm(29.7), Cm(21.0)  # A4

st = doc.styles["Normal"]
st.font.name = "Arial"; st.font.size = Pt(10)
st.element.rPr.rFonts.set(qn("w:eastAsia"), "Arial")
st.paragraph_format.space_after = Pt(0)
st.paragraph_format.line_spacing = 1.05

def runs(p, text, bold=False, size=None):
    # [[...]] = highlight in yellow (details to fill in / confirm)
    for i, part in enumerate(re.split(r"\[\[(.*?)\]\]", text)):
        if not part: continue
        r = p.add_run(part); r.bold = bold
        if size: r.font.size = Pt(size)
        if i % 2: r.font.highlight_color = WD_COLOR_INDEX.YELLOW
    return p

def para(text="", bold=False, size=None, after=0, before=0):
    p = doc.add_paragraph(); runs(p, text, bold, size)
    p.paragraph_format.space_after = Pt(after); p.paragraph_format.space_before = Pt(before)
    return p

def rule(p):
    pPr = p._p.get_or_add_pPr(); b = OxmlElement("w:pBdr"); bt = OxmlElement("w:bottom")
    for k, v in {"w:val": "single", "w:sz": "6", "w:space": "2", "w:color": "333333"}.items(): bt.set(qn(k), v)
    b.append(bt); pPr.append(b)

def heading(t):
    p = para(t.upper(), bold=True, size=11.5, before=8, after=3); rule(p)

def job(title, place, dates, bullets):
    p = para(before=5, after=1)
    runs(p, title, bold=True); runs(p, " – " + place)
    p.paragraph_format.tab_stops.add_tab_stop(Cm(17.2), alignment=2)
    runs(p, "\t" + dates)
    for b in bullets:
        q = doc.add_paragraph(style="List Bullet"); runs(q, b)
        q.paragraph_format.space_after = Pt(1)

name = para("JITHIN GEORGE", bold=True, size=20, after=3)
para("Wembley Park, London HA9 0TT")
para("+44 7721 960626  |  jithindavid.19@gmail.com  |  linkedin.com/in/jithin-george-jj1999")
para("Available for Full-Time and Part-Time Roles", after=2)

heading("Professional Summary")
para("Customer-focused retail and front of house professional with experience in fashion retail in India and the UK, "
     "including TK Maxx, alongside busy hospitality roles in the UK. Confident on the till, on the shop floor and in the "
     "stockroom, with a sharp eye for display standards. Backed by three years in client-facing marketing and an MSc "
     "in Digital Marketing focused on consumer behaviour.")

heading("Retail Experience")
job("Sales Assistant", "TK Maxx, [[City]]", "[[Month Year – Month Year]]", [
    "Processed [[150+]] transactions per shift, including refunds, exchanges and gift cards, with fully balanced cash-ups.",
    "Unpacked, tagged and priced [[20+]] cages of new stock a day, getting fresh lines onto the shop floor quickly.",
    "Kept departments and fitting rooms sized, tidy and recovered to brand standard throughout trading hours.",
    "Helped customers find sizes, brands and bargains, turning browsers into buyers with honest product advice.",
])
job("Sales Associate", "Westside, Mumbai, India", "[[Month Year – Month Year]]", [
    "Assisted [[60+]] customers a day on the fashion floor with styling, sizing and outfit suggestions.",
    "Signed up [[40+]] new ClubWest loyalty members each month by explaining the benefits at the till.",
    "Set up new-season displays and mannequins in line with visual merchandising guidelines.",
    "Supported stock receiving, replenishment and monthly stock audits to keep counts accurate.",
])

heading("Front of House Experience")
job("Front of House Team Member", "True Street Food, [[City]]", "[[Month Year – Month Year]]", [
    "Took orders and payments for [[120+]] customers per shift on the EPOS system during lunch and evening rushes.",
    "Explained the menu, specials and allergen information clearly so every customer ordered with confidence.",
    "Kept the counter and seating area clean, stocked and compliant with food hygiene standards.",
])
job("Front of House Staff", "Bardez, [[City]]", "[[Month Year – Month Year]]", [
    "Welcomed guests, managed walk-ins and reservations, and kept table turnover smooth on busy nights.",
    "Looked after [[6–8]] tables per shift, recommending drinks and desserts to increase spend per table.",
    "Handled card and cash payments, including split bills, accurately and quickly.",
])

heading("Other Experience")
job("Marketing Executive", "Qyuki (Remote)", "Mar 2024 – Present", [
    "Look after 8–12 client accounts each campaign cycle, meeting 100% of delivery targets.",
    "Grew the partner contact list from 300 to 450+, opening up 25% more partnership opportunities.",
])
job("Influencer Marketing Executive", "Tring", "Jul 2022 – Apr 2023", [
    "Onboarded 10+ creators per campaign and built a database of 500+ creators for faster brand matching.",
])
job("Talent Coordinator", "Aspiring Productions (Reality Show)", "May 2022 – Dec 2022", [
    "Ran online auditions for 250+ participants and set up an Excel tracker that cut turnaround time by 40%.",
])

heading("Education")
p = para(after=1); runs(p, "MSc Digital Marketing", bold=True); runs(p, " – University of Salford, Manchester  |  2025")
para("Dissertation: The Impact of Modern Influencer Strategies on Consumer Behaviour – Distinction (71.33%)", after=4)
p = para(); runs(p, "BA Mass Media and Communication", bold=True); runs(p, " – University of Mumbai, India  |  2021")

heading("Key Skills")
skills = ["Customer service and complaint handling", "EPOS, cash handling and card payments",
          "Sales, upselling and product knowledge", "Visual merchandising and shop-floor standards",
          "Stock control, deliveries and replenishment", "Security tagging and loss prevention",
          "Microsoft Excel, Google Sheets and Canva", "Teamwork and working under pressure"]
t = doc.add_table(rows=4, cols=2)
for i, s in enumerate(skills):
    c = t.cell(i % 4, i // 4); c.paragraphs[0].text = ""
    c.paragraphs[0].style = doc.styles["List Bullet"]; runs(c.paragraphs[0], s)

para("References available on request.", before=5)
doc.save(out)
