"use client"

import StyleguideLayout from './StyleguideLayout';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    type ChartConfig,
} from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BarChartShowcase() {
    return (
        <StyleguideLayout currentPage="/styleguide/components/bar-chart">
            <div className="p-8 max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Bar Chart</h1>
                    <p className="text-muted-foreground text-lg">
                        Responsive bar chart components built with Recharts for displaying data visualizations.
                    </p>
                </div>

                {/* Import Statement */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <div className="bg-muted p-4 rounded-lg">
                        <pre className="text-sm font-mono overflow-x-auto">
                            {`import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"`}
                        </pre>
                    </div>
                </section>

                {/* Basic Bar Chart */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Basic Bar Chart</h2>
                    <p className="text-muted-foreground mb-6">
                        A simple bar chart with minimal configuration.
                    </p>
                    <Card>
                        <CardHeader>
                            <CardTitle>Monthly Revenue</CardTitle>
                            <CardDescription>January - June 2024</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={basicChartConfig} className="min-h-[300px] w-full">
                                <BarChart accessibilityLayer data={monthlyData}>
                                    <Bar dataKey="revenue" fill="var(--color-revenue)" radius={8} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                    <div className="bg-muted p-4 rounded-lg mt-4">
                        <pre className="text-sm font-mono overflow-x-auto">
                            {`const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

<ChartContainer config={chartConfig} className="min-h-[300px] w-full">
  <BarChart accessibilityLayer data={data}>
    <Bar dataKey="revenue" fill="var(--color-revenue)" radius={8} />
  </BarChart>
</ChartContainer>`}
                        </pre>
                    </div>
                </section>

                {/* Bar Chart with Axes */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Bar Chart with Axes</h2>
                    <p className="text-muted-foreground mb-6">
                        Bar chart with X and Y axes for better data context.
                    </p>
                    <Card>
                        <CardHeader>
                            <CardTitle>Crypto Trading Volume</CardTitle>
                            <CardDescription>Last 6 months</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={cryptoChartConfig} className="min-h-[300px] w-full">
                                <BarChart accessibilityLayer data={cryptoData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <YAxis
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) => `$${value}M`}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Bar dataKey="volume" fill="var(--color-volume)" radius={8} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </section>

                {/* Multiple Bars */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Multiple Data Series</h2>
                    <p className="text-muted-foreground mb-6">
                        Compare multiple data series side by side.
                    </p>
                    <Card>
                        <CardHeader>
                            <CardTitle>Platform Comparison</CardTitle>
                            <CardDescription>Desktop vs Mobile users</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={platformChartConfig} className="min-h-[300px] w-full">
                                <BarChart accessibilityLayer data={platformData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <ChartLegend content={<ChartLegendContent />} />
                                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </section>

                {/* Stacked Bar Chart */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Stacked Bar Chart</h2>
                    <p className="text-muted-foreground mb-6">
                        Stack multiple data series to show composition.
                    </p>
                    <Card>
                        <CardHeader>
                            <CardTitle>Transaction Types</CardTitle>
                            <CardDescription>Buy, Sell, and Swap volumes</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={transactionChartConfig} className="min-h-[300px] w-full">
                                <BarChart accessibilityLayer data={transactionData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <ChartLegend content={<ChartLegendContent />} />
                                    <Bar dataKey="buy" stackId="a" fill="var(--color-buy)" radius={[0, 0, 4, 4]} />
                                    <Bar dataKey="sell" stackId="a" fill="var(--color-sell)" radius={[0, 0, 0, 0]} />
                                    <Bar dataKey="swap" stackId="a" fill="var(--color-swap)" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </section>

                {/* Horizontal Bar Chart */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Horizontal Bar Chart</h2>
                    <p className="text-muted-foreground mb-6">
                        Display data horizontally for better label readability.
                    </p>
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Cryptocurrencies</CardTitle>
                            <CardDescription>By market cap</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={topCryptoConfig} className="min-h-[300px] w-full">
                                <BarChart accessibilityLayer data={topCryptoData} layout="vertical">
                                    <CartesianGrid horizontal={false} />
                                    <XAxis type="number" tickFormatter={(value) => `$${value}B`} />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Bar dataKey="marketCap" fill="var(--color-marketCap)" radius={4} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </section>

                {/* Props Documentation */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Component Props</h2>
                    <div className="bg-card p-6 rounded-lg border space-y-6">
                        <div>
                            <h3 className="font-semibold mb-2">ChartContainer</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                                Wrapper component that provides chart configuration and theming.
                            </p>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                                <li><code className="bg-muted px-1 rounded">config</code> - Chart configuration object (required)</li>
                                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
                                <li><code className="bg-muted px-1 rounded">children</code> - Recharts components</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">ChartConfig</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                                Configuration object for defining data series colors and labels.
                            </p>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                                <li><code className="bg-muted px-1 rounded">label</code> - Display name for the data series</li>
                                <li><code className="bg-muted px-1 rounded">color</code> - Color value (CSS variable or hex)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">BarChart (from Recharts)</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                                Main chart component from Recharts library.
                            </p>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                                <li><code className="bg-muted px-1 rounded">data</code> - Array of data objects</li>
                                <li><code className="bg-muted px-1 rounded">layout</code> - "horizontal" or "vertical"</li>
                                <li><code className="bg-muted px-1 rounded">accessibilityLayer</code> - Enable accessibility features</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Accessibility */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
                    <div className="bg-card p-6 rounded-lg border space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">Accessibility Layer</h3>
                            <p className="text-muted-foreground text-sm">
                                Use the <code className="bg-muted px-1 rounded">accessibilityLayer</code> prop on BarChart to enable keyboard navigation and screen reader support.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Tooltips</h3>
                            <p className="text-muted-foreground text-sm">
                                ChartTooltip provides contextual information when hovering over data points, improving data comprehension.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Color Contrast</h3>
                            <p className="text-muted-foreground text-sm">
                                Use the chart color variables (--chart-1 through --chart-5) which are designed for proper contrast in both light and dark modes.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Legends</h3>
                            <p className="text-muted-foreground text-sm">
                                Include ChartLegend for multi-series charts to help users understand what each color represents.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </StyleguideLayout>
    );
}

// Sample Data
const monthlyData = [
    { month: "January", revenue: 186 },
    { month: "February", revenue: 305 },
    { month: "March", revenue: 237 },
    { month: "April", revenue: 273 },
    { month: "May", revenue: 209 },
    { month: "June", revenue: 314 },
];

const cryptoData = [
    { month: "January", volume: 45 },
    { month: "February", volume: 52 },
    { month: "March", volume: 48 },
    { month: "April", volume: 61 },
    { month: "May", volume: 55 },
    { month: "June", volume: 67 },
];

const platformData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 273, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 314, mobile: 140 },
];

const transactionData = [
    { month: "January", buy: 120, sell: 80, swap: 40 },
    { month: "February", buy: 150, sell: 100, swap: 55 },
    { month: "March", buy: 130, sell: 70, swap: 37 },
    { month: "April", buy: 180, sell: 120, swap: 73 },
    { month: "May", buy: 140, sell: 90, swap: 45 },
    { month: "June", buy: 200, sell: 140, swap: 74 },
];

const topCryptoData = [
    { name: "Bitcoin", marketCap: 845 },
    { name: "Ethereum", marketCap: 274 },
    { name: "Tether", marketCap: 95 },
    { name: "BNB", marketCap: 52 },
    { name: "Solana", marketCap: 42 },
];

// Chart Configurations
const basicChartConfig = {
    revenue: {
        label: "Revenue",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig;

const cryptoChartConfig = {
    volume: {
        label: "Volume",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;

const platformChartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;

const transactionChartConfig = {
    buy: {
        label: "Buy",
        color: "var(--chart-1)",
    },
    sell: {
        label: "Sell",
        color: "var(--chart-2)",
    },
    swap: {
        label: "Swap",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig;

const topCryptoConfig = {
    marketCap: {
        label: "Market Cap",
        color: "var(--chart-4)",
    },
} satisfies ChartConfig;
