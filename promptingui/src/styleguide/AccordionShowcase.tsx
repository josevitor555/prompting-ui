"use client"

import StyleguideLayout from './StyleguideLayout';
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccordionShowcase() {
  return (
    <StyleguideLayout currentPage="/styleguide/components/accordion">
      <div className="p-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Accordion</h1>
          <p className="text-muted-foreground text-lg">
            A vertically stacked set of interactive headings that each reveal an associated section of content.
          </p>
        </div>

        {/* Import Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm font-mono overflow-x-auto">
              {`import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/accordion"`}
            </pre>
          </div>
        </section>

        {/* Basic Accordion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Basic Accordion</h2>
          <p className="text-muted-foreground mb-6">
            A simple accordion with multiple items that can be expanded independently.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>FAQ Section</CardTitle>
              <CardDescription>Expandable questions and answers</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is React?</AccordionTrigger>
                  <AccordionContent>
                    React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Why use TypeScript?</AccordionTrigger>
                  <AccordionContent>
                    TypeScript adds static typing to JavaScript, helping catch errors early and providing better developer experience with autocompletion and refactoring tools.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
                  <AccordionContent>
                    shadcn/ui is a collection of reusable components built with Radix UI and Tailwind CSS, providing accessible and customizable UI components for React applications.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <pre className="text-sm font-mono overflow-x-auto">
              {`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is React?</AccordionTrigger>
    <AccordionContent>
      React is a JavaScript library for building user interfaces...
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Why use TypeScript?</AccordionTrigger>
    <AccordionContent>
      TypeScript adds static typing to JavaScript...
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
            </pre>
          </div>
        </section>

        {/* Multiple Open Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Multiple Open Items</h2>
          <p className="text-muted-foreground mb-6">
            Allow multiple accordion items to be open simultaneously by using type="multiple".
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Features List</CardTitle>
              <CardDescription>Expand multiple sections at once</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="feature-1">
                  <AccordionTrigger>Responsive Design</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Our application works seamlessly across all devices:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Mobile phones and tablets</li>
                      <li>Desktop computers</li>
                      <li>Laptops and notebooks</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="feature-2">
                  <AccordionTrigger>Dark Mode</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Enjoy comfortable viewing in any lighting condition:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Automatic theme detection</li>
                      <li>Manual toggle option</li>
                      <li>System preference synchronization</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="feature-3">
                  <AccordionTrigger>Accessibility</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Built with accessibility in mind:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Keyboard navigation support</li>
                      <li>Screen reader compatibility</li>
                      <li>Proper ARIA attributes</li>
                      <li>Focus management</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Disabled Item */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">With Disabled Items</h2>
          <p className="text-muted-foreground mb-6">
            Some accordion items can be disabled to prevent user interaction.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>User Permissions</CardTitle>
              <CardDescription>Some settings may be restricted based on your role</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="permission-1">
                  <AccordionTrigger>Profile Settings</AccordionTrigger>
                  <AccordionContent>
                    Update your personal information, profile picture, and contact details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="permission-2">
                  <AccordionTrigger disabled className="opacity-50 cursor-not-allowed">
                    Billing Information
                  </AccordionTrigger>
                  <AccordionContent>
                    Manage payment methods and view billing history. (Requires admin permissions)
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="permission-3">
                  <AccordionTrigger>Notification Preferences</AccordionTrigger>
                  <AccordionContent>
                    Customize how and when you receive notifications from our platform.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Custom Styling */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Custom Styling</h2>
          <p className="text-muted-foreground mb-6">
            Customize the appearance of accordion components with additional CSS classes.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Styled Accordion</CardTitle>
              <CardDescription>Custom colors and spacing</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="styled-1" className="border rounded-lg mb-2">
                  <AccordionTrigger className="px-4 hover:bg-muted">
                    <span className="font-semibold text-primary">Primary Topic</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <p className="text-muted-foreground">
                      This accordion item has custom styling with primary colors and additional padding.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="styled-2" className="border rounded-lg mb-2">
                  <AccordionTrigger className="px-4 hover:bg-muted">
                    <span className="font-semibold text-secondary">Secondary Topic</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <p className="text-muted-foreground">
                      Another styled accordion item with secondary theme colors.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Props Documentation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Component Props</h2>
          <div className="bg-card p-6 rounded-lg border space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Accordion</h3>
              <p className="text-muted-foreground text-sm mb-2">
                The main accordion container component.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">type</code> - "single" | "multiple" (default: "single")</li>
                <li><code className="bg-muted px-1 rounded">collapsible</code> - Allow closing all items when type="single"</li>
                <li><code className="bg-muted px-1 rounded">disabled</code> - Disable the entire accordion</li>
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">AccordionItem</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Individual accordion item container.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">value</code> - Unique identifier for the item (required)</li>
                <li><code className="bg-muted px-1 rounded">disabled</code> - Disable this specific item</li>
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">AccordionTrigger</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Clickable header that toggles the accordion content.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">disabled</code> - Disable the trigger</li>
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
                <li><code className="bg-muted px-1 rounded">children</code> - Content to display in the trigger</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">AccordionContent</h3>
              <p className="text-muted-foreground text-sm mb-2">
                The expandable content area.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">className</code> - Additional CSS classes</li>
                <li><code className="bg-muted px-1 rounded">children</code> - Content to display when expanded</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Accessibility</h2>
          <div className="bg-card p-6 rounded-lg border space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
              <p className="text-muted-foreground text-sm">
                Accordion components are fully keyboard accessible:
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• <kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> to navigate between triggers</li>
                <li>• <kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> or <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd> to toggle items</li>
                <li>• Arrow keys navigate between items in single mode</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Screen Reader Support</h3>
              <p className="text-muted-foreground text-sm">
                Proper ARIA attributes ensure compatibility with screen readers:
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• <code>aria-expanded</code> indicates open/closed state</li>
                <li>• <code>aria-controls</code> links triggers to content</li>
                <li>• Semantic HTML structure for proper announcement</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Focus Management</h3>
              <p className="text-muted-foreground text-sm">
                Visual focus indicators and proper focus handling:
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Clear focus rings around active triggers</li>
                <li>• Focus moves appropriately when items open/close</li>
                <li>• Disabled items properly handle focus events</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </StyleguideLayout>
  );
}