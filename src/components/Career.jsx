import { Footprints } from "lucide-react";
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
    { year: 2019, milestone: "I completed my Leaving Cert in 2019 and went to study Engineering at University of Galway. Engineering seemed like the best degree for someone interested in technology and business.", growth: 10 },
    { year: 2019, milestone: "I wanted to build something. So, with two mates, I founded Receipt Relay - the easiest way to get your e-receipt.", growth: 20 },
    { year: 2020, milestone: "I chose Electronic and Computer Engineering as my engineering discipline. I wanted to be able to build my own ideas.", growth: 30 },
    { year: 2021, milestone: "I got a summer internship as a SWE with Fidelity Investments. Around a similar time, Receipt Relay partnered with a local POS provider.", growth: 40 },
    { year: 2021, milestone: "After piloting the Receipt Relay MVP with our new POS partner, Receipt Relay raised €50,000 in pre-seed funding. Our MVP was a QR code customers could scan at the POS to get their e-receipt.", growth: 50 },
    { year: 2022, milestone: "I started working full-time on Receipt Relay in my third year of college and we signed up more businesses. I learned about B2B sales and iterating on ideas.", growth: 60 },
    { year: 2022, milestone: "Receipt Relay secured an LOI with a major European retailer but ultimately failed to reach PMF. I learned as much from this experience as I did from my college lectures (maybe more).", growth: 70 },
    { year: 2023, milestone: "I graduated in Electronic and Computer Engineering, worked on a bar and did some travelling around the US and Europe. I gave a lot of consideration to what I wanted to do next.", growth: 80 },
    { year: 2023, milestone: "I interviewed for a SWE role with Fidelity Investments and got an offer for January 2024. For the few months in between, I joined Breakthrough Maths - an edtech scale-up - as a SWE and worked under a brilliant CTO. I ra my first half marathon.", growth: 90 },
    { year: 2024, milestone: "I started working in Fidelity and joined the Cloud Databases team. The role mostly involved enhancing and maintaining platform tools for automated DB deployments. I ran my first marathon, did some more travelling around Europe and spent a few days in Tangier.", growth: 100 },
    { year: 2025, milestone: "I was promoted to Cloud Engineer but couldn't ignore the feeling that I was not working on the things I wanted to work on. I started working on a lot of side projects over the course of the year. I travelled to Indonesia and Sydney.", growth: 110 },
    { year: 2026, milestone: "I reached the coveted 2 years experience as an engineer in January (and realised it didn't mean much beyond my CV). Some of the side projects began to show potential", growth: 120 },
    { year: 2026, milestone: "???", growth: 130 }
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
        <Footprints className="w-8 h-8 text-white mr-3" />
        <h2 className="text-2xl font-bold text-white">Experience </h2>
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
        The graph looks nice but progress is not linear
      </p>
    </div>
  );
};

export default Career;
