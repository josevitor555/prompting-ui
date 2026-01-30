"use client"

import StyleguideLayout from './StyleguideLayout';
import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardAction, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardShowcase() {
  return (
    <StyleguideLayout currentPage="/styleguide/components/card">
      <div className="p-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Card</h1>
          <p className="text-muted-foreground text-lg">
            A flexible container for grouping related content with consistent styling and layout.
          </p>
        </div>

        {/* Import Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm font-mono overflow-x-auto">
              {`import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardAction, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card"`}
            </pre>
          </div>
        </section>

        {/* Basic Card */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Basic Card</h2>
          <p className="text-muted-foreground mb-6">
            A simple card with header, content, and footer sections.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
                <CardDescription>Key metrics and project status</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This project is currently in development phase with 75% completion rate.
                  Expected delivery date is in 2 weeks.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Details</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Team Members</span>
                  <span className="text-sm bg-secondary px-2 py-1 rounded">4 Active</span>
                </CardTitle>
                <CardDescription>Current team composition</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>John Doe</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">Frontend</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Jane Smith</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">Backend</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <pre className="text-sm font-mono overflow-x-auto">
              {`<Card>
  <CardHeader>
    <CardTitle>Project Overview</CardTitle>
    <CardDescription>Key metrics and project status</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This project is currently in development phase...</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">View Details</Button>
  </CardFooter>
</Card>`}
            </pre>
          </div>
        </section>

        {/* Card with Action */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Card with Action</h2>
          <p className="text-muted-foreground mb-6">
            Cards can include action elements in the header using CardAction component.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Last 24 hours</CardDescription>
                <CardAction>
                  <Button size="sm" variant="outline">Refresh</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Deployment successful</p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">New user registered</p>
                      <p className="text-xs text-muted-foreground">15 minutes ago</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
                <CardAction>
                  <Button size="sm">Add Task</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-3">
                    <p className="font-medium">Q1 Report</p>
                    <p className="text-sm text-muted-foreground">Due tomorrow</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-3">
                    <p className="font-medium">Client Presentation</p>
                    <p className="text-sm text-muted-foreground">Due in 3 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Card Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Card Variants</h2>
          <p className="text-muted-foreground mb-6">
            Different visual styles and layouts for various use cases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-dashed border-border">
              <CardHeader>
                <CardTitle>Dashed Border</CardTitle>
                <CardDescription>For draft or temporary content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  This card uses a dashed border to indicate it's a draft or placeholder content.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardHeader>
                <CardTitle>Muted Background</CardTitle>
                <CardDescription>For secondary information</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Cards with muted backgrounds work well for supporting content.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Elevated Shadow</CardTitle>
                <CardDescription>For important content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Enhanced shadows help important cards stand out from the page.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Content-only Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Content-only Cards</h2>
          <p className="text-muted-foreground mb-6">
            Cards can be used with just content, without header or footer sections.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">142</p>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">89%</p>
                    <p className="text-sm text-muted-foreground">Uptime</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    🔔
                  </div>
                  <div>
                    <h3 className="font-semibold">Notifications Enabled</h3>
                    <p className="text-sm text-muted-foreground">You'll receive updates</p>
                  </div>
                </div>
                <Button className="w-full">Manage Settings</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Complex Layouts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Complex Layouts</h2>
          <p className="text-muted-foreground mb-6">
            Combining multiple cards and components for rich layouts.
          </p>
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Project Dashboard</CardTitle>
              <CardDescription>Comprehensive project overview</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6 border-r">
                  <h4 className="font-semibold mb-4">Progress</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Frontend</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Backend</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-r">
                  <h4 className="font-semibold mb-4">Team Status</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">All systems operational</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">2 pending reviews</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm">4 team members online</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold mb-4">Recent Activity</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Feature deployed to staging</li>
                    <li>• Code review completed</li>
                    <li>• New user joined team</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t justify-between">
              <Button variant="outline">Export Report</Button>
              <Button>View Full Dashboard</Button>
            </CardFooter>
          </Card>
        </section>

        {/* Props Documentation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Component Props</h2>
          <div className="bg-card p-6 rounded-lg border space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Card</h3>
              <p className="text-muted-foreground text-sm mb-2">
                The main card container component.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
                <li><code className="bg-muted px-1 rounded">children</code> - Card content (CardHeader, CardContent, CardFooter)</li>
                <li><code className="bg-muted px-1 rounded">...props</code> - All standard div attributes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">CardHeader</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Container for card title, description, and actions.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
                <li>Supports CardTitle, CardDescription, and CardAction as children</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">CardTitle</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Main heading for the card.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
                <li>Typically contains the main card title text</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">CardDescription</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Supporting text that describes the card content.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
                <li>Usually appears below the CardTitle</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">CardAction</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Container for action buttons in the card header.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
                <li>Automatically positioned in the top-right of CardHeader</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">CardContent</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Main content area of the card.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
                <li>Contains the primary card content</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">CardFooter</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Bottom section for actions or additional information.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
                <li>Typically contains buttons or supplementary information</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Usage Guidelines</h2>
          <div className="bg-card p-6 rounded-lg border space-y-4">
            <div>
              <h3 className="font-semibold mb-2">When to Use Cards</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Grouping related content and actions</li>
                <li>• Creating visual separation between content sections</li>
                <li>• Displaying dashboard widgets or summary information</li>
                <li>• Presenting forms or data entry interfaces</li>
                <li>• Showcasing products, articles, or featured content</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Best Practices</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Keep card content focused and concise</li>
                <li>• Use consistent card heights when displaying multiple cards in a grid</li>
                <li>• Include clear titles and descriptions</li>
                <li>• Place primary actions in the footer</li>
                <li>• Use CardAction for secondary header actions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Accessibility</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Ensure sufficient color contrast for text</li>
                <li>• Use semantic HTML structure</li>
                <li>• Provide descriptive titles for screen readers</li>
                <li>• Make interactive elements keyboard accessible</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </StyleguideLayout>
  );
}