"use client"

import StyleguideLayout from './StyleguideLayout';
import * as SidebarComponents from "@/components/ui/sidebar";
import * as CardComponents from "@/components/ui/card";
import {
  HomeIcon,
  InboxIcon,
  CalendarIcon,
  SearchIcon,
  SettingsIcon,
  PlusIcon,
  MoreHorizontalIcon,
  FileIcon,
  FolderIcon,
  UserIcon,
  BellIcon,
  HelpCircleIcon,
  BarChartIcon,
  UsersIcon,
  MailIcon
} from "lucide-react";
import { useState } from 'react';

const {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar
} = SidebarComponents;

const {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} = CardComponents;

export default function SidebarShowcase() {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [open4, setOpen4] = useState(true);

  return (
    <StyleguideLayout currentPage="/styleguide/components/sidebar">
      <div className="p-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Sidebar</h1>
          <p className="text-muted-foreground text-lg">
            A collapsible sidebar component with support for navigation menus, submenus, and various layouts.
          </p>
        </div>

        {/* Import Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Import</h2>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm font-mono overflow-x-auto">
              {`import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar"`}
            </pre>
          </div>
        </section>

        {/* Basic Sidebar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Basic Sidebar</h2>
          <p className="text-muted-foreground mb-6">
            A simple sidebar with navigation items grouped by section.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Basic Navigation</CardTitle>
              <CardDescription>Simple sidebar with menu items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] border rounded-lg overflow-hidden">
                <SidebarProvider open={open1} onOpenChange={setOpen1}>
                  <Sidebar>
                    <SidebarHeader>
                      <h2 className="px-2 text-lg font-semibold">My App</h2>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Application</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            {basicMenuItems.map((item) => (
                              <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>
                    </SidebarContent>
                    <SidebarRail />
                  </Sidebar>
                  <SidebarInset>
                    <header className="flex h-12 items-center gap-2 border-b px-4">
                      <SidebarTrigger />
                      <h1 className="text-sm font-semibold">Dashboard</h1>
                    </header>
                    <div className="p-4">
                      <p className="text-muted-foreground text-sm">
                        Click the toggle button to collapse/expand the sidebar.
                      </p>
                    </div>
                  </SidebarInset>
                </SidebarProvider>
              </div>
            </CardContent>
          </Card>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <pre className="text-sm font-mono overflow-x-auto">
              {`<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <h2 className="px-2 text-lg font-semibold">My App</h2>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <HomeIcon />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>
    <header className="flex h-12 items-center gap-2 border-b px-4">
      <SidebarTrigger />
    </header>
  </SidebarInset>
</SidebarProvider>`}
            </pre>
          </div>
        </section>

        {/* Sidebar with Submenus */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sidebar with Submenus</h2>
          <p className="text-muted-foreground mb-6">
            Organize navigation with collapsible submenus for better hierarchy.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Nested Navigation</CardTitle>
              <CardDescription>Sidebar with expandable submenus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] border rounded-lg overflow-hidden">
                <SidebarProvider open={open2} onOpenChange={setOpen2}>
                  <Sidebar>
                    <SidebarHeader>
                      <h2 className="px-2 text-lg font-semibold">Project Manager</h2>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Projects</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <FolderIcon />
                                <span>Website Redesign</span>
                              </SidebarMenuButton>
                              <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                  <SidebarMenuSubButton>
                                    <FileIcon />
                                    <span>Overview</span>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                  <SidebarMenuSubButton>
                                    <FileIcon />
                                    <span>Tasks</span>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                  <SidebarMenuSubButton>
                                    <FileIcon />
                                    <span>Files</span>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              </SidebarMenuSub>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <FolderIcon />
                                <span>Mobile App</span>
                              </SidebarMenuButton>
                              <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                  <SidebarMenuSubButton>
                                    <FileIcon />
                                    <span>Overview</span>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                  <SidebarMenuSubButton>
                                    <FileIcon />
                                    <span>Development</span>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              </SidebarMenuSub>
                            </SidebarMenuItem>
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>
                    </SidebarContent>
                    <SidebarRail />
                  </Sidebar>
                  <SidebarInset>
                    <header className="flex h-12 items-center gap-2 border-b px-4">
                      <SidebarTrigger />
                      <h1 className="text-sm font-semibold">Projects</h1>
                    </header>
                    <div className="p-4">
                      <p className="text-muted-foreground text-sm">
                        Submenus help organize related pages and actions.
                      </p>
                    </div>
                  </SidebarInset>
                </SidebarProvider>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sidebar with Actions and Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sidebar with Actions and Badges</h2>
          <p className="text-muted-foreground mb-6">
            Add interactive elements like action buttons and notification badges.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Enhanced Navigation</CardTitle>
              <CardDescription>Sidebar with badges and action buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] border rounded-lg overflow-hidden">
                <SidebarProvider open={open3} onOpenChange={setOpen3}>
                  <Sidebar>
                    <SidebarHeader>
                      <h2 className="px-2 text-lg font-semibold">Notifications</h2>
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Messages</SidebarGroupLabel>
                        <SidebarGroupAction title="Add message">
                          <PlusIcon />
                        </SidebarGroupAction>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <InboxIcon />
                                <span>Inbox</span>
                              </SidebarMenuButton>
                              <SidebarMenuBadge>12</SidebarMenuBadge>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <BellIcon />
                                <span>Notifications</span>
                              </SidebarMenuButton>
                              <SidebarMenuBadge>5</SidebarMenuBadge>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <UserIcon />
                                <span>Mentions</span>
                              </SidebarMenuButton>
                              <SidebarMenuBadge>3</SidebarMenuBadge>
                            </SidebarMenuItem>
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>
                    </SidebarContent>
                    <SidebarRail />
                  </Sidebar>
                  <SidebarInset>
                    <header className="flex h-12 items-center gap-2 border-b px-4">
                      <SidebarTrigger />
                      <h1 className="text-sm font-semibold">Messages</h1>
                    </header>
                    <div className="p-4">
                      <p className="text-muted-foreground text-sm">
                        Badges show notification counts, and group actions provide quick access to common tasks.
                      </p>
                    </div>
                  </SidebarInset>
                </SidebarProvider>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sidebar with Search and Footer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sidebar with Search and Footer</h2>
          <p className="text-muted-foreground mb-6">
            Complete sidebar layout with search input and footer section.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Full-Featured Sidebar</CardTitle>
              <CardDescription>Sidebar with all components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[600px] border rounded-lg overflow-hidden">
                <SidebarProvider open={open4} onOpenChange={setOpen4}>
                  <Sidebar>
                    <SidebarHeader>
                      <h2 className="px-2 text-lg font-semibold">Dashboard</h2>
                      <SidebarInput placeholder="Search..." />
                    </SidebarHeader>
                    <SidebarContent>
                      <SidebarGroup>
                        <SidebarGroupLabel>Main</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            {basicMenuItems.map((item) => (
                              <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton isActive={item.title === "Home"}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>
                      <SidebarSeparator />
                      <SidebarGroup>
                        <SidebarGroupLabel>Settings</SidebarGroupLabel>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <SettingsIcon />
                                <span>Preferences</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                              <SidebarMenuButton>
                                <HelpCircleIcon />
                                <span>Help</span>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </SidebarGroup>
                    </SidebarContent>
                    <SidebarFooter>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <UserIcon />
                            <span>John Doe</span>
                          </SidebarMenuButton>
                          <SidebarMenuAction showOnHover>
                            <MoreHorizontalIcon />
                          </SidebarMenuAction>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarFooter>
                    <SidebarRail />
                  </Sidebar>
                  <SidebarInset>
                    <header className="flex h-12 items-center gap-2 border-b px-4">
                      <SidebarTrigger />
                      <h1 className="text-sm font-semibold">Home</h1>
                    </header>
                    <div className="p-4">
                      <p className="text-muted-foreground text-sm">
                        A complete sidebar with header search, multiple sections, and a user footer.
                      </p>
                    </div>
                  </SidebarInset>
                </SidebarProvider>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sidebar Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sidebar Variants</h2>
          <p className="text-muted-foreground mb-6">
            Different visual styles for the sidebar component.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Default</CardTitle>
                <CardDescription>Standard sidebar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] border rounded-lg overflow-hidden">
                  <SidebarProvider defaultOpen={true}>
                    <Sidebar variant="sidebar">
                      <SidebarContent>
                        <SidebarGroup>
                          <SidebarGroupLabel>Menu</SidebarGroupLabel>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <HomeIcon />
                                  <span>Home</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                      </SidebarContent>
                    </Sidebar>
                    <SidebarInset>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">Default variant</p>
                      </div>
                    </SidebarInset>
                  </SidebarProvider>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Floating</CardTitle>
                <CardDescription>Floating sidebar with shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] border rounded-lg overflow-hidden">
                  <SidebarProvider defaultOpen={true}>
                    <Sidebar variant="floating">
                      <SidebarContent>
                        <SidebarGroup>
                          <SidebarGroupLabel>Menu</SidebarGroupLabel>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <HomeIcon />
                                  <span>Home</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                      </SidebarContent>
                    </Sidebar>
                    <SidebarInset>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">Floating variant</p>
                      </div>
                    </SidebarInset>
                  </SidebarProvider>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Inset</CardTitle>
                <CardDescription>Inset sidebar with rounded content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] border rounded-lg overflow-hidden">
                  <SidebarProvider defaultOpen={true}>
                    <Sidebar variant="inset">
                      <SidebarContent>
                        <SidebarGroup>
                          <SidebarGroupLabel>Menu</SidebarGroupLabel>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <HomeIcon />
                                  <span>Home</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                      </SidebarContent>
                    </Sidebar>
                    <SidebarInset>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">Inset variant</p>
                      </div>
                    </SidebarInset>
                  </SidebarProvider>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Collapsible Modes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Collapsible Modes</h2>
          <p className="text-muted-foreground mb-6">
            Different ways the sidebar can collapse.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Offcanvas</CardTitle>
                <CardDescription>Sidebar slides off screen when collapsed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] border rounded-lg overflow-hidden">
                  <SidebarProvider defaultOpen={true}>
                    <Sidebar collapsible="offcanvas">
                      <SidebarContent>
                        <SidebarGroup>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <HomeIcon />
                                  <span>Home</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                      </SidebarContent>
                      <SidebarRail />
                    </Sidebar>
                    <SidebarInset>
                      <header className="flex h-12 items-center gap-2 border-b px-4">
                        <SidebarTrigger />
                      </header>
                    </SidebarInset>
                  </SidebarProvider>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Icon</CardTitle>
                <CardDescription>Sidebar collapses to icons only</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] border rounded-lg overflow-hidden">
                  <SidebarProvider defaultOpen={true}>
                    <Sidebar collapsible="icon">
                      <SidebarContent>
                        <SidebarGroup>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton tooltip="Home">
                                  <HomeIcon />
                                  <span>Home</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                              <SidebarMenuItem>
                                <SidebarMenuButton tooltip="Inbox">
                                  <InboxIcon />
                                  <span>Inbox</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                      </SidebarContent>
                      <SidebarRail />
                    </Sidebar>
                    <SidebarInset>
                      <header className="flex h-12 items-center gap-2 border-b px-4">
                        <SidebarTrigger />
                      </header>
                    </SidebarInset>
                  </SidebarProvider>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Props Documentation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Component Props</h2>
          <div className="bg-card p-6 rounded-lg border space-y-6">
            <div>
              <h3 className="font-semibold mb-2">SidebarProvider</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Root component that provides sidebar context.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">defaultOpen</code> - Initial open state (default: true)</li>
                <li><code className="bg-muted px-1 rounded">open</code> - Controlled open state</li>
                <li><code className="bg-muted px-1 rounded">onOpenChange</code> - Callback when open state changes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sidebar</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Main sidebar container component.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">side</code> - "left" | "right" (default: "left")</li>
                <li><code className="bg-muted px-1 rounded">variant</code> - "sidebar" | "floating" | "inset" (default: "sidebar")</li>
                <li><code className="bg-muted px-1 rounded">collapsible</code> - "offcanvas" | "icon" | "none" (default: "offcanvas")</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">SidebarMenuButton</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Interactive menu button component.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li><code className="bg-muted px-1 rounded">isActive</code> - Highlight as active item</li>
                <li><code className="bg-muted px-1 rounded">tooltip</code> - Tooltip text (shown when collapsed to icon)</li>
                <li><code className="bg-muted px-1 rounded">size</code> - "sm" | "default" | "lg"</li>
                <li><code className="bg-muted px-1 rounded">variant</code> - "default" | "outline"</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Keyboard Shortcuts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Keyboard Shortcuts</h2>
          <div className="bg-card p-6 rounded-lg border space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Toggle Sidebar</h3>
              <p className="text-muted-foreground text-sm">
                Press <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl</kbd> + <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">B</kbd> (or <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">⌘</kbd> + <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">B</kbd> on Mac) to toggle the sidebar.
              </p>
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
                All sidebar menu items are keyboard accessible. Use Tab to navigate between items and Enter/Space to activate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Screen Readers</h3>
              <p className="text-muted-foreground text-sm">
                The sidebar includes proper ARIA labels and roles for screen reader support. The SidebarTrigger button includes a screen reader-only label.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Focus Management</h3>
              <p className="text-muted-foreground text-sm">
                Focus is properly managed when the sidebar opens and closes, ensuring a smooth keyboard navigation experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mobile Support</h3>
              <p className="text-muted-foreground text-sm">
                On mobile devices, the sidebar automatically converts to a sheet/drawer for better touch interaction.
              </p>
            </div>
          </div>
        </section>
      </div>
    </StyleguideLayout>
  );
}

// Menu Items Data
const basicMenuItems = [
  { title: "Home", icon: HomeIcon },
  { title: "Inbox", icon: InboxIcon },
  { title: "Calendar", icon: CalendarIcon },
  { title: "Search", icon: SearchIcon },
  { title: "Settings", icon: SettingsIcon },
];