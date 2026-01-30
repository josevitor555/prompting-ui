"use client"

import StyleguideLayout from './StyleguideLayout';
import { Button } from "@/components/ui/button";
import { 
  DownloadIcon, 
  PlusIcon, 
  HeartIcon, 
  StarIcon,
  ArrowRightIcon,
  MailIcon,
  ShoppingCartIcon,
  PlayIcon,
  PauseIcon,
  SettingsIcon
} from "lucide-react";
import { useState } from 'react';

export default function ButtonShowcase() {
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <StyleguideLayout currentPage="/styleguide/components/button">
      <div className="p-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Button</h1>
          <p className="text-muted-foreground text-lg">
            Displays a button or a component that looks like a button.
          </p>
        </div>

        {/* Import Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <div className="bg-muted p-4 rounded-lg">
            <pre 
              className="text-sm font-mono overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: 'import { Button } from "@/components/ui/button"' }}
            />
          </div>
        </section>

        {/* Variants Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Variants</h2>
          <p className="text-muted-foreground mb-6">
            Buttons come in different variants to suit different purposes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Default Variant */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Default</h3>
              <div className="space-y-3 space-x-2">
                <Button variant="default">Default</Button>
                <Button variant="default" disabled>Disabled</Button>
                <Button variant="default" onClick={handleClick}>
                  {loading ? "Loading..." : "Click me"}
                </Button>
              </div>
            </div>

            {/* Destructive Variant */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Destructive</h3>
              <div className="space-y-3 space-x-2">
                <Button variant="destructive">Delete</Button>
                <Button variant="destructive" disabled>Delete</Button>
                <Button variant="destructive">
                  <TrashIcon className="mr-2 h-4 w-4" />
                  Delete Item
                </Button>
              </div>
            </div>

            {/* Outline Variant */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Outline</h3>
              <div className="space-y-3 space-x-2">
                <Button variant="outline">Outline</Button>
                <Button variant="outline" disabled>Outline</Button>
                <Button variant="outline">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>

            {/* Secondary Variant */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Secondary</h3>
              <div className="space-y-3 space-x-2">
                <Button variant="secondary">Secondary</Button>
                <Button variant="secondary" disabled>Secondary</Button>
                <Button variant="secondary">
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>

            {/* Ghost Variant */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Ghost</h3>
              <div className="space-y-3 space-x-2">
                <Button variant="ghost">Ghost</Button>
                <Button variant="ghost" disabled>Ghost</Button>
                <Button variant="ghost">
                  <HeartIcon className="mr-2 h-4 w-4" />
                  Like
                </Button>
              </div>
            </div>

            {/* Link Variant */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Link</h3>
              <div className="space-y-3 space-x-2">
                <Button variant="link">Link Button</Button>
                <Button variant="link" disabled>Link Disabled</Button>
                <Button variant="link">
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sizes Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Buttons come in different sizes to fit various contexts.
          </p>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex flex-wrap items-end gap-4">
              <Button size="lg">Large</Button>
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="xs">Extra Small</Button>
            </div>
            <div className="mt-6 flex flex-wrap items-end gap-4">
              <Button size="icon-lg">
                <SettingsIcon className="h-5 w-5" />
              </Button>
              <Button size="icon">
                <SettingsIcon className="h-4 w-4" />
              </Button>
              <Button size="icon-sm">
                <SettingsIcon className="h-4 w-4" />
              </Button>
              <Button size="icon-xs">
                <SettingsIcon className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Icon Buttons</h2>
          <p className="text-muted-foreground mb-6">
            Buttons with icons for common actions.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border text-center">
              <h3 className="font-semibold mb-4">Social Actions</h3>
              <div className="space-y-3 space-x-2">
                <Button variant="outline" size="icon">
                  <HeartIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <StarIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ShareIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border text-center">
              <h3 className="font-semibold mb-4">Media Controls</h3>
              <div className="space-y-3 space-x-2">
                <Button variant="secondary" size="icon">
                  <PlayIcon className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <PauseIcon className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <SkipForwardIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border text-center">
              <h3 className="font-semibold mb-4">Actions</h3>
              <div className="space-y-3 space-x-2">
                <Button size="icon">
                  <PlusIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ShoppingCartIcon className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon">
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border text-center">
              <h3 className="font-semibold mb-4">Communication</h3>
              <div className="space-y-3 space-x-2">
                <Button variant="outline" size="icon">
                  <MailIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <PhoneIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MessageCircleIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Interactive Demo</h2>
          <p className="text-muted-foreground mb-6">
            Try different combinations of variants and sizes.
          </p>
          
          <div className="bg-card p-6 rounded-lg border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Button Generator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Variant</label>
                    <select className="w-full p-2 border rounded">
                      <option>default</option>
                      <option>destructive</option>
                      <option>outline</option>
                      <option>secondary</option>
                      <option>ghost</option>
                      <option>link</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Size</label>
                    <select className="w-full p-2 border rounded">
                      <option>default</option>
                      <option>sm</option>
                      <option>lg</option>
                      <option>icon</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">With Icon</label>
                    <input type="checkbox" className="mr-2" />
                    <span>Add icon to button</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Preview</h3>
                <div className="flex items-center justify-center h-32">
                  <Button onClick={handleClick}>
                    {loading ? "Processing..." : `Clicked ${clickCount} times`}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Click the button to see loading state
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Form Actions</h3>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button className="flex-1">Submit</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Back</Button>
                  <Button className="flex-1">Continue</Button>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Card Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Add New Item
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Props</h2>
          <div className="bg-card p-6 rounded-lg border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Prop</th>
                    <th className="text-left py-3 px-4 font-semibold">Type</th>
                    <th className="text-left py-3 px-4 font-semibold">Default</th>
                    <th className="text-left py-3 px-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">variant</td>
                    <td className="py-3 px-4">"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"</td>
                    <td className="py-3 px-4">"default"</td>
                    <td className="py-3 px-4">Controls the button's visual style</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">size</td>
                    <td className="py-3 px-4">"default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | "xs" | "icon-xs"</td>
                    <td className="py-3 px-4">"default"</td>
                    <td className="py-3 px-4">Controls the button's size</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">asChild</td>
                    <td className="py-3 px-4">boolean</td>
                    <td className="py-3 px-4">false</td>
                    <td className="py-3 px-4">Change the button to a slot component</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">loading</td>
                    <td className="py-3 px-4">boolean</td>
                    <td className="py-3 px-4">false</td>
                    <td className="py-3 px-4">Show loading state</td>
                  </tr>
                </tbody>
              </table>
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
                Buttons are fully keyboard accessible. Users can navigate to buttons using Tab and activate them with Space or Enter.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Screen Readers</h3>
              <p className="text-muted-foreground text-sm">
                Buttons include proper ARIA attributes and semantic HTML. Icon-only buttons should include aria-label for screen readers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Focus States</h3>
              <p className="text-muted-foreground text-sm">
                Buttons have clear focus indicators that meet WCAG 2.1 contrast requirements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </StyleguideLayout>
  );
}

// Additional icons that might be needed
function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function SkipForwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 4 15 12 5 20 5 4" />
      <line x1="19" y1="5" x2="19" y2="19" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}