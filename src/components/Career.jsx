// import { Footprints } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Career = () => {
  const data = [
    { year: 2019, milestone: "I finished secondary school in 2019 and went to study engineering at University of Galway. I was in interested in technology and business so engineering seemed like the natural path for me despite my favourite subjects all being languages.", growth: 10 },
    { year: 2019, milestone: "I wanted to build something/ start a company so, with two mates (Joe and Luke), I co-founded Receipt Relay - the easiest way to get your e-receipt.", growth: 20 },
    { year: 2020, milestone: "In second year of college, I chose electronic and computer engineering as my engineering stream.", growth: 30 },
    { year: 2021, milestone: "I got a summer internship as a software engineer with Fidelity Investments - my first job that didn't involve stocking shelves or waiting tables. Around a similar time, Receipt Relay partnered with a local POS provider which was was our first major milestone.", growth: 40 },
    { year: 2021, milestone: "We launched the Receipt Relay MVP with our POS partner and we raised €50,000 in funding from Enterprise Ireland. Any customer in one of our locations could now scan a QR code at the checkout and get their e-receipt - no more emails.", growth: 50 },
    { year: 2022, milestone: "For my work placement module in third year, I started working full-time on Receipt Relay and we signed up more local businesses. During this time, we secured an LOI from a major European retailer but ultimately failed to reach PMF. Shutting down operations hurt but this was a massive learning experience.", growth: 60 },
    { year: 2023, milestone: "I returned to college for final year and I graduated in Electronic and Computer Engineering. For the summer after college I worked on a bar and did some travelling around the US and Europe. I gave a lot of consideration to what I wanted to do next.", growth: 70 },
    { year: 2023, milestone: "After returning from the US at the end of the summer, I interviewed for a grad role with Fidelity Investments and got an offer for January 2024. For the few months in between, I joined an edtech startup called Breakthrough Maths as their third engineering hire and worked under a brilliant CTO. I also ran my first half marathon.", growth: 80 },
    { year: 2024, milestone: "I started working in Fidelity and joined the cloud database team where I worked on building database deployment tools. I ran my first full marathon, a bunch of half marathons and did a sprint triathlon. I ticked off some more countries around Europe and spent a few days exploring Tangier.", growth: 90 },
    { year: 2025, milestone: "I was promoted to the equivalent of Engineer II and in my spare time I started working on a lot of side projects. I travelled to Indonesia and Sydney and thru-hiked the Maumturks over a two day trip.", growth: 100 },
    { year: 2026, milestone: "I reached the coveted two years experience as an engineer in January (and realised it didn't mean much beyond my CV). I figured out the types of projects I do and don't like working on and decided one of these projects would be my next 'job'.", growth: 110 }
  ];

  // Spread out same-year milestones slightly (horizontally)
  const processedData = data.map((d, i, arr) => {
    const sameYearItems = arr.filter(a => a.year === d.year);
    const indexInYear = sameYearItems.indexOf(d);
    const spacing = 0.15; // adjust this if you want them closer/further apart
    return { ...d, yearValue: d.year + indexInYear * spacing };
  });

  // Custom Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { milestone, yearValue } = payload[0].payload;
      return (
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 text-white max-w-xs">
          <p className="font-semibold">{Math.floor(yearValue)}</p>
          <p className="text-sm text-gray-200">{milestone}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-16">
      <div className="flex items-center mb-6">
        {/* <Footprints className="w-8 h-8 text-white mr-3" /> */}
        {/* <h2 className="text-2xl font-bold text-white">Experience </h2> */}
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={processedData}
            margin={{ top: 30, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey="yearValue"
              stroke="#fff"
              tickFormatter={(v) => Math.floor(v)}
              tick={{ fill: "#fff" }}
              tickLine={false}
              axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            />
            <YAxis hide={true} domain={[0, 100]} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="growth"
              stroke="url(#colorGradient)"
              strokeWidth={3}
              dot={{
                r: 6,
                fill: "#fff",
                strokeWidth: 2,
                stroke: "#ff6b35",
              }}
              activeDot={{ r: 8 }}
              isAnimationActive={true}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff6b35" />
                <stop offset="100%" stopColor="#ff4d4d" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-gray-300 text-sm text-center mt-4">
        * progress is not linear
      </p>
    </div>
  );
};

export default Career;
