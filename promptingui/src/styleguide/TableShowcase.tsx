import StyleguideLayout from './StyleguideLayout';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default function TableShowcase() {
    return (
        <StyleguideLayout currentPage="/styleguide/components/table">
            <div className="p-8 max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Table</h1>
                    <p className="text-muted-foreground text-lg">
                        A responsive table component for displaying tabular data with support for headers, footers, and captions.
                    </p>
                </div>

                {/* Import Statement */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Import</h2>
                    <div className="bg-muted p-4 rounded-lg">
                        <pre className="text-sm font-mono">
                            {`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"`}
                        </pre>
                    </div>
                </section>

                {/* Basic Usage */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                    <p className="text-muted-foreground mb-6">
                        A simple table with headers and data rows.
                    </p>
                    <div className="bg-card p-6 rounded-lg border">
                        <Table>
                            <TableCaption>A list of recent transactions.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>Asset</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">TX001</TableCell>
                                    <TableCell>Bitcoin</TableCell>
                                    <TableCell>Buy</TableCell>
                                    <TableCell className="text-right">$2,500.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">TX002</TableCell>
                                    <TableCell>Ethereum</TableCell>
                                    <TableCell>Sell</TableCell>
                                    <TableCell className="text-right">$1,800.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">TX003</TableCell>
                                    <TableCell>Cardano</TableCell>
                                    <TableCell>Buy</TableCell>
                                    <TableCell className="text-right">$450.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div className="bg-muted p-4 rounded-lg mt-4">
                        <pre className="text-sm font-mono overflow-x-auto">
                            {`<Table>
  <TableCaption>A list of recent transactions.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">ID</TableHead>
      <TableHead>Asset</TableHead>
      <TableHead>Type</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">TX001</TableCell>
      <TableCell>Bitcoin</TableCell>
      <TableCell>Buy</TableCell>
      <TableCell className="text-right">$2,500.00</TableCell>
    </TableRow>
    {/* More rows... */}
  </TableBody>
</Table>`}
                        </pre>
                    </div>
                </section>

                {/* With Footer */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Table with Footer</h2>
                    <p className="text-muted-foreground mb-6">
                        Add a footer row to display totals or summary information.
                    </p>
                    <div className="bg-card p-6 rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.invoice}>
                                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                        <TableCell>
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.paymentStatus)}`}>
                                                {invoice.paymentStatus}
                                            </span>
                                        </TableCell>
                                        <TableCell>{invoice.paymentMethod}</TableCell>
                                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell className="text-right font-bold">$2,250.00</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                </section>

                {/* Styled Rows */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Styled Rows</h2>
                    <p className="text-muted-foreground mb-6">
                        Customize row appearance with conditional styling.
                    </p>
                    <div className="bg-card p-6 rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Coin</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>24h Change</TableHead>
                                    <TableHead className="text-right">Market Cap</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cryptoData.map((crypto) => (
                                    <TableRow key={crypto.coin}>
                                        <TableCell className="font-medium">{crypto.coin}</TableCell>
                                        <TableCell>{crypto.price}</TableCell>
                                        <TableCell>
                                            <span className={crypto.change.startsWith('+') ? 'text-success' : 'text-destructive'}>
                                                {crypto.change}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">{crypto.marketCap}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </section>

                {/* Compact Table */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Compact Table</h2>
                    <p className="text-muted-foreground mb-6">
                        A more compact table with reduced padding.
                    </p>
                    <div className="bg-card p-6 rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="h-8 px-2">Rank</TableHead>
                                    <TableHead className="h-8 px-2">Name</TableHead>
                                    <TableHead className="h-8 px-2">Symbol</TableHead>
                                    <TableHead className="h-8 px-2 text-right">Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="p-2">1</TableCell>
                                    <TableCell className="p-2">Bitcoin</TableCell>
                                    <TableCell className="p-2">BTC</TableCell>
                                    <TableCell className="p-2 text-right">$43,250</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="p-2">2</TableCell>
                                    <TableCell className="p-2">Ethereum</TableCell>
                                    <TableCell className="p-2">ETH</TableCell>
                                    <TableCell className="p-2 text-right">$2,280</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="p-2">3</TableCell>
                                    <TableCell className="p-2">Cardano</TableCell>
                                    <TableCell className="p-2">ADA</TableCell>
                                    <TableCell className="p-2 text-right">$0.52</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </section>

                {/* Props Documentation */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Component Props</h2>
                    <div className="bg-card p-6 rounded-lg border overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Component</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Props</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Table</TableCell>
                                    <TableCell>The root table container with overflow handling</TableCell>
                                    <TableCell className="font-mono text-sm">React.ComponentProps&lt;'table'&gt;</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">TableHeader</TableCell>
                                    <TableCell>Table header section (thead)</TableCell>
                                    <TableCell className="font-mono text-sm">React.ComponentProps&lt;'thead'&gt;</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">TableBody</TableCell>
                                    <TableCell>Table body section (tbody)</TableCell>
                                    <TableCell className="font-mono text-sm">React.ComponentProps&lt;'tbody'&gt;</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">TableFooter</TableCell>
                                    <TableCell>Table footer section (tfoot)</TableCell>
                                    <TableCell className="font-mono text-sm">React.ComponentProps&lt;'tfoot'&gt;</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">TableRow</TableCell>
                                    <TableCell>Table row with hover effects</TableCell>
                                    <TableCell className="font-mono text-sm">React.ComponentProps&lt;'tr'&gt;</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">TableHead</TableCell>
                                    <TableCell>Table header cell (th)</TableCell>
                                    <TableCell className="font-mono text-sm">React.ComponentProps&lt;'th'&gt;</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">TableCell</TableCell>
                                    <TableCell>Table data cell (td)</TableCell>
                                    <TableCell className="font-mono text-sm">React.ComponentProps&lt;'td'&gt;</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">TableCaption</TableCell>
                                    <TableCell>Table caption for accessibility</TableCell>
                                    <TableCell className="font-mono text-sm">React.ComponentProps&lt;'caption'&gt;</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </section>

                {/* Accessibility */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
                    <div className="bg-card p-6 rounded-lg border space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">Semantic HTML</h3>
                            <p className="text-muted-foreground text-sm">
                                Uses native HTML table elements (&lt;table&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;) for proper screen reader support.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Table Caption</h3>
                            <p className="text-muted-foreground text-sm">
                                Use TableCaption to provide a description of the table's content for screen readers.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
                            <p className="text-muted-foreground text-sm">
                                Table content is naturally keyboard accessible. For interactive elements within cells, ensure they are focusable.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">Responsive Design</h3>
                            <p className="text-muted-foreground text-sm">
                                The table container includes horizontal scrolling on smaller screens to prevent content overflow.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </StyleguideLayout>
    );
}

// Sample Data
const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];

const cryptoData = [
    { coin: "Bitcoin", price: "$43,250", change: "+2.5%", marketCap: "$845B" },
    { coin: "Ethereum", price: "$2,280", change: "+1.8%", marketCap: "$274B" },
    { coin: "Cardano", price: "$0.52", change: "-0.3%", marketCap: "$18.2B" },
    { coin: "Solana", price: "$98.50", change: "+5.2%", marketCap: "$42.1B" },
    { coin: "Polkadot", price: "$7.25", change: "-1.2%", marketCap: "$9.8B" },
];

function getStatusColor(status: string) {
    switch (status) {
        case "Paid":
            return "bg-success/10 text-success";
        case "Pending":
            return "bg-warning/10 text-warning";
        case "Unpaid":
            return "bg-destructive/10 text-destructive";
        default:
            return "bg-muted text-muted-foreground";
    }
}
