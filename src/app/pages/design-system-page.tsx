import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export function DesignSystemPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(id);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  // Design Tokens
  const colors = {
    primary: [
      { name: 'Primary', value: '#00f0ff', var: 'primary', usage: 'Main brand color, primary buttons, links' },
      { name: 'Primary Dark', value: '#00b8cc', var: 'primary-dark', usage: 'Hover states, pressed buttons' },
      { name: 'Primary Light', value: '#66f5ff', var: 'primary-light', usage: 'Backgrounds, subtle accents' },
    ],
    accent: [
      { name: 'Accent', value: '#b800ff', var: 'accent', usage: 'Secondary actions, highlights' },
      { name: 'Accent Green', value: '#39ff14', var: 'accent-green', usage: 'Success states, positive feedback' },
      { name: 'Accent Purple', value: '#9d4edd', var: 'accent-purple', usage: 'Special features, badges' },
    ],
    neutral: [
      { name: 'Background', value: '#0a0a0f', var: 'background', usage: 'Main background' },
      { name: 'Foreground', value: '#ffffff', var: 'foreground', usage: 'Primary text' },
      { name: 'Muted', value: '#1a1a24', var: 'muted', usage: 'Card backgrounds' },
      { name: 'Muted Foreground', value: '#a1a1aa', var: 'muted-foreground', usage: 'Secondary text' },
      { name: 'Border', value: '#27272a', var: 'border', usage: 'Borders, dividers' },
      { name: 'Input Background', value: '#18181b', var: 'input-background', usage: 'Form inputs' },
    ],
    feedback: [
      { name: 'Success', value: '#39ff14', var: 'success', usage: 'Success messages, confirmations' },
      { name: 'Error', value: '#ef4444', var: 'error', usage: 'Error messages, warnings' },
      { name: 'Warning', value: '#FFD700', var: 'warning', usage: 'Warning messages, alerts' },
      { name: 'Info', value: '#00f0ff', var: 'info', usage: 'Information messages' },
    ],
  };

  const typography = [
    { name: 'Display Large', class: 'text-6xl font-black', size: '60px', weight: '900', usage: 'Hero headlines' },
    { name: 'Display', class: 'text-5xl font-black', size: '48px', weight: '900', usage: 'Page titles' },
    { name: 'Heading 1', class: 'text-4xl font-bold', size: '36px', weight: '700', usage: 'Section headers' },
    { name: 'Heading 2', class: 'text-3xl font-bold', size: '30px', weight: '700', usage: 'Subsection headers' },
    { name: 'Heading 3', class: 'text-2xl font-bold', size: '24px', weight: '700', usage: 'Card titles' },
    { name: 'Heading 4', class: 'text-xl font-bold', size: '20px', weight: '700', usage: 'Component headers' },
    { name: 'Body Large', class: 'text-lg', size: '18px', weight: '400', usage: 'Large body text' },
    { name: 'Body', class: 'text-base', size: '16px', weight: '400', usage: 'Default body text' },
    { name: 'Body Small', class: 'text-sm', size: '14px', weight: '400', usage: 'Secondary text' },
    { name: 'Caption', class: 'text-xs', size: '12px', weight: '400', usage: 'Captions, labels' },
  ];

  const spacing = [
    { name: 'xs', value: '4px', class: 'p-1', usage: 'Minimal padding' },
    { name: 'sm', value: '8px', class: 'p-2', usage: 'Small spacing' },
    { name: 'md', value: '16px', class: 'p-4', usage: 'Default spacing' },
    { name: 'lg', value: '24px', class: 'p-6', usage: 'Large spacing' },
    { name: 'xl', value: '32px', class: 'p-8', usage: 'Extra large spacing' },
    { name: '2xl', value: '48px', class: 'p-12', usage: 'Section spacing' },
    { name: '3xl', value: '64px', class: 'p-16', usage: 'Page spacing' },
  ];

  const borderRadius = [
    { name: 'sm', value: '8px', class: 'rounded-lg', usage: 'Small components' },
    { name: 'md', value: '12px', class: 'rounded-xl', usage: 'Cards, buttons' },
    { name: 'lg', value: '16px', class: 'rounded-2xl', usage: 'Large cards' },
    { name: 'full', value: '9999px', class: 'rounded-full', usage: 'Pills, avatars' },
  ];

  const shadows = [
    { name: 'sm', value: '0 1px 2px rgba(0,0,0,0.05)', class: 'shadow-sm', usage: 'Subtle elevation' },
    { name: 'md', value: '0 4px 6px rgba(0,0,0,0.1)', class: 'shadow-md', usage: 'Cards' },
    { name: 'lg', value: '0 10px 15px rgba(0,0,0,0.1)', class: 'shadow-lg', usage: 'Modals' },
    { name: 'xl', value: '0 20px 25px rgba(0,0,0,0.15)', class: 'shadow-xl', usage: 'Popups' },
    { name: 'neon', value: '0 0 20px rgba(0,240,255,0.3)', class: 'neon-glow', usage: 'Neon effects' },
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12 border-b border-border">
          <h1 className="text-5xl font-black text-foreground mb-4">
            Turfo Design System
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete design tokens, components, and guidelines for the Turfo platform
          </p>
        </div>

        {/* Color System */}
        <section className="py-12 border-b border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Color System</h2>
          
          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4">Primary Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {colors.primary.map((color) => (
                <div key={color.name} className="glass-card border border-border rounded-2xl p-6">
                  <div 
                    className="w-full h-32 rounded-xl mb-4 cursor-pointer hover-scale"
                    style={{ backgroundColor: color.value }}
                    onClick={() => copyToClipboard(color.value, color.name)}
                  />
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{color.name}</h4>
                    <button
                      onClick={() => copyToClipboard(color.value, color.name)}
                      className="p-2 rounded-lg glass-card border border-border hover-neon"
                    >
                      {copiedColor === color.name ? (
                        <Check className="w-4 h-4 text-[#39ff14]" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{color.value}</p>
                  <p className="text-xs text-muted-foreground">--{color.var}</p>
                  <p className="text-xs text-muted-foreground mt-2">{color.usage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accent Colors */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4">Accent Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {colors.accent.map((color) => (
                <div key={color.name} className="glass-card border border-border rounded-2xl p-6">
                  <div 
                    className="w-full h-32 rounded-xl mb-4 cursor-pointer hover-scale"
                    style={{ backgroundColor: color.value }}
                    onClick={() => copyToClipboard(color.value, color.name)}
                  />
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{color.name}</h4>
                    <button
                      onClick={() => copyToClipboard(color.value, color.name)}
                      className="p-2 rounded-lg glass-card border border-border hover-neon"
                    >
                      {copiedColor === color.name ? (
                        <Check className="w-4 h-4 text-[#39ff14]" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{color.value}</p>
                  <p className="text-xs text-muted-foreground">--{color.var}</p>
                  <p className="text-xs text-muted-foreground mt-2">{color.usage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4">Neutral Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {colors.neutral.map((color) => (
                <div key={color.name} className="glass-card border border-border rounded-2xl p-6">
                  <div 
                    className="w-full h-32 rounded-xl mb-4 cursor-pointer hover-scale border border-border"
                    style={{ backgroundColor: color.value }}
                    onClick={() => copyToClipboard(color.value, color.name)}
                  />
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{color.name}</h4>
                    <button
                      onClick={() => copyToClipboard(color.value, color.name)}
                      className="p-2 rounded-lg glass-card border border-border hover-neon"
                    >
                      {copiedColor === color.name ? (
                        <Check className="w-4 h-4 text-[#39ff14]" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{color.value}</p>
                  <p className="text-xs text-muted-foreground">--{color.var}</p>
                  <p className="text-xs text-muted-foreground mt-2">{color.usage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback Colors */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Feedback Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {colors.feedback.map((color) => (
                <div key={color.name} className="glass-card border border-border rounded-2xl p-6">
                  <div 
                    className="w-full h-32 rounded-xl mb-4 cursor-pointer hover-scale"
                    style={{ backgroundColor: color.value }}
                    onClick={() => copyToClipboard(color.value, color.name)}
                  />
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{color.name}</h4>
                    <button
                      onClick={() => copyToClipboard(color.value, color.name)}
                      className="p-2 rounded-lg glass-card border border-border hover-neon"
                    >
                      {copiedColor === color.name ? (
                        <Check className="w-4 h-4 text-[#39ff14]" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{color.value}</p>
                  <p className="text-xs text-muted-foreground">--{color.var}</p>
                  <p className="text-xs text-muted-foreground mt-2">{color.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="py-12 border-b border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Typography</h2>
          <div className="space-y-6">
            {typography.map((type) => (
              <div key={type.name} className="glass-card border border-border rounded-2xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <p className={`${type.class} text-foreground mb-4`}>
                      The quick brown fox jumps
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Name:</span>
                      <span className="text-foreground font-semibold">{type.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="text-foreground font-mono">{type.size}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Weight:</span>
                      <span className="text-foreground font-mono">{type.weight}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Class:</span>
                      <span className="text-foreground font-mono text-xs">{type.class}</span>
                    </div>
                    <div className="text-sm pt-2 border-t border-border">
                      <span className="text-muted-foreground">Usage: </span>
                      <span className="text-foreground">{type.usage}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section className="py-12 border-b border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Spacing Scale</h2>
          <div className="space-y-4">
            {spacing.map((space) => (
              <div key={space.name} className="glass-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-6">
                  <div className="w-32">
                    <p className="text-sm font-semibold text-foreground">{space.name}</p>
                    <p className="text-xs text-muted-foreground">{space.value}</p>
                    <p className="text-xs text-muted-foreground font-mono">{space.class}</p>
                  </div>
                  <div className="flex-1">
                    <div className="bg-primary/20 rounded-lg" style={{ width: space.value, height: '40px' }} />
                  </div>
                  <div className="w-48 text-right">
                    <p className="text-sm text-muted-foreground">{space.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section className="py-12 border-b border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8">Border Radius</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {borderRadius.map((radius) => (
              <div key={radius.name} className="glass-card border border-border rounded-2xl p-6">
                <div 
                  className={`w-full h-32 bg-gradient-to-br from-primary to-accent mb-4 ${radius.class}`}
                />
                <p className="font-semibold text-foreground mb-1">{radius.name}</p>
                <p className="text-sm text-muted-foreground mb-1">{radius.value}</p>
                <p className="text-xs text-muted-foreground font-mono mb-2">{radius.class}</p>
                <p className="text-xs text-muted-foreground">{radius.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Shadow Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shadows.map((shadow) => (
              <div key={shadow.name} className="glass-card border border-border rounded-2xl p-6">
                <div 
                  className={`w-full h-32 bg-gradient-to-br from-primary to-accent rounded-xl mb-4 ${shadow.class}`}
                />
                <p className="font-semibold text-foreground mb-1">{shadow.name}</p>
                <p className="text-xs text-muted-foreground font-mono mb-2">{shadow.class}</p>
                <p className="text-xs text-muted-foreground">{shadow.usage}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
