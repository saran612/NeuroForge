'use client'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SlideHeader, SlideSubHeader } from "../slide";

const chartData = [
  { model: "Standard LLM", accuracy: 55, color: "#D1D5DB" },
  { model: "Basic RAG", accuracy: 78, color: "#9CA3AF" },
  { model: "Memora", accuracy: 95, color: "hsl(var(--accent))" },
];

export function ResearchSlide({ id }: { id: string }) {
    return (
        <>
            <SlideHeader>Data-Backed Performance</SlideHeader>
            <SlideSubHeader>
                Memora consistently outperforms standard models by retrieving relevant, real-time context before generating an answer.
            </SlideSubHeader>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <Card className="col-span-1 lg:col-span-2 text-left border-2 border-primary/10 shadow-lg">
                    <CardHeader>
                        <CardTitle>Answer Accuracy Benchmark</CardTitle>
                        <CardDescription>Comparison based on enterprise knowledge-base Q&A.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                           <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="model" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis unit="%" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        cursor={{ fill: 'hsla(var(--accent) / 0.1)' }}
                                        contentStyle={{
                                            background: 'hsl(var(--background))',
                                            borderColor: 'hsl(var(--border))',
                                            borderRadius: 'var(--radius)'
                                        }}
                                    />
                                    <Bar dataKey="accuracy" radius={[4, 4, 0, 0]} >
                                        {chartData.map((entry, index) => (
                                            <rect key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
                 <div className="col-span-1 text-left flex flex-col gap-4">
                    <h3 className="font-bold text-xl text-primary">Training Sources</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>Real-time API integrations</li>
                        <li>Internal documentation (Confluence, Notion)</li>
                        <li>Customer support tickets (Zendesk, etc.)</li>
                        <li>Proprietary databases and data warehouses</li>
                        <li>Verified public knowledge domains</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
