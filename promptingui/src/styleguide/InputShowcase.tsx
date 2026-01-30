"use client"

import StyleguideLayout from './StyleguideLayout';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from 'react';

export default function InputShowcase() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyleguideLayout currentPage="/styleguide/components/input">
      <div className="p-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Input</h1>
          <p className="text-muted-foreground text-lg">
            Displays a form input field for user data entry.
          </p>
        </div>

        {/* Import Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <div className="bg-muted p-4 rounded-lg">
            <pre 
              className="text-sm font-mono overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: 'import { Input } from "@/components/ui/input"' }}
            />
          </div>
        </section>

        {/* Basic Input */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Basic Input</h2>
          <p className="text-muted-foreground mb-6">
            Simple text input field with label.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <Label htmlFor="basic-input" className="block mb-2">Name</Label>
              <Input 
                id="basic-input"
                placeholder="Enter your name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-2">
                Current value: {value || "empty"}
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <Label htmlFor="disabled-input" className="block mb-2">Disabled Input</Label>
              <Input 
                id="disabled-input"
                placeholder="This input is disabled"
                disabled
              />
            </div>
          </div>
        </section>

        {/* Input Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Input Types</h2>
          <p className="text-muted-foreground mb-6">
            Different input types for various data entry needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <Label htmlFor="email-input" className="block mb-2">Email</Label>
              <Input 
                id="email-input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <Label htmlFor="password-input" className="block mb-2">Password</Label>
              <Input 
                id="password-input"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <Label htmlFor="number-input" className="block mb-2">Number</Label>
              <Input 
                id="number-input"
                type="number"
                placeholder="Enter a number"
              />
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <Label htmlFor="tel-input" className="block mb-2">Phone</Label>
              <Input 
                id="tel-input"
                type="tel"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>
        </section>

        {/* States */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">States</h2>
          <p className="text-muted-foreground mb-6">
            Different states to provide feedback to users.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <Label htmlFor="valid-input" className="block mb-2">Valid State</Label>
              <Input 
                id="valid-input"
                placeholder="Valid input"
                aria-invalid="false"
              />
              <p className="text-sm text-green-600 mt-2">✓ This input is valid</p>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <Label htmlFor="invalid-input" className="block mb-2 text-destructive">Invalid Input</Label>
              <Input 
                id="invalid-input"
                placeholder="Invalid input"
                aria-invalid="true"
              />
              <p className="text-sm text-destructive mt-2">✗ Please enter a valid value</p>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Different sizes for various contexts.
          </p>
          
          <div className="bg-card p-6 rounded-lg border space-y-4">
            <div>
              <Label htmlFor="large-input" className="block mb-2">Large</Label>
              <Input 
                id="large-input"
                placeholder="Large input"
                className="h-12 text-lg px-4"
              />
            </div>
            
            <div>
              <Label htmlFor="default-input" className="block mb-2">Default</Label>
              <Input 
                id="default-input"
                placeholder="Default input"
              />
            </div>
            
            <div>
              <Label htmlFor="small-input" className="block mb-2">Small</Label>
              <Input 
                id="small-input"
                placeholder="Small input"
                className="h-7 text-sm px-2"
              />
            </div>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">With Icons</h2>
          <p className="text-muted-foreground mb-6">
            Inputs with leading or trailing icons.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <Label htmlFor="search-input" className="block mb-2">Search</Label>
              <div className="relative">
                <Input 
                  id="search-input"
                  placeholder="Search..."
                  className="pl-10"
                />
                <svg 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <Label htmlFor="email-icon-input" className="block mb-2">Email with Icon</Label>
              <div className="relative">
                <Input 
                  id="email-icon-input"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10"
                />
                <svg 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Form Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Form Example</h2>
          <p className="text-muted-foreground mb-6">
            Complete form using multiple input components.
          </p>
          
          <div className="bg-card p-6 rounded-lg border">
            <form className="space-y-4">
              <div>
                <Label htmlFor="full-name" className="block mb-2">Full Name</Label>
                <Input 
                  id="full-name"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <Label htmlFor="email-form" className="block mb-2">Email Address</Label>
                <Input 
                  id="email-form"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone-form" className="block mb-2">Phone Number</Label>
                <Input 
                  id="phone-form"
                  type="tel"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div>
                <Label htmlFor="website" className="block mb-2">Website</Label>
                <Input 
                  id="website"
                  type="url"
                  placeholder="https://example.com"
                />
              </div>
              
              <button 
                type="submit"
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
              >
                Submit Form
              </button>
            </form>
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
                    <td className="py-3 px-4">type</td>
                    <td className="py-3 px-4">string</td>
                    <td className="py-3 px-4">"text"</td>
                    <td className="py-3 px-4">Input type (text, email, password, number, etc.)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">placeholder</td>
                    <td className="py-3 px-4">string</td>
                    <td className="py-3 px-4">undefined</td>
                    <td className="py-3 px-4">Placeholder text when input is empty</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">disabled</td>
                    <td className="py-3 px-4">boolean</td>
                    <td className="py-3 px-4">false</td>
                    <td className="py-3 px-4">Disable the input field</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">value</td>
                    <td className="py-3 px-4">string</td>
                    <td className="py-3 px-4">undefined</td>
                    <td className="py-3 px-4">Controlled input value</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">onChange</td>
                    <td className="py-3 px-4">function</td>
                    <td className="py-3 px-4">undefined</td>
                    <td className="py-3 px-4">Event handler for value changes</td>
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
              <h3 className="font-semibold mb-2">Labels</h3>
              <p className="text-muted-foreground text-sm">
                Always associate inputs with labels using htmlFor/id attributes for proper screen reader support.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Error States</h3>
              <p className="text-muted-foreground text-sm">
                Use aria-invalid="true" and provide error messages for invalid inputs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
              <p className="text-muted-foreground text-sm">
                Inputs are fully keyboard accessible. Users can tab to focus and type using standard keyboard interactions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Placeholder Text</h3>
              <p className="text-muted-foreground text-sm">
                Placeholder text should supplement, not replace, proper labeling. It disappears when users start typing.
              </p>
            </div>
          </div>
        </section>
      </div>
    </StyleguideLayout>
  );
}