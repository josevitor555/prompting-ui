import StyleguideLayout from './StyleguideLayout';

export default function StyleguidePage() {
    return (
        <StyleguideLayout currentPage="/styleguide">
            <div className="p-8 max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Design Tokens</h1>
                    <p className="text-muted-foreground text-lg">
                        Complete design system tokens extracted from the crypto platform design.
                    </p>
                </div>

                {/* Color Palette Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Color Palette</h2>

                    {/* Primary Color */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Primary - Neon Lime</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-32 h-32 rounded-lg bg-primary border border-border shadow-lg"></div>
                                <div>
                                    <p className="font-mono text-sm text-muted-foreground">--primary</p>
                                    <p className="font-mono text-sm">oklch(0.92 0.25 127)</p>
                                    <p className="text-sm text-muted-foreground mt-1">Used for CTAs, highlights, and brand elements</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Colors */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Backgrounds</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <ColorSwatch
                                color="bg-background"
                                label="Background"
                                variable="--background"
                                description="Page background"
                            />
                            <ColorSwatch
                                color="bg-card"
                                label="Card"
                                variable="--card"
                                description="Card surfaces"
                            />
                            <ColorSwatch
                                color="bg-popover"
                                label="Popover"
                                variable="--popover"
                                description="Floating elements"
                            />
                            <ColorSwatch
                                color="bg-muted"
                                label="Muted"
                                variable="--muted"
                                description="Subtle backgrounds"
                            />
                        </div>
                    </div>

                    {/* Text Colors */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Text Colors</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <ColorSwatch
                                color="bg-foreground"
                                label="Foreground"
                                variable="--foreground"
                                description="Primary text"
                            />
                            <ColorSwatch
                                color="bg-muted-foreground"
                                label="Muted Text"
                                variable="--muted-foreground"
                                description="Secondary text"
                            />
                            <ColorSwatch
                                color="bg-primary-foreground"
                                label="Primary Text"
                                variable="--primary-foreground"
                                description="Text on primary"
                            />
                            <ColorSwatch
                                color="bg-card-foreground"
                                label="Card Text"
                                variable="--card-foreground"
                                description="Text on cards"
                            />
                        </div>
                    </div>

                    {/* Semantic Colors */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Semantic Colors</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <ColorSwatch
                                color="bg-success"
                                label="Success"
                                variable="--success"
                                description="Positive actions"
                            />
                            <ColorSwatch
                                color="bg-warning"
                                label="Warning"
                                variable="--warning"
                                description="Caution states"
                            />
                            <ColorSwatch
                                color="bg-destructive"
                                label="Destructive"
                                variable="--destructive"
                                description="Errors & deletion"
                            />
                            <ColorSwatch
                                color="bg-info"
                                label="Info"
                                variable="--info"
                                description="Informational"
                            />
                        </div>
                    </div>

                    {/* Chart Colors */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Chart Colors</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <ColorSwatch color="bg-chart-1" label="Chart 1" variable="--chart-1" />
                            <ColorSwatch color="bg-chart-2" label="Chart 2" variable="--chart-2" />
                            <ColorSwatch color="bg-chart-3" label="Chart 3" variable="--chart-3" />
                            <ColorSwatch color="bg-chart-4" label="Chart 4" variable="--chart-4" />
                            <ColorSwatch color="bg-chart-5" label="Chart 5" variable="--chart-5" />
                        </div>
                    </div>

                    {/* Border & Input Colors */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Borders & Inputs</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <ColorSwatch
                                color="bg-border"
                                label="Border"
                                variable="--border"
                                description="Default borders"
                            />
                            <ColorSwatch
                                color="bg-input"
                                label="Input"
                                variable="--input"
                                description="Input borders"
                            />
                            <ColorSwatch
                                color="bg-ring"
                                label="Ring"
                                variable="--ring"
                                description="Focus rings"
                            />
                        </div>
                    </div>
                </section>

                {/* Typography Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Typography</h2>

                    <div className="space-y-6 bg-card p-6 rounded-lg border">
                        <div>
                            <p className="text-sm text-muted-foreground mb-2">Font Family</p>
                            <p className="text-lg font-mono">Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif</p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Heading 1</p>
                                <h1 className="text-4xl font-bold">The quick brown fox jumps over the lazy dog</h1>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Heading 2</p>
                                <h2 className="text-3xl font-bold">The quick brown fox jumps over the lazy dog</h2>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Heading 3</p>
                                <h3 className="text-2xl font-semibold">The quick brown fox jumps over the lazy dog</h3>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Heading 4</p>
                                <h4 className="text-xl font-semibold">The quick brown fox jumps over the lazy dog</h4>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Body Large</p>
                                <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Body</p>
                                <p className="text-base">The quick brown fox jumps over the lazy dog</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Body Small</p>
                                <p className="text-sm">The quick brown fox jumps over the lazy dog</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Caption</p>
                                <p className="text-xs text-muted-foreground">The quick brown fox jumps over the lazy dog</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Border Radius Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Border Radius</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <RadiusExample size="sm" label="Small" value="calc(var(--radius) - 4px)" />
                        <RadiusExample size="md" label="Medium" value="calc(var(--radius) - 2px)" />
                        <RadiusExample size="lg" label="Large" value="var(--radius)" />
                        <RadiusExample size="xl" label="Extra Large" value="calc(var(--radius) + 4px)" />
                        <RadiusExample size="2xl" label="2X Large" value="calc(var(--radius) + 8px)" />
                        <RadiusExample size="3xl" label="3X Large" value="calc(var(--radius) + 12px)" />
                        <RadiusExample size="4xl" label="4X Large" value="calc(var(--radius) + 16px)" />
                        <RadiusExample size="full" label="Full" value="9999px" />
                    </div>
                </section>

                {/* Shadows Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Shadows</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <ShadowExample shadow="shadow-sm" label="Small" />
                        <ShadowExample shadow="shadow" label="Default" />
                        <ShadowExample shadow="shadow-md" label="Medium" />
                        <ShadowExample shadow="shadow-lg" label="Large" />
                        <ShadowExample shadow="shadow-xl" label="Extra Large" />
                        <ShadowExample shadow="shadow-2xl" label="2X Large" />
                    </div>
                </section>

                {/* Spacing Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Spacing Scale</h2>

                    <div className="space-y-2 bg-card p-6 rounded-lg border">
                        {[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64].map((size) => (
                            <div key={size} className="flex items-center gap-4">
                                <div className="w-16 text-sm text-muted-foreground font-mono">{size * 4}px</div>
                                <div className="h-8 bg-primary" style={{ width: `${size * 4}px` }}></div>
                                <div className="text-sm text-muted-foreground font-mono">space-{size}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </StyleguideLayout>
    );
}

// Helper Components
function ColorSwatch({
    color,
    label,
    variable,
    description
}: {
    color: string;
    label: string;
    variable: string;
    description?: string;
}) {
    return (
        <div className="space-y-2">
            <div className={`w-full h-24 rounded-lg ${color} border border-border shadow-sm`}></div>
            <div>
                <p className="font-semibold text-sm">{label}</p>
                <p className="font-mono text-xs text-muted-foreground">{variable}</p>
                {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
            </div>
        </div>
    );
}

function RadiusExample({
    size,
    label,
    value
}: {
    size: string;
    label: string;
    value: string;
}) {
    return (
        <div className="space-y-2">
            <div
                className={`w-full h-24 bg-primary rounded-${size} border border-border`}
            ></div>
            <div>
                <p className="font-semibold text-sm">{label}</p>
                <p className="font-mono text-xs text-muted-foreground">{value}</p>
            </div>
        </div>
    );
}

function ShadowExample({
    shadow,
    label
}: {
    shadow: string;
    label: string;
}) {
    return (
        <div className="space-y-2">
            <div className={`w-full h-24 bg-card rounded-lg ${shadow} border border-border`}></div>
            <div>
                <p className="font-semibold text-sm">{label}</p>
                <p className="font-mono text-xs text-muted-foreground">{shadow}</p>
            </div>
        </div>
    );
}
